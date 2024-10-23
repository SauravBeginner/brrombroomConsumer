import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="header fixed-top flex items-center justify-between w-full bg-white shadow-md p-4">
      {/* Logo */}
      <div className="flex items-center justify-between">
        <Link to="/" className="logo flex items-center">
          <Logo />
          <span className="hidden lg:block text-xl font-semibold">
            BroomBoom B2B
          </span>
        </Link>
        <button
          className="bi bi-list text-2xl cursor-pointer lg:hidden"
          aria-label="Toggle sidebar"
        ></button>
      </div>

      {/* Search Bar */}
      <div className="search-bar hidden lg:block mx-auto">
        <form className="flex items-center" method="POST" action="#">
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
            className="form-input block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            title="Search"
            className="ml-2 text-gray-600 hover:text-gray-800"
          >
            <i className="bi bi-search text-lg"></i>
          </button>
        </form>
      </div>

      {/* Icons Navigation */}
      <nav className="header-nav ml-auto flex items-center space-x-4">
        {/* Search Icon for mobile */}
        <div className="nav-item block lg:hidden">
          <a href="#" className="nav-link nav-icon">
            <i className="bi bi-search text-2xl"></i>
          </a>
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            className="nav-link nav-icon relative"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <i className="bi bi-bell text-2xl"></i>
            <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">
              4
            </span>
          </button>
          {notificationsOpen && (
            <ul className="dropdown-menu absolute right-0 w-64 bg-white shadow-lg rounded-md py-2 mt-2 z-10">
              <li className="dropdown-header px-4 py-2">
                You have 4 new notifications
                <a href="#" className="text-blue-500 ml-2">
                  View all
                </a>
              </li>
              <hr className="my-1" />
              {/* Notification items */}
              <li className="notification-item flex items-center px-4 py-2">
                <i className="bi bi-exclamation-circle text-yellow-500 mr-2"></i>
                <div>
                  <h4 className="font-semibold">Lorem Ipsum</h4>
                  <p className="text-sm text-gray-500">30 min ago</p>
                </div>
              </li>
              <hr className="my-1" />
              {/* More items */}
              <li className="dropdown-footer px-4 py-2">
                <a href="#" className="text-blue-500">
                  Show all notifications
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Messages Dropdown */}
        <div className="relative">
          <button
            className="nav-link nav-icon relative"
            onClick={() => setMessagesOpen(!messagesOpen)}
          >
            <i className="bi bi-chat-left-text text-2xl"></i>
            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>
          {messagesOpen && (
            <ul className="dropdown-menu absolute right-0 w-64 bg-white shadow-lg rounded-md py-2 mt-2 z-10">
              <li className="dropdown-header px-4 py-2">
                You have 3 new messages
                <a href="#" className="text-blue-500 ml-2">
                  View all
                </a>
              </li>
              <hr className="my-1" />
              {/* Message items */}
              <li className="message-item flex items-center px-4 py-2">
                <img
                  src="/assets/img/messages-1.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <h4 className="font-semibold">Maria Hudson</h4>
                  <p className="text-sm text-gray-500">4 hrs ago</p>
                </div>
              </li>
              <hr className="my-1" />
              {/* More items */}
              <li className="dropdown-footer px-4 py-2">
                <a href="#" className="text-blue-500">
                  Show all messages
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="nav-profile flex items-center"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img
              src="/assets/img/Banner-Image.webp"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="ml-2 hidden md:block">K.Ch.Das</span>
          </button>
          {profileOpen && (
            <ul className="dropdown-menu absolute right-0 w-48 bg-white shadow-lg rounded-md py-2 mt-2 z-10">
              <li className="dropdown-header px-4 py-2">
                <h6>Kunal Chandra Das</h6>
                <span className="text-sm text-gray-500">
                  Fullstack Developer
                </span>
              </li>
              <hr className="my-1" />
              <li className="dropdown-item px-4 py-2">
                <a href="users-profile.html" className="flex items-center">
                  <i className="bi bi-person mr-2"></i>
                  My Profile
                </a>
              </li>
              <hr className="my-1" />
              <li className="dropdown-item px-4 py-2">
                <a href="users-profile.html" className="flex items-center">
                  <i className="bi bi-gear mr-2"></i>
                  Account Settings
                </a>
              </li>
              <hr className="my-1" />
              <li className="dropdown-item px-4 py-2">
                <a href="pages-faq.html" className="flex items-center">
                  <i className="bi bi-question-circle mr-2"></i>
                  Need Help?
                </a>
              </li>
              <hr className="my-1" />
              <li className="dropdown-item px-4 py-2">
                <a href="#" className="flex items-center">
                  <i className="bi bi-box-arrow-right mr-2"></i>
                  Sign Out
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
