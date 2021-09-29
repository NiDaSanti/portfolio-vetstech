import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/home.js";
import About from "./components/About/about.js";
import Dashboard from "./components/Dashboard/dashboard.js";
import Footer from "./components/Footer/footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item custom">
              <Link className="nav-link custom" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom" to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
