import{l as c,X as w,G as a,_ as r,P,c as f,E as x,e as O,C as y,a as l,d as i,W as t,V as p,s as g,p as E}from"./q-3c6e43d2.js";import{J as m,g as L,P as h,O as k,D as G}from"./q-e5ff6486.js";import{T as I}from"./q-af59510d.js";import"./q-95194950.js";const T=()=>{const[n]=c();n.type.position=!n.type.position},C=()=>{const[n,s]=c();n.job=s+1},D=async()=>{const[n]=c(),o=await(await fetch("./data/people.json")).json();n.value=o},V=()=>{const[n]=c();n.type.friend=!n.type.friend},j=()=>{const[n]=c();n.job=0},A=()=>{const[n]=c();n.relation.yes=!n.relation.yes},M=()=>{const[n]=c();n.relation.no=!n.relation.no},R=()=>{const[n,s]=c(),o=[...n.value.list].filter(e=>{if(s.job!==0&&s.job!==m.indexOf(e.OccupationGroup)+1)return!1;let d=0;return s.type.friend&&e.SenatorMethod==="เลือกกันเอง"&&d++,s.type.ncpo&&e.SenatorMethod==="เลือกโดย คสช."&&d++,s.type.position&&e.SenatorMethod==="โดยตำแหน่ง"&&d++,s.relation.yes&&e.NcpoType&&d++,s.relation.no&&!e.NcpoType&&d++,s.status.active&&e.IsActive&&d++,s.status.out&&!e.IsActive&&d++,d>=3}),v=L(o,e=>e.OccupationGroup);return{...n.value,list:o,listByJobs:v}},Z=()=>{const[n]=c();n.status.active=!n.status.active},B=()=>{const[n]=c();n.type.ncpo=!n.type.ncpo},z=()=>{const[n]=c();n.status.out=!n.status.out},J=n=>{const[s]=c();s.value=n},_=w(a(()=>r(()=>import("./q-0ba57e96.js"),["build/q-0ba57e96.js","build/q-3c6e43d2.js"]),"s_VJDOFv76KsU")),b=w(a(()=>r(()=>import("./q-e27443c7.js"),["build/q-e27443c7.js","build/q-3c6e43d2.js"]),"s_60t81V1lvvU")),S=()=>{P();const n=f(0),s=f({imgBase:"",list:[]});x(a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_pzMd8jXgygs",[s]));const o=O({type:{position:!0,ncpo:!0,friend:!0},relation:{yes:!0,no:!0},status:{active:!0,out:!0},job:0},{deep:!0}),v=y(a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_KcZgjj9PU0g",[s,o]));return l("div",null,{class:"con mb-60"},[i(I,{id:"senate",secondBtnText:"ดูรายชื่อ ก–ฮ",onChange:a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_77nV8dECIr8",[n]),[t]:{id:t,secondBtnText:t}},3,"GZ_9"),l("svg",null,{class:"absolute h-0 w-0"},l("defs",null,null,l("clipPath",null,{id:"imageStar"},l("path",null,{fillRule:"evenodd",d:"M40.398 11.974l-8.325-8.908-8.326 8.908-12.185-.412.412 12.185-8.908 8.326 8.908 8.325-.412 12.185 12.185-.412 8.326 8.908 8.325-8.908 12.185.412-.412-12.185 8.908-8.325-8.908-8.326.412-12.185-12.185.412z",clipRule:"evenodd"},null,3,null),3,null),3,null),3,null),l("div",null,{class:"flex flex-col items-start gap-30 lg:flex-row"},[l("div",null,{class:"flex-1 rounded-10 border bg-white p-30 lg:max-w-[530px]"},[l("p",null,{class:"wv-h6 mb-10 font-kondolar font-black"},"เลือกสำรวจตาม",3,null),l("p",null,{class:"wv-b2 mb-10 font-bold"},"ประเภท ส.ว.",3,null),l("div",null,{class:"mb-10 flex flex-wrap gap-[8px]"},[i(_,{id:"โดยตำแหน่ง",get checked(){return o.type.position},onChange:a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_1l8M8jcJCwQ",[o]),children:[l("div",null,{class:"h-[12px] w-[12px] rounded-full border border-black bg-senate-green"},null,3,null),l("span",null,{class:"wv-b4 font-bold leading-none"},"โดยตำแหน่ง",3,null)],[t]:{id:t,checked:p(e=>e.type.position,[o])}},3,"GZ_10"),i(_,{id:"เลือกโดยคสช",get checked(){return o.type.ncpo},onChange:a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_aL49DogTw1g",[o]),children:[l("div",null,{class:"h-[12px] w-[12px] rounded-full border border-black bg-senate-blue"},null,3,null),l("span",null,{class:"wv-b4 font-bold leading-none"},"เลือกโดย คสช.",3,null)],[t]:{id:t,checked:p(e=>e.type.ncpo,[o])}},3,"GZ_11"),i(_,{id:"เลือกกันเอง",get checked(){return o.type.friend},onChange:a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_vHoJHa0v6RA",[o]),children:[l("div",null,{class:"h-[12px] w-[12px] rounded-full border border-black bg-senate-pink"},null,3,null),l("span",null,{class:"wv-b4 font-bold leading-none"},"เลือกกันเอง",3,null)],[t]:{id:t,checked:p(e=>e.type.friend,[o])}},3,"GZ_12")],1,null),l("p",null,{class:"wv-b2 mb-10 font-bold"},"ความเกี่ยวข้องกับ คสช.",3,null),l("div",null,{class:"mb-10 flex flex-wrap gap-[8px]"},[i(_,{id:"ผู้มีส่วนเกี่ยวข้องกับคสช",get checked(){return o.relation.yes},onChange:a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_xlmi1MJ7ASw",[o]),children:[l("svg",null,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 17",width:"17",height:"17"},l("path",null,{fill:"currentColor",d:"M14.276 4.002c.275.244.3.666.056.94l-7.112 8a.667.667 0 01-.996 0l-3.556-4a.667.667 0 01.997-.885l3.057 3.44 6.613-7.44a.667.667 0 01.941-.055z"},null,3,null),3,null),l("span",null,{class:"wv-b4 font-bold leading-none"},["ผู้มีส่วนเกี่ยวข้องกับ คสช. (",g(h,"withNcpo"),")"],1,null)],[t]:{id:t,checked:p(e=>e.relation.yes,[o])}},1,"GZ_13"),i(_,{id:"ผู้ที่ไม่เกี่ยวข้องกับคสช",get checked(){return o.relation.no},onChange:a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_GL0HN2ycmDI",[o]),children:[l("svg",null,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 17",width:"17",height:"17"},l("path",null,{fill:"currentColor",d:"M4.029 4.029c.26-.26.682-.26.943 0L8.5 7.557 12.03 4.03a.667.667 0 11.943.942L9.443 8.5l3.529 3.529a.667.667 0 01-.943.942L8.5 9.443 4.972 12.97a.667.667 0 01-.943-.942L7.557 8.5 4.03 4.971a.667.667 0 010-.942z"},null,3,null),3,null),l("span",null,{class:"wv-b4 font-bold leading-none"},["ผู้ที่ไม่เกี่ยวข้องกับ คสช. (",g(h,"notNcpo"),")"],1,null)],[t]:{id:t,checked:p(e=>e.relation.no,[o])}},1,"GZ_14")],1,null),l("p",null,{class:"wv-b2 mb-10 font-bold"},"สถานะ",3,null),l("div",null,{class:"mb-10 flex flex-wrap gap-[8px]"},[i(_,{id:"ดำรงตำแหน่ง",get checked(){return o.status.active},onChange:a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_NaPG0P07hVI",[o]),children:[l("svg",null,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 17",width:"17",height:"17"},l("path",null,{fill:"currentColor",d:"M14.276 4.002c.275.244.3.666.056.94l-7.112 8a.667.667 0 01-.996 0l-3.556-4a.667.667 0 01.997-.885l3.057 3.44 6.613-7.44a.667.667 0 01.941-.055z"},null,3,null),3,null),l("span",null,{class:"wv-b4 font-bold leading-none"},"ดำรงตำแหน่ง",3,null)],[t]:{id:t,checked:p(e=>e.status.active,[o])}},3,"GZ_15"),i(_,{id:"พ้นจากตำแหน่ง",get checked(){return o.status.out},onChange:a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_MYp7kB1zFa0",[o]),children:[l("svg",null,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 17",width:"17",height:"17"},l("path",null,{fill:"currentColor",d:"M4.029 4.029c.26-.26.682-.26.943 0L8.5 7.557 12.03 4.03a.667.667 0 11.943.942L9.443 8.5l3.529 3.529a.667.667 0 01-.943.942L8.5 9.443 4.972 12.97a.667.667 0 01-.943-.942L7.557 8.5 4.03 4.971a.667.667 0 010-.942z"},null,3,null),3,null),l("span",null,{class:"wv-b4 font-bold leading-none"},"พ้นจากตำแหน่ง",3,null)],[t]:{id:t,checked:p(e=>e.status.out,[o])}},3,"GZ_16")],1,null),l("p",null,{class:"wv-b2 mb-10 font-bold"},"อาชีพ",3,null),l("div",null,{class:"flex flex-wrap gap-[8px]"},[i(b,{name:"อาชีพ",id:"ทั้งหมด",get checked(){return o.job===0},onChange:a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_oGquGW0o8hg",[o]),children:l("span",null,{class:"wv-b4 font-bold leading-none"},["ทั้งหมด (",g(h,"total"),")"],1,null),[t]:{name:t,id:t,checked:p(e=>e.job===0,[o])}},1,"GZ_17"),m.map((e,d)=>i(b,{name:"อาชีพ",id:e,checked:o.job===d+1,onChange:a(()=>r(()=>Promise.resolve().then(()=>u),void 0),"s_XOaMywLY0wo",[o,d]),children:l("span",null,{class:"wv-b4 font-bold leading-none"},[e.replace("ๆ"," ๆ")," (",h.jobs[e],")"],1,null),[t]:{name:t}},1,e))],1,null)],1,null),n.value===0?i(k,{get data(){return v.value},[t]:{data:p(e=>e.value,[v])}},3,"GZ_18"):i(G,{get data(){return v.value},[t]:{data:p(e=>e.value,[v])}},3,"GZ_19")],1,null)],1,"GZ_20")},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:E,s_1l8M8jcJCwQ:T,s_2mjCc1TQ7Pc:S,s_77nV8dECIr8:J,s_GL0HN2ycmDI:M,s_KcZgjj9PU0g:R,s_MYp7kB1zFa0:z,s_NaPG0P07hVI:Z,s_XOaMywLY0wo:C,s_aL49DogTw1g:B,s_oGquGW0o8hg:j,s_pzMd8jXgygs:D,s_vHoJHa0v6RA:V,s_xlmi1MJ7ASw:A},Symbol.toStringTag,{value:"Module"}));export{E as _hW,T as s_1l8M8jcJCwQ,S as s_2mjCc1TQ7Pc,J as s_77nV8dECIr8,M as s_GL0HN2ycmDI,R as s_KcZgjj9PU0g,z as s_MYp7kB1zFa0,Z as s_NaPG0P07hVI,C as s_XOaMywLY0wo,B as s_aL49DogTw1g,j as s_oGquGW0o8hg,D as s_pzMd8jXgygs,V as s_vHoJHa0v6RA,A as s_xlmi1MJ7ASw};