import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{M as m}from"./Main-BF2PEY_x.js";import{S as d}from"./Section-DgDv1rta.js";import{D as e,a as l}from"./data-MbDZELMM.js";import"./propClasses-CNqKrcN7.js";const h={title:"Components/Definition/Listing",component:e,tags:["autodocs"]},i={args:{},render:a=>n.jsx(m,{children:n.jsx(d,{children:n.jsx(e,{...a,children:l.slice(0,8).map(({id:c,title:p,content:o})=>n.jsxs(e.Accordion,{title:p,children:[n.jsx("p",{children:o}),n.jsx("p",{children:o})]},c))})})})};var r,t,s;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(t=i.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const u=["Primary"];export{i as Primary,u as __namedExportsOrder,h as default};
