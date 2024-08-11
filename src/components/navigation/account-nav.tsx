"use client";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import type { FC } from "react";
import {
  Archive,
  ArrowLeftRight,
  Bot,
  Code,
  Gem,
  Lock,
  LogOut,
  Moon,
  MoreHorizontal,
  Sun,
  User,
  Users,
} from "lucide-react";

export const Account: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://github.com/MaarcusRenieroL.png"
              alt="logo"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bot className="mr-2 h-4 w-4" />
            <span>Automations</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Code className="mr-2 h-4 w-4" />
            <span>Developers</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Archive className="mr-2 h-4 w-4" />
            <span>Archive</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Lock className="mr-2 h-4 w-4" />
            <span>Administration</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Teams</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ArrowLeftRight className="mr-2 h-4 w-4" />
            <span>Switch Account</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>User 1</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>User 2</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ArrowLeftRight className="mr-2 h-4 w-4" />
            <span>Change Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="bg-blue-500 m-2 text-white">
          <Gem className="mr-2 h-4 w-4" />
          <span>Upgrade</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="p-2 space-y-3">
          <p>Work Status</p>
          <DropdownMenuCheckboxItem>Don't Disturb</DropdownMenuCheckboxItem>
          <div className="flex items-center justify-evenly">
            <DropdownMenuCheckboxItem>On</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Off</DropdownMenuCheckboxItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <MoreHorizontal className="mr-2 h-4 w-4" />
                <span>More</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
