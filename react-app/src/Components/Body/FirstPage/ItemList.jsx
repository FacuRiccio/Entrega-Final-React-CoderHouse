import Item from "./Items";
import { useContext, useState } from "react";

import ContextConteiner from "../../context/ContainerContext";

function ItemList() {
  const { products } = useContext(ContextConteiner);
  return (
    <div className="first-zone">
      {products.map((items, i) => {
        return <Item data={items} key={i}></Item>;
      })}
    </div>
  );
}

export default ItemList;
