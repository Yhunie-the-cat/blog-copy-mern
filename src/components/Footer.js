import React from "react";
import { Link } from "react-router-dom";
import woman_in_sunglasses from "./../images/woman_in_sunglasses.jpg";
import watch from "./../images/watch.jpg";
import woman_portrait from "./../images/woman_portrait.jpg";
import pen from "./../images/pen.jpg";

export default function Footer() {
  return (
    <div id="footer">
      <div id="footer-top">
        <div id="footer-text-container">
          <h1>the list</h1>
          <h2>Don't miss a thing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean commodo ligula eget
          </p>
          <Link to="/contact">Sign me up!</Link>
        </div>

        <div id="footer-line"></div>

        <div id="footer-photos">
          <img src={woman_in_sunglasses} alt="woman_in_sunglasses" />
          <img src={watch} alt="watch" />
          <img src={woman_portrait} alt="woman_portrait" />
          <img src={pen} alt="pen" />
        </div>
      </div>

      <div id="footer-bottom">
        <div></div>
      </div>
    </div>
  );
}
