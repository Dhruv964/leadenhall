"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCompanyStore } from "@/store/newt";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

export function AccountSwitcher() {
  const { currCompany, setCurrCompany, allCompanies } = useCompanyStore();

  const handleCompanyChange = (idx: number) => {
    setCurrCompany(idx);
  };

  return (
    <Select
      defaultValue={allCompanies[currCompany]?.company_name}
      onValueChange={(e: any) => {
        handleCompanyChange(e);
      }}
    >
      <SelectTrigger
        className={cn(
          "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
          true &&
            "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
        )}
        aria-label="Select companies"
      >
        <SelectValue>
          <HiOutlineSwitchHorizontal className="w-5 h-5 text-gray-500" />
          <span className={cn("ml-2", true && "hidden")}>
            {/* Accessing the company name using the selected index */}
            {allCompanies[currCompany]?.company_name}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {allCompanies.map((comp: any, idx: number) => (
          <SelectItem key={idx} value={String(idx)}>
            <div
              className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground"
              onClick={() => handleCompanyChange(idx)}
            >
              {comp.company_name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
