// EXTERNAL IMPORTS
import { ClientConfig, createClient, } from 'next-sanity';
import { SanityClient as ISanityClient } from '@sanity/client';

// Sanity Config
const config: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true',
};

const SanityClient: ISanityClient = createClient(config);

export default SanityClient;
