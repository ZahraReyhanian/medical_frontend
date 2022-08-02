import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import useAxiosAuth from "../../../hooks/useAxiosAuth";
import Title from "./Title";
import QuizIntroCard from "../../../components/cards/QuizIntroCard";

const PaidQuiz = () => {
  const [quizes, setQuizes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  let api = useAxiosAuth();

  const getData = async (url) => {
    try {
      let response = await api.get(url);
      const data = response.data;
      console.log(data);

      setQuizes(data);
    } catch (err) {
      console.log(err.message);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = "/api/useraccesstests/";

    getData(url);
  }, []);

  return (
    <PaidQuizWrapper>
      <TitleWrapper>
        <Title title={"آزمون های خریداری شده"} span={""} />
      </TitleWrapper>
      <QuizRow>
        {loading && <p>در حال بارگزاری ...</p>}

        {!loading && error && <p className="errMsg">{error}</p>}

        {!loading && !error && quizes?.length == 0 && (
          <p>آزمونی خریداری نکردید.</p>
        )}

        {!loading && !error && quizes?.length > 0 && (
          <>
            {quizes.map((quiz, i) => {
              return (
                <QuizCol md={12} sm={12} key={i}>
                  <QuizIntroCard
                    title={quiz.title}
                    image={quiz.image}
                    description={quiz.description}
                    url={"/tests/" + quiz.id}
                    questions={quiz.questions}
                    time="5"
                  />
                </QuizCol>
              );
            })}
          </>
        )}
      </QuizRow>
    </PaidQuizWrapper>
  );
};

export default PaidQuiz;

const PaidQuizWrapper = styled.div``;

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const QuizRow = styled(Row)`
  padding: 0 5rem;

  @media (max-width: 914px) {
    padding: 0;
  }
`;

const QuizCol = styled(Col)`
  margin: 1rem 0;
`;
