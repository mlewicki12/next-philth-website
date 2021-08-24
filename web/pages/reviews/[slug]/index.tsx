
import PostView from 'components/post-view';
import groq from 'groq';
import client from 'sanity';

const ReviewPage = (props: any) => {
  console.log(props.post);
  return (
    <PostView
      post={props.post}
    />
  );
}

const pathQuery = groq`*[_type == 'review'] {
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

const query = groq`*[_type == 'review' && slug.current == $slug][0] {
  title,
  publishedAt,
  body,
  'mainImage': album.art,
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

export default ReviewPage;