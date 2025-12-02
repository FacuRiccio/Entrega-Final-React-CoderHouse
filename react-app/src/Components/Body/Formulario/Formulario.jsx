import { Link } from "react-router";
import Form from "./Form";
const Formulario = () => {
  return (
    <div>
      <h2>Ingresar a mi cuenta</h2>
      <p>Utilice los datos con los que creo su cuenta</p>
      <Form></Form>
      <br />
      <Link to="/" className="clean-link ">
        Olvidaste tu contraseña ?
      </Link>
      <p className="text">
        Creá una cuenta de usuario en menos de 1 minuto para comenzar a operar
        en el sitio web
      </p>
    </div>
  );
};

export default Formulario;
