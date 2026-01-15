import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import '../../styles/tokens.css';
import '../../styles/showcase.css';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Icons
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Individual Stories
export const Primary: Story = {
  args: { children: 'Button', variant: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Button', variant: 'secondary' },
};

export const Outline: Story = {
  args: { children: 'Button', variant: 'outline' },
};

export const Ghost: Story = {
  args: { children: 'Button', variant: 'ghost' },
};

export const Destructive: Story = {
  args: { children: 'Delete', variant: 'destructive' },
};

export const Small: Story = {
  args: { children: 'Small', size: 'sm' },
};

export const Medium: Story = {
  args: { children: 'Medium', size: 'md' },
};

export const Large: Story = {
  args: { children: 'Large', size: 'lg' },
};

export const Loading: Story = {
  args: { children: 'Loading...', loading: true },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};

export const FullWidth: Story = {
  args: { children: 'Full Width Button', fullWidth: true },
  parameters: { layout: 'padded' },
};

export const WithLeftIcon: Story = {
  args: { children: 'Add Item', leftIcon: <PlusIcon /> },
};

export const WithRightIcon: Story = {
  args: { children: 'Continue', rightIcon: <ArrowIcon /> },
};

// All Variants
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div className="showcase">
      <section className="section">
        <h3 className="section-subtitle">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      <section className="section">
        <h3 className="section-subtitle">Sizes</h3>
        <div className="flex gap-3" style={{ alignItems: 'center' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="section">
        <h3 className="section-subtitle">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </section>

      <section className="section">
        <h3 className="section-subtitle">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Button leftIcon={<PlusIcon />}>Add Item</Button>
          <Button rightIcon={<ArrowIcon />}>Continue</Button>
          <Button variant="outline" leftIcon={<PlusIcon />}>Add</Button>
          <Button variant="ghost" leftIcon={<PlusIcon />}>Add</Button>
        </div>
      </section>

      <section className="section">
        <h3 className="section-subtitle">All Variants × Sizes</h3>
        <div className="flex flex-col gap-3">
          {(['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const).map(variant => (
            <div key={variant} className="flex gap-3" style={{ alignItems: 'center' }}>
              <Button variant={variant} size="sm">{variant} SM</Button>
              <Button variant={variant} size="md">{variant} MD</Button>
              <Button variant={variant} size="lg">{variant} LG</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

// Color Showcase
export const ColorShowcase: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="showcase" style={{ padding: '24px' }}>
      <header className="showcase-header">
        <h1 className="showcase-title">Speck DS Color Palette</h1>
        <p className="showcase-description">Button variants on different backgrounds</p>
      </header>

      {/* Color Swatches */}
      <section className="section">
        <h3 className="section-subtitle">Purple</h3>
        <div className="flex gap-2 mb-4">
          {['100', '200', '300', '400', '500'].map(shade => (
            <div key={shade} className="flex flex-col" style={{ alignItems: 'center' }}>
              <div 
                className="swatch-mini" 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: `var(--color-purple-${shade})`,
                  borderRadius: '8px',
                }} 
              />
              <span className="text-sm text-muted">{shade}</span>
            </div>
          ))}
        </div>

        <h3 className="section-subtitle">Grey</h3>
        <div className="flex gap-2 mb-5">
          {['100', '200', '300', '400', '500', '600', '700'].map(shade => (
            <div key={shade} className="flex flex-col" style={{ alignItems: 'center' }}>
              <div 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: `var(--color-grey-${shade})`,
                  borderRadius: '8px',
                  border: shade === '100' ? '1px solid var(--color-grey-300)' : 'none',
                }} 
              />
              <span className="text-sm text-muted">{shade}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons on Light */}
      <section className="section">
        <h3 className="section-subtitle">Buttons on Light Background</h3>
        <div className="card card-light">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </section>

      {/* Buttons on Grey */}
      <section className="section">
        <h3 className="section-subtitle">Buttons on Grey Background</h3>
        <div className="card">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </section>

      {/* Buttons on Dark */}
      <section className="section">
        <h3 className="section-subtitle" style={{ color: 'var(--color-grey-100)' }}>Buttons on Dark Background</h3>
        <div className="card card-dark">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      </section>
    </div>
  ),
};
