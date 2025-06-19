"use client";

import Link from "next/link";
import { useState } from "react";

const CreateAccountForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center relative">
        <h2 className="text-2xl font-bold text-black mb-6">
          Create an account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-300"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
              <Link href="/emailaddress">Next</Link>
            </button>
          </div>
        </form>

        <button className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold">
          ×
        </button>
      </div>
    </div>
  );
};

export default CreateAccountForm;
