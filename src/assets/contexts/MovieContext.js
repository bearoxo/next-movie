import { createContext, useState, useEffect } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_PSTMN_MOCK_API}/new_movies/?r_date=2020-01-01`
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.data);
    } catch (error) {
      console.error("Error fetching movies:", error)
    }
  };

  return (
    <MovieContext.Provider value={{ movies }}>
        { children }
    </MovieContext.Provider>
  );

}

export { MovieContext, MovieProvider };