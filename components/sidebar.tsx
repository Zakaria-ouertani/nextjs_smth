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
  const buttons = [
     { href: "/", icon: <HomeIcon />, text: "Home" },
     { href: "/idk", icon: <StopwatchIcon />, text: "IDK" },
     { href: "/support", icon: <StopwatchIcon />, text: "Support" }
   ];
  if (isAdmin) {
    buttons.push({href: "/models", icon: <DashboardIcon />, text: "Models"})
  }
  return (
    <div className="flex h-screen sticky top-0">
      <div className="w-16 flex flex-col items-center justify-between pt-1">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className="flex items-center h-full">
          <div className="flex flex-col items-center justify-between gap-1 w-10 border rounded py-1">
            {buttons.map((button) => (
                <Button
                  className={`w-8 h-8 p-0 flex items-center justify-center transition-all duration-300 ${
                    pathname === button.href ? "bg-white text-black" : ""
                  } `}
                  variant="ghost"
                  asChild
                >
                  <Link href={button.href} className="flex items-center space-x-2">
                    {button.icon}
                  </Link>
                </Button>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
