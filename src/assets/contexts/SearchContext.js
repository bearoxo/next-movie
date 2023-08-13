import { createContext, useContext, useState, useEffect } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movies);
  }, [movies] );

  return (
    <SearchContext.Provider value={{movies, setMovies}}>
        { children }
    </SearchContext.Provider>
  );

}

const useSearchContext = () => {
  return useContext(SearchContext);
};


export { SearchContext, SearchProvider, useSearchContext };