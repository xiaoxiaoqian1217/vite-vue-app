import{d as F,a as f,s as P,u as w,e as a,o as R,h as S,c as e,g as t,v,b as m,x as U,l as q,F as E,j as l}from"./index.96e9b9e2.js";const M=l("Remember me"),N=l("China"),V=l("U.S.A"),A=l("Red"),D=l("Green"),j=l("Blue"),G=l("Create"),I=l("Reset"),J=F({__name:"index",setup(T){const d=f({remember:[{required:!0,message:"Please select your remoerber!"}],select:[{required:!0,message:"Please select your country!"}],"select-multiple":[{required:!0,message:"Please select your favourite colors!",type:"array",trigger:"blur"}]}),o=f({username:0,remember:!1,select:void 0,"select-multiple":void 0}),b=P.useForm,{resetFields:h,validate:k,validateInfos:i,initialModel:z}=b(o,d,{}),g=()=>{k().then(u=>{}).catch(u=>{console.log("error",u)})},C=w(),y=()=>{C.push({name:"base-form-detail"})};return(u,s)=>{const x=a("a-checkbox"),c=a("a-form-item"),r=a("a-select-option"),_=a("a-select"),p=a("a-button"),B=a("a-form");return R(),S(E,null,[e(B,{model:o,rules:d},{default:t(()=>[e(c,v({name:"remember","wrapper-col":{offset:8,span:16}},m(i).remember),{default:t(()=>[e(x,{checked:o.remember,"onUpdate:checked":s[0]||(s[0]=n=>o.remember=n)},{default:t(()=>[M]),_:1},8,["checked"])]),_:1},16),e(c,v({name:"select",label:"Select"},m(i).select),{default:t(()=>[e(_,{value:o.select,"onUpdate:value":s[1]||(s[1]=n=>o.select=n),placeholder:"Please select a country"},{default:t(()=>[e(r,{value:"china"},{default:t(()=>[N]),_:1}),e(r,{value:"usa"},{default:t(()=>[V]),_:1})]),_:1},8,["value"])]),_:1},16),e(c,{name:"select-multiple",label:"Select[multiple]"},{default:t(()=>[e(_,{value:o["select-multiple"],"onUpdate:value":s[2]||(s[2]=n=>o["select-multiple"]=n),mode:"multiple",placeholder:"Please select favourite colors"},{default:t(()=>[e(r,{value:"red"},{default:t(()=>[A]),_:1}),e(r,{value:"green"},{default:t(()=>[D]),_:1}),e(r,{value:"blue"},{default:t(()=>[j]),_:1})]),_:1},8,["value"])]),_:1}),e(c,{"wrapper-col":{span:14,offset:4}},{default:t(()=>[e(p,{type:"primary",onClick:U(g,["prevent"])},{default:t(()=>[G]),_:1},8,["onClick"]),e(p,{style:{"margin-left":"10px"},onClick:m(h)},{default:t(()=>[I]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"]),q("div",{onClick:y},"\u8FDB\u5165\u5B50\u7EA7\u8BE6\u60C5\u9875")],64)}}});export{J as default};
