import React from 'react';

const RandomFactoid = () => {
  // You can replace this Lorem Ipsum text with your random factoid logic
  const getRandomFactoid = () => {
    const factoids = [
      "Did you know that honey never spoils?",
      "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron.",
      "Octopuses have three hearts.",
      // Add more factoids here
    ];
    const randomIndex = Math.floor(Math.random() * factoids.length);
    return factoids[randomIndex];
  };

  const factoid = getRandomFactoid();

  return (
    <div className="bg-primary p-4 rounded-lg shadow-lg mb-4">
      
      <p className="text-4xl md:text-5xl text-stroke-heading pb-6">Did you Know?</p>
      <h2 className="text-2xl text-stroke-heading mb-2">{factoid}</h2>
    </div>
  );
};

export default RandomFactoid;
