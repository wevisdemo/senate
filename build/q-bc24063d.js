import{h as N,n as K,A as f,E as j,N as F,i as L,z as R,_ as V,I as z,j as G}from"./q-f6878ac2.js";import{r as X,i as $}from"./q-d5377a27.js";import{_ as H}from"./q-4b8363ab.js";import{i as J,m as Q,g as U,r as Z,a as q,A as tt,w as et,b as nt,k as at,c as lt,d as P,e as it,f as st,h as rt,j as ot,p as ct,s as ut}from"./q-0ee514bf.js";const ft=t=>{const e=N();return K(R(()=>V(()=>Promise.resolve().then(()=>kt),void 0),"s_4iKEAlrWuEY",[e]),{strategy:"document-idle"}),f("div",{ref:e},{id:j(n=>`ch${n.part}`,[t]),class:"flex w-full flex-col items-center justify-center gap-10 border-t border-dashed border-t-white bg-black py-40 text-white lg:h-[360px] lg:flex-row lg:gap-60 lg:p-0"},[f("div",null,{class:"text-center font-kondolar font-black leading-none"},[f("span",null,{class:"wv-h9 mb-[12px] block"},"Part",3,null),f("span",null,{class:"block text-[100px]"},j(n=>n.part,[t]),3,null)],3,null),f("div",null,{class:"flex h-full items-center"},F(L,null,3,"0t_0"),1,null),f("div",null,{class:"wv-h5 text-center font-kondolar font-black lg:text-left","aria-label":j(n=>n.title.join("").replace("-"," "),[t])},t.title.map((n,a)=>n==="-"?f("br",null,null,null,3,a):f("span",null,{class:"inline-block whitespace-pre","aria-hidden":"true"},n,1,a)),1,null)],1,"0t_1")};var mt=function(){};function W(t,e,n,a){var l;return J(e)?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(l=a.get(e))!==null&&l!==void 0?l:t}function ht(t,e,n){for(let a=0;a<t.length;a++){const l=t[a];l.at>e&&l.at<n&&(Z(t,l),a--)}}function gt(t,e,n,a,l,i){ht(t,l,i);for(let o=0;o<e.length;o++)t.push({value:e[o],at:Q(l,i,a[o]),easing:U(n,o)})}function dt(t,e){return t.at===e.at?t.value===null?1:-1:t.at-e.at}function pt(t,e={}){var n;const a=vt(t,e),l=a.map(i=>q(...i,tt)).filter(Boolean);return et(l,e,(n=a[0])===null||n===void 0?void 0:n[3].duration)}function vt(t,e={}){var{defaultOptions:n={}}=e,a=H(e,["defaultOptions"]);const l=[],i=new Map,o={},b=new Map;let w=0,m=0,k=0;for(let h=0;h<t.length;h++){const u=t[h];if(nt(u)){b.set(u,m);continue}else if(!Array.isArray(u)){b.set(u.name,W(m,u.at,w,b));continue}const[E,g,r={}]=u;r.at!==void 0&&(m=W(m,r.at,w,b));let s=0;const d=X(E,o),p=d.length;for(let v=0;v<p;v++){const C=d[v],A=yt(C,i);for(const y in g){const D=_t(y,A);let c=at(g[y]);const T=lt(r,y);let{duration:x=n.duration||P.duration,easing:O=n.easing||P.easing}=T;if(it(O)){mt(y==="opacity"||c.length>1);const S=O.createAnimation(c,y!=="opacity",()=>0,y);O=S.easing,c=S.keyframes||c,x=S.duration||x}const B=st(r.delay,v,p)||0,Y=m+B,I=Y+x;let{offset:_=rt(c.length)}=T;_.length===1&&_[0]===0&&(_[1]=1);const M=_.length-c.length;M>0&&ot(_,M),c.length===1&&c.unshift(null),gt(D,c,O,_,Y,I),s=Math.max(B+x,s),k=Math.max(I,k)}}w=m,m+=s}return i.forEach((h,u)=>{for(const E in h){const g=h[E];g.sort(dt);const r=[],s=[],d=[];for(let p=0;p<g.length;p++){const{at:v,value:C,easing:A}=g[p];r.push(C),s.push(ct(0,k,v)),d.push(A||P.easing)}s[0]!==0&&(s.unshift(0),r.unshift(r[0]),d.unshift("linear")),s[s.length-1]!==1&&(s.push(1),r.push(null)),l.push([u,E,r,Object.assign(Object.assign(Object.assign({},n),{duration:k,easing:d,offset:s}),a)])}}),l}function yt(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function _t(t,e){return e[t]||(e[t]=[]),e[t]}const bt=()=>{const[t]=z();if(t.value){const[e,n,a]=t.value.children;[...e.children,...n.children,...a.children].forEach(i=>i.classList.add("opacity-0"));const l=Math.min(.99,document.getElementById("100vh").getBoundingClientRect().height/t.value.getBoundingClientRect().height-.1);$(t.value,()=>{const[i,o]=e.children;pt([[i,{transform:["translateY(100%)","translateY(0)"],opacity:[0,1]},{duration:.5}],[o,{transform:["translateY(20%)","translateY(0)"],opacity:[0,1]},{duration:.5,at:.1}],[n.children[0],{opacity:[0,1]},{duration:1,at:.3}],[n.children[0],{transform:["scale(.8)","scale(1)"]},{duration:1.5,at:.3,easing:"ease-out"}],[[...a.children],{transform:["translateY(100%)","translateY(0)"],clipPath:["polygon(0 0, 100% 0, 100% 0%, 0 0%)","polygon(0 0, 100% 0, 100% 100%, 0 100%)"],opacity:[1,1]},{duration:.5,at:.5,delay:ut(.1)}]])},{amount:l})}},kt=Object.freeze(Object.defineProperty({__proto__:null,_hW:G,s_1hWqXw50tx4:ft,s_4iKEAlrWuEY:bt},Symbol.toStringTag,{value:"Module"}));export{G as _hW,ft as s_1hWqXw50tx4,bt as s_4iKEAlrWuEY};
