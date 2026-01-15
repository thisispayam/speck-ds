# Speck DS

A tokenized React design system connected to Figma. Design changes in Figma are automatically synced to code tokens.

## Features

- 🎨 **Figma-Connected Tokens** - Colors, typography, spacing synced from Figma
- 📦 **React Components** - Button, Dropdown (more coming soon)
- 📚 **Storybook** - Interactive component documentation
- 🔧 **TypeScript** - Full type safety
- 📱 **Installable Package** - Use in any React project

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Sync tokens from Figma (requires FIGMA_API_KEY in .env)
npm run sync:tokens

# Start Storybook development server
npm run dev
```

### Using in Your Project

```bash
# Install from GitHub
npm install github:your-username/design-system

# Or with a specific tag
npm install github:your-username/design-system#v1.0.0
```

```tsx
import { Button, Dropdown } from '@your-org/design-system';
import '@your-org/design-system/styles';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Dropdown 
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
        placeholder="Select an option"
      />
    </div>
  );
}
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Storybook development server |
| `npm run build` | Build the package for distribution |
| `npm run build:storybook` | Build static Storybook site |
| `npm run sync:tokens` | Fetch latest tokens from Figma |

## Syncing Tokens from Figma

1. Create a `.env` file with your Figma API key:
   ```
   FIGMA_API_KEY=your_figma_api_key
   ```

2. Run the sync script:
   ```bash
   npm run sync:tokens
   ```

This will:
- Fetch colors, styles, and variables from your Figma file
- Generate `src/styles/tokens.css` with CSS variables
- Generate `src/tokens/index.ts` with TypeScript tokens

## Components

### Button

```tsx
import { Button } from '@your-org/design-system';

<Button variant="primary" size="md">
  Click me
</Button>

<Button variant="outline" loading>
  Loading...
</Button>

<Button variant="destructive" leftIcon={<TrashIcon />}>
  Delete
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'`
- `size`: `'sm' | 'md' | 'lg'`
- `loading`: `boolean`
- `disabled`: `boolean`
- `fullWidth`: `boolean`
- `leftIcon`: `ReactNode`
- `rightIcon`: `ReactNode`

### Dropdown

```tsx
import { Dropdown } from '@your-org/design-system';

const [value, setValue] = useState('');

<Dropdown
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
  ]}
  value={value}
  onChange={setValue}
  placeholder="Select a country"
  label="Country"
/>
```

**Props:**
- `options`: `Array<{ value: string, label: string, disabled?: boolean, icon?: ReactNode }>`
- `value`: `string`
- `onChange`: `(value: string, option: DropdownOption) => void`
- `placeholder`: `string`
- `size`: `'sm' | 'md' | 'lg'`
- `label`: `string`
- `error`: `boolean`
- `errorMessage`: `string`
- `disabled`: `boolean`
- `fullWidth`: `boolean`

## Design Tokens

Tokens are available as CSS variables and TypeScript exports:

### CSS Variables

```css
:root {
  --color-primary-500: #a855f7;
  --color-gray-100: #e6e6e6;
  --spacing-4: 1rem;
  --radius-lg: 0.5rem;
  /* ... */
}
```

### TypeScript

```tsx
import { colors, spacing, typography } from '@your-org/design-system';

const primaryColor = colors.primary['500']; // '#a855f7'
const spacing4 = spacing['4']; // '1rem'
```

## Publishing

### To GitHub Packages

1. Update `package.json`:
   ```json
   {
     "name": "@your-org/design-system",
     "repository": {
       "type": "git",
       "url": "https://github.com/your-username/design-system.git"
     }
   }
   ```

2. Create `.npmrc`:
   ```
   @your-org:registry=https://npm.pkg.github.com
   ```

3. Publish:
   ```bash
   npm publish
   ```

### To npm

```bash
npm publish --access public
```

## Project Structure

```
├── .storybook/          # Storybook configuration
├── scripts/
│   └── fetch-figma-tokens.js  # Figma sync script
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── Dropdown/
│   │       └── ...
│   ├── styles/
│   │   └── tokens.css   # Generated CSS variables
│   ├── tokens/
│   │   └── index.ts     # Generated TS tokens
│   └── index.ts         # Package entry point
├── .env                 # FIGMA_API_KEY (gitignored)
├── package.json
├── tsconfig.json
└── tsup.config.ts       # Build configuration
```

## License

MIT
