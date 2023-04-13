import{j as a}from"./q-0e577d9f.js";import{L as e,t as f}from"./q-2186c42c.js";import"./q-c3c1cf3b.js";import"./q-99ccc07b.js";import"./q-7348f20e.js";const u=({pass:l,date:x,type:c,title:m,vote:s,id:t})=>{var n,i,r,d;const p=(((n=s==null?void 0:s.mp)==null?void 0:n[5])??0)+(((i=s==null?void 0:s.senate)==null?void 0:i[5])??0),h=(((r=s==null?void 0:s.mp)==null?void 0:r[0])??0)+(((d=s==null?void 0:s.senate)==null?void 0:d[0])??0),j=Math.round(h/(p||1)*1e4)/100;return a.jsxs(e,{className:"relative flex",children:[a.jsx(e.Button,{className:"outline-0 ring-0 ring-black transition-all hover:scale-110 hover:bg-black hover:ring-2",children:l?a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 52 69",width:"52",height:"69",children:[a.jsx("path",{fill:"#60C1AF",d:"M1 1h50v66.667H1z"}),a.jsx("path",{fill:"#000",d:"M41.44 23.086c.689.612.75 1.665.139 2.353l-17.778 20a1.667 1.667 0 01-2.491 0l-8.889-10a1.667 1.667 0 012.491-2.214l7.644 8.598 16.532-18.598a1.667 1.667 0 012.353-.139z"}),a.jsx("path",{stroke:"#000",d:"M.5.5h51v67.667H.5z"})]}):a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 52 69",width:"52",height:"69",children:[a.jsx("path",{fill:"#F92D46",d:"M51 1H1v66.667h50V1z"}),a.jsx("path",{fill:"#000",d:"M15.822 23.821c.65-.65 1.706-.65 2.357 0L27 32.643l8.822-8.822a1.667 1.667 0 112.357 2.357L29.357 35l8.822 8.821a1.667 1.667 0 01-2.357 2.357L27 37.357l-8.821 8.821a1.667 1.667 0 11-2.357-2.357L24.643 35l-8.821-8.822a1.667 1.667 0 010-2.357z"}),a.jsx("path",{stroke:"#000",d:"M.5.5h51v67.667H.5z"})]})}),a.jsx(f,{enter:"transition-all fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute z-10 md:top-0 md:left-0 md:translate-x-0 md:translate-y-0 md:origin-top-left",enterFrom:"scale-0 opacity-0",enterTo:"scale-100 opacity-100 md:translate-y-[76.67px]",entered:"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute z-10 md:top-0 md:left-0 md:translate-x-0 md:translate-y-100",leave:"transition-all fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute z-10 md:top-10 md:left-10 md:translate-x-0 md:translate-y-0 md:origin-top-left",leaveFrom:"scale-100 opacity-100",leaveTo:"scale-0 opacity-0",children:a.jsxs(e.Panel,{className:"w-[300px] border bg-white md:w-[465px]",children:[a.jsx("div",{className:"h-10 "+(l?"bg-vote-เห็น":"bg-vote-ไม่เห็น")}),a.jsxs("div",{className:"px-15 py-10",children:[a.jsxs("div",{className:"mb-10 flex items-center font-bold",children:[a.jsx("span",{className:"mr-auto",children:x}),a.jsx("span",{className:"flex font-bold",children:c}),a.jsx(e.Button,{className:"ml-10",type:"button","aria-label":"ปิด",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 30",width:30,height:30,children:[a.jsx("path",{fill:"#000",fillRule:"evenodd",d:"M22.227 7.773a.938.938 0 010 1.328L9.1 22.226a.939.939 0 01-1.327-1.328L20.899 7.773a.936.936 0 011.328 0z",clipRule:"evenodd"}),a.jsx("path",{fill:"#000",fillRule:"evenodd",d:"M7.774 7.773a.938.938 0 000 1.328l13.125 13.125a.939.939 0 001.328-1.328L9.1 7.773a.937.937 0 00-1.327 0z",clipRule:"evenodd"})]})})]}),a.jsx("hr",{className:"mb-10 border-dashed"}),a.jsx("p",{className:"wv-h9 mb-10 font-kondolar",children:m}),a.jsxs("div",{className:"mb-10 flex items-center justify-between font-kondolar",children:[a.jsxs("p",{className:"wv-h9 mr-auto font-bold",children:[j,"% เห็นด้วย"]}),a.jsx("div",{className:"-top-[2px] mr-4 h-[13px] w-[13px] rounded-full "+(l?"bg-vote-เห็น":"bg-vote-ไม่เห็น")}),a.jsxs("span",{className:"wv-h10",children:[!l&&"ไม่","ผ่าน"]})]}),(s==null?void 0:s.senate)&&(s==null?void 0:s.mp)&&a.jsxs("div",{className:"flex items-center justify-end gap-4 text-[10px]",children:[a.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-เห็น"}),a.jsx("span",{children:s.senate[0]}),a.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-ไม่เห็น"}),a.jsx("span",{children:s.senate[1]}),a.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-งด"}),a.jsx("span",{children:s.senate[2]}),a.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-ไม่ลง"}),a.jsx("span",{children:s.senate[3]}),a.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-ไม่เข้า"}),a.jsx("span",{children:s.senate[4]})]}),((s==null?void 0:s.mp)||(s==null?void 0:s.senate))&&a.jsxs("div",{className:"-mt-[2px] flex",children:[a.jsx("div",{className:"font-bold",children:"ผลการลงคะแนนเสียง"}),a.jsxs("div",{className:"ml-auto",children:[(s==null?void 0:s.senate)&&a.jsxs("div",{className:"flex items-center gap-20",children:[a.jsx("span",{className:"mr-auto font-bold",children:"ส.ว."}),a.jsxs("div",{className:"flex w-[177px]",style:{"--max":s.senate[5]},children:[a.jsx("div",{className:"chart-series bg-vote-เห็น",style:{"--val":s.senate[0]}}),a.jsx("div",{className:"chart-series bg-vote-ไม่เห็น",style:{"--val":s.senate[1]}}),a.jsx("div",{className:"chart-series bg-vote-งด",style:{"--val":s.senate[2]}}),a.jsx("div",{className:"chart-series bg-vote-ไม่ลง",style:{"--val":s.senate[3]}}),a.jsx("div",{className:"chart-series bg-vote-ไม่เข้า",style:{"--val":s.senate[4]}})]})]}),(s==null?void 0:s.mp)&&a.jsxs("div",{className:"flex items-center gap-20",children:[a.jsx("span",{className:"mr-auto font-bold",children:"ส.ส."}),a.jsxs("div",{className:"flex w-[177px]",style:{"--max":s.mp[5]},children:[a.jsx("div",{className:"chart-series bg-vote-เห็น",style:{"--val":s.mp[0]}}),a.jsx("div",{className:"chart-series bg-vote-ไม่เห็น",style:{"--val":s.mp[1]}}),a.jsx("div",{className:"chart-series bg-vote-งด",style:{"--val":s.mp[2]}}),a.jsx("div",{className:"chart-series bg-vote-ไม่ลง",style:{"--val":s.mp[3]}}),a.jsx("div",{className:"chart-series bg-vote-ไม่เข้า",style:{"--val":s.mp[4]}})]})]})]})]}),((s==null?void 0:s.mp)||(s==null?void 0:s.senate))&&a.jsxs("div",{className:"mb-10 flex items-center justify-end gap-4 text-[10px]",children:[a.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-เห็น"}),a.jsx("span",{children:s!=null&&s.mp?s.mp[0]:(s==null?void 0:s.senate)&&s.senate[0]}),a.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-ไม่เห็น"}),a.jsx("span",{children:s!=null&&s.mp?s.mp[1]:(s==null?void 0:s.senate)&&s.senate[1]}),a.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-งด"}),a.jsx("span",{children:s!=null&&s.mp?s.mp[2]:(s==null?void 0:s.senate)&&s.senate[2]}),a.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-ไม่ลง"}),a.jsx("span",{children:s!=null&&s.mp?s.mp[3]:(s==null?void 0:s.senate)&&s.senate[3]}),a.jsx("div",{className:"-top-[1px] h-5 w-5 bg-vote-ไม่เข้า"}),a.jsx("span",{children:s!=null&&s.mp?s.mp[4]:(s==null?void 0:s.senate)&&s.senate[4]})]}),a.jsx("hr",{className:"mb-10 border-dashed"}),a.jsx("div",{className:"text-center",children:a.jsxs("a",{className:"wv-b3 inline-flex items-center gap-[4px] font-bold text-black",href:"https://theyworkforus.wevis.info/votelog/"+t,target:"_blank",rel:"nofollow noopener noreferrer",children:[a.jsx("span",{children:"ดูรายละเอียด"}),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 21",width:"20",height:"21",children:a.jsx("path",{fill:"#000",d:"M8.334 6.333l5 4.167-5 4.167V6.333z"})})]})})]})]})})]})};export{u as s_m8QFl70ACf8};
