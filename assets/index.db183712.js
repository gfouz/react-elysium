var de=Object.defineProperty,ce=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var Q=(e,n,i)=>n in e?de(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,g=(e,n)=>{for(var i in n||(n={}))fe.call(n,i)&&Q(e,i,n[i]);if(K)for(var i of K(n))he.call(n,i)&&Q(e,i,n[i]);return e},U=(e,n)=>ce(e,ue(n));import{r as h,s as a,u as me,j as t,F as pe,a as s,H as c}from"./index.c92b15c8.js";import{p as V,u as Z,R as ge}from"./Routes.73d33e7c.js";import{H as ve,F as ye}from"./Footer.fffe2762.js";import{S as be}from"./SpyGlass.fd24e656.js";var ee={};function we(e){if(!e||typeof window=="undefined")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n),e}Object.defineProperty(ee,"__esModule",{value:!0});var l=h.exports;function xe(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var f=xe(l);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var v=function(){return v=Object.assign||function(n){for(var i,r=1,o=arguments.length;r<o;r++){i=arguments[r];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(n[d]=i[d])}return n},v.apply(this,arguments)};we(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}`);var ke=function(e){var n,i,r,o,d=e.style,te=d===void 0?{}:d,C=e.className,ne=C===void 0?"":C,z=e.play,m=z===void 0?!0:z,j=e.pauseOnHover,E=j===void 0?!1:j,N=e.pauseOnClick,R=N===void 0?!1:N,q=e.direction,A=q===void 0?"left":q,L=e.speed,M=L===void 0?20:L,I=e.delay,F=I===void 0?0:I,H=e.loop,p=H===void 0?0:H,O=e.gradient,ie=O===void 0?!0:O,P=e.gradientColor,y=P===void 0?[255,255,255]:P,$=e.gradientWidth,b=$===void 0?200:$,ae=e.onFinish,re=e.onCycleComplete,T=e.children,W=l.useState(0),B=W[0],oe=W[1],G=l.useState(0),X=G[0],se=G[1],Y=l.useState(!1),w=Y[0],le=Y[1],x=l.useRef(null),k=l.useRef(null);l.useEffect(function(){if(!!w){var _=function(){k.current&&x.current&&(oe(x.current.getBoundingClientRect().width),se(k.current.getBoundingClientRect().width))};return _(),window.addEventListener("resize",_),function(){window.removeEventListener("resize",_)}}},[w]),l.useEffect(function(){le(!0)},[]);var D="rgba("+y[0]+", "+y[1]+", "+y[2],J=X<B?B/M:X/M;return f.default.createElement(l.Fragment,null,w?f.default.createElement("div",{ref:x,style:v(v({},te),(n={},n["--pause-on-hover"]=!m||E?"paused":"running",n["--pause-on-click"]=!m||E&&!R||R?"paused":"running",n)),className:ne+" marquee-container"},ie&&f.default.createElement("div",{style:(i={},i["--gradient-color"]=D+", 1), "+D+", 0)",i["--gradient-width"]=typeof b=="number"?b+"px":b,i),className:"overlay"}),f.default.createElement("div",{ref:k,style:(r={},r["--play"]=m?"running":"paused",r["--direction"]=A==="left"?"normal":"reverse",r["--duration"]=J+"s",r["--delay"]=F+"s",r["--iteration-count"]=p?""+p:"infinite",r),className:"marquee",onAnimationIteration:re,onAnimationEnd:ae},T),f.default.createElement("div",{style:(o={},o["--play"]=m?"running":"paused",o["--direction"]=A==="left"?"normal":"reverse",o["--duration"]=J+"s",o["--delay"]=F+"s",o["--iteration-count"]=p?""+p:"infinite",o),className:"marquee","aria-hidden":"true"},T)):null)},_e=ee.default=ke;const Se=V({opt:"homepage",setOption:e=>Se.opt=e}),u=V({st:!1,setTrue:()=>u.st=!0,setFalse:()=>u.st=!1,reverse:()=>u.st=!u.st}),Ce=a.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${e=>e.color};
  background-color: ${e=>e.bg};
`;function ze(e){const n=me(),{pathname:i}=n,r=e.options.filter(o=>o.path!==i);return t(pe,{children:t(je,{children:t("div",{className:"nav",children:r.map((o,d)=>t("ul",{className:"nav__list",children:s("li",{className:"nav__item",children:[t("div",{className:"nav__icon",children:o.icon}),t("div",{className:"nav__link",children:o.link})]})},d))})})})}const je=a.div`
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  .nav__list {
    margin: 1em 0;
  }
  .nav__item {
    display: flex;
  }
  .nav__icon {
    color: white;
    margin: 1.3em 1em 0 1em;
  }
  .nav__link {
    margin: 1em 1em 0 0;
    color: white;
  }
`;function Ee(e){const n=Z(u),{st:i,setFalse:r}=n;return t(Ne,{children:t("div",{className:i?"opened":"closed",onClick:r,children:t(ze,{options:e.options})})})}const Ne=a.nav`
  .opened {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #00000099;
    transition: all 1s;
    transform: translateX(0);
    z-index: 10;
    width: 100%;
    @media (min-width: 600px) {
      width: 20%;
    }
  }
  .closed {
    display: none;
    transform: translateX(-40%);
  }
`,Re=({st:e,reverse:n})=>t(Ae,{children:s("button",{onClick:()=>n(),children:[t("div",{className:e?"opened":"closed"}),t("div",{className:e?"opened":"closed"}),t("div",{className:e?"opened":"closed"})]})});var qe=Re;const Ae=a.div`
  button {
    position: absolute;
    right: 0.1em;
    top: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 200px;
    height: 40px;
    background-color: transparent;
    cursor: pointer;
    z-index: 10;

    &:focus {
      outline: none;
    }
  }
  .opened {
    width: 1.5rem;
    height: 0.2rem;
    background: #00ffff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(45deg);
    }

    :nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }

    :nth-child(3) {
      transform: rotate(-45deg);
    }
  }

  .closed {
    width: 1.5rem;
    height: 0.2rem;
    background: #fff4a3;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(0);
    }

    :nth-child(2) {
      opacity: 1;
      transform: translateX(0);
    }

    :nth-child(3) {
      transform: rotate(0);
    }
  }
`;function Le(e){const{text:n}=e;return t(Me,U(g({},e),{children:t("p",{children:n})}))}const Me=a.div`
  width: 100%;
  color: ${e=>e.color||"#c40550"};
  font-weight: bolder;
  font-size: ${e=>e.size||"12px"};
  text-transform: uppercase;
  text-align: ${e=>e.align||"center"};
  padding: ${e=>e.p};
  margin: ${e=>e.m};

  p {
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 2s steps(40, end);
    font-family: ${e=>e.fontfam};
    text-shadow: ${e=>e.shadow?"10px 1px 10px #000000":""};
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;function Ie(e){return h.exports.createElement("svg",g({viewBox:"0 0 32 32",width:e.width||"1em",length:e.height||"auto"},e),h.exports.createElement("path",{fill:e.color,d:"M16 2c-.504 0-.996.184-1.375.563l-2.813 2.843c-.152.082-.28.2-.374.344l-8.876 8.875a1.947 1.947 0 000 2.75l12.063 12.063a1.955 1.955 0 002.75 0l12.063-12.063a1.947 1.947 0 000-2.75L17.374 2.562A1.923 1.923 0 0016 2zm0 2.031L27.969 16 16 27.969 4.031 16l8.282-8.281 1.75 1.75A1.98 1.98 0 0014 10c0 .738.402 1.371 1 1.719v8.562c-.598.348-1 .98-1 1.719a1.999 1.999 0 104 0c0-.738-.402-1.371-1-1.719v-7.843l3.063 3.062A1.999 1.999 0 0022 18c1.104 0 1.999-.895 1.999-2a1.999 1.999 0 00-2.5-1.938L17.937 10.5A1.999 1.999 0 0016 8a1.98 1.98 0 00-.53.063l-1.75-1.75z"}))}function Fe(e){return h.exports.createElement("svg",g({viewBox:"0 0 32 32",width:e.width||"1em",length:e.height||"auto"},e),h.exports.createElement("path",{fill:e.color,d:"M16 6c-3.766 0-7.094.39-9.125.688-1.68.246-3.035 1.511-3.344 3.187C3.27 11.301 3 13.387 3 16s.27 4.7.531 6.125c.309 1.676 1.664 2.945 3.344 3.188 2.04.296 5.379.687 9.125.687 3.746 0 7.086-.39 9.125-.688 1.68-.242 3.035-1.511 3.344-3.187.261-1.43.531-3.52.531-6.125s-.266-4.695-.531-6.125c-.309-1.676-1.664-2.941-3.344-3.188C23.094 6.391 19.765 6 16 6zm0 2c3.633 0 6.879.371 8.844.656A1.966 1.966 0 0126.5 10.25c.242 1.32.5 3.277.5 5.75 0 2.469-.258 4.43-.5 5.75a1.957 1.957 0 01-1.656 1.594C22.87 23.629 19.609 24 16 24c-3.61 0-6.875-.371-8.844-.656A1.962 1.962 0 015.5 21.75C5.258 20.43 5 18.477 5 16c0-2.48.258-4.43.5-5.75a1.962 1.962 0 011.656-1.594C9.117 8.371 12.367 8 16 8zm-3 2.281V21.72l1.5-.844 7-4L23 16l-1.5-.875-7-4zm2 3.438L18.969 16 15 18.281z"}))}const He=`Hello my name is Giovani, i began learning c++ in 2017 and it was my
first experience with Arduino boards. But it was a kind of
hobby until year 2019 that i began studying web programming with a
better purpose in mind. So that Node js was my pick, i have been
studying back-end frameworks like Express, and related libraries to
afford security and functionality, besides very useful concepts to
reuse logic such as middlewares and i have had experience working with
ORM or ODM to abstract databases such as Sequelize or Mongoose. I have
designed and abstracted databases for a System that will afford PKI
services in Cuba. `,Oe=`React is open-sourced by Facebook just a shy a few years ago, it\u2019s
already become the number one choice for JavaScript devs around the
globe. And i have picked to work with this wonderful technology that
brings so many advantages. However Technology changes, and it changes
quickly. I am open-minded to new technologies in order to learn them
and then also take advantage of them. I currently use react libraries
such as react-hook-form, react-query, valtio, zustand,
styled-components and the popular react-router-dom.`,Pe=`Tell me and I will forget, show me and I may
 remenber, involve me and I will understand`,$e=`<p>I worked in the first phase of a system to generate digital 
certificates for Segurm\xE1tica which is the information security company in Cuba, 
I participated in the creation or abstraction of the database in this case relational 
using PostgreSQL and Sequelize as ORM. As well as designed the Rest Api of routes and 
controllers with Express and Node. Use React for client side rendering, this system has 
great importance for the development of digital certification in Cuba.</p>
<p>(PKI) project: <a href="https://github.com/gfouz/pki-server-2023">
https://github.com/gfouz/pki-server-2023</a></p>`;function rt(){const e=Z(u),{st:n,reverse:i}=e;return s(Te,{children:[s(ve,{bg:"#2a160f",color:"#c2c5aa",children:["gfouz-",new Date().getFullYear(),t(qe,{st:n,reverse:i})]}),s(We,{children:[t(Xe,{children:t(De,{})}),t(c,{size:"1.3em",center:!0,color:"#451a23",bolder:!0,spacing:"5px",fontfam:"signika",p:"2em 0 0 0",children:t(Le,{color:"#451a23",text:"Fullstack development with NodeJs"})}),t(Ze,{children:s(Be,{center:!0,children:['"',Pe,'"']})}),t(Ke,{children:t(be,{fontSize:"40px",color:"#451a23"})}),t(Ye,{children:t(Je,{})}),t(c,{center:!0,bolder:!0,upper:!0,p:"2em 0",children:"Technologies"}),t(_e,{children:t(c,{bolder:!0,color:"#451a23",spacing:"6px",upper:!0,fontfam:"signika",children:"ReactJS styled-components valtio react-query react-hook-form axios eslint prettier typescript ExpressJS"})})]}),s(Ce,{bg:"#d3bb72",children:[s(S,{children:[t(c,{upper:!0,children:"Overview"}),s("p",{children:[" ",He," "]})]}),t(S,{children:s("p",{children:[" ",Oe," "]})}),t(c,{center:!0,bolder:!0,children:"PKI System"}),t(S,{children:t(Ge,{dangerouslySetInnerHTML:{__html:$e}})}),s(Qe,{children:[s(Ue,{children:["YouTube Channel",t(Fe,{fontSize:"30px",color:"#c40550"})]}),s(Ve,{children:["Github Projects",t(Ie,{fontSize:"30px",color:"#222222"})]})]})]}),t(Ee,{options:ge}),s(ye,{bg:"#2a160f",color:"#c2c5aa",children:["Portfolio \xA9 ",new Date().getFullYear()]})]})}const Te=a.div`
  display: grid;
  grid-template-areas:
    'header '
    'main'
    'aside'
    'footer';
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        'header  header  header'
        'main    main    aside'
        'footer  footer  footer';
    }
  }
  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
`,We=a.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Be=a(c)`
  font-size: 13px;
`,Ge=a.p`
  text-align: left;
  a {
    font-family: signika;
    color: #008394;
    &:hover {
      color: #ff0000;
    }
  }
`,Xe=a.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
`,Ye=a.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #020203;
`,De=a.img.attrs({src:"./images/workflow.jpg",alt:"knightman"})`
  max-width: 100%;
  height: auto;
`,Je=a.img.attrs({src:"./images/laptop.jpg",alt:"second"})`
  max-width: 100%;
  height: auto;
`,S=a.div`
  text-align: left;
  color: #000000;
  border: none;
  max-width: 400px;
  padding: 1em;
  min-width: 320px;
  font-weight: bolder;
  font-family: signika;
  background-color: #d3bb72;
`,Ke=a.div`
  display: flex;
  justify-content: center;
  padding: 3em 0;
`,Qe=a.div`
  width: 100%;
  padding: 3em 0;
  display: flex;
  justify-content: center;
  font-family: signika;
  background-color: #ffffff;
`,Ue=a.a.attrs({href:"https://youtube.com/@giovanifouz5033"})`
  margin: 0 1em;
  color: #c40550;
  font-weight: bolder;
`,Ve=a.a.attrs({href:"https://github.com/gfouz"})`
  margin: 0 1em;
  font-weight: bolder;
`,Ze=a.div`
  font-weight: bolder;
  font-family: signika;
`;export{rt as default};
