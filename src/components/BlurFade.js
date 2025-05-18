/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/magicui/blur-fade";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 500 : 600;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function BlurFadeDemo({movies}) {
  return (
    <section id="photos" className="px-4">
         <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        <span className="text-pink-500 text-3xl">🎬</span> Movies Grid
      </h2>
      <div className="columns-2 gap-4 sm:columns-3">
        {movies.map((movie, idx) => (
          <BlurFade key={movie.id} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-cover"
              src={movie.image}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
