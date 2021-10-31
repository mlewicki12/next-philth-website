
import groq from 'groq';
import client from 'sanity';
import { useState } from 'react';
import Head from 'next/head';

import Article from 'components/article';

const Post = (props: any) => {
  const { posts } = props;
  const [articles, setArticles] = useState<any>(Object.keys(posts).reduce((prev, next) => {
    prev.push(posts[next]);
    return prev;
  }, []))

  return (
    <>
    <Head>
      <meta name='twitter:card' content='summary' key='twcard' />
      <meta name='twitter:creator' content='philthzine' key='twhandle' />

      <meta property='og:image' content='/logo.png' key='ogimage' />
      <meta property='og:title' content='Articles' key='ogtitle' />
      <meta property='og:site_name' content='Philth Zine' key='ogsitename' />
      <meta property='og:description' content='Documenting the music scene of Philadelphia' key='ogdesc' />
      <meta property='og:bert' content='https://ogbertthenerd.bandcamp.com/' key='ogbert' />
    </Head>

    <div>
      {articles?.map(post => ( 
        <Article
          key={post.slug.current}
          slug={post.slug.current}
          mainImage={post.mainImage}
          title={post.title}
          author={post.author}
          publishedAt={post.publishedAt}
          blurb={post.blurb}
        />
      ))}
    </div>
    </>
  );
}

const query = groq`*[_type == 'post'] | order(publishedAt desc) {
  title,
  slug,
  publishedAt,
  blurb,
  mainImage{
    asset->{
      _id,
      url
    }
  },
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
