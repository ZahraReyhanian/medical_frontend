import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Question from "../components/Question";
import QuestionCount from "../components/QuestionCount";
import AnswerOption from "../components/AnswerOption";

const Quiz = (props) => {
  const renderAnswerOptions = (key) => {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
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
          {props.answerOptions.map(renderAnswerOptions)}
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
