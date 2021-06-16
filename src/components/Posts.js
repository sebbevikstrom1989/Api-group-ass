import React from "react";
import Post from "./Post";
import styled from "styled-components";

function Posts({ posts }) {
  return (
    <Container>
      {posts && posts.map((post) => <Post key={post["_id"]} post={post} />)}
    </Container>
  );
}

export default Posts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
