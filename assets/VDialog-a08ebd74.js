import{p as D,t as Q,u as H,v as W,z as q,y as J,ak as X,b7 as _,A,B as R,K as Z,b8 as I,D as ee,E as te,L as ae,ab as p,a1 as L,ag as oe,ba as ne,aA as se,at as w,aB as le,bb as re,C as ie,U as N,b9 as x,a as f,P as ce,bc as ue,Q as F,R as P,aO as O,a9 as ve,aj as M,bd as fe,av as me,_ as de,o as be,c as ge,w as C,d as B,g as ye,aQ as Ve,aG as ke,ay as Pe,be as he}from"./index-4613d788.js";function Se(e){const s=L(e);let o=-1;function t(){clearInterval(o)}function c(){t(),M(()=>s.value=e)}function b(a){const g=a?getComputedStyle(a):{transitionDuration:.2},y=parseFloat(g.transitionDuration)*1e3||200;if(t(),s.value<=0)return;const V=performance.now();o=window.setInterval(()=>{const n=performance.now()-V+y;s.value=Math.max(e-n,0),s.value<=0&&t()},y)}return ve(t),{clear:t,time:s,start:b,reset:c}}const pe=D({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Q({location:"bottom"}),...H(),...W(),...q(),...J(),...X(_({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),we=A()({name:"VSnackbar",props:pe(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:o}=s;const t=R(e,"modelValue"),{positionClasses:c}=Z(e),{scopeId:b}=I(),{themeClasses:a}=ee(e),{colorClasses:g,colorStyles:y,variantClasses:V}=te(e),{roundedClasses:n}=ae(e),r=Se(Number(e.timeout)),m=p(),u=p(),v=L(!1),i=L(0),d=p(),T=oe(ne,void 0);se(()=>!!T,()=>{const l=fe();me(()=>{d.value=l.mainStyles.value})}),w(t,h),w(()=>e.timeout,h),le(()=>{t.value&&h()});let E=-1;function h(){r.reset(),window.clearTimeout(E);const l=Number(e.timeout);if(!t.value||l===-1)return;const k=re(u.value);r.start(k),E=window.setTimeout(()=>{t.value=!1},l)}function U(){r.reset(),window.clearTimeout(E)}function Y(){v.value=!0,U()}function j(){v.value=!1,h()}function z(l){i.value=l.touches[0].clientY}function G(l){Math.abs(i.value-l.changedTouches[0].clientY)>50&&(t.value=!1)}const K=ie(()=>e.location.split(" ").reduce((l,k)=>(l[`v-snackbar--${k}`]=!0,l),{}));return N(()=>{const l=x.filterProps(e),k=!!(o.default||o.text||e.text);return f(x,P({ref:m,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},K.value,c.value,e.class],style:[d.value,e.style]},l,{modelValue:t.value,"onUpdate:modelValue":S=>t.value=S,contentProps:P({class:["v-snackbar__wrapper",a.value,g.value,n.value,V.value],style:[y.value],onPointerenter:Y,onPointerleave:j},l.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:z,onTouchend:G},b),{default:()=>{var S,$;return[ce(!1,"v-snackbar"),e.timer&&!v.value&&f("div",{key:"timer",class:"v-snackbar__timer"},[f(ue,{ref:u,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":r.time.value},null)]),k&&f("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((S=o.text)==null?void 0:S.call(o))??e.text,($=o.default)==null?void 0:$.call(o)]),o.actions&&f(F,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[f("div",{class:"v-snackbar__actions"},[o.actions({isActive:t})])]})]},activator:o.activator})}),O({},m)}}),xe={};function Te(e,s,o,t,c,b){return be(),ge(we,{location:"bottom right",modelValue:this.$store.state.notfication.display,"onUpdate:modelValue":s[1]||(s[1]=a=>this.$store.state.notfication.display=a),color:this.$store.state.notfication.class,timeout:this.$store.state.notfication.timeout},{actions:C(()=>[f(ye,{variant:"text",onClick:s[0]||(s[0]=a=>this.$store.state.notfication.display=!1)},{default:C(()=>[B(" Close ")]),_:1})]),default:C(()=>[B(Ve(this.$store.state.notfication.text)+" ",1)]),_:1},8,["modelValue","color","timeout"])}const Le=de(xe,[["render",Te]]);const Ee=D({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,..._({origin:"center center",scrollStrategy:"block",transition:{component:ke},zIndex:2400})},"VDialog"),$e=A()({name:"VDialog",props:Ee(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,s){let{emit:o,slots:t}=s;const c=R(e,"modelValue"),{scopeId:b}=I(),a=p();function g(n){var u,v;const r=n.relatedTarget,m=n.target;if(r!==m&&((u=a.value)!=null&&u.contentEl)&&((v=a.value)!=null&&v.globalTop)&&![document,a.value.contentEl].includes(m)&&!a.value.contentEl.contains(m)){const i=he(a.value.contentEl);if(!i.length)return;const d=i[0],T=i[i.length-1];r===d?T.focus():d.focus()}}Pe&&w(()=>c.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",g):document.removeEventListener("focusin",g)},{immediate:!0});function y(){var n;(n=a.value)!=null&&n.contentEl&&!a.value.contentEl.contains(document.activeElement)&&a.value.contentEl.focus({preventScroll:!0})}function V(){o("afterLeave")}return w(c,async n=>{var r;n||(await M(),(r=a.value.activatorEl)==null||r.focus({preventScroll:!0}))}),N(()=>{const n=x.filterProps(e),r=P({"aria-haspopup":"dialog","aria-expanded":String(c.value)},e.activatorProps),m=P({tabindex:-1},e.contentProps);return f(x,P({ref:a,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:c.value,"onUpdate:modelValue":u=>c.value=u,"aria-modal":"true",activatorProps:r,contentProps:m,role:"dialog",onAfterEnter:y,onAfterLeave:V},b),{activator:t.activator,default:function(){for(var u=arguments.length,v=new Array(u),i=0;i<u;i++)v[i]=arguments[i];return f(F,{root:"VDialog"},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,...v)]}})}})}),O({},a)}});export{$e as V,Le as n};
