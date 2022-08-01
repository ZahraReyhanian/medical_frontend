import React, { useState, useRef, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../components/context/AuthContext";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button2 from "react-bootstrap/Button";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginIcon from "./images/user.svg";
import uiImg from "./images/login.png";
import "./Login.css";
import styled from "styled-components";
import useAxiosSimple from "../../hooks/useAxiosSimple";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthRow, UiImg } from "./components/Auth.elements";

const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;
const RESET_TAB_VALUE = 3;

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

          {tab === RESET_TAB_VALUE && (
            <Col lg={6} md={6} sm={12} className="text-center p-3">
              <img className="icon-img" src={LoginIcon} alt="userIcon" />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicemail">
                  <Form.Control
                    value={emailReset}
                    onChange={(e) => setEmailReset(e.target.value)}
                    type="text"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Button2 variant="primary w-100" onClick={handleResetPassword}>
                  Reset Password
                </Button2>

                <div className="mt-3">
                  <a href="#" onClick={() => setTab(REG_TAB_VALUE)}>
                    <small className="reset">REGISTER</small>
                  </a>{" "}
                  ||
                  <a href="#" onClick={() => setTab(LOGIN_TAB_VALUE)}>
                    <small className="reset ml-2"> LOGIN</small>
                  </a>
                </div>
              </Form>
            </Col>
          )}
          <Col lg={6} md={6} sm={12}>
            <UiImg src={uiImg} alt="LOGIN" />
          </Col>
        </AuthRow>
      </Container>
    </AuthContainer>
  );
};

export default AuthPage;

const AuthContainer = styled.section`
  padding: 4rem 3rem;

  button,
  input,
  label {
    font-family: Vazir, serif !important;
  }

  label {
    font-size: 14px;
  }

  button,
  input {
    height: 3rem;
    padding: 0 1rem;
  }
`;
