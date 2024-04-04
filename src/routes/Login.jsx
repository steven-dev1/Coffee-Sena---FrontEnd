import '../css/login_module.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// iconos

function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    "Ema_User": "",
    "Pass_User": "",
    "Dir_Ip": "192.168.0.5"
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const authLogin = (e) => {
    e.preventDefault();
    try {
        fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.code === 200) {
          navigate('/inicio')
        }
      })
    } catch(e) {
      console.log(e);
    }
  }
  return (
  <body>
    <form id="form-login" onSubmit={authLogin}>
      <div className='title-login'>
        <img src="../../public/logo-coffeesena.png" alt="" />
        <h1>LOGIN</h1>
        <p>Ingrese la información para registrarse</p>
      </div>
      <section className="con-inp">
        <div className="inputs">
          <input type="email" name='Ema_User' onChange={handleChange} required/>
          <i className="fa-regular fa-envelope"></i>
          <label>Correo</label>
        </div>
        <div className="inputs">
          <input type="password" name='Pass_User' onChange={handleChange} required/>
          <label>Contraseña</label>
        </div>
        <div className="footer-login__top">
            <a href="register">¿Olvidaste la contraseña?</a>
          <div>
            <p>¿No tienes cuenta?</p>
            <a href="register">Registrarse</a>
          </div>
        </div>
      </section>
      <button type="submit" className="btn-r">Iniciar sesión</button>
    </form>
  </body>
  )
}

export default Login;

