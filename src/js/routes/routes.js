//
//
import React, { Component } from "react";
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();

import Home from '../views/home';
import Projects from '../views/projects';
import Blog from '../views/blog';
import BlogPost from '../views/blog-post';

const Routes = (props) => (
  <Router history={ history }>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/insights" component={Blog} />
      <Route exact path="/insights/:slug" component={BlogPost} />
    </Switch>
  </Router>
);

export default Routes;