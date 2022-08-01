import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BoldText } from "../../components/styles/TextStyles";

const PaymentError = () => {
  return (
    <PaymentErrorWrapper>
      <Row>
        <ReportWrapper>
          <ReportBody>
            <ErrorImg src="/images/icons/warning.png" />
            <BoldText>
              متاسفانه درخواست شما با خطا رو به رو شد یا از پرداخت انصراف دادید.
              در صورت ایجاد خطا با ما در ارتباط باشید .
            </BoldText>
          </ReportBody>
        </ReportWrapper>
      </Row>
    </PaymentErrorWrapper>
  );
};

export default PaymentError;

const PaymentErrorWrapper = styled.div`
  padding: 0 17rem;
  margin-bottom: 10rem;
  margin-top: 3rem;
  @media (max-width: 1024px) {
    padding: 0 12rem;
  }
`;

const ReportWrapper = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 20px;
`;

const ReportBody = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0;
  }
`;

const ErrorImg = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 10px;
`;
