"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [value, setValue] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (pathname === "/") {
      setValue("home");
    } else if (pathname.startsWith("/movies")) {
      setValue("movies");
    } else if (pathname.startsWith("/articles")) {
      setValue("articles");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative w-full flex items-center justify-center text-black">
      <div
        className={`bg-white fixed top-2 inset-x-0 max-w-xl mx-auto z-50 flex justify-between items-center px-6 rounded-full transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-30"
        }`}
      >
        {/* Logo */}
        <div>
          <Image
            src={"/logo/jojo.png"}
            width={60}
            height={60}
            alt="logo"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex gap-6 text-md">
          <Link
            href="/"
            onClick={() => setValue("home")}
            className={`hover:text-[#F26E21] font-semibold transition ${
              value === "home"
                ? "text-[#F26E21] underline-custom"
                : "text-black"
            }`}
          >
            Home
          </Link>
          <Link
            href="/movies"
            onClick={() => setValue("movies")}
            className={`hover:text-[#F26E21] font-semibold transition ${
              value === "movies"
                ? "text-[#F26E21] underline-custom"
                : "text-black"
            }`}
          >
            Movies
          </Link>

          {/* <Link
            href="/celebrities"
            onClick={() => setValue("celebrities")}
            className={`hover:text-[#F26E21] font-semibold transition ${
              value === "celebrities"
                ? "text-[#F26E21] underline-custom"
                : "text-black"
            }`}
          >
            Celebrities List
          </Link>
          <Link
            href="/top-movies"
            onClick={() => setValue("top")}
            className={`hover:text-[#F26E21] font-semibold transition ${
              value === "top"
                ? "text-[#F26E21] underline-custom"
                : "text-black"
            }`}
          >
            Top Movies
          </Link> */}

          <Link
            href="/articles"
            onClick={() => setValue("articles")}
            className={`hover:text-[#E2B616] font-semibold transition ${
              value === "articles" ? "text-[#E2B616] underline-custom" : "text-black"
            }`}
          >
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
