import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Feature from "../components/FeatureCard";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900 pt-16">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Landing;
