import { InputAdornment, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
//import MuiPhoneNumber from "material-ui-phone-number";

const Register = () => {
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
    return (
        <div>
        <TextField
        label="Имя"
        variant="outlined"
        name="email"
        InputProps={{
            endAdornment: (
              <InputAdornment variant="filled" position="end">
               <span> 2/50</span>
              </InputAdornment>
            ),
          }}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.errors.email)}
        className="mb-4"
        placeholder="Enter your E-mail"
       fullWidth
      />
        {/* <MuiPhoneNumber
                    name="phone"
                    label="Phone Number"
                    data-cy="user-phone"
                    className="mb-4"
                    //defaultCountry={"us"}
                    disableDropdown
                    variant='outlined'
                    fullWidth
                  /> */}
        <Typography >Использовать эл. почту</Typography>
        </div>
    )
}

export default Register