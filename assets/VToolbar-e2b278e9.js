import{k as j,p as T,I as q,m as P,l as G,n as J,q as R,t as K,u as Q,v as H,x as $,y as z,z as W,A as S,B as X,C as b,D as E,E as Y,F as Z,G as p,H as w,J as ee,K as te,L as F,M as ae,N as O,O as le,a as l,P as ne,i as oe,Q as g,g as se,R as ie,S as re,T as ue,U as A,W as ce,X as de,Y as ve,Z as me,$ as ye,a0 as be,a1 as ge,a2 as C,a3 as fe}from"./index-03a0b820.js";const Ve=j("v-alert-title"),ke=["success","info","warning","error"],xe=T({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:q,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>ke.includes(e)},...P(),...G(),...J(),...R(),...K(),...Q(),...H(),...$(),...z(),...W({variant:"flat"})},"VAlert"),Be=S()({name:"VAlert",props:xe(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{emit:t,slots:a}=s;const n=X(e,"modelValue"),o=b(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),r=b(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:u}=E(e),{colorClasses:i,colorStyles:_,variantClasses:c}=Y(r),{densityClasses:d}=Z(e),{dimensionStyles:v}=p(e),{elevationClasses:f}=w(e),{locationStyles:B}=ee(e),{positionClasses:L}=te(e),{roundedClasses:V}=F(e),{textColorClasses:k,textColorStyles:x}=ae(O(e,"borderColor")),{t:h}=le(),m=b(()=>({"aria-label":h(e.closeLabel),onClick(I){n.value=!1,t("click:close",I)}}));return()=>{const I=!!(a.prepend||o.value),M=!!(a.title||e.title),U=!!(a.close||e.closable);return n.value&&l(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},u.value,i.value,d.value,f.value,L.value,V.value,c.value,e.class],style:[_.value,v.value,B.value,e.style],role:"alert"},{default:()=>{var D,N;return[ne(!1,"v-alert"),e.border&&l("div",{key:"border",class:["v-alert__border",k.value],style:x.value},null),I&&l("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?l(g,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},a.prepend):l(oe,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),l("div",{class:"v-alert__content"},[M&&l(Ve,{key:"title"},{default:()=>{var y;return[((y=a.title)==null?void 0:y.call(a))??e.title]}}),((D=a.text)==null?void 0:D.call(a))??e.text,(N=a.default)==null?void 0:N.call(a)]),a.append&&l("div",{key:"append",class:"v-alert__append"},[a.append()]),U&&l("div",{key:"close",class:"v-alert__close"},[a.close?l(g,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var y;return[(y=a.close)==null?void 0:y.call(a,{props:m.value})]}}):l(se,ie({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},m.value),null)])]}})}}});const he=T({...P(),...re()},"VLayout"),Le=S()({name:"VLayout",props:he(),setup(e,s){let{slots:t}=s;const{layoutClasses:a,layoutStyles:n,getLayoutItem:o,items:r,layoutRef:u}=ue(e);return A(()=>{var i;return l("div",{ref:u,class:[a.value,e.class],style:[n.value,e.style]},[(i=t.default)==null?void 0:i.call(t)])}),{getLayoutItem:o,items:r}}});const Ce=T({text:String,...P(),...$()},"VToolbarTitle"),Te=S()({name:"VToolbarTitle",props:Ce(),setup(e,s){let{slots:t}=s;return A(()=>{const a=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[a&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),Pe=[null,"prominent","default","comfortable","compact"],Se=T({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Pe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ce(),...P(),...R(),...H(),...$({tag:"header"}),...z()},"VToolbar"),Ie=S()({name:"VToolbar",props:Se(),setup(e,s){var f;let{slots:t}=s;const{backgroundColorClasses:a,backgroundColorStyles:n}=de(O(e,"color")),{borderClasses:o}=ve(e),{elevationClasses:r}=w(e),{roundedClasses:u}=F(e),{themeClasses:i}=E(e),{rtlClasses:_}=me(),c=ye(!!(e.extended||(f=t.extension)!=null&&f.call(t))),d=b(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=b(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return be({VBtn:{variant:"text"}}),A(()=>{var k;const B=!!(e.title||t.title),L=!!(t.image||e.image),V=(k=t.extension)==null?void 0:k.call(t);return c.value=!!(e.extended||V),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,o.value,r.value,u.value,i.value,_.value,e.class],style:[n.value,e.style]},{default:()=>[L&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(ge,{key:"image-img",cover:!0,src:e.image},null)]),l(g,{defaults:{VTabs:{height:C(d.value)}}},{default:()=>{var x,h,m;return[l("div",{class:"v-toolbar__content",style:{height:C(d.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(x=t.prepend)==null?void 0:x.call(t)]),B&&l(Te,{key:"title",text:e.title},{text:t.title}),(h=t.default)==null?void 0:h.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(m=t.append)==null?void 0:m.call(t)])])]}}),l(g,{defaults:{VTabs:{height:C(v.value)}}},{default:()=>[l(fe,null,{default:()=>[c.value&&l("div",{class:"v-toolbar__extension",style:{height:C(v.value)}},[V])]})]})]})}),{contentHeight:d,extensionHeight:v}}});export{Ie as V,Te as a,Be as b,Le as c};
