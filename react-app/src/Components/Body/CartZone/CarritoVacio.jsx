import { Link } from "react-router";
function CarritoBacio() {
  return (
    <div className="Carrito-Bacio">
      <h1>No tienes nada en tu carrito😢😢</h1>
      <Link className="carritobacio-btn" to={"/"}>
        Volver a ver productos
      </Link>
    </div>
  );
}

export default CarritoBacio;
