
import Head from 'next/head';
import groq from 'groq';
import client, { getImageUrl } from 'sanity';
import { useState } from 'react';

import Article from 'components/article';

const Post = (props: any) => {
  const { posts } = props;
  const [reviews,] = useState<any>(Object.keys(posts).reduce((prev, next) => {
    prev.push(posts[next]);
    return prev;
  }, []))

  return (
    <>
    <Head>
      <meta name='twitter:card' content='summary' key='twcard' />
      <meta name='twitter:creator' content='philthzine' key='twhandle' />

      <meta property='og:image' content='/order.jpg' key='ogimage' />
      <meta property='og:title' content='Reviews' key='ogtitle' />
      <meta property='og:site_name' content='Philth Zine' key='ogsitename' />
      <meta property='og:description' content='Documenting the music scene of Philadelphia' key='ogdesc' />
      <meta property='og:bert' content='https://ogbertthenerd.bandcamp.com/' key='ogbert' />
    </Head>
    
    <div>
      {reviews?.map(post => ( 
        <Article
          key={post.slug.current}
          slug={post.slug.current}
          mainImage={post.album.art}
          title={post.title}
          publishedAt={post.publishedAt}
          author={post.author}
          blurb={post.blurb}
          route='reviews'
        />
      ))}
    </div>
    </>
  );
}

const query = groq`*[_type == 'review'] | order(publishedAt desc) {
  title,
  slug,
  publishedAt,
  album,
  'author': author->name
}`;

export async function getStaticProps() {
  const result = await client.fetch(query);

  return {
    props: {
      posts: result
    }
  };
}

export default Post;