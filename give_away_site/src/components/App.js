import React from 'react';
import './App.scss';
import { Link, Switch, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import HowItWorks from "./HowItWorks";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/howitworks' component={HowItWorks}/>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
