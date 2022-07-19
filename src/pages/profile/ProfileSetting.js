import React, { useEffect, useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { Row, Col, Form, FormLabel, Button } from "react-bootstrap";
import Title from "./Title";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
// import { getUserPanel, updateProfileSetting } from "../../api/api_home";

const ProfileSetting = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [problem, setProblem] = useState();

  useEffect(() => {
    // getUserPanel((isOk, data) => {
    //   if (!isOk) return alert(data.message);
    //   else {
    //     const user = data.user;
    //     const student = data.user.student[0];
    //     setEmail(user.email);
    //     setName(user.name);
    //     setWeight(student.weight);
    //     setHeight(student.Height);
    //     setAge(student.age);
    //     setGender(student.gender);
    //     setProblem(student.medicalSpecifications);
    //   }
    // });
  }, []);

  const handleProfile = () => {
    // const user = {
    //   email: email,
    //   name: name,
    //   weight: weight,
    //   Height: height,
    //   age: age,
    //   gender: gender,
    //   medicalSpecifications: problem,
    //   sick: "false",
    // };
    // if (problem != "") user.sick = "true";
    // updateProfileSetting(user, (isOk, data) => {
    //   if (!isOk) return toast.error(data);
    //   const delayInMilliseconds = 1000; //1 second
    //   setTimeout(function () {
    //     toast.success("Successful!");
    //     localStorage.setItem("name", name);
    //     localStorage.setItem("email", email);
    //   }, delayInMilliseconds);
    // });
  };

  return (
    <PersonalWrapper>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Title title="Personal Setting" span="" />
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
              <Form.Label>نام کاربری</Form.Label>
              <Form.Control
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="نام کاربری را وراد کنید"
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicName">
              <Form.Label>نام و نام خانوادگی</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="نام و نام خانوادگی"
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
