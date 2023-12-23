import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const SelectCategory = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue value="all" placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="movies">Movies</SelectItem>
          <SelectItem value="tv-shows">TV Shows</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
