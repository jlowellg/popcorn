import * as React from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FindBy = () => {
  const { setFindBy } = useContext(DataContext);

  const handleChange = (newValue) => {
    setFindBy(newValue);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={<DividerHorizontalIcon />} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="favorites">Favorites</SelectItem>
        <SelectItem value="To Watch">To Watch</SelectItem>
        <SelectItem value="In Progress">In Progress</SelectItem>
        <SelectItem value="Completed">Completed</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FindBy;
