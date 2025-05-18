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
        content: `Gujarati cinema has long been known for its family dramas and cultural storytelling. But occasionally, a film dares to challenge societal norms — Veer-Isha Nu Seemant does exactly that. Directed by Neeraj Joshi and starring Malhar Thakar and Anshul Trivedi, this film explores the unspoken pressures of parenthood and personal choice in Indian society.`
      },
      {
        heading: "📖 Storyline Overview",
        content: `Veer and Isha, a newlywed couple, decide not to have children — a choice that stirs conflict in their traditional families. The term "Seemant", a customary pregnancy ritual, becomes a symbol of rebellion and autonomy.`
      },
      {
        heading: "🎭 Cast & Performances",
        content: `<ul class="list-disc list-inside space-y-1"><li><strong>⭐ Malhar Thakar as Veer:</strong> Mature and calm, standing by his wife's decision.</li><li><strong>⭐ Anshul Trivedi as Isha:</strong> Bold, emotional, and inspiring.</li><li><strong>👪 Supporting Cast:</strong> Chhaya Vora, Jitendra Thakkar, Feroze Irani.</li></ul>`
      },
      {
        heading: "🎥 Direction & Writing",
        content: `Director Neeraj Joshi blends subtle emotion and social commentary in a way that connects with modern viewers and traditional families alike.`
      },
      {
        heading: "🎶 Music & Cinematography",
        content: `Soothing score and vibrant visuals that capture the Gujarati spirit and emotional undercurrents.`
      },
      {
        heading: "💬 Social Relevance & Themes",
        content: `<ul class="list-disc list-inside space-y-1"><li>Reproductive choice and autonomy</li><li>Generational pressure</li><li>Marital expectations</li><li>Mental health awareness</li></ul>`
      },
      {
        heading: "🎟 Audience Response",
        content: `Applauded by progressive families and youth alike, the film gained popularity through word-of-mouth.`
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
        content: `Family Circus is a 2018 Gujarati musical comedy drama starring veteran Gujarati actor Monal Gajjar, Raunaq Kamdar, Mitra Gadhavi. The film is directed by Viral Rao and set to release for 19 October 2018, and produced by Alpesh Patel & Digesh Patel from Eva Entertainment LLP. Nationwide`
      },
      {
        heading: "📖 Plot",
        content: `This is a story of Best two friends named Ronak and JJ; Story runs ahead; with a very middle class atmosphere and lifestyle; with comparison of Cherishing `
      },
      {
        heading: "🎭 Performances",
        content: `Rajendra Chawla delivers a powerful central performance, supported by Kinjal Pandya and Bharat Thakkar.`
      },
      {
        heading: "🎥 Direction & Theme",
        content: `Viral rao brings a nostalgic warmth and intimacy to the narrative, touching on generational disconnect and longing.`
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
        content: `Set in a lively Gujarati mohalla, Vaat Vaat Ma is a comedy about how a small rumor spirals into a hilarious chain of gossip and chaos.`
      },
      {
        heading: "🎭 Cast Highlights",
        content: `<ul class="list-disc list-inside space-y-1"><li><strong>Manoj Joshi</strong> as the grumpy gossip king</li><li><strong>Shraddha Dangar</strong> as the misunderstood girl next door</li><li><strong>Siddharth Randeria</strong> as the peacemaker uncle</li></ul>`
      },
      {
        heading: "🎥 Direction & Tone",
        content: `Directed by Mehul Desai, the film uses witty banter and lovable characters to build a light-hearted yet insightful comedy.`
      },
      {
        heading: "✅ Why Watch?",
        content: `<p class="text-green-600 text-lg font-bold">⭐⭐⭐⭐☆ (4/5)</p><p>Pure entertainment with small-town charm and big laughs.</p>`
      }
    ]
  }
];


const Articles = () => {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12 text-white font-sans mt-18 space-y-24">
        {articles.map((article, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            once: true,
            margin: "-30% 0px -30% 0px"
          });
  
          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-10"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {article.title}
              </h1>
              <p className="text-sm text-gray-300">{article.category} | {article.date}</p>
  
              <div className="rounded-xl overflow-hidden mb-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={900}
                  height={250}
                  className="w-full h-64 object-cover object-top"
                />
              </div>
  
              {article.sections.map((section, idx) => (
                <section key={idx} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2 text-yellow-600">{section.heading}</h2>
                  <div
                    className="text-gray-200"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </section>
              ))}
            </motion.div>
          );
        })}
      </main>
    );
  };
  
  export default Articles