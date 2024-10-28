import { Link, useNavigate } from "react-router-dom";
import { Input } from "./Input";
import { useState } from "react";
import { Button } from "./Button";
import { useAuth } from "../context/AuthContext";

export const SignupForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    role: "consumer", // Default role is consumer
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(user);
      if (response) {
        // alert("Verification link has been sent to your email");
        alert("Account Created Successfully!");

        setUser({
          email: "",
          password: "",
          name: "",
          role: "",
        });
        navigate("/create-booking");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-1/2 lg:w-3/4 col-span-1 lg:col-span-2 items-center justify-center">
      <div className="px-2 md:px-12">
        <p className="text-2xl font-bold text-gray-900 md:text-4xl">Sign Up</p>
        <p className="text-xl font-bold text-gray-900 md:text-3xl pt-2">
          As a Consumer
        </p>

        <p className="mt-4 text-lg text-gray-600">
          Already have an account,{" "}
          <Link
            to="/login"
            className="text-sm font-semibold text-blue-500 underline"
          >
            click here
          </Link>
        </p>
        <form onSubmit={handleSignup} className="mt-8 space-y-4">
          <div className="grid w-full  items-center gap-1.5">
            <Input
              label="Name"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Input
              label="Email"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Input
              label="Password"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>{" "}
          {/* <div className="grid w-full  items-center gap-1.5">
            <label
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="role"
            >
              Role
            </label>
            <select
              id="role"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50   dark:focus:ring-offset-gray-900"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <option value="consumer">Consumer</option> 
              <option value="car-provider">Car Provider</option> 
            </select>
          </div> */}
          {/* <div className="grid w-full  items-center gap-1.5">
            <Input label="Phone Number" type="tel" placeholder="Phone Number" />
          </div> */}
          <Button type="submit">Signup</Button>
        </form>
      </div>
    </div>
  );
};
