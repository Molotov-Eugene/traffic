import { createClient } from '@vercel/kv';

export default async function handler() {
  console.log(import.meta.env)
  const kv = createClient({
    url: import.meta.env.VITE_KV_REST_API_URL,
    token: import.meta.env.VITE_KV_REST_API_TOKEN,
    // url: VITE_KV_REST_API_URL,
    // token: VITE_KV_REST_API_TOKEN,
  });

  return kv;
}

