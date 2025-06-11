import Image from "next/image";
import Link from "next/link";
import React from "react";

type RoleCardProps = {
  label: string;
  image: string;
  href: string;
  isActive?: boolean;
};

export const RoleCard: React.FC<RoleCardProps> = ({
  label,
  image,
  href,
  isActive,
}) => {
  return (
    <Link href={href}>
      <div
        className={`
            flex items-center rounded-2xl border cursor-pointer transition-shadow transition-colors duration-300
            w-80 h-28
            ${isActive ? "bg-indigo-600 text-white border-indigo-800 shadow-md" : "bg-[#fbfbf5] text-black border-red-200"}
            hover:bg-purple-600 hover:text-white hover:border-purple-800 hover:shadow-lg
            p-4
          `}
      >
        <div className="w-24 h-24 relative rounded-xl overflow-hidden flex-shrink-0">
          <Image src={image} alt={label} layout="fill" objectFit="cover" />
        </div>
        <div className="ml-6 text-xl font-bold flex items-center">{label}</div>
      </div>
    </Link>
  );
};
