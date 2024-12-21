import type { Preview } from '@storybook/react'
import '../lib/styles.css'

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Get Started',
          ['Introduction', 'How to Use', 'Changelog'],
          'Components',
          'Layouts',
          ['Body', 'Main', 'Section', 'Article', 'Column', 'Aside'],
        ],
      },
    },
  },
}

export default preview
