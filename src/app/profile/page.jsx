"use client";

import Image from "next/image";
import { authClient } from "../../lib/auth-client";
import Link from "next/link";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl font-bold text-red-500">
        User Not Logged In
      </div>
    );
  }

  return (
    <div className=" bg-gradient-to-br from-green-50 to-white py-16 px-4">
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Cover */}
        <div className="h-32 bg-green-800"></div>

        {/* Profile */}
        <div className="relative flex flex-col items-center px-6 pb-10">
          <div className="-mt-16 relative w-32 h-32">
            <Image
              src={user.image || "/default-user.png"}
              alt={user.name || "User"}
              fill
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-800">{user.name}</h1>

          <p className="text-gray-500 mt-2">{user.email}</p>

          <div className="w-full mt-8 space-y-4">
            <div className="bg-gray-50 rounded-2xl p-4 border">
              <p className="text-sm text-gray-500">Full Name</p>

              <h3 className="font-semibold text-lg text-gray-800">
                {user.name}
              </h3>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 border">
              <p className="text-sm text-gray-500">Email Address</p>

              <h3 className="font-semibold text-lg text-gray-800">
                {user.email}
              </h3>
            </div>
            <Link href="/profile/update-profile">
              <button className="w-full bg-green-700 hover:bg-green-800 transition text-white py-3 rounded-2xl font-semibold">
                Update Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
