"use client";
import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/movies`,
        { cache: "no-store" }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }finally {
        setLoading(false);
      }
  };

//   const fetchMovies = async () => {
//     try {
//       const res = await fetch("/api/movies");
//       const data = await res.json();
//       setMovies(data);
//     } catch (err) {
//       console.error("Failed to fetch movies:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, loading, refetch: fetchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
