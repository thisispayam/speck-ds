import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  loader: {
    '.css': 'copy',
  },
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
  onSuccess: async () => {
    // Copy CSS files to dist
    const fs = await import('fs');
    const path = await import('path');
    
    const stylesDir = path.join('dist', 'styles');
    if (!fs.existsSync(stylesDir)) {
      fs.mkdirSync(stylesDir, { recursive: true });
    }
    
    // Copy tokens.css
    fs.copyFileSync(
      path.join('src', 'styles', 'tokens.css'),
      path.join(stylesDir, 'tokens.css')
    );
    
    // Copy component CSS files
    const componentsDir = path.join('src', 'components');
    const distComponentsDir = path.join('dist', 'components');
    
    if (!fs.existsSync(distComponentsDir)) {
      fs.mkdirSync(distComponentsDir, { recursive: true });
    }
    
    const copyComponentCss = (componentName: string) => {
      const srcCss = path.join(componentsDir, componentName, `${componentName}.css`);
      const destDir = path.join(distComponentsDir, componentName);
      
      if (fs.existsSync(srcCss)) {
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        fs.copyFileSync(srcCss, path.join(destDir, `${componentName}.css`));
      }
    };
    
    copyComponentCss('Button');
    copyComponentCss('Dropdown');
    
    console.log('✅ CSS files copied to dist');
  },
});
