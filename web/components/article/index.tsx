
import { useState } from 'react';
import Moment from 'react-moment';
import Image from 'next/image';
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
  route?: string;
};

const Article = ({
  slug, mainImage, title, publishedAt, author, blurb, route
}: Article) => {
  const [imageUrl,] = useState(getImageUrl(mainImage).height(200).url());

  return (
    <>
      <Head>
        <title>{Constants.TITLE} - {Constants.ARTICLES}</title>
      </Head>

      <div className={styles.article} key={slug}>
        <div className={styles.image}>
          {imageUrl && 
            <RouterLink href={`/${route ?? 'articles'}/${slug}`}>
              <Image src={imageUrl} alt={title} width={200} height={200} objectFit='cover' objectPosition='center center' quality={100} />
            </RouterLink>
          }
        </div>
        <div>
          <div className={styles.text}>
            <RouterLink href={`/${route ?? 'articles'}/${slug}`}>
              <h2>{title}</h2>
              <p className={styles.author}>- {author}</p>
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

      <div className={styles.mobileArticle} key={`mobile-${slug}`}>
        {imageUrl && 
          <RouterLink href={`/${route ?? 'articles'}/${slug}`}>
            <Image src={imageUrl} alt={title} width={200} height={200} objectFit='cover' objectPosition='center center' quality={100} />
          </RouterLink>
        }
        <RouterLink href={`/${route ?? 'articles'}/${slug}`}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.author}>- {author}</p>
        </RouterLink>
      </div>
    </>
  );
}

export default Article;