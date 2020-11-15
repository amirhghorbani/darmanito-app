import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import MainPageComps from "../components/MainPageComps/MainPageComps";
import PharMemShipPage from '../pages/PharMemShipPage';

import {Switch, Route} from 'react-router-dom'
import FaqPage from "./FaqPage";
import TermsPage from "./TermsPage";
import About from "./About";
import Contact from "./Contact";




function MainLanding() {

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <MainLayout>
        <Switch>
          <Route exact path='/darmanito-app' component={MainPageComps} />
          <Route path='/register_pharmacy' component={PharMemShipPage} />
          <Route path='/faq_page' component={FaqPage} />
          <Route path='/terms_page' component={TermsPage} />
          <Route path='/about_page' component={About} />
          <Route path='/contact_page' component={Contact} />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default MainLanding;
