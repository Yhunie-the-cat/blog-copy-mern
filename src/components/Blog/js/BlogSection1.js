import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import woman_in_sunglasses from "./../../../images/woman_in_sunglasses.jpg";
import blonde from "./../../../images/blonde.jpg";
import camera from "./../../../images/camera.jpg";
import marble_table from "./../../../images/marble_table.jpg";
import palm_leaf from "./../../../images/palm_leaf.jpg";
import pen from "./../../../images/pen.jpg";
import street from "./../../../images/street.jpg";
import watch from "./../../../images/watch.jpg";
import woman_in_hat from "./../../../images/woman_in_hat.jpg";
import woman_in_pool from "./../../../images/woman_in_pool.jpg";
import woman_portrait from "./../../../images/woman_portrait.jpg";
import "./../scss/BlogSection1.scss";

export default function BlogSection1() {
   const url = "http://localhost:5000/posts";
   const [data, setData] = useState([]);
   const [error, setError] = useState("");

   const randomPictures = [
      blonde,
      camera,
      marble_table,
      palm_leaf,
      pen,
      street,
      watch,
      woman_in_hat,
      woman_in_pool,
      woman_portrait,
   ];

   useEffect(() => {
      axios
         .get(url)
         .then((res) => {
            setData(res.data);
         })
         .catch((error) => {
            console.log(error);
            setError(error);
         });
   }, []);

   return (
      <section id="blog-mid">
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

         {error ? (
            <div id="error-container">
               <h1>Server disconnected!</h1>
            </div>
         ) : (
            <div id="blog-mid-list">
               {data.map((item, index) => {
                  return (
                     <div key={index}>
                        <img
                           src={randomPictures[index]}
                           style={{ objectFit: "cover" }}
                           alt="woman_in_sunglasses"
                        />
                        <Link
                           to={{
                              pathname: `/post/${item.title.replace(
                                 / /g,
                                 "_"
                              )}`,
                              state: { id: item._id },
                           }}
                        >
                           {item.title}
                        </Link>
                     </div>
                  );
               })}
            </div>
         )}
      </section>
   );
}
