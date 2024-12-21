import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as u}from"./index-CyIlasFh.js";const a=({children:e,noProse:d})=>{const l=d?"":"prose prose-lg md:prose-xl";return r.jsx("main",{className:`ui-main flex justify-center px-6 py-5 md:p-8 ${l}`,children:e})};try{a.displayName="Main",a.__docgenInfo={description:"",displayName:"Main",props:{noProse:{defaultValue:null,description:"",name:"noProse",required:!1,type:{name:"boolean"}}}}}catch{}const M={title:"Layouts/Main",component:a,tags:["autodocs"]},n={args:{noProse:!1},render:e=>r.jsx(a,{...e,children:r.jsx("p",{children:"Main element"})})},s={args:{...n.args,children:r.jsx(u,{children:r.jsx("p",{children:"Main element"})})},render:e=>r.jsx(a,{...e})};var o,t,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    noProse: false
  } as MainProps,
  render: args => <Main {...args}>
      <p>Main element</p>
    </Main>
}`,...(i=(t=n.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <Section>
        <p>Main element</p>
      </Section>
  } as MainProps,
  render: args => <Main {...args} />
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const y=["Primary","WithSection"];export{n as Primary,s as WithSection,y as __namedExportsOrder,M as default};
