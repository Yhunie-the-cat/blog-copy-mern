import React, { useRef } from "react";
import marble_table from "./../../images/marble_table.jpg";
import pen from "./../../images/pen.jpg";

//TODO:
/*
    []  submit onclick-re
        []  text-ek eltünnek (kész)
        []  serverrel összekötni
        []  adatokat elküldeni egy databasebe
        []  kiírni hogy "az üzenet elküldve"
*/

export default function ContactMid() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const checkNameInput = () => {
    if (nameRef.current.value === "") {
      nameRef.current.disabled = true;
      nameRef.current.value = "Name is required!";
      nameRef.current.style.color = "red";
      setTimeout(() => {
        nameRef.current.value = "";
        nameRef.current.style.color = "";
        nameRef.current.disabled = false;
      }, 1500);
    } else {
      console.log(nameRef.current.value);
    }
  };

  const checkEmailInput = () => {
    if (emailRef.current.value === "") {
      emailRef.current.disabled = true;
      emailRef.current.value = "Email is required!";
      emailRef.current.style.color = "red";
      setTimeout(() => {
        emailRef.current.value = "";
        emailRef.current.style.color = "";
        emailRef.current.disabled = false;
      }, 1500);
    } else if (
      !emailRef.current.value.includes("@") ||
      !emailRef.current.value.includes(".")
    ) {
      emailRef.current.disabled = true;
      emailRef.current.value = "Wrong email format!";
      emailRef.current.style.color = "red";
      setTimeout(() => {
        emailRef.current.value = "";
        emailRef.current.style.color = "";
        emailRef.current.disabled = false;
      }, 1500);
    } else {
      console.log(emailRef.current.value);
    }
  };

  const checkSubjectInput = () => {
    if (subjectRef.current.value === "") {
      subjectRef.current.disabled = true;
      subjectRef.current.value = "Subject is required!";
      subjectRef.current.style.color = "red";
      setTimeout(() => {
        subjectRef.current.value = "";
        subjectRef.current.style.color = "";
        subjectRef.current.disabled = false;
      }, 1500);
    } else {
      console.log(subjectRef.current.value);
    }
  };

  const checkMessage = () => {
    if (messageRef.current.value === "") {
      messageRef.current.disabled = true;
      messageRef.current.value = "Message is required!";
      messageRef.current.style.color = "red";
      setTimeout(() => {
        messageRef.current.value = "";
        messageRef.current.style.color = "";
        messageRef.current.disabled = false;
      }, 1500);
    } else {
      console.log(messageRef.current.value);
    }
  };

  const handleClick = () => {
    //  if (emailRef.current.value === "") {
    checkNameInput();
    //  } else {
    //    console.log(emailRef.current.value);
    //    emailRef.current.value="";
    //  }
    checkEmailInput();
    checkSubjectInput();
    checkMessage();
  };

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

        <form id="contact-form">
          <input type="text" id="name" placeholder="Name" ref={nameRef} />
          <input type="text" id="email" placeholder="Email" ref={emailRef} />
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            ref={subjectRef}
          />

          <textarea
            id="subject"
            name="subject"
            placeholder="Message"
            ref={messageRef}
          ></textarea>
        </form>

        <button id="submit-button" onClick={handleClick}>
          Send
        </button>
        <div id="submit-button-underscore"></div>
      </div>
    </div>
  );
}
