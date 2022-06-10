import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  display: flex;
  align-items: center;
  background: #fff;
  margin-left: 10px;
  width: 40%;
  border-radius: 2px;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIconContainer = styled(Box)`
  color: #6366f1;
  padding: 5px;
`;
const Search = () => {
  return (
    <>
      <SearchContainer>
        <InputSearchBase placeholder="Search for products, brands and more" />
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </SearchContainer>
    </>
  );
};

export default Search;
