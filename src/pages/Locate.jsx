import React, { useEffect, useState } from 'react';
import Form from '../components/Form_Loc'; // Import the Form component

const containerStyle = {
  width: '740px',
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


const Locate = () => {
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
    <div className='bg-secondary text-stroke-dark min-h-screen'> {/* Change h-screen to min-h-screen */}
      <div className="flex flex-col md:flex-row items-center justify-center p-2 md:p-8">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-6xl lg:text-8xl leading-normal mb-4 md:mb-0 p-8 ">
          <div className="flex flex-col h-full justify-center bg-primary rounded-xl py-6 px-2 ">
            {/* Top one-third for text */}
            <div className="h-1/3 ">
              <p className="text-4xl md:text-5xl text-stroke-heading">
                Locate <br></br> Nearest Facility</p>
            </div>
            {/* Add 20 pixels of space */}
            <div style={{ height: '50px' }}></div>
            {/* Bottom two-thirds for the Form component */}
            <div className="h-2/3 ">
              <Form /> {/* Render the Form component here */}
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 md:max-w-3xl">
          <div className="w-full h-full">
            {/* Image */}
            <MyComponent />
          </div>
          {/* Additional content can go here */}
        </div>
      </div>
    </div>
  );
};

export default Locate;
