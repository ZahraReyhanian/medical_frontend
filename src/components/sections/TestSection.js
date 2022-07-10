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
      <TestContainer>
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
                <Link to="/tests">
                  <TestButton>امتحانش کن!</TestButton>
                </Link>
              </ButtonWrapper>
            </TextWrapper>
          </TestCol>
        </TestRow>
      </TestContainer>
    </SectionContainer>
  );
};

export default TestSection;

const TestContainer = styled(Container)`
  padding: 0 6rem;

  @media screen and (max-width: 768px) {
    padding: 0 1.6rem;
  }
`;

const TestRow = styled(Row)`
  margin-top: 2.5rem;

  @media screen and (max-width: 768px) {
    margin-top: 1.8rem;
  }
`;

const TestCol = styled(Col)``;

const ImgWrapper = styled.div`
  padding-left: 1rem;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
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
  padding-right: 1rem;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    padding-right: 0;
  }
`;

const Description = styled(BodyMain)`
  padding-top: 4rem;
  padding-bottom: 3rem;
  @media screen and (max-width: 768px) {
    padding-top: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  text-align: left;
`;

const TestButton = styled(Button)``;
