import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div>{/* Left side content if needed */}</div>

      <div className="flex gap-4">
        <Link href="/sign-in">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Sign In
          </button>
        </Link>
        <Link href="/sign-up">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
