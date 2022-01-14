import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Carousel from 'components/project/carousel/carousel';
import Overview from 'components/project/overview/overview';
import ProjectWrapper from 'components/project/project-wrapper/project-wrapper';
import * as styles from 'components/project/siksha/siksha.module.scss';

const Siksha = (): JSX.Element => {
  return (
    <ProjectWrapper className={styles.wrapper}>
      <StaticImage className={styles.spoon} src={'../../../images/spoon.png'} alt={'spoon'} width={200} />
      <StaticImage className={styles.chopsticks} src={'../../../images/chopsticks.png'} alt={'chopsticks'} width={200} />
      <Overview
        logo={<StaticImage src={'../../../images/siksha.png'} alt={'siksha logo'} width={145} height={145} />}
        name={'식샤'}
        description={
          'SNUTT는 서울대학교 시간표 어플입니다.\nSNUTT는 서울대학교 대표 시간표 어플입니다.\nSNUTT는 서울대학교 시간표 어플입니다.'
        }
        links={{ android: '', iOS: '', web: '' }}
      />
      <Carousel
        imageList={[
          'https://static.smilegatemegaport.com/live/game/2dc9bd7ede8c40a39ec9d436e831a032.png',
          'https://www.meconomynews.com/news/photo/202106/55023_65722_4627.jpg',
          'https://w.namu.la/s/ee4b3696c69829fb8acb96a8a6b666363f599c21fdffd4501a0e5b1187d8676e4ea9fce6dfd7a328ef7f055b4ce3e6feaad9f6c4df9d3b5e8ef7a3482bca63b037b280cf9c83d140910e2457ab9581fa',
        ]}
      />
    </ProjectWrapper>
  );
};

export default Siksha;
