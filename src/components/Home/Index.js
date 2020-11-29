import React from 'react'
import TopSection from "./TopSection"
import MidSectionA from "./MidSectionA"
import MidSectionB from "./MidSectionB"
import FooterSection from "./FooterSection"

export default function HomePage() {
     return (
          <React.Fragment>
               <TopSection />
               <MidSectionA />
               <MidSectionB />
               <FooterSection />
          </React.Fragment>
     )
}
