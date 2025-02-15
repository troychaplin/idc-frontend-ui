import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CMYaqno1.js";import"./DocsRenderer-CFRXHY34-Cm7RNq6Y.js";import{b as l}from"./index-8eDtacwa.js";import"./index-yBjzXJbu.js";import"./index-DC2CtFZN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CLqtgM08.js";import"./react-18-sibK6c23.js";import"./index-IE9ObSwG.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"react--typescript--vite",children:"React + TypeScript + Vite"}),`
`,e.jsx(n.p,{children:"This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules."}),`
`,e.jsx(n.p,{children:"Currently, two official plugins are available:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md",rel:"nofollow",children:"@vitejs/plugin-react"})," uses ",e.jsx(n.a,{href:"https://babeljs.io/",rel:"nofollow",children:"Babel"})," for Fast Refresh"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/vitejs/vite-plugin-react-swc",rel:"nofollow",children:"@vitejs/plugin-react-swc"})," uses ",e.jsx(n.a,{href:"https://swc.rs/",rel:"nofollow",children:"SWC"})," for Fast Refresh"]}),`
`]}),`
`,e.jsx(n.h2,{id:"expanding-the-eslint-configuration",children:"Expanding the ESLint configuration"}),`
`,e.jsx(n.p,{children:"If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Configure the top-level ",e.jsx(n.code,{children:"parserOptions"})," property like this:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Replace ",e.jsx(n.code,{children:"plugin:@typescript-eslint/recommended"})," to ",e.jsx(n.code,{children:"plugin:@typescript-eslint/recommended-type-checked"})," or ",e.jsx(n.code,{children:"plugin:@typescript-eslint/strict-type-checked"})]}),`
`,e.jsxs(n.li,{children:["Optionally add ",e.jsx(n.code,{children:"plugin:@typescript-eslint/stylistic-type-checked"})]}),`
`,e.jsxs(n.li,{children:["Install ",e.jsx(n.a,{href:"https://github.com/jsx-eslint/eslint-plugin-react",rel:"nofollow",children:"eslint-plugin-react"})," and add ",e.jsx(n.code,{children:"plugin:react/recommended"})," & ",e.jsx(n.code,{children:"plugin:react/jsx-runtime"})," to the ",e.jsx(n.code,{children:"extends"})," list"]}),`
`]})]})}function o(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}function s(t){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Get Started/How to Use"}),`
`,e.jsx(o,{})]})}function w(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s()}export{w as default};
