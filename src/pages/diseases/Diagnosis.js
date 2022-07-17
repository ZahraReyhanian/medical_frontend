import React from "react";
import styled from "styled-components";
import { AppProvider } from "./Context";
import HeaderStepper from "./HeaderStepper";

const Diagnosis = () => {
  return (
    <Wrapper>
      <AppProvider>
        <HeaderStepper />
      </AppProvider>
    </Wrapper>
  );
};

export default Diagnosis;

const Wrapper = styled.div`
  padding: 4rem 14rem;
`;
