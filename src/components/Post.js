import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export default function Post() {
   const [data, setData] = useState([]);
   const { title, author, message, date } = data;
   const [formDate, setFormDate] = useState("");
   const textContentRef = useRef();
   const location = useLocation();
   const [postID] = useState(Object.values(location.state));

   const url = "http://localhost:5000/posts";

   useEffect(() => {
      axios
         .get(`${url}/${postID}`)
         .then((res) => {
            setData(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [postID]);

   useEffect(() => {
      if (date) {
         setFormDate(date.slice(0, date.indexOf("T")));
      }
   }, [date]);

   if (textContentRef.current) {
      textContentRef.current.innerHTML = message;
   }

   return (
      <div id="post-page">
         <Link to="/blog">
            <h4 className="back-button">Back</h4>
         </Link>
         <h1>{title}</h1>
         <br />
         <br />
         <div id="post-page-text-content" ref={textContentRef}></div>
         <div id="post-page-wrapper">
            <p>{author}</p>
            <p>{formDate}</p>
         </div>
      </div>
   );
}
