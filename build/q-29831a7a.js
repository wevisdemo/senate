import{l as T,h as S,t as L,r as z,i as q,j as W,k as J,c as Q,C as G,d as X,D as $,R as B,e as F,f as Y,m as K}from"./q-b079ec88.js";import{_ as v,b as H,l as Z,v as M,i as tt,o as et,r as nt,C as at,q as P,G as ot,g as I,d as u,V as st,N as rt,y as it,z as k,a as lt}from"./q-a4dbec78.js";const N=()=>v(()=>import("./q-1028be85.js"),["build/q-1028be85.js","build/q-a4dbec78.js"]),O=[[/^\/senate\/$/,[N,()=>v(()=>import("./q-6770d4d4.js"),["build/q-6770d4d4.js","build/q-a4dbec78.js","build/q-1128cb3e.js","build/q-87edfb09.js","build/q-ef1db70a.js","build/q-649551cb.js","build/q-725317a4.js","build/q-db9ad2f1.js","build/q-28f3be88.js","build/q-7f13bbee.js","build/q-47ab2847.js","build/q-56886d30.js","build/q-d2db546f.js","build/q-96dd4a34.js"])]],[/^\/senate\/about\/?$/,[N,()=>v(()=>import("./q-926a0b9f.js"),["build/q-926a0b9f.js","build/q-a4dbec78.js"])]]],V=[];const U=!0;const ct=({track:a})=>{const[t,l,o,n,_,i,s,d,w,r]=H();async function m(){const[E,p]=a(()=>[s.value,t.value]),C=Z("");let e,f,A=null,D;{e=new URL(E,location),e.pathname.endsWith("/")||(e.pathname+="/");let R=T(O,V,U,e.pathname);D=M();const g=f=await S(e,D,!0,p);if(!g){s.untrackedValue=L(e);return}const y=g.href,c=new URL(y,e.href);c.pathname!==e.pathname&&(e=c,R=T(O,V,U,e.pathname)),A=await R}if(A){const[R,g,y]=A,c=g,j=c[c.length-1];r.prevUrl=r.url,r.url=e,r.params={...R},s.untrackedValue=L(e);const h=z(f,r,c,C);l.headings=j.headings,l.menu=y,o.value=tt(c),n.links=h.links,n.meta=h.meta,n.styles=h.styles,n.title=h.title,n.frontmatter=h.frontmatter;{w.viewTransition!==!1&&(document.__q_view_transition__=!0);const x=f==null?void 0:f.loaders;x&&Object.assign(i,x),q.clear(),W(window,e,s),r.isNavigating=!1,d.r&&et(D).then(d.r)}}}m()},ut=a=>{nt(k(()=>v(()=>Promise.resolve().then(()=>b),void 0),"s_RPDJAz33WLA"));const t=J();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const l=at("url");if(!l)throw new Error("Missing Qwik URL Env Data");const o=new URL(l),n=P({url:o,params:t.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),_={},i=ot(P(t.response.loaders,{deep:!1})),s=I(L(o)),d=P(Q),w=P({headings:void 0,menu:void 0}),r=I(),m=t.response.action,E=m?t.response.loaders[m]:void 0,p=I(E?{id:m,data:t.response.formData,output:{result:E,status:t.response.status}}:void 0),C=k(()=>v(()=>Promise.resolve().then(()=>b),void 0),"s_fX0bDjeJa0E",[p,s,_,n]);return u(G,w),u(X,r),u($,d),u(B,n),u(F,C),u(Y,i),u(K,p),st(k(()=>v(()=>Promise.resolve().then(()=>b),void 0),"s_02wMImzEAbk",[p,w,r,d,t,i,s,_,a,n])),rt(it,null,3,"qY_0")},_t=async(a,t)=>{const[l,o,n,_]=H();a===void 0?(a=o.value,o.value=""):t&&(o.value="");const i=new URL(a,_.url);if(a=L(i),!(!t&&o.value===a))return o.value=a,S(i,M()),T(O,V,U,i.pathname),l.value=void 0,_.isNavigating=!0,new Promise(s=>{n.r=s})},vt=":root{view-transition-name:none}",b=Object.freeze(Object.defineProperty({__proto__:null,_hW:lt,s_02wMImzEAbk:ct,s_RPDJAz33WLA:vt,s_TxCFOy819ag:ut,s_fX0bDjeJa0E:_t},Symbol.toStringTag,{value:"Module"}));export{lt as _hW,ct as s_02wMImzEAbk,vt as s_RPDJAz33WLA,ut as s_TxCFOy819ag,_t as s_fX0bDjeJa0E};
