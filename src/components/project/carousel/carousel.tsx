import React, { useState } from 'react';

import * as styles from 'components/project/carousel/carousel.module.scss';
import Arrow from 'images/arrow.svg';

interface Props {
  imageList: string[];
}

const Carousel = ({ imageList }: Props): JSX.Element => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className={styles.wrapper}>
      <img className={styles.mainImage} src={imageList[index]} alt={'snutt image'} />
      <div className={styles.imageSelector}>
        <Arrow className={styles.arrow} onClick={() => setIndex((index - 1 + imageList.length) % imageList.length)} />
        {imageList.map((item, i) => (
          <img className={styles.imageItem} src={item} key={i} alt={'snutt image'} onClick={() => setIndex(i)} />
        ))}
        <Arrow className={styles.arrow} onClick={() => setIndex((index + 1) % imageList.length)} />
      </div>
    </div>
  );
};

export default Carousel;
