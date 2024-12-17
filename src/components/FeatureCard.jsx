const Feature = () => {
  const icons = [
    "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", // MongoDB Icon
    "https://nodejs.org/static/images/logo.svg", // Node.js Icon
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React Icon
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Microsoft_Edge_logo_%282019%29.svg", // Edge Icon
    "https://placekitten.com/50/50", // Placeholder cute animal icon
  ];

  return (
    <section className="flex justify-center gap-6 py-8">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt={`icon-${index}`}
          className="w-16 h-16 object-contain"
        />
      ))}
    </section>
  );
};

export default Feature;
