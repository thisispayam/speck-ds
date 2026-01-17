import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Chip } from './Chip';
import '../../styles/tokens.css';
import '../../styles/helpers.css';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'filled'],
      description: 'The visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the chip',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the chip is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the chip is disabled',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the chip is clickable',
    },
    children: {
      control: 'text',
      description: 'The label text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// Default
export const Default: Story = {
  args: {
    children: 'Label',
    variant: 'outline',
    size: 'md',
  },
};

// Variants
export const Outline: Story = {
  args: {
    children: 'Label',
    variant: 'outline',
  },
};

export const Filled: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  ),
};

// All Variants (matching Figma)
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Chip variant="outline">Label</Chip>
        <Chip variant="filled">Label</Chip>
      </div>
      <div className="flex items-center gap-3">
        <Chip variant="outline" selected>Selected</Chip>
        <Chip variant="filled" selected>Selected</Chip>
      </div>
    </div>
  ),
};

// Clickable
export const Clickable: Story = {
  render: () => {
    const ChipDemo = () => {
      const [selected, setSelected] = useState(false);
      return (
        <div className="flex items-center gap-3">
          <Chip 
            variant="outline" 
            clickable 
            selected={selected}
            onSelect={() => setSelected(!selected)}
          >
            {selected ? 'Selected' : 'Click me'}
          </Chip>
          <Chip variant="filled" clickable>
            Clickable
          </Chip>
        </div>
      );
    };
    return <ChipDemo />;
  },
};

// With Remove Button
export const Removable: Story = {
  render: () => {
    const RemovableDemo = () => {
      const [chips, setChips] = useState(['React', 'TypeScript', 'Storybook']);
      return (
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <Chip 
              key={chip}
              variant="outline"
              onRemove={() => setChips(chips.filter(c => c !== chip))}
            >
              {chip}
            </Chip>
          ))}
          {chips.length === 0 && (
            <span className="text-muted text-sm">All chips removed. Refresh to reset.</span>
          )}
        </div>
      );
    };
    return <RemovableDemo />;
  },
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Chip variant="outline" disabled>Disabled</Chip>
      <Chip variant="filled" disabled>Disabled</Chip>
    </div>
  ),
};

// Filter Example
export const FilterExample: Story = {
  render: () => {
    const FilterDemo = () => {
      const [activeFilters, setActiveFilters] = useState<string[]>(['design']);
      const filters = ['design', 'development', 'marketing', 'sales'];
      
      const toggleFilter = (filter: string) => {
        if (activeFilters.includes(filter)) {
          setActiveFilters(activeFilters.filter(f => f !== filter));
        } else {
          setActiveFilters([...activeFilters, filter]);
        }
      };
      
      return (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted">Click to toggle filters:</p>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Chip 
                key={filter}
                variant={activeFilters.includes(filter) ? 'filled' : 'outline'}
                clickable
                selected={activeFilters.includes(filter)}
                onSelect={() => toggleFilter(filter)}
              >
                {filter}
              </Chip>
            ))}
          </div>
          <p className="text-xs text-muted">
            Active: {activeFilters.length > 0 ? activeFilters.join(', ') : 'none'}
          </p>
        </div>
      );
    };
    return <FilterDemo />;
  },
};
