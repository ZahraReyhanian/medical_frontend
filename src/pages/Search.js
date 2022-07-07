import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../components/others/List";
import styled from "styled-components";

const Search = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <SearchContainer>
      <h1>React Search</h1>
      <SearchWrapper>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </SearchWrapper>
      <List input={inputText} />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

const SearchWrapper = styled.div`
  width: 30%;
`;
