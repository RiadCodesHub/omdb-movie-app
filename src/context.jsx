import { createContext, useEffect, useState } from "react";

const movieContext = createContext({
    movies: [],
    page: 1,
    totalPages: 0
});

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("titanic");
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

const key = import.meta.env.VITE_OMDB_API_KEY;


const url = `http://www.omdbapi.com/?apikey=${key}`;

const fetchMovies = async (url) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
     if(data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(data.totalResults);
        setLoading(false);
        setError(false);
        } else {
            setError(data.Error);
            setLoading(false);
        }
    } catch(error) {
        console.error(error);
        setError("Failed to fetch movies. Please try again later.");
        setLoading(false);
    }

} 

useEffect(() => {
  const timeout = setTimeout(() => {
       fetchMovies(`${url}&s=${query}&page=${page}`);
   }, 600);

    return () => clearTimeout(timeout);
}, [query, page, url ]);

return (
    <movieContext.Provider value={{ movies, loading, error, query, setQuery, page, setPage, totalResults }}>
      {children}
    </movieContext.Provider>
)
}

export { movieContext, MovieProvider };
