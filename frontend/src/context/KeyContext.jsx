import { createContext, useState, useEffect } from "react";

const KeyContext = createContext({});

export const KeyProvider = ({ children }) => {
  const key = {
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TMDB_API_KEY,
    },
  };
  return <KeyContext.Provider value={{ key }}>{children}</KeyContext.Provider>;
};

export default KeyContext;
