import React from "react";
import PropTypes from "prop-types";

const AnswerOption = (props) => {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        id={props.grade}
        value={props.grade}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.grade}>
        {props.answerContent}
      </label>
    </li>
  );
};

AnswerOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default AnswerOption;
