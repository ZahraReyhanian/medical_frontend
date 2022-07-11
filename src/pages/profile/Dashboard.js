import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { H2 } from "../../components/styles/TextStyles";
import Title from "./Title";

const Dashboard = ({ user, student, BMI, progress }) => {
  return (
    <DashboardWrapper>
      <Container className={"mt-3"}>
        <Row>
          <DashboardColUserName lg={6} md={7} sm={6}>
            <UserNameTop>
              <H2>سلام، زهرا ریحانیان</H2>
            </UserNameTop>
          </DashboardColUserName>
        </Row>
        <InfoSection>
          <Col lg={12}>
            <Title title={"اطلاعات شما"} span={"اطلاعات شما"} />
          </Col>
          <InfoWrapper>
            <InfoLeft lg={4} md={4} sm={6}>
              <p>اسم</p>
              <p>جنسیت</p>
              <p>سن</p>
              <p>نام کاربری</p>
              <p>ایمیل</p>
            </InfoLeft>
            <InfoRight lg={4} md={4} sm={6}>
              <p>: زهرا ریحانیان</p>
              <p>: زن</p>
              <p>: 22</p>
              <p>: zahra.rh</p>
              <p>: reyhan@gmail.com</p>
            </InfoRight>
          </InfoWrapper>
        </InfoSection>
      </Container>
    </DashboardWrapper>
  );
};

export default Dashboard;

const DashboardWrapper = styled.div``;

const DashboardColUserName = styled(Col)`
  margin-top: 1rem;

  h2 {
    margin-bottom: 0.6rem;
  }
  span {
    font-size: 18px;
    font-weight: lighter;
  }
`;

const InfoSection = styled(Row)`
  margin: 7rem 0 0 0;
`;
const InfoWrapper = styled(Row)`
  margin: 2.5rem 0 4rem 0;
`;

const InfoLeft = styled(Col)``;
const InfoRight = styled(Col)``;
const UserNameTop = styled.div``;
