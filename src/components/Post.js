import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Post({ post }) {
  const myDate = post.date;
  function formatDate(myDate) {
    let dateString = String(myDate).slice(0, 16).replace("T", " ");

    return dateString;
  }

  let str = post.content;
  const length = 100;
  let trimmedString = str.substring(0, length);

  if (str.length > 100) {
    trimmedString = str.substring(0, length) + "...";
  } else {
    trimmedString = str.substring(0, length);
  }

  return (
    <Container>
      <ImgContainer>
        <img src={post.url} alt={post.title} />
      </ImgContainer>
      <PostContent>
        <span>#{post.tags}</span>
        <h2>{post.title}</h2>
        <p>{trimmedString}</p>
      </PostContent>

      <Author>
        <Link to={`/post/${post["_id"]}`}>
          <Button variant="contained" color="primary">
            Read More
          </Button>
        </Link>
        <p>{post.author}</p>
        <p>{formatDate(myDate)}</p>
      </Author>
    </Container>
  );
}

export default Post;
const Container = styled.div`
  width: 600px;
  align-items: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin: 20px 0;
  border-radius: 20px;
  overflow: hidden;

  h2 {
    text-align: center;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 200px;
    max-width: 100%;
    object-fit: fill;
  }
`;

const Author = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;

  a {
    text-decoration: none;
  }

  Button {
    border-radius: 20px;
    background-color: rgba(20, 166, 232, 0.8);
  }
`;
const PostContent = styled.div`
  padding: 10px;
  span {
    background: #9543bc;
    border-radius: 50px;
    font-size: 12px;
    margin: 0;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
