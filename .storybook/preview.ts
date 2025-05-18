import type { Preview } from '@storybook/react';
import '../lib/style.css';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
        wide: {
          name: 'Wide',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
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
          'Templates',
          ['Homepage', 'Article', 'Landing Page'],
          'Components',
          'Layouts',
          ['Body', 'Main', 'Section', 'Article', 'Column', 'Aside'],
          'Resources',
        ],
      },
    },
  },
};

export default preview;
