import{b as f,h as b}from"./q-1d1dd21c.js";const u=(e={})=>{const[i,o,m,s]=f();let t,a;return e instanceof SubmitEvent?(a=e.target,t=new FormData(a),(e.submitter instanceof HTMLInputElement||e.submitter instanceof HTMLButtonElement)&&e.submitter.name&&e.submitter.name&&t.append(e.submitter.name,e.submitter.value)):t=e,new Promise(n=>{t instanceof FormData&&(s.formData=t),s.isRunning=!0,m.isNavigating=!0,i.value={data:t,id:o,resolve:b(n)}}).then(({result:n,status:r})=>{if(s.isRunning=!1,s.status=r,s.value=n,a){a.getAttribute("data-spa-reset")==="true"&&a.reset();const l={status:r,value:n};a.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:l}))}return{status:r,value:n}})};export{u as s_A5bZC7WO00A};
