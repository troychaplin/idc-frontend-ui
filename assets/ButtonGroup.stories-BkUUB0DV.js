import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{B as r}from"./index-9IUeGTwr.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=({children:o,isCenter:c=!1,gap:a=20})=>{const i=c?"justify-center":"justify-start",p={gridGap:a||""};return e.jsx("div",{className:`ui-buttongroup flex ${i}`,style:p,children:o})};n.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isCenter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const g={title:"Components/Button Group",component:n,tags:["autodocs"]},t={args:{gap:20,isCenter:!1},render:o=>e.jsxs(n,{...o,children:[e.jsx(r,{label:"Button One"}),e.jsx(r,{label:"Button Two",color:"orange",colorStrength:100,textColor:"dark"}),e.jsx(r,{label:"Button Three",color:"blue",colorStrength:300,textColor:"dark",isOutline:!0})]})};var s,l,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    gap: 20,
    isCenter: false
  } as ButtonGroupProps,
  render: args => <ButtonGroup {...args}>
      <Button label="Button One" />
      <Button label="Button Two" color="orange" colorStrength={100} textColor="dark" />
      <Button label="Button Three" color="blue" colorStrength={300} textColor="dark" isOutline />
    </ButtonGroup>
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const x=["Primary"];export{t as Primary,x as __namedExportsOrder,g as default};
