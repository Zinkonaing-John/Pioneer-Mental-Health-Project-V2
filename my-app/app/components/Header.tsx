"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <header className="bg-white shadow sticky top-0 z-50  w-full ">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left Side: Logo + Navigation Links */}
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold text-purple-700">BLOOM</div>
            <nav className="hidden md:flex space-x-6 text-sm items-center">
              <Link
                href="/"
                className="text-gray-700 text-sm hover:text-xl transition-all duration-200 hover:text-purple-600"
              >
                Home
              </Link>
              <Link
                href="/VR"
                className="text-gray-700 text-sm hover:text-xl transition-all duration-200 hover:text-purple-600"
              >
                Services
              </Link>
              <Link
                href="/selfHelpPage"
                className="text-gray-700 text-sm hover:text-xl transition-all duration-200 hover:text-purple-600"
              >
                Resources
              </Link>
              <Link
                href="/community"
                className="text-gray-700 text-sm hover:text-xl transition-all duration-200 hover:text-purple-600"
              >
                Community
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 text-sm hover:text-xl transition-all duration-200 hover:text-purple-600"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Right Side: Search + Buttons */}
          <div className="hidden md:flex items-center text-gray-400 space-x-4">
            <div className="px-3 py-1 border border-gray-300 rounded-md text-sm flex flex-row space-x-1">
              <img
                src="icons/search.png"
                alt="Search"
                className="w-[30px] h-[20px]"
              />
              <input type="text" placeholder="Search..." />
            </div>

            <button className="text-sm text-purple-600 border border-purple-600 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white">
              <Link href="/login">Sign in</Link>
            </button>
            <button className="text-sm text-purple-600 border border-purple-600 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white">
              <Link href="/signin">Register</Link>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white px-4 py-4 space-y-2 shadow">
            <Link
              href="/"
              className="block text-gray-700 hover:text-purple-600"
            >
              Home
            </Link>
            <Link
              href="/VR"
              className="block text-gray-700 hover:text-purple-600"
            >
              Services
            </Link>
            <Link
              href="/resources"
              className="block text-gray-700 hover:text-purple-600"
            >
              Resources
            </Link>
            <Link
              href="/community"
              className="block text-gray-700 hover:text-purple-600"
            >
              Community
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-purple-600"
            >
              Blog
            </Link>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm"
            />
            <div className="flex gap-2 pt-2">
              <button className="text-sm text-purple-600 border border-purple-600 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white">
                Sign in
              </button>
              <button className="text-sm text-purple-600 border border-purple-600 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white">
                Register
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
