import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BoldText, H2, MediumText } from "../../components/styles/TextStyles";
import { Button } from "../../components/styles/GlobalStyles";
import { useLocation } from "react-router-dom";
import useAxiosAuth from "../../hooks/useAxiosAuth";

const Checkout = () => {
  const [quiz, setQuiz] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  let api = useAxiosAuth();

  const getData = async (url) => {
    let data = {};
    try {
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

  const sendRequest = async (url, data) => {
    try {
      console.log(data);
      let response = await api.post(url, data);

      console.log(response.data);

      window.location.assign(response.data["link"]);
    } catch (err) {
      console.log(err.message);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = () => {
    document.getElementById("wait").style.display = "block";
    const url = "/order/request/";
    sendRequest(url, { data: quiz });
  };

  return (
    <CheckoutWrapper>
      <Row>
        <TitleWrapper>
          <H2>گزارش خرید شما به شرح زیر است:</H2>
        </TitleWrapper>
        {loading && <p>در حال بارگزاری ...</p>}

        {!loading && error && <p className="errMsg">{error}</p>}

        {!loading && !error && quiz && (
          <>
            <ReportWrapper>
              <ReportBody>
                <ReportRight md={3} sm={5}>
                  <BoldText>نام آزمون :</BoldText>
                  <BoldText>مبلغ آزمون :</BoldText>
                  <BoldText>ایمیل شما :</BoldText>
                </ReportRight>
                <ReportCol md={9} sm={7}>
                  <MediumText>{quiz.title}</MediumText>
                  <MediumText>{quiz.price} تومان</MediumText>
                  <MediumText>{quiz.email}</MediumText>
                </ReportCol>
              </ReportBody>
              <ReportFooter>
                <BoldText>مبلغ قابل پرداخت : </BoldText>
                <MediumText>{quiz.price} تومان</MediumText>
              </ReportFooter>
            </ReportWrapper>
            <ButtonWrapper>
              <ConfirmButton onClick={handlePayment}>
                تائید و پرداخت
              </ConfirmButton>
              <Waiting id="wait">لطفا کمی منتظر باشید</Waiting>
            </ButtonWrapper>
          </>
        )}
      </Row>
    </CheckoutWrapper>
  );
};

export default Checkout;

const CheckoutWrapper = styled.div`
  padding: 0 17rem;
  margin-bottom: 10rem;
  margin-top: 3rem;
  @media (max-width: 1024px) {
    padding: 0 12rem;
  }
  @media (max-width: 914px) {
    padding: 0 10rem;
  }
  @media (max-width: 768px) {
    padding: 0 6rem;
  }
  @media (max-width: 518px) {
    padding: 0 2rem;
  }
`;
const TitleWrapper = styled.div`
  margin-bottom: 1.5rem;
  h2 {
    font-size: 27px;
  }
`;
const ReportWrapper = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 20px;
`;
const ReportRight = styled(Col)``;

const ReportCol = styled(Col)``;

const ReportBody = styled.div`
  display: flex;
`;

const ReportFooter = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  p {
    padding-left: 5px;
    font-size: 20px;
  }
`;

const ButtonWrapper = styled.div`
  text-align: left;
  margin-top: 1.5rem;
`;

const ConfirmButton = styled(Button)`
  background-color: #00c897;

  &:hover {
    background-color: #019267;
  }
`;

const Waiting = styled.p`
  color: red;
  display: none;
`;
