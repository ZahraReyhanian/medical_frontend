import React from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProfileSetting from "./ProfileSetting";
import UsernameSetting from "./UsernameSetting";

const Setting = ({ user }) => {
  return (
    <SettingWrapper>
      <ProfileSetting user={user} />
      <UsernameSetting />
    </SettingWrapper>
  );
};

export default Setting;

const SettingWrapper = styled.div`
  margin-top: 1rem;
`;
