import{s as t,h as g,a as n,j as e}from"./index.9541e34d.js";import{H as c}from"./Headline.2458e1a4.js";import{H as h}from"./Header.cfe6de2f.js";const s=t.button`
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
`,f=`Web Developer specializing in front end development.
<p>Experienced with all stages of the
development cycle for dynamic web projects. Versed in
programming languages such as HTML5, CSS, SCSS, JavaScript, TypeScript. </p>
<p> <a href="https://github.com/gfouz">Projects: https://github.com/gfouz</a> </p>
<p><a href="https://youtube.com/@giovanifouz5033">YouTube: https://youtube.com/@giovanifouz5033</a></p>
<p><a href="https://gfouz.github.io/next-blog-2023">Blog: https://gfouz.github.io/next-blog-2023</a></p>  `,b=["Strong decision maker","standalone problem solver","Innovative","Service-focused"],v=`<p><span style="color:#34a45c;font-weight: bolder">Front-end developer:</span> 
09/2021 up to 10/2021
DreamSolution: Mexico https://dreamsolutionsco.com
tel: +52 222 434 7574 .</p>
<p><span style="color:#34a45c; font-weight: bolder">Fullstack developer: </span>03/2022 up to 2/2023.
CUANTICO:
Calle 253. Esq. 94, No. 9218. La Cumbre,San Miguel del Padr\xF3n, La
Habana.
tel: 54695264, 52392484, cuanticohtv@gmail.com </p>`,y=`Pre-university level.
<p>English language: self taught advanced level.</p>
<p>Self taught Knowledge about electronics and c++.</p>`,x=`I currently use react-query, react-hook-form, zustang, valtio,
react-router-dom, and for css in js the popular styled-components.
Back-end: Express and ORM to abstract data bases.
<p><strong>Projects: </strong><a src="https://github.com/gfouz">https://github.com/gfouz</a></p>`;function M(){const u=g(),d=()=>{fetch("fouzsummary.pdf").then(i=>{i.blob().then(l=>{const m=window.URL.createObjectURL(l);let a=document.createElement("a");a.href=m,a.download="fouzsummary.pdf",a.click()})})};function p(){u(-1)}return n(S,{children:[e(w,{children:e(c,{bolder:!0,ml:"1em",children:"gfouz curriculum"})}),n(k,{children:[e(C,{children:e(L,{})}),e(o,{upper:!0,bolder:!0,mt:!0,children:"Overview"}),e(r,{dangerouslySetInnerHTML:{__html:f}}),e(o,{upper:!0,bolder:!0,mt:!0,children:"skills hightlights"}),e(z,{children:b.map((i,l)=>e("li",{children:i},l))}),e(o,{upper:!0,bolder:!0,mt:!0,children:"experience"}),e(r,{dangerouslySetInnerHTML:{__html:v}}),e(o,{upper:!0,bolder:!0,mt:!0,children:"EDUCATION OR OTHER SKILLS"}),e(r,{dangerouslySetInnerHTML:{__html:y}}),e(o,{upper:!0,bolder:!0,mt:!0,children:"LIBRARIES OR TECHNOLOGIES"}),e(r,{dangerouslySetInnerHTML:{__html:x}}),n("div",{children:[e(o,{upper:!0,bolder:!0,center:!0,mt:!0,children:"Click button to download PDF file"}),n(H,{children:[e(j,{onClick:d,children:"Download PDF"}),e(I,{onClick:p,children:"Cancel"})]})]})]})]})}const S=t.div`
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
`,w=t(h)``,k=t.div`
`,r=t.div`
  padding: 0 0.5em;
  text-align: left;
  a {
    font-family: signika;
    color: #008394;
    &:hover {
     color: #ff0000;
    }
  }
`,o=t(c)`
  padding: 0.5em;
`,C=t.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`,L=t.img.attrs({src:"./images/gfouzcoffee.jpg",alt:"gfouz"})`
  max-width: 100%;
  height: auto;
`,z=t.ol`
  padding: 0 1.5em;
  display: flex;
  text-align: left;
  flex-direction: column;
`,H=t.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em;
`,j=t(s)`
`,I=t(s)`
  color: #888888;
  background-color: #99999950;
`;export{M as default};
