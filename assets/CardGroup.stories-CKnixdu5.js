import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{c as p}from"./propClasses-DU0fXkHw.js";import{C as i}from"./index-HekJz0bJ.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o=({children:a,cols:d=3})=>e.jsx("div",{className:`ui-cardgroup grid ${p[d]} gap-6`,children:a});o.__docgenInfo={description:"",methods:[],displayName:"CardGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cols:{required:!1,tsType:{name:"union",raw:"keyof typeof uiGridColumns",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:'"1/3"'},{name:"literal",value:'"2/3"'}]},description:"",defaultValue:{value:"3",computed:!1}}}};const g={title:"Components/Card Group",component:o,tags:["autodocs"]},r={args:{cols:3,gap:20},render:a=>e.jsx(o,{...a,children:Array.from({length:8}).map((d,l)=>e.jsx(i,{rounded:"base",borderWidth:1,borderColor:"#dfdfdf",children:e.jsxs("p",{className:"py-4 px-5",children:["Card #",l]})}))})};var s,n,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: 20
  } as CardGroupProps,
  render: args => <CardGroup {...args}>
      {Array.from({
      length: 8
    }).map((_, index) => <Card rounded="base" borderWidth={1} borderColor="#dfdfdf">
          <p className="py-4 px-5">Card #{index}</p>
        </Card>)}
    </CardGroup>
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const x=["Primary"];export{r as Primary,x as __namedExportsOrder,g as default};
