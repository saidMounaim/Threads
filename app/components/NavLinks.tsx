"use client";

import { HomeIcon, ImageIcon, SearchIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-y-5 flex-col items-start mt-9">
      <li
        className={`flex flex-col py-3 px-4 rounded-lg w-full ${
          pathname == "/" ? `bg-blue-600` : ``
        }`}
      >
        <Link
          href="/"
          className="flex gap-x-2 items-center font-medium text-xl"
        >
          <HomeIcon className="w-5 h-5" />
          Home
        </Link>
      </li>
      <li
        className={`flex flex-col py-3 px-4 rounded-lg w-full ${
          pathname == "/search" ? `bg-blue-600` : ``
        }`}
      >
        <Link
          href="/search"
          className="flex gap-x-2 items-center font-medium text-xl"
        >
          <SearchIcon className="w-5 h-5" />
          Search
        </Link>
      </li>
      <li
        className={`flex flex-col py-3 px-4 rounded-lg w-full ${
          pathname == "/create" ? `bg-blue-600` : ``
        }`}
      >
        <Link
          href="/create"
          className="flex gap-x-2 items-center font-medium text-xl"
        >
          <ImageIcon className="w-5 h-5" />
          Create Thread
        </Link>
      </li>
      <li
        className={`flex flex-col py-3 px-4 rounded-lg w-full ${
          pathname == "/user/profile" ? `bg-blue-600` : ``
        }`}
      >
        <Link
          href="/user/profile"
          className="flex gap-x-2 items-center font-medium text-xl"
        >
          <User2Icon className="w-5 h-5" />
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
