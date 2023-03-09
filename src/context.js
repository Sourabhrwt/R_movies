import React from "react";
import { useState, useContext } from "react";
import useFetch from "./components/useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [input, setInput] = useState("batman");
  const { loading, data: movies } = useFetch(`&s=${input}`);

  return (
    <AppContext.Provider value={{ input, setInput, movies, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
