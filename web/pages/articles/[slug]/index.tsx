
import PostView from 'components/post-view';
import groq from 'groq';
import client from 'sanity';

const ArticlePage = (props: any) => {
  return (
    <PostView
      post={props.post}
    />
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
  video,
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