import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // 关键：开启服务端渲染，运行时读取D1
  adapter: cloudflare(),
});