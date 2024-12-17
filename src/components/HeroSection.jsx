import CharacterSelection from "./CharacterSelection";
import Feature from "./FeatureCard";

const HeroSection = () => {
  return (
    <section className="p-8 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold"
            style={{
              color: '#4a628a',
            }}>
            PIXIE-PAL ASSISTANT
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <Feature />
        </div>

        {/* Right Side */}
        <CharacterSelection />
      </div>
    </section>
  );
};

export default HeroSection;
