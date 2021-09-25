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
  school: yup.string().required("Please enter your school name"),
  college: yup.string().required("Please enter your college name"),
});

export const EducationalInfo = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const classes = useStyles();
  const [direction, setDirection] = useState("back");
  return (
    <>
      <div className={Styles.pageSt}>
        <h3 className={Styles.headSt}>Educational Info</h3>
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
                name="school"
                label="Your school *"
                margin="normal"
                as={TextField}
                error={touched.school && !!errors.school}
                helperText={touched.school && errors.school}
              />
              <Field
                name="college"
                label="Your college *"
                margin="normal"
                as={TextField}
                error={touched.college && !!errors.college}
                helperText={touched.college && errors.college}
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

EducationalInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
