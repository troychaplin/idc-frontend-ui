import{j as o}from"./jsx-runtime-j_jdvEMj.js";import{u as d,a as v,b as p}from"./propClasses-DU0fXkHw.js";const c=({children:t,maxWidth:a,rounded:l,shadow:r,borderWidth:e,borderColor:n})=>{const i=a?d[a]:"",u=l?v[l]:"",m=r?p[r]:"",s={borderWidth:e||"",borderColor:e&&n?n:"transparent"};return o.jsx("div",{className:`ui-card bg-white ${i} ${u} ${m}`,style:s,children:t})};c.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"keyof typeof uiMaxWidth",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"4xl"'},{name:"literal",value:'"5xl"'},{name:"literal",value:'"6xl"'},{name:"literal",value:'"7xl"'},{name:"literal",value:"max"},{name:"literal",value:"full"}]},description:""},rounded:{required:!1,tsType:{name:"union",raw:"keyof typeof uiRoundedCorners",elements:[{name:"literal",value:"none"},{name:"literal",value:"sm"},{name:"literal",value:"base"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:'"2xl"'},{name:"literal",value:"full"}]},description:""},shadow:{required:!1,tsType:{name:"union",raw:"keyof typeof uiDropShadow",elements:[{name:"literal",value:"none"},{name:"literal",value:"base"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:'"2xl"'}]},description:""},borderWidth:{required:!1,tsType:{name:"number"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""}}};export{c as C};