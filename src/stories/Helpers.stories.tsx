import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '../../styles/tokens.css';
import '../../styles/helpers.css';

const meta: Meta = {
  title: 'Foundation/Helpers',
  parameters: { layout: 'padded' },
};

export default meta;

const ClassBox = ({ className, label }: { className: string; label?: string }) => (
  <code className="mono text-xs bg-grey-200 px-2 py-1 rounded">{label || className}</code>
);

// Text Helpers
export const Text: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Text Helpers</h1>
      <p className="text-muted mb-6">Typography and text styling utilities</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Font Size</h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-4"><ClassBox className=".text-xs" /><span className="text-xs">text-xs (10px)</span></div>
          <div className="flex items-baseline gap-4"><ClassBox className=".text-sm" /><span className="text-sm">text-sm (14px)</span></div>
          <div className="flex items-baseline gap-4"><ClassBox className=".text-md" /><span className="text-md">text-md (16px)</span></div>
          <div className="flex items-baseline gap-4"><ClassBox className=".text-lg" /><span className="text-lg">text-lg (20px)</span></div>
          <div className="flex items-baseline gap-4"><ClassBox className=".text-xl" /><span className="text-xl">text-xl (24px)</span></div>
          <div className="flex items-baseline gap-4"><ClassBox className=".text-2xl" /><span className="text-2xl">text-2xl (36px)</span></div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Font Weight</h2>
        <div className="flex flex-col gap-2 text-lg">
          <div className="flex items-center gap-4"><ClassBox className=".font-normal" /><span className="font-normal">Normal (400)</span></div>
          <div className="flex items-center gap-4"><ClassBox className=".font-medium" /><span className="font-medium">Medium (500)</span></div>
          <div className="flex items-center gap-4"><ClassBox className=".font-semibold" /><span className="font-semibold">Semibold (600)</span></div>
          <div className="flex items-center gap-4"><ClassBox className=".font-bold" /><span className="font-bold">Bold (700)</span></div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Text Color</h2>
        <div className="flex flex-wrap gap-4">
          <span className="text-primary px-3 py-2 bg-grey-200 rounded">.text-primary</span>
          <span className="text-muted px-3 py-2 bg-grey-200 rounded">.text-muted</span>
          <span className="text-dark px-3 py-2 bg-grey-200 rounded">.text-dark</span>
          <span className="text-white px-3 py-2 bg-grey-700 rounded">.text-white</span>
          <span className="text-purple-500 px-3 py-2 bg-purple-100 rounded">.text-purple-500</span>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Text Transform</h2>
        <div className="flex flex-wrap gap-4">
          <span className="uppercase bg-grey-200 px-3 py-2 rounded">.uppercase</span>
          <span className="lowercase bg-grey-200 px-3 py-2 rounded">.LOWERCASE</span>
          <span className="capitalize bg-grey-200 px-3 py-2 rounded">.capitalize this</span>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Truncate</h2>
        <div className="max-w-sm bg-grey-200 p-3 rounded">
          <p className="truncate">.truncate - This is a very long text that will be truncated with an ellipsis when it overflows</p>
        </div>
      </section>
    </div>
  ),
};

// Spacing Helpers
export const Spacing: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Spacing Helpers</h1>
      <p className="text-muted mb-6">Padding and margin utilities</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Padding (p-*)</h2>
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5, 6].map(n => (
            <div key={n} className="bg-purple-100 border border-purple">
              <div className={`p-${n} bg-purple-500`}>
                <span className="text-white text-xs">.p-{n}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Padding X/Y</h2>
        <div className="flex flex-wrap gap-3">
          <div className="bg-purple-100 border border-purple">
            <div className="px-5 py-2 bg-purple-500 text-white text-xs">.px-5 .py-2</div>
          </div>
          <div className="bg-purple-100 border border-purple">
            <div className="px-2 py-5 bg-purple-500 text-white text-xs">.px-2 .py-5</div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Margin (m-*)</h2>
        <div className="bg-grey-200 p-4 rounded">
          <div className="mb-2 bg-purple-500 text-white p-2 rounded text-xs">.mb-2</div>
          <div className="mb-4 bg-purple-500 text-white p-2 rounded text-xs">.mb-4</div>
          <div className="bg-purple-500 text-white p-2 rounded text-xs">No margin</div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Center with mx-auto</h2>
        <div className="bg-grey-200 p-4 rounded">
          <div className="mx-auto max-w-xs bg-purple-500 text-white p-3 rounded text-center text-sm">
            .mx-auto .max-w-xs
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Gap</h2>
        <div className="flex gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-purple-500 p-4 rounded" />
          ))}
        </div>
        <p className="text-muted text-sm mt-2">.flex .gap-4</p>
      </section>
    </div>
  ),
};

// Layout Helpers
export const Layout: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Layout Helpers</h1>
      <p className="text-muted mb-6">Flexbox, grid, and positioning utilities</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Flexbox</h2>
        
        <div className="mb-4">
          <p className="text-sm text-muted mb-2">.flex .gap-3</p>
          <div className="flex gap-3 bg-grey-200 p-3 rounded">
            {[1, 2, 3].map(i => <div key={i} className="bg-purple-500 p-4 rounded" />)}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted mb-2">.flex .flex-col .gap-2</p>
          <div className="flex flex-col gap-2 bg-grey-200 p-3 rounded">
            {[1, 2, 3].map(i => <div key={i} className="bg-purple-500 p-3 rounded" />)}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted mb-2">.flex .justify-between</p>
          <div className="flex justify-between bg-grey-200 p-3 rounded">
            {[1, 2, 3].map(i => <div key={i} className="bg-purple-500 p-4 rounded" />)}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted mb-2">.flex .items-center .justify-center (or .flex-center)</p>
          <div className="flex-center bg-grey-200 p-5 rounded h-full" style={{ height: '100px' }}>
            <div className="bg-purple-500 p-4 rounded text-white text-sm">Centered</div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Grid</h2>
        
        <div className="mb-4">
          <p className="text-sm text-muted mb-2">.grid .grid-cols-3 .gap-3</p>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-purple-500 p-4 rounded text-white text-center">{i}</div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted mb-2">.grid .grid-cols-4 .gap-2 with .col-span-2</p>
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-purple-500 p-3 rounded text-white text-center text-sm">1</div>
            <div className="col-span-2 bg-purple-400 p-3 rounded text-white text-center text-sm">span 2</div>
            <div className="bg-purple-500 p-3 rounded text-white text-center text-sm">4</div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Max Width</h2>
        <div className="flex flex-col gap-2">
          <div className="max-w-xs bg-purple-100 p-3 rounded text-sm">.max-w-xs (320px)</div>
          <div className="max-w-sm bg-purple-100 p-3 rounded text-sm">.max-w-sm (400px)</div>
          <div className="max-w-md bg-purple-100 p-3 rounded text-sm">.max-w-md (600px)</div>
          <div className="max-w-lg bg-purple-100 p-3 rounded text-sm">.max-w-lg (800px)</div>
        </div>
      </section>
    </div>
  ),
};

// Visual Helpers
export const Visual: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Visual Helpers</h1>
      <p className="text-muted mb-6">Backgrounds, borders, shadows, and opacity</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Backgrounds</h2>
        <div className="flex flex-wrap gap-3">
          <div className="bg-white border p-4 rounded text-sm">.bg-white</div>
          <div className="bg-light p-4 rounded text-sm">.bg-light</div>
          <div className="bg-grey p-4 rounded text-sm">.bg-grey</div>
          <div className="bg-dark p-4 rounded text-white text-sm">.bg-dark</div>
          <div className="bg-black p-4 rounded text-white text-sm">.bg-black</div>
          <div className="bg-purple-light p-4 rounded text-sm">.bg-purple-light</div>
          <div className="bg-purple p-4 rounded text-white text-sm">.bg-purple</div>
          <div className="bg-primary p-4 rounded text-white text-sm">.bg-primary</div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Borders</h2>
        <div className="flex flex-wrap gap-3">
          <div className="border p-4 rounded bg-white text-sm">.border</div>
          <div className="border-2 p-4 rounded bg-white text-sm">.border-2</div>
          <div className="border border-primary p-4 rounded bg-white text-sm">.border-primary</div>
          <div className="border-dashed border-2 p-4 rounded bg-white text-sm">.border-dashed</div>
          <div className="border-t p-4 bg-white text-sm">.border-t</div>
          <div className="border-l-4 border-primary p-4 bg-purple-100 text-sm">.border-l-4</div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Border Radius</h2>
        <div className="flex flex-wrap gap-4 items-end">
          <div className="text-center">
            <div className="bg-purple-500 p-5 rounded-none" />
            <span className="text-xs text-muted">.rounded-none</span>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 p-5 rounded-sm" />
            <span className="text-xs text-muted">.rounded-sm</span>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 p-5 rounded-md" />
            <span className="text-xs text-muted">.rounded-md</span>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 p-5 rounded-lg" />
            <span className="text-xs text-muted">.rounded-lg</span>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 p-5 rounded-full" />
            <span className="text-xs text-muted">.rounded-full</span>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Shadows</h2>
        <div className="flex flex-wrap gap-6">
          <div className="text-center">
            <div className="bg-white p-6 rounded-md shadow-sm" />
            <span className="text-xs text-muted mt-2 block">.shadow-sm</span>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-md shadow-md" />
            <span className="text-xs text-muted mt-2 block">.shadow-md</span>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-md shadow-lg" />
            <span className="text-xs text-muted mt-2 block">.shadow-lg</span>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-md shadow-xl" />
            <span className="text-xs text-muted mt-2 block">.shadow-xl</span>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Opacity</h2>
        <div className="flex gap-3">
          <div className="bg-purple-500 p-4 rounded opacity-25 text-white text-sm">.opacity-25</div>
          <div className="bg-purple-500 p-4 rounded opacity-50 text-white text-sm">.opacity-50</div>
          <div className="bg-purple-500 p-4 rounded opacity-75 text-white text-sm">.opacity-75</div>
          <div className="bg-purple-500 p-4 rounded opacity-100 text-white text-sm">.opacity-100</div>
        </div>
      </section>
    </div>
  ),
};

// Interactive Helpers
export const Interactive: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Interactive Helpers</h1>
      <p className="text-muted mb-6">Hover, focus, transitions, and cursor utilities</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Hover Effects</h2>
        <div className="flex flex-wrap gap-3">
          <div className="p-4 rounded bg-grey-200 hover\:bg-purple-light transition cursor-pointer text-sm">
            hover:bg-purple-light
          </div>
          <div className="p-4 rounded bg-purple-500 text-white hover\:scale-105 transition cursor-pointer text-sm">
            hover:scale-105
          </div>
          <div className="p-4 rounded bg-white shadow-sm hover\:shadow-lg transition cursor-pointer text-sm">
            hover:shadow-lg
          </div>
          <div className="p-4 rounded bg-grey-200 hover\:opacity-75 transition cursor-pointer text-sm">
            hover:opacity-75
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Transitions</h2>
        <div className="flex flex-wrap gap-3">
          <div className="p-4 rounded bg-purple-500 text-white transition duration-150 hover\:bg-purple-light hover\:text-dark cursor-pointer text-sm">
            .transition .duration-150
          </div>
          <div className="p-4 rounded bg-purple-500 text-white transition duration-300 hover\:bg-purple-light hover\:text-dark cursor-pointer text-sm">
            .transition .duration-300
          </div>
          <div className="p-4 rounded bg-purple-500 text-white transition duration-500 hover\:bg-purple-light hover\:text-dark cursor-pointer text-sm">
            .transition .duration-500
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Cursor</h2>
        <div className="flex flex-wrap gap-3">
          <div className="p-4 rounded bg-grey-200 cursor-pointer text-sm">.cursor-pointer</div>
          <div className="p-4 rounded bg-grey-200 cursor-not-allowed text-sm">.cursor-not-allowed</div>
          <div className="p-4 rounded bg-grey-200 cursor-grab text-sm">.cursor-grab</div>
          <div className="p-4 rounded bg-grey-200 cursor-text text-sm">.cursor-text</div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Disabled</h2>
        <div className="flex gap-3">
          <button className="p-3 px-5 rounded bg-purple-500 text-white text-sm">Normal</button>
          <button className="p-3 px-5 rounded bg-purple-500 text-white text-sm disabled">.disabled</button>
        </div>
      </section>
    </div>
  ),
};

// Common Patterns
export const Patterns: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Common Patterns</h1>
      <p className="text-muted mb-6">Ready-to-use component patterns</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="card-base">
            <h3 className="font-semibold mb-2">.card-base</h3>
            <p className="text-sm text-muted">Basic card with shadow</p>
          </div>
          <div className="card-elevated">
            <h3 className="font-semibold mb-2">.card-elevated</h3>
            <p className="text-sm text-muted">Elevated card with larger shadow</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Badges</h2>
        <div className="flex gap-3">
          <span className="badge">.badge</span>
          <span className="badge badge-primary">.badge-primary</span>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Avatars</h2>
        <div className="flex items-center gap-4">
          <div className="avatar avatar-sm">S</div>
          <div className="avatar">M</div>
          <div className="avatar avatar-lg">L</div>
        </div>
        <p className="text-xs text-muted mt-2">.avatar-sm, .avatar, .avatar-lg</p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Links</h2>
        <p>
          This is a <a className="link">clickable link</a> styled with .link class.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Dividers</h2>
        <div className="bg-grey-200 p-4 rounded">
          <p>Content above</p>
          <hr className="divider" />
          <p>Content below</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Container</h2>
        <div className="bg-purple-100 py-4">
          <div className="container bg-purple-500 text-white p-4 rounded text-center">
            .container (max 1200px, centered, padded)
          </div>
        </div>
      </section>
    </div>
  ),
};

// Quick Reference
export const Reference: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Quick Reference</h1>
      <p className="text-muted mb-6">Copy-paste reference for all helper classes</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="card-base">
          <h3 className="font-semibold mb-3">Text</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-auto">{`.text-xs .text-sm .text-md .text-lg .text-xl .text-2xl
.font-normal .font-medium .font-semibold .font-bold
.font-serif .font-sans .mono
.text-primary .text-muted .text-dark .text-white
.text-left .text-center .text-right
.uppercase .lowercase .capitalize
.underline .no-underline .truncate`}</pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Spacing</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-auto">{`.p-0 to .p-8
.px-0 to .px-6  .py-0 to .py-6
.pt-* .pb-* .pl-* .pr-*
.m-0 to .m-6  .m-auto
.mx-auto .my-auto
.mt-* .mb-* .ml-* .mr-*
.gap-0 to .gap-6`}</pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Layout</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-auto">{`.block .inline-block .flex .grid .hidden
.flex-row .flex-col .flex-wrap
.flex-1 .flex-grow .flex-shrink-0
.items-start .items-center .items-end
.justify-start .justify-center .justify-between
.flex-center
.grid-cols-1 to .grid-cols-12
.col-span-* .col-span-full`}</pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Sizing</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-auto">{`.w-auto .w-full .w-1/2 .w-1/3 .w-2/3
.max-w-xs .max-w-sm .max-w-md .max-w-lg .max-w-xl
.h-auto .h-full .h-screen
.min-h-screen .max-h-screen`}</pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Visual</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-auto">{`.bg-white .bg-light .bg-grey .bg-dark .bg-black
.bg-purple .bg-purple-100 to .bg-purple-500
.border .border-0 .border-2 .border-t .border-b
.border-primary .border-dashed
.rounded .rounded-md .rounded-lg .rounded-full
.shadow-sm .shadow-md .shadow-lg .shadow-xl
.opacity-0 .opacity-25 .opacity-50 .opacity-75`}</pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Interactive</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-auto">{`.cursor-pointer .cursor-not-allowed
.transition .transition-colors .transition-opacity
.duration-150 .duration-300 .duration-500
.hover\\:bg-light .hover\\:shadow-lg .hover\\:scale-105
.focus\\:ring .focus\\:outline-none
.active\\:scale-95
.disabled`}</pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Position</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-auto">{`.relative .absolute .fixed .sticky
.inset-0 .top-0 .right-0 .bottom-0 .left-0
.z-0 .z-10 .z-20 .z-30 .z-40 .z-50`}</pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Patterns</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-auto">{`.container
.card-base .card-elevated
.badge .badge-primary
.avatar .avatar-sm .avatar-lg
.link
.divider .divider-vertical
.sr-only`}</pre>
        </div>
      </div>

      <div className="mt-6 p-4 bg-purple-100 rounded-md border-l-4 border-purple">
        <h3 className="font-semibold mb-2">Usage</h3>
        <pre className="text-sm bg-grey-700 text-white p-4 rounded overflow-auto">{`// Import in your project
import '@thisispayam/speck-ds/dist/styles/tokens.css';
import '@thisispayam/speck-ds/dist/styles/helpers.css';

// Use classes
<div className="flex gap-4 p-5 bg-white rounded-lg shadow-md">
  <Button variant="primary">Save</Button>
</div>`}</pre>
      </div>
    </div>
  ),
};
