import './App.css';
import React from "react";
import Nav from "./Navigation";
import ItemDetail from "./ScpItem";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
  return(
    <Router> 
      <div>
        <Nav />
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/:id" exact component={(props)=> <ItemDetail {...props} key={window.location.pathname}/>}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;


