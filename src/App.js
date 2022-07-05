import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// CustomerFacing
import { Home } from 'pages/home';

import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'App.scss';

function CustomerFacing() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  );
}

function App() {
  return (
    <Router>
      <CustomerFacing />
    </Router>
  );
}

export default App;
