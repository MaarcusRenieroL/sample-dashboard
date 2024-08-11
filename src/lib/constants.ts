import {
  ChartColumnDecreasing,
  Clock,
  Folder,
  Gauge,
  Heart,
  Home,
  List,
  SquareUserRound,
  Trash,
  Users,
  Archive,
  Settings,
} from "lucide-react";

export const NAVLINKS = [
  { title: "Home", href: "", icon: Home },
  { title: "Control Panel", href: "/control-panel", icon: Gauge },
  { title: "Projects", href: "/projects", icon: Folder },
  { title: "My Tasks", href: "/my-tasks", icon: List },
  { title: "Time Sheets", href: "/time-sheets", icon: Clock },
  { title: "Meeting Rooms", href: "/meeting-rooms", icon: SquareUserRound },
  { title: "Favorites", href: "/favorites", icon: Heart },
  {
    title: "Team Performance",
    href: "/team-performance",
    icon: ChartColumnDecreasing,
  },
  { title: "Archives", href: "/archives", icon: Archive },
  { title: "Trash", href: "/trash", icon: Trash },
  { title: "Team Members", href: "/team-members", icon: Users },
  { title: "Settings", href: "/settings", icon: Settings },
];
