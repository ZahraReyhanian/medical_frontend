import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Button from "@mui/material/Button";
import { AppContext } from "../Context";
import styled from "styled-components";

const ResultStep = () => {
  let { handleNext, loading, handleBack, results } = useContext(AppContext);
  const [activeNext, setActiveNext] = useState(1);

  return (
    <>
      {loading && <p>در حال بارگزاری ...</p>}
      {!loading && results?.length == 0 && <p>نتیجه ای یافت نشد</p>}
      {!loading && results?.length > 0 && (
        <ListWrapper>
          <HeaderWrapper>
            <h3>
              شما احتمالا مبتلا به یکی از موارد زیر می باشید. برای اطلاعات بیشتر
              به پزشک مراجعه کنید.
            </h3>
          </HeaderWrapper>
          {results.map((result) => {
            return (
              <ListItem>
                <ListItemText primary={result} />
              </ListItem>
            );
          })}
        </ListWrapper>
      )}

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
          onClick={activeNext ? handleNext : () => null}
        >
          بعدی
        </Button>
      </Box>
    </>
  );
};

export default ResultStep;

const ListWrapper = styled(List)`
  span {
    text-align: right;
    font-family: Vazir, serif !important;
  }
`;

const HeaderWrapper = styled.div`
  margin-bottom: 2rem;
`;
