import{l as u,X as y,G as a,_ as s,P as E,c as P,C as b,j as C,a as e,s as i,V as m,d as x,W as h,p as O}from"./q-67c038ec.js";import{V as t,d as V,e as D}from"./q-fc3d3ea7.js";import"./q-eca9c687.js";const I=()=>{var o,_,p,g,d,r,v,f,w,k;const[l,n]=u();return[((_=(o=n.data.value)==null?void 0:o.senate)==null?void 0:_.keepNcpo)??[],((g=(p=n.data.value)==null?void 0:p.senate)==null?void 0:g.nationStrat)??[],((r=(d=n.data.value)==null?void 0:d.senate)==null?void 0:r.consVote)??[],[],((f=(v=n.data.value)==null?void 0:v.parliament)==null?void 0:f.consDraft)??[],((k=(w=n.data.value)==null?void 0:w.parliament)==null?void 0:k.consVote)??[]][l.value]},R=({track:l})=>{const[n,o]=u();l(()=>n.value),o.value=0},T=()=>{const[l]=u();l.value=4},L=()=>{const[l]=u();l.value=0},A=()=>{const[l]=u();l.value=3},S=y(a(()=>s(()=>import("./q-b37bcca0.js"),["build/q-b37bcca0.js","build/q-67c038ec.js"]),"s_rKybqxhX8Ho")),F=l=>{E();const n=P(0),o=P(0),_=a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_p2MOsM66tqg",[o]),p=b(a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_bLRhRclFx2Q",[n])),g=b(a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_8iMFSmNuPhw",[n,l])),d=b(a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_NE63R2uyAbs",[n]));return C(a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_s8COnd2fOCE",[n,o])),e("div",null,{class:"flex flex-col gap-30 md:flex-row"},[e("div",null,{class:"flex-1"},[e("p",null,{class:"wv-h8 mb-10 text-center font-kondolar font-black"},["มติในที่ประชุมวุฒิสภา (",i(t.senate,"total"),")"],1,null),e("input",null,{class:"peer/1 sr-only",type:"radio",name:"ch2exp",id:"ch2exp-senate-keepncpo",checked:!0,onChange$:a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_E0TdOo0KqS4",[n])},null,3,null),e("label",null,{for:"ch2exp-senate-keepncpo",class:"mb-5 flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/1:bg-black peer-checked/1:text-white"},[e("img",null,{src:"./imgs/keep-ncpo.webp",alt:"",width:60,height:60,loading:"lazy",decoding:"async"},null,3,null),e("div",null,null,[e("p",null,{class:"wv-h10 mb-5 font-kondolar font-black"},"ตั้งบุคคลในโครงสร้างค้ำจุน คสช.",3,null),e("p",null,{class:"wv-b5"},[i(t.senate,"keepNcpo")," มติ"],1,null)],1,null)],1,null),e("input",null,{class:"peer/2 sr-only",type:"radio",name:"ch2exp",id:"ch2exp-senate-nationalstrat",onChange$:a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_ktXaxUOvmW4",[n])},null,3,null),e("label",null,{for:"ch2exp-senate-nationalstrat",class:"mb-5 flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/2:bg-black peer-checked/2:text-white"},[e("img",null,{src:"./imgs/nation-strat.webp",alt:"",width:60,height:60,loading:"lazy",decoding:"async"},null,3,null),e("div",null,null,[e("p",null,{class:"wv-h10 mb-5 font-kondolar font-black"},"ยุทธศาสตร์ชาติ",3,null),e("p",null,{class:"wv-b5"},[i(t.senate,"nationStrat")," มติ"],1,null)],1,null)],1,null),e("input",null,{class:"peer/3 sr-only",type:"radio",name:"ch2exp",id:"ch2exp-senate-consvote",onChange$:a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_VgH56D20ddQ",[n])},null,3,null),e("label",null,{for:"ch2exp-senate-consvote",class:"mb-10 flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/3:bg-black peer-checked/3:text-white"},[e("img",null,{src:"./imgs/cons-vote.webp",alt:"",width:60,height:60,loading:"lazy",decoding:"async"},null,3,null),e("div",null,null,[e("p",null,{class:"wv-h10 mb-5 font-kondolar font-black"},"ประชามติแก้รัฐธรรมนูญ",3,null),e("p",null,{class:"wv-b5"},[i(t.senate,"consVote")," มติ"],1,null)],1,null)],1,null),e("p",null,{class:"wv-h8 mb-10 text-center font-kondolar font-black"},["มติในที่ประชุมร่วมของรัฐสภา (",i(t.parliament,"total"),")"],1,null),e("input",null,{class:"peer/4 sr-only",type:"radio",name:"ch2exp",id:"ch2exp-parliament-selectpm",onChange$:a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_YUS6x6YlGDY",[n])},null,3,null),e("label",null,{for:"ch2exp-parliament-selectpm",class:"mb-5 flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/4:bg-black peer-checked/4:text-white"},[e("img",null,{src:"./imgs/select-pm.webp",alt:"",width:60,height:60,loading:"lazy",decoding:"async"},null,3,null),e("div",null,null,[e("p",null,{class:"wv-h10 mb-5 font-kondolar font-black"},"เลือกนายกรัฐมนตรี",3,null),e("p",null,{class:"wv-b5"},[i(t.parliament,"selectPm")," มติ"],1,null)],1,null)],1,null),e("input",null,{class:"peer/5 sr-only",type:"radio",name:"ch2exp",id:"ch2exp-parliament-consdraft",onChange$:a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_GD2EhFw0tyQ",[n])},null,3,null),e("label",null,{for:"ch2exp-parliament-consdraft",class:"mb-5 flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/5:bg-black peer-checked/5:text-white"},[e("img",null,{src:"./imgs/cons-draft.webp",alt:"",width:60,height:60,loading:"lazy",decoding:"async"},null,3,null),e("div",null,null,[e("p",null,{class:"wv-h10 mb-5 font-kondolar font-black"},"ร่างแก้รัฐธรรมนูญ",3,null),e("p",null,{class:"wv-b5"},[i(t.parliament,"consDraft")," มติ"],1,null)],1,null)],1,null),e("input",null,{class:"peer/6 sr-only",type:"radio",name:"ch2exp",id:"ch2exp-parliament-consvote",onChange$:a(()=>s(()=>Promise.resolve().then(()=>c),void 0),"s_tUp26PHFQeI",[n])},null,3,null),e("label",null,{for:"ch2exp-parliament-consvote",class:"flex cursor-pointer items-center gap-10 rounded-10 border bg-white p-10 transition-colors peer-checked/6:bg-black peer-checked/6:text-white"},[e("img",null,{src:"./imgs/cons-vote.webp",alt:"",width:60,height:60,loading:"lazy",decoding:"async"},null,3,null),e("div",null,null,[e("p",null,{class:"wv-h10 mb-5 font-kondolar font-black"},"ประชามติแก้รัฐธรรมนูญ",3,null),e("p",null,{class:"wv-b5"},[i(t.parliament,"consVote")," มติ"],1,null)],1,null)],1,null)],1,null),e("div",null,{class:"flex flex-1 flex-col gap-10"},[e("div",null,{class:"mb-10 flex flex-col items-center justify-between gap-10 md:flex-row"},[e("div",null,{class:"wv-b4 font-bold"},["– ",m(r=>r.value,[p])," มติ –"],3,null),p.value>5&&x(S,{id:"ch2",perPage:5,get currentPage(){return o.value},get total(){return p.value},onChange:_,[h]:{id:h,perPage:h,currentPage:m(r=>r.value,[o]),total:m(r=>r.value,[p]),onChange:h}},3,"8h_16")],1,null),d.value==="เลือกนายกรัฐมนตรี"?x(V,null,3,"8h_17"):g.value.slice(o.value*5,o.value*5+5).map(r=>x(D,{data:r,get type(){return d.value},[h]:{type:m(v=>v.value,[d])}},3,r.Id))],1,null)],1,"8h_18")},M=()=>{const[l]=u();return[t.senate.keepNcpo,t.senate.nationStrat,t.senate.consVote,t.parliament.selectPm,t.parliament.consDraft,t.parliament.consVote][l.value]},N=()=>{const[l]=u();l.value=1},Q=l=>{const[n]=u();n.value=l},U=()=>{const[l]=u();return["ค้ำจุน คสช.","ยุทธศาสตร์ชาติ","ประชามติ","เลือกนายกรัฐมนตรี","แก้รัฐธรรมนูญ","ประชามติ"][l.value]},z=()=>{const[l]=u();l.value=2},G=()=>{const[l]=u();l.value=5},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:O,s_8iMFSmNuPhw:I,s_E0TdOo0KqS4:L,s_GD2EhFw0tyQ:T,s_NE63R2uyAbs:U,s_OCprtmtSTUU:F,s_VgH56D20ddQ:z,s_YUS6x6YlGDY:A,s_bLRhRclFx2Q:M,s_ktXaxUOvmW4:N,s_p2MOsM66tqg:Q,s_s8COnd2fOCE:R,s_tUp26PHFQeI:G},Symbol.toStringTag,{value:"Module"}));export{O as _hW,I as s_8iMFSmNuPhw,L as s_E0TdOo0KqS4,T as s_GD2EhFw0tyQ,U as s_NE63R2uyAbs,F as s_OCprtmtSTUU,z as s_VgH56D20ddQ,A as s_YUS6x6YlGDY,M as s_bLRhRclFx2Q,N as s_ktXaxUOvmW4,Q as s_p2MOsM66tqg,R as s_s8COnd2fOCE,G as s_tUp26PHFQeI};
