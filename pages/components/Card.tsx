// components/Card.tsx

import React from "react";
import { useCart } from "../context/CardContext";
import toast from "react-hot-toast";

interface CardProps {
  image: string;
  description: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, description, price }) => {
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    // Add item to cart
    addToCart({ image, description, price });

    // Show toast notification
    toast.success("Item added to cart!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt="Property" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-900 font-semibold">{price}</p>
          <button
            onClick={handleBuyNow}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
