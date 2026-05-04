import Image from "next/image";
import React from "react";

const FeaturedAnimalsCard = ({ animal }) => {
  return (
    <div>
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-semibold text-lg">{animal.name}</h2>
        <p className="text-sm text-gray-500">{animal.type}</p>

        <div className="mt-2 flex justify-between text-sm">
          <span className="text-gray-600">{animal.location}</span>
          <span className="font-bold text-green-600">৳{animal.price}</span>
        </div>

        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedAnimalsCard;
