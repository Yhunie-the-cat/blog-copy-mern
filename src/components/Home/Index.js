import React from "react";
import TopSection from "./TopSection";
import MidSectionA from "./MidSectionA";
import MidSectionB from "./MidSectionB";
import Footer from "../Footer";
import Header from "../Header";

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <TopSection />
      <MidSectionA />
      <MidSectionB />
      <Footer />
    </React.Fragment>
  );
}
