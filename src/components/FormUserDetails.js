import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import * as yup from "yup";
import Styles from "./style.module.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const validationSchema = yup.object({
  name: yup.string().required("Name is required").max(30),
  date: yup.string().required("Please enter your date of birth"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.number().required("Please enter your phone number"),
});

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  const classes = useStyles();
  return (
    <>
      <div className={Styles.pageSt}>
        <h3 className={Styles.headSt}>Enter User Details</h3>
        <Formik
          initialValues={formData}
          onSubmit={(values) => {
            setFormData(values);
            nextStep();
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className={Styles.formSt}>
              <Field
                name="name"
                label="Your Name *"
                margin="normal"
                as={TextField}
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
              <label className={Styles.labSt}>Date of birth *</label>
              <Field
                type="date"
                name="date"
                label=""
                margin="normal"
                as={TextField}
                error={touched.date && !!errors.date}
                helperText={touched.date && errors.date}
              />
              <Field
                type="email"
                name="email"
                label="Email *"
                margin="normal"
                as={TextField}
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <Field
                type="number"
                name="phone"
                label="Phone Number *"
                margin="normal"
                as={TextField}
                error={touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
              />
              <Button
                type="submit"
                variant="contained"
                className={`${Styles.btnSt} ${classes.button}`}
              >
                Continue
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

FormUserDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
