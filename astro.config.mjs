import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import UnoCSS from '@unocss/astro';
import icon from 'astro-icon';
import solidJs from '@astrojs/solid-js';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	site: 'https://judicaelto.com/',
	integrations: [
		sitemap(),
		robotsTxt({
			sitemap: [
				'https://judicaelto.com/sitemap-index.xml',
				'https://judicaelto.com/sitemap-0.xml',
			],
		}),
		solidJs(),
		UnoCSS({
			injectReset: true,
		}),
		icon()
	],
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	output: 'server',
	adapter: vercel({
		imageService: true,
		devImageService: 'sharp',
		maxDuration: 10,
		includeFiles: ['./src/lib/i18n/translations.ts'],
		excludeFiles: ['./src/components/IntroCard.astro'],
	}),
});
