
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'ekdjn1ld',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01'
});
