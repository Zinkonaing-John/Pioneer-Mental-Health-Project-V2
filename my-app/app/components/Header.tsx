"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-700">MentalCare</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm items-center">
          <Link href="/" className="text-gray-700 hover:text-purple-600">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-purple-600">Services</Link>
          <Link href="/resources" className="text-gray-700 hover:text-purple-600">Resources</Link>
          <Link href="/community" className="text-gray-700 hover:text-purple-600">Community</Link>
          <Link href="/blog" className="text-gray-700 hover:text-purple-600">Blog</Link>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border border-gray-300 rounded-md text-sm"
          />
          <button className="text-sm text-purple-600">Sign in</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
            Register
          </button>
        </nav>

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
          <Link href="/" className="block text-gray-700 hover:text-purple-600">Home</Link>
          <Link href="/services" className="block text-gray-700 hover:text-purple-600">Services</Link>
          <Link href="/resources" className="block text-gray-700 hover:text-purple-600">Resources</Link>
          <Link href="/community" className="block text-gray-700 hover:text-purple-600">Community</Link>
          <Link href="/blog" className="block text-gray-700 hover:text-purple-600">Blog</Link>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm"
          />
          <div className="flex gap-2 pt-2">
            <button className="w-full text-sm text-purple-600 border border-purple-600 px-4 py-2 rounded-full">
              Sign in
            </button>
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
