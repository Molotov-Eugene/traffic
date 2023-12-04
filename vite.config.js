import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), '');

  return (
    {
      plugins: [react()],
      define: {
        VITE_KV_REST_API_URL: JSON.stringify(env.KV_REST_API_URL),
        VITE_KV_REST_API_TOKEN: JSON.stringify(env.KV_REST_API_TOKEN),

        // KV_REST_API_URL: JSON.stringify(env.KV_REST_API_URL),
        // KV_REST_API_TOKEN: JSON.stringify(env.KV_REST_API_TOKEN),
        'process.env': {},
      }
    }
  )
});

