import React, { useRef } from "react";
import PhotosTop from "./PhotosTop";

import PhotosBot from "./PhotosBot";
import Header from "../Header";
import Footer from "../Footer";

export default function PhotosPage() {
  const targetRef = useRef();
  const handleClick = () => {
    targetRef.current.scrollIntoView();
  };
  return (
    <React.Fragment>
      <Header />
      <PhotosTop handleClick={handleClick} />
      <PhotosBot targetRef={targetRef} />
      <Footer />
    </React.Fragment>
  );
}
