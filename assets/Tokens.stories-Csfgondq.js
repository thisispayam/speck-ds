import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               *//* empty css                 */const D={title:"Foundation/Tokens",parameters:{layout:"padded"}},r=({name:s,variable:i,value:P})=>e.jsxs("div",{className:"swatch",children:[e.jsx("div",{className:`swatch-color ${i.replace("--color-","bg-")}`}),e.jsxs("div",{className:"swatch-info",children:[e.jsx("span",{className:"swatch-name",children:s}),e.jsx("span",{className:"swatch-var",children:i}),e.jsx("span",{className:"swatch-value",children:P})]})]}),a=({name:s,variable:i})=>e.jsxs("div",{className:"swatch",children:[e.jsx("div",{className:"swatch-color",style:{background:`var(${i})`}}),e.jsxs("div",{className:"swatch-info",children:[e.jsx("span",{className:"swatch-name",children:s}),e.jsx("span",{className:"swatch-var",children:i}),e.jsxs("span",{className:"swatch-value",children:["var(",i,")"]})]})]}),c={render:()=>e.jsxs("div",{className:"showcase",children:[e.jsxs("header",{className:"showcase-header",children:[e.jsx("h1",{className:"showcase-title",children:"Color Palette"}),e.jsx("p",{className:"showcase-description",children:"Speck DS color tokens from Figma"})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{className:"section-title",children:"Purple"}),e.jsxs("div",{className:"grid grid-auto",children:[e.jsx(r,{name:"Purple 100",variable:"--color-purple-100",value:"#ECE6F8"}),e.jsx(r,{name:"Purple 200",variable:"--color-purple-200",value:"#C5B4E9"}),e.jsx(r,{name:"Purple 300",variable:"--color-purple-300",value:"#8B6AD3"}),e.jsx(r,{name:"Purple 400",variable:"--color-purple-400",value:"#3E06B6"}),e.jsx(r,{name:"Purple 500",variable:"--color-purple-500",value:"#1F035B"})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{className:"section-title",children:"Grey"}),e.jsxs("div",{className:"grid grid-auto",children:[e.jsx(r,{name:"Grey 100",variable:"--color-grey-100",value:"#FFFFFF"}),e.jsx(r,{name:"Grey 200",variable:"--color-grey-200",value:"#E5E5E5"}),e.jsx(r,{name:"Grey 300",variable:"--color-grey-300",value:"#C4C4C4"}),e.jsx(r,{name:"Grey 400",variable:"--color-grey-400",value:"#8D8D8D"}),e.jsx(r,{name:"Grey 500",variable:"--color-grey-500",value:"#656565"}),e.jsx(r,{name:"Grey 600",variable:"--color-grey-600",value:"#1A1A1A"}),e.jsx(r,{name:"Grey 700",variable:"--color-grey-700",value:"#000000"})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{className:"section-title",children:"Primary (Semantic)"}),e.jsxs("div",{className:"grid grid-auto",children:[e.jsx(r,{name:"Primary 500",variable:"--color-primary-500",value:"#3E06B6"}),e.jsx(r,{name:"Primary Hover",variable:"--color-primary-hover",value:"#8B6AD3"}),e.jsx(r,{name:"Primary Active",variable:"--color-primary-active",value:"#C5B4E9"})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{className:"section-title",children:"Semantic Colors - Light Mode"}),e.jsxs("p",{style:{marginBottom:"16px",color:"#666",fontSize:"14px"},children:["These tokens automatically switch values in dark mode. Use ",e.jsx("code",{children:'data-theme="dark"'})," or ",e.jsx("code",{children:".dark-theme"}),"."]}),e.jsxs("div",{className:"grid grid-auto",children:[e.jsx(a,{name:"Background Primary",variable:"--color-background-primary"}),e.jsx(a,{name:"Background Secondary",variable:"--color-background-secondary"}),e.jsx(a,{name:"Background Tertiary",variable:"--color-background-tertiary"}),e.jsx(a,{name:"Foreground Primary",variable:"--color-foreground-primary"}),e.jsx(a,{name:"Foreground Secondary",variable:"--color-foreground-secondary"}),e.jsx(a,{name:"Foreground Tertiary",variable:"--color-foreground-tertiary"}),e.jsx(a,{name:"Border Subtle",variable:"--color-border-subtle"}),e.jsx(a,{name:"Border Strong",variable:"--color-border-strong"}),e.jsx(a,{name:"Accent Primary",variable:"--color-accent-primary"}),e.jsx(a,{name:"Accent Hover",variable:"--color-accent-primary-hover"}),e.jsx(a,{name:"Accent Active",variable:"--color-accent-primary-active"})]})]}),e.jsxs("section",{className:"section","data-theme":"dark",style:{background:"var(--color-background-primary)",color:"var(--color-foreground-primary)",padding:"24px",borderRadius:"8px"},children:[e.jsx("h2",{className:"section-title",style:{color:"inherit"},children:"Semantic Colors - Dark Mode"}),e.jsx("p",{style:{marginBottom:"16px",color:"var(--color-foreground-tertiary)",fontSize:"14px"},children:"Dark mode values for the same semantic tokens."}),e.jsxs("div",{className:"grid grid-auto",children:[e.jsx(a,{name:"Background Primary",variable:"--color-background-primary"}),e.jsx(a,{name:"Background Secondary",variable:"--color-background-secondary"}),e.jsx(a,{name:"Background Tertiary",variable:"--color-background-tertiary"}),e.jsx(a,{name:"Foreground Primary",variable:"--color-foreground-primary"}),e.jsx(a,{name:"Foreground Secondary",variable:"--color-foreground-secondary"}),e.jsx(a,{name:"Foreground Tertiary",variable:"--color-foreground-tertiary"}),e.jsx(a,{name:"Border Subtle",variable:"--color-border-subtle"}),e.jsx(a,{name:"Border Strong",variable:"--color-border-strong"}),e.jsx(a,{name:"Accent Primary",variable:"--color-accent-primary"}),e.jsx(a,{name:"Accent Hover",variable:"--color-accent-primary-hover"}),e.jsx(a,{name:"Accent Active",variable:"--color-accent-primary-active"})]})]})]})},l={render:()=>e.jsxs("div",{className:"showcase",children:[e.jsxs("header",{className:"showcase-header",children:[e.jsx("h1",{className:"showcase-title",children:"Spacing Scale"}),e.jsx("p",{className:"showcase-description",children:"Consistent spacing tokens for margins, padding, and gaps"})]}),e.jsx("div",{className:"flex flex-col gap-4",children:[{key:"1",value:"4px"},{key:"2",value:"8px"},{key:"3",value:"12px"},{key:"4",value:"16px"},{key:"5",value:"24px"},{key:"6",value:"32px"},{key:"7",value:"48px"},{key:"8",value:"64px"}].map(({key:s,value:i})=>e.jsxs("div",{className:"spacing-row",children:[e.jsxs("span",{className:"spacing-label",children:["--spacing-",s]}),e.jsx("span",{className:"spacing-value",children:i}),e.jsx("div",{className:`spacing-bar spacing-${s}-bar`})]},s))})]})},d={render:()=>e.jsxs("div",{className:"showcase",children:[e.jsxs("header",{className:"showcase-header",children:[e.jsx("h1",{className:"showcase-title",children:"Border Radius"}),e.jsx("p",{className:"showcase-description",children:"Corner radius tokens for UI elements"})]}),e.jsx("div",{className:"flex flex-wrap gap-6",children:[{name:"none",value:"0px"},{name:"sm",value:"8px"},{name:"md",value:"16px"},{name:"lg",value:"24px"},{name:"full",value:"999px"}].map(({name:s,value:i})=>e.jsxs("div",{className:"radius-item",children:[e.jsx("div",{className:`radius-box radius-${s}`}),e.jsxs("div",{className:"radius-name",children:["radius-",s]}),e.jsx("div",{className:"radius-value",children:i})]},s))})]})},o={render:()=>e.jsxs("div",{className:"showcase",children:[e.jsxs("header",{className:"showcase-header",children:[e.jsx("h1",{className:"showcase-title",children:"Typography"}),e.jsx("p",{className:"showcase-description",children:"Font families, sizes, weights, and line heights"})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{className:"section-title",children:"Font Families"}),e.jsxs("div",{className:"font-sample",children:[e.jsx("div",{className:"font-var",children:"--font-serif"}),e.jsx("div",{className:"font-serif-demo",children:"Noe Display Heading"})]}),e.jsxs("div",{className:"font-sample",children:[e.jsx("div",{className:"font-var",children:"--font-sans"}),e.jsx("div",{className:"font-sans-demo",children:"Avenir Body Text"})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{className:"section-title",children:"Font Sizes"}),e.jsx("div",{className:"flex flex-col gap-4",children:[{name:"xs",value:"10px"},{name:"sm",value:"14px"},{name:"md",value:"16px"},{name:"lg",value:"20px"},{name:"xl",value:"24px"},{name:"2xl",value:"36px"}].map(({name:s,value:i})=>e.jsxs("div",{className:"size-row",children:[e.jsxs("span",{className:"size-label",children:["--text-",s]}),e.jsx("span",{className:"size-value",children:i}),e.jsx("span",{className:`text-${s}`,children:"The quick brown fox"})]},s))})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{className:"section-title",children:"Font Weights"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"weight-sample font-400",children:[e.jsx("span",{className:"weight-label",children:"400"}),"Regular weight text"]}),e.jsxs("div",{className:"weight-sample font-500",children:[e.jsx("span",{className:"weight-label",children:"500"}),"Medium weight text"]}),e.jsxs("div",{className:"weight-sample font-600",children:[e.jsx("span",{className:"weight-label",children:"600"}),"Semibold weight text"]}),e.jsxs("div",{className:"weight-sample font-700",children:[e.jsx("span",{className:"weight-label",children:"700"}),"Bold weight text"]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{className:"section-title",children:"Line Heights"}),e.jsxs("div",{className:"grid grid-2 gap-5",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"font-var mb-2",children:"--leading-tight (1.15)"}),e.jsx("div",{className:"text-muted text-sm mb-3",children:"Headings"}),e.jsx("p",{className:"text-sm leading-tight m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"font-var mb-2",children:"--leading-standard (1.35)"}),e.jsx("div",{className:"text-muted text-sm mb-3",children:"UI text"}),e.jsx("p",{className:"text-sm leading-standard m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"font-var mb-2",children:"--leading-relaxed (1.6)"}),e.jsx("div",{className:"text-muted text-sm mb-3",children:"Body copy"}),e.jsx("p",{className:"text-sm leading-relaxed m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"font-var mb-2",children:"--leading-reader (1.75)"}),e.jsx("div",{className:"text-muted text-sm mb-3",children:"Long-form reading"}),e.jsx("p",{className:"text-sm leading-reader m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."})]})]})]})]})},n={render:()=>e.jsxs("div",{className:"showcase",children:[e.jsxs("header",{className:"showcase-header",children:[e.jsx("h1",{className:"showcase-title",children:"Shadows"}),e.jsx("p",{className:"showcase-description",children:"Elevation and depth tokens"})]}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsxs("div",{className:"shadow-item",children:[e.jsx("div",{className:"shadow-box shadow-sm",children:"Content"}),e.jsx("div",{className:"shadow-name",children:"shadow-sm"})]}),e.jsxs("div",{className:"shadow-item",children:[e.jsx("div",{className:"shadow-box shadow-md",children:"Content"}),e.jsx("div",{className:"shadow-name",children:"shadow-md"})]}),e.jsxs("div",{className:"shadow-item",children:[e.jsx("div",{className:"shadow-box shadow-lg",children:"Content"}),e.jsx("div",{className:"shadow-name",children:"shadow-lg"})]}),e.jsxs("div",{className:"shadow-item",children:[e.jsx("div",{className:"shadow-box shadow-xl",children:"Content"}),e.jsx("div",{className:"shadow-name",children:"shadow-xl"})]})]})]})},t={render:()=>e.jsxs("div",{className:"showcase",children:[e.jsxs("header",{className:"showcase-header",children:[e.jsx("h1",{className:"showcase-title",children:"Speck DS Tokens"}),e.jsx("p",{className:"showcase-description",children:"Complete design token reference from Figma"})]}),e.jsxs("div",{className:"grid grid-auto gap-5 mb-5",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{className:"section-subtitle",children:"Colors"}),e.jsxs("div",{className:"flex gap-1 mb-2",children:[e.jsx("div",{className:"swatch-mini bg-purple-100"}),e.jsx("div",{className:"swatch-mini bg-purple-200"}),e.jsx("div",{className:"swatch-mini bg-purple-300"}),e.jsx("div",{className:"swatch-mini bg-purple-400"}),e.jsx("div",{className:"swatch-mini bg-purple-500"})]}),e.jsx("div",{className:"text-muted text-sm",children:"Purple: 5 shades"}),e.jsx("div",{className:"text-muted text-sm",children:"Grey: 7 shades"})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{className:"section-subtitle",children:"Spacing"}),e.jsxs("div",{className:"flex gap-1 items-end mb-2",children:[e.jsx("div",{className:"w-6 spacing-1-height bg-purple-400 rounded-xs"}),e.jsx("div",{className:"w-6 spacing-2-height bg-purple-400 rounded-xs"}),e.jsx("div",{className:"w-6 spacing-3-height bg-purple-400 rounded-xs"}),e.jsx("div",{className:"w-6 spacing-4-height bg-purple-400 rounded-xs"}),e.jsx("div",{className:"w-6 spacing-5-height bg-purple-400 rounded-xs"})]}),e.jsx("div",{className:"text-muted text-sm",children:"4px to 64px"})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{className:"section-subtitle",children:"Radius"}),e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsx("div",{className:"w-6 h-6 bg-purple-500 radius-none"}),e.jsx("div",{className:"w-6 h-6 bg-purple-500 radius-sm"}),e.jsx("div",{className:"w-6 h-6 bg-purple-500 radius-md"}),e.jsx("div",{className:"w-6 h-6 bg-purple-500 radius-lg"}),e.jsx("div",{className:"w-6 h-6 bg-purple-500 radius-full"})]}),e.jsx("div",{className:"text-muted text-sm",children:"0px to 999px"})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{className:"section-subtitle",children:"Typography"}),e.jsx("div",{className:"font-serif text-lg mb-2",children:"Noe Display"}),e.jsx("div",{className:"font-sans text-sm mb-2",children:"Avenir"}),e.jsx("div",{className:"text-muted text-sm",children:"6 sizes, 4 weights"})]})]}),e.jsxs("div",{className:"card card-purple",children:[e.jsx("h3",{className:"section-subtitle",children:"Usage"}),e.jsx("code",{className:"code-block",children:`.button {
  background: var(--color-primary-500);
  padding: var(--spacing-3) var(--spacing-5);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
}`})]})]})};var m,h,v;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="showcase">\r
      <header className="showcase-header">\r
        <h1 className="showcase-title">Color Palette</h1>\r
        <p className="showcase-description">Speck DS color tokens from Figma</p>\r
      </header>\r
\r
      <section className="section">\r
        <h2 className="section-title">Purple</h2>\r
        <div className="grid grid-auto">\r
          <ColorSwatch name="Purple 100" variable="--color-purple-100" value="#ECE6F8" />\r
          <ColorSwatch name="Purple 200" variable="--color-purple-200" value="#C5B4E9" />\r
          <ColorSwatch name="Purple 300" variable="--color-purple-300" value="#8B6AD3" />\r
          <ColorSwatch name="Purple 400" variable="--color-purple-400" value="#3E06B6" />\r
          <ColorSwatch name="Purple 500" variable="--color-purple-500" value="#1F035B" />\r
        </div>\r
      </section>\r
\r
      <section className="section">\r
        <h2 className="section-title">Grey</h2>\r
        <div className="grid grid-auto">\r
          <ColorSwatch name="Grey 100" variable="--color-grey-100" value="#FFFFFF" />\r
          <ColorSwatch name="Grey 200" variable="--color-grey-200" value="#E5E5E5" />\r
          <ColorSwatch name="Grey 300" variable="--color-grey-300" value="#C4C4C4" />\r
          <ColorSwatch name="Grey 400" variable="--color-grey-400" value="#8D8D8D" />\r
          <ColorSwatch name="Grey 500" variable="--color-grey-500" value="#656565" />\r
          <ColorSwatch name="Grey 600" variable="--color-grey-600" value="#1A1A1A" />\r
          <ColorSwatch name="Grey 700" variable="--color-grey-700" value="#000000" />\r
        </div>\r
      </section>\r
\r
      <section className="section">\r
        <h2 className="section-title">Primary (Semantic)</h2>\r
        <div className="grid grid-auto">\r
          <ColorSwatch name="Primary 500" variable="--color-primary-500" value="#3E06B6" />\r
          <ColorSwatch name="Primary Hover" variable="--color-primary-hover" value="#8B6AD3" />\r
          <ColorSwatch name="Primary Active" variable="--color-primary-active" value="#C5B4E9" />\r
        </div>\r
      </section>\r
\r
      <section className="section">\r
        <h2 className="section-title">Semantic Colors - Light Mode</h2>\r
        <p style={{
        marginBottom: '16px',
        color: '#666',
        fontSize: '14px'
      }}>\r
          These tokens automatically switch values in dark mode. Use <code>data-theme="dark"</code> or <code>.dark-theme</code>.\r
        </p>\r
        <div className="grid grid-auto">\r
          <SemanticSwatch name="Background Primary" variable="--color-background-primary" />\r
          <SemanticSwatch name="Background Secondary" variable="--color-background-secondary" />\r
          <SemanticSwatch name="Background Tertiary" variable="--color-background-tertiary" />\r
          <SemanticSwatch name="Foreground Primary" variable="--color-foreground-primary" />\r
          <SemanticSwatch name="Foreground Secondary" variable="--color-foreground-secondary" />\r
          <SemanticSwatch name="Foreground Tertiary" variable="--color-foreground-tertiary" />\r
          <SemanticSwatch name="Border Subtle" variable="--color-border-subtle" />\r
          <SemanticSwatch name="Border Strong" variable="--color-border-strong" />\r
          <SemanticSwatch name="Accent Primary" variable="--color-accent-primary" />\r
          <SemanticSwatch name="Accent Hover" variable="--color-accent-primary-hover" />\r
          <SemanticSwatch name="Accent Active" variable="--color-accent-primary-active" />\r
        </div>\r
      </section>\r
\r
      <section className="section" data-theme="dark" style={{
      background: 'var(--color-background-primary)',
      color: 'var(--color-foreground-primary)',
      padding: '24px',
      borderRadius: '8px'
    }}>\r
        <h2 className="section-title" style={{
        color: 'inherit'
      }}>Semantic Colors - Dark Mode</h2>\r
        <p style={{
        marginBottom: '16px',
        color: 'var(--color-foreground-tertiary)',
        fontSize: '14px'
      }}>\r
          Dark mode values for the same semantic tokens.\r
        </p>\r
        <div className="grid grid-auto">\r
          <SemanticSwatch name="Background Primary" variable="--color-background-primary" />\r
          <SemanticSwatch name="Background Secondary" variable="--color-background-secondary" />\r
          <SemanticSwatch name="Background Tertiary" variable="--color-background-tertiary" />\r
          <SemanticSwatch name="Foreground Primary" variable="--color-foreground-primary" />\r
          <SemanticSwatch name="Foreground Secondary" variable="--color-foreground-secondary" />\r
          <SemanticSwatch name="Foreground Tertiary" variable="--color-foreground-tertiary" />\r
          <SemanticSwatch name="Border Subtle" variable="--color-border-subtle" />\r
          <SemanticSwatch name="Border Strong" variable="--color-border-strong" />\r
          <SemanticSwatch name="Accent Primary" variable="--color-accent-primary" />\r
          <SemanticSwatch name="Accent Hover" variable="--color-accent-primary-hover" />\r
          <SemanticSwatch name="Accent Active" variable="--color-accent-primary-active" />\r
        </div>\r
      </section>\r
    </div>
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var p,x,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="showcase">\r
      <header className="showcase-header">\r
        <h1 className="showcase-title">Spacing Scale</h1>\r
        <p className="showcase-description">Consistent spacing tokens for margins, padding, and gaps</p>\r
      </header>\r
\r
      <div className="flex flex-col gap-4">\r
        {[{
        key: '1',
        value: '4px'
      }, {
        key: '2',
        value: '8px'
      }, {
        key: '3',
        value: '12px'
      }, {
        key: '4',
        value: '16px'
      }, {
        key: '5',
        value: '24px'
      }, {
        key: '6',
        value: '32px'
      }, {
        key: '7',
        value: '48px'
      }, {
        key: '8',
        value: '64px'
      }].map(({
        key,
        value
      }) => <div key={key} className="spacing-row">\r
            <span className="spacing-label">--spacing-{key}</span>\r
            <span className="spacing-value">{value}</span>\r
            <div className={\`spacing-bar spacing-\${key}-bar\`} />\r
          </div>)}\r
      </div>\r
    </div>
}`,...(u=(x=l.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,N,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="showcase">\r
      <header className="showcase-header">\r
        <h1 className="showcase-title">Border Radius</h1>\r
        <p className="showcase-description">Corner radius tokens for UI elements</p>\r
      </header>\r
\r
      <div className="flex flex-wrap gap-6">\r
        {[{
        name: 'none',
        value: '0px'
      }, {
        name: 'sm',
        value: '8px'
      }, {
        name: 'md',
        value: '16px'
      }, {
        name: 'lg',
        value: '24px'
      }, {
        name: 'full',
        value: '999px'
      }].map(({
        name,
        value
      }) => <div key={name} className="radius-item">\r
            <div className={\`radius-box radius-\${name}\`} />\r
            <div className="radius-name">radius-{name}</div>\r
            <div className="radius-value">{value}</div>\r
          </div>)}\r
      </div>\r
    </div>
}`,...(b=(N=d.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var w,j,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="showcase">\r
      <header className="showcase-header">\r
        <h1 className="showcase-title">Typography</h1>\r
        <p className="showcase-description">Font families, sizes, weights, and line heights</p>\r
      </header>\r
\r
      <section className="section">\r
        <h2 className="section-title">Font Families</h2>\r
        <div className="font-sample">\r
          <div className="font-var">--font-serif</div>\r
          <div className="font-serif-demo">Noe Display Heading</div>\r
        </div>\r
        <div className="font-sample">\r
          <div className="font-var">--font-sans</div>\r
          <div className="font-sans-demo">Avenir Body Text</div>\r
        </div>\r
      </section>\r
\r
      <section className="section">\r
        <h2 className="section-title">Font Sizes</h2>\r
        <div className="flex flex-col gap-4">\r
          {[{
          name: 'xs',
          value: '10px'
        }, {
          name: 'sm',
          value: '14px'
        }, {
          name: 'md',
          value: '16px'
        }, {
          name: 'lg',
          value: '20px'
        }, {
          name: 'xl',
          value: '24px'
        }, {
          name: '2xl',
          value: '36px'
        }].map(({
          name,
          value
        }) => <div key={name} className="size-row">\r
              <span className="size-label">--text-{name}</span>\r
              <span className="size-value">{value}</span>\r
              <span className={\`text-\${name}\`}>The quick brown fox</span>\r
            </div>)}\r
        </div>\r
      </section>\r
\r
      <section className="section">\r
        <h2 className="section-title">Font Weights</h2>\r
        <div className="flex flex-col gap-3">\r
          <div className="weight-sample font-400">\r
            <span className="weight-label">400</span>\r
            Regular weight text\r
          </div>\r
          <div className="weight-sample font-500">\r
            <span className="weight-label">500</span>\r
            Medium weight text\r
          </div>\r
          <div className="weight-sample font-600">\r
            <span className="weight-label">600</span>\r
            Semibold weight text\r
          </div>\r
          <div className="weight-sample font-700">\r
            <span className="weight-label">700</span>\r
            Bold weight text\r
          </div>\r
        </div>\r
      </section>\r
\r
      <section className="section">\r
        <h2 className="section-title">Line Heights</h2>\r
        <div className="grid grid-2 gap-5">\r
          <div className="card">\r
            <div className="font-var mb-2">--leading-tight (1.15)</div>\r
            <div className="text-muted text-sm mb-3">Headings</div>\r
            <p className="text-sm leading-tight m-0">\r
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.\r
            </p>\r
          </div>\r
          <div className="card">\r
            <div className="font-var mb-2">--leading-standard (1.35)</div>\r
            <div className="text-muted text-sm mb-3">UI text</div>\r
            <p className="text-sm leading-standard m-0">\r
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.\r
            </p>\r
          </div>\r
          <div className="card">\r
            <div className="font-var mb-2">--leading-relaxed (1.6)</div>\r
            <div className="text-muted text-sm mb-3">Body copy</div>\r
            <p className="text-sm leading-relaxed m-0">\r
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.\r
            </p>\r
          </div>\r
          <div className="card">\r
            <div className="font-var mb-2">--leading-reader (1.75)</div>\r
            <div className="text-muted text-sm mb-3">Long-form reading</div>\r
            <p className="text-sm leading-reader m-0">\r
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.\r
            </p>\r
          </div>\r
        </div>\r
      </section>\r
    </div>
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var S,f,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="showcase">\r
      <header className="showcase-header">\r
        <h1 className="showcase-title">Shadows</h1>\r
        <p className="showcase-description">Elevation and depth tokens</p>\r
      </header>\r
\r
      <div className="flex flex-wrap gap-6">\r
        <div className="shadow-item">\r
          <div className="shadow-box shadow-sm">Content</div>\r
          <div className="shadow-name">shadow-sm</div>\r
        </div>\r
        <div className="shadow-item">\r
          <div className="shadow-box shadow-md">Content</div>\r
          <div className="shadow-name">shadow-md</div>\r
        </div>\r
        <div className="shadow-item">\r
          <div className="shadow-box shadow-lg">Content</div>\r
          <div className="shadow-name">shadow-lg</div>\r
        </div>\r
        <div className="shadow-item">\r
          <div className="shadow-box shadow-xl">Content</div>\r
          <div className="shadow-name">shadow-xl</div>\r
        </div>\r
      </div>\r
    </div>
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var C,B,F;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="showcase">\r
      <header className="showcase-header">\r
        <h1 className="showcase-title">Speck DS Tokens</h1>\r
        <p className="showcase-description">Complete design token reference from Figma</p>\r
      </header>\r
\r
      <div className="grid grid-auto gap-5 mb-5">\r
        {/* Colors Card */}\r
        <div className="card">\r
          <h3 className="section-subtitle">Colors</h3>\r
          <div className="flex gap-1 mb-2">\r
            <div className="swatch-mini bg-purple-100" />\r
            <div className="swatch-mini bg-purple-200" />\r
            <div className="swatch-mini bg-purple-300" />\r
            <div className="swatch-mini bg-purple-400" />\r
            <div className="swatch-mini bg-purple-500" />\r
          </div>\r
          <div className="text-muted text-sm">Purple: 5 shades</div>\r
          <div className="text-muted text-sm">Grey: 7 shades</div>\r
        </div>\r
\r
        {/* Spacing Card */}\r
        <div className="card">\r
          <h3 className="section-subtitle">Spacing</h3>\r
          <div className="flex gap-1 items-end mb-2">\r
            <div className="w-6 spacing-1-height bg-purple-400 rounded-xs" />\r
            <div className="w-6 spacing-2-height bg-purple-400 rounded-xs" />\r
            <div className="w-6 spacing-3-height bg-purple-400 rounded-xs" />\r
            <div className="w-6 spacing-4-height bg-purple-400 rounded-xs" />\r
            <div className="w-6 spacing-5-height bg-purple-400 rounded-xs" />\r
          </div>\r
          <div className="text-muted text-sm">4px to 64px</div>\r
        </div>\r
\r
        {/* Radius Card */}\r
        <div className="card">\r
          <h3 className="section-subtitle">Radius</h3>\r
          <div className="flex gap-2 mb-2">\r
            <div className="w-6 h-6 bg-purple-500 radius-none" />\r
            <div className="w-6 h-6 bg-purple-500 radius-sm" />\r
            <div className="w-6 h-6 bg-purple-500 radius-md" />\r
            <div className="w-6 h-6 bg-purple-500 radius-lg" />\r
            <div className="w-6 h-6 bg-purple-500 radius-full" />\r
          </div>\r
          <div className="text-muted text-sm">0px to 999px</div>\r
        </div>\r
\r
        {/* Typography Card */}\r
        <div className="card">\r
          <h3 className="section-subtitle">Typography</h3>\r
          <div className="font-serif text-lg mb-2">Noe Display</div>\r
          <div className="font-sans text-sm mb-2">Avenir</div>\r
          <div className="text-muted text-sm">6 sizes, 4 weights</div>\r
        </div>\r
      </div>\r
\r
      {/* Usage Example */}\r
      <div className="card card-purple">\r
        <h3 className="section-subtitle">Usage</h3>\r
        <code className="code-block">\r
        {\`.button {
  background: var(--color-primary-500);
  padding: var(--spacing-3) var(--spacing-5);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
}\`}\r
        </code>\r
      </div>\r
    </div>
}`,...(F=(B=t.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const z=["Colors","Spacing","BorderRadius","Typography","Shadows","AllTokens"];export{t as AllTokens,d as BorderRadius,c as Colors,n as Shadows,l as Spacing,o as Typography,z as __namedExportsOrder,D as default};
