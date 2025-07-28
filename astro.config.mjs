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
      tagline: 'AI-assisted development workflows',
      customCss: [
        './src/styles/typography-reset.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introducing the Convergent Method', link: '/getting-started/' },
            { label: 'Template Repository', link: '/getting-started/template-repository' },
            { label: 'Setup Script', link: '/getting-started/setup-script' },
            {
              label: 'GitHub Actions',
              items: [
                { label: 'Overview', link: '/getting-started/github-actions/' },
                { label: 'Conventional Commits', link: '/getting-started/github-actions/conventional-commits' },
                { label: 'Release Please', link: '/getting-started/github-actions/release-please' },
                { label: 'Claude Code Action', link: '/getting-started/github-actions/claude-code-action' },
                { label: 'Additional Actions', link: '/getting-started/github-actions/additional-actions' },
              ]
            }
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Overview', link: '/core-concepts/' },
            { label: 'Claude Issue-Driven Development', link: '/core-concepts/claude-issue-driven-development' },
            { label: 'Git Utility Belt', link: '/core-concepts/git-utility-belt' },
            { label: 'AI Docs Wiki', link: '/core-concepts/ai-docs-wiki' },
            { label: 'Documentation Back & Forth', link: '/core-concepts/documentation-back-forth' },
          ],
        },
        {
          label: 'Advanced',
          items: [
            { label: 'Overview', link: '/advanced/' },
            {
              label: 'Neovim Configuration',
              items: [
                { label: 'Getting Started', link: '/advanced/neovim-configuration/' },
                { label: 'Octo.nvim', link: '/advanced/neovim-configuration/octo-nvim' },
                { label: 'Neogit & Diffview', link: '/advanced/neovim-configuration/neogit-diffview' },
                { label: 'Complete Setup', link: '/advanced/neovim-configuration/complete-setup' },
              ]
            },
            {
              label: 'Uncategorized',
              items: [
                { label: 'Daily Notes', link: '/advanced/uncategorized/' },
                { label: 'Debugging Patterns', link: '/advanced/uncategorized/debugging-patterns' },
                { label: 'Tool Evaluations', link: '/advanced/uncategorized/tool-evaluations' },
              ]
            }
          ],
        },
        {
          label: 'External Resources',
          items: [
            { label: 'Overview', link: '/external-resources/' },
            { label: 'References', link: '/external-resources/references' },
            { label: 'Thought Leaders', link: '/external-resources/thought-leaders' },
            { label: 'Research Pipeline', link: '/external-resources/research-pipeline' },
            { label: 'Inspiration Sources', link: '/external-resources/inspiration-sources' },
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
              label: 'Getting Started',
              link: '/getting-started/',
            },
            {
              label: 'Core Concepts',
              link: '/core-concepts/',
            },
            {
              label: 'Advanced',
              link: '/advanced/',
            },
            {
              label: 'Resources',
              link: '/external-resources/',
            },
          ],
          footerText: '© 2025 AIcademy by [Thomas Mecattaf](https://mecattaf.dev).'
        })
      ]
    }),
  ],
  output: 'static',
});
