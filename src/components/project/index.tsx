import React, { useEffect, useRef, useState } from 'react';

import { throttle } from 'lodash';

import Banner from 'components/common/banner/banner';
import Layout from 'components/common/layout';
import Seo from 'components/common/seo';
import Gatgu from 'components/project/gatgu/gatgu';
import Guam from 'components/project/guam/guam';
import * as styles from 'components/project/index.module.scss';
import Navigator from 'components/project/navigator/navigator';
import Siksha from 'components/project/siksha/siksha';
import Snuboard from 'components/project/snuboard/snuboard';
import Snutt from 'components/project/snutt/snutt';

const projectItems = [
  { label: 'SNUTT', anchor: 'snutt' },
  { label: '식샤', anchor: 'siksha' },
  { label: '스누보드', anchor: 'snuboard' },
  { label: 'GUAM', anchor: 'guam' },
  { label: '같이구매', anchor: 'gatgu' },
];

const Project = (): JSX.Element => {
  const mainRef = useRef<HTMLElement | null>(null);
  const [current, setCurrent] = useState<number>(0);

  const calcCurrent = () => {
    if (typeof mainRef.current?.scrollTop === 'number') {
      setCurrent(Math.round(mainRef.current.scrollTop / window.innerHeight) - 1);
    }
  };

  const handleScroll = throttle(() => {
    calcCurrent();
  }, 50);

  useEffect(() => {
    calcCurrent();
  }, []);

  useEffect(() => {
    mainRef.current?.addEventListener('scroll', handleScroll);
    return () => {
      mainRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [mainRef.current]);

  return (
    <Layout>
      <Seo title="Project" />
      <main ref={mainRef} className={styles.wrapper}>
        <Banner className={styles.banner} />
        <Navigator current={current} items={projectItems} />
        <Snutt />
        <Siksha />
        <Snuboard />
        <Guam />
        <Gatgu />
      </main>
    </Layout>
  );
};

export default Project;
