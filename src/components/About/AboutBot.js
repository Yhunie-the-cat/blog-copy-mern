import React from "react";
import { Link } from "react-router-dom";
import woman_in_hat from "./../../images/woman_in_hat.jpg";

//<span>Photo by <a href="https://unsplash.com/@jonatron?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jon Ly</a> on <a href="https://unsplash.com/s/photos/blonde-woman?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

export default function AboutBot() {
  return (
    <div id="about-bot">
      <img src={woman_in_hat} alt="woman_in_hat" />
      <div id="about-bot-text">
        <h2>"Be fearless, be brave, be bold, love yourself"</h2>
        <Link to="/contact">Let's connect</Link>
        <div className="underscore"></div>
      </div>
    </div>
  );
}
