"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ARTICLES ARRAY
const articles = [
  {
    title: "Veer-Isha Nu Seemant: A Bold Gujarati Film That Breaks Social Taboos with Grace",
    slug: "/articles/veer-isha-nu-seemant",
    category: "Gujarati Cinema | Film Review | Social Drama",
    image: "/images/veer-isha.jpg",
    date: "May 16, 2025",
    sections: [
      {
        heading: "🎬 Introduction",
        content: `Gujarati cinema has long been known for its family dramas and cultural storytelling...`
      },
      {
        heading: "📖 Storyline Overview",
        content: `Veer and Isha, a newlywed couple, decide not to have children — a choice that stirs conflict...`
      },
      {
        heading: "🎭 Cast & Performances",
        content: `<ul class="list-disc list-inside space-y-1"><li><strong>⭐ Malhar Thakar as Veer:</strong> Mature and calm...</li></ul>`
      },
      {
        heading: "✅ Final Verdict",
        content: `<p class="text-green-600 text-lg font-bold">⭐⭐⭐⭐☆ (4.5/5)</p><p>A rare gem that’s both thoughtful and entertaining.</p>`
      }
    ]
  },
  {
    title: "Family Circus",
    slug: "/articles/chitthi-fathers-struggle",
    category: "Gujarati Drama",
    image: "/images/family.jpg",
    date: "April 28, 2025",
    sections: [
      {
        heading: "🎬 Overview",
        content: `Family Circus is a 2018 Gujarati musical comedy drama...`
      },
      {
        heading: "✅ Verdict",
        content: `<p class="text-green-600 text-lg font-bold">⭐⭐⭐⭐☆ (4/5)</p><p>A touching drama that will move you to tears.</p>`
      }
    ]
  },
  {
    title: "Vaat Vaat Ma: A Quirky Tale of Small-Town Chaos",
    slug: "/articles/vaat-vaat-ma",
    category: "Gujarati Comedy",
    image: "/images/vat-vat.jpeg",
    date: "March 15, 2025",
    sections: [
      {
        heading: "🎬 About the Film",
        content: `Set in a lively Gujarati mohalla...`
      },
      {
        heading: "✅ Why Watch?",
        content: `<p class="text-green-600 text-lg font-bold">⭐⭐⭐⭐☆ (4/5)</p><p>Pure entertainment with small-town charm and big laughs.</p>`
      }
    ]
  }
];

const ArticleCard = ({ article }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-30% 0px -30% 0px"
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-10"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        {article.title}
      </h1>

      <div className="text-sm text-gray-300 flex flex-wrap gap-2 items-center">
        {article.category.split("|").map((cat, i) => (
          <span key={i} className="bg-yellow-700 text-white px-2 py-1 rounded text-xs">
            {cat.trim()}
          </span>
        ))}
        <span className="ml-2 text-gray-400">{article.date}</span>
      </div>

      <div className="rounded-xl overflow-hidden mb-6">
        <Image
          src={article.image}
          alt={article.title || "Article image"}
          width={900}
          height={250}
          className="w-full h-64 object-cover object-top"
        />
      </div>

      {article.sections.map((section, idx) => (
        <section key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-500">{section.heading}</h2>
          <div
            className="text-gray-200"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </section>
      ))}

      {/* <Link href={article.slug} className="inline-block mt-4 text-blue-400 underline hover:text-blue-200">
        Read full article →
      </Link> */}
    </motion.article>
  );
};

const Articles = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-white font-sans mt-18 space-y-24">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </main>
  );
};

export default Articles;
