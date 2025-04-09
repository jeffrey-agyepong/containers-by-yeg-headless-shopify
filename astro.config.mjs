import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify"; 
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: "server",
  adapter: netlify(),

  integrations: [svelte()],

  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env': process.env
    }
  },
});
