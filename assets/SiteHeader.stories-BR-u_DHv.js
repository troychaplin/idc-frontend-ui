import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as a}from"./SiteHeader-l-IX7UeA.js";import{N as m}from"./data-1dUScgdp.js";import"./index-yBjzXJbu.js";import"./index-DC2CtFZN.js";import"./_commonjsHelpers-CqkleIqs.js";const S={title:"Components/Site Header",component:a,tags:["autodocs"]},r={args:{},render:()=>e.jsxs(a,{children:[e.jsx("a",{href:"/","aria-label":"Go to homepage",children:e.jsx(a.SiteLogo,{})}),e.jsx(a.Navigation,{children:m.map((i,n)=>e.jsx("li",{className:"idc-navitem",children:e.jsx("a",{href:i.href,children:i.label})},n))}),e.jsx(a.Aside,{})]})};var t,o,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const g=["Primary"];export{r as Primary,g as __namedExportsOrder,S as default};
