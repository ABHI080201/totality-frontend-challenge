import React, { createContext, useContext, useState } from "react";

type CartItem = {
  image: string;
  description: string;
  price: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (index: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
