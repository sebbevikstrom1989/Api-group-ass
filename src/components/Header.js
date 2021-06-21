import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  const [header, setHeader] = useState(false);

  const toggleHeader = () => {
    setHeader(!header);
  };

  return (
    <Container>
      {header === false ? (
        <Link to="/admin">
          <h3 onClick={toggleHeader}>ADMIN</h3>
        </Link>
      ) : (
        <Link to="/">
          <h3 onClick={toggleHeader}>HOME</h3>
        </Link>
      )}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  margin-right: 50px;

  a {
    text-decoration: none;
    color: whitesmoke;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      color: lightgrey;
      transform: scale(1.05);
    }
  }
`;
