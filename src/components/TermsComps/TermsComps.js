import React, { Fragment } from 'react'
import PageHeader from '../Common/PageHeader/PageHeader'
import Sec1 from './Sec1/Sec1'
import Sec2 from './Sec2/Sec2'

function TermsComps() {
    return (
        <Fragment>
            <PageHeader text='قوانین و شرایط' />
            <Sec1 />
            <Sec2 />
        </Fragment>
    )
}

export default TermsComps
