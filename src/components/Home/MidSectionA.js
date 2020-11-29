import React from 'react'
import { Link } from "react-router-dom"
import "./../../styles/links.scss"
import "./../../styles/midsection_a.scss"
import pen from "./../../images/pen.jpg"
import watch from "./../../images/watch.jpg"
import street from "./../../images/street.jpg"

//<span>Photo by <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Aaron Burden</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
//<span>Photo by <a href="https://unsplash.com/@brigittetohm?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Brigitte Tohm</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
//<span>Photo by <a href="https://unsplash.com/@mitchkmetz?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mitchell Kmetz</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

export default function MidSectionA() {
   return (
      <div id="mid-section-a">
         <div id="text-top">
            <h2>About</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, cum? Reiciendis commodi suscipit in placeat quisquam!</p>
            <Link to="/about">Read more</Link>
            <div className="underscore"></div>
         </div>

         <img id="pen" src={pen} alt="pen" />
         <img id="watch" src={watch} alt="watch" />
         <img id="street" src={street} alt="street" />

         <div id="text-bottom">
            <h2>Photos</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, cum? Reiciendis commodi suscipit in placeat quisquam!</p>
            <Link to="/photos">View portfolio</Link>
            <div className="underscore"></div>
         </div>

         <div id="mid-line" className="center-line"></div>
      </div>
   )
}
