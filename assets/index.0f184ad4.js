import{c as y,A as R,r as W,u as j,d as B,a as X,w as N,b as z,e as m,o as d,f as O,g as f,h as M,i as C,F as P,j as $,t as A,k as Y,l as F,m as V,n as Z,p as I,q as ee}from"./index.96e9b9e2.js";var te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},ne=te;function U(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},t=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),t.forEach(function(n){re(a,n,r[n])})}return a}function re(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}var H=function(e,r){var t=U({},e,r.attrs);return y(R,U({},t,{icon:ne}),null)};H.displayName="MenuFoldOutlined";H.inheritAttrs=!1;var ae=H,oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},le=oe;function D(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},t=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),t.forEach(function(n){ce(a,n,r[n])})}return a}function ce(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}var L=function(e,r){var t=D({},e,r.attrs);return y(R,D({},t,{icon:le}),null)};L.displayName="MenuUnfoldOutlined";L.inheritAttrs=!1;var se=L;const T=()=>{const e=(()=>{var t;return(t=W[0])==null?void 0:t.children})(),r=t=>t==null?void 0:t.map(n=>{var s;const h={path:n.path,key:n.name,name:n.name,title:(s=n==null?void 0:n.meta)==null?void 0:s.title,meta:n==null?void 0:n.meta,redirect:n==null?void 0:n.redirect};return n.children&&(h.children=r(n.children)),h});return[r(e||[])]};var q=(a=>(a.BASE_LOGIN="/login",a.BASE_HOME="/dashboard",a.ERROR_PAGE="/exception",a.ERROR_LOG_PAGE="/error-log/list",a))(q||{});const ie="Redirect";function G(a){console.error(a)}function ue(a){const{push:e,replace:r}=a||j();function t(n=q.BASE_HOME,h=!1){!n||(h?r(n).catch(G):e(n).catch(G))}return t}const de={id:"id",children:"children",pid:"pid"},J=a=>Object.assign({},de,a);function fe(a,e,r={}){r=J(r);const t=[],n=[...a],h=new Set,{children:s}=r;for(;n.length;){const p=n[0];if(h.has(p))t.pop(),n.shift();else if(h.add(p),p[s]&&n.unshift(...p[s]),t.push(p),e(p))return t}return null}function pe(a,e,r={}){r=J(r);const t=r.children;function n(h){return h.map(s=>({...s})).filter(s=>(s[t]=s[t]&&n(s[t]),e(s)||s[t]&&s[t].length))}return n(a)}function Q(a,e){return(fe(a,t=>t.name===e)||[]).map(t=>t.name)}const _e=Object.prototype.toString;function he(a,e){return _e.call(a)===`[object ${e}]`}function ge(a){return he(a,"String")}const me=B({__name:"index",setup(a){const e=X({collapsed:!1,selectedKeys:[],openKeys:[],preOpenKeys:[]}),r=j(),{currentRoute:t}=r,[n]=T();console.log("%c [ menus ]-43","font-size:13px; background:pink; color:#bf2c9f;",n),N(()=>t,(s,p)=>{var c;const v=z(s),x=((c=v==null?void 0:v.meta)==null?void 0:c.currentActiveMenu)||(v==null?void 0:v.name)||"";e.selectedKeys=[x],e.openKeys=Q(n,x),console.log("%c [ state.openKeys ]-52","font-size:13px; background:pink; color:#bf2c9f;",e.openKeys)},{deep:!0,immediate:!0}),N(()=>e.openKeys,(s,p)=>{e.preOpenKeys=p});const h=s=>{r.push({name:s.key})};return(s,p)=>{const v=m("a-menu-item"),x=m("a-sub-menu"),c=m("a-menu");return d(),O(c,{openKeys:e.openKeys,"onUpdate:openKeys":p[0]||(p[0]=o=>e.openKeys=o),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":p[1]||(p[1]=o=>e.selectedKeys=o),mode:"inline",theme:"dark",onSelect:h},{default:f(()=>[(d(!0),M(P,null,C(z(n),o=>{var l;return d(),M(P,{key:o.key},[(l=o.children)!=null&&l.length?(d(),O(x,{key:o.key},{title:f(()=>[$(A(o.title),1)]),default:f(()=>[(d(!0),M(P,null,C(o.children,i=>{var _;return d(),M(P,{key:i.key},[(_=i==null?void 0:i.meta)!=null&&_.hideMenu?Y("",!0):(d(),O(v,{key:i.key},{default:f(()=>[$(A(i.title),1)]),_:2},1024))],64)}),128))]),_:2},1024)):(d(),O(v,{key:o.key},{default:f(()=>[F("span",null,A(o.title),1)]),_:2},1024))],64)}),128))]),_:1},8,["openKeys","selectedKeys"])}}}),ve={key:0},ye=B({__name:"index",setup(a){const e=V([]),{currentRoute:r}=j(),[t]=T(),n=ue();Z(async()=>{var b,S,E;if(r.value.name===ie)return;const c=r.value.matched,o=c==null?void 0:c[c.length-1];let l=r.value.name;o&&((b=o==null?void 0:o.meta)==null?void 0:b.currentActiveMenu)&&(l=o.meta.currentActiveMenu);const i=Q(t,l),_=t.filter(k=>k.key===i[0]),g=h(_,i);if(!g||g.length===0)return;const u=s(g);(S=r.value.meta)!=null&&S.currentActiveMenu&&u.push({...r.value,name:((E=r.value.meta)==null?void 0:E.title)||r.value.name}),e.value=u});function h(c,o){const l=[];return c.forEach(i=>{var _,g;o.includes(i.name)&&l.push({...i,name:((_=i.meta)==null?void 0:_.title)||i.name}),(g=i.children)!=null&&g.length&&l.push(...h(i.children,o))}),l}function s(c){return pe(c,o=>{const{meta:l,name:i}=o;if(!l)return!!i;const{title:_,hideBreadcrumb:g,hideMenu:u}=l;return!(!_||g||u)}).filter(o=>{var l;return!((l=o.meta)!=null&&l.hideBreadcrumb)})}function p(c,o){return c.indexOf(o)!==c.length-1}function v(c,o,l){l==null||l.preventDefault();const{children:i,redirect:_,meta:g}=c;if((i==null?void 0:i.length)&&!_){l==null||l.stopPropagation();return}if(!(g!=null&&g.carryParam))if(_&&ge(_)){let u="";u=/^\//.test(_)?_:`/${u}`,console.log("%c [ goPath ]-149","font-size:13px; background:pink; color:#bf2c9f;",u),n(u)}else{let u="";o.length===1?u=o[0]:u=`${o.slice(1).pop()||""}`,u=/^\//.test(u)?u:`/${u}`,n(u)}}const x=(c,o)=>{const l=/^\//.test(c)?c:`/${c}`;l&&n("/"+o+l)};return(c,o)=>{const l=m("router-link"),i=m("a-menu-item"),_=m("a-menu"),g=m("a-breadcrumb-item"),u=m("a-breadcrumb");return d(),M("div",null,[y(u,null,{default:f(()=>[(d(!0),M(P,null,C(e.value,b=>{var S,E;return d(),O(g,{key:(S=b.meta)==null?void 0:S.name},I({default:f(()=>{var k;return[p(e.value,b)?(d(),O(l,{key:1,to:"",onClick:w=>v(b,e.value.map(K=>K.path),w)},{default:f(()=>[$(A(b.meta.title),1)]),_:2},1032,["onClick"])):(d(),M("span",ve,A((k=b.meta)==null?void 0:k.title),1))]}),_:2},[(E=b.children)!=null&&E.length?{name:"overlay",fn:f(()=>[y(_,null,{default:f(()=>[(d(!0),M(P,null,C(b.children,k=>{var w;return d(),O(i,{key:(w=k.meta)==null?void 0:w.name},{default:f(()=>[y(l,{to:"",onClick:K=>x(k.path,b.path)},{default:f(()=>{var K;return[$(A((K=k==null?void 0:k.meta)==null?void 0:K.title),1)]}),_:2},1032,["onClick"])]),_:2},1024)}),128))]),_:2},1024)])}:void 0]),1024)}),128))]),_:1})])}}});const be=F("div",{class:"logo"},null,-1),Oe={style:{padding:"24px",background:"#fff",minHeight:"360px"}},ke=$(" Ant Design \xA92018 Created by Ant UED "),Me=B({__name:"index",setup(a){const e=V(!1);return(r,t)=>{const n=m("a-layout-sider"),h=m("a-layout-header"),s=m("router-view"),p=m("a-layout-content"),v=m("a-layout-footer"),x=m("a-layout");return d(),O(x,{class:"layout"},{default:f(()=>[y(n,{collapsed:e.value,"onUpdate:collapsed":t[0]||(t[0]=c=>e.value=c),trigger:null,collapsible:""},{default:f(()=>[be,y(me)]),_:1},8,["collapsed"]),y(x,{class:"content"},{default:f(()=>[y(h,{class:"layout-header flex items-center"},{default:f(()=>[e.value?(d(),O(z(se),{key:0,class:"trigger",onClick:t[1]||(t[1]=()=>e.value=!e.value)})):(d(),O(z(ae),{key:1,class:"trigger",onClick:t[2]||(t[2]=()=>e.value=!e.value)})),y(ye)]),_:1}),y(p,{style:{margin:"16px 16px"}},{default:f(()=>[F("div",Oe,[y(s,null,{default:f(({Component:c})=>[(d(),O(ee(c)))]),_:1})])]),_:1}),y(v,{style:{"text-align":"center"}},{default:f(()=>[ke]),_:1})]),_:1})]),_:1})}}});export{Me as default};
