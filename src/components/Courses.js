import React, { useState } from "react";
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
  courses: yup
    .string()
    .required("Please enter your courses you are interested in"),
});

export const Courses = ({ formData, setFormData, nextStep, prevStep }) => {
  const classes = useStyles();
  const [direction, setDirection] = useState("back");
  return (
    <>
      <div className={Styles.pageSt}>
        <h3 className={`${Styles.headSt} mb-4`}>Courses</h3>
        <Formik
          initialValues={formData}
          onSubmit={(values) => {
            setFormData(values);
            direction === "back" ? prevStep() : nextStep();
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className={Styles.formSt}>
              <Field
                type="textarea"
                rows="6"
                name="courses"
                placeholder="Your courses *"
                margin="normal"
                as="textarea"
                error={touched.courses && !!errors.courses}
                helperText={touched.courses && errors.courses}
              />
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  className={`${Styles.backSt} ${classes.button}`}
                  onClick={() => setDirection("back")}
                >
                  Back
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  className={`${Styles.btnSt} ${classes.button}`}
                  onClick={() => setDirection("forward")}
                >
                  Continue
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

Courses.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
