import React from "react";
import styled from "styled-components";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MediumText } from "../styles/TextStyles";
import { Link } from "react-router-dom";
import QuizDetail from "./QuizDetail";
import { themes } from "../styles/ColorStyles";

const QuizIntroCard = ({ title, image, description, questions, time }) => {
  return (
    <CardContainer>
      <div>
        <CardWrapper>
          <Row>
            <TitleWrapper md={12}>
              <h3>{title}</h3>
            </TitleWrapper>
          </Row>
          <Row>
            <ImageWrapper md={4}>
              <img src={image} />
            </ImageWrapper>
            <DescriptionWrapper md={8}>
              <Description>{description}</Description>
            </DescriptionWrapper>
          </Row>
          <Row>
            <DetailWrapper md={9}>
              <QuizDetail
                icon="/images/icons/time.png"
                description="مدت زمان : 5 دقیقه"
              />
              <QuizDetail
                icon="/images/icons/question.png"
                description="تعداد سوالات : 40"
              />
            </DetailWrapper>
            <ShowQuizLink md={3}>
              <Link to="/start-test">
                <p>مشاهده آزمون</p>
              </Link>
            </ShowQuizLink>
          </Row>
        </CardWrapper>
      </div>
    </CardContainer>
  );
};

export default QuizIntroCard;

const CardContainer = styled.div``;
const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 1rem 3rem;
`;

const TitleWrapper = styled(Col)`
  padding: 1rem 0;
  h3 {
    text-align: center;
    font-weight: bold;
  }
`;

const ImageWrapper = styled(Col)`
  padding: 0 1rem;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const DescriptionWrapper = styled(Col)`
  padding: 0 1rem;
`;

const Description = styled(MediumText)`
  font-size: 16px;
`;

const DetailWrapper = styled(Col)`
  display: flex;
`;

const ShowQuizLink = styled(Col)`
  text-align: left;
  p {
    color: #2f8f9d;
    font-weight: bold;
    text-decoration: underline;
    padding-top: 20px;
    transition: all 0.6s;

    :hover {
      color: ${themes.light.primaryHover};
    }
  }
`;
