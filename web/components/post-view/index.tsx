
import Image from 'next/image';
import client, { getImageUrl, splitBlock } from 'sanity';
import BlockContent from '@sanity/block-content-to-react';

import styles from './style.module.scss';
import useWindowSize from 'hooks/window-size';
import { useState } from 'react';

// specifically for mobile use
const serializers = {
  types: {
    image: (props) => {
      return <Image layout='intrinsic' width={900} height={900} src={getImageUrl(props.node).url()} />;
    }
  }
}

type PostView = {
  post: any;
};

const PostView = ({
  post
}: PostView) => {
  const imageUrl = getImageUrl(post.mainImage).url() ?? '';
  const [texts, images] = splitBlock(post.body);

  return (
    <div className={styles.articlePage}>
      <div className={styles.mobileContent}>
        <h1>{post.title}</h1>
        <p><span style={{fontStyle: 'italic'}}>by {post.name}</span></p>

        <div className={styles.image}>
          {imageUrl !== '' &&
            <Image src={imageUrl} alt={post.title} width={900} height={900} layout='intrinsic' priority />}
        </div>

        <div className={styles.article}>
          <BlockContent
            blocks={post.body}
            projectId={client.clientConfig.projectId}
            dataset={client.clientConfig.dataset}
            serializers={serializers}
          />
        </div>
      </div>

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
          <Image src={imageUrl} alt={post.title} width={900} height={900} objectFit='contain' objectPosition='center top' priority />}

        <BlockContent
          blocks={images}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
    </div>
  );
}

export default PostView;