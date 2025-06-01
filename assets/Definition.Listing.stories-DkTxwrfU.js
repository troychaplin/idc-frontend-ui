import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{M as m}from"./Main-Dvd7Afoe.js";import{S as c}from"./Section-DObOajwC.js";import{D as e,a}from"./data-DZYaKCSO.js";import"./index-yBjzXJbu.js";import"./propClasses-CNqKrcN7.js";const u={title:"Components/Definition/Listing",component:e,tags:["autodocs"]},t={args:{},render:s=>n.jsxs(m,{children:[n.jsx(c,{children:n.jsx(e,{...s,children:a.slice(0,8).map(({id:o,title:r,content:i})=>n.jsxs(e.Accordion,{title:r,children:[n.jsx("p",{children:i}),n.jsx("p",{children:i})]},o))})}),n.jsx(c,{bgType:"blue",children:n.jsx(e,{...s,children:a.slice(0,8).map(({id:o,title:r,content:i})=>n.jsxs(e.Accordion,{title:r,divider:"dark",children:[n.jsx("p",{children:i}),n.jsx("p",{children:i})]},o))})})]})};var d,p,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <Section bgType="blue">
        <Definition {...args}>
          {data.slice(0, 8).map(({
          id,
          title,
          content
        }) => <Definition.Accordion key={id} title={title} divider="dark">
              <p>{content}</p>
              <p>{content}</p>
            </Definition.Accordion>)}
        </Definition>
      </Section>
    </Main>
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const S=["Primary"];export{t as Primary,S as __namedExportsOrder,u as default};
