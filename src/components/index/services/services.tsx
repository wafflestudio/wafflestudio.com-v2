import React, { useState } from 'react';

import classNames from 'classnames';

import * as styles from 'components/index/services/services.module.scss';

enum Service {
  SNUTT = 'SNUTT',
  SIKSHA = 'SIKSHA',
  SNUBOARD = 'SNUBOARD',
  GUAM = 'GUAM',
  GATGU = 'GATGU',
}

enum DeviceType {
  WEB = 'WEB',
  APP = 'APP',
}

interface NavItem {
  icon: React.ReactNode;
  preview: React.ReactNode;
  type: DeviceType;
}

const servicesItems: { [key in Service]: NavItem } = {
  [Service.SNUTT]: { icon: 'ST', type: DeviceType.APP, preview: '프리뷰' },
  [Service.SIKSHA]: { icon: 'ST', type: DeviceType.APP, preview: '프리뷰' },
  [Service.SNUBOARD]: { icon: 'SB', type: DeviceType.APP, preview: '프리뷰' },
  [Service.GUAM]: { icon: 'GM', type: DeviceType.APP, preview: '프리뷰' },
  [Service.GATGU]: { icon: 'GG', type: DeviceType.APP, preview: '프리뷰' },
};

const Services = (): JSX.Element => {
  const [selectedService, setSelectedService] = useState<Service>(Service.SNUTT);

  const renderGlows = (): JSX.Element[] => {
    const { innerWidth = 0, innerHeight = 0 } = typeof window !== 'undefined' ? window : {}; // 가드 안해주면 빌드타임에는 window 객체가 없어서 오류 발생

    return new Array(5).fill(null).map((_, i) => {
      const size = (() => {
        const rand = Math.random();
        if (rand < 0.3) return styles.big;
        else if (rand < 0.7) return styles.medium;
        else return styles.tiny;
      })();

      return (
        <span
          key={i}
          className={classNames(styles.glow, size)}
          style={{ left: Math.random() * innerWidth, top: Math.random() * innerHeight }}
        />
      );
    });
  };

  return (
    <section className={styles.wrapper}>
      {renderGlows()}
      <div className={styles.inner}>
        <article
          className={classNames(styles.preview, servicesItems[selectedService].type === DeviceType.WEB ? styles.web : styles.app)}
        >
          {servicesItems[selectedService].preview}
        </article>
        <ul className={styles.navigator}>
          {Object.entries<NavItem>(servicesItems).map(([key, value]) => (
            <li
              key={key}
              onClick={() => setSelectedService(key as Service)}
              className={classNames(styles.navigateItem, selectedService === (key as Service) && styles.selected)}
            >
              {value.icon}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
