
import groq from 'groq';
import client, { getImageUrl } from 'sanity';
import BlockContent from '@sanity/block-content-to-react';

import styles from './style.module.scss';

const ArticlePage = (props: any) => {
  const imageUrl = getImageUrl(props.mainImage).url() ?? '';
  debugger;
  return (
    <div className={styles.articlePage}>
      <div className={styles.info}>
        <h1>{props.title}</h1>
        <p><span style={{fontStyle: 'italic'}}>by {props.name}</span></p>
      </div>
      <div className={styles.content}>
        <BlockContent
          blocks={props.body}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
      {imageUrl !== '' &&
        <img src={imageUrl} alt={props.title} />}
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