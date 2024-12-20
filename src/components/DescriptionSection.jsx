import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import CSS untuk timeline
import { FaRobot, FaCogs, FaLightbulb, FaSmile } from "react-icons/fa";
import { backgroundDescLanding } from "../assets/images";

const DescriptionSection = () => {
  return (
    <section className="px-8 md:px-16 2xl:px-32 py-16 bg-center"
      style={{
        backgroundImage: `url(${backgroundDescLanding})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#4a628a] uppercase">
        Meet Pixie-Pal Assistant
      </h1>
      <VerticalTimeline lineColor="#4a628a">
        {/* Teknologi 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #dff2eb, #b9e5e8)", color: "#4A628A" }}
          contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
          iconStyle={{ background: "#4a628a", color: "#fff" }}
          icon={<FaRobot />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">
            Powered by LLaMA
          </h3>
          <p className="text-gray-600">
            PixiePal utilizes the LLaMA language model for deep understanding
            and natural human-like conversations.
          </p>
        </VerticalTimelineElement>

        {/* Teknologi 2 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to left, #dff2eb, #b9e5e8)", color: "#4A628A" }}
          contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
          iconStyle={{ background: "#4a628a", color: "#fff" }}
          icon={<FaCogs />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">
            2D Live Animation
          </h3>
          <p className="text-gray-600">
            PixiePal is brought to life through captivating animations, offering a friendly and approachable presence. Powered by Live2D Cubism technology, it delivers seamless and expressive character interactions that enhance user engagement.
          </p>
        </VerticalTimelineElement>

        {/* Teknologi 3 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #dff2eb, #b9e5e8)", color: "#4A628A" }}
          contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
          iconStyle={{ background: "#4a628a", color: "#fff" }}
          icon={<FaLightbulb />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">
            Text-to-Speech (TTS)
          </h3>
          <p className="text-gray-600">
            Experience dynamic and lifelike voice interactions with PixiePal, thanks to advanced text-to-speech synthesis. Leveraging the cutting-edge Edge TTS engine, it ensures precise articulation and natural conversational flow.
          </p>
        </VerticalTimelineElement>

        {/* Fitur */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to left, #dff2eb, #b9e5e8)", color: "#4A628A" }}
          contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
          iconStyle={{ background: "#4a628a", color: "#fff" }}
          icon={<FaSmile />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">
            Core Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Personalized recommendations for hobbies and self-care.</li>
            <li>Engaging banter to brighten your day.</li>
            <li>Emotional support and a listening ear.</li>
            <li>Discover new games, movies, and books.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default DescriptionSection;
