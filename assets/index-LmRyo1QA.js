function sy(i,r){for(var d=0;d<r.length;d++){const s=r[d];if(typeof s!="string"&&!Array.isArray(s)){for(const h in s)if(h!=="default"&&!(h in i)){const S=Object.getOwnPropertyDescriptor(s,h);S&&Object.defineProperty(i,h,S.get?S:{enumerable:!0,get:()=>s[h]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const S of h)if(S.type==="childList")for(const x of S.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&s(x)}).observe(document,{childList:!0,subtree:!0});function d(h){const S={};return h.integrity&&(S.integrity=h.integrity),h.referrerPolicy&&(S.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?S.credentials="include":h.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function s(h){if(h.ep)return;h.ep=!0;const S=d(h);fetch(h.href,S)}})();function oy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Uf={exports:{}},qn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function dy(){if(k0)return qn;k0=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function d(s,h,S){var x=null;if(S!==void 0&&(x=""+S),h.key!==void 0&&(x=""+h.key),"key"in h){S={};for(var H in h)H!=="key"&&(S[H]=h[H])}else S=h;return h=S.ref,{$$typeof:i,type:s,key:x,ref:h!==void 0?h:null,props:S}}return qn.Fragment=r,qn.jsx=d,qn.jsxs=d,qn}var F0;function my(){return F0||(F0=1,Uf.exports=dy()),Uf.exports}var K=my(),Hf={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function yy(){if(I0)return lt;I0=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),x=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),j=Symbol.iterator;function Q(m){return m===null||typeof m!="object"?null:(m=j&&m[j]||m["@@iterator"],typeof m=="function"?m:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,q={};function U(m,N,X){this.props=m,this.context=N,this.refs=q,this.updater=X||I}U.prototype.isReactComponent={},U.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},U.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function P(){}P.prototype=U.prototype;function W(m,N,X){this.props=m,this.context=N,this.refs=q,this.updater=X||I}var L=W.prototype=new P;L.constructor=W,Z(L,U.prototype),L.isPureReactComponent=!0;var gt=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},ct=Object.prototype.hasOwnProperty;function at(m,N,X,C,w,rt){return X=rt.ref,{$$typeof:i,type:m,key:N,ref:X!==void 0?X:null,props:rt}}function ta(m,N){return at(m.type,N,void 0,void 0,void 0,m.props)}function Da(m){return typeof m=="object"&&m!==null&&m.$$typeof===i}function $l(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(X){return N[X]})}var Qa=/\/+/g;function Jt(m,N){return typeof m=="object"&&m!==null&&m.key!=null?$l(""+m.key):N.toString(36)}function xl(){}function Rl(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(xl,xl):(m.status="pending",m.then(function(N){m.status==="pending"&&(m.status="fulfilled",m.value=N)},function(N){m.status==="pending"&&(m.status="rejected",m.reason=N)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function $t(m,N,X,C,w){var rt=typeof m;(rt==="undefined"||rt==="boolean")&&(m=null);var tt=!1;if(m===null)tt=!0;else switch(rt){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(m.$$typeof){case i:case r:tt=!0;break;case M:return tt=m._init,$t(tt(m._payload),N,X,C,w)}}if(tt)return w=w(m),tt=C===""?"."+Jt(m,0):C,gt(w)?(X="",tt!=null&&(X=tt.replace(Qa,"$&/")+"/"),$t(w,N,X,"",function(el){return el})):w!=null&&(Da(w)&&(w=ta(w,X+(w.key==null||m&&m.key===w.key?"":(""+w.key).replace(Qa,"$&/")+"/")+tt)),N.push(w)),1;tt=0;var ca=C===""?".":C+":";if(gt(m))for(var _t=0;_t<m.length;_t++)C=m[_t],rt=ca+Jt(C,_t),tt+=$t(C,N,X,rt,w);else if(_t=Q(m),typeof _t=="function")for(m=_t.call(m),_t=0;!(C=m.next()).done;)C=C.value,rt=ca+Jt(C,_t++),tt+=$t(C,N,X,rt,w);else if(rt==="object"){if(typeof m.then=="function")return $t(Rl(m),N,X,C,w);throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return tt}function O(m,N,X){if(m==null)return m;var C=[],w=0;return $t(m,C,"","",function(rt){return N.call(X,rt,w++)}),C}function B(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(X){(m._status===0||m._status===-1)&&(m._status=1,m._result=X)},function(X){(m._status===0||m._status===-1)&&(m._status=2,m._result=X)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var k=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function At(){}return lt.Children={map:O,forEach:function(m,N,X){O(m,function(){N.apply(this,arguments)},X)},count:function(m){var N=0;return O(m,function(){N++}),N},toArray:function(m){return O(m,function(N){return N})||[]},only:function(m){if(!Da(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},lt.Component=U,lt.Fragment=d,lt.Profiler=h,lt.PureComponent=W,lt.StrictMode=s,lt.Suspense=z,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,lt.__COMPILER_RUNTIME={__proto__:null,c:function(m){return D.H.useMemoCache(m)}},lt.cache=function(m){return function(){return m.apply(null,arguments)}},lt.cloneElement=function(m,N,X){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var C=Z({},m.props),w=m.key,rt=void 0;if(N!=null)for(tt in N.ref!==void 0&&(rt=void 0),N.key!==void 0&&(w=""+N.key),N)!ct.call(N,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&N.ref===void 0||(C[tt]=N[tt]);var tt=arguments.length-2;if(tt===1)C.children=X;else if(1<tt){for(var ca=Array(tt),_t=0;_t<tt;_t++)ca[_t]=arguments[_t+2];C.children=ca}return at(m.type,w,void 0,void 0,rt,C)},lt.createContext=function(m){return m={$$typeof:x,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:S,_context:m},m},lt.createElement=function(m,N,X){var C,w={},rt=null;if(N!=null)for(C in N.key!==void 0&&(rt=""+N.key),N)ct.call(N,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(w[C]=N[C]);var tt=arguments.length-2;if(tt===1)w.children=X;else if(1<tt){for(var ca=Array(tt),_t=0;_t<tt;_t++)ca[_t]=arguments[_t+2];w.children=ca}if(m&&m.defaultProps)for(C in tt=m.defaultProps,tt)w[C]===void 0&&(w[C]=tt[C]);return at(m,rt,void 0,void 0,null,w)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(m){return{$$typeof:H,render:m}},lt.isValidElement=Da,lt.lazy=function(m){return{$$typeof:M,_payload:{_status:-1,_result:m},_init:B}},lt.memo=function(m,N){return{$$typeof:p,type:m,compare:N===void 0?null:N}},lt.startTransition=function(m){var N=D.T,X={};D.T=X;try{var C=m(),w=D.S;w!==null&&w(X,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(At,k)}catch(rt){k(rt)}finally{D.T=N}},lt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},lt.use=function(m){return D.H.use(m)},lt.useActionState=function(m,N,X){return D.H.useActionState(m,N,X)},lt.useCallback=function(m,N){return D.H.useCallback(m,N)},lt.useContext=function(m){return D.H.useContext(m)},lt.useDebugValue=function(){},lt.useDeferredValue=function(m,N){return D.H.useDeferredValue(m,N)},lt.useEffect=function(m,N,X){var C=D.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return C.useEffect(m,N)},lt.useId=function(){return D.H.useId()},lt.useImperativeHandle=function(m,N,X){return D.H.useImperativeHandle(m,N,X)},lt.useInsertionEffect=function(m,N){return D.H.useInsertionEffect(m,N)},lt.useLayoutEffect=function(m,N){return D.H.useLayoutEffect(m,N)},lt.useMemo=function(m,N){return D.H.useMemo(m,N)},lt.useOptimistic=function(m,N){return D.H.useOptimistic(m,N)},lt.useReducer=function(m,N,X){return D.H.useReducer(m,N,X)},lt.useRef=function(m){return D.H.useRef(m)},lt.useState=function(m){return D.H.useState(m)},lt.useSyncExternalStore=function(m,N,X){return D.H.useSyncExternalStore(m,N,X)},lt.useTransition=function(){return D.H.useTransition()},lt.version="19.1.1",lt}var P0;function Wf(){return P0||(P0=1,Hf.exports=yy()),Hf.exports}var vt=Wf();const hy=oy(vt),td=sy({__proto__:null,default:hy},[vt]);var Yf={exports:{}},jn={},qf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function vy(){return ad||(ad=1,(function(i){function r(O,B){var k=O.length;O.push(B);t:for(;0<k;){var At=k-1>>>1,m=O[At];if(0<h(m,B))O[At]=B,O[k]=m,k=At;else break t}}function d(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var B=O[0],k=O.pop();if(k!==B){O[0]=k;t:for(var At=0,m=O.length,N=m>>>1;At<N;){var X=2*(At+1)-1,C=O[X],w=X+1,rt=O[w];if(0>h(C,k))w<m&&0>h(rt,C)?(O[At]=rt,O[w]=k,At=w):(O[At]=C,O[X]=k,At=X);else if(w<m&&0>h(rt,k))O[At]=rt,O[w]=k,At=w;else break t}}return B}function h(O,B){var k=O.sortIndex-B.sortIndex;return k!==0?k:O.id-B.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;i.unstable_now=function(){return S.now()}}else{var x=Date,H=x.now();i.unstable_now=function(){return x.now()-H}}var z=[],p=[],M=1,j=null,Q=3,I=!1,Z=!1,q=!1,U=!1,P=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function gt(O){for(var B=d(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=O)s(p),B.sortIndex=B.expirationTime,r(z,B);else break;B=d(p)}}function D(O){if(q=!1,gt(O),!Z)if(d(z)!==null)Z=!0,ct||(ct=!0,Jt());else{var B=d(p);B!==null&&$t(D,B.startTime-O)}}var ct=!1,at=-1,ta=5,Da=-1;function $l(){return U?!0:!(i.unstable_now()-Da<ta)}function Qa(){if(U=!1,ct){var O=i.unstable_now();Da=O;var B=!0;try{t:{Z=!1,q&&(q=!1,W(at),at=-1),I=!0;var k=Q;try{a:{for(gt(O),j=d(z);j!==null&&!(j.expirationTime>O&&$l());){var At=j.callback;if(typeof At=="function"){j.callback=null,Q=j.priorityLevel;var m=At(j.expirationTime<=O);if(O=i.unstable_now(),typeof m=="function"){j.callback=m,gt(O),B=!0;break a}j===d(z)&&s(z),gt(O)}else s(z);j=d(z)}if(j!==null)B=!0;else{var N=d(p);N!==null&&$t(D,N.startTime-O),B=!1}}break t}finally{j=null,Q=k,I=!1}B=void 0}}finally{B?Jt():ct=!1}}}var Jt;if(typeof L=="function")Jt=function(){L(Qa)};else if(typeof MessageChannel<"u"){var xl=new MessageChannel,Rl=xl.port2;xl.port1.onmessage=Qa,Jt=function(){Rl.postMessage(null)}}else Jt=function(){P(Qa,0)};function $t(O,B){at=P(function(){O(i.unstable_now())},B)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ta=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return Q},i.unstable_next=function(O){switch(Q){case 1:case 2:case 3:var B=3;break;default:B=Q}var k=Q;Q=B;try{return O()}finally{Q=k}},i.unstable_requestPaint=function(){U=!0},i.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=Q;Q=O;try{return B()}finally{Q=k}},i.unstable_scheduleCallback=function(O,B,k){var At=i.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?At+k:At):k=At,O){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=k+m,O={id:M++,callback:B,priorityLevel:O,startTime:k,expirationTime:m,sortIndex:-1},k>At?(O.sortIndex=k,r(p,O),d(z)===null&&O===d(p)&&(q?(W(at),at=-1):q=!0,$t(D,k-At))):(O.sortIndex=m,r(z,O),Z||I||(Z=!0,ct||(ct=!0,Jt()))),O},i.unstable_shouldYield=$l,i.unstable_wrapCallback=function(O){var B=Q;return function(){var k=Q;Q=B;try{return O.apply(this,arguments)}finally{Q=k}}}})(jf)),jf}var ld;function gy(){return ld||(ld=1,qf.exports=vy()),qf.exports}var Cf={exports:{}},Ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function py(){if(ed)return Ft;ed=1;var i=Wf();function r(z){var p="https://react.dev/errors/"+z;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)p+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+z+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var s={d:{f:d,r:function(){throw Error(r(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function S(z,p,M){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:j==null?null:""+j,children:z,containerInfo:p,implementation:M}}var x=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function H(z,p){if(z==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ft.createPortal=function(z,p){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return S(z,p,null,M)},Ft.flushSync=function(z){var p=x.T,M=s.p;try{if(x.T=null,s.p=2,z)return z()}finally{x.T=p,s.p=M,s.d.f()}},Ft.preconnect=function(z,p){typeof z=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(z,p))},Ft.prefetchDNS=function(z){typeof z=="string"&&s.d.D(z)},Ft.preinit=function(z,p){if(typeof z=="string"&&p&&typeof p.as=="string"){var M=p.as,j=H(M,p.crossOrigin),Q=typeof p.integrity=="string"?p.integrity:void 0,I=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;M==="style"?s.d.S(z,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:j,integrity:Q,fetchPriority:I}):M==="script"&&s.d.X(z,{crossOrigin:j,integrity:Q,fetchPriority:I,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ft.preinitModule=function(z,p){if(typeof z=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var M=H(p.as,p.crossOrigin);s.d.M(z,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(z)},Ft.preload=function(z,p){if(typeof z=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var M=p.as,j=H(M,p.crossOrigin);s.d.L(z,M,{crossOrigin:j,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ft.preloadModule=function(z,p){if(typeof z=="string")if(p){var M=H(p.as,p.crossOrigin);s.d.m(z,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(z)},Ft.requestFormReset=function(z){s.d.r(z)},Ft.unstable_batchedUpdates=function(z,p){return z(p)},Ft.useFormState=function(z,p,M){return x.H.useFormState(z,p,M)},Ft.useFormStatus=function(){return x.H.useHostTransitionStatus()},Ft.version="19.1.1",Ft}var nd;function by(){if(nd)return Cf.exports;nd=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Cf.exports=py(),Cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function Sy(){if(ud)return jn;ud=1;var i=gy(),r=Wf(),d=by();function s(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function S(t){var a=t,l=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(l=a.return),t=a.return;while(t)}return a.tag===3?l:null}function x(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function H(t){if(S(t)!==t)throw Error(s(188))}function z(t){var a=t.alternate;if(!a){if(a=S(t),a===null)throw Error(s(188));return a!==t?null:t}for(var l=t,e=a;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(e=n.return,e!==null){l=e;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return H(n),t;if(u===e)return H(n),a;u=u.sibling}throw Error(s(188))}if(l.return!==e.return)l=n,e=u;else{for(var c=!1,f=n.child;f;){if(f===l){c=!0,l=n,e=u;break}if(f===e){c=!0,e=n,l=u;break}f=f.sibling}if(!c){for(f=u.child;f;){if(f===l){c=!0,l=u,e=n;break}if(f===e){c=!0,e=u,l=n;break}f=f.sibling}if(!c)throw Error(s(189))}}if(l.alternate!==e)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?t:a}function p(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=p(t),a!==null)return a;t=t.sibling}return null}var M=Object.assign,j=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),L=Symbol.for("react.context"),gt=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),ta=Symbol.for("react.lazy"),Da=Symbol.for("react.activity"),$l=Symbol.for("react.memo_cache_sentinel"),Qa=Symbol.iterator;function Jt(t){return t===null||typeof t!="object"?null:(t=Qa&&t[Qa]||t["@@iterator"],typeof t=="function"?t:null)}var xl=Symbol.for("react.client.reference");function Rl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xl?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case U:return"Profiler";case q:return"StrictMode";case D:return"Suspense";case ct:return"SuspenseList";case Da:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case I:return"Portal";case L:return(t.displayName||"Context")+".Provider";case W:return(t._context.displayName||"Context")+".Consumer";case gt:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case at:return a=t.displayName||null,a!==null?a:Rl(t.type)||"Memo";case ta:a=t._payload,t=t._init;try{return Rl(t(a))}catch{}}return null}var $t=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},At=[],m=-1;function N(t){return{current:t}}function X(t){0>m||(t.current=At[m],At[m]=null,m--)}function C(t,a){m++,At[m]=t.current,t.current=a}var w=N(null),rt=N(null),tt=N(null),ca=N(null);function _t(t,a){switch(C(tt,a),C(rt,t),C(w,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?O0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=O0(a),t=z0(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(w),C(w,t)}function el(){X(w),X(rt),X(tt)}function vi(t){t.memoizedState!==null&&C(ca,t);var a=w.current,l=z0(a,t.type);a!==l&&(C(rt,t),C(w,l))}function Vn(t){rt.current===t&&(X(w),X(rt)),ca.current===t&&(X(ca),Dn._currentValue=k)}var gi=Object.prototype.hasOwnProperty,pi=i.unstable_scheduleCallback,bi=i.unstable_cancelCallback,Zd=i.unstable_shouldYield,Vd=i.unstable_requestPaint,Na=i.unstable_now,Ld=i.unstable_getCurrentPriorityLevel,er=i.unstable_ImmediatePriority,nr=i.unstable_UserBlockingPriority,Ln=i.unstable_NormalPriority,Kd=i.unstable_LowPriority,ur=i.unstable_IdlePriority,wd=i.log,Jd=i.unstable_setDisableYieldValue,Ce=null,fa=null;function nl(t){if(typeof wd=="function"&&Jd(t),fa&&typeof fa.setStrictMode=="function")try{fa.setStrictMode(Ce,t)}catch{}}var ra=Math.clz32?Math.clz32:kd,$d=Math.log,Wd=Math.LN2;function kd(t){return t>>>=0,t===0?32:31-($d(t)/Wd|0)|0}var Kn=256,wn=4194304;function Dl(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Jn(t,a,l){var e=t.pendingLanes;if(e===0)return 0;var n=0,u=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var f=e&134217727;return f!==0?(e=f&~u,e!==0?n=Dl(e):(c&=f,c!==0?n=Dl(c):l||(l=f&~t,l!==0&&(n=Dl(l))))):(f=e&~u,f!==0?n=Dl(f):c!==0?n=Dl(c):l||(l=e&~t,l!==0&&(n=Dl(l)))),n===0?0:a!==0&&a!==n&&(a&u)===0&&(u=n&-n,l=a&-a,u>=l||u===32&&(l&4194048)!==0)?a:n}function Be(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Fd(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ir(){var t=Kn;return Kn<<=1,(Kn&4194048)===0&&(Kn=256),t}function cr(){var t=wn;return wn<<=1,(wn&62914560)===0&&(wn=4194304),t}function Si(t){for(var a=[],l=0;31>l;l++)a.push(t);return a}function Xe(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Id(t,a,l,e,n,u){var c=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var f=t.entanglements,o=t.expirationTimes,b=t.hiddenUpdates;for(l=c&~l;0<l;){var A=31-ra(l),R=1<<A;f[A]=0,o[A]=-1;var E=b[A];if(E!==null)for(b[A]=null,A=0;A<E.length;A++){var T=E[A];T!==null&&(T.lane&=-536870913)}l&=~R}e!==0&&fr(t,e,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(c&~a))}function fr(t,a,l){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-ra(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|l&4194090}function rr(t,a){var l=t.entangledLanes|=a;for(t=t.entanglements;l;){var e=31-ra(l),n=1<<e;n&a|t[e]&a&&(t[e]|=a),l&=~n}}function Ei(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ti(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function sr(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:L0(t.type))}function Pd(t,a){var l=B.p;try{return B.p=t,a()}finally{B.p=l}}var ul=Math.random().toString(36).slice(2),Wt="__reactFiber$"+ul,aa="__reactProps$"+ul,Wl="__reactContainer$"+ul,Ai="__reactEvents$"+ul,t1="__reactListeners$"+ul,a1="__reactHandles$"+ul,or="__reactResources$"+ul,Ge="__reactMarker$"+ul;function Oi(t){delete t[Wt],delete t[aa],delete t[Ai],delete t[t1],delete t[a1]}function kl(t){var a=t[Wt];if(a)return a;for(var l=t.parentNode;l;){if(a=l[Wl]||l[Wt]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(t=R0(t);t!==null;){if(l=t[Wt])return l;t=R0(t)}return a}t=l,l=t.parentNode}return null}function Fl(t){if(t=t[Wt]||t[Wl]){var a=t.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return t}return null}function Qe(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(s(33))}function Il(t){var a=t[or];return a||(a=t[or]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Xt(t){t[Ge]=!0}var dr=new Set,mr={};function Nl(t,a){Pl(t,a),Pl(t+"Capture",a)}function Pl(t,a){for(mr[t]=a,t=0;t<a.length;t++)dr.add(a[t])}var l1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yr={},hr={};function e1(t){return gi.call(hr,t)?!0:gi.call(yr,t)?!1:l1.test(t)?hr[t]=!0:(yr[t]=!0,!1)}function $n(t,a,l){if(e1(a))if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+l)}}function Wn(t,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+l)}}function Za(t,a,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(a,l,""+e)}}var zi,vr;function te(t){if(zi===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);zi=a&&a[1]||"",vr=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zi+t+vr}var _i=!1;function Mi(t,a){if(!t||_i)return"";_i=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(T){var E=T}Reflect.construct(t,[],R)}else{try{R.call()}catch(T){E=T}t.call(R.prototype)}}else{try{throw Error()}catch(T){E=T}(R=t())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(T){if(T&&E&&typeof T.stack=="string")return[T.stack,E.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=e.DetermineComponentFrameRoot(),c=u[0],f=u[1];if(c&&f){var o=c.split(`
`),b=f.split(`
`);for(n=e=0;e<o.length&&!o[e].includes("DetermineComponentFrameRoot");)e++;for(;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;if(e===o.length||n===b.length)for(e=o.length-1,n=b.length-1;1<=e&&0<=n&&o[e]!==b[n];)n--;for(;1<=e&&0<=n;e--,n--)if(o[e]!==b[n]){if(e!==1||n!==1)do if(e--,n--,0>n||o[e]!==b[n]){var A=`
`+o[e].replace(" at new "," at ");return t.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",t.displayName)),A}while(1<=e&&0<=n);break}}}finally{_i=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?te(l):""}function n1(t){switch(t.tag){case 26:case 27:case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 15:return Mi(t.type,!1);case 11:return Mi(t.type.render,!1);case 1:return Mi(t.type,!0);case 31:return te("Activity");default:return""}}function gr(t){try{var a="";do a+=n1(t),t=t.return;while(t);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function pa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pr(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function u1(t){var a=pr(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),e=""+t[a];if(!t.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,u=l.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return n.call(this)},set:function(c){e=""+c,u.call(this,c)}}),Object.defineProperty(t,a,{enumerable:l.enumerable}),{getValue:function(){return e},setValue:function(c){e=""+c},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function kn(t){t._valueTracker||(t._valueTracker=u1(t))}function br(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var l=a.getValue(),e="";return t&&(e=pr(t)?t.checked?"true":"false":t.value),t=e,t!==l?(a.setValue(t),!0):!1}function Fn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var i1=/[\n"\\]/g;function ba(t){return t.replace(i1,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function xi(t,a,l,e,n,u,c,f){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),a!=null?c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+pa(a)):t.value!==""+pa(a)&&(t.value=""+pa(a)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),a!=null?Ri(t,c,pa(a)):l!=null?Ri(t,c,pa(l)):e!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+pa(f):t.removeAttribute("name")}function Sr(t,a,l,e,n,u,c,f){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),a!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||a!=null))return;l=l!=null?""+pa(l):"",a=a!=null?""+pa(a):l,f||a===t.value||(t.value=a),t.defaultValue=a}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=f?t.checked:!!e,t.defaultChecked=!!e,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c)}function Ri(t,a,l){a==="number"&&Fn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ae(t,a,l,e){if(t=t.options,a){a={};for(var n=0;n<l.length;n++)a["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=a.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&e&&(t[l].defaultSelected=!0)}else{for(l=""+pa(l),a=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,e&&(t[n].defaultSelected=!0);return}a!==null||t[n].disabled||(a=t[n])}a!==null&&(a.selected=!0)}}function Er(t,a,l){if(a!=null&&(a=""+pa(a),a!==t.value&&(t.value=a),l==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=l!=null?""+pa(l):""}function Tr(t,a,l,e){if(a==null){if(e!=null){if(l!=null)throw Error(s(92));if($t(e)){if(1<e.length)throw Error(s(93));e=e[0]}l=e}l==null&&(l=""),a=l}l=pa(a),t.defaultValue=l,e=t.textContent,e===l&&e!==""&&e!==null&&(t.value=e)}function le(t,a){if(a){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=a;return}}t.textContent=a}var c1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ar(t,a,l){var e=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,l):typeof l!="number"||l===0||c1.has(a)?a==="float"?t.cssFloat=l:t[a]=(""+l).trim():t[a]=l+"px"}function Or(t,a,l){if(a!=null&&typeof a!="object")throw Error(s(62));if(t=t.style,l!=null){for(var e in l)!l.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var n in a)e=a[n],a.hasOwnProperty(n)&&l[n]!==e&&Ar(t,n,e)}else for(var u in a)a.hasOwnProperty(u)&&Ar(t,u,a[u])}function Di(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var f1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),r1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function In(t){return r1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ni=null;function Ui(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ee=null,ne=null;function zr(t){var a=Fl(t);if(a&&(t=a.stateNode)){var l=t[aa]||null;t:switch(t=a.stateNode,a.type){case"input":if(xi(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ba(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var e=l[a];if(e!==t&&e.form===t.form){var n=e[aa]||null;if(!n)throw Error(s(90));xi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<l.length;a++)e=l[a],e.form===t.form&&br(e)}break t;case"textarea":Er(t,l.value,l.defaultValue);break t;case"select":a=l.value,a!=null&&ae(t,!!l.multiple,a,!1)}}}var Hi=!1;function _r(t,a,l){if(Hi)return t(a,l);Hi=!0;try{var e=t(a);return e}finally{if(Hi=!1,(ee!==null||ne!==null)&&(Cu(),ee&&(a=ee,t=ne,ne=ee=null,zr(a),t)))for(a=0;a<t.length;a++)zr(t[a])}}function Ze(t,a){var l=t.stateNode;if(l===null)return null;var e=l[aa]||null;if(e===null)return null;l=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(s(231,a,typeof l));return l}var Va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yi=!1;if(Va)try{var Ve={};Object.defineProperty(Ve,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Ve,Ve),window.removeEventListener("test",Ve,Ve)}catch{Yi=!1}var il=null,qi=null,Pn=null;function Mr(){if(Pn)return Pn;var t,a=qi,l=a.length,e,n="value"in il?il.value:il.textContent,u=n.length;for(t=0;t<l&&a[t]===n[t];t++);var c=l-t;for(e=1;e<=c&&a[l-e]===n[u-e];e++);return Pn=n.slice(t,1<e?1-e:void 0)}function tu(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function au(){return!0}function xr(){return!1}function la(t){function a(l,e,n,u,c){this._reactName=l,this._targetInst=n,this.type=e,this.nativeEvent=u,this.target=c,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(l=t[f],this[f]=l?l(u):u[f]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?au:xr,this.isPropagationStopped=xr,this}return M(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=au)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=au)},persist:function(){},isPersistent:au}),a}var Ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=la(Ul),Le=M({},Ul,{view:0,detail:0}),s1=la(Le),ji,Ci,Ke,eu=M({},Le,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ke&&(Ke&&t.type==="mousemove"?(ji=t.screenX-Ke.screenX,Ci=t.screenY-Ke.screenY):Ci=ji=0,Ke=t),ji)},movementY:function(t){return"movementY"in t?t.movementY:Ci}}),Rr=la(eu),o1=M({},eu,{dataTransfer:0}),d1=la(o1),m1=M({},Le,{relatedTarget:0}),Bi=la(m1),y1=M({},Ul,{animationName:0,elapsedTime:0,pseudoElement:0}),h1=la(y1),v1=M({},Ul,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g1=la(v1),p1=M({},Ul,{data:0}),Dr=la(p1),b1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=E1[t])?!!a[t]:!1}function Xi(){return T1}var A1=M({},Le,{key:function(t){if(t.key){var a=b1[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=tu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?S1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xi,charCode:function(t){return t.type==="keypress"?tu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O1=la(A1),z1=M({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nr=la(z1),_1=M({},Le,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xi}),M1=la(_1),x1=M({},Ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),R1=la(x1),D1=M({},eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N1=la(D1),U1=M({},Ul,{newState:0,oldState:0}),H1=la(U1),Y1=[9,13,27,32],Gi=Va&&"CompositionEvent"in window,we=null;Va&&"documentMode"in document&&(we=document.documentMode);var q1=Va&&"TextEvent"in window&&!we,Ur=Va&&(!Gi||we&&8<we&&11>=we),Hr=" ",Yr=!1;function qr(t,a){switch(t){case"keyup":return Y1.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ue=!1;function j1(t,a){switch(t){case"compositionend":return jr(a);case"keypress":return a.which!==32?null:(Yr=!0,Hr);case"textInput":return t=a.data,t===Hr&&Yr?null:t;default:return null}}function C1(t,a){if(ue)return t==="compositionend"||!Gi&&qr(t,a)?(t=Mr(),Pn=qi=il=null,ue=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Ur&&a.locale!=="ko"?null:a.data;default:return null}}var B1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cr(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!B1[t.type]:a==="textarea"}function Br(t,a,l,e){ee?ne?ne.push(e):ne=[e]:ee=e,a=Vu(a,"onChange"),0<a.length&&(l=new lu("onChange","change",null,l,e),t.push({event:l,listeners:a}))}var Je=null,$e=null;function X1(t){b0(t,0)}function nu(t){var a=Qe(t);if(br(a))return t}function Xr(t,a){if(t==="change")return a}var Gr=!1;if(Va){var Qi;if(Va){var Zi="oninput"in document;if(!Zi){var Qr=document.createElement("div");Qr.setAttribute("oninput","return;"),Zi=typeof Qr.oninput=="function"}Qi=Zi}else Qi=!1;Gr=Qi&&(!document.documentMode||9<document.documentMode)}function Zr(){Je&&(Je.detachEvent("onpropertychange",Vr),$e=Je=null)}function Vr(t){if(t.propertyName==="value"&&nu($e)){var a=[];Br(a,$e,t,Ui(t)),_r(X1,a)}}function G1(t,a,l){t==="focusin"?(Zr(),Je=a,$e=l,Je.attachEvent("onpropertychange",Vr)):t==="focusout"&&Zr()}function Q1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nu($e)}function Z1(t,a){if(t==="click")return nu(a)}function V1(t,a){if(t==="input"||t==="change")return nu(a)}function L1(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var sa=typeof Object.is=="function"?Object.is:L1;function We(t,a){if(sa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var l=Object.keys(t),e=Object.keys(a);if(l.length!==e.length)return!1;for(e=0;e<l.length;e++){var n=l[e];if(!gi.call(a,n)||!sa(t[n],a[n]))return!1}return!0}function Lr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kr(t,a){var l=Lr(t);t=0;for(var e;l;){if(l.nodeType===3){if(e=t+l.textContent.length,t<=a&&e>=a)return{node:l,offset:a-t};t=e}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Lr(l)}}function wr(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?wr(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Jr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Fn(t.document);a instanceof t.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)t=a.contentWindow;else break;a=Fn(t.document)}return a}function Vi(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var K1=Va&&"documentMode"in document&&11>=document.documentMode,ie=null,Li=null,ke=null,Ki=!1;function $r(t,a,l){var e=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ki||ie==null||ie!==Fn(e)||(e=ie,"selectionStart"in e&&Vi(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),ke&&We(ke,e)||(ke=e,e=Vu(Li,"onSelect"),0<e.length&&(a=new lu("onSelect","select",null,a,l),t.push({event:a,listeners:e}),a.target=ie)))}function Hl(t,a){var l={};return l[t.toLowerCase()]=a.toLowerCase(),l["Webkit"+t]="webkit"+a,l["Moz"+t]="moz"+a,l}var ce={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionrun:Hl("Transition","TransitionRun"),transitionstart:Hl("Transition","TransitionStart"),transitioncancel:Hl("Transition","TransitionCancel"),transitionend:Hl("Transition","TransitionEnd")},wi={},Wr={};Va&&(Wr=document.createElement("div").style,"AnimationEvent"in window||(delete ce.animationend.animation,delete ce.animationiteration.animation,delete ce.animationstart.animation),"TransitionEvent"in window||delete ce.transitionend.transition);function Yl(t){if(wi[t])return wi[t];if(!ce[t])return t;var a=ce[t],l;for(l in a)if(a.hasOwnProperty(l)&&l in Wr)return wi[t]=a[l];return t}var kr=Yl("animationend"),Fr=Yl("animationiteration"),Ir=Yl("animationstart"),w1=Yl("transitionrun"),J1=Yl("transitionstart"),$1=Yl("transitioncancel"),Pr=Yl("transitionend"),ts=new Map,Ji="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ji.push("scrollEnd");function Ma(t,a){ts.set(t,a),Nl(a,[t])}var as=new WeakMap;function Sa(t,a){if(typeof t=="object"&&t!==null){var l=as.get(t);return l!==void 0?l:(a={value:t,source:a,stack:gr(a)},as.set(t,a),a)}return{value:t,source:a,stack:gr(a)}}var Ea=[],fe=0,$i=0;function uu(){for(var t=fe,a=$i=fe=0;a<t;){var l=Ea[a];Ea[a++]=null;var e=Ea[a];Ea[a++]=null;var n=Ea[a];Ea[a++]=null;var u=Ea[a];if(Ea[a++]=null,e!==null&&n!==null){var c=e.pending;c===null?n.next=n:(n.next=c.next,c.next=n),e.pending=n}u!==0&&ls(l,n,u)}}function iu(t,a,l,e){Ea[fe++]=t,Ea[fe++]=a,Ea[fe++]=l,Ea[fe++]=e,$i|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function Wi(t,a,l,e){return iu(t,a,l,e),cu(t)}function re(t,a){return iu(t,null,null,a),cu(t)}function ls(t,a,l){t.lanes|=l;var e=t.alternate;e!==null&&(e.lanes|=l);for(var n=!1,u=t.return;u!==null;)u.childLanes|=l,e=u.alternate,e!==null&&(e.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&a!==null&&(n=31-ra(l),t=u.hiddenUpdates,e=t[n],e===null?t[n]=[a]:e.push(a),a.lane=l|536870912),u):null}function cu(t){if(50<Tn)throw Tn=0,af=null,Error(s(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var se={};function W1(t,a,l,e){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oa(t,a,l,e){return new W1(t,a,l,e)}function ki(t){return t=t.prototype,!(!t||!t.isReactComponent)}function La(t,a){var l=t.alternate;return l===null?(l=oa(t.tag,a,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=a,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,a=t.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function es(t,a){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,a=l.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function fu(t,a,l,e,n,u){var c=0;if(e=t,typeof t=="function")ki(t)&&(c=1);else if(typeof t=="string")c=Fm(t,l,w.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Da:return t=oa(31,l,a,n),t.elementType=Da,t.lanes=u,t;case Z:return ql(l.children,n,u,a);case q:c=8,n|=24;break;case U:return t=oa(12,l,a,n|2),t.elementType=U,t.lanes=u,t;case D:return t=oa(13,l,a,n),t.elementType=D,t.lanes=u,t;case ct:return t=oa(19,l,a,n),t.elementType=ct,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:case L:c=10;break t;case W:c=9;break t;case gt:c=11;break t;case at:c=14;break t;case ta:c=16,e=null;break t}c=29,l=Error(s(130,t===null?"null":typeof t,"")),e=null}return a=oa(c,l,a,n),a.elementType=t,a.type=e,a.lanes=u,a}function ql(t,a,l,e){return t=oa(7,t,e,a),t.lanes=l,t}function Fi(t,a,l){return t=oa(6,t,null,a),t.lanes=l,t}function Ii(t,a,l){return a=oa(4,t.children!==null?t.children:[],t.key,a),a.lanes=l,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var oe=[],de=0,ru=null,su=0,Ta=[],Aa=0,jl=null,Ka=1,wa="";function Cl(t,a){oe[de++]=su,oe[de++]=ru,ru=t,su=a}function ns(t,a,l){Ta[Aa++]=Ka,Ta[Aa++]=wa,Ta[Aa++]=jl,jl=t;var e=Ka;t=wa;var n=32-ra(e)-1;e&=~(1<<n),l+=1;var u=32-ra(a)+n;if(30<u){var c=n-n%5;u=(e&(1<<c)-1).toString(32),e>>=c,n-=c,Ka=1<<32-ra(a)+n|l<<n|e,wa=u+t}else Ka=1<<u|l<<n|e,wa=t}function Pi(t){t.return!==null&&(Cl(t,1),ns(t,1,0))}function tc(t){for(;t===ru;)ru=oe[--de],oe[de]=null,su=oe[--de],oe[de]=null;for(;t===jl;)jl=Ta[--Aa],Ta[Aa]=null,wa=Ta[--Aa],Ta[Aa]=null,Ka=Ta[--Aa],Ta[Aa]=null}var Pt=null,Rt=null,ot=!1,Bl=null,Ua=!1,ac=Error(s(519));function Xl(t){var a=Error(s(418,""));throw Pe(Sa(a,t)),ac}function us(t){var a=t.stateNode,l=t.type,e=t.memoizedProps;switch(a[Wt]=t,a[aa]=e,l){case"dialog":it("cancel",a),it("close",a);break;case"iframe":case"object":case"embed":it("load",a);break;case"video":case"audio":for(l=0;l<On.length;l++)it(On[l],a);break;case"source":it("error",a);break;case"img":case"image":case"link":it("error",a),it("load",a);break;case"details":it("toggle",a);break;case"input":it("invalid",a),Sr(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0),kn(a);break;case"select":it("invalid",a);break;case"textarea":it("invalid",a),Tr(a,e.value,e.defaultValue,e.children),kn(a)}l=e.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||e.suppressHydrationWarning===!0||A0(a.textContent,l)?(e.popover!=null&&(it("beforetoggle",a),it("toggle",a)),e.onScroll!=null&&it("scroll",a),e.onScrollEnd!=null&&it("scrollend",a),e.onClick!=null&&(a.onclick=Lu),a=!0):a=!1,a||Xl(t)}function is(t){for(Pt=t.return;Pt;)switch(Pt.tag){case 5:case 13:Ua=!1;return;case 27:case 3:Ua=!0;return;default:Pt=Pt.return}}function Fe(t){if(t!==Pt)return!1;if(!ot)return is(t),ot=!0,!1;var a=t.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||pf(t.type,t.memoizedProps)),l=!l),l&&Rt&&Xl(t),is(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(a===0){Rt=Ra(t.nextSibling);break t}a--}else l!=="$"&&l!=="$!"&&l!=="$?"||a++;t=t.nextSibling}Rt=null}}else a===27?(a=Rt,Tl(t.type)?(t=Tf,Tf=null,Rt=t):Rt=a):Rt=Pt?Ra(t.stateNode.nextSibling):null;return!0}function Ie(){Rt=Pt=null,ot=!1}function cs(){var t=Bl;return t!==null&&(ua===null?ua=t:ua.push.apply(ua,t),Bl=null),t}function Pe(t){Bl===null?Bl=[t]:Bl.push(t)}var lc=N(null),Gl=null,Ja=null;function cl(t,a,l){C(lc,a._currentValue),a._currentValue=l}function $a(t){t._currentValue=lc.current,X(lc)}function ec(t,a,l){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===l)break;t=t.return}}function nc(t,a,l,e){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var c=n.child;u=u.firstContext;t:for(;u!==null;){var f=u;u=n;for(var o=0;o<a.length;o++)if(f.context===a[o]){u.lanes|=l,f=u.alternate,f!==null&&(f.lanes|=l),ec(u.return,l,t),e||(c=null);break t}u=f.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(s(341));c.lanes|=l,u=c.alternate,u!==null&&(u.lanes|=l),ec(c,l,t),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===t){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function tn(t,a,l,e){t=null;for(var n=a,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var f=n.type;sa(n.pendingProps.value,c.value)||(t!==null?t.push(f):t=[f])}}else if(n===ca.current){if(c=n.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Dn):t=[Dn])}n=n.return}t!==null&&nc(a,t,l,e),a.flags|=262144}function ou(t){for(t=t.firstContext;t!==null;){if(!sa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ql(t){Gl=t,Ja=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kt(t){return fs(Gl,t)}function du(t,a){return Gl===null&&Ql(t),fs(t,a)}function fs(t,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},Ja===null){if(t===null)throw Error(s(308));Ja=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Ja=Ja.next=a;return l}var k1=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(l,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(l){return l()})}},F1=i.unstable_scheduleCallback,I1=i.unstable_NormalPriority,jt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uc(){return{controller:new k1,data:new Map,refCount:0}}function an(t){t.refCount--,t.refCount===0&&F1(I1,function(){t.controller.abort()})}var ln=null,ic=0,me=0,ye=null;function P1(t,a){if(ln===null){var l=ln=[];ic=0,me=rf(),ye={status:"pending",value:void 0,then:function(e){l.push(e)}}}return ic++,a.then(rs,rs),a}function rs(){if(--ic===0&&ln!==null){ye!==null&&(ye.status="fulfilled");var t=ln;ln=null,me=0,ye=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function tm(t,a){var l=[],e={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var n=0;n<l.length;n++)(0,l[n])(a)},function(n){for(e.status="rejected",e.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),e}var ss=O.S;O.S=function(t,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&P1(t,a),ss!==null&&ss(t,a)};var Zl=N(null);function cc(){var t=Zl.current;return t!==null?t:zt.pooledCache}function mu(t,a){a===null?C(Zl,Zl.current):C(Zl,a.pool)}function os(){var t=cc();return t===null?null:{parent:jt._currentValue,pool:t}}var en=Error(s(460)),ds=Error(s(474)),yu=Error(s(542)),fc={then:function(){}};function ms(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hu(){}function ys(t,a,l){switch(l=t[l],l===void 0?t.push(a):l!==a&&(a.then(hu,hu),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,vs(t),t;default:if(typeof a.status=="string")a.then(hu,hu);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=e}},function(e){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,vs(t),t}throw nn=a,en}}var nn=null;function hs(){if(nn===null)throw Error(s(459));var t=nn;return nn=null,t}function vs(t){if(t===en||t===yu)throw Error(s(483))}var fl=!1;function rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sc(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function rl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function sl(t,a,l){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(pt&2)!==0){var n=e.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a,a=cu(t),ls(t,null,l),a}return iu(t,e,a,l),cu(t)}function un(t,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,l|=e,a.lanes=l,rr(t,l)}}function oc(t,a){var l=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,l===e)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=c:u=u.next=c,l=l.next}while(l!==null);u===null?n=u=a:u=u.next=a}else n=u=a;l={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:e.shared,callbacks:e.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=a:t.next=a,l.lastBaseUpdate=a}var dc=!1;function cn(){if(dc){var t=ye;if(t!==null)throw t}}function fn(t,a,l,e){dc=!1;var n=t.updateQueue;fl=!1;var u=n.firstBaseUpdate,c=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var o=f,b=o.next;o.next=null,c===null?u=b:c.next=b,c=o;var A=t.alternate;A!==null&&(A=A.updateQueue,f=A.lastBaseUpdate,f!==c&&(f===null?A.firstBaseUpdate=b:f.next=b,A.lastBaseUpdate=o))}if(u!==null){var R=n.baseState;c=0,A=b=o=null,f=u;do{var E=f.lane&-536870913,T=E!==f.lane;if(T?(ft&E)===E:(e&E)===E){E!==0&&E===me&&(dc=!0),A!==null&&(A=A.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var F=t,J=f;E=a;var Tt=l;switch(J.tag){case 1:if(F=J.payload,typeof F=="function"){R=F.call(Tt,R,E);break t}R=F;break t;case 3:F.flags=F.flags&-65537|128;case 0:if(F=J.payload,E=typeof F=="function"?F.call(Tt,R,E):F,E==null)break t;R=M({},R,E);break t;case 2:fl=!0}}E=f.callback,E!==null&&(t.flags|=64,T&&(t.flags|=8192),T=n.callbacks,T===null?n.callbacks=[E]:T.push(E))}else T={lane:E,tag:f.tag,payload:f.payload,callback:f.callback,next:null},A===null?(b=A=T,o=R):A=A.next=T,c|=E;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;T=f,f=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);A===null&&(o=R),n.baseState=o,n.firstBaseUpdate=b,n.lastBaseUpdate=A,u===null&&(n.shared.lanes=0),pl|=c,t.lanes=c,t.memoizedState=R}}function gs(t,a){if(typeof t!="function")throw Error(s(191,t));t.call(a)}function ps(t,a){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)gs(l[t],a)}var he=N(null),vu=N(0);function bs(t,a){t=al,C(vu,t),C(he,a),al=t|a.baseLanes}function mc(){C(vu,al),C(he,he.current)}function yc(){al=vu.current,X(he),X(vu)}var ol=0,et=null,St=null,Ht=null,gu=!1,ve=!1,Vl=!1,pu=0,rn=0,ge=null,am=0;function Nt(){throw Error(s(321))}function hc(t,a){if(a===null)return!1;for(var l=0;l<a.length&&l<t.length;l++)if(!sa(t[l],a[l]))return!1;return!0}function vc(t,a,l,e,n,u){return ol=u,et=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,O.H=t===null||t.memoizedState===null?lo:eo,Vl=!1,u=l(e,n),Vl=!1,ve&&(u=Es(a,l,e,n)),Ss(t),u}function Ss(t){O.H=Ou;var a=St!==null&&St.next!==null;if(ol=0,Ht=St=et=null,gu=!1,rn=0,ge=null,a)throw Error(s(300));t===null||Gt||(t=t.dependencies,t!==null&&ou(t)&&(Gt=!0))}function Es(t,a,l,e){et=t;var n=0;do{if(ve&&(ge=null),rn=0,ve=!1,25<=n)throw Error(s(301));if(n+=1,Ht=St=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}O.H=fm,u=a(l,e)}while(ve);return u}function lm(){var t=O.H,a=t.useState()[0];return a=typeof a.then=="function"?sn(a):a,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(et.flags|=1024),a}function gc(){var t=pu!==0;return pu=0,t}function pc(t,a,l){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~l}function bc(t){if(gu){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}gu=!1}ol=0,Ht=St=et=null,ve=!1,rn=pu=0,ge=null}function ea(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?et.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Yt(){if(St===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var a=Ht===null?et.memoizedState:Ht.next;if(a!==null)Ht=a,St=t;else{if(t===null)throw et.alternate===null?Error(s(467)):Error(s(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ht===null?et.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sn(t){var a=rn;return rn+=1,ge===null&&(ge=[]),t=ys(ge,t,a),a=et,(Ht===null?a.memoizedState:Ht.next)===null&&(a=a.alternate,O.H=a===null||a.memoizedState===null?lo:eo),t}function bu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sn(t);if(t.$$typeof===L)return kt(t)}throw Error(s(438,String(t)))}function Ec(t){var a=null,l=et.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var e=et.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=Sc(),et.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(t),e=0;e<t;e++)l[e]=$l;return a.index++,l}function Wa(t,a){return typeof a=="function"?a(t):a}function Su(t){var a=Yt();return Tc(a,St,t)}function Tc(t,a,l){var e=t.queue;if(e===null)throw Error(s(311));e.lastRenderedReducer=l;var n=t.baseQueue,u=e.pending;if(u!==null){if(n!==null){var c=n.next;n.next=u.next,u.next=c}a.baseQueue=n=u,e.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{a=n.next;var f=c=null,o=null,b=a,A=!1;do{var R=b.lane&-536870913;if(R!==b.lane?(ft&R)===R:(ol&R)===R){var E=b.revertLane;if(E===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),R===me&&(A=!0);else if((ol&E)===E){b=b.next,E===me&&(A=!0);continue}else R={lane:0,revertLane:b.revertLane,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},o===null?(f=o=R,c=u):o=o.next=R,et.lanes|=E,pl|=E;R=b.action,Vl&&l(u,R),u=b.hasEagerState?b.eagerState:l(u,R)}else E={lane:R,revertLane:b.revertLane,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},o===null?(f=o=E,c=u):o=o.next=E,et.lanes|=R,pl|=R;b=b.next}while(b!==null&&b!==a);if(o===null?c=u:o.next=f,!sa(u,t.memoizedState)&&(Gt=!0,A&&(l=ye,l!==null)))throw l;t.memoizedState=u,t.baseState=c,t.baseQueue=o,e.lastRenderedState=u}return n===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function Ac(t){var a=Yt(),l=a.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var e=l.dispatch,n=l.pending,u=a.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do u=t(u,c.action),c=c.next;while(c!==n);sa(u,a.memoizedState)||(Gt=!0),a.memoizedState=u,a.baseQueue===null&&(a.baseState=u),l.lastRenderedState=u}return[u,e]}function Ts(t,a,l){var e=et,n=Yt(),u=ot;if(u){if(l===void 0)throw Error(s(407));l=l()}else l=a();var c=!sa((St||n).memoizedState,l);c&&(n.memoizedState=l,Gt=!0),n=n.queue;var f=zs.bind(null,e,n,t);if(on(2048,8,f,[t]),n.getSnapshot!==a||c||Ht!==null&&Ht.memoizedState.tag&1){if(e.flags|=2048,pe(9,Eu(),Os.bind(null,e,n,l,a),null),zt===null)throw Error(s(349));u||(ol&124)!==0||As(e,a,l)}return l}function As(t,a,l){t.flags|=16384,t={getSnapshot:a,value:l},a=et.updateQueue,a===null?(a=Sc(),et.updateQueue=a,a.stores=[t]):(l=a.stores,l===null?a.stores=[t]:l.push(t))}function Os(t,a,l,e){a.value=l,a.getSnapshot=e,_s(a)&&Ms(t)}function zs(t,a,l){return l(function(){_s(a)&&Ms(t)})}function _s(t){var a=t.getSnapshot;t=t.value;try{var l=a();return!sa(t,l)}catch{return!0}}function Ms(t){var a=re(t,2);a!==null&&va(a,t,2)}function Oc(t){var a=ea();if(typeof t=="function"){var l=t;if(t=l(),Vl){nl(!0);try{l()}finally{nl(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},a}function xs(t,a,l,e){return t.baseState=l,Tc(t,St,typeof e=="function"?e:Wa)}function em(t,a,l,e,n){if(Au(t))throw Error(s(485));if(t=a.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){u.listeners.push(c)}};O.T!==null?l(!0):u.isTransition=!1,e(u),l=a.pending,l===null?(u.next=a.pending=u,Rs(a,u)):(u.next=l.next,a.pending=l.next=u)}}function Rs(t,a){var l=a.action,e=a.payload,n=t.state;if(a.isTransition){var u=O.T,c={};O.T=c;try{var f=l(n,e),o=O.S;o!==null&&o(c,f),Ds(t,a,f)}catch(b){zc(t,a,b)}finally{O.T=u}}else try{u=l(n,e),Ds(t,a,u)}catch(b){zc(t,a,b)}}function Ds(t,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(e){Ns(t,a,e)},function(e){return zc(t,a,e)}):Ns(t,a,l)}function Ns(t,a,l){a.status="fulfilled",a.value=l,Us(a),t.state=l,a=t.pending,a!==null&&(l=a.next,l===a?t.pending=null:(l=l.next,a.next=l,Rs(t,l)))}function zc(t,a,l){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=l,Us(a),a=a.next;while(a!==e)}t.action=null}function Us(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Hs(t,a){return a}function Ys(t,a){if(ot){var l=zt.formState;if(l!==null){t:{var e=et;if(ot){if(Rt){a:{for(var n=Rt,u=Ua;n.nodeType!==8;){if(!u){n=null;break a}if(n=Ra(n.nextSibling),n===null){n=null;break a}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){Rt=Ra(n.nextSibling),e=n.data==="F!";break t}}Xl(e)}e=!1}e&&(a=l[0])}}return l=ea(),l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:a},l.queue=e,l=Ps.bind(null,et,e),e.dispatch=l,e=Oc(!1),u=Dc.bind(null,et,!1,e.queue),e=ea(),n={state:a,dispatch:null,action:t,pending:null},e.queue=n,l=em.bind(null,et,n,u,l),n.dispatch=l,e.memoizedState=t,[a,l,!1]}function qs(t){var a=Yt();return js(a,St,t)}function js(t,a,l){if(a=Tc(t,a,Hs)[0],t=Su(Wa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=sn(a)}catch(c){throw c===en?yu:c}else e=a;a=Yt();var n=a.queue,u=n.dispatch;return l!==a.memoizedState&&(et.flags|=2048,pe(9,Eu(),nm.bind(null,n,l),null)),[e,u,t]}function nm(t,a){t.action=a}function Cs(t){var a=Yt(),l=St;if(l!==null)return js(a,l,t);Yt(),a=a.memoizedState,l=Yt();var e=l.queue.dispatch;return l.memoizedState=t,[a,e,!1]}function pe(t,a,l,e){return t={tag:t,create:l,deps:e,inst:a,next:null},a=et.updateQueue,a===null&&(a=Sc(),et.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=t.next=t:(e=l.next,l.next=t,t.next=e,a.lastEffect=t),t}function Eu(){return{destroy:void 0,resource:void 0}}function Bs(){return Yt().memoizedState}function Tu(t,a,l,e){var n=ea();e=e===void 0?null:e,et.flags|=t,n.memoizedState=pe(1|a,Eu(),l,e)}function on(t,a,l,e){var n=Yt();e=e===void 0?null:e;var u=n.memoizedState.inst;St!==null&&e!==null&&hc(e,St.memoizedState.deps)?n.memoizedState=pe(a,u,l,e):(et.flags|=t,n.memoizedState=pe(1|a,u,l,e))}function Xs(t,a){Tu(8390656,8,t,a)}function Gs(t,a){on(2048,8,t,a)}function Qs(t,a){return on(4,2,t,a)}function Zs(t,a){return on(4,4,t,a)}function Vs(t,a){if(typeof a=="function"){t=t();var l=a(t);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Ls(t,a,l){l=l!=null?l.concat([t]):null,on(4,4,Vs.bind(null,a,t),l)}function _c(){}function Ks(t,a){var l=Yt();a=a===void 0?null:a;var e=l.memoizedState;return a!==null&&hc(a,e[1])?e[0]:(l.memoizedState=[t,a],t)}function ws(t,a){var l=Yt();a=a===void 0?null:a;var e=l.memoizedState;if(a!==null&&hc(a,e[1]))return e[0];if(e=t(),Vl){nl(!0);try{t()}finally{nl(!1)}}return l.memoizedState=[e,a],e}function Mc(t,a,l){return l===void 0||(ol&1073741824)!==0?t.memoizedState=a:(t.memoizedState=l,t=ko(),et.lanes|=t,pl|=t,l)}function Js(t,a,l,e){return sa(l,a)?l:he.current!==null?(t=Mc(t,l,e),sa(t,a)||(Gt=!0),t):(ol&42)===0?(Gt=!0,t.memoizedState=l):(t=ko(),et.lanes|=t,pl|=t,a)}function $s(t,a,l,e,n){var u=B.p;B.p=u!==0&&8>u?u:8;var c=O.T,f={};O.T=f,Dc(t,!1,a,l);try{var o=n(),b=O.S;if(b!==null&&b(f,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var A=tm(o,e);dn(t,a,A,ha(t))}else dn(t,a,e,ha(t))}catch(R){dn(t,a,{then:function(){},status:"rejected",reason:R},ha())}finally{B.p=u,O.T=c}}function um(){}function xc(t,a,l,e){if(t.tag!==5)throw Error(s(476));var n=Ws(t).queue;$s(t,n,a,k,l===null?um:function(){return ks(t),l(e)})}function Ws(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:k},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:l},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function ks(t){var a=Ws(t).next.queue;dn(t,a,{},ha())}function Rc(){return kt(Dn)}function Fs(){return Yt().memoizedState}function Is(){return Yt().memoizedState}function im(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var l=ha();t=rl(l);var e=sl(a,t,l);e!==null&&(va(e,a,l),un(e,a,l)),a={cache:uc()},t.payload=a;return}a=a.return}}function cm(t,a,l){var e=ha();l={lane:e,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Au(t)?to(a,l):(l=Wi(t,a,l,e),l!==null&&(va(l,t,e),ao(l,a,e)))}function Ps(t,a,l){var e=ha();dn(t,a,l,e)}function dn(t,a,l,e){var n={lane:e,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Au(t))to(a,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=a.lastRenderedReducer,u!==null))try{var c=a.lastRenderedState,f=u(c,l);if(n.hasEagerState=!0,n.eagerState=f,sa(f,c))return iu(t,a,n,0),zt===null&&uu(),!1}catch{}finally{}if(l=Wi(t,a,n,e),l!==null)return va(l,t,e),ao(l,a,e),!0}return!1}function Dc(t,a,l,e){if(e={lane:2,revertLane:rf(),action:e,hasEagerState:!1,eagerState:null,next:null},Au(t)){if(a)throw Error(s(479))}else a=Wi(t,l,e,2),a!==null&&va(a,t,2)}function Au(t){var a=t.alternate;return t===et||a!==null&&a===et}function to(t,a){ve=gu=!0;var l=t.pending;l===null?a.next=a:(a.next=l.next,l.next=a),t.pending=a}function ao(t,a,l){if((l&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,l|=e,a.lanes=l,rr(t,l)}}var Ou={readContext:kt,use:bu,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useLayoutEffect:Nt,useInsertionEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useSyncExternalStore:Nt,useId:Nt,useHostTransitionStatus:Nt,useFormState:Nt,useActionState:Nt,useOptimistic:Nt,useMemoCache:Nt,useCacheRefresh:Nt},lo={readContext:kt,use:bu,useCallback:function(t,a){return ea().memoizedState=[t,a===void 0?null:a],t},useContext:kt,useEffect:Xs,useImperativeHandle:function(t,a,l){l=l!=null?l.concat([t]):null,Tu(4194308,4,Vs.bind(null,a,t),l)},useLayoutEffect:function(t,a){return Tu(4194308,4,t,a)},useInsertionEffect:function(t,a){Tu(4,2,t,a)},useMemo:function(t,a){var l=ea();a=a===void 0?null:a;var e=t();if(Vl){nl(!0);try{t()}finally{nl(!1)}}return l.memoizedState=[e,a],e},useReducer:function(t,a,l){var e=ea();if(l!==void 0){var n=l(a);if(Vl){nl(!0);try{l(a)}finally{nl(!1)}}}else n=a;return e.memoizedState=e.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},e.queue=t,t=t.dispatch=cm.bind(null,et,t),[e.memoizedState,t]},useRef:function(t){var a=ea();return t={current:t},a.memoizedState=t},useState:function(t){t=Oc(t);var a=t.queue,l=Ps.bind(null,et,a);return a.dispatch=l,[t.memoizedState,l]},useDebugValue:_c,useDeferredValue:function(t,a){var l=ea();return Mc(l,t,a)},useTransition:function(){var t=Oc(!1);return t=$s.bind(null,et,t.queue,!0,!1),ea().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,l){var e=et,n=ea();if(ot){if(l===void 0)throw Error(s(407));l=l()}else{if(l=a(),zt===null)throw Error(s(349));(ft&124)!==0||As(e,a,l)}n.memoizedState=l;var u={value:l,getSnapshot:a};return n.queue=u,Xs(zs.bind(null,e,u,t),[t]),e.flags|=2048,pe(9,Eu(),Os.bind(null,e,u,l,a),null),l},useId:function(){var t=ea(),a=zt.identifierPrefix;if(ot){var l=wa,e=Ka;l=(e&~(1<<32-ra(e)-1)).toString(32)+l,a="«"+a+"R"+l,l=pu++,0<l&&(a+="H"+l.toString(32)),a+="»"}else l=am++,a="«"+a+"r"+l.toString(32)+"»";return t.memoizedState=a},useHostTransitionStatus:Rc,useFormState:Ys,useActionState:Ys,useOptimistic:function(t){var a=ea();a.memoizedState=a.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=Dc.bind(null,et,!0,l),l.dispatch=a,[t,a]},useMemoCache:Ec,useCacheRefresh:function(){return ea().memoizedState=im.bind(null,et)}},eo={readContext:kt,use:bu,useCallback:Ks,useContext:kt,useEffect:Gs,useImperativeHandle:Ls,useInsertionEffect:Qs,useLayoutEffect:Zs,useMemo:ws,useReducer:Su,useRef:Bs,useState:function(){return Su(Wa)},useDebugValue:_c,useDeferredValue:function(t,a){var l=Yt();return Js(l,St.memoizedState,t,a)},useTransition:function(){var t=Su(Wa)[0],a=Yt().memoizedState;return[typeof t=="boolean"?t:sn(t),a]},useSyncExternalStore:Ts,useId:Fs,useHostTransitionStatus:Rc,useFormState:qs,useActionState:qs,useOptimistic:function(t,a){var l=Yt();return xs(l,St,t,a)},useMemoCache:Ec,useCacheRefresh:Is},fm={readContext:kt,use:bu,useCallback:Ks,useContext:kt,useEffect:Gs,useImperativeHandle:Ls,useInsertionEffect:Qs,useLayoutEffect:Zs,useMemo:ws,useReducer:Ac,useRef:Bs,useState:function(){return Ac(Wa)},useDebugValue:_c,useDeferredValue:function(t,a){var l=Yt();return St===null?Mc(l,t,a):Js(l,St.memoizedState,t,a)},useTransition:function(){var t=Ac(Wa)[0],a=Yt().memoizedState;return[typeof t=="boolean"?t:sn(t),a]},useSyncExternalStore:Ts,useId:Fs,useHostTransitionStatus:Rc,useFormState:Cs,useActionState:Cs,useOptimistic:function(t,a){var l=Yt();return St!==null?xs(l,St,t,a):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Ec,useCacheRefresh:Is},be=null,mn=0;function zu(t){var a=mn;return mn+=1,be===null&&(be=[]),ys(be,t,a)}function yn(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function _u(t,a){throw a.$$typeof===j?Error(s(525)):(t=Object.prototype.toString.call(a),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function no(t){var a=t._init;return a(t._payload)}function uo(t){function a(v,y){if(t){var g=v.deletions;g===null?(v.deletions=[y],v.flags|=16):g.push(y)}}function l(v,y){if(!t)return null;for(;y!==null;)a(v,y),y=y.sibling;return null}function e(v){for(var y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function n(v,y){return v=La(v,y),v.index=0,v.sibling=null,v}function u(v,y,g){return v.index=g,t?(g=v.alternate,g!==null?(g=g.index,g<y?(v.flags|=67108866,y):g):(v.flags|=67108866,y)):(v.flags|=1048576,y)}function c(v){return t&&v.alternate===null&&(v.flags|=67108866),v}function f(v,y,g,_){return y===null||y.tag!==6?(y=Fi(g,v.mode,_),y.return=v,y):(y=n(y,g),y.return=v,y)}function o(v,y,g,_){var G=g.type;return G===Z?A(v,y,g.props.children,_,g.key):y!==null&&(y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===ta&&no(G)===y.type)?(y=n(y,g.props),yn(y,g),y.return=v,y):(y=fu(g.type,g.key,g.props,null,v.mode,_),yn(y,g),y.return=v,y)}function b(v,y,g,_){return y===null||y.tag!==4||y.stateNode.containerInfo!==g.containerInfo||y.stateNode.implementation!==g.implementation?(y=Ii(g,v.mode,_),y.return=v,y):(y=n(y,g.children||[]),y.return=v,y)}function A(v,y,g,_,G){return y===null||y.tag!==7?(y=ql(g,v.mode,_,G),y.return=v,y):(y=n(y,g),y.return=v,y)}function R(v,y,g){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Fi(""+y,v.mode,g),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:return g=fu(y.type,y.key,y.props,null,v.mode,g),yn(g,y),g.return=v,g;case I:return y=Ii(y,v.mode,g),y.return=v,y;case ta:var _=y._init;return y=_(y._payload),R(v,y,g)}if($t(y)||Jt(y))return y=ql(y,v.mode,g,null),y.return=v,y;if(typeof y.then=="function")return R(v,zu(y),g);if(y.$$typeof===L)return R(v,du(v,y),g);_u(v,y)}return null}function E(v,y,g,_){var G=y!==null?y.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return G!==null?null:f(v,y,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Q:return g.key===G?o(v,y,g,_):null;case I:return g.key===G?b(v,y,g,_):null;case ta:return G=g._init,g=G(g._payload),E(v,y,g,_)}if($t(g)||Jt(g))return G!==null?null:A(v,y,g,_,null);if(typeof g.then=="function")return E(v,y,zu(g),_);if(g.$$typeof===L)return E(v,y,du(v,g),_);_u(v,g)}return null}function T(v,y,g,_,G){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return v=v.get(g)||null,f(y,v,""+_,G);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Q:return v=v.get(_.key===null?g:_.key)||null,o(y,v,_,G);case I:return v=v.get(_.key===null?g:_.key)||null,b(y,v,_,G);case ta:var nt=_._init;return _=nt(_._payload),T(v,y,g,_,G)}if($t(_)||Jt(_))return v=v.get(g)||null,A(y,v,_,G,null);if(typeof _.then=="function")return T(v,y,g,zu(_),G);if(_.$$typeof===L)return T(v,y,g,du(y,_),G);_u(y,_)}return null}function F(v,y,g,_){for(var G=null,nt=null,V=y,$=y=0,Zt=null;V!==null&&$<g.length;$++){V.index>$?(Zt=V,V=null):Zt=V.sibling;var st=E(v,V,g[$],_);if(st===null){V===null&&(V=Zt);break}t&&V&&st.alternate===null&&a(v,V),y=u(st,y,$),nt===null?G=st:nt.sibling=st,nt=st,V=Zt}if($===g.length)return l(v,V),ot&&Cl(v,$),G;if(V===null){for(;$<g.length;$++)V=R(v,g[$],_),V!==null&&(y=u(V,y,$),nt===null?G=V:nt.sibling=V,nt=V);return ot&&Cl(v,$),G}for(V=e(V);$<g.length;$++)Zt=T(V,v,$,g[$],_),Zt!==null&&(t&&Zt.alternate!==null&&V.delete(Zt.key===null?$:Zt.key),y=u(Zt,y,$),nt===null?G=Zt:nt.sibling=Zt,nt=Zt);return t&&V.forEach(function(Ml){return a(v,Ml)}),ot&&Cl(v,$),G}function J(v,y,g,_){if(g==null)throw Error(s(151));for(var G=null,nt=null,V=y,$=y=0,Zt=null,st=g.next();V!==null&&!st.done;$++,st=g.next()){V.index>$?(Zt=V,V=null):Zt=V.sibling;var Ml=E(v,V,st.value,_);if(Ml===null){V===null&&(V=Zt);break}t&&V&&Ml.alternate===null&&a(v,V),y=u(Ml,y,$),nt===null?G=Ml:nt.sibling=Ml,nt=Ml,V=Zt}if(st.done)return l(v,V),ot&&Cl(v,$),G;if(V===null){for(;!st.done;$++,st=g.next())st=R(v,st.value,_),st!==null&&(y=u(st,y,$),nt===null?G=st:nt.sibling=st,nt=st);return ot&&Cl(v,$),G}for(V=e(V);!st.done;$++,st=g.next())st=T(V,v,$,st.value,_),st!==null&&(t&&st.alternate!==null&&V.delete(st.key===null?$:st.key),y=u(st,y,$),nt===null?G=st:nt.sibling=st,nt=st);return t&&V.forEach(function(ry){return a(v,ry)}),ot&&Cl(v,$),G}function Tt(v,y,g,_){if(typeof g=="object"&&g!==null&&g.type===Z&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Q:t:{for(var G=g.key;y!==null;){if(y.key===G){if(G=g.type,G===Z){if(y.tag===7){l(v,y.sibling),_=n(y,g.props.children),_.return=v,v=_;break t}}else if(y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===ta&&no(G)===y.type){l(v,y.sibling),_=n(y,g.props),yn(_,g),_.return=v,v=_;break t}l(v,y);break}else a(v,y);y=y.sibling}g.type===Z?(_=ql(g.props.children,v.mode,_,g.key),_.return=v,v=_):(_=fu(g.type,g.key,g.props,null,v.mode,_),yn(_,g),_.return=v,v=_)}return c(v);case I:t:{for(G=g.key;y!==null;){if(y.key===G)if(y.tag===4&&y.stateNode.containerInfo===g.containerInfo&&y.stateNode.implementation===g.implementation){l(v,y.sibling),_=n(y,g.children||[]),_.return=v,v=_;break t}else{l(v,y);break}else a(v,y);y=y.sibling}_=Ii(g,v.mode,_),_.return=v,v=_}return c(v);case ta:return G=g._init,g=G(g._payload),Tt(v,y,g,_)}if($t(g))return F(v,y,g,_);if(Jt(g)){if(G=Jt(g),typeof G!="function")throw Error(s(150));return g=G.call(g),J(v,y,g,_)}if(typeof g.then=="function")return Tt(v,y,zu(g),_);if(g.$$typeof===L)return Tt(v,y,du(v,g),_);_u(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,y!==null&&y.tag===6?(l(v,y.sibling),_=n(y,g),_.return=v,v=_):(l(v,y),_=Fi(g,v.mode,_),_.return=v,v=_),c(v)):l(v,y)}return function(v,y,g,_){try{mn=0;var G=Tt(v,y,g,_);return be=null,G}catch(V){if(V===en||V===yu)throw V;var nt=oa(29,V,null,v.mode);return nt.lanes=_,nt.return=v,nt}finally{}}}var Se=uo(!0),io=uo(!1),Oa=N(null),Ha=null;function dl(t){var a=t.alternate;C(Ct,Ct.current&1),C(Oa,t),Ha===null&&(a===null||he.current!==null||a.memoizedState!==null)&&(Ha=t)}function co(t){if(t.tag===22){if(C(Ct,Ct.current),C(Oa,t),Ha===null){var a=t.alternate;a!==null&&a.memoizedState!==null&&(Ha=t)}}else ml()}function ml(){C(Ct,Ct.current),C(Oa,Oa.current)}function ka(t){X(Oa),Ha===t&&(Ha=null),X(Ct)}var Ct=N(0);function Mu(t){for(var a=t;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Ef(l)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Nc(t,a,l,e){a=t.memoizedState,l=l(e,a),l=l==null?a:M({},a,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Uc={enqueueSetState:function(t,a,l){t=t._reactInternals;var e=ha(),n=rl(e);n.payload=a,l!=null&&(n.callback=l),a=sl(t,n,e),a!==null&&(va(a,t,e),un(a,t,e))},enqueueReplaceState:function(t,a,l){t=t._reactInternals;var e=ha(),n=rl(e);n.tag=1,n.payload=a,l!=null&&(n.callback=l),a=sl(t,n,e),a!==null&&(va(a,t,e),un(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var l=ha(),e=rl(l);e.tag=2,a!=null&&(e.callback=a),a=sl(t,e,l),a!==null&&(va(a,t,l),un(a,t,l))}};function fo(t,a,l,e,n,u,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,u,c):a.prototype&&a.prototype.isPureReactComponent?!We(l,e)||!We(n,u):!0}function ro(t,a,l,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,e),a.state!==t&&Uc.enqueueReplaceState(a,a.state,null)}function Ll(t,a){var l=a;if("ref"in a){l={};for(var e in a)e!=="ref"&&(l[e]=a[e])}if(t=t.defaultProps){l===a&&(l=M({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}var xu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function so(t){xu(t)}function oo(t){console.error(t)}function mo(t){xu(t)}function Ru(t,a){try{var l=t.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function yo(t,a,l){try{var e=t.onCaughtError;e(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Hc(t,a,l){return l=rl(l),l.tag=3,l.payload={element:null},l.callback=function(){Ru(t,a)},l}function ho(t){return t=rl(t),t.tag=3,t}function vo(t,a,l,e){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=e.value;t.payload=function(){return n(u)},t.callback=function(){yo(a,l,e)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){yo(a,l,e),typeof n!="function"&&(bl===null?bl=new Set([this]):bl.add(this));var f=e.stack;this.componentDidCatch(e.value,{componentStack:f!==null?f:""})})}function rm(t,a,l,e,n){if(l.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=l.alternate,a!==null&&tn(a,l,n,!0),l=Oa.current,l!==null){switch(l.tag){case 13:return Ha===null?ef():l.alternate===null&&Dt===0&&(Dt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,e===fc?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([e]):a.add(e),uf(t,e,n)),!1;case 22:return l.flags|=65536,e===fc?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([e]):l.add(e)),uf(t,e,n)),!1}throw Error(s(435,l.tag))}return uf(t,e,n),ef(),!1}if(ot)return a=Oa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,e!==ac&&(t=Error(s(422),{cause:e}),Pe(Sa(t,l)))):(e!==ac&&(a=Error(s(423),{cause:e}),Pe(Sa(a,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,e=Sa(e,l),n=Hc(t.stateNode,e,n),oc(t,n),Dt!==4&&(Dt=2)),!1;var u=Error(s(520),{cause:e});if(u=Sa(u,l),En===null?En=[u]:En.push(u),Dt!==4&&(Dt=2),a===null)return!0;e=Sa(e,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=Hc(l.stateNode,e,t),oc(l,t),!1;case 1:if(a=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(bl===null||!bl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=ho(n),vo(n,t,l,e),oc(l,n),!1}l=l.return}while(l!==null);return!1}var go=Error(s(461)),Gt=!1;function Vt(t,a,l,e){a.child=t===null?io(a,null,l,e):Se(a,t.child,l,e)}function po(t,a,l,e,n){l=l.render;var u=a.ref;if("ref"in e){var c={};for(var f in e)f!=="ref"&&(c[f]=e[f])}else c=e;return Ql(a),e=vc(t,a,l,c,u,n),f=gc(),t!==null&&!Gt?(pc(t,a,n),Fa(t,a,n)):(ot&&f&&Pi(a),a.flags|=1,Vt(t,a,e,n),a.child)}function bo(t,a,l,e,n){if(t===null){var u=l.type;return typeof u=="function"&&!ki(u)&&u.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=u,So(t,a,u,e,n)):(t=fu(l.type,null,e,a,a.mode,n),t.ref=a.ref,t.return=a,a.child=t)}if(u=t.child,!Qc(t,n)){var c=u.memoizedProps;if(l=l.compare,l=l!==null?l:We,l(c,e)&&t.ref===a.ref)return Fa(t,a,n)}return a.flags|=1,t=La(u,e),t.ref=a.ref,t.return=a,a.child=t}function So(t,a,l,e,n){if(t!==null){var u=t.memoizedProps;if(We(u,e)&&t.ref===a.ref)if(Gt=!1,a.pendingProps=e=u,Qc(t,n))(t.flags&131072)!==0&&(Gt=!0);else return a.lanes=t.lanes,Fa(t,a,n)}return Yc(t,a,l,e,n)}function Eo(t,a,l){var e=a.pendingProps,n=e.children,u=t!==null?t.memoizedState:null;if(e.mode==="hidden"){if((a.flags&128)!==0){if(e=u!==null?u.baseLanes|l:l,t!==null){for(n=a.child=t.child,u=0;n!==null;)u=u|n.lanes|n.childLanes,n=n.sibling;a.childLanes=u&~e}else a.childLanes=0,a.child=null;return To(t,a,e,l)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&mu(a,u!==null?u.cachePool:null),u!==null?bs(a,u):mc(),co(a);else return a.lanes=a.childLanes=536870912,To(t,a,u!==null?u.baseLanes|l:l,l)}else u!==null?(mu(a,u.cachePool),bs(a,u),ml(),a.memoizedState=null):(t!==null&&mu(a,null),mc(),ml());return Vt(t,a,n,l),a.child}function To(t,a,l,e){var n=cc();return n=n===null?null:{parent:jt._currentValue,pool:n},a.memoizedState={baseLanes:l,cachePool:n},t!==null&&mu(a,null),mc(),co(a),t!==null&&tn(t,a,e,!0),null}function Du(t,a){var l=a.ref;if(l===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(t===null||t.ref!==l)&&(a.flags|=4194816)}}function Yc(t,a,l,e,n){return Ql(a),l=vc(t,a,l,e,void 0,n),e=gc(),t!==null&&!Gt?(pc(t,a,n),Fa(t,a,n)):(ot&&e&&Pi(a),a.flags|=1,Vt(t,a,l,n),a.child)}function Ao(t,a,l,e,n,u){return Ql(a),a.updateQueue=null,l=Es(a,e,l,n),Ss(t),e=gc(),t!==null&&!Gt?(pc(t,a,u),Fa(t,a,u)):(ot&&e&&Pi(a),a.flags|=1,Vt(t,a,l,u),a.child)}function Oo(t,a,l,e,n){if(Ql(a),a.stateNode===null){var u=se,c=l.contextType;typeof c=="object"&&c!==null&&(u=kt(c)),u=new l(e,u),a.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Uc,a.stateNode=u,u._reactInternals=a,u=a.stateNode,u.props=e,u.state=a.memoizedState,u.refs={},rc(a),c=l.contextType,u.context=typeof c=="object"&&c!==null?kt(c):se,u.state=a.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(Nc(a,l,c,e),u.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(c=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),c!==u.state&&Uc.enqueueReplaceState(u,u.state,null),fn(a,e,u,n),cn(),u.state=a.memoizedState),typeof u.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){u=a.stateNode;var f=a.memoizedProps,o=Ll(l,f);u.props=o;var b=u.context,A=l.contextType;c=se,typeof A=="object"&&A!==null&&(c=kt(A));var R=l.getDerivedStateFromProps;A=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function",f=a.pendingProps!==f,A||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f||b!==c)&&ro(a,u,e,c),fl=!1;var E=a.memoizedState;u.state=E,fn(a,e,u,n),cn(),b=a.memoizedState,f||E!==b||fl?(typeof R=="function"&&(Nc(a,l,R,e),b=a.memoizedState),(o=fl||fo(a,l,o,e,E,b,c))?(A||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=b),u.props=e,u.state=b,u.context=c,e=o):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{u=a.stateNode,sc(t,a),c=a.memoizedProps,A=Ll(l,c),u.props=A,R=a.pendingProps,E=u.context,b=l.contextType,o=se,typeof b=="object"&&b!==null&&(o=kt(b)),f=l.getDerivedStateFromProps,(b=typeof f=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==R||E!==o)&&ro(a,u,e,o),fl=!1,E=a.memoizedState,u.state=E,fn(a,e,u,n),cn();var T=a.memoizedState;c!==R||E!==T||fl||t!==null&&t.dependencies!==null&&ou(t.dependencies)?(typeof f=="function"&&(Nc(a,l,f,e),T=a.memoizedState),(A=fl||fo(a,l,A,e,E,T,o)||t!==null&&t.dependencies!==null&&ou(t.dependencies))?(b||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(e,T,o),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(e,T,o)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=T),u.props=e,u.state=T,u.context=o,e=A):(typeof u.componentDidUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&E===t.memoizedState||(a.flags|=1024),e=!1)}return u=e,Du(t,a),e=(a.flags&128)!==0,u||e?(u=a.stateNode,l=e&&typeof l.getDerivedStateFromError!="function"?null:u.render(),a.flags|=1,t!==null&&e?(a.child=Se(a,t.child,null,n),a.child=Se(a,null,l,n)):Vt(t,a,l,n),a.memoizedState=u.state,t=a.child):t=Fa(t,a,n),t}function zo(t,a,l,e){return Ie(),a.flags|=256,Vt(t,a,l,e),a.child}var qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jc(t){return{baseLanes:t,cachePool:os()}}function Cc(t,a,l){return t=t!==null?t.childLanes&~l:0,a&&(t|=za),t}function _o(t,a,l){var e=a.pendingProps,n=!1,u=(a.flags&128)!==0,c;if((c=u)||(c=t!==null&&t.memoizedState===null?!1:(Ct.current&2)!==0),c&&(n=!0,a.flags&=-129),c=(a.flags&32)!==0,a.flags&=-33,t===null){if(ot){if(n?dl(a):ml(),ot){var f=Rt,o;if(o=f){t:{for(o=f,f=Ua;o.nodeType!==8;){if(!f){f=null;break t}if(o=Ra(o.nextSibling),o===null){f=null;break t}}f=o}f!==null?(a.memoizedState={dehydrated:f,treeContext:jl!==null?{id:Ka,overflow:wa}:null,retryLane:536870912,hydrationErrors:null},o=oa(18,null,null,0),o.stateNode=f,o.return=a,a.child=o,Pt=a,Rt=null,o=!0):o=!1}o||Xl(a)}if(f=a.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Ef(f)?a.lanes=32:a.lanes=536870912,null;ka(a)}return f=e.children,e=e.fallback,n?(ml(),n=a.mode,f=Nu({mode:"hidden",children:f},n),e=ql(e,n,l,null),f.return=a,e.return=a,f.sibling=e,a.child=f,n=a.child,n.memoizedState=jc(l),n.childLanes=Cc(t,c,l),a.memoizedState=qc,e):(dl(a),Bc(a,f))}if(o=t.memoizedState,o!==null&&(f=o.dehydrated,f!==null)){if(u)a.flags&256?(dl(a),a.flags&=-257,a=Xc(t,a,l)):a.memoizedState!==null?(ml(),a.child=t.child,a.flags|=128,a=null):(ml(),n=e.fallback,f=a.mode,e=Nu({mode:"visible",children:e.children},f),n=ql(n,f,l,null),n.flags|=2,e.return=a,n.return=a,e.sibling=n,a.child=e,Se(a,t.child,null,l),e=a.child,e.memoizedState=jc(l),e.childLanes=Cc(t,c,l),a.memoizedState=qc,a=n);else if(dl(a),Ef(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var b=c.dgst;c=b,e=Error(s(419)),e.stack="",e.digest=c,Pe({value:e,source:null,stack:null}),a=Xc(t,a,l)}else if(Gt||tn(t,a,l,!1),c=(l&t.childLanes)!==0,Gt||c){if(c=zt,c!==null&&(e=l&-l,e=(e&42)!==0?1:Ei(e),e=(e&(c.suspendedLanes|l))!==0?0:e,e!==0&&e!==o.retryLane))throw o.retryLane=e,re(t,e),va(c,t,e),go;f.data==="$?"||ef(),a=Xc(t,a,l)}else f.data==="$?"?(a.flags|=192,a.child=t.child,a=null):(t=o.treeContext,Rt=Ra(f.nextSibling),Pt=a,ot=!0,Bl=null,Ua=!1,t!==null&&(Ta[Aa++]=Ka,Ta[Aa++]=wa,Ta[Aa++]=jl,Ka=t.id,wa=t.overflow,jl=a),a=Bc(a,e.children),a.flags|=4096);return a}return n?(ml(),n=e.fallback,f=a.mode,o=t.child,b=o.sibling,e=La(o,{mode:"hidden",children:e.children}),e.subtreeFlags=o.subtreeFlags&65011712,b!==null?n=La(b,n):(n=ql(n,f,l,null),n.flags|=2),n.return=a,e.return=a,e.sibling=n,a.child=e,e=n,n=a.child,f=t.child.memoizedState,f===null?f=jc(l):(o=f.cachePool,o!==null?(b=jt._currentValue,o=o.parent!==b?{parent:b,pool:b}:o):o=os(),f={baseLanes:f.baseLanes|l,cachePool:o}),n.memoizedState=f,n.childLanes=Cc(t,c,l),a.memoizedState=qc,e):(dl(a),l=t.child,t=l.sibling,l=La(l,{mode:"visible",children:e.children}),l.return=a,l.sibling=null,t!==null&&(c=a.deletions,c===null?(a.deletions=[t],a.flags|=16):c.push(t)),a.child=l,a.memoizedState=null,l)}function Bc(t,a){return a=Nu({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Nu(t,a){return t=oa(22,t,null,a),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Xc(t,a,l){return Se(a,t.child,null,l),t=Bc(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Mo(t,a,l){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),ec(t.return,a,l)}function Gc(t,a,l,e,n){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:l,tailMode:n}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=e,u.tail=l,u.tailMode=n)}function xo(t,a,l){var e=a.pendingProps,n=e.revealOrder,u=e.tail;if(Vt(t,a,e.children,l),e=Ct.current,(e&2)!==0)e=e&1|2,a.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mo(t,l,a);else if(t.tag===19)Mo(t,l,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}e&=1}switch(C(Ct,e),n){case"forwards":for(l=a.child,n=null;l!==null;)t=l.alternate,t!==null&&Mu(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=a.child,a.child=null):(n=l.sibling,l.sibling=null),Gc(a,!1,n,l,u);break;case"backwards":for(l=null,n=a.child,a.child=null;n!==null;){if(t=n.alternate,t!==null&&Mu(t)===null){a.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}Gc(a,!0,l,null,u);break;case"together":Gc(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Fa(t,a,l){if(t!==null&&(a.dependencies=t.dependencies),pl|=a.lanes,(l&a.childLanes)===0)if(t!==null){if(tn(t,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(s(153));if(a.child!==null){for(t=a.child,l=La(t,t.pendingProps),a.child=l,l.return=a;t.sibling!==null;)t=t.sibling,l=l.sibling=La(t,t.pendingProps),l.return=a;l.sibling=null}return a.child}function Qc(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&ou(t)))}function sm(t,a,l){switch(a.tag){case 3:_t(a,a.stateNode.containerInfo),cl(a,jt,t.memoizedState.cache),Ie();break;case 27:case 5:vi(a);break;case 4:_t(a,a.stateNode.containerInfo);break;case 10:cl(a,a.type,a.memoizedProps.value);break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(dl(a),a.flags|=128,null):(l&a.child.childLanes)!==0?_o(t,a,l):(dl(a),t=Fa(t,a,l),t!==null?t.sibling:null);dl(a);break;case 19:var n=(t.flags&128)!==0;if(e=(l&a.childLanes)!==0,e||(tn(t,a,l,!1),e=(l&a.childLanes)!==0),n){if(e)return xo(t,a,l);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),C(Ct,Ct.current),e)break;return null;case 22:case 23:return a.lanes=0,Eo(t,a,l);case 24:cl(a,jt,t.memoizedState.cache)}return Fa(t,a,l)}function Ro(t,a,l){if(t!==null)if(t.memoizedProps!==a.pendingProps)Gt=!0;else{if(!Qc(t,l)&&(a.flags&128)===0)return Gt=!1,sm(t,a,l);Gt=(t.flags&131072)!==0}else Gt=!1,ot&&(a.flags&1048576)!==0&&ns(a,su,a.index);switch(a.lanes=0,a.tag){case 16:t:{t=a.pendingProps;var e=a.elementType,n=e._init;if(e=n(e._payload),a.type=e,typeof e=="function")ki(e)?(t=Ll(e,t),a.tag=1,a=Oo(null,a,e,t,l)):(a.tag=0,a=Yc(null,a,e,t,l));else{if(e!=null){if(n=e.$$typeof,n===gt){a.tag=11,a=po(null,a,e,t,l);break t}else if(n===at){a.tag=14,a=bo(null,a,e,t,l);break t}}throw a=Rl(e)||e,Error(s(306,a,""))}}return a;case 0:return Yc(t,a,a.type,a.pendingProps,l);case 1:return e=a.type,n=Ll(e,a.pendingProps),Oo(t,a,e,n,l);case 3:t:{if(_t(a,a.stateNode.containerInfo),t===null)throw Error(s(387));e=a.pendingProps;var u=a.memoizedState;n=u.element,sc(t,a),fn(a,e,null,l);var c=a.memoizedState;if(e=c.cache,cl(a,jt,e),e!==u.cache&&nc(a,[jt],l,!0),cn(),e=c.element,u.isDehydrated)if(u={element:e,isDehydrated:!1,cache:c.cache},a.updateQueue.baseState=u,a.memoizedState=u,a.flags&256){a=zo(t,a,e,l);break t}else if(e!==n){n=Sa(Error(s(424)),a),Pe(n),a=zo(t,a,e,l);break t}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Rt=Ra(t.firstChild),Pt=a,ot=!0,Bl=null,Ua=!0,l=io(a,null,e,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ie(),e===n){a=Fa(t,a,l);break t}Vt(t,a,e,l)}a=a.child}return a;case 26:return Du(t,a),t===null?(l=H0(a.type,null,a.pendingProps,null))?a.memoizedState=l:ot||(l=a.type,t=a.pendingProps,e=Ku(tt.current).createElement(l),e[Wt]=a,e[aa]=t,Kt(e,l,t),Xt(e),a.stateNode=e):a.memoizedState=H0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return vi(a),t===null&&ot&&(e=a.stateNode=D0(a.type,a.pendingProps,tt.current),Pt=a,Ua=!0,n=Rt,Tl(a.type)?(Tf=n,Rt=Ra(e.firstChild)):Rt=n),Vt(t,a,a.pendingProps.children,l),Du(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&ot&&((n=e=Rt)&&(e=Bm(e,a.type,a.pendingProps,Ua),e!==null?(a.stateNode=e,Pt=a,Rt=Ra(e.firstChild),Ua=!1,n=!0):n=!1),n||Xl(a)),vi(a),n=a.type,u=a.pendingProps,c=t!==null?t.memoizedProps:null,e=u.children,pf(n,u)?e=null:c!==null&&pf(n,c)&&(a.flags|=32),a.memoizedState!==null&&(n=vc(t,a,lm,null,null,l),Dn._currentValue=n),Du(t,a),Vt(t,a,e,l),a.child;case 6:return t===null&&ot&&((t=l=Rt)&&(l=Xm(l,a.pendingProps,Ua),l!==null?(a.stateNode=l,Pt=a,Rt=null,t=!0):t=!1),t||Xl(a)),null;case 13:return _o(t,a,l);case 4:return _t(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=Se(a,null,e,l):Vt(t,a,e,l),a.child;case 11:return po(t,a,a.type,a.pendingProps,l);case 7:return Vt(t,a,a.pendingProps,l),a.child;case 8:return Vt(t,a,a.pendingProps.children,l),a.child;case 12:return Vt(t,a,a.pendingProps.children,l),a.child;case 10:return e=a.pendingProps,cl(a,a.type,e.value),Vt(t,a,e.children,l),a.child;case 9:return n=a.type._context,e=a.pendingProps.children,Ql(a),n=kt(n),e=e(n),a.flags|=1,Vt(t,a,e,l),a.child;case 14:return bo(t,a,a.type,a.pendingProps,l);case 15:return So(t,a,a.type,a.pendingProps,l);case 19:return xo(t,a,l);case 31:return e=a.pendingProps,l=a.mode,e={mode:e.mode,children:e.children},t===null?(l=Nu(e,l),l.ref=a.ref,a.child=l,l.return=a,a=l):(l=La(t.child,e),l.ref=a.ref,a.child=l,l.return=a,a=l),a;case 22:return Eo(t,a,l);case 24:return Ql(a),e=kt(jt),t===null?(n=cc(),n===null&&(n=zt,u=uc(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),a.memoizedState={parent:e,cache:n},rc(a),cl(a,jt,n)):((t.lanes&l)!==0&&(sc(t,a),fn(a,null,null,l),cn()),n=t.memoizedState,u=a.memoizedState,n.parent!==e?(n={parent:e,cache:e},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),cl(a,jt,e)):(e=u.cache,cl(a,jt,e),e!==n.cache&&nc(a,[jt],l,!0))),Vt(t,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function Ia(t){t.flags|=4}function Do(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!B0(a)){if(a=Oa.current,a!==null&&((ft&4194048)===ft?Ha!==null:(ft&62914560)!==ft&&(ft&536870912)===0||a!==Ha))throw nn=fc,ds;t.flags|=8192}}function Uu(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?cr():536870912,t.lanes|=a,Oe|=a)}function hn(t,a){if(!ot)switch(t.tailMode){case"hidden":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function xt(t){var a=t.alternate!==null&&t.alternate.child===t.child,l=0,e=0;if(a)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=e,t.childLanes=l,a}function om(t,a,l){var e=a.pendingProps;switch(tc(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(a),null;case 1:return xt(a),null;case 3:return l=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),$a(jt),el(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Fe(a)?Ia(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,cs())),xt(a),null;case 26:return l=a.memoizedState,t===null?(Ia(a),l!==null?(xt(a),Do(a,l)):(xt(a),a.flags&=-16777217)):l?l!==t.memoizedState?(Ia(a),xt(a),Do(a,l)):(xt(a),a.flags&=-16777217):(t.memoizedProps!==e&&Ia(a),xt(a),a.flags&=-16777217),null;case 27:Vn(a),l=tt.current;var n=a.type;if(t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ia(a);else{if(!e){if(a.stateNode===null)throw Error(s(166));return xt(a),null}t=w.current,Fe(a)?us(a):(t=D0(n,e,l),a.stateNode=t,Ia(a))}return xt(a),null;case 5:if(Vn(a),l=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ia(a);else{if(!e){if(a.stateNode===null)throw Error(s(166));return xt(a),null}if(t=w.current,Fe(a))us(a);else{switch(n=Ku(tt.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof e.is=="string"?n.createElement("select",{is:e.is}):n.createElement("select"),e.multiple?t.multiple=!0:e.size&&(t.size=e.size);break;default:t=typeof e.is=="string"?n.createElement(l,{is:e.is}):n.createElement(l)}}t[Wt]=a,t[aa]=e;t:for(n=a.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break t;for(;n.sibling===null;){if(n.return===null||n.return===a)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}a.stateNode=t;t:switch(Kt(t,l,e),l){case"button":case"input":case"select":case"textarea":t=!!e.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ia(a)}}return xt(a),a.flags&=-16777217,null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Ia(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(s(166));if(t=tt.current,Fe(a)){if(t=a.stateNode,l=a.memoizedProps,e=null,n=Pt,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}t[Wt]=a,t=!!(t.nodeValue===l||e!==null&&e.suppressHydrationWarning===!0||A0(t.nodeValue,l)),t||Xl(a)}else t=Ku(t).createTextNode(e),t[Wt]=a,a.stateNode=t}return xt(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Fe(a),e!==null&&e.dehydrated!==null){if(t===null){if(!n)throw Error(s(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[Wt]=a}else Ie(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;xt(a),n=!1}else n=cs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(ka(a),a):(ka(a),null)}if(ka(a),(a.flags&128)!==0)return a.lanes=l,a;if(l=e!==null,t=t!==null&&t.memoizedState!==null,l){e=a.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool);var u=null;e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(u=e.memoizedState.cachePool.pool),u!==n&&(e.flags|=2048)}return l!==t&&l&&(a.child.flags|=8192),Uu(a,a.updateQueue),xt(a),null;case 4:return el(),t===null&&mf(a.stateNode.containerInfo),xt(a),null;case 10:return $a(a.type),xt(a),null;case 19:if(X(Ct),n=a.memoizedState,n===null)return xt(a),null;if(e=(a.flags&128)!==0,u=n.rendering,u===null)if(e)hn(n,!1);else{if(Dt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(u=Mu(t),u!==null){for(a.flags|=128,hn(n,!1),t=u.updateQueue,a.updateQueue=t,Uu(a,t),a.subtreeFlags=0,t=l,l=a.child;l!==null;)es(l,t),l=l.sibling;return C(Ct,Ct.current&1|2),a.child}t=t.sibling}n.tail!==null&&Na()>qu&&(a.flags|=128,e=!0,hn(n,!1),a.lanes=4194304)}else{if(!e)if(t=Mu(u),t!==null){if(a.flags|=128,e=!0,t=t.updateQueue,a.updateQueue=t,Uu(a,t),hn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!ot)return xt(a),null}else 2*Na()-n.renderingStartTime>qu&&l!==536870912&&(a.flags|=128,e=!0,hn(n,!1),a.lanes=4194304);n.isBackwards?(u.sibling=a.child,a.child=u):(t=n.last,t!==null?t.sibling=u:a.child=u,n.last=u)}return n.tail!==null?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=Na(),a.sibling=null,t=Ct.current,C(Ct,e?t&1|2:t&1),a):(xt(a),null);case 22:case 23:return ka(a),yc(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(l&536870912)!==0&&(a.flags&128)===0&&(xt(a),a.subtreeFlags&6&&(a.flags|=8192)):xt(a),l=a.updateQueue,l!==null&&Uu(a,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==l&&(a.flags|=2048),t!==null&&X(Zl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),$a(jt),xt(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function dm(t,a){switch(tc(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return $a(jt),el(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Vn(a),null;case 13:if(ka(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Ie()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return X(Ct),null;case 4:return el(),null;case 10:return $a(a.type),null;case 22:case 23:return ka(a),yc(),t!==null&&X(Zl),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return $a(jt),null;case 25:return null;default:return null}}function No(t,a){switch(tc(a),a.tag){case 3:$a(jt),el();break;case 26:case 27:case 5:Vn(a);break;case 4:el();break;case 13:ka(a);break;case 19:X(Ct);break;case 10:$a(a.type);break;case 22:case 23:ka(a),yc(),t!==null&&X(Zl);break;case 24:$a(jt)}}function vn(t,a){try{var l=a.updateQueue,e=l!==null?l.lastEffect:null;if(e!==null){var n=e.next;l=n;do{if((l.tag&t)===t){e=void 0;var u=l.create,c=l.inst;e=u(),c.destroy=e}l=l.next}while(l!==n)}}catch(f){Ot(a,a.return,f)}}function yl(t,a,l){try{var e=a.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var u=n.next;e=u;do{if((e.tag&t)===t){var c=e.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,n=a;var o=l,b=f;try{b()}catch(A){Ot(n,o,A)}}}e=e.next}while(e!==u)}}catch(A){Ot(a,a.return,A)}}function Uo(t){var a=t.updateQueue;if(a!==null){var l=t.stateNode;try{ps(a,l)}catch(e){Ot(t,t.return,e)}}}function Ho(t,a,l){l.props=Ll(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(e){Ot(t,a,e)}}function gn(t,a){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof l=="function"?t.refCleanup=l(e):l.current=e}}catch(n){Ot(t,a,n)}}function Ya(t,a){var l=t.ref,e=t.refCleanup;if(l!==null)if(typeof e=="function")try{e()}catch(n){Ot(t,a,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Ot(t,a,n)}else l.current=null}function Yo(t){var a=t.type,l=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&e.focus();break t;case"img":l.src?e.src=l.src:l.srcSet&&(e.srcset=l.srcSet)}}catch(n){Ot(t,t.return,n)}}function Zc(t,a,l){try{var e=t.stateNode;Hm(e,t.type,l,a),e[aa]=a}catch(n){Ot(t,t.return,n)}}function qo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Tl(t.type)||t.tag===4}function Vc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||qo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Tl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lc(t,a,l){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(t),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=Lu));else if(e!==4&&(e===27&&Tl(t.type)&&(l=t.stateNode,a=null),t=t.child,t!==null))for(Lc(t,a,l),t=t.sibling;t!==null;)Lc(t,a,l),t=t.sibling}function Hu(t,a,l){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?l.insertBefore(t,a):l.appendChild(t);else if(e!==4&&(e===27&&Tl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Hu(t,a,l),t=t.sibling;t!==null;)Hu(t,a,l),t=t.sibling}function jo(t){var a=t.stateNode,l=t.memoizedProps;try{for(var e=t.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Kt(a,e,l),a[Wt]=t,a[aa]=l}catch(u){Ot(t,t.return,u)}}var Pa=!1,Ut=!1,Kc=!1,Co=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function mm(t,a){if(t=t.containerInfo,vf=Fu,t=Jr(t),Vi(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var e=l.getSelection&&l.getSelection();if(e&&e.rangeCount!==0){l=e.anchorNode;var n=e.anchorOffset,u=e.focusNode;e=e.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var c=0,f=-1,o=-1,b=0,A=0,R=t,E=null;a:for(;;){for(var T;R!==l||n!==0&&R.nodeType!==3||(f=c+n),R!==u||e!==0&&R.nodeType!==3||(o=c+e),R.nodeType===3&&(c+=R.nodeValue.length),(T=R.firstChild)!==null;)E=R,R=T;for(;;){if(R===t)break a;if(E===l&&++b===n&&(f=c),E===u&&++A===e&&(o=c),(T=R.nextSibling)!==null)break;R=E,E=R.parentNode}R=T}l=f===-1||o===-1?null:{start:f,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(gf={focusedElem:t,selectionRange:l},Fu=!1,Qt=a;Qt!==null;)if(a=Qt,t=a.child,(a.subtreeFlags&1024)!==0&&t!==null)t.return=a,Qt=t;else for(;Qt!==null;){switch(a=Qt,u=a.alternate,t=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=a,n=u.memoizedProps,u=u.memoizedState,e=l.stateNode;try{var F=Ll(l.type,n,l.elementType===l.type);t=e.getSnapshotBeforeUpdate(F,u),e.__reactInternalSnapshotBeforeUpdate=t}catch(J){Ot(l,l.return,J)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,l=t.nodeType,l===9)Sf(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Sf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=a.sibling,t!==null){t.return=a.return,Qt=t;break}Qt=a.return}}function Bo(t,a,l){var e=l.flags;switch(l.tag){case 0:case 11:case 15:hl(t,l),e&4&&vn(5,l);break;case 1:if(hl(t,l),e&4)if(t=l.stateNode,a===null)try{t.componentDidMount()}catch(c){Ot(l,l.return,c)}else{var n=Ll(l.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(n,a,t.__reactInternalSnapshotBeforeUpdate)}catch(c){Ot(l,l.return,c)}}e&64&&Uo(l),e&512&&gn(l,l.return);break;case 3:if(hl(t,l),e&64&&(t=l.updateQueue,t!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{ps(t,a)}catch(c){Ot(l,l.return,c)}}break;case 27:a===null&&e&4&&jo(l);case 26:case 5:hl(t,l),a===null&&e&4&&Yo(l),e&512&&gn(l,l.return);break;case 12:hl(t,l);break;case 13:hl(t,l),e&4&&Qo(t,l),e&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=Tm.bind(null,l),Gm(t,l))));break;case 22:if(e=l.memoizedState!==null||Pa,!e){a=a!==null&&a.memoizedState!==null||Ut,n=Pa;var u=Ut;Pa=e,(Ut=a)&&!u?vl(t,l,(l.subtreeFlags&8772)!==0):hl(t,l),Pa=n,Ut=u}break;case 30:break;default:hl(t,l)}}function Xo(t){var a=t.alternate;a!==null&&(t.alternate=null,Xo(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&Oi(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Mt=null,na=!1;function tl(t,a,l){for(l=l.child;l!==null;)Go(t,a,l),l=l.sibling}function Go(t,a,l){if(fa&&typeof fa.onCommitFiberUnmount=="function")try{fa.onCommitFiberUnmount(Ce,l)}catch{}switch(l.tag){case 26:Ut||Ya(l,a),tl(t,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ut||Ya(l,a);var e=Mt,n=na;Tl(l.type)&&(Mt=l.stateNode,na=!1),tl(t,a,l),_n(l.stateNode),Mt=e,na=n;break;case 5:Ut||Ya(l,a);case 6:if(e=Mt,n=na,Mt=null,tl(t,a,l),Mt=e,na=n,Mt!==null)if(na)try{(Mt.nodeType===9?Mt.body:Mt.nodeName==="HTML"?Mt.ownerDocument.body:Mt).removeChild(l.stateNode)}catch(u){Ot(l,a,u)}else try{Mt.removeChild(l.stateNode)}catch(u){Ot(l,a,u)}break;case 18:Mt!==null&&(na?(t=Mt,x0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Yn(t)):x0(Mt,l.stateNode));break;case 4:e=Mt,n=na,Mt=l.stateNode.containerInfo,na=!0,tl(t,a,l),Mt=e,na=n;break;case 0:case 11:case 14:case 15:Ut||yl(2,l,a),Ut||yl(4,l,a),tl(t,a,l);break;case 1:Ut||(Ya(l,a),e=l.stateNode,typeof e.componentWillUnmount=="function"&&Ho(l,a,e)),tl(t,a,l);break;case 21:tl(t,a,l);break;case 22:Ut=(e=Ut)||l.memoizedState!==null,tl(t,a,l),Ut=e;break;default:tl(t,a,l)}}function Qo(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Yn(t)}catch(l){Ot(a,a.return,l)}}function ym(t){switch(t.tag){case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new Co),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new Co),a;default:throw Error(s(435,t.tag))}}function wc(t,a){var l=ym(t);a.forEach(function(e){var n=Am.bind(null,t,e);l.has(e)||(l.add(e),e.then(n,n))})}function da(t,a){var l=a.deletions;if(l!==null)for(var e=0;e<l.length;e++){var n=l[e],u=t,c=a,f=c;t:for(;f!==null;){switch(f.tag){case 27:if(Tl(f.type)){Mt=f.stateNode,na=!1;break t}break;case 5:Mt=f.stateNode,na=!1;break t;case 3:case 4:Mt=f.stateNode.containerInfo,na=!0;break t}f=f.return}if(Mt===null)throw Error(s(160));Go(u,c,n),Mt=null,na=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Zo(a,t),a=a.sibling}var xa=null;function Zo(t,a){var l=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:da(a,t),ma(t),e&4&&(yl(3,t,t.return),vn(3,t),yl(5,t,t.return));break;case 1:da(a,t),ma(t),e&512&&(Ut||l===null||Ya(l,l.return)),e&64&&Pa&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?e:l.concat(e))));break;case 26:var n=xa;if(da(a,t),ma(t),e&512&&(Ut||l===null||Ya(l,l.return)),e&4){var u=l!==null?l.memoizedState:null;if(e=t.memoizedState,l===null)if(e===null)if(t.stateNode===null){t:{e=t.type,l=t.memoizedProps,n=n.ownerDocument||n;a:switch(e){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ge]||u[Wt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(e),n.head.insertBefore(u,n.querySelector("head > title"))),Kt(u,e,l),u[Wt]=t,Xt(u),e=u;break t;case"link":var c=j0("link","href",n).get(e+(l.href||""));if(c){for(var f=0;f<c.length;f++)if(u=c[f],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(f,1);break a}}u=n.createElement(e),Kt(u,e,l),n.head.appendChild(u);break;case"meta":if(c=j0("meta","content",n).get(e+(l.content||""))){for(f=0;f<c.length;f++)if(u=c[f],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(f,1);break a}}u=n.createElement(e),Kt(u,e,l),n.head.appendChild(u);break;default:throw Error(s(468,e))}u[Wt]=t,Xt(u),e=u}t.stateNode=e}else C0(n,t.type,t.stateNode);else t.stateNode=q0(n,e,t.memoizedProps);else u!==e?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,e===null?C0(n,t.type,t.stateNode):q0(n,e,t.memoizedProps)):e===null&&t.stateNode!==null&&Zc(t,t.memoizedProps,l.memoizedProps)}break;case 27:da(a,t),ma(t),e&512&&(Ut||l===null||Ya(l,l.return)),l!==null&&e&4&&Zc(t,t.memoizedProps,l.memoizedProps);break;case 5:if(da(a,t),ma(t),e&512&&(Ut||l===null||Ya(l,l.return)),t.flags&32){n=t.stateNode;try{le(n,"")}catch(T){Ot(t,t.return,T)}}e&4&&t.stateNode!=null&&(n=t.memoizedProps,Zc(t,n,l!==null?l.memoizedProps:n)),e&1024&&(Kc=!0);break;case 6:if(da(a,t),ma(t),e&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,l=t.stateNode;try{l.nodeValue=e}catch(T){Ot(t,t.return,T)}}break;case 3:if($u=null,n=xa,xa=wu(a.containerInfo),da(a,t),xa=n,ma(t),e&4&&l!==null&&l.memoizedState.isDehydrated)try{Yn(a.containerInfo)}catch(T){Ot(t,t.return,T)}Kc&&(Kc=!1,Vo(t));break;case 4:e=xa,xa=wu(t.stateNode.containerInfo),da(a,t),ma(t),xa=e;break;case 12:da(a,t),ma(t);break;case 13:da(a,t),ma(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ic=Na()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,wc(t,e)));break;case 22:n=t.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,b=Pa,A=Ut;if(Pa=b||n,Ut=A||o,da(a,t),Ut=A,Pa=b,ma(t),e&8192)t:for(a=t.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(l===null||o||Pa||Ut||Kl(t)),l=null,a=t;;){if(a.tag===5||a.tag===26){if(l===null){o=l=a;try{if(u=o.stateNode,n)c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=o.stateNode;var R=o.memoizedProps.style,E=R!=null&&R.hasOwnProperty("display")?R.display:null;f.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(T){Ot(o,o.return,T)}}}else if(a.tag===6){if(l===null){o=a;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(T){Ot(o,o.return,T)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(l=e.retryQueue,l!==null&&(e.retryQueue=null,wc(t,l))));break;case 19:da(a,t),ma(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,wc(t,e)));break;case 30:break;case 21:break;default:da(a,t),ma(t)}}function ma(t){var a=t.flags;if(a&2){try{for(var l,e=t.return;e!==null;){if(qo(e)){l=e;break}e=e.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var n=l.stateNode,u=Vc(t);Hu(t,u,n);break;case 5:var c=l.stateNode;l.flags&32&&(le(c,""),l.flags&=-33);var f=Vc(t);Hu(t,f,c);break;case 3:case 4:var o=l.stateNode.containerInfo,b=Vc(t);Lc(t,b,o);break;default:throw Error(s(161))}}catch(A){Ot(t,t.return,A)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Vo(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Vo(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function hl(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Bo(t,a.alternate,a),a=a.sibling}function Kl(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:yl(4,a,a.return),Kl(a);break;case 1:Ya(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Ho(a,a.return,l),Kl(a);break;case 27:_n(a.stateNode);case 26:case 5:Ya(a,a.return),Kl(a);break;case 22:a.memoizedState===null&&Kl(a);break;case 30:Kl(a);break;default:Kl(a)}t=t.sibling}}function vl(t,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,n=t,u=a,c=u.flags;switch(u.tag){case 0:case 11:case 15:vl(n,u,l),vn(4,u);break;case 1:if(vl(n,u,l),e=u,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(b){Ot(e,e.return,b)}if(e=u,n=e.updateQueue,n!==null){var f=e.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)gs(o[n],f)}catch(b){Ot(e,e.return,b)}}l&&c&64&&Uo(u),gn(u,u.return);break;case 27:jo(u);case 26:case 5:vl(n,u,l),l&&e===null&&c&4&&Yo(u),gn(u,u.return);break;case 12:vl(n,u,l);break;case 13:vl(n,u,l),l&&c&4&&Qo(n,u);break;case 22:u.memoizedState===null&&vl(n,u,l),gn(u,u.return);break;case 30:break;default:vl(n,u,l)}a=a.sibling}}function Jc(t,a){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&an(l))}function $c(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&an(t))}function qa(t,a,l,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Lo(t,a,l,e),a=a.sibling}function Lo(t,a,l,e){var n=a.flags;switch(a.tag){case 0:case 11:case 15:qa(t,a,l,e),n&2048&&vn(9,a);break;case 1:qa(t,a,l,e);break;case 3:qa(t,a,l,e),n&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&an(t)));break;case 12:if(n&2048){qa(t,a,l,e),t=a.stateNode;try{var u=a.memoizedProps,c=u.id,f=u.onPostCommit;typeof f=="function"&&f(c,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){Ot(a,a.return,o)}}else qa(t,a,l,e);break;case 13:qa(t,a,l,e);break;case 23:break;case 22:u=a.stateNode,c=a.alternate,a.memoizedState!==null?u._visibility&2?qa(t,a,l,e):pn(t,a):u._visibility&2?qa(t,a,l,e):(u._visibility|=2,Ee(t,a,l,e,(a.subtreeFlags&10256)!==0)),n&2048&&Jc(c,a);break;case 24:qa(t,a,l,e),n&2048&&$c(a.alternate,a);break;default:qa(t,a,l,e)}}function Ee(t,a,l,e,n){for(n=n&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var u=t,c=a,f=l,o=e,b=c.flags;switch(c.tag){case 0:case 11:case 15:Ee(u,c,f,o,n),vn(8,c);break;case 23:break;case 22:var A=c.stateNode;c.memoizedState!==null?A._visibility&2?Ee(u,c,f,o,n):pn(u,c):(A._visibility|=2,Ee(u,c,f,o,n)),n&&b&2048&&Jc(c.alternate,c);break;case 24:Ee(u,c,f,o,n),n&&b&2048&&$c(c.alternate,c);break;default:Ee(u,c,f,o,n)}a=a.sibling}}function pn(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=t,e=a,n=e.flags;switch(e.tag){case 22:pn(l,e),n&2048&&Jc(e.alternate,e);break;case 24:pn(l,e),n&2048&&$c(e.alternate,e);break;default:pn(l,e)}a=a.sibling}}var bn=8192;function Te(t){if(t.subtreeFlags&bn)for(t=t.child;t!==null;)Ko(t),t=t.sibling}function Ko(t){switch(t.tag){case 26:Te(t),t.flags&bn&&t.memoizedState!==null&&Pm(xa,t.memoizedState,t.memoizedProps);break;case 5:Te(t);break;case 3:case 4:var a=xa;xa=wu(t.stateNode.containerInfo),Te(t),xa=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=bn,bn=16777216,Te(t),bn=a):Te(t));break;default:Te(t)}}function wo(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Sn(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var e=a[l];Qt=e,$o(e,t)}wo(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jo(t),t=t.sibling}function Jo(t){switch(t.tag){case 0:case 11:case 15:Sn(t),t.flags&2048&&yl(9,t,t.return);break;case 3:Sn(t);break;case 12:Sn(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,Yu(t)):Sn(t);break;default:Sn(t)}}function Yu(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var e=a[l];Qt=e,$o(e,t)}wo(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:yl(8,a,a.return),Yu(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,Yu(a));break;default:Yu(a)}t=t.sibling}}function $o(t,a){for(;Qt!==null;){var l=Qt;switch(l.tag){case 0:case 11:case 15:yl(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var e=l.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:an(l.memoizedState.cache)}if(e=l.child,e!==null)e.return=l,Qt=e;else t:for(l=t;Qt!==null;){e=Qt;var n=e.sibling,u=e.return;if(Xo(e),e===l){Qt=null;break t}if(n!==null){n.return=u,Qt=n;break t}Qt=u}}}var hm={getCacheForType:function(t){var a=kt(jt),l=a.data.get(t);return l===void 0&&(l=t(),a.data.set(t,l)),l}},vm=typeof WeakMap=="function"?WeakMap:Map,pt=0,zt=null,ut=null,ft=0,bt=0,ya=null,gl=!1,Ae=!1,Wc=!1,al=0,Dt=0,pl=0,wl=0,kc=0,za=0,Oe=0,En=null,ua=null,Fc=!1,Ic=0,qu=1/0,ju=null,bl=null,Lt=0,Sl=null,ze=null,_e=0,Pc=0,tf=null,Wo=null,Tn=0,af=null;function ha(){if((pt&2)!==0&&ft!==0)return ft&-ft;if(O.T!==null){var t=me;return t!==0?t:rf()}return sr()}function ko(){za===0&&(za=(ft&536870912)===0||ot?ir():536870912);var t=Oa.current;return t!==null&&(t.flags|=32),za}function va(t,a,l){(t===zt&&(bt===2||bt===9)||t.cancelPendingCommit!==null)&&(Me(t,0),El(t,ft,za,!1)),Xe(t,l),((pt&2)===0||t!==zt)&&(t===zt&&((pt&2)===0&&(wl|=l),Dt===4&&El(t,ft,za,!1)),ja(t))}function Fo(t,a,l){if((pt&6)!==0)throw Error(s(327));var e=!l&&(a&124)===0&&(a&t.expiredLanes)===0||Be(t,a),n=e?bm(t,a):nf(t,a,!0),u=e;do{if(n===0){Ae&&!e&&El(t,a,0,!1);break}else{if(l=t.current.alternate,u&&!gm(l)){n=nf(t,a,!1),u=!1;continue}if(n===2){if(u=a,t.errorRecoveryDisabledLanes&u)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){a=c;t:{var f=t;n=En;var o=f.current.memoizedState.isDehydrated;if(o&&(Me(f,c).flags|=256),c=nf(f,c,!1),c!==2){if(Wc&&!o){f.errorRecoveryDisabledLanes|=u,wl|=u,n=4;break t}u=ua,ua=n,u!==null&&(ua===null?ua=u:ua.push.apply(ua,u))}n=c}if(u=!1,n!==2)continue}}if(n===1){Me(t,0),El(t,a,0,!0);break}t:{switch(e=t,u=n,u){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:El(e,a,za,!gl);break t;case 2:ua=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(n=Ic+300-Na(),10<n)){if(El(e,a,za,!gl),Jn(e,0,!0)!==0)break t;e.timeoutHandle=_0(Io.bind(null,e,l,ua,ju,Fc,a,za,wl,Oe,gl,u,2,-0,0),n);break t}Io(e,l,ua,ju,Fc,a,za,wl,Oe,gl,u,0,-0,0)}}break}while(!0);ja(t)}function Io(t,a,l,e,n,u,c,f,o,b,A,R,E,T){if(t.timeoutHandle=-1,R=a.subtreeFlags,(R&8192||(R&16785408)===16785408)&&(Rn={stylesheets:null,count:0,unsuspend:Im},Ko(a),R=ty(),R!==null)){t.cancelPendingCommit=R(u0.bind(null,t,a,u,l,e,n,c,f,o,A,1,E,T)),El(t,u,c,!b);return}u0(t,a,u,l,e,n,c,f,o)}function gm(t){for(var a=t;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var e=0;e<l.length;e++){var n=l[e],u=n.getSnapshot;n=n.value;try{if(!sa(u(),n))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function El(t,a,l,e){a&=~kc,a&=~wl,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var n=a;0<n;){var u=31-ra(n),c=1<<u;e[u]=-1,n&=~c}l!==0&&fr(t,l,a)}function Cu(){return(pt&6)===0?(An(0),!1):!0}function lf(){if(ut!==null){if(bt===0)var t=ut.return;else t=ut,Ja=Gl=null,bc(t),be=null,mn=0,t=ut;for(;t!==null;)No(t.alternate,t),t=t.return;ut=null}}function Me(t,a){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,qm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),lf(),zt=t,ut=l=La(t.current,null),ft=a,bt=0,ya=null,gl=!1,Ae=Be(t,a),Wc=!1,Oe=za=kc=wl=pl=Dt=0,ua=En=null,Fc=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var n=31-ra(e),u=1<<n;a|=t[n],e&=~u}return al=a,uu(),l}function Po(t,a){et=null,O.H=Ou,a===en||a===yu?(a=hs(),bt=3):a===ds?(a=hs(),bt=4):bt=a===go?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ya=a,ut===null&&(Dt=1,Ru(t,Sa(a,t.current)))}function t0(){var t=O.H;return O.H=Ou,t===null?Ou:t}function a0(){var t=O.A;return O.A=hm,t}function ef(){Dt=4,gl||(ft&4194048)!==ft&&Oa.current!==null||(Ae=!0),(pl&134217727)===0&&(wl&134217727)===0||zt===null||El(zt,ft,za,!1)}function nf(t,a,l){var e=pt;pt|=2;var n=t0(),u=a0();(zt!==t||ft!==a)&&(ju=null,Me(t,a)),a=!1;var c=Dt;t:do try{if(bt!==0&&ut!==null){var f=ut,o=ya;switch(bt){case 8:lf(),c=6;break t;case 3:case 2:case 9:case 6:Oa.current===null&&(a=!0);var b=bt;if(bt=0,ya=null,xe(t,f,o,b),l&&Ae){c=0;break t}break;default:b=bt,bt=0,ya=null,xe(t,f,o,b)}}pm(),c=Dt;break}catch(A){Po(t,A)}while(!0);return a&&t.shellSuspendCounter++,Ja=Gl=null,pt=e,O.H=n,O.A=u,ut===null&&(zt=null,ft=0,uu()),c}function pm(){for(;ut!==null;)l0(ut)}function bm(t,a){var l=pt;pt|=2;var e=t0(),n=a0();zt!==t||ft!==a?(ju=null,qu=Na()+500,Me(t,a)):Ae=Be(t,a);t:do try{if(bt!==0&&ut!==null){a=ut;var u=ya;a:switch(bt){case 1:bt=0,ya=null,xe(t,a,u,1);break;case 2:case 9:if(ms(u)){bt=0,ya=null,e0(a);break}a=function(){bt!==2&&bt!==9||zt!==t||(bt=7),ja(t)},u.then(a,a);break t;case 3:bt=7;break t;case 4:bt=5;break t;case 7:ms(u)?(bt=0,ya=null,e0(a)):(bt=0,ya=null,xe(t,a,u,7));break;case 5:var c=null;switch(ut.tag){case 26:c=ut.memoizedState;case 5:case 27:var f=ut;if(!c||B0(c)){bt=0,ya=null;var o=f.sibling;if(o!==null)ut=o;else{var b=f.return;b!==null?(ut=b,Bu(b)):ut=null}break a}}bt=0,ya=null,xe(t,a,u,5);break;case 6:bt=0,ya=null,xe(t,a,u,6);break;case 8:lf(),Dt=6;break t;default:throw Error(s(462))}}Sm();break}catch(A){Po(t,A)}while(!0);return Ja=Gl=null,O.H=e,O.A=n,pt=l,ut!==null?0:(zt=null,ft=0,uu(),Dt)}function Sm(){for(;ut!==null&&!Zd();)l0(ut)}function l0(t){var a=Ro(t.alternate,t,al);t.memoizedProps=t.pendingProps,a===null?Bu(t):ut=a}function e0(t){var a=t,l=a.alternate;switch(a.tag){case 15:case 0:a=Ao(l,a,a.pendingProps,a.type,void 0,ft);break;case 11:a=Ao(l,a,a.pendingProps,a.type.render,a.ref,ft);break;case 5:bc(a);default:No(l,a),a=ut=es(a,al),a=Ro(l,a,al)}t.memoizedProps=t.pendingProps,a===null?Bu(t):ut=a}function xe(t,a,l,e){Ja=Gl=null,bc(a),be=null,mn=0;var n=a.return;try{if(rm(t,n,a,l,ft)){Dt=1,Ru(t,Sa(l,t.current)),ut=null;return}}catch(u){if(n!==null)throw ut=n,u;Dt=1,Ru(t,Sa(l,t.current)),ut=null;return}a.flags&32768?(ot||e===1?t=!0:Ae||(ft&536870912)!==0?t=!1:(gl=t=!0,(e===2||e===9||e===3||e===6)&&(e=Oa.current,e!==null&&e.tag===13&&(e.flags|=16384))),n0(a,t)):Bu(a)}function Bu(t){var a=t;do{if((a.flags&32768)!==0){n0(a,gl);return}t=a.return;var l=om(a.alternate,a,al);if(l!==null){ut=l;return}if(a=a.sibling,a!==null){ut=a;return}ut=a=t}while(a!==null);Dt===0&&(Dt=5)}function n0(t,a){do{var l=dm(t.alternate,t);if(l!==null){l.flags&=32767,ut=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(t=t.sibling,t!==null)){ut=t;return}ut=t=l}while(t!==null);Dt=6,ut=null}function u0(t,a,l,e,n,u,c,f,o){t.cancelPendingCommit=null;do Xu();while(Lt!==0);if((pt&6)!==0)throw Error(s(327));if(a!==null){if(a===t.current)throw Error(s(177));if(u=a.lanes|a.childLanes,u|=$i,Id(t,l,u,c,f,o),t===zt&&(ut=zt=null,ft=0),ze=a,Sl=t,_e=l,Pc=u,tf=n,Wo=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Om(Ln,function(){return s0(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=O.T,O.T=null,n=B.p,B.p=2,c=pt,pt|=4;try{mm(t,a,l)}finally{pt=c,B.p=n,O.T=e}}Lt=1,i0(),c0(),f0()}}function i0(){if(Lt===1){Lt=0;var t=Sl,a=ze,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=O.T,O.T=null;var e=B.p;B.p=2;var n=pt;pt|=4;try{Zo(a,t);var u=gf,c=Jr(t.containerInfo),f=u.focusedElem,o=u.selectionRange;if(c!==f&&f&&f.ownerDocument&&wr(f.ownerDocument.documentElement,f)){if(o!==null&&Vi(f)){var b=o.start,A=o.end;if(A===void 0&&(A=b),"selectionStart"in f)f.selectionStart=b,f.selectionEnd=Math.min(A,f.value.length);else{var R=f.ownerDocument||document,E=R&&R.defaultView||window;if(E.getSelection){var T=E.getSelection(),F=f.textContent.length,J=Math.min(o.start,F),Tt=o.end===void 0?J:Math.min(o.end,F);!T.extend&&J>Tt&&(c=Tt,Tt=J,J=c);var v=Kr(f,J),y=Kr(f,Tt);if(v&&y&&(T.rangeCount!==1||T.anchorNode!==v.node||T.anchorOffset!==v.offset||T.focusNode!==y.node||T.focusOffset!==y.offset)){var g=R.createRange();g.setStart(v.node,v.offset),T.removeAllRanges(),J>Tt?(T.addRange(g),T.extend(y.node,y.offset)):(g.setEnd(y.node,y.offset),T.addRange(g))}}}}for(R=[],T=f;T=T.parentNode;)T.nodeType===1&&R.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<R.length;f++){var _=R[f];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Fu=!!vf,gf=vf=null}finally{pt=n,B.p=e,O.T=l}}t.current=a,Lt=2}}function c0(){if(Lt===2){Lt=0;var t=Sl,a=ze,l=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||l){l=O.T,O.T=null;var e=B.p;B.p=2;var n=pt;pt|=4;try{Bo(t,a.alternate,a)}finally{pt=n,B.p=e,O.T=l}}Lt=3}}function f0(){if(Lt===4||Lt===3){Lt=0,Vd();var t=Sl,a=ze,l=_e,e=Wo;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Lt=5:(Lt=0,ze=Sl=null,r0(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(bl=null),Ti(l),a=a.stateNode,fa&&typeof fa.onCommitFiberRoot=="function")try{fa.onCommitFiberRoot(Ce,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=O.T,n=B.p,B.p=2,O.T=null;try{for(var u=t.onRecoverableError,c=0;c<e.length;c++){var f=e[c];u(f.value,{componentStack:f.stack})}}finally{O.T=a,B.p=n}}(_e&3)!==0&&Xu(),ja(t),n=t.pendingLanes,(l&4194090)!==0&&(n&42)!==0?t===af?Tn++:(Tn=0,af=t):Tn=0,An(0)}}function r0(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,an(a)))}function Xu(t){return i0(),c0(),f0(),s0()}function s0(){if(Lt!==5)return!1;var t=Sl,a=Pc;Pc=0;var l=Ti(_e),e=O.T,n=B.p;try{B.p=32>l?32:l,O.T=null,l=tf,tf=null;var u=Sl,c=_e;if(Lt=0,ze=Sl=null,_e=0,(pt&6)!==0)throw Error(s(331));var f=pt;if(pt|=4,Jo(u.current),Lo(u,u.current,c,l),pt=f,An(0,!1),fa&&typeof fa.onPostCommitFiberRoot=="function")try{fa.onPostCommitFiberRoot(Ce,u)}catch{}return!0}finally{B.p=n,O.T=e,r0(t,a)}}function o0(t,a,l){a=Sa(l,a),a=Hc(t.stateNode,a,2),t=sl(t,a,2),t!==null&&(Xe(t,2),ja(t))}function Ot(t,a,l){if(t.tag===3)o0(t,t,l);else for(;a!==null;){if(a.tag===3){o0(a,t,l);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(bl===null||!bl.has(e))){t=Sa(l,t),l=ho(2),e=sl(a,l,2),e!==null&&(vo(l,e,a,t),Xe(e,2),ja(e));break}}a=a.return}}function uf(t,a,l){var e=t.pingCache;if(e===null){e=t.pingCache=new vm;var n=new Set;e.set(a,n)}else n=e.get(a),n===void 0&&(n=new Set,e.set(a,n));n.has(l)||(Wc=!0,n.add(l),t=Em.bind(null,t,a,l),a.then(t,t))}function Em(t,a,l){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,zt===t&&(ft&l)===l&&(Dt===4||Dt===3&&(ft&62914560)===ft&&300>Na()-Ic?(pt&2)===0&&Me(t,0):kc|=l,Oe===ft&&(Oe=0)),ja(t)}function d0(t,a){a===0&&(a=cr()),t=re(t,a),t!==null&&(Xe(t,a),ja(t))}function Tm(t){var a=t.memoizedState,l=0;a!==null&&(l=a.retryLane),d0(t,l)}function Am(t,a){var l=0;switch(t.tag){case 13:var e=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(s(314))}e!==null&&e.delete(a),d0(t,l)}function Om(t,a){return pi(t,a)}var Gu=null,Re=null,cf=!1,Qu=!1,ff=!1,Jl=0;function ja(t){t!==Re&&t.next===null&&(Re===null?Gu=Re=t:Re=Re.next=t),Qu=!0,cf||(cf=!0,_m())}function An(t,a){if(!ff&&Qu){ff=!0;do for(var l=!1,e=Gu;e!==null;){if(t!==0){var n=e.pendingLanes;if(n===0)var u=0;else{var c=e.suspendedLanes,f=e.pingedLanes;u=(1<<31-ra(42|t)+1)-1,u&=n&~(c&~f),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,v0(e,u))}else u=ft,u=Jn(e,e===zt?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(u&3)===0||Be(e,u)||(l=!0,v0(e,u));e=e.next}while(l);ff=!1}}function zm(){m0()}function m0(){Qu=cf=!1;var t=0;Jl!==0&&(Ym()&&(t=Jl),Jl=0);for(var a=Na(),l=null,e=Gu;e!==null;){var n=e.next,u=y0(e,a);u===0?(e.next=null,l===null?Gu=n:l.next=n,n===null&&(Re=l)):(l=e,(t!==0||(u&3)!==0)&&(Qu=!0)),e=n}An(t)}function y0(t,a){for(var l=t.suspendedLanes,e=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var c=31-ra(u),f=1<<c,o=n[c];o===-1?((f&l)===0||(f&e)!==0)&&(n[c]=Fd(f,a)):o<=a&&(t.expiredLanes|=f),u&=~f}if(a=zt,l=ft,l=Jn(t,t===a?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,l===0||t===a&&(bt===2||bt===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&bi(e),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Be(t,l)){if(a=l&-l,a===t.callbackPriority)return a;switch(e!==null&&bi(e),Ti(l)){case 2:case 8:l=nr;break;case 32:l=Ln;break;case 268435456:l=ur;break;default:l=Ln}return e=h0.bind(null,t),l=pi(l,e),t.callbackPriority=a,t.callbackNode=l,a}return e!==null&&e!==null&&bi(e),t.callbackPriority=2,t.callbackNode=null,2}function h0(t,a){if(Lt!==0&&Lt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Xu()&&t.callbackNode!==l)return null;var e=ft;return e=Jn(t,t===zt?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(Fo(t,e,a),y0(t,Na()),t.callbackNode!=null&&t.callbackNode===l?h0.bind(null,t):null)}function v0(t,a){if(Xu())return null;Fo(t,a,!0)}function _m(){jm(function(){(pt&6)!==0?pi(er,zm):m0()})}function rf(){return Jl===0&&(Jl=ir()),Jl}function g0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:In(""+t)}function p0(t,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,t.id&&l.setAttribute("form",t.id),a.parentNode.insertBefore(l,a),t=new FormData(t),l.parentNode.removeChild(l),t}function Mm(t,a,l,e,n){if(a==="submit"&&l&&l.stateNode===n){var u=g0((n[aa]||null).action),c=e.submitter;c&&(a=(a=c[aa]||null)?g0(a.formAction):c.getAttribute("formAction"),a!==null&&(u=a,c=null));var f=new lu("action","action",null,e,n);t.push({event:f,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Jl!==0){var o=c?p0(n,c):new FormData(n);xc(l,{pending:!0,data:o,method:n.method,action:u},null,o)}}else typeof u=="function"&&(f.preventDefault(),o=c?p0(n,c):new FormData(n),xc(l,{pending:!0,data:o,method:n.method,action:u},u,o))},currentTarget:n}]})}}for(var sf=0;sf<Ji.length;sf++){var of=Ji[sf],xm=of.toLowerCase(),Rm=of[0].toUpperCase()+of.slice(1);Ma(xm,"on"+Rm)}Ma(kr,"onAnimationEnd"),Ma(Fr,"onAnimationIteration"),Ma(Ir,"onAnimationStart"),Ma("dblclick","onDoubleClick"),Ma("focusin","onFocus"),Ma("focusout","onBlur"),Ma(w1,"onTransitionRun"),Ma(J1,"onTransitionStart"),Ma($1,"onTransitionCancel"),Ma(Pr,"onTransitionEnd"),Pl("onMouseEnter",["mouseout","mouseover"]),Pl("onMouseLeave",["mouseout","mouseover"]),Pl("onPointerEnter",["pointerout","pointerover"]),Pl("onPointerLeave",["pointerout","pointerover"]),Nl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(On));function b0(t,a){a=(a&4)!==0;for(var l=0;l<t.length;l++){var e=t[l],n=e.event;e=e.listeners;t:{var u=void 0;if(a)for(var c=e.length-1;0<=c;c--){var f=e[c],o=f.instance,b=f.currentTarget;if(f=f.listener,o!==u&&n.isPropagationStopped())break t;u=f,n.currentTarget=b;try{u(n)}catch(A){xu(A)}n.currentTarget=null,u=o}else for(c=0;c<e.length;c++){if(f=e[c],o=f.instance,b=f.currentTarget,f=f.listener,o!==u&&n.isPropagationStopped())break t;u=f,n.currentTarget=b;try{u(n)}catch(A){xu(A)}n.currentTarget=null,u=o}}}}function it(t,a){var l=a[Ai];l===void 0&&(l=a[Ai]=new Set);var e=t+"__bubble";l.has(e)||(S0(a,t,2,!1),l.add(e))}function df(t,a,l){var e=0;a&&(e|=4),S0(l,t,e,a)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function mf(t){if(!t[Zu]){t[Zu]=!0,dr.forEach(function(l){l!=="selectionchange"&&(Dm.has(l)||df(l,!1,t),df(l,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Zu]||(a[Zu]=!0,df("selectionchange",!1,a))}}function S0(t,a,l,e){switch(L0(a)){case 2:var n=ey;break;case 8:n=ny;break;default:n=Mf}l=n.bind(null,a,l,t),n=void 0,!Yi||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),e?n!==void 0?t.addEventListener(a,l,{capture:!0,passive:n}):t.addEventListener(a,l,!0):n!==void 0?t.addEventListener(a,l,{passive:n}):t.addEventListener(a,l,!1)}function yf(t,a,l,e,n){var u=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var c=e.tag;if(c===3||c===4){var f=e.stateNode.containerInfo;if(f===n)break;if(c===4)for(c=e.return;c!==null;){var o=c.tag;if((o===3||o===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;f!==null;){if(c=kl(f),c===null)return;if(o=c.tag,o===5||o===6||o===26||o===27){e=u=c;continue t}f=f.parentNode}}e=e.return}_r(function(){var b=u,A=Ui(l),R=[];t:{var E=ts.get(t);if(E!==void 0){var T=lu,F=t;switch(t){case"keypress":if(tu(l)===0)break t;case"keydown":case"keyup":T=O1;break;case"focusin":F="focus",T=Bi;break;case"focusout":F="blur",T=Bi;break;case"beforeblur":case"afterblur":T=Bi;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Rr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=d1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=M1;break;case kr:case Fr:case Ir:T=h1;break;case Pr:T=R1;break;case"scroll":case"scrollend":T=s1;break;case"wheel":T=N1;break;case"copy":case"cut":case"paste":T=g1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Nr;break;case"toggle":case"beforetoggle":T=H1}var J=(a&4)!==0,Tt=!J&&(t==="scroll"||t==="scrollend"),v=J?E!==null?E+"Capture":null:E;J=[];for(var y=b,g;y!==null;){var _=y;if(g=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||g===null||v===null||(_=Ze(y,v),_!=null&&J.push(zn(y,_,g))),Tt)break;y=y.return}0<J.length&&(E=new T(E,F,null,l,A),R.push({event:E,listeners:J}))}}if((a&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",E&&l!==Ni&&(F=l.relatedTarget||l.fromElement)&&(kl(F)||F[Wl]))break t;if((T||E)&&(E=A.window===A?A:(E=A.ownerDocument)?E.defaultView||E.parentWindow:window,T?(F=l.relatedTarget||l.toElement,T=b,F=F?kl(F):null,F!==null&&(Tt=S(F),J=F.tag,F!==Tt||J!==5&&J!==27&&J!==6)&&(F=null)):(T=null,F=b),T!==F)){if(J=Rr,_="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(J=Nr,_="onPointerLeave",v="onPointerEnter",y="pointer"),Tt=T==null?E:Qe(T),g=F==null?E:Qe(F),E=new J(_,y+"leave",T,l,A),E.target=Tt,E.relatedTarget=g,_=null,kl(A)===b&&(J=new J(v,y+"enter",F,l,A),J.target=g,J.relatedTarget=Tt,_=J),Tt=_,T&&F)a:{for(J=T,v=F,y=0,g=J;g;g=De(g))y++;for(g=0,_=v;_;_=De(_))g++;for(;0<y-g;)J=De(J),y--;for(;0<g-y;)v=De(v),g--;for(;y--;){if(J===v||v!==null&&J===v.alternate)break a;J=De(J),v=De(v)}J=null}else J=null;T!==null&&E0(R,E,T,J,!1),F!==null&&Tt!==null&&E0(R,Tt,F,J,!0)}}t:{if(E=b?Qe(b):window,T=E.nodeName&&E.nodeName.toLowerCase(),T==="select"||T==="input"&&E.type==="file")var G=Xr;else if(Cr(E))if(Gr)G=V1;else{G=Q1;var nt=G1}else T=E.nodeName,!T||T.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?b&&Di(b.elementType)&&(G=Xr):G=Z1;if(G&&(G=G(t,b))){Br(R,G,l,A);break t}nt&&nt(t,E,b),t==="focusout"&&b&&E.type==="number"&&b.memoizedProps.value!=null&&Ri(E,"number",E.value)}switch(nt=b?Qe(b):window,t){case"focusin":(Cr(nt)||nt.contentEditable==="true")&&(ie=nt,Li=b,ke=null);break;case"focusout":ke=Li=ie=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,$r(R,l,A);break;case"selectionchange":if(K1)break;case"keydown":case"keyup":$r(R,l,A)}var V;if(Gi)t:{switch(t){case"compositionstart":var $="onCompositionStart";break t;case"compositionend":$="onCompositionEnd";break t;case"compositionupdate":$="onCompositionUpdate";break t}$=void 0}else ue?qr(t,l)&&($="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&($="onCompositionStart");$&&(Ur&&l.locale!=="ko"&&(ue||$!=="onCompositionStart"?$==="onCompositionEnd"&&ue&&(V=Mr()):(il=A,qi="value"in il?il.value:il.textContent,ue=!0)),nt=Vu(b,$),0<nt.length&&($=new Dr($,t,null,l,A),R.push({event:$,listeners:nt}),V?$.data=V:(V=jr(l),V!==null&&($.data=V)))),(V=q1?j1(t,l):C1(t,l))&&($=Vu(b,"onBeforeInput"),0<$.length&&(nt=new Dr("onBeforeInput","beforeinput",null,l,A),R.push({event:nt,listeners:$}),nt.data=V)),Mm(R,t,b,l,A)}b0(R,a)})}function zn(t,a,l){return{instance:t,listener:a,currentTarget:l}}function Vu(t,a){for(var l=a+"Capture",e=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ze(t,l),n!=null&&e.unshift(zn(t,n,u)),n=Ze(t,a),n!=null&&e.push(zn(t,n,u))),t.tag===3)return e;t=t.return}return[]}function De(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E0(t,a,l,e,n){for(var u=a._reactName,c=[];l!==null&&l!==e;){var f=l,o=f.alternate,b=f.stateNode;if(f=f.tag,o!==null&&o===e)break;f!==5&&f!==26&&f!==27||b===null||(o=b,n?(b=Ze(l,u),b!=null&&c.unshift(zn(l,b,o))):n||(b=Ze(l,u),b!=null&&c.push(zn(l,b,o)))),l=l.return}c.length!==0&&t.push({event:a,listeners:c})}var Nm=/\r\n?/g,Um=/\u0000|\uFFFD/g;function T0(t){return(typeof t=="string"?t:""+t).replace(Nm,`
`).replace(Um,"")}function A0(t,a){return a=T0(a),T0(t)===a}function Lu(){}function Et(t,a,l,e,n,u){switch(l){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||le(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&le(t,""+e);break;case"className":Wn(t,"class",e);break;case"tabIndex":Wn(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Wn(t,l,e);break;case"style":Or(t,e,u);break;case"data":if(a!=="object"){Wn(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||l!=="href")){t.removeAttribute(l);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(l);break}e=In(""+e),t.setAttribute(l,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(a!=="input"&&Et(t,a,"name",n.name,n,null),Et(t,a,"formEncType",n.formEncType,n,null),Et(t,a,"formMethod",n.formMethod,n,null),Et(t,a,"formTarget",n.formTarget,n,null)):(Et(t,a,"encType",n.encType,n,null),Et(t,a,"method",n.method,n,null),Et(t,a,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(l);break}e=In(""+e),t.setAttribute(l,e);break;case"onClick":e!=null&&(t.onclick=Lu);break;case"onScroll":e!=null&&it("scroll",t);break;case"onScrollEnd":e!=null&&it("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(s(61));if(l=e.__html,l!=null){if(n.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}l=In(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,""+e):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":e===!0?t.setAttribute(l,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,e):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(l,e):t.removeAttribute(l);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(l):t.setAttribute(l,e);break;case"popover":it("beforetoggle",t),it("toggle",t),$n(t,"popover",e);break;case"xlinkActuate":Za(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Za(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Za(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Za(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Za(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Za(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Za(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Za(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Za(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":$n(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=f1.get(l)||l,$n(t,l,e))}}function hf(t,a,l,e,n,u){switch(l){case"style":Or(t,e,u);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(s(61));if(l=e.__html,l!=null){if(n.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"children":typeof e=="string"?le(t,e):(typeof e=="number"||typeof e=="bigint")&&le(t,""+e);break;case"onScroll":e!=null&&it("scroll",t);break;case"onScrollEnd":e!=null&&it("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Lu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mr.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),a=l.slice(2,n?l.length-7:void 0),u=t[aa]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(a,u,n),typeof e=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(a,e,n);break t}l in t?t[l]=e:e===!0?t.setAttribute(l,""):$n(t,l,e)}}}function Kt(t,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":it("error",t),it("load",t);var e=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var c=l[u];if(c!=null)switch(u){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Et(t,a,u,c,l,null)}}n&&Et(t,a,"srcSet",l.srcSet,l,null),e&&Et(t,a,"src",l.src,l,null);return;case"input":it("invalid",t);var f=u=c=n=null,o=null,b=null;for(e in l)if(l.hasOwnProperty(e)){var A=l[e];if(A!=null)switch(e){case"name":n=A;break;case"type":c=A;break;case"checked":o=A;break;case"defaultChecked":b=A;break;case"value":u=A;break;case"defaultValue":f=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,a));break;default:Et(t,a,e,A,l,null)}}Sr(t,u,f,o,b,c,n,!1),kn(t);return;case"select":it("invalid",t),e=c=u=null;for(n in l)if(l.hasOwnProperty(n)&&(f=l[n],f!=null))switch(n){case"value":u=f;break;case"defaultValue":c=f;break;case"multiple":e=f;default:Et(t,a,n,f,l,null)}a=u,l=c,t.multiple=!!e,a!=null?ae(t,!!e,a,!1):l!=null&&ae(t,!!e,l,!0);return;case"textarea":it("invalid",t),u=n=e=null;for(c in l)if(l.hasOwnProperty(c)&&(f=l[c],f!=null))switch(c){case"value":e=f;break;case"defaultValue":n=f;break;case"children":u=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:Et(t,a,c,f,l,null)}Tr(t,e,n,u),kn(t);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(e=l[o],e!=null))switch(o){case"selected":t.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:Et(t,a,o,e,l,null)}return;case"dialog":it("beforetoggle",t),it("toggle",t),it("cancel",t),it("close",t);break;case"iframe":case"object":it("load",t);break;case"video":case"audio":for(e=0;e<On.length;e++)it(On[e],t);break;case"image":it("error",t),it("load",t);break;case"details":it("toggle",t);break;case"embed":case"source":case"link":it("error",t),it("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in l)if(l.hasOwnProperty(b)&&(e=l[b],e!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Et(t,a,b,e,l,null)}return;default:if(Di(a)){for(A in l)l.hasOwnProperty(A)&&(e=l[A],e!==void 0&&hf(t,a,A,e,l,void 0));return}}for(f in l)l.hasOwnProperty(f)&&(e=l[f],e!=null&&Et(t,a,f,e,l,null))}function Hm(t,a,l,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,c=null,f=null,o=null,b=null,A=null;for(T in l){var R=l[T];if(l.hasOwnProperty(T)&&R!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":o=R;default:e.hasOwnProperty(T)||Et(t,a,T,null,e,R)}}for(var E in e){var T=e[E];if(R=l[E],e.hasOwnProperty(E)&&(T!=null||R!=null))switch(E){case"type":u=T;break;case"name":n=T;break;case"checked":b=T;break;case"defaultChecked":A=T;break;case"value":c=T;break;case"defaultValue":f=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,a));break;default:T!==R&&Et(t,a,E,T,e,R)}}xi(t,c,f,o,b,A,u,n);return;case"select":T=c=f=E=null;for(u in l)if(o=l[u],l.hasOwnProperty(u)&&o!=null)switch(u){case"value":break;case"multiple":T=o;default:e.hasOwnProperty(u)||Et(t,a,u,null,e,o)}for(n in e)if(u=e[n],o=l[n],e.hasOwnProperty(n)&&(u!=null||o!=null))switch(n){case"value":E=u;break;case"defaultValue":f=u;break;case"multiple":c=u;default:u!==o&&Et(t,a,n,u,e,o)}a=f,l=c,e=T,E!=null?ae(t,!!l,E,!1):!!e!=!!l&&(a!=null?ae(t,!!l,a,!0):ae(t,!!l,l?[]:"",!1));return;case"textarea":T=E=null;for(f in l)if(n=l[f],l.hasOwnProperty(f)&&n!=null&&!e.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Et(t,a,f,null,e,n)}for(c in e)if(n=e[c],u=l[c],e.hasOwnProperty(c)&&(n!=null||u!=null))switch(c){case"value":E=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==u&&Et(t,a,c,n,e,u)}Er(t,E,T);return;case"option":for(var F in l)if(E=l[F],l.hasOwnProperty(F)&&E!=null&&!e.hasOwnProperty(F))switch(F){case"selected":t.selected=!1;break;default:Et(t,a,F,null,e,E)}for(o in e)if(E=e[o],T=l[o],e.hasOwnProperty(o)&&E!==T&&(E!=null||T!=null))switch(o){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Et(t,a,o,E,e,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in l)E=l[J],l.hasOwnProperty(J)&&E!=null&&!e.hasOwnProperty(J)&&Et(t,a,J,null,e,E);for(b in e)if(E=e[b],T=l[b],e.hasOwnProperty(b)&&E!==T&&(E!=null||T!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,a));break;default:Et(t,a,b,E,e,T)}return;default:if(Di(a)){for(var Tt in l)E=l[Tt],l.hasOwnProperty(Tt)&&E!==void 0&&!e.hasOwnProperty(Tt)&&hf(t,a,Tt,void 0,e,E);for(A in e)E=e[A],T=l[A],!e.hasOwnProperty(A)||E===T||E===void 0&&T===void 0||hf(t,a,A,E,e,T);return}}for(var v in l)E=l[v],l.hasOwnProperty(v)&&E!=null&&!e.hasOwnProperty(v)&&Et(t,a,v,null,e,E);for(R in e)E=e[R],T=l[R],!e.hasOwnProperty(R)||E===T||E==null&&T==null||Et(t,a,R,E,e,T)}var vf=null,gf=null;function Ku(t){return t.nodeType===9?t:t.ownerDocument}function O0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function z0(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function pf(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var bf=null;function Ym(){var t=window.event;return t&&t.type==="popstate"?t===bf?!1:(bf=t,!0):(bf=null,!1)}var _0=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,M0=typeof Promise=="function"?Promise:void 0,jm=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(t){return M0.resolve(null).then(t).catch(Cm)}:_0;function Cm(t){setTimeout(function(){throw t})}function Tl(t){return t==="head"}function x0(t,a){var l=a,e=0,n=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"){if(0<e&&8>e){l=e;var c=t.ownerDocument;if(l&1&&_n(c.documentElement),l&2&&_n(c.body),l&4)for(l=c.head,_n(l),c=l.firstChild;c;){var f=c.nextSibling,o=c.nodeName;c[Ge]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&c.rel.toLowerCase()==="stylesheet"||l.removeChild(c),c=f}}if(n===0){t.removeChild(u),Yn(a);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:e=l.charCodeAt(0)-48;else e=0;l=u}while(l);Yn(a)}function Sf(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Sf(l),Oi(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Bm(t,a,l,e){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[Ge])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ra(t.nextSibling),t===null)break}return null}function Xm(t,a,l){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ra(t.nextSibling),t===null))return null;return t}function Ef(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Gm(t,a){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")a();else{var e=function(){a(),l.removeEventListener("DOMContentLoaded",e)};l.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function Ra(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return t}var Tf=null;function R0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(a===0)return t;a--}else l==="/$"&&a++}t=t.previousSibling}return null}function D0(t,a,l){switch(a=Ku(l),t){case"html":if(t=a.documentElement,!t)throw Error(s(452));return t;case"head":if(t=a.head,!t)throw Error(s(453));return t;case"body":if(t=a.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function _n(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Oi(t)}var _a=new Map,N0=new Set;function wu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ll=B.d;B.d={f:Qm,r:Zm,D:Vm,C:Lm,L:Km,m:wm,X:$m,S:Jm,M:Wm};function Qm(){var t=ll.f(),a=Cu();return t||a}function Zm(t){var a=Fl(t);a!==null&&a.tag===5&&a.type==="form"?ks(a):ll.r(t)}var Ne=typeof document>"u"?null:document;function U0(t,a,l){var e=Ne;if(e&&typeof a=="string"&&a){var n=ba(a);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),N0.has(n)||(N0.add(n),t={rel:t,crossOrigin:l,href:a},e.querySelector(n)===null&&(a=e.createElement("link"),Kt(a,"link",t),Xt(a),e.head.appendChild(a)))}}function Vm(t){ll.D(t),U0("dns-prefetch",t,null)}function Lm(t,a){ll.C(t,a),U0("preconnect",t,a)}function Km(t,a,l){ll.L(t,a,l);var e=Ne;if(e&&t&&a){var n='link[rel="preload"][as="'+ba(a)+'"]';a==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ba(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ba(l.imageSizes)+'"]')):n+='[href="'+ba(t)+'"]';var u=n;switch(a){case"style":u=Ue(t);break;case"script":u=He(t)}_a.has(u)||(t=M({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:t,as:a},l),_a.set(u,t),e.querySelector(n)!==null||a==="style"&&e.querySelector(Mn(u))||a==="script"&&e.querySelector(xn(u))||(a=e.createElement("link"),Kt(a,"link",t),Xt(a),e.head.appendChild(a)))}}function wm(t,a){ll.m(t,a);var l=Ne;if(l&&t){var e=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+ba(e)+'"][href="'+ba(t)+'"]',u=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=He(t)}if(!_a.has(u)&&(t=M({rel:"modulepreload",href:t},a),_a.set(u,t),l.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(xn(u)))return}e=l.createElement("link"),Kt(e,"link",t),Xt(e),l.head.appendChild(e)}}}function Jm(t,a,l){ll.S(t,a,l);var e=Ne;if(e&&t){var n=Il(e).hoistableStyles,u=Ue(t);a=a||"default";var c=n.get(u);if(!c){var f={loading:0,preload:null};if(c=e.querySelector(Mn(u)))f.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":a},l),(l=_a.get(u))&&Af(t,l);var o=c=e.createElement("link");Xt(o),Kt(o,"link",t),o._p=new Promise(function(b,A){o.onload=b,o.onerror=A}),o.addEventListener("load",function(){f.loading|=1}),o.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ju(c,a,e)}c={type:"stylesheet",instance:c,count:1,state:f},n.set(u,c)}}}function $m(t,a){ll.X(t,a);var l=Ne;if(l&&t){var e=Il(l).hoistableScripts,n=He(t),u=e.get(n);u||(u=l.querySelector(xn(n)),u||(t=M({src:t,async:!0},a),(a=_a.get(n))&&Of(t,a),u=l.createElement("script"),Xt(u),Kt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},e.set(n,u))}}function Wm(t,a){ll.M(t,a);var l=Ne;if(l&&t){var e=Il(l).hoistableScripts,n=He(t),u=e.get(n);u||(u=l.querySelector(xn(n)),u||(t=M({src:t,async:!0,type:"module"},a),(a=_a.get(n))&&Of(t,a),u=l.createElement("script"),Xt(u),Kt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},e.set(n,u))}}function H0(t,a,l,e){var n=(n=tt.current)?wu(n):null;if(!n)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=Ue(l.href),l=Il(n).hoistableStyles,e=l.get(a),e||(e={type:"style",instance:null,count:0,state:null},l.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ue(l.href);var u=Il(n).hoistableStyles,c=u.get(t);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,c),(u=n.querySelector(Mn(t)))&&!u._p&&(c.instance=u,c.state.loading=5),_a.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},_a.set(t,l),u||km(n,t,l,c.state))),a&&e===null)throw Error(s(528,""));return c}if(a&&e!==null)throw Error(s(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=He(l),l=Il(n).hoistableScripts,e=l.get(a),e||(e={type:"script",instance:null,count:0,state:null},l.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ue(t){return'href="'+ba(t)+'"'}function Mn(t){return'link[rel="stylesheet"]['+t+"]"}function Y0(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function km(t,a,l,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Kt(a,"link",l),Xt(a),t.head.appendChild(a))}function He(t){return'[src="'+ba(t)+'"]'}function xn(t){return"script[async]"+t}function q0(t,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+ba(l.href)+'"]');if(e)return a.instance=e,Xt(e),e;var n=M({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Xt(e),Kt(e,"style",n),Ju(e,l.precedence,t),a.instance=e;case"stylesheet":n=Ue(l.href);var u=t.querySelector(Mn(n));if(u)return a.state.loading|=4,a.instance=u,Xt(u),u;e=Y0(l),(n=_a.get(n))&&Af(e,n),u=(t.ownerDocument||t).createElement("link"),Xt(u);var c=u;return c._p=new Promise(function(f,o){c.onload=f,c.onerror=o}),Kt(u,"link",e),a.state.loading|=4,Ju(u,l.precedence,t),a.instance=u;case"script":return u=He(l.src),(n=t.querySelector(xn(u)))?(a.instance=n,Xt(n),n):(e=l,(n=_a.get(u))&&(e=M({},l),Of(e,n)),t=t.ownerDocument||t,n=t.createElement("script"),Xt(n),Kt(n,"link",e),t.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,Ju(e,l.precedence,t));return a.instance}function Ju(t,a,l){for(var e=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,u=n,c=0;c<e.length;c++){var f=e[c];if(f.dataset.precedence===a)u=f;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(t,a.firstChild))}function Af(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Of(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var $u=null;function j0(t,a,l){if($u===null){var e=new Map,n=$u=new Map;n.set(l,e)}else n=$u,e=n.get(l),e||(e=new Map,n.set(l,e));if(e.has(t))return e;for(e.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var u=l[n];if(!(u[Ge]||u[Wt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var c=u.getAttribute(a)||"";c=t+c;var f=e.get(c);f?f.push(u):e.set(c,[u])}}return e}function C0(t,a,l){t=t.ownerDocument||t,t.head.insertBefore(l,a==="title"?t.querySelector("head > title"):null)}function Fm(t,a,l){if(l===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function B0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Rn=null;function Im(){}function Pm(t,a,l){if(Rn===null)throw Error(s(475));var e=Rn;if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ue(l.href),u=t.querySelector(Mn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wu.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Xt(u);return}u=t.ownerDocument||t,l=Y0(l),(n=_a.get(n))&&Af(l,n),u=u.createElement("link"),Xt(u);var c=u;c._p=new Promise(function(f,o){c.onload=f,c.onerror=o}),Kt(u,"link",l),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wu.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}function ty(){if(Rn===null)throw Error(s(475));var t=Rn;return t.stylesheets&&t.count===0&&zf(t,t.stylesheets),0<t.count?function(a){var l=setTimeout(function(){if(t.stylesheets&&zf(t,t.stylesheets),t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}},6e4);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Wu(){if(this.count--,this.count===0){if(this.stylesheets)zf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ku=null;function zf(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ku=new Map,a.forEach(ay,t),ku=null,Wu.call(t))}function ay(t,a){if(!(a.state.loading&4)){var l=ku.get(t);if(l)var e=l.get(null);else{l=new Map,ku.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var c=n[u];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),e=c)}e&&l.set(null,e)}n=a.instance,c=n.getAttribute("data-precedence"),u=l.get(c)||e,u===e&&l.set(null,n),l.set(c,n),this.count++,e=Wu.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),a.state.loading|=4}}var Dn={$$typeof:L,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function ly(t,a,l,e,n,u,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Si(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.hiddenUpdates=Si(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function X0(t,a,l,e,n,u,c,f,o,b,A,R){return t=new ly(t,a,l,c,f,o,b,R),a=1,u===!0&&(a|=24),u=oa(3,null,null,a),t.current=u,u.stateNode=t,a=uc(),a.refCount++,t.pooledCache=a,a.refCount++,u.memoizedState={element:e,isDehydrated:l,cache:a},rc(u),t}function G0(t){return t?(t=se,t):se}function Q0(t,a,l,e,n,u){n=G0(n),e.context===null?e.context=n:e.pendingContext=n,e=rl(a),e.payload={element:l},u=u===void 0?null:u,u!==null&&(e.callback=u),l=sl(t,e,a),l!==null&&(va(l,t,a),un(l,t,a))}function Z0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<a?l:a}}function _f(t,a){Z0(t,a),(t=t.alternate)&&Z0(t,a)}function V0(t){if(t.tag===13){var a=re(t,67108864);a!==null&&va(a,t,67108864),_f(t,67108864)}}var Fu=!0;function ey(t,a,l,e){var n=O.T;O.T=null;var u=B.p;try{B.p=2,Mf(t,a,l,e)}finally{B.p=u,O.T=n}}function ny(t,a,l,e){var n=O.T;O.T=null;var u=B.p;try{B.p=8,Mf(t,a,l,e)}finally{B.p=u,O.T=n}}function Mf(t,a,l,e){if(Fu){var n=xf(e);if(n===null)yf(t,a,e,Iu,l),K0(t,e);else if(iy(n,t,a,l,e))e.stopPropagation();else if(K0(t,e),a&4&&-1<uy.indexOf(t)){for(;n!==null;){var u=Fl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var c=Dl(u.pendingLanes);if(c!==0){var f=u;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var o=1<<31-ra(c);f.entanglements[1]|=o,c&=~o}ja(u),(pt&6)===0&&(qu=Na()+500,An(0))}}break;case 13:f=re(u,2),f!==null&&va(f,u,2),Cu(),_f(u,2)}if(u=xf(e),u===null&&yf(t,a,e,Iu,l),u===n)break;n=u}n!==null&&e.stopPropagation()}else yf(t,a,e,null,l)}}function xf(t){return t=Ui(t),Rf(t)}var Iu=null;function Rf(t){if(Iu=null,t=kl(t),t!==null){var a=S(t);if(a===null)t=null;else{var l=a.tag;if(l===13){if(t=x(a),t!==null)return t;t=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Iu=t,null}function L0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ld()){case er:return 2;case nr:return 8;case Ln:case Kd:return 32;case ur:return 268435456;default:return 32}default:return 32}}var Df=!1,Al=null,Ol=null,zl=null,Nn=new Map,Un=new Map,_l=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(t,a){switch(t){case"focusin":case"focusout":Al=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":zl=null;break;case"pointerover":case"pointerout":Nn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(a.pointerId)}}function Hn(t,a,l,e,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:a,domEventName:l,eventSystemFlags:e,nativeEvent:u,targetContainers:[n]},a!==null&&(a=Fl(a),a!==null&&V0(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),t)}function iy(t,a,l,e,n){switch(a){case"focusin":return Al=Hn(Al,t,a,l,e,n),!0;case"dragenter":return Ol=Hn(Ol,t,a,l,e,n),!0;case"mouseover":return zl=Hn(zl,t,a,l,e,n),!0;case"pointerover":var u=n.pointerId;return Nn.set(u,Hn(Nn.get(u)||null,t,a,l,e,n)),!0;case"gotpointercapture":return u=n.pointerId,Un.set(u,Hn(Un.get(u)||null,t,a,l,e,n)),!0}return!1}function w0(t){var a=kl(t.target);if(a!==null){var l=S(a);if(l!==null){if(a=l.tag,a===13){if(a=x(l),a!==null){t.blockedOn=a,Pd(t.priority,function(){if(l.tag===13){var e=ha();e=Ei(e);var n=re(l,e);n!==null&&va(n,l,e),_f(l,e)}});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pu(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var l=xf(t.nativeEvent);if(l===null){l=t.nativeEvent;var e=new l.constructor(l.type,l);Ni=e,l.target.dispatchEvent(e),Ni=null}else return a=Fl(l),a!==null&&V0(a),t.blockedOn=l,!1;a.shift()}return!0}function J0(t,a,l){Pu(t)&&l.delete(a)}function cy(){Df=!1,Al!==null&&Pu(Al)&&(Al=null),Ol!==null&&Pu(Ol)&&(Ol=null),zl!==null&&Pu(zl)&&(zl=null),Nn.forEach(J0),Un.forEach(J0)}function ti(t,a){t.blockedOn===a&&(t.blockedOn=null,Df||(Df=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,cy)))}var ai=null;function $0(t){ai!==t&&(ai=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ai===t&&(ai=null);for(var a=0;a<t.length;a+=3){var l=t[a],e=t[a+1],n=t[a+2];if(typeof e!="function"){if(Rf(e||l)===null)continue;break}var u=Fl(l);u!==null&&(t.splice(a,3),a-=3,xc(u,{pending:!0,data:n,method:l.method,action:e},e,n))}}))}function Yn(t){function a(o){return ti(o,t)}Al!==null&&ti(Al,t),Ol!==null&&ti(Ol,t),zl!==null&&ti(zl,t),Nn.forEach(a),Un.forEach(a);for(var l=0;l<_l.length;l++){var e=_l[l];e.blockedOn===t&&(e.blockedOn=null)}for(;0<_l.length&&(l=_l[0],l.blockedOn===null);)w0(l),l.blockedOn===null&&_l.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(e=0;e<l.length;e+=3){var n=l[e],u=l[e+1],c=n[aa]||null;if(typeof u=="function")c||$0(l);else if(c){var f=null;if(u&&u.hasAttribute("formAction")){if(n=u,c=u[aa]||null)f=c.formAction;else if(Rf(n)!==null)continue}else f=c.action;typeof f=="function"?l[e+1]=f:(l.splice(e,3),e-=3),$0(l)}}}function Nf(t){this._internalRoot=t}li.prototype.render=Nf.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(s(409));var l=a.current,e=ha();Q0(l,e,t,a,null,null)},li.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Q0(t.current,2,null,t,null,null),Cu(),a[Wl]=null}};function li(t){this._internalRoot=t}li.prototype.unstable_scheduleHydration=function(t){if(t){var a=sr();t={blockedOn:null,target:t,priority:a};for(var l=0;l<_l.length&&a!==0&&a<_l[l].priority;l++);_l.splice(l,0,t),l===0&&w0(t)}};var W0=r.version;if(W0!=="19.1.1")throw Error(s(527,W0,"19.1.1"));B.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=z(a),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var fy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{Ce=ei.inject(fy),fa=ei}catch{}}return jn.createRoot=function(t,a){if(!h(t))throw Error(s(299));var l=!1,e="",n=so,u=oo,c=mo,f=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(f=a.unstable_transitionCallbacks)),a=X0(t,1,!1,null,null,l,e,n,u,c,f,null),t[Wl]=a.current,mf(t),new Nf(a)},jn.hydrateRoot=function(t,a,l){if(!h(t))throw Error(s(299));var e=!1,n="",u=so,c=oo,f=mo,o=null,b=null;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(f=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(o=l.unstable_transitionCallbacks),l.formState!==void 0&&(b=l.formState)),a=X0(t,1,!0,a,l??null,e,n,u,c,f,o,b),a.context=G0(null),l=a.current,e=ha(),e=Ei(e),n=rl(e),n.callback=null,sl(l,n,e),l=e,a.current.lanes=l,Xe(a,l),ja(a),t[Wl]=a.current,mf(t),new li(a)},jn.version="19.1.1",jn}var id;function Ey(){if(id)return Yf.exports;id=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Yf.exports=Sy(),Yf.exports}var Ty=Ey();function Ay(i){if(i.sheet)return i.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===i)return document.styleSheets[r]}function Oy(i){var r=document.createElement("style");return r.setAttribute("data-emotion",i.key),i.nonce!==void 0&&r.setAttribute("nonce",i.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var zy=(function(){function i(d){var s=this;this._insertTag=function(h){var S;s.tags.length===0?s.insertionPoint?S=s.insertionPoint.nextSibling:s.prepend?S=s.container.firstChild:S=s.before:S=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(h,S),s.tags.push(h)},this.isSpeedy=d.speedy===void 0?!0:d.speedy,this.tags=[],this.ctr=0,this.nonce=d.nonce,this.key=d.key,this.container=d.container,this.prepend=d.prepend,this.insertionPoint=d.insertionPoint,this.before=null}var r=i.prototype;return r.hydrate=function(s){s.forEach(this._insertTag)},r.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Oy(this));var h=this.tags[this.tags.length-1];if(this.isSpeedy){var S=Ay(h);try{S.insertRule(s,S.cssRules.length)}catch{}}else h.appendChild(document.createTextNode(s));this.ctr++},r.flush=function(){this.tags.forEach(function(s){var h;return(h=s.parentNode)==null?void 0:h.removeChild(s)}),this.tags=[],this.ctr=0},i})(),It="-ms-",oi="-moz-",dt="-webkit-",Ed="comm",kf="rule",Ff="decl",_y="@import",Td="@keyframes",My="@layer",xy=Math.abs,di=String.fromCharCode,Ry=Object.assign;function Dy(i,r){return wt(i,0)^45?(((r<<2^wt(i,0))<<2^wt(i,1))<<2^wt(i,2))<<2^wt(i,3):0}function Ad(i){return i.trim()}function Ny(i,r){return(i=r.exec(i))?i[0]:i}function mt(i,r,d){return i.replace(r,d)}function Lf(i,r){return i.indexOf(r)}function wt(i,r){return i.charCodeAt(r)|0}function Bn(i,r,d){return i.slice(r,d)}function Ba(i){return i.length}function If(i){return i.length}function ni(i,r){return r.push(i),i}function Uy(i,r){return i.map(r).join("")}var mi=1,qe=1,Od=0,ia=0,qt=0,je="";function yi(i,r,d,s,h,S,x){return{value:i,root:r,parent:d,type:s,props:h,children:S,line:mi,column:qe,length:x,return:""}}function Cn(i,r){return Ry(yi("",null,null,"",null,null,0),i,{length:-i.length},r)}function Hy(){return qt}function Yy(){return qt=ia>0?wt(je,--ia):0,qe--,qt===10&&(qe=1,mi--),qt}function ga(){return qt=ia<Od?wt(je,ia++):0,qe++,qt===10&&(qe=1,mi++),qt}function Ga(){return wt(je,ia)}function fi(){return ia}function Zn(i,r){return Bn(je,i,r)}function Xn(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zd(i){return mi=qe=1,Od=Ba(je=i),ia=0,[]}function _d(i){return je="",i}function ri(i){return Ad(Zn(ia-1,Kf(i===91?i+2:i===40?i+1:i)))}function qy(i){for(;(qt=Ga())&&qt<33;)ga();return Xn(i)>2||Xn(qt)>3?"":" "}function jy(i,r){for(;--r&&ga()&&!(qt<48||qt>102||qt>57&&qt<65||qt>70&&qt<97););return Zn(i,fi()+(r<6&&Ga()==32&&ga()==32))}function Kf(i){for(;ga();)switch(qt){case i:return ia;case 34:case 39:i!==34&&i!==39&&Kf(qt);break;case 40:i===41&&Kf(i);break;case 92:ga();break}return ia}function Cy(i,r){for(;ga()&&i+qt!==57;)if(i+qt===84&&Ga()===47)break;return"/*"+Zn(r,ia-1)+"*"+di(i===47?i:ga())}function By(i){for(;!Xn(Ga());)ga();return Zn(i,ia)}function Xy(i){return _d(si("",null,null,null,[""],i=zd(i),0,[0],i))}function si(i,r,d,s,h,S,x,H,z){for(var p=0,M=0,j=x,Q=0,I=0,Z=0,q=1,U=1,P=1,W=0,L="",gt=h,D=S,ct=s,at=L;U;)switch(Z=W,W=ga()){case 40:if(Z!=108&&wt(at,j-1)==58){Lf(at+=mt(ri(W),"&","&\f"),"&\f")!=-1&&(P=-1);break}case 34:case 39:case 91:at+=ri(W);break;case 9:case 10:case 13:case 32:at+=qy(Z);break;case 92:at+=jy(fi()-1,7);continue;case 47:switch(Ga()){case 42:case 47:ni(Gy(Cy(ga(),fi()),r,d),z);break;default:at+="/"}break;case 123*q:H[p++]=Ba(at)*P;case 125*q:case 59:case 0:switch(W){case 0:case 125:U=0;case 59+M:P==-1&&(at=mt(at,/\f/g,"")),I>0&&Ba(at)-j&&ni(I>32?fd(at+";",s,d,j-1):fd(mt(at," ","")+";",s,d,j-2),z);break;case 59:at+=";";default:if(ni(ct=cd(at,r,d,p,M,h,H,L,gt=[],D=[],j),S),W===123)if(M===0)si(at,r,ct,ct,gt,S,j,H,D);else switch(Q===99&&wt(at,3)===110?100:Q){case 100:case 108:case 109:case 115:si(i,ct,ct,s&&ni(cd(i,ct,ct,0,0,h,H,L,h,gt=[],j),D),h,D,j,H,s?gt:D);break;default:si(at,ct,ct,ct,[""],D,0,H,D)}}p=M=I=0,q=P=1,L=at="",j=x;break;case 58:j=1+Ba(at),I=Z;default:if(q<1){if(W==123)--q;else if(W==125&&q++==0&&Yy()==125)continue}switch(at+=di(W),W*q){case 38:P=M>0?1:(at+="\f",-1);break;case 44:H[p++]=(Ba(at)-1)*P,P=1;break;case 64:Ga()===45&&(at+=ri(ga())),Q=Ga(),M=j=Ba(L=at+=By(fi())),W++;break;case 45:Z===45&&Ba(at)==2&&(q=0)}}return S}function cd(i,r,d,s,h,S,x,H,z,p,M){for(var j=h-1,Q=h===0?S:[""],I=If(Q),Z=0,q=0,U=0;Z<s;++Z)for(var P=0,W=Bn(i,j+1,j=xy(q=x[Z])),L=i;P<I;++P)(L=Ad(q>0?Q[P]+" "+W:mt(W,/&\f/g,Q[P])))&&(z[U++]=L);return yi(i,r,d,h===0?kf:H,z,p,M)}function Gy(i,r,d){return yi(i,r,d,Ed,di(Hy()),Bn(i,2,-2),0)}function fd(i,r,d,s){return yi(i,r,d,Ff,Bn(i,0,s),Bn(i,s+1,-1),s)}function Ye(i,r){for(var d="",s=If(i),h=0;h<s;h++)d+=r(i[h],h,i,r)||"";return d}function Qy(i,r,d,s){switch(i.type){case My:if(i.children.length)break;case _y:case Ff:return i.return=i.return||i.value;case Ed:return"";case Td:return i.return=i.value+"{"+Ye(i.children,s)+"}";case kf:i.value=i.props.join(",")}return Ba(d=Ye(i.children,s))?i.return=i.value+"{"+d+"}":""}function Zy(i){var r=If(i);return function(d,s,h,S){for(var x="",H=0;H<r;H++)x+=i[H](d,s,h,S)||"";return x}}function Vy(i){return function(r){r.root||(r=r.return)&&i(r)}}function Ly(i){var r=Object.create(null);return function(d){return r[d]===void 0&&(r[d]=i(d)),r[d]}}var Ky=function(r,d,s){for(var h=0,S=0;h=S,S=Ga(),h===38&&S===12&&(d[s]=1),!Xn(S);)ga();return Zn(r,ia)},wy=function(r,d){var s=-1,h=44;do switch(Xn(h)){case 0:h===38&&Ga()===12&&(d[s]=1),r[s]+=Ky(ia-1,d,s);break;case 2:r[s]+=ri(h);break;case 4:if(h===44){r[++s]=Ga()===58?"&\f":"",d[s]=r[s].length;break}default:r[s]+=di(h)}while(h=ga());return r},Jy=function(r,d){return _d(wy(zd(r),d))},rd=new WeakMap,$y=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var d=r.value,s=r.parent,h=r.column===s.column&&r.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(r.props.length===1&&d.charCodeAt(0)!==58&&!rd.get(s))&&!h){rd.set(r,!0);for(var S=[],x=Jy(d,S),H=s.props,z=0,p=0;z<x.length;z++)for(var M=0;M<H.length;M++,p++)r.props[p]=S[z]?x[z].replace(/&\f/g,H[M]):H[M]+" "+x[z]}}},Wy=function(r){if(r.type==="decl"){var d=r.value;d.charCodeAt(0)===108&&d.charCodeAt(2)===98&&(r.return="",r.value="")}};function Md(i,r){switch(Dy(i,r)){case 5103:return dt+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return dt+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return dt+i+oi+i+It+i+i;case 6828:case 4268:return dt+i+It+i+i;case 6165:return dt+i+It+"flex-"+i+i;case 5187:return dt+i+mt(i,/(\w+).+(:[^]+)/,dt+"box-$1$2"+It+"flex-$1$2")+i;case 5443:return dt+i+It+"flex-item-"+mt(i,/flex-|-self/,"")+i;case 4675:return dt+i+It+"flex-line-pack"+mt(i,/align-content|flex-|-self/,"")+i;case 5548:return dt+i+It+mt(i,"shrink","negative")+i;case 5292:return dt+i+It+mt(i,"basis","preferred-size")+i;case 6060:return dt+"box-"+mt(i,"-grow","")+dt+i+It+mt(i,"grow","positive")+i;case 4554:return dt+mt(i,/([^-])(transform)/g,"$1"+dt+"$2")+i;case 6187:return mt(mt(mt(i,/(zoom-|grab)/,dt+"$1"),/(image-set)/,dt+"$1"),i,"")+i;case 5495:case 3959:return mt(i,/(image-set\([^]*)/,dt+"$1$`$1");case 4968:return mt(mt(i,/(.+:)(flex-)?(.*)/,dt+"box-pack:$3"+It+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+dt+i+i;case 4095:case 3583:case 4068:case 2532:return mt(i,/(.+)-inline(.+)/,dt+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ba(i)-1-r>6)switch(wt(i,r+1)){case 109:if(wt(i,r+4)!==45)break;case 102:return mt(i,/(.+:)(.+)-([^]+)/,"$1"+dt+"$2-$3$1"+oi+(wt(i,r+3)==108?"$3":"$2-$3"))+i;case 115:return~Lf(i,"stretch")?Md(mt(i,"stretch","fill-available"),r)+i:i}break;case 4949:if(wt(i,r+1)!==115)break;case 6444:switch(wt(i,Ba(i)-3-(~Lf(i,"!important")&&10))){case 107:return mt(i,":",":"+dt)+i;case 101:return mt(i,/(.+:)([^;!]+)(;|!.+)?/,"$1"+dt+(wt(i,14)===45?"inline-":"")+"box$3$1"+dt+"$2$3$1"+It+"$2box$3")+i}break;case 5936:switch(wt(i,r+11)){case 114:return dt+i+It+mt(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return dt+i+It+mt(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return dt+i+It+mt(i,/[svh]\w+-[tblr]{2}/,"lr")+i}return dt+i+It+i+i}return i}var ky=function(r,d,s,h){if(r.length>-1&&!r.return)switch(r.type){case Ff:r.return=Md(r.value,r.length);break;case Td:return Ye([Cn(r,{value:mt(r.value,"@","@"+dt)})],h);case kf:if(r.length)return Uy(r.props,function(S){switch(Ny(S,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ye([Cn(r,{props:[mt(S,/:(read-\w+)/,":"+oi+"$1")]})],h);case"::placeholder":return Ye([Cn(r,{props:[mt(S,/:(plac\w+)/,":"+dt+"input-$1")]}),Cn(r,{props:[mt(S,/:(plac\w+)/,":"+oi+"$1")]}),Cn(r,{props:[mt(S,/:(plac\w+)/,It+"input-$1")]})],h)}return""})}},Fy=[ky],Iy=function(r){var d=r.key;if(d==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(q){var U=q.getAttribute("data-emotion");U.indexOf(" ")!==-1&&(document.head.appendChild(q),q.setAttribute("data-s",""))})}var h=r.stylisPlugins||Fy,S={},x,H=[];x=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+d+' "]'),function(q){for(var U=q.getAttribute("data-emotion").split(" "),P=1;P<U.length;P++)S[U[P]]=!0;H.push(q)});var z,p=[$y,Wy];{var M,j=[Qy,Vy(function(q){M.insert(q)})],Q=Zy(p.concat(h,j)),I=function(U){return Ye(Xy(U),Q)};z=function(U,P,W,L){M=W,I(U?U+"{"+P.styles+"}":P.styles),L&&(Z.inserted[P.name]=!0)}}var Z={key:d,sheet:new zy({key:d,container:x,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:S,registered:{},insert:z};return Z.sheet.hydrate(H),Z},Bf={exports:{}},yt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function Py(){if(sd)return yt;sd=1;var i=typeof Symbol=="function"&&Symbol.for,r=i?Symbol.for("react.element"):60103,d=i?Symbol.for("react.portal"):60106,s=i?Symbol.for("react.fragment"):60107,h=i?Symbol.for("react.strict_mode"):60108,S=i?Symbol.for("react.profiler"):60114,x=i?Symbol.for("react.provider"):60109,H=i?Symbol.for("react.context"):60110,z=i?Symbol.for("react.async_mode"):60111,p=i?Symbol.for("react.concurrent_mode"):60111,M=i?Symbol.for("react.forward_ref"):60112,j=i?Symbol.for("react.suspense"):60113,Q=i?Symbol.for("react.suspense_list"):60120,I=i?Symbol.for("react.memo"):60115,Z=i?Symbol.for("react.lazy"):60116,q=i?Symbol.for("react.block"):60121,U=i?Symbol.for("react.fundamental"):60117,P=i?Symbol.for("react.responder"):60118,W=i?Symbol.for("react.scope"):60119;function L(D){if(typeof D=="object"&&D!==null){var ct=D.$$typeof;switch(ct){case r:switch(D=D.type,D){case z:case p:case s:case S:case h:case j:return D;default:switch(D=D&&D.$$typeof,D){case H:case M:case Z:case I:case x:return D;default:return ct}}case d:return ct}}}function gt(D){return L(D)===p}return yt.AsyncMode=z,yt.ConcurrentMode=p,yt.ContextConsumer=H,yt.ContextProvider=x,yt.Element=r,yt.ForwardRef=M,yt.Fragment=s,yt.Lazy=Z,yt.Memo=I,yt.Portal=d,yt.Profiler=S,yt.StrictMode=h,yt.Suspense=j,yt.isAsyncMode=function(D){return gt(D)||L(D)===z},yt.isConcurrentMode=gt,yt.isContextConsumer=function(D){return L(D)===H},yt.isContextProvider=function(D){return L(D)===x},yt.isElement=function(D){return typeof D=="object"&&D!==null&&D.$$typeof===r},yt.isForwardRef=function(D){return L(D)===M},yt.isFragment=function(D){return L(D)===s},yt.isLazy=function(D){return L(D)===Z},yt.isMemo=function(D){return L(D)===I},yt.isPortal=function(D){return L(D)===d},yt.isProfiler=function(D){return L(D)===S},yt.isStrictMode=function(D){return L(D)===h},yt.isSuspense=function(D){return L(D)===j},yt.isValidElementType=function(D){return typeof D=="string"||typeof D=="function"||D===s||D===p||D===S||D===h||D===j||D===Q||typeof D=="object"&&D!==null&&(D.$$typeof===Z||D.$$typeof===I||D.$$typeof===x||D.$$typeof===H||D.$$typeof===M||D.$$typeof===U||D.$$typeof===P||D.$$typeof===W||D.$$typeof===q)},yt.typeOf=L,yt}var od;function th(){return od||(od=1,Bf.exports=Py()),Bf.exports}var Xf,dd;function ah(){if(dd)return Xf;dd=1;var i=th(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},d={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},h={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},S={};S[i.ForwardRef]=s,S[i.Memo]=h;function x(Z){return i.isMemo(Z)?h:S[Z.$$typeof]||r}var H=Object.defineProperty,z=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,M=Object.getOwnPropertyDescriptor,j=Object.getPrototypeOf,Q=Object.prototype;function I(Z,q,U){if(typeof q!="string"){if(Q){var P=j(q);P&&P!==Q&&I(Z,P,U)}var W=z(q);p&&(W=W.concat(p(q)));for(var L=x(Z),gt=x(q),D=0;D<W.length;++D){var ct=W[D];if(!d[ct]&&!(U&&U[ct])&&!(gt&&gt[ct])&&!(L&&L[ct])){var at=M(q,ct);try{H(Z,ct,at)}catch{}}}}return Z}return Xf=I,Xf}ah();var lh=!0;function xd(i,r,d){var s="";return d.split(" ").forEach(function(h){i[h]!==void 0?r.push(i[h]+";"):h&&(s+=h+" ")}),s}var Pf=function(r,d,s){var h=r.key+"-"+d.name;(s===!1||lh===!1)&&r.registered[h]===void 0&&(r.registered[h]=d.styles)},Rd=function(r,d,s){Pf(r,d,s);var h=r.key+"-"+d.name;if(r.inserted[d.name]===void 0){var S=d;do r.insert(d===S?"."+h:"",S,r.sheet,!0),S=S.next;while(S!==void 0)}};function eh(i){for(var r=0,d,s=0,h=i.length;h>=4;++s,h-=4)d=i.charCodeAt(s)&255|(i.charCodeAt(++s)&255)<<8|(i.charCodeAt(++s)&255)<<16|(i.charCodeAt(++s)&255)<<24,d=(d&65535)*1540483477+((d>>>16)*59797<<16),d^=d>>>24,r=(d&65535)*1540483477+((d>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(h){case 3:r^=(i.charCodeAt(s+2)&255)<<16;case 2:r^=(i.charCodeAt(s+1)&255)<<8;case 1:r^=i.charCodeAt(s)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var nh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},uh=/[A-Z]|^ms/g,ih=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Dd=function(r){return r.charCodeAt(1)===45},md=function(r){return r!=null&&typeof r!="boolean"},Gf=Ly(function(i){return Dd(i)?i:i.replace(uh,"-$&").toLowerCase()}),yd=function(r,d){switch(r){case"animation":case"animationName":if(typeof d=="string")return d.replace(ih,function(s,h,S){return Xa={name:h,styles:S,next:Xa},h})}return nh[r]!==1&&!Dd(r)&&typeof d=="number"&&d!==0?d+"px":d};function Gn(i,r,d){if(d==null)return"";var s=d;if(s.__emotion_styles!==void 0)return s;switch(typeof d){case"boolean":return"";case"object":{var h=d;if(h.anim===1)return Xa={name:h.name,styles:h.styles,next:Xa},h.name;var S=d;if(S.styles!==void 0){var x=S.next;if(x!==void 0)for(;x!==void 0;)Xa={name:x.name,styles:x.styles,next:Xa},x=x.next;var H=S.styles+";";return H}return ch(i,r,d)}case"function":{if(i!==void 0){var z=Xa,p=d(i);return Xa=z,Gn(i,r,p)}break}}var M=d;if(r==null)return M;var j=r[M];return j!==void 0?j:M}function ch(i,r,d){var s="";if(Array.isArray(d))for(var h=0;h<d.length;h++)s+=Gn(i,r,d[h])+";";else for(var S in d){var x=d[S];if(typeof x!="object"){var H=x;r!=null&&r[H]!==void 0?s+=S+"{"+r[H]+"}":md(H)&&(s+=Gf(S)+":"+yd(S,H)+";")}else if(Array.isArray(x)&&typeof x[0]=="string"&&(r==null||r[x[0]]===void 0))for(var z=0;z<x.length;z++)md(x[z])&&(s+=Gf(S)+":"+yd(S,x[z])+";");else{var p=Gn(i,r,x);switch(S){case"animation":case"animationName":{s+=Gf(S)+":"+p+";";break}default:s+=S+"{"+p+"}"}}}return s}var hd=/label:\s*([^\s;{]+)\s*(;|$)/g,Xa;function tr(i,r,d){if(i.length===1&&typeof i[0]=="object"&&i[0]!==null&&i[0].styles!==void 0)return i[0];var s=!0,h="";Xa=void 0;var S=i[0];if(S==null||S.raw===void 0)s=!1,h+=Gn(d,r,S);else{var x=S;h+=x[0]}for(var H=1;H<i.length;H++)if(h+=Gn(d,r,i[H]),s){var z=S;h+=z[H]}hd.lastIndex=0;for(var p="",M;(M=hd.exec(h))!==null;)p+="-"+M[1];var j=eh(h)+p;return{name:j,styles:h,next:Xa}}var fh=function(r){return r()},rh=td.useInsertionEffect?td.useInsertionEffect:!1,Nd=rh||fh,Ud=vt.createContext(typeof HTMLElement<"u"?Iy({key:"css"}):null);Ud.Provider;var Hd=function(r){return vt.forwardRef(function(d,s){var h=vt.useContext(Ud);return r(d,h,s)})},Yd=vt.createContext({}),hi={}.hasOwnProperty,wf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",qd=function(r,d){var s={};for(var h in d)hi.call(d,h)&&(s[h]=d[h]);return s[wf]=r,s},sh=function(r){var d=r.cache,s=r.serialized,h=r.isStringTag;return Pf(d,s,h),Nd(function(){return Rd(d,s,h)}),null},oh=Hd(function(i,r,d){var s=i.css;typeof s=="string"&&r.registered[s]!==void 0&&(s=r.registered[s]);var h=i[wf],S=[s],x="";typeof i.className=="string"?x=xd(r.registered,S,i.className):i.className!=null&&(x=i.className+" ");var H=tr(S,void 0,vt.useContext(Yd));x+=r.key+"-"+H.name;var z={};for(var p in i)hi.call(i,p)&&p!=="css"&&p!==wf&&(z[p]=i[p]);return z.className=x,d&&(z.ref=d),vt.createElement(vt.Fragment,null,vt.createElement(sh,{cache:r,serialized:H,isStringTag:typeof h=="string"}),vt.createElement(h,z))}),jd=oh,dh=K.Fragment,Bt=function(r,d,s){return hi.call(d,"css")?K.jsx(jd,qd(r,d),s):K.jsx(r,d,s)},vd=function(r,d){var s=arguments;if(d==null||!hi.call(d,"css"))return vt.createElement.apply(void 0,s);var h=s.length,S=new Array(h);S[0]=jd,S[1]=qd(r,d);for(var x=2;x<h;x++)S[x]=s[x];return vt.createElement.apply(null,S)};(function(i){var r;r||(r=i.JSX||(i.JSX={}))})(vd||(vd={}));function Cd(){for(var i=arguments.length,r=new Array(i),d=0;d<i;d++)r[d]=arguments[d];return tr(r)}function Y(){var i=Cd.apply(void 0,arguments),r="animation-"+i.name;return{name:r,styles:"@keyframes "+r+"{"+i.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var mh=function i(r){for(var d=r.length,s=0,h="";s<d;s++){var S=r[s];if(S!=null){var x=void 0;switch(typeof S){case"boolean":break;case"object":{if(Array.isArray(S))x=i(S);else{x="";for(var H in S)S[H]&&H&&(x&&(x+=" "),x+=H)}break}default:x=S}x&&(h&&(h+=" "),h+=x)}}return h};function yh(i,r,d){var s=[],h=xd(i,s,d);return s.length<2?d:h+r(s)}var hh=function(r){var d=r.cache,s=r.serializedArr;return Nd(function(){for(var h=0;h<s.length;h++)Rd(d,s[h],!1)}),null},Qf=Hd(function(i,r){var d=[],s=function(){for(var z=arguments.length,p=new Array(z),M=0;M<z;M++)p[M]=arguments[M];var j=tr(p,r.registered);return d.push(j),Pf(r,j,!1),r.key+"-"+j.name},h=function(){for(var z=arguments.length,p=new Array(z),M=0;M<z;M++)p[M]=arguments[M];return yh(r.registered,s,mh(p))},S={css:s,cx:h,theme:vt.useContext(Yd)},x=i.children(S);return vt.createElement(vt.Fragment,null,vt.createElement(hh,{cache:r,serializedArr:d}),x)}),vh=Object.defineProperty,gh=(i,r,d)=>r in i?vh(i,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):i[r]=d,ui=(i,r,d)=>gh(i,typeof r!="symbol"?r+"":r,d),Jf=new Map,ii=new WeakMap,gd=0,ph=void 0;function bh(i){return i?(ii.has(i)||(gd+=1,ii.set(i,gd.toString())),ii.get(i)):"0"}function Sh(i){return Object.keys(i).sort().filter(r=>i[r]!==void 0).map(r=>`${r}_${r==="root"?bh(i.root):i[r]}`).toString()}function Eh(i){const r=Sh(i);let d=Jf.get(r);if(!d){const s=new Map;let h;const S=new IntersectionObserver(x=>{x.forEach(H=>{var z;const p=H.isIntersecting&&h.some(M=>H.intersectionRatio>=M);i.trackVisibility&&typeof H.isVisible>"u"&&(H.isVisible=p),(z=s.get(H.target))==null||z.forEach(M=>{M(p,H)})})},i);h=S.thresholds||(Array.isArray(i.threshold)?i.threshold:[i.threshold||0]),d={id:r,observer:S,elements:s},Jf.set(r,d)}return d}function Bd(i,r,d={},s=ph){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const z=i.getBoundingClientRect();return r(s,{isIntersecting:s,target:i,intersectionRatio:typeof d.threshold=="number"?d.threshold:0,time:0,boundingClientRect:z,intersectionRect:z,rootBounds:z}),()=>{}}const{id:h,observer:S,elements:x}=Eh(d),H=x.get(i)||[];return x.has(i)||x.set(i,H),H.push(r),S.observe(i),function(){H.splice(H.indexOf(r),1),H.length===0&&(x.delete(i),S.unobserve(i)),x.size===0&&(S.disconnect(),Jf.delete(h))}}function Th(i){return typeof i.children!="function"}var pd=class extends vt.Component{constructor(i){super(i),ui(this,"node",null),ui(this,"_unobserveCb",null),ui(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),ui(this,"handleChange",(r,d)=>{r&&this.props.triggerOnce&&this.unobserve(),Th(this.props)||this.setState({inView:r,entry:d}),this.props.onChange&&this.props.onChange(r,d)}),this.state={inView:!!i.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(i){(i.rootMargin!==this.props.rootMargin||i.root!==this.props.root||i.threshold!==this.props.threshold||i.skip!==this.props.skip||i.trackVisibility!==this.props.trackVisibility||i.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:i,root:r,rootMargin:d,trackVisibility:s,delay:h,fallbackInView:S}=this.props;this._unobserveCb=Bd(this.node,this.handleChange,{threshold:i,root:r,rootMargin:d,trackVisibility:s,delay:h},S)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:i}=this.props;if(typeof i=="function"){const{inView:I,entry:Z}=this.state;return i({inView:I,entry:Z,ref:this.handleNode})}const{as:r,triggerOnce:d,threshold:s,root:h,rootMargin:S,onChange:x,skip:H,trackVisibility:z,delay:p,initialInView:M,fallbackInView:j,...Q}=this.props;return vt.createElement(r||"div",{ref:this.handleNode,...Q},i)}};function Xd({threshold:i,delay:r,trackVisibility:d,rootMargin:s,root:h,triggerOnce:S,skip:x,initialInView:H,fallbackInView:z,onChange:p}={}){var M;const[j,Q]=vt.useState(null),I=vt.useRef(p),[Z,q]=vt.useState({inView:!!H,entry:void 0});I.current=p,vt.useEffect(()=>{if(x||!j)return;let L;return L=Bd(j,(gt,D)=>{q({inView:gt,entry:D}),I.current&&I.current(gt,D),D.isIntersecting&&S&&L&&(L(),L=void 0)},{root:h,rootMargin:s,threshold:i,trackVisibility:d,delay:r},z),()=>{L&&L()}},[Array.isArray(i)?i.toString():i,j,h,s,S,x,d,z,r]);const U=(M=Z.entry)==null?void 0:M.target,P=vt.useRef(void 0);!j&&U&&!S&&!x&&P.current!==U&&(P.current=U,q({inView:!!H,entry:void 0}));const W=[Q,Z.inView,Z.entry];return W.ref=W[0],W.inView=W[1],W.entry=W[2],W}var Zf={exports:{}},ht={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function Ah(){if(bd)return ht;bd=1;var i=Symbol.for("react.element"),r=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),x=Symbol.for("react.context"),H=Symbol.for("react.server_context"),z=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),Z;Z=Symbol.for("react.module.reference");function q(U){if(typeof U=="object"&&U!==null){var P=U.$$typeof;switch(P){case i:switch(U=U.type,U){case d:case h:case s:case p:case M:return U;default:switch(U=U&&U.$$typeof,U){case H:case x:case z:case Q:case j:case S:return U;default:return P}}case r:return P}}}return ht.ContextConsumer=x,ht.ContextProvider=S,ht.Element=i,ht.ForwardRef=z,ht.Fragment=d,ht.Lazy=Q,ht.Memo=j,ht.Portal=r,ht.Profiler=h,ht.StrictMode=s,ht.Suspense=p,ht.SuspenseList=M,ht.isAsyncMode=function(){return!1},ht.isConcurrentMode=function(){return!1},ht.isContextConsumer=function(U){return q(U)===x},ht.isContextProvider=function(U){return q(U)===S},ht.isElement=function(U){return typeof U=="object"&&U!==null&&U.$$typeof===i},ht.isForwardRef=function(U){return q(U)===z},ht.isFragment=function(U){return q(U)===d},ht.isLazy=function(U){return q(U)===Q},ht.isMemo=function(U){return q(U)===j},ht.isPortal=function(U){return q(U)===r},ht.isProfiler=function(U){return q(U)===h},ht.isStrictMode=function(U){return q(U)===s},ht.isSuspense=function(U){return q(U)===p},ht.isSuspenseList=function(U){return q(U)===M},ht.isValidElementType=function(U){return typeof U=="string"||typeof U=="function"||U===d||U===h||U===s||U===p||U===M||U===I||typeof U=="object"&&U!==null&&(U.$$typeof===Q||U.$$typeof===j||U.$$typeof===S||U.$$typeof===x||U.$$typeof===z||U.$$typeof===Z||U.getModuleId!==void 0)},ht.typeOf=q,ht}var Sd;function Oh(){return Sd||(Sd=1,Zf.exports=Ah()),Zf.exports}var zh=Oh();Y`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;Y`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;Y`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;Y`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;Y`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;Y`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Y`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Y`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;Y`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;Y`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;Y`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;Y`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Y`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const _h=Y`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Mh=Y`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xh=Y`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Rh=Y`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dh=Y`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ar=Y`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nh=Y`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Uh=Y`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hh=Y`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yh=Y`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qh=Y`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jh=Y`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ch=Y`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Bh({duration:i=1e3,delay:r=0,timingFunction:d="ease",keyframes:s=ar,iterationCount:h=1}){return Cd`
    animation-duration: ${i}ms;
    animation-timing-function: ${d};
    animation-delay: ${r}ms;
    animation-name: ${s};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${h};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Xh(i){return i==null}function Gh(i){return typeof i=="string"||typeof i=="number"||typeof i=="boolean"}function Gd(i,r){return d=>d?i():r()}function Qn(i){return Gd(i,()=>null)}function $f(i){return Qn(()=>({opacity:0}))(i)}const lr=i=>{const{cascade:r=!1,damping:d=.5,delay:s=0,duration:h=1e3,fraction:S=0,keyframes:x=ar,triggerOnce:H=!1,className:z,style:p,childClassName:M,childStyle:j,children:Q,onVisibilityChange:I}=i,Z=vt.useMemo(()=>Bh({keyframes:x,duration:h}),[h,x]);return Xh(Q)?null:Gh(Q)?Bt(Zh,{...i,animationStyles:Z,children:String(Q)}):zh.isFragment(Q)?Bt(Qd,{...i,animationStyles:Z}):Bt(dh,{children:vt.Children.map(Q,(q,U)=>{if(!vt.isValidElement(q))return null;const P=s+(r?U*h*d:0);switch(q.type){case"ol":case"ul":return Bt(Qf,{children:({cx:W})=>Bt(q.type,{...q.props,className:W(z,q.props.className),style:Object.assign({},p,q.props.style),children:Bt(lr,{...i,children:q.props.children})})});case"li":return Bt(pd,{threshold:S,triggerOnce:H,onChange:I,children:({inView:W,ref:L})=>Bt(Qf,{children:({cx:gt})=>Bt(q.type,{...q.props,ref:L,className:gt(M,q.props.className),css:Qn(()=>Z)(W),style:Object.assign({},j,q.props.style,$f(!W),{animationDelay:P+"ms"})})})});default:return Bt(pd,{threshold:S,triggerOnce:H,onChange:I,children:({inView:W,ref:L})=>Bt("div",{ref:L,className:z,css:Qn(()=>Z)(W),style:Object.assign({},p,$f(!W),{animationDelay:P+"ms"}),children:Bt(Qf,{children:({cx:gt})=>Bt(q.type,{...q.props,className:gt(M,q.props.className),style:Object.assign({},j,q.props.style)})})})})}})})},Qh={display:"inline-block",whiteSpace:"pre"},Zh=i=>{const{animationStyles:r,cascade:d=!1,damping:s=.5,delay:h=0,duration:S=1e3,fraction:x=0,triggerOnce:H=!1,className:z,style:p,children:M,onVisibilityChange:j}=i,{ref:Q,inView:I}=Xd({triggerOnce:H,threshold:x,onChange:j});return Gd(()=>Bt("div",{ref:Q,className:z,style:Object.assign({},p,Qh),children:M.split("").map((Z,q)=>Bt("span",{css:Qn(()=>r)(I),style:{animationDelay:h+q*S*s+"ms"},children:Z},q))}),()=>Bt(Qd,{...i,children:M}))(d)},Qd=i=>{const{animationStyles:r,fraction:d=0,triggerOnce:s=!1,className:h,style:S,children:x,onVisibilityChange:H}=i,{ref:z,inView:p}=Xd({triggerOnce:s,threshold:d,onChange:H});return Bt("div",{ref:z,className:h,css:Qn(()=>r)(p),style:Object.assign({},S,$f(!p)),children:x})};Y`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;Y`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Y`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Y`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Y`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Y`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;Y`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;Y`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;Y`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;Y`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Vh=Y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Lh=Y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Kh=Y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,wh=Y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Jh=Y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,$h=Y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Wh=Y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,kh=Y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Fh=Y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ih=Y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ph=Y`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,tv=Y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,av=Y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function lv(i,r,d){switch(d){case"bottom-left":return r?Lh:Mh;case"bottom-right":return r?Kh:xh;case"down":return i?r?Jh:Dh:r?wh:Rh;case"left":return i?r?Wh:Nh:r?$h:ar;case"right":return i?r?Fh:Hh:r?kh:Uh;case"top-left":return r?Ih:Yh;case"top-right":return r?Ph:qh;case"up":return i?r?av:Ch:r?tv:jh;default:return r?Vh:_h}}const Vf=i=>{const{big:r=!1,direction:d,reverse:s=!1,...h}=i,S=vt.useMemo(()=>lv(r,s,d),[r,d,s]);return Bt(lr,{keyframes:S,...h})};Y`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;Y`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;Y`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;Y`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;Y`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Y`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;Y`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;Y`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Y`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Y`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Y`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Y`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Y`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Y`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Y`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;Y`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;Y`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Y`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Y`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const ev=Y`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,nv=Y`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,uv=Y`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,iv=Y`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,cv=Y`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,fv=Y`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,rv=Y`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,sv=Y`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function ov(i,r){switch(r){case"down":return i?cv:ev;case"right":return i?rv:uv;case"up":return i?sv:iv;case"left":default:return i?fv:nv}}const Ca=i=>{const{direction:r,reverse:d=!1,...s}=i,h=vt.useMemo(()=>ov(d,r),[r,d]);return Bt(lr,{keyframes:h,...s})};Y`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;Y`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Y`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Y`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Y`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Y`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;Y`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Y`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;Y`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;Y`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const dv="/Duet/assets/bg-1-D9ziNkbj.png",mv="/Duet/assets/bg-2-BvF-WZTC.png",yv="/Duet/assets/bg-3-C_bN9oyM.png",hv="/Duet/assets/app-manager-C0Hjtsw8.png",vv="/Duet/assets/Dark@2x-_D0ys9J6.png",gv="/Duet/assets/team-BzhsNEM8.jpg",ci=[dv,mv,yv];function pv(){return K.jsxs("div",{className:"App",children:[K.jsxs("div",{className:"section hero-section",style:{backgroundImage:`url(${ci[0]})`},children:[K.jsx("div",{className:"text-container hero-content",children:K.jsxs(Vf,{cascade:!0,triggerOnce:!0,damping:.1,children:[K.jsx("h1",{children:"PLAY AND GROW TOGETHER!"}),K.jsx("p",{children:"The app that connects musicians and uses AI to grow their skills and collaboration."})]})}),K.jsx("div",{className:"hero-image-container",children:K.jsx(Ca,{direction:"right",triggerOnce:!0,children:K.jsx("img",{src:vv,alt:"Duet App Logo"})})})]}),K.jsx(Vf,{cascade:!0,triggerOnce:!0,damping:.1,children:K.jsx("div",{className:"section features-section",style:{backgroundImage:`url(${ci[2]})`},children:K.jsx("div",{className:"text-container",children:K.jsxs("div",{className:"features-grid",children:[K.jsx(Ca,{direction:"left",triggerOnce:!0,delay:300,children:K.jsxs("div",{className:"feature-item",children:[K.jsx("h3",{children:"Swipe & Jam"}),K.jsx("p",{children:"Find your perfect musical match instantly"})]})}),K.jsx(Ca,{direction:"down",triggerOnce:!0,delay:200,children:K.jsxs("div",{className:"feature-item",children:[K.jsx("h3",{children:"AI Mentor"}),K.jsx("p",{children:"Get smart, personalized tips to grow together"})]})}),K.jsx(Ca,{direction:"up",triggerOnce:!0,delay:400,children:K.jsxs("div",{className:"feature-item",children:[K.jsx("h3",{children:"Create & Share"}),K.jsx("p",{children:"Record, collaborate, and track progress as a duo."})]})}),K.jsx(Ca,{direction:"right",triggerOnce:!0,delay:200,children:K.jsxs("div",{className:"feature-item",children:[K.jsx("h3",{children:"Play Anywhere"}),K.jsx("p",{children:"Book rehearsal spots and join local music events"})]})})]})})})}),K.jsx(Ca,{direction:"up",triggerOnce:!0,children:K.jsx("div",{className:"section career-manager-section",style:{backgroundImage:`url(${ci[1]})`},children:K.jsxs("div",{className:"text-container",children:[" ",K.jsx("h2",{children:"CAREER MANAGER"}),K.jsxs("div",{className:"career-manager-content",children:[K.jsx(Ca,{direction:"left",triggerOnce:!0,children:K.jsxs("div",{className:"text-block",children:[K.jsx("h3",{children:"Artistic Growth with Guidance"}),K.jsx("p",{children:'Every "Match" connects you with a Career Manager – a virtual mentor dedicated to fostering your artistic development. You get to pick your vibe: from a chill jazz cat, to a laid-back reggae drummer, a totally wired techno synth head, or a pop producer with serious classical chops.'})]})}),K.jsx(Ca,{direction:"up",triggerOnce:!0,children:K.jsx("img",{src:hv,alt:"Duet App Career Manager",className:"app-manager-image"})}),K.jsx(Ca,{direction:"right",triggerOnce:!0,children:K.jsxs("div",{className:"text-block",children:[K.jsx("h3",{children:"Personalized Mentor Support"}),K.jsx("p",{children:"Your mentor provides personalized guidance – tailored exercises, track recommendations, and jam structures. They'll help with networking, analyze your recordings for improvement, pinpoint weaknesses, and offer solutions. They'll also track progress, schedule rehearsals, and motivate you – in your unique style!"})]})})]})]})})}),K.jsxs("div",{className:"section team-section",style:{backgroundImage:`url(${ci[0]})`},children:[" ",K.jsxs("div",{className:"text-container",children:[K.jsxs(Vf,{direction:"down",triggerOnce:!0,children:[K.jsx("h2",{children:"MEET THE TEAM"})," "]}),K.jsx(Ca,{direction:"up",triggerOnce:!0,delay:200,children:K.jsx("img",{src:gv,alt:"Duet Team",className:"team-image"})})]})]})]})}Ty.createRoot(document.getElementById("root")).render(K.jsx(vt.StrictMode,{children:K.jsx(pv,{})}));
