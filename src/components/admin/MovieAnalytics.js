"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#E2B616", "#FF6384", "#36A2EB", "#FFCE56", "#8E44AD", "#2ECC71"];

export default function MovieAnalytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("/api/movies");
      const movies = await res.json();

      const genreMap = {};
      movies.forEach((movie) => {
        movie.genres.forEach((genre) => {
          genreMap[genre] = (genreMap[genre] || 0) + 1;
        });
      });

      const genreStats = Object.entries(genreMap).map(([genre, count]) => ({
        name: genre,
        value: count,
      }));

      setData(genreStats);
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Movie Genre Distribution</h2>
      <p className="text-gray-600 mb-4">Visual breakdown of movie genres currently in the database.</p>

      {data.length === 0 ? (
        <p className="text-center text-gray-500">Loading data...</p>
      ) : (
        <>
          <p className="text-lg font-medium text-gray-700 mb-4">
            Total Movies: {data.reduce((acc, cur) => acc + cur.value, 0)}
          </p>

          <div className="w-full h-96">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
            {data.map((entry, index) => (
              <div key={entry.name} className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm text-gray-700">{entry.name}: {entry.value}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
