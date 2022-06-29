import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

const QuestionCount = (props) => {
  return (
    <ProgressBar
      currentQuestionIndex={props.counter}
      totalQuestionsCount={props.total}
    />
  );
};

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
