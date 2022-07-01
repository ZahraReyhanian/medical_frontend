import React from "react";
import styled from "styled-components";

const QuizDetail = ({ icon, description }) => {
  return (
    <QuizDetailWrapper>
      <IconWrapper>
        <img src={icon} />
      </IconWrapper>
      <DescriptionWrapper>
        <p>{description}</p>
      </DescriptionWrapper>
    </QuizDetailWrapper>
  );
};

export default QuizDetail;

const QuizDetailWrapper = styled.div`
  display: flex;
  margin-left: 1.5rem;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-left: 5px;
  img {
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
`;
const DescriptionWrapper = styled.div`
  p {
    font-size: 13px;
    padding-top: 19px;
  }
`;
