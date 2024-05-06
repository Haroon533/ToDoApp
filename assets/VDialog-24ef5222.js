import{p as $,t as z,u as j,v as G,z as H,y as J,aj as K,b6 as D,A as _,B,J as Q,K as W,b7 as A,D as q,E as X,L as Y,a9 as h,$ as L,as as S,aA as Z,b9 as ee,U as R,b8 as x,a as m,P as te,ba as ae,Q as I,R as k,aN as N,a7 as oe,ai as F,_ as ne,o as se,c as le,w as E,d as T,g as re,aP as ie,aF as ce,ax as ue,bb as ve}from"./index-9ec577a4.js";function me(e){const s=L(e);let t=-1;function a(){clearInterval(t)}function d(){a(),F(()=>s.value=e)}function o(i){const b=i?getComputedStyle(i):{transitionDuration:.2},n=parseFloat(b.transitionDuration)*1e3||200;if(a(),s.value<=0)return;const r=performance.now();t=window.setInterval(()=>{const u=performance.now()-r+n;s.value=Math.max(e-u,0),s.value<=0&&a()},n)}return oe(a),{clear:a,time:s,start:o,reset:d}}const fe=$({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...z({location:"bottom"}),...j(),...G(),...H(),...J(),...K(D({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),de=_()({name:"VSnackbar",props:fe(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const a=B(e,"modelValue"),{locationStyles:d}=Q(e),{positionClasses:o}=W(e),{scopeId:i}=A(),{themeClasses:b}=q(e),{colorClasses:n,colorStyles:r,variantClasses:u}=X(e),{roundedClasses:v}=Y(e),c=me(Number(e.timeout)),l=h(),f=h(),g=L(!1);S(a,P),S(()=>e.timeout,P),Z(()=>{a.value&&P()});let p=-1;function P(){c.reset(),window.clearTimeout(p);const V=Number(e.timeout);if(!a.value||V===-1)return;const w=ee(f.value);c.start(w),p=window.setTimeout(()=>{a.value=!1},V)}function O(){c.reset(),window.clearTimeout(p)}function U(){g.value=!0,O()}function M(){g.value=!1,P()}return R(()=>{const V=x.filterProps(e),w=!!(t.default||t.text||e.text);return m(x,k({ref:l,class:["v-snackbar",{"v-snackbar--active":a.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},o.value,e.class],style:e.style},V,{modelValue:a.value,"onUpdate:modelValue":y=>a.value=y,contentProps:k({class:["v-snackbar__wrapper",b.value,n.value,v.value,u.value],style:[d.value,r.value],onPointerenter:U,onPointerleave:M},V.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},i),{default:()=>{var y,C;return[te(!1,"v-snackbar"),e.timer&&!g.value&&m("div",{key:"timer",class:"v-snackbar__timer"},[m(ae,{ref:f,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":c.time.value},null)]),w&&m("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((y=t.text)==null?void 0:y.call(t))??e.text,(C=t.default)==null?void 0:C.call(t)]),t.actions&&m(I,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[m("div",{class:"v-snackbar__actions"},[t.actions()])]})]},activator:t.activator})}),N({},l)}}),be={};function ge(e,s,t,a,d,o){return se(),le(de,{location:"bottom right",modelValue:this.$store.state.notfication.display,"onUpdate:modelValue":s[1]||(s[1]=i=>this.$store.state.notfication.display=i),color:this.$store.state.notfication.class,timeout:this.$store.state.notfication.timeout},{actions:E(()=>[m(re,{variant:"text",onClick:s[0]||(s[0]=i=>this.$store.state.notfication.display=!1)},{default:E(()=>[T(" Close ")]),_:1})]),default:E(()=>[T(ie(this.$store.state.notfication.text)+" ",1)]),_:1},8,["modelValue","color","timeout"])}const Pe=ne(be,[["render",ge]]);const Ve=$({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...D({origin:"center center",scrollStrategy:"block",transition:{component:ce},zIndex:2400})},"VDialog"),ye=_()({name:"VDialog",props:Ve(),emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,s){let{slots:t}=s;const a=B(e,"modelValue"),{scopeId:d}=A(),o=h();function i(n){var v,c;const r=n.relatedTarget,u=n.target;if(r!==u&&((v=o.value)!=null&&v.contentEl)&&((c=o.value)!=null&&c.globalTop)&&![document,o.value.contentEl].includes(u)&&!o.value.contentEl.contains(u)){const l=ve(o.value.contentEl);if(!l.length)return;const f=l[0],g=l[l.length-1];r===f?g.focus():f.focus()}}ue&&S(()=>a.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0});function b(){var n;(n=o.value)!=null&&n.contentEl&&!o.value.contentEl.contains(document.activeElement)&&o.value.contentEl.focus({preventScroll:!0})}return S(a,async n=>{var r;n||(await F(),(r=o.value.activatorEl)==null||r.focus({preventScroll:!0}))}),R(()=>{const n=x.filterProps(e),r=k({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps),u=k({tabindex:-1},e.contentProps);return m(x,k({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:a.value,"onUpdate:modelValue":v=>a.value=v,"aria-modal":"true",activatorProps:r,contentProps:u,role:"dialog",onAfterEnter:b},d),{activator:t.activator,default:function(){for(var v=arguments.length,c=new Array(v),l=0;l<v;l++)c[l]=arguments[l];return m(I,{root:"VDialog"},{default:()=>{var f;return[(f=t.default)==null?void 0:f.call(t,...c)]}})}})}),N({},o)}});export{ye as V,Pe as n};
