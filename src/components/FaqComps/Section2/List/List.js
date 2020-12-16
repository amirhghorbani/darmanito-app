import React, { useState } from 'react';
import PlusIcon from "../../../../assets/images/plus-icon.svg";
import MinusIcon from '../../../../assets/images/minus-icon.svg';
import styles from '../Section2.module.scss';
import { Link } from 'react-router-dom';

function List() {

    const [showContent, setshowContent] = useState(false);
    const [iconSrc, setstateIconSrc] = useState(PlusIcon);

    const toggleShower = () => {
      setshowContent(prevContent => !prevContent);
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
            <Link href='' onClick={toggleShower}>
              <img src={iconSrc} alt="icon" />
            </Link>
            <p>هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟</p>
          </div>
          {showContent ? Div : null}
        </div>
      </div>
    )
}

export default List
