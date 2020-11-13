import React, {Fragment} from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import Support from '../Common/Support/Support';

function MainLayout(props) {
    return (
        <Fragment>
            <Header />
            {props.children}
            <Support />
            <Footer />
        </Fragment>
        
    )
}

export default MainLayout
