import{l as y,a as S,t as w,r as M,b as U,c as N,u as $,d as j,e as q,C as Q,D as z,R as W,f as J,g as X,h as B}from"./q-ec998827.js";import{_ as h,d as H,v as F,P as V,T as Y,e as G,u as P,E as K,f as D,g as l,h as Z,$ as tt,r as et,B as k,i as at}from"./q-5063c478.js";const O=()=>h(()=>import("./q-3cb3f9b2.js"),["build/q-3cb3f9b2.js","build/q-5063c478.js"]),A=[[/^\/senate\/$/,[O,()=>h(()=>import("./q-62ed5f87.js").then(t=>t.i),["build/q-62ed5f87.js","build/q-5063c478.js","build/q-762472a8.js"])]],[/^\/senate\/about\/?$/,[O,()=>h(()=>import("./q-343ea448.js"),["build/q-343ea448.js","build/q-5063c478.js","build/q-762472a8.js"])]]],I=[];const T=!0;const nt=({track:t})=>{const[i,s,a,n,c,f,u,o]=H();async function _(){const[p,m]=t(()=>[u.value,i.value]),R=F("");let e=new URL(p,o.url),v,C=null;{e.pathname.endsWith("/")||(e.pathname+="/");let E=y(A,I,T,e.pathname);const d=V(),g=v=await S(e,d,!0,m);if(!g){u.untrackedValue=w(e);return}const L=g.href,r=new URL(L,e.href);r.pathname!==e.pathname&&(e=r,E=y(A,I,T,e.pathname)),C=await E}if(C){const[E,d,g]=C,L=d[d.length-1];o.url=e,o.href=e.href,o.pathname=e.pathname,o.params={...E},o.query=e.searchParams,u.untrackedValue=w(e);const r=M(v,o,d,R);s.headings=L.headings,s.menu=g,a.value=Y(d),n.links=r.links,n.meta=r.meta,n.styles=r.styles,n.title=r.title,n.frontmatter=r.frontmatter;{const b=v==null?void 0:v.loaders;b&&Object.assign(f,b),U.clear(),N(window,e,u),o.isNavigating=!1}}}_()},ot=()=>{const t=$();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const i=G("url");if(!i)throw new Error("Missing Qwik URL Env Data");const s=new URL(i),a=P({url:s,href:s.href,pathname:s.pathname,query:s.searchParams,params:t.params,isNavigating:!1}),n=K(P(t.response.loaders)),c=D(w(s)),f=P(j),u=P({headings:void 0,menu:void 0}),o=D(),_=t.response.action,p=_?t.response.loaders[_]:void 0,m=D(p?{id:_,data:t.response.formData,output:{result:p,status:t.response.status}}:void 0),R=k(()=>h(()=>Promise.resolve().then(()=>x),void 0),"s_fX0bDjeJa0E",[m,c,a]);return l(q,u),l(Q,o),l(z,f),l(W,a),l(J,R),l(X,n),l(B,m),Z(k(()=>h(()=>Promise.resolve().then(()=>x),void 0),"s_02wMImzEAbk",[m,u,o,f,t,n,c,a])),tt(et,null,3,"qY_0")},st=async(t,i)=>{const[s,a,n]=H();t===void 0?(t=a.value,a.value=""):i&&(a.value="");const c=new URL(t,n.url);t=w(c),!(!i&&a.value===t)&&(a.value=t,S(c,V()),y(A,I,T,c.pathname),s.value=void 0,n.isNavigating=!0)},x=Object.freeze(Object.defineProperty({__proto__:null,_hW:at,s_02wMImzEAbk:nt,s_TxCFOy819ag:ot,s_fX0bDjeJa0E:st},Symbol.toStringTag,{value:"Module"}));export{at as _hW,nt as s_02wMImzEAbk,ot as s_TxCFOy819ag,st as s_fX0bDjeJa0E};
