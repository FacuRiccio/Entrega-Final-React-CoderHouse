import { useState, useEffect } from "react";
import ContextConteiner from "../context/ContainerContext";
import { getProducts } from "../../firebase/db";
const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((x) => {
        setProducts(x);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <ContextConteiner.Provider value={{ products, setProducts }}>
      {children}
    </ContextConteiner.Provider>
  );
};

export default ApiProvider;
