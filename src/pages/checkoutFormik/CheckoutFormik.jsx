import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      contraseña: "",
      confirmar: "",
    },
    onSubmit: (data) => {
      console.log("se envia");
      console.log(data);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Debe contener como mínimo 5 caracteres"),

      email: Yup.string()
        .email("El email debe contener @")
        .required("Este campo es obligatorio")
        .matches(
          /@(hotmail\.com|gmail\.com|yahoo\.com)$/,
          "El correo electrónico debe ser de uno de los dominios permitidos: @hotmail.com, @gmail.com, o @yahoo.com"
        ),

      telefono: Yup.number().required("Este campo es obligatorio"),

      contraseña: Yup.string()
        .required("Este campo es obligatorio")
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*-`?¿=.·"])(?=.*[a-z])(?=.*[A-Z])/,
          "La contraseña debe tener como mínimo una Mayuscula, una minuscula, un número, y un símbolo"
        ),
      confirmar: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf(
          [Yup.ref("contraseña")],
          "La contraseña debe coincidir con la colocada anteriormente"
        ),
    }),
    validateOnChange: false,
  });
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="text"
        label="nombre"
        name="nombre"
        onChange={handleChange}
        error={errors.nombre ? true : false}
        helperText={errors.nombre}
      />
      <TextField
        variant="outlined"
        type="text"
        label="email"
        name="email"
        onChange={handleChange}
        error={errors.email ? true : false}
        helperText={errors.email}
      />
      <TextField
        variant="outlined"
        type="text"
        label="telefono"
        name="telefono"
        onChange={handleChange}
        error={errors.telefono ? true : false}
        helperText={errors.telefono}
      />
      <TextField
        variant="outlined"
        type="text"
        label="contraseña"
        name="contraseña"
        onChange={handleChange}
        error={errors.contraseña ? true : false}
        helperText={errors.contraseña}
      />
      <TextField
        variant="outlined"
        type="text"
        label="confirmar"
        name="confirmar"
        onChange={handleChange}
        error={errors.confirmar ? true : false}
        helperText={errors.confirmar}
      />
      <Button type="submit" variant="contained">
        Registrarse
      </Button>
    </form>
  );
};

export default CheckoutFormik;
