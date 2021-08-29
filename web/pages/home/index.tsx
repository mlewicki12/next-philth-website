
import groq from 'groq';
import Link from 'next/link';
import client from 'sanity';
import Moment from 'react-moment';
import BlockContent from '@sanity/block-content-to-react';

import Highlights from 'components/highlights';
import styles from './style.module.scss';

const Home = (props: any) => {
  const { post, images, settings } = props;

  return (
    <div className={styles.homePage}>
      <Highlights images={images} />
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
        <Link href={`/articles/${post.slug.current}`}><a className={styles.link}>Read more</a></Link>
      </div>
      <iframe style={{marginTop: 'auto'}}
        src={`https://open.spotify.com/embed/playlist/${settings.playlist}?theme=0`} title='playlist' width='100%' height='380' frameBorder='0' allow='encrypted-media'></iframe>
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