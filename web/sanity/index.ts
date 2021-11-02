
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = 'sm3hu3jh';
export const dataset = 'production';

const client = sanityClient({
  apiVersion: '2021-08-02',
  projectId: projectId,
  dataset: dataset,
  useCdn: true
});

const builder = imageUrlBuilder(client);

export const getImageUrl = (image: string) => {
  return builder.image(image);
}

/* pulled from https://www.sanity.io/docs/presenting-block-text */
export const getPlainText = (blocks: any[] = []) => {
  return blocks
    // loop through each block
    .map(block => {
      // if it's not a text block with children,
      // return nothing
      if (block._type !== 'block' || !block.children) {
        return '';
      }

      // loop through the children spans, and join the
      // text strings
      return block.children.map(child => child.text).join('');
    })
    // join the parapgraphs leaving split by linebreak
    .join('\n');
}

export const splitBlock = (blocks: any[] = []) => {
  const other = [];
  const texts = blocks.reduce((prev, next) => {
    if(next._type !== 'block' || !next.children) {
      other.push(next);
      return prev;
    }

    return prev.concat(next);
  }, []);

  return [texts, other];
}

export default client;