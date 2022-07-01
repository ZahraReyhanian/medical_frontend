import React from "react";
import styled from "styled-components";
import { Button } from "../styles/GlobalStyles";

const QuizStartCard = () => {
  return (
    <CardContainer>
      <BackCard>
        <CardWrapper>
          <QuizPriceWrapper>
            <p>قیمت : 30000 تومان</p>
          </QuizPriceWrapper>
          <QuizStartButtonWrapper>
            <QuizStartButton>شروع</QuizStartButton>
          </QuizStartButtonWrapper>
        </CardWrapper>
      </BackCard>
    </CardContainer>
  );
};

export default QuizStartCard;

const CardContainer = styled.div``;
const BackCard = styled.div`
  width: 23rem;
  height: 19rem;

  background: linear-gradient(
    180deg,
    rgba(108, 207, 238, 0.5) 0%,
    rgba(76, 127, 228, 0.5) 100%
  );
  backdrop-filter: blur(40px);
  border-radius: 0px 60px 60px 60px;
`;

const CardWrapper = styled.div`
  width: 23rem;
  height: 19rem;
  position: absolute;
  top: 33px;
  right: 43px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 0px 60px 60px 60px;
  padding-left: 2rem;
  padding-top: 3rem;
`;

const QuizPriceWrapper = styled.div`
  p {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }
`;

const QuizStartButtonWrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
`;
const QuizStartButton = styled(Button)`
  width: 16rem;
  color: #000;
  font-weight: 600;
  font-size: 22px;
  background-color: #b1e9a3;

  &:hover {
    background-color: #3eab48;
  }
`;
