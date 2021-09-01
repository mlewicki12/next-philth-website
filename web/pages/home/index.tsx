
import groq from 'groq';
import Link from 'next/link';
import client, { getImageUrl } from 'sanity';
import Moment from 'react-moment';
import BlockContent from '@sanity/block-content-to-react';

import AwesomeSlider from 'react-awesome-slider';

// copied from package bc next doesn't allow importing css modules from node_modules
import AwsSliderStyles from './awesome-slider.module.scss';

import Highlights from 'components/highlights';
import styles from './style.module.scss';
import moment from 'moment';

const Home = (props: any) => {
  const { post, images, settings } = props;

  const getImageList = () => {
    return images.map(item => getImageUrl(item.image).url());
  };

  return (
    <div className={styles.homePage}>
      <AwesomeSlider cssModule={AwsSliderStyles} style={{marginBottom: '2rem'}}>
        {getImageList().map(item => ( 
          <div data-src={item} />
        ))}
      </AwesomeSlider>
      <div className={styles.articleWrapper}>
        <div className={styles.article}>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.date}><Moment date={post.publishedAt} format='M/D/YYYY' /></p>
          <p className={styles.content}>
            <BlockContent
              blocks={post.blurb}
              projectId={client.clientConfig.projectId}
              dataset={client.clientConfig.dataset}
            />
          </p>
        </div>
        <Link href={`/articles/${post.slug.current}`}><a className={styles.link}>Read more</a></Link>
        <iframe style={{marginTop: 'auto'}}
          src={`https://open.spotify.com/embed/playlist/${settings.playlist}?theme=0`} title='playlist' width='100%' height='380' frameBorder='0' allow='encrypted-media'></iframe>
      </div>
    </div>
  );
}

const query = groq`
{
  'post': *[_type == 'post'] | order(publishedAt desc) [0] {
    title,
    slug,
    publishedAt,
    blurb
  },
  'images': *[_type == 'highlightImage' && active == true] {
    image,
    title,
    date
  },
  'siteSettings': *[_type == 'siteSettings'][0]
}`;

export async function getStaticProps() {
  const result = await client.fetch(query);

  return {
    props: {
      post: result.post,
      images: result.images,
      settings: result.siteSettings
    }
  };
}

export default Home;