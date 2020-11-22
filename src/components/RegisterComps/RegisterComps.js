import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Form/Form";
import Result from "./Result/Result";


function RegisterComps() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/register_page" component={Form} key={Math.random()} />
          <Route path="/result_page" component={Result} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default RegisterComps;
