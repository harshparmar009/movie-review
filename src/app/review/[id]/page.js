import React from "react";

const getMovieById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/movies/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  return res.json();
};

const ReviewPage = async ({ params }) => {
  const { id } = await params;
  const movie = await getMovieById(id);

  
  const getYoutubeEmbedURL = (url) => {
    try {
      const parsedUrl = new URL(url);
  
      // Standard YouTube link
      if (parsedUrl.hostname.includes("youtube.com")) {
        const videoId = parsedUrl.searchParams.get("v");
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }
  
      // Shortened youtu.be link
      if (parsedUrl.hostname === "youtu.be") {
        const videoId = parsedUrl.pathname.slice(1);
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;
      }
  
      // Already an embed link
      if (parsedUrl.pathname.includes("/embed/")) {
        return url;
      }
  
      return null;
    } catch {
      return null;
    }
  };
  
  return (

  <div className="min-h-screen bg-[#0b0b0b] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title */}
        {/* <h1 className="text-4xl font-bold text-pink-500">{movie.title}</h1> */}

        {/* YouTube Trailer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* YouTube Trailer */}
            {typeof movie.movieLink[0] === "string" && movie.movieLink[0].trim() !== "" && getYoutubeEmbedURL(movie.movieLink) ? (
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={getYoutubeEmbedURL(movie.movieLink)}
                title={movie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            ) : (
              <div className="text-gray-400 italic">Trailer not available.</div>
            )}

            {/* Poster & Ticket Box */}
            <div className="w-full bg-[#1a1a1a] rounded-lg shadow-lg flex flex-col p-4 space-y-4">
                {/* Top Section */}
                <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-4">
                  {/* Image + Info */}
                  <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    {/* Poster */}
                    <div className="relative flex-shrink-0 self-center sm:self-start">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="md:h-40 md:w-28 w-full aspect-video md:aspect-auto object-cover rounded-lg shadow"
                      />
                      <span className="absolute top-0 left-0 rounded-tl-lg bg-black/40 w-6 h-8 text-white/60 text-center">+</span>
                    </div>

                    {/* Text Info */}
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <h1 className="text-3xl sm:text-2xl font-semibold">{movie.title}</h1>
                      <h2 className="text-sm text-white/50">{movie.genres.join(", ")}</h2>
                      <p className="text-sm text-white leading-relaxed line-clamp-2">
                       {movie.content}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <div className="mt-2 sm:mt-0 flex justify-end sm:justify-center items-center">
                    <div>
                    <button className="rounded-full bg-white/20 px-4 py-2 hover:bg-white/40">
                      <a href={movie.movieLink} target="_blank" rel="noopener noreferrer">&gt;</a>
                    </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Buy Button */}
                <div className="pt-4 border-t border-white/30">
                  <div className="flex justify-start">
                    <button className="bg-[#E2B616] hover:bg-[#CFAF2E] text-black px-4 py-2 rounded-md transition">
                     <a href={movie.ticketLink} target="_blank" rel="noopener noreferrer"> Buy Ticket &gt;</a>
                    </button>
                  </div>
                </div>
              </div>


        {/* Movie Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#1a1a1a] p-6 rounded-xl shadow-lg w-full">
        <div className="space-y-3 text-sm text-gray-300">
            <div>
              <span className="text-white font-semibold text-lg">Director:</span> 
              <span className="text-lg text-white/70"> {movie.director.join(", ")}</span>
            </div>
            <div>
              <span className="text-white font-semibold text-lg">Writer:</span>
              <span className="text-lg text-white/70"> {movie.writer.join(", ")}</span>
            </div>
            <div>
              <span className="text-white font-semibold text-lg">Cast:</span>
              <span className="text-lg text-white/70"> {movie.cast.join(", ")}</span>
            </div>
            
          </div>
          <div className="space-y-4">
            {/* <p className="text-gray-300">{movie.content}</p> */}
            <div className="text-yellow-400 font-semibold">{movie.rating}/10 ⭐</div>
            <div className="text-lg text-white font-semibold">Released: 
              <span className="text-md text-white/70">{movie.release}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {movie.genres.map((genre, i) => (
                <span
                  key={i}
                  className="bg-pink-600/30 text-pink-300 px-3 py-1 rounded-full text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

        </div>
        <div className=" bg-[#1a1a1a] p-6 rounded-xl shadow-lg w-full">
          <div className="w-full">
            <p className="text-gray-300 w-full">
              {movie.content}
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
};

export default ReviewPage;
