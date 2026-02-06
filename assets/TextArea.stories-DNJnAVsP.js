import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-qdalL59a.js";import{T as t}from"./TextArea-CEQLb65k.js";/* empty css               *//* empty css                */import"./_commonjsHelpers-CqkleIqs.js";const X={title:"Components/TextArea",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text above the textarea"},helperText:{control:"text",description:"Helper/instruction text below"},errorMessage:{control:"text",description:"Error message (sets error state)"},placeholder:{control:"text",description:"Placeholder text"},size:{control:"select",options:["sm","md","lg"],description:"The size of the textarea"},showCount:{control:"boolean",description:"Show character count"},maxLength:{control:"number",description:"Maximum characters allowed"},rows:{control:"number",description:"Number of visible rows"},disabled:{control:"boolean",description:"Whether the textarea is disabled"},resize:{control:"select",options:["none","vertical","horizontal","both"],description:"Resize behavior"}}},a={args:{label:"Text area",defaultValue:"Value",helperText:"Instruction text",showCount:!0,maxLength:100},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},o={args:{label:"Description",placeholder:"Enter your description..."},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},l={args:{label:"Bio",placeholder:"Tell us about yourself...",helperText:"Write a short bio for your profile",rows:3},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},i={render:()=>{const r=()=>{const[s,h]=x.useState("");return e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{label:"Message",placeholder:"Type your message...",helperText:"Keep it concise",showCount:!0,maxLength:100,value:s,onChange:m=>h(m.target.value)})})};return e.jsx(r,{})}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",style:{width:"320px"},children:[e.jsx(t,{size:"sm",label:"Small",placeholder:"Small textarea",rows:2}),e.jsx(t,{size:"md",label:"Medium",placeholder:"Medium textarea",rows:2}),e.jsx(t,{size:"lg",label:"Large",placeholder:"Large textarea",rows:2})]})},d={args:{label:"Comment",defaultValue:"",errorMessage:"This field is required",placeholder:"Enter your comment..."},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},c={args:{label:"Notes",defaultValue:"This field is disabled",disabled:!0,helperText:"You cannot edit this field"},decorators:[r=>e.jsx("div",{style:{width:"320px"},children:e.jsx(r,{})})]},u={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",style:{width:"640px"},children:[e.jsx(t,{label:"No Resize",placeholder:"Cannot resize",resize:"none",rows:2}),e.jsx(t,{label:"Vertical",placeholder:"Resize vertically",resize:"vertical",rows:2}),e.jsx(t,{label:"Horizontal",placeholder:"Resize horizontally",resize:"horizontal",rows:2}),e.jsx(t,{label:"Both",placeholder:"Resize both ways",resize:"both",rows:2})]})},p={render:()=>{const r=()=>{const[s,h]=x.useState(""),[m,I]=x.useState(!1);return e.jsxs("div",{style:{width:"400px"},className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"font-semibold text-lg",children:"Submit Feedback"}),e.jsx(t,{label:"Your Feedback",placeholder:"Share your thoughts...",helperText:"Be specific and constructive",showCount:!0,maxLength:500,rows:5,value:s,onChange:K=>h(K.target.value)}),e.jsx("button",{className:"ds-button ds-button--primary ds-button--md",onClick:()=>I(!0),disabled:!s.trim(),children:"Submit"}),m&&e.jsx("p",{className:"text-sm",style:{color:"green"},children:"Thanks for your feedback!"})]})};return e.jsx(r,{})}};var b,g,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Text area',
    defaultValue: 'Value',
    helperText: 'Instruction text',
    showCount: true,
    maxLength: 100
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>\r
        <Story />\r
      </div>]
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var w,f,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter your description...'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>\r
        <Story />\r
      </div>]
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,z,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    helperText: 'Write a short bio for your profile',
    rows: 3
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>\r
        <Story />\r
      </div>]
}`,...(T=(z=l.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var j,C,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [value, setValue] = useState('');
      return <div style={{
        width: '320px'
      }}>\r
          <TextArea label="Message" placeholder="Type your message..." helperText="Keep it concise" showCount maxLength={100} value={value} onChange={e => setValue(e.target.value)} />\r
        </div>;
    };
    return <Demo />;
  }
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var N,L,V;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4" style={{
    width: '320px'
  }}>\r
      <TextArea size="sm" label="Small" placeholder="Small textarea" rows={2} />\r
      <TextArea size="md" label="Medium" placeholder="Medium textarea" rows={2} />\r
      <TextArea size="lg" label="Large" placeholder="Large textarea" rows={2} />\r
    </div>
}`,...(V=(L=n.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var D,E,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Comment',
    defaultValue: '',
    errorMessage: 'This field is required',
    placeholder: 'Enter your comment...'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>\r
        <Story />\r
      </div>]
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var R,A,M;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    defaultValue: 'This field is disabled',
    disabled: true,
    helperText: 'You cannot edit this field'
  },
  decorators: [Story => <div style={{
    width: '320px'
  }}>\r
        <Story />\r
      </div>]
}`,...(M=(A=c.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var W,B,H;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4" style={{
    width: '640px'
  }}>\r
      <TextArea label="No Resize" placeholder="Cannot resize" resize="none" rows={2} />\r
      <TextArea label="Vertical" placeholder="Resize vertically" resize="vertical" rows={2} />\r
      <TextArea label="Horizontal" placeholder="Resize horizontally" resize="horizontal" rows={2} />\r
      <TextArea label="Both" placeholder="Resize both ways" resize="both" rows={2} />\r
    </div>
}`,...(H=(B=u.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var Y,O,q;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const FormDemo = () => {
      const [feedback, setFeedback] = useState('');
      const [submitted, setSubmitted] = useState(false);
      return <div style={{
        width: '400px'
      }} className="flex flex-col gap-4">\r
          <h3 className="font-semibold text-lg">Submit Feedback</h3>\r
          <TextArea label="Your Feedback" placeholder="Share your thoughts..." helperText="Be specific and constructive" showCount maxLength={500} rows={5} value={feedback} onChange={e => setFeedback(e.target.value)} />\r
          <button className="ds-button ds-button--primary ds-button--md" onClick={() => setSubmitted(true)} disabled={!feedback.trim()}>\r
            Submit\r
          </button>\r
          {submitted && <p className="text-sm" style={{
          color: 'green'
        }}>Thanks for your feedback!</p>}\r
        </div>;
    };
    return <FormDemo />;
  }
}`,...(q=(O=p.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const Z=["Default","WithLabel","WithHelperText","WithCharacterCount","Sizes","Error","Disabled","ResizeOptions","FormExample"];export{a as Default,c as Disabled,d as Error,p as FormExample,u as ResizeOptions,n as Sizes,i as WithCharacterCount,l as WithHelperText,o as WithLabel,Z as __namedExportsOrder,X as default};
