import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = () => {
  // Dummy content list
  const [contents, setContents] = useState([
    { id: 1, title: "My First Video", type: "Video", date: "2025-09-10" },
    { id: 2, title: "Blog on AI", type: "Article", date: "2025-09-12" },
  ]);

  const [newContent, setNewContent] = useState({
    title: "",
    type: "Video",
  });

  // Handle input change
  const handleChange = (e) => {
    setNewContent({
      ...newContent,
      [e.target.name]: e.target.value,
    });
  };

  // Add new content
  const handleAddContent = (e) => {
    e.preventDefault();
    if (!newContent.title) {
      alert("Please enter a title!");
      return;
    }

    const newItem = {
      id: contents.length + 1,
      title: newContent.title,
      type: newContent.type,
      date: new Date().toISOString().slice(0, 10),
    };

    setContents([...contents, newItem]);
    setNewContent({ title: "", type: "Video" });
  };

  return (
    <div className="container mt-5">
      <h2>📂 My Content</h2>
      <p className="text-muted">Manage and upload your content here.</p>

      {/* Add Content Form */}
      <div className="card shadow p-4 mb-4">
        <h5>Add New Content</h5>
        <form onSubmit={handleAddContent}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter content title"
              value={newContent.title}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Type</label>
            <select
              name="type"
              className="form-control"
              value={newContent.type}
              onChange={handleChange}
            >
              <option value="Video">Video</option>
              <option value="Article">Article</option>
              <option value="Podcast">Podcast</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            ➕ Add Content
          </button>
        </form>
      </div>

      {/* Content List */}
      <div className="card shadow p-4">
        <h5>My Uploaded Content</h5>
        {contents.length === 0 ? (
          <p className="text-muted">No content uploaded yet.</p>
        ) : (
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {contents.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Content;
