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

export function FindBy() {
  return (
    <Select>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={<DividerHorizontalIcon />} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">None</SelectItem>
        <SelectItem value="favorites">Favorites</SelectItem>
        <SelectItem value="Completed">Completed</SelectItem>
        <SelectItem value="In Progress">In Progress</SelectItem>
        <SelectItem value="To Watch">To Watch</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default FindBy;
