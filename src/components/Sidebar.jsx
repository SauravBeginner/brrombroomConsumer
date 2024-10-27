import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    { path: "/create-booking", label: "Create Bookings", icon: "bi-person" },
    { path: "/my-bookings", label: "My Bookings", icon: "bi-question-circle" },
    {
      path: "/ongoing-bookings",
      label: "Ongoing Bookings",
      icon: "bi-envelope",
    },
    { path: "/past-bookings", label: "Past Bookings", icon: "bi-card-list" },
    {
      path: "/rejected-bookings",
      label: "Rejected Bookings",
      icon: "bi-box-arrow-in-right",
    },
  ];
  return (
    <aside id="sidebar" className="sidebar bg-gray-100 shadow-lg w-64 h-full">
      <li className="nav-heading text-gray-500 uppercase">Pages</li>

      <ul className="sidebar-nav p-4 space-y-4">
        {sidebarLinks.map(({ path, label, icon }) => (
          <li className="nav-item" key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "nav-link flex items-center space-x-2 font-bold bg-blue-600 text-white shadow-lg rounded-md p-2"
                  : "nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600 p-2"
              }
            >
              <i className={`bi ${icon}`}></i>
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
