import{l as T,a as S,t as L,r as z,b as q,c as W,u as J,d as Q,e as B,C as G,D as X,R as $,f as F,g as Y,h as K}from"./q-b5163f6d.js";import{_ as v,I as H,e as Z,m as M,B as ee,c as te,v as ne,C as ae,f as P,G as oe,h as I,y as u,V as se,N as re,i as ie,z as b,j as le}from"./q-ca7245e4.js";const N=()=>v(()=>import("./q-2a683fd2.js"),["build/q-2a683fd2.js","build/q-ca7245e4.js"]),O=[[/^\/senate\/$/,[N,()=>v(()=>import("./q-c3150b8e.js").then(n=>n.q),["build/q-c3150b8e.js","build/q-ca7245e4.js","build/q-6c253dc8.js"])]],[/^\/senate\/about\/?$/,[N,()=>v(()=>import("./q-415ca246.js"),["build/q-415ca246.js","build/q-ca7245e4.js","build/q-6c253dc8.js"])]]],V=[];const U=!0;const ce=({track:n})=>{const[e,l,o,a,_,i,s,d,E,r]=H();async function m(){const[R,f]=n(()=>[s.value,e.value]),C=Z("");let t,p,A=null,D;{t=new URL(R,location),t.pathname.endsWith("/")||(t.pathname+="/");let w=T(O,V,U,t.pathname);D=M();const g=p=await S(t,D,!0,f);if(!g){s.untrackedValue=L(t);return}const y=g.href,c=new URL(y,t.href);c.pathname!==t.pathname&&(t=c,w=T(O,V,U,t.pathname)),A=await w}if(A){const[w,g,y]=A,c=g,j=c[c.length-1];r.prevUrl=r.url,r.url=t,r.params={...w},s.untrackedValue=L(t);const h=z(p,r,c,C);l.headings=j.headings,l.menu=y,o.value=ee(c),a.links=h.links,a.meta=h.meta,a.styles=h.styles,a.title=h.title,a.frontmatter=h.frontmatter;{E.viewTransition!==!1&&(document.__q_view_transition__=!0);const x=p==null?void 0:p.loaders;x&&Object.assign(i,x),q.clear(),W(window,t,s),r.isNavigating=!1,d.r&&te(D).then(d.r)}}}m()},ue=n=>{ne(b(()=>v(()=>Promise.resolve().then(()=>k),void 0),"s_RPDJAz33WLA"));const e=J();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const l=ae("url");if(!l)throw new Error("Missing Qwik URL Env Data");const o=new URL(l),a=P({url:o,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),_={},i=oe(P(e.response.loaders,{deep:!1})),s=I(L(o)),d=P(Q),E=P({headings:void 0,menu:void 0}),r=I(),m=e.response.action,R=m?e.response.loaders[m]:void 0,f=I(R?{id:m,data:e.response.formData,output:{result:R,status:e.response.status}}:void 0),C=b(()=>v(()=>Promise.resolve().then(()=>k),void 0),"s_fX0bDjeJa0E",[f,s,_,a]);return u(B,E),u(G,r),u(X,d),u($,a),u(F,C),u(Y,i),u(K,f),se(b(()=>v(()=>Promise.resolve().then(()=>k),void 0),"s_02wMImzEAbk",[f,E,r,d,e,i,s,_,n,a])),re(ie,null,3,"qY_0")},_e=":root{view-transition-name:none}",ve=async(n,e)=>{const[l,o,a,_]=H();n===void 0?(n=o.value,o.value=""):e&&(o.value="");const i=new URL(n,_.url);if(n=L(i),!(!e&&o.value===n))return o.value=n,S(i,M()),T(O,V,U,i.pathname),l.value=void 0,_.isNavigating=!0,new Promise(s=>{a.r=s})},k=Object.freeze(Object.defineProperty({__proto__:null,_hW:le,s_02wMImzEAbk:ce,s_RPDJAz33WLA:_e,s_TxCFOy819ag:ue,s_fX0bDjeJa0E:ve},Symbol.toStringTag,{value:"Module"}));export{le as _hW,ce as s_02wMImzEAbk,_e as s_RPDJAz33WLA,ue as s_TxCFOy819ag,ve as s_fX0bDjeJa0E};