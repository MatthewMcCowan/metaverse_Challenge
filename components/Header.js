import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500 sticky z-50 bg-black shadow-sm border-b-2 border-pink-500 grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center p-6 ">
      <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
        <Image
          layout="fill"
          src="https://links.papareact.com/3pi"
          className="rounded-full object-cover"
        />
      </div>
      <div className="text-left lg:text-center space-y-4 col-span-4">
        <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
          <Avatar logoutOnPress />
        </div>
        <h1 className="text-3xl">Welcome to the PAPAFAM Metaverse</h1>
        <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
        <ChangeUsername />
      </div>
    </div>
  );
};

export default Header;
