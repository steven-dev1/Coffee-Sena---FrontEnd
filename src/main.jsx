import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Venta from "./routes/Venta";
import Inventario from "./routes/Inventario";
import Inicio from "./routes/Inicio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/inicio", element: <Inicio/> },
      { path: "/venta", element: <Venta/> },
      { path: "/inventario", element: <Inventario/> }
    ]
  }
 
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
