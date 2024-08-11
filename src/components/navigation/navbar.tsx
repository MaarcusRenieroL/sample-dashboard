"use client";

import { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "../ui/button";
import { Bell, HelpCircle, MenuIcon, Search, Settings } from "lucide-react";
import { Account } from "./account-nav";
import { LanguageSwitcher } from "./language-switcher";
import { NAVLINKS } from "~/lib/constants";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar: FC = () => {
  const pathname = usePathname();
  return (
    <div className="h-20 flex items-center justify-between w-full px-10 py-6 border-b">
      <div className="flex items-center space-x-5">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col justify-between h-full"
          >
            <div>
              <SheetHeader>
                <SheetTitle>Dashboard</SheetTitle>
              </SheetHeader>
              <div className="space-y-5 flex flex-col items-start mt-10">
                {NAVLINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className={cn(
                        "flex justify-start items-center gap-3 w-full hover:bg-secondary border-transparent border py-2 px-4 rounded-md hover:border-border hover:border transition-all duration-200 ease-in-out",
                        isActive &&
                          "text-primary font-semibold border-border bg-secondary",
                      )}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <SheetFooter>
              <Button className="w-full">Log out</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
      </div>
      <div className="flex items-center justify-end space-x-5">
        <div className="hidden md:flex items-center space-x-5">
          <Search className="h-6 w-6" />
          <Bell className="h-6 w-6" />
          <Settings className="h-6 w-6" />
          <HelpCircle className="h-6 w-6" />
        </div>
        <LanguageSwitcher />
        <Account name="name" email="email" />
      </div>
    </div>
  );
};
