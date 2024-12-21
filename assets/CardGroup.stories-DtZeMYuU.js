import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./propClasses-DU0fXkHw.js";import{C as u}from"./index-Cd4fBd-f.js";const o=({children:r,cols:d=3})=>e.jsx("div",{className:`ui-cardgroup grid ${l[d]} gap-6`,children:r});try{o.displayName="CardGroup",o.__docgenInfo={description:"",displayName:"CardGroup",props:{cols:{defaultValue:{value:"3"},description:"",name:"cols",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"6"},{value:'"1/3"'},{value:'"2/3"'}]}}}}}catch{}const C={title:"Components/Card Group",component:o,tags:["autodocs"]},a={args:{cols:3,gap:20},render:r=>e.jsx(o,{...r,children:Array.from({length:8}).map((d,t)=>e.jsx(u,{rounded:"base",borderWidth:1,borderColor:"#dfdfdf",children:e.jsxs("p",{className:"py-4 px-5",children:["Card #",t]})}))})};var s,n,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const f=["Primary"];export{a as Primary,f as __namedExportsOrder,C as default};
