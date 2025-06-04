'use client'; // for app directory — remove if using pages directory

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function CreateAccount() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const passwordsMatch = password !== '' && password === confirmPassword;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = () => {
    // Handle next step (e.g., submit to API or route to next page)
    console.log('Password Set:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaf6f8]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-black">×</button>

        <h1 className="text-2xl text-black font-bold">Create an account</h1>
        <p className="text-sm text-gray-600 mb-6">Let's get started!</p>

        <div className="space-y-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md px-4 py-2 focus:outline-none text-black focus:ring-2 focus:ring-blue-400"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none text-black focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="mt-4 text-black text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Log in
          </a>
        </div>

        <button
          className={`mt-6 w-full py-2 rounded-md text-white font-semibold ${
            passwordsMatch ? 'bg-[#0ea5e9] hover:bg-[#0284c7]' : 'bg-gray-400 cursor-not-allowed'
          }`}
          onClick={handleNext}
          disabled={!passwordsMatch}
        >
          <Link href='/componentss'>Next</Link>
        </button>
      </div>
    </div>
  );
}
