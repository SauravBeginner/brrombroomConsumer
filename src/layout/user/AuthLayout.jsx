import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const AuthLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 shadow-lg">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
        {/* Uncomment this if you have a Footer component */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AuthLayout;
