import{C as o,s as e}from"./index.fa221f71.js";const i=o`
  position: absolute;
  bottom: 1em;
`,n=o`
  position: static;
`,a=e.div`
  width: 100%;
  cursor: pointer;
  ${t=>t.bottom?i:n};
  color: ${t=>t.color};
  margin-left: ${t=>t.ml};
  margin-top: ${t=>t.mt?"1em":"0"};
  margin: ${t=>t.m};
  padding: ${t=>t.p};
  text-align: ${t=>t.center?"center":"left"};
  font-size: ${t=>t.size};
  letter-spacing: ${t=>t.spacing};
  font-family: ${t=>t.fontfam};
  font-weight: ${t=>t.bolder?"bolder":"normal"};
  font-style: ${t=>t.italic?"italic":"normal"};
  text-transform: ${t=>t.upper&&"uppercase"};
  }
`;export{a as H};
