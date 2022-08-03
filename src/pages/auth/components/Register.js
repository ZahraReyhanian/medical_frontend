import React, { useState } from "react";
import LoginIcon from "../images/user.svg";
import styled from "styled-components";
import {
  Footer,
  MyForm,
  AuthCol,
  AuthBox,
  ButtonWrapper,
  AuthTextField,
  IconImg,
} from "./Auth.elements";
import { Button } from "../../../components/styles/GlobalStyles";
import useAxiosSimple from "../../../hooks/useAxiosSimple";
import { toast } from "react-toastify";

const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

const Register = ({ handleChangeTab, handleChangeTabReset }) => {
  //register state
  const [usernameRegister, setUsernameRegister] = useState();
  const [emailRegister, setEmailRegister] = useState();
  const [firstNameRegister, setFirstNameRegister] = useState();
  const [lastNameRegister, setLastNameRegister] = useState();
  const [passwordRegister, setPasswordRegister] = useState();
  const [confPasswordRegister, setConfPasswordRegister] = useState();

  //errors state
  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [emailError, setEmailError] = useState();

  const validateRegister = (user) => {
    let error = 0;
    if (!user.username) {
      error = 1;
      setUsernameError("نام کاربری را وارد کنید");
    }
    if (!user.email) {
      error = 1;
      setEmailError("ایمیل را وارد کنید");
    }
    if (!isEmail.test(user.email)) {
      error = 1;
      setEmailError("ایمیل وارد شده صحیح نمی باشد");
    }
    if (!user.password) {
      error = 1;
      setPasswordError("رمز عبور را وارد کنید");
    }
    if (user.password.length < 8) {
      error = 1;
      setPasswordError("طول رمز عبور حداقل 8 باید باشد");
    }

    if (user.password != user.re_password) {
      error = 1;
      setPasswordError("رمز عبور و تائید آن باید مطابق هم باشند");
    }

    return error;
  };

  let api = useAxiosSimple();

  const register = async (url, data) => {
    try {
      let response = await api.post(url, data);
      console.log(response.data);

      toast.success(
        "ثبت نام با موفقیت انجام شد. با استفاده از قسمت ورود وارد سایت شوید"
      );

      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      const error_data = err.response.data;

      console.log(error_data);

      if (Array.isArray(error_data.password)) {
        setPasswordError(error_data.password[0]);
      } else {
        setPasswordError(error_data.password);
      }

      if (error_data.username) {
        setUsernameError(error_data.username);
      }

      if (error_data.email) {
        setEmailError(error_data.email);
      }
    } finally {
    }
  };

  const handleRegister = () => {
    const user = {
      username: usernameRegister,
      email: emailRegister,
      password: passwordRegister,
      re_password: confPasswordRegister,
      first_name: firstNameRegister,
      last_name: lastNameRegister,
    };
    const error = validateRegister(user);
    if (error == 1) return;
    register("/auth/users/", user);
  };

  return (
    <AuthCol lg={6} md={6} sm={12} className="text-center">
      <IconImg src={LoginIcon} alt="userIcon" />
      <MyForm>
        <AuthBox>
          <AuthTextField
            value={usernameRegister}
            onChange={(e) => {
              setUsernameError("");
              setUsernameRegister(e.target.value);
            }}
            fullWidth
            id="usernameRegister"
            label="نام کاربری"
            variant="outlined"
            error={!!usernameError}
            helperText={usernameError}
          />
        </AuthBox>

        <AuthBox>
          <AuthTextField
            value={emailRegister}
            onChange={(e) => {
              setEmailError("");
              setEmailRegister(e.target.value);
            }}
            fullWidth
            id="email"
            type="email"
            label="ایمیل"
            variant="outlined"
            error={!!emailError}
            helperText={emailError}
          />
        </AuthBox>

        <AuthBox>
          <AuthTextField
            value={firstNameRegister}
            onChange={(e) => setFirstNameRegister(e.target.value)}
            fullWidth
            id="nameRegister"
            label="نام"
            variant="outlined"
          />
        </AuthBox>

        <AuthBox>
          <AuthTextField
            value={lastNameRegister}
            onChange={(e) => setLastNameRegister(e.target.value)}
            fullWidth
            id="nameRegister"
            label="نام خانوادگی"
            variant="outlined"
          />
        </AuthBox>

        <AuthBox>
          <AuthTextField
            value={passwordRegister}
            onChange={(e) => {
              setPasswordError("");
              setPasswordRegister(e.target.value);
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
            value={confPasswordRegister}
            onChange={(e) => {
              setPasswordError("");
              setConfPasswordRegister(e.target.value);
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
            <Button white primary fullWidth onClick={handleRegister}>
              ورود
            </Button>
          </ButtonWrapper>
        </AuthBox>

        <Footer className="mt-3">
          <a href="#" onClick={handleChangeTabReset}>
            <small className="reset">بازنشانی رمز عبور</small>
          </a>{" "}
          ||
          <a href="#" onClick={handleChangeTab}>
            <small className="reset ml-2"> ورود</small>
          </a>
        </Footer>
      </MyForm>
    </AuthCol>
  );
};

export default Register;
