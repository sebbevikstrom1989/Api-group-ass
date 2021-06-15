import React from "react";

function AdminPosts({ post }) {
  return (
    <tr>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>{post.author}</td>
      <td>{post.tags}</td>
      <td>{post.date}</td>
    </tr>
  );
}

export default AdminPosts;
