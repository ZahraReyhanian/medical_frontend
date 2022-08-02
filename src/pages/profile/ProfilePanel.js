import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { themes } from "../../components/styles/ColorStyles";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Setting from "./components/Setting";
import SavedArticles from "./components/SavedArticles";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import useAxiosAuth from "../../hooks/useAxiosAuth";
import PaidQuiz from "./components/PaidQuiz";

const ProfilePanel = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  let api = useAxiosAuth();

  const getData = async (url) => {
    let data = {};
    try {
      let response = await api.get(url);
      data = response.data;
      console.log(data);
      setUser(data);
    } catch (err) {
      console.log(err.message);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = "/auth/users/me/";

    getData(url);
  }, []);

  return (
    <PanelContainer>
      {loading && <p>در حال بارگزاری ...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && user && (
        <Row>
          <Sidebar
            md={3}
            sm={12}
            className={` ${navToggle ? "nav-toggle" : ""}`}
          >
            <NavBar image={user.profile?.avatar} username={user.username} />
          </Sidebar>
          <MainContent md={9} sm={12}>
            <MainContentWrapper>
              <Switch>
                <Route path="/profile">
                  <Dashboard user={user} />
                </Route>
                <Route path="/setting">
                  <Setting user={user} />
                </Route>
                <Route path="/saved">
                  <SavedArticles />
                </Route>
                <Route path="/paid">
                  <PaidQuiz />
                </Route>
              </Switch>
            </MainContentWrapper>
          </MainContent>
        </Row>
      )}
    </PanelContainer>
  );
};

export default ProfilePanel;

const PanelContainer = styled.div`
  overflow: hidden;
  padding: 3rem 5rem;
  @media screen and (max-width: 576px) {
    padding: 0;
  }
`;
const Sidebar = styled(Col)`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 3rem;
  z-index: 11;
  @media screen and (max-width: 768px) {
    border: none;
    padding-left: 0;
  }

  @media screen and (max-width: 576px) {
    width: 50%;
  }
`;
const MainContent = styled(Col)`
  padding-right: 1.5rem;
  min-height: 100vh;
  background-color: ${themes.light.backgroundColor};
  display: grid;
  position: relative;
`;

const MainContentWrapper = styled.div`
  margin: 0;
  @media (max-width: 768px) {
    margin: 2rem;
  }
`;
