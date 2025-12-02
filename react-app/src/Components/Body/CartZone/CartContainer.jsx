import CartContext from "../../context/CartContext";
import CarritoBacio from "./CarritoVacio";
import ListaCarrito from "./ListaCarrito";
import { useContext } from "react";
const Carrito = () => {
  const { cartState } = useContext(CartContext);

  return <div>{cartState.length ? <ListaCarrito /> : <CarritoBacio />}</div>;
};

export default Carrito;
