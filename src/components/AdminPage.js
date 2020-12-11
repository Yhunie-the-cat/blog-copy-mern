import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function AdminPage() {
  const [data, setData] = useState([]);

  const title = useRef();
  const author = useRef();
  const message = useRef();
  const editButton = useRef();
  const deleteButton = useRef();

  const url = "http://localhost:5000/posts";

  const textEditorModules = {
    toolbar: [
      [{ header: "1" }, { font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const textEditorFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const createPostButton = () => {
    axios
      .post(url, {
        title: title.current.value,
        author: author.current.value,
        message: message.current.value,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    title.current.value = "";
    author.current.value = "";
    message.current.value = "";
  };

  const editPostButton = () => {
    axios
      .get(`${url}/${editButton.current.id}`)
      .then((res) => {
        title.current.value = res.data.title;
        author.current.value = res.data.author;
        message.current.value = res.data.message;
      })
      .catch((error) => console.log(error));
  };

  const deletePostButton = () => {
    axios.delete(`${url}/${deleteButton.current.id}`);
  };

  const updatePostButton = () => {
    axios.patch(`${url}/${editButton.current.id}`, {
      title: title.current.value,
      author: author.current.value,
      message: message.current.value,
    });
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // handle success
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  const test = useRef();
  const checkRef = () => {
    test.current.innerHTML = message.current.state.value;
    console.log(message.current.state.value);
  };

  return (
    <div id="admin-page">
      {data.map((item, index) => {
        return (
          <div key={index} className="post-list">
            <h2>{item.title}</h2>
            <button id={item._id} ref={editButton} onClick={editPostButton}>
              Edit Post
            </button>
            <button id={item._id} ref={deleteButton} onClick={deletePostButton}>
              Delete Post
            </button>
          </div>
        );
      })}

      <div id="editor">
        <input type="text" placeholder="Title" ref={title} />
        <input type="text" placeholder="Author" ref={author} />
        <ReactQuill
          id="text-field"
          placeholder="Write something..."
          modules={textEditorModules}
          formats={textEditorFormats}
          ref={message}
        />
      </div>

      <div id="button-container">
        <button onClick={createPostButton}>Create Post</button>
        <button onClick={updatePostButton}>Update Post</button>
        <button onClick={checkRef}>Check Ref</button>
      </div>

      <div ref={test}></div>
    </div>
  );
}
