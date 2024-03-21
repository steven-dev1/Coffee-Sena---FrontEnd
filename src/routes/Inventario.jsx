import '../css/inventario_module.css'

export default function Inventario() {
  return (
    <main>
        <header>
            <div className="top-header">
                <div className="container-title-header-top">
                    <h2>Inventario</h2>
                </div>
                <div className="container-header-top-right">
                    <button className="button-add-inventory button-green" id="add-product-inventory">Agregar producto</button>
                    <div className="date-inventory">
                        <span><i className="fa-solid fa-calendar"></i>Mayo 2024</span>
                    </div>
                </div>
            </div>
            <div className="bottom-header">
                <div className="bottom-header-left">
                    <div>
                        <label className="labels" htmlFor="name-product">Nombre del producto:</label>
                        <input className="inputs" type="text" name="name-product-inventory" id="name-product-inventory" />
                    </div>
                    <div>
                        <label className="labels" htmlFor="name-product">Categoria:</label>
                        <input className="inputs" type="text" name="category-product-inventory" id="category-product-inventory" />
                    </div>
                </div>
                <div className="bottom-header-right">
                    <button className="button-green">Buscar</button>
                    <button className="button-black">Reiniciar</button>
                </div>
            </div>
        </header>
        <section>
            <table className="table">
                <thead>
                  <tr>
                    <th>Imagen y Nombre del Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
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
                    </td>
                  </tr>
                </tbody>
              </table>
        </section>
    </main>
  )
}