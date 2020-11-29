import React from 'react'
import { Link } from "react-router-dom"
import './../styles/navbar.scss';
import './../styles/links.scss';


export default function Navbar() {

   return (
      <React.Fragment>
         <nav>
            <ul>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/photos">Photos</Link>
               <Link to="/shop">Shop</Link>
               <Link to="/information">Information</Link>
               <Link to="/blog">Blog</Link>
               <Link to="/contact">Contact</Link>
            </ul>
         </nav>
      </React.Fragment>
   )
}