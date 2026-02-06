import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./Icon-BYR71yhe.js";const D={title:"Components/Icon",component:n,parameters:{layout:"centered",docs:{description:{component:"SVG icon component based on Figma designs. Sizes 12px and 16px from Figma."}}},tags:["autodocs"],argTypes:{name:{control:"select",options:["chevron-down","chevron-up","chevron-left","chevron-right"],description:"Icon name"},size:{control:"select",options:[12,16],description:"Icon size in pixels (from Figma)"},color:{control:"color",description:"Icon color (inherits from parent by default)"}}},r={args:{name:"chevron-down",size:16}},o={render:()=>{const b=["chevron-down","chevron-up","chevron-left","chevron-right"];return e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"center"},children:b.map(c=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"16px",background:"#f5f5f5",borderRadius:"8px",minWidth:"80px"},children:[e.jsx(n,{name:c,size:16}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:c})]},c))})}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[e.jsx(n,{name:"chevron-down",size:12}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"12px"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[e.jsx(n,{name:"chevron-down",size:16}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"16px"})]})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(n,{name:"chevron-down",size:16,color:"#3E06B6","aria-label":"Down in purple"}),e.jsx(n,{name:"chevron-up",size:16,color:"#dc2626","aria-label":"Up in red"}),e.jsx(n,{name:"chevron-left",size:16,color:"#16a34a","aria-label":"Left in green"}),e.jsx(n,{name:"chevron-right",size:16,color:"#ca8a04","aria-label":"Right in yellow"})]})},i={args:{name:"chevron-down",size:24,"aria-label":"Expand menu"}};var l,t,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'chevron-down',
    size: 16
  }
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var d,m,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const icons: IconName[] = ['chevron-down', 'chevron-up', 'chevron-left', 'chevron-right'];
    return <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>\r
        {icons.map(name => <div key={name} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px',
        minWidth: '80px'
      }}>\r
            <Icon name={name} size={16} />\r
            <span style={{
          fontSize: '12px',
          color: '#666'
        }}>{name}</span>\r
          </div>)}\r
      </div>;
  }
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,f,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px'
    }}>\r
        <Icon name="chevron-down" size={12} />\r
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>12px</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px'
    }}>\r
        <Icon name="chevron-down" size={16} />\r
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>16px</span>\r
      </div>\r
    </div>
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,u,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>\r
      <Icon name="chevron-down" size={16} color="#3E06B6" aria-label="Down in purple" />\r
      <Icon name="chevron-up" size={16} color="#dc2626" aria-label="Up in red" />\r
      <Icon name="chevron-left" size={16} color="#16a34a" aria-label="Left in green" />\r
      <Icon name="chevron-right" size={16} color="#ca8a04" aria-label="Right in yellow" />\r
    </div>
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var z,I,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'chevron-down',
    size: 24,
    'aria-label': 'Expand menu'
  }
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const E=["Default","AllIcons","Sizes","Colors","Accessible"];export{i as Accessible,o as AllIcons,a as Colors,r as Default,s as Sizes,E as __namedExportsOrder,D as default};
