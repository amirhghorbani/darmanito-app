import React from 'react'
import Form from './Form/Form';
import styles from './MainSection.module.scss';
import Map from './Map/Map';

function MainSection() {
    return (
        <div className={styles.section}>
            <Form />
            <Map />
        </div>
    )
}

export default MainSection
