import{j as a}from"./jsx-runtime-j_jdvEMj.js";import{c as p}from"./propClasses-DU0fXkHw.js";import{C as m}from"./index-HekJz0bJ.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s=({children:o,cols:d=3,gap:e=20})=>{const i={gridGap:e||""};return a.jsx("div",{className:`ui-cardgroup grid ${p[d]}`,style:i,children:o})};s.__docgenInfo={description:"",methods:[],displayName:"CardGroup",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cols:{required:!1,tsType:{name:"union",raw:"keyof typeof uiGridColumns",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:'"1/3"'},{name:"literal",value:'"2/3"'}]},description:"",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};const y={title:"Components/Card Group",component:s,tags:["autodocs"]},r={args:{cols:3,gap:20},render:o=>a.jsx(s,{...o,children:Array.from({length:8}).map((d,e)=>a.jsx(m,{rounded:"base",borderWidth:1,borderColor:"#dfdfdf",children:a.jsxs("p",{className:"py-4 px-5",children:["Card #",e]})}))})};var n,t,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const x=["Primary"];export{r as Primary,x as __namedExportsOrder,y as default};
