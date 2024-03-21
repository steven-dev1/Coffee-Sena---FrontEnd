import Header from "../components/Header";
import '../css/inicio_module.css'

function Inicio() {
  return (
    <>
      <Header title={"Inicio"} fecha={"29 Feb"} />
      <section className="con-sect">
        <div className="containIni">
          <div className="informe">
            <div className="tituInfo">Ordenes Recientes</div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Orden</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#876364</td>
                  <td>Combo: Pastelito-gaseosa </td>
                  <td>3.500</td>
                  <td>
                    <div className="total">10</div>
                  </td>
                  <td>35.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="estadis">
            <div className="datos">
              <div className="tituInfo">Datos</div>
              <canvas id="myChart" width="300" height="300"></canvas>
            </div>

            <div className="popular">
              <div className="tituInfo">Populares hoy</div>
              <div className="contePopu">
                <div className="imgPopu">
                  <img
                    src="../assets/img/comida.png"
                    alt="Producto"
                    width="87px"
                    height="77px"
                  />
                </div>
                <div className="infoPopu">
                  Subsidiado Sena opcion 2
                  <div id="star-rating">
                    <span className="star" data-value="1">
                      &#9733;
                    </span>
                    <span className="star" data-value="2">
                      &#9733;
                    </span>
                    <span className="star" data-value="3">
                      &#9733;
                    </span>
                    <span className="star" data-value="4">
                      &#9733;
                    </span>
                    <span className="star" data-value="5">
                      &#9733;
                    </span>
                  </div>
                </div>
              </div>
              <div className="contePopu">
                <div className="imgPopu">
                  <img
                    src="../assets/img/enpanada.png"
                    alt="Producto"
                    width="87px"
                    height="77px"
                  />
                </div>
                <div className="infoPopu">
                  Empanada
                  <div id="star-rating">
                    <span className="star" data-value="1">
                      &#9733;
                    </span>
                    <span className="star" data-value="2">
                      &#9733;
                    </span>
                    <span className="star" data-value="3">
                      &#9733;
                    </span>
                    <span className="star" data-value="4">
                      &#9733;
                    </span>
                    <span className="star" data-value="5">
                      &#9733;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  );
}

export default Inicio;
