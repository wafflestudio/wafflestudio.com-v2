import * as React from 'react';

import Layout from 'components/common/layout';
import Seo from 'components/common/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <Seo title="Home" />
    <h1>소개 페이지</h1>
  </Layout>
);

export default IndexPage;
