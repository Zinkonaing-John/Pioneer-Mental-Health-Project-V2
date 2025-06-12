import React from "react";
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
};

type NavItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

export default function AccountPage({ activePage }: SidebarProps) {
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
      <main className="flex-1 p-10">
        <div className="flex justify-between items-start">
          <div className="flex gap-6 items-start">
            <div className="w-32 h-32 relative rounded overflow-hidden">
              <Image
                src="/images/profile.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-black">Htoi Bu</h2>
              <div className="mt-2 text-sm text-gray-700 space-y-1">
                <p>
                  <span className="font-medium">Occupation</span> - Student
                </p>
                <p>
                  <span className="font-medium">Contact</span> - 010-1234-5678
                </p>
                <p>
                  <span className="font-medium">Address</span> - Jeonju
                </p>
              </div>
              <button className="mt-4 bg-blue-300 text-white px-4 py-2 rounded-full hover:bg-blue-400">
                Edit
              </button>
            </div>
          </div>
          <Bell className="text-gray-500 w-6 h-6" />
        </div>

        {/* Achievements Section */}
        <div className="mt-10 p-6 bg-purple-100 rounded-2xl shadow-md max-w-xl">
          <h3 className="text-lg font-semibold mb-4 text-black">
            Achievement and Goals
          </h3>
          <div className="space-y-2 text-sm text-black">
            <div className="flex justify-between text-black">
              <span>Medications</span>
              <span>20 mins</span>
            </div>
            <div className="flex justify-between text-black">
              <span>Socializing with friends</span>
              <span>10 mins</span>
            </div>
            <div className="flex justify-between text-black">
              <span>Therapy Session</span>
              <span>30 mins</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl text-black">
          <div className="bg-green-200 p-6 rounded-2xl shadow-md text-center text-black">
            <p className="text-lg font-medium mb-2 text-black">Sleep</p>
            <p>Your Sleep duration today is 7 hours</p>
            <div className="mt-4">
              <p className="text-red-500 font-semibold">7 hrs</p>
            </div>
          </div>

          <div className="bg-yellow-200 p-6 rounded-2xl shadow-md text-center">
            <p className="text-lg font-medium mb-2">Walking Steps</p>
            <p>You need to walk more today</p>
            <div className="mt-4">
              <p className="text-red-500 font-semibold">→ 85%</p>
            </div>
          </div>
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
