import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               *//* empty css                */import{B as r}from"./Button-Botpo9fC.js";import{D as B}from"./Dropdown-Bisz4S6e.js";import{C as i}from"./Chip-D8s4-Mgj.js";import{T}from"./TextArea-CEQLb65k.js";import"./index-qdalL59a.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-BYR71yhe.js";const L={title:"Getting Started/Installation",parameters:{layout:"padded",options:{showPanel:!1}}},s={render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h1",{className:"font-serif text-2xl mb-2",children:"Installation"}),e.jsx("p",{className:"text-muted mb-6",children:"Get started with Speck DS in your React project"}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"1. Install the Package"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:"npm install github:thisispayam/speck-ds"}),e.jsx("p",{className:"text-sm text-muted mt-2",children:"Or with yarn:"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:"yarn add github:thisispayam/speck-ds"})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"2. Import Components"}),e.jsx("p",{className:"text-muted mb-3",children:"Import any component directly. CSS tokens and helpers are automatically included!"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`import { Button, Dropdown, Chip, TextArea } from '@thisispayam/speck-ds';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Chip variant="outline">Tag</Chip>
      <TextArea label="Notes" placeholder="Enter notes..." />
      <Dropdown 
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
        placeholder="Select..."
      />
    </div>
  );
}`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"3. Use CSS Variables (Optional)"}),e.jsx("p",{className:"text-muted mb-3",children:"Design tokens are available as CSS variables for custom styling:"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`.my-custom-component {
  background: var(--color-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  box-shadow: var(--shadow-md);
}`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"4. Use Helper Classes (Optional)"}),e.jsx("p",{className:"text-muted mb-3",children:"Tailwind-like utility classes are included for rapid prototyping:"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`<div className="flex gap-4 p-5 bg-white rounded-lg shadow-md">
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</div>

<p className="text-lg font-semibold text-primary mb-4">
  Styled with helper classes!
</p>`})]}),e.jsxs("div",{className:"p-4 bg-purple-100 rounded-md border-l-4 border-purple",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"💡 Pro Tip"}),e.jsx("p",{className:"text-sm",children:"All CSS (tokens + helpers) is automatically loaded when you import any component. No extra CSS imports needed!"})]})]})},t={render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h1",{className:"font-serif text-2xl mb-2",children:"Components"}),e.jsx("p",{className:"text-muted mb-6",children:"Available components in Speck DS"}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"Button"}),e.jsx("p",{className:"text-muted mb-4",children:"Versatile button component with multiple variants, sizes, and states."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mb-4 p-4 bg-grey-200 rounded-md",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"destructive",children:"Destructive"})]}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`import { Button } from '@thisispayam/speck-ds';

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
}`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"Dropdown"}),e.jsx("p",{className:"text-muted mb-4",children:"Accessible dropdown/select component with keyboard navigation."}),e.jsx("div",{className:"mb-4 p-4 bg-grey-200 rounded-md",children:e.jsx(B,{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],placeholder:"Select an option..."})}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`import { Dropdown } from '@thisispayam/speck-ds';

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
}`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"Chip"}),e.jsx("p",{className:"text-muted mb-4",children:"Tag component for filters, categories, or selections."}),e.jsxs("div",{className:"flex flex-wrap gap-3 mb-4 p-4 bg-grey-200 rounded-md",children:[e.jsx(i,{variant:"outline",children:"Label"}),e.jsx(i,{variant:"filled",children:"Label"})]}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`import { Chip } from '@thisispayam/speck-ds';

<Chip variant="outline">Label</Chip>
<Chip variant="filled">Label</Chip>

// Props
interface ChipProps {
  variant?: 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  selected?: boolean;
  disabled?: boolean;
  clickable?: boolean;
  onRemove?: () => void;
}`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"TextArea"}),e.jsx("p",{className:"text-muted mb-4",children:"Multi-line text input with label, helper text, and character count."}),e.jsx("div",{className:"mb-4 p-4 bg-grey-200 rounded-md",children:e.jsx(T,{label:"Text area",defaultValue:"Value",helperText:"Instruction text",showCount:!0,maxLength:100})}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`import { TextArea } from '@thisispayam/speck-ds';

<TextArea
  label="Text area"
  helperText="Instruction text"
  showCount
  maxLength={100}
/>

// Props
interface TextAreaProps {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  showCount?: boolean;
  maxLength?: number;
  size?: 'sm' | 'md' | 'lg';
  rows?: number;
}`})]})]})},a={render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h1",{className:"font-serif text-2xl mb-2",children:"Design Tokens"}),e.jsx("p",{className:"text-muted mb-6",children:"CSS variables synced from Figma"}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"Colors"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`/* Purple (Primary) */
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
--color-primary-active: #8B6AD3;`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"Spacing"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 24px;
--spacing-6: 32px;
--spacing-7: 48px;
--spacing-8: 64px;`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"Typography"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`/* Font Families */
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
--leading-reader: 1.75;`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"Border Radius & Shadows"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`/* Border Radius */
--radius-none: 0px;
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-full: 999px;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);`})]})]})},n={render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h1",{className:"font-serif text-2xl mb-2",children:"Helper Classes"}),e.jsx("p",{className:"text-muted mb-6",children:"Tailwind-like utility classes for rapid development"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"card-base",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Text"}),e.jsx("pre",{className:"text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto",children:`.text-xs .text-sm .text-md
.text-lg .text-xl .text-2xl
.font-serif .font-sans .mono
.font-medium .font-semibold .font-bold
.text-primary .text-muted .text-white
.uppercase .lowercase .truncate`})]}),e.jsxs("div",{className:"card-base",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Spacing"}),e.jsx("pre",{className:"text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto",children:`.p-1 to .p-8
.px-* .py-* .pt-* .pb-* .pl-* .pr-*
.m-0 to .m-6 .m-auto
.mx-auto .my-auto
.mt-* .mb-* .ml-* .mr-*
.gap-1 to .gap-6`})]}),e.jsxs("div",{className:"card-base",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Layout"}),e.jsx("pre",{className:"text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto",children:`.flex .flex-col .flex-wrap
.flex-center .flex-1
.items-center .items-start .items-end
.justify-center .justify-between
.grid .grid-cols-2 .grid-cols-3
.col-span-2 .col-span-full`})]}),e.jsxs("div",{className:"card-base",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Visual"}),e.jsx("pre",{className:"text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto",children:`.bg-white .bg-light .bg-dark
.bg-purple .bg-purple-100
.border .border-primary
.rounded .rounded-md .rounded-lg
.shadow-sm .shadow-md .shadow-lg
.opacity-50 .opacity-75`})]}),e.jsxs("div",{className:"card-base",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Sizing"}),e.jsx("pre",{className:"text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto",children:`.w-full .w-1/2 .w-1/3
.max-w-sm .max-w-md .max-w-lg
.h-full .h-screen
.min-h-screen`})]}),e.jsxs("div",{className:"card-base",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Interactive"}),e.jsx("pre",{className:"text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto",children:`.cursor-pointer
.transition .duration-300
.hover\\:bg-light
.hover\\:shadow-lg
.focus\\:ring
.disabled`})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-purple-100 rounded-md border-l-4 border-purple",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Example"}),e.jsx("pre",{className:"text-sm bg-grey-700 text-white p-4 rounded overflow-x-auto",children:`<div className="flex gap-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition">
  <img className="w-16 h-16 rounded-full" src="avatar.jpg" />
  <div className="flex-1">
    <h3 className="font-semibold text-lg">John Doe</h3>
    <p className="text-muted text-sm truncate">Software Engineer</p>
  </div>
</div>`})]})]})},o={render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h1",{className:"font-serif text-2xl mb-2",children:"Figma Integration"}),e.jsx("p",{className:"text-muted mb-6",children:"Keep your design and code in sync"}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"How It Works"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-4 items-start p-4 bg-grey-200 rounded-md",children:[e.jsx("div",{className:"flex-center w-8 h-8 bg-purple-500 text-white rounded-full font-bold",children:"1"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold",children:"Design in Figma"}),e.jsx("p",{className:"text-sm text-muted",children:"Create and update your design tokens as Figma Variables"})]})]}),e.jsxs("div",{className:"flex gap-4 items-start p-4 bg-grey-200 rounded-md",children:[e.jsx("div",{className:"flex-center w-8 h-8 bg-purple-500 text-white rounded-full font-bold",children:"2"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold",children:"Sync Tokens"}),e.jsx("p",{className:"text-sm text-muted",children:"Run the sync script to pull tokens from Figma"})]})]}),e.jsxs("div",{className:"flex gap-4 items-start p-4 bg-grey-200 rounded-md",children:[e.jsx("div",{className:"flex-center w-8 h-8 bg-purple-500 text-white rounded-full font-bold",children:"3"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold",children:"Use in Code"}),e.jsx("p",{className:"text-sm text-muted",children:"Tokens are available as CSS variables and TypeScript exports"})]})]})]})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"Syncing Tokens"}),e.jsx("p",{className:"text-muted mb-3",children:"To sync tokens from Figma, set your API key and run:"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`# Set your Figma API token
export FIGMA_TOKEN=your-figma-token

# Sync tokens from Figma
npm run sync:tokens`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"What Gets Synced"}),e.jsxs("ul",{className:"list-disc list-inside text-muted space-y-2",children:[e.jsx("li",{children:"Color palettes (Purple, Grey)"}),e.jsx("li",{children:"Spacing scale"}),e.jsx("li",{children:"Typography (fonts, sizes)"}),e.jsx("li",{children:"Border radius"}),e.jsx("li",{children:"Shadows"})]})]}),e.jsxs("div",{className:"p-4 bg-purple-100 rounded-md border-l-4 border-purple",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"📁 Figma File"}),e.jsx("p",{className:"text-sm mb-2",children:"The design system is connected to the Speck DS Figma file."}),e.jsx("a",{href:"https://www.figma.com/file/Th7UVyk0UGSWZW1Yx7sRu3/Speck-DS",target:"_blank",rel:"noopener noreferrer",className:"link text-sm",children:"Open in Figma →"})]})]})},l={render:()=>e.jsxs("div",{className:"max-w-2xl",children:[e.jsx("h1",{className:"font-serif text-2xl mb-2",children:"TypeScript Support"}),e.jsx("p",{className:"text-muted mb-6",children:"Full type safety for all components and tokens"}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"Component Types"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`import { 
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
const size: ButtonSize = 'md'; // ✓`})]}),e.jsxs("section",{className:"mb-6",children:[e.jsx("h2",{className:"font-semibold text-lg mb-3 border-b pb-2",children:"Token Types"}),e.jsx("pre",{className:"bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto",children:`import { colors, spacing, typography } from '@thisispayam/speck-ds';

// Access tokens programmatically
const primaryColor = colors.primary[500]; // '#1F035B'
const padding = spacing[4]; // '16px'
const fontFamily = typography.fontFamily.sans;`})]}),e.jsxs("div",{className:"p-4 bg-grey-200 rounded-md",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"IDE Support"}),e.jsx("p",{className:"text-sm text-muted",children:"Full IntelliSense support in VS Code - autocomplete for props, variants, and token values."})]})]})};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">\r
      <h1 className="font-serif text-2xl mb-2">Installation</h1>\r
      <p className="text-muted mb-6">Get started with Speck DS in your React project</p>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">1. Install the Package</h2>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
      {\`npm install github:thisispayam/speck-ds\`}\r
        </pre>\r
        <p className="text-sm text-muted mt-2">Or with yarn:</p>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
      {\`yarn add github:thisispayam/speck-ds\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">2. Import Components</h2>\r
        <p className="text-muted mb-3">\r
          Import any component directly. CSS tokens and helpers are automatically included!\r
        </p>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`import { Button, Dropdown, Chip, TextArea } from '@thisispayam/speck-ds';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Chip variant="outline">Tag</Chip>
      <TextArea label="Notes" placeholder="Enter notes..." />
      <Dropdown 
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
        placeholder="Select..."
      />
    </div>
  );
}\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">3. Use CSS Variables (Optional)</h2>\r
        <p className="text-muted mb-3">\r
          Design tokens are available as CSS variables for custom styling:\r
        </p>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`.my-custom-component {
  background: var(--color-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
  box-shadow: var(--shadow-md);
}\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">4. Use Helper Classes (Optional)</h2>\r
        <p className="text-muted mb-3">\r
          Tailwind-like utility classes are included for rapid prototyping:\r
        </p>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`<div className="flex gap-4 p-5 bg-white rounded-lg shadow-md">
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</div>

<p className="text-lg font-semibold text-primary mb-4">
  Styled with helper classes!
</p>\`}\r
        </pre>\r
      </section>\r
\r
      <div className="p-4 bg-purple-100 rounded-md border-l-4 border-purple">\r
        <h3 className="font-semibold mb-2">💡 Pro Tip</h3>\r
        <p className="text-sm">\r
          All CSS (tokens + helpers) is automatically loaded when you import any component.\r
          No extra CSS imports needed!\r
        </p>\r
      </div>\r
    </div>
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,x,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">\r
      <h1 className="font-serif text-2xl mb-2">Components</h1>\r
      <p className="text-muted mb-6">Available components in Speck DS</p>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Button</h2>\r
        <p className="text-muted mb-4">\r
          Versatile button component with multiple variants, sizes, and states.\r
        </p>\r
        \r
        <div className="flex flex-wrap gap-3 mb-4 p-4 bg-grey-200 rounded-md">\r
          <Button variant="primary">Primary</Button>\r
          <Button variant="secondary">Secondary</Button>\r
          <Button variant="outline">Outline</Button>\r
          <Button variant="ghost">Ghost</Button>\r
          <Button variant="destructive">Destructive</Button>\r
        </div>\r
\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`import { Button } from '@thisispayam/speck-ds';

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
}\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Dropdown</h2>\r
        <p className="text-muted mb-4">\r
          Accessible dropdown/select component with keyboard navigation.\r
        </p>\r
        \r
        <div className="mb-4 p-4 bg-grey-200 rounded-md">\r
          <Dropdown options={[{
          value: '1',
          label: 'Option 1'
        }, {
          value: '2',
          label: 'Option 2'
        }, {
          value: '3',
          label: 'Option 3'
        }]} placeholder="Select an option..." />\r
        </div>\r
\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`import { Dropdown } from '@thisispayam/speck-ds';

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
}\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Chip</h2>\r
        <p className="text-muted mb-4">\r
          Tag component for filters, categories, or selections.\r
        </p>\r
        \r
        <div className="flex flex-wrap gap-3 mb-4 p-4 bg-grey-200 rounded-md">\r
          <Chip variant="outline">Label</Chip>\r
          <Chip variant="filled">Label</Chip>\r
        </div>\r
\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`import { Chip } from '@thisispayam/speck-ds';

<Chip variant="outline">Label</Chip>
<Chip variant="filled">Label</Chip>

// Props
interface ChipProps {
  variant?: 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  selected?: boolean;
  disabled?: boolean;
  clickable?: boolean;
  onRemove?: () => void;
}\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">TextArea</h2>\r
        <p className="text-muted mb-4">\r
          Multi-line text input with label, helper text, and character count.\r
        </p>\r
        \r
        <div className="mb-4 p-4 bg-grey-200 rounded-md">\r
          <TextArea label="Text area" defaultValue="Value" helperText="Instruction text" showCount maxLength={100} />\r
        </div>\r
\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`import { TextArea } from '@thisispayam/speck-ds';

<TextArea
  label="Text area"
  helperText="Instruction text"
  showCount
  maxLength={100}
/>

// Props
interface TextAreaProps {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  showCount?: boolean;
  maxLength?: number;
  size?: 'sm' | 'md' | 'lg';
  rows?: number;
}\`}\r
        </pre>\r
      </section>\r
    </div>
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">\r
      <h1 className="font-serif text-2xl mb-2">Design Tokens</h1>\r
      <p className="text-muted mb-6">CSS variables synced from Figma</p>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Colors</h2>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`/* Purple (Primary) */
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
--color-primary-active: #8B6AD3;\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Spacing</h2>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 24px;
--spacing-6: 32px;
--spacing-7: 48px;
--spacing-8: 64px;\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Typography</h2>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`/* Font Families */
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
--leading-reader: 1.75;\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Border Radius & Shadows</h2>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`/* Border Radius */
--radius-none: 0px;
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-full: 999px;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);\`}\r
        </pre>\r
      </section>\r
    </div>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,N,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">\r
      <h1 className="font-serif text-2xl mb-2">Helper Classes</h1>\r
      <p className="text-muted mb-6">Tailwind-like utility classes for rapid development</p>\r
\r
      <div className="grid grid-cols-2 gap-4">\r
        <div className="card-base">\r
          <h3 className="font-semibold mb-3">Text</h3>\r
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">\r
          {\`.text-xs .text-sm .text-md
.text-lg .text-xl .text-2xl
.font-serif .font-sans .mono
.font-medium .font-semibold .font-bold
.text-primary .text-muted .text-white
.uppercase .lowercase .truncate\`}\r
          </pre>\r
        </div>\r
\r
        <div className="card-base">\r
          <h3 className="font-semibold mb-3">Spacing</h3>\r
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">\r
          {\`.p-1 to .p-8
.px-* .py-* .pt-* .pb-* .pl-* .pr-*
.m-0 to .m-6 .m-auto
.mx-auto .my-auto
.mt-* .mb-* .ml-* .mr-*
.gap-1 to .gap-6\`}\r
          </pre>\r
        </div>\r
\r
        <div className="card-base">\r
          <h3 className="font-semibold mb-3">Layout</h3>\r
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">\r
          {\`.flex .flex-col .flex-wrap
.flex-center .flex-1
.items-center .items-start .items-end
.justify-center .justify-between
.grid .grid-cols-2 .grid-cols-3
.col-span-2 .col-span-full\`}\r
          </pre>\r
        </div>\r
\r
        <div className="card-base">\r
          <h3 className="font-semibold mb-3">Visual</h3>\r
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">\r
          {\`.bg-white .bg-light .bg-dark
.bg-purple .bg-purple-100
.border .border-primary
.rounded .rounded-md .rounded-lg
.shadow-sm .shadow-md .shadow-lg
.opacity-50 .opacity-75\`}\r
          </pre>\r
        </div>\r
\r
        <div className="card-base">\r
          <h3 className="font-semibold mb-3">Sizing</h3>\r
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">\r
          {\`.w-full .w-1/2 .w-1/3
.max-w-sm .max-w-md .max-w-lg
.h-full .h-screen
.min-h-screen\`}\r
          </pre>\r
        </div>\r
\r
        <div className="card-base">\r
          <h3 className="font-semibold mb-3">Interactive</h3>\r
          <pre className="text-xs bg-grey-700 text-white p-3 rounded overflow-x-auto">\r
          {\`.cursor-pointer
.transition .duration-300
.hover\\\\:bg-light
.hover\\\\:shadow-lg
.focus\\\\:ring
.disabled\`}\r
          </pre>\r
        </div>\r
      </div>\r
\r
      <div className="mt-6 p-4 bg-purple-100 rounded-md border-l-4 border-purple">\r
        <h3 className="font-semibold mb-2">Example</h3>\r
        <pre className="text-sm bg-grey-700 text-white p-4 rounded overflow-x-auto">\r
        {\`<div className="flex gap-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition">
  <img className="w-16 h-16 rounded-full" src="avatar.jpg" />
  <div className="flex-1">
    <h3 className="font-semibold text-lg">John Doe</h3>
    <p className="text-muted text-sm truncate">Software Engineer</p>
  </div>
</div>\`}\r
        </pre>\r
      </div>\r
    </div>
}`,...(v=(N=n.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var y,w,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">\r
      <h1 className="font-serif text-2xl mb-2">Figma Integration</h1>\r
      <p className="text-muted mb-6">Keep your design and code in sync</p>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">How It Works</h2>\r
        <div className="flex flex-col gap-4">\r
          <div className="flex gap-4 items-start p-4 bg-grey-200 rounded-md">\r
            <div className="flex-center w-8 h-8 bg-purple-500 text-white rounded-full font-bold">1</div>\r
            <div>\r
              <h4 className="font-semibold">Design in Figma</h4>\r
              <p className="text-sm text-muted">Create and update your design tokens as Figma Variables</p>\r
            </div>\r
          </div>\r
          <div className="flex gap-4 items-start p-4 bg-grey-200 rounded-md">\r
            <div className="flex-center w-8 h-8 bg-purple-500 text-white rounded-full font-bold">2</div>\r
            <div>\r
              <h4 className="font-semibold">Sync Tokens</h4>\r
              <p className="text-sm text-muted">Run the sync script to pull tokens from Figma</p>\r
            </div>\r
          </div>\r
          <div className="flex gap-4 items-start p-4 bg-grey-200 rounded-md">\r
            <div className="flex-center w-8 h-8 bg-purple-500 text-white rounded-full font-bold">3</div>\r
            <div>\r
              <h4 className="font-semibold">Use in Code</h4>\r
              <p className="text-sm text-muted">Tokens are available as CSS variables and TypeScript exports</p>\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Syncing Tokens</h2>\r
        <p className="text-muted mb-3">\r
          To sync tokens from Figma, set your API key and run:\r
        </p>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`# Set your Figma API token
export FIGMA_TOKEN=your-figma-token

# Sync tokens from Figma
npm run sync:tokens\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">What Gets Synced</h2>\r
        <ul className="list-disc list-inside text-muted space-y-2">\r
          <li>Color palettes (Purple, Grey)</li>\r
          <li>Spacing scale</li>\r
          <li>Typography (fonts, sizes)</li>\r
          <li>Border radius</li>\r
          <li>Shadows</li>\r
        </ul>\r
      </section>\r
\r
      <div className="p-4 bg-purple-100 rounded-md border-l-4 border-purple">\r
        <h3 className="font-semibold mb-2">📁 Figma File</h3>\r
        <p className="text-sm mb-2">\r
          The design system is connected to the Speck DS Figma file.\r
        </p>\r
        <a href="https://www.figma.com/file/Th7UVyk0UGSWZW1Yx7sRu3/Speck-DS" target="_blank" rel="noopener noreferrer" className="link text-sm">\r
          Open in Figma →\r
        </a>\r
      </div>\r
    </div>
}`,...(j=(w=o.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var S,C,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">\r
      <h1 className="font-serif text-2xl mb-2">TypeScript Support</h1>\r
      <p className="text-muted mb-6">Full type safety for all components and tokens</p>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Component Types</h2>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`import { 
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
const size: ButtonSize = 'md'; // ✓\`}\r
        </pre>\r
      </section>\r
\r
      <section className="mb-6">\r
        <h2 className="font-semibold text-lg mb-3 border-b pb-2">Token Types</h2>\r
        <pre className="bg-grey-700 text-white p-4 rounded-md text-sm overflow-x-auto">\r
        {\`import { colors, spacing, typography } from '@thisispayam/speck-ds';

// Access tokens programmatically
const primaryColor = colors.primary[500]; // '#1F035B'
const padding = spacing[4]; // '16px'
const fontFamily = typography.fontFamily.sans;\`}\r
        </pre>\r
      </section>\r
\r
      <div className="p-4 bg-grey-200 rounded-md">\r
        <h3 className="font-semibold mb-2">IDE Support</h3>\r
        <p className="text-sm text-muted">\r
          Full IntelliSense support in VS Code - autocomplete for props, \r
          variants, and token values.\r
        </p>\r
      </div>\r
    </div>
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const G=["Installation","Components","Tokens","HelperClasses","FigmaIntegration","TypeScript"];export{t as Components,o as FigmaIntegration,n as HelperClasses,s as Installation,a as Tokens,l as TypeScript,G as __namedExportsOrder,L as default};
