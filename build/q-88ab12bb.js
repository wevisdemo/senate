import{Z as C,B as b,_ as q,o as S,b as E,T as j,p as A,a as h,w as $,c as W,$ as v,m as g}from"./q-1f1f69d1.js";const U='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/senate/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',at=h("qc-s"),it=h("qc-c"),ct=h("qc-ic"),F=h("qc-h"),H=h("qc-l"),V=h("qc-n"),lt=h("qc-a"),B=C(b(()=>q(()=>import("./q-1911b429.js"),["build/q-1911b429.js","build/q-1f1f69d1.js"]),"s_AKetNByE5TM")),D=new WeakMap,y=new Map,P=t=>t.pathname+t.search+t.hash,N=(t,e)=>new URL(t,e.href),Z=(t,e)=>t.origin===e.origin,L=(t,e)=>t.pathname+t.search===e.pathname+e.search,k=(t,e)=>Z(t,e)&&!L(t,e),M=(t,e,s)=>{let n=e??"";return s&&(n+=(n?"&":"?")+"qaction="+encodeURIComponent(s.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+n},ft=(t,e,s)=>{const n=t.location;k(n,e)&&(R(t,n,e),t.history.pushState("","",P(e))),t._qCityHistory||(t._qCityHistory=1,t.addEventListener("popstate",()=>{const o=t.location,r=N(s.value,o);k(o,r)&&(R(t,r,o),s.value=P(o))}),t.removeEventListener("popstate",t._qCityPopstateFallback))},R=async(t,e,s)=>{const n=t.document,o=s.hash;if(L(e,s))e.hash!==o&&(await p(),o?T(n,o):t.scrollTo(0,0));else if(o)for(let r=0;r<24&&(await p(),!T(n,o));r++);else await p(),t.scrollTo(0,0)},p=()=>new Promise(t=>setTimeout(t,12)),T=(t,e)=>{const s=e.slice(1),n=t.getElementById(s);return n&&n.scrollIntoView(),n},Q=t=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},dt=(t,e,s,n)=>{const o=J(),c={head:o,withLocale:a=>$(n,a),resolveValue:a=>{const i=a.__id;if(a.__brand==="server_loader"&&!(i in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=t.loaders[i];if(l instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return l},...e};for(let a=s.length-1;a>=0;a--){const i=s[a]&&s[a].head;i&&(typeof i=="function"?w(o,$(n,()=>i(c))):typeof i=="object"&&w(o,i))}return c.head},w=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),_(t.meta,e.meta),_(t.links,e.links),_(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},_=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},J=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),ut=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const r=o[0].exec(n);if(r){const c=o[1],a=Y(o[2],r),i=o[4],l=new Array(c.length),f=[],m=K(e,n);let d;return c.forEach((u,I)=>{x(u,f,O=>l[I]=O,s)}),x(m,f,u=>d=u==null?void 0:u.default,s),f.length>0&&await Promise.all(f),[a,l,d,i]}}return null},x=(t,e,s,n)=>{if(typeof t=="function"){const o=D.get(t);if(o)s(o);else{const r=t();typeof r.then=="function"?e.push(r.then(c=>{n!==!1&&D.set(t,c),s(c)})):r&&s(r)}}},K=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},Y=(t,e)=>{const s={};if(t)for(let n=0;n<t.length;n++){const o=(e==null?void 0:e[n+1])??"",r=o.endsWith("/")?o.slice(0,-1):o;s[t[n]]=decodeURIComponent(r)}return s},ht=async(t,e,s,n)=>{const o=t.pathname,r=t.search,c=M(o,r,n);let a;if(n||(a=y.get(c)),Q({links:[o]}),!a){const i=z(n);n&&(n.data=void 0),a=fetch(c,i).then(l=>{const f=new URL(l.url);if(f.origin!==location.origin||!G(f.pathname)){location.href=f.href;return}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(m=>{const d=S(m,e);if(!d){location.href=t.href;return}if(s&&y.delete(c),d.redirect)location.href=d.redirect;else if(n){const u=d.loaders[n.id];n.resolve({status:l.status,result:u})}return d});location.href=t.href}),n||y.set(c,a)}return a.then(i=>(i||y.delete(c),i))},z=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},G=t=>t.endsWith("/q-data.json"),gt=()=>E(F),vt=()=>E(H),yt=()=>E(V),mt=()=>j(A("qwikcity")),X=C(b(()=>q(()=>import("./q-adc661cb.js"),["build/q-adc661cb.js","build/q-1f1f69d1.js"]),"s_TxCFOy819ag")),tt=t=>{Object.seal(t)},et=(t,e,s,n,o)=>{const r={$seq$:0,$hostElement$:e,$element$:s,$event$:n,$url$:o,$qrl$:void 0,$props$:void 0,$renderCtx$:void 0,$subscriber$:void 0,$waitOn$:void 0,$locale$:t};return tt(r),r};et(void 0,void 0,void 0,"qRender");const nt=t=>W("script",{dangerouslySetInnerHTML:U,nonce:t.nonce}),st=C(b(()=>q(()=>import("./q-ba625540.js"),["build/q-ba625540.js","build/q-1f1f69d1.js"]),"s_18lKPZC20pU")),ot=()=>v(X,{children:[g("head",null,null,[g("meta",null,{charSet:"utf-8"},null,3,null),g("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),g("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),v(st,null,3,"35_0")],1,null),g("body",null,{class:"wv-ibmplex"},[v(B,null,3,"35_1"),v(nt,null,3,"35_2")],1,null)]},1,"35_3"),pt=Object.freeze(Object.defineProperty({__proto__:null,s_3sccYCDd1Z0:ot},Symbol.toStringTag,{value:"Module"}));export{ct as C,F as D,H as R,ut as a,it as b,J as c,V as d,at as e,lt as f,y as g,ft as h,gt as i,vt as j,yt as k,ht as l,pt as m,dt as r,P as t,mt as u};
