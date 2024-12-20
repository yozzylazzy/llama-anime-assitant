import {
  // mongodb,
  express,
  react,
  edge,
  llama,
  cubism,
  node
} from "../assets/images";

const Feature = () => {
  const icons = [
    // mongodb,
    express,
    react,
    node,
    edge,
    llama,
    cubism,
  ];

  return (
    <section className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 py-8">
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
