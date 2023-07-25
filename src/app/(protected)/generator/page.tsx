"use client";

import Dropzone from "@/components/dropzone.component";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import ConstructionIcon from "@mui/icons-material/Construction";
import Image from "next/image";

const Generator = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin?callbackUrl=/generator");
    },
  });

  if (!session) return;

  return (
    <section className="flex w-full h-full mt-16 px-8 justify-center">
      <div className="sm:w-[400px] w-full flex flex-col gap-4 mt-24">
        <p className="text-white font-bold">1. Upload your car photo</p>
        <Dropzone />
        <p className="text-white font-bold">2. Select your color</p>
        <input
          className="bg-transparent w-48 h-24 rounded-lg"
          type="color"
          value="#6590D5"
        />
        <p className="text-white font-bold">3. Select Car Theme</p>
        <div className="gap-2 mb-6">
          <div className="flex flex-col space-y-2 items-center">
            <button className="disabled:cursor-not-allowed hover:opacity-40">
              <Image
                className="sm:w-[400px] rounded-md "
                width={400}
                height={200}
                alt="Picture of the author"
                src="/assets/image.png"
              />
            </button>
            <p className="text-white text-sm pb-2">Sport</p>
          </div>
          <div className="flex flex-col space-y-2 items-center">
            <button className="disabled:cursor-not-allowed hover:opacity-40">
              <Image
                className="sm:w-[400px] rounded-md "
                width={400}
                height={200}
                alt="Picture of the author"
                src="/assets/image.png"
              />
            </button>
            <p className="text-white text-sm pb-2">Sport</p>
          </div>
          <div className="flex flex-col space-y-2 items-center">
            <button className="disabled:cursor-not-allowed hover:opacity-40">
              <Image
                className="sm:w-[400px] rounded-md "
                width={400}
                height={200}
                alt="Picture of the author"
                src="/assets/image.png"
              />
            </button>
            <p className="text-white text-sm pb-2">Sport</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center mt-12 gap-y-4">
        <h1 className="mx-auto max-w-4xl font-display text-center text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5 hidden lg:block">
          Pimp your car in seconds
        </h1>
        <div className="flex flex-col items-center gap-y-4 sticky top-16">
          <div className="bg-gray-600 rounded-lg w-[402px] h-[312px] flex justify-center items-center">
            <ConstructionIcon />
          </div>
          <button className="flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-lg border border-indigo-600 text-white px-5 py-2 text-sm shadow-md hover:bg-indigo-500 bg-indigo-600 font-medium transition">
            Generate your car
            <span className="rounded-md p-2 text-sm bg-indigo-900">
              Cost: {0} credit
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Generator;
