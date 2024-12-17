import {
  mongodb,
  express,
  react,
  edge,
  llama,
} from "../assets/images";

const Feature = () => {
  const icons = [
    mongodb,
    express,
    react,
    edge,
    llama,
  ];

  return (
    <section className="flex justify-center md:justify-start items-center gap-10 md:gap-6 py-8">
      {icons.map((icon, index) => (
        <div className="card" key={index}>
          <img
            src={icon}
            alt={`icon-${index}`}
            className="w-50 h-50 object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default Feature;
