import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Container = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 30px;
    font-size: 16px;
  }
`;
const LoginButton = styled(Button)`
  background: #fff;
  color: #7c3aed;
  margin-right: 40px;
  border-radius: 2px;
  text-transform: none;
  padding: 5px 30px;
  box-shadow: none;
  font-weight: 600;
  &:hover {
    background: #fff;
  }
`;
const CustomButtons = () => {
  return (
    <>
      <Container>
        <LoginButton variant="contained">Login</LoginButton>
        <Typography style={{ width: "130px" }}>Become a Seller</Typography>
        <Typography>More</Typography>
        <Box>
          <ShoppingCartIcon />
        </Box>
      </Container>
    </>
  );
};

export default CustomButtons;
