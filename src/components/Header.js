import React from 'react'
import { Link } from "react-router-dom"


export default function Header() {

   return (
      <div id="header">
         <nav>
            <ul>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/photos">Photos</Link>
               <Link to="/blog">Blog</Link>
               <Link to="/contact">Contact</Link>
            </ul>
         </nav>
         <h1>Kate</h1>
      </div>
   )
}