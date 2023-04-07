/* Qwik Service Worker */
const appBundles=[["q-006ed856.js",[9,16]],["q-026f7484.js",[9,16],["EWIT9ENzUX0","hkT84xKSMLE","zH94hIe0Ick"]],["q-0424c7bb.js",[5,16,22,38],["dHMCVc5GbSo","rJW5dfhxwwI"]],["q-0562f78f.js",[16,34],["AKetNByE5TM","KnNE9eL0qfc"]],["q-0e8ec9e6.js",[16]],["q-0ee514bf.js",[38]],["q-1a31df53.js",[9,16,34],["qJ0s4sH5iHo"]],["q-21534d77.js",[9,16,38],["46ehbxf4oEU","mOkEkIcoGi0","wo63prFBQ34"]],["q-33696d72.js",[16,38],["0lbfjdLUNdI","ijvkKbzByC4"]],["q-3ad09938.js",[16]],["q-43e9ed94.js",[16]],["q-45aab3b6.js",[]],["q-49eaab38.js",[16,38],["08RBwZwbUYw","AdYWXqI3JTc","ovjEOtCKC8g"]],["q-4b8363ab.js",[]],["q-5244a28e.js",[5,9,13,16,22,35,38],["6ioOxXsAllg","fObZRlAxyfw"]],["q-527923dd.js",[9,16,42],["XclpHpAVvoc"]],["q-541211e9.js",[]],["q-555165a9.js",[9,16,35],["xYL1qOwPyDI"]],["q-5a9f8a79.js",[9,16,19,42],["dJbfVE9x8jY"]],["q-76a2fe91.js",[9]],["q-7b2082bb.js",[16,38],["89jL6XIAe0c","KXUsGqdIjok"]],["q-7e16338e.js",[16]],["q-85974b4d.js",[5,38]],["q-8b658ce0.js",[5,16,22,38],["grzj7HYqno8","mpHBqK08v8E","WJLMpOVzl2Q"]],["q-8fd81c31.js",[16],["6LYztwGzxAA"]],["q-91953f24.js",[16],["6QuTbOIAmLY","C4C49H9K0w8"]],["q-9d3e2a44.js",[9,16],["VkLNXphUh5s"]],["q-9f7f7a3e.js",[5,16,22,38],["dReKMVELfUc","iFx57w0Goa8","ulk0rmQB0gk"]],["q-a268a221.js",[9]],["q-a3d33079.js",[16,34],["18lKPZC20pU"]],["q-a48ab146.js",[5,9,16,22,35,38],["7VI0iZlyrr0","Ma0BDisFImA"]],["q-b1ff60b8.js",[9,16,42],["1wzXtPoweZc"]],["q-b950e8cb.js",[16,34],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-ba23d54b.js",[16,38],["e5iq6bTbGRs","zqOJ6heKB4M"]],["q-cf6534ff.js",[16],["3sccYCDd1Z0"]],["q-cfb7e9bb.js",[9,16]],["q-d0335604.js",[9,16,19,42],["2ljQzovtSxY"]],["q-d34d72e5.js",[16],["Gs05USd4I4g"]],["q-d5377a27.js",[]],["q-e1456471.js",[5,13,16,38],["kLwZE4e1Kw4","PkxqWH9qjAY","UmJ62zZhn7o"]],["q-e8f080f3.js",[9,16,28,42],["RpP92KOWcOo"]],["q-f45b6b9d.js",[9,16,28,42],["gr92WWF6Sp0"]],["q-fb481e28.js",[9]],["q-ffd58fd2.js",[5,9,16,22,35,38],["7Hs0A5p0Glg","aLrEeNy6bE8","IBnu8s0pYJg"]]];
const libraryBundleIds=[32];
const linkBundles=[[/^\/senate\/$/,[4,26,35,2,7,8,12,14,17,18,20,23,25,27,30,33,37,39,43]],[/^\/senate\/about\/?$/,[4,26,0,36]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
