import React from 'react';

const Table = () => {
  const cellTextSize = 'text-sm'; // Change this to the desired text size for table cells
  const headingTextSize = 'text-xl';

  return (
    <table className="table-auto text-white mx-auto mt-3">
      <thead>
        <tr>
          <th className={`border px-4 py-2 ${headingTextSize}`}>S. No.</th>
          <th className={`border px-4 py-2 ${headingTextSize}`}>Distance</th>
          <th className={`border px-4 py-2 ${headingTextSize}`}>Link</th>
          <th className={`border px-4 py-2 ${headingTextSize}`}>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={`border px-4 py-2 ${cellTextSize}`}>1</td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>10 km</td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>
            <a href="https://greenbirdrecycling.in/">Greenbird Recycling</a>
          </td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>Address 1</td>
        </tr>
        <tr>
          <td className={`border px-4 py-2 ${cellTextSize}`}>2</td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>20 km</td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>
            <a href="https://www.justdial.com/Ludhiana/Spreco-Recycling-Focal-Point/0161PX161-X161-200323212959-F7C3_BZDET">Spreco Recycling</a>
          </td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>Address 2</td>
        </tr>
        <tr>
          <td className={`border px-4 py-2 ${cellTextSize}`}>3</td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>30 km</td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>
            <a href="https://reparyog.com/">Reparyog</a>
          </td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>Address 3</td>
        </tr>
        <tr>
          <td className={`border px-4 py-2 ${cellTextSize}`}>4</td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>40 km</td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>
            <a href="https://www.recyclingvilla.com/">Recycling Villa</a>
          </td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>Address 4</td>
        </tr>
        {/* Add more rows here */}
      </tbody>
    </table>
  );
};

export default Table;
 