import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdminPosts from "../../components/AdminPosts";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function ManageItems() {
  const [posts, setPost] = useState([]);

  // Display all posts!
  const fetchAllPosts = async () => {
    await fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  // Delete posts
  const deletePost = async (postId) => {
    await fetch("http://localhost:5000/posts/" + postId, {
      method: "DELETE",
    });
    fetchAllPosts();
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
            <th>Tags</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <AdminPosts post={post} key={post["_id"]} deletePost={deletePost} />
          ))}
        </tbody>
      </Table>
      <Link to="/create">
        <Button variant="contained" color="primary">
          Create Post
        </Button>
      </Link>
    </Container>
  );
}

export default ManageItems;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 20px;
    font-size: 30px;
    border-radius: 20px;
  }
  a {
    text-decoration: none;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 35px;
  width: 70%;
  font-size: 1.2em;
  background-color: rgba(28, 166, 232, 1) 90%;
  box-shadow: 0 0 20px rgb(0, 0, 0);

  thead tr {
    background-color: #d629ce;
    opacity: 0.9;
    color: #ffffff;
    text-align: center;
  }

  tr,
  th,
  td {
    padding: 12px 15px;
    border: 2px rgb(0, 0, 0) solid;
  }
  td {
    height: 35px;
    text-align: center;
  }
`;
