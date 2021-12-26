import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  // const isAuthenticated = false;

  if (!isAuthenticated) return <Login />;

  return (
    <div className="min-h-screen ">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Metaverse Challenge</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}