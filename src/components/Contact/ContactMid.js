import React from "react";
import marble_table from "./../../images/marble_table.jpg";
import pen from "./../../images/pen.jpg";

export default function ContactMid() {
  return (
    <div id="contact-page">
      <img src={pen} alt="pen" />
      <img src={marble_table} alt="marble_table" />

      <div id="contact-page-text-container">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>

        <form id="contact-form" action="">
          <input type="text" id="name" placeholder="Name" />
          <input type="text" id="email" placeholder="Email" />
          <input type="text" id="subject" placeholder="Subject" />

          <textarea
            id="subject"
            name="subject"
            placeholder="Message"
          ></textarea>
        </form>
        <button id="submit-button">Send</button>
        <div id="submit-button-underscore"></div>
      </div>
    </div>
  );
}
