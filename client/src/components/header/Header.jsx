import React from "react";
import { AppBar, Toolbar, styled, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  backgroud: #ffffff;
  color: black;
`;

const Container = styled(Toolbar)`
  justify-content: center;
  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
`;

export const Header = () => {
  return (
    <Component>
      <Container>
        <Link to="/">HOME</Link>
        <Link to="/about"> ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/login">LOGOUT</Link>
      </Container>
    </Component>
  );
};
