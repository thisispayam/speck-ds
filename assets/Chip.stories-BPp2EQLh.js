import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-qdalL59a.js";import{C as t}from"./Chip-D8s4-Mgj.js";/* empty css               *//* empty css                */import"./_commonjsHelpers-CqkleIqs.js";const Z={title:"Components/Chip",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled"],description:"The visual style variant"},size:{control:"select",options:["sm","md","lg"],description:"The size of the chip"},selected:{control:"boolean",description:"Whether the chip is selected"},disabled:{control:"boolean",description:"Whether the chip is disabled"},clickable:{control:"boolean",description:"Whether the chip is clickable"},children:{control:"text",description:"The label text"}}},c={args:{children:"Label",variant:"outline",size:"md"}},n={args:{children:"Label",variant:"outline"}},o={args:{children:"Label",variant:"filled"}},d={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{variant:"outline",children:"Label"}),e.jsx(t,{variant:"filled",children:"Label"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{variant:"outline",selected:!0,children:"Selected"}),e.jsx(t,{variant:"filled",selected:!0,children:"Selected"})]})]})},m={render:()=>{const l=()=>{const[r,i]=f.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{variant:"outline",clickable:!0,selected:r,onSelect:()=>i(!r),children:r?"Selected":"Click me"}),e.jsx(t,{variant:"filled",clickable:!0,children:"Clickable"})]})};return e.jsx(l,{})}},h={render:()=>{const l=()=>{const[r,i]=f.useState(["React","TypeScript","Storybook"]);return e.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.map(a=>e.jsx(t,{variant:"outline",onRemove:()=>i(r.filter(x=>x!==a)),children:a},a)),r.length===0&&e.jsx("span",{className:"text-muted text-sm",children:"All chips removed. Refresh to reset."})]})};return e.jsx(l,{})}},u={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{variant:"outline",disabled:!0,children:"Disabled"}),e.jsx(t,{variant:"filled",disabled:!0,children:"Disabled"})]})},v={render:()=>{const l=()=>{const[r,i]=f.useState(["design"]),a=["design","development","marketing","sales"],x=s=>{r.includes(s)?i(r.filter(J=>J!==s)):i([...r,s])};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-sm text-muted",children:"Click to toggle filters:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.map(s=>e.jsx(t,{variant:r.includes(s)?"filled":"outline",clickable:!0,selected:r.includes(s),onSelect:()=>x(s),children:s},s))}),e.jsxs("p",{className:"text-xs text-muted",children:["Active: ",r.length>0?r.join(", "):"none"]})]})};return e.jsx(l,{})}};var g,b,C;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'outline',
    size: 'md'
  }
}`,...(C=(b=c.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,j,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'outline'
  }
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var F,k,D;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'filled'
  }
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var z,L,R;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Chip size="sm">Small</Chip>\r
      <Chip size="md">Medium</Chip>\r
      <Chip size="lg">Large</Chip>\r
    </div>
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var A,y,T;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div className="flex items-center gap-3">\r
        <Chip variant="outline">Label</Chip>\r
        <Chip variant="filled">Label</Chip>\r
      </div>\r
      <div className="flex items-center gap-3">\r
        <Chip variant="outline" selected>Selected</Chip>\r
        <Chip variant="filled" selected>Selected</Chip>\r
      </div>\r
    </div>
}`,...(T=(y=p.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var E,w,O;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const ChipDemo = () => {
      const [selected, setSelected] = useState(false);
      return <div className="flex items-center gap-3">\r
          <Chip variant="outline" clickable selected={selected} onSelect={() => setSelected(!selected)}>\r
            {selected ? 'Selected' : 'Click me'}\r
          </Chip>\r
          <Chip variant="filled" clickable>\r
            Clickable\r
          </Chip>\r
        </div>;
    };
    return <ChipDemo />;
  }
}`,...(O=(w=m.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var W,M,V;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const RemovableDemo = () => {
      const [chips, setChips] = useState(['React', 'TypeScript', 'Storybook']);
      return <div className="flex flex-wrap gap-2">\r
          {chips.map(chip => <Chip key={chip} variant="outline" onRemove={() => setChips(chips.filter(c => c !== chip))}>\r
              {chip}\r
            </Chip>)}\r
          {chips.length === 0 && <span className="text-muted text-sm">All chips removed. Refresh to reset.</span>}\r
        </div>;
    };
    return <RemovableDemo />;
  }
}`,...(V=(M=h.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var _,q,B;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Chip variant="outline" disabled>Disabled</Chip>\r
      <Chip variant="filled" disabled>Disabled</Chip>\r
    </div>
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var G,H,I;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const FilterDemo = () => {
      const [activeFilters, setActiveFilters] = useState<string[]>(['design']);
      const filters = ['design', 'development', 'marketing', 'sales'];
      const toggleFilter = (filter: string) => {
        if (activeFilters.includes(filter)) {
          setActiveFilters(activeFilters.filter(f => f !== filter));
        } else {
          setActiveFilters([...activeFilters, filter]);
        }
      };
      return <div className="flex flex-col gap-4">\r
          <p className="text-sm text-muted">Click to toggle filters:</p>\r
          <div className="flex flex-wrap gap-2">\r
            {filters.map(filter => <Chip key={filter} variant={activeFilters.includes(filter) ? 'filled' : 'outline'} clickable selected={activeFilters.includes(filter)} onSelect={() => toggleFilter(filter)}>\r
                {filter}\r
              </Chip>)}\r
          </div>\r
          <p className="text-xs text-muted">\r
            Active: {activeFilters.length > 0 ? activeFilters.join(', ') : 'none'}\r
          </p>\r
        </div>;
    };
    return <FilterDemo />;
  }
}`,...(I=(H=v.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const $=["Default","Outline","Filled","Sizes","AllVariants","Clickable","Removable","Disabled","FilterExample"];export{p as AllVariants,m as Clickable,c as Default,u as Disabled,o as Filled,v as FilterExample,n as Outline,h as Removable,d as Sizes,$ as __namedExportsOrder,Z as default};
