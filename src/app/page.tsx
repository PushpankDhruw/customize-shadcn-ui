import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-r from-gray-800 to-black text-white">
        <Image src={Logo} alt="logo" width={100} height={100} />
        <h1 className="text-2xl font-bold">customizing shadcn/ui library</h1>
        <p className=" text-xl">powerd by rudra servcies</p>
        <button className="bg-white text-black px-4 py-2 shadow-lg rounded-md mt-4">
          <Link href="/dropdown">Dropdown Menu</Link>
        </button>
      </div>
    </>
  );
};
export default Home;
