import{j as n}from"./jsx-runtime-BYYWji4R.js";import{M as m}from"./Main-CKtuN2O-.js";import{S as d}from"./Section-DCsvNflC.js";import{D as o,a as l}from"./data-Bbe9ZRZB.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./propClasses-BlA50HdU.js";const S={title:"Components/Definition/Listing",component:o,tags:["autodocs"]},i={args:{},render:a=>n.jsx(m,{children:n.jsx(d,{children:n.jsx(o,{...a,children:l.slice(0,8).map(({id:c,title:p,content:r})=>n.jsxs(o.Accordion,{title:p,children:[n.jsx("p",{children:r}),n.jsx("p",{children:r})]},c))})})})};var t,e,s;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {} as DefinitionProps,
  render: args => <Main>
      <Section>
        <Definition {...args}>
          {data.slice(0, 8).map(({
          id,
          title,
          content
        }) => <Definition.Accordion key={id} title={title}>
              <p>{content}</p>
              <p>{content}</p>
            </Definition.Accordion>)}
        </Definition>
      </Section>
    </Main>
}`,...(s=(e=i.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const M=["Primary"];export{i as Primary,M as __namedExportsOrder,S as default};
