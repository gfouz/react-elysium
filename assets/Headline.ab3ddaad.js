import{s as e,C as o}from"./index.b8eef1ee.js";const i=e.header`
  grid-area: header;
  width: 100%;
  padding: 1em 0;
  text-align: center;
  color: ${t=>t.color||"#fff4a3"};
  background-color: ${t=>t.bg||"#333333"};
  letter-spacing: 5px;
  font-weight: bolder;
  text-transform: uppercase;
`,r=o`
  position: absolute;
  bottom: 1em;
`,a=o`
  position: static;
`,l=e.div`
  width: 100%;
  cursor: pointer;
  ${t=>t.bottom?r:a};
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
`;export{i as H,l as a};
