import '../css/registro_module.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    Nom_User: '',
    Ape_User: '',
    Ema_User: '',
    Pass_User: '',
    Dir_Ip: "192.168.0.5"
  });
  console.log(data);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      fetch('http://localhost:3000/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.code === 200) {
          navigate('/login')
        }
      })
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <body>
      <form id="form-register" onSubmit={handleSubmit}>
      <div className='title-register'>
        <img src="../../public/logo-coffeesena.png" alt="" />
        <h1>Registro</h1>
        <p>Ingrese la información para registrarse</p>
      </div>
        <section className="con-inp">
          <div className="inputs">
            <input
              type="text"
              required
              id="name"
              name="Nom_User"
              value={data.Nom_User}
              onChange={handleChange}
            />
            <i className="fa-regular fa-user"></i>
            <label>Nombre</label>
          </div>
          <div className="inputs">
            <input
              type="text"
              required
              id="lastname"
              name="Ape_User"
              value={data.Ape_User}
              onChange={handleChange}
            />
            <i className="fa-regular fa-user"></i>
            <label>Apellido</label>
          </div>
          <div className="inputs">
            <input
              type="email"
              required
              id="email"
              name="Ema_User"
              value={data.Ema_User}
              onChange={handleChange}
            />
            <i className="fa-regular fa-envelope"></i>
            <label>Correo</label>
          </div>
          <div className="inputs">
            <input
              type="password"
              required
              id="password"
              name="Pass_User"
              value={data.Pass_User}
              onChange={handleChange}
            />
            <i className="fa-solid fa-lock"></i>
            <label>Contraseña</label>
          </div>
          <div className="footer-register">
            <p>¿Ya tienes cuenta?</p>
            <a href="login">Iniciar sesión</a>
          </div>
        </section>
        <button type="submit" value="Registrar" className="btn-r">
          Registrarse
        </button>
      </form>
    </body>
  );
};
export default Registro;