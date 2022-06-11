import React from "react";
import Layout from "../components/layout/layout";
import { Container, Cover } from "../components/styles/GlobalStyles";
import styled from "styled-components";

function NotFoundPage() {
  return (
    <Layout>
      <MyContainer>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </MyContainer>
    </Layout>
  );
}

export default NotFoundPage;

const MyContainer = styled(Container)`
  min-height: 600px;
  padding-top: 170px;
  text-align: center;
  color: #008891;
  h1 {
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  p {
    font-size: 30px;
  }
`;
