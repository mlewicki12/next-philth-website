
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