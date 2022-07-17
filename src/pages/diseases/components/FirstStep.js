import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";
import useAxiosSimple from "../../../hooks/useAxiosSimple";

export default function FirstStep() {
  let { handleNext } = useContext(AppContext);
  const [activeNext, setActiveNext] = useState(0);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [ageError, setAgeError] = useState("");
  const [genderError, setGenderError] = useState("");
  let api = useAxiosSimple();

  const getData = async (url, data) => {
    try {
      let response = await api.post(url, data);
      let res = response.data;
      console.log(res);
    } catch (err) {
      console.log(err.message);

      // setError(err.message);
    } finally {
      // setLoading(false);
    }
  };

  const isError = () => {
    let ageVAl = "";
    let genderVal = "";
    setAge((state) => {
      ageVAl = state;
      if (!ageVAl) {
        setAgeError("لطفا سن را وارد کنید");
      } else {
        setAgeError("");
        setGender((state) => {
          genderVal = state;
          if (!genderVal) {
            setGenderError("لطفا جنسیت را وارد کنید");
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
    console.log(gender);
    getData("/disease/symptoms/requestsymptom/", {
      gender: gender,
      age: age,
    });
    handleNext();
  };

  return (
    <>
      <Grid container spacing={2}>
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
          <TextField
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Gender"
            name="gender"
            error={!!genderError}
            helperText={genderError}
            required
            onChange={(e) => {
              setGender(e.target.value);
              isError();
            }}
          >
            <option value=""> </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </TextField>
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

      {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box> */}
    </>
  );
}
