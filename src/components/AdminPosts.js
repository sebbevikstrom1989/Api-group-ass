import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function AdminPosts({ post, deletePost }) {
  const handleDelete = () => {
    deletePost(post["_id"]);
  };

  return (
    <tr>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>{post.author}</td>
      <td>{post.tags}</td>
      <td>{post.date}</td>
      <td>
        <Button>
          <DeleteForeverIcon onClick={handleDelete} />
        </Button>
        <Button>
          <Link to={`/update/${post["_id"]}`}>
            <EditIcon />
          </Link>
        </Button>
      </td>
    </tr>
  );
}

export default AdminPosts;
