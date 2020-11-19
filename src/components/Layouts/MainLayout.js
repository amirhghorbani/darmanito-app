import React, {Fragment} from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import Support from '../Common/Support/Support';

function MainLayout({children}) {
    return (
        <Fragment>
            <Header />
            {children}
            <Support />
            <Footer />
        </Fragment>
        
    )
}

export default MainLayout
