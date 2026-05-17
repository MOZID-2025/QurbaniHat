"use client";

import React from "react";
import { authClient } from "../lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SocialLogin = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error("Google login failed!");
      return;
    }

    toast.success("Login successful!");

    router.push("/");
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-green-700 text-white px-4 py-2 rounded-xl"
    >
      Login with Google
    </button>
  );
};

export default SocialLogin;
