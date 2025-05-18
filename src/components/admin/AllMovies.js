"use client";

import { useEffect, useState } from "react";

export default function AllMoviesTable() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/api/movies");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p className="text-white">Loading movies...</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#1a1a1a] text-white border border-gray-700 rounded-lg">
        <thead>
          <tr className="bg-[#333] text-sm text-yellow-400">
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Genre</th>
            <th className="px-4 py-2 text-left">Rating</th>
            <th className="px-4 py-2 text-left">Release</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id} className="border-t border-gray-700 hover:bg-[#222]">
              <td className="px-4 py-2">{movie.title}</td>
              <td className="px-4 py-2">{movie.genres.join(", ")}</td>
              <td className="px-4 py-2">{movie.rating}</td>
              <td className="px-4 py-2">{movie.release}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
