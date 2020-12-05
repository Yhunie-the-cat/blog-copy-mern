import React, { useRef } from "react";
import AboutTop from "./AboutTop";
import AboutMid1 from "./AboutMid1";
import AboutMid2 from "./AboutMid2";
import AboutBot from "./AboutBot";
import Header from "../Header";
import Footer from "../Footer";

export default function AboutPage() {
  const targetRef = useRef();
  const handleClick = () => {
    targetRef.current.scrollIntoView();
  };

  return (
    <React.Fragment>
      <Header />
      <AboutTop handleClick={handleClick} />
      <AboutMid1 targetRef={targetRef} />
      <AboutMid2 />
      <AboutBot />
      <Footer />
    </React.Fragment>
  );
}
