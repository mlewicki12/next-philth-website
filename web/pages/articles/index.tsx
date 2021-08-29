
import groq from 'groq';
import client, { getPlainText } from 'sanity';
import { useState } from 'react';

import Article from 'components/article';

const Post = (props: any) => {
  const { posts } = props;
  const [articles, setArticles] = useState<any>(Object.keys(posts).reduce((prev, next) => {
    prev.push(posts[next]);
    return prev;
  }, []))

  return (
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
