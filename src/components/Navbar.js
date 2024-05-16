import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/signup" className="text-white mr-4">Signup</Link>
        <Link to="/login" className="text-white mr-4">Login</Link>
        <Link to="/dashboard" className="text-white">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;