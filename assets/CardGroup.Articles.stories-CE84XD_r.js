import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{C as i}from"./CardGroup-3-jRQ5Hk.js";import{C as e}from"./Card-C_txrTjl.js";import{C as x}from"./data-CH4fyPQ9.js";import"./index-D2MAbzvX.js";import"./propClasses-CNqKrcN7.js";import"./index-C-IgQxIi.js";import"./_commonjsHelpers-CqkleIqs.js";const y={title:"Components/Card Group/Article Cards",component:i,tags:["autodocs"]},a={args:{},render:n=>r.jsx(i,{...n,children:x.slice(0,3).map(({id:o,link:m,title:p,excerpt:c,image:l,alt:C,date:u})=>r.jsxs(e,{addFlex:!0,children:[r.jsx(e.Figure,{children:r.jsx("img",{className:"rounded-md",src:l,alt:C,width:"400",height:"300"})}),r.jsx(e.Header,{title:p,date:u}),r.jsx(e.Content,{text:c,link:m,isExcerpt:!0,hideMobile:!0})]},o))})};var t,d,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {} as CardGroupProps,
  render: args => <CardGroup {...args}>
      {data.slice(0, 3).map(({
      id,
      link,
      title,
      excerpt,
      image,
      alt,
      date
    }) => <Card key={id} addFlex>
          <Card.Figure>
            <img className="rounded-md" src={image} alt={alt} width="400" height="300" />
          </Card.Figure>
          <Card.Header title={title} date={date} />
          <Card.Content text={excerpt} link={link} isExcerpt hideMobile />
        </Card>)}
    </CardGroup>
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const P=["Primary"];export{a as Primary,P as __namedExportsOrder,y as default};
