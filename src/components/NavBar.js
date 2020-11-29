import React from 'react'
import { Link } from "react-router-dom"
import './../styles/navbar.scss';
import './../styles/links.scss';


export default function Navbar() {

   return (
      <React.Fragment>
         <nav>
            <ul>
               <Link to="/">
                  <li>Home</li>
               </Link>

               <Link to="/about">
                  <li>About</li>
               </Link>

               <Link to="/photos">
                  <li>Photos</li>
               </Link>

               <Link to="/shop">
                  <li>Shop</li>
               </Link>

               <Link to="/information">
                  <li>Information</li>
               </Link>

               <Link to="/blog">
                  <li>Blog</li>
               </Link>

               <Link to="/contact">
                  <li>Contact</li>
               </Link>
            </ul>
         </nav>
      </React.Fragment>
   )
}
