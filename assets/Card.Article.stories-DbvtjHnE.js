import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{C as a}from"./Card-Dizov__K.js";import{C as r}from"./data-B_JeHtaU.js";import"./index-yBjzXJbu.js";import"./propClasses-CNqKrcN7.js";import"./Icon-C_tpUgxC.js";import"./index-DC2CtFZN.js";import"./_commonjsHelpers-CqkleIqs.js";const g={title:"Components/Card/Article Card",component:a,tags:["autodocs"]},e={args:{maxWidth:"md",addFlex:!0},render:i=>t.jsxs(a,{...i,children:[t.jsx(a.Figure,{children:t.jsx("img",{className:"rounded-md",src:r[0].image,alt:r[0].alt})}),t.jsx(a.Header,{title:r[0].title,date:r[0].date}),t.jsx(a.Content,{text:r[0].excerpt,isExcerpt:!0}),t.jsx(a.Footer,{children:t.jsx("a",{href:r[0].link,className:"idc-button idc-button--light-blue idc-button--xs idc-button--outline",children:"Learn more"})})]})};var d,o,s;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    maxWidth: 'md',
    addFlex: true
  } as CardProps,
  render: args => <Card {...args}>
      <Card.Figure>
        <img className="rounded-md" src={data[0].image} alt={data[0].alt} />
      </Card.Figure>
      <Card.Header title={data[0].title} date={data[0].date} />
      <Card.Content text={data[0].excerpt} isExcerpt />
      <Card.Footer>
        <a href={data[0].link} className="idc-button idc-button--light-blue idc-button--xs idc-button--outline">
          Learn more
        </a>
      </Card.Footer>
    </Card>
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const b=["Primary"];export{e as Primary,b as __namedExportsOrder,g as default};
