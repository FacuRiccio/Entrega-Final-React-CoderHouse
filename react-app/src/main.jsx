import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ApiProvider from "./Components/providers/ApiProvider.jsx";
import CustomProvider from "./Components/providers/CustomProvider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <CustomProvider>
        <App />
      </CustomProvider>
    </ApiProvider>
  </React.StrictMode>
);
