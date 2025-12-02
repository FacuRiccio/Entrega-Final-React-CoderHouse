import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const productos = [];
  querySnapshot.forEach((doc) => {
    productos.push({ ...doc.data(), id: doc.id });
  });
  return productos;
};
export const getCategoris = async () => {
  const querySnapshot = await getDocs(collection(db, "categorys"));
  const categories = [];
  querySnapshot.forEach((doc) => {
    categories.push(doc.data().name);
  });

  return categories;
};

export const getProductsByCategorys = async (category) => {
  const q = query(
    collection(db, "productos"),
    where("category", "==", category)
  );
  const querySnapshot = await getDocs(q);
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  return products;
};
export const getProduct = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};
