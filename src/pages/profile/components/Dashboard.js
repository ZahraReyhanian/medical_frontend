import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { H2 } from "../../../components/styles/TextStyles";
import Title from "./Title";

const Dashboard = ({ user }) => {
  return (
    <DashboardWrapper>
      <Container className={"mt-3"}>
        <>
          <Row>
            <DashboardColUserName md={12} sm={12}>
              <UserNameTop>
                <H2>
                  سلام،{" "}
                  {user.first_name
                    ? user.first_name + " " + user.last_name
                    : user.username}
                </H2>
              </UserNameTop>
            </DashboardColUserName>
          </Row>
          <InfoSection>
            <Col lg={12}>
              <Title title={"اطلاعات شما"} span={"اطلاعات شما"} />
            </Col>
            <InfoWrapper>
              <InfoLeft lg={4} md={4} sm={6}>
                <p>نام</p>
                <p>نام خانوادگی</p>
                <p>نام کاربری</p>
                <p>ایمیل</p>
              </InfoLeft>
              <InfoRight lg={4} md={4} sm={6}>
                <p>: {user.first_name}</p>
                <p>: {user.last_name}</p>
                <p>: {user.username}</p>
                <p>: {user.email}</p>
              </InfoRight>
            </InfoWrapper>
          </InfoSection>
        </>
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
