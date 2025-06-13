"use client";

import React, { useState } from "react";
import {
  Bell,
  Search,
  LogOut,
  User,
  Lightbulb,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type SidebarProps = {
  activePage: string;
  // Remove setActivePage if you don't need it anymore
};

type NavItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

export default function SelfDiscoveryPage() {
  const [activePage, setActivePage] = useState("Self-discovery");
  return (
    <div className="flex min-h-screen bg-[#E4F5F8]">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 shadow-md rounded-r-2xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-serif font-semibold">Bloom</h1>
          <button className="text-xl">&times;</button>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full bg-gray-100 pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <nav className="space-y-3">
          <NavItem
            href="/dashboard"
            icon={<LayoutDashboard />}
            label="Dashboard"
            active={activePage === "Dashboard"}
          />
          <NavItem
            href="/self-discovery"
            icon={<Lightbulb />}
            label="Self-discovery"
            active={activePage === "Self-discovery"}
          />
          <NavItem
            href="/account"
            icon={<User />}
            label="Account"
            active={activePage === "Account"}
          />
          <NavItem
            href="/logout"
            icon={<LogOut />}
            label="Log-out"
            active={activePage === "Log-out"}
          />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-8">
        <div className="flex justify-between items-start">
          <div className="flex items-center justify-between w-full p-6 bg-white rounded-2xl shadow-md">
            <div>
              <p className="text-sm text-black">Take a deep breath</p>
              <h2 className="text-2xl font-bold mt-1 text-black">
                Stress Less, Live Better
              </h2>
              <button className="mt-4 px-4 py-2 bg-teal-400 text-white rounded-full hover:bg-teal-500">
                Short Medication
              </button>
            </div>
            <Image
              src="/calm-woman.png" // Replace with correct image path
              alt="Calm Woman"
              width={150}
              height={150}
            />
          </div>
          <Bell className="text-gray-500 w-6 h-6 ml-4 mt-2" />
        </div>

        <div className="bg-green-200 p-6 rounded-2xl shadow-md max-w-xl">
          <h3 className="text-xl font-bold text-blue-700">Self Check-up</h3>
          <p className="mt-2 text-sm text-black">
            Check your condition by answering these questions
          </p>
          <div className="w-full h-1 bg-blue-400 my-4"></div>
          <p className="text-sm text-black">3/10 answered</p>
          <button className="mt-4 px-6 py-2 bg-white  rounded-full shadow text-black font-medium flex items-center gap-2">
            Continue <span className="text-lg">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-blue-200 p-6 rounded-2xl shadow-md">
            <h4 className="text-lg font-medium mb-4 text-white">Daily Tasks</h4>
            <ul className="space-y-2 text-white ">
              {[
                "Wake up at 6",
                "Read a book",
                "4 bottle of water a day",
                "Go for a walk",
              ].map((task, index) => (
                <li key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked={task === "Go for a walk"}
                  />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-pink-300 p-6 rounded-2xl shadow-md">
            <h4 className="text-lg font-medium mb-2">VR Therapy Section</h4>
            <p>Way to express my feelings more clearly</p>
            <button className="text-right mt-4 text-xl">→</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md max-w-2xl">
          <h4 className="text-lg font-bold text-blue-800 mb-2">
            Take Your MBTI Test
          </h4>
          <p className="text-sm font-medium mb-1 text-black">Why It Matters:</p>
          <p className="text-sm text-black">
            MBTI insights can support personal growth, emotional awareness, and
            how you relate to others.
          </p>
        </div>
      </main>
    </div>
  );
}

function NavItem({ href, icon, label, active = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer transition-all ${
        active
          ? "hover:bg-purple-500 hover:text-white text-gray-700"
          : "hover:bg-purple-500 hover:text-white text-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
