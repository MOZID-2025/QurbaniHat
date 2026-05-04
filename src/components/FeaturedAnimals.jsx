import Image from "next/image";
import React from "react";
import FeaturedAnimalsCard from "./FeaturedAnimalsCard";

const FeaturedAnimals = async () => {
  const res = await fetch("https://qurbani-hat-mocha.vercel.app/data.json", {
    next: { revalidate: 60 },
  });

  const animalsData = await res.json();

  // Get only first 4 featured animals
  const featuredAnimals = animalsData.slice(0, 4);

  return (
    <div className="max-w-[1280px] mx-auto mt-10 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl">Featured Animals</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Explore our carefully selected healthy and well-raised animals,
          perfect for Qurbani with guaranteed quality and fair pricing.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredAnimals.map((animal) => (
          <div
            key={animal.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <FeaturedAnimalsCard animal={animal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAnimals;
