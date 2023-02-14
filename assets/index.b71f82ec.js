import{s as t,r as d,h as b,a as i,j as e,H as f}from"./index.39a244b6.js";import{H as v,F as y}from"./Footer.f782dce6.js";const p=t.button`
  cursor: pointer;
  width: 160px;
  padding: 0.5em 0;
  margin: 0.5em;
  color: #ffffff;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: blue;
  &:hover {
    filter: drop-shadow(0 0 2em #f1f1f1);
  }
`,x=`Web Developer specializing in front end development.
<p>Experienced with all stages of the
development cycle for dynamic web projects. Versed in
programming languages such as HTML5, CSS, SCSS, JavaScript, TypeScript. </p>
<p> <a href="https://github.com/gfouz">Projects: https://github.com/gfouz</a> </p>
<p><a href="https://youtube.com/@giovanifouz5033">YouTube: https://youtube.com/@giovanifouz5033</a></p>
<p><a href="https://gfouz.github.io/next-blog-2023">Blog: https://gfouz.github.io/next-blog-2023</a></p>  `,S=["Strong decision maker","standalone problem solver","Innovative","Service-focused"],w=`<p><span style="color:#34a45c;font-weight: bolder">Front-end developer:</span> 
09/2021 up to 10/2021
DreamSolution: Mexico https://dreamsolutionsco.com
tel: +52 222 434 7574 .</p>
<p><span style="color:#34a45c; font-weight: bolder">Fullstack developer: </span>03/2022 up to 2/2023.
CUANTICO:
Calle 253. Esq. 94, No. 9218. La Cumbre,San Miguel del Padr\xF3n, La
Habana.
Correo: cuanticosurl@gmail.com </p>`,k=`Pre-university level.
<p>English language: self taught advanced level.</p>
<p>Self taught Knowledge about electronics and c++.</p>`,C=`I currently use react-query, react-hook-form, zustang, valtio,
react-router-dom, and for css in js the popular styled-components.
Back-end: Express and ORM to abstract data bases.
<p><strong>Projects: </strong><a href="https://github.com/gfouz">https://github.com/gfouz</a></p>`;function z(){fetch("fouzsummary.pdf").then(l=>{l.blob().then(c=>{const o=window.URL.createObjectURL(c);let r=document.createElement("a");r.href=o,r.download="fouzsummary.pdf",r.click()})})}function _(){const[l,c]=d.exports.useState(!1),[o,r]=d.exports.useState(0),h=b(),g=()=>{c(!0),z()};function m(){h(-1)}return d.exports.useEffect(()=>{let a;return l&&o<100?a=setInterval(()=>{r(u=>u+1)},10):(c(!1),clearInterval(a),r(0)),()=>{clearInterval(a)}},[l,o]),i(L,{children:[e(I,{children:e(f,{bolder:!0,ml:"1em",center:!0,children:"gfouz curriculum"})}),i(j,{children:[e(E,{children:e(O,{})}),e(n,{upper:!0,bolder:!0,mt:!0,children:"Overview"}),e(s,{dangerouslySetInnerHTML:{__html:x}}),e(n,{upper:!0,bolder:!0,mt:!0,children:"skills hightlights"}),e(T,{children:S.map((a,u)=>e("li",{children:a},u))}),e(n,{upper:!0,bolder:!0,mt:!0,children:"experience"}),e(s,{dangerouslySetInnerHTML:{__html:w}}),e(n,{upper:!0,bolder:!0,mt:!0,children:"EDUCATION OR OTHER SKILLS"}),e(s,{dangerouslySetInnerHTML:{__html:k}}),e(n,{upper:!0,bolder:!0,mt:!0,children:"LIBRARIES OR TECHNOLOGIES"}),e(s,{dangerouslySetInnerHTML:{__html:C}}),i(M,{children:[e(n,{upper:!0,bolder:!0,center:!0,mt:!0,color:"#f1f1f1",children:"Click button to download PDF file"}),i(P,{children:[i(R,{onClick:g,children:["Download PDF ",o,"%"]}),e(B,{onClick:m,children:"Cancel"})]}),e("div",{style:{width:`${o}%`,height:"2px",backgroundColor:"#06ade5",filter:"drop-shadow(2em 0 1em #ffffff)"}}),e(H,{children:"gfouz"})]})]})]})}const L=t.div`
  margin: 0 auto;
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
`,I=t(v)``,H=t(y)`

  color: #f1f1f1;
  background-color: transparent;
`,j=t.div``,s=t.div`
  padding: 0 0.5em;
  text-align: left;
  a {
    font-family: signika;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`,n=t(f)`
  padding: 0.5em;
`,E=t.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`,O=t.img.attrs({src:"./images/gfouzcoffee.jpg",alt:"gfouz"})`
  max-width: 100%;
  height: auto;
  &:hover {
   transform: rotateY(180deg);
   transition: 1s;
  }
`,T=t.ol`
  padding: 0 1.5em;
  display: flex;
  text-align: left;
  flex-direction: column;
`,M=t.div`
 padding: 1em 0;
 margin: 2em 0 0 0;
 background-color: #333333;
`,P=t.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`,R=t(p)`
   background-color: #06ade5;
`,B=t(p)`
  color: #f1f1f1;
  background-color: #99999950;
`;export{_ as default};
