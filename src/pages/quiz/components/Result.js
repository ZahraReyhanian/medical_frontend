import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { H3 } from "../../../components/styles/TextStyles";
import { Button, Container } from "../../../components/styles/GlobalStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Container>
        <HeaderWrapper>
          <H3>نتیجه آزمون شما به شرح زیر می باشد:</H3>
        </HeaderWrapper>
        <p>{props.quizResult}</p>
        <ButtonWrapper>
          <Link to="/tests">
            <Button>بازگشت به آزمون ها</Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </CSSTransition>
  );
};

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;

const HeaderWrapper = styled.div`
  padding-bottom: 2rem;

  h3 {
    font-weight: bold;
  }
`;

const ButtonWrapper = styled.div`
  margin: 2.6rem 0;
  text-align: left;
`;
