import Logo2 from "../../../img/Logo2.png";
import { BsPersonCircle } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import { getCategoris } from "../../../firebase/db";
import ListOption from "./ListOption";
import ButtonOption from "./ButtonOption";

const NavBar = () => {
  const { longitudCarrito } = useContext(CartContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategoris()
      .then((x) => setCategories(x))
      .catch((err) => console.log(err));
  }, []);
  return (
    <header>
      <nav className="container-first">
        <Link to={"/"}>
          <img src={Logo2} className="Logo" />
        </Link>
        <input
          type="text"
          className="buscador"
          placeholder="Que estas buscando?"
        />
        <button className="btn" type="submit"></button>
        <span className="btn-header-container">
          <Link className="clean-link" to={"/Form"}>
            <ButtonOption
              Icon={BsPersonCircle}
              size={40}
              color="#3e445a"
              texto="Registrarme Mi Cuenta"
            />
          </Link>
          <Link className="clean-link" to={"/CartZone"}>
            <ButtonOption
              Icon={FaShoppingCart}
              size={40}
              color="#3e445a"
              texto="Ver  Carrito"
              counter={
                <button className="Cart-counter">{longitudCarrito}</button>
              }
            />
          </Link>
        </span>
      </nav>
      <ListOption
        lista={categories}
      ></ListOption>
    </header>
  );
};

export default NavBar;
