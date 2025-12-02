import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Categorys from "./Categorys";
import { getProducts, getProductsByCategorys } from "../../../firebase/db";

function CategoryName() {
  const { category } = useParams();
  const [state, setState] = useState([]);
  useEffect(() => {
    category
      ? getProductsByCategorys(category).then((x) => setState(x))
      : getProducts()
          .then((x) => setState(x))
          .catch((err) => console.error(err));
  }, [category]);
  return (
    <div className="first-zone">
      {state.map((el, id) => {
        return <Categorys prod={el} key={id}></Categorys>;
      })}
    </div>
  );
}

export default CategoryName;
