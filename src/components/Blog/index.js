import React from "react";
import Header from "../Header";
import Blog from "./BlogMid";
import Footer from "../Footer";

export default function BlogPage() {
   return (
      <React.Fragment>
         <Header />
         <Blog />
         <Footer />
      </React.Fragment>
   );
}
