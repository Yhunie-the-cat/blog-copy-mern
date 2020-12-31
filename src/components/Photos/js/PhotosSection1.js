import React from "react";
import watch from "./../../../images/watch.jpg";
import woman_in_sunglasses from "./../../../images/woman_in_sunglasses.jpg";
import "./../scss/PhotosSection1.scss";

export default function PhotosSection1(props) {
   return (
      <section id="photos-top">
         <h2>"Everything I do is a matter of heart, body and soul"</h2>

         <img id="photos-top-left" src={watch} alt="watch" />

         <div id="photos-top-text-container">
            <div className="div-links" onClick={props.handleClick}>
               Open gallery
            </div>
            <div className="underscore"></div>
         </div>

         <div id="photos-top-center-line"></div>

         <img
            id="photos-top-right"
            src={woman_in_sunglasses}
            alt="woman_in_sunglasses"
         />
      </section>
   );
}
