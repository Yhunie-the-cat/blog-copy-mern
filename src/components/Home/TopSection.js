import React from 'react'
import { Link } from "react-router-dom"
import palm_leaf from "./../../images/palm_leaf.jpg"
import woman_portrait from "./../../images/woman_portrait.jpg"

//<span>Photo by <a href="https://unsplash.com/@feeypflanzen?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Severin Candrian</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
//<span>Photo by <a href="https://unsplash.com/@id99?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ivan Dodig</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>


export default function TopSection() {

   return (
      <div id="top-section">
         <img id="hero-background" src={palm_leaf} alt="palm_leaf" />
         <img id="hero-center" src={woman_portrait} alt="woman_portrait" />
         <div id="hero-text">
            <h2 id="hero-title">Hi Lovely</h2>
            <p>I am a traveling lifestyle blogger and fashion photographer. I love to capture moments that become treasured memories.</p>
            <Link to="/information">Let's work together</Link>
            <div className="underscore"></div>
         </div>
      </div>
   )
}
