"use client";

import Image from "next/image";
import { authClient } from "../../../lib/auth-client";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleUpdate = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    try {
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Update failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-16 px-4">
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Update Profile
        </h1>

        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28">
            <Image
              src={user?.image || "/default-user.png"}
              alt={user?.name || "User"}
              fill
              className="rounded-full object-cover border-4 border-green-700"
            />
          </div>
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block mb-2 font-semibold">Name</label>

            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              required
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Image URL</label>

            <input
              type="text"
              name="image"
              defaultValue={user?.image}
              required
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <button className="w-full bg-green-700 hover:bg-green-800 transition text-white py-3 rounded-xl font-semibold">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
