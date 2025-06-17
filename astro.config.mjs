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
          label: 'Getting Started',
          link: '/',
        },
        // We'll add more sections as content is created
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
        // Apply the black theme with required config
        starlightThemeBlack({
          navLinks: [
            {
              label: 'Docs',
              link: '/',
            }
          ]
        })
      ]
    }),
  ],
  output: 'static',
});
