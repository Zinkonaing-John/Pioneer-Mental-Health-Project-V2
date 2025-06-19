"use client";

import { FC } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const SignupModal: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center relative">
        <h2 className="text-2xl font-bold text-black mb-6">Sign Up</h2>

        <button className="flex items-center w-full mb-3 px-4 py-2 border rounded-full hover:bg-gray-100">
          <FaGoogle className="mr-3 text-red-500" />
          <span className="flex-grow text-sm font-medium text-gray-700 text-left">
            Continue with Google
          </span>
        </button>

        <button className="flex items-center w-full mb-3 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          <FaFacebookF className="mr-3" />
          <span className="flex-grow text-sm font-medium text-left">
            Continue with Facebook
          </span>
        </button>

        <button className="flex items-center w-full mb-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900">
          <FaApple className="mr-3" />
          <span className="flex-grow text-sm font-medium text-left">
            Continue with Apple
          </span>
        </button>

        <p className="text-sm text-gray-600">
          <strong>Already have an account?</strong>{" "}
          <a href="/CreateAccount" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>

        <button className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold">
          ×
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
