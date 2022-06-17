import React from "react";
import styled from "styled-components";
import { Button, Container, SectionContainer } from "../styles/GlobalStyles";
import TitleComponent from "../title/TitleComponent";
import { BodyMain } from "../styles/TextStyles";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const TestSection = () => {
  return (
    <SectionContainer>
      <Container>
        <TestRow>
          <TitleComponent title="آزمون های روانشناسی" align={"center"} />
        </TestRow>
        <TestRow>
          <TestCol md={6} sm={12}>
            <ImgWrapper>
              <Img src="/images/test/test.png" alt="آزمون های روانشناسی" />
            </ImgWrapper>
          </TestCol>
          <TestCol md={6} sm={12}>
            <TextWrapper>
              <Description>
                انواع آزمون های روانشناسی برای بررسی انواع اختلال های شخصیتی،
                روحی و روانی برگرفته از آزمون های معتبر ایران و جهان با ارائه
                دقیق نتیجه ی آن
              </Description>
              <ButtonWrapper>
                <Link to="">
                  <TestButton>امتحانش کن!</TestButton>
                </Link>
              </ButtonWrapper>
            </TextWrapper>
          </TestCol>
        </TestRow>
      </Container>
    </SectionContainer>
  );
};

export default TestSection;

const TestRow = styled(Row)`
  margin-top: 2.5rem;
`;

const TestCol = styled(Col)``;

const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: line-block;
  max-height: 500px;
`;

const TextWrapper = styled.div`
  max-width: 540px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

const Description = styled(BodyMain)`
  padding-top: 4rem;
  padding-bottom: 3rem;
`;

const ButtonWrapper = styled.div`
  text-align: left;
`;

const TestButton = styled(Button)``;
