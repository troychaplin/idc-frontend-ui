import{j as t}from"./jsx-runtime-j_jdvEMj.js";import{B as r}from"./index-9IUeGTwr.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=({children:o,isCenter:u=!1})=>{const c=u?"justify-center":"justify-start";return t.jsx("div",{className:`ui-buttongroup flex ${c} gap-4`,children:o})};n.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B={title:"Components/Button Group",component:n,tags:["autodocs"]},e={args:{gap:20,isCenter:!1},render:o=>t.jsxs(n,{...o,children:[t.jsx(r,{label:"Button One"}),t.jsx(r,{label:"Button Two",color:"orange",colorStrength:100,textColor:"dark"}),t.jsx(r,{label:"Button Three",color:"blue",colorStrength:300,textColor:"dark",isOutline:!0})]})};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    gap: 20,
    isCenter: false
  } as ButtonGroupProps,
  render: args => <ButtonGroup {...args}>
      <Button label="Button One" />
      <Button label="Button Two" color="orange" colorStrength={100} textColor="dark" />
      <Button label="Button Three" color="blue" colorStrength={300} textColor="dark" isOutline />
    </ButtonGroup>
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const g=["Primary"];export{e as Primary,g as __namedExportsOrder,B as default};
