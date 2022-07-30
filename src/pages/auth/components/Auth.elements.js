import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Col, Container, Form, Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const AuthPageWrapper = styled.div`
  padding: 0 13.5rem;
  @media screen and (max-width: 1024px) {
    padding: 0 8rem;
  }
  @media screen and (max-width: 914px) {
    padding: 0 5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    margin: 3rem;
  }
`;

export const AuthContainer = styled(Container)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 4rem 3rem;

  button,
  input {
    height: 3rem;
    padding: 0 1rem;
  }
`;

export const AuthCol = styled(Col)`
  padding: 1rem 2rem;
`;

export const AuthBox = styled(Box)`
  margin-bottom: 20px;
`;

export const AuthTextField = styled(TextField)`
  div {
    border-radius: 20px;
  }
`;

export const MyForm = styled(Form)`
  input {
    text-align: right !important;
  }
  .css-1c2i806-MuiFormLabl-root-MuiIputLable-root.Mui-focused {
    right: 0 !important;
  }
`;

export const Footer = styled.div`
  .reset {
    color: black;
  }
`;

export const UiImg = styled.img`
  height: 100%;
  width: 100% !important;
  @media screen and (max-width: 768px) {
    padding-top: 2rem;
  }
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 2rem;
  margin-top: 1.5rem;
`;
