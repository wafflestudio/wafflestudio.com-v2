import * as React from 'react';

import Layout from 'components/common/layout';
import Seo from 'components/common/seo';
import Intro from 'components/index/intro/intro';

const IndexPage = (): JSX.Element => (
  <Layout>
    <Seo title="Home" />
    <Intro />
  </Layout>
);

export default IndexPage;
