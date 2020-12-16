import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import PhotosPage from "./components/Photos";
import Blog from "./components/Blog";
import ContactPage from "./components/Contact";
import AdminPage from "./components/AdminPage";
import NotFound from "./components/NotFound";

//TODO:
/*
20px border mobile screen

[]  Blog  //! 5.
      []  html
      []  css
      []  responsive    

  []  Contact
      [x]  html
      [x]  css
      [x]  responsive
      []   contact form functions //! 4.
 
  []  Admin Page (create blog posts)  //! 2.
      []  html
      []  css
      []  responsive
      []  //? create blog functions

  []  Blog Post Page  //! 3.
      []  html
      []  css
      []  responsive

  []  burger menu

  []  server/api  //! 1.  https://www.youtube.com/watch?v=vjf774RKrLc
      []  database
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
               <Route path="/admin" component={AdminPage} />
               <Route path="/*" component={NotFound} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
