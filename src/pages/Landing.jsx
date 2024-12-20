import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DescriptionSection from "../components/DescriptionSection";

const Landing = () => {
  return (
    <div className="min-h-screen pt-16"
      style={{
        background: "linear-gradient(to right, #dff2eb, #b9e5e8)",
      }}>
      <Navbar />
      <HeroSection />
      <DescriptionSection />
    </div>
  );
};

export default Landing;
