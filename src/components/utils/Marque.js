import { cn } from "@/lib/utils";

export default function ReviewCard  ({
  img,
  name,
  username,
  rating,
  id
})  {
  return (
    <figure
      className={cn(
        "relative h-full w-64 overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
       <Link href={`/movies/review/${id}`} className="cursor-pointer relative rounded-xl overflow-hidden shadow-md w-[240px] h-[230px]">
      {/* Movie Poster */}
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-sm text-black/70 px-3 py-2">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-md font-semibold ">{name}</h3>
            <p className="text-xs">{username}</p>
          </div>
          <div className="text-md">
          ⭐{rating}
          </div>
        </div>
      </div>
    </Link>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};
