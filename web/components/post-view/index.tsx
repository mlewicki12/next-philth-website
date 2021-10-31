
import Image from 'next/image';
import Head from 'next/head';
import client, { getImageUrl, splitBlock } from 'sanity';
import BlockContent from '@sanity/block-content-to-react';

import styles from './style.module.scss';

// specifically for mobile use
const serializers = {
  types: {
    // eslint-disable-next-line react/display-name
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
  console.log(post.video);

  return (
    <>
    <Head>
      <title>{post.title}</title>

      <meta name='twitter:card' content='summary' key='twcard' />
      <meta name='twitter:creator' content='philthzine' key='twhandle' />

      <meta property='og:image' content={imageUrl} key='ogimage' />
      <meta property='og:title' content={post.title} key='ogtitle' />
      <meta property='og:site_name' content='Philth Zine' key='ogsitename' />
      <meta property='og:description' content={post.blurb} key='ogdesc' />
      <meta property='og:bert' content='https://ogbertthenerd.bandcamp.com/' key='ogbert' />
    </Head>

    <div className={styles.articlePage}>
      <div className={styles.mobileContent}>
        <h1>{post.title}</h1>
        <p><span style={{fontStyle: 'italic'}}>by {post.name}</span></p>

        <div className={styles.image}>
          {post.video
          ? <iframe width='560' height='315' src={post.video} title={post.title} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          : imageUrl !== '' && <Image src={imageUrl} alt={post.title} width={900} height={900} layout='intrinsic' priority />}
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

        <div className={styles.image}>
          {post.video
          ? <iframe width="900" height="506" src={post.video} title={post.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          : imageUrl !== '' && <Image src={imageUrl} alt={post.title} width={900} height={900} layout='intrinsic' priority />}
        </div>

        <BlockContent
          blocks={post.body}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
    </div>
    </>
  );
}

export default PostView;