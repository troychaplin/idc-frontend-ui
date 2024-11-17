import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{S as u}from"./index-BBUrw_RG.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=({children:r,noProse:d})=>{const l=d?"":"prose prose-lg md:prose-xl";return e.jsx("main",{className:`ui-main flex justify-center px-6 py-5 md:p-8 ${l}`,children:r})};a.__docgenInfo={description:"",methods:[],displayName:"Main",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},noProse:{required:!1,tsType:{name:"boolean"},description:""}}};const f={title:"Layouts/Main",component:a,tags:["autodocs"]},s={args:{noProse:!1},render:r=>e.jsx(a,{...r,children:e.jsx("p",{children:"Main element"})})},n={args:{...s.args,children:e.jsx(u,{children:e.jsx("p",{children:"Main element"})})},render:r=>e.jsx(a,{...r})};var o,t,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    noProse: false
  } as MainProps,
  render: args => <Main {...args}>
      <p>Main element</p>
    </Main>
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <Section>
        <p>Main element</p>
      </Section>
  } as MainProps,
  render: args => <Main {...args} />
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const j=["Primary","WithSection"];export{s as Primary,n as WithSection,j as __namedExportsOrder,f as default};
