import{t as E,S as G,i as J,s as K,e as x,a as A,g as P,b as y,c as L,d as b,f as q,h as Q,j as V,o as Z,k as R,l as j,m as S,n as Y,p as N,q as C,r as X}from"./common/index-81606468.js";import{r as $,d as T,w as ee}from"./common/index-c43dd0dd.js";function te(e){if(!e)throw Error("Parameter args is required");if(!e.component==!e.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(e.component&&(e.asyncComponent=()=>Promise.resolve(e.component)),typeof e.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(e.conditions){Array.isArray(e.conditions)||(e.conditions=[e.conditions]);for(let n=0;n<e.conditions.length;n++)if(!e.conditions[n]||typeof e.conditions[n]!="function")throw Error("Invalid parameter conditions["+n+"]")}return e.loadingComponent&&(e.asyncComponent.loading=e.loadingComponent,e.asyncComponent.loadingParams=e.loadingParams||void 0),{component:e.asyncComponent,userData:e.userData,conditions:e.conditions&&e.conditions.length?e.conditions:void 0,props:e.props&&Object.keys(e.props).length?e.props:{},_sveltesparouter:!0}}function ne(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,s,a,l,p=[],o="",r=e.split("/");for(r[0]||r.shift();a=r.shift();)n=a[0],n==="*"?(p.push("wild"),o+="/(.*)"):n===":"?(s=a.indexOf("?",1),l=a.indexOf(".",1),p.push(a.substring(1,~s?s:~l?l:a.length)),o+=!!~s&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(o+=(~s?"?":"")+"\\"+a.substring(l))):o+="/"+a;return{keys:p,pattern:new RegExp("^"+o+(t?"(?=$|/)":"/?$"),"i")}}function oe(e){let t,n,s;const a=[e[2]];var l=e[0];function p(o){let r={};for(let f=0;f<a.length;f+=1)r=X(r,a[f]);return{props:r}}return l&&(t=new l(p()),t.$on("routeEvent",e[7])),{c(){t&&j(t.$$.fragment),n=x()},m(o,r){t&&S(t,o,r),A(o,n,r),s=!0},p(o,r){const f=r&4?Y(a,[N(o[2])]):{};if(l!==(l=o[0])){if(t){P();const d=t;y(d.$$.fragment,1,0,()=>{C(d,1)}),L()}l?(t=new l(p()),t.$on("routeEvent",o[7]),j(t.$$.fragment),b(t.$$.fragment,1),S(t,n.parentNode,n)):t=null}else l&&t.$set(f)},i(o){s||(t&&b(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&q(n),t&&C(t,o)}}}function re(e){let t,n,s;const a=[{params:e[1]},e[2]];var l=e[0];function p(o){let r={};for(let f=0;f<a.length;f+=1)r=X(r,a[f]);return{props:r}}return l&&(t=new l(p()),t.$on("routeEvent",e[6])),{c(){t&&j(t.$$.fragment),n=x()},m(o,r){t&&S(t,o,r),A(o,n,r),s=!0},p(o,r){const f=r&6?Y(a,[r&2&&{params:o[1]},r&4&&N(o[2])]):{};if(l!==(l=o[0])){if(t){P();const d=t;y(d.$$.fragment,1,0,()=>{C(d,1)}),L()}l?(t=new l(p()),t.$on("routeEvent",o[6]),j(t.$$.fragment),b(t.$$.fragment,1),S(t,n.parentNode,n)):t=null}else l&&t.$set(f)},i(o){s||(t&&b(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&q(n),t&&C(t,o)}}}function se(e){let t,n,s,a;const l=[re,oe],p=[];function o(r,f){return r[1]?0:1}return t=o(e),n=p[t]=l[t](e),{c(){n.c(),s=x()},m(r,f){p[t].m(r,f),A(r,s,f),a=!0},p(r,[f]){let d=t;t=o(r),t===d?p[t].p(r,f):(P(),y(p[d],1,1,()=>{p[d]=null}),L(),n=p[t],n?n.p(r,f):(n=p[t]=l[t](r),n.c()),b(n,1),n.m(s.parentNode,s))},i(r){a||(b(n),a=!0)},o(r){y(n),a=!1},d(r){p[t].d(r),r&&q(s)}}}function ie(e,t,...n){return console.warn("Method `wrap` from `svelte-spa-router` is deprecated and will be removed in a future version. Please use `svelte-spa-router/wrap` instead. See http://bit.ly/svelte-spa-router-upgrading"),te({component:e,userData:t,conditions:n})}function H(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let s="";return n>-1&&(s=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:s}}const O=$(null,function(t){t(H());const n=()=>{t(H())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}),ae=T(O,e=>e.location),le=T(O,e=>e.querystring),D=ee(void 0);async function ce(e){if(!e||e.length<1||e.charAt(0)!="/"&&e.indexOf("#/")!==0)throw Error("Invalid parameter location");await E(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=(e.charAt(0)=="#"?"":"#")+e}async function ue(){await E(),window.history.back()}async function fe(e){if(!e||e.length<1||e.charAt(0)!="/"&&e.indexOf("#/")!==0)throw Error("Invalid parameter location");await E();const t=(e.charAt(0)=="#"?"":"#")+e;try{const n={...history.state};delete n.__svelte_spa_router_scrollX,delete n.__svelte_spa_router_scrollY,window.history.replaceState(n,void 0,t)}catch(n){console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}function pe(e,t){if(t=U(t),!e||!e.tagName||e.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return M(e,t),{update(n){n=U(n),M(e,n)}}}function M(e,t){let n=t.href||e.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);e.setAttribute("href",n),e.addEventListener("click",s=>{s.preventDefault(),t.disabled||he(s.currentTarget.getAttribute("href"))})}function U(e){return e&&typeof e=="string"?{href:e}:e||{}}function he(e){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=e}function de(e,t,n){let{routes:s={}}=t,{prefix:a=""}=t,{restoreScrollState:l=!1}=t;class p{constructor(i,c){if(!c||typeof c!="function"&&(typeof c!="object"||c._sveltesparouter!==!0))throw Error("Invalid component object");if(!i||typeof i=="string"&&(i.length<1||i.charAt(0)!="/"&&i.charAt(0)!="*")||typeof i=="object"&&!(i instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:_,keys:h}=ne(i);this.path=i,typeof c=="object"&&c._sveltesparouter===!0?(this.component=c.component,this.conditions=c.conditions||[],this.userData=c.userData,this.props=c.props||{}):(this.component=()=>Promise.resolve(c),this.conditions=[],this.props={}),this._pattern=_,this._keys=h}match(i){if(a){if(typeof a=="string")if(i.startsWith(a))i=i.substr(a.length)||"/";else return null;else if(a instanceof RegExp){const m=i.match(a);if(m&&m[0])i=i.substr(m[0].length)||"/";else return null}}const c=this._pattern.exec(i);if(c===null)return null;if(this._keys===!1)return c;const _={};let h=0;for(;h<this._keys.length;){try{_[this._keys[h]]=decodeURIComponent(c[h+1]||"")||null}catch(m){_[this._keys[h]]=null}h++}return _}async checkConditions(i){for(let c=0;c<this.conditions.length;c++)if(!await this.conditions[c](i))return!1;return!0}}const o=[];s instanceof Map?s.forEach((u,i)=>{o.push(new p(i,u))}):Object.keys(s).forEach(u=>{o.push(new p(u,s[u]))});let r=null,f=null,d={};const F=Q();async function v(u,i){await E(),F(u,i)}let g=null,k=null;l&&(k=u=>{u.state&&u.state.__svelte_spa_router_scrollY?g=u.state:g=null},window.addEventListener("popstate",k),V(()=>{g?window.scrollTo(g.__svelte_spa_router_scrollX,g.__svelte_spa_router_scrollY):window.scrollTo(0,0)}));let I=null,w=null;const W=O.subscribe(async u=>{I=u;let i=0;for(;i<o.length;){const c=o[i].match(u.location);if(!c){i++;continue}const _={route:o[i].path,location:u.location,querystring:u.querystring,userData:o[i].userData,params:c&&typeof c=="object"&&Object.keys(c).length?c:null};if(!await o[i].checkConditions(_)){n(0,r=null),w=null,v("conditionsFailed",_);return}v("routeLoading",Object.assign({},_));const h=o[i].component;if(w!=h){h.loading?(n(0,r=h.loading),w=h,n(1,f=h.loadingParams),n(2,d={}),v("routeLoaded",Object.assign({},_,{component:r,name:r.name,params:f}))):(n(0,r=null),w=null);const m=await h();if(u!=I)return;n(0,r=m&&m.default||m),w=h}c&&typeof c=="object"&&Object.keys(c).length?n(1,f=c):n(1,f=null),n(2,d=o[i].props),v("routeLoaded",Object.assign({},_,{component:r,name:r.name,params:f})).then(()=>{D.set(f)});return}n(0,r=null),w=null,D.set(void 0)});Z(()=>{W(),k&&window.removeEventListener("popstate",k)});function z(u){R.call(this,e,u)}function B(u){R.call(this,e,u)}return e.$$set=u=>{"routes"in u&&n(3,s=u.routes),"prefix"in u&&n(4,a=u.prefix),"restoreScrollState"in u&&n(5,l=u.restoreScrollState)},e.$$.update=()=>{e.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[r,f,d,s,a,l,z,B]}class _e extends G{constructor(t){super();J(this,t,de,se,K,{routes:3,prefix:4,restoreScrollState:5})}}export default _e;export{pe as link,O as loc,ae as location,D as params,ue as pop,ce as push,le as querystring,fe as replace,ie as wrap};