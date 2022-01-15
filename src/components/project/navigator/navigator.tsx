import React from 'react';

import { AnchorLink } from 'gatsby-plugin-anchor-links';

import * as styles from 'components/project/navigator/navigator.module.scss';

const Navigator = (): JSX.Element => {
  return (
    <nav className={styles.wrapper}>
      <ol>
        <li>
          <AnchorLink to={'#snutt'} title={'snutt'} />
        </li>
        <li>
          <AnchorLink to={'#siksha'} title={'siksha'} />
        </li>
        <li>
          <AnchorLink to={'#snuboard'} title={'snuboard'} />
        </li>
        <li>
          <AnchorLink to={'#guam'} title={'guam'} />
        </li>
        <li>
          <AnchorLink to={'#gatgu'} title={'gatgu'} />
        </li>
      </ol>
    </nav>
  );
};

export default Navigator;
