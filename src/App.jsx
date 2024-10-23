import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import AuthLayout from "./layout/user/AuthLayout";
import AuthHandle from "./layout/user/AuthHandle";

const Home = React.lazy(() => import("./pages/Home"));

const ConsumerDashboard = React.lazy(() => import("./pages/ConsumerDashboard"));
const ProviderDashboard = React.lazy(() => import("./pages/ProviderDashboard"));

const Signup = React.lazy(() => import("./pages/Signup"));
const Login = React.lazy(() => import("./pages/Login"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Suspense
        fallback={
          <div className="flex h-screen justify-center items-center">
            <h1>loading...</h1>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <AuthHandle>
                <AuthLayout />
              </AuthHandle>
            }
          >
            <Route path="/consumer-dashboard" element={<ConsumerDashboard />} />
            <Route
              path="/car-provider-dashboard"
              element={<ProviderDashboard />}
            />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
