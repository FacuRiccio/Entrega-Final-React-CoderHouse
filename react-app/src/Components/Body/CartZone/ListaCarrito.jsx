import CartContext from "../../context/CartContext";
import { useContext } from "react";
import ProductosCarrito from "./ProductosCarrito";
import { Link } from "react-router";
function ListaCarrito() {
  const { cartState, setCartState } = useContext(CartContext);
  const prod = cartState.map((item) => item.prod);
  const handleClick = () => {
    setCartState([]);
  };

  return (
    <div>
      <div>
        {prod.map((item) => {
          return <ProductosCarrito items={item} key={item.xtitle} />;
        })}
      </div>

      <Link to={"/Form"} className="btn-finish">
        Terminar Compra
      </Link>
      <button className="btn-finish-orange" onClick={handleClick}>
        Vaciar Carrito
      </button>
    </div>
  );
}
/*>{cartState.map((producto) => producto.prod)}*/
export default ListaCarrito;
