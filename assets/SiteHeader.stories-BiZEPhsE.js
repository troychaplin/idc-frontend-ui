import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./index-DBbAxHZ6.js";import{N as m}from"./data-1dUScgdp.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";const x={title:"Components/Site Header",component:a,tags:["autodocs"]},r={args:{},render:()=>e.jsxs(a,{children:[e.jsx("a",{href:"/","aria-label":"Go to homepage",children:e.jsx(a.SiteLogo,{})}),e.jsx(a.Navigation,{children:m.map((i,n)=>e.jsx("li",{className:"idc-navitem",children:e.jsx("a",{href:i.href,children:i.label})},n))}),e.jsx(a.Aside,{})]})};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {} as SiteHeaderProps,
  render: () => <SiteHeader>
      <a href="/" aria-label="Go to homepage">
        <SiteHeader.SiteLogo />
      </a>
      <SiteHeader.Navigation>
        {NavItems.map((item, index) => <li key={index} className="idc-navitem">
            <a href={item.href}>{item.label}</a>
          </li>)}
      </SiteHeader.Navigation>
      <SiteHeader.Aside />
    </SiteHeader>
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const S=["Primary"];export{r as Primary,S as __namedExportsOrder,x as default};
