import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dropdown, DropdownOption } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the dropdown',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the dropdown has an error state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the dropdown should take full width',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '280px', minHeight: '300px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const basicOptions: DropdownOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

const countryOptions: DropdownOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

// Basic dropdown
export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select an option',
  },
};

// With label
export const WithLabel: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
    label: 'Country',
  },
};

// With preselected value
export const WithValue: Story = {
  args: {
    options: countryOptions,
    value: 'us',
    label: 'Country',
  },
};

// Sizes
export const Small: Story = {
  args: {
    options: basicOptions,
    size: 'sm',
    placeholder: 'Small dropdown',
  },
};

export const Medium: Story = {
  args: {
    options: basicOptions,
    size: 'md',
    placeholder: 'Medium dropdown',
  },
};

export const Large: Story = {
  args: {
    options: basicOptions,
    size: 'lg',
    placeholder: 'Large dropdown',
  },
};

// States
export const Disabled: Story = {
  args: {
    options: basicOptions,
    disabled: true,
    placeholder: 'Disabled dropdown',
  },
};

export const WithError: Story = {
  args: {
    options: basicOptions,
    error: true,
    errorMessage: 'Please select an option',
    label: 'Required Field',
  },
};

// With disabled options
const optionsWithDisabled: DropdownOption[] = [
  { value: 'option1', label: 'Available Option 1' },
  { value: 'option2', label: 'Disabled Option', disabled: true },
  { value: 'option3', label: 'Available Option 2' },
  { value: 'option4', label: 'Another Disabled', disabled: true },
  { value: 'option5', label: 'Available Option 3' },
];

export const WithDisabledOptions: Story = {
  args: {
    options: optionsWithDisabled,
    placeholder: 'Select an option',
    label: 'Mixed Options',
  },
};

// Full width
export const FullWidth: Story = {
  args: {
    options: basicOptions,
    fullWidth: true,
    placeholder: 'Full width dropdown',
    label: 'Full Width',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

// Interactive example with state
const ControlledDropdown = () => {
  const [value, setValue] = useState<string>('');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Dropdown
        options={countryOptions}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        label="Select your country"
        placeholder="Choose a country"
      />
      <p style={{ fontSize: '14px', color: '#666' }}>
        Selected value: {value || 'None'}
      </p>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledDropdown />,
};

// With icons
const StatusIcon = ({ color }: { color: string }) => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="4" fill={color} />
  </svg>
);

const statusOptions: DropdownOption[] = [
  { value: 'active', label: 'Active', icon: <StatusIcon color="#22c55e" /> },
  { value: 'pending', label: 'Pending', icon: <StatusIcon color="#f59e0b" /> },
  { value: 'inactive', label: 'Inactive', icon: <StatusIcon color="#ef4444" /> },
  { value: 'archived', label: 'Archived', icon: <StatusIcon color="#6b7280" /> },
];

export const WithIcons: Story = {
  args: {
    options: statusOptions,
    placeholder: 'Select status',
    label: 'Status',
  },
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Dropdown
        options={basicOptions}
        size="sm"
        placeholder="Small"
        label="Small Size"
      />
      <Dropdown
        options={basicOptions}
        size="md"
        placeholder="Medium"
        label="Medium Size"
      />
      <Dropdown
        options={basicOptions}
        size="lg"
        placeholder="Large"
        label="Large Size"
      />
    </div>
  ),
};

// Long list
const manyOptions: DropdownOption[] = Array.from({ length: 20 }, (_, i) => ({
  value: `option${i + 1}`,
  label: `Option ${i + 1}`,
}));

export const LongList: Story = {
  args: {
    options: manyOptions,
    placeholder: 'Select from many options',
    label: 'Scrollable List',
  },
};
