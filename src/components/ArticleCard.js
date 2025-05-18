"use client";

import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    title: "Veer-Isha Nu Seemant: Breaking Taboos with Grace",
    slug: "/articles/veer-isha-nu-seemant",
    category: "Gujarati Cinema",
    image: "/images/veer-isha.jpg",
    description:
      "A bold Gujarati film exploring the choice of child-free marriage, family pressure, and self-autonomy with heart and elegance.",
    date: "May 16, 2025",
  },
  {
    title: "Family Circus",
    slug: "/articles/chitthi-fathers-struggle",
    category: "Gujarati Drama",
    image: "/images/family.jpg", // You can change this to any actual image path
    description:
    "Family Circus is a 2018 Gujarati musical comedy drama starring veteran Gujarati actor Monal Gajjar, Raunaq Kamdar, Mitra Gadhavi. The film is directed by Viral Rao and set to release for 19 October 2018",
    date: "April 28, 2018",
  },
  {
    title: "Vaat Vaat Ma: A Quirky Tale of Small-Town Chaos",
    slug: "/articles/vaat-vaat-ma",
    category: "Gujarati Comedy",
    image: "/images/vat-vat.jpeg", // Replace with your actual image path
    description:
      "A delightful mix of misunderstandings, Vaat Vaat Ma follows the everyday chaos of a small Gujarati mohalla, bringing joy through its colorful characters",
    date: "March 15, 2025",
  }
  
  // You can add more articles below
];

const HeroArticles = () => {
  return (
    <section className="px-6 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-10">Featured Articles</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {articles.map((article, index) => (
            <Link href="/articles" key={index}>
              <div className="bg-[#1c1c1e] rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-yellow-500/30 transition-all duration-300 cursor-pointer max-w-sm mx-auto">
                <div className="h-52 w-full relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-left">
                  <p className="text-sm text-yellow-500 font-medium">{article.category}</p>
                  <h3 className="text-xl font-semibold mt-2">{article.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{article.description}</p>
                  <p className="text-xs text-gray-500 mt-3">{article.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroArticles;
