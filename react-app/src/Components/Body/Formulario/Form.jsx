import { zodResolver } from "@hookform/resolvers/zod";
import schema from "./schemas/user";
import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Coloca tu Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          {...register("nombre")}
        />
        {errors.nombre && <p className="warning">Campo Obligatorio</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Coloca tu Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          {...register("apellido")}
        />
        {errors.apellido && <p className="warning">Campo Obligatorio</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Coloca tu Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
          {...register("email")}
        />
        {errors.email && <p className="warning">Campo Obligatorio</p>}
      </div>
      <button className="init-btn">Iniciar Sesion</button>
    </form>
  );
};
export default Form;
