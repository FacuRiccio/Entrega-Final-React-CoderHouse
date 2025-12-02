import { useState, useEffect, useContext } from "react";
import CartContext from "../../context/CartContext";
import { useParams, Link } from "react-router";
import { getProduct } from "../../../firebase/db";
import ItemClick from "./ItemClick";

function ItemInfo() {
  const [prod, setProd] = useState(null);
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const { cartState, addToCart, restCart } = useContext(CartContext);
  useEffect(() => {
    getProduct(id)
      .then((x) => {
        setProd(x);
      })
      .catch((err) => console.error(err));
  }, [id]);
  const handleSumar = () => {
    if (count < 1) {
      setCount(count + 1);
      addToCart({ ...cartState, prod });
    }
  };

  const handleRestar = () => {
    if (count > 0) {
      setCount(count - 1);
      restCart();
    }
  };
  // const handleAddToCard = () => addToCart({ ...cartState, prod });
  if (count < 0);
  return (
    <ItemClick
      count={count}
      handleRestar={handleRestar}
      handleSumar={handleSumar}
      prod={prod}
    />
  );
}

export default ItemInfo;
