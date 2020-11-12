import React from "react";

import Header from "../../containers/Header/Header";
import Sec1 from "../../components/Sec1/Sec1";
import Sec2 from "../../components/Sec2/Sec2";
import Sec3 from "../../components/Sec3/Sec3";
import Sec4 from "../../components/Sec4/Sec4";
import Sec5 from "../../components/Sec5/Sec5";
import Support from "../../components/Common/Support/Support";
import Footer from "../../components/Common/Footer/Footer";

function MainLanding() {

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <Header />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Support />
      <Footer />
    </div>
  );
}

export default MainLanding;
