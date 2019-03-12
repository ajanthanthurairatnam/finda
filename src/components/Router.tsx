import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

import { Link,BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navigation from "./Navigation";

class Router extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-expand-lg  navbar-light bg-light">

  <a className="navbar-brand" href="#">Navbar</a>


<button className="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
  aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
  <div className="animated-icon1"><span></span><span></span><span></span></div>
</button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent20">
            
            <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>

  </div>


          </nav>

            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>



          </div>
        </BrowserRouter>
      );
    }
  }
  
  export default Router;