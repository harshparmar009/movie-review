import Marque from '@/components/utils/Marque'
import { Marquee } from './magicui/marquee';

export default function MarqueeDemo({ movies, loading }) {
    // Limit to first 10 movies total (5 per row)
    const firstRow = movies.slice(0, 5);
    const secondRow = movies.slice(0, 5);
  
    return (
      
     <div>
       {loading ? (
        <div className="text-center text-gray-400 h-[300px]">Loading movies...</div>
      ) :
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((movie) => (
            <Marque
              key={movie._id}
              rating={movie.rating}
              img={movie.image}
              id={movie._id} 
              name={movie.title}
              username={movie.release}
              body={movie.content}
            />
          ))}
        </Marquee>
  
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((movie) => (
            <Marque
              key={movie._id}
              rating={movie.rating}
              img={movie.image}
              id={movie._id}
              name={movie.title}
              username={movie.release}
              body={movie.content}
            />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>}
     </div>
    );
  }
  