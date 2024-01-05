import * as React from "react";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function FilterBy() {
  return (
    <Select>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={<DividerHorizontalIcon />} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="movie">Movies</SelectItem>
        <SelectItem value="tv">TV Series</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default FilterBy;
