import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";

const SymptomStep = () => {
  let { handleNext, symptoms, loading, handleBack } = useContext(AppContext);
  const [activeNext, setActiveNext] = useState(0);
  const [symptomId, setSymptomId] = useState();
  const [symptomError, setSymptomError] = useState("");

  const sendInfo = () => {
    if (!symptomId) {
      setSymptomError("لطفا علامت خود را وارد کنید");
      return 0;
    }
    handleNext({
      symptomId: symptomId,
    });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="علامت"
            name="symptomId"
            rror={!!symptomError}
            helperText={symptomError}
            required
            onClick={(e) => {
              setSymptomId(e.target.value);
              setActiveNext(1);
            }}
          >
            {symptoms.map((symptom) => {
              return (
                <option key={symptom.id} value={symptom.id}>
                  {symptom.name}{" "}
                </option>
              );
            })}
          </TextField>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button color="inherit" sx={{ mr: 1 }} onClick={handleBack}>
          قبلی
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          disabled={activeNext == 0}
          color="primary"
          onClick={activeNext ? sendInfo : () => null}
        >
          بعدی
        </Button>
      </Box>
    </>
  );
};

export default SymptomStep;
