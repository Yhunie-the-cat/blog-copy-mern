import React, { useRef } from "react";
import Wrapper from "./../Wrapper";
import PhotosSection1 from "./js/PhotosSection1";
import PhotosSection2 from "./js/PhotosSection2";

export default function PhotosPage() {
   const targetRef = useRef();

   const handleClick = () => {
      targetRef.current.scrollIntoView();
   };

   return (
      <React.Fragment>
         <Wrapper>
            <PhotosSection1 handleClick={handleClick} />
            <PhotosSection2 targetRef={targetRef} />
         </Wrapper>
      </React.Fragment>
   );
}
