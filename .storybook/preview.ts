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
          'Page Templates',
          ['Homepage', 'Article', 'Landing Page'],
          'Components',
          'Layouts',
          ['Body', 'Main', 'Section', 'Article', 'Column', 'Aside'],
          'Resources',
        ],
      },
    },
  },
}

export default preview
