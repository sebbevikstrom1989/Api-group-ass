import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Item({ match }) {
  console.log(match.params.id);

  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    await fetch("http://localhost:5000/posts/" + match.params.id)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.author}</p>
      <p>{post.tags}</p>
      <p>{post.date}</p>
      <Link to={"/"}>
        <Button variant="contained" color="primary">
          BACK
        </Button>
      </Link>
    </div>
  );
}

export default Item;
