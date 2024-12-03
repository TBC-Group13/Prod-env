import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="hidden bg-gray-100 p-4 shadow-md lg:block">
      <nav className="mx-20">
        <ul className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/liderboard"
                className="text-blue-500 hover:text-blue-700"
              >
                Liderboard
              </Link>
            </li>
          </div>
          <div className="flex items-center space-x-4">
            <li>
              <Link to="/profile" className="text-blue-500 hover:text-blue-700">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-700"
              >
                Register
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
