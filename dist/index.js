!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).Fullpage={})}(this,(function(t){"use strict";function e(){}const n=t=>t;function o(t){return t()}function r(){return Object.create(null)}function l(t){t.forEach(o)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,o){if(t){const r=a(t,e,n,o);return t[0](r)}}function a(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function u(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function d(t){return null==t?"":t}const f="undefined"!=typeof window;let p=f?()=>window.performance.now():()=>Date.now(),g=f?t=>requestAnimationFrame(t):e;const h=new Set;function m(t){h.forEach(e=>{e.c(t)||(h.delete(e),e.f())}),0!==h.size&&g(m)}function v(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function x(){return b(" ")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const S=new Set;let k,F=0;function C(t,e,n,o,r,l,i,s=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*l(t);a+=100*t+`%{${i(o,1-o)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${s}`,f=t.ownerDocument;S.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(w("style")).sheet),g=f.__svelte_rules||(f.__svelte_rules={});g[d]||(g[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${d} ${o}ms linear ${r}ms 1 both`,F+=1,d}function j(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),F-=r,F||g(()=>{F||(S.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),S.clear())}))}function A(t){k=t}const D=[],I=[],B=[],M=[],O=Promise.resolve();let T=!1;function N(t){B.push(t)}let P=!1;const R=new Set;function Y(){if(!P){P=!0;do{for(let t=0;t<D.length;t+=1){const e=D[t];A(e),q(e.$$)}for(D.length=0;I.length;)I.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];R.has(e)||(R.add(e),e())}B.length=0}while(D.length);for(;M.length;)M.pop()();T=!1,P=!1,R.clear()}}function q(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let z;function L(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const W=new Set;let U;function G(t,e){t&&t.i&&(W.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),U.c.push(()=>{W.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const J={duration:0};function K(t,o,r,s){let c=o(t,r),a=s?0:1,u=null,d=null,f=null;function v(){f&&j(t,f)}function $(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(o){const{delay:r=0,duration:i=300,easing:s=n,tick:y=e,css:w}=c||J,b={start:p()+r,b:o};o||(b.group=U,U.r+=1),u?d=b:(w&&(v(),f=C(t,a,o,i,r,s,w)),o&&y(0,1),u=$(b,i),N(()=>L(t,o,"start")),function(t){let e;0===h.size&&g(m),new Promise(n=>{h.add(e={c:t,f:n})})}(e=>{if(d&&e>d.start&&(u=$(d,i),d=null,L(t,u.b,"start"),w&&(v(),f=C(t,a,u.b,u.duration,0,s,c.css))),u)if(e>=u.end)y(a=u.b,1-a),L(t,u.b,"end"),d||(u.b?v():--u.group.r||l(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;a=u.a+u.d*s(t/u.duration),y(a,1-a)}return!(!u&&!d)}))}return{run(t){i(c)?(z||(z=Promise.resolve(),z.then(()=>{z=null})),z).then(()=>{c=c(),y(t)}):y(t)},end(){v(),u=d=null}}}function Q(t,e){-1===t.$$.dirty[0]&&(D.push(t),T||(T=!0,O.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,n,s,c,a,u,d=[-1]){const f=k;A(t);const p=n.props||{},g=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:d};let h=!1;if(g.ctx=s?s(t,p,(e,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&a(g.ctx[e],g.ctx[e]=r)&&(g.bound[e]&&g.bound[e](r),h&&Q(t,e)),n}):[],g.update(),h=!0,l(g.before_update),g.fragment=!!c&&c(g.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);g.fragment&&g.fragment.l(t),t.forEach(y)}else g.fragment&&g.fragment.c();n.intro&&G(t.$$.fragment),function(t,e,n){const{fragment:r,on_mount:s,on_destroy:c,after_update:a}=t.$$;r&&r.m(e,n),N(()=>{const e=s.map(o).filter(i);c?c.push(...e):l(e),t.$$.on_mount=[]}),a.forEach(N)}(t,n.target,n.anchor),Y()}A(f)}class X{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function Z(t,e,n){const o=t.slice();return o[27]=e[n],o[29]=n,o}function tt(t){let e,n,o,r,l;function i(...e){return t[21](t[29],...e)}return{c(){e=w("li"),n=w("button"),r=x(),E(n,"class",o="svelte-fp-indicator-list-item-btn "+(t[0]===t[29]?"svelte-fp-active":"")+" svelte-1lli8rw"),E(e,"class","svelte-fp-indicator-list-item svelte-1lli8rw")},m(t,o,s){$(t,e,o),v(e,n),v(e,r),s&&l(),l=_(n,"click",i)},p(e,r){t=e,1&r&&o!==(o="svelte-fp-indicator-list-item-btn "+(t[0]===t[29]?"svelte-fp-active":"")+" svelte-1lli8rw")&&E(n,"class",o)},d(t){t&&y(e),l()}}}function et(t){let e,n,o,r,i,s,f,p;const g=t[19].default,h=c(g,t,t[18],null);let m=t[1],b=[];for(let e=0;e<m.length;e+=1)b[e]=tt(Z(t,m,e));return{c(){e=w("div"),n=w("div"),h&&h.c(),o=x(),r=w("div"),i=w("ul");for(let t=0;t<b.length;t+=1)b[t].c();E(i,"class","svelte-fp-indicator-list svelte-1lli8rw"),E(r,"class","svelte-fp-indicator svelte-1lli8rw"),E(n,"class","svelte-fp-container svelte-1lli8rw"),E(e,"class",s=d(t[2])+" svelte-1lli8rw")},m(s,c,a){$(s,e,c),v(e,n),h&&h.m(n,null),v(n,o),v(n,r),v(r,i);for(let t=0;t<b.length;t+=1)b[t].m(i,null);f=!0,a&&l(p),p=[_(window,"keydown",t[20]),_(e,"wheel",t[22]),_(e,"touchstart",t[23]),_(e,"touchend",t[24]),_(e,"drag",nt),_(e,"mousedown",t[25]),_(e,"mouseup",t[26])]},p(t,[e]){if(h&&h.p&&262144&e&&h.p(a(g,t,t[18],null),u(g,t[18],e,null)),3&e){let n;for(m=t[1],n=0;n<m.length;n+=1){const o=Z(t,m,n);b[n]?b[n].p(o,e):(b[n]=tt(o),b[n].c(),b[n].m(i,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=m.length}},i(t){f||(G(h,t),f=!0)},o(t){H(h,t),f=!1},d(t){t&&y(e),h&&h.d(t),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(b,t),l(p)}}}const nt=()=>!1;function ot(t,e,n){let o,{class:r=""}=e,{activeSection:l=0}=e,{sections:i=[]}=e,{animationDuration:s=750}=e,{arrows:c=!1}=e,{drag:a=!1}=e,u=`${r} svelte-fp-wrapper`,d=0,f=!0;const p=t=>{let e=t.deltaY,n=(new Date).getTime();s<n-d&&(d=n,e<0?g():e>0&&h())},g=async()=>{l>0&&n(0,l--,l)},h=async()=>{l<i.length-1&&n(0,l++,l)},m=t=>{if(c)switch(t.key){case"ArrowDown":h();break;case"ArrowUp":g()}},v=t=>{a&&(o=t.screenY)},$=t=>{if(a){const e=t.screenY;console.log(`Start:${o}, End:${e}, vertical difference:${o-e}`),o-e>100?h():o-e<-100&&g()}},y=t=>{console.log(t)};let{$$slots:w={},$$scope:b}=e;return t.$set=t=>{"class"in t&&n(8,r=t.class),"activeSection"in t&&n(0,l=t.activeSection),"sections"in t&&n(1,i=t.sections),"animationDuration"in t&&n(9,s=t.animationDuration),"arrows"in t&&n(10,c=t.arrows),"drag"in t&&n(11,a=t.drag),"$$scope"in t&&n(18,b=t.$$scope)},[l,i,u,p,m,v,$,y,r,s,c,a,o,d,f,()=>{f=!f},g,h,b,w,t=>m(t),t=>n(0,l=t),t=>p(t),t=>y(t),t=>y(t),t=>v(t),t=>$(t)]}function rt(t){const e=t-1;return e*e*e+1}function lt(t,{delay:e=0,duration:n=400,easing:o=rt}){const r=getComputedStyle(t),l=+r.opacity,i=parseFloat(r.height),s=parseFloat(r.paddingTop),c=parseFloat(r.paddingBottom),a=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),f=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*l};`+`height: ${t*i}px;`+`padding-top: ${t*s}px;`+`padding-bottom: ${t*c}px;`+`margin-top: ${t*a}px;`+`margin-bottom: ${t*u}px;`+`border-top-width: ${t*d}px;`+`border-bottom-width: ${t*f}px;`}}function it(t){let n,o,r,l,i;const s=t[9].default,f=c(s,t,t[8],null),p=f||{c:e,m:e,d:e};return{c(){n=w("section"),p&&p.c(),E(n,"class",o=d(t[3])+" svelte-gxlfrg")},m(e,o,r){$(e,n,o),p&&p.m(n,null),l=!0,r&&i(),i=_(n,"selectstart",t[4])},p(t,e){f&&f.p&&256&e&&f.p(a(s,t,t[8],null),u(s,t[8],e,null)),(!l||8&e&&o!==(o=d(t[3])+" svelte-gxlfrg"))&&E(n,"class",o)},i(e){l||(G(p,e),N(()=>{r||(r=K(n,lt,t[2],!0)),r.run(1)}),l=!0)},o(e){H(p,e),r||(r=K(n,lt,t[2],!1)),r.run(0),l=!1},d(t){t&&y(n),p&&p.d(t),t&&r&&r.end(),i()}}}function st(t){let e,n,o=t[0]===t[1]&&it(t);return{c(){o&&o.c(),e=b("")},m(t,r){o&&o.m(t,r),$(t,e,r),n=!0},p(t,[n]){t[0]===t[1]?o?(o.p(t,n),G(o,1)):(o=it(t),o.c(),G(o,1),o.m(e.parentNode,e)):o&&(U={r:0,c:[],p:U},H(o,1,1,()=>{o=null}),U.r||l(U.c),U=U.p)},i(t){n||(G(o),n=!0)},o(t){H(o),n=!1},d(t){o&&o.d(t),t&&y(e)}}}function ct(t,e,n){let{class:o=""}=e,{sectionId:r}=e,{activeSection:l}=e,{center:i=!1}=e,{select:s=!1}=e,{transition:c={duration:750}}=e;r=parseInt(r);let a=`${o} svelte-fp-section`;i&&(a=`${a} svelte-fp-flexbox-center`),s||(a=`${a} svelte-fp-unselectable`);let{$$slots:u={},$$scope:d}=e;return t.$set=t=>{"class"in t&&n(5,o=t.class),"sectionId"in t&&n(0,r=t.sectionId),"activeSection"in t&&n(1,l=t.activeSection),"center"in t&&n(6,i=t.center),"select"in t&&n(7,s=t.select),"transition"in t&&n(2,c=t.transition),"$$scope"in t&&n(8,d=t.$$scope)},[r,l,c,a,()=>{if(!s)return!1},o,i,s,d,u]}t.Fullpage=class extends X{constructor(t){var e;super(),document.getElementById("svelte-1lli8rw-style")||((e=w("style")).id="svelte-1lli8rw-style",e.textContent=".svelte-fp-wrapper.svelte-1lli8rw{height:100vh;overflow:hidden;left:0;right:0;top:0;bottom:0}.svelte-fp-container.svelte-1lli8rw{height:inherit;width:inherit;position:relative}.svelte-fp-indicator.svelte-1lli8rw{height:inherit;width:5rem;overflow:hidden;position:absolute;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list.svelte-1lli8rw{margin:1rem;padding:1rem;list-style-type:none}.svelte-fp-indicator-list-item.svelte-1lli8rw{margin:1rem;padding:0}.svelte-fp-indicator-list-item-btn.svelte-1lli8rw{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent}.svelte-fp-active.svelte-1lli8rw{background-color:#767676}@media only screen and (max-width: 600px){.svelte-fp-indicator.svelte-1lli8rw{display:none}}",v(document.head,e)),V(this,t,ot,et,s,{class:8,activeSection:0,sections:1,animationDuration:9,arrows:10,drag:11})}},t.FullpageSection=class extends X{constructor(t){var e;super(),document.getElementById("svelte-gxlfrg-style")||((e=w("style")).id="svelte-gxlfrg-style",e.textContent="section.svelte-gxlfrg{height:inherit;position:relative}slot.svelte-gxlfrg{position:absolute}.svelte-fp-flexbox-center.svelte-gxlfrg{display:flex;justify-content:center;align-items:center}.svelte-fp-unselectable.svelte-gxlfrg{user-select:none}",v(document.head,e)),V(this,t,ct,st,s,{class:5,sectionId:0,activeSection:1,center:6,select:7,transition:2})}},Object.defineProperty(t,"__esModule",{value:!0})}));
