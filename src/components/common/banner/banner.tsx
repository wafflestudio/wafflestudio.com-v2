import React from 'react';

import classNames from 'classnames';

import * as styles from 'components/common/banner/banner.module.scss';
import Navigation from 'components/common/navigation/navigation';

interface Props {
  className?: string;
}

const Banner = ({ className }: Props): JSX.Element => {
  return (
    <section className={classNames(styles.wrapper, className)}>
      <div className={styles.main_box}>
        <div className={styles.inner}>
          <ol className={styles.menu_list}>
            <li className={styles.item}>
              <a>와플스튜디오</a>
            </li>
            <li className={classNames(styles.item, styles.active)}>
              <a>인스타그램</a>
            </li>
            <li className={styles.item}>
              <a>신입생 모집</a>
            </li>
            <li className={styles.item}>
              <a>출시</a>
            </li>
          </ol>
          <div className={styles.box} />
        </div>
      </div>
      <Navigation />
    </section>
  );
};

export default Banner;
