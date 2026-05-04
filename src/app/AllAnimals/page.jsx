"use client";
import FeaturedAnimalsCard from "@/components/FeaturedAnimalsCard";
import React, { useState, useEffect } from "react";

const AllAnimals = () => {
  const [animalsData, setAnimalsData] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch("https://qurbani-hat-mocha.vercel.app/data.json")
      .then((res) => res.json())
      .then((data) => setAnimalsData(data));
  }, []);

  const sortedAnimals = [...animalsData].sort((a, b) => {
    if (sortType === "low") return a.price - b.price;
    if (sortType === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <div className="max-w-[1280px] mx-auto mt-10 px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl">All Animals</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Explore our carefully selected healthy and well-raised animals,
            perfect for Qurbani with guaranteed quality and fair pricing.
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex justify-end mb-6">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border px-4 py-2 rounded-lg shadow-sm"
          >
            <option value="">Sort by Price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <FeaturedAnimalsCard animal={animal} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAnimals;
