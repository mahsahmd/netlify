import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import UserPage from "./components/UserPage";

const Routs = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="logo">
            <i className="fab fa-github" aria-hidden="true"></i>
            <h1>Github Search</h1>
          </div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/user/:id">
            <UserPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routs;
