import * as React from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const OrderBy = () => {
  const { setOrderBy } = useContext(DataContext);

  const handleChange = (newValue) => {
    setOrderBy(newValue);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Date Added" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="dateAdded">Date Added</SelectItem>
        <SelectItem value="myRating">My Rating</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default OrderBy;
