import{p,m as b,b1 as v,A as F,b2 as V,ae as y,Y as R,a as h,aR as P}from"./index-6f6dbd63.js";const k=p({...b(),...v()},"VForm"),D=F()({name:"VForm",props:k(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:n,emit:f}=i;const r=V(o),s=y();function l(t){t.preventDefault(),r.reset()}function u(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),f("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return R(()=>{var t;return h("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,r)])}),P(r,s)}});export{D as V};
