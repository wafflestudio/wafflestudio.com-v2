import React from 'react';

import Layout from 'components/common/layout';
import Seo from 'components/common/seo';
import Project from 'components/project';

const ProjectPage = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Project" />
      <Project />
    </Layout>
  );
};

export default ProjectPage;
