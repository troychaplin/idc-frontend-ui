import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{S as C}from"./Section-BqTcAvn7.js";import{C as s}from"./CardGroup-CZIn5iKP.js";import{C as a}from"./Card-COVAY4rK.js";import{C as l}from"./data-B_JeHtaU.js";import"./index-yBjzXJbu.js";import"./propClasses-CNqKrcN7.js";import"./Icon-3_p-jOfT.js";import"./index-OlNebYNa.js";import"./_commonjsHelpers-CqkleIqs.js";const F={title:"Components/Card Group/Pricing Cards",component:s,tags:["autodocs"]},e={args:{},render:d=>r.jsx(C,{children:r.jsx(s,{...d,children:l.slice(0,3).map(({id:i,link:x,title:m,excerpt:p,iconName:u,alt:g,date:c})=>r.jsxs(a,{addFlex:!0,hasBorder:!0,children:[r.jsx(a.Header,{title:m,date:c}),r.jsx(a.Content,{text:p})]},i))})})};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {} as CardGroupProps,
  render: args => <Section>
      <CardGroup {...args}>
        {data.slice(0, 3).map(({
        id,
        link,
        title,
        excerpt,
        iconName,
        alt,
        date
      }) => <Card key={id} addFlex hasBorder>
            <Card.Header title={title} date={date} />
            <Card.Content text={excerpt} />
          </Card>)}
      </CardGroup>
    </Section>
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const H=["Primary"];export{e as Primary,H as __namedExportsOrder,F as default};
