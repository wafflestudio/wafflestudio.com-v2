import * as React from 'react';

import Layout from 'components/common/layout';
import Seo from 'components/common/seo';
import Banner from 'components/index/banner/banner';

const IndexPage = (): JSX.Element => (
  <Layout>
    <Seo title="Home" />
    <Banner />
  </Layout>
);

export default IndexPage;
