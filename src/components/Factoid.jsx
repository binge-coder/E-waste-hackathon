import React from 'react';

const RandomFactoid = () => {
  const getRandomFactoid = () => {
    const facts = [
      "We generate around 40 million tons of electronic waste every year, worldwide. That’s like throwing 800 laptops every second.",
      "An average cellphone user replaces their unit once every 18 months.",
      "E-waste comprises 70% of our overall toxic waste.",
      "Only 12.5% of E-Waste is recycled.",
      "85% of our E-Waste are sent to landfills and incinerators are mostly burned, and release harmful toxins in the air!",
      "Electronics contain lead which can damage our central nervous system and kidneys.",
      "A child’s mental development can be affected by low-level exposure to lead.",
      "The most common hazardous electronic items include LCD desktop monitors, LCD televisions, Plasma Televisions, TVs and computers with Cathode Ray Tubes.",
      "E-waste contains hundreds of substances, of which many are toxic. This includes mercury, lead, arsenic, cadmium, selenium, chromium, and flame retardants.",
      "80% of E-Waste in the US and most of other countries are transported to Asia.",
      "300 million computers and 1 billion cellphones go into production annually. It is expected to grow by 8% per year.",
      "First e-waste recycling plant - Bangalore, Karnataka",
      "Top 3 Largest source of e-waste in India - Delhi, Mumbai, and Bangalore"
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
  };

  const factoid = getRandomFactoid();

  return (
    <div className="bg-primary p-4 rounded-lg shadow-lg mb-4">
    <h2 className="text-4xl md:text-5xl text-stroke-heading pb-6">Did you Know?</h2>
    <p className="text-2xl text-stroke-heading mb-2">{factoid}</p>
    </div>
  );
};

export default RandomFactoid;
