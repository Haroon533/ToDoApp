import{_ as u,o as m,c as p,w as a,a as e,d as s,e as t,f as c,g as n,h as f,i as V,j as d}from"./index-9ec577a4.js";import{V as h,a as g,b as _,c as w,d as b}from"./VSpacer-6262591a.js";import{V as y,a as L}from"./VCol-7ff16464.js";import{V as v,a as x,b as C,c as T}from"./VToolbar-597c2d4d.js";const $={name:"Login",data:()=>({password:"",username:"",error:!1}),methods:{login(){this.$store.dispatch("Login",{username:this.username,password:this.password}).then(o=>{this.$store.commit("ADD_Notfication",{display:!0,text:"Your account has been Login succufully",color:"success"}),this.$router.push("/Today")}).catch(o=>{this.error=!0,alert(o.response.data.error)})}}},k=d("br",null,null,-1),B=d("br",null,null,-1);function N(o,l,A,D,F,i){return m(),p(h,{class:"fill-height"},{default:a(()=>[e(T,{class:"align-center justify-center"},{default:a(()=>[e(y,{cols:"12",xs:"12",sm:"8",md:"8"},{default:a(()=>[e(L,null,{default:a(()=>[e(g,{class:"elevation-12"},{default:a(()=>[e(v,{dark:"",color:"blue"},{default:a(()=>[e(x,null,{default:a(()=>[s(" Login Form ")]),_:1})]),_:1}),e(C,{color:"error",modelValue:o.error,"onUpdate:modelValue":l[0]||(l[0]=r=>o.error=r),icon:"mdi-close"},{default:a(()=>[s(' please use this email :"eve.holt@reqres.in",'),k,s(' and this password :"pistol",'),B,s(" beacuse the fake api (reqres.in) ")]),_:1},8,["modelValue"]),e(_,null,{default:a(()=>[e(t,{name:"Login","prepend-icon":"mdi-email",label:"Email",type:"text",modelValue:o.username,"onUpdate:modelValue":l[1]||(l[1]=r=>o.username=r)},null,8,["modelValue"]),e(t,{name:"Password","prepend-icon":"mdi-lock",label:"Password",type:"text",modelValue:o.password,"onUpdate:modelValue":l[2]||(l[2]=r=>o.password=r)},null,8,["modelValue"])]),_:1}),e(c,{light:""}),e(w,null,{default:a(()=>[e(n,{to:"/Signup",rounded:"xl",color:"indigo",variant:"flat"},{default:a(()=>[s("Sign up")]),_:1}),e(b),e(n,{onClick:l[3]||(l[3]=f(r=>i.login(),["prevent"])),rounded:"xl",color:"primary",variant:"flat"},{default:a(()=>[s(" Login "),e(V,null,{default:a(()=>[s("mdi-arrow-right")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const P=u($,[["render",N]]);export{P as default};
