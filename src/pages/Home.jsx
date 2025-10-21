import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  // Fetch movies based on query or show popular
  useEffect(() => {
    const fetchMovies = async () => {
      const url = query
        ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results || []);
    };

    fetchMovies();
  }, [query, apiKey]);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.search.value.trim();
    setQuery(term);
  };

  return (
    <div className="page">
      <h1 className="page-title">Browse Movies</h1>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-btn">
          🔍
        </button>
      </form>

      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="empty">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
