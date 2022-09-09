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
  @media (max-width: 914px) {
    padding: 3rem 10rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 6rem;
  }
  @media (max-width: 518px) {
    padding: 1rem 2rem;
  }
`;
