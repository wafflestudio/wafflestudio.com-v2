import React from 'react';

import classNames from 'classnames';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import * as styles from 'components/project/navigator/navigator.module.scss';

interface Props {
  current: number;

  items: {
    label: string;
    anchor: string;
  }[];
}

const Navigator = ({ current, items }: Props): JSX.Element => {
  return (
    <nav className={classNames(styles.wrapper, current < 0 && styles.hide)}>
      {items.map((item, i) => (
        <AnchorLink key={item.anchor} className={styles.linkItem} to={`#${item.anchor}`}>
          <span className={styles.linkText}>{item.label}</span>
          <span className={classNames(styles.bullet, current === i && styles.selected)}>&nbsp;</span>
        </AnchorLink>
      ))}
    </nav>
  );
};

export default Navigator;
