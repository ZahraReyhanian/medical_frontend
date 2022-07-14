import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { quizAxios } from "../../api/api_quiz";
import useAxiosAuth from "../../hooks/useAxiosAuth";
import useAxiosAuth_old from "../../hooks/useAxiosAuth_old";
import quizQuestions from "./api/quizQuestions";
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

  let api = useAxiosAuth_old();

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
    console.log("rrrrrrrrrrrrrrrr");
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

    // this.setState({
    //   counter: counter,
    //   questionId: questionId,
    //   question: quizQuestions[counter].question,
    //   answerOptions: quizQuestions[counter].answers,
    //   answer: "",
    // });
  };

  const setResults = () => {
    let res;
    setUserAnswer((state) => {
      console.log(state); // "React is awesome!"
      res = state;
      return state;
    });
    console.log(res);

    setResult("finish");
  };

  const renderQuiz = () => {
    return (
      <Quiz
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={quiz.testquestions.length}
        onAnswerSelected={handleAnswerSelected}
      />
    );
  };

  const renderResult = () => {
    return <Result quizResult={result} />;
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>React Quiz</h2>
      </div>
      {loading && <p>در حال بارگزاری ...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && quiz && (result ? renderResult() : renderQuiz())}
    </div>
  );
};

export default BaseQuiz;
