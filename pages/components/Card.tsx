import React from "react";
import { useCart } from "../context/CardContext";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa6";

interface CardProps {
  image: string;
  description: string;
  price: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({ image, description, price, rating }) => {
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    addToCart({ image, description, price });

    toast.success("Item added to cart!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt="Property" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items center mt-2">
          <p className="text-gray-700">{description}</p>
          <div className="flex justify-center items-center">
            <p className="text-red-700 text-bold text-xl pr-1 ">{rating}</p>
            <FaStar className="text-xl text-orange-800 " />
            <p className="text-red-700 text-md">Rating</p>
          </div>
        </div>
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
