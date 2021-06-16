import React from "react";
import styled from "styled-components";

function postForm({ post, handleSubmit, handleChange, pageId }) {
  const formatDate = (date) => {
    let dateObj = new Date(date);

    return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="TITLE"
          value={post.title || ""}
          required
        />
        <input
          onChange={handleChange}
          type="text"
          name="author"
          placeholder="AUTHOR"
          value={post.author || ""}
          required
        />
        <input
          onChange={handleChange}
          type="text"
          name="tags"
          placeholder="TAGS"
          value={post.tags || ""}
          required
        />
        <input
          onChange={handleChange}
          type="text"
          name="url"
          placeholder="URL"
          value={post.url || ""}
          required
        />
        <textarea
          onChange={handleChange}
          type="text"
          name="content"
          placeholder="CONTENT"
          value={post.content || ""}
          required
        />
        {pageId === "update-post" ? (
          <p>Created at: {formatDate(post.date)}</p>
        ) : (
          ""
        )}
        <button>{pageId === "update-post" ? "UPDATE" : "CREATE"}</button>
      </Form>
    </div>
  );
}

export default postForm;

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
