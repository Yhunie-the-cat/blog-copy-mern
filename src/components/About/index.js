import React, { useRef } from "react";
import Wrapper from "./../Wrapper";
import AboutSection1 from "./js/AboutSection1";
import AboutSection2 from "./js/AboutSection2";
import AboutSection3 from "./js/AboutSection3";
import AboutSection4 from "./js/AboutSection4";

export default function AboutPage() {
   const targetRef = useRef();

   const handleClick = () => {
      targetRef.current.scrollIntoView();
   };

   return (
      <React.Fragment>
         <Wrapper>
            <AboutSection1 handleClick={handleClick} />
            <AboutSection2 targetRef={targetRef} />
            <AboutSection3 />
            <AboutSection4 />
         </Wrapper>
      </React.Fragment>
   );
}
