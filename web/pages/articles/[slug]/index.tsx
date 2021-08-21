
import groq from 'groq';
import Image from 'next/image';
import client, { getImageUrl, splitBlock } from 'sanity';
import BlockContent from '@sanity/block-content-to-react';

import styles from './style.module.scss';

const ArticlePage = (props: any) => {
  const { post } = props;

  const imageUrl = getImageUrl(post.mainImage).url() ?? '';
  const [texts, images] = splitBlock(post.body);

  return (
    <div className={styles.articlePage}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1>{post.title}</h1>
          <p><span style={{fontStyle: 'italic'}}>by {post.name}</span></p>
        </div>

          <BlockContent
            blocks={texts}
            projectId={client.clientConfig.projectId}
            dataset={client.clientConfig.dataset}
          />
      </div>

      <div className={styles.images}>
        {imageUrl !== '' &&
          <Image src={imageUrl} alt={post.title} width={900} height={900} objectFit='contain' objectPosition='center top' />}

        <BlockContent
          blocks={images}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
    </div>
  );
}

const pathQuery = groq`*[_type == 'post'] {
  slug
}`;

export async function getStaticPaths() {
  const slugs = await client.fetch(pathQuery);

  const paths = slugs.map(item => {
    return {
      params: {
        slug: item.slug.current
      }
    }
  });

  return {
    paths,
    fallback: false
  };
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

export async function getStaticProps({ params }) {
  const { slug = '' } = params;
  const result = await client.fetch(query, { slug });

  return {
    props: {
      post: result
    }
  };
}

export default ArticlePage;