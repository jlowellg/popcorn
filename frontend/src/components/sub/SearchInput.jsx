import React from "react";
import { Input } from "../ui/input";
import DataContext from "../../context/DataContext";
import { useContext, useState, useEffect } from "react";

const SearchInput = () => {
  const { search, setSearch } = useContext(DataContext);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return <Input placeholder="Search" value={search} onChange={handleChange} />;
};

export default SearchInput;
