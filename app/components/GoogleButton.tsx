"use client";

import { Button } from "@/components/ui/button";
import GoogleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const GoogleButton = () => {
  return (
    <Button
      onClick={() => signIn("google")}
      className="flex items-center justify-center gap-x-3 mt-4"
    >
      <Image src={GoogleIcon} className="w-5 h-5" alt="Google Icon" />
      <p className="font-medium text-md">Continue with Google</p>
    </Button>
  );
};

export default GoogleButton;
