import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PostForm from "../../components/PostForm";

function UpdateItem({ match }) {
  const [post, setPost] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPost = async () => {
    await fetch("http://localhost:5000/posts/" + match.params.id)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  };

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

    let response = await fetch("http://localhost:5000/posts/" + post["_id"], {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error("Server error: " + response.status);
    }
    history.push("/admin");
  };

  return (
    <div>
      <PostForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        post={post}
        pageId="update-post"
      />
    </div>
  );
}

export default UpdateItem;
