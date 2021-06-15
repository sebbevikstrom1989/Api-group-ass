import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Moment from "react-moment";

function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Moment format="YYYY/MM/DD">
        <p>{post.date}</p>
      </Moment>

      <Link to={`/post/${post["_id"]}`}>
        <Button variant="contained" color="primary">
          Read More
        </Button>
      </Link>
    </div>
  );
}

export default Post;
