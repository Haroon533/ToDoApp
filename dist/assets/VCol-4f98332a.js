import{p as b,m as y,a_ as N,A as g,a$ as P,ab as F,U as $,a as L,aO as R,b0 as i,b1 as S,x as p,C as O,b2 as j}from"./index-4613d788.js";import"./VSpacer-13cc0e16.js";const w=b({...y(),...N()},"VForm"),D=g()({name:"VForm",props:w(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,s){let{slots:t,emit:r}=s;const a=P(e),l=F();function f(o){o.preventDefault(),a.reset()}function c(o){const n=o,u=a.validate();n.then=u.then.bind(u),n.catch=u.catch.bind(u),n.finally=u.finally.bind(u),r("submit",n),n.defaultPrevented||u.then(C=>{var m;let{valid:V}=C;V&&((m=l.value)==null||m.submit())}),n.preventDefault()}return $(()=>{var o;return L("form",{ref:l,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:f,onSubmit:c},[(o=t.default)==null?void 0:o.call(t,a)])}),R(a,l)}}),h=(()=>i.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),k=(()=>i.reduce((e,s)=>{const t="offset"+S(s);return e[t]={type:[String,Number],default:null},e},{}))(),v=(()=>i.reduce((e,s)=>{const t="order"+S(s);return e[t]={type:[String,Number],default:null},e},{}))(),d={col:Object.keys(h),offset:Object.keys(k),order:Object.keys(v)};function A(e,s,t){let r=e;if(!(t==null||t===!1)){if(s){const a=s.replace(e,"");r+=`-${a}`}return e==="col"&&(r="v-"+r),e==="col"&&(t===""||t===!0)||(r+=`-${t}`),r.toLowerCase()}}const E=["auto","start","end","center","baseline","stretch"],_=b({cols:{type:[Boolean,String,Number],default:!1},...h,offset:{type:[String,Number],default:null},...k,order:{type:[String,Number],default:null},...v,alignSelf:{type:String,default:null,validator:e=>E.includes(e)},...y(),...p()},"VCol"),K=g()({name:"VCol",props:_(),setup(e,s){let{slots:t}=s;const r=O(()=>{const a=[];let l;for(l in d)d[l].forEach(c=>{const o=e[c],n=A(l,c,o);n&&a.push(n)});const f=a.some(c=>c.startsWith("v-col-"));return a.push({"v-col":!f||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return j(e.tag,{class:[r.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}});export{K as V,D as a};