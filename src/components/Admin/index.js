import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
   CreateOutlined as Create,
   Clear,
   Delete,
   Edit,
   Search,
   Update,
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import "./../Admin/style.scss";

export default function AdminPage() {
   //Base url / Store data from the API
   const url = "http://localhost:5000/posts";
   const [data, setData] = useState([]);
   const [statusText, setStatusText] = useState("");
   const [postID, setPostID] = useState("");
   const statusRef = useRef();
   const status = statusRef.current;

   //Blog
   const titleRef = useRef();
   const authorRef = useRef();
   const messageRef = useRef();
   const title = titleRef.current;
   const author = authorRef.current;
   const message = messageRef.current;

   const showStatus = () => {
      status.hidden = false;
      setTimeout(() => {
         status.hidden = true;
         setStatusText("");
      }, 1800);
   };

   const inputIsEmpty = () => {
      title.value = "Title is empty!";
      title.style.color = "red";
      author.value = "Author is empty!";
      author.style.color = "red";
      message.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
         "Message is empty!";
      message.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].style.color =
         "red";

      setTimeout(() => {
         title.value = "";
         title.style.color = "";
         author.value = "";
         author.style.color = "";
         message.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
            "";
         message.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].style.color =
            "";
      }, 1500);
   };

   //Action buttons
   const [isClicked, setIsClicked] = useState(false);
   const editButton = useRef();

   //Preview blog
   const previewContainerRef = useRef();
   const previewContainer = previewContainerRef.current;
   const previewRef = useRef();
   const preview = previewRef.current;

   //Render data
   useEffect(() => {
      axios
         .get(url)
         .then((res) => {
            setData(res.data);
         })
         .catch((error) => {
            console.log(error);
            setStatusText("Network error!");
         });

      setIsClicked(false);
   }, [isClicked]);
   //----------

   //Actions
   const createPostButton = () => {
      console.log(messageRef.current.get);
      if (
         title.value === "" ||
         author.value === "" ||
         message.nextSibling.children[0].children[1].children[0].children[0]
            .contentDocument.all[5].innerHTML === ""
      ) {
         inputIsEmpty();
      } else {
         setIsClicked(true);
         axios
            .post(url, {
               title: title.value,
               author: author.value,
               message:
                  message.nextSibling.children[0].children[1].children[0]
                     .children[0].contentDocument.all[5].innerHTML,
            })
            .then((res) => {
               console.log(res.statusText);
               setStatusText("Post created!");
            })
            .catch((error) => {
               console.log(error.response);
               setStatusText(error.response.data.message);
            });
         title.value = "";
         author.value = "";
         message.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
            "";
         showStatus();
      }
   };

   const editPostButton = (id) => {
      setPostID(id);
      setIsClicked(true);
      axios
         .get(`${url}/${id}`)
         .then((res) => {
            title.value = res.data.title;
            author.value = res.data.author;
            message.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
               res.data.message;
         })
         .catch((error) => {
            console.log(error);
            setStatusText(error.response.data.message);
         });
   };

   const deletePostButton = (id) => {
      setIsClicked(true);
      axios
         .delete(`${url}/${id}`)
         .then((res) => {
            setStatusText("Post deleted!");
         })
         .catch((error) => {
            console.log(error);
            setStatusText(error.response.data.message);
         });
      title.value = "";
      author.value = "";
      message.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
         "";
      showStatus();
   };

   const updatePostButton = () => {
      console.log(editButton);
      if (
         title.value === "" ||
         author.value === "" ||
         message.nextSibling.children[0].children[1].children[0].children[0]
            .contentDocument.all[5].innerHTML === ""
      ) {
         inputIsEmpty();
      } else {
         setIsClicked(true);
         axios
            .patch(`${url}/${postID}`, {
               title: title.value,
               author: author.value,
               message:
                  message.nextSibling.children[0].children[1].children[0]
                     .children[0].contentDocument.all[5].innerHTML,
            })
            .then((res) => {
               console.log(res);
               setStatusText("Post updated!");
            })
            .catch((error) => {
               console.log(error);
               setStatusText(error.response.data.message);
            });

         title.value = "";
         author.value = "";
         message.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
            "";
         showStatus();
      }
   };

   const previewPostButton = () => {
      previewContainer.hidden = false;
      preview.innerHTML =
         message.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML;
   };

   const closepreviewContainerRef = () => {
      previewContainer.hidden = true;
   };
   //----------

   //Create post button
   const CustomButton = withStyles(() => ({
      root: {
         backgroundColor: "#21ba45",
         "&:hover": {
            backgroundColor: "#16AB39",
         },
      },
   }))(Button);
   //-----------

   //Clear button
   const clearButton = () => {
      title.value = "";
      author.value = "";
      message.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
         "";
   };
   //----------

   //Render
   return (
      <section id="admin-page">
         {statusText === "Network error!" ? (
            <div id="error">
               <h2>{statusText}</h2>
               <Link to="/">Go to home page</Link>
            </div>
         ) : (
            <>
               <div id="admin-left">
                  <h2>Posts</h2>
                  <div id="post-list-container">
                     {data.map((item, index) => {
                        return (
                           <div key={index}>
                              <p>{item.title}</p>
                              <Button
                                 variant="contained"
                                 color="default"
                                 startIcon={<Edit />}
                                 ref={editButton}
                                 onClick={() => editPostButton(item._id)}
                              >
                                 Edit
                              </Button>
                              <Button
                                 variant="contained"
                                 color="secondary"
                                 startIcon={<Delete />}
                                 onClick={() => deletePostButton(item._id)}
                              >
                                 Delete
                              </Button>
                           </div>
                        );
                     })}
                  </div>
               </div>

               <div id="admin-right">
                  <h2>Editor</h2>
                  <div id="editor">
                     <input type="text" placeholder="Title" ref={titleRef} />
                     <input type="text" placeholder="Author" ref={authorRef} />

                     <Button
                        variant="contained"
                        color="default"
                        startIcon={<Clear />}
                        onClick={clearButton}
                     >
                        Clear
                     </Button>

                     <textarea id="text-field" ref={messageRef}></textarea>
                  </div>

                  <div id="button-container">
                     <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Search />}
                        onClick={previewPostButton}
                     >
                        Preview
                     </Button>
                     <CustomButton
                        variant="contained"
                        color="primary"
                        startIcon={<Create />}
                        onClick={createPostButton}
                     >
                        Create
                     </CustomButton>
                     <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Update />}
                        onClick={updatePostButton}
                     >
                        Update
                     </Button>
                  </div>
               </div>

               <div id="preview" ref={previewContainerRef} hidden>
                  <h4 onClick={closepreviewContainerRef}>Close</h4>
                  <div ref={previewRef}></div>
               </div>

               <div id="status" ref={statusRef} hidden>
                  <h4>{statusText}</h4>
               </div>
            </>
         )}
      </section>
   );
}
