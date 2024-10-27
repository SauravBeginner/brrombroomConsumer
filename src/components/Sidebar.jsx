import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  // const toggleSection = (section) => {
  //   setOpenSection(openSection === section ? null : section);
  // };

  return (
    <aside id="sidebar" className="sidebar bg-gray-100 shadow-lg w-64 h-full">
      <ul className="sidebar-nav p-4 space-y-4">
        <li className="nav-heading text-gray-500 uppercase">Pages</li>

        <li className="nav-item">
          <Link
            to="/create-booking"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-person"></i>
            <span>Create Bookings</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/my-bookings"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-question-circle"></i>
            <span>My Bookings</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/ongoing-bookings"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-envelope"></i>
            <span>Ongoing Bookings</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/past-bookings"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-card-list"></i>
            <span>Past Bookings</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/rejected-bookings"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Rejected Bookings</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
