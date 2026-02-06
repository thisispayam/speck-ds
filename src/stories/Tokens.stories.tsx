import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '../styles/tokens.css';
import '../styles/showcase.css';

const meta: Meta = {
  title: 'Foundation/Tokens',
  parameters: { layout: 'padded' },
};

export default meta;

// Reusable Components
const ColorSwatch = ({ name, variable, value }: { name: string; variable: string; value: string }) => (
  <div className="swatch">
    <div className={`swatch-color ${variable.replace('--color-', 'bg-')}`} />
    <div className="swatch-info">
      <span className="swatch-name">{name}</span>
      <span className="swatch-var">{variable}</span>
      <span className="swatch-value">{value}</span>
    </div>
  </div>
);

const SemanticSwatch = ({ name, variable }: { name: string; variable: string }) => (
  <div className="swatch">
    <div className="swatch-color" style={{ background: `var(${variable})` }} />
    <div className="swatch-info">
      <span className="swatch-name">{name}</span>
      <span className="swatch-var">{variable}</span>
      <span className="swatch-value">var({variable})</span>
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
          <ColorSwatch name="Primary 500" variable="--color-primary-500" value="#3E06B6" />
          <ColorSwatch name="Primary Hover" variable="--color-primary-hover" value="#8B6AD3" />
          <ColorSwatch name="Primary Active" variable="--color-primary-active" value="#C5B4E9" />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Semantic Colors - Light Mode</h2>
        <p style={{ marginBottom: '16px', color: '#666', fontSize: '14px' }}>
          These tokens automatically switch values in dark mode. Use <code>data-theme="dark"</code> or <code>.dark-theme</code>.
        </p>
        <div className="grid grid-auto">
          <SemanticSwatch name="Background Primary" variable="--color-background-primary" />
          <SemanticSwatch name="Background Secondary" variable="--color-background-secondary" />
          <SemanticSwatch name="Background Tertiary" variable="--color-background-tertiary" />
          <SemanticSwatch name="Foreground Primary" variable="--color-foreground-primary" />
          <SemanticSwatch name="Foreground Secondary" variable="--color-foreground-secondary" />
          <SemanticSwatch name="Foreground Tertiary" variable="--color-foreground-tertiary" />
          <SemanticSwatch name="Border Subtle" variable="--color-border-subtle" />
          <SemanticSwatch name="Border Strong" variable="--color-border-strong" />
          <SemanticSwatch name="Accent Primary" variable="--color-accent-primary" />
          <SemanticSwatch name="Accent Hover" variable="--color-accent-primary-hover" />
          <SemanticSwatch name="Accent Active" variable="--color-accent-primary-active" />
        </div>
      </section>

      <section
        className="section"
        data-theme="dark"
        style={{
          background: 'var(--color-background-primary)',
          color: 'var(--color-foreground-primary)',
          padding: '24px',
          borderRadius: '8px',
        }}
      >
        <h2 className="section-title" style={{ color: 'inherit' }}>Semantic Colors - Dark Mode</h2>
        <p style={{ marginBottom: '16px', color: 'var(--color-foreground-tertiary)', fontSize: '14px' }}>
          Dark mode values for the same semantic tokens.
        </p>
        <div className="grid grid-auto">
          <SemanticSwatch name="Background Primary" variable="--color-background-primary" />
          <SemanticSwatch name="Background Secondary" variable="--color-background-secondary" />
          <SemanticSwatch name="Background Tertiary" variable="--color-background-tertiary" />
          <SemanticSwatch name="Foreground Primary" variable="--color-foreground-primary" />
          <SemanticSwatch name="Foreground Secondary" variable="--color-foreground-secondary" />
          <SemanticSwatch name="Foreground Tertiary" variable="--color-foreground-tertiary" />
          <SemanticSwatch name="Border Subtle" variable="--color-border-subtle" />
          <SemanticSwatch name="Border Strong" variable="--color-border-strong" />
          <SemanticSwatch name="Accent Primary" variable="--color-accent-primary" />
          <SemanticSwatch name="Accent Hover" variable="--color-accent-primary-hover" />
          <SemanticSwatch name="Accent Active" variable="--color-accent-primary-active" />
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
            <div className={`spacing-bar spacing-${key}-bar`} />
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
            <div className={`radius-box radius-${name}`} />
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
              <span className={`text-${name}`}>The quick brown fox</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Font Weights</h2>
        <div className="flex flex-col gap-3">
          <div className="weight-sample font-400">
            <span className="weight-label">400</span>
            Regular weight text
          </div>
          <div className="weight-sample font-500">
            <span className="weight-label">500</span>
            Medium weight text
          </div>
          <div className="weight-sample font-600">
            <span className="weight-label">600</span>
            Semibold weight text
          </div>
          <div className="weight-sample font-700">
            <span className="weight-label">700</span>
            Bold weight text
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Line Heights</h2>
        <div className="grid grid-2 gap-5">
          <div className="card">
            <div className="font-var mb-2">--leading-tight (1.15)</div>
            <div className="text-muted text-sm mb-3">Headings</div>
            <p className="text-sm leading-tight m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="card">
            <div className="font-var mb-2">--leading-standard (1.35)</div>
            <div className="text-muted text-sm mb-3">UI text</div>
            <p className="text-sm leading-standard m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="card">
            <div className="font-var mb-2">--leading-relaxed (1.6)</div>
            <div className="text-muted text-sm mb-3">Body copy</div>
            <p className="text-sm leading-relaxed m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="card">
            <div className="font-var mb-2">--leading-reader (1.75)</div>
            <div className="text-muted text-sm mb-3">Long-form reading</div>
            <p className="text-sm leading-reader m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
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
        <div className="shadow-item">
          <div className="shadow-box shadow-sm">Content</div>
          <div className="shadow-name">shadow-sm</div>
        </div>
        <div className="shadow-item">
          <div className="shadow-box shadow-md">Content</div>
          <div className="shadow-name">shadow-md</div>
        </div>
        <div className="shadow-item">
          <div className="shadow-box shadow-lg">Content</div>
          <div className="shadow-name">shadow-lg</div>
        </div>
        <div className="shadow-item">
          <div className="shadow-box shadow-xl">Content</div>
          <div className="shadow-name">shadow-xl</div>
        </div>
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
            <div className="swatch-mini bg-purple-100" />
            <div className="swatch-mini bg-purple-200" />
            <div className="swatch-mini bg-purple-300" />
            <div className="swatch-mini bg-purple-400" />
            <div className="swatch-mini bg-purple-500" />
          </div>
          <div className="text-muted text-sm">Purple: 5 shades</div>
          <div className="text-muted text-sm">Grey: 7 shades</div>
        </div>

        {/* Spacing Card */}
        <div className="card">
          <h3 className="section-subtitle">Spacing</h3>
          <div className="flex gap-1 items-end mb-2">
            <div className="w-6 spacing-1-height bg-purple-400 rounded-xs" />
            <div className="w-6 spacing-2-height bg-purple-400 rounded-xs" />
            <div className="w-6 spacing-3-height bg-purple-400 rounded-xs" />
            <div className="w-6 spacing-4-height bg-purple-400 rounded-xs" />
            <div className="w-6 spacing-5-height bg-purple-400 rounded-xs" />
          </div>
          <div className="text-muted text-sm">4px to 64px</div>
        </div>

        {/* Radius Card */}
        <div className="card">
          <h3 className="section-subtitle">Radius</h3>
          <div className="flex gap-2 mb-2">
            <div className="w-6 h-6 bg-purple-500 radius-none" />
            <div className="w-6 h-6 bg-purple-500 radius-sm" />
            <div className="w-6 h-6 bg-purple-500 radius-md" />
            <div className="w-6 h-6 bg-purple-500 radius-lg" />
            <div className="w-6 h-6 bg-purple-500 radius-full" />
          </div>
          <div className="text-muted text-sm">0px to 999px</div>
        </div>

        {/* Typography Card */}
        <div className="card">
          <h3 className="section-subtitle">Typography</h3>
          <div className="font-serif text-lg mb-2">Noe Display</div>
          <div className="font-sans text-sm mb-2">Avenir</div>
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
