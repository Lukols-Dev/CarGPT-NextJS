"use client";

import Image from "next/image";
import { FC } from "react";

export const CommentCard: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-500 rounded-lg min-w-[350px] h-[200px] p-6 gap-4 snap-normal snap-start scroll-pl-6">
      <p className="text-white text-center">
        "So good! I need this right now. Congrats on the launch!"
      </p>
      <span className="w-full h-[1px] bg-gray-500"></span>
      <div>
        <p className="text-white opacity-40 text-center">Łukasz Olszewski</p>
        <p className="text-white opacity-40 text-center font-light text-sm">
          Startup Founder
        </p>
      </div>
    </div>
  );
};
