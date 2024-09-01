// components/Cart.tsx

import React from "react";
import { useCart } from "../context/CardContext";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={item.image}
                alt="Property"
                className="w-full h-32 object-cover rounded"
              />
              <p className="text-gray-700 mt-2">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-900 font-semibold">{item.price}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200"
                  >
                    -
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
