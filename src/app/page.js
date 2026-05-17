import QurbaniExtras from "../../src/components/QurbaniExtras";
import FeaturedAnimals from "../../src/components/FeaturedAnimals";
import HeroBanner from "../../src/components/HeroBanner";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <FeaturedAnimals />
      <QurbaniExtras />
    </div>
  );
}
