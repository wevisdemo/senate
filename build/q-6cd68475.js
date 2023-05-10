import{I as C,h as M,n as P,A as o,N as w,M as r,E as v,z as I,_ as N,j as R}from"./q-cfef4036.js";import{_ as D}from"./q-4b8363ab.js";import{r as F,a as j,i as V}from"./q-d5377a27.js";import{p as Y,b as T,i as B,l as q,h as G,n as $}from"./q-0ee514bf.js";import{a as O}from"./q-85974b4d.js";import{m}from"./q-1e193bfb.js";import"./q-fc58cff2.js";function J(e,l){return l?e*(1e3/l):0}const b=new WeakMap;let h;function K(e,l){if(l){const{inlineSize:t,blockSize:s}=l[0];return{width:t,height:s}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function Q({target:e,contentRect:l,borderBoxSize:t}){var s;(s=b.get(e))===null||s===void 0||s.forEach(n=>{n({target:e,contentSize:l,get size(){return K(e,t)}})})}function U(e){e.forEach(Q)}function X(){typeof ResizeObserver>"u"||(h=new ResizeObserver(U))}function Z(e,l){h||X();const t=F(e);return t.forEach(s=>{let n=b.get(s);n||(n=new Set,b.set(s,n)),n.add(l),h==null||h.observe(s)}),()=>{t.forEach(s=>{const n=b.get(s);n==null||n.delete(l),n!=null&&n.size||h==null||h.unobserve(s)})}}const _=new Set;let y;function ee(){y=()=>{const e={width:window.innerWidth,height:window.innerHeight},l={target:window,size:e,contentSize:e};_.forEach(t=>t(l))},window.addEventListener("resize",y)}function te(e){return _.add(e),y||ee(),()=>{_.delete(e),!_.size&&y&&(y=void 0)}}function le(e,l){return j(e)?te(e):Z(e,l)}const ne=50,W=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),se=()=>({time:0,x:W(),y:W()}),ie={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function H(e,l,t,s){const n=t[l],{length:i,position:a}=ie[l],p=n.current,g=t.time;n.current=e["scroll"+a],n.scrollLength=e["scroll"+i]-e["client"+i],n.offset.length=0,n.offset[0]=0,n.offset[1]=n.scrollLength,n.progress=Y(0,n.scrollLength,n.current);const c=s-g;n.velocity=c>ne?0:J(n.current-p,c)}function oe(e,l,t){H(e,"x",l,t),H(e,"y",l,t),l.time=t}function re(e,l){let t={x:0,y:0},s=e;for(;s&&s!==l;)if(s instanceof HTMLElement)t.x+=s.offsetLeft,t.y+=s.offsetTop,s=s.offsetParent;else if(s instanceof SVGGraphicsElement&&"getBBox"in s){const{top:n,left:i}=s.getBBox();for(t.x+=i,t.y+=n;s&&s.tagName!=="svg";)s=s.parentNode}return t}const ae={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},E={start:0,center:.5,end:1};function S(e,l,t=0){let s=0;if(E[e]!==void 0&&(e=E[e]),T(e)){const n=parseFloat(e);e.endsWith("px")?s=n:e.endsWith("%")?e=n/100:e.endsWith("vw")?s=n/100*document.documentElement.clientWidth:e.endsWith("vh")?s=n/100*document.documentElement.clientHeight:e=n}return B(e)&&(s=l*e),t+s}const ce=[0,0];function de(e,l,t,s){let n=Array.isArray(e)?e:ce,i=0,a=0;return B(e)?n=[e,e]:T(e)&&(e=e.trim(),e.includes(" ")?n=e.split(" "):n=[e,E[e]?e:"0"]),i=S(n[0],t,s),a=S(n[1],l),i-a}const ue={x:0,y:0};function fe(e,l,t){let{offset:s=ae.All}=t;const{target:n=e,axis:i="y"}=t,a=i==="y"?"height":"width",p=n!==e?re(n,e):ue,g=n===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:n.clientWidth,height:n.clientHeight},c={width:e.clientWidth,height:e.clientHeight};l[i].offset.length=0;let u=!l[i].interpolate;const f=s.length;for(let d=0;d<f;d++){const L=de(s[d],c[a],g[a],p[i]);!u&&L!==l[i].interpolatorOffsets[d]&&(u=!0),l[i].offset[d]=L}u&&(l[i].interpolate=q(G(f),l[i].offset),l[i].interpolatorOffsets=[...l[i].offset]),l[i].progress=l[i].interpolate(l[i].current)}function he(e,l=e,t){if(t.x.targetOffset=0,t.y.targetOffset=0,l!==e){let s=l;for(;s&&s!=e;)t.x.targetOffset+=s.offsetLeft,t.y.targetOffset+=s.offsetTop,s=s.offsetParent}t.x.targetLength=l===e?l.scrollWidth:l.clientWidth,t.y.targetLength=l===e?l.scrollHeight:l.clientHeight,t.x.containerLength=e.clientWidth,t.y.containerLength=e.clientHeight}function pe(e,l,t,s={}){const n=s.axis||"y";return{measure:()=>he(e,s.target,t),update:i=>{oe(e,t,i),(s.offset||s.target)&&fe(e,t,s)},notify:j(l)?()=>l(t):ge(l,t[n])}}function ge(e,l){return e.pause(),e.forEachNative((t,{easing:s})=>{var n,i;if(t.updateDuration)s||(t.easing=$),t.updateDuration(1);else{const a={duration:1e3};s||(a.easing="linear"),(i=(n=t.effect)===null||n===void 0?void 0:n.updateTiming)===null||i===void 0||i.call(n,a)}}),()=>{e.currentTime=l.progress}}const x=new WeakMap,k=new WeakMap,z=new WeakMap,A=e=>e===document.documentElement?window:e;function we(e,l={}){var{container:t=document.documentElement}=l,s=D(l,["container"]);let n=z.get(t);n||(n=new Set,z.set(t,n));const i=se(),a=pe(t,e,i,s);if(n.add(a),!x.has(t)){const c=()=>{const f=performance.now();for(const d of n)d.measure();for(const d of n)d.update(f);for(const d of n)d.notify()};x.set(t,c);const u=A(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&k.set(t,le(t,c)),u.addEventListener("scroll",c,{passive:!0})}const p=x.get(t),g=requestAnimationFrame(p);return()=>{var c;typeof e!="function"&&e.stop(),cancelAnimationFrame(g);const u=z.get(t);if(!u||(u.delete(a),u.size))return;const f=x.get(t);x.delete(t),f&&(A(t).removeEventListener("scroll",f),(c=k.get(t))===null||c===void 0||c(),window.removeEventListener("resize",f))}}const ve=()=>{const[e,l]=C();if(l.value){const[t,...s]=l.value.children;window.getComputedStyle(t).display!=="none"&&(t.style.clipPath="polygon(0 0, 100% 0, 100% 0, 0 0)",we(O(t,{clipPath:["polygon(0 0, 100% 0, 100% 0, 0 0)","polygon(0 0, 100% 0, 100% 100%, 0 100%)"]}),{target:l.value,offset:["start 0.6","end 0.9"]})),s.forEach(n=>{n.classList.add("opacity-0"),V(n,()=>{O(n,{opacity:[0,1],transform:["translateY(20px)","translateY(0)"]},{duration:.5});const i=n.dataset.lottie;i&&(e.value=[...e.value,+i])},{amount:.99})})}},me=()=>{const e=M(),l=M([]);return P(I(()=>N(()=>Promise.resolve().then(()=>xe),void 0),"s_M8EYOpffTVc",[l,e]),{strategy:"document-idle"}),o("div",{ref:e},{class:"mb-60 flex flex-col items-center gap-10 overflow-hidden py-40"},[o("svg",{style:{willChange:"clip-path"}},{class:"absolute top-0 hidden h-full w-auto object-cover md:block",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 149 320"},o("path",null,{fill:"#FFA9D1",d:"M126.587 297.783c29.057-29.275 29.057-76.731.34-106.006l-84.509-85.144c-17.366-17.496-17.366-46.443.34-63.94 8.35-8.412 19.7-13.118 31.73-13.118 12.03 0 23.381 4.706 31.732 13.46 17.366 17.497 17.366 46.444-.34 63.94L83.504 129.52l20.706 20.861 22.716-22.886c28.73-28.946 29.056-76.388.339-105.662-29.07-28.946-76.495-29.275-105.554 0C7.685 35.965 0 54.473 0 74.664c0 20.191 7.685 39.044 21.71 53.174l84.509 85.144c17.366 17.497 17.366 46.444-.339 63.94-17.705 17.496-46.097 17.497-63.462-.342-17.366-17.496-17.366-46.443.339-63.939l22.376-22.545-20.706-20.862-22.376 22.545C8.025 205.91 0 225.089 0 244.953c0 19.85 7.685 38.7 21.71 52.831C35.737 311.915 54.447 319.658 74.148 320c19.701-.342 38.414-8.086 52.439-22.217z"},null,3,null),3,null),o("div",null,{"data-lottie":"1",class:"mx-auto flex aspect-square w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-full bg-black p-30 text-center text-white"},[w(m,{src:"./imgs/lotties/process/01.json",width:"112px",height:"112px",delayMs:250,get play(){return l.value.includes(1)},[r]:{src:r,width:r,height:r,delayMs:r,play:v(t=>t.value.includes(1),[l])}},3,"eu_0"),o("p",null,{class:"wv-h8 font-kondolar font-bold"},"ส.ว. ชุดปัจจุบันที่แต่งตั้งตามกระบวนการในบทเฉพาะกาลของรัฐธรรมนูญ",3,null),o("p",null,{class:"wv-h9 mb-10"},"มาตรา 269",3,null)],1,null),o("img",null,{src:"./imgs/darr.svg",alt:"",width:49,height:56,loading:"lazy",decoding:"async"},null,3,null),o("div",null,{class:"flex items-center gap-4 rounded-full bg-black py-4 px-20 text-white"},[o("svg",null,{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",viewBox:"0 0 17 17",width:"17",height:"17"},o("path",null,{d:"M14.276 4.002c.275.245.3.666.056.941l-7.112 8a.667.667 0 01-.996 0l-3.556-4a.667.667 0 01.997-.886l3.057 3.44 6.613-7.44a.667.667 0 01.941-.055z"},null,3,null),3,null),o("span",null,{class:"wv-b4 font-bold"},"อยู่ในวาระ",3,null)],3,null),o("img",null,{src:"./imgs/darr.svg",alt:"",width:49,height:56,loading:"lazy",decoding:"async"},null,3,null),o("div",null,{"data-lottie":"2",class:"mx-auto flex w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-10 border bg-white py-30 px-20 text-center"},[w(m,{src:"./imgs/lotties/process/02.json",width:"112px",height:"112px",delayMs:250,get play(){return l.value.includes(2)},[r]:{src:r,width:r,height:r,delayMs:r,play:v(t=>t.value.includes(2),[l])}},3,"eu_1"),o("p",null,{class:"wv-h8 font-kondolar font-bold"},"สามารถโหวตเลือกนายกรัฐมนตรีในสมัยหน้าได้อีก 1 ครั้ง",3,null),o("p",null,{class:"wv-h9"},"มาตรา 272",3,null)],1,null),o("img",null,{src:"./imgs/darr.svg",alt:"",width:49,height:56,loading:"lazy",decoding:"async"},null,3,null),o("div",null,{class:"flex items-center gap-4 rounded-full bg-black py-4 px-20 text-white"},[o("svg",null,{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",viewBox:"0 0 17 17",width:"17",height:"17"},o("path",null,{d:"M4.028 4.029c.26-.26.683-.26.943 0L8.5 7.557l3.528-3.528a.667.667 0 11.943.943L9.442 8.5l3.53 3.529a.667.667 0 01-.944.943L8.5 9.443 4.97 12.972a.667.667 0 01-.943-.943L7.557 8.5 4.028 4.972a.667.667 0 010-.943z"},null,3,null),3,null),o("span",null,{class:"wv-b4 font-bold"},"อยู่ในวาระ",3,null)],3,null),o("img",null,{src:"./imgs/darr.svg",alt:"",width:49,height:56,loading:"lazy",decoding:"async"},null,3,null),o("div",null,{"data-lottie":"3",class:"mx-auto flex w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-10 border bg-white py-30 px-20 text-center"},[w(m,{src:"./imgs/lotties/process/03.json",width:"112px",height:"112px",delayMs:250,get play(){return l.value.includes(3)},[r]:{src:r,width:r,height:r,delayMs:r,play:v(t=>t.value.includes(3),[l])}},3,"eu_2"),o("p",null,{class:"wv-h8 font-kondolar font-bold"},"คัดเลือก ส.ว. ชุดใหม่ตามกระบวนการในบททั่วไปของรัฐธรรมนูญ",3,null),o("p",null,{class:"wv-h9"},"มาตรา 107",3,null)],1,null),o("img",null,{src:"./imgs/darr.svg",alt:"",width:49,height:56,loading:"lazy",decoding:"async"},null,3,null),o("div",null,{"data-lottie":"4",class:"mx-auto flex w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-10 border bg-white py-30 px-20 text-center"},[w(m,{src:"./imgs/lotties/process/04.json",width:"112px",height:"112px",delayMs:250,get play(){return l.value.includes(4)},[r]:{src:r,width:r,height:r,delayMs:r,play:v(t=>t.value.includes(4),[l])}},3,"eu_3"),o("p",null,{class:"wv-h8 font-kondolar font-bold"},["ที่มาของ ส.ว. ในรัฐธรรมนูญ 2560 บททั่วไปที่จะมีการคัดเลือกหลังโหวตนายกฯ ครั้งหน้ามีโอกาสที่จะเอื้อให้เกิดการ “จัดฮั้ว”"," ","ซึ่งส่งผลให้ได้กลุ่มคนที่จะเข้ามาสนับสนุนรัฐบาล คสช. แปลงรูปต่อไป"],3,null)],1,null),o("img",null,{src:"./imgs/darr.svg",alt:"",width:49,height:56,loading:"lazy",decoding:"async"},null,3,null),o("div",null,{"data-lottie":"5",class:"mx-auto flex aspect-square w-[calc(100%_-_40px)] min-w-[280px] max-w-[337px] flex-col items-center justify-center gap-10 overflow-hidden rounded-full bg-black p-30 text-center text-white"},[w(m,{src:"./imgs/lotties/process/05.json",width:"180px",height:"180px",delayMs:250,get play(){return l.value.includes(5)},[r]:{src:r,width:r,height:r,delayMs:r,play:v(t=>t.value.includes(5),[l])}},3,"eu_4"),o("p",null,{class:"wv-h8 mb-10 font-kondolar font-bold"},"ระบบ ส.ว. ดำเนินต่อไป",3,null)],1,null)],1,"eu_5")},xe=Object.freeze(Object.defineProperty({__proto__:null,_hW:R,s_30T2B7deCus:me,s_M8EYOpffTVc:ve},Symbol.toStringTag,{value:"Module"}));export{R as _hW,me as s_30T2B7deCus,ve as s_M8EYOpffTVc};
