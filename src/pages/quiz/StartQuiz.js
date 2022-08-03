import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  Container,
  SectionContainer,
} from "../../components/styles/GlobalStyles";
import TitleComponent from "../../components/title/TitleComponent";

import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BodyMain, Caption2 } from "../../components/styles/TextStyles";
import SmallDetailCard from "../../components/cards/SmallDetailCard";
import QuizStartCard from "../../components/cards/QuizStartCard";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAxiosAuth from "../../hooks/useAxiosAuth";
import useAxiosSimple from "../../hooks/useAxiosSimple";
import AuthContext from "../../components/context/AuthContext";
import { Warning } from "@material-ui/icons";
import { themes } from "../../components/styles/ColorStyles";

const StartQuiz = () => {
  const location = useLocation();
  let { user } = useContext(AuthContext);

  const [quiz, setQuiz] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  let auth_api = useAxiosAuth();
  let simple_api = useAxiosSimple();

  const getData = async (url) => {
    let data = {};
    try {
      let api;
      if (user) api = auth_api;
      else api = simple_api;

      let response = await api.get(url);
      data = response.data;
      console.log(data);

      setQuiz(data);
    } catch (err) {
      console.log(err.message);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = "/psychology" + location.pathname;

    getData(url);
  }, []);

  const history = useHistory();

  const redirectLogin = () => {
    history.replace({ pathname: "/login", state: { from: location } });
  };

  return (
    <QuizDetailContainer>
      <Container>
        {loading && <p>در حال بارگزاری ...</p>}

        {!loading && error && <p className="errMsg">{error}</p>}

        {!loading && !error && quiz && (
          <Row>
            <QuizColRight md={7} sm={12}>
              <TitleWrapper>
                <Link to="/tests">آزمون های روانشناسی</Link>
                <span> / </span>
                <TitleComponent title={quiz.title} align={"right"} />
              </TitleWrapper>
              <DescriptionRow>
                <SmallDetail md={6} sm={12}>
                  <SmallDetailCard
                    icon="/images/icons/question.png"
                    description={"تعداد سوالات : " + quiz.questions}
                  />
                </SmallDetail>
                <SmallDetail md={6} sm={12}>
                  <SmallDetailCard
                    icon="/images/icons/time.png"
                    description="مدت زمان : 5 دقیقه"
                  />
                </SmallDetail>
                <DescriptionWrapper md={12} sm={12}>
                  <BodyDescription>
                    <td dangerouslySetInnerHTML={{ __html: quiz.body }} />
                  </BodyDescription>
                </DescriptionWrapper>
              </DescriptionRow>
            </QuizColRight>
            <QuizColLeft md={5} sm={12}>
              <ImageContainer>
                <QuizImage src={quiz.image} />
              </ImageContainer>
              <StartWrapper>
                {user ? (
                  <QuizStartCard
                    type={quiz.type}
                    price={quiz.price}
                    access={quiz.access}
                    link={
                      quiz.access
                        ? `${location.pathname}/questions`
                        : `${location.pathname}/checkout`
                    }
                  />
                ) : (
                  <WarningWrapper>
                    <Warning />
                    <Caption2 onClick={redirectLogin}>
                      <span>برای مشاهده تست وارد سایت شوید</span>
                    </Caption2>
                  </WarningWrapper>
                )}
              </StartWrapper>
            </QuizColLeft>
          </Row>
        )}
      </Container>
    </QuizDetailContainer>
  );
};

export default StartQuiz;

const QuizDetailContainer = styled(SectionContainer)`
  padding-top: 2rem;
`;

const QuizColRight = styled(Col)`
  padding-left: 3rem;
`;

const QuizColLeft = styled(Col)``;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0 0.6rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const QuizImage = styled.img`
  filter: drop-shadow(25px 25px 20px rgba(0, 0, 0, 0.13));
  border-radius: 13px;
  width: 24rem;
  height: 16rem;
`;

const DescriptionRow = styled(Row)``;

const SmallDetail = styled(Col)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const DescriptionWrapper = styled(Col)`
  margin-top: 3rem;
`;
const BodyDescription = styled(BodyMain)`
  text-align: justify;
  line-height: 32px;
  font-family: Vazir, serif !important;
  p,
  span {
    font-family: Vazir, serif !important;
    @media (max-width: 768px) {
      font-size: 14px !important;
    }
  }
  img {
    max-width: 100%;
  }
`;

const StartWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const WarningWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem 3rem;
  margin-top: 3.2rem;
  background-color: #fff;
  display: flex;
  align-items: center;

  p {
    margin: 0;
    transition: 300ms all linear;
    cursor: pointer;

    &:hover {
      color: ${themes.light.primaryHover};
    }
  }

  svg {
    fill: #f2df3a;
  }

  span {
    padding: 0 12px;
  }
`;
