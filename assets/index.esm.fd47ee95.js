var Bt=Object.defineProperty,Wt=Object.defineProperties;var jt=Object.getOwnPropertyDescriptors;var De=Object.getOwnPropertySymbols;var st=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var it=(e,t,r)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))st.call(t,r)&&it(e,r,t[r]);if(De)for(var r of De(t))lt.call(t,r)&&it(e,r,t[r]);return e},j=(e,t)=>Wt(e,jt(t));var Se=(e,t)=>{var r={};for(var o in e)st.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&De)for(var o of De(e))t.indexOf(o)<0&&lt.call(e,o)&&(r[o]=e[o]);return r};import{b as Ie,r as E,c as ue,m as Lt,f as Mt,d as zt,o as Ht,e as It,g as Vt,R as V,A as Nt,P as Ft}from"./index.39896219.js";function qt(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function Ve(...e){return t=>{e.forEach(r=>{qt(r,t)})}}function ze(e,t,r,o){const n=Ie(r);return E.exports.useEffect(()=>{const a=typeof e=="function"?e():e!=null?e:document;if(!(!r||!a))return a.addEventListener(t,n,o),()=>{a.removeEventListener(t,n,o)}},[t,e,o,n,r]),()=>{const a=typeof e=="function"?e():e!=null?e:document;a==null||a.removeEventListener(t,n,o)}}var z="top",F="bottom",q="right",H="left",Ue="auto",Ce=[z,F,q,H],de="start",Pe="end",Ut="clippingParents",xt="viewport",ye="popper",Xt="reference",ct=Ce.reduce(function(e,t){return e.concat([t+"-"+de,t+"-"+Pe])},[]),Ot=[].concat(Ce,[Ue]).reduce(function(e,t){return e.concat([t,t+"-"+de,t+"-"+Pe])},[]),Yt="beforeRead",_t="read",Gt="afterRead",Kt="beforeMain",Jt="main",Qt="afterMain",Zt="beforeWrite",er="write",tr="afterWrite",rr=[Yt,_t,Gt,Kt,Jt,Qt,Zt,er,tr];function J(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function le(e){var t=U(e).Element;return e instanceof t||e instanceof Element}function N(e){var t=U(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Xe(e){if(typeof ShadowRoot=="undefined")return!1;var t=U(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function or(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},a=t.elements[r];!N(a)||!J(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(c){var s=n[c];s===!1?a.removeAttribute(c):a.setAttribute(c,s===!0?"":s)}))})}function nr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],a=t.attributes[o]||{},c=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=c.reduce(function(i,p){return i[p]="",i},{});!N(n)||!J(n)||(Object.assign(n.style,s),Object.keys(a).forEach(function(i){n.removeAttribute(i)}))})}}var ar={name:"applyStyles",enabled:!0,phase:"write",fn:or,effect:nr,requires:["computeStyles"]};function K(e){return e.split("-")[0]}var se=Math.max,Be=Math.min,ve=Math.round;function Ne(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Pt(){return!/^((?!chrome|android).)*safari/i.test(Ne())}function me(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,a=1;t&&N(e)&&(n=e.offsetWidth>0&&ve(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ve(o.height)/e.offsetHeight||1);var c=le(e)?U(e):window,s=c.visualViewport,i=!Pt()&&r,p=(o.left+(i&&s?s.offsetLeft:0))/n,l=(o.top+(i&&s?s.offsetTop:0))/a,h=o.width/n,g=o.height/a;return{width:h,height:g,top:l,right:p+h,bottom:l+g,left:p,x:p,y:l}}function Ye(e){var t=me(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function Et(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Xe(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function re(e){return U(e).getComputedStyle(e)}function ir(e){return["table","td","th"].indexOf(J(e))>=0}function oe(e){return((le(e)?e.ownerDocument:e.document)||window.document).documentElement}function je(e){return J(e)==="html"?e:e.assignedSlot||e.parentNode||(Xe(e)?e.host:null)||oe(e)}function pt(e){return!N(e)||re(e).position==="fixed"?null:e.offsetParent}function sr(e){var t=/firefox/i.test(Ne()),r=/Trident/i.test(Ne());if(r&&N(e)){var o=re(e);if(o.position==="fixed")return null}var n=je(e);for(Xe(n)&&(n=n.host);N(n)&&["html","body"].indexOf(J(n))<0;){var a=re(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function Ae(e){for(var t=U(e),r=pt(e);r&&ir(r)&&re(r).position==="static";)r=pt(r);return r&&(J(r)==="html"||J(r)==="body"&&re(r).position==="static")?t:r||sr(e)||t}function _e(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function xe(e,t,r){return se(e,Be(t,r))}function lr(e,t,r){var o=xe(e,t,r);return o>r?r:o}function Ct(){return{top:0,right:0,bottom:0,left:0}}function At(e){return Object.assign({},Ct(),e)}function Rt(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var cr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,At(typeof t!="number"?t:Rt(t,Ce))};function pr(e){var t,r=e.state,o=e.name,n=e.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,s=K(r.placement),i=_e(s),p=[H,q].indexOf(s)>=0,l=p?"height":"width";if(!(!a||!c)){var h=cr(n.padding,r),g=Ye(a),u=i==="y"?z:H,y=i==="y"?F:q,m=r.rects.reference[l]+r.rects.reference[i]-c[i]-r.rects.popper[l],v=c[i]-r.rects.reference[i],O=Ae(a),w=O?i==="y"?O.clientHeight||0:O.clientWidth||0:0,C=m/2-v/2,d=h[u],P=w-g[l]-h[y],b=w/2-g[l]/2+C,x=xe(d,b,P),D=i;r.modifiersData[o]=(t={},t[D]=x,t.centerOffset=x-b,t)}}function fr(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||!Et(t.elements.popper,n)||(t.elements.arrow=n))}var ur={name:"arrow",enabled:!0,phase:"main",fn:pr,effect:fr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(e){return e.split("-")[1]}var dr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function vr(e){var t=e.x,r=e.y,o=window,n=o.devicePixelRatio||1;return{x:ve(t*n)/n||0,y:ve(r*n)/n||0}}function ft(e){var t,r=e.popper,o=e.popperRect,n=e.placement,a=e.variation,c=e.offsets,s=e.position,i=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,h=e.isFixed,g=c.x,u=g===void 0?0:g,y=c.y,m=y===void 0?0:y,v=typeof l=="function"?l({x:u,y:m}):{x:u,y:m};u=v.x,m=v.y;var O=c.hasOwnProperty("x"),w=c.hasOwnProperty("y"),C=H,d=z,P=window;if(p){var b=Ae(r),x="clientHeight",D="clientWidth";if(b===U(r)&&(b=oe(r),re(b).position!=="static"&&s==="absolute"&&(x="scrollHeight",D="scrollWidth")),b=b,n===z||(n===H||n===q)&&a===Pe){d=F;var R=h&&b===P&&P.visualViewport?P.visualViewport.height:b[x];m-=R-o.height,m*=i?1:-1}if(n===H||(n===z||n===F)&&a===Pe){C=q;var f=h&&b===P&&P.visualViewport?P.visualViewport.width:b[D];u-=f-o.width,u*=i?1:-1}}var A=Object.assign({position:s},p&&dr),$=l===!0?vr({x:u,y:m}):{x:u,y:m};if(u=$.x,m=$.y,i){var W;return Object.assign({},A,(W={},W[d]=w?"0":"",W[C]=O?"0":"",W.transform=(P.devicePixelRatio||1)<=1?"translate("+u+"px, "+m+"px)":"translate3d("+u+"px, "+m+"px, 0)",W))}return Object.assign({},A,(t={},t[d]=w?m+"px":"",t[C]=O?u+"px":"",t.transform="",t))}function mr(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,c=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,p={placement:K(t.placement),variation:he(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ft(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ft(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var hr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mr,data:{}},Te={passive:!0};function gr(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,a=n===void 0?!0:n,c=o.resize,s=c===void 0?!0:c,i=U(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach(function(l){l.addEventListener("scroll",r.update,Te)}),s&&i.addEventListener("resize",r.update,Te),function(){a&&p.forEach(function(l){l.removeEventListener("scroll",r.update,Te)}),s&&i.removeEventListener("resize",r.update,Te)}}var wr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gr,data:{}},yr={left:"right",right:"left",bottom:"top",top:"bottom"};function $e(e){return e.replace(/left|right|bottom|top/g,function(t){return yr[t]})}var br={start:"end",end:"start"};function ut(e){return e.replace(/start|end/g,function(t){return br[t]})}function Ge(e){var t=U(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Ke(e){return me(oe(e)).left+Ge(e).scrollLeft}function xr(e,t){var r=U(e),o=oe(e),n=r.visualViewport,a=o.clientWidth,c=o.clientHeight,s=0,i=0;if(n){a=n.width,c=n.height;var p=Pt();(p||!p&&t==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:a,height:c,x:s+Ke(e),y:i}}function Or(e){var t,r=oe(e),o=Ge(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=se(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),c=se(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+Ke(e),i=-o.scrollTop;return re(n||r).direction==="rtl"&&(s+=se(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:c,x:s,y:i}}function Je(e){var t=re(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function kt(e){return["html","body","#document"].indexOf(J(e))>=0?e.ownerDocument.body:N(e)&&Je(e)?e:kt(je(e))}function Oe(e,t){var r;t===void 0&&(t=[]);var o=kt(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),a=U(o),c=n?[a].concat(a.visualViewport||[],Je(o)?o:[]):o,s=t.concat(c);return n?s:s.concat(Oe(je(c)))}function Fe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Pr(e,t){var r=me(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function dt(e,t,r){return t===xt?Fe(xr(e,r)):le(t)?Pr(t,r):Fe(Or(oe(e)))}function Er(e){var t=Oe(je(e)),r=["absolute","fixed"].indexOf(re(e).position)>=0,o=r&&N(e)?Ae(e):e;return le(o)?t.filter(function(n){return le(n)&&Et(n,o)&&J(n)!=="body"}):[]}function Cr(e,t,r,o){var n=t==="clippingParents"?Er(e):[].concat(t),a=[].concat(n,[r]),c=a[0],s=a.reduce(function(i,p){var l=dt(e,p,o);return i.top=se(l.top,i.top),i.right=Be(l.right,i.right),i.bottom=Be(l.bottom,i.bottom),i.left=se(l.left,i.left),i},dt(e,c,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Dt(e){var t=e.reference,r=e.element,o=e.placement,n=o?K(o):null,a=o?he(o):null,c=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(n){case z:i={x:c,y:t.y-r.height};break;case F:i={x:c,y:t.y+t.height};break;case q:i={x:t.x+t.width,y:s};break;case H:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var p=n?_e(n):null;if(p!=null){var l=p==="y"?"height":"width";switch(a){case de:i[p]=i[p]-(t[l]/2-r[l]/2);break;case Pe:i[p]=i[p]+(t[l]/2-r[l]/2);break}}return i}function Ee(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,a=r.strategy,c=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?Ut:s,p=r.rootBoundary,l=p===void 0?xt:p,h=r.elementContext,g=h===void 0?ye:h,u=r.altBoundary,y=u===void 0?!1:u,m=r.padding,v=m===void 0?0:m,O=At(typeof v!="number"?v:Rt(v,Ce)),w=g===ye?Xt:ye,C=e.rects.popper,d=e.elements[y?w:g],P=Cr(le(d)?d:d.contextElement||oe(e.elements.popper),i,l,c),b=me(e.elements.reference),x=Dt({reference:b,element:C,strategy:"absolute",placement:n}),D=Fe(Object.assign({},C,x)),R=g===ye?D:b,f={top:P.top-R.top+O.top,bottom:R.bottom-P.bottom+O.bottom,left:P.left-R.left+O.left,right:R.right-P.right+O.right},A=e.modifiersData.offset;if(g===ye&&A){var $=A[n];Object.keys(f).forEach(function(W){var _=[q,F].indexOf(W)>=0?1:-1,Q=[z,F].indexOf(W)>=0?"y":"x";f[W]+=$[Q]*_})}return f}function Ar(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,a=r.rootBoundary,c=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,p=i===void 0?Ot:i,l=he(o),h=l?s?ct:ct.filter(function(y){return he(y)===l}):Ce,g=h.filter(function(y){return p.indexOf(y)>=0});g.length===0&&(g=h);var u=g.reduce(function(y,m){return y[m]=Ee(e,{placement:m,boundary:n,rootBoundary:a,padding:c})[K(m)],y},{});return Object.keys(u).sort(function(y,m){return u[y]-u[m]})}function Rr(e){if(K(e)===Ue)return[];var t=$e(e);return[ut(e),t,ut(t)]}function kr(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,c=r.altAxis,s=c===void 0?!0:c,i=r.fallbackPlacements,p=r.padding,l=r.boundary,h=r.rootBoundary,g=r.altBoundary,u=r.flipVariations,y=u===void 0?!0:u,m=r.allowedAutoPlacements,v=t.options.placement,O=K(v),w=O===v,C=i||(w||!y?[$e(v)]:Rr(v)),d=[v].concat(C).reduce(function(ee,Y){return ee.concat(K(Y)===Ue?Ar(t,{placement:Y,boundary:l,rootBoundary:h,padding:p,flipVariations:y,allowedAutoPlacements:m}):Y)},[]),P=t.rects.reference,b=t.rects.popper,x=new Map,D=!0,R=d[0],f=0;f<d.length;f++){var A=d[f],$=K(A),W=he(A)===de,_=[z,F].indexOf($)>=0,Q=_?"width":"height",B=Ee(t,{placement:A,boundary:l,rootBoundary:h,altBoundary:g,padding:p}),S=_?W?q:H:W?F:z;P[Q]>b[Q]&&(S=$e(S));var X=$e(S),I=[];if(a&&I.push(B[$]<=0),s&&I.push(B[S]<=0,B[X]<=0),I.every(function(ee){return ee})){R=A,D=!1;break}x.set(A,I)}if(D)for(var Z=y?3:1,ce=function(Y){var ne=d.find(function(pe){var te=x.get(pe);if(te)return te.slice(0,Y).every(function(ge){return ge})});if(ne)return R=ne,"break"},G=Z;G>0;G--){var M=ce(G);if(M==="break")break}t.placement!==R&&(t.modifiersData[o]._skip=!0,t.placement=R,t.reset=!0)}}var Dr={name:"flip",enabled:!0,phase:"main",fn:kr,requiresIfExists:["offset"],data:{_skip:!1}};function vt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function mt(e){return[z,q,F,H].some(function(t){return e[t]>=0})}function Sr(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,c=Ee(t,{elementContext:"reference"}),s=Ee(t,{altBoundary:!0}),i=vt(c,o),p=vt(s,n,a),l=mt(i),h=mt(p);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var Tr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Sr};function $r(e,t,r){var o=K(e),n=[H,z].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=a[0],s=a[1];return c=c||0,s=(s||0)*n,[H,q].indexOf(o)>=0?{x:s,y:c}:{x:c,y:s}}function Br(e){var t=e.state,r=e.options,o=e.name,n=r.offset,a=n===void 0?[0,0]:n,c=Ot.reduce(function(l,h){return l[h]=$r(h,t.rects,a),l},{}),s=c[t.placement],i=s.x,p=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=c}var Wr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Br};function jr(e){var t=e.state,r=e.name;t.modifiersData[r]=Dt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Lr={name:"popperOffsets",enabled:!0,phase:"read",fn:jr,data:{}};function Mr(e){return e==="x"?"y":"x"}function zr(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,a=n===void 0?!0:n,c=r.altAxis,s=c===void 0?!1:c,i=r.boundary,p=r.rootBoundary,l=r.altBoundary,h=r.padding,g=r.tether,u=g===void 0?!0:g,y=r.tetherOffset,m=y===void 0?0:y,v=Ee(t,{boundary:i,rootBoundary:p,padding:h,altBoundary:l}),O=K(t.placement),w=he(t.placement),C=!w,d=_e(O),P=Mr(d),b=t.modifiersData.popperOffsets,x=t.rects.reference,D=t.rects.popper,R=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,f=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(!!b){if(a){var W,_=d==="y"?z:H,Q=d==="y"?F:q,B=d==="y"?"height":"width",S=b[d],X=S+v[_],I=S-v[Q],Z=u?-D[B]/2:0,ce=w===de?x[B]:D[B],G=w===de?-D[B]:-x[B],M=t.elements.arrow,ee=u&&M?Ye(M):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ct(),ne=Y[_],pe=Y[Q],te=xe(0,x[B],ee[B]),ge=C?x[B]/2-Z-te-ne-f.mainAxis:ce-te-ne-f.mainAxis,Re=C?-x[B]/2+Z+te+pe+f.mainAxis:G+te+pe+f.mainAxis,T=t.elements.arrow&&Ae(t.elements.arrow),ae=T?d==="y"?T.clientTop||0:T.clientLeft||0:0,we=(W=A==null?void 0:A[d])!=null?W:0,Le=S+ge-we-ae,St=S+Re-we,Qe=xe(u?Be(X,Le):X,S,u?se(I,St):I);b[d]=Qe,$[d]=Qe-S}if(s){var Ze,Tt=d==="x"?z:H,$t=d==="x"?F:q,ie=b[P],ke=P==="y"?"height":"width",et=ie+v[Tt],tt=ie-v[$t],Me=[z,H].indexOf(O)!==-1,rt=(Ze=A==null?void 0:A[P])!=null?Ze:0,ot=Me?et:ie-x[ke]-D[ke]-rt+f.altAxis,nt=Me?ie+x[ke]+D[ke]-rt-f.altAxis:tt,at=u&&Me?lr(ot,ie,nt):xe(u?ot:et,ie,u?nt:tt);b[P]=at,$[P]=at-ie}t.modifiersData[o]=$}}var Hr={name:"preventOverflow",enabled:!0,phase:"main",fn:zr,requiresIfExists:["offset"]};function Ir(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Vr(e){return e===U(e)||!N(e)?Ge(e):Ir(e)}function Nr(e){var t=e.getBoundingClientRect(),r=ve(t.width)/e.offsetWidth||1,o=ve(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Fr(e,t,r){r===void 0&&(r=!1);var o=N(t),n=N(t)&&Nr(t),a=oe(t),c=me(e,n,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!r)&&((J(t)!=="body"||Je(a))&&(s=Vr(t)),N(t)?(i=me(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=Ke(a))),{x:c.left+s.scrollLeft-i.x,y:c.top+s.scrollTop-i.y,width:c.width,height:c.height}}function qr(e){var t=new Map,r=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function n(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&n(i)}}),o.push(a)}return e.forEach(function(a){r.has(a.name)||n(a)}),o}function Ur(e){var t=qr(e);return rr.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Xr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Yr(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var ht={placement:"bottom",modifiers:[],strategy:"absolute"};function gt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function _r(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,a=n===void 0?ht:n;return function(s,i,p){p===void 0&&(p=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},ht,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},h=[],g=!1,u={state:l,setOptions:function(O){var w=typeof O=="function"?O(l.options):O;m(),l.options=Object.assign({},a,l.options,w),l.scrollParents={reference:le(s)?Oe(s):s.contextElement?Oe(s.contextElement):[],popper:Oe(i)};var C=Ur(Yr([].concat(o,l.options.modifiers)));return l.orderedModifiers=C.filter(function(d){return d.enabled}),y(),u.update()},forceUpdate:function(){if(!g){var O=l.elements,w=O.reference,C=O.popper;if(!!gt(w,C)){l.rects={reference:Fr(w,Ae(C),l.options.strategy==="fixed"),popper:Ye(C)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(f){return l.modifiersData[f.name]=Object.assign({},f.data)});for(var d=0;d<l.orderedModifiers.length;d++){if(l.reset===!0){l.reset=!1,d=-1;continue}var P=l.orderedModifiers[d],b=P.fn,x=P.options,D=x===void 0?{}:x,R=P.name;typeof b=="function"&&(l=b({state:l,options:D,name:R,instance:u})||l)}}}},update:Xr(function(){return new Promise(function(v){u.forceUpdate(),v(l)})}),destroy:function(){m(),g=!0}};if(!gt(s,i))return u;u.setOptions(p).then(function(v){!g&&p.onFirstUpdate&&p.onFirstUpdate(v)});function y(){l.orderedModifiers.forEach(function(v){var O=v.name,w=v.options,C=w===void 0?{}:w,d=v.effect;if(typeof d=="function"){var P=d({state:l,name:O,instance:u,options:C}),b=function(){};h.push(P||b)}})}function m(){h.forEach(function(v){return v()}),h=[]}return u}}var Gr=[wr,Lr,hr,ar,Wr,Dr,Hr,ur,Tr],Kr=_r({defaultModifiers:Gr}),fe=(e,t)=>({var:e,varRef:t?`var(${e}, ${t})`:`var(${e})`}),L={arrowShadowColor:fe("--popper-arrow-shadow-color"),arrowSize:fe("--popper-arrow-size","8px"),arrowSizeHalf:fe("--popper-arrow-size-half"),arrowBg:fe("--popper-arrow-bg"),transformOrigin:fe("--popper-transform-origin"),arrowOffset:fe("--popper-arrow-offset")};function Jr(e){if(e.includes("top"))return"1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("bottom"))return"-1px -1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("right"))return"-1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("left"))return"1px -1px 1px 0 var(--popper-arrow-shadow-color)"}var Qr={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},Zr=e=>Qr[e],wt={scroll:!0,resize:!0};function eo(e){let t;return typeof e=="object"?t={enabled:!0,options:k(k({},wt),e)}:t={enabled:e,options:wt},t}var to={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>()=>{const t=e.elements.reference;e.elements.popper.style.width=`${t.offsetWidth}px`}},ro={name:"transformOrigin",enabled:!0,phase:"write",fn:({state:e})=>{yt(e)},effect:({state:e})=>()=>{yt(e)}},yt=e=>{e.elements.popper.style.setProperty(L.transformOrigin.var,Zr(e.placement))},oo={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:({state:e})=>{no(e)}},no=e=>{var t;if(!e.placement)return;const r=ao(e.placement);if(((t=e.elements)==null?void 0:t.arrow)&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:L.arrowSize.varRef,height:L.arrowSize.varRef,zIndex:-1});const o={[L.arrowSizeHalf.var]:`calc(${L.arrowSize.varRef} / 2)`,[L.arrowOffset.var]:`calc(${L.arrowSizeHalf.varRef} * -1)`};for(const n in o)e.elements.arrow.style.setProperty(n,o[n])}},ao=e=>{if(e.startsWith("top"))return{property:"bottom",value:L.arrowOffset.varRef};if(e.startsWith("bottom"))return{property:"top",value:L.arrowOffset.varRef};if(e.startsWith("left"))return{property:"right",value:L.arrowOffset.varRef};if(e.startsWith("right"))return{property:"left",value:L.arrowOffset.varRef}},io={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:({state:e})=>{bt(e)},effect:({state:e})=>()=>{bt(e)}},bt=e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");!t||Object.assign(t.style,{transform:"rotate(45deg)",background:L.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:Jr(e.placement)})},so={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},lo={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};function co(e,t="ltr"){var n;var r;const o=((r=so[e])==null?void 0:r[t])||e;return t==="ltr"?o:(n=lo[e])!=null?n:o}function po(e={}){const{enabled:t=!0,modifiers:r,placement:o="bottom",strategy:n="absolute",arrowPadding:a=8,eventListeners:c=!0,offset:s,gutter:i=8,flip:p=!0,boundary:l="clippingParents",preventOverflow:h=!0,matchWidth:g,direction:u="ltr"}=e,y=E.exports.useRef(null),m=E.exports.useRef(null),v=E.exports.useRef(null),O=co(o,u),w=E.exports.useRef(()=>{}),C=E.exports.useCallback(()=>{var f;!t||!y.current||!m.current||((f=w.current)==null||f.call(w),v.current=Kr(y.current,m.current,{placement:O,modifiers:[io,oo,ro,j(k({},to),{enabled:!!g}),k({name:"eventListeners"},eo(c)),{name:"arrow",options:{padding:a}},{name:"offset",options:{offset:s!=null?s:[0,i]}},{name:"flip",enabled:!!p,options:{padding:8}},{name:"preventOverflow",enabled:!!h,options:{boundary:l}},...r!=null?r:[]],strategy:n}),v.current.forceUpdate(),w.current=v.current.destroy)},[O,t,r,g,c,a,s,i,p,h,l,n]);E.exports.useEffect(()=>()=>{var f;!y.current&&!m.current&&((f=v.current)==null||f.destroy(),v.current=null)},[]);const d=E.exports.useCallback(f=>{y.current=f,C()},[C]),P=E.exports.useCallback((f={},A=null)=>j(k({},f),{ref:Ve(d,A)}),[d]),b=E.exports.useCallback(f=>{m.current=f,C()},[C]),x=E.exports.useCallback((f={},A=null)=>j(k({},f),{ref:Ve(b,A),style:j(k({},f.style),{position:n,minWidth:g?void 0:"max-content",inset:"0 auto auto 0"})}),[n,b,g]),D=E.exports.useCallback((f={},A=null)=>{const S=f,{size:$,shadowColor:W,bg:_,style:Q}=S,B=Se(S,["size","shadowColor","bg","style"]);return j(k({},B),{ref:A,"data-popper-arrow":"",style:fo(f)})},[]),R=E.exports.useCallback((f={},A=null)=>j(k({},f),{ref:A,"data-popper-arrow-inner":""}),[]);return{update(){var f;(f=v.current)==null||f.update()},forceUpdate(){var f;(f=v.current)==null||f.forceUpdate()},transformOrigin:L.transformOrigin.varRef,referenceRef:d,popperRef:b,getPopperProps:x,getArrowProps:D,getArrowInnerProps:R,getReferenceProps:P}}function fo(e){const{size:t,shadowColor:r,bg:o,style:n}=e,a=j(k({},n),{position:"absolute"});return t&&(a["--popper-arrow-size"]=t),r&&(a["--popper-arrow-shadow-color"]=r),o&&(a["--popper-arrow-bg"]=o),a}function uo(e={}){const{onClose:t,onOpen:r,isOpen:o,id:n}=e,a=Ie(r),c=Ie(t),[s,i]=E.exports.useState(e.defaultIsOpen||!1),p=o!==void 0?o:s,l=o!==void 0,h=E.exports.useId(),g=n!=null?n:`disclosure-${h}`,u=E.exports.useCallback(()=>{l||i(!1),c==null||c()},[l,c]),y=E.exports.useCallback(()=>{l||i(!0),a==null||a()},[l,a]),m=E.exports.useCallback(()=>{p?u():y()},[p,y,u]);function v(w={}){return j(k({},w),{"aria-expanded":p,"aria-controls":g,onClick(C){var d;(d=w.onClick)==null||d.call(w,C),m()}})}function O(w={}){return j(k({},w),{hidden:!p,id:g})}return{isOpen:p,onOpen:y,onClose:u,onToggle:m,isControlled:l,getButtonProps:v,getDisclosureProps:O}}function vo(e,t=[]){const r=Object.assign({},e);for(const o of t)o in r&&delete r[o];return r}function mo(e,t){const r={};for(const o of t)o in e&&(r[o]=e[o]);return r}var ho={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}};function be(...e){return function(r){e.some(o=>(o==null||o(r),r==null?void 0:r.defaultPrevented))}}var We=e=>{var t;return((t=e.current)==null?void 0:t.ownerDocument)||document},qe=e=>{var t,r;return((r=(t=e.current)==null?void 0:t.ownerDocument)==null?void 0:r.defaultView)||window};function go(e={}){const Re=e,{openDelay:t=0,closeDelay:r=0,closeOnClick:o=!0,closeOnMouseDown:n,closeOnScroll:a,closeOnPointerDown:c=n,closeOnEsc:s=!0,onOpen:i,onClose:p,placement:l,id:h,isOpen:g,defaultIsOpen:u,arrowSize:y=10,arrowShadowColor:m,arrowPadding:v,modifiers:O,isDisabled:w,gutter:C,offset:d,direction:P}=Re,b=Se(Re,["openDelay","closeDelay","closeOnClick","closeOnMouseDown","closeOnScroll","closeOnPointerDown","closeOnEsc","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset","direction"]),{isOpen:x,onOpen:D,onClose:R}=uo({isOpen:g,defaultIsOpen:u,onOpen:i,onClose:p}),{referenceRef:f,getPopperProps:A,getArrowInnerProps:$,getArrowProps:W}=po({enabled:x,placement:l,arrowPadding:v,modifiers:O,gutter:C,offset:d,direction:P}),_=E.exports.useId(),B=`tooltip-${h!=null?h:_}`,S=E.exports.useRef(null),X=E.exports.useRef(),I=E.exports.useRef(),Z=E.exports.useCallback(()=>{I.current&&(clearTimeout(I.current),I.current=void 0),R()},[R]),ce=wo(S,Z),G=E.exports.useCallback(()=>{if(!w&&!X.current){ce();const T=qe(S);X.current=T.setTimeout(D,t)}},[ce,w,D,t]),M=E.exports.useCallback(()=>{X.current&&(clearTimeout(X.current),X.current=void 0);const T=qe(S);I.current=T.setTimeout(Z,r)},[r,Z]),ee=E.exports.useCallback(()=>{x&&o&&M()},[o,M,x]),Y=E.exports.useCallback(()=>{x&&c&&M()},[c,M,x]),ne=E.exports.useCallback(T=>{x&&T.key==="Escape"&&M()},[x,M]);ze(()=>We(S),"keydown",s?ne:void 0),ze(()=>We(S),"scroll",()=>{x&&a&&Z()}),E.exports.useEffect(()=>()=>{clearTimeout(X.current),clearTimeout(I.current)},[]),ze(()=>S.current,"pointerleave",M);const pe=E.exports.useCallback((T={},ae=null)=>j(k({},T),{ref:Ve(S,ae,f),onPointerEnter:be(T.onPointerEnter,Le=>{Le.pointerType!=="touch"&&G()}),onClick:be(T.onClick,ee),onPointerDown:be(T.onPointerDown,Y),onFocus:be(T.onFocus,G),onBlur:be(T.onBlur,M),"aria-describedby":x?B:void 0}),[G,M,Y,x,B,ee,f]),te=E.exports.useCallback((T={},ae=null)=>A(j(k({},T),{style:j(k({},T.style),{[L.arrowSize.var]:y?`${y}px`:void 0,[L.arrowShadowColor.var]:m})}),ae),[A,y,m]),ge=E.exports.useCallback((T={},ae=null)=>{const we=j(k({},T.style),{position:"relative",transformOrigin:L.transformOrigin.varRef});return j(k(k({ref:ae},b),T),{id:B,role:"tooltip",style:we})},[b,B]);return{isOpen:x,show:G,hide:M,getTriggerProps:pe,getTooltipProps:ge,getTooltipPositionerProps:te,getArrowProps:W,getArrowInnerProps:$}}var He="chakra-ui:close-tooltip";function wo(e,t){return E.exports.useEffect(()=>{const r=We(e);return r.addEventListener(He,t),()=>r.removeEventListener(He,t)},[t,e]),()=>{const r=We(e),o=qe(e);r.dispatchEvent(new o.CustomEvent(He))}}var yo=ue(Lt.div),bo=Mt((e,t)=>{var f,A;const r=zt("Tooltip",e),o=Ht(e),n=It(),R=o,{children:a,label:c,shouldWrapChildren:s,"aria-label":i,hasArrow:p,bg:l,portalProps:h,background:g,backgroundColor:u,bgColor:y,motionProps:m}=R,v=Se(R,["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps","background","backgroundColor","bgColor","motionProps"]),O=(A=(f=g!=null?g:u)!=null?f:l)!=null?A:y;if(O){r.bg=O;const $=Vt(n,"colors",O);r[L.arrowBg.var]=$}const w=go(j(k({},v),{direction:n.direction})),C=typeof a=="string"||s;let d;if(C)d=V.createElement(ue.span,k({display:"inline-block",tabIndex:0},w.getTriggerProps()),a);else{const $=E.exports.Children.only(a);d=E.exports.cloneElement($,w.getTriggerProps($.props,$.ref))}const P=!!i,b=w.getTooltipProps({},t),x=P?vo(b,["role","id"]):b,D=mo(b,["role","id"]);return c?V.createElement(V.Fragment,null,d,V.createElement(Nt,null,w.isOpen&&V.createElement(Ft,k({},h),V.createElement(ue.div,j(k({},w.getTooltipPositionerProps()),{__css:{zIndex:r.zIndex,pointerEvents:"none"}}),V.createElement(yo,j(k(k({variants:ho,initial:"exit",animate:"enter",exit:"exit"},m),x),{__css:r}),c,P&&V.createElement(ue.span,k({srOnly:!0},D),i),p&&V.createElement(ue.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},V.createElement(ue.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:r.bg}}))))))):V.createElement(V.Fragment,null,a)});bo.displayName="Tooltip";export{bo as T};
