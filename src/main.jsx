import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Venta from "./routes/Venta";
import Inventario from "./routes/Inventario";
import Inicio from "./routes/Inicio";
import Login from "./routes/Login";
import Auth from "./Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/inicio", element: <Inicio/> },
      { path: "/venta", element: <Venta/> },
      { path: "/inventario", element: <Inventario/> },
    ]
  },
  {
    path: "/",
    element: <Auth/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/login", element: <Login/> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
