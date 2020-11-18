import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import MainPageComps from "../components/MainPageComps/MainPageComps";
import PharMemShip from '../pages/PharMemShip';

import {Switch, Route} from 'react-router-dom'
import Faq from "./Faq";
import Terms from "./Terms";
import About from "./About";
import Contact from "./Contact";
import Register from "./Register";




function MainLanding() {

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <MainLayout>
        <Switch>
          <Route exact path='/darmanito-app' component={MainPageComps} />
          <Route path='/register_pharmacy' component={PharMemShip} />
          <Route path='/faq_page' component={Faq} />
          <Route path='/terms_page' component={Terms} />
          <Route path='/about_page' component={About} />
          <Route path='/contact_page' component={Contact} />
          <Route path='/register_page' component={Register} />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default MainLanding;
