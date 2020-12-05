import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import PhotosPage from "./components/Photos";
import Blog from "./components/Blog";
import ContactPage from "./components/Contact";
import NotFound from "./components/NotFound";

//TODO:
/*
20px border mobile screen

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
      [x]  html
      [x]  css
      [x]  responsive
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

  []  burger menu

  []  server/api
*/

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/photos" component={PhotosPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
