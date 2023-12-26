"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import React from "react";

const GithubButton = () => {
  return (
    <Button className="flex items-center justify-center gap-x-3 mt-4">
      <GithubIcon className="w-5 h-5" />
      <p className="font-medium text-md">Continue with Github</p>
    </Button>
  );
};

export default GithubButton;
