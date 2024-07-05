"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon, DashboardIcon, StopwatchIcon} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { SignedIn, UserButton} from "@clerk/nextjs";

interface SidebarProps {
  isAdmin: boolean;
}
export default function Sidebar({ isAdmin }: SidebarProps) {
  const pathname = usePathname();
  return (
    <div className="flex h-screen sticky top-0">
      <div className="w-16 flex flex-col items-center justify-between pt-1">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className="flex items-center h-full">
          <div className="flex flex-col items-center justify-between gap-1 w-10 border rounded py-1">
            <Button
              className={`w-8 h-8 p-0 ${ pathname === "/" ? "bg-white text-black" : "" }`}
              variant="ghost"
              asChild
            >
              <Link href="/">
                <HomeIcon />
              </Link>
            </Button>
            <Button
              className={`w-8 h-8 p-0 ${ pathname === "/idk" ? "bg-white text-black" : "" }`}
              variant="ghost"
              asChild
            >
              <Link href="/idk">
                <StopwatchIcon />
              </Link>
            </Button>
            <Button
              className={`w-8 h-8 p-0 ${ pathname === "/support" ? "bg-white text-black" : "" }`}
              variant="ghost"
              asChild
            >
              <Link href="/support">
                <StopwatchIcon />
              </Link>
            </Button>
            {
              isAdmin && 
              <Button
                className={`w-8 h-8 p-0 ${ pathname === "/models" ? "bg-white text-black" : "" }`}
                variant="ghost"
                asChild
              >
                <Link href="/models">
                  <DashboardIcon/>
                </Link>
              </Button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
