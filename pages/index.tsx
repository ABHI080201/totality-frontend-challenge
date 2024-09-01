import { Inter } from "next/font/google";
import CardsGrid from "./components/Cardgrid";

export default function Home() {
  const selectedBHK = null;
  const selectedSquareFeet = null;
  const selectedPriceRange = null;

  return (
    <>
      <CardsGrid
        selectedBHK={selectedBHK}
        selectedSquareFeet={selectedSquareFeet}
        selectedPriceRange={selectedPriceRange}
      />
    </>
  );
}
