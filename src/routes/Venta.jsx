import '../css/venta_module.css'
export default function Venta() {
  return (
    <main>
    <section className="container-main-top">
      <h1 className="main-title">Venta</h1>
      <select className="main-select">
        <option value="">May 2024</option>
        <option value="">Feb 2024</option>
        <option value="">Ene 2024</option>
      </select>
    </section>

    <section className="main-filters">
      <div className="container-main-inputs">
        <label>No. de Orden</label>
        <input type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      </section>
    <section className="main-container">
      <section className="con-table">
        <table className="table-venta">
          <thead>
            <tr>
              <th>Imagen y Nombre del Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Opciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="imagen_producto1.jpg" />
                <span>Nombre del Producto 1</span>
              </td>
              <td>$100.00</td>
              <td>10</td>
              <td>
                <button className="button-green">Editar</button>
                <button className="button-red">Eliminar</button>
                <button className="button-black">Pagar</button>
              </td>
            </tr>
            </tbody>
        </table>
      </section>

    </section>
  </main>
  )

}