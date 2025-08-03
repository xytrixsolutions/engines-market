"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

type NavItem = {
  label: string;
  id: string;
};

interface SearchNavProps {
  navItems: NavItem[];
}

export default function SearchNav({ navItems }: SearchNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[9999] bg-gray-200 shadow-md p-2 rounded-full cursor-pointer hover:bg-gray-100"
        >
          <IoIosSearch className="h-8 w-8 text-gray-600" />
        </div>
      )}

      {isOpen && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[9999] w-64 bg-white border border-gray-200 shadow-xl rounded-xl p-4 pt-10 space-y-2 transition-all duration-300">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-2 left-2 p-1 rounded-full cursor-pointer hover:bg-gray-100"
          >
            <IoIosSearch className="h-6 w-6 text-gray-600 " />
          </div>

          {navItems.map(({ label, id }, idx) => (
            <a
              key={idx}
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-gray-800 hover:text-blue-600 cursor-pointer"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
