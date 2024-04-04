import '../css/historial_module.css';
import { Link } from "react-router-dom";

export default function Historial() {


 return (
      <main>
        <header>
            <div className="top-header">
                <div className="container-title-header-top">
                    <h2>Historial</h2>
                </div>
            </div>
            <div className="bottom-header">
                <div className="bottom">
                    <label className="labels" htmlFor="name-product">Nro. de Documento:</label>
                    <input className="inputs" type="text" name="name-product-inventory" id="name-product-inventory" style={{ borderBottom: '1px solid #ccc' }} />
                </div>
                <div className="bottom-header-right">
                    <button className="button-green">Buscar</button>
                </div>
            </div>
        </header>
        <section>
            <table className="table">
                <thead>
                  <tr>
                    <th>Nro. Documento</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Compras</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0000000000</td>
                    <td>Pepito Juan</td>
                    <td>Juarez Guzman</td>
                    <td>
                        <Link to="/HistorialUsuario" className="rutHistory">Ver Historial</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
        </section>
    </main>
 );
}