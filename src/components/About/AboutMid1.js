import React from "react";
import { Link } from "react-router-dom";
import street from "./../../images/street.jpg";

export default function AboutMid1(props) {
  return (
    <div id="about-mid-1" ref={props.targetRef}>
      <h2>"Sometimes the simplest things are the most profound"</h2>

      <img src={street} alt="street" />

      <div id="about-mid-1-text">
        <p>
          Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Aenean
          commodo. Lorem ipsum dolor sit amet, consect etuer adipiscing elit.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Aenean
          commodo. Lorem ipsum dolor sit amet, consect etuer adipiscing elit.
        </p>

        <Link to="/contact">Let's connect</Link>
        <div className="underscore"></div>
      </div>

      <div id="about-center-line"></div>
    </div>
  );
}
