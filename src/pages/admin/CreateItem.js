import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PostForm from "../../components/PostForm";

function CreateItem() {
  const [post, setPost] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title: post.title,
      author: post.author,
      tags: post.tags,
      content: post.content,
      url: post.url,
    };

    let response = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error("Server error: " + response.status);
    }
    history.push("admin");
  };

  return (
    <div>
      <PostForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        post={post}
        pageId="create-form"
      />
    </div>
  );
}

export default CreateItem;
