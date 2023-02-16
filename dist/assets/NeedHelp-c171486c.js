import{j as x,a as o,r as Z,B as ie,d as he,o as ve,C as be,L as ye,f as Ce,F as xe}from"./index-f32199b4.js";import{H as Pe}from"./Helmet-71debdfd.js";import{u as pe}from"./index-01cac2f5.js";import{M as ke,B as Ne}from"./index-05f1e812.js";import{I as Le,g as Oe}from"./Help-11411569.js";import{S as le,d as Re,c as we}from"./Needs-5f41ff0d.js";import{P as Ee}from"./index-814241df.js";import"./transition-8134bd7f.js";import"./index-b02c6ede.js";const oe=({text:m,count:E,color:A})=>x("div",{className:`flex justify-center flex-col items-center p-8 ${{green:"bg-green-600",yellow:"bg-yellow-500",blue:"bg-blue-500"}[A]} text-white rounded-lg sm:text-lg w-full`,children:[o("p",{className:"text-center",children:m}),o("p",{className:"text-3xl mt-4 font-semibold",children:E})]}),_e=m=>m==null?void 0:m.map(E=>({id:E.id,name:E.label,key:E.id})),ce={ihtiyac_turu:null,sehir:null,help_status:null,kac_kisilik:null},Se=({filterData:m,setFilterData:E,handleFilterReset:A,handleFilterSubmit:B})=>{const[K,f]=Z.useState(!1),H={id:0,name:"Seçiniz..."},s=[{id:0,name:"Yardım Bekliyor",key:0},{id:0,name:"Yardım Geliyor",key:0},{id:0,name:"Yardım Ulaştı",key:0}],{data:p,isLoading:C}=pe("needs",Re),{data:a,isLoading:D}=pe("provinces",we),S=(y,F)=>{E(k=>({...k,[F]:y}))},h=y=>{const{value:F,name:k}=y.target;E(P=>({...P,[k]:F}))};return x("div",{children:[o(ie,{size:"small",label:"Filtre",type:"default",onClick:()=>{f(!0)}}),!C&&!D&&K&&x(ke,{title:"Filtre",isOpen:K,setIsOpen:f,children:[x("div",{className:"flex flex-col gap-2 ",children:[o(le,{name:"İhtiyaç Türü",items:_e(p),value:m.ihtiyac_turu||H,onChange:y=>{S(y,"ihtiyac_turu")},buttonColorType:"white"}),o(le,{name:"Şehir",items:a.data,value:m.sehir||H,onChange:y=>{S(y,"sehir")},buttonColorType:"white"}),o(le,{name:"Yardım Durumu",items:s,value:m.help_status||H,onChange:y=>{S(y,"help_status")},buttonColorType:"white"}),x("div",{className:"flex flex-col",children:[o("p",{children:"Kişinin Sayısı"}),o(Le,{name:"kac_kisilik",type:"number",placeholder:"Kişinin Sayısı",onChange:h})]})]}),x("div",{className:"flex justify-end gap-2 mt-5",children:[o(ie,{size:"small",label:"Reset",type:"default",onClick:()=>A()}),o(ie,{size:"small",label:"Filtrele",type:"default",onClick:()=>{B(m),f(!1)}})]})]})]})},je=Z.memo(Se);var ue={},Te={get exports(){return ue},set exports(m){ue=m}};(function(m,E){(function(A,B){m.exports=B(Z)})(he,A=>(()=>{var B={703:(s,p,C)=>{var a=C(414);function D(){}function S(){}S.resetWarningCache=D,s.exports=function(){function h(F,k,P,J,ne,$){if($!==a){var Q=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw Q.name="Invariant Violation",Q}}function L(){return h}h.isRequired=h;var y={array:h,bigint:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:L,element:h,elementType:h,instanceOf:L,node:h,objectOf:L,oneOf:L,oneOfType:L,shape:L,exact:L,checkPropTypes:S,resetWarningCache:D};return y.PropTypes=y,y}},697:(s,p,C)=>{s.exports=C(703)()},414:s=>{s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:s=>{s.exports=A}},K={};function f(s){var p=K[s];if(p!==void 0)return p.exports;var C=K[s]={exports:{}};return B[s](C,C.exports,f),C.exports}f.n=s=>{var p=s&&s.__esModule?()=>s.default:()=>s;return f.d(p,{a:p}),p},f.d=(s,p)=>{for(var C in p)f.o(p,C)&&!f.o(s,C)&&Object.defineProperty(s,C,{enumerable:!0,get:p[C]})},f.o=(s,p)=>Object.prototype.hasOwnProperty.call(s,p),f.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var H={};return(()=>{f.r(H),f.d(H,{default:()=>de});var s=f(98),p=f.n(s),C=f(697),a=f.n(C);function D(){return D=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(n[u]=c[u])}return n},D.apply(this,arguments)}var S=function(n){var i=n.pageClassName,c=n.pageLinkClassName,u=n.page,M=n.selected,ee=n.activeClassName,j=n.activeLinkClassName,t=n.getEventListener,e=n.pageSelectedHandler,g=n.href,r=n.extraAriaContext,l=n.pageLabelBuilder,d=n.rel,b=n.ariaLabel||"Page "+u+(r?" "+r:""),R=null;return M&&(R="page",b=n.ariaLabel||"Page "+u+" is your current page",i=i!==void 0?i+" "+ee:ee,c!==void 0?j!==void 0&&(c=c+" "+j):c=j),p().createElement("li",{className:i},p().createElement("a",D({rel:d,role:g?void 0:"button",className:c,href:g,tabIndex:M?"-1":"0","aria-label":b,"aria-current":R,onKeyPress:e},t(e)),l(u)))};S.propTypes={pageSelectedHandler:a().func.isRequired,selected:a().bool.isRequired,pageClassName:a().string,pageLinkClassName:a().string,activeClassName:a().string,activeLinkClassName:a().string,extraAriaContext:a().string,href:a().string,ariaLabel:a().string,page:a().number.isRequired,getEventListener:a().func.isRequired,pageLabelBuilder:a().func.isRequired,rel:a().string};const h=S;function L(){return L=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(n[u]=c[u])}return n},L.apply(this,arguments)}var y=function(n){var i=n.breakLabel,c=n.breakClassName,u=n.breakLinkClassName,M=n.breakHandler,ee=n.getEventListener,j=c||"break";return p().createElement("li",{className:j},p().createElement("a",L({className:u,role:"button",tabIndex:"0",onKeyPress:M},ee(M)),i))};y.propTypes={breakLabel:a().oneOfType([a().string,a().node]),breakClassName:a().string,breakLinkClassName:a().string,breakHandler:a().func.isRequired,getEventListener:a().func.isRequired};const F=y;function k(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n??i}function P(n){return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},P(n)}function J(){return J=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(n[u]=c[u])}return n},J.apply(this,arguments)}function ne(n,i){for(var c=0;c<i.length;c++){var u=i[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}function $(n,i){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},$(n,i)}function Q(n,i){if(i&&(P(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(n)}function O(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function X(n){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},X(n)}function N(n,i,c){return i in n?Object.defineProperty(n,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[i]=c,n}var se=function(n){(function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$(t,e)})(j,n);var i,c,u,M,ee=(u=j,M=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,e=X(u);if(M){var g=X(this).constructor;t=Reflect.construct(e,arguments,g)}else t=e.apply(this,arguments);return Q(this,t)});function j(t){var e,g;return function(r,l){if(!(r instanceof l))throw new TypeError("Cannot call a class as a function")}(this,j),N(O(e=ee.call(this,t)),"handlePreviousPage",function(r){var l=e.state.selected;e.handleClick(r,null,l>0?l-1:void 0,{isPrevious:!0})}),N(O(e),"handleNextPage",function(r){var l=e.state.selected,d=e.props.pageCount;e.handleClick(r,null,l<d-1?l+1:void 0,{isNext:!0})}),N(O(e),"handlePageSelected",function(r,l){if(e.state.selected===r)return e.callActiveCallback(r),void e.handleClick(l,null,void 0,{isActive:!0});e.handleClick(l,null,r)}),N(O(e),"handlePageChange",function(r){e.state.selected!==r&&(e.setState({selected:r}),e.callCallback(r))}),N(O(e),"getEventListener",function(r){return N({},e.props.eventListener,r)}),N(O(e),"handleClick",function(r,l,d){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},R=b.isPrevious,I=R!==void 0&&R,ae=b.isNext,te=ae!==void 0&&ae,_=b.isBreak,G=_!==void 0&&_,Y=b.isActive,U=Y!==void 0&&Y;r.preventDefault?r.preventDefault():r.returnValue=!1;var w=e.state.selected,q=e.props.onClick,T=d;if(q){var v=q({index:l,selected:w,nextSelectedPage:d,event:r,isPrevious:I,isNext:te,isBreak:G,isActive:U});if(v===!1)return;Number.isInteger(v)&&(T=v)}T!==void 0&&e.handlePageChange(T)}),N(O(e),"handleBreakClick",function(r,l){var d=e.state.selected;e.handleClick(l,r,d<r?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),N(O(e),"callCallback",function(r){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:r})}),N(O(e),"callActiveCallback",function(r){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:r})}),N(O(e),"getElementPageRel",function(r){var l=e.state.selected,d=e.props,b=d.nextPageRel,R=d.prevPageRel,I=d.selectedPageRel;return l-1===r?R:l===r?I:l+1===r?b:void 0}),N(O(e),"pagination",function(){var r=[],l=e.props,d=l.pageRangeDisplayed,b=l.pageCount,R=l.marginPagesDisplayed,I=l.breakLabel,ae=l.breakClassName,te=l.breakLinkClassName,_=e.state.selected;if(b<=d)for(var G=0;G<b;G++)r.push(e.getPageElement(G));else{var Y=d/2,U=d-Y;_>b-d/2?Y=d-(U=b-_):_<d/2&&(U=d-(Y=_));var w,q,T=function(z){return e.getPageElement(z)},v=[];for(w=0;w<b;w++){var W=w+1;W<=R||W>b-R||w>=_-Y&&w<=_+(_===0&&d>1?U-1:U)?v.push({type:"page",index:w,display:T(w)}):I&&v.length>0&&v[v.length-1].display!==q&&(d>0||R>0)&&(q=p().createElement(F,{key:w,breakLabel:I,breakClassName:ae,breakLinkClassName:te,breakHandler:e.handleBreakClick.bind(null,w),getEventListener:e.getEventListener}),v.push({type:"break",index:w,display:q}))}v.forEach(function(z,V){var re=z;z.type==="break"&&v[V-1]&&v[V-1].type==="page"&&v[V+1]&&v[V+1].type==="page"&&v[V+1].index-v[V-1].index<=2&&(re={type:"page",index:z.index,display:T(z.index)}),r.push(re.display)})}return r}),t.initialPage!==void 0&&t.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(t.initialPage,") and forcePage (").concat(t.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),g=t.initialPage?t.initialPage:t.forcePage?t.forcePage:0,e.state={selected:g},e}return i=j,(c=[{key:"componentDidMount",value:function(){var t=this.props,e=t.initialPage,g=t.disableInitialCallback,r=t.extraAriaContext,l=t.pageCount,d=t.forcePage;e===void 0||g||this.callCallback(e),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(l)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(l,"). Did you forget a Math.ceil()?")),e!==void 0&&e>l-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(l-1,").")),d!==void 0&&d>l-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(d," > ").concat(l-1,")."))}},{key:"componentDidUpdate",value:function(t){this.props.forcePage!==void 0&&this.props.forcePage!==t.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(t.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var t=this.state.selected,e=this.props,g=e.pageCount,r=t+e.pageRangeDisplayed;return r>=g?g-1:r}},{key:"getBackwardJump",value:function(){var t=this.state.selected-this.props.pageRangeDisplayed;return t<0?0:t}},{key:"getElementHref",value:function(t){var e=this.props,g=e.hrefBuilder,r=e.pageCount,l=e.hrefAllControls;if(g)return l||t>=0&&t<r?g(t+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(t){var e=t===this.state.selected;if(this.props.ariaLabelBuilder&&t>=0&&t<this.props.pageCount){var g=this.props.ariaLabelBuilder(t+1,e);return this.props.extraAriaContext&&!e&&(g=g+" "+this.props.extraAriaContext),g}}},{key:"getPageElement",value:function(t){var e=this.state.selected,g=this.props,r=g.pageClassName,l=g.pageLinkClassName,d=g.activeClassName,b=g.activeLinkClassName,R=g.extraAriaContext,I=g.pageLabelBuilder;return p().createElement(h,{key:t,pageSelectedHandler:this.handlePageSelected.bind(null,t),selected:e===t,rel:this.getElementPageRel(t),pageClassName:r,pageLinkClassName:l,activeClassName:d,activeLinkClassName:b,extraAriaContext:R,href:this.getElementHref(t),ariaLabel:this.ariaLabelBuilder(t),page:t+1,pageLabelBuilder:I,getEventListener:this.getEventListener})}},{key:"render",value:function(){var t=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&t!==void 0)return t&&t(this.props);var e=this.props,g=e.disabledClassName,r=e.disabledLinkClassName,l=e.pageCount,d=e.className,b=e.containerClassName,R=e.previousLabel,I=e.previousClassName,ae=e.previousLinkClassName,te=e.previousAriaLabel,_=e.prevRel,G=e.nextLabel,Y=e.nextClassName,U=e.nextLinkClassName,w=e.nextAriaLabel,q=e.nextRel,T=this.state.selected,v=T===0,W=T===l-1,z="".concat(k(I)).concat(v?" ".concat(k(g)):""),V="".concat(k(Y)).concat(W?" ".concat(k(g)):""),re="".concat(k(ae)).concat(v?" ".concat(k(r)):""),ge="".concat(k(U)).concat(W?" ".concat(k(r)):""),me=v?"true":"false",fe=W?"true":"false";return p().createElement("ul",{className:d||b,role:"navigation","aria-label":"Pagination"},p().createElement("li",{className:z},p().createElement("a",J({className:re,href:this.getElementHref(T-1),tabIndex:v?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":me,"aria-label":te,rel:_},this.getEventListener(this.handlePreviousPage)),R)),this.pagination(),p().createElement("li",{className:V},p().createElement("a",J({className:ge,href:this.getElementHref(T+1),tabIndex:W?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":fe,"aria-label":w,rel:q},this.getEventListener(this.handleNextPage)),G)))}}])&&ne(i.prototype,c),Object.defineProperty(i,"prototype",{writable:!1}),j}(s.Component);N(se,"propTypes",{pageCount:a().number.isRequired,pageRangeDisplayed:a().number,marginPagesDisplayed:a().number,previousLabel:a().node,previousAriaLabel:a().string,prevPageRel:a().string,prevRel:a().string,nextLabel:a().node,nextAriaLabel:a().string,nextPageRel:a().string,nextRel:a().string,breakLabel:a().oneOfType([a().string,a().node]),hrefBuilder:a().func,hrefAllControls:a().bool,onPageChange:a().func,onPageActive:a().func,onClick:a().func,initialPage:a().number,forcePage:a().number,disableInitialCallback:a().bool,containerClassName:a().string,className:a().string,pageClassName:a().string,pageLinkClassName:a().string,pageLabelBuilder:a().func,activeClassName:a().string,activeLinkClassName:a().string,previousClassName:a().string,nextClassName:a().string,previousLinkClassName:a().string,nextLinkClassName:a().string,disabledClassName:a().string,disabledLinkClassName:a().string,breakClassName:a().string,breakLinkClassName:a().string,extraAriaContext:a().string,ariaLabelBuilder:a().func,eventListener:a().string,renderOnZeroPageCount:a().func,selectedPageRel:a().string}),N(se,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(n){return n},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const de=se})(),H})())})(Te);const Ae=ve(ue),Be=({page:m,pageCount:E=0,pageRangeDisplayed:A=1,handlePageClick:B})=>o("div",{className:"flex justify-center items-center h-12 mt-2",children:o(Ae,{containerClassName:"pagination",activeClassName:"paginationActive",breakLabel:"...",nextLabel:">",onPageChange:f=>{B(f.selected+1)},pageRangeDisplayed:A,pageCount:E,previousLabel:"<",forcePage:m-1})}),De=Z.memo(Be),Ve=()=>{var L,y,F,k;const[m,E]=Z.useState(ce),[A,B]=Z.useState(ce),K=be(),[f,H]=Z.useState(1),{data:s,isLoading:p}=pe(["help",f,(L=m.ihtiyac_turu)==null?void 0:L.name,(y=m.sehir)==null?void 0:y.name,(F=m.help_status)==null?void 0:F.name,m==null?void 0:m.kac_kisilik],Oe),C=P=>{H(P)},a=P=>{switch(P){case"Yardım Bekliyor":return"error";case"Yardım Geliyor":return"info";case"Yardım Ulaştı":return"success";default:return"default"}},D=P=>{K(`/yardimda-bulunabilirim/${P}`)},S=P=>{E(P)},h=()=>{E(ce)};return x(ye,{children:[o(Pe,{children:o("title",{children:"Yardımyeri.com - Yardımda bulunabilirim"})}),p&&o(Ce,{}),o(Ee,{title:"YARDIMA İHTİYACI OLANLAR"}),!p&&x(xe,{children:[x("div",{className:"flex flex-col md:flex-row gap-4",children:[o(oe,{text:"Yardım Ulaştırılan Kişi Sayısı",count:s==null?void 0:s.success_help_count,color:"green"}),o(oe,{text:"Yardım Bekleyen Kişi Sayısı",count:s==null?void 0:s.pending_help_count,color:"yellow"}),o(oe,{text:"Yardım Ulaştırılacak Kişi Sayısı",count:s==null?void 0:s.process_help_count,color:"blue"})]}),o("div",{className:"flex justify-end mt-5",children:o(je,{filterData:A,setFilterData:B,handleFilterSubmit:S,handleFilterReset:h})}),o("div",{className:"mt-6",children:s==null?void 0:s.data.map(P=>{const{id:J,name:ne,address:$,how_many_person:Q,status:O,need:X,created_at:N}=P;return x("div",{className:"flex flex-col md:flex-row border shadow-md p-4 rounded-md",children:[x("div",{className:"lg:grid grid-cols-3 xl:grid-cols-[300px_minmax(500px,_1fr)_150px] flex-auto",children:[x("div",{className:"m-2",children:[o("p",{className:"font-bold",children:"İsim"}),o("p",{children:ne})]}),x("div",{className:"m-2",children:[o("p",{className:"font-bold",children:"Şehir"}),o("p",{className:"overflow-hidden whitespace-nowrap text-ellipsis max-w-xl",children:$})]}),x("div",{className:"m-2",children:[o("p",{className:"font-bold",children:"Talep Tarihi"}),o("p",{children:N})]}),x("div",{className:"m-2",children:[o("p",{className:"font-bold",children:"Kaç Kişilik"}),o("p",{children:Q})]}),x("div",{className:"m-2",children:[o("p",{className:"font-bold",children:"İhtiyaç Türü"}),o("p",{children:X.type})]}),x("div",{className:"m-2",children:[o("p",{className:"font-bold",children:"Sana Uzaklığı"}),o("p",{children:"-"})," "]})]}),x("div",{className:"flex gap-2 justify-end sm:justify-center items-center",children:[o(Ne,{label:O,type:a(O)}),o(ie,{size:"small",label:"Detaylar",onClick:()=>D(J)})]})]},P.id)})}),o(De,{pageCount:(k=s==null?void 0:s.meta)==null?void 0:k.last_page,handlePageClick:C,page:f})]})]})};export{Ve as default};
