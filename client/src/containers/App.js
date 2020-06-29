import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PointOfSale from './PointOfSale'
import Orders from './Orders'
import Error from '../components/common/Error'
import './App.scss';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={PointOfSale} />
          <Route exact path={`${process.env.PUBLIC_URL}/pos`} component={PointOfSale} />
          <Route exact path={`${process.env.PUBLIC_URL}/orders`} component={Orders} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
