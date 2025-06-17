import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://aicademy.so',
  integrations: [
    expressiveCode({
      themes: ['github-dark'],
      styleOverrides: {
        borderRadius: 'var(--radius-8, 8px)',
        codeFontSize: '0.925em',
      }
    }),
    mdx(),
    starlight({
      title: 'AIcademy',
      tagline: 'Documenting my journey with Agentic Coding',
      customCss: [
        './src/styles/typography-reset.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' }
        },
      ],
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/mecattaf/aicademy.so' },
      ],
      pagefind: true,
      // Remove the footer configuration - it's not a valid Starlight option
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
          dir: 'ltr',
        }
      },
    }),
  ],
  output: 'static',
});
