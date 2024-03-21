import '../css/login_module.css'
export default function Login() {
  return (
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/login.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <title>Login</title>
  </head>
  <body>
    <div className="circulos"></div>
    <div className="circulos"></div>
    <form className="form">
      <h1>LOGIN</h1>
      <p>Ingrese la información para registrarse</p>

      <section className="con-inp">
        <div className="inputs">
          <select className="select-css">
            <option value="">ROL</option>
            <option value="1">Administrador</option>
            <option value="2">Usuario</option>
          </select>
          <i className="fa-solid fa-person-half-dress"></i>
        </div>
        <div className="inputs">
          <input type="emial" required/>
          <i className="fa-regular fa-envelope"></i>
          <label>Correo</label>
        </div>
        <div className="inputs">
          <input type="password" required/>
          <i className="fa-solid fa-lock"></i>
          <label>Contraseña</label>
        </div>
      </section>
      <section className="footer">
        <a href="restablecer.html">¿Olvidaste la contraseña?</a>
        <div className="con">
            <p>¿No tienes cuenta?</p>
            <a href="registro.html">Registrarse</a>
        </div>
      </section>

      <input type="submit" value="Iniciar sesión" className="btn-r" />
    </form>
  </body>
  <script
    src="https://kit.fontawesome.com/065a4d3490.js"
    crossOrigin="anonymous"
  ></script>
</html>
  )
}

