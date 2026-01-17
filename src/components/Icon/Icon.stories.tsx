import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconName } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SVG icon component based on Figma designs. Sizes 12px and 16px from Figma.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['chevron-down', 'chevron-up', 'chevron-left', 'chevron-right'],
      description: 'Icon name',
    },
    size: {
      control: 'select',
      options: [12, 16],
      description: 'Icon size in pixels (from Figma)',
    },
    color: {
      control: 'color',
      description: 'Icon color (inherits from parent by default)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'chevron-down',
    size: 16,
  },
};

export const AllIcons: Story = {
  render: () => {
    const icons: IconName[] = [
      'chevron-down',
      'chevron-up', 
      'chevron-left',
      'chevron-right',
    ];
    
    return (
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        {icons.map((name) => (
          <div 
            key={name} 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '8px',
              padding: '16px',
              background: '#f5f5f5',
              borderRadius: '8px',
              minWidth: '80px',
            }}
          >
            <Icon name={name} size={16} />
            <span style={{ fontSize: '12px', color: '#666' }}>{name}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <Icon name="chevron-down" size={12} />
        <span style={{ fontSize: '12px', color: '#666' }}>12px</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <Icon name="chevron-down" size={16} />
        <span style={{ fontSize: '12px', color: '#666' }}>16px</span>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Icon name="chevron-down" size={16} color="#3E06B6" aria-label="Down in purple" />
      <Icon name="chevron-up" size={16} color="#dc2626" aria-label="Up in red" />
      <Icon name="chevron-left" size={16} color="#16a34a" aria-label="Left in green" />
      <Icon name="chevron-right" size={16} color="#ca8a04" aria-label="Right in yellow" />
    </div>
  ),
};

export const Accessible: Story = {
  args: {
    name: 'chevron-down',
    size: 24,
    'aria-label': 'Expand menu',
  },
};
