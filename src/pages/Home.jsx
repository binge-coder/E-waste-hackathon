import React, { useEffect, useState } from 'react';
import home_img from '../assets/home_img.jpg'
import RandomFactoid from '../components/Factoid'; // Import the Factoid component

// const containerStyle = {
//   width: '640px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyComponent() {
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     const mapOptions = {
//       credentials: 'Au4NdWQQLnW3pjS4TSqCnmXGGl8i66jrUZvavdnBbtNGZLqCywVaDM4RxxoFRiT9', // Replace with your Bing Maps API key
//       center: new window.Microsoft.Maps.Location(center.lat, center.lng),
//       zoom: 10,
//     };

//     const map = new window.Microsoft.Maps.Map(document.getElementById('map'), mapOptions);

//     setMap(map);
//   }, []);

//   return (
//     <div id="map" ></div>
//   );
// }

const Home = () => {
  // const [bingMapsLoaded, setBingMapsLoaded] = useState(false);

  // useEffect(() => {
  //   // Load Bing Maps script dynamically
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=initializeBingMaps';
  //   script.async = true;
  //   script.defer = true;

  //   // Define a global callback function for the Bing Maps script
  //   window.initializeBingMaps = () => {
  //     setBingMapsLoaded(true);
  //   };

  //   document.head.appendChild(script);
  // }, []);
  const navbarHeight = 80; // 80px
  const largestDivHeight = `calc(100vh - ${navbarHeight}px + ) `;

  return (
    <div className='bg-secondary text-stroke-dark flex md:flex-row justify-center items-center py-4' >
      <div className="flex flex-col md:flex-row items-center justify-center  w-11/12 bg-secondary rounded-md ">
        <div className="flex-1 text-center md:text-6xl lg:text-8xl leading-normal md:mb-0  md:h-96">
        <div className="flex flex-col md:flex-col h-full justify-center text-stroke-dark py-3">
            <p className="text-4xl md:text-6xl lg:text-8xl m-1">E-Waste<br />Facility<br />Locator</p>
          </div>
        </div>
        <div className="rounded-lg w-11/12 md:w-1/2 ">
          {/* {bingMapsLoaded && <MyComponent />} */}
          {/* Image */}
          <img
            src={home_img}
            alt="Random"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
