"use client";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified, Welcome to{" "}
        <span className="underline">Synthesis Note</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium mt-5xl">
        Synthesis Note is the connected workspace where better, faster work
        happens.
      </h3>
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Synthesis Note
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
      {isLoading && (
        <div className="flex justify-center items-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Synthesis Note
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
};

export default Heading;
