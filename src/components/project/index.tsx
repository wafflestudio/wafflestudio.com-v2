import React from 'react';

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

const Project = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Project" />
      <main className={styles.wrapper}>
        <Banner className={styles.banner} />
        <Navigator />
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
