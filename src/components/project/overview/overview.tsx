import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import * as styles from 'components/project/overview/overview.module.scss';

interface Props {
  logo: JSX.Element;
  name: string;
  description: string;

  links: {
    android: string;
    iOS: string;
    web: string;
  };
}

const Overview = ({ links: { android, web, iOS }, logo, name, description }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {logo}
      <div className={styles.content}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <nav className={styles.links}>
        <a className={styles.linkItem} href={iOS}>
          <StaticImage src={'../../../images/app-store.png'} alt={'app store link'} />
        </a>
        <a className={styles.linkItem} href={android}>
          <StaticImage src={'../../../images/play-store.png'} alt={'app store link'} />
        </a>
        <a className={styles.linkItem} href={web}>
          <StaticImage src={'../../../images/web.png'} alt={'app store link'} />
        </a>
      </nav>
    </div>
  );
};

export default Overview;
