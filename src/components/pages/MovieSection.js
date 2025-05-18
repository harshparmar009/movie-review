"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SliderCard from '@/components/SliderCard'
import HeroArticles from "../ArticleCard";
import CorouselDemo from '@/components/Corousel'


const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        // const res = await fetch(
        //   `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/movies`,
        //   { cache: "no-store" }
        // );
        const res = await fetch("/api/movies", { cache: "no-store" });

        
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
    
    fetchMovies();
  }, []);

      // 🔍 Sort and slice to get 5 most recent movies
  const recentMovies = [...movies]
  .sort((a, b) => {
    const yearA = parseInt(a.release); // Assumes a.release is a string like "2024"
    const yearB = parseInt(b.release);
    return yearB - yearA;
  })
  .slice(0, 6);

  const topRatedMovies = [...movies]
  .filter((movie) => movie.rating >= 6.8)
  .sort((a, b) => b.release - a.release) // Newest first
  .slice(0, 6); // Limit to top 5

  return (

   <div>
    <CorouselDemo movie={movies} loading={loading}/>

    <section className="bg-black py-12 px-6 md:px-12 text-white">
      
      <SliderCard movies={movies} loading={loading}/>
      <h2 className="text-4xl pb-2 font-bold my-8 border-b border-white/40">
         Latest Movies
      </h2>

      
      {loading ? (
          <div className="text-center text-gray-400 h-[400px]">Loading movies...</div>
        ) :<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentMovies.map((news, index) => (
         <Link
         href={`/movies/review/${news._id}`}
         key={index}
         className="relative rounded-xl overflow-hidden group hover:scale-[1.01] transition"
       >
         <img
           src={news.image}
           alt={news.title}
           className="w-full h-64 md:h-80 object-cover object-top"
         />
       
         {/* Border Effect */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff0077] opacity-0 group-hover:opacity-10 transition"></div>
       
         {/* Content Overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
           <div className="flex gap-2 items-start mb-4">
             <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white px-3 py-1 text-sm font-bold text-center rounded shadow-md">
               <div className="text-xs">{news.release}</div>
             </div>
           </div>
           <h3 className="text-lg md:text-2xl font-semibold mb-2">
             {news.title}
           </h3>
           <p className="text-sm md:text-base text-gray-300 max-w-xl line-clamp-2">
             {news.content}
           </p>
       
           {/* Not a link, just styled text since parent is already a <Link> */}
           <span className="mt-4 text-sm text-pink-500 hover:underline cursor-pointer">
             Read More →
           </span>
         </div>
       </Link>
        ))}
      </div>}
        
        <HeroArticles/>
      
      <h2 className="pb-2 text-4xl font-bold my-8 border-b border-white/40 mt-4 md:mt-8">
         Top Movies
      </h2>

      
      {loading ? (
          <div className="text-center text-gray-400 h-[400px]">Loading movies...</div>
        ) :<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topRatedMovies.map((news, index) => (
         <Link
         href={`/movies/review/${news._id}`}
         key={index}
         className="relative rounded-xl overflow-hidden group hover:scale-[1.01] transition"
       >
         <img
           src={news.image}
           alt={news.title}
           className="w-full h-64 md:h-80 object-cover object-top"
         />
       
         {/* Border Effect */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff0077] opacity-0 group-hover:opacity-10 transition"></div>
       
         {/* Content Overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
           <div className="flex gap-2 items-start mb-4">
             <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white px-3 py-1 text-sm font-bold text-center rounded shadow-md">
               <div className="text-xs">{news.release}</div>
             </div>
           </div>
           <h3 className="text-lg md:text-2xl font-semibold mb-2">
             {news.title}
           </h3>
           <p className="text-sm md:text-base text-gray-300 max-w-xl line-clamp-2">
             {news.content}
           </p>
       
           {/* Not a link, just styled text since parent is already a <Link> */}
           <span className="mt-4 text-sm text-pink-500 hover:underline cursor-pointer">
             Read More →
           </span>
         </div>
       </Link>
        ))}
      </div>}

      {/* <BlurFadeDemo movies={movies}/> */}
    </section>
   </div>
  );
};

export default HeroSection;
