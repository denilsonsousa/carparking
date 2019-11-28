import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ParksList from './components/park-list.component';
import EditParks from './components/edit-park.component';
import CreateParks from './components/create-park.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component = {ParksList} />
      <Route path="/edit/:id" exact component = {EditParks} />
      <Route path="/create" exact component = {CreateParks} />
    </Router>
  );
}

export default App;
