import React, {Fragment} from 'react'
import personIcon from '../../../../assets/images/person-icon.svg';
import MapMarkerIcon  from '../../../../assets/images/map-marker.svg';

import styles from './PharmBoxInfo.module.scss'

function PharmBoxInfo({name, address, time}) {
    return (
       <Fragment>
           <div className={styles.pharmBox}>
               <div className={styles.photo}>
                   <img src={personIcon} alt='icon' />
               </div>
               <div className={styles.pharmText}>
                    <h4>{name}</h4>
                    <div className={styles.text}>
                        <img src={MapMarkerIcon} alt='icon' />
                        <p>{address}</p>
                    </div>
               </div>
               <div className={styles.time}>
                   <p>{time}</p>
               </div>
           </div>
       </Fragment>
    )
}

export default PharmBoxInfo
