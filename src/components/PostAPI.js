import React, { useState, useEffect } from "react";
import Posts from "./Posts";

function PostAPI() {
  const [posts, setPost] = useState([]);

  const fetchAllPosts = async () => {
    await fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}

export default PostAPI;
