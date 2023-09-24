import React from 'react';

const Home = () => {
  return (
    <div className='bg-secondary text-stroke-dark'>
      {/* Container for the entire content */}
      <div className="flex flex-col md:flex-row items-center justify-center h-screen p-2 md:p-8">
        {/* Left column for text content */}
        <div className="flex-1 text-center md:text-6xl lg:text-8xl leading-normal mb-4 md:mb-0">
          <div className="flex flex-col h-full justify-center"> {/* Container for text */}
            {/* Title */}
            <p className="text-4xl md:text-6xl lg:text-8xl mb-2 ">
              E-Waste
            </p>
            {/* Subtitle */}
            <p className="text-4xl md:text-6xl lg:text-8xl mb-2 ">
              Facility
            </p>
            {/* Application name */}
            <p className="text-4xl md:text-6xl lg:text-8xl ">Locator</p>
          </div>
        </div>
        {/* Right column for image */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 md:max-w-2xl">
          {/* Image */}
          <img
            src="https://media.istockphoto.com/id/1193323373/vector/a-colorful-trendy-card-design-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=GIXth_77-RX3EPEGzVMo7P3LL64w8y_-xBtoHNRiBHY="
            alt="Random"
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
