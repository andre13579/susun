function m(){}function G(t,n){for(const e in n)t[e]=n[e];return t}function C(t){return t()}function S(){return Object.create(null)}function d(t){t.forEach(C)}function N(t){return typeof t=="function"}function H(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return m;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function K(t,n){t.appendChild(n)}function L(t,n,e){t.insertBefore(n,e||null)}function O(t){t.parentNode.removeChild(t)}function Q(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function R(){return q(" ")}function V(){return q("")}function W(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}let _;function h(t){_=t}function y(){if(!_)throw new Error("Function called outside component initialization");return _}function Z(t){y().$$.after_update.push(t)}function tt(t){y().$$.on_destroy.push(t)}function nt(){const t=y();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const s=Y(n,e);o.slice().forEach(i=>{i.call(t,s)})}}}function et(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const p=[],z=[],g=[],B=[],D=Promise.resolve();let x=!1;function F(){x||(x=!0,D.then(M))}function ot(){return F(),D}function k(t){g.push(t)}const E=new Set;let $=0;function M(){const t=_;do{for(;$<p.length;){const n=p[$];$++,h(n),ct(n.$$)}for(h(null),p.length=0,$=0;z.length;)z.pop()();for(let n=0;n<g.length;n+=1){const e=g[n];E.has(e)||(E.add(e),e())}g.length=0}while(p.length);for(;B.length;)B.pop()();x=!1,E.clear(),h(t)}function ct(t){if(t.fragment!==null){t.update(),d(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const b=new Set;let l;function rt(){l={r:0,c:[],p:l}}function st(){l.r||d(l.c),l=l.p}function P(t,n){t&&t.i&&(b.delete(t),t.i(n))}function ut(t,n,e,o){if(t&&t.o){if(b.has(t))return;b.add(t),l.c.push(()=>{b.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function it(t,n){const e={},o={},s={$$scope:1};let i=t.length;for(;i--;){const u=t[i],a=n[i];if(a){for(const c in u)c in a||(o[c]=1);for(const c in a)s[c]||(e[c]=a[c],s[c]=1);t[i]=a}else for(const c in u)s[c]=1}for(const u in o)u in e||(e[u]=void 0);return e}function at(t){return typeof t=="object"&&t!==null?t:{}}function ft(t){t&&t.c()}function T(t,n,e,o){const{fragment:s,on_mount:i,on_destroy:u,after_update:a}=t.$$;s&&s.m(n,e),o||k(()=>{const c=i.map(C).filter(N);u?u.push(...c):d(c),t.$$.on_mount=[]}),a.forEach(k)}function U(t,n){const e=t.$$;e.fragment!==null&&(d(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(p.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function dt(t,n,e,o,s,i,u,a=[-1]){const c=_;h(t);const r=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:s,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:S(),dirty:a,skip_bound:!1,root:n.target||c.$$.root};u&&u(r.root);let w=!1;if(r.ctx=e?e(t,n.props||{},(f,v,...j)=>{const A=j.length?j[0]:v;return r.ctx&&s(r.ctx[f],r.ctx[f]=A)&&(!r.skip_bound&&r.bound[f]&&r.bound[f](A),w&&lt(t,f)),v}):[],r.update(),w=!0,d(r.before_update),r.fragment=o?o(r.ctx):!1,n.target){if(n.hydrate){const f=X(n.target);r.fragment&&r.fragment.l(f),f.forEach(O)}else r.fragment&&r.fragment.c();n.intro&&P(t.$$.fragment),T(t,n.target,n.anchor,n.customElement),M()}h(c)}class _t{$destroy(){U(this,1),this.$destroy=m}$on(n,e){const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const s=o.indexOf(e);s!==-1&&o.splice(s,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Q as A,R as B,_t as S,L as a,ut as b,st as c,P as d,V as e,O as f,rt as g,nt as h,dt as i,Z as j,et as k,ft as l,T as m,it as n,tt as o,at as p,U as q,G as r,H as s,ot as t,m as u,J as v,d as w,N as x,K as y,W as z};