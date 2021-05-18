import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import BlogMedia from "./components/BlogMedia";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BlogMedia}></Route>
      <Route component={NotFound}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
