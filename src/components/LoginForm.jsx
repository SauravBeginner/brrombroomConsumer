import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./Input";
import { Button } from "./Button";
import authService from "../appwrite/auth";
import { ID } from "appwrite";
import { useAuth } from "../context/AuthContext";

export const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  // const [role, setRole] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials);
      if (response) {
        // const currentUser = await authService.getCurrentUser();
        console.log("response:", response);
        // setRole(currentUser);

        navigate("/create-booking");
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle
    }
  };
  return (
    <div className="w-1/2 lg:w-3/4 col-span-1 lg:col-span-2 items-center justify-center">
      <div className="px-2 md:px-12">
        <p className="text-2xl font-bold text-gray-900 md:text-4xl">Log In </p>
        <p className="text-xl font-bold text-gray-900 md:text-3xl pt-2">
          As a Consumer
        </p>
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
        {/* <Button
          className="bg-white !text-black hover:!text-white border"
          onClick={() => googleLogin()}
        >
          Sign in with Google 🚀
        </Button> */}
        {/* {errorMesg && <p className="text-sm text-red-500">{errorMesg || ""}</p>} */}
      </div>
    </div>
  );
};
