
import groq from 'groq';
import client, { getImageUrl } from 'sanity';
import Image from 'next/image';
import { useState } from 'react';

import styles from './style.module.scss';
import RouterLink from 'components/router-link';
import Moment from 'react-moment';
import Article from 'components/article';

const Post = (props: any) => {
  const { posts } = props;
  const [reviews,] = useState<any>(Object.keys(posts).reduce((prev, next) => {
    prev.push(posts[next]);
    return prev;
  }, []))

  return (
    <div>
      {reviews?.map(post => ( 
        <Article
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