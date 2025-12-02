import { Link } from "react-router";
const ItemClick = ({ handleSumar, handleRestar, count, prod }) => {
  return (
    <div className="grid-layout">
      <div className="prod-img">
        <img src={prod?.img} alt="" className="img_prod" />
      </div>
      <div className="prod-info">
        {" "}
        <h1 className="prod-title">{prod?.title}</h1>
        <p className="prod_text">{prod?.description}</p>
        <Link className="btn-add" to={"/CartZone"}>
          Ir Al Carrito
        </Link>
        <button className="boton" onClick={() => handleSumar()}>
          +
        </button>
        {count ? count : 0}
        <button className="boton" onClick={() => handleRestar()}>
          -
        </button>
      </div>
    </div>
  );
};
export default ItemClick;
