import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import AuthLayout from "./layout/user/AuthLayout";
import AuthHandle from "./layout/user/AuthHandle";
import MyBookings from "./pages/MyBookings";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./pages/Home"));

const ConsumerDashboard = React.lazy(() => import("./pages/ConsumerDashboard"));
const ProviderDashboard = React.lazy(() => import("./pages/ProviderDashboard"));

const Booking = React.lazy(() => import("./pages/Booking"));

const Signup = React.lazy(() => import("./pages/Signup"));
const Login = React.lazy(() => import("./pages/Login"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Protected Routes */}
          <Route
            element={
              <AuthHandle>
                <AuthLayout />
              </AuthHandle>
            }
          >
            {/* <Route path="/" element={<Home />} /> */}

            {/* <Route path="/consumer-dashboard" element={<ConsumerDashboard />} />
            <Route
              path="/car-provider-dashboard"
              element={<ProviderDashboard />}
            /> */}

            <Route path="/create-booking" element={<Booking />} />
            <Route path="/my-bookings" element={<MyBookings />} />
          </Route>
          {/* Catch-all route */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
