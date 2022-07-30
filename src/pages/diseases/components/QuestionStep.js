import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const QuestionStep = () => {
  let { handleNext, loading, handleBack, symptom } = useContext(AppContext);
  const [activeNext, setActiveNext] = useState(0);
  const [optionIds, setOptionIds] = useState({});

  const changeOptionIds = (id, value) => {
    const selectedCheckboxes = optionIds;

    // Find index
    // const findIdx = selectedCheckboxes.indexOf(id);

    // Index > -1 means that the item exists and that the checkbox is checked
    // and in that case we want to remove it from the array and uncheck it
    if (selectedCheckboxes.id) {
      delete selectedCheckboxes.id;
    } else {
      selectedCheckboxes[id] = value;
    }

    setOptionIds(selectedCheckboxes);

    if (selectedCheckboxes.length != 0) {
      setActiveNext(1);
    } else {
      setActiveNext(0);
    }
  };

  const sendInfo = () => {
    const data = {
      options: optionIds,
      symptom_id: symptom.id,
    };
    console.log(data);
    handleNext(data);
  };

  return (
    <>
      <div>
        {loading && <p>در حال بارگزاری ...</p>}
        {!loading &&
          symptom.questions.map((question) => {
            return (
              <QuestionWrapper key={question.id}>
                <FormLabel component="legend">
                  {question.number} - {question.question}
                </FormLabel>
                <Row>
                  {question.options.map((option) => {
                    return (
                      <Col md={6} sm={12} key={option.id}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={() =>
                                changeOptionIds(option.id, option.value)
                              }
                              name="option_ids"
                            />
                          }
                          label={option.option}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </QuestionWrapper>
            );
          })}
      </div>
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

export default QuestionStep;

const QuestionWrapper = styled.div`
  padding: 1rem 0;
  legend,
  span {
    font-family: Vazir, serif !important;
  }
  legend {
    font-weight: bold;
    color: #000;
  }
`;
