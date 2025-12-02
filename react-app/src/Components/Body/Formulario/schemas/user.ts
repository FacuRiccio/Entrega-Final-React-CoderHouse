import { z } from "zod";
const schema = z.object({
  nombre: z.string().min(4, "Campo Obligatorio"),
  apellido: z.string().min(4, "Campo Obligatorio"),
  email: z.string().email("Email invalido"),
});
export default schema;
