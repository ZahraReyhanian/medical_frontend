import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let [activeStep, setActiveStep] = useState(0);
  let [skipped, setSkipped] = useState(new Set());

  let isStepSkipped = (step) => {
    return skipped.has(step);
  };

  let handleNext = (e) => {
    console.log(e);
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    console.log("iiiiiiiiiiiiiiiiiiiii");

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  let handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  let handleReset = () => {
    setActiveStep(0);
  };

  let contextData = {
    activeStep: activeStep,
    skipped: skipped,
    isStepSkipped: isStepSkipped,
    isStepSkipped: isStepSkipped,
    handleBack: handleBack,
    handleReset: handleReset,
    handleNext: handleNext,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
