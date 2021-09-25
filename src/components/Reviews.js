import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
  newEra: yup.string().required("Required"),
  eLearning: yup.string().required("Required"),
  likeCourses: yup
    .string()
    .required("Please enter courses you would like to be added"),
  rate: yup
    .number()
    .required("Please rate your experience with us from 1 to 10?"),
});
export const Reviews = ({ formData, setFormData, nextStep, prevStep }) => {
  const classes = useStyles();
  const [direction, setDirection] = useState("back");
  return (
    <>
      <div className={Styles.pageSt}>
        <h3 className={`${Styles.headSt} mb-4`}>Review</h3>
        <Formik
          initialValues={formData}
          onSubmit={(values) => {
            setFormData(values);
            direction === "back" ? prevStep() : nextStep();
          }}
          validationSchema={validationSchema}
        >
          <Form className={Styles.formSt}>
            <div>
              <div>
                <div className={Styles.questSt}>
                  Do you think online learning is the new Era?
                </div>
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="newEra"
                    value="yes"
                    id="my-radio-group"
                  />
                  <label htmlFor="my-radio-group" className="form-check-label">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="newEra"
                    value="no"
                    id="my-radio-group1"
                  />
                  <label htmlFor="my-radio-group1" className="form-check-label">
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="newEra"
                  component="div"
                  className="text-danger p-2 mt-1"
                />
              </div>
              <div>
                <div className={Styles.questSt}>
                  Have you ever Experienced E-Learning?
                </div>
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="eLearning"
                    value="yes"
                    id="my-radio-group2"
                  />
                  <label htmlFor="my-radio-group2" className="form-check-label">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="eLearning"
                    value="no"
                    id="my-radio-group4"
                  />
                  <label htmlFor="my-radio-group3" className="form-check-label">
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="eLearning"
                  component="div"
                  className="text-danger p-2 mt-1"
                />
              </div>
              <div className="form-group">
                <label className={Styles.questSt}>Where..?</label>
                <Field
                  type="text"
                  name="where"
                  label="Where..?"
                  placeholder="Where..?"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <label className={Styles.questSt}>
                What courses you would like to be added to the website?
              </label>
              <Field
                type="text"
                name="likeCourses"
                className="form-control"
                placeholder="Courses you like"
              />
              <ErrorMessage
                name="likeCourses"
                component="div"
                className="text-danger p-2 mt-1"
              />
            </div>
            <div className="form-group">
              <label className={Styles.questSt}>
                Please rate your experience with us from 1 to 10?
              </label>

              <Field
                type="text"
                name="rate"
                className="form-control"
                placeholder="Rate"
              />
              <ErrorMessage
                name="rate"
                component="div"
                className="alert-danger p-2 mt-1"
              />
            </div>
            <div className="form-group">
              <label className={Styles.questSt}>Extra comments</label>
              <Field
                rows="5"
                name="comments"
                as="textarea"
                placeholder="Comments"
                className="form-control"
              />
            </div>
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
        </Formik>
      </div>
    </>
  );
};

Reviews.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
