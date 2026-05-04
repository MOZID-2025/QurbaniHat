import Image from "next/image";
import Link from "next/link";
import kurbaniImg from "../assets/kurbani.png";

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-yellow-50 py-16 px-4">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 leading-tight">
            QurbaniHat <br />
            <span className="text-yellow-600">Livestock Booking Platform</span>
          </h1>

          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Explore healthy cows, goats, and premium livestock for Qurbani.
            Compare prices, view details, and book your preferred animal easily
            with secure authentication.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/animals">
              <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl shadow-md transition w-full sm:w-auto">
                Browse Animals
              </button>
            </Link>

            <Link href="/login">
              <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-xl transition w-full sm:w-auto">
                Get Started
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <p className="text-2xl font-bold text-green-700">50+</p>
              <p className="text-sm text-gray-600">Healthy Animals</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-700">100%</p>
              <p className="text-sm text-gray-600">Verified Sellers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-700">24/7</p>
              <p className="text-sm text-gray-600">Support</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center w-full">
          <div className="relative w-full max-w-md md:max-w-lg aspect-[4/3]">
            <Image
              src={kurbaniImg}
              alt="Qurbani Animals"
              fill
              className="object-contain drop-shadow-xl rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
