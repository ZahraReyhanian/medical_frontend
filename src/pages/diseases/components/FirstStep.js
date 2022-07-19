import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AppContext } from "../Context";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

export default function FirstStep() {
  let { handleNext } = useContext(AppContext);
  const [activeNext, setActiveNext] = useState(0);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [ageError, setAgeError] = useState("");
  const [genderError, setGenderError] = useState("");

  const isError = () => {
    let ageVAl = "";
    let genderVal = "";
    setAge((state) => {
      ageVAl = state;
      if (!ageVAl) {
        setAgeError("لطفا سن را وارد کنید");
        setActiveNext(0);
      } else if (ageVAl < 0) {
        setAgeError("سن باید عددی مثبت باشد");
        setActiveNext(0);
      } else {
        setAgeError("");
        setGender((state) => {
          genderVal = state;
          if (!genderVal) {
            setGenderError("لطفا جنسیت را وارد کنید");
            setActiveNext(0);
          } else {
            setGenderError("");
            setActiveNext(1);
          }
          return state;
        });
      }

      return state;
    });
  };

  const sendInfo = () => {
    handleNext({
      gender: gender,
      age: age,
    });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="سن"
            name="age"
            type="number"
            placeholder="سن شما"
            error={!!ageError}
            helperText={ageError}
            required
            onChange={(e) => {
              setAge(e.target.value);
              isError();
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormLabel id="demo-row-radio-buttons-group-label">جنسیت</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            error={!!genderError}
            helperText={genderError}
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
              isError();
            }}
            required
          >
            <FormControlLabel value="female" control={<Radio />} label="زن" />
            <FormControlLabel value="male" control={<Radio />} label="مرد" />
          </RadioGroup>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button color="inherit" disabled sx={{ mr: 1 }}>
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
}
