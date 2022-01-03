import React, { useState } from 'react';

import classNames from 'classnames';

import * as styles from 'components/index/members/members.module.scss';

enum Member {
  ROOKIES = 'ROOKIES',
  PROGRAMMERS = 'PROGRAMMERS',
  DESIGNERS = 'DESIGNERS',
  ADMIN = 'ADMIN',
}

const memberItems: { [key in Member]: { label: string; content: React.ReactNode; description: React.ReactNode } } = {
  [Member.ROOKIES]: { label: '루키', content: null, description: '루키 설명' },
  [Member.PROGRAMMERS]: { label: '프로그래머', content: null, description: '프로그래머 설명' },
  [Member.DESIGNERS]: { label: '디자이너', content: null, description: '디자이너 설명' },
  [Member.ADMIN]: { label: '운영팀', content: null, description: '운영팀 설명' },
};

const Members = (): JSX.Element => {
  const [selected, setSelected] = useState<Member>(Member.ROOKIES);

  return (
    <section className={styles.wrapper}>
      <ul className={styles.memberNav}>
        {Object.entries(memberItems).map(([key, { label, content }]) => (
          <li key={key} className={styles.memberItem} onClick={() => setSelected(key as Member)}>
            <span className={styles.memberLabel}>{label}</span>
            <div className={styles.memberBorder} />
            <div className={styles.memberGapBox} />
            {content}
            {key === Member.ADMIN && <div className={classNames(styles.memberGapBox, styles.lastBox)} />}
          </li>
        ))}
      </ul>

      <article className={styles.description}>{memberItems[selected].description}</article>
    </section>
  );
};

export default Members;
