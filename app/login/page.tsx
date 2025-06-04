import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#e7f5f8] flex items-center justify-center px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        {/* Left: Mental Health Support */}
        <div className="bg-white rounded-3xl shadow-lg p-8 flex-1">
          <h2 className="text-2xl font-bold mb-4">Student Mental Health Support</h2>
          <p className="text-sm text-gray-700 mb-6">
            Your mental wellbeing matters. Our secure platform provides confidential access to support resources, counseling services, and wellness tools designed specifically for students.
          </p>

          <div className="bg-blue-100 rounded-xl p-4 mb-6">
            <p className="font-medium text-gray-800 mb-2">Need immediate help?</p>
            <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
              <FaPhoneAlt />
              <span>24/7 Crisis Helpline — 000-000-000</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <BsChatDotsFill />
              <span>Text Crisis Line — Text HOME to 000</span>
            </div>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl font-semibold">
            Emergency Support
          </button>
        </div>

        {/* Right: Login Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8 flex-1">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
            <p className="text-sm text-gray-600">Login to access your support resources</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium mb-1">Student ID or Email</label>
              <input
                type="text"
                id="studentId"
                placeholder="Enter your student ID or email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <MdOutlineRemoveRedEye className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-500" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-xl font-semibold"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span>Don’t have an account? </span>
            <a href="#" className="text-blue-500 font-medium hover:underline">Register here</a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
            <AiFillLock />
            <span>Your information is encrypted and secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
