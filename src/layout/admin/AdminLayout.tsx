import { Outlet } from "react-router-dom";
import { Footer } from "../../components/user";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Sidebar from "../../components/admin/Sidebar";
import Topbar from "../../components/admin/Topbar";

const AdminLayout = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth?.isAuthenticated
  );
  console.log(isAuthenticated);
  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default AdminLayout;
