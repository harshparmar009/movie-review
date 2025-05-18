"use client";

import Carousel from "@/components/ui/corousel";

export default function CarouselDemo({movie, loading}) {
  
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={movie} loading={loading} />
    </div>
  );
}
