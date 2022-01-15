import * as React from 'react';

import Banner from 'components/common/banner/banner';
import Layout from 'components/common/layout';
import Seo from 'components/common/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <Seo title="Home" />
    <Banner />
  </Layout>
);

export default IndexPage;
