import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FirstStep from "./components/FirstStep";
import { AppContext } from "./Context";
import SymptomStep from "./components/SymptomStep";

const steps = ["سن و جنسیت", "علامت", "پرسش ها", "تشخیص"];

const HeaderStepper = () => {
  let { isStepSkipped, handleReset, activeStep } = useContext(AppContext);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SymptomStep />;
      case 2:
        return "What services do you want?";
      case 3:
        return "Confirm your info";
      default:
        return "Unknown step";
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>بازنشانی</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
      )}
    </Box>
  );
};

export default HeaderStepper;
