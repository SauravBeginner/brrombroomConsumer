import React from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Logo />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              WHY MYBIZ?
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              EXPENSE MANAGEMENT
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              CASE STUDIES
            </a>
          </nav>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => navigate("/login")}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            SIGN IN / SIGN UP
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
            REQUEST DEMO
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
