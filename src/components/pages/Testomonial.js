/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Ramesh Patel",
    username: "@ramesh_p",
    body: "Veer-Isha Nu Seemant was a breath of fresh air. It handled a bold topic with such grace. Absolutely loved the performances!",
    img: "https://avatar.vercel.sh/ramesh",
  },
  {
    name: "Diksha Shah",
    username: "@diksha_shah",
    body: "Chitthi made me cry. Such an emotional story about a father's love. We need more films like this in Gujarati cinema.",
    img: "https://avatar.vercel.sh/diksha",
  },
  {
    name: "Manan Desai",
    username: "@manan_d",
    body: "Vaat Vaat Ma is pure fun! Reminded me of my own neighborhood and the daily gossip. So relatable and hilarious!",
    img: "https://avatar.vercel.sh/manan",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Marquee3D() {
  return (
    <div className="w-full h-full px-8">
      <div className="w-full flex items-center justify-center pb-6">
        <h1 className="text-4xl font-bold ">Testomonials</h1>
      </div>

      <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]" vertical>
            {fourthRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
    </div>
  );
}
