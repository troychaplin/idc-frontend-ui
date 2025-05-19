import{j as e}from"./jsx-runtime-BYYWji4R.js";import{M as c}from"./Main-CKtuN2O-.js";import{S as m}from"./Section-DCsvNflC.js";import{c as p,u as v}from"./propClasses-BlA50HdU.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d=({children:l,bgType:t="light"})=>{const u=t==="light"?"bg-idc-blue-50":"bg-idc-blue-600 text-white";return e.jsx("div",{className:`ui-prose-first-last px-7 py-6 md:px-16 md:py-12 ${u}`,children:l})};d.displayName="BluePanel.Content";try{BluePanel.Content.displayName="BluePanel.Content",BluePanel.Content.__docgenInfo={description:"",displayName:"BluePanel.Content",props:{bgType:{defaultValue:{value:"light"},description:"",name:"bgType",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}}}catch{}const r=({children:l,maxWidth:t="7xl",cols:u="60/40"})=>e.jsx("div",{className:`idc-bluecolumns ${p[t]} mx-auto grid ${v[u]} rounded-xl overflow-hidden bg-idc-blue-50`,children:l}),a=Object.assign(r,{Content:d});try{r.displayName="BluePanelContainer",r.__docgenInfo={description:"",displayName:"BluePanelContainer",props:{maxWidth:{defaultValue:{value:"7xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'},{value:'"max"'},{value:'"full"'}]}},cols:{defaultValue:{value:"60/40"},description:"",name:"cols",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"6"},{value:'"1/3"'},{value:'"2/3"'},{value:'"60/40"'}]}}}}}catch{}try{a.displayName="BluePanel",a.__docgenInfo={description:"",displayName:"BluePanel",props:{maxWidth:{defaultValue:{value:"7xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'},{value:'"max"'},{value:'"full"'}]}},cols:{defaultValue:{value:"60/40"},description:"",name:"cols",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"6"},{value:'"1/3"'},{value:'"2/3"'},{value:'"60/40"'}]}}}}}catch{}const f={title:"Components/Blue Panel",component:a,tags:["autodocs"]},n={args:{maxWidth:"7xl",cols:2},render:l=>e.jsx(c,{children:e.jsx(m,{children:e.jsxs(a,{...l,children:[e.jsx(a.Content,{children:e.jsx("p",{children:"Content goes here"})}),e.jsx(a.Content,{bgType:"dark",children:e.jsx("p",{children:"Form goes here"})})]})})})};var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    maxWidth: '7xl',
    cols: 2
  } as BluePanelProps,
  render: args => <Main>
      <Section>
        <BluePanel {...args}>
          <BluePanel.Content>
            <p>Content goes here</p>
          </BluePanel.Content>
          <BluePanel.Content bgType="dark">
            <p>Form goes here</p>
          </BluePanel.Content>
        </BluePanel>
      </Section>
    </Main>
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const C=["Primary"];export{n as Primary,C as __namedExportsOrder,f as default};
