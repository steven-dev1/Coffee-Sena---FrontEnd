import { Outlet } from "react-router-dom";
// import Aside from "./components/Aside";
import './css/aside_module.css'

export default function Auth() {
  return (
      <body> 
        <Outlet/>
      </body>
  );
}
