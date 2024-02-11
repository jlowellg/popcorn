import * as React from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectStatus = () => {
  const { setItemStatus } = useContext(DataContext);

  const handleChange = (newValue) => {
    setItemStatus(newValue);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder={<DividerHorizontalIcon />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="To Watch">To Watch</SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectStatus;
