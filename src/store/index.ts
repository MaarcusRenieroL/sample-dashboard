import { create } from "zustand";

// navbar state
type SideBarState = {
  isCollapsed: Boolean;
  setCollapsed: (value: boolean) => void;
};
export const useSidebarStore = create<SideBarState>((set) => ({
  isCollapsed: false,
  setCollapsed: (value) => set({ isCollapsed: value }),
}));
