import React from "react";
import { Link } from "react-router-dom";
import pen from "./../../../images/pen.jpg";
import watch from "./../../../images/watch.jpg";
import street from "./../../../images/street.jpg";
import "./../scss/HomeSection2.scss";

export default function HomeSection2() {
   return (
      <section id="mid-section-a">
         <div id="text-top">
            <h2>About</h2>

            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
               cum? Reiciendis commodi suscipit in placeat quisquam!
            </p>

            <Link to="/about">Read more</Link>
            <div className="underscore"></div>
         </div>

         <img id="pen" src={pen} alt="pen" />
         <img id="watch" src={watch} alt="watch" />
         <img id="street" src={street} alt="street" />

         <div id="text-bottom">
            <h2>Photos</h2>

            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
               cum? Reiciendis commodi suscipit in placeat quisquam!
            </p>

            <Link to="/photos">View portfolio</Link>
            <div className="underscore"></div>
         </div>

         <div id="mid-line"></div>
      </section>
   );
}
