import{r as u,j as f}from"./index-DYvT089J.js";import{A as te}from"./AnimatedPage-08KYlS9u.js";let se={data:""},re=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||se,ae=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,oe=/\/\*[^]*?\*\/|  +/g,J=/\n+/g,j=(e,t)=>{let s="",o="",a="";for(let r in e){let n=e[r];r[0]=="@"?r[1]=="i"?s=r+" "+n+";":o+=r[1]=="f"?j(n,r):r+"{"+j(n,r[1]=="k"?"":t)+"}":typeof n=="object"?o+=j(n,t?t.replace(/([^,])+/g,i=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=j.p?j.p(r,n):r+":"+n+";")}return s+(t&&a?t+"{"+a+"}":a)+o},w={},H=e=>{if(typeof e=="object"){let t="";for(let s in e)t+=s+H(e[s]);return t}return e},ie=(e,t,s,o,a)=>{let r=H(e),n=w[r]||(w[r]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(r));if(!w[n]){let l=r!==e?e:(d=>{let p,b,h=[{}];for(;p=ae.exec(d.replace(oe,""));)p[4]?h.shift():p[3]?(b=p[3].replace(J," ").trim(),h.unshift(h[0][b]=h[0][b]||{})):h[0][p[1]]=p[2].replace(J," ").trim();return h[0]})(e);w[n]=j(a?{["@keyframes "+n]:l}:l,s?"":"."+n)}let i=s&&w.g?w.g:null;return s&&(w.g=w[n]),((l,d,p,b)=>{b?d.data=d.data.replace(b,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(w[n],t,o,i),n},ne=(e,t,s)=>e.reduce((o,a,r)=>{let n=t[r];if(n&&n.call){let i=n(s),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":j(i,""):i===!1?"":i}return o+a+(n??"")},"");function F(e){let t=this||{},s=e.call?e(t.p):e;return ie(s.unshift?s.raw?ne(s,[].slice.call(arguments,1),t.p):s.reduce((o,a)=>Object.assign(o,a&&a.call?a(t.p):a),{}):s,re(t.target),t.g,t.o,t.k)}let L,R,T;F.bind({g:1});let S=F.bind({k:1});function le(e,t,s,o){j.p=t,L=e,R=s,T=o}function E(e,t){let s=this||{};return function(){let o=arguments;function a(r,n){let i=Object.assign({},r),l=i.className||a.className;s.p=Object.assign({theme:R&&R()},i),s.o=/ *go\d+/.test(l),i.className=F.apply(s,o)+(l?" "+l:"");let d=e;return e[0]&&(d=i.as||e,delete i.as),T&&d[0]&&T(i),L(d,i)}return a}}var ce=e=>typeof e=="function",P=(e,t)=>ce(e)?e(t):e,de=(()=>{let e=0;return()=>(++e).toString()})(),q=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ue=20,I=new Map,me=1e3,B=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),N({type:4,toastId:e})},me);I.set(e,t)},fe=e=>{let t=I.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ue)};case 1:return t.toast.id&&fe(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:s}=t;return e.toasts.find(r=>r.id===s.id)?z(e,{type:1,toast:s}):z(e,{type:0,toast:s});case 3:let{toastId:o}=t;return o?B(o):e.toasts.forEach(r=>{B(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===o||o===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+a}))}}},D=[],A={toasts:[],pausedAt:void 0},N=e=>{A=z(A,e),D.forEach(t=>{t(A)})},pe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ge=(e={})=>{let[t,s]=u.useState(A);u.useEffect(()=>(D.push(s),()=>{let a=D.indexOf(s);a>-1&&D.splice(a,1)}),[t]);let o=t.toasts.map(a=>{var r,n;return{...e,...e[a.type],...a,duration:a.duration||((r=e[a.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||pe[a.type],style:{...e.style,...(n=e[a.type])==null?void 0:n.style,...a.style}}});return{...t,toasts:o}},be=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(s==null?void 0:s.id)||de()}),O=e=>(t,s)=>{let o=be(t,e,s);return N({type:2,toast:o}),o.id},g=(e,t)=>O("blank")(e,t);g.error=O("error");g.success=O("success");g.loading=O("loading");g.custom=O("custom");g.dismiss=e=>{N({type:3,toastId:e})};g.remove=e=>N({type:4,toastId:e});g.promise=(e,t,s)=>{let o=g.loading(t.loading,{...s,...s==null?void 0:s.loading});return e.then(a=>(g.success(P(t.success,a),{id:o,...s,...s==null?void 0:s.success}),a)).catch(a=>{g.error(P(t.error,a),{id:o,...s,...s==null?void 0:s.error})}),e};var he=(e,t)=>{N({type:1,toast:{id:e,height:t}})},ye=()=>{N({type:5,time:Date.now()})},xe=e=>{let{toasts:t,pausedAt:s}=ge(e);u.useEffect(()=>{if(s)return;let r=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&g.dismiss(i.id);return}return setTimeout(()=>g.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,s]);let o=u.useCallback(()=>{s&&N({type:6,time:Date.now()})},[s]),a=u.useCallback((r,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},p=t.filter(y=>(y.position||d)===(r.position||d)&&y.height),b=p.findIndex(y=>y.id===r.id),h=p.filter((y,C)=>C<b&&y.visible).length;return p.filter(y=>y.visible).slice(...i?[h+1]:[0,h]).reduce((y,C)=>y+(C.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:he,startPause:ye,endPause:o,calculateOffset:a}}},ve=S`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,we=S`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Se=S`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,je=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ve} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${we} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ee=S`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ne=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ee} 1s linear infinite;
`,$e=S`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ce=S`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Oe=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$e} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ce} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ke=E("div")`
  position: absolute;
`,Ie=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,De=S`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ae=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${De} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Pe=({toast:e})=>{let{icon:t,type:s,iconTheme:o}=e;return t!==void 0?typeof t=="string"?u.createElement(Ae,null,t):t:s==="blank"?null:u.createElement(Ie,null,u.createElement(Ne,{...o}),s!=="loading"&&u.createElement(ke,null,s==="error"?u.createElement(je,{...o}):u.createElement(Oe,{...o})))},Fe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Me=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Re="0%{opacity:0;} 100%{opacity:1;}",Te="0%{opacity:1;} 100%{opacity:0;}",ze=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,_e=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Je=(e,t)=>{let s=e.includes("top")?1:-1,[o,a]=q()?[Re,Te]:[Fe(s),Me(s)];return{animation:t?`${S(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${S(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Be=u.memo(({toast:e,position:t,style:s,children:o})=>{let a=e.height?Je(e.position||t||"top-center",e.visible):{opacity:0},r=u.createElement(Pe,{toast:e}),n=u.createElement(_e,{...e.ariaProps},P(e.message,e));return u.createElement(ze,{className:e.className,style:{...a,...s,...e.style}},typeof o=="function"?o({icon:r,message:n}):u.createElement(u.Fragment,null,r,n))});le(u.createElement);var He=({id:e,className:t,style:s,onHeightUpdate:o,children:a})=>{let r=u.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;o(e,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return u.createElement("div",{ref:r,className:t,style:s},a)},Le=(e,t)=>{let s=e.includes("top"),o=s?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...o,...a}},qe=F`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,k=16,Ze=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:o,children:a,containerStyle:r,containerClassName:n})=>{let{toasts:i,handlers:l}=xe(s);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:k,left:k,right:k,bottom:k,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let p=d.position||t,b=l.calculateOffset(d,{reverseOrder:e,gutter:o,defaultPosition:t}),h=Le(p,b);return u.createElement(He,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?qe:"",style:h},d.type==="custom"?P(d.message,d):a?a(d):u.createElement(Be,{toast:d,position:p}))}))};const Ue=()=>{const[e,t]=u.useState("terminal"),[s,o]=u.useState(!1),[a,r]=u.useState(0),n=u.useRef(),i=u.useRef(),l=u.useRef(),d=24*60*60*1e3;u.useEffect(()=>{p();const c=setInterval(p,1e3);return()=>clearInterval(c)},[]);const p=()=>{const c=localStorage.getItem("lastSubmissionTime");if(c){const m=Date.now()-parseInt(c);m<d?r(Math.ceil((d-m)/1e3)):(r(0),C())}},b=c=>{const m=Math.floor(c/3600),x=Math.floor(c%3600/60),v=c%60;return`${m}h ${x}m ${v}s`},h=c=>{const m=localStorage.getItem("lastSubmissionTime");if(m&&Date.now()-parseInt(m)<d)return!1;const v=JSON.parse(localStorage.getItem("submissions")||"[]").filter($=>$.email===c);if(v.length>0){const $=Math.max(...v.map(M=>M.timestamp));if(Date.now()-$<d)return!1}return!0},y=c=>{const m=JSON.parse(localStorage.getItem("submissions")||"[]");m.push({email:c,timestamp:Date.now()}),localStorage.setItem("submissions",JSON.stringify(m)),localStorage.setItem("lastSubmissionTime",Date.now().toString())},C=()=>{const m=JSON.parse(localStorage.getItem("submissions")||"[]").filter(x=>Date.now()-x.timestamp<d);localStorage.setItem("submissions",JSON.stringify(m))},Z=c=>"bg-gradient-to-r from-[#00ff00] to-white hover:from-[#00ff00] hover:to-[#ccffcc] text-black px-4 py-2 font-bold rounded-md shadow-[0_0_15px_rgba(0,255,0,0.6)] hover:shadow-[0_0_20px_rgba(0,255,0,1)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",U=c=>"bg-[#00ff00] rounded-lg xs:w-[250px] lg:w-96 shadow-[0_0_15px_rgba(0,255,0,0.8)] h-1 m-5",V=c=>`max-w-md mx-auto relative overflow-hidden z-10 p-8 rounded-lg shadow-md 
      before:w-24 before:h-24 before:absolute before:bg-${c}-600 before:rounded-full 
      before:-z-10 before:blur-2xl 
      after:w-32 after:h-32 after:absolute after:bg-gray-700 
      after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12`,W=c=>/^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/.test(c.trim())?c.trim().length<2?"Name must be at least 2 characters long":null:"Name is required",Y=c=>!c||c.trim().length===0?"Email is required":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)?null:"Please enter a valid email address",G=c=>!c||c.trim().length===0?"Message is required":c.trim().length<10?"Message must be at least 10 characters long":null,Q=()=>{n.current.style.border="1px solid #4B5563",i.current.style.border="1px solid #4B5563",l.current.style.border="1px solid #4B5563"},_=(c,m)=>(m!=null&&m.current&&(m.current.style.border="2px solid #EF4444"),g.error(c,{duration:2e3,position:"top-center"}),!1),X=c=>{const m=[{field:"name",value:c.get("name"),validate:W,ref:n},{field:"email",value:c.get("email"),validate:Y,ref:i},{field:"message",value:c.get("message"),validate:G,ref:l}];for(const x of m){const v=x.validate(x.value);if(v)return _(v,x.ref)}return!0},K=async c=>{if(c.preventDefault(),s)return;Q();const m=new FormData(c.target),x=m.get("email");if(!X(m))return;if(!h(x))return _(`Please wait ${b(a)} before submitting again.`);o(!0);const v=g.loading("Sending message...");try{m.append("access_key","b2e5a187-0411-4358-b07c-83e3e43add10");const $=Object.fromEntries(m),M=JSON.stringify($);if((await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:M}).then(ee=>ee.json())).success)y(x),c.target.reset(),g.success("Thank you for your message!",{id:v,duration:2e3});else throw new Error("Submission failed")}catch{g.error("Something went wrong. Please try again.",{id:v,duration:2e3})}finally{o(!1)}};return f.jsxs(f.Fragment,{children:[f.jsx(Ze,{}),f.jsxs("div",{className:"flex flex-col items-center justify-center",children:[f.jsx("h2",{className:"text-2xl font-bold text-white",children:"Contact Me"}),f.jsx("div",{className:U()})]}),f.jsxs("div",{className:V(e),children:[a>0&&f.jsxs("div",{className:"mb-4 p-3 bg-yellow-500 bg-opacity-10 border border-yellow-500 rounded-md text-yellow-500",children:["Please wait ",b(a)," before submitting another message."]}),f.jsxs("form",{onSubmit:K,noValidate:!0,children:[f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-sm font-medium text-gray-300",htmlFor:"name",children:"Full Name"}),f.jsx("input",{className:"mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white transition-colors",type:"text",name:"name",id:"name",ref:n,disabled:s||a>0})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-sm font-medium text-gray-300",htmlFor:"email",children:"Email Address"}),f.jsx("input",{className:"mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white transition-colors",name:"email",id:"email",type:"email",ref:i,disabled:s||a>0})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("label",{className:"block text-sm font-medium text-gray-300",htmlFor:"message",children:"Message"}),f.jsx("textarea",{className:"mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white transition-colors",rows:"3",name:"message",id:"message",ref:l,disabled:s||a>0})]}),f.jsx("div",{className:"flex justify-end",children:f.jsx("button",{className:Z(),type:"submit",disabled:s||a>0,children:s?"Sending...":"Submit"})})]})]})]})},Ge=()=>(u.useEffect(()=>{window.scrollTo(0,0)},[]),f.jsx("div",{className:"p-5   ",children:f.jsx(te,{children:f.jsx(Ue,{})})}));export{Ge as default};
