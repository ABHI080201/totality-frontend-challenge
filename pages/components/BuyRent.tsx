// import { useState } from "react";
// import CardsGrid from "./Cardgrid";

// const BuyRent = () => {
//   const [selectedBHK, setSelectedBHK] = useState<number | null>(null);
//   const [selectedSquareFeet, setSelectedSquareFeet] = useState<number | null>(
//     null
//   );
//   const [selectedPriceRange, setSelectedPriceRange] = useState<
//     [number, number] | null
//   >(null);

//   const handleFilter = () => {
//     // This function now just triggers the re-render with the selected filters
//   };

//   return (
//     <div>
//       <div>
//         <label>BHK:</label>
//         <select
//           onChange={(e) => setSelectedBHK(parseInt(e.target.value))}
//           defaultValue=""
//         >
//           <option value="">All</option>
//           <option value={1}>1 BHK</option>
//           <option value={2}>2 BHK</option>
//           <option value={3}>3 BHK</option>
//           <option value={4}>4 BHK</option>
//         </select>

//         <label>Square Feet:</label>
//         <select
//           onChange={(e) => setSelectedSquareFeet(parseInt(e.target.value))}
//           defaultValue=""
//         >
//           <option value="">All</option>
//           <option value={400}>400 sqft</option>
//           <option value={500}>500 sqft</option>
//           <option value={600}>600 sqft</option>
//           <option value={700}>700 sqft</option>
//           <option value={1000}>1000 sqft</option>
//           <option value={1200}>1200 sqft</option>
//         </select>

//         <label>Price Range:</label>
//         <select
//           onChange={(e) => {
//             const value = e.target.value
//               .split("-")
//               .map((price) => parseInt(price.replace(/\D/g, ""), 10));
//             setSelectedPriceRange(value as [number, number]);
//           }}
//           defaultValue=""
//         >
//           <option value="">All</option>
//           <option value="100000-200000">$100,000 - $200,000</option>
//           <option value="200000-300000">$200,000 - $300,000</option>
//           <option value="300000-400000">$300,000 - $400,000</option>
//           <option value="400000-500000">$400,000 - $500,000</option>
//         </select>

//         <button onClick={handleFilter}>Sort Now</button>
//       </div>

//       <CardsGrid
//         selectedBHK={selectedBHK}
//         selectedSquareFeet={selectedSquareFeet}
//         selectedPriceRange={selectedPriceRange}
//       />
//     </div>
//   );
// };

// export default BuyRent;

import { useState } from "react";
import CardsGrid from "./Cardgrid";

const BuyRent = () => {
  const [selectedBHK, setSelectedBHK] = useState<number | null>(null);
  const [selectedSquareFeet, setSelectedSquareFeet] = useState<
    [number, number] | null
  >(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number] | null
  >(null);

  const bhkOptions = [1, 2, 3, 4];
  const squareFeetOptions: [number, number][] = [
    [500, 900],
    [900, 1300],
    [1300, 1700],
    [1700, 2100],
  ];
  const priceRanges: [number, number][] = [
    [100000, 200000],
    [200000, 300000],
    [300000, 400000],
    [400000, 500000],
  ];

  const handleSortNow = () => {
    // Trigger the filter or any other actions (if required)
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Buy/Rent Properties</h2>

      <div className="flex flex-wrap gap-4 mb-6 items-center">
        {/* BHK Dropdown */}
        <div className="relative inline-block w-full sm:w-48">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
            value={selectedBHK ?? ""}
            onChange={(e) =>
              setSelectedBHK(e.target.value ? parseInt(e.target.value) : null)
            }
          >
            <option value="">BHK</option>
            {bhkOptions.map((bhk) => (
              <option key={bhk} value={bhk}>
                {bhk} BHK
              </option>
            ))}
          </select>
        </div>

        {/* Square Feet Dropdown */}
        <div className="relative inline-block w-full sm:w-48">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
            value={selectedSquareFeet ? selectedSquareFeet.join("-") : ""}
            onChange={(e) => {
              const value = e.target.value
                ? (e.target.value.split("-").map(Number) as [number, number])
                : null;
              setSelectedSquareFeet(value);
            }}
          >
            <option value="">Square Feet</option>
            {squareFeetOptions.map((sqft) => (
              <option key={sqft.join("-")} value={sqft.join("-")}>
                {sqft[0]} sqft - {sqft[1]} sqft
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Dropdown */}
        <div className="relative inline-block w-full sm:w-48">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
            value={selectedPriceRange ? selectedPriceRange.join("-") : ""}
            onChange={(e) => {
              const value = e.target.value
                ? (e.target.value.split("-").map(Number) as [number, number])
                : null;
              setSelectedPriceRange(value);
            }}
          >
            <option value="">Price Range</option>
            {priceRanges.map((range) => (
              <option key={range.join("-")} value={range.join("-")}>
                ${range[0].toLocaleString("en-US")} - $
                {range[1].toLocaleString("en-US")}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Now Button */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSortNow}
        >
          Sort Now
        </button>
      </div>

      <CardsGrid
        selectedBHK={selectedBHK}
        selectedSquareFeet={selectedSquareFeet}
        selectedPriceRange={selectedPriceRange}
      />
    </div>
  );
};

export default BuyRent;
