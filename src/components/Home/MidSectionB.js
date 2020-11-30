import React from 'react'
import { Link } from "react-router-dom"
import "./../../styles/links.scss"
import "./../../styles/midsection_b.scss"
import woman_in_pool from "./../../images/woman_in_pool.jpg"
import marble_table from "./../../images/marble_table.jpg"

//<span>Photo by <a href="https://unsplash.com/@joshrh19?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Joshua Rawson-Harris</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
//<span>Photo by <a href="https://unsplash.com/@charissek?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Charisse Kenion</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

export default function MidSectionB() {
   return (
      <div id="mid-section-b">

         <div id="mid-section-b-link-container">
            <h2>Favorite posts</h2>
            <Link to="/blog">View all blogpost</Link>
         </div>

         <div id="mid-section-b-content">
            <div>
               <img src={woman_in_pool} alt="woman_sitting_in_pool" />
               <p>Travel</p>
               <Link to="/" >
                  The best ways to enjoy the last summer days of this year
               </Link>
            </div>

            <div>
               <img src={marble_table} alt="marble_table" />
               <p>Lifestyle</p>
               <Link to="/">
                  5 hip restaurants in California that I love for a dinner date
               </Link>
            </div>

         </div>

      </div>
   )
}
