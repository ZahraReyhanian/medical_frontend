import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import TitleComponent from "../../components/title/TitleComponent";
import useAxiosAuth from "../../hooks/useAxiosAuth";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./styles.css";

const BaseQuiz = () => {
  const [quiz, setQuiz] = useState({});
  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState("");
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState(0);
  const [result, setResult] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // this.handleAnswerSelected = this.handleAnswerSelected.bind(this);

  const location = useLocation();

  let api = useAxiosAuth();

  const getData = async (url) => {
    let data = {};
    try {
      let response = await api.get(url);
      data = response.data;
      console.log(data);

      setQuiz(data);

      setQuestion(data.testquestions[0].question);

      if (data.answers.answers) {
        setAnswerOptions(data.answers.answers);
      } else {
        console.log(data.testquestions[0].answers.answers);
        setAnswerOptions(data.testquestions[0].answers.answers);
      }
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

    //     question: quizQuestions[0].question,
    //     answerOptions: quizQuestions[0].answers,
  }, []);

  const handleAnswerSelected = (event) => {
    console.log(userAnswer);
    const currentChoose = parseInt(event.currentTarget.value);
    setUserAnswer(userAnswer + currentChoose);

    if (questionId < quiz.testquestions.length) {
      setTimeout(() => setNextQuestion(), 300);
    } else {
      setTimeout(() => setResults(), 500);
    }
  };

  const setNextQuestion = () => {
    setCounter(counter + 1);
    setQuestionId(questionId + 1);

    setQuestion(quiz.testquestions[counter + 1].question);

    if (quiz.answers.answers) {
      setAnswerOptions(quiz.answers.answers);
    } else {
      console.log(quiz.testquestions[counter + 1].answers.answers);
      setAnswerOptions(quiz.testquestions[counter + 1].answers.answers);
    }
  };

  const send_and_get_userResult = async (res) => {
    const url = "/psychology" + location.pathname + "result/";
    try {
      let response = await api.post(url, {
        result: res,
      });
      console.log(response.data);
      setResult(response.data.result);
    } catch (err) {
      console.log(err.message);
      setResult(err.message);
    }
  };

  const setResults = () => {
    let res;
    setUserAnswer((state) => {
      console.log(state);
      res = state;
      return state;
    });
    console.log(res);

    send_and_get_userResult(res);
  };

  const renderQuiz = () => {
    return (
      <QuizContainer>
        <TitleWrapper>
          <TitleComponent title={quiz.title} align="right" />
        </TitleWrapper>
        <Quiz
          answer={answer}
          answerOptions={answerOptions}
          questionId={questionId}
          question={question}
          questionTotal={quiz.testquestions.length}
          onAnswerSelected={handleAnswerSelected}
        />
      </QuizContainer>
    );
  };

  const renderResult = () => {
    return <Result quizResult={result} />;
  };

  return (
    <div className="App">
      <div className="App-header"></div>
      {loading && <p>در حال بارگزاری ...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && quiz && (result ? renderResult() : renderQuiz())}
    </div>
  );
};

export default BaseQuiz;

const QuizContainer = styled.div`
  padding: 1rem 4rem;
`;

const TitleWrapper = styled.div`
  margin-bottom: 3rem;
`;
