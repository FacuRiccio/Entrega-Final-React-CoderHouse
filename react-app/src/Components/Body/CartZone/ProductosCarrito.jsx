import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

function ProductosCarrito({ items }) {
  const { cartState, setCartState } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const handleSumar = () => {
    setCount(count + 1);
    addToCart({ ...cartState, prod });
  };
  const handleRestar = () => {
    if (count > 0) {
      setCount(count - 1);
      restCart();
    }
  };
  const handleClick = (title) => {
    const filtrado = cartState.filter((item) => item.prod.title !== title);
    setCartState(filtrado);
  };

  return (
    <div className="productos-carrito">
      <section className="first-prod-zone">
        <img src={items.img} className="img-cart-zone" />
      </section>
      <section className="second-prod-zone">
        <h1 className="item-prod-title">{items.name}</h1>
        <p className="prod-card-text">{items.description}</p>
        <p>Cuantos queres llevar ?</p>
        <div>
          <button className="boton" onClick={handleSumar}>
            +
          </button>
          {count}
          <button className="boton" onClick={handleRestar}>
            -
          </button>
        </div>
        <button className="btn-danger" onClick={() => handleClick(items.title)}>
          Eliminar
        </button>
      </section>
    </div>
  );
}

export default ProductosCarrito;
