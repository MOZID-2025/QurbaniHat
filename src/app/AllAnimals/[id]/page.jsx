import BookingForm from "@/components/BookingForm";
import Image from "next/image";
import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const AnimalDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://qurbani-hat-mocha.vercel.app/data.json", {
    next: { revalidate: 60 },
  });

  const animalsData = await res.json();

  const animal = animalsData.find((a) => a.id == id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left - Animal Info */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="relative w-full h-[350px]">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold">{animal.name}</h1>
            <p className="text-gray-600 mt-2">{animal.description}</p>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
              <h3 className="flex items-center gap-2 font-bold">
                <IoMdInformationCircleOutline />
                {animal.type}
              </h3>

              <h3 className="flex items-center gap-2 font-bold">
                <IoMdInformationCircleOutline />
                {animal.breed}
              </h3>
              <h3 className="flex items-center gap-2 font-bold">
                <IoMdInformationCircleOutline />
                {`${animal.weight} KG`}
              </h3>
              <h3 className="flex items-center gap-2 font-bold">
                <IoMdInformationCircleOutline />
                {`${animal.age} Years`}
              </h3>
              <h3 className="flex items-center gap-2 font-bold">
                <IoMdInformationCircleOutline />
                {animal.location}
              </h3>
              <h3 className="flex items-center gap-2 font-bold">
                <IoMdInformationCircleOutline />
                {`৳ ${animal.price.toLocaleString()}`}
              </h3>
            </div>
          </div>
        </div>

        {/* Right - Booking Form */}
        <BookingForm />
      </div>
    </div>
  );
};

export default AnimalDetails;
