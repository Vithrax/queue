"use client";

import { type FC } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "~/components/ui/button";
import Logo from "~/components/logo";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/" || pathname === "/dashboard";

  return (
    <header className="h-16 border-b">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-2">
        {!isHome && (
          <Button size="icon" onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
        )}
        <Logo />
        <ClerkLoading>
          <Loader2 className="h-5 w-5 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button>Sign in</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </nav>
    </header>
  );
};

export default Header;
