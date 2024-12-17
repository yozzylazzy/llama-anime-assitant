import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b pt-16"
      style={{
        background: "linear-gradient(to right, #dff2eb, #b9e5e8)",
      }}>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Landing;
