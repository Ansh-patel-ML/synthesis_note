import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1f1f1f]">
      <Logo />
      <div className="flex items-center gap-x-1 text-muted-foreground md:ml-auto w-full justify-between md:justify-end">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Condition
        </Button>
      </div>
    </div>
  );
};

export default Footer;
