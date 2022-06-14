import React from "react";
import styled from "styled-components";
import { H2, MediumText } from "../styles/TextStyles";

const TitleComponent = ({ title, subtitle, align }) => {
  return (
    <TitleWrapper align={align}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TitleWrapper>
  );
};

export default TitleComponent;

const TitleWrapper = styled.div`
  text-align: ${props => props.align};
`;

const Title = styled(H2)``;

const Subtitle = styled(MediumText)`
  margin-top: 10px;
`;
