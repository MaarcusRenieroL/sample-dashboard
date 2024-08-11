"use client";

import { Button } from "~/components/ui/button";
import { useSidebarStore } from "~/store/index";
import { Menu } from "lucide-react";

export function CollapseSidebar() {
  const { isCollapsed, setCollapsed } = useSidebarStore();

  return (
    <Button
      onClick={() => setCollapsed(!isCollapsed)}
      variant="outline"
      size="icon"
    >
      <Menu className={`size-5 ${isCollapsed && "rotate-180"}`} />
    </Button>
  );
}
