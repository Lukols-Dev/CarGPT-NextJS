"use client";

import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-5 text-center bg-black">
      <p className="text-gray-500">
        Create by
        <a
          className="font-medium text-gray-500 underline transition-colors mx-2"
          href="https://lukols.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          lukols.com
        </a>
        (lukols.dev@gmail.com)
      </p>
    </footer>
  );
};
