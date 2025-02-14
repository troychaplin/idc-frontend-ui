import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{C as s}from"./CardGroup-CZIn5iKP.js";import{C as e}from"./Card-B6WPNcf_.js";import{C as x}from"./data-CH4fyPQ9.js";import"./index-yBjzXJbu.js";import"./propClasses-CNqKrcN7.js";import"./index-DC2CtFZN.js";import"./_commonjsHelpers-CqkleIqs.js";const y={title:"Components/Card Group/Icon Cards",component:s,tags:["autodocs"]},a={args:{},render:d=>r.jsx(s,{...d,children:x.slice(0,3).map(({id:i,link:p,title:m,excerpt:c,iconName:l,alt:u,date:C})=>r.jsxs(e,{addFlex:!0,children:[r.jsx(e.Figure,{iconName:l}),r.jsx(e.Header,{title:m,date:C}),r.jsx(e.Content,{text:c,link:p,isExcerpt:!0,hideMobile:!0})]},i))})};var t,o,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {} as CardGroupProps,
  render: args => <CardGroup {...args}>
      {data.slice(0, 3).map(({
      id,
      link,
      title,
      excerpt,
      iconName,
      alt,
      date
    }) => <Card key={id} addFlex>
          <Card.Figure iconName={iconName} />
          <Card.Header title={title} date={date} />
          <Card.Content text={excerpt} link={link} isExcerpt hideMobile />
        </Card>)}
    </CardGroup>
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const N=["Primary"];export{a as Primary,N as __namedExportsOrder,y as default};
