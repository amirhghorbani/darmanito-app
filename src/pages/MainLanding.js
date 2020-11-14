import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import MainPageComps from "../components/MainPageComps/MainPageComps";
import PharMemShipPage from '../pages/PharMemShipPage';

import {Switch, Route} from 'react-router-dom'
import FaqPage from "./FaqPage";




function MainLanding() {

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <MainLayout>
        <Switch>
          <Route exact path='/darmanito-app' component={MainPageComps} />
          <Route path='/register_pharmacy' component={PharMemShipPage} />
          <Route path='/faq_page' component={FaqPage} />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default MainLanding;
