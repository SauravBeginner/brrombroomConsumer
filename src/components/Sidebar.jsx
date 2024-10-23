import React, { useState } from "react";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside id="sidebar" className="sidebar bg-gray-100 shadow-lg w-64 h-full">
      <ul className="sidebar-nav p-4 space-y-4">
        <li className="nav-item">
          <a
            href="/"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <button
            className="nav-link flex justify-between items-center w-full text-gray-700 hover:text-blue-600"
            onClick={() => toggleSection("bankDetails")}
          >
            <span className="flex items-center space-x-2">
              <i className="bi bi-menu-button-wide"></i>
              <span>Bank Details</span>
            </span>
            <i
              className={`bi bi-chevron-down ${
                openSection === "bankDetails" ? "rotate-180" : ""
              }`}
            ></i>
          </button>
          {openSection === "bankDetails" && (
            <ul className="nav-content ml-4 mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <i className="bi bi-circle"></i>
                  <span>Details 1</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <i className="bi bi-circle"></i>
                  <span>Details 2</span>
                </a>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <button
            className="nav-link flex justify-between items-center w-full text-gray-700 hover:text-blue-600"
            onClick={() => toggleSection("listedProduct")}
          >
            <span className="flex items-center space-x-2">
              <i className="bi bi-journal-text"></i>
              <span>Listed Product</span>
            </span>
            <i
              className={`bi bi-chevron-down ${
                openSection === "listedProduct" ? "rotate-180" : ""
              }`}
            ></i>
          </button>
        </li>

        <li className="nav-item">
          <button
            className="nav-link flex justify-between items-center w-full text-gray-700 hover:text-blue-600"
            onClick={() => toggleSection("addPilot")}
          >
            <span className="flex items-center space-x-2">
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Add Pilot</span>
            </span>
            <i
              className={`bi bi-chevron-down ${
                openSection === "addPilot" ? "rotate-180" : ""
              }`}
            ></i>
          </button>
        </li>

        <li className="nav-item">
          <button
            className="nav-link flex justify-between items-center w-full text-gray-700 hover:text-blue-600"
            onClick={() => toggleSection("orderDetails")}
          >
            <span className="flex items-center space-x-2">
              <i className="bi bi-bar-chart"></i>
              <span>Order Details</span>
            </span>
            <i
              className={`bi bi-chevron-down ${
                openSection === "orderDetails" ? "rotate-180" : ""
              }`}
            ></i>
          </button>
          {openSection === "orderDetails" && (
            <ul className="nav-content ml-4 mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <i className="bi bi-circle"></i>
                  <span>Upcoming Order</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <i className="bi bi-circle"></i>
                  <span>Confirm Order</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <i className="bi bi-circle"></i>
                  <span>Raise Requirement</span>
                </a>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <button
            className="nav-link flex justify-between items-center w-full text-gray-700 hover:text-blue-600"
            onClick={() => toggleSection("language")}
          >
            <span className="flex items-center space-x-2">
              <i className="bi bi-gem"></i>
              <span>Language</span>
            </span>
            <i
              className={`bi bi-chevron-down ${
                openSection === "language" ? "rotate-180" : ""
              }`}
            ></i>
          </button>
          {openSection === "language" && (
            <ul className="nav-content ml-4 mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <i className="bi bi-circle"></i>
                  <span>Bengali</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <i className="bi bi-circle"></i>
                  <span>English</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                >
                  <i className="bi bi-circle"></i>
                  <span>Hindi</span>
                </a>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-heading text-gray-500 uppercase">Pages</li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
