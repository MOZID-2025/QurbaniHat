export default function QurbaniExtras() {
  const tips = [
    {
      title: "Choose a Healthy Animal",
      desc: "Check the eyes, teeth, skin, and movement before purchasing your Qurbani animal.",
      icon: "🐄",
    },
    {
      title: "Ensure Proper Feeding",
      desc: "Provide clean water and nutritious food before Qurbani day.",
      icon: "🌾",
    },
    {
      title: "Keep the Environment Clean",
      desc: "Maintain hygiene around the animal to ensure good health.",
      icon: "🧼",
    },
    {
      title: "Buy from Trusted Sellers",
      desc: "Always choose verified farms and trusted livestock sellers.",
      icon: "✅",
    },
  ];

  const breeds = [
    {
      name: "Sahiwal",
      country: "Pakistan",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1200&auto=format&fit=crop",
      details: "Famous for strong body structure and excellent meat quality.",
    },
    {
      name: "Brahman",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1200&auto=format&fit=crop",
      details: "Heat-resistant breed with strong adaptability and large size.",
    },
    {
      name: "Friesian",
      country: "Netherlands",
      image:
        "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=1200&auto=format&fit=crop",
      details: "Popular dairy breed also known for healthy body condition.",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-16 space-y-20">
      {/* Qurbani Tips Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Qurbani Tips</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Helpful guidelines to ensure a healthy and proper Qurbani
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">{tip.icon}</div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {tip.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Breeds Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Top Breeds</h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Explore some of the most popular and premium livestock breeds for
            Qurbani.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breeds.map((breed, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {breed.name}
                  </h3>

                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-semibold">
                    {breed.country}
                  </span>
                </div>

                <p className="text-gray-500 leading-relaxed">{breed.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
