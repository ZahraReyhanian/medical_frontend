import React, { useContext } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginIcon from "../images/user.svg";
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
import AuthContext from "../../../components/context/AuthContext";

const Login = ({ handleChangeTab, handleChangeTabReset }) => {
  let { loginUser } = useContext(AuthContext);

  return (
    <AuthCol lg={6} md={6} sm={12} className="text-center">
      <IconImg src={LoginIcon} alt="userIcon" />
      <MyForm onSubmit={loginUser}>
        <AuthBox>
          <AuthTextField
            fullWidth
            id="username"
            label="نام کاربری"
            variant="outlined"
          />
        </AuthBox>
        <AuthBox>
          <AuthTextField
            type="password"
            fullWidth
            id="password"
            label="رمز عبور"
            variant="outlined"
          />
        </AuthBox>

        <AuthBox>
          <ButtonWrapper>
            <Button white primary fullWidth>
              ورود
            </Button>
          </ButtonWrapper>
        </AuthBox>

        <Footer className="mt-3">
          <a href="#" onClick={handleChangeTabReset}>
            <small className="reset">رمز خود را فراموش کردم</small>
          </a>{" "}
          ||
          <a href="#" onClick={handleChangeTab}>
            <small className="reset ml-2"> ثبت نام نکردی؟ بیا اینجا</small>
          </a>
        </Footer>
      </MyForm>
    </AuthCol>
  );
};

export default Login;
