import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import starlightThemeBlack from 'starlight-theme-black';

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
          label: 'Welcome',
          link: '/',
        },
        {
          label: 'Journey',
          items: [
            { label: 'Overview', link: '/journey/' },
            // Add more items as you create them
          ],
        },
        {
          label: 'Fundamentals',
          items: [
            { label: 'Overview', link: '/fundamentals/' },
          ],
        },
        {
          label: 'Tools',
          items: [
            { label: 'Overview', link: '/tools/' },
          ],
        },
      ],
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/mecattaf/aicademy.so' },
      ],
      pagefind: true,
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
          dir: 'ltr',
        }
      },
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              label: 'Home',
              link: '/',
            },
            {
              label: 'Journey',
              link: '/journey/',
            },
          ],
          footerText: '© 2025 AIcademy by [Thomas Mecattaf](https://mecattaf.dev).'
        })
      ]
    }),
  ],
  output: 'static',
});
