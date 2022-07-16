import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

const Result = (props) => {
  return (
    <CSSTransition
      className="container result"
      component="div"
      classNames="fade"
      timeout={{ exit: 500, enter: 800 }}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <p>{props.quizResult}</p>
      </div>
    </CSSTransition>
  );
};

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
