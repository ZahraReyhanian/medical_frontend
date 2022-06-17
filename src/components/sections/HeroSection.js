import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { H1, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import PurchaseButton from "../buttons/PurchaseButton";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function HeroSection() {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper md={5} sm={12}>
            <Title>
              مرکز پزشکی
              <br /> روانشناسی <span>نوین</span>
            </Title>
            <Description>
              تحت نظر پزشک عمومی، ارائه دهنده خدمات و اطلاعات پزشکی روانشناسی
              مورد نیاز اقشار مختلف جامعه
            </Description>
            {/* <PurchaseButton title="Start Now!" /> */}
          </TextWrapper>
          <ImgWrapper md={7} sm={12}>
            <img src="/images/home/home.png" alt="home" />
          </ImgWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default HeroSection;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% {opacity: 1; transform: translateY(0px); filter: blur(0px);}
`;

const Wrapper = styled.div`
  overflow: hidden;
`;
const ContentWrapper = styled(Row)`
  max-width: 1234px;
  margin: 0 auto;
  padding: 55px 30px;

  @media (max-width: 450px) {
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled(Col)`
  max-width: 1234px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;
const Title = styled(H1)`
  color: ${themes.dark.text1};
  line-height: 90px;
  background: linear-gradient(
    to right,
    rgb(134, 239, 172),
    rgb(59, 130, 246),
    rgb(147, 51, 234)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding-bottom: 50px;

  span {
    background: linear-gradient(180deg, #008891 0%, #008891 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 914px) {
    font-weight: 700;
    line-height: 75px;
  }

  @media (max-width: 768px) {
    line-height: 65px;
  }
`;

const Description = styled(MediumText)``;

const ImgWrapper = styled(Col)`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 2rem;
  img {
    width: 100%;
    margin-top: 2rem;
  }

  @media (max-width: 914px) and (min-width: 768px) {
    padding: 0;
  }
  @media (max-width: 760px) {
    transform: scale(0.9);
    padding: 0;
    img {
      width: 100%;
      margin-top: 88px;
    }
  }
`;
