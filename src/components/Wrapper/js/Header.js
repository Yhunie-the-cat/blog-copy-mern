import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../scss/Header.scss";

export default function Header() {
   const [isClicked, setIsClicked] = useState(false);
   const [navLinks, setNavLinks] = useState([]);
   const burgerRef = useRef();
   const menuRef = useRef();

   useEffect(() => {
      setNavLinks(Object.values(menuRef.current.children));
   }, [menuRef]);

   const handleClick = () => {
      setIsClicked((state) => !state);
      navLinks.forEach((link, index) => {
         if (link.style.animation) {
            link.style.animation = "";
         } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${
               index / 7 + 0.5
            }s`;
         }
      });
   };

   return (
      <section id="header">
         <div
            id="burger"
            className={isClicked ? "toggle" : ""}
            onClick={handleClick}
            ref={burgerRef}
         >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
         </div>
         <nav>
            <ul ref={menuRef} className={isClicked ? "nav-active" : ""}>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/photos">Photos</Link>
               <Link to="/blog">Blog</Link>
               <Link to="/contact">Contact</Link>
            </ul>
         </nav>
         <h1>Kate</h1>
      </section>
   );
}
