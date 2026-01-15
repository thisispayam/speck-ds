import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '../../styles/tokens.css';
import '../../styles/showcase.css';

const meta: Meta = {
  title: 'Foundation/Tokens',
  parameters: { layout: 'padded' },
};

export default meta;

// Reusable Components
const ColorSwatch = ({ name, variable, value }: { name: string; variable: string; value: string }) => (
  <div className="swatch">
    <div className="swatch-color" style={{ backgroundColor: `var(${variable})` }} />
    <div className="swatch-info">
      <span className="swatch-name">{name}</span>
      <span className="swatch-var">{variable}</span>
      <span className="swatch-value">{value}</span>
    </div>
  </div>
);

// Colors
export const Colors: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Color Palette</h1>
        <p className="showcase-description">Speck DS color tokens from Figma</p>
      </header>

      <section className="section">
        <h2 className="section-title">Purple</h2>
        <div className="grid grid-auto">
          <ColorSwatch name="Purple 100" variable="--color-purple-100" value="#ECE6F8" />
          <ColorSwatch name="Purple 200" variable="--color-purple-200" value="#C5B4E9" />
          <ColorSwatch name="Purple 300" variable="--color-purple-300" value="#8B6AD3" />
          <ColorSwatch name="Purple 400" variable="--color-purple-400" value="#3E06B6" />
          <ColorSwatch name="Purple 500" variable="--color-purple-500" value="#1F035B" />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Grey</h2>
        <div className="grid grid-auto">
          <ColorSwatch name="Grey 100" variable="--color-grey-100" value="#FFFFFF" />
          <ColorSwatch name="Grey 200" variable="--color-grey-200" value="#E5E5E5" />
          <ColorSwatch name="Grey 300" variable="--color-grey-300" value="#C4C4C4" />
          <ColorSwatch name="Grey 400" variable="--color-grey-400" value="#8D8D8D" />
          <ColorSwatch name="Grey 500" variable="--color-grey-500" value="#656565" />
          <ColorSwatch name="Grey 600" variable="--color-grey-600" value="#1A1A1A" />
          <ColorSwatch name="Grey 700" variable="--color-grey-700" value="#000000" />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Primary (Semantic)</h2>
        <div className="grid grid-auto">
          <ColorSwatch name="Primary 500" variable="--color-primary-500" value="#1F035B" />
          <ColorSwatch name="Primary Hover" variable="--color-primary-hover" value="#3E06B6" />
          <ColorSwatch name="Primary Active" variable="--color-primary-active" value="#8B6AD3" />
        </div>
      </section>
    </div>
  ),
};

// Spacing
export const Spacing: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Spacing Scale</h1>
        <p className="showcase-description">Consistent spacing tokens for margins, padding, and gaps</p>
      </header>

      <div className="flex flex-col gap-4">
        {[
          { key: '1', value: '4px' },
          { key: '2', value: '8px' },
          { key: '3', value: '12px' },
          { key: '4', value: '16px' },
          { key: '5', value: '24px' },
          { key: '6', value: '32px' },
          { key: '7', value: '48px' },
          { key: '8', value: '64px' },
        ].map(({ key, value }) => (
          <div key={key} className="spacing-row">
            <span className="spacing-label">--spacing-{key}</span>
            <span className="spacing-value">{value}</span>
            <div className="spacing-bar" style={{ width: `var(--spacing-${key})` }} />
          </div>
        ))}
      </div>
    </div>
  ),
};

// Border Radius
export const BorderRadius: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Border Radius</h1>
        <p className="showcase-description">Corner radius tokens for UI elements</p>
      </header>

      <div className="flex flex-wrap gap-6">
        {[
          { name: 'none', value: '0px' },
          { name: 'sm', value: '8px' },
          { name: 'md', value: '16px' },
          { name: 'lg', value: '24px' },
          { name: 'full', value: '999px' },
        ].map(({ name, value }) => (
          <div key={name} className="radius-item">
            <div className="radius-box" style={{ borderRadius: `var(--radius-${name})` }} />
            <div className="radius-name">radius-{name}</div>
            <div className="radius-value">{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Typography
export const Typography: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Typography</h1>
        <p className="showcase-description">Font families, sizes, weights, and line heights</p>
      </header>

      <section className="section">
        <h2 className="section-title">Font Families</h2>
        <div className="font-sample">
          <div className="font-var">--font-serif</div>
          <div className="font-serif-demo">Noe Display Heading</div>
        </div>
        <div className="font-sample">
          <div className="font-var">--font-sans</div>
          <div className="font-sans-demo">Avenir Body Text</div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Font Sizes</h2>
        <div className="flex flex-col gap-4">
          {[
            { name: 'xs', value: '10px' },
            { name: 'sm', value: '14px' },
            { name: 'md', value: '16px' },
            { name: 'lg', value: '20px' },
            { name: 'xl', value: '24px' },
            { name: '2xl', value: '36px' },
          ].map(({ name, value }) => (
            <div key={name} className="size-row">
              <span className="size-label">--text-{name}</span>
              <span className="size-value">{value}</span>
              <span style={{ fontSize: `var(--text-${name})` }}>The quick brown fox</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Font Weights</h2>
        <div className="flex flex-col gap-3">
          {[400, 500, 600, 700].map((weight) => (
            <div key={weight} className="weight-sample" style={{ fontWeight: weight }}>
              <span className="weight-label">{weight}</span>
              {weight === 400 ? 'Regular' : weight === 500 ? 'Medium' : weight === 600 ? 'Semibold' : 'Bold'} weight text
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Line Heights</h2>
        <div className="grid grid-2 gap-5">
          {[
            { name: 'tight', value: '1.15', desc: 'Headings' },
            { name: 'standard', value: '1.35', desc: 'UI text' },
            { name: 'relaxed', value: '1.6', desc: 'Body copy' },
            { name: 'reader', value: '1.75', desc: 'Long-form reading' },
          ].map(({ name, value, desc }) => (
            <div key={name} className="card">
              <div className="font-var mb-2">--leading-{name} ({value})</div>
              <div className="text-muted text-sm mb-3">{desc}</div>
              <p style={{ lineHeight: `var(--leading-${name})`, fontSize: '14px', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

// Shadows
export const Shadows: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Shadows</h1>
        <p className="showcase-description">Elevation and depth tokens</p>
      </header>

      <div className="flex flex-wrap gap-6">
        {['sm', 'md', 'lg', 'xl'].map((size) => (
          <div key={size} className="shadow-item">
            <div className="shadow-box" style={{ boxShadow: `var(--shadow-${size})` }}>
              Content
            </div>
            <div className="shadow-name">shadow-{size}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// All Tokens Overview
export const AllTokens: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Speck DS Tokens</h1>
        <p className="showcase-description">Complete design token reference from Figma</p>
      </header>

      <div className="grid grid-auto gap-5 mb-5">
        {/* Colors Card */}
        <div className="card">
          <h3 className="section-subtitle">Colors</h3>
          <div className="flex gap-1 mb-2">
            {['100', '200', '300', '400', '500'].map(shade => (
              <div key={shade} className="swatch-mini" style={{ backgroundColor: `var(--color-purple-${shade})` }} />
            ))}
          </div>
          <div className="text-muted text-sm">Purple: 5 shades</div>
          <div className="text-muted text-sm">Grey: 7 shades</div>
        </div>

        {/* Spacing Card */}
        <div className="card">
          <h3 className="section-subtitle">Spacing</h3>
          <div className="flex gap-1 mb-2" style={{ alignItems: 'flex-end' }}>
            {['1', '2', '3', '4', '5'].map(n => (
              <div key={n} style={{
                width: '24px',
                height: `var(--spacing-${n})`,
                backgroundColor: 'var(--color-purple-400)',
                borderRadius: '2px',
              }} />
            ))}
          </div>
          <div className="text-muted text-sm">4px to 64px</div>
        </div>

        {/* Radius Card */}
        <div className="card">
          <h3 className="section-subtitle">Radius</h3>
          <div className="flex gap-2 mb-2">
            {['none', 'sm', 'md', 'lg', 'full'].map(r => (
              <div key={r} style={{
                width: '24px',
                height: '24px',
                backgroundColor: 'var(--color-purple-500)',
                borderRadius: `var(--radius-${r})`,
              }} />
            ))}
          </div>
          <div className="text-muted text-sm">0px to 999px</div>
        </div>

        {/* Typography Card */}
        <div className="card">
          <h3 className="section-subtitle">Typography</h3>
          <div className="font-serif-demo mb-2" style={{ fontSize: '18px' }}>Noe Display</div>
          <div className="font-sans-demo mb-2" style={{ fontSize: '14px' }}>Avenir</div>
          <div className="text-muted text-sm">6 sizes, 4 weights</div>
        </div>
      </div>

      {/* Usage Example */}
      <div className="card card-purple">
        <h3 className="section-subtitle">Usage</h3>
        <code className="code-block">
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
