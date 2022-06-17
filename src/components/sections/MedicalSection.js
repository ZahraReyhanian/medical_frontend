import React from "react";
import styled from "styled-components";
import { Container, SectionContainer } from "../styles/GlobalStyles";
import TitleComponent from "../title/TitleComponent";
import { BodyMain } from "../styles/TextStyles";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MedicalSection = () => {
  return (
    <SectionContainer>
      <Container>
        <MedicalRow>
          <MedicalRight md={5} sm={12}>
            <TitleWrapper>
              <TitleComponent title="انواع خدمات پزشکی" align={"right"} />
            </TitleWrapper>
            <MedicalServices>
              <MedicalService>
                <img height={30} src="/images/icons/angle-circle-left.svg" />
                <ServiceCaption>تشخیص بیماری ها</ServiceCaption>
              </MedicalService>
              <MedicalService>
                <img height={30} src="/images/icons/angle-circle-left.svg" />
                <ServiceCaption>داروخانه نوین</ServiceCaption>
              </MedicalService>
              <MedicalService>
                <img height={30} src="/images/icons/angle-circle-left.svg" />
                <ServiceCaption>آزمایشگاه نوین</ServiceCaption>
              </MedicalService>
            </MedicalServices>
          </MedicalRight>
          <MedicalLeft md={7} sm={12}>
            <MedicalImagesWrapper>
              <MedicalImagesLeft md={6} sm={12}>
                <ImageContainerLeft src="/images/services/doctor.png" />
              </MedicalImagesLeft>
              <MedicalImagesRight md={6} sm={12}>
                <ImageContainerRight src="/images/services/drug.jpg" />
                <ImageContainerRight src="/images/services/lab.jpg" />
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

const MedicalService = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
`;

const ServiceCaption = styled(BodyMain)`
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    margin-right: 2rem;
    color: #1363df;
    cursor: pointer;
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
  padding: 0 1rem;
  text-align: center;
`;

const MedicalImagesRight = styled(Col)`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
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
`;
