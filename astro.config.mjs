import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // 开启 SSR，方便后面对接 Workers API
  adapter: cloudflare(),
});