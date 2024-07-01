'use client'
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-gray-800 to-black text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={Logo} alt="logo" width={100} height={100} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl font-bold"
        >
          Customizing shadcn/ui library
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl"
        >
          Powered by Rudra Services
        </motion.p>
        <div className="flex flex-col gap-2"></div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-white text-black px-4 py-2 shadow-lg rounded-md mt-4"
        >
          <Link href="/dropdown">Dropdown Menu</Link>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-white text-black px-4 py-2 shadow-lg rounded-md mt-4"
        >
          <Link href="/alert">Alert</Link>
        </motion.button>
      </div>
    </>
  );
};
export default Home;
