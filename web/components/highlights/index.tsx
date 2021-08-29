
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import { getImageUrl } from 'sanity';
import Moment from 'react-moment';
import useInterval from 'hooks/interval';

export type HighlightImage = {
  image: any;
  title: string;
  date: any;
};

export type Highlights = {
  images: HighlightImage[];
}

const Highlights = ({
  images
}: Highlights) => {
  const [current, setCurrent] = useState<number>(0);
  const [image, setImage] = useState<any>(images[current % images.length]);

  useInterval(() => {
    setCurrent(current + 1);
  }, 30000);

  useEffect(() => {
    if(current >= images.length) {
      setCurrent(current % images.length);
    }

    setImage(images[current % images.length]);    
  }, [current]);


  return (
    <div className={styles.container}>
      <div className={styles.highlightsContainer}>
        <Image
          src={getImageUrl(image.image).url()}
          alt={image.title}
          width={1142} height={744} objectFit='contain'
          objectPosition='center top' priority
        />
        <div className={styles.highlightsOverlay}>
          <p>{image.title} (<Moment date={image.date} format='M/D/YYYY' />)</p>
        </div>
        <p className={styles.mobileCaption}>{image.title} (<Moment date={image.date} format='M/D/YYYY' />)</p>
      </div>
    </div>
  )
}

export default Highlights;