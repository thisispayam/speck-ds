import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary button - default
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

// Outline button
export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

// Ghost button
export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

// Destructive button
export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

// States
export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

// Full Width
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// With Icons
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WithLeftIcon: Story = {
  args: {
    children: 'Add Item',
    leftIcon: <PlusIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Continue',
    rightIcon: <ArrowIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Next Step',
    leftIcon: <PlusIcon />,
    rightIcon: <ArrowIcon />,
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* All Button Variants */}
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#656565' }}>Button Variants</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      {/* All Sizes */}
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#656565' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#656565' }}>States</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading</Button>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#656565' }}>With Icons</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" leftIcon={<PlusIcon />}>Add Item</Button>
          <Button variant="primary" rightIcon={<ArrowIcon />}>Continue</Button>
          <Button variant="outline" leftIcon={<PlusIcon />}>Add</Button>
          <Button variant="ghost" leftIcon={<PlusIcon />}>Add</Button>
        </div>
      </div>

      {/* All Variants in All Sizes */}
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#656565' }}>All Variants × Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="primary" size="sm">Primary SM</Button>
            <Button variant="primary" size="md">Primary MD</Button>
            <Button variant="primary" size="lg">Primary LG</Button>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="secondary" size="sm">Secondary SM</Button>
            <Button variant="secondary" size="md">Secondary MD</Button>
            <Button variant="secondary" size="lg">Secondary LG</Button>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="outline" size="sm">Outline SM</Button>
            <Button variant="outline" size="md">Outline MD</Button>
            <Button variant="outline" size="lg">Outline LG</Button>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="ghost" size="sm">Ghost SM</Button>
            <Button variant="ghost" size="md">Ghost MD</Button>
            <Button variant="ghost" size="lg">Ghost LG</Button>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="destructive" size="sm">Delete SM</Button>
            <Button variant="destructive" size="md">Delete MD</Button>
            <Button variant="destructive" size="lg">Delete LG</Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Color Showcase - Purple Theme
export const ColorShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      {/* Purple Color Palette Preview */}
      <div>
        <h2 style={{ margin: '0 0 16px 0', fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 600 }}>Speck DS Color Palette</h2>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-purple-100)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#1F035B' }}>100</span>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-purple-200)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#fff' }}>200</span>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-purple-300)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#1F035B' }}>300</span>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-purple-400)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#fff' }}>400</span>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-purple-500)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#fff' }}>500</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-grey-100)', borderRadius: '8px', border: '1px solid #E5E5E5', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#656565' }}>100</span>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-grey-200)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#656565' }}>200</span>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-grey-300)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#656565' }}>300</span>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-grey-400)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#fff' }}>400</span>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-grey-500)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#fff' }}>500</span>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-grey-600)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#fff' }}>600</span>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'var(--color-grey-700)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', padding: '4px' }}>
            <span style={{ fontSize: '10px', color: '#fff' }}>700</span>
          </div>
        </div>
      </div>

      {/* Buttons on different backgrounds */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500 }}>Buttons on Light Background</h3>
        <div style={{ padding: '24px', background: '#ffffff', borderRadius: '12px', border: '1px solid #E5E5E5' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500 }}>Buttons on Grey Background</h3>
        <div style={{ padding: '24px', background: 'var(--color-grey-200)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 500, color: '#fff' }}>Buttons on Dark Background</h3>
        <div style={{ padding: '24px', background: 'var(--color-grey-700)', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
};
