import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./components/Home/index"
import AboutPage from "./components/About/index"
import PhotosPage from "./components/Photos/index"
import Blog from "./components/Blog"
import Contact from "./components/Contact/index"
import FooterSection from "./components/FooterSection"


//TODO:
/*
20px border mobile screen
  [x]  About
      [x]  responsive

  []  Photos
      [x]  html
      [x]  css
      [x]  responsive
      []  //?image slide functions

  []  Blog
      []  html
      []  css
      []  responsive    

  []  Contact
      []  html
      []  css
      []  responsive
      []  //? contact form functions

  []  Admin page (create blog post)
      []  html
      []  css
      []  responsive
      []  //? create blog functions

  []  Blog Post Page
      []  html
      []  css
      []  responsive

  []  404 page

  []  burger menu

  []  server/api
*/

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/photos" component={PhotosPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
