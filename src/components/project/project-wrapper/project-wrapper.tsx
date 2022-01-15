import React from 'react';

import classNames from 'classnames';

import * as styles from 'components/project/project-wrapper/project-wrapper.module.scss';

interface Props {
  className?: string;
  id: string;
}

const ProjectWrapper: React.FC<Props> = ({ children, id, className }) => {
  return (
    <section id={id} className={classNames(styles.wrapper, className)}>
      {children}
    </section>
  );
};

export default ProjectWrapper;
