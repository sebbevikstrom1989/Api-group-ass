import React, { useState } from "react";
import styled from "styled-components";

function CreateItem() {
  const [post, setPost] = useState({});

  const handleChange = (e) => {
    setPost({
      ...post,
      postName: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title: post.title,
      author: post.author,
      tags: post.tags,
      content: post.content,
    };

    let response = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          value={post.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="AUTHOR"
          value={post.author}
          onChange={handleChange}
        />
        <input type="text" placeholder="TAGS" value={post.tags} />
        <textarea type="text" placeholder="CONTENT" value={post.content} />
        <button>CREATE</button>
      </Form>
    </div>
  );
}

export default CreateItem;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    height: 30px;
  }

  textarea {
    height: 100px;
  }
`;
