import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Caption } from "../styles/TextStyles";

const SmallDetailCard = ({ icon, description }) => {
  return (
    <CardContainer>
      <CardRow>
        <IconCol md={12} sm={12}>
          <IconImage src={icon} />
        </IconCol>
        <DescriptionCol md={12} sm={12}>
          <CaptionDescription>{description}</CaptionDescription>
        </DescriptionCol>
      </CardRow>
    </CardContainer>
  );
};

export default SmallDetailCard;

const CardContainer = styled.div`
  border-radius: 20px;
  background-color: rgba(62, 171, 72, 0.52);
  text-align: center;
  width: 15rem;
  height: 8rem;
`;

const CardRow = styled(Row)``;

const IconCol = styled(Col)`
  padding-top: 1rem;
`;

const IconImage = styled.img`
  width: 3rem;
  border-radius: 50%;
`;

const DescriptionCol = styled(Col)`
  padding: 1rem 0;
`;

const CaptionDescription = styled(Caption)`
  color: #fff;
`;
