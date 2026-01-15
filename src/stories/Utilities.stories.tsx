import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '../styles/tokens.css';
import '../styles/showcase.css';

const meta: Meta = {
  title: 'Foundation/Utilities',
  parameters: { layout: 'padded' },
};

export default meta;

// Text Utilities
export const TextClasses: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Text Utilities</h1>
        <p className="showcase-description">Typography and text styling classes</p>
      </header>

      <section className="section">
        <h2 className="section-title">Font Sizes</h2>
        <div className="flex flex-col gap-3">
          <div className="text-xs">.text-xs - 10px</div>
          <div className="text-sm">.text-sm - 14px</div>
          <div className="text-md">.text-md - 16px</div>
          <div className="text-lg">.text-lg - 20px</div>
          <div className="text-xl">.text-xl - 24px</div>
          <div className="text-2xl">.text-2xl - 36px</div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Font Families</h2>
        <div className="flex flex-col gap-3">
          <div className="font-serif text-xl">.font-serif - Noe Display</div>
          <div className="font-sans text-xl">.font-sans - Avenir</div>
          <div className="mono text-lg">.mono - Monospace</div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Font Weights</h2>
        <div className="flex flex-col gap-3 text-lg">
          <div className="font-normal">.font-normal - 400</div>
          <div className="font-medium">.font-medium - 500</div>
          <div className="font-semibold">.font-semibold - 600</div>
          <div className="font-bold">.font-bold - 700</div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Text Colors</h2>
        <div className="flex flex-col gap-3 text-lg">
          <div className="text-dark">.text-dark</div>
          <div className="text-muted">.text-muted</div>
          <div className="bg-dark p-3 rounded">
            <span className="text-white">.text-white</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Text Alignment</h2>
        <div className="flex flex-col gap-3 border rounded p-4">
          <div className="text-center bg-light p-2 rounded">.text-center</div>
        </div>
      </section>
    </div>
  ),
};

// Spacing Utilities
export const SpacingClasses: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Spacing Utilities</h1>
        <p className="showcase-description">Padding and margin classes</p>
      </header>

      <section className="section">
        <h2 className="section-title">Padding</h2>
        <div className="flex flex-wrap gap-4">
          {['1', '2', '3', '4', '5', '6'].map(n => (
            <div key={n} className="text-center">
              <div className={`p-${n} bg-purple-light border-purple rounded`}>
                <div className="bg-purple text-white p-2 rounded text-sm">.p-{n}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Padding X/Y</h2>
        <div className="flex flex-wrap gap-4">
          <div className="px-5 py-2 bg-purple-light border-purple rounded">
            <span className="text-sm">.px-5 .py-2</span>
          </div>
          <div className="px-3 py-4 bg-purple-light border-purple rounded">
            <span className="text-sm">.px-3 .py-4</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Margin Bottom</h2>
        <div className="bg-light p-4 rounded">
          <div className="mb-1 bg-purple text-white p-2 rounded text-sm">.mb-1</div>
          <div className="mb-2 bg-purple text-white p-2 rounded text-sm">.mb-2</div>
          <div className="mb-3 bg-purple text-white p-2 rounded text-sm">.mb-3</div>
          <div className="mb-4 bg-purple text-white p-2 rounded text-sm">.mb-4</div>
          <div className="bg-purple text-white p-2 rounded text-sm">No margin</div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Gap</h2>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-sm text-muted mb-2 block">.gap-1</span>
            <div className="flex gap-1">
              {[1,2,3,4].map(i => <div key={i} className="bg-purple p-3 rounded" />)}
            </div>
          </div>
          <div>
            <span className="text-sm text-muted mb-2 block">.gap-3</span>
            <div className="flex gap-3">
              {[1,2,3,4].map(i => <div key={i} className="bg-purple p-3 rounded" />)}
            </div>
          </div>
          <div>
            <span className="text-sm text-muted mb-2 block">.gap-5</span>
            <div className="flex gap-5">
              {[1,2,3,4].map(i => <div key={i} className="bg-purple p-3 rounded" />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};

// Background & Border Utilities
export const BackgroundBorderClasses: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Background & Border</h1>
        <p className="showcase-description">Color and border styling classes</p>
      </header>

      <section className="section">
        <h2 className="section-title">Backgrounds</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white border p-4 rounded text-center">
            <span className="text-sm">.bg-white</span>
          </div>
          <div className="bg-light p-4 rounded text-center">
            <span className="text-sm">.bg-light</span>
          </div>
          <div className="bg-grey p-4 rounded text-center">
            <span className="text-sm">.bg-grey</span>
          </div>
          <div className="bg-dark p-4 rounded text-center">
            <span className="text-sm text-white">.bg-dark</span>
          </div>
          <div className="bg-black p-4 rounded text-center">
            <span className="text-sm text-white">.bg-black</span>
          </div>
          <div className="bg-purple-light p-4 rounded text-center">
            <span className="text-sm">.bg-purple-light</span>
          </div>
          <div className="bg-purple p-4 rounded text-center">
            <span className="text-sm text-white">.bg-purple</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Borders</h2>
        <div className="flex flex-wrap gap-4">
          <div className="border p-4 rounded bg-white">
            <span className="text-sm">.border</span>
          </div>
          <div className="border-light p-4 rounded bg-white">
            <span className="text-sm">.border-light</span>
          </div>
          <div className="border-dark p-4 rounded bg-white">
            <span className="text-sm">.border-dark</span>
          </div>
          <div className="border-purple p-4 rounded bg-white">
            <span className="text-sm">.border-purple</span>
          </div>
          <div className="border-left-purple p-4 bg-purple-light">
            <span className="text-sm">.border-left-purple</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Border Radius</h2>
        <div className="flex flex-wrap gap-4 items-end">
          <div className="text-center">
            <div className="bg-purple p-5" style={{ borderRadius: 0 }} />
            <span className="text-sm text-muted">none</span>
          </div>
          <div className="text-center">
            <div className="bg-purple p-5 rounded" />
            <span className="text-sm text-muted">.rounded</span>
          </div>
          <div className="text-center">
            <div className="bg-purple p-5 rounded-md" />
            <span className="text-sm text-muted">.rounded-md</span>
          </div>
          <div className="text-center">
            <div className="bg-purple p-5 rounded-lg" />
            <span className="text-sm text-muted">.rounded-lg</span>
          </div>
          <div className="text-center">
            <div className="bg-purple p-5 rounded-full" />
            <span className="text-sm text-muted">.rounded-full</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Shadows</h2>
        <div className="flex flex-wrap gap-6">
          <div className="text-center">
            <div className="bg-white p-5 rounded shadow-sm" />
            <span className="text-sm text-muted mt-2 block">.shadow-sm</span>
          </div>
          <div className="text-center">
            <div className="bg-white p-5 rounded shadow-md" />
            <span className="text-sm text-muted mt-2 block">.shadow-md</span>
          </div>
          <div className="text-center">
            <div className="bg-white p-5 rounded shadow-lg" />
            <span className="text-sm text-muted mt-2 block">.shadow-lg</span>
          </div>
          <div className="text-center">
            <div className="bg-white p-5 rounded shadow-xl" />
            <span className="text-sm text-muted mt-2 block">.shadow-xl</span>
          </div>
        </div>
      </section>
    </div>
  ),
};

// Layout Utilities
export const LayoutClasses: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Layout Utilities</h1>
        <p className="showcase-description">Flexbox and layout classes</p>
      </header>

      <section className="section">
        <h2 className="section-title">Flex Direction</h2>
        <div className="grid grid-2 gap-4">
          <div>
            <span className="text-sm text-muted mb-2 block">.flex (row)</span>
            <div className="flex gap-2 bg-light p-3 rounded">
              {[1,2,3].map(i => <div key={i} className="bg-purple p-3 rounded text-white text-sm">{i}</div>)}
            </div>
          </div>
          <div>
            <span className="text-sm text-muted mb-2 block">.flex .flex-col</span>
            <div className="flex flex-col gap-2 bg-light p-3 rounded">
              {[1,2,3].map(i => <div key={i} className="bg-purple p-3 rounded text-white text-sm">{i}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Flex Wrap</h2>
        <div className="bg-light p-3 rounded">
          <span className="text-sm text-muted mb-2 block">.flex .flex-wrap .gap-2</span>
          <div className="flex flex-wrap gap-2">
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <div key={i} className="bg-purple p-3 rounded text-white text-sm" style={{ width: '80px' }}>
                Item {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Align Items</h2>
        <div className="grid grid-3 gap-4">
          <div>
            <span className="text-sm text-muted mb-2 block">.items-start</span>
            <div className="flex items-start gap-2 bg-light p-3 rounded" style={{ height: '100px' }}>
              <div className="bg-purple p-2 rounded" />
              <div className="bg-purple p-4 rounded" />
              <div className="bg-purple p-3 rounded" />
            </div>
          </div>
          <div>
            <span className="text-sm text-muted mb-2 block">.items-center</span>
            <div className="flex items-center gap-2 bg-light p-3 rounded" style={{ height: '100px' }}>
              <div className="bg-purple p-2 rounded" />
              <div className="bg-purple p-4 rounded" />
              <div className="bg-purple p-3 rounded" />
            </div>
          </div>
          <div>
            <span className="text-sm text-muted mb-2 block">.items-end</span>
            <div className="flex items-end gap-2 bg-light p-3 rounded" style={{ height: '100px' }}>
              <div className="bg-purple p-2 rounded" />
              <div className="bg-purple p-4 rounded" />
              <div className="bg-purple p-3 rounded" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Justify Content</h2>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-sm text-muted mb-2 block">.justify-start</span>
            <div className="flex justify-start gap-2 bg-light p-3 rounded">
              {[1,2,3].map(i => <div key={i} className="bg-purple p-3 rounded" />)}
            </div>
          </div>
          <div>
            <span className="text-sm text-muted mb-2 block">.justify-center</span>
            <div className="flex justify-center gap-2 bg-light p-3 rounded">
              {[1,2,3].map(i => <div key={i} className="bg-purple p-3 rounded" />)}
            </div>
          </div>
          <div>
            <span className="text-sm text-muted mb-2 block">.justify-end</span>
            <div className="flex justify-end gap-2 bg-light p-3 rounded">
              {[1,2,3].map(i => <div key={i} className="bg-purple p-3 rounded" />)}
            </div>
          </div>
          <div>
            <span className="text-sm text-muted mb-2 block">.justify-between</span>
            <div className="flex justify-between bg-light p-3 rounded">
              {[1,2,3].map(i => <div key={i} className="bg-purple p-3 rounded" />)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Max Width</h2>
        <div className="flex flex-col gap-3">
          <div className="max-w-sm bg-purple-light p-3 rounded">.max-w-sm (400px)</div>
          <div className="max-w-md bg-purple-light p-3 rounded">.max-w-md (600px)</div>
          <div className="max-w-lg bg-purple-light p-3 rounded">.max-w-lg (800px)</div>
          <div className="max-w-xl bg-purple-light p-3 rounded">.max-w-xl (1000px)</div>
        </div>
      </section>
    </div>
  ),
};

// All Utilities Quick Reference
export const QuickReference: StoryObj = {
  render: () => (
    <div className="showcase">
      <header className="showcase-header">
        <h1 className="showcase-title">Utility Classes Reference</h1>
        <p className="showcase-description">Quick reference for all available classes</p>
      </header>

      <div className="grid grid-2 gap-5">
        <div className="card">
          <h3 className="section-subtitle">Text</h3>
          <code className="code-block text-sm">
{`.text-xs .text-sm .text-md .text-lg .text-xl .text-2xl
.font-serif .font-sans .mono
.font-normal .font-medium .font-semibold .font-bold
.text-dark .text-muted .text-white .text-center`}
          </code>
        </div>

        <div className="card">
          <h3 className="section-subtitle">Spacing</h3>
          <code className="code-block text-sm">
{`.p-1 .p-2 .p-3 .p-4 .p-5 .p-6
.px-3 .px-4 .px-5 .py-3 .py-4 .py-5
.m-0 .mb-1 .mb-2 .mb-3 .mb-4 .mb-5 .mb-6
.mt-4 .mt-5
.gap-1 .gap-2 .gap-3 .gap-4 .gap-5 .gap-6`}
          </code>
        </div>

        <div className="card">
          <h3 className="section-subtitle">Background</h3>
          <code className="code-block text-sm">
{`.bg-white .bg-light .bg-grey .bg-dark .bg-black
.bg-purple-light .bg-purple`}
          </code>
        </div>

        <div className="card">
          <h3 className="section-subtitle">Border</h3>
          <code className="code-block text-sm">
{`.border .border-light .border-dark .border-purple
.border-left-purple
.rounded .rounded-md .rounded-lg .rounded-full`}
          </code>
        </div>

        <div className="card">
          <h3 className="section-subtitle">Layout</h3>
          <code className="code-block text-sm">
{`.flex .flex-wrap .flex-col .flex-center
.items-start .items-center .items-end .items-baseline
.justify-start .justify-center .justify-end .justify-between
.w-full .max-w-sm .max-w-md .max-w-lg .max-w-xl`}
          </code>
        </div>

        <div className="card">
          <h3 className="section-subtitle">Shadow</h3>
          <code className="code-block text-sm">
{`.shadow-sm .shadow-md .shadow-lg .shadow-xl`}
          </code>
        </div>
      </div>

      <div className="card card-purple mt-5">
        <h3 className="section-subtitle">Example Usage</h3>
        <code className="code-block">
{`<div className="flex gap-4 p-5 bg-white rounded-lg shadow-md">
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</div>`}
        </code>
      </div>
    </div>
  ),
};
