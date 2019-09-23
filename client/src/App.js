import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './navbar.js';
import Step1 from './createUserProfile.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateProjectForm from './createProjectForm';
import { Card, CardList, CardStack } from './cardGrid';


function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <div className= "m-3">
          <Route exact path="/" component={CardStack} />
          <Route path="/user/" component={CardList} />
          <Route path="/login/" />
          <Route path="/create-project/" component={CreateProjectForm}/>
          <Route path="/projects/" />
        </div>
      </div>
    </Router>
  );
}

export default App;
