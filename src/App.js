import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import PhotosPage from "./components/Photos";
import BlogPage from "./components/Blog/";
import ContactPage from "./components/Contact";
import AdminPage from "./components/Admin";
import PostPage from "./components/Post";
import PageNotFoundPage from "./components/PageNotFound";

//TODO:
/*
  []  add imgurl to schema
*/

function App() {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route path="/" exact component={HomePage} />
               <Route path="/about" component={AboutPage} />
               <Route path="/photos" component={PhotosPage} />
               <Route path="/blog" component={BlogPage} />
               <Route path="/contact" component={ContactPage} />
               <Route path="/admin" component={AdminPage} />
               <Route path="/post/:title" component={PostPage} />
               <Route path="/*" component={PageNotFoundPage} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
