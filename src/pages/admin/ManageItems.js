import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdminPosts from "../../components/AdminPosts";
import { Link } from "react-router-dom";

function ManageItems() {
  const [posts, setPost] = useState([]);

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

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
            <th>Tags</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <AdminPosts post={post} key={post["_id"]} />
          ))}
        </tbody>
      </Table>
      <Link to="/create">
        <button>CREATE NEW POST</button>
      </Link>
    </div>
  );
}

export default ManageItems;

const Table = styled.table`
  margin-top: 50px;
  border-collapse: collapse;
  margin: 25px 35px;
  font-size: 1.6em;
  color: rgb(0, 0, 0);
  background-color: rgb(69, 90, 214);

  box-shadow: 0 0 20px rgb(0, 0, 0);

  thead tr {
    background-color: #1f1d86;
    color: #ffffff;
    text-align: center;
  }

  tr,
  th,
  td {
    padding: 12px 15px;
    border: 1px rgb(0, 0, 0) solid;
  }
  td {
    height: 35px;
    vertical-align: bottom;
  }
`;
