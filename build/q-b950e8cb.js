import{d as M,u as P,E as U,e as D,f as l,g as N,$,r as j,B as k,_ as h,i as S,P as H,v as q,T as Q,h as z}from"./q-541211e9.js";import{u as W,t as w,c as J,a as X,C as B,D as F,R as Y,b as G,d as K,e as Z,l as V,f as y,r as tt,g as et,h as at}from"./q-cf6534ff.js";const nt=()=>{const t=W();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const i=M("url");if(!i)throw new Error("Missing Qwik URL Env Data");const s=new URL(i),a=P({url:s,href:s.href,pathname:s.pathname,query:s.searchParams,params:t.params,isNavigating:!1}),n=U(P(t.response.loaders)),c=D(w(s)),f=P(J),u=P({headings:void 0,menu:void 0}),o=D(),_=t.response.action,p=_?t.response.loaders[_]:void 0,m=D(p?{id:_,data:t.response.formData,output:{result:p,status:t.response.status}}:void 0),R=k(()=>h(()=>Promise.resolve().then(()=>x),void 0),"s_fX0bDjeJa0E",[m,c,a]);return l(X,u),l(B,o),l(F,f),l(Y,a),l(G,R),l(K,n),l(Z,m),N(k(()=>h(()=>Promise.resolve().then(()=>x),void 0),"s_02wMImzEAbk",[m,u,o,f,t,n,c,a])),$(j,null,3,"qY_0")};const O=()=>h(()=>import("./q-0e8ec9e6.js"),["build/q-0e8ec9e6.js","build/q-541211e9.js"]),A=[[/^\/senate\/$/,[O,()=>h(()=>import("./q-cfb7e9bb.js").then(t=>t.i),["build/q-cfb7e9bb.js","build/q-541211e9.js","build/q-3ad09938.js"])]],[/^\/senate\/about\/?$/,[O,()=>h(()=>import("./q-006ed856.js"),["build/q-006ed856.js","build/q-541211e9.js","build/q-3ad09938.js"])]]],I=[];const T=!0;const ot=async(t,i)=>{const[s,a,n]=S();t===void 0?(t=a.value,a.value=""):i&&(a.value="");const c=new URL(t,n.url);t=w(c),!(!i&&a.value===t)&&(a.value=t,V(c,H()),y(A,I,T,c.pathname),s.value=void 0,n.isNavigating=!0)},st=({track:t})=>{const[i,s,a,n,c,f,u,o]=S();async function _(){const[p,m]=t(()=>[u.value,i.value]),R=q("");let e=new URL(p,o.url),v,C=null;{e.pathname.endsWith("/")||(e.pathname+="/");let E=y(A,I,T,e.pathname);const d=H(),g=v=await V(e,d,!0,m);if(!g){u.untrackedValue=w(e);return}const L=g.href,r=new URL(L,e.href);r.pathname!==e.pathname&&(e=r,E=y(A,I,T,e.pathname)),C=await E}if(C){const[E,d,g]=C,L=d[d.length-1];o.url=e,o.href=e.href,o.pathname=e.pathname,o.params={...E},o.query=e.searchParams,u.untrackedValue=w(e);const r=tt(v,o,d,R);s.headings=L.headings,s.menu=g,a.value=Q(d),n.links=r.links,n.meta=r.meta,n.styles=r.styles,n.title=r.title,n.frontmatter=r.frontmatter;{const b=v==null?void 0:v.loaders;b&&Object.assign(f,b),et.clear(),at(window,e,u),o.isNavigating=!1}}}_()},x=Object.freeze(Object.defineProperty({__proto__:null,_hW:z,s_02wMImzEAbk:st,s_TxCFOy819ag:nt,s_fX0bDjeJa0E:ot},Symbol.toStringTag,{value:"Module"}));export{z as _hW,st as s_02wMImzEAbk,nt as s_TxCFOy819ag,ot as s_fX0bDjeJa0E};
