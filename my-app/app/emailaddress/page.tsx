"use client";

import Link from "next/link";
import { useState } from "react";

const EmailSignupForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    // You can navigate to next step or handle API call here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center relative">
        <h2 className="text-2xl font-bold text-black mb-2">
          Create an account
        </h2>
        <p className="mb-6 text-gray-600">Let's get started!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-300"
            required
          />

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              <strong>Already have an account?</strong>{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
            <button
              type="submit"
              className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700"
            >
              <Link href="/firstcode">Next</Link>
            </button>
          </div>
        </form>

        <button
          type="button"
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default EmailSignupForm;
