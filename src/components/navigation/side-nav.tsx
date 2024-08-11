"use client";

import { NavLinks } from "./nav-links";
import { useSidebarStore } from "~/store/index";
import { cn } from "~/lib/utils";
import { FC } from "react";

type Props = {
  locale: string;
};

export const SideNav: FC<Props> = ({ locale }) => {
  const { isCollapsed } = useSidebarStore();
  return (
    <div
      id="main-sidebar"
      className={cn(
        "md:block bg-white flex-none lg:w-64 md:border-r transition-all duration-300 ease-in-out",
        isCollapsed && "md:!w-16",
      )}
    >
      <div className={cn("flex h-[100dvh] flex-col")}>
        <div className="border-t hidden md:ml-0 md:pt-4 dark:bg-background justify-evenly fixed z-50 flex-1 md:relative md:h-full bottom-0 right-0 left-0 md:border-none md:flex flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2">
          <NavLinks locale={locale} />
        </div>
      </div>
    </div>
  );
};
