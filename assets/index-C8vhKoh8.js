import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{a as s,b as i}from"./propClasses-CNqKrcN7.js";const r=({children:a,cols:e=3,layout:u="grid"})=>{const l=u==="grid"?`grid ${s[e]}`:`ui-masonry ${i[e]}`;return o.jsx("div",{className:`ui-cardgroup idc-component ${l} gap-8 md:gap-10`,children:a})};try{r.displayName="CardGroup",r.__docgenInfo={description:"",displayName:"CardGroup",props:{cols:{defaultValue:{value:"3"},description:"",name:"cols",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:'"60/40"'},{value:"3"},{value:"4"},{value:"6"},{value:'"1/3"'},{value:'"2/3"'}]}},layout:{defaultValue:{value:"grid"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"grid"'},{value:'"masonry"'}]}}}}}catch{}export{r as C};