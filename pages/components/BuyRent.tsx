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

  const handleSortNow = () => {};

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Buy/Rent Properties</h2>

      <div className="flex flex-wrap gap-4 mb-6 items-center">
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
