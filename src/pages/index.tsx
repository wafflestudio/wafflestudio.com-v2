import * as React from 'react';

import Layout from 'components/common/layout';
import Seo from 'components/common/seo';
import Members from 'components/index/members/members';

const IndexPage = (): JSX.Element => (
  <Layout>
    <Seo title="Home" />
    <h1>소개 페이지</h1>
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Members />
    </div>
  </Layout>
);

export default IndexPage;
