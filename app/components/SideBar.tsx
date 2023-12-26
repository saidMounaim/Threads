import { HomeIcon, ImageIcon, SearchIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

const SideBar = () => {
  return (
    <section className="max-w-80 flex flex-1 flex-col justify-between bg-slate-900 h-[100vh]">
      <div className="flex flex-col py-4 px-11">
        <h1 className="text-white font-bold text-4xl">Threads</h1>

        <ul className="flex gap-y-5 flex-col items-start mt-9">
          <li className="flex flex-col bg-blue-600 py-3 px-4 rounded-lg w-full">
            <Link
              href="/"
              className="flex gap-x-2 items-center font-medium text-xl"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
          </li>
          <li className="flex flex-col py-3 px-4 rounded-lg w-full">
            <Link
              href="/search"
              className="flex gap-x-2 items-center font-medium text-xl"
            >
              <SearchIcon className="w-5 h-5" />
              Search
            </Link>
          </li>
          <li className="flex flex-col py-3 px-4 rounded-lg w-full">
            <Link
              href="/create"
              className="flex gap-x-2 items-center font-medium text-xl"
            >
              <ImageIcon className="w-5 h-5" />
              Create Thread
            </Link>
          </li>
          <li className="flex flex-col py-3 px-4 rounded-lg w-full">
            <Link
              href="/"
              className="flex gap-x-2 items-center font-medium text-xl"
            >
              <User2Icon className="w-5 h-5" />
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-4 w-full flex">
        <LogoutButton />
      </div>
    </section>
  );
};

export default SideBar;
