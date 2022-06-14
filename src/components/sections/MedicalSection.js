import React from "react";
import styled from "styled-components";
import { Container } from "../styles/GlobalStyles";
import TitleComponent from "../title/TitleComponent";
import {BodyMain} from "../styles/TextStyles"
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MedicalSection = () => {
  return (
    <MedicalContainer>
      <Container>
        <TitleComponent title="انواع خدمات پزشکی" align={"right"} />
        <MedicalRow>
            <MedicalRight  md={6} sm={12}>
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
            <MedicalLeft  md={6} sm={12}>
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
    </MedicalContainer>
  );
};

export default MedicalSection;

const MedicalContainer = styled.div`
  padding: 50px 0;
  margin: 0;
`;

const MedicalRow = styled(Row)`
  margin-top: 2.5rem;
`;

const MedicalRight = styled(Col)``;

const MedicalLeft = styled(Col)``;

const MedicalServices = styled.div`
`;

const MedicalService = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
`;

const ServiceCaption = styled(BodyMain)`
  margin: 0 1rem;
`

const MedicalImagesWrapper = styled(Row)`
  img {
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const MedicalImagesLeft = styled(Col)`
  padding: 0 1rem;
  text-align: center;
`

const MedicalImagesRight = styled(Col)`
  padding: 0.5rem 1rem;
`

const ImageContainerLeft = styled.img`
  width: 14rem;
  height: 22rem;
  border-radius: 1rem;
`

const ImageContainerRight = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
`