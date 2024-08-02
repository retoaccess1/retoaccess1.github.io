import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import fs from "fs";
import rehypeExternalLinks from "rehype-external-links";
import remarkUnwrapImages from "remark-unwrap-images";

import { expressiveCodeOptions } from "./src/site.config";

// https://astro.build/config
export default defineConfig({
	image: {
		domains: ["webmention.io"],
	},
	integrations: [
		expressiveCode(expressiveCodeOptions),
		icon(),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		mdx(),
	],
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					rel: ["nofollow, noopener, noreferrer"],
					target: "_blank",
				},
			],
		],
		remarkPlugins: [remarkUnwrapImages],
		remarkRehype: {
			footnoteLabelProperties: {
				className: [""],
			},
		},
	},
	// https://docs.astro.build/en/guides/prefetch/
	output: "static",
	prefetch: true,
	site: "https://bacqueyrisses.github.io",
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
		plugins: [rawFonts([".ttf", ".woff"])],
	},
});

function rawFonts(ext: string[]) {
	return {
		name: "vite-plugin-raw-fonts",
		// @ts-expect-error:next-line
		transform(_, id) {
			// eslint-disable-next-line
			if (ext.some((e) => id.endsWith(e))) {
				// eslint-disable-next-line
				const buffer = fs.readFileSync(id);
				return {
					code: `export default ${JSON.stringify(buffer)}`,
					map: null,
				};
			}
		},
	};
}
