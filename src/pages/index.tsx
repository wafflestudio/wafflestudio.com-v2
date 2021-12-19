import * as React from 'react';

import Layout from 'components/layout';
import Seo from 'components/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <Seo title="Home" />
    <h1>소개 페이지</h1>
  </Layout>
);

export default IndexPage;
