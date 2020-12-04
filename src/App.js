import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./components/Home"
import AboutPage from "./components/About"
import Photos from "./components/Photos"
import Shop from "./components/Shop"
import Information from "./components/Information"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import FooterSection from "./components/FooterSection"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/photos" component={Photos} />
          <Route path="/shop" component={Shop} />
          <Route path="/information" component={Information} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
