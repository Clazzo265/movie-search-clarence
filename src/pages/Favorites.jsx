import { useState } from "react";
import MovieCard from "../components/MovieCard.jsx";

function Favorites() {
  const [favorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  return (
    <div className="page">
      <h1 className="page-title">My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="empty">No favorites yet.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
