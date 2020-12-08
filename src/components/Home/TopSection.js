import React from "react";
import { Link } from "react-router-dom";
import palm_leaf from "./../../images/palm_leaf.jpg";
import woman_portrait from "./../../images/woman_portrait.jpg";

export default function TopSection() {
  return (
    <div id="top-section">
      <img id="hero-background" src={palm_leaf} alt="palm_leaf" />
      <img id="hero-center" src={woman_portrait} alt="woman_portrait" />

      <div id="hero-text">
        <h2 id="hero-title">Hi Lovely</h2>

        <p>
          I am a traveling lifestyle blogger and fashion photographer. I love to
          capture moments that become treasured memories.
        </p>

        <Link to="/information">Let's work together</Link>
        <div className="underscore"></div>
      </div>
    </div>
  );
}
