import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '../../styles/tokens.css';

const meta: Meta = {
  title: 'Foundation/Tokens',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Color Swatch Component
const ColorSwatch = ({ name, variable, value }: { name: string; variable: string; value: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
    <div
      style={{
        width: '64px',
        height: '64px',
        backgroundColor: `var(${variable})`,
        borderRadius: '8px',
        border: '1px solid var(--color-grey-300)',
      }}
    />
    <div>
      <div style={{ fontWeight: 600, fontFamily: 'var(--font-sans)' }}>{name}</div>
      <div style={{ fontSize: '12px', color: 'var(--color-grey-500)', fontFamily: 'monospace' }}>{variable}</div>
      <div style={{ fontSize: '12px', color: 'var(--color-grey-400)', fontFamily: 'monospace' }}>{value}</div>
    </div>
  </div>
);

// Section Header
const SectionHeader = ({ title }: { title: string }) => (
  <h2 style={{ 
    fontFamily: 'var(--font-serif)', 
    fontSize: '24px', 
    marginBottom: '24px',
    marginTop: '48px',
    borderBottom: '2px solid var(--color-purple-500)',
    paddingBottom: '8px',
  }}>
    {title}
  </h2>
);

// Colors Story
export const Colors: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-sans)', maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', marginBottom: '16px' }}>
        Color Palette
      </h1>
      <p style={{ color: 'var(--color-grey-500)', marginBottom: '32px' }}>
        Speck DS color tokens from Figma
      </p>

      <SectionHeader title="Purple" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        <ColorSwatch name="Purple 100" variable="--color-purple-100" value="#ECE6F8" />
        <ColorSwatch name="Purple 200" variable="--color-purple-200" value="#C5B4E9" />
        <ColorSwatch name="Purple 300" variable="--color-purple-300" value="#8B6AD3" />
        <ColorSwatch name="Purple 400" variable="--color-purple-400" value="#3E06B6" />
        <ColorSwatch name="Purple 500" variable="--color-purple-500" value="#1F035B" />
      </div>

      <SectionHeader title="Grey" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        <ColorSwatch name="Grey 100" variable="--color-grey-100" value="#FFFFFF" />
        <ColorSwatch name="Grey 200" variable="--color-grey-200" value="#E5E5E5" />
        <ColorSwatch name="Grey 300" variable="--color-grey-300" value="#C4C4C4" />
        <ColorSwatch name="Grey 400" variable="--color-grey-400" value="#8D8D8D" />
        <ColorSwatch name="Grey 500" variable="--color-grey-500" value="#656565" />
        <ColorSwatch name="Grey 600" variable="--color-grey-600" value="#1A1A1A" />
        <ColorSwatch name="Grey 700" variable="--color-grey-700" value="#000000" />
      </div>

      <SectionHeader title="Primary (Semantic)" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        <ColorSwatch name="Primary 500 (Base)" variable="--color-primary-500" value="#1F035B" />
        <ColorSwatch name="Primary Hover" variable="--color-primary-hover" value="#3E06B6" />
        <ColorSwatch name="Primary Active" variable="--color-primary-active" value="#8B6AD3" />
      </div>
    </div>
  ),
};

// Spacing Story
export const Spacing: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-sans)', maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', marginBottom: '16px' }}>
        Spacing Scale
      </h1>
      <p style={{ color: 'var(--color-grey-500)', marginBottom: '32px' }}>
        Consistent spacing tokens for margins, padding, and gaps
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { name: 'spacing-1', value: '4px' },
          { name: 'spacing-2', value: '8px' },
          { name: 'spacing-3', value: '12px' },
          { name: 'spacing-4', value: '16px' },
          { name: 'spacing-5', value: '24px' },
          { name: 'spacing-6', value: '32px' },
          { name: 'spacing-7', value: '48px' },
          { name: 'spacing-8', value: '64px' },
        ].map(({ name, value }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ width: '120px', fontFamily: 'monospace', fontSize: '14px' }}>
              --{name}
            </div>
            <div style={{ width: '50px', fontSize: '14px', color: 'var(--color-grey-500)' }}>
              {value}
            </div>
            <div
              style={{
                width: `var(--${name})`,
                height: '24px',
                backgroundColor: 'var(--color-purple-400)',
                borderRadius: '4px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

// Border Radius Story
export const BorderRadius: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-sans)', maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', marginBottom: '16px' }}>
        Border Radius
      </h1>
      <p style={{ color: 'var(--color-grey-500)', marginBottom: '32px' }}>
        Corner radius tokens for UI elements
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
        {[
          { name: 'none', value: '0px' },
          { name: 'sm', value: '8px' },
          { name: 'md', value: '16px' },
          { name: 'lg', value: '24px' },
          { name: 'full', value: '999px' },
        ].map(({ name, value }) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--color-purple-500)',
                borderRadius: `var(--radius-${name})`,
                marginBottom: '12px',
              }}
            />
            <div style={{ fontWeight: 600 }}>radius-{name}</div>
            <div style={{ fontSize: '12px', color: 'var(--color-grey-500)', fontFamily: 'monospace' }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Typography Story
export const Typography: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-sans)', maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', marginBottom: '16px' }}>
        Typography
      </h1>
      <p style={{ color: 'var(--color-grey-500)', marginBottom: '32px' }}>
        Font families, sizes, weights, and line heights
      </p>

      <SectionHeader title="Font Families" />
      <div style={{ marginBottom: '32px' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '12px', color: 'var(--color-grey-500)', marginBottom: '4px', fontFamily: 'monospace' }}>
            --font-serif
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px' }}>
            Noe Display Heading
          </div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: 'var(--color-grey-500)', marginBottom: '4px', fontFamily: 'monospace' }}>
            --font-sans
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '24px' }}>
            Avenir Body Text
          </div>
        </div>
      </div>

      <SectionHeader title="Font Sizes" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { name: 'text-xs', value: '10px' },
          { name: 'text-sm', value: '14px' },
          { name: 'text-md', value: '16px' },
          { name: 'text-lg', value: '20px' },
          { name: 'text-xl', value: '24px' },
          { name: 'text-2xl', value: '36px' },
        ].map(({ name, value }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: '24px' }}>
            <div style={{ width: '100px', fontFamily: 'monospace', fontSize: '12px', color: 'var(--color-grey-500)' }}>
              --{name}
            </div>
            <div style={{ width: '50px', fontSize: '12px', color: 'var(--color-grey-400)' }}>
              {value}
            </div>
            <div style={{ fontSize: `var(--${name})`, fontFamily: 'var(--font-sans)' }}>
              The quick brown fox
            </div>
          </div>
        ))}
      </div>

      <SectionHeader title="Font Weights" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '20px' }}>
        <div style={{ fontWeight: 400 }}>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--color-grey-500)', marginRight: '16px' }}>400</span>
          Regular weight text
        </div>
        <div style={{ fontWeight: 500 }}>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--color-grey-500)', marginRight: '16px' }}>500</span>
          Medium weight text
        </div>
        <div style={{ fontWeight: 600 }}>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--color-grey-500)', marginRight: '16px' }}>600</span>
          Semibold weight text
        </div>
        <div style={{ fontWeight: 700 }}>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--color-grey-500)', marginRight: '16px' }}>700</span>
          Bold weight text
        </div>
      </div>

      <SectionHeader title="Line Heights" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        {[
          { name: 'tight', value: '1.15', desc: 'Headings' },
          { name: 'standard', value: '1.35', desc: 'UI text' },
          { name: 'relaxed', value: '1.6', desc: 'Body copy' },
          { name: 'reader', value: '1.75', desc: 'Long-form reading' },
        ].map(({ name, value, desc }) => (
          <div key={name} style={{ padding: '16px', backgroundColor: 'var(--color-grey-200)', borderRadius: '8px' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--color-grey-500)', marginBottom: '4px' }}>
              --leading-{name} ({value})
            </div>
            <div style={{ fontSize: '14px', color: 'var(--color-grey-400)', marginBottom: '8px' }}>
              {desc}
            </div>
            <div style={{ lineHeight: `var(--leading-${name})`, fontSize: '14px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Shadows Story
export const Shadows: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-sans)', maxWidth: '800px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', marginBottom: '16px' }}>
        Shadows
      </h1>
      <p style={{ color: 'var(--color-grey-500)', marginBottom: '32px' }}>
        Elevation and depth tokens
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
        {['sm', 'md', 'lg', 'xl'].map((size) => (
          <div key={size} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: `var(--shadow-${size})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px',
              }}
            >
              <span style={{ color: 'var(--color-grey-400)' }}>Content</span>
            </div>
            <div style={{ fontWeight: 600 }}>shadow-{size}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// All Tokens Overview
export const AllTokens: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-sans)', maxWidth: '1000px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', marginBottom: '8px' }}>
        Speck DS Tokens
      </h1>
      <p style={{ color: 'var(--color-grey-500)', marginBottom: '48px', fontSize: '18px' }}>
        Complete design token reference from Figma
      </p>

      {/* Quick Reference Table */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '24px',
        marginBottom: '48px',
      }}>
        {/* Colors Card */}
        <div style={{ padding: '24px', backgroundColor: 'var(--color-grey-200)', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>Colors</h3>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
            {['100', '200', '300', '400', '500'].map(shade => (
              <div key={shade} style={{
                width: '32px', height: '32px',
                backgroundColor: `var(--color-purple-${shade})`,
                borderRadius: '4px',
              }} />
            ))}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--color-grey-500)' }}>Purple: 5 shades</div>
          <div style={{ fontSize: '12px', color: 'var(--color-grey-500)' }}>Grey: 7 shades</div>
        </div>

        {/* Spacing Card */}
        <div style={{ padding: '24px', backgroundColor: 'var(--color-grey-200)', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>Spacing</h3>
          <div style={{ display: 'flex', alignItems: 'end', gap: '4px', marginBottom: '8px' }}>
            {['1', '2', '3', '4', '5'].map(n => (
              <div key={n} style={{
                width: '24px',
                height: `var(--spacing-${n})`,
                backgroundColor: 'var(--color-purple-400)',
                borderRadius: '2px',
              }} />
            ))}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--color-grey-500)' }}>4px to 64px</div>
        </div>

        {/* Radius Card */}
        <div style={{ padding: '24px', backgroundColor: 'var(--color-grey-200)', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>Radius</h3>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
            {['none', 'sm', 'md', 'lg', 'full'].map(r => (
              <div key={r} style={{
                width: '24px', height: '24px',
                backgroundColor: 'var(--color-purple-500)',
                borderRadius: `var(--radius-${r})`,
              }} />
            ))}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--color-grey-500)' }}>0px to 999px</div>
        </div>

        {/* Typography Card */}
        <div style={{ padding: '24px', backgroundColor: 'var(--color-grey-200)', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>Typography</h3>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', marginBottom: '4px' }}>Noe Display</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', marginBottom: '8px' }}>Avenir</div>
          <div style={{ fontSize: '12px', color: 'var(--color-grey-500)' }}>6 sizes, 4 weights</div>
        </div>
      </div>

      {/* Usage Example */}
      <div style={{ 
        padding: '24px', 
        backgroundColor: 'var(--color-purple-100)', 
        borderRadius: '12px',
        borderLeft: '4px solid var(--color-purple-500)',
      }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '12px' }}>Usage</h3>
        <code style={{ 
          display: 'block', 
          backgroundColor: 'var(--color-grey-700)', 
          color: 'var(--color-grey-100)',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: 1.6,
        }}>
{`.button {
  background: var(--color-primary-500);
  padding: var(--spacing-3) var(--spacing-5);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
}`}
        </code>
      </div>
    </div>
  ),
};
