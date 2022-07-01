import React from "react";
import styled from "styled-components";
import {
  Container,
  SectionContainer,
} from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import QuizIntroCard from "../../components/cards/QuizIntroCard";

const AllQuiz = () => {
  return (
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <QuizIntroCard
            title="شخصیت شناسی"
            image="/images/download.jpg"
            description="شخصیت درون گرایی دارید یا برون گرا هستید؟
ما انسان‌ها دارای ویژگی‌های شخصیتی مختلفی هستیم، که این ویژگی‌های باعث می شود، در موقعیتی یکسان رفتارهای متفاوتی از دیگران داشته باشیم. "
          />
        </Col>
        <Col md={6} sm={12}>
          <QuizIntroCard
            title="شخصیت شناسی"
            image="/images/download.jpg"
            description="شخصیت درون گرایی دارید یا برون گرا هستید؟
ما انسان‌ها دارای ویژگی‌های شخصیتی مختلفی هستیم، که این ویژگی‌های باعث می شود، در موقعیتی یکسان رفتارهای متفاوتی از دیگران داشته باشیم. "
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AllQuiz;
