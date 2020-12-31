import React from "react";
import camera from "./../../../images/camera.jpg";
import blonde from "./../../../images/blonde.jpg";
import "./../scss/AboutSection1.scss";

export default function AboutSection1({ handleClick }) {
   return (
      <section id="about-top">
         <img
            id="about-background"
            src={blonde}
            alt="blonde_woman_in_sunglasses"
         />

         <img id="about-center" src={camera} alt="camera" />

         <div id="about-text">
            <h2 id="about-title">I am Kate</h2>

            <p>
               Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Aenean
               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
               penatibus et magnis dis parturient montes, nascetur ridiculus
               mus. Aenean commodo.
            </p>

            <div className="div-links" onClick={handleClick}>
               Read more
            </div>
            <div className="underscore"></div>
         </div>
      </section>
   );
}
