import React, { useState } from "react";
import LoginIcon from "../images/user.svg";
import {
  AuthBox,
  AuthCol,
  AuthTextField,
  ButtonWrapper,
  IconImg,
  MyForm,
} from "./Auth.elements";
import { LOGIN_TAB_VALUE, REG_TAB_VALUE } from "../AuthPage";
import { Button } from "../../../components/styles/GlobalStyles";
import useAxiosSimple from "../../../hooks/useAxiosSimple";
import { toast } from "react-toastify";

const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

const ResetPassword = ({ setTab }) => {
  const [emailReset, setEmailReset] = useState();
  const [emailResetError, setEmailResetError] = useState();

  let api = useAxiosSimple();

  const resetPassword = async (url, data) => {
    try {
      let response = await api.post(url, data);
      console.log(response.data);

      toast.success("ایمیل بازنشانی رمز عبور برای شما ارسال شد.");
    } catch (err) {
      const error_data = err.response.data;

      console.log(error_data);

      if (error_data.email) {
        setEmailResetError(error_data.email);
      }
    } finally {
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const user = {
      email: emailReset,
    };

    if (!user.email) return setEmailResetError("ایمیل را وارد کنید");
    if (!isEmail.test(user.email))
      return setEmailResetError("ایمیل وارد شده صحیح نمی باشد");

    resetPassword("/auth/users/reset_password/", user);
  };

  return (
    <AuthCol lg={6} md={6} sm={12} className="text-center p-3">
      <IconImg src={LoginIcon} alt="userIcon" />
      <MyForm>
        <AuthBox>
          <AuthTextField
            value={emailReset}
            onChange={(e) => {
              setEmailResetError("");
              setEmailReset(e.target.value);
            }}
            fullWidth
            id="emailReset"
            type="email"
            label="ایمیل"
            variant="outlined"
            error={!!emailResetError}
            helperText={emailResetError}
          />
        </AuthBox>

        <AuthBox>
          <ButtonWrapper>
            <Button white primary fullWidth onClick={handleResetPassword}>
              تائید
            </Button>
          </ButtonWrapper>
        </AuthBox>

        <div className="mt-3">
          <a href="#" onClick={() => setTab(REG_TAB_VALUE)}>
            <small className="reset">ثبت نام</small>
          </a>{" "}
          ||
          <a href="#" onClick={() => setTab(LOGIN_TAB_VALUE)}>
            <small className="reset ml-2"> ورود</small>
          </a>
        </div>
      </MyForm>
    </AuthCol>
  );
};

export default ResetPassword;
