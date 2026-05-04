"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ChartNoAxesCombined, History, House } from "lucide-react";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-6 flex items-center justify-between">
        <h2 className="font-bold text-3xl">
          Qurbani<span className="text-green-800">Hat</span>{" "}
        </h2>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={`${
              pathName === "/"
                ? "bg-green-800 text-white px-4 py-1.5 rounded-md flex items-center gap-2"
                : ""
            }`}
          >
            <button className="cursor-pointer flex items-center font-bold">
              Home
            </button>
          </Link>

          <Link
            href="/AllAnimals"
            className={`${
              pathName === "/AllAnimals"
                ? "bg-green-800 text-white px-4 py-1.5 rounded-md flex items-center gap-2"
                : ""
            }`}
          >
            <button className="flex items-center gap-1 font-bold cursor-pointer">
              All Animals
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
