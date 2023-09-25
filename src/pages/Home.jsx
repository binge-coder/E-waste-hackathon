import React, { useEffect, useState } from 'react';

// const containerStyle = {
//   width: '640px',
//   height: '400px'
// };

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
    <div id="map" ></div>
  );
}

const Home = () => {
  const [bingMapsLoaded, setBingMapsLoaded] = useState(false);

  useEffect(() => {
    // Load Bing Maps script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=initializeBingMaps';
    script.async = true;
    script.defer = true;

    // Define a global callback function for the Bing Maps script
    window.initializeBingMaps = () => {
      setBingMapsLoaded(true);
    };

    document.head.appendChild(script);
  }, []);
  const navbarHeight = 80; // 80px
  const largestDivHeight = `calc(100vh - ${navbarHeight}px)`;

  return (
    <div className='bg-secondary text-stroke-dark flex md:flex-row justify-center items-center' style={{ height: largestDivHeight }}>
      <div className="flex flex-col md:flex-row items-center justify-center p-2 md:p-8 border border-black w-11/12 bg-primary rounded-md">
        <div className="flex-1 text-center md:text-6xl lg:text-8xl leading-normal mb-4 md:mb-0  md:h-96">
          <div className="flex flex-row md:flex-col h-full justify-center text-stroke-heading">
            <p className="text-4xl md:text-6xl lg:text-8xl m-1 ">E-Waste</p>
            <p className="text-4xl md:text-6xl lg:text-8xl m-1 ">Facility</p>
            <p className="text-4xl md:text-6xl lg:text-8xl m-1 ">Locator</p>
          </div>
        </div>
        <div className="  rounded-lg bg-tertiary p-1 w-11/12 md:w-1/2 h-96 my-2">
          {bingMapsLoaded && <MyComponent />}
        </div>
      </div>
    </div>
  );
};

export default Home;
