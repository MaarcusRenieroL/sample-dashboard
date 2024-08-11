"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/components/ui/select";

export const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };

  return (
    <Select
      onValueChange={onSelectChange}
      defaultValue={localeActive}
      disabled={isPending}
    >
      <SelectTrigger className="bg-transparent w-fit">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">
          <Image
            src="/assets/arabic.png"
            alt="english"
            width={40}
            height={40}
          />
        </SelectItem>
        <SelectItem value="en">
          <Image
            src="/assets/english.png"
            alt="english"
            width={50}
            height={50}
          />
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
