import React, { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import uiImg from "../images/login.png";
import { toast } from "react-toastify";
import { useLocation, useParams } from "react-router-dom";
import LoginIcon from "../images/user.svg";
import {
  AuthBox,
  AuthCol,
  AuthContainer,
  AuthRow,
  AuthTextField,
  ButtonWrapper,
  IconImg,
  MyForm,
  UiImg,
} from "./Auth.elements";
import useAxiosSimple from "../../../hooks/useAxiosSimple";
import { Button } from "../../../components/styles/GlobalStyles";

const SetPassword = () => {
  const location = useLocation();
  const [password, setPassword] = useState();
  const [confPassword, setConfPassword] = useState();
  const [passwordError, setPasswordError] = useState();

  const { uid, token } = useParams();

  useEffect(() => {
    console.log(uid, token);
  }, [location]);

  const api = useAxiosSimple();

  const resetPassword = async (url, data) => {
    try {
      let response = await api.post(url, data);
      console.log(response.data);

      toast.success("رمز عبور شما با موفقیت تغییر یافت.");
    } catch (err) {
      const error_data = err.response.data;

      console.log(error_data);

      if (error_data.new_password) {
        setPasswordError(error_data.new_password);
      } else if (error_data.token) {
        toast.error("توکن منقضی شده است");
      }
    } finally {
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password != confPassword) {
      setPasswordError("رمز عبور و تائید آن باید مطابق هم باشند");
      return;
    }
    const data = {
      uid: uid,
      token: token,
      new_password: password,
      re_new_password: confPassword,
    };
    console.log(data);
    resetPassword("/auth/users/reset_password_confirm/", data);
  };

  return (
    <AuthContainer>
      <Container className={"mt-5"}>
        <AuthRow>
          <AuthCol lg={6} md={6} sm={12} className="text-center">
            <IconImg src={LoginIcon} alt="userIcon" />
            <MyForm>
              <AuthBox>
                <AuthTextField
                  value={password}
                  onChange={(e) => {
                    setPasswordError("");
                    setPassword(e.target.value);
                  }}
                  type="password"
                  fullWidth
                  id="password"
                  label="رمز عبور"
                  variant="outlined"
                  error={!!passwordError}
                  helperText={passwordError}
                />
              </AuthBox>

              <AuthBox>
                <AuthTextField
                  value={confPassword}
                  onChange={(e) => {
                    setPasswordError("");
                    setConfPassword(e.target.value);
                  }}
                  type="password"
                  fullWidth
                  id="confirmedPassword"
                  label="تائید رمز عبور"
                  variant="outlined"
                />
              </AuthBox>

              <AuthBox>
                <ButtonWrapper>
                  <Button white primary fullWidth onClick={handleResetPassword}>
                    تائید
                  </Button>
                </ButtonWrapper>
              </AuthBox>
            </MyForm>
          </AuthCol>
          <Col lg={6} md={6} sm={12}>
            <UiImg src={uiImg} alt="LOGIN" />
          </Col>
        </AuthRow>
      </Container>
    </AuthContainer>
  );
};

export default SetPassword;
