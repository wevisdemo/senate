import{j as e}from"./q-28228fa4.js";import{L as s,t as o}from"./q-81e16c3e.js";import"./q-fc58cff2.js";import"./q-cfef4036.js";import"./q-5757861a.js";const p=({id:a,title:t,date:i,type:r,vote:n})=>e.jsxs(s,{className:"relative flex",children:[e.jsx(s.Button,{className:"outline-0 ring-0 ring-black transition-all hover:scale-110 hover:bg-black hover:ring-2","aria-label":t,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 52 69",width:"52",height:"69",children:[e.jsx("path",{fill:"#000",d:"M.5.5h51v67.667H.5z"}),e.jsx("path",{fill:"#000",d:"M1 1h50v66.667H1z"}),e.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M30.647 33.5c-.987 0-1.787-.8-1.787-1.785 0-.983.8-1.782 1.787-1.782.987 0 1.787.8 1.787 1.782 0 .985-.8 1.785-1.787 1.785zm-9.502 0c-.987 0-1.787-.8-1.787-1.785 0-.983.8-1.782 1.787-1.782.986 0 1.786.8 1.786 1.782 0 .985-.8 1.785-1.787 1.785zm20.68-1.339c-1.098-8.74-7.813-15.494-15.93-15.494-8.115 0-14.83 6.755-15.928 15.494H7.896v5.014h2.07c1.099 8.74 7.814 15.492 15.93 15.492s14.83-6.753 15.929-15.492h2.07v-5.014h-2.07z",clipRule:"evenodd"}),e.jsx("path",{stroke:"#000",d:"M.5.5h51v67.667H.5z"})]})}),e.jsx(o,{className:"fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-all lg:absolute lg:top-0 lg:translate-x-0 lg:translate-y-0",enter:"lg:left-0 lg:origin-top-left",enterFrom:"opacity-0",enterTo:"lg:translate-y-[76.67px]",entered:"lg:translate-y-[76.67px] lg:left-0",leave:"lg:left-0 lg:origin-top-left",leaveTo:"opacity-0",children:e.jsxs(s.Panel,{className:"w-[300px] border bg-white lg:w-[465px]",children:[e.jsx("div",{className:"h-10 bg-black"}),e.jsxs("div",{className:"px-15 py-10",children:[e.jsxs("div",{className:"mb-10 flex items-center font-bold",children:[e.jsx("span",{className:"mr-auto",children:i}),e.jsx("span",{className:"flex font-bold",children:r}),e.jsx(s.Button,{className:"ml-10",type:"button","aria-label":"ปิด",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 30",width:30,height:30,children:[e.jsx("path",{fill:"#000",fillRule:"evenodd",d:"M22.227 7.773a.938.938 0 010 1.328L9.1 22.226a.939.939 0 01-1.327-1.328L20.899 7.773a.936.936 0 011.328 0z",clipRule:"evenodd"}),e.jsx("path",{fill:"#000",fillRule:"evenodd",d:"M7.774 7.773a.938.938 0 000 1.328l13.125 13.125a.939.939 0 001.328-1.328L9.1 7.773a.937.937 0 00-1.327 0z",clipRule:"evenodd"})]})})]}),e.jsx("hr",{className:"mb-10 border-dashed"}),e.jsx("p",{className:"wv-h9 mb-10 font-kondolar",children:t}),e.jsx("div",{className:"font-bold",children:"ผลการลงคะแนนเสียงบุคคลที่ถูกเสนอชื่อให้ดำรงตำแหน่ง"}),n.map(l=>e.jsxs("div",{className:"senate-custombar-grid mb-[2px] lg:mb-0",children:[e.jsxs("div",{className:"senate-custombar-grid-name flex items-center gap-5 font-bold",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16",width:"16",height:"16",children:[e.jsx("rect",{width:"15",height:"15",x:".5",y:".5",fill:"#000",rx:"7.5"}),l.vote[0]>125?e.jsx("path",{fill:"#fff",d:"M11.61 5.189a.417.417 0 01.035.588l-4.445 5a.417.417 0 01-.623 0l-2.222-2.5a.417.417 0 01.623-.554l1.91 2.15 4.134-4.65a.417.417 0 01.588-.034z"}):e.jsx("path",{fill:"#fff",d:"M5.206 5.205a.417.417 0 01.589 0L8 7.411l2.206-2.206a.417.417 0 01.589.59L8.589 8l2.206 2.205a.417.417 0 11-.59.59L8 8.588l-2.205 2.205a.417.417 0 11-.59-.589L7.412 8 5.206 5.795a.417.417 0 010-.59z"}),e.jsx("rect",{width:"15",height:"15",x:".5",y:".5",stroke:"#000",rx:"7.5"})]}),l.name]}),e.jsxs("div",{className:"senate-custombar-grid-bar mt-[2px] flex w-full justify-self-end lg:mt-0 lg:w-[177px]",style:{"--max":l.vote[0]+l.vote[1]+l.vote[2]},children:[e.jsx("div",{className:"chart-series bg-vote-เห็น",style:{"--val":l.vote[0]}}),e.jsx("div",{className:"chart-series bg-vote-ไม่เห็น",style:{"--val":l.vote[1]}}),e.jsx("div",{className:"chart-series bg-vote-งด",style:{"--val":l.vote[2]}})]}),e.jsxs("div",{className:"senate-custombar-grid-count mb-[2px] flex items-center justify-end gap-4 self-end text-[10px] lg:mb-0",children:[e.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-เห็น"}),e.jsx("span",{children:l.vote[0]}),e.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-ไม่เห็น"}),e.jsx("span",{children:l.vote[1]}),e.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-งด"}),e.jsx("span",{children:l.vote[2]})]})]})),e.jsxs("p",{className:"wv-b6 my-10",children:[e.jsx("span",{className:"font-bold",children:"หมายเหตุ:"})," ","ผู้ที่ดำรงตำแหน่งต้องได้รับความเห็นชอบด้วยคะแนนเสียงกึ่งหนึ่งจาก ส.ว. คือ 125 คะแนนขึ้นไป"]}),e.jsx("hr",{className:"mb-10 border-dashed"}),e.jsx("div",{className:"text-center",children:e.jsxs("a",{className:"wv-b3 inline-flex items-center gap-[4px] font-bold text-black",href:"https://theyworkforus.wevis.info/votelog/"+a,target:"_blank",rel:"nofollow noopener noreferrer",children:[e.jsx("span",{children:"ดูรายละเอียด"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 21",width:"20",height:"21",children:e.jsx("path",{fill:"#000",d:"M8.334 6.333l5 4.167-5 4.167V6.333z"})})]})})]})]})})]});export{p as s_MQSalbytl2I};
