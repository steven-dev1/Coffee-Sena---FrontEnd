import '../css/inventario_module.css';
import Swal from 'sweetalert2';
import { useState, useEffect} from 'react'

export default function Inventario() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.data));

  }, []);

//Funcion agregar producto
 const handleAddProduct = () => {
    Swal.fire({
      title: 'Agregar producto',
      html: `
        <form id="addProductForm">
          <input type="text" id="productName" name="productName" class="swal2-input" placeholder="Nombre" required>
          <input type="number" id="productPrice" name="productPrice" class="swal2-input" placeholder="Precio" required>
          <input type="text" id="productCategory" name="productCategory" class="swal2-input" placeholder="Categoria" required>
          <input type="number" id="productQuantity" name="productQuantity" class="swal2-input" placeholder="Cantidad" required>
          <input type="date" id="productDate" name="productDate" class="swal2-input" placeholder="Fecha de ingreso" required>
        </form>
      `,
      showDenyButton: true,
      confirmButtonText: "Agregar",
      confirmButtonColor:"#00BF9C",
      denyButtonText: `Cancelar`,
      cancelButtonColor: '#ff4747',
      preConfirm: () => {
        const form = Swal.getPopup().querySelector('#addProductForm');
        if (!form.checkValidity()) {
          Swal.showValidationMessage('Por favor, rellene todos los campos');
          return;
        }
        // Simulate form submission
        console.log('Form submitted');
        return true; // Return true to close the SweetAlert2 dialog
      }
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          
          Swal.fire("Agregado exitosamente", "", "success");
        } catch (e) {
          console.log(e);
        }
      } else if (result.isDenied) {
        Swal.fire("No se aplicaron los cambios", "", "info" );
      }
    });
 };

 //Funcion para editor producto
 const handleEditar = () => {
  Swal.fire({
    title: 'Editar Producto',
    html: `
      <input id="nombre" class="swal2-input" placeholder="Nombre del producto">
      <input id="precio" class="swal2-input" placeholder="Precio">
      <input id="cantidad" class="swal2-input" placeholder="Cantidad">
    `,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#00BF9C',
    cancelButtonColor: '#ff4747',
  });
};

//Funcion para eliminar producto
const handleEliminar = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "No podrás revertir esta acción",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#00BF9C',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#ff4747',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: '¡Eliminado!',
        text: 'El producto ha sido eliminado correctamente.',
        icon: 'success',
        confirmButtonColor: '#00BF9C'
      });
    }
  });
};

 return (
    <main>
      <main>
        <header>
            <div className="top-header">
                <div className="container-title-header-top">
                    <h2>Inventario</h2>
                </div>
                <div className="container-header-top-right">
                  <button className="button-add-inventory button-green" id="add-product-inventory" onClick={handleAddProduct}>Agregar producto</button>
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
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                {products.map((p) => {
                  return (
                    <tr key={p.PROD_ID}>
                      <td>{p.PROD_NOM}</td>
                      <td>{p.PROD_PREC}</td>
                      <td>{p.PROD_PREC}</td>
                      <td>
                        <button className="button-green" onClick={handleEditar} >Editar</button>
                        <button className="button-red" onClick={handleEliminar} >Eliminar</button>
                      </td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
        </section>
    </main>
    </main>
 );
}
