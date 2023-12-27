import * as React from "react";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectCategory = () => {
  const { category, setCategory } = useContext(DataContext);

  const handleChange = (newValue) => {
    setCategory(newValue);
  };

  return (
    <Select value={category} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="multi">All</SelectItem>
          <SelectItem value="movie">Movies</SelectItem>
          <SelectItem value="tv">TV Shows</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
