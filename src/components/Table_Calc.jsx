import React from 'react';

const Table = () => {
  const cellTextSize = 'text-sm'; // Change this to the desired text size for table cells
  const headingTextSize = 'text-xl';

  return (
    <table className="table-auto text-white mx-auto mt-3">
      <thead>
        <tr>
          <th className={`border px-4 py-4 ${headingTextSize}`} rowSpan="2">
            Credit Score
          </th>
          <th colSpan="4" className={`border px-4 py-2 ${headingTextSize}`}>
            COMPOSITION
          </th>
        </tr>
          <td className={`border px-4 py-2 ${headingTextSize}`}>Gold</td>
          <td className={`border px-4 py-2 ${headingTextSize}`}>Copper</td>
          <td className={`border px-4 py-2 ${headingTextSize}`}>Silver</td>
          <td className={`border px-4 py-2 ${headingTextSize}`}>Aluminium</td>
        <tr>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={`border px-4 py-2 ${cellTextSize}`}>- </td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>- </td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>- </td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>- </td>
          <td className={`border px-4 py-2 ${cellTextSize}`}>- </td>
        </tr>
        {/* Add more rows here */}
      </tbody>
    </table>
  );
};

export default Table;
