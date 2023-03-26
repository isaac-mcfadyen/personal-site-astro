import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import markdoc from "@astrojs/markdoc";
import windicss from "vite-plugin-windicss";
import mdx from "@astrojs/mdx";
import { FontaineTransform } from "fontaine";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://www.imcf.me",
	integrations: [svelte(), markdoc(), mdx(), sitemap()],
	vite: {
		plugins: [
			windicss(),
			FontaineTransform.vite({
				fallbacks: [
					"BlinkMacSystemFont",
					"Segoe UI",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
				],
			}),
		],
	},
	experimental: {
		assets: true,
	},
	image: {
		service: "astro/assets/services/sharp",
	},
});
