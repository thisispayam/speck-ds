import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea } from './TextArea';
import '../../styles/tokens.css';
import '../../styles/helpers.css';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text above the textarea',
    },
    helperText: {
      control: 'text',
      description: 'Helper/instruction text below',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message (sets error state)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the textarea',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum characters allowed',
    },
    rows: {
      control: 'number',
      description: 'Number of visible rows',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

// Default (matching Figma)
export const Default: Story = {
  args: {
    label: 'Text area',
    defaultValue: 'Value',
    helperText: 'Instruction text',
    showCount: true,
    maxLength: 100,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

// With Label Only
export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description...',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

// With Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    helperText: 'Write a short bio for your profile',
    rows: 3,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

// With Character Count
export const WithCharacterCount: Story = {
  render: () => {
    const Demo = () => {
      const [value, setValue] = useState('');
      return (
        <div style={{ width: '320px' }}>
          <TextArea
            label="Message"
            placeholder="Type your message..."
            helperText="Keep it concise"
            showCount
            maxLength={100}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      );
    };
    return <Demo />;
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ width: '320px' }}>
      <TextArea size="sm" label="Small" placeholder="Small textarea" rows={2} />
      <TextArea size="md" label="Medium" placeholder="Medium textarea" rows={2} />
      <TextArea size="lg" label="Large" placeholder="Large textarea" rows={2} />
    </div>
  ),
};

// Error State
export const Error: Story = {
  args: {
    label: 'Comment',
    defaultValue: '',
    errorMessage: 'This field is required',
    placeholder: 'Enter your comment...',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

// Disabled
export const Disabled: Story = {
  args: {
    label: 'Notes',
    defaultValue: 'This field is disabled',
    disabled: true,
    helperText: 'You cannot edit this field',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

// Resize Options
export const ResizeOptions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4" style={{ width: '640px' }}>
      <TextArea label="No Resize" placeholder="Cannot resize" resize="none" rows={2} />
      <TextArea label="Vertical" placeholder="Resize vertically" resize="vertical" rows={2} />
      <TextArea label="Horizontal" placeholder="Resize horizontally" resize="horizontal" rows={2} />
      <TextArea label="Both" placeholder="Resize both ways" resize="both" rows={2} />
    </div>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => {
    const FormDemo = () => {
      const [feedback, setFeedback] = useState('');
      const [submitted, setSubmitted] = useState(false);
      
      return (
        <div style={{ width: '400px' }} className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Submit Feedback</h3>
          <TextArea
            label="Your Feedback"
            placeholder="Share your thoughts..."
            helperText="Be specific and constructive"
            showCount
            maxLength={500}
            rows={5}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button 
            className="ds-button ds-button--primary ds-button--md"
            onClick={() => setSubmitted(true)}
            disabled={!feedback.trim()}
          >
            Submit
          </button>
          {submitted && (
            <p className="text-sm" style={{ color: 'green' }}>Thanks for your feedback!</p>
          )}
        </div>
      );
    };
    return <FormDemo />;
  },
};
