import React, { useState } from 'react';
import PlusIcon from "../../../../assets/images/plus-icon.svg";
import MinusIcon from '../../../../assets/images/minus-icon.svg';
import styles from '../Section2.module.scss';

function List() {

    const [showContent, setshowContent] = useState(false);
    const [iconSrc, setstateIconSrc] = useState(PlusIcon);

    const toggleShower = () => {
      setshowContent(!showContent);
      showContent ? setstateIconSrc(PlusIcon) : setstateIconSrc(MinusIcon);
    };
  
    const Div = (
      <div className={styles.text}>
        <p>خیر، ما هم اکنون در تهران در حال فعالیت هستیم</p>
      </div>
    );

    return (
        <div className={styles.list}>
        <div className={styles.content}>
          <div className={styles.question}>
            <a onClick={toggleShower}>
              <img src={iconSrc} alt="icon" />
            </a>
            <p>هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
          </div>
          {showContent ? Div : null}
        </div>
      </div>
    )
}

export default List
