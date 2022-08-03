import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import uiImg from "./images/login.png";
import "./Login.css";
import styled from "styled-components";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContainer, AuthRow, UiImg } from "./components/Auth.elements";
import ResetPassword from "./components/ResetPassword";

export const LOGIN_TAB_VALUE = 1;
export const REG_TAB_VALUE = 2;
export const RESET_TAB_VALUE = 3;

const isText = RegExp(/^[A-Z ]+$/i);

const AuthPage = () => {
  const [tab, setTab] = useState(LOGIN_TAB_VALUE);

  //reset state
  const [emailReset, setEmailReset] = useState();

  const handleChangeTab = (e, newValue) => {
    if (tab == REG_TAB_VALUE) setTab(LOGIN_TAB_VALUE);
    else setTab(REG_TAB_VALUE);
  };

  const handleChangeTabReset = (e, newValue) => {
    setTab(RESET_TAB_VALUE);
  };

  const handleResetPassword = () => {
    // const user = {
    //   email: emailReset,
    // };
    // if (!user.email) return toast.warn("Enter Email");
    // // user.confPasswordRegister = undefined;
    // resetEmailApi(user, (isOk, data) => {
    //   if (!isOk) return toast.error(data);
    //   const delayInMilliseconds = 1000; //1 second
    //   setTimeout(function () {
    //     toast.success("Check your email !");
    //   }, delayInMilliseconds);
    // });
  };

  return (
    <AuthContainer>
      <Container className={"mt-5"}>
        <AuthRow>
          {tab === LOGIN_TAB_VALUE && (
            <Login
              handleChangeTab={handleChangeTab}
              handleChangeTabReset={handleChangeTabReset}
            />
          )}
          {tab === REG_TAB_VALUE && (
            <Register
              handleChangeTab={handleChangeTab}
              handleChangeTabReset={handleChangeTabReset}
            />
          )}

          {tab === RESET_TAB_VALUE && <ResetPassword setTab={setTab} />}
          <Col lg={6} md={6} sm={12}>
            <UiImg src={uiImg} alt="LOGIN" />
          </Col>
        </AuthRow>
      </Container>
    </AuthContainer>
  );
};

export default AuthPage;
