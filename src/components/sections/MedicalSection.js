import React from "react";
import styled from "styled-components";
import { Button, Container, SectionContainer } from "../styles/GlobalStyles";
import TitleComponent from "../title/TitleComponent";
import { BodyMain } from "../styles/TextStyles";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const MedicalSection = () => {
  return (
    <SectionContainer>
      <Container>
        <MedicalRow>
          <MedicalRight md={5} sm={12}>
            <TitleWrapper>
              <TitleComponent title="تشخیص بیماری ها" align={"right"} />
            </TitleWrapper>
            <MedicalServices>
              <ServiceCaption>
                با ارائه علائم بیماری تشخیص نسبی از بیماری احتمالی شما ارائه می
                دهد.
              </ServiceCaption>
              <ServiceButtonWrapper>
                <Link to="/diagnosis">
                  <Button>بزن بریم!</Button>
                </Link>
              </ServiceButtonWrapper>
            </MedicalServices>
          </MedicalRight>
          <MedicalLeft md={7} sm={12}>
            <MedicalImagesWrapper>
              <MedicalImagesLeft md={6} sm={12}>
                <ImageContainerLeft src="/images/services/doctor.png" />
              </MedicalImagesLeft>
              <MedicalImagesRight md={6} sm={12}>
                <ImageContainerRight src="/images/services/health1.jpg" />
                <ImageContainerRight src="/images/services/health2.jpg" />
              </MedicalImagesRight>
            </MedicalImagesWrapper>
          </MedicalLeft>
        </MedicalRow>
      </Container>
    </SectionContainer>
  );
};

export default MedicalSection;

const MedicalRow = styled(Row)`
  margin-top: 2.5rem;
`;

const MedicalRight = styled(Col)``;

const MedicalLeft = styled(Col)``;

const TitleWrapper = styled.div`
  margin-bottom: 4rem;
`;

const MedicalServices = styled.div``;

// const MedicalService = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 2rem;
// `;

const ServiceCaption = styled(BodyMain)``;

const ServiceButtonWrapper = styled.div`
  margin-top: 100px;
  button {
    width: 60%;
  }
`;

const MedicalImagesWrapper = styled(Row)`
  img {
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const MedicalImagesLeft = styled(Col)`
  padding: 0;
  text-align: center;
`;

const MedicalImagesRight = styled(Col)`
  display: flex;
  flex-direction: column;
  @media (max-width: 786px) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 2rem;
  }
`;

const ImageContainerLeft = styled.img`
  width: 15rem;
  height: 27rem;
  border-radius: 1rem;
`;

const ImageContainerRight = styled.img`
  width: 13rem;
  height: 13rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 786px) {
    padding: 1rem;
  }
`;
