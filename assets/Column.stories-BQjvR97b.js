import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{u as o,c as p}from"./propClasses-DU0fXkHw.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const n=({children:a})=>e.jsx("div",{children:a});n.displayName="Column.Content";n.__docgenInfo={description:"",methods:[],displayName:"Column.Content",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const r=({children:a,maxWidth:c="5xl",cols:m=2})=>e.jsx("div",{className:`ui-column ui-no-max-width ${o[c]} mx-auto grid ${p[m]} gap-6`,children:a}),l=Object.assign(r,{Content:n});r.__docgenInfo={description:"",methods:[],displayName:"ColumnContainer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"keyof typeof uiMaxWidth",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"4xl"'},{name:"literal",value:'"5xl"'},{name:"literal",value:'"6xl"'},{name:"literal",value:'"7xl"'},{name:"literal",value:"max"},{name:"literal",value:"full"}]},description:"",defaultValue:{value:"'5xl'",computed:!1}},cols:{required:!1,tsType:{name:"union",raw:"keyof typeof uiGridColumns",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:'"1/3"'},{name:"literal",value:'"2/3"'}]},description:"",defaultValue:{value:"2",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:""}}};const C={title:"Layouts/Column",component:l,tags:["autodocs"]},u={args:{maxWidth:"5xl",cols:2,gap:20},render:a=>e.jsxs(l,{...a,children:[e.jsxs(l.Content,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at consectetur lectus iaculis vel. Cras non fringilla velit, a posuere felis. Mauris faucibus dui ultricies ultrices luctus. Aliquam erat volutpat. Vestibulum imperdiet, enim non elementum pulvinar, lacus quam vestibulum eros, ut eleifend sem dui ut quam."}),a.cols==="2/3"&&e.jsx("p",{children:"Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus."})]}),e.jsxs(l.Content,{children:[e.jsx("p",{children:"Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus."}),a.cols==="1/3"&&e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at consectetur lectus iaculis vel. Cras non fringilla velit, a posuere felis. Mauris faucibus dui ultricies ultrices luctus. Aliquam erat volutpat. Vestibulum imperdiet, enim non elementum pulvinar, lacus quam vestibulum eros, ut eleifend sem dui ut quam."})]}),(a.cols===3||a.cols===4||a.cols===6)&&e.jsx(l.Content,{children:e.jsx("p",{children:"Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus."})}),(a.cols===4||a.cols===6)&&e.jsx(l.Content,{children:e.jsx("p",{children:"Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus."})}),a.cols===6&&e.jsx(l.Content,{children:e.jsx("p",{children:"Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus."})}),a.cols===6&&e.jsx(l.Content,{children:e.jsx("p",{children:"Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus."})})]})};var i,s,t;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    maxWidth: '5xl',
    cols: 2,
    gap: 20
  } as ColumnProps,
  render: args => <Column {...args}>
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at consectetur lectus
          iaculis vel. Cras non fringilla velit, a posuere felis. Mauris faucibus dui ultricies ultrices luctus. Aliquam
          erat volutpat. Vestibulum imperdiet, enim non elementum pulvinar, lacus quam vestibulum eros, ut eleifend sem
          dui ut quam.
        </p>
        {args.cols === '2/3' && <p>
            Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
            fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam
            finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
          </p>}
      </Column.Content>
      <Column.Content>
        <p>
          Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
          fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam finibus
          sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
        </p>
        {args.cols === '1/3' && <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at consectetur lectus
            iaculis vel. Cras non fringilla velit, a posuere felis. Mauris faucibus dui ultricies ultrices luctus.
            Aliquam erat volutpat. Vestibulum imperdiet, enim non elementum pulvinar, lacus quam vestibulum eros, ut
            eleifend sem dui ut quam.
          </p>}
      </Column.Content>
      {(args.cols === 3 || args.cols === 4 || args.cols === 6) && <Column.Content>
          <p>
            Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
            fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam
            finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
          </p>
        </Column.Content>}
      {(args.cols === 4 || args.cols === 6) && <Column.Content>
          <p>
            Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
            fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam
            finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
          </p>
        </Column.Content>}
      {args.cols === 6 && <Column.Content>
          <p>
            Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
            fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam
            finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
          </p>
        </Column.Content>}
      {args.cols === 6 && <Column.Content>
          <p>
            Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
            fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam
            finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
          </p>
        </Column.Content>}
    </Column>
}`,...(t=(s=u.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const N=["Primary"];export{u as Primary,N as __namedExportsOrder,C as default};
