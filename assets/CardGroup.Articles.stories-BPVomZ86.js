import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{C as s}from"./CardGroup-CZIn5iKP.js";import{C as e}from"./Card-COVAY4rK.js";import{M as u}from"./Main-DVO6fBEN.js";import{S as g}from"./Section-BqTcAvn7.js";import{C as h}from"./data-B_JeHtaU.js";import"./index-yBjzXJbu.js";import"./propClasses-CNqKrcN7.js";import"./Icon-3_p-jOfT.js";import"./index-OlNebYNa.js";import"./_commonjsHelpers-CqkleIqs.js";const H={title:"Components/Card Group/Article Cards",component:s,tags:["autodocs"]},a={args:{},render:o=>r.jsx(u,{children:r.jsx(g,{children:r.jsx(s,{...o,children:h.slice(0,3).map(({id:d,link:m,title:p,excerpt:c,image:l,alt:x,date:C})=>r.jsxs(e,{addFlex:!0,children:[r.jsx(e.Figure,{children:r.jsx("img",{className:"rounded-md",src:l,alt:x,width:"400",height:"300"})}),r.jsx(e.Header,{title:p,date:C}),r.jsx(e.Content,{text:c,link:m,isExcerpt:!0})]},d))})})})};var t,n,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {} as CardGroupProps,
  render: args => <Main>
      <Section>
        <CardGroup {...args}>
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
              <Card.Content text={excerpt} link={link} isExcerpt />
            </Card>)}
        </CardGroup>
      </Section>
    </Main>
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const N=["Primary"];export{a as Primary,N as __namedExportsOrder,H as default};
