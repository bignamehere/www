import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import App from './App/app';
import Blog from './layouts/blog';
import BlogPost from './layouts/blog-post';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/blog" component={App}>
      <IndexRoute component={Blog} />
      <Route path="/p/:page" component={Blog} />
      <Route path="/post/:slug" component={BlogPost} />
    </Route>
  </Router>
);

export default Routes;