import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '../styles/tokens.css';
import '../styles/helpers.css';
import { Button } from '../components/Button';
import { Dropdown } from '../components/Dropdown';

const meta: Meta = {
  title: 'Getting Started/Installation',
  parameters: { 
    layout: 'padded',
    options: { showPanel: false },
  },
};

export default meta;

// Installation Guide
export const Installation: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Installation</h1>
      <p className="text-muted mb-6">Get started with Speck DS in your React project</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">1. Install the Package</h2>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`npm install @thisispayam/speck-ds`}
        </pre>
        <p className="text-sm text-muted mt-2">Or with yarn:</p>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`yarn add @thisispayam/speck-ds`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">2. Import Components</h2>
        <p className="text-muted mb-3">
          Import any component directly. CSS tokens and helpers are automatically included!
        </p>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`import { Button, Dropdown } from '@thisispayam/speck-ds';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Dropdown 
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
        placeholder="Select..."
      />
    </div>
  );
}`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">3. Use CSS Variables (Optional)</h2>
        <p className="text-muted mb-3">
          Design tokens are available as CSS variables for custom styling:
        </p>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`.my-custom-component {
  background: var(--color-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  box-shadow: var(--shadow-md);
}`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">4. Use Helper Classes (Optional)</h2>
        <p className="text-muted mb-3">
          Tailwind-like utility classes are included for rapid prototyping:
        </p>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`<div className="flex gap-4 p-5 bg-white rounded-lg shadow-md">
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</div>

<p className="text-lg font-semibold text-primary mb-4">
  Styled with helper classes!
</p>`}
        </pre>
      </section>

      <div className="p-4 bg-purple-100 rounded-md border-l-4 border-purple">
        <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
        <p className="text-sm">
          All CSS (tokens + helpers) is automatically loaded when you import any component.
          No extra CSS imports needed!
        </p>
      </div>
    </div>
  ),
};

// Components Overview
export const Components: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Components</h1>
      <p className="text-muted mb-6">Available components in Speck DS</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Button</h2>
        <p className="text-muted mb-4">
          Versatile button component with multiple variants, sizes, and states.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-4 p-4 bg-grey-200 rounded-md">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>

        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`import { Button } from '@thisispayam/speck-ds';

<Button variant="primary" size="md">
  Click me
</Button>

// Props
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Dropdown</h2>
        <p className="text-muted mb-4">
          Accessible dropdown/select component with keyboard navigation.
        </p>
        
        <div className="mb-4 p-4 bg-grey-200 rounded-md">
          <Dropdown 
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
            ]}
            placeholder="Select an option..."
          />
        </div>

        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`import { Dropdown } from '@thisispayam/speck-ds';

<Dropdown
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  placeholder="Select..."
  onChange={(option) => console.log(option)}
/>

// Props
interface DropdownProps {
  options: { value: string; label: string }[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (option: DropdownOption) => void;
}`}
        </pre>
      </section>
    </div>
  ),
};

// Tokens Reference
export const Tokens: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Design Tokens</h1>
      <p className="text-muted mb-6">CSS variables synced from Figma</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Colors</h2>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`/* Purple (Primary) */
--color-purple-100: #ECE6F8;
--color-purple-200: #C5B4E9;
--color-purple-300: #8B6AD3;
--color-purple-400: #3E06B6;
--color-purple-500: #1F035B;

/* Grey */
--color-grey-100: #FFFFFF;
--color-grey-200: #E5E5E5;
--color-grey-300: #C4C4C4;
--color-grey-400: #8D8D8D;
--color-grey-500: #656565;
--color-grey-600: #1A1A1A;
--color-grey-700: #000000;

/* Semantic */
--color-primary-500: #1F035B;
--color-primary-hover: #3E06B6;
--color-primary-active: #8B6AD3;`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Spacing</h2>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 24px;
--spacing-6: 32px;
--spacing-7: 48px;
--spacing-8: 64px;`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Typography</h2>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`/* Font Families */
--font-serif: "Noe Display", Merriweather, Georgia, serif;
--font-sans: "Avenir", "Helvetica Neue", sans-serif;

/* Font Sizes */
--text-xs: 10px;
--text-sm: 14px;
--text-md: 16px;
--text-lg: 20px;
--text-xl: 24px;
--text-2xl: 36px;

/* Line Heights */
--leading-tight: 1.15;
--leading-standard: 1.35;
--leading-relaxed: 1.6;
--leading-reader: 1.75;`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Border Radius & Shadows</h2>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`/* Border Radius */
--radius-none: 0px;
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-full: 999px;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);`}
        </pre>
      </section>
    </div>
  ),
};

// Helper Classes Reference
export const HelperClasses: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Helper Classes</h1>
      <p className="text-muted mb-6">Tailwind-like utility classes for rapid development</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="card-base">
          <h3 className="font-semibold mb-3">Text</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">
{`.text-xs .text-sm .text-md
.text-lg .text-xl .text-2xl
.font-serif .font-sans .mono
.font-medium .font-semibold .font-bold
.text-primary .text-muted .text-white
.uppercase .lowercase .truncate`}
          </pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Spacing</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">
{`.p-1 to .p-8
.px-* .py-* .pt-* .pb-* .pl-* .pr-*
.m-0 to .m-6 .m-auto
.mx-auto .my-auto
.mt-* .mb-* .ml-* .mr-*
.gap-1 to .gap-6`}
          </pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Layout</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">
{`.flex .flex-col .flex-wrap
.flex-center .flex-1
.items-center .items-start .items-end
.justify-center .justify-between
.grid .grid-cols-2 .grid-cols-3
.col-span-2 .col-span-full`}
          </pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Visual</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">
{`.bg-white .bg-light .bg-dark
.bg-purple .bg-purple-100
.border .border-primary
.rounded .rounded-md .rounded-lg
.shadow-sm .shadow-md .shadow-lg
.opacity-50 .opacity-75`}
          </pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Sizing</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">
{`.w-full .w-1/2 .w-1/3
.max-w-sm .max-w-md .max-w-lg
.h-full .h-screen
.min-h-screen`}
          </pre>
        </div>

        <div className="card-base">
          <h3 className="font-semibold mb-3">Interactive</h3>
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">
{`.cursor-pointer
.transition .duration-300
.hover\\:bg-light
.hover\\:shadow-lg
.focus\\:ring
.disabled`}
          </pre>
        </div>
      </div>

      <div className="mt-6 p-4 bg-purple-100 rounded-md border-l-4 border-purple">
        <h3 className="font-semibold mb-2">Example</h3>
        <pre className="text-sm bg-grey-700 text-white p-4 rounded overflow-x-auto">
{`<div className="flex gap-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition">
  <img className="w-16 h-16 rounded-full" src="avatar.jpg" />
  <div className="flex-1">
    <h3 className="font-semibold text-lg">John Doe</h3>
    <p className="text-muted text-sm truncate">Software Engineer</p>
  </div>
</div>`}
        </pre>
      </div>
    </div>
  ),
};

// Figma Integration
export const FigmaIntegration: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">Figma Integration</h1>
      <p className="text-muted mb-6">Keep your design and code in sync</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">How It Works</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-start p-4 bg-grey-200 rounded-md">
            <div className="flex-center w-8 h-8 bg-purple-500 text-white rounded-full font-bold">1</div>
            <div>
              <h4 className="font-semibold">Design in Figma</h4>
              <p className="text-sm text-muted">Create and update your design tokens as Figma Variables</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-4 bg-grey-200 rounded-md">
            <div className="flex-center w-8 h-8 bg-purple-500 text-white rounded-full font-bold">2</div>
            <div>
              <h4 className="font-semibold">Sync Tokens</h4>
              <p className="text-sm text-muted">Run the sync script to pull tokens from Figma</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-4 bg-grey-200 rounded-md">
            <div className="flex-center w-8 h-8 bg-purple-500 text-white rounded-full font-bold">3</div>
            <div>
              <h4 className="font-semibold">Use in Code</h4>
              <p className="text-sm text-muted">Tokens are available as CSS variables and TypeScript exports</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Syncing Tokens</h2>
        <p className="text-muted mb-3">
          To sync tokens from Figma, set your API key and run:
        </p>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`# Set your Figma API token
export FIGMA_TOKEN=your-figma-token

# Sync tokens from Figma
npm run sync:tokens`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">What Gets Synced</h2>
        <ul className="list-disc list-inside text-muted space-y-2">
          <li>Color palettes (Purple, Grey)</li>
          <li>Spacing scale</li>
          <li>Typography (fonts, sizes)</li>
          <li>Border radius</li>
          <li>Shadows</li>
        </ul>
      </section>

      <div className="p-4 bg-purple-100 rounded-md border-l-4 border-purple">
        <h3 className="font-semibold mb-2">📁 Figma File</h3>
        <p className="text-sm mb-2">
          The design system is connected to the Speck DS Figma file.
        </p>
        <a 
          href="https://www.figma.com/file/Th7UVyk0UGSWZW1Yx7sRu3/Speck-DS" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link text-sm"
        >
          Open in Figma →
        </a>
      </div>
    </div>
  ),
};

// TypeScript Support
export const TypeScript: StoryObj = {
  render: () => (
    <div className="max-w-2xl">
      <h1 className="font-serif text-2xl mb-2">TypeScript Support</h1>
      <p className="text-muted mb-6">Full type safety for all components and tokens</p>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Component Types</h2>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`import { 
  Button, 
  ButtonProps, 
  ButtonVariant, 
  ButtonSize,
  Dropdown,
  DropdownProps,
  DropdownOption,
} from '@thisispayam/speck-ds';

// All props are fully typed
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

// Type-safe variant selection
const variant: ButtonVariant = 'primary'; // ✓
const size: ButtonSize = 'md'; // ✓`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Token Types</h2>
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">
{`import { colors, spacing, typography } from '@thisispayam/speck-ds';

// Access tokens programmatically
const primaryColor = colors.primary[500]; // '#1F035B'
const padding = spacing[4]; // '16px'
const fontFamily = typography.fontFamily.sans;`}
        </pre>
      </section>

      <div className="p-4 bg-grey-200 rounded-md">
        <h3 className="font-semibold mb-2">IDE Support</h3>
        <p className="text-sm text-muted">
          Full IntelliSense support in VS Code - autocomplete for props, 
          variants, and token values.
        </p>
      </div>
    </div>
  ),
};
