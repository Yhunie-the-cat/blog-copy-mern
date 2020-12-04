import React, { useRef } from 'react'
import AboutTop from './AboutTop'
import AboutMid1 from './AboutMid1'
import AboutMid2 from './AboutMid2'
import AboutBot from './AboutBot'

export default function AboutPage() {
     const targetRef = useRef();
     const handleClick = () => {
          targetRef.current.scrollIntoView()
     }

     return (
          <React.Fragment>
               <AboutTop handleClick={handleClick} />
               <AboutMid1 targetRef={targetRef} />
               <AboutMid2 />
               <AboutBot />
          </React.Fragment>
     )
}
