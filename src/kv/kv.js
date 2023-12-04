import { createClient } from '@vercel/kv';

export default async function handler() {
  const kv = createClient({
    url: VITE_KV_REST_API_URL,
    token: VITE_KV_REST_API_TOKEN,
  });

  return kv;
}

