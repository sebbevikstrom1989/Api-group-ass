import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  const [header, setHeader] = useState("ADMIN");

  const toggleHeader = (e) => {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "ADMIN") {
      setHeader("HOME");
    } else {
      setHeader("ADMIN");
    }
  };

  return (
    <Container>
      {header === "ADMIN" ? (
        <Link to="/admin">
          <h3 onClick={toggleHeader}>{header}</h3>
        </Link>
      ) : (
        <Link to="/">
          <h3 onClick={toggleHeader}>{header}</h3>
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
`;
