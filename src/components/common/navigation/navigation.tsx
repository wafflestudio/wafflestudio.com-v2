import React from 'react';

import * as styles from 'components/common/navigation/navigation.module.scss';

const Navigation = (): JSX.Element => {
  return (
    <nav className={styles.navigation}>
      <ol className={styles.menu_list}>
        <li className={styles.item}>
          <a>메인</a>
        </li>
        <li className={styles.item}>
          <a>프로젝트</a>
        </li>
        <li className={styles.item}>
          <a>리크루팅</a>
        </li>
        <li className={styles.item}>
          <a>멤버</a>
        </li>
        <li className={styles.item}>
          <a>연락처</a>
        </li>
      </ol>
    </nav>
  );
};

export default Navigation;
