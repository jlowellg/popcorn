import * as React from "react";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectStatus = () => {
  const { category, setCategory } = useContext(DataContext);

  const handleChange = (newValue) => {
    setCategory(newValue);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder={<DividerHorizontalIcon />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="toWatch">To Watch</SelectItem>
          <SelectItem value="inProgress">In Progress</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectStatus;
