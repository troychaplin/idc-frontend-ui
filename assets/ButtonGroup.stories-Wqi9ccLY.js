import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./index-BrgS-C5j.js";const r=({children:e,isCenter:u=!1})=>{const c=u?"justify-center":"justify-start";return t.jsx("div",{className:`ui-buttongroup flex ${c} gap-4`,children:e})};try{r.displayName="ButtonGroup",r.__docgenInfo={description:"",displayName:"ButtonGroup",props:{isCenter:{defaultValue:{value:"false"},description:"",name:"isCenter",required:!1,type:{name:"boolean"}}}}}catch{}const d={title:"Components/Button Group",component:r,tags:["autodocs"]},o={args:{gap:20,isCenter:!1},render:e=>t.jsxs(r,{...e,children:[t.jsx(n,{label:"Button One"}),t.jsx(n,{label:"Button Two",color:"orange",colorStrength:100,textColor:"dark"}),t.jsx(n,{label:"Button Three",color:"blue",colorStrength:300,textColor:"dark",isOutline:!0})]})};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    gap: 20,
    isCenter: false
  } as ButtonGroupProps,
  render: args => <ButtonGroup {...args}>
      <Button label="Button One" />
      <Button label="Button Two" color="orange" colorStrength={100} textColor="dark" />
      <Button label="Button Three" color="blue" colorStrength={300} textColor="dark" isOutline />
    </ButtonGroup>
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const m=["Primary"];export{o as Primary,m as __namedExportsOrder,d as default};
