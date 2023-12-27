import React from "react";
import LogoutButton from "./LogoutButton";
import NavLinks from "./NavLinks";

const SideBar = () => {
  return (
    <section className="max-w-80 flex flex-1 flex-col justify-between bg-slate-900 h-[100vh]">
      <div className="flex flex-col py-4 px-11">
        <h1 className="text-white font-bold text-4xl">Threads</h1>

        <NavLinks />
      </div>
      <div className="p-4 w-full flex">
        <LogoutButton />
      </div>
    </section>
  );
};

export default SideBar;
