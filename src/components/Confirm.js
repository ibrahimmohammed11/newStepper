import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Styles from "./style.module.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const Confirm = ({ formData, prevStep, nextStep }) => {
  const classes = useStyles();
  const {
    name,
    date,
    email,
    phone,
    school,
    college,
    courses,
    newEra,
    eLearning,
    where,
    likeCourses,
    rate,
    comments,
  } = formData;
  return (
    <>
      <div className={Styles.pageSt}>
        <h3 className={Styles.headSt}>Confirm Your Data</h3>
        <div>
          <List>
            <ListItem>
              <ListItemText
                primary="Your Name"
                secondary={name}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Date of birth"
                secondary={date}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Email"
                secondary={email}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Phone Number"
                secondary={phone}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="school"
                secondary={school}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="college"
                secondary={college}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="courses"
                secondary={courses}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="newEra"
                secondary={newEra}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="eLearning"
                secondary={eLearning}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="where"
                secondary={where}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="likeCourses"
                secondary={likeCourses}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="rate"
                secondary={rate}
                className={Styles.confirmData}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="comments"
                secondary={comments}
                className={Styles.confirmData}
              />
            </ListItem>
          </List>
          <div className={Styles.confirmData}>
            <Button
              color="secondary"
              variant="contained"
              className={classes.button}
              onClick={() => prevStep()}
            >
              Back
            </Button>

            <Button
              color="primary"
              variant="contained"
              className={`${Styles.btnSt} ${classes.button}`}
              onClick={() => nextStep()}
            >
              Confirm & Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
