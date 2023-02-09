import{s as t,h as m,a as n,j as e}from"./index.b8eef1ee.js";import{a as o,H as f}from"./Headline.ab3ddaad.js";const a=t.button`
  cursor: pointer;
  width: 150px;
  padding: 0.5em 0;
  margin: 0.5em;
  color: #ffffff;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: blue;
  &:hover {
    filter: drop-shadow(0 0 2em #2196f3);
  }
`,h=`Web Developer specializing in front end development.
<p>Experienced with all stages of the
development cycle for dynamic web projects. Versed in
programming languages such as HTML5, CSS, SCSS, JavaScript, TypeScript. </p>
<p> <a href="https://github.com/gfouz">Projects: https://github.com/gfouz</a> </p>
<p><a href="https://youtube.com/@giovanifouz5033">YouTube: https://youtube.com/@giovanifouz5033</a></p>
<p><a href="https://gfouz.github.io/next-blog-2023">Blog: https://gfouz.github.io/next-blog-2023</a></p>  `,g=["Strong decision maker","standalone problem solver","Innovative","Service-focused"],b=`Front-end developer- 09/2021 up to 10/2021
DreamSolution: Mexico https://dreamsolutionsco.com
tel: +52 222 434 7574 .
Fullstack developer \u2013 03/2022 up to 2/2023.
CUANTICO:
Calle 253. Esq. 94, No. 9218. La Cumbre,San Miguel del Padr\xF3n, La
Habana.
tel: 54695264, 52392484, cuanticohtv@gmail.com`,v=`Pre-university level.
English language: self taught advanced level.
Self taught Knowledge about electronics and c++.`,y=`I currently use react-query, react-hook-form, zustang, valtio,
react-router-dom, and for css in js the popular styled-components.
Back-end: Express and ORM to abstract data bases.
Github projects: https://github.com/gfouz`;function R(){const c=m(),u=()=>{fetch("fouzsummary.pdf").then(r=>{r.blob().then(d=>{const p=window.URL.createObjectURL(d);let i=document.createElement("a");i.href=p,i.download="fouzsummary.pdf",i.click()})})};function s(){c(-1)}return n(x,{children:[e(S,{children:e(o,{bolder:!0,ml:"1em",children:"gfouz curriculum"})}),n(k,{children:[e(C,{children:e(z,{})}),e(o,{upper:!0,bolder:!0,mt:!0,children:"Overview"}),e(w,{dangerouslySetInnerHTML:{__html:h}}),e(o,{upper:!0,bolder:!0,mt:!0,children:"skills hightlights"}),e(L,{children:g.map(r=>e("li",{children:r}))}),e(o,{upper:!0,bolder:!0,mt:!0,children:"experience"}),e(l,{children:b}),e(o,{upper:!0,bolder:!0,mt:!0,children:"EDUCATION OR OTHER SKILLS"}),e(l,{children:v}),e(o,{upper:!0,bolder:!0,mt:!0,children:"LIBRARIES OR TECHNOLOGIES"}),e(l,{children:y}),n("div",{children:[e(o,{upper:!0,bolder:!0,center:!0,mt:!0,children:"Click on below button to download PDF file"}),n(j,{children:[e(E,{onClick:u,children:"Download PDF"}),e(O,{onClick:s,children:"Cancel"})]})]})]})]})}const x=t.div`
  margin: 0 auto;
  padding: 0 0 5em 0;
  max-width: 735px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px #999999;
  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
`,S=t(f)``,k=t.div`
  padding: 1em;
`,l=t.p`
  text-align: left;
  font-size: 1.1em;
`,w=t.div`
  text-align: left;
  font-size: 1.1em;
  a {
    font-family: signika;
    color: #008394;
    &:hover {
     color: #ff0000;
    }
  }
`,C=t.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`,z=t.img.attrs({src:"./images/gfouzcoffee.jpg",alt:"gfouz"})`
  max-width: 100%;
  height: auto;
`,L=t.ol`
  padding: 0 1em;
  display: flex;
  text-align: left;
  flex-direction: column;
`,j=t.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em;
`,E=t(a)`
`,O=t(a)`
  color: #888888;
  background-color: #99999950;
`;export{R as default};
