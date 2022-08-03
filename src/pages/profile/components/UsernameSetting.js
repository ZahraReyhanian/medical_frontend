import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Title from "./Title";
import styled from "styled-components";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import useAxiosAuth from "../../../hooks/useAxiosAuth";

const UsernameSetting = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  let api = useAxiosAuth();

  const validation = (user_values) => {
    if (!user_values.current_password) return "رمز عبور را وارد کنید";
    if (!user_values.new_username) return "نام کاربری را وارد کنید";
  };

  const submit_setting = async (url, user_values) => {
    try {
      let response = await api.post(url, user_values);
      const data = response.data;
      console.log(data);
      toast.success("با موفقیت ثبت شد");
    } catch (err) {
      console.log(err.message);
    } finally {
    }
  };

  const handleProfile = () => {
    const user_values = {
      new_username: username,
      current_password: password,
    };
    const error = validation(user_values);
    if (error) return toast.warn(error);
    submit_setting("/auth/users/set_username/", user_values);
  };

  return (
    <PersonalWrapper>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Title title="تغییر نام کاربری" span="" />
        </Col>
      </Row>

      <AccountRow>
        <Col lg={12} md={12} sm={12}>
          <Form>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label>رمز عبور فعلی</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="رمز عبور فعلی"
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicName">
              <Form.Label>نام کاربری</Form.Label>
              <Form.Control
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="نام کاربری را وراد کنید"
              />
            </Form.Group>

            <ButtonWrapper>
              <SettingButton onClick={handleProfile}>ثبت</SettingButton>
            </ButtonWrapper>
          </Form>
        </Col>
      </AccountRow>
    </PersonalWrapper>
  );
};

export default UsernameSetting;

const AccountRow = styled(Row)`
  margin-top: 2rem;
  padding-left: 15rem;
`;

const PersonalWrapper = styled.div`
  margin-top: 1rem;
`;

const SettingButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 80px;

  width: 120px;
  height: 44px;

  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border: none;
  border-radius: 30px;
  color: #0e435c;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-1px);
  }
`;

const ButtonWrapper = styled.div`
  margin: 3rem 0;
`;
