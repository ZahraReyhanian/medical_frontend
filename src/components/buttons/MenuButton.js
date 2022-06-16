import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function MenuButton(props) {
  const { item } = props;
  return (
    <Link to={item.link} onClick={props.onClick}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  );
}

const MenuItem = styled.div`
  color: rgba(47, 143, 157, 1); /*#2f8f9d*/
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${(props) => (props.title ? "10px" : "0px")};
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;

  img{
    height: 1rem;
  }

  :hover {
    background: rgba(239, 255, 255, 0.7);
    /* color: #EFFFFF; */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`;
