"use client";

import { FC } from "react";
import { NAVLINKS } from "~/lib/constants";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "~/store";
import { LogOut } from "lucide-react";

type Props = {
  locale: string;
};

export const NavLinks: FC<Props> = ({ locale }) => {
  const pathname = usePathname();
  const { isCollapsed } = useSidebarStore();
  console.log(pathname);
  return (
    <div className="space-y-5 flex flex-col items-start">
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
            <p
              className={`${cn("hidden text-sm  md:block transition-all duration-200 ", isCollapsed && "!hidden")}`}
            >
              {link.title}
            </p>
          </Link>
        );
      })}
      {isCollapsed ? (
        <Button className="w-full" size="icon">
          <LogOut className="h-4 w-4" />
        </Button>
      ) : (
        <Button className="w-full">Log out</Button>
      )}
    </div>
  );
};
