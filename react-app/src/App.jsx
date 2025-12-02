import Layout from "./Components/Body/Header/Layout";
import ItemListContainer from "./Components/Body/FirstPage/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import ItemInfo from "./Components/Body/FirstPage/ItemListClick";
import CategoryName from "./Components/Body/CategoryName/CategoryZone";
import ContenedorFormulario from "./Components/Body/Formulario/ContenedorFormulario";
import Footer from "./Components/Body/Footer/Footer";
import CartContainer from "./Components/Body/CartZone/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element=<ItemListContainer /> />
        <Route path="/category/:category" element=<CategoryName /> />
        <Route path="/Item/:id" element=<ItemInfo /> />
        <Route path="/Form" element=<ContenedorFormulario /> />
        <Route path="/CartZone" element=<CartContainer /> />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
