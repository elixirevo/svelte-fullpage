!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).Fullpage={})}(this,(function(t){"use strict";function e(){}const n=t=>t;function i(t){return t()}function l(){return Object.create(null)}function s(t){t.forEach(i)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,i){if(t){const l=a(t,e,n,i);return t[0](l)}}function a(t,e,n,i){return t[1]&&i?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](i(e))):n.ctx}function u(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(void 0===e.dirty)return l;if("object"==typeof l){const t=[],n=Math.max(e.dirty.length,l.length);for(let i=0;i<n;i+=1)t[i]=e.dirty[i]|l[i];return t}return e.dirty|l}return e.dirty}function d(t){return null==t?"":t}const f="undefined"!=typeof window;let p=f?()=>window.performance.now():()=>Date.now(),h=f?t=>requestAnimationFrame(t):e;const v=new Set;function m(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),0!==v.size&&h(m)}function g(t){let e;return 0===v.size&&h(m),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}function y(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function _(){return q(" ")}function S(){return q("")}function T(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e,n){t.classList[n?"add":"remove"](e)}const j=new Set;let E,D=0;function z(t,e,n,i,l,s,o,r=0){const c=16.666/i;let a="{\n";for(let t=0;t<=1;t+=c){const i=e+(n-e)*s(t);a+=100*t+`%{${o(i,1-i)}}\n`}const u=a+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,f=t.ownerDocument;j.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(w("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${d} ${i}ms linear ${l}ms 1 both`,D+=1,d}function F(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),l=n.length-i.length;l&&(t.style.animation=i.join(", "),D-=l,D||h(()=>{D||(j.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),j.clear())}))}function C(t){E=t}const A=[],O=[],B=[],M=[],N=Promise.resolve();let R=!1;function Y(t){B.push(t)}let L=!1;const P=new Set;function X(){if(!L){L=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];C(e),W(e.$$)}for(A.length=0;O.length;)O.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];P.has(e)||(P.add(e),e())}B.length=0}while(A.length);for(;M.length;)M.pop()();R=!1,L=!1,P.clear()}}function W(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}let U;function G(){return U||(U=Promise.resolve(),U.then(()=>{U=null})),U}function H(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function V(){K.r||s(K.c),K=K.p}function Z(t,e){t&&t.i&&(J.delete(t),t.i(e))}function tt(t,e,n,i){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push(()=>{J.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const et={duration:0};function nt(t,i,l,r){let c=i(t,l),a=r?0:1,u=null,d=null,f=null;function h(){f&&F(t,f)}function v(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function m(i){const{delay:l=0,duration:o=300,easing:r=n,tick:m=e,css:y}=c||et,$={start:p()+l,b:i};i||($.group=K,K.r+=1),u?d=$:(y&&(h(),f=z(t,a,i,o,l,r,y)),i&&m(0,1),u=v($,o),Y(()=>H(t,i,"start")),g(e=>{if(d&&e>d.start&&(u=v(d,o),d=null,H(t,u.b,"start"),y&&(h(),f=z(t,a,u.b,u.duration,0,r,c.css))),u)if(e>=u.end)m(a=u.b,1-a),H(t,u.b,"end"),d||(u.b?h():--u.group.r||s(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;a=u.a+u.d*r(t/u.duration),m(a,1-a)}return!(!u&&!d)}))}return{run(t){o(c)?G().then(()=>{c=c(),m(t)}):m(t)},end(){h(),u=d=null}}}function it(t,e){-1===t.$$.dirty[0]&&(A.push(t),R||(R=!0,N.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(t,n,r,c,a,u,d=[-1]){const f=E;C(t);const p=n.props||{},h=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:a,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:l(),dirty:d};let v=!1;if(h.ctx=r?r(t,p,(e,n,...i)=>{const l=i.length?i[0]:n;return h.ctx&&a(h.ctx[e],h.ctx[e]=l)&&(h.bound[e]&&h.bound[e](l),v&&it(t,e)),n}):[],h.update(),v=!0,s(h.before_update),h.fragment=!!c&&c(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(b)}else h.fragment&&h.fragment.c();n.intro&&Z(t.$$.fragment),function(t,e,n){const{fragment:l,on_mount:r,on_destroy:c,after_update:a}=t.$$;l&&l.m(e,n),Y(()=>{const e=r.map(i).filter(o);c?c.push(...e):s(e),t.$$.on_mount=[]}),a.forEach(Y)}(t,n.target,n.anchor),X()}C(f)}class st{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function ot(t,e,n){const i=t.slice();return i[32]=e[n],i[34]=n,i}function rt(t){let e,n,i,l,s;function o(...e){return t[26](t[34],...e)}return{c(){e=w("li"),n=w("button"),l=_(),k(n,"class",i="svelte-fp-indicator-list-item-btn "+(t[0]===t[34]?"svelte-fp-active":"")+" svelte-1uq79ci"),k(e,"class","svelte-fp-indicator-list-item svelte-1uq79ci")},m(t,i,r){$(t,e,i),y(e,n),y(e,l),r&&s(),s=T(n,"click",o)},p(e,l){t=e,1&l[0]&&i!==(i="svelte-fp-indicator-list-item-btn "+(t[0]===t[34]?"svelte-fp-active":"")+" svelte-1uq79ci")&&k(n,"class",i)},d(t){t&&b(e),s()}}}function ct(t){let e,n,i,l,o,r,f,p;const h=t[24].default,v=c(h,t,t[23],null);let m=t[2],g=[];for(let e=0;e<m.length;e+=1)g[e]=rt(ot(t,m,e));return{c(){e=w("div"),n=w("div"),v&&v.c(),i=_(),l=w("div"),o=w("ul");for(let t=0;t<g.length;t+=1)g[t].c();k(o,"class","svelte-fp-indicator-list svelte-1uq79ci"),k(l,"class","svelte-fp-indicator svelte-1uq79ci"),k(n,"class","svelte-fp-container svelte-1uq79ci"),k(e,"class",r=d(t[3])+" svelte-1uq79ci"),k(e,"style",t[1])},m(r,c,a){$(r,e,c),y(e,n),v&&v.m(n,null),y(n,i),y(n,l),y(l,o);for(let t=0;t<g.length;t+=1)g[t].m(o,null);f=!0,a&&s(p),p=[T(window,"keydown",t[25]),T(e,"wheel",t[27]),T(e,"touchstart",t[28]),T(e,"touchmove",t[29]),T(e,"drag",at),T(e,"mousedown",t[30]),T(e,"mouseup",t[31])]},p(t,n){if(v&&v.p&&8388608&n[0]&&v.p(a(h,t,t[23],null),u(h,t[23],n,null)),5&n[0]){let e;for(m=t[2],e=0;e<m.length;e+=1){const i=ot(t,m,e);g[e]?g[e].p(i,n):(g[e]=rt(i),g[e].c(),g[e].m(o,null))}for(;e<g.length;e+=1)g[e].d(1);g.length=m.length}(!f||2&n[0])&&k(e,"style",t[1])},i(t){f||(Z(v,t),f=!0)},o(t){tt(v,t),f=!1},d(t){t&&b(e),v&&v.d(t),x(g,t),s(p)}}}const at=()=>!1;function ut(t,e,n){let i,l,{class:s=""}=e,{style:o=""}=e,{activeSection:r=0}=e,{sections:c=[]}=e,{transitionDuration:a=500}=e,{arrows:u=!1}=e,{drag:d=!1}=e,{dragThreshold:f=100}=e,{touchThreshold:p=75}=e,h=`${s} svelte-fp-wrapper`,v=0,m=!0;const g=t=>{let e=t.deltaY,n=(new Date).getTime();a<n-v&&(v=n,e<0?y():e>0&&$())},y=async()=>{r>0&&n(0,r--,r)},$=async()=>{r<c.length-1&&n(0,r++,r)},b=t=>{if(u)switch(t.key){case"ArrowDown":$();break;case"ArrowUp":y()}},x=t=>{d&&(i=t.screenY)},w=t=>{if(d){const e=t.screenY;i-e>f?$():i-e<-f&&y()}},q=t=>{l=t.touches[0].screenY},_=t=>{let e=(new Date).getTime();const n=t.touches[0].screenY;a<e-v&&(l-n>p?($(),v=e):l-n<-p&&(y(),v=e))};let{$$slots:S={},$$scope:T}=e;return t.$set=t=>{"class"in t&&n(10,s=t.class),"style"in t&&n(1,o=t.style),"activeSection"in t&&n(0,r=t.activeSection),"sections"in t&&n(2,c=t.sections),"transitionDuration"in t&&n(11,a=t.transitionDuration),"arrows"in t&&n(12,u=t.arrows),"drag"in t&&n(13,d=t.drag),"dragThreshold"in t&&n(14,f=t.dragThreshold),"touchThreshold"in t&&n(15,p=t.touchThreshold),"$$scope"in t&&n(23,T=t.$$scope)},[r,o,c,h,g,b,x,w,q,_,s,a,u,d,f,p,i,l,v,m,()=>{m=!m},y,$,T,S,t=>b(t),t=>n(0,r=t),t=>g(t),t=>q(t),t=>_(t),t=>x(t),t=>w(t)]}function dt(t){const e=t-1;return e*e*e+1}function ft(t,{delay:e=0,duration:n=400,easing:i=dt,x:l=0,y:s=0,opacity:o=0}){const r=getComputedStyle(t),c=+r.opacity,a="none"===r.transform?"":r.transform,u=c*(1-o);return{delay:e,duration:n,easing:i,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*l}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-u*e}`}}function pt(t,{delay:e=0,duration:n=400,easing:i=dt}){const l=getComputedStyle(t),s=+l.opacity,o=parseFloat(l.height),r=parseFloat(l.paddingTop),c=parseFloat(l.paddingBottom),a=parseFloat(l.marginTop),u=parseFloat(l.marginBottom),d=parseFloat(l.borderTopWidth),f=parseFloat(l.borderBottomWidth);return{delay:e,duration:n,easing:i,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*s};`+`height: ${t*o}px;`+`padding-top: ${t*r}px;`+`padding-bottom: ${t*c}px;`+`margin-top: ${t*a}px;`+`margin-bottom: ${t*u}px;`+`border-top-width: ${t*d}px;`+`border-bottom-width: ${t*f}px;`}}function ht(t,e,n){const i=t.slice();return i[36]=e[n],i[38]=n,i}function vt(t){let n,i,l,o,r,f,p;const h=t[29].default,v=c(h,t,t[28],null),m=v||{c:e,m:e,d:e};let g=t[3][0]&&mt(t);return{c(){n=w("section"),i=w("div"),m&&m.c(),l=_(),g&&g.c(),k(i,"class","svelte-fp-container svelte-fp-flexbox-expand svelte-l4liqa"),I(i,"svelte-fp-flexbox-center",t[4]),k(n,"class",o=d(t[7])+" svelte-l4liqa"),k(n,"style",t[1])},m(e,o,r){$(e,n,o),y(n,i),m&&m.m(i,null),y(n,l),g&&g.m(n,null),f=!0,r&&s(p),p=[T(n,"selectstart",t[8]),T(n,"mousedown",t[32]),T(n,"mouseup",t[33]),T(n,"touchstart",t[34]),T(n,"touchmove",t[35])]},p(t,e){v&&v.p&&268435456&e[0]&&v.p(a(h,t,t[28],null),u(h,t[28],e,null)),16&e[0]&&I(i,"svelte-fp-flexbox-center",t[4]),t[3][0]?g?g.p(t,e):(g=mt(t),g.c(),g.m(n,null)):g&&(g.d(1),g=null),(!f||128&e[0]&&o!==(o=d(t[7])+" svelte-l4liqa"))&&k(n,"class",o),(!f||2&e[0])&&k(n,"style",t[1])},i(e){f||(Z(m,e),Y(()=>{r||(r=nt(n,pt,t[5],!0)),r.run(1)}),f=!0)},o(e){tt(m,e),r||(r=nt(n,pt,t[5],!1)),r.run(0),f=!1},d(t){t&&b(n),m&&m.d(t),g&&g.d(),t&&r&&r.end(),s(p)}}}function mt(t){let e,n,i=t[3],l=[];for(let e=0;e<i.length;e+=1)l[e]=gt(ht(t,i,e));return{c(){e=w("div"),n=w("ul");for(let t=0;t<l.length;t+=1)l[t].c();k(n,"class","svelte-fp-indicator-list-horizontal svelte-l4liqa"),k(e,"class","svelte-fp-indicator-horizontal svelte-l4liqa")},m(t,i){$(t,e,i),y(e,n);for(let t=0;t<l.length;t+=1)l[t].m(n,null)},p(t,e){if(584&e[0]){let s;for(i=t[3],s=0;s<i.length;s+=1){const o=ht(t,i,s);l[s]?l[s].p(o,e):(l[s]=gt(o),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=i.length}},d(t){t&&b(e),x(l,t)}}}function gt(t){let e,n,i,l,s;function o(...e){return t[31](t[38],...e)}return{c(){e=w("li"),n=w("button"),l=_(),k(n,"class",i="svelte-fp-indicator-list-item-btn "+(t[6]===t[38]?"svelte-fp-active":"")+" svelte-l4liqa"),k(e,"class","svelte-fp-indicator-list-item svelte-l4liqa")},m(t,i,r){$(t,e,i),y(e,n),y(e,l),r&&s(),s=T(n,"click",o)},p(e,l){t=e,64&l[0]&&i!==(i="svelte-fp-indicator-list-item-btn "+(t[6]===t[38]?"svelte-fp-active":"")+" svelte-l4liqa")&&k(n,"class",i)},d(t){t&&b(e),s()}}}function yt(t){let e,n,i,l=t[0]===t[2]&&vt(t);return{c(){l&&l.c(),e=S()},m(s,o,r){l&&l.m(s,o),$(s,e,o),n=!0,r&&i(),i=T(window,"keydown",t[30])},p(t,n){t[0]===t[2]?l?(l.p(t,n),Z(l,1)):(l=vt(t),l.c(),Z(l,1),l.m(e.parentNode,e)):l&&(Q(),tt(l,1,1,()=>{l=null}),V())},i(t){n||(Z(l),n=!0)},o(t){tt(l),n=!1},d(t){l&&l.d(t),t&&b(e),i()}}}function $t(t,e,n){let{class:i=""}=e,{style:l=""}=e,{sectionId:s}=e,{activeSection:o}=e,{slides:r=[]}=e,{activeSlide:c=!1}=e,{center:a=!1}=e,{arrows:u=!1}=e,{select:d=!1}=e,{transitionDuration:f=500}=e,{dragThreshold:p=100}=e,{touchThreshold:h=75}=e,{transition:v={duration:f}}=e;s=parseInt(s);let m,g,y=c,$=0,b=`${i} svelte-fp-section svelte-fp-flexbox-center`;d||(b=`${b} svelte-fp-unselectable`);const x=t=>{let e=!1;return t<0&&(e=!0,t=-t),{num:t,negative:e}},w=()=>{const t=x(c);t.num<r.length-1?(n(6,y=t.num+1),n(15,c=-y)):(n(15,c=0),n(6,y=c))},q=()=>{const t=x(c);t.num>0?n(15,c=t.num-1):n(15,c=r.length-1),n(6,y=c)},_=t=>{if(t>y)for(;t>y;)w();else for(;t<y;)q()},S=t=>{if(u)switch(t.key){case"ArrowLeft":q();break;case"ArrowRight":w()}},T=t=>{m=t.screenX},k=t=>{const e=t.screenX;m-e>p?w():m-e<-p&&q()},I=t=>{g=t.touches[0].screenX},j=t=>{let e=(new Date).getTime();const n=t.touches[0].screenX;f<e-$&&(g-n>h?(w(),$=e):g-n<-h&&(q(),$=e))};let{$$slots:E={},$$scope:D}=e;return t.$set=t=>{"class"in t&&n(16,i=t.class),"style"in t&&n(1,l=t.style),"sectionId"in t&&n(0,s=t.sectionId),"activeSection"in t&&n(2,o=t.activeSection),"slides"in t&&n(3,r=t.slides),"activeSlide"in t&&n(15,c=t.activeSlide),"center"in t&&n(4,a=t.center),"arrows"in t&&n(17,u=t.arrows),"select"in t&&n(18,d=t.select),"transitionDuration"in t&&n(19,f=t.transitionDuration),"dragThreshold"in t&&n(20,p=t.dragThreshold),"touchThreshold"in t&&n(21,h=t.touchThreshold),"transition"in t&&n(5,v=t.transition),"$$scope"in t&&n(28,D=t.$$scope)},[s,l,o,r,a,v,y,b,()=>{if(!d)return!1},_,S,T,k,I,j,c,i,u,d,f,p,h,m,g,$,x,w,q,D,E,t=>S(t),t=>_(t),t=>T(t),t=>k(t),t=>I(t),t=>j(t)]}function bt(t){let i,l,s,r;const f=t[9].default,h=c(f,t,t[8],null),v=h||{c:e,m:e,d:e};return{c(){i=w("div"),v&&v.c(),k(i,"class",l=d(`${t[3]} svelte-fp-content`)+" svelte-1jzpibp"),k(i,"style",t[4]),I(i,"svelte-fp-flexbox-center",t[5])},m(t,e){$(t,i,e),v&&v.m(i,null),r=!0},p(t,e){h&&h.p&&256&e&&h.p(a(f,t,t[8],null),u(f,t[8],e,null)),(!r||8&e&&l!==(l=d(`${t[3]} svelte-fp-content`)+" svelte-1jzpibp"))&&k(i,"class",l),(!r||16&e)&&k(i,"style",t[4]),40&e&&I(i,"svelte-fp-flexbox-center",t[5])},i(l){r||(Z(v,l),s||Y(()=>{s=function(t,i,l){let s,r,c=i(t,l),a=!1,u=0;function d(){s&&F(t,s)}function f(){const{delay:i=0,duration:l=300,easing:o=n,tick:f=e,css:h}=c||et;h&&(s=z(t,0,1,l,i,o,h,u++)),f(0,1);const v=p()+i,m=v+l;r&&r.abort(),a=!0,Y(()=>H(t,!0,"start")),r=g(e=>{if(a){if(e>=m)return f(1,0),H(t,!0,"end"),d(),a=!1;if(e>=v){const t=o((e-v)/l);f(t,1-t)}}return a})}let h=!1;return{start(){h||(F(t),o(c)?(c=c(),G().then(f)):f())},invalidate(){h=!1},end(){a&&(d(),a=!1)}}}(i,ft,t[2]),s.start()}),r=!0)},o(t){tt(v,t),r=!1},d(t){t&&b(i),v&&v.d(t)}}}function xt(t){let e,n,i=t[0]===t[1]&&bt(t);return{c(){i&&i.c(),e=S()},m(t,l){i&&i.m(t,l),$(t,e,l),n=!0},p(t,[n]){t[0]===t[1]?i?(i.p(t,n),Z(i,1)):(i=bt(t),i.c(),Z(i,1),i.m(e.parentNode,e)):i&&(Q(),tt(i,1,1,()=>{i=null}),V())},i(t){n||(Z(i),n=!0)},o(t){tt(i),n=!1},d(t){i&&i.d(t),t&&b(e)}}}function wt(t,e,n){let{class:i=""}=e,{style:l=""}=e,{slideId:s}=e,{activeSlide:o}=e,{center:r=!1}=e,{transitionIn:c={duration:5e3,x:-2e3}}=e,{transitionOut:a={duration:5e3,x:2e3}}=e;s=parseInt(s);const u=t=>{let e=!1;return t<0&&(e=!0,t=-t),{num:t,negative:e}};let{$$slots:d={},$$scope:f}=e;return t.$set=t=>{"class"in t&&n(3,i=t.class),"style"in t&&n(4,l=t.style),"slideId"in t&&n(0,s=t.slideId),"activeSlide"in t&&n(1,o=t.activeSlide),"center"in t&&n(5,r=t.center),"transitionIn"in t&&n(2,c=t.transitionIn),"transitionOut"in t&&n(6,a=t.transitionOut),"$$scope"in t&&n(8,f=t.$$scope)},t.$$.update=()=>{if(2&t.$$.dirty){const t=u(o);t.negative?(n(2,c.x=2e3,c),n(6,a.x=-2e3,a)):(n(2,c.x=-2e3,c),n(6,a.x=2e3,a)),n(1,o=t.num)}},[s,o,c,i,l,r,a,u,f,d]}t.Fullpage=class extends st{constructor(t){var e;super(),document.getElementById("svelte-1uq79ci-style")||((e=w("style")).id="svelte-1uq79ci-style",e.textContent=".svelte-fp-wrapper.svelte-1uq79ci{height:100vh;overflow:hidden;left:0;right:0;top:0;bottom:0}.svelte-fp-container.svelte-1uq79ci{height:inherit;width:inherit;position:relative}.svelte-fp-indicator.svelte-1uq79ci{height:inherit;width:5rem;overflow:hidden;position:absolute;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list.svelte-1uq79ci{margin:1rem;padding:1rem;list-style-type:none}.svelte-fp-indicator-list-item.svelte-1uq79ci{margin:1rem;padding:0}.svelte-fp-indicator-list-item-btn.svelte-1uq79ci{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent}.svelte-fp-active.svelte-1uq79ci{background-color:#767676}@media only screen and (max-width: 600px){.svelte-fp-indicator.svelte-1uq79ci{width:2rem}.svelte-fp-indicator-list.svelte-1uq79ci{margin:0.3rem;padding:0.3rem}.svelte-fp-indicator-list-item-btn.svelte-1uq79ci{width:0.5rem;height:0.5rem;border-radius:0.25rem}}",y(document.head,e)),lt(this,t,ut,ct,r,{class:10,style:1,activeSection:0,sections:2,transitionDuration:11,arrows:12,drag:13,dragThreshold:14,touchThreshold:15},[-1,-1])}},t.FullpageSection=class extends st{constructor(t){var e;super(),document.getElementById("svelte-l4liqa-style")||((e=w("style")).id="svelte-l4liqa-style",e.textContent="section.svelte-l4liqa{height:inherit;position:relative}.svelte-fp-flexbox-expand.svelte-l4liqa{flex:1}.svelte-fp-container.svelte-l4liqa{height:inherit;width:inherit;position:relative}.svelte-fp-flexbox-center.svelte-l4liqa{display:flex;justify-content:center;align-items:center}.svelte-fp-unselectable.svelte-l4liqa{user-select:none}.svelte-fp-indicator-horizontal.svelte-l4liqa{width:inherit;height:5rem;overflow:hidden;position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list-horizontal.svelte-l4liqa{margin:1rem;padding:1rem;list-style-type:none}.svelte-fp-indicator-list-item.svelte-l4liqa{display:inline-block;margin:1rem;padding:0}.svelte-fp-indicator-list-item-btn.svelte-l4liqa{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent}.svelte-fp-active.svelte-l4liqa{background-color:#767676}",y(document.head,e)),lt(this,t,$t,yt,r,{class:16,style:1,sectionId:0,activeSection:2,slides:3,activeSlide:15,center:4,arrows:17,select:18,transitionDuration:19,dragThreshold:20,touchThreshold:21,transition:5},[-1,-1])}},t.FullpageSlide=class extends st{constructor(t){var e;super(),document.getElementById("svelte-1jzpibp-style")||((e=w("style")).id="svelte-1jzpibp-style",e.textContent=".svelte-fp-content.svelte-1jzpibp{height:inherit;width:inherit;position:absolute;left:0;right:0;top:0;bottom:0}.svelte-fp-flexbox-center.svelte-1jzpibp{display:flex;justify-content:center;align-items:center}",y(document.head,e)),lt(this,t,wt,xt,r,{class:3,style:4,slideId:0,activeSlide:1,center:5,transitionIn:2,transitionOut:6})}},Object.defineProperty(t,"__esModule",{value:!0})}));
