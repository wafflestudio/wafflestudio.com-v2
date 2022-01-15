import React from 'react';

import Layout from 'components/common/layout';
import Seo from 'components/common/seo';
import Gatgu from 'components/project/gatgu/gatgu';
import Guam from 'components/project/guam/guam';
import Siksha from 'components/project/siksha/siksha';
import Snuboard from 'components/project/snuboard/snuboard';
import Snutt from 'components/project/snutt/snutt';

const ProjectPage = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Project" />
      <div style={{ height: '100vh', scrollSnapType: 'y mandatory', overflowY: 'scroll' }}>
        <Snutt />
        <Siksha />
        <Snuboard />
        <Guam />
        <Gatgu />
      </div>
    </Layout>
  );
};

export default ProjectPage;
