import { createContext, useContext, useState, useEffect } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    handleSearch();
  }, [searchQuery] );

  const handleSearch = async () => {
    try {
      console.log("searchQuery", searchQuery);
      const response = await fetch(searchQuery);
      if (!response) {
        throw new Error("Failed to fetch data.")
      }
      const data = await response.json();
      setMovies(data.data);
      console.log("handleSearch ended");
    } catch (error) {
      console.error("Error fetching movies:", error.message)
    }
  };

  const updateSearchQuery = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  const value = { movies, startDate, setStartDate, searchQuery, setSearchQuery, updateSearchQuery }
  
  return (
    <SearchContext.Provider value={value}>
        { children }
    </SearchContext.Provider>
  );

}

const useSearchContext = () => {
  return useContext(SearchContext);
};

export { SearchContext, SearchProvider, useSearchContext };