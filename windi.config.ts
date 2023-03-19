import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";
import heropatterns from "@windicss/plugin-heropatterns";

export default defineConfig({
	extract: {
		include: ["src/**/*.{astro,svelte}"],
	},
	theme: {
		fontFamily: {
			sans: ["Inter"],
		},
	},
	plugins: [
		typography({
			dark: true,
		}),
		heropatterns({
			patterns: ["heavy-rain"],
		}),
	],
});
