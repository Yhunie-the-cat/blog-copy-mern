import React,{useRef} from 'react'
import PhotosTop from './PhotosTop'

import PhotosBot from './PhotosBot'

export default function PhotosPage() {
     const targetRef = useRef();
     const handleClick = () => {
          targetRef.current.scrollIntoView()
     }
     return (
          <React.Fragment>
               <PhotosTop handleClick={handleClick}/>
               <PhotosBot targetRef={targetRef}/>
          </React.Fragment>
     )
}
