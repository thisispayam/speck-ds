import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      return React.createElement(
        'div',
        {
          'data-theme': theme,
          style: {
            minHeight: '100vh',
            background: 'var(--color-background-primary)',
            color: 'var(--color-foreground-primary)',
            padding: '16px',
          },
        },
        React.createElement(Story)
      );
    },
  ],
  tags: ['autodocs'],
};

export default preview;
