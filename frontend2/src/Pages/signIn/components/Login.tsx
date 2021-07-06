import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
interface PropsType {}
const Login: React.FC<PropsType> = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Required")}),
        validateOnChange: false,
        validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },

    
  });
console.log(formik.errors)
  return (
    <div className="d-flex align-items-center flex-column">
      <TextField
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.errors.email)}
        className="mb-4 "
        placeholder="Enter your E-mail"
        style={{ width: "70%" }}
        variant="standard"
        size="medium"
      />
      <TextField
        name="password"
        type="password"
        autoComplete='new-password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.errors.password)}
        className="mb-2"
        placeholder="And your password"
        style={{ width: "70%" }}
        variant="standard"
        size="medium"
      />
      <Typography style={{ fontSize: "13px" }} className="border-bottom">
        fogot a password
      </Typography>
      <Button
        color="primary"
        variant="contained"
        className="mt-3"
        style={{ borderRadius: 20 }}
        fullWidth
      >
        {" "}
        Войти
      </Button>
    </div>
  );
};
export default Login;
