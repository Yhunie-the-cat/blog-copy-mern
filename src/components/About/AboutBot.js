import React from "react";
import { Link } from "react-router-dom";
import woman_in_hat from "./../../images/woman_in_hat.jpg";

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
