import { createContext, useState } from "react";
import { toast } from "react-toastify";
import useAxiosSimple from "../../hooks/useAxiosSimple";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let [activeStep, setActiveStep] = useState(0);
  let [skipped, setSkipped] = useState(new Set());
  let [symptoms, setSymptoms] = useState([]);
  let [symptom, setSymptom] = useState({});
  let [loading, setLoading] = useState(false);

  let isStepSkipped = (step) => {
    return skipped.has(step);
  };

  let api = useAxiosSimple();

  const getSymptoms = async (url, data) => {
    setLoading(true);
    try {
      let response = await api.post(url, data);
      setSymptoms(response.data);
    } catch (err) {
      console.log(err.message);

      // setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getSymptomQuestions = async (url) => {
    console.log(url);
    setLoading(true);
    try {
      let response = await api.get(url);
      console.log(response.data);
      setSymptom(response.data);
    } catch (err) {
      console.log(err.message);

      // setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  let handleNext = (data) => {
    switch (activeStep) {
      case 0:
        getSymptoms("/disease/symptoms/requestsymptom/", data);
        break;
      case 1:
        getSymptomQuestions(`/disease/symptoms/${data.symptomId}/`);
        break;
      // case 2:
      //   return "What services do you want?";
      // case 3:
      //   return "Confirm your info";
      // default:
      //   return "Unknown step";
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

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
    symptoms: symptoms,
    loading: loading,
    symptom: symptom,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
