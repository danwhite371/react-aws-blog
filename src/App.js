import React, { useState } from "react";

const defaultFormData = { name: "", desc: "" };
const defaultPostData = [];
const App = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [posts, setPosts] = useState(defaultPostData);

  function addPost(formData) {
    posts.push({ ...formData });
    setFormData(defaultFormData);
    setPosts(Array.from(posts));
  }

  function handleChange(event) {
    let tempformData = { ...formData };
    tempformData[event.target.name] = event.target.value;
    setFormData(tempformData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addPost(formData);
    console.log(`Added post: ${posts.length}`);
  }

  return (
    <div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Desc:
            <input
              type="text"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      {posts.length > 0 && (
        <table className="data-list-section">
          <tbody>
            {posts.map((post) => (
              <tr>
                <td>{post.name}</td>
                <td>{post.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
