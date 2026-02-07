import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-qdalL59a.js";import{D as s}from"./Dropdown-DSUFkTMd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-BYR71yhe.js";const we={title:"Components/Dropdown",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"The size of the dropdown"},disabled:{control:"boolean",description:"Whether the dropdown is disabled"},error:{control:"boolean",description:"Whether the dropdown has an error state"},fullWidth:{control:"boolean",description:"Whether the dropdown should take full width"}},decorators:[e=>a.jsx("div",{style:{minWidth:"280px",minHeight:"300px",padding:"20px"},children:a.jsx(e,{})})]},t=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}],O=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"}],i={render:e=>{const[o,n]=l.useState(void 0);return a.jsx(s,{...e,value:o,onChange:r=>n(r)})},args:{options:t,placeholder:"Select an option"}},d={render:e=>{const[o,n]=l.useState(void 0);return a.jsx(s,{...e,value:o,onChange:r=>n(r)})},args:{options:O,placeholder:"Select a country",label:"Country"}},u={render:e=>{const[o,n]=l.useState("us");return a.jsx(s,{...e,value:o,onChange:r=>n(r)})},args:{options:O,label:"Country"}},c={render:e=>{const[o,n]=l.useState(void 0);return a.jsx(s,{...e,value:o,onChange:r=>n(r)})},args:{options:t,size:"sm",placeholder:"Small dropdown"}},p={render:e=>{const[o,n]=l.useState(void 0);return a.jsx(s,{...e,value:o,onChange:r=>n(r)})},args:{options:t,size:"md",placeholder:"Medium dropdown"}},g={render:e=>{const[o,n]=l.useState(void 0);return a.jsx(s,{...e,value:o,onChange:r=>n(r)})},args:{options:t,size:"lg",placeholder:"Large dropdown"}},m={args:{options:t,disabled:!0,placeholder:"Disabled dropdown"}},v={render:e=>{const[o,n]=l.useState(void 0);return a.jsx(s,{...e,value:o,onChange:r=>n(r)})},args:{options:t,error:!0,errorMessage:"Please select an option",label:"Required Field"}},pe=[{value:"option1",label:"Available Option 1"},{value:"option2",label:"Disabled Option",disabled:!0},{value:"option3",label:"Available Option 2"},{value:"option4",label:"Another Disabled",disabled:!0},{value:"option5",label:"Available Option 3"}],h={render:e=>{const[o,n]=l.useState(void 0);return a.jsx(s,{...e,value:o,onChange:r=>n(r)})},args:{options:pe,placeholder:"Select an option",label:"Mixed Options"}},b={render:e=>{const[o,n]=l.useState(void 0);return a.jsx(s,{...e,value:o,onChange:r=>n(r)})},args:{options:t,fullWidth:!0,placeholder:"Full width dropdown",label:"Full Width"},decorators:[e=>a.jsx("div",{style:{width:"400px",padding:"20px"},children:a.jsx(e,{})})]},ge=()=>{const[e,o]=l.useState("");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(s,{options:O,value:e,onChange:n=>o(n),label:"Select your country",placeholder:"Choose a country"}),a.jsxs("p",{style:{fontSize:"14px",color:"#666"},children:["Selected value: ",e||"None"]})]})},S={render:()=>a.jsx(ge,{})},x=({color:e})=>a.jsx("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("circle",{cx:"4",cy:"4",r:"4",fill:e})}),me=[{value:"active",label:"Active",icon:a.jsx(x,{color:"#22c55e"})},{value:"pending",label:"Pending",icon:a.jsx(x,{color:"#f59e0b"})},{value:"inactive",label:"Inactive",icon:a.jsx(x,{color:"#ef4444"})},{value:"archived",label:"Archived",icon:a.jsx(x,{color:"#6b7280"})}],f={args:{options:me,placeholder:"Select status",label:"Status"}},w={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsx(s,{options:t,size:"sm",placeholder:"Small",label:"Small Size"}),a.jsx(s,{options:t,size:"md",placeholder:"Medium",label:"Medium Size"}),a.jsx(s,{options:t,size:"lg",placeholder:"Large",label:"Large Size"})]})},ve=Array.from({length:20},(e,o)=>({value:`option${o+1}`,label:`Option ${o+1}`})),y={args:{options:ve,placeholder:"Select from many options",label:"Scrollable List"}};var D,j,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <Dropdown {...args} value={value} onChange={val => setValue(val)} />;
  },
  args: {
    options: basicOptions,
    placeholder: 'Select an option'
  }
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var V,z,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <Dropdown {...args} value={value} onChange={val => setValue(val)} />;
  },
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
    label: 'Country'
  }
}`,...(W=(z=d.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var L,M,A;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>('us');
    return <Dropdown {...args} value={value} onChange={val => setValue(val)} />;
  },
  args: {
    options: countryOptions,
    label: 'Country'
  }
}`,...(A=(M=u.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var F,E,I;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <Dropdown {...args} value={value} onChange={val => setValue(val)} />;
  },
  args: {
    options: basicOptions,
    size: 'sm',
    placeholder: 'Small dropdown'
  }
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,R,_;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <Dropdown {...args} value={value} onChange={val => setValue(val)} />;
  },
  args: {
    options: basicOptions,
    size: 'md',
    placeholder: 'Medium dropdown'
  }
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var k,q,T;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <Dropdown {...args} value={value} onChange={val => setValue(val)} />;
  },
  args: {
    options: basicOptions,
    size: 'lg',
    placeholder: 'Large dropdown'
  }
}`,...(T=(q=g.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var U,$,B;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    disabled: true,
    placeholder: 'Disabled dropdown'
  }
}`,...(B=($=m.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var G,H,J;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <Dropdown {...args} value={value} onChange={val => setValue(val)} />;
  },
  args: {
    options: basicOptions,
    error: true,
    errorMessage: 'Please select an option',
    label: 'Required Field'
  }
}`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,N,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <Dropdown {...args} value={value} onChange={val => setValue(val)} />;
  },
  args: {
    options: optionsWithDisabled,
    placeholder: 'Select an option',
    label: 'Mixed Options'
  }
}`,...(Q=(N=h.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <Dropdown {...args} value={value} onChange={val => setValue(val)} />;
  },
  args: {
    options: basicOptions,
    fullWidth: true,
    placeholder: 'Full width dropdown',
    label: 'Full Width'
  },
  decorators: [Story => <div style={{
    width: '400px',
    padding: '20px'
  }}>\r
        <Story />\r
      </div>]
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,oe;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <ControlledDropdown />
}`,...(oe=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    options: statusOptions,
    placeholder: 'Select status',
    label: 'Status'
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,le,ie;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <Dropdown options={basicOptions} size="sm" placeholder="Small" label="Small Size" />\r
      <Dropdown options={basicOptions} size="md" placeholder="Medium" label="Medium Size" />\r
      <Dropdown options={basicOptions} size="lg" placeholder="Large" label="Large Size" />\r
    </div>
}`,...(ie=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ue,ce;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    options: manyOptions,
    placeholder: 'Select from many options',
    label: 'Scrollable List'
  }
}`,...(ce=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const ye=["Default","WithLabel","WithValue","Small","Medium","Large","Disabled","WithError","WithDisabledOptions","FullWidth","Controlled","WithIcons","AllSizes","LongList"];export{w as AllSizes,S as Controlled,i as Default,m as Disabled,b as FullWidth,g as Large,y as LongList,p as Medium,c as Small,h as WithDisabledOptions,v as WithError,f as WithIcons,d as WithLabel,u as WithValue,ye as __namedExportsOrder,we as default};
