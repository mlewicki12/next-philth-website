
import groq from 'groq';
import Moment from 'react-moment';
import Link from 'next/link';
import client, { getImageUrl } from 'sanity';
import { useState } from 'react';

const Post = (props: any) => {
  const [articles, setArticles] = useState<any>(Object.keys(props).reduce((prev, next) => {
    prev.push(props[next]);
    return prev;
  }, []))

  return (
    <div>
      {articles?.map((post, index) => ( 
        <Link href={`/articles/${post.slug.current}`} key={post.slug.current}>
          <span key={index}>
            <img src={post.image} alt='' />
            <span>
              <h2>{post.title}</h2>
              <Moment date={post.publishedAt} format='M/D/YYYY' />
              <p>- {post.author}</p>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

const query = groq`*[_type == 'post'] | order(publishedAt) {
  title,
  slug,
  publishedAt,
  'image': mainImage.asset->url,
  'author': author->name
}`;

Post.getInitialProps = async function(context: any) {
  const result = await client.fetch(query);

  console.log(result);
  return result;
}

export default Post;