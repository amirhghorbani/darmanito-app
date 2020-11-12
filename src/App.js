import React , { Component } from 'react';
import MainLanding from './pages/MainLanding'
import RegisterPage from './pages/RegisterPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {

  render() {
    return (
    <Router>
        <div className="App">
         <Switch>
           <Route exact path="/darmanito-app" component={MainLanding} />
           <Route path="/register_pharmacy" component={RegisterPage} />
         </Switch>   
        </div>
    </Router> 
    )
  }
}

export default App
