import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
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

export default function AdminPage() {
   //Base url / Store data from the API
   const url = "http://localhost:5000/posts";
   const [data, setData] = useState([]);
   const [statusText, setStatusText] = useState("");
   const statusRef = useRef();

   const showStatus = () => {
      statusRef.current.hidden = false;
      setTimeout(() => {
         statusRef.current.hidden = true;
      }, 1800);
   };

   const inputIsEmpty = () => {
      titleRef.current.value = "Title is empty!";
      titleRef.current.style.color = "red";
      authorRef.current.value = "Author is empty!";
      authorRef.current.style.color = "red";
      messageRef.current.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
         "Message is empty!";
      messageRef.current.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].style.color =
         "red";

      setTimeout(() => {
         titleRef.current.value = "";
         titleRef.current.color = "";
         authorRef.current.value = "";
         authorRef.current.color = "";
         messageRef.current.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
            "";
         messageRef.current.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].style.color =
            "";
      }, 1500);
   };

   //Blog
   const titleRef = useRef();
   const authorRef = useRef();
   const messageRef = useRef();

   //Action buttons
   const [isClicked, setIsClicked] = useState(false);
   const editButton = useRef();
   const deleteButton = useRef();

   //Preview blog
   const previewContainer = useRef();
   const preview = useRef();

   //Render data
   useEffect(() => {
      axios
         .get(url)
         .then((res) => {
            setData(res.data);
         })
         .catch((error) => {
            console.log(error);
            setStatusText(error.response.data.message);
         });
      setIsClicked(false);
   }, [isClicked]);
   //----------

   //Actions
   const createPostButton = () => {
      if (
         titleRef.current.value === "" ||
         authorRef.current.value === "" ||
         messageRef.current.nextSibling.children[0].children[1].children[0]
            .children[0].contentDocument.all[5].innerHTML === ""
      ) {
         inputIsEmpty();
      } else {
         setIsClicked(true);
         axios
            .post(url, {
               title: titleRef.current.value,
               author: authorRef.current.value,
               message:
                  messageRef.current.nextSibling.children[0].children[1]
                     .children[0].children[0].contentDocument.all[5].innerHTML,
            })
            .then((res) => {
               console.log(res.statusText);
               setStatusText("Post created!");
            })
            .catch((error) => {
               console.log(error.response);
               setStatusText(error.response.data.message);
            });
         titleRef.current.value = "";
         authorRef.current.value = "";
         messageRef.current.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
            "";
         showStatus();
      }
   };

   const editPostButton = (id) => {
      setIsClicked(true);
      axios
         .get(`${url}/${id}`)
         .then((res) => {
            titleRef.current.value = res.data.title;
            authorRef.current.value = res.data.author;
            messageRef.current.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
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
      showStatus();
   };

   const updatePostButton = () => {
      if (
         titleRef.current.value === "" ||
         authorRef.current.value === "" ||
         messageRef.current.nextSibling.children[0].children[1].children[0]
            .children[0].contentDocument.all[5].innerHTML === ""
      ) {
         inputIsEmpty();
      } else {
         setIsClicked(true);
         axios
            .patch(`${url}/${editButton.current.id}`, {
               title: titleRef.current.value,
               author: authorRef.current.value,
               message:
                  messageRef.current.nextSibling.children[0].children[1]
                     .children[0].children[0].contentDocument.all[5].innerHTML,
            })
            .then((res) => {
               console.log(res);
               setStatusText("Post updated!");
            })
            .catch((error) => {
               console.log(error);
               setStatusText(error.response.data.message);
            });

         titleRef.current.value = "";
         authorRef.current.value = "";
         messageRef.current.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
            "";
         showStatus();
      }
   };

   const previewPostButton = () => {
      previewContainer.current.hidden = false;
      preview.current.innerHTML =
         messageRef.current.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML;
   };

   const closePreviewContainer = () => {
      previewContainer.current.hidden = true;
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
      titleRef.current.value = "";
      authorRef.current.value = "";
      messageRef.current.nextSibling.children[0].children[1].children[0].children[0].contentDocument.all[5].innerHTML =
         "";
   };
   //----------

   //Render
   return (
      <div id="admin-page">
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
                           id={item._id}
                           ref={editButton}
                           onClick={() => editPostButton(item._id)}
                        >
                           Edit
                        </Button>
                        <Button
                           variant="contained"
                           color="secondary"
                           startIcon={<Delete />}
                           id={item._id}
                           ref={deleteButton}
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

         <div id="preview" ref={previewContainer} hidden>
            <h4 onClick={closePreviewContainer}>Close</h4>
            <div ref={preview}></div>
         </div>

         <div id="status" ref={statusRef} hidden>
            <h4>{statusText}</h4>
         </div>
      </div>
   );
}
