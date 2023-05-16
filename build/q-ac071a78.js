import{r as i,i as v}from"./q-649551cb.js";var T=Object.defineProperty,P=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t,n)=>(P(e,typeof t!="symbol"?t+"":t,n),n);let L=class{constructor(){w(this,"current",this.detect()),w(this,"handoffState","pending"),w(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},p=new L,y=(e,t)=>{p.isServer?i.useEffect(e,t):i.useLayoutEffect(e,t)};function k(e){let t=i.useRef(e);return y(()=>{t.current=e},[e]),t}let D=function(e){let t=k(e);return v.useCallback((...n)=>t.current(...n),[t])};function R(){let[e,t]=i.useState(p.isHandoffComplete);return e&&p.isHandoffComplete===!1&&t(!1),i.useEffect(()=>{e!==!0&&t(!0)},[e]),i.useEffect(()=>p.handoff(),[]),e}var j;let X=(j=v.useId)!=null?j:function(){let e=R(),[t,n]=v.useState(e?()=>p.nextId():null);return y(()=>{t===null&&n(p.nextId())},[t]),t!=null?""+t:void 0};function C(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}function Y(e){return p.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function O(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function q(e,t){let[n,r]=i.useState(()=>O(e));return y(()=>{r(O(e))},[e.type,e.as]),y(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let A=Symbol();function z(e,t=!0){return Object.assign(e,{[A]:t})}function G(...e){let t=i.useRef(e);i.useEffect(()=>{t.current=e},[e]);let n=D(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[A]))?void 0:n}function N(...e){return e.filter(Boolean).join(" ")}var x=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(x||{}),I=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(I||{});function J({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:c=!0,name:s}){let l=H(t,e);if(c)return g(l,n,r,s);let m=o??0;if(m&2){let{static:a=!1,...d}=l;if(a)return g(d,n,r,s)}if(m&1){let{unmount:a=!0,...d}=l;return C(a?0:1,{[0](){return null},[1](){return g({...d,hidden:!0,style:{display:"none"}},n,r,s)}})}return g(l,n,r,s)}function g(e,t={},n,r){let{as:o=n,children:c,refName:s="ref",...l}=E(e,["unmount","static"]),m=e.ref!==void 0?{[s]:e.ref}:{},a=typeof c=="function"?c(t):c;"className"in l&&l.className&&typeof l.className=="function"&&(l.className=l.className(t));let d={};if(t){let u=!1,h=[];for(let[b,f]of Object.entries(t))typeof f=="boolean"&&(u=!0),f===!0&&h.push(b);u&&(d["data-headlessui-state"]=h.join(" "))}if(o===i.Fragment&&Object.keys($(l)).length>0){if(!i.isValidElement(a)||Array.isArray(a)&&a.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let u=a.props,h=typeof(u==null?void 0:u.className)=="function"?(...f)=>N(u==null?void 0:u.className(...f),l.className):N(u==null?void 0:u.className,l.className),b=h?{className:h}:{};return i.cloneElement(a,Object.assign({},H(a.props,$(E(l,["ref"]))),d,m,F(a.ref,m.ref),b))}return i.createElement(o,Object.assign({},E(l,["ref"]),o!==i.Fragment&&m,o!==i.Fragment&&d),a)}function F(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function H(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...c){let s=n[r];for(let l of s){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;l(o,...c)}}});return t}function K(e){var t;return Object.assign(i.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function $(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function E(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Q(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&U(n)?!1:r}function U(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let S=i.createContext(null);S.displayName="OpenClosedContext";var B=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(B||{});function Z(){return i.useContext(S)}function _({value:e,children:t}){return v.createElement(S.Provider,{value:e},t)}var M=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(M||{});export{Z as C,K as D,X as I,x as S,z as T,J as X,q as a,M as b,_ as c,B as d,Y as e,R as f,N as g,I as j,y as l,D as o,Q as r,k as s,C as u,G as y};