
import Moment from 'react-moment';
import RouterLink from 'components/router-link';
import client, { getImageUrl } from 'sanity';
import BlockContent from '@sanity/block-content-to-react';

import Constants from 'variables';
import styles from './style.module.scss';
import Head from 'next/head';

type Article = {
  slug: string;
  mainImage: string;
  title: string;
  publishedAt: any;
  author: string;
  blurb: string;
  index: number;
};

const Article = ({
  slug, mainImage, title, publishedAt, author, blurb, index
}: Article) => {
  return (
    <>
      <Head>
        <title>{Constants.TITLE} - {Constants.ARTICLES}</title>
      </Head>

      <div className={styles.article} key={index}>
        <img
          src={getImageUrl(mainImage).height(200).url()}
          alt={title}
        />
          
        <div>
          <div>
            <RouterLink href={`/articles/${slug}`}>
              <h2>{title}</h2>
              <p className={styles.author}>&nbsp;by {author}</p>
            </RouterLink>

            <div className={styles.blurb}>
              <BlockContent
                blocks={blurb}
                projectId={client.clientConfig.projectId}
                dataset={client.clientConfig.dataset}
              />
            </div>
          </div>


          <p className={styles.date}>posted <Moment date={publishedAt} format='M/D/YYYY' /></p>
        </div>
      </div>
    </>
  );
}

export default Article;