import CartContext from "../context/CartContext";
import { useState } from "react";

const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);
  const [count, setCount] = useState();
  const longitudCarrito = cartState.length;
  const addToCart = (product) => {
    setCartState([...cartState, product]);
  };
  const restCart = () => setCartState([...cartState.slice(0, -1)]);

  return (
    <CartContext.Provider
      value={{
        cartState,
        setCartState,
        longitudCarrito,
        addToCart,
        restCart,
        count,
        setCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
