import '../css/historial-usuario_module.css';


export default function HistorialUsuario() {

    return (
            <main>
                <header>
                    <div className="top-header">
                        <div className="container-title-header-top">
                            <h2>Historial por Usuario</h2>
                        </div>
                    </div>
                    <div className="bottom-header">
                        <div className="bottom-header-left">
                            <label>Codigo de pedido</label>
                            <input type="text" />
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
                                <th>Codigo</th>
                                <th>Producto</th>
                                <th>Valor</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    0000000000
                                </td>
                                <td>Jugo del Valle x400ml</td>
                                <td>$2.000</td>
                                <td>
                                    11/03/2024
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
    );
}