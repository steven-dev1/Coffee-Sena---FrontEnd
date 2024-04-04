import { useState } from "react";
import "../css/aside_module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


// Iconos
import { HiArchive } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

function Aside() {
  const [menu, setMenu] = useState(true);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <aside className={menu ? 'aside open' : 'aside close'}>
      <div className="container-aside-top">
        <div className="menu" onClick={toggleMenu}>
          {menu ?  <HiOutlineX /> : <HiMenu />}
        </div>
        <div className="title-aside">
          <h1 className="h1-aside">Coffee Sena</h1> 
          <img className="img-aside" src="../../public/logo-coffeesena.png" alt="Logo coffee sena" />
        </div>
        <nav className={"nav-aside"}>
          <ul className="ul-aside">
            <li className="li-nav-aside">
              <Link className={`links-nav-aside ${pathname == '/inicio' ? 'active' : ''}`} to={"/inicio"}><HiOutlineHome /> <span className="span-links">Inicio</span></Link>
            </li>
            <li className="li-nav-aside">
              <Link className={`links-nav-aside ${pathname == '/inventario' ? 'active' : ''}`} to={"/inventario"}><HiArchive className="h-6 w-6 text-blue-500" /> <span className="span-links">Inventario</span></Link>
            </li>
            <li className="li-nav-aside">
              <Link className={`links-nav-aside ${pathname == '/venta' ? 'active' : ''}`} to={"/venta"}><HiOutlineCurrencyDollar /> <span className="span-links">Venta</span></Link>
            </li>
            <li className="li-nav-aside">
              <Link className={`links-nav-aside ${pathname == '/Historial' ? 'active' : ''}`} to={"/Historial"}><HiOutlineCurrencyDollar /> <span className="span-links">Historial</span></Link>
            </li>
          </ul>
        </nav>
        <nav className="nav-aside false">
          <ul className="ul-aside">
            <li className="li-nav-aside">
              <Link className={`links-nav-aside ${pathname == '/inicio' ? 'active' : ''}`} to={"/inicio"}><HiOutlineHome /></Link>
            </li>
            <li className="li-nav-aside">
              <Link className={`links-nav-aside ${pathname == '/inventario' ? 'active' : ''}`} to={"/inventario"}><HiArchive className="h-6 w-6 text-blue-500" /></Link>
            </li>
            <li className="li-nav-aside">
              <Link className={`links-nav-aside ${pathname == '/venta' ? 'active' : ''}`} to={"/venta"}><HiOutlineCurrencyDollar /></Link>
            </li>
            <li className="li-nav-aside">
              <Link className={`links-nav-aside ${pathname == '/Historial' ? 'active' : ''}`} to={"/Historial"}><HiOutlineCurrencyDollar /></Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container-aside-bottom">
        <div className="organize">
          <div className="container-aside-img-rol">
            <div className="container-img-aside">
              <img src="../../public/user.png" alt="Logo coffee sena" />
            </div>
            <span>Admin</span>
          </div>
          <div className="container-buttom-leave">
            <span className="logout-span">Cerrar sesión</span>
            <HiLogout />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
