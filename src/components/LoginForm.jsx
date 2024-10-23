import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./Input";
import { Button } from "./Button";
import { useGoogleLogin } from "@react-oauth/google";
import authService from "../appwrite/auth";
import { ID } from "appwrite";

export const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    // mobile: "",
  });
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const credential = tokenResponse?.access_token;
      console.log(tokenResponse);
      if (credential) {
        try {
          // const decodedToken = jwtDecode<any>(credential);
          // console.log("Decoded Token:", decodedToken);

          authService.loginWithGoogle();

          // Now you can access user information from decodedToken
          // For example: decodedToken.name, decodedToken.email, etc.
        } catch (error) {
          console.error("Failed to decode access token:", error);
        }
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  // const errorMesg = useSelector((state) => state.auth?.error);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // await authService.phoneLogin("+91" + credentials.mobile);
      // // Redirect or further actions after successful login
      // navigate(`/otp-verify/${ID.unique()}`);

      const response = await authService.login(credentials);
      if (response) {
        const currentUser = await authService.getCurrentUser();
        console.log("Current User:", currentUser);
        setRole(currentUser);
      }
      // if (currentUser.prefs.role === "car-provider") {
      //   navigate("/car-provider-dashboard");
      // }
      // if (currentUser.prefs.role === "consumer") {
      //   navigate("/consumer-dashboard");
      // }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle
    }
  };
  return (
    <div className="w-1/2 lg:w-3/4 col-span-1 lg:col-span-2 items-center justify-center">
      <div className="px-2 md:px-12">
        <p className="text-2xl font-bold text-gray-900 md:text-4xl">Log In </p>
        <p className="mt-4 text-lg text-gray-600">
          Don't have an account,{" "}
          <Link
            to="/signup"
            className="text-sm font-semibold text-blue-500 underline"
          >
            click here
          </Link>
        </p>
        <form onSubmit={handleLogin} className="mt-8 mb-2 space-y-4">
          <div className="grid w-full  items-center gap-1.5">
            <Input
              label="Email"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setCredentials({ ...credentials, email: e.target.value });
              }}
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Input
              label="Password"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setCredentials({ ...credentials, password: e.target.value });
              }}
            />
          </div>
          {/* <div className="grid w-full  items-center gap-1.5">
            <Input
              label="Mobile"
              type="text"
              placeholder="Mobile"
              onChange={(e) => {
                setCredentials({ ...credentials, mobile: e.target.value });
              }}
            />
          </div> */}

          <Button type="submit">Login</Button>
        </form>
        <Button
          className="bg-white !text-black hover:!text-white border"
          onClick={() => googleLogin()}
        >
          Sign in with Google 🚀
        </Button>
        {/* {errorMesg && <p className="text-sm text-red-500">{errorMesg || ""}</p>} */}
      </div>
    </div>
  );
};
