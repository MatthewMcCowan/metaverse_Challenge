import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <main className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
        />
        <button
          onClick={() => authenticate()}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login into the Metaverse
        </button>
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
