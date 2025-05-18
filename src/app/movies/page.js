'use client';

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";

export default function MovieGrid() {
  const tabs = ["Latest", "Coming Soon", "Top Rated", "Recently Released"];
  const [activeTab, setActiveTab] = useState("Latest");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Convert tab name to API 'type'
  const getTypeFromTab = (tab) => {
    switch (tab) {
      case "Top Rated":
        return "top";
      case "Latest":
        return "recent";
      case "Coming Soon":
        return "coming";
      case "Recently Released":
        return "released";
      default:
        return "recent";
    }
  };

  // Fetch movies from API
  const fetchMovies = async (tab) => {
    const type = getTypeFromTab(tab);
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/filter/${type}`);

      if (!res.ok) throw new Error("Failed to fetch movies");
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      console.error(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // Load movies on mount and on tab change
  useEffect(() => {
    fetchMovies(activeTab);
  }, [activeTab]);

  return (
    <div>
      <section className="px-8 py-12 bg-black text-white min-h-screen mt-18">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-2">
            Movie Grid
          </h2>

          <div className="flex gap-6 mb-6 text-sm font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-1 transition-all ${
                  activeTab === tab
                    ? "text-pink-500 border-b-2 border-pink-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center text-gray-400">Loading movies...</div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={movie.id}/>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-8">No movies found.</div>
        )}
      </section>
    </div>
  );
}
