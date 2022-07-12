import React, { useState, useRef, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import AuthContext from "../../components/context/AuthContext";
// import { loginApi, registerApi, resetEmailApi } from "../../api/api_auth";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button2 from "react-bootstrap/Button";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginIcon from "./images/user.svg";
import uiImg from "./images/login.png";
import "./Login.css";
import styled from "styled-components";

const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;
const RESET_TAB_VALUE = 3;

const AuthPage = () => {
  const [tab, setTab] = useState(LOGIN_TAB_VALUE);

  //register state
  const [fullNameRegister, setFullNameRegister] = useState();
  const [emailRegister, setEmailRegister] = useState();
  const [passwordRegister, setPasswordRegister] = useState();
  const [confPasswordRegister, setConfPasswordRegister] = useState();

  //reset state
  const [emailReset, setEmailReset] = useState();

  const handleChangeTab = (e, newValue) => {
    if (tab == REG_TAB_VALUE) setTab(LOGIN_TAB_VALUE);
    else setTab(REG_TAB_VALUE);
  };

  const handleChangeTabReset = (e, newValue) => {
    setTab(RESET_TAB_VALUE);
  };

  const validateRegister = (user) => {
    if (!user.email) return "Enter email";
    if (!user.name) return "Enter name";
    if (!user.password) return "Enter password";
    if (user.password != user.confirmPassword) return "Confirm password";
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

  const handleRegister = () => {
    // const user = {
    //   name: fullNameRegister,
    //   email: emailRegister,
    //   password: passwordRegister,
    //   confirmPassword: confPasswordRegister,
    // };
    // const error = validateRegister(user);
    // if (error) return toast.warn(error);
    // // user.confPasswordRegister = undefined;
    // registerApi(user, (isOk, data) => {
    //   if (!isOk) return toast.error(data);
    //   const delayInMilliseconds = 1000; //1 second
    //   setTimeout(function () {
    //     toast.success("Successful !");
    //     localStorage.setItem("x-auth-token", data.data.token);
    //     localStorage.setItem("email", data.data.user.email);
    //     localStorage.setItem("name", data.data.user.name);
    //     window.location.reload();
    //   }, delayInMilliseconds);
    // });
  };

  let { loginUser } = useContext(AuthContext);

  return (
    <AuthContainer>
      <Container className={"mt-5"}>
        <Row>
          {tab === LOGIN_TAB_VALUE && (
            <Col lg={6} md={6} sm={12} className="text-center p-3">
              <img className="icon-img" src={LoginIcon} alt="userIcon" />
              <Form onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="شناسه کاربری"
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="رمز عبور"
                  />
                </Form.Group>

                <Button2 variant="primary w-100" type="submit">
                  ورود
                </Button2>

                <div className="mt-3">
                  <a href="#" onClick={handleChangeTabReset}>
                    <small className="reset">رمز خود را فراموش کردم</small>
                  </a>{" "}
                  ||
                  <a href="#" onClick={handleChangeTab}>
                    <small className="reset ml-2">
                      {" "}
                      ثبت نام نکردی؟ بیا اینجا
                    </small>
                  </a>
                </div>
              </Form>
            </Col>
          )}
          {tab === REG_TAB_VALUE && (
            <Col lg={6} md={6} sm={12} className="text-center p-3">
              <img className="icon-img" src={LoginIcon} alt="userIcon" />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicemail">
                  <Form.Control
                    value={emailRegister}
                    onChange={(e) => setEmailRegister(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullName">
                  <Form.Control
                    value={fullNameRegister}
                    onChange={(e) => setFullNameRegister(e.target.value)}
                    type="text"
                    placeholder="Enter full name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    value={passwordRegister}
                    onChange={(e) => setPasswordRegister(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmedPassword"
                >
                  <Form.Control
                    value={confPasswordRegister}
                    onChange={(e) => setConfPasswordRegister(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button2 variant="primary w-100" onClick={handleRegister}>
                  Register
                </Button2>

                <div className="mt-3">
                  <a href="#" onClick={handleChangeTabReset}>
                    <small className="reset">Password Reset</small>
                  </a>{" "}
                  ||
                  <a href="#" onClick={handleChangeTab}>
                    <small className="reset ml-2"> LOGIN</small>
                  </a>
                </div>
              </Form>
            </Col>
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
            <img className="ui_img" src={uiImg} alt="LOGIN" />
          </Col>
        </Row>
      </Container>
    </AuthContainer>
  );
};

export default AuthPage;

const AuthContainer = styled.section`
  padding: 4rem 3rem;

  button,
  input {
    border-radius: 20px;
    height: 3rem;
    padding: 0 1rem;
  }
`;
