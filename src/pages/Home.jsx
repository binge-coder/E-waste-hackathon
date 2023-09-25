import React, { useEffect, useState } from 'react';

const containerStyle = {
  width: '640px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapOptions = {
      credentials: 'Au4NdWQQLnW3pjS4TSqCnmXGGl8i66jrUZvavdnBbtNGZLqCywVaDM4RxxoFRiT9', // Replace with your Bing Maps API key
      center: new window.Microsoft.Maps.Location(center.lat, center.lng),
      zoom: 10,
    };

    const map = new window.Microsoft.Maps.Map(document.getElementById('map'), mapOptions);

    setMap(map);
  }, []);

  return (
    <div id="map" style={containerStyle}></div>
  );
}


const Home = () => {
  useEffect(() => {
    // Load Bing Maps script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=initializeBingMaps';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Define a global callback function for the Bing Maps script
    window.initializeBingMaps = () => {
      MyComponent(); // Once the script is loaded, render the MyComponent
    };
  }, []);
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
          <MyComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
