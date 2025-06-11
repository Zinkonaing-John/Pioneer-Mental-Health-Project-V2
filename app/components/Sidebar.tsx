import { JSX } from "react";
import { FaChartPie, FaUser, FaSignOutAlt, FaLightbulb } from "react-icons/fa";
import Link from "next/link"; // <-- only one import statement for Link

type SidebarProps = {
  activePage: string;
  // Remove setActivePage if you don't need it anymore
};

export default function Sidebar({ activePage }: SidebarProps) {
  return (
    <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
      <div className="space-y-6">
        <h2 className="text-3xl font-serif font-bold text-black">Bloom</h2>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full bg-gray-100"
          />
        </div>

        <nav className="space-y-3">
          <NavItem
            href="#"
            icon={<FaChartPie />}
            label="Dashboard"
            active={activePage === "Dashboard"}
          />
          <NavItem
            href="/self-discovery"
            icon={<FaLightbulb />}
            label="Self-discovery"
            active={activePage === "Self-discovery"}
          />
          <NavItem
            href="/account"
            icon={<FaUser />}
            label="Account"
            active={activePage === "Account"}
          />
          <NavItem
            href="#"
            icon={<FaSignOutAlt />}
            label="Log-out"
            active={activePage === "Log-out"}
          />
        </nav>
      </div>
    </aside>
  );
}

type NavItemProps = {
  href: string;
  icon: JSX.Element;
  label: string;
  active?: boolean;
};

function NavItem({ href, icon, label, active = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer transition-all ${
        active
          ? "bg-pink-400 text-white"
          : "hover:bg-purple-500 hover:text-white text-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
