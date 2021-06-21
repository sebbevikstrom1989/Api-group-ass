import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

function AdminPosts({ post, deletePost }) {
  const handleDelete = () => {
    deletePost(post["_id"]);
  };

  const myDate = post.date;
  function formatDate(myDate) {
    let dateString = String(myDate).slice(0, 16).replace("T", " ");

    return dateString;
  }

  let str = post.content;
  const length = 50;
  let trimmedString = str.substring(0, length);

  if (str.length > 50) {
    trimmedString = str.substring(0, length) + "...";
  } else {
    trimmedString = str.substring(0, length);
  }

  return (
    <tr>
      <td>{post.title}</td>
      <td>{trimmedString}</td>
      <td>{post.author}</td>
      <td>#{post.tags}</td>
      <td>{formatDate(myDate)}</td>
      <td>
        <ButtonGrp>
          <Button>
            <DeleteForeverIcon onClick={handleDelete} />
          </Button>
          <Button>
            <Link to={`/update/${post["_id"]}`}>
              <EditIcon />
            </Link>
          </Button>
        </ButtonGrp>
      </td>
    </tr>
  );
}

export default AdminPosts;

const ButtonGrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: black;
  }
`;
