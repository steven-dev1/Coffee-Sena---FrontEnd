import { Outlet } from "react-router-dom";
import Aside from "./components/Aside";
import './css/aside_module.css'

function App() {

  return (
      <body> 
        <Aside />
        <main>
          <Outlet/>
        </main>
      </body>
  );
}

export default App;
