import React from "react";
import styled from "styled-components";
import { Container, Row } from "../styles/GlobalStyles";
import TitleComponent from "../title/TitleComponent";

const MedicalSection = () => {
  return (
    <MedicalContainer>
      <Container>
        <MedicalRow>
            <MedicalRight></MedicalRight>
            <MedicalLeft></MedicalLeft>
        </MedicalRow>
      </Container>
    </MedicalContainer>
  );
};

export default MedicalSection;

const MedicalContainer = styled.div`
  padding-top: 70px;
  padding-bottom: 150px;
  margin: 0;
`;

const MedicalRow = styled(Row)``;

const MedicalRight = styled.div``;

const MedicalLeft = styled.div``;