import React from "react";
import styled from "styled-components";

const ProgressBar = ({ currentQuestionIndex, totalQuestionsCount }) => {
  const progressPercentage =
    ((currentQuestionIndex - 1) / totalQuestionsCount) * 100;

  return (
    <ProgressBarContainer>
      <ProgressBarText>
        سوال {currentQuestionIndex} از {totalQuestionsCount}
      </ProgressBarText>
      <ProgressBarInner style={{ width: `${progressPercentage}%` }} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  width: 100%;
  background: #f3f3f3;
  height: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const ProgressBarText = styled.div`
  font-size: 0.7em;
  position: absolute;
  z-index: 10;
`;

const ProgressBarInner = styled.div`
  background: #6ad85c;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  transition: ease all 0.5s;
  border-radius: 3px;
`;
