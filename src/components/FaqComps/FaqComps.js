import React, { Fragment } from 'react';
import PageHeader from '../Common/PageHeader/PageHeader';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';

function FaqComps() {
    return (
        <Fragment>
            <PageHeader text='سوالات متداول' />
            <Section1 />
            <Section2 />
        </Fragment>
    )
}

export default FaqComps
