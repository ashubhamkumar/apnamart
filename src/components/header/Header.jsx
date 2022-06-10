import React from "react";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
//components
import Search from "./Search";
import CustomButtons from "./CustomButtons";
//Styled component
const StyledHeader = styled(AppBar)`
  background: #818cf8;
`;
const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;
const CustomButtonContainer = styled(Box)`
  margin: 0 5% 0 auto;
`;
const Header = () => {
  return (
    <>
      <StyledHeader>
        <Toolbar>
          <Component>
            {/* brand name */}
            <Box>
              <Typography variant="h3" fontSize={30}>
                Apnamart
              </Typography>
            </Box>
          </Component>
          {/* search component */}
          <Search />
          <CustomButtonContainer>
            <CustomButtons />
          </CustomButtonContainer>
        </Toolbar>
      </StyledHeader>
    </>
  );
};

export default Header;
