import type { Preview } from '@storybook/react'
import '../lib/style.css'

const preview: Preview = {
  parameters: {
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
          'Resources',
          'Templates',
        ],
      },
    },
  },
}

export default preview
