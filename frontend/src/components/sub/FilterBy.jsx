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

const FilterBy = () => {
  const { filterBy, setFilterBy } = useContext(DataContext);

  const handleChange = (newValue) => {
    setFilterBy(newValue);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={<DividerHorizontalIcon />} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="Movie">Movies</SelectItem>
        <SelectItem value="TV Series">TV Series</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterBy;
