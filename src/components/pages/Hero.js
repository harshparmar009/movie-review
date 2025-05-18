"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import ArrowDown from "../../../public/logo/ArrowDown";

export default function ThreeDMarqueeDemoSecond() {
  const images = [
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
   "/logo/jojo.png",
  ];
  return (
    <div
      className="relative mx-auto py-10 flex h-screen w-full mt-18 max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative mx-auto max-w-5xl text-center text-2xl font-bold text-white md:text-4xl lg:text-6xl">
        "Deep Dives Into Every Frame" Where Every{" "}
        <span className="inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-[#F26E21] decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          frame
        </span>{" "}
        Tells a Story
      </h2>

      <p
        className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
       Your daily dose of honest, insightful movie reviews. More than ratings. Real opinions. Real cinema.
      </p>
      <div
        className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        {/* <button
          className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 
          focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none flex items-center">
          Read More <ArrowDown/>
        </button> */}
        <button
          className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium 
          text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 
          focus:ring-offset-2 focus:ring-offset-black focus:outline-none flex items-center justify-center">
          Read more <ArrowDown/>
        </button>
      </div>
      {/* overlay */}
      <div
        className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images} />
    </div>
  );
}
