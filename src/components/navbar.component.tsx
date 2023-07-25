"use client";

import { FC } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import SpaIcon from "@mui/icons-material/Spa";

export const NavBar: FC = () => {
  const { data: session } = useSession();
  return (
    <header className="fixed flex flex-row justify-between items-center w-full h-16 px-8 bg-black">
      <Link href="/" className="flex space-x-2">
        <SpaIcon className="text-white" />
        <h1 className="sm:text-3xl text-xl text-white font-bold ml-2 tracking-tight">
          carGPT.io
        </h1>
      </Link>
      <nav className="flex gap-6 items-center">
        <Link href="/pricing" className="flex space-x-2 text-white">
          Pricing
        </Link>
        {session ? (
          <>
            <p className="text-white">
              Your credids:
              <span className="p-2 ml-2 bg-gray-500 rounded-lg">{0}</span>
            </p>
            <button
              className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-indigo-600 text-white px-5 py-2 text-sm shadow-md hover:bg-indigo-500 bg-indigo-600 font-medium transition"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-indigo-600 text-white px-5 py-2 text-sm shadow-md hover:bg-indigo-500 bg-indigo-600 font-medium transition"
            href="/auth/signin"
          >
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};
