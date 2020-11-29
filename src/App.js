import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home/Index"
import About from "./components/About"
import Photos from "./components/Photos"
import Shop from "./components/Shop"
import Information from "./components/Information"
import Blog from "./components/Blog"
import Contact from "./components/Contact"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/photos" component={Photos} />
          <Route path="/shop" component={Shop} />
          <Route path="/information" component={Information} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
