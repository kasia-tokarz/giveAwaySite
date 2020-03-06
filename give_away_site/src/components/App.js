import React from 'react';
import './App.scss';
import { Link, Switch, Route, HashRouter } from "react-router-dom";
import Home from "./HomePage/Home/Home";


function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          
        </Switch>
        
      </HashRouter>
    </>
  );
}

export default App;
