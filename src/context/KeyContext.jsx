import { createContext, useState, useEffect } from "react";

const KeyContext = createContext({});

export const KeyProvider = ({ children }) => {
  const key = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjVmMjgzY2M5NGY4MjA3YTRjODYwMWQ3NWYwMzZmNSIsInN1YiI6IjY1N2VjNWYzMzIzZWJhMzY0OTg3YTk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6VsTqRQTrv_LllZfSlBiNQm_2sYM28RvgnaQq_PXeuk",
    },
  };
  return <KeyContext.Provider value={{ key }}>{children}</KeyContext.Provider>;
};

export default KeyContext;
