// components/DashboardLayout.js
"use client";

import { useState } from "react";

export default function DashboardLayout({  upload, all, analyze }) {
  const [active, setActive] = useState("upload");

  return (
    <div className="flex min-h-screen absolute inset-0">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <ul className="space-y-2">
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                active === "analyze" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActive("analyze")}
            >
              📊 Movie Analyze
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                active === "all" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActive("all")}
            >
              🎞 All Movies
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                active === "upload" ? "bg-gray-700" : ""
              }`}
              onClick={() => setActive("upload")}
            >
              ⬆ Upload Movie
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        {active === "upload" && upload}
        {active === "all" && all}
        {active === "analyze" && analyze}
      </main>
    </div>
  );
}
