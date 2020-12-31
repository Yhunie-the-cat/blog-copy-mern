import React from "react";
import Header from "./js/Header";
import Footer from "./js/Footer";

export default function Wrapper({ children }) {
   return (
      <React.Fragment>
         <Header />
         {children}
         <Footer />
      </React.Fragment>
   );
}
