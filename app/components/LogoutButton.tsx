"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <Button className="text-md font-medium w-full" onClick={() => signOut()}>
      Log out
    </Button>
  );
};

export default LogoutButton;
