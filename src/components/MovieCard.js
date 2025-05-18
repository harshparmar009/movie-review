"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CardDemo({ movie }) {
  return (
    <div className="max-w-xs w-full group/card">
      <Link
      href={`/movies/review/${movie._id}`}
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover bg-center"
        )}
        style={{
          backgroundImage: `url(${movie.image})`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          {/* <img
            height="100"
            width="100"
            alt="Avatar"
            src={movie.image}
            className="h-10 w-10 rounded-full border-2 object-cover"
          /> */}
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {movie.title}
            </p>
            <p className="text-sm text-gray-400">{movie.release}</p>
          </div>
        </div>
        <div className="text content">
          {/* <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {movie.title}
          </h1> */}
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Card with Author avatar, complete name and time to read - most
            suitable for blogs.
          </p>
        </div>
      </Link>
    </div>
  );
}
