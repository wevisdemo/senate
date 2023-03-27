/* Qwik Service Worker */
const appBundles=[["q-0414f0ae.js",[7,10],["VkLNXphUh5s"]],["q-09915f1d.js",[7,9],["AKetNByE5TM","KnNE9eL0qfc"]],["q-21ddb057.js",[7,9,10],["qJ0s4sH5iHo"]],["q-2522f541.js",[7],["6LYztwGzxAA"]],["q-2af5ce40.js",[7,10]],["q-2c0a0ddb.js",[7,10,16],["1wzXtPoweZc"]],["q-45aab3b6.js",[]],["q-4d745517.js",[]],["q-6370bade.js",[7,10],["EWIT9ENzUX0","hkT84xKSMLE","zH94hIe0Ick"]],["q-6a3bb5d7.js",[7],["3sccYCDd1Z0"]],["q-6a513cdc.js",[7]],["q-74434839.js",[7,10,16],["XclpHpAVvoc"]],["q-7a290980.js",[10]],["q-7e7f9a32.js",[7,9],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-84f25a71.js",[7,10,12,16],["2ljQzovtSxY"]],["q-86089806.js",[7]],["q-980d8012.js",[10]],["q-ac77fa51.js",[7]],["q-c781a1af.js",[7,10],["xYL1qOwPyDI"]],["q-d91f0c60.js",[7]],["q-eab4c2ee.js",[7]],["q-ef6e4f2c.js",[7,10,12,16],["dJbfVE9x8jY"]],["q-f8dee85a.js",[7,9],["18lKPZC20pU"]]];
const libraryBundleIds=[13];
const linkBundles=[[/^\/senate\/$/,[17,0,20,18]],[/^\/senate\/about\/?$/,[17,0,4,14]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
