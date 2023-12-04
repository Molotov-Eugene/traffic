import { createClient } from '@vercel/kv';

export default async function handler() {
  const kv = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN,
  });

  return kv;
}

