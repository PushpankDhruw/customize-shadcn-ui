"use client";

import React from "react";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

const BackHome: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <button
      onClick={handleGoHome}
      className="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700 transition"
    >
      <Home className="h-5 w-5" />
    </button>
  );
};

export default BackHome;
