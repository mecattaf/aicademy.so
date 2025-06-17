import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://aicademy.so',  // ← Change this
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
      title: 'AIcademy',  // ← Change this
      tagline: 'Documenting my journey with Agentic Coding',  // ← Add tagline
      customCss: [
        './src/styles/typography-reset.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        // We'll update this strucrture later
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' }
        },
      ],
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/mecatttaf/aicademy.so' },  // ← Update
      ],
      pagefind: true,
      footer: {
        // Update footer links as needed
      },
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
