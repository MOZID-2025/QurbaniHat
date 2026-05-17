"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { authClient } from "../lib/auth-client";

const Navbar = () => {
  const pathName = usePathname();

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <h2 className="font-bold text-3xl">
          Qurbani<span className="text-green-800">Hat</span>
        </h2>

        {/* Menu */}
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={`${
              pathName === "/"
                ? "bg-green-800 text-white font-bold px-4 py-2 rounded-md"
                : "font-bold"
            }`}
          >
            Home
          </Link>

          <Link
            href="/AllAnimals"
            className={`${
              pathName === "/AllAnimals"
                ? "bg-green-800 text-white font-bold px-4 py-2 rounded-md"
                : "font-bold"
            }`}
          >
            All Animals
          </Link>

          {isPending ? (
            <p>Loading...</p>
          ) : user ? (
            <div className="flex items-center gap-4">
              {/* Profile Image */}
              <div className="relative w-12 h-12">
                <Image
                  src={user.image || "/default-user.png"}
                  alt={user.name || "User"}
                  fill
                  className="rounded-full object-cover border-2 border-green-800"
                />
              </div>

              {/* User Name */}
              <span className="font-semibold uppercase">{user.name}</span>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-md font-semibold"
              >
                Logout
              </button>

              <Link
                href="/profile"
                className={`${
                  pathName === "/profile"
                    ? "bg-green-800 text-white font-bold px-4 py-2 rounded-md"
                    : "font-bold"
                }`}
              >
                Profile
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/signin">
                <button className="border border-green-800 px-4 py-2 rounded-md font-semibold hover:bg-green-50">
                  Log In
                </button>
              </Link>

              <Link href="/signup">
                <button className="bg-green-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-900">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
