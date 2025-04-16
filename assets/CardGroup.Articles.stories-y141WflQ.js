import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{C as i}from"./CardGroup-CZIn5iKP.js";import{C as e}from"./Card-DBkvTPdg.js";import{C as x}from"./data-B_JeHtaU.js";import"./index-yBjzXJbu.js";import"./propClasses-CNqKrcN7.js";import"./Icon-3_p-jOfT.js";import"./index-OlNebYNa.js";import"./_commonjsHelpers-CqkleIqs.js";const P={title:"Components/Card Group/Article Cards",component:i,tags:["autodocs"]},a={args:{},render:o=>r.jsx(i,{...o,children:x.slice(0,3).map(({id:n,link:m,title:p,excerpt:c,image:l,alt:C,date:u})=>r.jsxs(e,{addFlex:!0,children:[r.jsx(e.Figure,{children:r.jsx("img",{className:"rounded-md",src:l,alt:C,width:"400",height:"300"})}),r.jsx(e.Header,{title:p,date:u}),r.jsx(e.Content,{text:c,link:m,isExcerpt:!0,hideMobile:!0})]},n))})};var t,d,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const b=["Primary"];export{a as Primary,b as __namedExportsOrder,P as default};
