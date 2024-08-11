"use client";

import { FC } from "react";
import { Bell, HelpCircle, Menu, Search, Settings } from "lucide-react";
import { Account } from "./account-nav";
import { LanguageSwitcher } from "./language-switcher";
import Image from "next/image";
import { CollapseSidebar } from "./collapse-sidebar";
import { NAVLINKS } from "~/lib/constants";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";

type Props = {
  locale: string;
};

export const Navbar: FC<Props> = ({ locale }) => {
  const pathname = usePathname();
  return (
    <div className="h-20 flex items-center justify-between w-full px-10 py-6 border-b">
      <div className="flex items-center space-x-5">
        <div className="hidden md:block">
          <CollapseSidebar />
        </div>
        <div className="md:hidden block">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={200}
                  height={200}
                />
              </SheetHeader>
              <div className="space-y-5 flex flex-col items-start mt-10">
                {NAVLINKS.map((link) => {
                  const isActive = pathname === `/${locale}${link.href}`;
                  const LinkIcon = link.icon;
                  return (
                    <Link
                      key={link.title}
                      href={`/${locale}${link.href}`}
                      className={cn(
                        "flex justify-start items-center gap-3 w-full hover:bg-secondary border-transparent border p-2 rounded-md hover:border-border hover:border transition-all duration-200 ease-in-out",
                        isActive &&
                          "text-primary font-semibold border-border bg-secondary",
                      )}
                    >
                      <LinkIcon className="h-6 w-6" />
                      <p className="text-sm  md:block transition-all duration-200 ">
                        {link.title}
                      </p>
                    </Link>
                  );
                })}
                <Button className="w-full space-x-3" size="icon">
                  <LogOut className="h-4 w-4" />
                  <p>Logout</p>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
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
