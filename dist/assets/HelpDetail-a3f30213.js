import{r as C,z as I,j as r,a as e,F as Y,A as b}from"./index-b86a88a1.js";import{a as j,b as A,C as n,I as g,r as x,c as D}from"./constants-798cd9ab.js";import{u as H}from"./index-50737aef.js";import{B as m}from"./transition-2bd5e4a4.js";import{L as M}from"./index-aa3494e9.js";import{H as P,M as E}from"./HelpDetailContent-82b38c90.js";import{P as F}from"./index-b7c173b5.js";import{a as L,b as O}from"./help.service-1313a341.js";const J=()=>{var d,u,c;const[z,s]=C.useState(!1),{id:o}=I(),{control:l,formState:{errors:i},handleSubmit:y,reset:N}=j({mode:"onChange"}),B=A(a=>L(o,a),{onError:a=>{var p,h,f;b.error(`(${(p=a.response)==null?void 0:p.status}) ${(f=(h=a.response)==null?void 0:h.data)==null?void 0:f.message}`)},onSuccess:a=>{s(!1),a&&a.success&&b.success(a.message),N()}}),{data:t,isLoading:k}=H(["helpById",o],O),v=()=>{s(!0)},S=a=>{B.mutate(a)};return r(M,{children:[e(F,{title:"Yardım Talebi Detayı"}),!k&&r(Y,{children:[e(P,{data:t}),(t==null?void 0:t.status)==="Yardım Bekliyor"&&e("div",{className:"flex justify-center mt-6",children:e(m,{label:"Yardım Et",onClick:v})})]}),e(E,{title:"Yardım Başlatılacak!",isOpen:z,setIsOpen:s,children:r("div",{children:[e("p",{children:"Aşağıda bulunan bilgileri doldurduktan sonra yardımı başlatabilirsiniz."}),e("p",{className:"text-red-500",children:"Yardımı başlattığınız takdirde yardım talep edenin iletişim bilgilerine ulaşabilirsiniz."}),r("form",{className:"mt-5",onSubmit:y(S),children:[r("div",{className:"flex flex-col gap-6",children:[r("div",{children:[e(n,{name:"name",control:l,rules:{required:"Bu alan zorunludur."},render:({field:a})=>e(g,{...a,placeholder:"Adınız"})}),e("span",{className:"text-red-600 text-sm",children:(d=i.name)==null?void 0:d.message})]}),r("div",{children:[e(n,{name:"email",control:l,rules:{pattern:{value:x.email,message:"Doğru formatta bir mail giriniz."}},render:({field:a})=>e(g,{...a,placeholder:"E-Posta Adresiniz"})}),e("span",{className:"text-red-600 text-sm",children:(u=i.email)==null?void 0:u.message}),e("p",{className:"text-gray-500 text-sm",children:"Bu alan zorunlu değildir. Ancak e-posta adresinizi girdiğiniz takdirde yeni oluşan talepleri mail olarak sizlere bildiriyoruz."})]}),r("div",{children:[e(n,{name:"phone_number",control:l,rules:{required:"Bu alan zorunludur.",pattern:{value:x.phoneNumber,message:"Doğru formatta bir telefon numarası giriniz."}},render:({field:a})=>e(D,{...a})}),e("span",{className:"text-red-600 text-sm",children:(c=i.phone_number)==null?void 0:c.message}),e("p",{className:"text-gray-500 text-sm",children:"Lütfen numaranızı başında sıfır olmadan girin."})]})]}),r("div",{className:"mt-4 flex justify-end gap-3",children:[e(m,{label:"Vazgeç",type:"error",size:"small",onClick:()=>{s(!1)}}),e(m,{htmlType:"submit",label:"Yardımı Başlat",type:"success",size:"small"})]})]})]})})]})};export{J as default};