import Wrapper from "../Wrapper";
import HomeSection1 from "./js/HomeSection1";
import HomeSection2 from "./js/HomeSection2";
import HomeSection3 from "./js/HomeSection3";

export default function HomePage() {
   return (
      <>
         <Wrapper>
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
         </Wrapper>
      </>
   );
}
