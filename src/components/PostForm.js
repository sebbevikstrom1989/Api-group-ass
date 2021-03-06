import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Link } from "react-router-dom";

function postForm({ post, handleSubmit, handleChange, pageId }) {
  const myDate = post.date;
  function formatDate(myDate) {
    let dateString = String(myDate).slice(0, 16).replace("T", " ");

    return dateString;
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          type="text"
          name="title"
          label="TITLE"
          variant="outlined"
          value={post.title || ""}
          required
        />
        <TextField
          onChange={handleChange}
          type="text"
          name="author"
          label="AUTHOR"
          variant="outlined"
          value={post.author || ""}
          required
        />
        <TextField
          onChange={handleChange}
          type="text"
          name="tags"
          label="TAGS"
          variant="outlined"
          value={post.tags || ""}
          required
        />
        <TextField
          onChange={handleChange}
          type="text"
          name="url"
          label="URL"
          variant="outlined"
          value={post.url || ""}
        />
        <TextField
          onChange={handleChange}
          type="text"
          name="content"
          label="CONTENT"
          variant="outlined"
          multiline
          rows={5}
          value={post.content || ""}
          required
        />
        {pageId === "update-post" ? (
          <p>Created at: {formatDate(myDate)}</p>
        ) : (
          ""
        )}
        <ButtonGrp>
          <Button type="submit" variant="contained" color="primary">
            {pageId === "update-post" ? "UPDATE" : "CREATE"}
          </Button>
          <Link to="/admin">
            <Button type="submit" variant="contained" color="primary">
              BACK
            </Button>
          </Link>
        </ButtonGrp>
      </Form>
    </Container>
  );
}

export default postForm;

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  width: 600px;

  input {
    height: 30px;
  }

  textarea {
    height: 100px;
  }
`;

const ButtonGrp = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-left: 10px;
  }
  a {
    text-decoration: none;
  }
`;
