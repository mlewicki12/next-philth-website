
import groq from 'groq';
import Image from 'next/image';
import client, { getImageUrl, splitBlock } from 'sanity';
import BlockContent from '@sanity/block-content-to-react';

import styles from './style.module.scss';

const ArticlePage = (props: any) => {
  const imageUrl = getImageUrl(props.mainImage).url() ?? '';
  const [texts, images] = splitBlock(props.body);

  return (
    <div className={styles.articlePage}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>{props.title}</h1>
          <p><span style={{fontStyle: 'italic'}}>by {props.name}</span></p>
        </div>

          <BlockContent
            blocks={texts}
            projectId={client.clientConfig.projectId}
            dataset={client.clientConfig.dataset}
          />
      </div>

      <div className={styles.images}>
        {imageUrl !== '' &&
          <Image src={imageUrl} alt={props.title} width={900} height={900} objectFit='contain' objectPosition='center top' />}

        <BlockContent
          blocks={images}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
    </div>
  );
}

const query = groq`*[_type == 'post' && slug.current == $slug][0] {
  title,
  mainImage{
    asset->{
      _id,
      url
    }
  },
  body,
  'name': author->name
}`;

ArticlePage.getInitialProps = async function(context: any) {
  const { slug = '' } = context.query;
  const result = await client.fetch(query, { slug });

  return result;
}

export default ArticlePage;