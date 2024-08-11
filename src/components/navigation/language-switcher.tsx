import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export const LanugageSwitcher: FC = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] md:flex hidden">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="arabic">Arabic</SelectItem>
        <SelectItem value="english">English</SelectItem>
      </SelectContent>
    </Select>
  );
};
