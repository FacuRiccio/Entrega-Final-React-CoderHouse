# 🛒 DespensaToto - Kiosco Online

Proyecto final para el curso de **ReactJS** en **Coderhouse**. Esta app simula un e-commerce enfocado en un kiosco de barrio, con el objetivo de mostrar productos, filtrarlos por categoría y permitir al usuario agregarlos o eliminarlos del carrito.

---

## 🧾 Descripción

**DespensaToto** es una app inspirada en un negocio real del barrio, desarrollada como proyecto final del curso. Fue construida con **React** y conectada a **Firestore** para la gestión de productos y pedidos.

---

## 🚀 Funcionalidades Principales

- ✅ Visualización de productos disponibles en la despensa.
- 🔍 Filtro por categorías (Quesos, Chocolates, Galletas, etc.).
- 🛒 Carrito de compras funcional con suma/resta de cantidad.
- 📄 Formulario de checkout con validaciones.
- 🔁 Navegación por páginas usando `react-router-dom`.

---

## 🧱 Estructura del Proyecto

El proyecto está estructurado por componentes en carpetas organizadas por responsabilidad:

- `Body/`: contiene vistas principales como :
  `Formulario/`: lógica y validación de formularios.
  `Header/`: elementos del menú y navegación.
  `context/`: manejo del carrito mediante contexto.
  `firebase/`: configuración de Firestore.

---

## 🛠️ Tecnologías y Librerías Usadas

- **React** – Librería principal para construir la interfaz.
- **React Router DOM** – Para manejar las rutas/páginas.
- **React Hook Form** – Para controlar el formulario de contacto/checkout.
- **Zod** – Para validar los datos del formulario.
- **Firebase Firestore** – Base de datos donde están los productos.
- **Bootstrap** – Framework de estilos base.
- **React-Bootstrap** – Utilizado en menor medida para componentes rápidos.

---

## 📂 Estructura del Proyecto

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
