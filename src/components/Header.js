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
  width: 100%;
  height: 70px;
`;
