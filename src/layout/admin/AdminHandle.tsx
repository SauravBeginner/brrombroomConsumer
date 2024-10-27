import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchUserDetails } from "../../redux/authSlice";

interface AdminHandleProps {
  children: React.ReactNode;
}
const AdminHandle = ({ children }: AdminHandleProps) => {
  const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserDetails()).then(() => {
      // if (
      //   window.location.pathname === "/login" ||
      //   window.location.pathname === "/signup"
      // ) {
      //   navigate("/", { replace: true });
      // }
    });
  }, [dispatch]);

  return <>{children}</>;
};

export default AdminHandle;
