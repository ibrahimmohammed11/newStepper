import React, { useState } from "react";
import { FormUserDetails } from "./FormUserDetails";
import { Reviews } from "./Reviews";
import { Confirm } from "./Confirm";
import { Success } from "./Success";
import { EducationalInfo } from "./EducationalInfo";
import { Courses } from "./Courses";

export const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    email: "",
    phone: "",
    school: "",
    college: "",
    courses: "",
    newEra: "",
    eLearning: "",
    where: "",
    likeCourses: "",
    rate: 8,
    comments: "",
  });
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <EducationalInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Courses
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Reviews
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return (
        <Confirm formData={formData} nextStep={nextStep} prevStep={prevStep} />
      );
    default:
      return <Success />;
  }
};
