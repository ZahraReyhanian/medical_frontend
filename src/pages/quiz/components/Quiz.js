import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Question from "../components/Question";
import QuestionCount from "../components/QuestionCount";
import AnswerOption from "../components/AnswerOption";

const Quiz = (props) => {
  const renderAnswerOptions = (key, val) => {
    console.log(key);
    console.log(val);
    return (
      <AnswerOption
        key={key}
        grade={key}
        answerContent={val}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  };

  return (
    <CSSTransition
      className="testcontainer"
      component="div"
      classNames="fade"
      timeout={{ exit: 500, enter: 800 }}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {Object.entries(props.answerOptions).map(
            ([key, value]) =>
              // Object.keys().map(function (key, index) {
              renderAnswerOptions(key, value)
            // }
          )}
        </ul>
      </div>
    </CSSTransition>
  );
};

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Quiz;
