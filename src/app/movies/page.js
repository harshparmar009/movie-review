'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
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
      const res = await fetch(`/api/movies/filter/${type}`);
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
            //   <div
            //     key={index}
            //     className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow hover:scale-[1.02] transition-all"
            //   >
               
            //     <img
            //       src={movie.image}
            //       alt={movie.title}
            //       className="w-full h-48 object-cover"
            //     />
            //     <div className="p-4">
            //       <h3 className="text-lg font-semibold">{movie.title}</h3>

            //       <div className="flex items-center w-full justify-between">
            //           <p className="text-sm text-gray-400 mt-1">
            //             {movie.release}
            //           </p>
            //           <div className="mt-2 text-yellow-400">
            //             {movie.rating}/10 ⭐
            //           </div>
            //       </div>

            //       <Link href={`/review/${movie._id}`}>
            //   <button className="mt-4 text-sm text-pink-500 hover:underline">
            //     Read More →
            //   </button>
            // </Link>
            //     </div>
            //   </div>
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
