import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Title from "./Title";
import styled from "styled-components";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import useAxiosAuth from "../../../hooks/useAxiosAuth";

const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

const ProfileSetting = ({ user }) => {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [error, setError] = useState();

  let api = useAxiosAuth();

  useEffect(() => {
    setEmail(user.email);
    setFirstName(user.first_name);
    setLastName(user.last_name);
  }, []);

  const validation = (user_values) => {
    if (!user_values.email) return "ایمیل را وارد کنید";
    if (!isEmail.test(user_values.email)) return "ایمیل وارد شده صحیح نمی باشد";
  };

  const submit_setting = async (url, user_values) => {
    try {
      let response = await api.patch(url, user_values);
      const data = response.data;
      console.log(data);
      toast.success("با موفقیت ثبت شد");
    } catch (err) {
      console.log(err.message);

      setError(err.message);
    } finally {
    }
  };

  const handleProfile = () => {
    const user_values = {
      email: email,
      first_name: firstName,
      last_name: lastName,
    };
    const error = validation(user_values);
    if (error) return toast.warn(error);
    submit_setting("/auth/users/me/", user_values);
  };

  return (
    <PersonalWrapper>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Title title="تنظیمات" span="" />
        </Col>
      </Row>
      <AccountRow>
        <Col lg={12} md={12} sm={12}>
          <Form>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label>ایمیل</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="ایمیل را وارد کنید"
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicName">
              <Form.Label>نام</Form.Label>
              <Form.Control
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="نام"
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicName">
              <Form.Label>نام خانوادگی</Form.Label>
              <Form.Control
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="نام خانوادگی"
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

export default ProfileSetting;

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
