import React, { useState } from 'react';

function Community() {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: event.target.elements.title.value,
      content: event.target.elements.content.value,
    };
    setPosts([...posts, newPost]);
    event.target.reset();
  };

  return (
    <div className="container">
      <h1 className="text-center">Community</h1>
      <p className="text-center">Chat with members of the community</p>
      <ul className="list-group">
        {posts.map((post, index) => (
          <li key={index} className="list-group-item">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handlePostSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Content"
            name="content"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <footer>
        <p>&copy; 2023 AI Community Africa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Community;
