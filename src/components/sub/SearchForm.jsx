import React from "react";
import NavBarCSS from "../../styles/NavBar.module.css";
import SelectCategory from "../sub/SelectCategory";
import { Input } from "../ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const { query, setQuery } = useContext(DataContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    {
      query.length ? navigate(`/search/${query}`) : null;
    }
  };

  return (
    <form className={`${NavBarCSS.searchForm}`} onSubmit={handleSubmit}>
      <SelectCategory />
      <Input placeholder="Search" value={query} onChange={handleChange} />
      <button type="submit">
        <MagnifyingGlassIcon className={`${NavBarCSS.searchButton}`} />
      </button>
    </form>
  );
};

export default SearchForm;
