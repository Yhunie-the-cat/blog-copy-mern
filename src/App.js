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

[]  Blog  //! 1.
      []  html
      []  css
      []  responsive    

  []  Blog Post Page  //! 2.
      []  html
      []  css
      []  responsive

  []  burger menu
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
