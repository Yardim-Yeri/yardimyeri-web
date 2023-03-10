import{i as A}from"./index-d8562b19.js";import{r as u,R as K,a as T,j as X,F as Oe}from"./index-fd49427c.js";import{C as Se,a as Re}from"./index-36c4b79c.js";import{a as re,l as C,o as v,V as M,y as F,u as N,d as Le,f as Ie,g as Te,p as V,C as we,i as Y,h as Pe,s as ke,P as De,X as Q,I as G,j as ee,m as Ce,e as Ne,b as m,r as Ee,n as J,A as $e,K as Ae}from"./transition-e48ba38e.js";function oe(e,t){let[n,o]=u.useState(e),i=re(e);return C(()=>o(i.current),[i,o,...t]),n}function te(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Me(e,t){let[n,o]=u.useState(()=>te(e));return C(()=>{o(te(e))},[e.type,e.as]),C(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")},[n,t]),n}function Fe(e){throw new Error("Unexpected object: "+e)}var S=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(S||{});function Qe(e,t){let n=t.resolveItems();if(n.length<=0)return null;let o=t.resolveActiveIndex(),i=o??-1,s=(()=>{switch(e.focus){case 0:return n.findIndex(r=>!t.resolveDisabled(r));case 1:{let r=n.slice().reverse().findIndex((a,p,f)=>i!==-1&&f.length-p-1>=i?!1:!t.resolveDisabled(a));return r===-1?r:n.length-1-r}case 2:return n.findIndex((r,a)=>a<=i?!1:!t.resolveDisabled(r));case 3:{let r=n.slice().reverse().findIndex(a=>!t.resolveDisabled(a));return r===-1?r:n.length-1-r}case 4:return n.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:Fe(e)}})();return s===-1?o:s}function ie(e={},t=null,n=[]){for(let[o,i]of Object.entries(e))se(n,ae(t,o),i);return n}function ae(e,t){return e?e+"["+t+"]":t}function se(e,t,n){if(Array.isArray(n))for(let[o,i]of n.entries())se(e,ae(t,o.toString()),i);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):ie(n,t,e)}function lt(e){var t;let n=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(n){for(let o of n.elements)if(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image"){o.click();return}}}function Ue(e,t,n){let[o,i]=u.useState(n),s=e!==void 0,r=u.useRef(s),a=u.useRef(!1),p=u.useRef(!1);return s&&!r.current&&!a.current?(a.current=!0,r.current=s,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!s&&r.current&&!p.current&&(p.current=!0,r.current=s,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[s?e:o,v(f=>(s||i(f),t==null?void 0:t(f)))]}function ne(e){return[e.screenX,e.screenY]}function je(){let e=u.useRef([-1,-1]);return{wasMoved(t){let n=ne(t);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(t){e.current=ne(t)}}}var Be=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Be||{}),ze=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ze||{}),Ke=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ke||{}),Ve=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Ve||{});function q(e,t=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,o=$e(t(e.options.slice()),s=>s.dataRef.current.domRef.current),i=n?o.indexOf(n):null;return i===-1&&(i=null),{options:o,activeOptionIndex:i}}let Ge={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,o=e.options.findIndex(i=>n(i.dataRef.current.value));return o!==-1&&(t=o),{...e,listboxState:0,activeOptionIndex:t}},[2](e,t){var n;if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=q(e),i=Qe(t,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...o,searchQuery:"",activeOptionIndex:i,activationTrigger:(n=t.trigger)!=null?n:1}},[3]:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=e.searchQuery!==""?0:1,o=e.searchQuery+t.value.toLowerCase(),i=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(r=>{var a;return!r.dataRef.current.disabled&&((a=r.dataRef.current.textValue)==null?void 0:a.startsWith(o))}),s=i?e.options.indexOf(i):-1;return s===-1||s===e.activeOptionIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeOptionIndex:s,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},o=q(e,i=>[...i,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(n)),{...e,...o}},[6]:(e,t)=>{let n=q(e,o=>{let i=o.findIndex(s=>s.id===t.id);return i!==-1&&o.splice(i,1),o});return{...e,...n,activationTrigger:1}},[7]:(e,t)=>({...e,labelId:t.id})},W=u.createContext(null);W.displayName="ListboxActionsContext";function U(e){let t=u.useContext(W);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return t}let Z=u.createContext(null);Z.displayName="ListboxDataContext";function j(e){let t=u.useContext(Z);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return t}function He(e,t){return N(t.type,Ge,e,t)}let Xe=u.Fragment,qe=M(function(e,t){let{value:n,defaultValue:o,name:i,onChange:s,by:r=(c,b)=>c===b,disabled:a=!1,horizontal:p=!1,multiple:f=!1,...R}=e;const L=p?"horizontal":"vertical";let k=F(t),[y=f?[]:void 0,w]=Ue(n,s,o),[P,d]=u.useReducer(He,{dataRef:u.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),l=u.useRef({static:!1,hold:!1}),x=u.useRef(null),D=u.useRef(null),H=u.useRef(null),h=v(typeof r=="string"?(c,b)=>{let O=r;return(c==null?void 0:c[O])===(b==null?void 0:b[O])}:r),I=u.useCallback(c=>N(g.mode,{[1]:()=>y.some(b=>h(b,c)),[0]:()=>h(y,c)}),[y]),g=u.useMemo(()=>({...P,value:y,disabled:a,mode:f?1:0,orientation:L,compare:h,isSelected:I,optionsPropsRef:l,labelRef:x,buttonRef:D,optionsRef:H}),[y,a,f,P]);C(()=>{P.dataRef.current=g},[g]),Le([g.buttonRef,g.optionsRef],(c,b)=>{var O;d({type:1}),Ie(b,Te.Loose)||(c.preventDefault(),(O=g.buttonRef.current)==null||O.focus())},g.listboxState===0);let le=u.useMemo(()=>({open:g.listboxState===0,disabled:a,value:y}),[g,a,y]),ue=v(c=>{let b=g.options.find(O=>O.id===c);!b||E(b.dataRef.current.value)}),ce=v(()=>{if(g.activeOptionIndex!==null){let{dataRef:c,id:b}=g.options[g.activeOptionIndex];E(c.current.value),d({type:2,focus:S.Specific,id:b})}}),de=v(()=>d({type:0})),pe=v(()=>d({type:1})),fe=v((c,b,O)=>c===S.Specific?d({type:2,focus:S.Specific,id:b,trigger:O}):d({type:2,focus:c,trigger:O})),be=v((c,b)=>(d({type:5,id:c,dataRef:b}),()=>d({type:6,id:c}))),ve=v(c=>(d({type:7,id:c}),()=>d({type:7,id:null}))),E=v(c=>N(g.mode,{[0](){return w==null?void 0:w(c)},[1](){let b=g.value.slice(),O=b.findIndex(z=>h(z,c));return O===-1?b.push(c):b.splice(O,1),w==null?void 0:w(b)}})),xe=v(c=>d({type:3,value:c})),ge=v(()=>d({type:4})),he=u.useMemo(()=>({onChange:E,registerOption:be,registerLabel:ve,goToOption:fe,closeListbox:pe,openListbox:de,selectActiveOption:ce,selectOption:ue,search:xe,clearSearch:ge}),[]),me={ref:k},B=u.useRef(null),ye=V();return u.useEffect(()=>{!B.current||o!==void 0&&ye.addEventListener(B.current,"reset",()=>{E(o)})},[B,E]),K.createElement(W.Provider,{value:he},K.createElement(Z.Provider,{value:g},K.createElement(we,{value:N(g.listboxState,{[0]:Y.Open,[1]:Y.Closed})},i!=null&&y!=null&&ie({[i]:y}).map(([c,b],O)=>K.createElement(Pe,{features:ke.Hidden,ref:O===0?z=>{var _;B.current=(_=z==null?void 0:z.closest("form"))!=null?_:null}:void 0,...De({key:c,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:c,value:b})})),Q({ourProps:me,theirProps:R,slot:le,defaultTag:Xe,name:"Listbox"}))))}),Ye="button",Je=M(function(e,t){var n;let o=G(),{id:i=`headlessui-listbox-button-${o}`,...s}=e,r=j("Listbox.Button"),a=U("Listbox.Button"),p=F(r.buttonRef,t),f=V(),R=v(d=>{switch(d.key){case m.Space:case m.Enter:case m.ArrowDown:d.preventDefault(),a.openListbox(),f.nextFrame(()=>{r.value||a.goToOption(S.First)});break;case m.ArrowUp:d.preventDefault(),a.openListbox(),f.nextFrame(()=>{r.value||a.goToOption(S.Last)});break}}),L=v(d=>{switch(d.key){case m.Space:d.preventDefault();break}}),k=v(d=>{if(Ee(d.currentTarget))return d.preventDefault();r.listboxState===0?(a.closeListbox(),f.nextFrame(()=>{var l;return(l=r.buttonRef.current)==null?void 0:l.focus({preventScroll:!0})})):(d.preventDefault(),a.openListbox())}),y=oe(()=>{if(r.labelId)return[r.labelId,i].join(" ")},[r.labelId,i]),w=u.useMemo(()=>({open:r.listboxState===0,disabled:r.disabled,value:r.value}),[r]),P={ref:p,id:i,type:Me(e,r.buttonRef),"aria-haspopup":"listbox","aria-controls":(n=r.optionsRef.current)==null?void 0:n.id,"aria-expanded":r.disabled?void 0:r.listboxState===0,"aria-labelledby":y,disabled:r.disabled,onKeyDown:R,onKeyUp:L,onClick:k};return Q({ourProps:P,theirProps:s,slot:w,defaultTag:Ye,name:"Listbox.Button"})}),We="label",Ze=M(function(e,t){let n=G(),{id:o=`headlessui-listbox-label-${n}`,...i}=e,s=j("Listbox.Label"),r=U("Listbox.Label"),a=F(s.labelRef,t);C(()=>r.registerLabel(o),[o]);let p=v(()=>{var R;return(R=s.buttonRef.current)==null?void 0:R.focus({preventScroll:!0})}),f=u.useMemo(()=>({open:s.listboxState===0,disabled:s.disabled}),[s]);return Q({ourProps:{ref:a,id:o,onClick:p},theirProps:i,slot:f,defaultTag:We,name:"Listbox.Label"})}),_e="ul",et=ee.RenderStrategy|ee.Static,tt=M(function(e,t){var n;let o=G(),{id:i=`headlessui-listbox-options-${o}`,...s}=e,r=j("Listbox.Options"),a=U("Listbox.Options"),p=F(r.optionsRef,t),f=V(),R=V(),L=Ce(),k=(()=>L!==null?L===Y.Open:r.listboxState===0)();u.useEffect(()=>{var l;let x=r.optionsRef.current;!x||r.listboxState===0&&x!==((l=Ne(x))==null?void 0:l.activeElement)&&x.focus({preventScroll:!0})},[r.listboxState,r.optionsRef]);let y=v(l=>{switch(R.dispose(),l.key){case m.Space:if(r.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),a.search(l.key);case m.Enter:if(l.preventDefault(),l.stopPropagation(),r.activeOptionIndex!==null){let{dataRef:x}=r.options[r.activeOptionIndex];a.onChange(x.current.value)}r.mode===0&&(a.closeListbox(),J().nextFrame(()=>{var x;return(x=r.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})}));break;case N(r.orientation,{vertical:m.ArrowDown,horizontal:m.ArrowRight}):return l.preventDefault(),l.stopPropagation(),a.goToOption(S.Next);case N(r.orientation,{vertical:m.ArrowUp,horizontal:m.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),a.goToOption(S.Previous);case m.Home:case m.PageUp:return l.preventDefault(),l.stopPropagation(),a.goToOption(S.First);case m.End:case m.PageDown:return l.preventDefault(),l.stopPropagation(),a.goToOption(S.Last);case m.Escape:return l.preventDefault(),l.stopPropagation(),a.closeListbox(),f.nextFrame(()=>{var x;return(x=r.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})});case m.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(a.search(l.key),R.setTimeout(()=>a.clearSearch(),350));break}}),w=oe(()=>{var l,x,D;return(D=(l=r.labelRef.current)==null?void 0:l.id)!=null?D:(x=r.buttonRef.current)==null?void 0:x.id},[r.labelRef.current,r.buttonRef.current]),P=u.useMemo(()=>({open:r.listboxState===0}),[r]),d={"aria-activedescendant":r.activeOptionIndex===null||(n=r.options[r.activeOptionIndex])==null?void 0:n.id,"aria-multiselectable":r.mode===1?!0:void 0,"aria-labelledby":w,"aria-orientation":r.orientation,id:i,onKeyDown:y,role:"listbox",tabIndex:0,ref:p};return Q({ourProps:d,theirProps:s,slot:P,defaultTag:_e,features:et,visible:k,name:"Listbox.Options"})}),nt="li",rt=M(function(e,t){let n=G(),{id:o=`headlessui-listbox-option-${n}`,disabled:i=!1,value:s,...r}=e,a=j("Listbox.Option"),p=U("Listbox.Option"),f=a.activeOptionIndex!==null?a.options[a.activeOptionIndex].id===o:!1,R=a.isSelected(s),L=u.useRef(null),k=re({disabled:i,value:s,domRef:L,get textValue(){var h,I;return(I=(h=L.current)==null?void 0:h.textContent)==null?void 0:I.toLowerCase()}}),y=F(t,L);C(()=>{if(a.listboxState!==0||!f||a.activationTrigger===0)return;let h=J();return h.requestAnimationFrame(()=>{var I,g;(g=(I=L.current)==null?void 0:I.scrollIntoView)==null||g.call(I,{block:"nearest"})}),h.dispose},[L,f,a.listboxState,a.activationTrigger,a.activeOptionIndex]),C(()=>p.registerOption(o,k),[k,o]);let w=v(h=>{if(i)return h.preventDefault();p.onChange(s),a.mode===0&&(p.closeListbox(),J().nextFrame(()=>{var I;return(I=a.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})}))}),P=v(()=>{if(i)return p.goToOption(S.Nothing);p.goToOption(S.Specific,o)}),d=je(),l=v(h=>d.update(h)),x=v(h=>{!d.wasMoved(h)||i||f||p.goToOption(S.Specific,o,0)}),D=v(h=>{!d.wasMoved(h)||i||!f||p.goToOption(S.Nothing)}),H=u.useMemo(()=>({active:f,selected:R,disabled:i}),[f,R,i]);return Q({ourProps:{id:o,ref:y,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":R,disabled:void 0,onClick:w,onFocus:P,onPointerEnter:l,onMouseEnter:l,onPointerMove:x,onMouseMove:x,onPointerLeave:D,onMouseLeave:D},theirProps:r,slot:H,defaultTag:nt,name:"Listbox.Option"})}),$=Object.assign(qe,{Button:Je,Label:Ze,Options:tt,Option:rt});const ut=async()=>(await A.get("/provinces")).data.result,ct=async({queryKey:e})=>(await A.get(`/districts/${e[1]}`)).data.result,dt=async({queryKey:e})=>(await A.get(`/neighborhoods/${e[1]}`)).data.result,pt=async({queryKey:e})=>(await A.get(`/streets/${e[1]}`)).data.result,ft=({name:e,items:t=[],disabled:n,value:o,onChange:i,buttonColorType:s="black"})=>{const r=({active:p})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${p?"bg-black text-white":"text-gray-800"}`,a=s==="black"?" bg-black text-white":" bg-white text-black border-black border rounded-md";return T($,{value:o,onChange:i,children:X("div",{className:`${n&&"pointer-events-none opacity-60"} relative`,children:[T($.Label,{children:e}),X($.Button,{className:`relative w-full cursor-pointer rounded-md p-4 pr-10 text-left sm:text-sm ${a} `,children:[T("span",{className:"block truncate",children:o==null?void 0:o.name}),T("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:T(Se,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),T(Ae,{as:u.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:T($.Options,{className:"absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10",children:t.map(p=>T($.Option,{className:r,value:p,children:({selected:f})=>X(Oe,{children:[T("span",{className:`block truncate ${f?"font-medium":"font-normal"}`,id:"sdsdsds",children:p==null?void 0:p.name}),f?T("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500",children:T(Re,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},p.name))})})]})})},bt=async()=>(await A.get("/needs")).data.result;export{ft as S,Ue as T,dt as a,pt as b,ut as c,bt as d,ie as e,ct as g,lt as p};
