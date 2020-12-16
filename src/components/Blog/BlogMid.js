import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import woman_in_sunglasses from "./../../images/woman_in_sunglasses.jpg";

export default function BlogMid() {
   const url = "http://localhost:5000/posts";
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get(url)
         .then((res) => {
            setData(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   return (
      <div id="blog-mid">
         <div id="blog-mid-text-content">
            <img src={woman_in_sunglasses} alt="woman_in_sunglasses" />

            <div>
               <h2>The blog</h2>
               <p>
                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                  nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit
                  libero, sodales nec, volutpat a, suscipit non, turpis.
                  Curabitur ligula sapien, tincidunt non. Lorem ipsum dolor sit
                  amet, consectetuer adi piscing elit. Aenean commodo ligula
                  eget.
               </p>
               <div id="blog-underscore"></div>
            </div>
         </div>

         <div id="blog-mid-list">
            {data.map((item, index) => {
               return (
                  <div>
                     <img src="" alt="" />
                     <Link
                        to={`/post/${item.title
                           .toLowerCase()
                           .replace(/ /g, "_")}`}
                     >
                        {item.title}
                     </Link>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
