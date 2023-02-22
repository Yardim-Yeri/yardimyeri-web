import{r as u,R as f,m as Oe,D as ee,a as b,j as K}from"./index-fd49427c.js";import{o as E,a as we,e as be,V as R,y as T,q as le,u as O,c as _,L as M,p as Ae,h as te,s as ne,X as S,t as ie,v as Ee,S as P,N as Ne,l as U,T as Ie,w as ye,n as Be,j as me,F as je,I as B,m as He,i as ge,d as _e,k as We,b as Ve,r as Ye,K as J}from"./transition-e48ba38e.js";function $e(e,n){let t=u.useRef([]),o=E(e);u.useEffect(()=>{let r=[...t.current];for(let[a,l]of n.entries())if(t.current[a]!==l){let i=o(n,r);return t.current=n,i}},[o,...n])}function Ue(e,n,t){let o=we(n);u.useEffect(()=>{function r(a){o.current(a)}return window.addEventListener(e,r,t),()=>window.removeEventListener(e,r,t)},[e,t])}var I=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(I||{});function Xe(){let e=u.useRef(0);return Ue("keydown",n=>{n.key==="Tab"&&(e.current=n.shiftKey?1:0)},!0),e}function X(...e){return u.useMemo(()=>be(...e),[...e])}function ue(e,n,t,o){let r=we(t);u.useEffect(()=>{e=e??window;function a(l){r.current(l)}return e.addEventListener(n,a,o),()=>e.removeEventListener(n,a,o)},[e,n,o])}let qe="div";var Re=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Re||{});let N=Object.assign(R(function(e,n){let t=u.useRef(null),o=T(t,n),{initialFocus:r,containers:a,features:l=30,...i}=e;le()||(l=1);let d=X(t);ze({ownerDocument:d},Boolean(l&16));let c=Ge({ownerDocument:d,container:t,initialFocus:r},Boolean(l&2));Ke({ownerDocument:d,container:t,containers:a,previousActiveElement:c},Boolean(l&8));let s=Xe(),C=E(h=>{let v=t.current;v&&(y=>y())(()=>{O(s.current,{[I.Forwards]:()=>{_(v,M.First,{skipElements:[h.relatedTarget]})},[I.Backwards]:()=>{_(v,M.Last,{skipElements:[h.relatedTarget]})}})})}),A=Ae(),m=u.useRef(!1),q={ref:o,onKeyDown(h){h.key=="Tab"&&(m.current=!0,A.requestAnimationFrame(()=>{m.current=!1}))},onBlur(h){let v=new Set(a==null?void 0:a.current);v.add(t);let y=h.relatedTarget;y instanceof HTMLElement&&y.dataset.headlessuiFocusGuard!=="true"&&(Te(v,y)||(m.current?_(t.current,O(s.current,{[I.Forwards]:()=>M.Next,[I.Backwards]:()=>M.Previous})|M.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&P(h.target)))}};return f.createElement(f.Fragment,null,Boolean(l&4)&&f.createElement(te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:C,features:ne.Focusable}),S({ourProps:q,theirProps:i,defaultTag:qe,name:"FocusTrap"}),Boolean(l&4)&&f.createElement(te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:C,features:ne.Focusable}))}),{features:Re});function ze({ownerDocument:e},n){let t=u.useRef(null);ue(e==null?void 0:e.defaultView,"focusout",r=>{!n||t.current||(t.current=r.target)},!0),$e(()=>{n||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&P(t.current),t.current=null)},[n]);let o=u.useRef(!1);u.useEffect(()=>(o.current=!1,()=>{o.current=!0,ie(()=>{!o.current||(P(t.current),t.current=null)})}),[])}function Ge({ownerDocument:e,container:n,initialFocus:t},o){let r=u.useRef(null),a=Ee();return $e(()=>{if(!o)return;let l=n.current;!l||ie(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(t!=null&&t.current){if((t==null?void 0:t.current)===i){r.current=i;return}}else if(l.contains(i)){r.current=i;return}t!=null&&t.current?P(t.current):_(l,M.First)===Ne.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.current=e==null?void 0:e.activeElement})},[o]),r}function Ke({ownerDocument:e,container:n,containers:t,previousActiveElement:o},r){let a=Ee();ue(e==null?void 0:e.defaultView,"focus",l=>{if(!r||!a.current)return;let i=new Set(t==null?void 0:t.current);i.add(n);let d=o.current;if(!d)return;let c=l.target;c&&c instanceof HTMLElement?Te(i,c)?(o.current=c,P(c)):(l.preventDefault(),l.stopPropagation(),P(d)):P(o.current)},!0)}function Te(e,n){var t;for(let o of e)if((t=o.current)!=null&&t.contains(n))return!0;return!1}let k=new Set,$=new Map;function he(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function ve(e){let n=$.get(e);!n||(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert)}function Je(e,n=!0){U(()=>{if(!n||!e.current)return;let t=e.current,o=be(t);if(o){k.add(t);for(let r of $.keys())r.contains(t)&&(ve(r),$.delete(r));return o.querySelectorAll("body > *").forEach(r=>{if(r instanceof HTMLElement){for(let a of k)if(r.contains(a))return;k.size===1&&($.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),he(r))}}),()=>{if(k.delete(t),k.size>0)o.querySelectorAll("body > *").forEach(r=>{if(r instanceof HTMLElement&&!$.has(r)){for(let a of k)if(r.contains(a))return;$.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),he(r)}});else for(let r of $.keys())ve(r),$.delete(r)}}},[n])}let Se=u.createContext(!1);function Qe(){return u.useContext(Se)}function re(e){return f.createElement(Se.Provider,{value:e.force},e.children)}function Ze(e){let n=Qe(),t=u.useContext(xe),o=X(e),[r,a]=u.useState(()=>{if(!n&&t!==null||ye.isServer)return null;let l=o==null?void 0:o.getElementById("headlessui-portal-root");if(l)return l;if(o===null)return null;let i=o.createElement("div");return i.setAttribute("id","headlessui-portal-root"),o.body.appendChild(i)});return u.useEffect(()=>{r!==null&&(o!=null&&o.body.contains(r)||o==null||o.body.appendChild(r))},[r,o]),u.useEffect(()=>{n||t!==null&&a(t.current)},[t,a,n]),r}let et=u.Fragment,tt=R(function(e,n){let t=e,o=u.useRef(null),r=T(Ie(s=>{o.current=s}),n),a=X(o),l=Ze(o),[i]=u.useState(()=>{var s;return ye.isServer?null:(s=a==null?void 0:a.createElement("div"))!=null?s:null}),d=le(),c=u.useRef(!1);return U(()=>{if(c.current=!1,!(!l||!i))return l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i)),()=>{c.current=!0,ie(()=>{var s;!c.current||!l||!i||(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&((s=l.parentElement)==null||s.removeChild(l)))})}},[l,i]),d?!l||!i?null:Oe.createPortal(S({ourProps:{ref:r},theirProps:t,defaultTag:et,name:"Portal"}),i):null}),nt=u.Fragment,xe=u.createContext(null),rt=R(function(e,n){let{target:t,...o}=e,r={ref:T(n)};return f.createElement(xe.Provider,{value:t},S({ourProps:r,theirProps:o,defaultTag:nt,name:"Popover.Group"}))}),oe=Object.assign(tt,{Group:rt}),se=u.createContext(()=>{});se.displayName="StackContext";var ae=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ae||{});function ot(){return u.useContext(se)}function at({children:e,onUpdate:n,type:t,element:o,enabled:r}){let a=ot(),l=E((...i)=>{n==null||n(...i),a(...i)});return U(()=>{let i=r===void 0||r===!0;return i&&l(0,t,o),()=>{i&&l(1,t,o)}},[l,t,o,r]),f.createElement(se.Provider,{value:l},e)}function lt(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const it=typeof Object.is=="function"?Object.is:lt,{useState:ut,useEffect:st,useLayoutEffect:ct,useDebugValue:dt}=ee;function ft(e,n,t){const o=n(),[{inst:r},a]=ut({inst:{value:o,getSnapshot:n}});return ct(()=>{r.value=o,r.getSnapshot=n,Q(r)&&a({inst:r})},[e,o,n]),st(()=>(Q(r)&&a({inst:r}),e(()=>{Q(r)&&a({inst:r})})),[e]),dt(o),o}function Q(e){const n=e.getSnapshot,t=e.value;try{const o=n();return!it(t,o)}catch{return!0}}function pt(e,n,t){return n()}const mt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gt=!mt,ht=gt?pt:ft,vt="useSyncExternalStore"in ee?(e=>e.useSyncExternalStore)(ee):ht;function wt(e){return vt(e.subscribe,e.getSnapshot,e.getSnapshot)}function bt(e,n){let t=e(),o=new Set;return{getSnapshot(){return t},subscribe(r){return o.add(r),()=>o.delete(r)},dispatch(r,...a){let l=n[r].call(t,...a);l&&(t=l,o.forEach(i=>i()))}}}function Et(){let e;return{before({doc:n}){var t;let o=n.documentElement;e=((t=n.defaultView)!=null?t:window).innerWidth-o.clientWidth},after({doc:n,d:t}){let o=n.documentElement,r=o.clientWidth-o.offsetWidth,a=e-r;t.style(o,"paddingRight",`${a}px`)}}}function yt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function $t(){if(!yt())return{};let e;return{before(){e=window.pageYOffset},after({doc:n,d:t,meta:o}){function r(l){return o.containers.flatMap(i=>i()).some(i=>i.contains(l))}t.style(n.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;t.addEventListener(n,"click",l=>{if(l.target instanceof HTMLElement)try{let i=l.target.closest("a");if(!i)return;let{hash:d}=new URL(i.href),c=n.querySelector(d);c&&!r(c)&&(a=c)}catch{}},!0),t.addEventListener(n,"touchmove",l=>{l.target instanceof HTMLElement&&!r(l.target)&&l.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function Rt(){return{before({doc:e,d:n}){n.style(e.documentElement,"overflow","hidden")}}}function Tt(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let x=bt(()=>new Map,{PUSH(e,n){var t;let o=(t=this.get(e))!=null?t:{doc:e,count:0,d:Be(),meta:new Set};return o.count++,o.meta.add(n),this.set(e,o),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:Tt(t)},r=[$t(),Et(),Rt()];r.forEach(({before:a})=>a==null?void 0:a(o)),r.forEach(({after:a})=>a==null?void 0:a(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});x.subscribe(()=>{let e=x.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",r=t.count!==0;(r&&!o||!r&&o)&&x.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&x.dispatch("TEARDOWN",t)}});function St(e,n,t){let o=wt(x),r=e?o.get(e):void 0,a=r?r.count>0:!1;return U(()=>{if(!(!e||!n))return x.dispatch("PUSH",e,t),()=>x.dispatch("POP",e,t)},[n,e]),a}var xt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(xt||{}),Pt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Pt||{});let Ct={[0](e,n){return e.titleId===n.id?e:{...e,titleId:n.id}}},Y=u.createContext(null);Y.displayName="DialogContext";function j(e){let n=u.useContext(Y);if(n===null){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return n}function Ft(e,n,t=()=>[document.body]){St(e,n,o=>{var r;return{containers:[...(r=o.containers)!=null?r:[],t]}})}function Lt(e,n){return O(n.type,Ct,e,n)}let Dt="div",kt=me.RenderStrategy|me.Static,Mt=R(function(e,n){let t=B(),{id:o=`headlessui-dialog-${t}`,open:r,onClose:a,initialFocus:l,__demoMode:i=!1,...d}=e,[c,s]=u.useState(0),C=He();r===void 0&&C!==null&&(r=O(C,{[ge.Open]:!0,[ge.Closed]:!1}));let A=u.useRef(new Set),m=u.useRef(null),q=T(m,n),h=u.useRef(null),v=X(m),y=e.hasOwnProperty("open")||C!==null,ce=e.hasOwnProperty("onClose");if(!y&&!ce)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!y)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ce)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof r!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let w=r?0:1,[F,Pe]=u.useReducer(Lt,{titleId:null,descriptionId:null,panelRef:u.createRef()}),L=E(()=>a(!1)),de=E(p=>Pe({type:0,id:p})),z=le()?i?!1:w===0:!1,H=c>1,Ce=u.useContext(Y)!==null,Fe=H?"parent":"leaf";Je(m,H?z:!1);let fe=E(()=>{var p,D;return[...Array.from((p=v==null?void 0:v.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?p:[]).filter(g=>!(g===document.body||g===document.head||!(g instanceof HTMLElement)||g.contains(h.current)||F.panelRef.current&&g.contains(F.panelRef.current))),(D=F.panelRef.current)!=null?D:m.current]});_e(()=>fe(),L,z&&!H),ue(v==null?void 0:v.defaultView,"keydown",p=>{p.defaultPrevented||p.key===Ve.Escape&&w===0&&(H||(p.preventDefault(),p.stopPropagation(),L()))}),Ft(v,w===0&&!Ce,fe),u.useEffect(()=>{if(w!==0||!m.current)return;let p=new IntersectionObserver(D=>{for(let g of D)g.boundingClientRect.x===0&&g.boundingClientRect.y===0&&g.boundingClientRect.width===0&&g.boundingClientRect.height===0&&L()});return p.observe(m.current),()=>p.disconnect()},[w,m,L]);let[Le,De]=We(),ke=u.useMemo(()=>[{dialogState:w,close:L,setTitleId:de},F],[w,F,L,de]),pe=u.useMemo(()=>({open:w===0}),[w]),Me={ref:q,id:o,role:"dialog","aria-modal":w===0?!0:void 0,"aria-labelledby":F.titleId,"aria-describedby":Le};return f.createElement(at,{type:"Dialog",enabled:w===0,element:m,onUpdate:E((p,D,g)=>{D==="Dialog"&&O(p,{[ae.Add](){A.current.add(g),s(G=>G+1)},[ae.Remove](){A.current.add(g),s(G=>G-1)}})})},f.createElement(re,{force:!0},f.createElement(oe,null,f.createElement(Y.Provider,{value:ke},f.createElement(oe.Group,{target:m},f.createElement(re,{force:!1},f.createElement(De,{slot:pe,name:"Dialog.Description"},f.createElement(N,{initialFocus:l,containers:A,features:z?O(Fe,{parent:N.features.RestoreFocus,leaf:N.features.All&~N.features.FocusLock}):N.features.None},S({ourProps:Me,theirProps:d,slot:pe,defaultTag:Dt,features:kt,visible:w===0,name:"Dialog"})))))))),f.createElement(te,{features:ne.Hidden,ref:h}))}),Ot="div",At=R(function(e,n){let t=B(),{id:o=`headlessui-dialog-overlay-${t}`,...r}=e,[{dialogState:a,close:l}]=j("Dialog.Overlay"),i=T(n),d=E(s=>{if(s.target===s.currentTarget){if(Ye(s.currentTarget))return s.preventDefault();s.preventDefault(),s.stopPropagation(),l()}}),c=u.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:o,"aria-hidden":!0,onClick:d},theirProps:r,slot:c,defaultTag:Ot,name:"Dialog.Overlay"})}),Nt="div",It=R(function(e,n){let t=B(),{id:o=`headlessui-dialog-backdrop-${t}`,...r}=e,[{dialogState:a},l]=j("Dialog.Backdrop"),i=T(n);u.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let d=u.useMemo(()=>({open:a===0}),[a]);return f.createElement(re,{force:!0},f.createElement(oe,null,S({ourProps:{ref:i,id:o,"aria-hidden":!0},theirProps:r,slot:d,defaultTag:Nt,name:"Dialog.Backdrop"})))}),Bt="div",jt=R(function(e,n){let t=B(),{id:o=`headlessui-dialog-panel-${t}`,...r}=e,[{dialogState:a},l]=j("Dialog.Panel"),i=T(n,l.panelRef),d=u.useMemo(()=>({open:a===0}),[a]),c=E(s=>{s.stopPropagation()});return S({ourProps:{ref:i,id:o,onClick:c},theirProps:r,slot:d,defaultTag:Bt,name:"Dialog.Panel"})}),Ht="h2",_t=R(function(e,n){let t=B(),{id:o=`headlessui-dialog-title-${t}`,...r}=e,[{dialogState:a,setTitleId:l}]=j("Dialog.Title"),i=T(n);u.useEffect(()=>(l(o),()=>l(null)),[o,l]);let d=u.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:o},theirProps:r,slot:d,defaultTag:Ht,name:"Dialog.Title"})}),Z=Object.assign(Mt,{Backdrop:It,Panel:jt,Overlay:At,Title:_t,Description:je});const Jt=({label:e,type:n="default"})=>b("span",{className:`${(()=>{switch(n){case"success":return"bg-green-100 border-green-500 text-green-500";case"error":return"bg-red-100 border-red-500 text-red-500";case"warning":return"bg-yellow-100 border-yellow-500 text-yellow-500";case"info":return"bg-blue-100 border-blue-500 text-blue-500";default:return"bg-gray-100 border-gray-500 text-gray-500"}})()} border rounded-md py-1 px-3 text-sm select-none`,children:e}),W=u;function Wt({title:e,titleId:n,...t},o){return W.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":n},t),e?W.createElement("title",{id:n},e):null,W.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",clipRule:"evenodd"}))}const Vt=W.forwardRef(Wt);var Yt=Vt;const V=u;function Ut({title:e,titleId:n,...t},o){return V.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":n},t),e?V.createElement("title",{id:n},e):null,V.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))}const Xt=V.forwardRef(Ut);var qt=Xt,Qt=Yt,zt=qt;const Zt=({children:e,title:n,isOpen:t,setIsOpen:o})=>{const r=()=>{o(!1)};return b(J,{appear:!0,show:t,as:u.Fragment,children:K(Z,{as:"div",className:"relative z-10 w-1/3",onClose:r,children:[b(J.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:b("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),b("div",{className:"fixed inset-0 overflow-y-auto",children:b("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:b(J.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:K(Z.Panel,{className:"w-full md:w-2/3 lg:w-1/2 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[b(Z.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 mb-5",children:K("div",{className:"relative",children:[b("p",{className:"text-xl",children:n}),b("button",{type:"button",className:"absolute -top-4 -right-4",onClick:r,children:b(zt,{className:"h-6 w-6 text-black-500"})})]})}),b("div",{className:"mt-2",children:e})]})})})})]})})};export{Jt as B,Qt as C,Zt as M};