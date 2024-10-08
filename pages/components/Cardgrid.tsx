import React from "react";
import Card from "./Card";

interface Property {
  image: string;
  description: string;
  price: string;
  rating: number;
}

interface CardsGridProps {
  selectedBHK: number | null;
  selectedSquareFeet: [number, number] | null;
  selectedPriceRange: [number, number] | null;
}

const properties: Property[] = [
  {
    image:
      "https://img.freepik.com/premium-photo/modern-residential-apartments-with-flats-building-exterior-with-outdoor-facilities-new-luxury-house-home-complex-green-yard-city-real-estate-property-condo-architecture-empty-background_250132-17286.jpg",
    description: "2BHK, 600 sqft",
    price: "$200,000",
    rating: 5,
  },
  {
    image:
      "https://propertyadviser.in/property-images/s2/rayala-sai-empire-a-5067-s2.jpg?02092023",
    description: "3BHK, 800 sqft",
    price: "$300,000",
    rating: 4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5rWTUXm4ggcLkBUxHNlZ4qQHvdnOiiy3eEQ&s",
    description: "1BHK, 400 sqft",
    price: "$150,000",
    rating: 4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Hc9s1-J3qyOfCMyRghIm8UMcuqRhIl4I8A&s",
    description: "2BHK, 700 sqft",
    price: "$250,000",
    rating: 4,
  },
  {
    image:
      "https://www.dhamuandcompany.net/wp-content/uploads/2021/05/pallacia-jaipur-5-bhk-flat-sale-jaipur1-488x326.jpg",
    description: "3BHK, 900 sqft",
    price: "$350,000",
    rating: 4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgu6g0EDcefqKdtOeQeHLAfbTM-RESCRfHQ&s",
    description: "2BHK, 650 sqft",
    price: "$230,000",
    rating: 4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOcVMDLznJCO2wvsz0itjozsr0acd5hKNuA&s",
    description: "1BHK, 450 sqft",
    price: "$180,000",
    rating: 4,
  },
  {
    image: "https://www.krishgroup.org/wp-content/uploads/2015/07/20.png",
    description: "3BHK, 1000 sqft",
    price: "$400,000",
    rating: 4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWlluAURw3nZ6uU3bpuQ03UlV6ZaO69zEkA&s",
    description: "2BHK, 750 sqft",
    price: "$280,000",
    rating: 4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRp8D5J2I4VUD5jKNndTNBQhaiwxTOKOKDg&s",
    description: "1BHK, 500 sqft",
    price: "$190,000",
    rating: 4,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFNADfnbnEoqgqghmn4y7qR1uHaefN6y1KA&s",
    description: "3BHK, 950 sqft",
    price: "$370,000",
    rating: 4,
  },
  {
    image:
      "https://www.gharjunction.com/server/php/files/property/795/Sangles-Trinity-6.jpg",
    description: "2BHK, 600 sqft",
    price: "$210,000",
    rating: 4,
  },
];

const CardsGrid: React.FC<CardsGridProps> = ({
  selectedBHK,
  selectedSquareFeet,
  selectedPriceRange,
}) => {
  const filteredProperties = properties.filter((property) => {
    const [bhk, sqftString] = property.description
      .split(",")
      .map((item) => item.trim());
    const propertyBHK = parseInt(bhk.replace(/\D/g, ""), 10);
    const propertySquareFeet = parseInt(sqftString.replace(/\D/g, ""), 10);
    const propertyPrice = parseInt(property.price.replace(/\D/g, ""), 10);

    const matchesBHK = selectedBHK ? propertyBHK === selectedBHK : true;
    const matchesSquareFeet = selectedSquareFeet
      ? propertySquareFeet >= selectedSquareFeet[0] &&
        propertySquareFeet <= selectedSquareFeet[1]
      : true;
    const matchesPrice = selectedPriceRange
      ? propertyPrice >= selectedPriceRange[0] &&
        propertyPrice <= selectedPriceRange[1]
      : true;

    return matchesBHK && matchesSquareFeet && matchesPrice;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {filteredProperties.map((property, index) => (
        <Card
          key={index}
          image={property.image}
          description={property.description}
          price={property.price}
          rating={property.rating}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
