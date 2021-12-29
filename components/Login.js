import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <main className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-8 mt-6">
        <div className="border-l-4 border-yellow-500 text-white font-bold p-4">
          <h2 className="text-2xl uppercase">Enter the</h2>
          <h1 className="text-8xl uppercase">Metaverse</h1>
        </div>
        <div className="relative hover:scale-105 transition ease-in-out duration-300">
          <div className="absolute -inset-2 bg-fuchsia-700 rounded-lg blur opacity-75"></div>
          <button
            onClick={() => authenticate()}
            className="bg-yellow-500 rounded-lg p-5 font-bold relative animate-pulse"
          >
            Login into the Metaverse
          </button>
        </div>
        <div className="">
          <Image
            className="object-cover rounded-full opacity-75"
            src="https://links.papareact.com/3pi"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </main>
  );
};

export default Login;

// remember w-full helps out with items-center/justify-center with absolute
// remember objectFit and tailwind object-cover = same no difference
