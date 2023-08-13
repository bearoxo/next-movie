import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children, moviesProps }) => {
  const [movies, setMovies] = useState(moviesProps);
  return (
    <MovieContext.Provider value={{movies}}>
        { children }
    </MovieContext.Provider>
  );
}

const useMovieContext = () => {
  return useContext(MovieContext);
};

export { MovieContext, MovieProvider, useMovieContext };