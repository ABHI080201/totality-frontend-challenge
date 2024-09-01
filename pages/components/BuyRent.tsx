// // components/BuyRent.tsx

// import React, { useState } from "react";

// const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];
// const SquareFeet = ["500sqft", "650sqft", "750sqft", "1050sqft", "1500sqft"]; // Add more countries as needed
// const priceRanges = [
//   "$10,000 - $20,000",
//   "$20,000 - $30,000",
//   "$30,000 - $40,000",
//   "$40,000 - $50,000",
// ];

// const BuyRent: React.FC = () => {
//   const [selectedBHK, setSelectedBHK] = useState<string>("");
//   const [selectedCountry, setSelectedCountry] = useState<string>("");
//   const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Buy/Rent Properties</h2>

//       <div className="flex flex-wrap gap-4 mb-6">
//         {/* BHK Dropdown */}
//         <div className="relative inline-block w-full sm:w-48">
//           <select
//             className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
//             value={selectedBHK}
//             onChange={(e) => setSelectedBHK(e.target.value)}
//           >
//             <option value="">BHK</option>
//             {bhkOptions.map((bhk) => (
//               <option key={bhk} value={bhk}>
//                 {bhk}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Country Dropdown */}
//         <div className="relative inline-block w-full sm:w-48">
//           <select
//             className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
//             value={selectedCountry}
//             onChange={(e) => setSelectedCountry(e.target.value)}
//           >
//             <option value="">Country</option>
//             {countries.map((country) => (
//               <option key={country} value={country}>
//                 {country}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Price Range Dropdown */}
//         <div className="relative inline-block w-full sm:w-48">
//           <select
//             className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
//             value={selectedPriceRange}
//             onChange={(e) => setSelectedPriceRange(e.target.value)}
//           >
//             <option value="">Price Range</option>
//             {priceRanges.map((range) => (
//               <option key={range} value={range}>
//                 {range}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyRent;
// components/BuyRent.tsx

// components/BuyRent.tsx

import React, { useState } from "react";
import CardsGrid from "./Cardgrid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const bhkOptions = ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK"];
const squareFeetOptions = [
  "400 sqft",
  "500 sqft",
  "600 sqft",
  "700 sqft",
  "800 sqft",
  "900 sqft",
  "1000 sqft",
];
const priceRanges = [
  "$100,000 - $200,000",
  "$200,000 - $300,000",
  "$300,000 - $400,000",
  "$400,000 - $500,000",
];

const properties = [
  // Your properties data here
];

const BuyRent: React.FC = () => {
  const [selectedBHK, setSelectedBHK] = useState<string>("");
  const [selectedSquareFeet, setSelectedSquareFeet] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const isWithinPriceRange = (price: string, range: string): boolean => {
    const numericPrice = parseInt(price.replace(/[$,]/g, ""));
    const [min, max] = range
      .replace(/[$,]/g, "")
      .split(" - ")
      .map((value) => parseInt(value));

    console.log(`Checking price ${numericPrice} within range ${min} - ${max}`);
    return numericPrice >= min && numericPrice <= max;
  };

  const handleSortNow = () => {
    const filtered = properties.filter((property) => {
      const bhkMatch = selectedBHK ? property.bhk === selectedBHK : true;
      const sqftMatch = selectedSquareFeet
        ? property.sqft === selectedSquareFeet
        : true;
      const priceMatch = selectedPriceRange
        ? isWithinPriceRange(property.price, selectedPriceRange)
        : true;

      console.log(
        `BHK match: ${bhkMatch}, SQFT match: ${sqftMatch}, Price match: ${priceMatch}`
      );
      return bhkMatch && sqftMatch && priceMatch;
    });

    setFilteredProperties(filtered);

    if (filtered.length > 0) {
      toast.success("Property sorted as per the requirement");
    } else {
      toast.info("No properties match the selected filters");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Buy/Rent Properties</h2>

      <div className="flex flex-wrap gap-4 mb-6 items-center">
        {/* BHK Dropdown */}
        <div className="relative inline-block w-full sm:w-48">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
            value={selectedBHK}
            onChange={(e) => setSelectedBHK(e.target.value)}
          >
            <option value="">BHK</option>
            {bhkOptions.map((bhk) => (
              <option key={bhk} value={bhk}>
                {bhk}
              </option>
            ))}
          </select>
        </div>

        {/* Square Feet Dropdown */}
        <div className="relative inline-block w-full sm:w-48">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
            value={selectedSquareFeet}
            onChange={(e) => setSelectedSquareFeet(e.target.value)}
          >
            <option value="">Square Feet</option>
            {squareFeetOptions.map((sqft) => (
              <option key={sqft} value={sqft}>
                {sqft}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Dropdown */}
        <div className="relative inline-block w-full sm:w-48">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="">Price Range</option>
            {priceRanges.map((range) => (
              <option key={range} value={range}>
                {range}
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

      {/* Display filtered properties in CardsGrid */}
      <CardsGrid properties={filteredProperties} />

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default BuyRent;
