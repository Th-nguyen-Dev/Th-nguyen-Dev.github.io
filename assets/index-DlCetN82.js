(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=Symbol.for("react.element"),jm=Symbol.for("react.portal"),Km=Symbol.for("react.fragment"),Zm=Symbol.for("react.strict_mode"),Jm=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),eg=Symbol.for("react.context"),tg=Symbol.for("react.forward_ref"),ng=Symbol.for("react.suspense"),ig=Symbol.for("react.memo"),sg=Symbol.for("react.lazy"),Fu=Symbol.iterator;function rg(i){return i===null||typeof i!="object"?null:(i=Fu&&i[Fu]||i["@@iterator"],typeof i=="function"?i:null)}var Ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pd=Object.assign,Id={};function hr(i,e,t){this.props=i,this.context=e,this.refs=Id,this.updater=t||Ld}hr.prototype.isReactComponent={};hr.prototype.setState=function(i,e){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,e,"setState")};hr.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function Dd(){}Dd.prototype=hr.prototype;function Hl(i,e,t){this.props=i,this.context=e,this.refs=Id,this.updater=t||Ld}var kl=Hl.prototype=new Dd;kl.constructor=Hl;Pd(kl,hr.prototype);kl.isPureReactComponent=!0;var zu=Array.isArray,Ud=Object.prototype.hasOwnProperty,Gl={current:null},Od={key:!0,ref:!0,__self:!0,__source:!0};function Fd(i,e,t){var n,s={},r=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(r=""+e.key),e)Ud.call(e,n)&&!Od.hasOwnProperty(n)&&(s[n]=e[n]);var a=arguments.length-2;if(a===1)s.children=t;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];s.children=c}if(i&&i.defaultProps)for(n in a=i.defaultProps,a)s[n]===void 0&&(s[n]=a[n]);return{$$typeof:Wr,type:i,key:r,ref:o,props:s,_owner:Gl.current}}function og(i,e){return{$$typeof:Wr,type:i.type,key:e,ref:i.ref,props:i.props,_owner:i._owner}}function Wl(i){return typeof i=="object"&&i!==null&&i.$$typeof===Wr}function ag(i){var e={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(t){return e[t]})}var Bu=/\/+/g;function Ga(i,e){return typeof i=="object"&&i!==null&&i.key!=null?ag(""+i.key):e.toString(36)}function Fo(i,e,t,n,s){var r=typeof i;(r==="undefined"||r==="boolean")&&(i=null);var o=!1;if(i===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(i.$$typeof){case Wr:case jm:o=!0}}if(o)return o=i,s=s(o),i=n===""?"."+Ga(o,0):n,zu(s)?(t="",i!=null&&(t=i.replace(Bu,"$&/")+"/"),Fo(s,e,t,"",function(l){return l})):s!=null&&(Wl(s)&&(s=og(s,t+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Bu,"$&/")+"/")+i)),e.push(s)),1;if(o=0,n=n===""?".":n+":",zu(i))for(var a=0;a<i.length;a++){r=i[a];var c=n+Ga(r,a);o+=Fo(r,e,t,c,s)}else if(c=rg(i),typeof c=="function")for(i=c.call(i),a=0;!(r=i.next()).done;)r=r.value,c=n+Ga(r,a++),o+=Fo(r,e,t,c,s);else if(r==="object")throw e=String(i),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function no(i,e,t){if(i==null)return i;var n=[],s=0;return Fo(i,n,"","",function(r){return e.call(t,r,s++)}),n}function cg(i){if(i._status===-1){var e=i._result;e=e(),e.then(function(t){(i._status===0||i._status===-1)&&(i._status=1,i._result=t)},function(t){(i._status===0||i._status===-1)&&(i._status=2,i._result=t)}),i._status===-1&&(i._status=0,i._result=e)}if(i._status===1)return i._result.default;throw i._result}var mn={current:null},zo={transition:null},lg={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:zo,ReactCurrentOwner:Gl};function zd(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:no,forEach:function(i,e,t){no(i,function(){e.apply(this,arguments)},t)},count:function(i){var e=0;return no(i,function(){e++}),e},toArray:function(i){return no(i,function(e){return e})||[]},only:function(i){if(!Wl(i))throw Error("React.Children.only expected to receive a single React element child.");return i}};et.Component=hr;et.Fragment=Km;et.Profiler=Jm;et.PureComponent=Hl;et.StrictMode=Zm;et.Suspense=ng;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lg;et.act=zd;et.cloneElement=function(i,e,t){if(i==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+i+".");var n=Pd({},i.props),s=i.key,r=i.ref,o=i._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,o=Gl.current),e.key!==void 0&&(s=""+e.key),i.type&&i.type.defaultProps)var a=i.type.defaultProps;for(c in e)Ud.call(e,c)&&!Od.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=t;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];n.children=a}return{$$typeof:Wr,type:i.type,key:s,ref:r,props:n,_owner:o}};et.createContext=function(i){return i={$$typeof:eg,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},i.Provider={$$typeof:Qm,_context:i},i.Consumer=i};et.createElement=Fd;et.createFactory=function(i){var e=Fd.bind(null,i);return e.type=i,e};et.createRef=function(){return{current:null}};et.forwardRef=function(i){return{$$typeof:tg,render:i}};et.isValidElement=Wl;et.lazy=function(i){return{$$typeof:sg,_payload:{_status:-1,_result:i},_init:cg}};et.memo=function(i,e){return{$$typeof:ig,type:i,compare:e===void 0?null:e}};et.startTransition=function(i){var e=zo.transition;zo.transition={};try{i()}finally{zo.transition=e}};et.unstable_act=zd;et.useCallback=function(i,e){return mn.current.useCallback(i,e)};et.useContext=function(i){return mn.current.useContext(i)};et.useDebugValue=function(){};et.useDeferredValue=function(i){return mn.current.useDeferredValue(i)};et.useEffect=function(i,e){return mn.current.useEffect(i,e)};et.useId=function(){return mn.current.useId()};et.useImperativeHandle=function(i,e,t){return mn.current.useImperativeHandle(i,e,t)};et.useInsertionEffect=function(i,e){return mn.current.useInsertionEffect(i,e)};et.useLayoutEffect=function(i,e){return mn.current.useLayoutEffect(i,e)};et.useMemo=function(i,e){return mn.current.useMemo(i,e)};et.useReducer=function(i,e,t){return mn.current.useReducer(i,e,t)};et.useRef=function(i){return mn.current.useRef(i)};et.useState=function(i){return mn.current.useState(i)};et.useSyncExternalStore=function(i,e,t){return mn.current.useSyncExternalStore(i,e,t)};et.useTransition=function(){return mn.current.useTransition()};et.version="18.3.1";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xl="166",Ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ug=0,Vu=1,hg=2,Bd=1,dg=2,vi=3,Yi=0,pn=1,Mi=2,qi=0,ds=1,Hc=2,Hu=3,ku=4,fg=5,ls=100,pg=101,mg=102,gg=103,_g=104,vg=200,xg=201,yg=202,Mg=203,kc=204,Gc=205,Sg=206,Tg=207,Eg=208,Ng=209,Ag=210,wg=211,bg=212,Rg=213,Cg=214,Lg=0,Pg=1,Ig=2,Ko=3,Dg=4,Ug=5,Og=6,Fg=7,ma=0,zg=1,Bg=2,Ln=0,Vd=1,Hd=2,kd=3,Gd=4,Vg=5,Wd=6,Xd=7,qd=300,tr=301,nr=302,Wc=303,Xc=304,ga=306,qc=1e3,hs=1001,Yc=1002,sn=1003,Hg=1004,io=1005,qn=1006,Wa=1007,Wi=1008,wi=1009,Yd=1010,$d=1011,Fr=1012,_a=1013,$i=1014,ai=1015,dr=1016,ql=1017,Yl=1018,ir=1020,jd=35902,Kd=1021,Zd=1022,$n=1023,Jd=1024,Qd=1025,Ys=1026,sr=1027,ef=1028,$l=1029,tf=1030,jl=1031,Kl=1033,Bo=33776,Vo=33777,Ho=33778,ko=33779,$c=35840,jc=35841,Kc=35842,Zc=35843,Jc=36196,Qc=37492,el=37496,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,cl=37815,ll=37816,ul=37817,hl=37818,dl=37819,fl=37820,pl=37821,Go=36492,ml=36494,gl=36495,nf=36283,_l=36284,vl=36285,xl=36286,kg=3200,Gg=3201,bi=0,sf=1,ki="",Xn="srgb",Qn="srgb-linear",Zl="display-p3",va="display-p3-linear",Zo="linear",yt="srgb",Jo="rec709",Qo="p3",Ns=7680,Gu=519,Wg=512,rf=513,Xg=514,of=515,qg=516,Yg=517,$g=518,jg=519,ea=35044,Lr=35048,Wu="300 es",jn=2e3,rr=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xu=1234567;const Ir=Math.PI/180,or=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function jt(i,e,t){return Math.max(e,Math.min(t,i))}function Jl(i,e){return(i%e+e)%e}function Kg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zg(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function Jg(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function Qg(i,e=1){return e-Math.abs(Jl(i,e*2)-e)}function e_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function t_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function n_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function i_(i,e){return i+Math.random()*(e-i)}function s_(i){return i*(.5-Math.random())}function r_(i){i!==void 0&&(Xu=i);let e=Xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function o_(i){return i*Ir}function a_(i){return i*or}function c_(i){return(i&i-1)===0&&i!==0}function l_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function u_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function h_(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ql={DEG2RAD:Ir,RAD2DEG:or,generateUUID:Ai,clamp:jt,euclideanModulo:Jl,mapLinear:Kg,inverseLerp:Zg,lerp:Dr,damp:Jg,pingpong:Qg,smoothstep:e_,smootherstep:t_,randInt:n_,randFloat:i_,randFloatSpread:s_,seededRandom:r_,degToRad:o_,radToDeg:a_,isPowerOfTwo:c_,ceilPowerOfTwo:l_,floorPowerOfTwo:u_,setQuaternionFromProperEuler:h_,normalize:pt,denormalize:Yn};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,s,r,o,a,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],E=s[1],x=s[4],N=s[7],D=s[2],b=s[5],A=s[8];return r[0]=o*_+a*E+c*D,r[3]=o*m+a*x+c*b,r[6]=o*f+a*N+c*A,r[1]=l*_+u*E+d*D,r[4]=l*m+u*x+d*b,r[7]=l*f+u*N+d*A,r[2]=h*_+p*E+g*D,r[5]=h*m+p*x+g*b,r[8]=h*f+p*N+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,p=l*r-o*c,g=t*d+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new je;function af(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function d_(){const i=zr("canvas");return i.style.display="block",i}const qu={};function eu(i){i in qu||(qu[i]=!0,console.warn(i))}function f_(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Yu=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$u=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),so={[Qn]:{transfer:Zo,primaries:Jo,toReference:i=>i,fromReference:i=>i},[Xn]:{transfer:yt,primaries:Jo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[va]:{transfer:Zo,primaries:Qo,toReference:i=>i.applyMatrix3($u),fromReference:i=>i.applyMatrix3(Yu)},[Zl]:{transfer:yt,primaries:Qo,toReference:i=>i.convertSRGBToLinear().applyMatrix3($u),fromReference:i=>i.applyMatrix3(Yu).convertLinearToSRGB()}},p_=new Set([Qn,va]),mt={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!p_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=so[e].toReference,s=so[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return so[i].primaries},getTransfer:function(i){return i===ki?Zo:so[i].transfer}};function $s(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let As;class m_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=zr("canvas")),As.width=e.width,As.height=e.height;const n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$s(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($s(t[n]/255)*255):t[n]=$s(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g_=0;class cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ya(s[o].image)):r.push(Ya(s[o]))}else r=Ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?m_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let __=0;class on extends Pi{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=hs,s=hs,r=qn,o=Wi,a=$n,c=wi,l=on.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Ai(),this.name="",this.source=new cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qc:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qc:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=qd;on.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,N=(p+1)/2,D=(f+1)/2,b=(u+h)/4,A=(d+_)/4,P=(g+m)/4;return x>N&&x>D?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=A/n):N>D?N<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(N),n=b/s,r=P/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=P/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(h-u)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ri extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends Ri{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tu extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class v_ extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==p||u!==g){let m=1-a;const f=c*h+l*p+u*g+d*_,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const D=Math.sqrt(x),b=Math.atan2(D,f*E);m=Math.sin(m*b)/D,a=Math.sin(a*b)/D}const N=a*E;if(c=c*m+h*N,l=l*m+p*N,u=u*m+g*N,d=d*m+_*N,m===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=D,l*=D,u*=D,d*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*p-l*h,e[t+1]=c*g+u*h+l*d-a*p,e[t+2]=l*g+u*p+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new L,ju=new ps;class Xr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),oo.subVectors(this.max,yr),ws.subVectors(e.a,yr),bs.subVectors(e.b,yr),Rs.subVectors(e.c,yr),Oi.subVectors(bs,ws),Fi.subVectors(Rs,bs),Qi.subVectors(ws,Rs);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-Qi.z,Qi.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,Qi.z,0,-Qi.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-Qi.y,Qi.x,0];return!ja(t,ws,bs,Rs,oo)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,ws,bs,Rs,oo))?!1:(ao.crossVectors(Oi,Fi),t=[ao.x,ao.y,ao.z],ja(t,ws,bs,Rs,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new L,new L,new L,new L,new L,new L,new L,new L],Hn=new L,ro=new Xr,ws=new L,bs=new L,Rs=new L,Oi=new L,Fi=new L,Qi=new L,yr=new L,oo=new L,ao=new L,es=new L;function ja(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){es.fromArray(i,r);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),u=n.dot(es);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const x_=new Xr,Mr=new L,Ka=new L;class xa{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):x_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Ka)),this.expandByPoint(Mr.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new L,Za=new L,co=new L,zi=new L,Ja=new L,lo=new L,Qa=new L;class nu{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Za.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Za);const r=e.distanceTo(t)*.5,o=-this.direction.dot(co),a=zi.dot(this.direction),c=-zi.dot(co),l=zi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Za).addScaledVector(co,h),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,s,r){Ja.subVectors(t,e),lo.subVectors(n,e),Qa.crossVectors(Ja,lo);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const c=a*this.direction.dot(lo.crossVectors(zi,lo));if(c<0)return null;const l=a*this.direction.dot(Ja.cross(zi));if(l<0||c+l>o)return null;const u=-a*zi.dot(Qa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,s,r,o,a,c,l,u,d,h,p,g,_,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,d,h,p,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y_,e,M_)}lookAt(e,t,n){const s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Bi.crossVectors(n,An),Bi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Bi.crossVectors(n,An)),Bi.normalize(),uo.crossVectors(An,Bi),s[0]=Bi.x,s[4]=uo.x,s[8]=An.x,s[1]=Bi.y,s[5]=uo.y,s[9]=An.y,s[2]=Bi.z,s[6]=uo.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],x=n[7],N=n[11],D=n[15],b=s[0],A=s[4],P=s[8],T=s[12],M=s[1],C=s[5],G=s[9],H=s[13],J=s[2],ee=s[6],j=s[10],ne=s[14],K=s[3],ye=s[7],Ee=s[11],we=s[15];return r[0]=o*b+a*M+c*J+l*K,r[4]=o*A+a*C+c*ee+l*ye,r[8]=o*P+a*G+c*j+l*Ee,r[12]=o*T+a*H+c*ne+l*we,r[1]=u*b+d*M+h*J+p*K,r[5]=u*A+d*C+h*ee+p*ye,r[9]=u*P+d*G+h*j+p*Ee,r[13]=u*T+d*H+h*ne+p*we,r[2]=g*b+_*M+m*J+f*K,r[6]=g*A+_*C+m*ee+f*ye,r[10]=g*P+_*G+m*j+f*Ee,r[14]=g*T+_*H+m*ne+f*we,r[3]=E*b+x*M+N*J+D*K,r[7]=E*A+x*C+N*ee+D*ye,r[11]=E*P+x*G+N*j+D*Ee,r[15]=E*T+x*H+N*ne+D*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*d-s*l*d-r*a*h+n*l*h+s*a*p-n*c*p)+_*(+t*c*p-t*l*h+r*o*h-s*o*p+s*l*u-r*c*u)+m*(+t*l*d-t*a*p-r*o*d+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-t*c*d+t*a*h+s*o*d-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=d*m*l-_*h*l+_*c*p-a*m*p-d*c*f+a*h*f,x=g*h*l-u*m*l-g*c*p+o*m*p+u*c*f-o*h*f,N=u*_*l-g*d*l+g*a*p-o*_*p-u*a*f+o*d*f,D=g*d*c-u*_*c-g*a*h+o*_*h+u*a*m-o*d*m,b=t*E+n*x+s*N+r*D;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=E*A,e[1]=(_*h*r-d*m*r-_*s*p+n*m*p+d*s*f-n*h*f)*A,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*A,e[3]=(d*c*r-a*h*r-d*s*l+n*h*l+a*s*p-n*c*p)*A,e[4]=x*A,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*f+t*h*f)*A,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*A,e[7]=(o*h*r-u*c*r+u*s*l-t*h*l-o*s*p+t*c*p)*A,e[8]=N*A,e[9]=(g*d*r-u*_*r-g*n*p+t*_*p+u*n*f-t*d*f)*A,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*d*r-u*n*l+t*d*l+o*n*p-t*a*p)*A,e[12]=D*A,e[13]=(u*_*s-g*d*s+g*n*h-t*_*h-u*n*m+t*d*m)*A,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*A,e[15]=(o*d*s-u*a*s+u*n*c-t*d*c-o*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,p=r*u,g=r*d,_=o*u,m=o*d,f=a*d,E=c*l,x=c*u,N=c*d,D=n.x,b=n.y,A=n.z;return s[0]=(1-(_+f))*D,s[1]=(p+N)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(p-N)*b,s[5]=(1-(h+f))*b,s[6]=(m+E)*b,s[7]=0,s[8]=(g+x)*A,s[9]=(m-E)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Cs.set(s[0],s[1],s[2]).length();const o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const l=1/r,u=1/o,d=1/a;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,t.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=jn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let p,g;if(a===jn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===rr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=jn){const c=this.elements,l=1/(t-e),u=1/(n-s),d=1/(o-r),h=(t+e)*l,p=(n+s)*u;let g,_;if(a===jn)g=(o+r)*d,_=-2*d;else if(a===rr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cs=new L,kn=new vt,y_=new L(0,0,0),M_=new L(1,1,1),Bi=new L,uo=new L,An=new L,Ku=new vt,Zu=new ps;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let S_=0;const Ju=new L,Ls=new ps,mi=new vt,ho=new L,Sr=new L,T_=new L,E_=new ps,Qu=new L(1,0,0),eh=new L(0,1,0),th=new L(0,0,1),nh={type:"added"},N_={type:"removed"},Ps={type:"childadded",child:null},ec={type:"childremoved",child:null};class Pt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new L,t=new zn,n=new ps,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new je}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis(eh,e)}rotateZ(e){return this.rotateOnAxis(th,e)}translateOnAxis(e,t){return Ju.copy(e).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis(eh,e)}translateZ(e){return this.translateOnAxis(th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Sr,ho,this.up):mi.lookAt(ho,Sr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(mi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N_),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,T_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,E_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new L(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new L,gi=new L,tc=new L,_i=new L,Is=new L,Ds=new L,ih=new L,nc=new L,ic=new L,sc=new L;class oi{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gn.subVectors(e,t),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gn.subVectors(s,t),gi.subVectors(n,t),tc.subVectors(e,t);const o=Gn.dot(Gn),a=Gn.dot(gi),c=Gn.dot(tc),l=gi.dot(gi),u=gi.dot(tc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static isFrontFacing(e,t,n,s){return Gn.subVectors(n,t),gi.subVectors(e,t),Gn.cross(gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Gn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,n),Ds.subVectors(r,n),nc.subVectors(e,n);const c=Is.dot(nc),l=Ds.dot(nc);if(c<=0&&l<=0)return t.copy(n);ic.subVectors(e,s);const u=Is.dot(ic),d=Ds.dot(ic);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Is,o);sc.subVectors(e,r);const p=Is.dot(sc),g=Ds.dot(sc);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ds,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return ih.subVectors(r,s),a=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(ih,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(n).addScaledVector(Is,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function rc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=Jl(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=rc(o,r,e+1/3),this.g=rc(o,r,e),this.b=rc(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const n=uf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return mt.fromWorkingColorSpace(tn.copy(this),e),Math.round(jt(tn.r*255,0,255))*65536+Math.round(jt(tn.g*255,0,255))*256+Math.round(jt(tn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(tn.copy(this),t);const n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Xn){mt.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,s=tn.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(fo);const n=Dr(Vi.h,fo.h,t),s=Dr(Vi.s,fo.s,t),r=Dr(Vi.l,fo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ue;Ue.NAMES=uf;let A_=0;class an extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=ds,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Gc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Gc&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ya extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new L,po=new xe;class On{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ea,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return eu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ea&&(e.usage=this.usage),e}}class hf extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class df extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}let w_=0;const Dn=new vt,oc=new Pt,Us=new L,wn=new Xr,Tr=new Xr,Wt=new L;class Bn extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?df:hf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(wn.min,Tr.min),wn.expandByPoint(Wt),Wt.addVectors(wn.max,Tr.max),wn.expandByPoint(Wt)):(wn.expandByPoint(Tr.min),wn.expandByPoint(Tr.max))}wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Wt.fromBufferAttribute(a,l),c&&(Us.fromBufferAttribute(e,l),Wt.add(Us)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new L,c[P]=new L;const l=new L,u=new L,d=new L,h=new xe,p=new xe,g=new xe,_=new L,m=new L;function f(P,T,M){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,M),h.fromBufferAttribute(r,P),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[P].add(_),a[T].add(_),a[M].add(_),c[P].add(m),c[T].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,T=E.length;P<T;++P){const M=E[P],C=M.start,G=M.count;for(let H=C,J=C+G;H<J;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new L,N=new L,D=new L,b=new L;function A(P){D.fromBufferAttribute(s,P),b.copy(D);const T=a[P];x.copy(T),x.sub(D.multiplyScalar(D.dot(T))).normalize(),N.crossVectors(b,T);const C=N.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,C)}for(let P=0,T=E.length;P<T;++P){const M=E[P],C=M.start,G=M.count;for(let H=C,J=C+G;H<J;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new On(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new vt,ts=new nu,mo=new xa,rh=new L,Os=new L,Fs=new L,zs=new L,ac=new L,go=new L,_o=new xe,vo=new xe,xo=new xe,oh=new L,ah=new L,ch=new L,yo=new L,Mo=new L;class _n extends Pt{constructor(e=new Bn,t=new ya){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(ac.fromBufferAttribute(d,e),o?go.addScaledVector(ac,u):go.addScaledVector(ac.sub(t),u))}t.add(go)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(mo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(mo,rh)===null||ts.origin.distanceToSquared(rh)>(e.far-e.near)**2))&&(sh.copy(r).invert(),ts.copy(e.ray).applyMatrix4(sh),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let N=E,D=x;N<D;N+=3){const b=a.getX(N),A=a.getX(N+1),P=a.getX(N+2);s=So(this,f,e,n,l,u,d,b,A,P),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),x=a.getX(m+1),N=a.getX(m+2);s=So(this,o,e,n,l,u,d,E,x,N),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let N=E,D=x;N<D;N+=3){const b=N,A=N+1,P=N+2;s=So(this,f,e,n,l,u,d,b,A,P),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,x=m+1,N=m+2;s=So(this,o,e,n,l,u,d,E,x,N),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function b_(i,e,t,n,s,r,o,a){let c;if(e.side===pn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Yi,a),c===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Mo);return l<t.near||l>t.far?null:{distance:l,point:Mo.clone(),object:i}}function So(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Os),i.getVertexPosition(c,Fs),i.getVertexPosition(l,zs);const u=b_(i,e,t,n,Os,Fs,zs,yo);if(u){s&&(_o.fromBufferAttribute(s,a),vo.fromBufferAttribute(s,c),xo.fromBufferAttribute(s,l),u.uv=oi.getInterpolation(yo,Os,Fs,zs,_o,vo,xo,new xe)),r&&(_o.fromBufferAttribute(r,a),vo.fromBufferAttribute(r,c),xo.fromBufferAttribute(r,l),u.uv1=oi.getInterpolation(yo,Os,Fs,zs,_o,vo,xo,new xe)),o&&(oh.fromBufferAttribute(o,a),ah.fromBufferAttribute(o,c),ch.fromBufferAttribute(o,l),u.normal=oi.getInterpolation(yo,Os,Fs,zs,oh,ah,ch,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};oi.getNormal(Os,Fs,zs,d.normal),u.face=d}return u}class qr extends Bn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function g(_,m,f,E,x,N,D,b,A,P,T){const M=N/A,C=D/P,G=N/2,H=D/2,J=b/2,ee=A+1,j=P+1;let ne=0,K=0;const ye=new L;for(let Ee=0;Ee<j;Ee++){const we=Ee*C-H;for(let Je=0;Je<ee;Je++){const rt=Je*M-G;ye[_]=rt*E,ye[m]=we*x,ye[f]=J,l.push(ye.x,ye.y,ye.z),ye[_]=0,ye[m]=0,ye[f]=b>0?1:-1,u.push(ye.x,ye.y,ye.z),d.push(Je/A),d.push(1-Ee/P),ne+=1}}for(let Ee=0;Ee<P;Ee++)for(let we=0;we<A;we++){const Je=h+we+ee*Ee,rt=h+we+ee*(Ee+1),Q=h+(we+1)+ee*(Ee+1),le=h+(we+1)+ee*Ee;c.push(Je,rt,le),c.push(rt,Q,le),K+=6}a.addGroup(p,K,T),p+=K,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function hn(i){const e={};for(let t=0;t<i.length;t++){const n=ar(i[t]);for(const s in n)e[s]=n[s]}return e}function R_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ff(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const C_={clone:ar,merge:hn};var L_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=R_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pf extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new L,lh=new xe,uh=new xe;class gn extends pf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,lh,uh),t.subVectors(uh,lh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,Vs=1;class I_ extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Bs,Vs,e,t);s.layers=this.layers,this.add(s);const r=new gn(Bs,Vs,e,t);r.layers=this.layers,this.add(r);const o=new gn(Bs,Vs,e,t);o.layers=this.layers,this.add(o);const a=new gn(Bs,Vs,e,t);a.layers=this.layers,this.add(a);const c=new gn(Bs,Vs,e,t);c.layers=this.layers,this.add(c);const l=new gn(Bs,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mf extends on{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D_ extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new mf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qr(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:qi});r.uniforms.tEquirect.value=t;const o=new _n(s,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=qn),new I_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const cc=new L,U_=new L,O_=new je;class yi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=cc.subVectors(n,t).cross(U_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||O_.getNormalMatrix(e),s=this.coplanarPoint(cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new xa,To=new L;class iu{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],x=s[14],N=s[15];if(n[0].setComponents(c-r,h-l,m-p,N-f).normalize(),n[1].setComponents(c+r,h+l,m+p,N+f).normalize(),n[2].setComponents(c+o,h+u,m+g,N+E).normalize(),n[3].setComponents(c-o,h-u,m-g,N-E).normalize(),n[4].setComponents(c-a,h-d,m-_,N-x).normalize(),t===jn)n[5].setComponents(c+a,h+d,m+_,N+x).normalize();else if(t===rr)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(To.x=s.normal.x>0?e.max.x:e.min.x,To.y=s.normal.y>0?e.max.y:e.min.y,To.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function F_(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c._updateRange,h=c.updateRanges;if(i.bindBuffer(l,a),d.count===-1&&h.length===0&&i.bufferSubData(l,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ma extends Bn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const E=f*h-o;for(let x=0;x<l;x++){const N=x*d-r;g.push(N,-E,0),_.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const x=E+l*f,N=E+l*(f+1),D=E+1+l*(f+1),b=E+1+l*f;p.push(x,N,b),p.push(N,D,b)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Z_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,a0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,g0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ov=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ev=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:z_,alphahash_pars_fragment:B_,alphamap_fragment:V_,alphamap_pars_fragment:H_,alphatest_fragment:k_,alphatest_pars_fragment:G_,aomap_fragment:W_,aomap_pars_fragment:X_,batching_pars_vertex:q_,batching_vertex:Y_,begin_vertex:$_,beginnormal_vertex:j_,bsdfs:K_,iridescence_fragment:Z_,bumpmap_pars_fragment:J_,clipping_planes_fragment:Q_,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:o0,common:a0,cube_uv_reflection_fragment:c0,defaultnormal_vertex:l0,displacementmap_pars_vertex:u0,displacementmap_vertex:h0,emissivemap_fragment:d0,emissivemap_pars_fragment:f0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:_0,envmap_pars_fragment:v0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:C0,envmap_vertex:y0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:T0,fog_pars_fragment:E0,gradientmap_pars_fragment:N0,lightmap_pars_fragment:A0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:b0,lights_pars_begin:R0,lights_toon_fragment:L0,lights_toon_pars_fragment:P0,lights_phong_fragment:I0,lights_phong_pars_fragment:D0,lights_physical_fragment:U0,lights_physical_pars_fragment:O0,lights_fragment_begin:F0,lights_fragment_maps:z0,lights_fragment_end:B0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:G0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:q0,map_particle_pars_fragment:Y0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:j0,morphinstance_vertex:K0,morphcolor_vertex:Z0,morphnormal_vertex:J0,morphtarget_pars_vertex:Q0,morphtarget_vertex:ev,normal_fragment_begin:tv,normal_fragment_maps:nv,normal_pars_fragment:iv,normal_pars_vertex:sv,normal_vertex:rv,normalmap_pars_fragment:ov,clearcoat_normal_fragment_begin:av,clearcoat_normal_fragment_maps:cv,clearcoat_pars_fragment:lv,iridescence_pars_fragment:uv,opaque_fragment:hv,packing:dv,premultiplied_alpha_fragment:fv,project_vertex:pv,dithering_fragment:mv,dithering_pars_fragment:gv,roughnessmap_fragment:_v,roughnessmap_pars_fragment:vv,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:yv,shadowmap_vertex:Mv,shadowmask_pars_fragment:Sv,skinbase_vertex:Tv,skinning_pars_vertex:Ev,skinning_vertex:Nv,skinnormal_vertex:Av,specularmap_fragment:wv,specularmap_pars_fragment:bv,tonemapping_fragment:Rv,tonemapping_pars_fragment:Cv,transmission_fragment:Lv,transmission_pars_fragment:Pv,uv_pars_fragment:Iv,uv_pars_vertex:Dv,uv_vertex:Uv,worldpos_vertex:Ov,background_vert:Fv,background_frag:zv,backgroundCube_vert:Bv,backgroundCube_frag:Vv,cube_vert:Hv,cube_frag:kv,depth_vert:Gv,depth_frag:Wv,distanceRGBA_vert:Xv,distanceRGBA_frag:qv,equirect_vert:Yv,equirect_frag:$v,linedashed_vert:jv,linedashed_frag:Kv,meshbasic_vert:Zv,meshbasic_frag:Jv,meshlambert_vert:Qv,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ox,meshphysical_vert:ax,meshphysical_frag:cx,meshtoon_vert:lx,meshtoon_frag:ux,points_vert:hx,points_frag:dx,shadow_vert:fx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},pe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ti={basic:{uniforms:hn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:hn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:hn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:hn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:hn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:hn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:hn([pe.points,pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:hn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:hn([pe.common,pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:hn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:hn([pe.sprite,pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:hn([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:hn([pe.lights,pe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ti.physical={uniforms:hn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Eo={r:0,b:0,g:0},is=new zn,_x=new vt;function vx(i,e,t,n,s,r,o){const a=new Ue(0);let c=r===!0?0:1,l,u,d=null,h=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function _(E){let x=!1;const N=g(E);N===null?f(a,c):N&&N.isColor&&(f(N,1),x=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){const N=g(x);N&&(N.isCubeTexture||N.mapping===ga)?(u===void 0&&(u=new _n(new qr(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:ar(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),is.copy(x.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(is)),u.material.toneMapped=mt.getTransfer(N.colorSpace)!==yt,(d!==N||h!==N.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=N,h=N.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(l===void 0&&(l=new _n(new Ma(2,2),new Ci({name:"BackgroundMaterial",uniforms:ar(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=N,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=mt.getTransfer(N.colorSpace)!==yt,N.matrixAutoUpdate===!0&&N.updateMatrix(),l.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||h!==N.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=N,h=N.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,x){E.getRGB(Eo,ff(i)),n.buffers.color.setClear(Eo.r,Eo.g,Eo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:_,addToRenderList:m}}function xx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(M,C,G,H,J){let ee=!1;const j=d(H,G,C);r!==j&&(r=j,l(r.object)),ee=p(M,H,G,J),ee&&g(M,H,G,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,N(M,C,G,H),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,C,G){const H=G.wireframe===!0;let J=n[M.id];J===void 0&&(J={},n[M.id]=J);let ee=J[C.id];ee===void 0&&(ee={},J[C.id]=ee);let j=ee[H];return j===void 0&&(j=h(c()),ee[H]=j),j}function h(M){const C=[],G=[],H=[];for(let J=0;J<t;J++)C[J]=0,G[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,C,G,H){const J=r.attributes,ee=C.attributes;let j=0;const ne=G.getAttributes();for(const K in ne)if(ne[K].location>=0){const Ee=J[K];let we=ee[K];if(we===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),Ee===void 0||Ee.attribute!==we||we&&Ee.data!==we.data)return!0;j++}return r.attributesNum!==j||r.index!==H}function g(M,C,G,H){const J={},ee=C.attributes;let j=0;const ne=G.getAttributes();for(const K in ne)if(ne[K].location>=0){let Ee=ee[K];Ee===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor));const we={};we.attribute=Ee,Ee&&Ee.data&&(we.data=Ee.data),J[K]=we,j++}r.attributes=J,r.attributesNum=j,r.index=H}function _(){const M=r.newAttributes;for(let C=0,G=M.length;C<G;C++)M[C]=0}function m(M){f(M,0)}function f(M,C){const G=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;G[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),J[M]!==C&&(i.vertexAttribDivisor(M,C),J[M]=C)}function E(){const M=r.newAttributes,C=r.enabledAttributes;for(let G=0,H=C.length;G<H;G++)C[G]!==M[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function x(M,C,G,H,J,ee,j){j===!0?i.vertexAttribIPointer(M,C,G,J,ee):i.vertexAttribPointer(M,C,G,H,J,ee)}function N(M,C,G,H){_();const J=H.attributes,ee=G.getAttributes(),j=C.defaultAttributeValues;for(const ne in ee){const K=ee[ne];if(K.location>=0){let ye=J[ne];if(ye===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ye!==void 0){const Ee=ye.normalized,we=ye.itemSize,Je=e.get(ye);if(Je===void 0)continue;const rt=Je.buffer,Q=Je.type,le=Je.bytesPerElement,Ne=Q===i.INT||Q===i.UNSIGNED_INT||ye.gpuType===_a;if(ye.isInterleavedBufferAttribute){const Se=ye.data,qe=Se.stride,$e=ye.offset;if(Se.isInstancedInterleavedBuffer){for(let Ze=0;Ze<K.locationSize;Ze++)f(K.location+Ze,Se.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ze=0;Ze<K.locationSize;Ze++)m(K.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Ze=0;Ze<K.locationSize;Ze++)x(K.location+Ze,we/K.locationSize,Q,Ee,qe*le,($e+we/K.locationSize*Ze)*le,Ne)}else{if(ye.isInstancedBufferAttribute){for(let Se=0;Se<K.locationSize;Se++)f(K.location+Se,ye.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Se=0;Se<K.locationSize;Se++)m(K.location+Se);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Se=0;Se<K.locationSize;Se++)x(K.location+Se,we/K.locationSize,Q,Ee,we*le,we/K.locationSize*Se*le,Ne)}}else if(j!==void 0){const Ee=j[ne];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv(K.location,Ee);break;case 3:i.vertexAttrib3fv(K.location,Ee);break;case 4:i.vertexAttrib4fv(K.location,Ee);break;default:i.vertexAttrib1fv(K.location,Ee)}}}}E()}function D(){P();for(const M in n){const C=n[M];for(const G in C){const H=C[G];for(const J in H)u(H[J].object),delete H[J];delete C[G]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const G in C){const H=C[G];for(const J in H)u(H[J].object),delete H[J];delete C[G]}delete n[M.id]}function A(M){for(const C in n){const G=n[C];if(G[M.id]===void 0)continue;const H=G[M.id];for(const J in H)u(H[J].object),delete H[J];delete G[M.id]}}function P(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function yx(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,n,1)}function c(l,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,n,h[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==$n&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==wi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ai&&!A)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=p>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:N,maxSamples:D}}function Sx(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new yi,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const E=r?0:n,x=E*4;let N=f.clippingState||null;c.value=N,N=u(g,h,x,p);for(let D=0;D!==x;++D)N[D]=t[D];f.clippingState=N,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,N=p;x!==_;++x,N+=4)o.copy(d[x]).applyMatrix4(E,a),o.normal.toArray(m,N),m[N+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Tx(i){let e=new WeakMap;function t(o,a){return a===Wc?o.mapping=tr:a===Xc&&(o.mapping=nr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wc||a===Xc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new D_(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class su extends pf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ks=4,hh=[.125,.215,.35,.446,.526,.582],us=20,lc=new su,dh=new Ue;let uc=null,hc=0,dc=0,fc=!1;const as=(1+Math.sqrt(5))/2,Hs=1/as,fh=[new L(-as,Hs,0),new L(as,Hs,0),new L(-Hs,0,as),new L(Hs,0,as),new L(0,as,-Hs),new L(0,as,Hs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class ph{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,hc,dc),this._renderer.xr.enabled=fc,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:dr,format:$n,colorSpace:Qn,depthBuffer:!1},s=mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(r)),this._blurMaterial=Nx(r,e,t)}return s}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,n,s){const a=new gn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(dh),u.toneMapping=Ln,u.autoClear=!1;const p=new ya({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new _n(new qr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(dh),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;No(s,E*x,f>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===tr||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;No(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,lc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fh[(s-r-1)%fh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new _n(this._lodPlanes[s],l),h=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const f=[];let E=0;for(let A=0;A<us;++A){const P=A/_,T=Math.exp(-P*P/2);f.push(T),A===0?E+=T:A<m&&(E+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const N=this._sizeLods[s],D=3*N*(s>x-ks?s-x+ks:0),b=4*(this._cubeSize-N);No(t,D,b,3*N,2*N),c.setRenderTarget(t),c.render(d,lc)}}function Ex(i){const e=[],t=[],n=[];let s=i;const r=i-ks+1+hh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ks?c=hh[o-i+ks-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),x=new Float32Array(m*g*p),N=new Float32Array(f*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,P=b>2?0:-1,T=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(T,_*g*b),x.set(h,m*g*b);const M=[b,b,b,b,b,b];N.set(M,f*g*b)}const D=new Bn;D.setAttribute("position",new On(E,_)),D.setAttribute("uv",new On(x,m)),D.setAttribute("faceIndex",new On(N,f)),e.push(D),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mh(i,e,t){const n=new fs(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Nx(i,e,t){const n=new Float32Array(us),s=new L(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function gh(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function _h(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ax(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wc||c===Xc,u=c===tr||c===nr;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ph(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ph(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&eu("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bx(i,e,t,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let x=0,N=E.length;x<N;x+=3){const D=E[x+0],b=E[x+1],A=E[x+2];h.push(D,b,b,A,A,D)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,N=E.length/3-1;x<N;x+=3){const D=x+0,b=x+1,A=x+2;h.push(D,b,b,A,A,D)}}else return;const m=new(af(h)?df:hf)(h,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Rx(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,p){i.drawElements(n,p,r,h*o),t.update(p,n,1)}function l(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,h*o,g),t.update(p,n,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<_.length;E++)t.update(f,n,_[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Cx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lx(i,e,t){const n=new WeakMap,s=new nt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let N=0;g===!0&&(N=1),_===!0&&(N=2),m===!0&&(N=3);let D=a.attributes.position.count*N,b=1;D>e.maxTextureSize&&(b=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const A=new Float32Array(D*b*4*d),P=new tu(A,D,b,d);P.type=ai,P.needsUpdate=!0;const T=N*4;for(let C=0;C<d;C++){const G=f[C],H=E[C],J=x[C],ee=D*b*4*C;for(let j=0;j<G.count;j++){const ne=j*T;g===!0&&(s.fromBufferAttribute(G,j),A[ee+ne+0]=s.x,A[ee+ne+1]=s.y,A[ee+ne+2]=s.z,A[ee+ne+3]=0),_===!0&&(s.fromBufferAttribute(H,j),A[ee+ne+4]=s.x,A[ee+ne+5]=s.y,A[ee+ne+6]=s.z,A[ee+ne+7]=0),m===!0&&(s.fromBufferAttribute(J,j),A[ee+ne+8]=s.x,A[ee+ne+9]=s.y,A[ee+ne+10]=s.z,A[ee+ne+11]=J.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new xe(D,b)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Px(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Yr extends on{constructor(e,t,n,s,r,o,a,c,l,u=Ys){if(u!==Ys&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ys&&(n=$i),n===void 0&&u===sr&&(n=ir),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _f=new on,vh=new Yr(1,1),vf=new tu,xf=new v_,yf=new mf,xh=[],yh=[],Mh=new Float32Array(16),Sh=new Float32Array(9),Th=new Float32Array(4);function fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=xh[s];if(r===void 0&&(r=new Float32Array(s),xh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sa(i,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ix(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function Ux(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function Fx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),Gt(t,n)}}function zx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Sh.set(n),i.uniformMatrix3fv(this.addr,!1,Sh),Gt(t,n)}}function Bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),Gt(t,n)}}function Vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function Wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function $x(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vh.compareFunction=of,r=vh):r=_f,t.setTexture2D(e||r,s)}function jx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xf,s)}function Kx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yf,s)}function Zx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vf,s)}function Jx(i){switch(i){case 5126:return Ix;case 35664:return Dx;case 35665:return Ux;case 35666:return Ox;case 35674:return Fx;case 35675:return zx;case 35676:return Bx;case 5124:case 35670:return Vx;case 35667:case 35671:return Hx;case 35668:case 35672:return kx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Zx}}function Qx(i,e){i.uniform1fv(this.addr,e)}function ey(i,e){const t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function ty(i,e){const t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function ny(i,e){const t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function iy(i,e){const t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sy(i,e){const t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ry(i,e){const t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function oy(i,e){i.uniform1iv(this.addr,e)}function ay(i,e){i.uniform2iv(this.addr,e)}function cy(i,e){i.uniform3iv(this.addr,e)}function ly(i,e){i.uniform4iv(this.addr,e)}function uy(i,e){i.uniform1uiv(this.addr,e)}function hy(i,e){i.uniform2uiv(this.addr,e)}function dy(i,e){i.uniform3uiv(this.addr,e)}function fy(i,e){i.uniform4uiv(this.addr,e)}function py(i,e,t){const n=this.cache,s=e.length,r=Sa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_f,r[o])}function my(i,e,t){const n=this.cache,s=e.length,r=Sa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xf,r[o])}function gy(i,e,t){const n=this.cache,s=e.length,r=Sa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yf,r[o])}function _y(i,e,t){const n=this.cache,s=e.length,r=Sa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vf,r[o])}function vy(i){switch(i){case 5126:return Qx;case 35664:return ey;case 35665:return ty;case 35666:return ny;case 35674:return iy;case 35675:return sy;case 35676:return ry;case 5124:case 35670:return oy;case 35667:case 35671:return ay;case 35668:case 35672:return cy;case 35669:case 35673:return ly;case 5125:return uy;case 36294:return hy;case 36295:return dy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return _y}}class xy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jx(t.type)}}class yy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vy(t.type)}}class My{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function Eh(i,e){i.seq.push(e),i.map[e.id]=e}function Sy(i,e,t){const n=i.name,s=n.length;for(pc.lastIndex=0;;){const r=pc.exec(n),o=pc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Eh(t,l===void 0?new xy(a,i,e):new yy(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new My(a),Eh(t,d)),t=d}}}class Wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Sy(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Nh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ty=37297;let Ey=0;function Ny(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ay(i){const e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(i);let n;switch(e===t?n="":e===Qo&&t===Jo?n="LinearDisplayP3ToLinearSRGB":e===Jo&&t===Qo&&(n="LinearSRGBToLinearDisplayP3"),i){case Qn:case va:return[n,"LinearTransferOETF"];case Xn:case Zl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ah(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ny(i.getShaderSource(e),o)}else return s}function wy(i,e){const t=Ay(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function by(i,e){let t;switch(e){case Vd:t="Linear";break;case Hd:t="Reinhard";break;case kd:t="OptimizedCineon";break;case Gd:t="ACESFilmic";break;case Wd:t="AgX";break;case Xd:t="Neutral";break;case Vg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Cy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ly(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Pr(i){return i!==""}function wh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(Py,Dy)}const Iy=new Map;function Dy(i,e){let t=Ke[e];if(t===void 0){const n=Iy.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yl(t)}const Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(i){return i.replace(Uy,Oy)}function Oy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ch(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function zy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function By(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function Vy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ma:e="ENVMAP_BLENDING_MULTIPLY";break;case zg:e="ENVMAP_BLENDING_MIX";break;case Bg:e="ENVMAP_BLENDING_ADD";break}return e}function Hy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ky(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Fy(t),l=zy(t),u=By(t),d=Vy(t),h=Hy(t),p=Ry(t),g=Cy(r),_=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),f.length>0&&(f+=`
`)):(m=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),f=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ln?by("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,wy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=yl(o),o=wh(o,t),o=bh(o,t),a=yl(a),a=wh(a,t),a=bh(a,t),o=Rh(o),a=Rh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=E+m+o,N=E+f+a,D=Nh(s,s.VERTEX_SHADER,x),b=Nh(s,s.FRAGMENT_SHADER,N);s.attachShader(_,D),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(D).trim(),J=s.getShaderInfoLog(b).trim();let ee=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,b);else{const ne=Ah(s,D,"vertex"),K=Ah(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+ne+`
`+K)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||J==="")&&(j=!1);j&&(C.diagnostics={runnable:ee,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:f}})}s.deleteShader(D),s.deleteShader(b),P=new Wo(s,_),T=Ly(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Ty)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ey++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=b,this}let Gy=0;class Wy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xy(e),t.set(e,n)),n}}class Xy{constructor(e){this.id=Gy++,this.code=e,this.usedTimes=0}}function qy(i,e,t,n,s,r,o){const a=new lf,c=new Wy,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,M,C,G,H){const J=G.fog,ee=H.geometry,j=T.isMeshStandardMaterial?G.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||j),K=ne&&ne.mapping===ga?ne.image.height:null,ye=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Ee=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,we=Ee!==void 0?Ee.length:0;let Je=0;ee.morphAttributes.position!==void 0&&(Je=1),ee.morphAttributes.normal!==void 0&&(Je=2),ee.morphAttributes.color!==void 0&&(Je=3);let rt,Q,le,Ne;if(ye){const tt=ti[ye];rt=tt.vertexShader,Q=tt.fragmentShader}else rt=T.vertexShader,Q=T.fragmentShader,c.update(T),le=c.getVertexShaderID(T),Ne=c.getFragmentShaderID(T);const Se=i.getRenderTarget(),qe=H.isInstancedMesh===!0,$e=H.isBatchedMesh===!0,Ze=!!T.map,xt=!!T.matcap,R=!!ne,Nt=!!T.aoMap,it=!!T.lightMap,ot=!!T.bumpMap,Re=!!T.normalMap,At=!!T.displacementMap,Ge=!!T.emissiveMap,Xe=!!T.metalnessMap,w=!!T.roughnessMap,y=T.anisotropy>0,X=T.clearcoat>0,re=T.dispersion>0,ae=T.iridescence>0,ie=T.sheen>0,Pe=T.transmission>0,me=y&&!!T.anisotropyMap,_e=X&&!!T.clearcoatMap,Ye=X&&!!T.clearcoatNormalMap,ue=X&&!!T.clearcoatRoughnessMap,ve=ae&&!!T.iridescenceMap,Qe=ae&&!!T.iridescenceThicknessMap,Oe=ie&&!!T.sheenColorMap,Te=ie&&!!T.sheenRoughnessMap,Be=!!T.specularMap,We=!!T.specularColorMap,St=!!T.specularIntensityMap,v=Pe&&!!T.transmissionMap,z=Pe&&!!T.thicknessMap,V=!!T.gradientMap,Y=!!T.alphaMap,oe=T.alphaTest>0,Ce=!!T.alphaHash,Ve=!!T.extensions;let Ct=Ln;T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const zt={shaderID:ye,shaderType:T.type,shaderName:T.name,vertexShader:rt,fragmentShader:Q,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:Ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:$e,batchingColor:$e&&H._colorsTexture!==null,instancing:qe,instancingColor:qe&&H.instanceColor!==null,instancingMorph:qe&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Qn,alphaToCoverage:!!T.alphaToCoverage,map:Ze,matcap:xt,envMap:R,envMapMode:R&&ne.mapping,envMapCubeUVHeight:K,aoMap:Nt,lightMap:it,bumpMap:ot,normalMap:Re,displacementMap:h&&At,emissiveMap:Ge,normalMapObjectSpace:Re&&T.normalMapType===sf,normalMapTangentSpace:Re&&T.normalMapType===bi,metalnessMap:Xe,roughnessMap:w,anisotropy:y,anisotropyMap:me,clearcoat:X,clearcoatMap:_e,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ue,dispersion:re,iridescence:ae,iridescenceMap:ve,iridescenceThicknessMap:Qe,sheen:ie,sheenColorMap:Oe,sheenRoughnessMap:Te,specularMap:Be,specularColorMap:We,specularIntensityMap:St,transmission:Pe,transmissionMap:v,thicknessMap:z,gradientMap:V,opaque:T.transparent===!1&&T.blending===ds&&T.alphaToCoverage===!1,alphaMap:Y,alphaTest:oe,alphaHash:Ce,combine:T.combine,mapUv:Ze&&_(T.map.channel),aoMapUv:Nt&&_(T.aoMap.channel),lightMapUv:it&&_(T.lightMap.channel),bumpMapUv:ot&&_(T.bumpMap.channel),normalMapUv:Re&&_(T.normalMap.channel),displacementMapUv:At&&_(T.displacementMap.channel),emissiveMapUv:Ge&&_(T.emissiveMap.channel),metalnessMapUv:Xe&&_(T.metalnessMap.channel),roughnessMapUv:w&&_(T.roughnessMap.channel),anisotropyMapUv:me&&_(T.anisotropyMap.channel),clearcoatMapUv:_e&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(T.sheenRoughnessMap.channel),specularMapUv:Be&&_(T.specularMap.channel),specularColorMapUv:We&&_(T.specularColorMap.channel),specularIntensityMapUv:St&&_(T.specularIntensityMap.channel),transmissionMapUv:v&&_(T.transmissionMap.channel),thicknessMapUv:z&&_(T.thicknessMap.channel),alphaMapUv:Y&&_(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Re||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(Ze||Y),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Je,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Ze&&T.map.isVideoTexture===!0&&mt.getTransfer(T.map.colorSpace)===yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Mi,flipSided:T.side===pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)M.push(C),M.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(E(M,T),x(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function E(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function x(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),T.push(a.mask)}function N(T){const M=g[T.type];let C;if(M){const G=ti[M];C=C_.clone(G.uniforms)}else C=T.uniforms;return C}function D(T,M){let C;for(let G=0,H=u.length;G<H;G++){const J=u[G];if(J.cacheKey===M){C=J,++C.usedTimes;break}}return C===void 0&&(C=new ky(i,M,T,r),u.push(C)),C}function b(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function A(T){c.remove(T)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:N,acquireProgram:D,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:P}}function Yy(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function $y(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ph(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,h,p,g,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||$y),n.length>1&&n.sort(h||Lh),s.length>1&&s.sort(h||Lh)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function jy(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ph,i.set(n,[o])):s>=r.length?(o=new Ph,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ky(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ue};break;case"SpotLight":t={position:new L,direction:new L,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Zy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jy=0;function Qy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eM(i){const e=new Ky,t=Zy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new vt,o=new vt;function a(l){let u=0,d=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,x=0,N=0,D=0,b=0,A=0;l.sort(Qy);for(let T=0,M=l.length;T<M;T++){const C=l[T],G=C.color,H=C.intensity,J=C.distance,ee=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=G.r*H,d+=G.g*H,h+=G.b*H;else if(C.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(C.sh.coefficients[j],H);A++}else if(C.isDirectionalLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ne=C.shadow,K=t.get(C);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=j,p++}else if(C.isSpotLight){const j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(G).multiplyScalar(H),j.distance=J,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,n.spot[_]=j;const ne=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,ne.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[_]=ne.matrix,C.castShadow){const K=t.get(C);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=ee,N++}_++}else if(C.isRectAreaLight){const j=e.get(C);j.color.copy(G).multiplyScalar(H),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=j,m++}else if(C.isPointLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){const ne=C.shadow,K=t.get(C);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,K.shadowCameraNear=ne.camera.near,K.shadowCameraFar=ne.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=j,g++}else if(C.isHemisphereLight){const j=e.get(C);j.skyColor.copy(C.color).multiplyScalar(H),j.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[f]=j,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==E||P.numPointShadows!==x||P.numSpotShadows!==N||P.numSpotMaps!==D||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=N+D-b,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=E,P.numPointShadows=x,P.numSpotShadows=N,P.numSpotMaps=D,P.numLightProbes=A,n.version=Jy++)}function c(l,u){let d=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const x=l[f];if(x.isDirectionalLight){const N=n.directional[d];N.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(m),d++}else if(x.isSpotLight){const N=n.spot[p];N.position.setFromMatrixPosition(x.matrixWorld),N.position.applyMatrix4(m),N.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const N=n.rectArea[g];N.position.setFromMatrixPosition(x.matrixWorld),N.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),N.halfWidth.set(x.width*.5,0,0),N.halfHeight.set(0,x.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const N=n.point[h];N.position.setFromMatrixPosition(x.matrixWorld),N.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const N=n.hemi[_];N.direction.setFromMatrixPosition(x.matrixWorld),N.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ih(i){const e=new eM(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function tM(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ih(i),e.set(s,[a])):r>=o.length?(a=new Ih(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class nM extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iM extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oM(i,e,t){let n=new iu;const s=new xe,r=new xe,o=new nt,a=new nM({depthPacking:Gg}),c=new iM,l={},u=t.maxTextureSize,d={[Yi]:pn,[pn]:Yi,[Mi]:Mi},h=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:sM,fragmentShader:rM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bn;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bd;let f=this.type;this.render=function(b,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(qi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=f!==vi&&this.type===vi,J=f===vi&&this.type!==vi;for(let ee=0,j=b.length;ee<j;ee++){const ne=b[ee],K=ne.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ye=K.getFrameExtents();if(s.multiply(ye),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ye.x),s.x=r.x*ye.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ye.y),s.y=r.y*ye.y,K.mapSize.y=r.y)),K.map===null||H===!0||J===!0){const we=this.type!==vi?{minFilter:sn,magFilter:sn}:{};K.map!==null&&K.map.dispose(),K.map=new fs(s.x,s.y,we),K.map.texture.name=ne.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const Ee=K.getViewportCount();for(let we=0;we<Ee;we++){const Je=K.getViewport(we);o.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),G.viewport(o),K.updateMatrices(ne,we),n=K.getFrustum(),N(A,P,K.camera,ne,this.type)}K.isPointLightShadow!==!0&&this.type===vi&&E(K,P),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,M,C)};function E(b,A){const P=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new fs(s.x,s.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,P,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,P,p,_,null)}function x(b,A,P,T){let M=null;const C=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=M.uuid,H=A.uuid;let J=l[G];J===void 0&&(J={},l[G]=J);let ee=J[H];ee===void 0&&(ee=M.clone(),J[H]=ee,A.addEventListener("dispose",D)),M=ee}if(M.visible=A.visible,M.wireframe=A.wireframe,T===vi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=P}return M}function N(b,A,P,T,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===vi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const H=e.update(b),J=b.material;if(Array.isArray(J)){const ee=H.groups;for(let j=0,ne=ee.length;j<ne;j++){const K=ee[j],ye=J[K.materialIndex];if(ye&&ye.visible){const Ee=x(b,ye,T,M);b.onBeforeShadow(i,b,A,P,H,Ee,K),i.renderBufferDirect(P,null,H,Ee,b,K),b.onAfterShadow(i,b,A,P,H,Ee,K)}}}else if(J.visible){const ee=x(b,J,T,M);b.onBeforeShadow(i,b,A,P,H,ee,null),i.renderBufferDirect(P,null,H,ee,b,null),b.onAfterShadow(i,b,A,P,H,ee,null)}}const G=b.children;for(let H=0,J=G.length;H<J;H++)N(G[H],A,P,T,M)}function D(b){b.target.removeEventListener("dispose",D);for(const P in l){const T=l[P],M=b.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function aM(i){function e(){let v=!1;const z=new nt;let V=null;const Y=new nt(0,0,0,0);return{setMask:function(oe){V!==oe&&!v&&(i.colorMask(oe,oe,oe,oe),V=oe)},setLocked:function(oe){v=oe},setClear:function(oe,Ce,Ve,Ct,zt){zt===!0&&(oe*=Ct,Ce*=Ct,Ve*=Ct),z.set(oe,Ce,Ve,Ct),Y.equals(z)===!1&&(i.clearColor(oe,Ce,Ve,Ct),Y.copy(z))},reset:function(){v=!1,V=null,Y.set(-1,0,0,0)}}}function t(){let v=!1,z=null,V=null,Y=null;return{setTest:function(oe){oe?Ne(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(oe){z!==oe&&!v&&(i.depthMask(oe),z=oe)},setFunc:function(oe){if(V!==oe){switch(oe){case Lg:i.depthFunc(i.NEVER);break;case Pg:i.depthFunc(i.ALWAYS);break;case Ig:i.depthFunc(i.LESS);break;case Ko:i.depthFunc(i.LEQUAL);break;case Dg:i.depthFunc(i.EQUAL);break;case Ug:i.depthFunc(i.GEQUAL);break;case Og:i.depthFunc(i.GREATER);break;case Fg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=oe}},setLocked:function(oe){v=oe},setClear:function(oe){Y!==oe&&(i.clearDepth(oe),Y=oe)},reset:function(){v=!1,z=null,V=null,Y=null}}}function n(){let v=!1,z=null,V=null,Y=null,oe=null,Ce=null,Ve=null,Ct=null,zt=null;return{setTest:function(tt){v||(tt?Ne(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(tt){z!==tt&&!v&&(i.stencilMask(tt),z=tt)},setFunc:function(tt,Bt,It){(V!==tt||Y!==Bt||oe!==It)&&(i.stencilFunc(tt,Bt,It),V=tt,Y=Bt,oe=It)},setOp:function(tt,Bt,It){(Ce!==tt||Ve!==Bt||Ct!==It)&&(i.stencilOp(tt,Bt,It),Ce=tt,Ve=Bt,Ct=It)},setLocked:function(tt){v=tt},setClear:function(tt){zt!==tt&&(i.clearStencil(tt),zt=tt)},reset:function(){v=!1,z=null,V=null,Y=null,oe=null,Ce=null,Ve=null,Ct=null,zt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,f=null,E=null,x=null,N=null,D=null,b=new Ue(0,0,0),A=0,P=!1,T=null,M=null,C=null,G=null,H=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,j=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=j>=1):ne.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=j>=2);let K=null,ye={};const Ee=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Je=new nt().fromArray(Ee),rt=new nt().fromArray(we);function Q(v,z,V,Y){const oe=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(v,Ce),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<V;Ve++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(z,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(z+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return Ce}const le={};le[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ne(i.DEPTH_TEST),r.setFunc(Ko),ot(!1),Re(Vu),Ne(i.CULL_FACE),Nt(qi);function Ne(v){l[v]!==!0&&(i.enable(v),l[v]=!0)}function Se(v){l[v]!==!1&&(i.disable(v),l[v]=!1)}function qe(v,z){return u[v]!==z?(i.bindFramebuffer(v,z),u[v]=z,v===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=z),v===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=z),!0):!1}function $e(v,z){let V=h,Y=!1;if(v){V=d.get(z),V===void 0&&(V=[],d.set(z,V));const oe=v.textures;if(V.length!==oe.length||V[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Ve=oe.length;Ce<Ve;Ce++)V[Ce]=i.COLOR_ATTACHMENT0+Ce;V.length=oe.length,Y=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Y=!0);Y&&i.drawBuffers(V)}function Ze(v){return p!==v?(i.useProgram(v),p=v,!0):!1}const xt={[ls]:i.FUNC_ADD,[pg]:i.FUNC_SUBTRACT,[mg]:i.FUNC_REVERSE_SUBTRACT};xt[gg]=i.MIN,xt[_g]=i.MAX;const R={[vg]:i.ZERO,[xg]:i.ONE,[yg]:i.SRC_COLOR,[kc]:i.SRC_ALPHA,[Ag]:i.SRC_ALPHA_SATURATE,[Eg]:i.DST_COLOR,[Sg]:i.DST_ALPHA,[Mg]:i.ONE_MINUS_SRC_COLOR,[Gc]:i.ONE_MINUS_SRC_ALPHA,[Ng]:i.ONE_MINUS_DST_COLOR,[Tg]:i.ONE_MINUS_DST_ALPHA,[wg]:i.CONSTANT_COLOR,[bg]:i.ONE_MINUS_CONSTANT_COLOR,[Rg]:i.CONSTANT_ALPHA,[Cg]:i.ONE_MINUS_CONSTANT_ALPHA};function Nt(v,z,V,Y,oe,Ce,Ve,Ct,zt,tt){if(v===qi){g===!0&&(Se(i.BLEND),g=!1);return}if(g===!1&&(Ne(i.BLEND),g=!0),v!==fg){if(v!==_||tt!==P){if((m!==ls||x!==ls)&&(i.blendEquation(i.FUNC_ADD),m=ls,x=ls),tt)switch(v){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.ONE,i.ONE);break;case Hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}f=null,E=null,N=null,D=null,b.set(0,0,0),A=0,_=v,P=tt}return}oe=oe||z,Ce=Ce||V,Ve=Ve||Y,(z!==m||oe!==x)&&(i.blendEquationSeparate(xt[z],xt[oe]),m=z,x=oe),(V!==f||Y!==E||Ce!==N||Ve!==D)&&(i.blendFuncSeparate(R[V],R[Y],R[Ce],R[Ve]),f=V,E=Y,N=Ce,D=Ve),(Ct.equals(b)===!1||zt!==A)&&(i.blendColor(Ct.r,Ct.g,Ct.b,zt),b.copy(Ct),A=zt),_=v,P=!1}function it(v,z){v.side===Mi?Se(i.CULL_FACE):Ne(i.CULL_FACE);let V=v.side===pn;z&&(V=!V),ot(V),v.blending===ds&&v.transparent===!1?Nt(qi):Nt(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),s.setMask(v.colorWrite);const Y=v.stencilWrite;o.setTest(Y),Y&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Ge(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(v){T!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),T=v)}function Re(v){v!==ug?(Ne(i.CULL_FACE),v!==M&&(v===Vu?i.cullFace(i.BACK):v===hg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),M=v}function At(v){v!==C&&(ee&&i.lineWidth(v),C=v)}function Ge(v,z,V){v?(Ne(i.POLYGON_OFFSET_FILL),(G!==z||H!==V)&&(i.polygonOffset(z,V),G=z,H=V)):Se(i.POLYGON_OFFSET_FILL)}function Xe(v){v?Ne(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function w(v){v===void 0&&(v=i.TEXTURE0+J-1),K!==v&&(i.activeTexture(v),K=v)}function y(v,z,V){V===void 0&&(K===null?V=i.TEXTURE0+J-1:V=K);let Y=ye[V];Y===void 0&&(Y={type:void 0,texture:void 0},ye[V]=Y),(Y.type!==v||Y.texture!==z)&&(K!==V&&(i.activeTexture(V),K=V),i.bindTexture(v,z||le[v]),Y.type=v,Y.texture=z)}function X(){const v=ye[K];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Oe(v){Je.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),Je.copy(v))}function Te(v){rt.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),rt.copy(v))}function Be(v,z){let V=c.get(z);V===void 0&&(V=new WeakMap,c.set(z,V));let Y=V.get(v);Y===void 0&&(Y=i.getUniformBlockIndex(z,v.name),V.set(v,Y))}function We(v,z){const Y=c.get(z).get(v);a.get(z)!==Y&&(i.uniformBlockBinding(z,Y,v.__bindingPointIndex),a.set(z,Y))}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},K=null,ye={},u={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,f=null,E=null,x=null,N=null,D=null,b=new Ue(0,0,0),A=0,P=!1,T=null,M=null,C=null,G=null,H=null,Je.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Ne,disable:Se,bindFramebuffer:qe,drawBuffers:$e,useProgram:Ze,setBlending:Nt,setMaterial:it,setFlipSided:ot,setCullFace:Re,setLineWidth:At,setPolygonOffset:Ge,setScissorTest:Xe,activeTexture:w,bindTexture:y,unbindTexture:X,compressedTexImage2D:re,compressedTexImage3D:ae,texImage2D:ve,texImage3D:Qe,updateUBOMapping:Be,uniformBlockBinding:We,texStorage2D:Ye,texStorage3D:ue,texSubImage2D:ie,texSubImage3D:Pe,compressedTexSubImage2D:me,compressedTexSubImage3D:_e,scissor:Oe,viewport:Te,reset:St}}function Dh(i,e,t,n){const s=cM(n);switch(t){case Kd:return i*e;case Jd:return i*e;case Qd:return i*e*2;case ef:return i*e/s.components*s.byteLength;case $l:return i*e/s.components*s.byteLength;case tf:return i*e*2/s.components*s.byteLength;case jl:return i*e*2/s.components*s.byteLength;case Zd:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case Kl:return i*e*4/s.components*s.byteLength;case Bo:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ho:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:case Zc:return Math.max(i,16)*Math.max(e,8)/4;case $c:case Kc:return Math.max(i,8)*Math.max(e,8)/2;case Jc:case Qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Go:case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nf:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vl:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cM(i){switch(i){case wi:case Yd:return{byteLength:1,components:1};case Fr:case $d:case dr:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case $i:case _a:case ai:return{byteLength:4,components:1};case jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lM(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xe,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return p?new OffscreenCanvas(w,y):zr("canvas")}function _(w,y,X){let re=1;const ae=Xe(w);if((ae.width>X||ae.height>X)&&(re=X/Math.max(ae.width,ae.height)),re<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ie=Math.floor(re*ae.width),Pe=Math.floor(re*ae.height);d===void 0&&(d=g(ie,Pe));const me=y?g(ie,Pe):d;return me.width=ie,me.height=Pe,me.getContext("2d").drawImage(w,0,0,ie,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ie+"x"+Pe+")."),me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==sn&&w.minFilter!==qn}function f(w){i.generateMipmap(w)}function E(w,y,X,re,ae=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=y;if(y===i.RED&&(X===i.FLOAT&&(ie=i.R32F),X===i.HALF_FLOAT&&(ie=i.R16F),X===i.UNSIGNED_BYTE&&(ie=i.R8)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.R8UI),X===i.UNSIGNED_SHORT&&(ie=i.R16UI),X===i.UNSIGNED_INT&&(ie=i.R32UI),X===i.BYTE&&(ie=i.R8I),X===i.SHORT&&(ie=i.R16I),X===i.INT&&(ie=i.R32I)),y===i.RG&&(X===i.FLOAT&&(ie=i.RG32F),X===i.HALF_FLOAT&&(ie=i.RG16F),X===i.UNSIGNED_BYTE&&(ie=i.RG8)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.RG8UI),X===i.UNSIGNED_SHORT&&(ie=i.RG16UI),X===i.UNSIGNED_INT&&(ie=i.RG32UI),X===i.BYTE&&(ie=i.RG8I),X===i.SHORT&&(ie=i.RG16I),X===i.INT&&(ie=i.RG32I)),y===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),y===i.RGBA){const Pe=ae?Zo:mt.getTransfer(re);X===i.FLOAT&&(ie=i.RGBA32F),X===i.HALF_FLOAT&&(ie=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ie=Pe===yt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(w,y){let X;return w?y===null||y===$i||y===ir?X=i.DEPTH24_STENCIL8:y===ai?X=i.DEPTH32F_STENCIL8:y===Fr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$i||y===ir?X=i.DEPTH_COMPONENT24:y===ai?X=i.DEPTH_COMPONENT32F:y===Fr&&(X=i.DEPTH_COMPONENT16),X}function N(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==sn&&w.minFilter!==qn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function D(w){const y=w.target;y.removeEventListener("dispose",D),A(y),y.isVideoTexture&&u.delete(y)}function b(w){const y=w.target;y.removeEventListener("dispose",b),T(y)}function A(w){const y=n.get(w);if(y.__webglInit===void 0)return;const X=w.source,re=h.get(X);if(re){const ae=re[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&P(w),Object.keys(re).length===0&&h.delete(X)}n.remove(w)}function P(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const X=w.source,re=h.get(X);delete re[y.__cacheKey],o.memory.textures--}function T(w){const y=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(y.__webglFramebuffer[re]))for(let ae=0;ae<y.__webglFramebuffer[re].length;ae++)i.deleteFramebuffer(y.__webglFramebuffer[re][ae]);else i.deleteFramebuffer(y.__webglFramebuffer[re]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[re])}else{if(Array.isArray(y.__webglFramebuffer))for(let re=0;re<y.__webglFramebuffer.length;re++)i.deleteFramebuffer(y.__webglFramebuffer[re]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let re=0;re<y.__webglColorRenderbuffer.length;re++)y.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[re]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=w.textures;for(let re=0,ae=X.length;re<ae;re++){const ie=n.get(X[re]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(X[re])}n.remove(w)}let M=0;function C(){M=0}function G(){const w=M;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),M+=1,w}function H(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function J(w,y){const X=n.get(w);if(w.isVideoTexture&&At(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){const re=w.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(X,w,y);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function ee(w,y){const X=n.get(w);if(w.version>0&&X.__version!==w.version){rt(X,w,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function j(w,y){const X=n.get(w);if(w.version>0&&X.__version!==w.version){rt(X,w,y);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function ne(w,y){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Q(X,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}const K={[qc]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[Yc]:i.MIRRORED_REPEAT},ye={[sn]:i.NEAREST,[Hg]:i.NEAREST_MIPMAP_NEAREST,[io]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},Ee={[Wg]:i.NEVER,[jg]:i.ALWAYS,[rf]:i.LESS,[of]:i.LEQUAL,[Xg]:i.EQUAL,[$g]:i.GEQUAL,[qg]:i.GREATER,[Yg]:i.NOTEQUAL};function we(w,y){if(y.type===ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===qn||y.magFilter===Wa||y.magFilter===io||y.magFilter===Wi||y.minFilter===qn||y.minFilter===Wa||y.minFilter===io||y.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,K[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,K[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,K[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ye[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==io&&y.minFilter!==Wi||y.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Je(w,y){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",D));const re=y.source;let ae=h.get(re);ae===void 0&&(ae={},h.set(re,ae));const ie=H(y);if(ie!==w.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ae[ie].usedTimes++;const Pe=ae[w.__cacheKey];Pe!==void 0&&(ae[w.__cacheKey].usedTimes--,Pe.usedTimes===0&&P(y)),w.__cacheKey=ie,w.__webglTexture=ae[ie].texture}return X}function rt(w,y,X){let re=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=i.TEXTURE_3D);const ae=Je(w,y),ie=y.source;t.bindTexture(re,w.__webglTexture,i.TEXTURE0+X);const Pe=n.get(ie);if(ie.version!==Pe.__version||ae===!0){t.activeTexture(i.TEXTURE0+X);const me=mt.getPrimaries(mt.workingColorSpace),_e=y.colorSpace===ki?null:mt.getPrimaries(y.colorSpace),Ye=y.colorSpace===ki||me===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ue=_(y.image,!1,s.maxTextureSize);ue=Ge(y,ue);const ve=r.convert(y.format,y.colorSpace),Qe=r.convert(y.type);let Oe=E(y.internalFormat,ve,Qe,y.colorSpace,y.isVideoTexture);we(re,y);let Te;const Be=y.mipmaps,We=y.isVideoTexture!==!0,St=Pe.__version===void 0||ae===!0,v=ie.dataReady,z=N(y,ue);if(y.isDepthTexture)Oe=x(y.format===sr,y.type),St&&(We?t.texStorage2D(i.TEXTURE_2D,1,Oe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ue.width,ue.height,0,ve,Qe,null));else if(y.isDataTexture)if(Be.length>0){We&&St&&t.texStorage2D(i.TEXTURE_2D,z,Oe,Be[0].width,Be[0].height);for(let V=0,Y=Be.length;V<Y;V++)Te=Be[V],We?v&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Qe,Te.data):t.texImage2D(i.TEXTURE_2D,V,Oe,Te.width,Te.height,0,ve,Qe,Te.data);y.generateMipmaps=!1}else We?(St&&t.texStorage2D(i.TEXTURE_2D,z,Oe,ue.width,ue.height),v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Qe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,ue.width,ue.height,0,ve,Qe,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,Oe,Be[0].width,Be[0].height,ue.depth);for(let V=0,Y=Be.length;V<Y;V++)if(Te=Be[V],y.format!==$n)if(ve!==null)if(We){if(v)if(y.layerUpdates.size>0){const oe=Dh(Te.width,Te.height,y.format,y.type);for(const Ce of y.layerUpdates){const Ve=Te.data.subarray(Ce*oe/Te.data.BYTES_PER_ELEMENT,(Ce+1)*oe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,Ce,Te.width,Te.height,1,ve,Ve,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Te.width,Te.height,ue.depth,ve,Te.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Oe,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?v&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Te.width,Te.height,ue.depth,ve,Qe,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Oe,Te.width,Te.height,ue.depth,0,ve,Qe,Te.data)}else{We&&St&&t.texStorage2D(i.TEXTURE_2D,z,Oe,Be[0].width,Be[0].height);for(let V=0,Y=Be.length;V<Y;V++)Te=Be[V],y.format!==$n?ve!==null?We?v&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?v&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Qe,Te.data):t.texImage2D(i.TEXTURE_2D,V,Oe,Te.width,Te.height,0,ve,Qe,Te.data)}else if(y.isDataArrayTexture)if(We){if(St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,Oe,ue.width,ue.height,ue.depth),v)if(y.layerUpdates.size>0){const V=Dh(ue.width,ue.height,y.format,y.type);for(const Y of y.layerUpdates){const oe=ue.data.subarray(Y*V/ue.data.BYTES_PER_ELEMENT,(Y+1)*V/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ue.width,ue.height,1,ve,Qe,oe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Qe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ue.width,ue.height,ue.depth,0,ve,Qe,ue.data);else if(y.isData3DTexture)We?(St&&t.texStorage3D(i.TEXTURE_3D,z,Oe,ue.width,ue.height,ue.depth),v&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Qe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ue.width,ue.height,ue.depth,0,ve,Qe,ue.data);else if(y.isFramebufferTexture){if(St)if(We)t.texStorage2D(i.TEXTURE_2D,z,Oe,ue.width,ue.height);else{let V=ue.width,Y=ue.height;for(let oe=0;oe<z;oe++)t.texImage2D(i.TEXTURE_2D,oe,Oe,V,Y,0,ve,Qe,null),V>>=1,Y>>=1}}else if(Be.length>0){if(We&&St){const V=Xe(Be[0]);t.texStorage2D(i.TEXTURE_2D,z,Oe,V.width,V.height)}for(let V=0,Y=Be.length;V<Y;V++)Te=Be[V],We?v&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ve,Qe,Te):t.texImage2D(i.TEXTURE_2D,V,Oe,ve,Qe,Te);y.generateMipmaps=!1}else if(We){if(St){const V=Xe(ue);t.texStorage2D(i.TEXTURE_2D,z,Oe,V.width,V.height)}v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Qe,ue)}else t.texImage2D(i.TEXTURE_2D,0,Oe,ve,Qe,ue);m(y)&&f(re),Pe.__version=ie.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Q(w,y,X){if(y.image.length!==6)return;const re=Je(w,y),ae=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+X);const ie=n.get(ae);if(ae.version!==ie.__version||re===!0){t.activeTexture(i.TEXTURE0+X);const Pe=mt.getPrimaries(mt.workingColorSpace),me=y.colorSpace===ki?null:mt.getPrimaries(y.colorSpace),_e=y.colorSpace===ki||Pe===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ye=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let Y=0;Y<6;Y++)!Ye&&!ue?ve[Y]=_(y.image[Y],!0,s.maxCubemapSize):ve[Y]=ue?y.image[Y].image:y.image[Y],ve[Y]=Ge(y,ve[Y]);const Qe=ve[0],Oe=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),Be=E(y.internalFormat,Oe,Te,y.colorSpace),We=y.isVideoTexture!==!0,St=ie.__version===void 0||re===!0,v=ae.dataReady;let z=N(y,Qe);we(i.TEXTURE_CUBE_MAP,y);let V;if(Ye){We&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,z,Be,Qe.width,Qe.height);for(let Y=0;Y<6;Y++){V=ve[Y].mipmaps;for(let oe=0;oe<V.length;oe++){const Ce=V[oe];y.format!==$n?Oe!==null?We?v&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,0,0,Ce.width,Ce.height,Oe,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,0,0,Ce.width,Ce.height,Oe,Te,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,Be,Ce.width,Ce.height,0,Oe,Te,Ce.data)}}}else{if(V=y.mipmaps,We&&St){V.length>0&&z++;const Y=Xe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,z,Be,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ue){We?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ve[Y].width,ve[Y].height,Oe,Te,ve[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,ve[Y].width,ve[Y].height,0,Oe,Te,ve[Y].data);for(let oe=0;oe<V.length;oe++){const Ve=V[oe].image[Y].image;We?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,0,0,Ve.width,Ve.height,Oe,Te,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,Be,Ve.width,Ve.height,0,Oe,Te,Ve.data)}}else{We?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Oe,Te,ve[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,Oe,Te,ve[Y]);for(let oe=0;oe<V.length;oe++){const Ce=V[oe];We?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,0,0,Oe,Te,Ce.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,Be,Oe,Te,Ce.image[Y])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),ie.__version=ae.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function le(w,y,X,re,ae,ie){const Pe=r.convert(X.format,X.colorSpace),me=r.convert(X.type),_e=E(X.internalFormat,Pe,me,X.colorSpace);if(!n.get(y).__hasExternalTextures){const ue=Math.max(1,y.width>>ie),ve=Math.max(1,y.height>>ie);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ie,_e,ue,ve,y.depth,0,Pe,me,null):t.texImage2D(ae,ie,_e,ue,ve,0,Pe,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Re(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ae,n.get(X).__webglTexture,0,ot(y)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ae,n.get(X).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(w,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const re=y.depthTexture,ae=re&&re.isDepthTexture?re.type:null,ie=x(y.stencilBuffer,ae),Pe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=ot(y);Re(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,ie,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,w)}else{const re=y.textures;for(let ae=0;ae<re.length;ae++){const ie=re[ae],Pe=r.convert(ie.format,ie.colorSpace),me=r.convert(ie.type),_e=E(ie.internalFormat,Pe,me,ie.colorSpace),Ye=ot(y);X&&Re(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,_e,y.width,y.height):Re(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,_e,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_e,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const re=n.get(y.depthTexture).__webglTexture,ae=ot(y);if(y.depthTexture.format===Ys)Re(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(y.depthTexture.format===sr)Re(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function qe(w){const y=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Se(y.__webglFramebuffer,w)}else if(X){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]=i.createRenderbuffer(),Ne(y.__webglDepthbuffer[re],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Ne(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(w,y,X){const re=n.get(w);y!==void 0&&le(re.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&qe(w)}function Ze(w){const y=w.texture,X=n.get(w),re=n.get(y);w.addEventListener("dispose",b);const ae=w.textures,ie=w.isWebGLCubeRenderTarget===!0,Pe=ae.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=y.version,o.memory.textures++),ie){X.__webglFramebuffer=[];for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[me]=[];for(let _e=0;_e<y.mipmaps.length;_e++)X.__webglFramebuffer[me][_e]=i.createFramebuffer()}else X.__webglFramebuffer[me]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let me=0;me<y.mipmaps.length;me++)X.__webglFramebuffer[me]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let me=0,_e=ae.length;me<_e;me++){const Ye=n.get(ae[me]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Re(w)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let me=0;me<ae.length;me++){const _e=ae[me];X.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[me]);const Ye=r.convert(_e.format,_e.colorSpace),ue=r.convert(_e.type),ve=E(_e.internalFormat,Ye,ue,_e.colorSpace,w.isXRRenderTarget===!0),Qe=ot(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,ve,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,X.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),we(i.TEXTURE_CUBE_MAP,y);for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)le(X.__webglFramebuffer[me][_e],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else le(X.__webglFramebuffer[me],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,_e=ae.length;me<_e;me++){const Ye=ae[me],ue=n.get(Ye);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),we(i.TEXTURE_2D,Ye),le(X.__webglFramebuffer,w,Ye,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),m(Ye)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,re.__webglTexture),we(me,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)le(X.__webglFramebuffer[_e],w,y,i.COLOR_ATTACHMENT0,me,_e);else le(X.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,me,0);m(y)&&f(me),t.unbindTexture()}w.depthBuffer&&qe(w)}function xt(w){const y=w.textures;for(let X=0,re=y.length;X<re;X++){const ae=y[X];if(m(ae)){const ie=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(ae).__webglTexture;t.bindTexture(ie,Pe),f(ie),t.unbindTexture()}}}const R=[],Nt=[];function it(w){if(w.samples>0){if(Re(w)===!1){const y=w.textures,X=w.width,re=w.height;let ae=i.COLOR_BUFFER_BIT;const ie=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(w),me=y.length>1;if(me)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);const Ye=n.get(y[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,X,re,0,0,X,re,ae,i.NEAREST),c===!0&&(R.length=0,Nt.length=0,R.push(i.COLOR_ATTACHMENT0+_e),w.depthBuffer&&w.resolveDepthBuffer===!1&&(R.push(ie),Nt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);const Ye=n.get(y[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ot(w){return Math.min(s.maxSamples,w.samples)}function Re(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(w){const y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Ge(w,y){const X=w.colorSpace,re=w.format,ae=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==Qn&&X!==ki&&(mt.getTransfer(X)===yt?(re!==$n||ae!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}function Xe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=C,this.setTexture2D=J,this.setTexture2DArray=ee,this.setTexture3D=j,this.setTextureCube=ne,this.rebindTextures=$e,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Re}function uM(i,e){function t(n,s=ki){let r;const o=mt.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yd)return i.BYTE;if(n===$d)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===Kd)return i.ALPHA;if(n===Zd)return i.RGB;if(n===$n)return i.RGBA;if(n===Jd)return i.LUMINANCE;if(n===Qd)return i.LUMINANCE_ALPHA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===ef)return i.RED;if(n===$l)return i.RED_INTEGER;if(n===tf)return i.RG;if(n===jl)return i.RG_INTEGER;if(n===Kl)return i.RGBA_INTEGER;if(n===Bo||n===Vo||n===Ho||n===ko)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===jc||n===Kc||n===Zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===Qc||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===Qc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===ul||n===hl||n===dl||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===ml||n===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nf||n===_l||n===vl||n===xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class hM extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ao extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dM={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ao;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new on,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ci({vertexShader:fM,fragmentShader:pM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Ma(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gM extends Pi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const _=new mM,m=t.getContextAttributes();let f=null,E=null;const x=[],N=[],D=new xe;let b=null;const A=new gn;A.layers.enable(1),A.viewport=new nt;const P=new gn;P.layers.enable(2),P.viewport=new nt;const T=[A,P],M=new hM;M.layers.enable(1),M.layers.enable(2);let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let le=x[Q];return le===void 0&&(le=new mc,x[Q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Q){let le=x[Q];return le===void 0&&(le=new mc,x[Q]=le),le.getGripSpace()},this.getHand=function(Q){let le=x[Q];return le===void 0&&(le=new mc,x[Q]=le),le.getHandSpace()};function H(Q){const le=N.indexOf(Q.inputSource);if(le===-1)return;const Ne=x[le];Ne!==void 0&&(Ne.update(Q.inputSource,Q.frame,l||o),Ne.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ee);for(let Q=0;Q<x.length;Q++){const le=N[Q];le!==null&&(N[Q]=null,x[Q].disconnect(le))}C=null,G=null,_.reset(),e.setRenderTarget(f),p=null,h=null,d=null,s=null,E=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new fs(p.framebufferWidth,p.framebufferHeight,{format:$n,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,Ne=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?sr:Ys,Ne=m.stencil?ir:$i);const qe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(qe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new fs(h.textureWidth,h.textureHeight,{format:$n,type:wi,depthTexture:new Yr(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(Q){for(let le=0;le<Q.removed.length;le++){const Ne=Q.removed[le],Se=N.indexOf(Ne);Se>=0&&(N[Se]=null,x[Se].disconnect(Ne))}for(let le=0;le<Q.added.length;le++){const Ne=Q.added[le];let Se=N.indexOf(Ne);if(Se===-1){for(let $e=0;$e<x.length;$e++)if($e>=N.length){N.push(Ne),Se=$e;break}else if(N[$e]===null){N[$e]=Ne,Se=$e;break}if(Se===-1)break}const qe=x[Se];qe&&qe.connect(Ne)}}const j=new L,ne=new L;function K(Q,le,Ne){j.setFromMatrixPosition(le.matrixWorld),ne.setFromMatrixPosition(Ne.matrixWorld);const Se=j.distanceTo(ne),qe=le.projectionMatrix.elements,$e=Ne.projectionMatrix.elements,Ze=qe[14]/(qe[10]-1),xt=qe[14]/(qe[10]+1),R=(qe[9]+1)/qe[5],Nt=(qe[9]-1)/qe[5],it=(qe[8]-1)/qe[0],ot=($e[8]+1)/$e[0],Re=Ze*it,At=Ze*ot,Ge=Se/(-it+ot),Xe=Ge*-it;le.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Xe),Q.translateZ(Ge),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const w=Ze+Ge,y=xt+Ge,X=Re-Xe,re=At+(Se-Xe),ae=R*xt/y*w,ie=Nt*xt/y*w;Q.projectionMatrix.makePerspective(X,re,ae,ie,w,y),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ye(Q,le){le===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(le.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;_.texture!==null&&(Q.near=_.depthNear,Q.far=_.depthFar),M.near=P.near=A.near=Q.near,M.far=P.far=A.far=Q.far,(C!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,G=M.far,A.near=C,A.far=G,P.near=C,P.far=G,A.updateProjectionMatrix(),P.updateProjectionMatrix(),Q.updateProjectionMatrix());const le=Q.parent,Ne=M.cameras;ye(M,le);for(let Se=0;Se<Ne.length;Se++)ye(Ne[Se],le);Ne.length===2?K(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),Ee(Q,M,le)};function Ee(Q,le,Ne){Ne===null?Q.matrix.copy(le.matrixWorld):(Q.matrix.copy(Ne.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(le.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=or*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let we=null;function Je(Q,le){if(u=le.getViewerPose(l||o),g=le,u!==null){const Ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Se=!1;Ne.length!==M.cameras.length&&(M.cameras.length=0,Se=!0);for(let $e=0;$e<Ne.length;$e++){const Ze=Ne[$e];let xt=null;if(p!==null)xt=p.getViewport(Ze);else{const Nt=d.getViewSubImage(h,Ze);xt=Nt.viewport,$e===0&&(e.setRenderTargetTextures(E,Nt.colorTexture,h.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(E))}let R=T[$e];R===void 0&&(R=new gn,R.layers.enable($e),R.viewport=new nt,T[$e]=R),R.matrix.fromArray(Ze.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ze.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(xt.x,xt.y,xt.width,xt.height),$e===0&&(M.matrix.copy(R.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Se===!0&&M.cameras.push(R)}const qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")){const $e=d.getDepthInformation(Ne[0]);$e&&$e.isValid&&$e.texture&&_.init(e,$e,s.renderState)}}for(let Ne=0;Ne<x.length;Ne++){const Se=N[Ne],qe=x[Ne];Se!==null&&qe!==void 0&&qe.update(Se,le,l||o)}we&&we(Q,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const rt=new gf;rt.setAnimationLoop(Je),this.setAnimationLoop=function(Q){we=Q},this.dispose=function(){}}}const ss=new zn,_M=new vt;function vM(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ff(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,x,N){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,N)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,E,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),x=E.envMap,N=E.envMapRotation;x&&(m.envMap.value=x,ss.copy(N),ss.x*=-1,ss.y*=-1,ss.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(_M.makeRotationFromEuler(ss)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xM(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,x){const N=x.program;n.uniformBlockBinding(E,N)}function l(E,x){let N=s[E.id];N===void 0&&(g(E),N=u(E),s[E.id]=N,E.addEventListener("dispose",m));const D=x.program;n.updateUBOMapping(E,D);const b=e.render.frame;r[E.id]!==b&&(h(E),r[E.id]=b)}function u(E){const x=d();E.__bindingPointIndex=x;const N=i.createBuffer(),D=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,D,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,N),N}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const x=s[E.id],N=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,A=N.length;b<A;b++){const P=Array.isArray(N[b])?N[b]:[N[b]];for(let T=0,M=P.length;T<M;T++){const C=P[T];if(p(C,b,T,D)===!0){const G=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let J=0;for(let ee=0;ee<H.length;ee++){const j=H[ee],ne=_(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,G+J,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,J),J+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,x,N,D){const b=E.value,A=x+"_"+N;if(D[A]===void 0)return typeof b=="number"||typeof b=="boolean"?D[A]=b:D[A]=b.clone(),!0;{const P=D[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return D[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(E){const x=E.uniforms;let N=0;const D=16;for(let A=0,P=x.length;A<P;A++){const T=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,C=T.length;M<C;M++){const G=T[M],H=Array.isArray(G.value)?G.value:[G.value];for(let J=0,ee=H.length;J<ee;J++){const j=H[J],ne=_(j),K=N%D;K!==0&&D-K<ne.boundary&&(N+=D-K),G.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=N,N+=ne.storage}}}const b=N%D;return b>0&&(N+=D-b),E.__size=N,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const N=o.indexOf(x.__bindingPointIndex);o.splice(N,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class yM{constructor(e={}){const{canvas:t=d_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=Ln,this.toneMappingExposure=1;const x=this;let N=!1,D=0,b=0,A=null,P=-1,T=null;const M=new nt,C=new nt;let G=null;const H=new Ue(0);let J=0,ee=t.width,j=t.height,ne=1,K=null,ye=null;const Ee=new nt(0,0,ee,j),we=new nt(0,0,ee,j);let Je=!1;const rt=new iu;let Q=!1,le=!1;const Ne=new vt,Se=new L,qe=new nt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function xt(){return A===null?ne:1}let R=n;function Nt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xl}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",oe,!1),R===null){const U="webgl2";if(R=Nt(U,S),R===null)throw Nt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let it,ot,Re,At,Ge,Xe,w,y,X,re,ae,ie,Pe,me,_e,Ye,ue,ve,Qe,Oe,Te,Be,We,St;function v(){it=new wx(R),it.init(),Be=new uM(R,it),ot=new Mx(R,it,e,Be),Re=new aM(R),At=new Cx(R),Ge=new Yy,Xe=new lM(R,it,Re,Ge,ot,Be,At),w=new Tx(x),y=new Ax(x),X=new F_(R),We=new xx(R,X),re=new bx(R,X,At,We),ae=new Px(R,re,X,At),Qe=new Lx(R,ot,Xe),Ye=new Sx(Ge),ie=new qy(x,w,y,it,ot,We,Ye),Pe=new vM(x,Ge),me=new jy,_e=new tM(it),ve=new vx(x,w,y,Re,ae,h,c),ue=new oM(x,ae,ot),St=new xM(R,At,ot,Re),Oe=new yx(R,it,At),Te=new Rx(R,it,At),At.programs=ie.programs,x.capabilities=ot,x.extensions=it,x.properties=Ge,x.renderLists=me,x.shadowMap=ue,x.state=Re,x.info=At}v();const z=new gM(x,R);this.xr=z,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=it.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=it.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(ee,j,!1))},this.getSize=function(S){return S.set(ee,j)},this.setSize=function(S,U,k=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=S,j=U,t.width=Math.floor(S*ne),t.height=Math.floor(U*ne),k===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(ee*ne,j*ne).floor()},this.setDrawingBufferSize=function(S,U,k){ee=S,j=U,ne=k,t.width=Math.floor(S*k),t.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(Ee)},this.setViewport=function(S,U,k,W){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,U,k,W),Re.viewport(M.copy(Ee).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(we)},this.setScissor=function(S,U,k,W){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,U,k,W),Re.scissor(C.copy(we).multiplyScalar(ne).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(S){Re.setScissorTest(Je=S)},this.setOpaqueSort=function(S){K=S},this.setTransparentSort=function(S){ye=S},this.getClearColor=function(S){return S.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(S=!0,U=!0,k=!0){let W=0;if(S){let F=!1;if(A!==null){const fe=A.texture.format;F=fe===Kl||fe===jl||fe===$l}if(F){const fe=A.texture.type,ge=fe===wi||fe===$i||fe===Fr||fe===ir||fe===ql||fe===Yl,Ae=ve.getClearColor(),be=ve.getClearAlpha(),Fe=Ae.r,He=Ae.g,De=Ae.b;ge?(p[0]=Fe,p[1]=He,p[2]=De,p[3]=be,R.clearBufferuiv(R.COLOR,0,p)):(g[0]=Fe,g[1]=He,g[2]=De,g[3]=be,R.clearBufferiv(R.COLOR,0,g))}else W|=R.COLOR_BUFFER_BIT}U&&(W|=R.DEPTH_BUFFER_BIT),k&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),me.dispose(),_e.dispose(),Ge.dispose(),w.dispose(),y.dispose(),ae.dispose(),We.dispose(),St.dispose(),ie.dispose(),z.dispose(),z.removeEventListener("sessionstart",It),z.removeEventListener("sessionend",Di),Yt.stop()};function V(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const S=At.autoReset,U=ue.enabled,k=ue.autoUpdate,W=ue.needsUpdate,F=ue.type;v(),At.autoReset=S,ue.enabled=U,ue.autoUpdate=k,ue.needsUpdate=W,ue.type=F}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ce(S){const U=S.target;U.removeEventListener("dispose",Ce),Ve(U)}function Ve(S){Ct(S),Ge.remove(S)}function Ct(S){const U=Ge.get(S).programs;U!==void 0&&(U.forEach(function(k){ie.releaseProgram(k)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,W,F,fe){U===null&&(U=$e);const ge=F.isMesh&&F.matrixWorld.determinant()<0,Ae=Xm(S,U,k,W,F);Re.setMaterial(W,ge);let be=k.index,Fe=1;if(W.wireframe===!0){if(be=re.getWireframeAttribute(k),be===void 0)return;Fe=2}const He=k.drawRange,De=k.attributes.position;let ut=He.start*Fe,wt=(He.start+He.count)*Fe;fe!==null&&(ut=Math.max(ut,fe.start*Fe),wt=Math.min(wt,(fe.start+fe.count)*Fe)),be!==null?(ut=Math.max(ut,0),wt=Math.min(wt,be.count)):De!=null&&(ut=Math.max(ut,0),wt=Math.min(wt,De.count));const bt=wt-ut;if(bt<0||bt===1/0)return;We.setup(F,W,Ae,k,be);let En,ht=Oe;if(be!==null&&(En=X.get(be),ht=Te,ht.setIndex(En)),F.isMesh)W.wireframe===!0?(Re.setLineWidth(W.wireframeLinewidth*xt()),ht.setMode(R.LINES)):ht.setMode(R.TRIANGLES);else if(F.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),Re.setLineWidth(Le*xt()),F.isLineSegments?ht.setMode(R.LINES):F.isLineLoop?ht.setMode(R.LINE_LOOP):ht.setMode(R.LINE_STRIP)}else F.isPoints?ht.setMode(R.POINTS):F.isSprite&&ht.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ht.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Le=F._multiDrawStarts,$t=F._multiDrawCounts,dt=F._multiDrawCount,Vn=be?X.get(be).bytesPerElement:1,Ss=Ge.get(W).currentProgram.getUniforms();for(let Nn=0;Nn<dt;Nn++)Ss.setValue(R,"_gl_DrawID",Nn),ht.render(Le[Nn]/Vn,$t[Nn])}else if(F.isInstancedMesh)ht.renderInstances(ut,bt,F.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,$t=Math.min(k.instanceCount,Le);ht.renderInstances(ut,bt,$t)}else ht.render(ut,bt)};function zt(S,U,k){S.transparent===!0&&S.side===Mi&&S.forceSinglePass===!1?(S.side=pn,S.needsUpdate=!0,to(S,U,k),S.side=Yi,S.needsUpdate=!0,to(S,U,k),S.side=Mi):to(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),m=_e.get(k),m.init(U),E.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const W=new Set;return S.traverse(function(F){const fe=F.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const Ae=fe[ge];zt(Ae,k,F),W.add(Ae)}else zt(fe,k,F),W.add(fe)}),E.pop(),m=null,W},this.compileAsync=function(S,U,k=null){const W=this.compile(S,U,k);return new Promise(F=>{function fe(){if(W.forEach(function(ge){Ge.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){F(S);return}setTimeout(fe,10)}it.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let tt=null;function Bt(S){tt&&tt(S)}function It(){Yt.stop()}function Di(){Yt.start()}const Yt=new gf;Yt.setAnimationLoop(Bt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(S){tt=S,z.setAnimationLoop(S),S===null?Yt.stop():Yt.start()},z.addEventListener("sessionstart",It),z.addEventListener("sessionend",Di),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(U),U=z.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,A),m=_e.get(S,E.length),m.init(U),E.push(m),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),rt.setFromProjectionMatrix(Ne),le=this.localClippingEnabled,Q=Ye.init(this.clippingPlanes,le),_=me.get(S,f.length),_.init(),f.push(_),z.enabled===!0&&z.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&di(fe,U,-1/0,x.sortObjects)}di(S,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,ye),Ze=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ze&&ve.addToRenderList(_,S),this.info.render.frame++,Q===!0&&Ye.beginShadows();const k=m.state.shadowsArray;ue.render(k,S,U),Q===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,F=_.transmissive;if(m.setupLights(),U.isArrayCamera){const fe=U.cameras;if(F.length>0)for(let ge=0,Ae=fe.length;ge<Ae;ge++){const be=fe[ge];xr(W,F,S,be)}Ze&&ve.render(S);for(let ge=0,Ae=fe.length;ge<Ae;ge++){const be=fe[ge];Ji(_,S,be,be.viewport)}}else F.length>0&&xr(W,F,S,U),Ze&&ve.render(S),Ji(_,S,U);A!==null&&(Xe.updateMultisampleRenderTarget(A),Xe.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(x,S,U),We.resetDefaultState(),P=-1,T=null,E.pop(),E.length>0?(m=E[E.length-1],Q===!0&&Ye.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function di(S,U,k,W){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||rt.intersectsSprite(S)){W&&qe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const ge=ae.update(S),Ae=S.material;Ae.visible&&_.push(S,ge,Ae,k,qe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||rt.intersectsObject(S))){const ge=ae.update(S),Ae=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),qe.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),qe.copy(ge.boundingSphere.center)),qe.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ae)){const be=ge.groups;for(let Fe=0,He=be.length;Fe<He;Fe++){const De=be[Fe],ut=Ae[De.materialIndex];ut&&ut.visible&&_.push(S,ge,ut,k,qe.z,De)}}else Ae.visible&&_.push(S,ge,Ae,k,qe.z,null)}}const fe=S.children;for(let ge=0,Ae=fe.length;ge<Ae;ge++)di(fe[ge],U,k,W)}function Ji(S,U,k,W){const F=S.opaque,fe=S.transmissive,ge=S.transparent;m.setupLightsView(k),Q===!0&&Ye.setGlobalState(x.clippingPlanes,k),W&&Re.viewport(M.copy(W)),F.length>0&&eo(F,U,k),fe.length>0&&eo(fe,U,k),ge.length>0&&eo(ge,U,k),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function xr(S,U,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new fs(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?dr:wi,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const fe=m.state.transmissionRenderTarget[W.id],ge=W.viewport||M;fe.setSize(ge.z,ge.w);const Ae=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(H),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),Ze?ve.render(k):x.clear();const be=x.toneMapping;x.toneMapping=Ln;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Q===!0&&Ye.setGlobalState(x.clippingPlanes,W),eo(S,k,W),Xe.updateMultisampleRenderTarget(fe),Xe.updateRenderTargetMipmap(fe),it.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let De=0,ut=U.length;De<ut;De++){const wt=U[De],bt=wt.object,En=wt.geometry,ht=wt.material,Le=wt.group;if(ht.side===Mi&&bt.layers.test(W.layers)){const $t=ht.side;ht.side=pn,ht.needsUpdate=!0,Iu(bt,k,W,En,ht,Le),ht.side=$t,ht.needsUpdate=!0,He=!0}}He===!0&&(Xe.updateMultisampleRenderTarget(fe),Xe.updateRenderTargetMipmap(fe))}x.setRenderTarget(Ae),x.setClearColor(H,J),Fe!==void 0&&(W.viewport=Fe),x.toneMapping=be}function eo(S,U,k){const W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,fe=S.length;F<fe;F++){const ge=S[F],Ae=ge.object,be=ge.geometry,Fe=W===null?ge.material:W,He=ge.group;Ae.layers.test(k.layers)&&Iu(Ae,U,k,be,Fe,He)}}function Iu(S,U,k,W,F,fe){S.onBeforeRender(x,U,k,W,F,fe),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.transparent===!0&&F.side===Mi&&F.forceSinglePass===!1?(F.side=pn,F.needsUpdate=!0,x.renderBufferDirect(k,U,W,F,S,fe),F.side=Yi,F.needsUpdate=!0,x.renderBufferDirect(k,U,W,F,S,fe),F.side=Mi):x.renderBufferDirect(k,U,W,F,S,fe),S.onAfterRender(x,U,k,W,F,fe)}function to(S,U,k){U.isScene!==!0&&(U=$e);const W=Ge.get(S),F=m.state.lights,fe=m.state.shadowsArray,ge=F.state.version,Ae=ie.getParameters(S,F.state,fe,U,k),be=ie.getProgramCacheKey(Ae);let Fe=W.programs;W.environment=S.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(S.isMeshStandardMaterial?y:w).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",Ce),Fe=new Map,W.programs=Fe);let He=Fe.get(be);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===ge)return Uu(S,Ae),He}else Ae.uniforms=ie.getUniforms(S),S.onBeforeCompile(Ae,x),He=ie.acquireProgram(Ae,be),Fe.set(be,He),W.uniforms=Ae.uniforms;const De=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=Ye.uniform),Uu(S,Ae),W.needsLights=Ym(S),W.lightsStateVersion=ge,W.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function Du(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Wo.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Uu(S,U){const k=Ge.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Xm(S,U,k,W,F){U.isScene!==!0&&(U=$e),Xe.resetTextureUnits();const fe=U.fog,ge=W.isMeshStandardMaterial?U.environment:null,Ae=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qn,be=(W.isMeshStandardMaterial?y:w).get(W.envMap||ge),Fe=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!k.morphAttributes.position,ut=!!k.morphAttributes.normal,wt=!!k.morphAttributes.color;let bt=Ln;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(bt=x.toneMapping);const En=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ht=En!==void 0?En.length:0,Le=Ge.get(W),$t=m.state.lights;if(Q===!0&&(le===!0||S!==T)){const In=S===T&&W.id===P;Ye.setState(W,S,In)}let dt=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==$t.state.version||Le.outputColorSpace!==Ae||F.isBatchedMesh&&Le.batching===!1||!F.isBatchedMesh&&Le.batching===!0||F.isBatchedMesh&&Le.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Le.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Le.instancing===!1||!F.isInstancedMesh&&Le.instancing===!0||F.isSkinnedMesh&&Le.skinning===!1||!F.isSkinnedMesh&&Le.skinning===!0||F.isInstancedMesh&&Le.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Le.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Le.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Le.instancingMorph===!1&&F.morphTexture!==null||Le.envMap!==be||W.fog===!0&&Le.fog!==fe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ye.numPlanes||Le.numIntersection!==Ye.numIntersection)||Le.vertexAlphas!==Fe||Le.vertexTangents!==He||Le.morphTargets!==De||Le.morphNormals!==ut||Le.morphColors!==wt||Le.toneMapping!==bt||Le.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Le.__version=W.version);let Vn=Le.currentProgram;dt===!0&&(Vn=to(W,U,F));let Ss=!1,Nn=!1,Va=!1;const Dt=Vn.getUniforms(),Ui=Le.uniforms;if(Re.useProgram(Vn.program)&&(Ss=!0,Nn=!0,Va=!0),W.id!==P&&(P=W.id,Nn=!0),Ss||T!==S){Dt.setValue(R,"projectionMatrix",S.projectionMatrix),Dt.setValue(R,"viewMatrix",S.matrixWorldInverse);const In=Dt.map.cameraPosition;In!==void 0&&In.setValue(R,Se.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&Dt.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Dt.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,Nn=!0,Va=!0)}if(F.isSkinnedMesh){Dt.setOptional(R,F,"bindMatrix"),Dt.setOptional(R,F,"bindMatrixInverse");const In=F.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Dt.setValue(R,"boneTexture",In.boneTexture,Xe))}F.isBatchedMesh&&(Dt.setOptional(R,F,"batchingTexture"),Dt.setValue(R,"batchingTexture",F._matricesTexture,Xe),Dt.setOptional(R,F,"batchingIdTexture"),Dt.setValue(R,"batchingIdTexture",F._indirectTexture,Xe),Dt.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&Dt.setValue(R,"batchingColorTexture",F._colorsTexture,Xe));const Ha=k.morphAttributes;if((Ha.position!==void 0||Ha.normal!==void 0||Ha.color!==void 0)&&Qe.update(F,k,Vn),(Nn||Le.receiveShadow!==F.receiveShadow)&&(Le.receiveShadow=F.receiveShadow,Dt.setValue(R,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ui.envMap.value=be,Ui.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Ui.envMapIntensity.value=U.environmentIntensity),Nn&&(Dt.setValue(R,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&qm(Ui,Va),fe&&W.fog===!0&&Pe.refreshFogUniforms(Ui,fe),Pe.refreshMaterialUniforms(Ui,W,ne,j,m.state.transmissionRenderTarget[S.id]),Wo.upload(R,Du(Le),Ui,Xe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Wo.upload(R,Du(Le),Ui,Xe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Dt.setValue(R,"center",F.center),Dt.setValue(R,"modelViewMatrix",F.modelViewMatrix),Dt.setValue(R,"normalMatrix",F.normalMatrix),Dt.setValue(R,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const In=W.uniformsGroups;for(let ka=0,$m=In.length;ka<$m;ka++){const Ou=In[ka];St.update(Ou,Vn),St.bind(Ou,Vn)}}return Vn}function qm(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Ym(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,U,k){Ge.get(S.texture).__webglTexture=U,Ge.get(S.depthTexture).__webglTexture=k;const W=Ge.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const k=Ge.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){A=S,D=U,b=k;let W=!0,F=null,fe=!1,ge=!1;if(S){const be=Ge.get(S);be.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(R.FRAMEBUFFER,null),W=!1):be.__webglFramebuffer===void 0?Xe.setupRenderTarget(S):be.__hasExternalTextures&&Xe.rebindTextures(S,Ge.get(S.texture).__webglTexture,Ge.get(S.depthTexture).__webglTexture);const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const He=Ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[U])?F=He[U][k]:F=He[U],fe=!0):S.samples>0&&Xe.useMultisampledRTT(S)===!1?F=Ge.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?F=He[k]:F=He,M.copy(S.viewport),C.copy(S.scissor),G=S.scissorTest}else M.copy(Ee).multiplyScalar(ne).floor(),C.copy(we).multiplyScalar(ne).floor(),G=Je;if(Re.bindFramebuffer(R.FRAMEBUFFER,F)&&W&&Re.drawBuffers(S,F),Re.viewport(M),Re.scissor(C),Re.setScissorTest(G),fe){const be=Ge.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,k)}else if(ge){const be=Ge.get(S.texture),Fe=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.__webglTexture,k||0,Fe)}P=-1},this.readRenderTargetPixels=function(S,U,k,W,F,fe,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){Re.bindFramebuffer(R.FRAMEBUFFER,Ae);try{const be=S.texture,Fe=be.format,He=be.type;if(!ot.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-W&&k>=0&&k<=S.height-F&&R.readPixels(U,k,W,F,Be.convert(Fe),Be.convert(He),fe)}finally{const be=A!==null?Ge.get(A).__webglFramebuffer:null;Re.bindFramebuffer(R.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,W,F,fe,ge){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){Re.bindFramebuffer(R.FRAMEBUFFER,Ae);try{const be=S.texture,Fe=be.format,He=be.type;if(!ot.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-W&&k>=0&&k<=S.height-F){const De=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,De),R.bufferData(R.PIXEL_PACK_BUFFER,fe.byteLength,R.STREAM_READ),R.readPixels(U,k,W,F,Be.convert(Fe),Be.convert(He),0),R.flush();const ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await f_(R,ut,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,De),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,fe)}finally{R.deleteBuffer(De),R.deleteSync(ut)}return fe}}finally{const be=A!==null?Ge.get(A).__webglFramebuffer:null;Re.bindFramebuffer(R.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-k),F=Math.floor(S.image.width*W),fe=Math.floor(S.image.height*W),ge=U!==null?U.x:0,Ae=U!==null?U.y:0;Xe.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,ge,Ae,F,fe),Re.unbindTexture()},this.copyTextureToTexture=function(S,U,k=null,W=null,F=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],U=arguments[2],F=arguments[3]||0,k=null);let fe,ge,Ae,be,Fe,He;k!==null?(fe=k.max.x-k.min.x,ge=k.max.y-k.min.y,Ae=k.min.x,be=k.min.y):(fe=S.image.width,ge=S.image.height,Ae=0,be=0),W!==null?(Fe=W.x,He=W.y):(Fe=0,He=0);const De=Be.convert(U.format),ut=Be.convert(U.type);Xe.setTexture2D(U,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const wt=R.getParameter(R.UNPACK_ROW_LENGTH),bt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),En=R.getParameter(R.UNPACK_SKIP_PIXELS),ht=R.getParameter(R.UNPACK_SKIP_ROWS),Le=R.getParameter(R.UNPACK_SKIP_IMAGES),$t=S.isCompressedTexture?S.mipmaps[F]:S.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,$t.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,$t.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,be),S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,F,Fe,He,fe,ge,De,ut,$t.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,F,Fe,He,$t.width,$t.height,De,$t.data):R.texSubImage2D(R.TEXTURE_2D,F,Fe,He,fe,ge,De,ut,$t),R.pixelStorei(R.UNPACK_ROW_LENGTH,wt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,bt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,En),R.pixelStorei(R.UNPACK_SKIP_ROWS,ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Le),F===0&&U.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,W=null,F=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,W=arguments[1]||null,S=arguments[2],U=arguments[3],F=arguments[4]||0);let fe,ge,Ae,be,Fe,He,De,ut,wt;const bt=S.isCompressedTexture?S.mipmaps[F]:S.image;k!==null?(fe=k.max.x-k.min.x,ge=k.max.y-k.min.y,Ae=k.max.z-k.min.z,be=k.min.x,Fe=k.min.y,He=k.min.z):(fe=bt.width,ge=bt.height,Ae=bt.depth,be=0,Fe=0,He=0),W!==null?(De=W.x,ut=W.y,wt=W.z):(De=0,ut=0,wt=0);const En=Be.convert(U.format),ht=Be.convert(U.type);let Le;if(U.isData3DTexture)Xe.setTexture3D(U,0),Le=R.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Xe.setTexture2DArray(U,0),Le=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const $t=R.getParameter(R.UNPACK_ROW_LENGTH),dt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Vn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ss=R.getParameter(R.UNPACK_SKIP_ROWS),Nn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,bt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,bt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,be),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,He),S.isDataTexture||S.isData3DTexture?R.texSubImage3D(Le,F,De,ut,wt,fe,ge,Ae,En,ht,bt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Le,F,De,ut,wt,fe,ge,Ae,En,bt.data):R.texSubImage3D(Le,F,De,ut,wt,fe,ge,Ae,En,ht,bt),R.pixelStorei(R.UNPACK_ROW_LENGTH,$t),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Vn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ss),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Nn),F===0&&U.generateMipmaps&&R.generateMipmap(Le),Re.unbindTexture()},this.initRenderTarget=function(S){Ge.get(S).__webglFramebuffer===void 0&&Xe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Xe.setTextureCube(S,0):S.isData3DTexture?Xe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Xe.setTexture2DArray(S,0):Xe.setTexture2D(S,0),Re.unbindTexture()},this.resetState=function(){D=0,b=0,A=null,Re.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zl?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===va?"display-p3":"srgb"}}class MM extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ea,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return eu("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new L;class ou{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ou(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class SM extends an{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Sf extends On{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ta extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ta=new L,na=new L,Uh=new vt,Er=new nu,wo=new xa,gc=new L,Oh=new L;class TM extends Pt{constructor(e=new Bn,t=new Ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ta.fromBufferAttribute(t,s-1),na.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ta.distanceTo(na);e.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;Uh.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=u.getX(_),E=u.getX(_+1),x=bo(this,e,Er,c,f,E);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=bo(this,e,Er,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=bo(this,e,Er,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=bo(this,e,Er,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bo(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(ta.fromBufferAttribute(o,s),na.fromBufferAttribute(o,r),t.distanceSqToSegment(ta,na,gc,Oh)>n)return;gc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(gc);if(!(c<e.near||c>e.far))return{distance:c,point:Oh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}class Tf extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Ef extends on{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=sn,this.minFilter=sn,this.generateMipmaps=!1,this.needsUpdate=!0}}class au extends Bn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(p,2));function E(){const N=new L,D=new L;let b=0;const A=(t-e)/n;for(let P=0;P<=r;P++){const T=[],M=P/r,C=M*(t-e)+e;for(let G=0;G<=s;G++){const H=G/s,J=H*c+a,ee=Math.sin(J),j=Math.cos(J);D.x=C*ee,D.y=-M*n+m,D.z=C*j,d.push(D.x,D.y,D.z),N.set(ee,A,j).normalize(),h.push(N.x,N.y,N.z),p.push(H,1-M),T.push(g++)}_.push(T)}for(let P=0;P<s;P++)for(let T=0;T<r;T++){const M=_[T][P],C=_[T+1][P],G=_[T+1][P+1],H=_[T][P+1];u.push(M,C,H),u.push(C,G,H),b+=6}l.addGroup(f,b,0),f+=b}function x(N){const D=g,b=new xe,A=new L;let P=0;const T=N===!0?e:t,M=N===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),g++;const C=g;for(let G=0;G<=s;G++){const J=G/s*c+a,ee=Math.cos(J),j=Math.sin(J);A.x=T*j,A.y=m*M,A.z=T*ee,d.push(A.x,A.y,A.z),h.push(0,M,0),b.x=ee*.5+.5,b.y=j*.5*M+.5,p.push(b.x,b.y),g++}for(let G=0;G<s;G++){const H=D+G,J=C+G;N===!0?u.push(J,J+1,H):u.push(J+1,J,H),P+=3}l.addGroup(f,P,N===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $r extends Bn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new L,h=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],x=f/n;let N=0;f===0&&o===0?N=.5/t:f===n&&c===Math.PI&&(N=-.5/t);for(let D=0;D<=t;D++){const b=D/t;d.x=-e*Math.cos(s+b*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(s+b*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(b+N,1-x),E.push(l++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const x=u[f][E+1],N=u[f][E],D=u[f+1][E],b=u[f+1][E+1];(f!==0||o>0)&&p.push(x,N,b),(f!==n-1||c<Math.PI)&&p.push(N,D,b)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class EM extends an{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ue(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class cu extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class NM extends cu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nf extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class AM extends an{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class wM extends an{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class bM extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class RM extends an{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Af extends Ta{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Fh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class CM{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const LM=new CM;class lu{constructor(e){this.manager=e!==void 0?e:LM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lu.DEFAULT_MATERIAL_NAME="__DEFAULT";class PM extends lu{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Fh.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=zr("img");function c(){u(),Fh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class jr extends lu{constructor(e){super(e)}load(e,t,n,s){const r=new on,o=new PM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class pr extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class IM extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _c=new vt,zh=new L,Bh=new L;class uu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iu,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DM extends uu{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wf extends pr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new DM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vh=new vt,Nr=new L,vc=new L;class UM extends uu{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nr),vc.copy(n.position),vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vc),n.updateMatrixWorld(),s.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh)}}class OM extends pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new UM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class FM extends uu{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bf extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new FM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rf extends pr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zM extends pr{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class BM extends Mf{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Hh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const kh=new L;let Ro,xc;class VM extends Pt{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Ro===void 0&&(Ro=new Bn,Ro.setAttribute("position",new Zt([0,0,0,0,1,0],3)),xc=new au(0,.5,1,5,1),xc.translate(0,-.5,0)),this.position.copy(t),this.line=new TM(Ro,new Ta({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new _n(xc,new ya({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{kh.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(kh,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);const Gh={type:"change"},yc={type:"start"},Wh={type:"end"},Co=new nu,Xh=new yi,HM=Math.cos(70*Ql.DEG2RAD);class kM extends Pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",_e),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gh),n.update(),r=s.NONE},this.update=function(){const v=new L,z=new ps().setFromUnitVectors(e.up,new L(0,1,0)),V=z.clone().invert(),Y=new L,oe=new ps,Ce=new L,Ve=2*Math.PI;return function(zt=null){const tt=n.object.position;v.copy(tt).sub(n.target),v.applyQuaternion(z),a.setFromVector3(v),n.autoRotate&&r===s.NONE&&G(M(zt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Bt=n.minAzimuthAngle,It=n.maxAzimuthAngle;isFinite(Bt)&&isFinite(It)&&(Bt<-Math.PI?Bt+=Ve:Bt>Math.PI&&(Bt-=Ve),It<-Math.PI?It+=Ve:It>Math.PI&&(It-=Ve),Bt<=It?a.theta=Math.max(Bt,Math.min(It,a.theta)):a.theta=a.theta>(Bt+It)/2?Math.max(Bt,a.theta):Math.min(It,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Di=!1;if(n.zoomToCursor&&b||n.object.isOrthographicCamera)a.radius=Ee(a.radius);else{const Yt=a.radius;a.radius=Ee(a.radius*l),Di=Yt!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(V),tt.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&b){let Yt=null;if(n.object.isPerspectiveCamera){const di=v.length();Yt=Ee(di*l);const Ji=di-Yt;n.object.position.addScaledVector(N,Ji),n.object.updateMatrixWorld(),Di=!!Ji}else if(n.object.isOrthographicCamera){const di=new L(D.x,D.y,0);di.unproject(n.object);const Ji=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Di=Ji!==n.object.zoom;const xr=new L(D.x,D.y,0);xr.unproject(n.object),n.object.position.sub(xr).add(di),n.object.updateMatrixWorld(),Yt=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Yt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Yt).add(n.object.position):(Co.origin.copy(n.object.position),Co.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Co.direction))<HM?e.lookAt(n.target):(Xh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Co.intersectPlane(Xh,n.target))))}else if(n.object.isOrthographicCamera){const Yt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Yt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Di=!0)}return l=1,b=!1,Di||Y.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o||Ce.distanceToSquared(n.target)>o?(n.dispatchEvent(Gh),Y.copy(n.object.position),oe.copy(n.object.quaternion),Ce.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",Xe),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",y),n.domElement.getRootNode().removeEventListener("keydown",Pe,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Hh,c=new Hh;let l=1;const u=new L,d=new xe,h=new xe,p=new xe,g=new xe,_=new xe,m=new xe,f=new xe,E=new xe,x=new xe,N=new L,D=new xe;let b=!1;const A=[],P={};let T=!1;function M(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function C(v){const z=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*z)}function G(v){c.theta-=v}function H(v){c.phi-=v}const J=function(){const v=new L;return function(V,Y){v.setFromMatrixColumn(Y,0),v.multiplyScalar(-V),u.add(v)}}(),ee=function(){const v=new L;return function(V,Y){n.screenSpacePanning===!0?v.setFromMatrixColumn(Y,1):(v.setFromMatrixColumn(Y,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(V),u.add(v)}}(),j=function(){const v=new L;return function(V,Y){const oe=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;v.copy(Ce).sub(n.target);let Ve=v.length();Ve*=Math.tan(n.object.fov/2*Math.PI/180),J(2*V*Ve/oe.clientHeight,n.object.matrix),ee(2*Y*Ve/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(J(V*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),ee(Y*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ne(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ye(v,z){if(!n.zoomToCursor)return;b=!0;const V=n.domElement.getBoundingClientRect(),Y=v-V.left,oe=z-V.top,Ce=V.width,Ve=V.height;D.x=Y/Ce*2-1,D.y=-(oe/Ve)*2+1,N.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ee(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function we(v){d.set(v.clientX,v.clientY)}function Je(v){ye(v.clientX,v.clientX),f.set(v.clientX,v.clientY)}function rt(v){g.set(v.clientX,v.clientY)}function Q(v){h.set(v.clientX,v.clientY),p.subVectors(h,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;G(2*Math.PI*p.x/z.clientHeight),H(2*Math.PI*p.y/z.clientHeight),d.copy(h),n.update()}function le(v){E.set(v.clientX,v.clientY),x.subVectors(E,f),x.y>0?ne(C(x.y)):x.y<0&&K(C(x.y)),f.copy(E),n.update()}function Ne(v){_.set(v.clientX,v.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),j(m.x,m.y),g.copy(_),n.update()}function Se(v){ye(v.clientX,v.clientY),v.deltaY<0?K(C(v.deltaY)):v.deltaY>0&&ne(C(v.deltaY)),n.update()}function qe(v){let z=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):j(-n.keyPanSpeed,0),z=!0;break}z&&(v.preventDefault(),n.update())}function $e(v){if(A.length===1)d.set(v.pageX,v.pageY);else{const z=We(v),V=.5*(v.pageX+z.x),Y=.5*(v.pageY+z.y);d.set(V,Y)}}function Ze(v){if(A.length===1)g.set(v.pageX,v.pageY);else{const z=We(v),V=.5*(v.pageX+z.x),Y=.5*(v.pageY+z.y);g.set(V,Y)}}function xt(v){const z=We(v),V=v.pageX-z.x,Y=v.pageY-z.y,oe=Math.sqrt(V*V+Y*Y);f.set(0,oe)}function R(v){n.enableZoom&&xt(v),n.enablePan&&Ze(v)}function Nt(v){n.enableZoom&&xt(v),n.enableRotate&&$e(v)}function it(v){if(A.length==1)h.set(v.pageX,v.pageY);else{const V=We(v),Y=.5*(v.pageX+V.x),oe=.5*(v.pageY+V.y);h.set(Y,oe)}p.subVectors(h,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;G(2*Math.PI*p.x/z.clientHeight),H(2*Math.PI*p.y/z.clientHeight),d.copy(h)}function ot(v){if(A.length===1)_.set(v.pageX,v.pageY);else{const z=We(v),V=.5*(v.pageX+z.x),Y=.5*(v.pageY+z.y);_.set(V,Y)}m.subVectors(_,g).multiplyScalar(n.panSpeed),j(m.x,m.y),g.copy(_)}function Re(v){const z=We(v),V=v.pageX-z.x,Y=v.pageY-z.y,oe=Math.sqrt(V*V+Y*Y);E.set(0,oe),x.set(0,Math.pow(E.y/f.y,n.zoomSpeed)),ne(x.y),f.copy(E);const Ce=(v.pageX+z.x)*.5,Ve=(v.pageY+z.y)*.5;ye(Ce,Ve)}function At(v){n.enableZoom&&Re(v),n.enablePan&&ot(v)}function Ge(v){n.enableZoom&&Re(v),n.enableRotate&&it(v)}function Xe(v){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",y)),!Te(v)&&(Qe(v),v.pointerType==="touch"?Ye(v):X(v)))}function w(v){n.enabled!==!1&&(v.pointerType==="touch"?ue(v):re(v))}function y(v){switch(Oe(v),A.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",y),n.dispatchEvent(Wh),r=s.NONE;break;case 1:const z=A[0],V=P[z];Ye({pointerId:z,pageX:V.x,pageY:V.y});break}}function X(v){let z;switch(v.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case Ts.DOLLY:if(n.enableZoom===!1)return;Je(v),r=s.DOLLY;break;case Ts.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;rt(v),r=s.PAN}else{if(n.enableRotate===!1)return;we(v),r=s.ROTATE}break;case Ts.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;we(v),r=s.ROTATE}else{if(n.enablePan===!1)return;rt(v),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(yc)}function re(v){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Q(v);break;case s.DOLLY:if(n.enableZoom===!1)return;le(v);break;case s.PAN:if(n.enablePan===!1)return;Ne(v);break}}function ae(v){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(v.preventDefault(),n.dispatchEvent(yc),Se(ie(v)),n.dispatchEvent(Wh))}function ie(v){const z=v.deltaMode,V={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(z){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return v.ctrlKey&&!T&&(V.deltaY*=10),V}function Pe(v){v.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",me,{passive:!0,capture:!0}))}function me(v){v.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",me,{passive:!0,capture:!0}))}function _e(v){n.enabled===!1||n.enablePan===!1||qe(v)}function Ye(v){switch(Be(v),A.length){case 1:switch(n.touches.ONE){case Es.ROTATE:if(n.enableRotate===!1)return;$e(v),r=s.TOUCH_ROTATE;break;case Es.PAN:if(n.enablePan===!1)return;Ze(v),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Es.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;R(v),r=s.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Nt(v),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(yc)}function ue(v){switch(Be(v),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;it(v),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ot(v),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;At(v),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ge(v),n.update();break;default:r=s.NONE}}function ve(v){n.enabled!==!1&&v.preventDefault()}function Qe(v){A.push(v.pointerId)}function Oe(v){delete P[v.pointerId];for(let z=0;z<A.length;z++)if(A[z]==v.pointerId){A.splice(z,1);return}}function Te(v){for(let z=0;z<A.length;z++)if(A[z]==v.pointerId)return!0;return!1}function Be(v){let z=P[v.pointerId];z===void 0&&(z=new xe,P[v.pointerId]=z),z.set(v.pageX,v.pageY)}function We(v){const z=v.pointerId===A[0]?A[1]:A[0];return P[z]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",Xe),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Pe,{passive:!0,capture:!0}),this.update()}}class GM extends wf{constructor(e,t,n,s,r,o){super(e,t,n,s,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}const WM="/textures/earth%20albedo%20dec.png",XM="/textures/earth%20bump.jpg",qM="/textures/earth%20land%20ocean%20mask.png",YM="/textures/Galaxy.png",$M="varying vec2 vertexUv;varying vec3 vertexNormal;varying vec3 vertexPosition;void main(){vec3 viewDirection=normalize(cameraPosition-vertexPosition);float intensity=1.0-dot(vertexNormal,viewDirection);vec3 atmosphere=vec3(0.3,0.6,1.0);gl_FragColor=vec4(atmosphere,pow(intensity,5.5));}",jM="varying vec2 vertexUV;varying vec3 vertexNormal;varying vec3 vertexPosition;void main(){vertexPosition=position;vertexNormal=normal;vertexUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",KM="/textures/earth%20clouds.jpg",qh={VERTEX:"vertex",FRAGMENT:"fragment"},st={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},Ea=["x","y","z","w"];function Cf(i,e=!1){let t="{";i.isNode===!0&&(t+=i.id);for(const{property:n,childNode:s}of ia(i))t+=","+n.slice(0,-4)+":"+s.getCacheKey(e);return t+="}",t}function*ia(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}function Xi(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function Lf(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Ue(...e):t==="vec2"?new xe(...e):t==="vec3"?new L(...e):t==="vec4"?new nt(...e):t==="mat3"?new je(...e):t==="mat4"?new vt(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?If(e[0]):null}function Pf(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function If(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const Yh=new Map;let ZM=0;class Ie extends Pi{constructor(e=null){super(),this.nodeType=e,this.updateType=st.NONE,this.updateBeforeType=st.NONE,this.updateAfterType=st.NONE,this.uuid=Ql.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.global=!1,this.isNode=!0,Object.defineProperty(this,"id",{value:ZM++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,st.FRAME)}onRenderUpdate(e){return this.onUpdate(e,st.RENDER)}onObjectUpdate(e){return this.onUpdate(e,st.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return this.global}*getChildren(){for(const{childNode:e}of ia(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=Cf(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getUpdateAfterType(){return this.updateAfterType}getElementType(e){const t=this.getNodeType(e);return e.getElementType(t)}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);let n=0;for(const s of this.getChildren())t["node"+n++]=s;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}updateAfter(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0&&(s=this.generate(e)||"",c.snippet=s),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return ia(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:o}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=o.toJSON(e.meta).uuid):n[s]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];s[r]=t[o]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(s){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function te(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(Yh.has(i)){console.warn(`Redefinition of node class ${i}`);return}Yh.set(i,e),e.type=i}class ct extends Ie{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(s!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,s),a=e.getVarFromNode(this,null,s),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,e.format(r.propertyName,s,t)}}return super.build(e,t)}}te("TempNode",ct);class mr extends Ie{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}te("ArrayElementNode",mr);class hu extends Ie{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}te("ConvertNode",hu);class Df extends ct{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),o=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}te("JoinNode",Df);const JM=Ea.join("");class Ml extends Ie{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(Ea.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let o=null;this.getVectorLength()>=s&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,o);this.components.length===s&&this.components===JM.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}te("SplitNode",Ml);class Uf extends ct{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=s.build(e,o),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let d=0;d<l;d++){const h=Ea[d];h===n[0]?(u.push(a),d+=n.length-1):u.push(c+"."+h)}return`${e.getType(r)}( ${u.join(", ")} )`}}te("SetNode",Uf);class Na extends Ie{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?Xi(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=Xi(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=Pf(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Lf(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}te("InputNode",Na);class hi extends Na{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}te("ConstNode",hi);let cr=null;const Gs=new Map;function O(i,e){if(Gs.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);Gs.set(i,e)}const $h=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Of={setup(i,e){const t=e.shift();return i(ba(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(cr.assign(t,...n),t);if(Gs.has(e)){const n=Gs.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&Gs.has(e.slice(0,e.length-6))){const n=Gs.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=$h(e),ce(new Ml(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=$h(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>ce(new Uf(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),ce(new Ml(i,e));if(/^\d+$/.test(e)===!0)return ce(new mr(t,new hi(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},Mc=new WeakMap,jh=new WeakMap,QM=function(i,e=null){const t=Xi(i);if(t==="node"){let n=Mc.get(i);return n===void 0&&(n=new Proxy(i,Of),Mc.set(i,n),Mc.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return ce(Sl(i,e));if(t==="shader")return he(i)}return i},eS=function(i,e=null){for(const t in i)i[t]=ce(i[t],e);return i},tS=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=ce(i[n],e);return i},nS=function(i,e=null,t=null,n=null){const s=r=>ce(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...js(r))):t!==null?(t=ce(t),(...r)=>s(new i(e,...js(r),t))):(...r)=>s(new i(e,...js(r)))},iS=function(i,...e){return ce(new i(...js(e)))};class sS extends Ie{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode===null&&(t.outputNode=this.setupOutput(e)),t.outputNode.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=jh.get(e.constructor);o===void 0&&(o=new WeakMap,jh.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=ce(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),ce(a.call(n))}const s=t.jsFunc,r=n!==null?s(n,e.stack,e):s(e.stack,e);return ce(r)}setup(e){const{outputNode:t}=e.getNodeProperties(this);return t||this.setupOutput(e)}setupOutput(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class rS extends Ie{constructor(e){super(),this.jsFunc=e,this.layout=null,this.global=!0}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return ba(e),ce(new sS(this,e))}setup(){return this.call()}}const oS=[!1,!0],aS=[0,1,2,3],cS=[-1,-2],Ff=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],du=new Map;for(const i of oS)du.set(i,new hi(i));const fu=new Map;for(const i of aS)fu.set(i,new hi(i,"uint"));const pu=new Map([...fu].map(i=>new hi(i.value,"int")));for(const i of cS)pu.set(i,new hi(i,"int"));const Aa=new Map([...pu].map(i=>new hi(i.value)));for(const i of Ff)Aa.set(i,new hi(i));for(const i of Ff)Aa.set(-i,new hi(-i));const wa={bool:du,uint:fu,ints:pu,float:Aa},Kh=new Map([...du,...Aa]),Sl=(i,e)=>Kh.has(i)?Kh.get(i):i.isNode===!0?i:new hi(i,e),lS=i=>{try{return i.getNodeType()}catch{return}},gt=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[Lf(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return ce(e.get(t[0]));if(t.length===1){const s=Sl(t[0],i);return lS(s)===i?ce(s):ce(new hu(s,i))}const n=t.map(s=>Sl(s));return ce(new Df(n,i))}},Zh=i=>i&&i.value,uS=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function Ur(i){return new Proxy(new rS(i),Of)}const ce=(i,e=null)=>QM(i,e),ba=(i,e=null)=>new eS(i,e),js=(i,e=null)=>new tS(i,e),B=(...i)=>new nS(...i),de=(...i)=>new iS(...i),he=i=>{const e=new Ur(i),t=(...n)=>{let s;return ba(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};te("ShaderNode",Ur);O("toGlobal",i=>(i.global=!0,i));const Jh=i=>{cr=i},hS=()=>cr,Lt=(...i)=>cr.if(...i);function dS(i){return cr&&cr.add(i),i}O("append",dS);const fS=new gt("color"),Z=new gt("float",wa.float),Vt=new gt("int",wa.ints),pS=new gt("uint",wa.uint),mS=new gt("bool",wa.bool),se=new gt("vec2"),Gi=new gt("ivec2"),gS=new gt("uvec2"),_S=new gt("bvec2"),q=new gt("vec3"),vS=new gt("ivec3"),xS=new gt("uvec3"),yS=new gt("bvec3"),Me=new gt("vec4"),MS=new gt("ivec4"),SS=new gt("uvec4"),TS=new gt("bvec4"),mu=new gt("mat2"),ES=new gt("imat2"),NS=new gt("umat2"),AS=new gt("bmat2"),cn=new gt("mat3"),wS=new gt("imat3"),bS=new gt("umat3"),RS=new gt("bmat3"),Ks=new gt("mat4"),CS=new gt("imat4"),LS=new gt("umat4"),PS=new gt("bmat4");O("toColor",fS);O("toFloat",Z);O("toInt",Vt);O("toUint",pS);O("toBool",mS);O("toVec2",se);O("toIvec2",Gi);O("toUvec2",gS);O("toBvec2",_S);O("toVec3",q);O("toIvec3",vS);O("toUvec3",xS);O("toBvec3",yS);O("toVec4",Me);O("toIvec4",MS);O("toUvec4",SS);O("toBvec4",TS);O("toMat2",mu);O("toImat2",ES);O("toUmat2",NS);O("toBmat2",AS);O("toMat3",cn);O("toImat3",wS);O("toUmat3",bS);O("toBmat3",RS);O("toMat4",Ks);O("toImat4",CS);O("toUmat4",LS);O("toBmat4",PS);const IS=B(mr),DS=(i,e)=>ce(new hu(ce(i),e));O("element",IS);O("convert",DS);class zf extends ct{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return Ea.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=s.build(e,o),l=s.getNodeType(e),u=e.getDataFromNode(this);let d;if(u.initialized===!0)t!=="void"&&(d=a);else if(r){const h=e.getVarFromNode(this,null,o),p=e.getPropertyName(h);e.addLineFlowCode(`${p} = ${c}`);const g=n.node.context({assign:!0}).build(e);for(let _=0;_<n.components.length;_++){const m=n.components[_];e.addLineFlowCode(`${g}.${m} = ${p}[ ${_} ]`)}t!=="void"&&(d=a)}else d=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(d),t!=="void"&&(d=a));return u.initialized=!0,e.format(d,o,t)}}const US=B(zf);te("AssignNode",zf);O("assign",US);class Bf extends Ie{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}setupVarying(e){const t=e.getNodeProperties(this);let n=t.varying;if(n===void 0){const s=this.name,r=this.getNodeType(e);t.varying=n=e.getVaryingFromNode(this,s,r),t.node=this.node}return n.needsInterpolation||(n.needsInterpolation=e.shaderStage==="fragment"),n}setup(e){this.setupVarying(e)}analyze(e){return this.setupVarying(e),this.node.analyze(e)}generate(e){const t=e.getNodeProperties(this),n=this.setupVarying(e);if(t.propertyName===void 0){const s=this.getNodeType(e),r=e.getPropertyName(n,qh.VERTEX);e.flowNodeFromShaderStage(qh.VERTEX,this.node,s,r),t.propertyName=r}return e.getPropertyName(n)}}const Ot=B(Bf);O("varying",Ot);te("VaryingNode",Bf);class gu extends Ie{constructor(e,t=null,n=null){super(t),this.defaultNode=n,this.global=!0,this._attributeName=e}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):Ot(this).build(e,n)}else{console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`);const{defaultNode:r}=this;return r!==null?r.build(e,n):e.generateConst(n)}}}const nn=(i,e,t)=>ce(new gu(i,e,ce(t)));te("AttributeNode",gu);class Vf extends Ie{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const Hf=B(Vf);O("bypass",Hf);te("BypassNode",Vf);class kf extends Ie{constructor(e,t=!0){super(),this.node=e,this.parent=t,this.isCacheNode=!0}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=e.getCacheFromNode(this,parent);e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}}const Xo=(i,...e)=>ce(new kf(ce(i),...e));O("cache",Xo);te("CacheNode",kf);class _u extends Ie{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}analyze(e){this.node.build(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Or=B(_u),OS=(i,e)=>Or(i,{label:e});O("context",Or);O("label",OS);te("ContextNode",_u);class xn extends Ie{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===xn.VERTEX)s=e.getVertexIndex();else if(n===xn.INSTANCE)s=e.getInstanceIndex();else if(n===xn.DRAW)s=e.getDrawIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=Ot(this).build(e,t),r}}xn.VERTEX="vertex";xn.INSTANCE="instance";xn.DRAW="draw";const FS=de(xn,xn.VERTEX),vu=de(xn,xn.INSTANCE),zS=de(xn,xn.DRAW);te("IndexNode",xn);class Ra{start(){}finish(){}direct(){}directRectArea(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class Gf extends Ie{constructor(e,t=null){super(),this.node=e,this.name=t,this.global=!0,this.isVarNode=!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(s),o=t.build(e,s.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const sa=B(Gf);O("temp",sa);O("toVar",(...i)=>sa(...i).append());te("VarNode",Gf);class lt extends Ie{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const Et=(i,e)=>ce(new lt(i,e)),ei=(i,e)=>ce(new lt(i,e,!0)),_t=de(lt,"vec4","DiffuseColor"),Si=de(lt,"float","Roughness"),ra=de(lt,"float","Metalness"),Tl=de(lt,"float","Clearcoat"),oa=de(lt,"float","ClearcoatRoughness"),Ws=de(lt,"vec3","Sheen"),xu=de(lt,"float","SheenRoughness"),yu=de(lt,"float","Iridescence"),Wf=de(lt,"float","IridescenceIOR"),Xf=de(lt,"float","IridescenceThickness"),El=de(lt,"float","AlphaT"),cs=de(lt,"float","Anisotropy"),qo=de(lt,"vec3","AnisotropyT"),Zs=de(lt,"vec3","AnisotropyB"),Rn=de(lt,"color","SpecularColor"),aa=de(lt,"float","SpecularF90"),Nl=de(lt,"float","Shininess"),BS=de(lt,"vec4","Output"),Js=de(lt,"float","dashSize"),ca=de(lt,"float","gapSize");de(lt,"float","pointWidth");const Yo=de(lt,"float","IOR"),Al=de(lt,"float","Transmission"),qf=de(lt,"float","Thickness"),Yf=de(lt,"float","AttenuationDistance"),$f=de(lt,"color","AttenuationColor"),jf=de(lt,"float","Dispersion");te("PropertyNode",lt);class VS extends lt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}te("ParameterNode",VS);class Mu extends Ie{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}B(Mu);te("CodeNode",Mu);class HS extends Mu{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,r=n.type,o=e.getCodeFromNode(this,r);s!==""&&(o.name=s);const a=e.getPropertyName(o);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const d of u){const h=new RegExp(`\\b${d}\\b`,"g"),p=l[d].build(e,"property");c=c.replace(h,p)}return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}te("FunctionNode",HS);class Su extends Ie{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const kS=i=>new Su(i),Tu=i=>new Su(i,!0);Tu("frame");Tu("render");const GS=kS("object");te("UniformGroupNode",Su);class vs extends Na{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.name="",this.groupNode=GS}label(e){return this.name=e,this}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const r=e(s,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,this.name||e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const ze=(i,e)=>{const t=uS(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return ce(new vs(n,t))};te("UniformNode",vs);const Tn=i=>nn("uv"+(i>0?i:""),"vec2");class Kf extends Ie{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const la=B(Kf);O("textureSize",la);te("TextureSizeNode",Kf);class Mt extends ct{constructor(e,t,n,...s){if(super(),s.length>0){let r=new Mt(e,t,n);for(let o=0;o<s.length-1;o++)r=new Mt(e,r,s[o]);t=r,n=s[s.length-1]}this.op=e,this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=s.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=s.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=s.build(e,a),u=typeof r<"u"?r.build(e,c):null,d=e.getTypeLength(t),h=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&d>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&d>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&d>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&d>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):h?e.format(`${h}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return h?e.format(`${h}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const Mn=B(Mt,"+"),ci=B(Mt,"-"),ft=B(Mt,"*"),Li=B(Mt,"/"),WS=B(Mt,"%"),XS=B(Mt,"=="),qS=B(Mt,"!="),YS=B(Mt,"<"),$S=B(Mt,">"),jS=B(Mt,"<="),KS=B(Mt,">="),ZS=B(Mt,"&&"),JS=B(Mt,"||"),QS=B(Mt,"!"),eT=B(Mt,"^^"),tT=B(Mt,"&"),nT=B(Mt,"~"),iT=B(Mt,"|"),sT=B(Mt,"^"),rT=B(Mt,"<<"),oT=B(Mt,">>");O("add",Mn);O("sub",ci);O("mul",ft);O("div",Li);O("remainder",WS);O("equal",XS);O("notEqual",qS);O("lessThan",YS);O("greaterThan",$S);O("lessThanEqual",jS);O("greaterThanEqual",KS);O("and",ZS);O("or",JS);O("not",QS);O("xor",eT);O("bitAnd",tT);O("bitNot",nT);O("bitOr",iT);O("bitXor",sT);O("shiftLeft",rT);O("shiftRight",oT);te("OperatorNode",Mt);class I extends ct{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return r>o&&r>a?t:o>a?n:a>r?s:t}getNodeType(e){const t=this.method;return t===I.LENGTH||t===I.DISTANCE||t===I.DOT?"float":t===I.CROSS?"vec3":t===I.ALL?"bool":t===I.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===I.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===I.TRANSFORM_DIRECTION){let u=o,d=a;e.isMatrix(u.getNodeType(e))?d=Me(q(d),0):u=Me(q(u),0);const h=ft(u,d).xyz;return Br(h).build(e,t)}else{if(n===I.NEGATE)return e.format("( - "+o.build(e,r)+" )",s,t);if(n===I.ONE_MINUS)return ci(1,o).build(e,t);if(n===I.RECIPROCAL)return Li(1,o).build(e,t);if(n===I.DIFFERENCE)return ii(ci(o,a)).build(e,t);{const u=[];return n===I.CROSS||n===I.MOD?u.push(o.build(e,s),a.build(e,s)):n===I.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l&&(n===I.MIN||n===I.MAX)||n===I.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===I.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===I.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}I.ALL="all";I.ANY="any";I.EQUALS="equals";I.RADIANS="radians";I.DEGREES="degrees";I.EXP="exp";I.EXP2="exp2";I.LOG="log";I.LOG2="log2";I.SQRT="sqrt";I.INVERSE_SQRT="inversesqrt";I.FLOOR="floor";I.CEIL="ceil";I.NORMALIZE="normalize";I.FRACT="fract";I.SIN="sin";I.COS="cos";I.TAN="tan";I.ASIN="asin";I.ACOS="acos";I.ATAN="atan";I.ABS="abs";I.SIGN="sign";I.LENGTH="length";I.NEGATE="negate";I.ONE_MINUS="oneMinus";I.DFDX="dFdx";I.DFDY="dFdy";I.ROUND="round";I.RECIPROCAL="reciprocal";I.TRUNC="trunc";I.FWIDTH="fwidth";I.BITCAST="bitcast";I.TRANSPOSE="transpose";I.ATAN2="atan2";I.MIN="min";I.MAX="max";I.MOD="mod";I.STEP="step";I.REFLECT="reflect";I.DISTANCE="distance";I.DIFFERENCE="difference";I.DOT="dot";I.CROSS="cross";I.POW="pow";I.TRANSFORM_DIRECTION="transformDirection";I.MIX="mix";I.CLAMP="clamp";I.REFRACT="refract";I.SMOOTHSTEP="smoothstep";I.FACEFORWARD="faceforward";const Zf=Z(1e-6);Z(1e6);const Qh=Z(Math.PI);Z(Math.PI*2);const Jf=B(I,I.ALL),aT=B(I,I.ANY),cT=B(I,I.EQUALS),lT=B(I,I.RADIANS),uT=B(I,I.DEGREES),Qf=B(I,I.EXP),wl=B(I,I.EXP2),ep=B(I,I.LOG),Ca=B(I,I.LOG2),hT=B(I,I.SQRT),dT=B(I,I.INVERSE_SQRT),La=B(I,I.FLOOR),tp=B(I,I.CEIL),Br=B(I,I.NORMALIZE),Pa=B(I,I.FRACT),Cn=B(I,I.SIN),ni=B(I,I.COS),fT=B(I,I.TAN),pT=B(I,I.ASIN),mT=B(I,I.ACOS),gT=B(I,I.ATAN),ii=B(I,I.ABS),Eu=B(I,I.SIGN),Qs=B(I,I.LENGTH),_T=B(I,I.NEGATE),vT=B(I,I.ONE_MINUS),xT=B(I,I.DFDX),yT=B(I,I.DFDY),MT=B(I,I.ROUND),ST=B(I,I.RECIPROCAL),TT=B(I,I.TRUNC),ET=B(I,I.FWIDTH);B(I,I.BITCAST);const NT=B(I,I.TRANSPOSE),AT=B(I,I.ATAN2),Ti=B(I,I.MIN),fn=B(I,I.MAX),wT=B(I,I.MOD),bT=B(I,I.STEP),RT=B(I,I.REFLECT),CT=B(I,I.DISTANCE),LT=B(I,I.DIFFERENCE),Ia=B(I,I.DOT),np=B(I,I.CROSS),Ei=B(I,I.POW),ip=B(I,I.POW,2),PT=B(I,I.POW,3),IT=B(I,I.POW,4),DT=B(I,I.TRANSFORM_DIRECTION),UT=i=>ft(Eu(i),Ei(ii(i),1/3)),OT=i=>Ia(i,i),Ft=B(I,I.MIX),ms=(i,e=0,t=1)=>ce(new I(I.CLAMP,ce(i),ce(e),ce(t))),FT=i=>ms(i),sp=B(I,I.REFRACT),li=B(I,I.SMOOTHSTEP),zT=B(I,I.FACEFORWARD),BT=(i,e,t)=>Ft(e,t,i),VT=(i,e,t)=>li(e,t,i);O("all",Jf);O("any",aT);O("equals",cT);O("radians",lT);O("degrees",uT);O("exp",Qf);O("exp2",wl);O("log",ep);O("log2",Ca);O("sqrt",hT);O("inverseSqrt",dT);O("floor",La);O("ceil",tp);O("normalize",Br);O("fract",Pa);O("sin",Cn);O("cos",ni);O("tan",fT);O("asin",pT);O("acos",mT);O("atan",gT);O("abs",ii);O("sign",Eu);O("length",Qs);O("lengthSq",OT);O("negate",_T);O("oneMinus",vT);O("dFdx",xT);O("dFdy",yT);O("round",MT);O("reciprocal",ST);O("trunc",TT);O("fwidth",ET);O("atan2",AT);O("min",Ti);O("max",fn);O("mod",wT);O("step",bT);O("reflect",RT);O("distance",CT);O("dot",Ia);O("cross",np);O("pow",Ei);O("pow2",ip);O("pow3",PT);O("pow4",IT);O("transformDirection",DT);O("mix",BT);O("clamp",ms);O("refract",sp);O("smoothstep",VT);O("faceForward",zT);O("difference",LT);O("saturate",FT);O("cbrt",UT);O("transpose",NT);te("MathNode",I);const HT=he(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=Ft(n,s,r);return Me(o,e.a)}),kT=he(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),r=t.lessThanEqual(.0031308),o=Ft(n,s,r);return Me(o,e.a)}),ed=i=>{let e=null;return i===Qn?e="Linear":i===Xn&&(e="sRGB"),e},rp=(i,e)=>ed(i)+"To"+ed(e);class Sn extends ct{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===Sn.LINEAR_TO_LINEAR?t:GT[e]({value:t})}}Sn.LINEAR_TO_LINEAR="LinearToLinear";Sn.LINEAR_TO_sRGB="LinearTosRGB";Sn.sRGB_TO_LINEAR="sRGBToLinear";const GT={[Sn.LINEAR_TO_sRGB]:kT,[Sn.sRGB_TO_LINEAR]:HT},WT=(i,e)=>ce(new Sn(rp(Qn,e),ce(i))),op=(i,e)=>ce(new Sn(rp(e,Qn),ce(i))),XT=B(Sn,Sn.LINEAR_TO_sRGB),qT=B(Sn,Sn.sRGB_TO_LINEAR);O("linearTosRGB",XT);O("sRGBToLinear",qT);O("linearToColorSpace",WT);O("colorSpaceToLinear",op);te("ColorSpaceNode",Sn);class ap extends Ie{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const Da=B(ap);te("ExpressionNode",ap);class cp extends vs{constructor(e){super(0),this.textureNode=e,this.updateType=st.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const YT=B(cp);te("MaxMipLevelNode",cp);class xs extends vs{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=st.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":this.value.type===$i?"uvec4":this.value.type===_a?"ivec4":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Tn(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return ze(t.matrix).mul(q(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?st.FRAME:st.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,o,a){const c=this.value;let l;return s?l=e.generateTextureLevel(c,t,n,s,r):a?l=e.generateTextureGrad(c,t,n,a,r):o?l=e.generateTextureCompare(c,t,n,o,r):this.sampler===!1?l=e.generateTextureLoad(c,t,n,r):l=e.generateTexture(c,t,n,r),l}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:d,compareNode:h,depthNode:p,gradNode:g}=n,_=this.generateUV(e,u),m=d?d.build(e,"float"):null,f=p?p.build(e,"int"):null,E=h?h.build(e,"float"):null,x=g?[g[0].build(e,"vec2"),g[1].build(e,"vec2")]:null,N=e.getVarFromNode(this);a=e.getPropertyName(N);const D=this.generateSnippet(e,r,_,m,f,E,x);e.addLineFlowCode(`${a} = ${D}`),o.snippet=D,o.propertyName=a}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(c=op(Da(c,l),s.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,ce(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(YT(t)),t.referenceNode=this,ce(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return la(this,e)}compare(e){const t=this.clone();return t.compareNode=ce(e),t.referenceNode=this,ce(t)}grad(e,t){const n=this.clone();return n.gradNode=[ce(e),ce(t)],n.referenceNode=this,ce(n)}depth(e){const t=this.clone();return t.depthNode=ce(e),t.referenceNode=this,ce(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Kt=B(xs),xi=(...i)=>Kt(...i).setSampler(!1);O("texture",Kt);te("TextureNode",xs);class Ua extends vs{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getElementType(e){return this.getNodeType(e)}getInputType(){return"buffer"}}const Nu=(i,e,t)=>ce(new Ua(i,e,t));te("BufferNode",Ua);class $T extends mr{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class lp extends Ua{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=st.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(s==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;this._elementType=this.elementType===null?Xi(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType);let n=Float32Array;return this._elementType.charAt(0)==="i"?n=Int32Array:this._elementType.charAt(0)==="u"&&(n=Uint32Array),this.value=new n(t*4),this.bufferCount=t,this.bufferType=e.changeComponentType("vec4",e.getComponentType(this._elementType)),super.setup(e)}element(e){return ce(new $T(this,ce(e)))}}const bl=(i,e)=>ce(new lp(i,e));te("UniformsNode",lp);class jT extends mr{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class gr extends Ie{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=st.OBJECT}element(e){return ce(new jT(this,ce(e)))}setNodeType(e){let t=null;this.count!==null?t=Nu(null,e,this.count):Array.isArray(this.getValueFromReference())?t=bl(null,e):e==="texture"?t=Kt(null):t=ze(null,e),this.node=t}getNodeType(e){return this.node===null&&this.updateValue(),this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const Fn=(i,e,t)=>ce(new gr(i,e,t)),KT=(i,e,t,n)=>ce(new gr(i,e,n,t));te("ReferenceNode",gr);class up extends gr{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const Ni=(i,e,t)=>ce(new up(i,e,t));te("MaterialReferenceNode",up);const ys=Tu("camera").onRenderUpdate(()=>{ys.needsUpdate=!0}),Ar=ze("float").label("cameraNear").setGroup(ys).onRenderUpdate(({camera:i})=>i.near),wr=ze("float").label("cameraFar").setGroup(ys).onRenderUpdate(({camera:i})=>i.far),ZT=ze("float").label("cameraLogDepth").setGroup(ys).onRenderUpdate(({camera:i})=>2/(Math.log(i.far+1)/Math.LN2)),si=ze("mat4").label("cameraProjectionMatrix").setGroup(ys).onRenderUpdate(({camera:i})=>i.projectionMatrix),_r=ze("mat4").label("cameraViewMatrix").setGroup(ys).onRenderUpdate(({camera:i})=>i.matrixWorldInverse),hp=ze(new L).label("cameraPosition").setGroup(ys).onRenderUpdate(({camera:i},e)=>e.value.setFromMatrixPosition(i.matrixWorld));class ke extends Ie{constructor(e=ke.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=st.OBJECT,this._uniformNode=new vs(null)}getNodeType(){const e=this.scope;if(e===ke.WORLD_MATRIX||e===ke.VIEW_MATRIX)return"mat4";if(e===ke.NORMAL_MATRIX)return"mat3";if(e===ke.POSITION||e===ke.VIEW_POSITION||e===ke.DIRECTION||e===ke.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===ke.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===ke.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===ke.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===ke.POSITION)n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===ke.SCALE)n.value=n.value||new L,n.value.setFromMatrixScale(t.matrixWorld);else if(s===ke.DIRECTION)n.value=n.value||new L,t.getWorldDirection(n.value);else if(s===ke.VIEW_POSITION){const r=e.camera;n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===ke.WORLD_MATRIX||t===ke.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===ke.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===ke.POSITION||t===ke.VIEW_POSITION||t===ke.DIRECTION||t===ke.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}ke.VIEW_MATRIX="viewMatrix";ke.NORMAL_MATRIX="normalMatrix";ke.WORLD_MATRIX="worldMatrix";ke.POSITION="position";ke.SCALE="scale";ke.VIEW_POSITION="viewPosition";ke.DIRECTION="direction";B(ke,ke.DIRECTION);B(ke,ke.VIEW_MATRIX);B(ke,ke.NORMAL_MATRIX);B(ke,ke.WORLD_MATRIX);const Rl=B(ke,ke.POSITION);B(ke,ke.SCALE);const Au=B(ke,ke.VIEW_POSITION);te("Object3DNode",ke);class Qt extends ke{constructor(e=Qt.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}de(Qt,Qt.DIRECTION);const gs=de(Qt,Qt.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),dp=de(Qt,Qt.NORMAL_MATRIX),Vr=de(Qt,Qt.WORLD_MATRIX);de(Qt,Qt.POSITION);de(Qt,Qt.SCALE);de(Qt,Qt.VIEW_POSITION);const JT=ze(new vt).onObjectUpdate(({object:i},e)=>e.value.copy(i.matrixWorld).invert());te("ModelNode",Qt);const ua=nn("normal","vec3",q(0,1,0)),Jn=ua.toVar("normalLocal"),ji=Ot(dp.mul(Jn),"v_normalView").normalize().toVar("normalView"),QT=Ot(ji.transformDirection(_r),"v_normalWorld").normalize().toVar("transformedNormalWorld"),Rt=Et("vec3","transformedNormalView"),fp=Rt.transformDirection(_r).normalize().toVar("transformedNormalWorld"),Xs=Et("vec3","transformedClearcoatNormalView"),td=new Map;class $ extends Ie{constructor(e){super(),this.scope=e}getCache(e,t){let n=td.get(e);return n===void 0&&(n=Ni(e,t),td.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===$.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===$.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===$.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=Z(1);else if(n===$.SPECULAR_INTENSITY){const r=this.getFloat(n);t.specularMap?s=r.mul(this.getTexture(n).a):s=r}else if(n===$.SPECULAR_COLOR){const r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=r.mul(this.getTexture(n).rgb):s=r}else if(n===$.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===$.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===$.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=r.mul(this.getTexture(n)):s=r}else if(n===$.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=ji;else if(n===$.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===$.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===$.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=ji;else if(n===$.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===$.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===$.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const r=this.getTexture(n);s=mu(br.x,br.y,br.y.negate(),br.x).mul(r.rg.mul(2).sub(se(1)).normalize().mul(r.b))}else s=br;else if(n===$.IRIDESCENCE_THICKNESS){const r=Fn("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=Fn("0","float",t.iridescenceThicknessRange);s=r.sub(o).mul(this.getTexture(n).g).add(o)}else s=r}else if(n===$.TRANSMISSION){const r=this.getFloat(n);t.transmissionMap?s=r.mul(this.getTexture(n).r):s=r}else if(n===$.THICKNESS){const r=this.getFloat(n);t.thicknessMap?s=r.mul(this.getTexture(n).g):s=r}else if(n===$.IOR)s=this.getFloat(n);else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}$.ALPHA_TEST="alphaTest";$.COLOR="color";$.OPACITY="opacity";$.SHININESS="shininess";$.SPECULAR="specular";$.SPECULAR_STRENGTH="specularStrength";$.SPECULAR_INTENSITY="specularIntensity";$.SPECULAR_COLOR="specularColor";$.REFLECTIVITY="reflectivity";$.ROUGHNESS="roughness";$.METALNESS="metalness";$.NORMAL="normal";$.CLEARCOAT="clearcoat";$.CLEARCOAT_ROUGHNESS="clearcoatRoughness";$.CLEARCOAT_NORMAL="clearcoatNormal";$.EMISSIVE="emissive";$.ROTATION="rotation";$.SHEEN="sheen";$.SHEEN_ROUGHNESS="sheenRoughness";$.ANISOTROPY="anisotropy";$.IRIDESCENCE="iridescence";$.IRIDESCENCE_IOR="iridescenceIOR";$.IRIDESCENCE_THICKNESS="iridescenceThickness";$.IOR="ior";$.TRANSMISSION="transmission";$.THICKNESS="thickness";$.ATTENUATION_DISTANCE="attenuationDistance";$.ATTENUATION_COLOR="attenuationColor";$.LINE_SCALE="scale";$.LINE_DASH_SIZE="dashSize";$.LINE_GAP_SIZE="gapSize";$.LINE_WIDTH="linewidth";$.LINE_DASH_OFFSET="dashOffset";$.POINT_WIDTH="pointWidth";$.DISPERSION="dispersion";const eE=de($,$.ALPHA_TEST),Hr=de($,$.COLOR),tE=de($,$.SHININESS),nE=de($,$.EMISSIVE),pp=de($,$.OPACITY),iE=de($,$.SPECULAR),nd=de($,$.SPECULAR_INTENSITY),sE=de($,$.SPECULAR_COLOR),rE=de($,$.SPECULAR_STRENGTH);de($,$.REFLECTIVITY);const oE=de($,$.ROUGHNESS),aE=de($,$.METALNESS),cE=de($,$.NORMAL),lE=de($,$.CLEARCOAT),uE=de($,$.CLEARCOAT_ROUGHNESS),hE=de($,$.CLEARCOAT_NORMAL),dE=de($,$.ROTATION),fE=de($,$.SHEEN),pE=de($,$.SHEEN_ROUGHNESS),mE=de($,$.ANISOTROPY),gE=de($,$.IRIDESCENCE),_E=de($,$.IRIDESCENCE_IOR),vE=de($,$.IRIDESCENCE_THICKNESS),xE=de($,$.TRANSMISSION),yE=de($,$.THICKNESS),ME=de($,$.IOR),SE=de($,$.ATTENUATION_DISTANCE),TE=de($,$.ATTENUATION_COLOR),Cl=de($,$.LINE_SCALE),mp=de($,$.LINE_DASH_SIZE),gp=de($,$.LINE_GAP_SIZE),Sc=de($,$.LINE_WIDTH),id=de($,$.LINE_DASH_OFFSET),EE=de($,$.POINT_WIDTH),NE=de($,$.DISPERSION),br=ze(new xe).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))});te("MaterialNode",$);const dn=nn("position","vec3"),Jt=dn.toVar("positionLocal"),Ll=Ot(Vr.mul(Jt).xyz,"v_positionWorld"),AE=Ot(Jt.transformDirection(Vr),"v_positionWorldDirection").normalize().toVar("positionWorldDirection"),rn=Ot(gs.mul(Jt).xyz,"v_positionView"),Tt=Ot(rn.negate(),"v_positionViewDirection").normalize().toVar("positionViewDirection");class _p extends ct{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Ot(e.context.mvp);const t=this.positionNode||Jt;return si.mul(gs).mul(t)}}const sd=B(_p);te("ModelViewProjectionNode",_p);class vp extends Na{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=ea,this.instanced=!1,this.attribute=null,this.global=!0,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getHash(e){if(this.bufferStride===0&&this.bufferOffset===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new Mf(n,r),c=new ou(a,s,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=Ot(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this.attribute&&this.attribute.isBufferAttribute===!0&&(this.attribute.usage=e),this}setInstanced(e){return this.instanced=e,this}}const Oa=(i,e,t,n)=>ce(new vp(i,e,t,n)),wE=(i,e,t,n)=>Oa(i,e,t,n).setUsage(Lr),Pl=(i,e,t,n)=>Oa(i,e,t,n).setInstanced(!0),rd=(i,e,t,n)=>wE(i,e,t,n).setInstanced(!0);O("toAttribute",i=>Oa(i.value));te("BufferAttributeNode",vp);class xp extends Ie{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null,this.updateType=st.FRAME,this.buffer=null,this.bufferColor=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new BM(c.array,16,1);this.buffer=l;const u=c.usage===Lr?rd:Pl,d=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=Ks(...d),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new Sf(n.array,3),l=n.usage===Lr?rd:Pl;this.bufferColor=c,this.instanceColorNode=q(l(c,"vec3",3,0))}const s=e.mul(Jt).xyz,r=cn(e[0].xyz,e[1].xyz,e[2].xyz),o=Jn.div(q(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;Jt.assign(s),Jn.assign(a),this.instanceColorNode!==null&&ei("vec3","vInstanceColor").assign(this.instanceColorNode)}update(){this.instanceMesh.instanceMatrix.usage!==Lr&&this.instanceMesh.instanceMatrix.version!==this.buffer.version&&(this.buffer.version=this.instanceMesh.instanceMatrix.version),this.instanceMesh.instanceColor&&this.instanceMesh.instanceColor.usage!==Lr&&this.instanceMesh.instanceColor.version!==this.bufferColor.version&&(this.bufferColor.version=this.instanceMesh.instanceColor.version)}}const bE=B(xp);te("InstanceNode",xp);const yp=he((i,e)=>(e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents(),nn("tangent","vec4")))(),wu=yp.xyz.toVar("tangentLocal"),Mp=Ot(gs.mul(Me(wu,0)).xyz,"v_tangentView").normalize().toVar("tangentView");class Sp extends Ie{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(e.getDrawIndex()===null?this.batchingIdNode=vu:this.batchingIdNode=zS);const t=he(([h])=>{const p=la(xi(this.batchMesh._indirectTexture),0),g=Vt(h).remainder(Vt(p)),_=Vt(h).div(Vt(p));return xi(this.batchMesh._indirectTexture,Gi(g,_),null,"uvec4").x}).setLayout({name:"getIndirectIndex",type:"uint",inputs:[{name:"id",type:"int"}]}),n=this.batchMesh._matricesTexture,s=la(xi(n),0),r=Z(t(Vt(this.batchingIdNode))).mul(4).toVar(),o=Vt(r.mod(s)),a=Vt(r).div(Vt(s)),c=Ks(xi(n,Gi(o,a)),xi(n,Gi(o.add(1),a)),xi(n,Gi(o.add(2),a)),xi(n,Gi(o.add(3),a))),l=cn(c[0].xyz,c[1].xyz,c[2].xyz);Jt.assign(c.mul(Jt));const u=Jn.div(q(l[0].dot(l[0]),l[1].dot(l[1]),l[2].dot(l[2]))),d=l.mul(u).xyz;Jn.assign(d),e.hasGeometryAttribute("tangent")&&wu.mulAssign(l)}}const RE=B(Sp);te("batch",Sp);class Tp extends Ie{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=st.OBJECT,this.skinIndexNode=nn("skinIndex","uvec4"),this.skinWeightNode=nn("skinWeight","vec4");let n,s,r;t?(n=Fn("bindMatrix","mat4"),s=Fn("bindMatrixInverse","mat4"),r=KT("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=ze(e.bindMatrix,"mat4"),s=ze(e.bindMatrixInverse,"mat4"),r=Nu(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),d=s.mul(Jt),h=Mn(a.mul(n.x).mul(d),c.mul(n.y).mul(d),l.mul(n.z).mul(d),u.mul(n.w).mul(d)),p=r.mul(h).xyz;let g=Mn(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=r.mul(g).mul(s);const _=g.transformDirection(Jn).xyz;Jt.assign(p),Jn.assign(_),e.hasGeometryAttribute("tangent")&&wu.assign(_)}generate(e,t){if(t!=="void")return Jt.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const CE=i=>ce(new Tp(i,!0));te("SkinningNode",Tp);class Ep extends Ie{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let r=0,o=this.params.length-1;r<o;r++){const a=this.params[r],c=a.isNode!==!0&&a.name||this.getVarName(r),l=a.isNode!==!0&&a.type||"int";n[c]=Da(c,l)}const s=e.addStack();return t.returnsNode=this.params[this.params.length-1](n,s,e),t.stackNode=s,e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n=this.params,s=t.stackNode;for(let a=0,c=n.length-1;a<c;a++){const l=n[a];let u=null,d=null,h=null,p=null,g=null,_=null;l.isNode?(p="int",h=this.getVarName(a),u="0",d=l.build(e,p),g="<"):(p=l.type||"int",h=l.name||this.getVarName(a),u=l.start,d=l.end,g=l.condition,_=l.update,typeof u=="number"?u=u.toString():u&&u.isNode&&(u=u.build(e,p)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,p)),u!==void 0&&d===void 0?(u=u+" - 1",d="0",g=">="):d!==void 0&&u===void 0&&(u="0",g="<"),g===void 0&&(Number(u)>Number(d)?g=">=":g="<"));const m={start:u,end:d,condition:g},f=m.start,E=m.end;let x="",N="",D="";_||(p==="int"||p==="uint"?g.includes("<")?_="++":_="--":g.includes("<")?_="+= 1.":_="-= 1."),x+=e.getVar(p,h)+" = "+f,N+=h+" "+g+" "+E,D+=h+" "+_;const b=`for ( ${x}; ${N}; ${D} )`;e.addFlowCode((a===0?`
`:"")+e.tab+b+` {

`).addFlowTab()}const r=s.build(e,"void"),o=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+r);for(let a=0,c=this.params.length-1;a<c;a++)e.addFlowCode((a===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),o}}const Kn=(...i)=>ce(new Ep(js(i,"int"))).append(),Np=()=>Da("break").append();O("loop",(i,...e)=>Hf(i,Kn(...e)));te("LoopNode",Ep);const Tc=new WeakMap,bn=new nt,od=he(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{const o=Vt(FS).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return xi(i,Gi(c,a)).depth(s).mul(e)});function LE(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0;let o=Tc.get(i);if(o===void 0||o.count!==r){let E=function(){m.dispose(),Tc.delete(i),i.removeEventListener("dispose",E)};var a=E;o!==void 0&&o.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let d=0;e===!0&&(d=1),t===!0&&(d=2),n===!0&&(d=3);let h=i.attributes.position.count*d,p=1;const g=4096;h>g&&(p=Math.ceil(h/g),h=g);const _=new Float32Array(h*p*4*r),m=new tu(_,h,p,r);m.type=ai,m.needsUpdate=!0;const f=d*4;for(let x=0;x<r;x++){const N=c[x],D=l[x],b=u[x],A=h*p*4*x;for(let P=0;P<N.count;P++){const T=P*f;e===!0&&(bn.fromBufferAttribute(N,P),_[A+T+0]=bn.x,_[A+T+1]=bn.y,_[A+T+2]=bn.z,_[A+T+3]=0),t===!0&&(bn.fromBufferAttribute(D,P),_[A+T+4]=bn.x,_[A+T+5]=bn.y,_[A+T+6]=bn.z,_[A+T+7]=0),n===!0&&(bn.fromBufferAttribute(b,P),_[A+T+8]=bn.x,_[A+T+9]=bn.y,_[A+T+10]=bn.z,_[A+T+11]=b.itemSize===4?bn.w:1)}}o={count:r,texture:m,stride:d,size:new xe(h,p)},Tc.set(i,o),i.addEventListener("dispose",E)}return o}class Ap extends Ie{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=ze(1),this.updateType=st.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=LE(t);n===!0&&Jt.mulAssign(this.morphBaseInfluence),s===!0&&Jn.mulAssign(this.morphBaseInfluence);const u=Vt(l.width);Kn(o,({i:d})=>{const h=Z(0).toVar();this.mesh.count>1&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?h.assign(xi(this.mesh.morphTexture,Gi(Vt(d).add(1),Vt(vu))).r):h.assign(Fn("morphTargetInfluences","float").element(d).toVar()),n===!0&&Jt.addAssign(od({bufferMap:a,influence:h,stride:c,width:u,depth:d,offset:Vt(0)})),s===!0&&Jn.addAssign(od({bufferMap:a,influence:h,stride:c,width:u,depth:d,offset:Vt(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const PE=B(Ap);te("MorphNode",Ap);const IE=Tt.negate().reflect(Rt),DE=IE.transformDirection(_r).toVar("reflectVector");class wp extends xs{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return DE}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===rr||!n.isRenderTargetTexture?q(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const bp=B(wp);O("cubeTexture",bp);te("CubeTextureNode",wp);class Kr extends Ie{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}te("LightingNode",Kr);let Rr=null;class Zi extends Kr{constructor(e=null){super(),this.updateType=st.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new Ue,this._defaultColorNode=ze(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){Rr===null&&(Rr=e.createNodeMaterial(),Rr.fragmentNode=Me(0,0,0,1),Rr.isShadowNodeMaterial=!0);const s=this.light.shadow,r=e.createRenderTarget(s.mapSize.width,s.mapSize.height),o=new Yr;o.minFilter=sn,o.magFilter=sn,o.image.width=s.mapSize.width,o.image.height=s.mapSize.height,o.compareFunction=rf,r.depthTexture=o,s.camera.updateProjectionMatrix();const a=Fn("intensity","float",s),c=Fn("bias","float",s),l=Fn("normalBias","float",s),u=t.material.shadowPositionNode||Ll;let d=ze(s.matrix).mul(u.add(QT.mul(l)));d=d.xyz.div(d.w);const h=d.x.greaterThanEqual(0).and(d.x.lessThanEqual(1)).and(d.y.greaterThanEqual(0)).and(d.y.lessThanEqual(1)).and(d.z.lessThanEqual(1));let p=d.z.add(c);e.renderer.coordinateSystem===rr&&(p=p.mul(2).sub(1)),d=q(d.x,d.y.oneMinus(),p),n=((f,E,x)=>Kt(f,E).compare(x))(o,d.xy,d.z);const _=Kt(r.texture,d),m=h.mix(1,n.mix(_.a.mix(1,_),1));this.rtt=r,this.colorNode=this.colorNode.mul(Ft(1,m,a)),this.shadowNode=n,this.shadowMaskNode=m,this.updateBeforeType=st.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:r,camera:o}=e,a=r.overrideMaterial;r.overrideMaterial=Rr,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n),n.shadow.camera.layers.mask=o.layers.mask;const c=s.toneMapping,l=s.getRenderTarget(),u=s.getRenderObjectFunction();s.setRenderObjectFunction((d,...h)=>{d.castShadow===!0&&s.renderObject(d,...h)}),s.setRenderTarget(t),s.toneMapping=Ln,s.render(r,n.shadow.camera),s.setRenderTarget(l),s.setRenderObjectFunction(u),s.toneMapping=c,r.overrideMaterial=a}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}te("AnalyticLightNode",Zi);const ha=new WeakMap,UE=i=>i.sort((e,t)=>e.id-t.id);class OE extends Ie{constructor(e=[]){super("vec3"),this.totalDiffuseNode=q().temp("totalDiffuse"),this.totalSpecularNode=q().temp("totalSpecular"),this.outgoingLightNode=q().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}analyze(e){const t=e.getDataFromNode(this);for(const n of t.nodes)n.build(e)}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=s;const c=e.addStack(),l=e.getDataFromNode(this);l.nodes=c.nodes,n.start(t,c,e);for(const f of r)f.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:u,backdropAlpha:d}=t,{directDiffuse:h,directSpecular:p,indirectDiffuse:g,indirectSpecular:_}=t.reflectedLight;let m=h.add(g);u!==null&&(d!==null?m=q(d.mix(m,u)):m=q(u),t.material.transparent=!0),o.assign(m),a.assign(p.add(_)),s.assign(o.add(a)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=UE(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const r=n.constructor,o=ha.has(r)?ha.get(r):Zi;s=ce(new o(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const FE=B(OE);function Ms(i,e){if(ha.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);ha.set(i,e)}class Rp extends Kr{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}te("AONode",Rp);class Cp extends _u{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=q().temp("directDiffuse"),s=q().temp("directSpecular"),r=q().temp("indirectDiffuse"),o=q().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:o};return{radiance:q().temp("radiance"),irradiance:q().temp("irradiance"),iblIrradiance:q().temp("iblIrradiance"),ambientOcclusion:Z(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const Lp=B(Cp);O("lightingContext",Lp);te("LightingContextNode",Cp);const zE=i=>i.mul(yp.w).xyz,BE=Ot(zE(ji.cross(Mp)),"v_bitangentView").normalize().toVar("bitangentView"),qs=cn(Mp,BE,ji);Tt.mul(qs);const VE=(()=>{let i=Zs.cross(Tt);return i=i.cross(Zs).normalize(),i=Ft(i,Rt,cs.mul(Si.oneMinus()).oneMinus().pow2().pow2()).normalize(),i})();class bu extends Ie{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}setup(e){const t=e.getNodeProperties(this);t.condNode=this.condNode.cache(),t.ifNode=this.ifNode.cache(),t.elseNode=this.elseNode?this.elseNode.cache():null}generate(e,t){const n=this.getNodeType(e),s=e.getDataFromNode(this);if(s.nodeProperty!==void 0)return s.nodeProperty;const{condNode:r,ifNode:o,elseNode:a}=e.getNodeProperties(this),c=t!=="void",l=c?Et(n).build(e):"";s.nodeProperty=l;const u=r.build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let d=o.build(e,n);if(d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let h=a.build(e,n);h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const Un=B(bu);O("cond",Un);te("CondNode",bu);const ad=Z(1),Il=Z(-2),Lo=Z(.8),Ec=Z(-1),Po=Z(.4),Nc=Z(2),Io=Z(.305),Ac=Z(3),cd=Z(.21),HE=Z(4),ld=Z(4),kE=Z(16),GE=he(([i])=>{const e=q(ii(i)).toVar(),t=Z(-1).toVar();return Lt(e.x.greaterThan(e.z),()=>{Lt(e.x.greaterThan(e.y),()=>{t.assign(Un(i.x.greaterThan(0),0,3))}).else(()=>{t.assign(Un(i.y.greaterThan(0),1,4))})}).else(()=>{Lt(e.z.greaterThan(e.y),()=>{t.assign(Un(i.z.greaterThan(0),2,5))}).else(()=>{t.assign(Un(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),WE=he(([i,e])=>{const t=se().toVar();return Lt(e.equal(0),()=>{t.assign(se(i.z,i.y).div(ii(i.x)))}).elseif(e.equal(1),()=>{t.assign(se(i.x.negate(),i.z.negate()).div(ii(i.y)))}).elseif(e.equal(2),()=>{t.assign(se(i.x.negate(),i.y).div(ii(i.z)))}).elseif(e.equal(3),()=>{t.assign(se(i.z.negate(),i.y).div(ii(i.x)))}).elseif(e.equal(4),()=>{t.assign(se(i.x.negate(),i.z).div(ii(i.y)))}).else(()=>{t.assign(se(i.x,i.y).div(ii(i.z)))}),ft(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),XE=he(([i])=>{const e=Z(0).toVar();return Lt(i.greaterThanEqual(Lo),()=>{e.assign(ad.sub(i).mul(Ec.sub(Il)).div(ad.sub(Lo)).add(Il))}).elseif(i.greaterThanEqual(Po),()=>{e.assign(Lo.sub(i).mul(Nc.sub(Ec)).div(Lo.sub(Po)).add(Ec))}).elseif(i.greaterThanEqual(Io),()=>{e.assign(Po.sub(i).mul(Ac.sub(Nc)).div(Po.sub(Io)).add(Nc))}).elseif(i.greaterThanEqual(cd),()=>{e.assign(Io.sub(i).mul(HE.sub(Ac)).div(Io.sub(cd)).add(Ac))}).else(()=>{e.assign(Z(-2).mul(Ca(ft(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});he(([i,e])=>{const t=i.toVar();t.assign(ft(2,t).sub(1));const n=q(t,1).toVar();return Lt(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const qE=he(([i,e,t,n,s,r])=>{const o=Z(t),a=q(e),c=ms(XE(o),Il,r),l=Pa(c),u=La(c),d=q(Dl(i,a,u,n,s,r)).toVar();return Lt(l.notEqual(0),()=>{const h=q(Dl(i,a,u.add(1),n,s,r)).toVar();d.assign(Ft(d,h,l))}),d}),Dl=he(([i,e,t,n,s,r])=>{const o=Z(t).toVar(),a=q(e),c=Z(GE(a)).toVar(),l=Z(fn(ld.sub(o),0)).toVar();o.assign(fn(o,ld));const u=Z(wl(o)).toVar(),d=se(WE(a,c).mul(u.sub(2)).add(1)).toVar();return Lt(c.greaterThan(2),()=>{d.y.addAssign(u),c.subAssign(3)}),d.x.addAssign(c.mul(u)),d.x.addAssign(l.mul(ft(3,kE))),d.y.addAssign(ft(4,wl(r).sub(u))),d.x.mulAssign(n),d.y.mulAssign(s),i.uv(d).grad(se(),se())}),wc=he(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=ni(n),l=t.mul(c).add(s.cross(t).mul(Cn(n))).add(s.mul(s.dot(t).mul(c.oneMinus())));return Dl(i,l,e,r,o,a)});he(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d})=>{const h=q(Un(e,t,np(t,n))).toVar();Lt(Jf(h.equals(q(0))),()=>{h.assign(q(n.z,0,n.x.negate()))}),h.assign(Br(h));const p=q().toVar();return p.addAssign(s.element(Vt(0)).mul(wc({theta:0,axis:h,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d}))),Kn({start:Vt(1),end:i},({i:g})=>{Lt(g.greaterThanEqual(r),()=>{Np()});const _=Z(o.mul(Z(g))).toVar();p.addAssign(s.element(g).mul(wc({theta:_.mul(-1),axis:h,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d}))),p.addAssign(s.element(g).mul(wc({theta:_,axis:h,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d})))}),Me(p,1)});let da=null;const ud=new WeakMap;function YE(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function $E(i){let e=ud.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){if(i.isCubeTexture){if(i.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=da.fromCubemap(i,e)}else{if(i.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=da.fromEquirectangular(i,e)}e.pmremVersion=i.pmremVersion,ud.set(i,e)}return e.texture}class Pp extends ct{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=Kt(null),this._width=ze(0),this._height=ze(0),this._maxMip=ze(0),this.updateBeforeType=st.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=YE(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=$E(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){da===null&&(da=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===jn&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=q(t.x.negate(),t.yz));let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),qE(this._texture,t,s,this._width,this._height,this._maxMip)}}const jE=B(Pp);te("PMREMNode",Pp);const hd=new WeakMap;class Ip extends Kr{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let p=hd.get(t.value);p===void 0&&(p=jE(t.value),hd.set(t.value,p)),t=p}const{material:n}=e,r=n.envMap?Fn("envMapIntensity","float",e.material):Fn("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?VE:Rt,c=Or(t,dd(Si,a)).mul(r),l=Or(t,KE(fp)).mul(Math.PI).mul(r),u=Xo(c),d=Xo(l);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(d);const h=e.context.lightingModel.clearcoatRadiance;if(h){const p=Or(t,dd(oa,Xs)).mul(r),g=Xo(p);h.addAssign(g)}}}const dd=(i,e)=>{let t=null;return{getUV:()=>(t===null&&(t=Tt.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(_r)),t),getTextureLevel:()=>i}},KE=i=>({getUV:()=>i,getTextureLevel:()=>Z(1)});te("EnvironmentNode",Ip);class Dp extends Kr{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}te("IrradianceNode",Dp);let bc,Rc;class at extends Ie{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===at.VIEWPORT?"vec4":this.scope===at.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=st.NONE;return(this.scope===at.RESOLUTION||this.scope===at.VIEWPORT)&&(e=st.RENDER),this.updateType=e,e}update({renderer:e}){this.scope===at.VIEWPORT?e.getViewport(Rc):e.getDrawingBufferSize(bc)}setup(){const e=this.scope;let t=null;if(e===at.RESOLUTION)t=ze(bc||(bc=new xe));else if(e===at.VIEWPORT)t=ze(Rc||(Rc=new nt));else{t=ZE.div(Ul);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=se(n,s)}return t}generate(e){if(this.scope===at.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(Ul).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}at.COORDINATE="coordinate";at.RESOLUTION="resolution";at.VIEWPORT="viewport";at.TOP_LEFT="topLeft";at.BOTTOM_LEFT="bottomLeft";at.TOP_RIGHT="topRight";at.BOTTOM_RIGHT="bottomRight";const ZE=de(at,at.COORDINATE),Ul=de(at,at.RESOLUTION),er=de(at,at.VIEWPORT),kr=de(at,at.TOP_LEFT);de(at,at.BOTTOM_LEFT);de(at,at.TOP_RIGHT);de(at,at.BOTTOM_RIGHT);te("ViewportNode",at);const Cr=new xe;class Zr extends xs{constructor(e=kr,t=null,n=null){n===null&&(n=new Ef,n.minFilter=Wi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=st.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(Cr);const n=this.value;(n.image.width!==Cr.width||n.image.height!==Cr.height)&&(n.image.width=Cr.width,n.image.height=Cr.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const JE=B(Zr),Up=B(Zr,null,null,{generateMipmaps:!0});O("viewportTexture",JE);O("viewportMipTexture",Up);te("ViewportTextureNode",Zr);let Cc=null;class Op extends Zr{constructor(e=kr,t=null){Cc===null&&(Cc=new Yr),super(e,t,Cc)}}const Fp=B(Op);O("viewportDepthTexture",Fp);te("ViewportDepthTextureNode",Op);class Pn extends Ie{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===Pn.DEPTH?e.getFragDepth():super.generate(e)}setup({camera:e}){const{scope:t}=this,n=this.valueNode;let s=null;if(t===Pn.DEPTH)n!==null?s=Bp().assign(n):e.isPerspectiveCamera?s=QE(rn.z,Ar,wr):s=$o(rn.z,Ar,wr);else if(t===Pn.LINEAR_DEPTH)if(n!==null)if(e.isPerspectiveCamera){const r=zp(n,Ar,wr);s=$o(r,Ar,wr)}else s=n;else s=$o(rn.z,Ar,wr);return s}}const $o=(i,e,t)=>i.add(e).div(e.sub(t)),QE=(i,e,t)=>e.add(i).mul(t).div(t.sub(e).mul(i)),zp=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));Pn.DEPTH="depth";Pn.LINEAR_DEPTH="linearDepth";const Bp=B(Pn,Pn.DEPTH),Vp=de(Pn,Pn.DEPTH),eN=B(Pn,Pn.LINEAR_DEPTH);eN(Fp());Vp.assign=i=>Bp(i);te("ViewportDepthNode",Pn);class Ki extends Ie{constructor(e=Ki.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:r}=t,o=r+s,a=n?o-s:o;return this.scope===Ki.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return he(()=>{const s=bl(e),r=Et("float","distanceToPlane"),o=Et("float","distanceToGradient"),a=Et("float","clipOpacity");a.assign(1);let c;if(Kn(n,({i:l})=>{c=s.element(l),r.assign(rn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),a.mulAssign(li(o.negate(),o,r)),a.equal(0).discard()}),n<t){const l=Et("float","unionclipOpacity");l.assign(1),Kn({start:n,end:t},({i:u})=>{c=s.element(u),r.assign(rn.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),l.mulAssign(li(o.negate(),o,r).oneMinus())}),a.mulAssign(l.oneMinus())}_t.a.mulAssign(a),_t.a.equal(0).discard()})()}setupDefault(e,t,n){return he(()=>{const s=bl(e);let r;if(Kn(n,({i:o})=>{r=s.element(o),rn.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=Et("bool","clipped");o.assign(!0),Kn({start:n,end:t},({i:a})=>{r=s.element(a),o.assign(rn.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}Ki.ALPHA_TO_COVERAGE="alphaToCoverage";Ki.DEFAULT="default";const tN=()=>ce(new Ki),nN=()=>ce(new Ki(Ki.ALPHA_TO_COVERAGE));class Hp extends Ie{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===jn&&n.side===pn?"false":e.getFrontFacing()}}const iN=de(Hp),fa=Z(iN).mul(2).sub(1);te("FrontFacingNode",Hp);const Ol=new Map;class ln extends an{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Cf(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n);const r=Me(s,_t.a).max(0);t=this.setupOutput(e,r),BS.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let s=this.fragmentNode;s.isOutputStructNode!==!0&&(s=Me(s)),t=this.setupOutput(e,s)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=nN():e.stack.add(tN())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=sd().w.add(1).log2().mul(ZT).mul(.5)),n!==null&&Vp.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;if(e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&PE(t).append(),t.isSkinnedMesh===!0&&CE(t).append(),this.displacementMap){const r=Ni("displacementMap","texture"),o=Ni("displacementScale","float"),a=Ni("displacementBias","float");Jt.addAssign(Jn.normalize().mul(r.x.mul(o).add(a)))}t.isBatchedMesh&&RE(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&bE(t).append(),this.positionNode!==null&&Jt.assign(this.positionNode);const s=sd();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Me(this.colorNode):Hr;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Me(n.xyz.mul(nn("color","vec3")),n.a)),e.instanceColor&&(n=ei("vec3","vInstanceColor").mul(n)),_t.assign(n);const s=this.opacityNode?Z(this.opacityNode):pp;if(_t.a.assign(_t.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?Z(this.alphaTestNode):eE;_t.a.lessThanEqual(r).discard()}this.transparent===!1&&this.blending===ds&&this.alphaToCoverage===!1&&_t.a.assign(1)}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=rn.dFdx().cross(rn.dFdy()).normalize();Rt.assign(e.mul(fa))}else{const e=this.normalNode?q(this.normalNode):cE;Rt.assign(e.mul(fa))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?bp(this.envMap):Kt(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new Ip(t)),e.material.lightMap&&n.push(new Dp(Ni("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const r=this.aoNode!==null?this.aoNode:Kt(e.material.aoMap);n.push(new Rp(r))}let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=FE([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=_t.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=Lp(a,l,n,s)}else n!==null&&(c=q(s!==null?Ft(c,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(q(r||nE))),c}setupOutput(e,t){if(this.fog===!0){const n=e.fogNode;n&&(t=Me(n.mix(t.rgb,n.colorNode),t.a))}return t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=an.prototype.toJSON.call(this,e),s=ia(this);n.inputNodes={};for(const{property:o,childNode:a}of s)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=sN(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function qt(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(Ol.has(i)){console.warn(`Redefinition of node material ${i}`);return}Ol.set(i,e),e.type=i}function sN(i){const e=Ol.get(i);if(e!==void 0)return new e}qt("NodeMaterial",ln);class kp extends Ie{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new Ur(t);return this._currentCond=Un(e,n),this.add(this._currentCond)}elseif(e,t){const n=new Ur(t),s=Un(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new Ur(e),this}build(e,...t){const n=hS();Jh(this);for(const s of this.nodes)s.build(e,"void");return Jh(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}B(kp);te("StackNode",kp);class Gp extends ct{constructor(e=AE){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return se(t,n)}}B(Gp);te("EquirectUVNode",Gp);class Wp extends Ie{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}te("StructTypeNode",Wp);class Xp extends Ie{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new Wp(n)).name}generate(e,t){const n=e.getOutputStructName(),s=this.members,r=n!==""?n+".":"";for(let o=0;o<s.length;o++){const a=s[o].build(e,t);e.addLineFlowCode(`${r}m${o} = ${a}`)}return n}}B(Xp);te("OutputStructNode",Xp);class qp extends Ie{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.toUint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).toFloat().mul(1/2**32)}}const rN=B(qp);O("hash",rN);te("HashNode",qp);const Fl=(i,e)=>Ei(ft(4,i.mul(ci(1,i))),e),oN=(i,e)=>i.lessThan(.5)?Fl(i.mul(2),e).div(2):ci(1,Fl(ft(ci(1,i),2),e).div(2)),aN=(i,e,t)=>Ei(Li(Ei(i,e),Mn(Ei(i,e),Ei(ci(1,i),t))),1/e),cN=(i,e)=>Cn(Qh.mul(e.mul(i).sub(1))).div(Qh.mul(e.mul(i).sub(1)));O("parabola",Fl);O("gain",oN);O("pcurve",aN);O("sinc",cN);const ri=he(([i])=>i.fract().sub(.5).abs()),Yp=he(([i])=>q(ri(i.z.add(ri(i.y.mul(1)))),ri(i.z.add(ri(i.x.mul(1)))),ri(i.y.add(ri(i.x.mul(1)))))),lN=he(([i,e,t])=>{const n=q(i).toVar(),s=Z(1.4).toVar(),r=Z(0).toVar(),o=q(n).toVar();return Kn({start:Z(0),end:Z(3),type:"float",condition:"<="},()=>{const a=q(Yp(o.mul(2))).toVar();n.addAssign(a.add(t.mul(Z(.1).mul(e)))),o.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=Z(ri(n.z.add(ri(n.x.add(ri(n.y)))))).toVar();r.addAssign(c.div(s)),o.addAssign(.14)}),r});ri.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});Yp.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});lN.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let Lc;class $p extends bu{constructor(e){Lc=Lc||Da("discard"),super(e,Lc)}}const uN=B($p),hN=i=>uN(i).append();O("discard",hN);te("DiscardNode",$p);class jp extends Ie{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null,this.global=!0}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let d=0;d<t.length;d++){const h=t[d],p=l[d];h.getNodeType(e)===p.type?u++:u=0}u>r&&(s=o,r=u)}}this._candidateFnCall=n=s(...t)}return n}}B(jp);te("FunctionOverloadingNode",jp);class Kp extends ct{constructor(){super("vec2")}setup(){const e=q(Tt.z,0,Tt.x.negate()).normalize(),t=Tt.cross(e);return se(e.dot(Rt),t.dot(Rt)).mul(.495).add(.5)}}const dN=de(Kp);te("MatcapUVNode",Kp);class vn extends vs{constructor(e=vn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=st.FRAME}update(e){const t=this.scope,n=this.scale;t===vn.LOCAL?this.value+=e.deltaTime*n:t===vn.DELTA?this.value=e.deltaTime*n:t===vn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}vn.LOCAL="local";vn.GLOBAL="global";vn.DELTA="delta";vn.FRAME="frame";const fN=(i,e=0)=>ce(new vn(vn.LOCAL,i,e));de(vn,vn.FRAME).toUint();te("TimerNode",vn);class Ht extends Ie{constructor(e=Ht.SINE,t=fN()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=ce(this.timeNode);let n=null;return e===Ht.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Ht.SQUARE?n=t.fract().round():e===Ht.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Ht.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Ht.SINE="sine";Ht.SQUARE="square";Ht.TRIANGLE="triangle";Ht.SAWTOOTH="sawtooth";B(Ht,Ht.SINE);B(Ht,Ht.SQUARE);B(Ht,Ht.TRIANGLE);B(Ht,Ht.SAWTOOTH);te("OscNode",Ht);class ui extends ct{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===ui.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===ui.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}ui.DIRECTION_TO_COLOR="directionToColor";ui.COLOR_TO_DIRECTION="colorToDirection";const Zp=B(ui,ui.DIRECTION_TO_COLOR),pN=B(ui,ui.COLOR_TO_DIRECTION);O("directionToColor",Zp);O("colorToDirection",pN);te("PackingNode",ui);class Ru extends Ie{constructor(e,t,n,s=Z(0),r=Z(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(s)).add(s)}}const mN=B(Ru,null,null,{doClamp:!1}),gN=B(Ru);O("remap",mN);O("remapClamp",gN);te("RemapNode",Ru);class Jp extends ct{constructor(e,t,n=se(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const _N=B(Jp);O("rotateUV",_N);te("RotateUVNode",Jp);class Qp extends ct{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return mu(r,o,o.negate(),r).mul(n)}else{const r=t,o=Ks(Me(1,0,0,0),Me(0,ni(r.x),Cn(r.x).negate(),0),Me(0,Cn(r.x),ni(r.x),0),Me(0,0,0,1)),a=Ks(Me(ni(r.y),0,Cn(r.y),0),Me(0,1,0,0),Me(Cn(r.y).negate(),0,ni(r.y),0),Me(0,0,0,1)),c=Ks(Me(ni(r.z),Cn(r.z).negate(),0,0),Me(Cn(r.z),ni(r.z),0,0),Me(0,0,1,0),Me(0,0,0,1));return o.mul(a).mul(c).mul(Me(n,1)).xyz}}}const vN=B(Qp);O("rotate",vN);te("RotateNode",Qp);class em extends Ie{constructor(e,t=Tn(),n=Z(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,o=e.mod(s.mul(r)).floor(),a=o.mod(s),c=r.sub(o.add(1).div(s).ceil()),l=n.reciprocal(),u=se(a,c);return t.add(u).mul(l)}}B(em);te("SpriteSheetUVNode",em);class tm extends mr{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(s!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const nm=B(tm);O("storageElement",nm);te("StorageArrayElementNode",tm);class im extends Ie{constructor(e,t=null,n=null,s=Z(1),r=Jt,o=Jn){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(q(1)));const c=r.yz.mul(s),l=r.zx.mul(s),u=r.xy.mul(s),d=e.value,h=t!==null?t.value:d,p=n!==null?n.value:d,g=Kt(d,c).mul(a.x),_=Kt(h,l).mul(a.y),m=Kt(p,u).mul(a.z);return Mn(g,_,m)}}const xN=B(im),yN=(...i)=>xN(...i);O("triplanarTexture",yN);te("TriplanarTexturesNode",im);new yi;new L;new L;new L;new vt;new L(0,0,-1);new nt;new L;new L;new nt;new xe;new Ri;se(kr.x.oneMinus(),kr.y);class MN extends gu{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new nt(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}te("VertexColorNode",MN);class sm extends gr{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const SN=(i,e,t)=>ce(new sm(i,e,t));te("RendererReferenceNode",sm);const Fa=1/6,rm=i=>ft(Fa,ft(i,ft(i,i.negate().add(3)).sub(3)).add(1)),zl=i=>ft(Fa,ft(i,ft(i,ft(3,i).sub(6))).add(4)),om=i=>ft(Fa,ft(i,ft(i,ft(-3,i).add(3)).add(3)).add(1)),Bl=i=>ft(Fa,Ei(i,3)),fd=i=>rm(i).add(zl(i)),pd=i=>om(i).add(Bl(i)),md=i=>Mn(-1,zl(i).div(rm(i).add(zl(i)))),gd=i=>Mn(1,Bl(i).div(om(i).add(Bl(i)))),_d=(i,e,t)=>{const n=i.uvNode,s=ft(n,e.zw).add(.5),r=La(s),o=Pa(s),a=fd(o.x),c=pd(o.x),l=md(o.x),u=gd(o.x),d=md(o.y),h=gd(o.y),p=se(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),g=se(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),_=se(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),m=se(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),f=fd(o.y).mul(Mn(a.mul(i.uv(p).level(t)),c.mul(i.uv(g).level(t)))),E=pd(o.y).mul(Mn(a.mul(i.uv(_).level(t)),c.mul(i.uv(m).level(t))));return f.add(E)},TN=(i,e)=>{const t=se(i.size(Vt(e))),n=se(i.size(Vt(e.add(1)))),s=Li(1,t),r=Li(1,n),o=_d(i,Me(s,t),La(e)),a=_d(i,Me(r,n),tp(e));return Pa(e).mix(o,a)};class am extends ct{constructor(e,t=Z(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return TN(this.textureNode,this.blurNode)}}const EN=B(am);O("bicubic",EN);te("TextureBicubicNode",am);class cm extends Ie{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}de(cm);te("PointUVNode",cm);class Zn extends Ie{constructor(e=Zn.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===Zn.BACKGROUND_BLURRINESS?s=Fn("backgroundBlurriness","float",n):t===Zn.BACKGROUND_INTENSITY?s=Fn("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}Zn.BACKGROUND_BLURRINESS="backgroundBlurriness";Zn.BACKGROUND_INTENSITY="backgroundIntensity";de(Zn,Zn.BACKGROUND_BLURRINESS);de(Zn,Zn.BACKGROUND_INTENSITY);te("SceneNode",Zn);const vd={Uniform:"uniform",Storage:"storage",ReadOnlyStorage:"read-only-storage"},Pc={WriteOnly:"write-only",ReadOnly:"read-only",ReadWrite:"read-write"};class NN extends Ua{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.access=vd.Storage,this.bufferObject=!1,this.bufferCount=n,this._attribute=null,this._varying=null,this.global=!0,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getHash(e){if(this.bufferCount===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getInputType(){return"storageBuffer"}element(e){return nm(this,e)}setBufferObject(e){return this.bufferObject=e,this}setAccess(e){return this.access=e,this}toReadOnly(){return this.setAccess(vd.ReadOnlyStorage)}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=Oa(this.value),this._varying=Ot(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}te("StorageBufferNode",NN);class lm extends xs{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStorageTextureNode=!0,this.access=Pc.WriteOnly}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}setAccess(e){return this.access=e,this}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}toReadOnly(){return this.setAccess(Pc.ReadOnly)}toWriteOnly(){return this.setAccess(Pc.WriteOnly)}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=s.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c)}}B(lm);te("StorageTextureNode",lm);const AN=he(({texture:i,uv:e})=>{const n=q().temp();return Lt(e.x.lessThan(1e-4),()=>{n.assign(q(1,0,0))}).elseif(e.y.lessThan(1e-4),()=>{n.assign(q(0,1,0))}).elseif(e.z.lessThan(1e-4),()=>{n.assign(q(0,0,1))}).elseif(e.x.greaterThan(1-1e-4),()=>{n.assign(q(-1,0,0))}).elseif(e.y.greaterThan(1-1e-4),()=>{n.assign(q(0,-1,0))}).elseif(e.z.greaterThan(1-1e-4),()=>{n.assign(q(0,0,-1))}).else(()=>{const r=i.uv(e.add(q(-.01,0,0))).r.sub(i.uv(e.add(q(.01,0,0))).r),o=i.uv(e.add(q(0,-.01,0))).r.sub(i.uv(e.add(q(0,.01,0))).r),a=i.uv(e.add(q(0,0,-.01))).r.sub(i.uv(e.add(q(0,0,.01))).r);n.assign(q(r,o,a))}),n.normalize()});class um extends xs{constructor(e,t=null,n=null){super(e,t,n),this.isTexture3DNode=!0}getInputType(){return"texture3D"}getDefaultUV(){return q(.5,.5,.5)}setUpdateMatrix(){}setupUV(e,t){return t}generateUV(e,t){return t.build(e,"vec3")}normal(e){return AN({texture:this,uv:e})}}const wN=B(um);te("Texture3DNode",um);class bN extends gr{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}te("UserDataNode",bN);const RN=he(({base:i,blend:e})=>{const t=n=>e[n].lessThan(Zf).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return q(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),CN=he(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return q(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),LN=he(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return q(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),PN=he(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return q(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class Xt extends ct{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let r=null;return e===Xt.BURN?r=RN(s):e===Xt.DODGE?r=CN(s):e===Xt.SCREEN?r=LN(s):e===Xt.OVERLAY&&(r=PN(s)),r}}Xt.BURN="burn";Xt.DODGE="dodge";Xt.SCREEN="screen";Xt.OVERLAY="overlay";const IN=B(Xt,Xt.BURN),DN=B(Xt,Xt.DODGE),UN=B(Xt,Xt.OVERLAY),ON=B(Xt,Xt.SCREEN);O("burn",IN);O("dodge",DN);O("overlay",UN);O("screen",ON);te("BlendModeNode",Xt);const FN=he(({textureNode:i,bumpScale:e})=>{const t=s=>i.cache().context({getUV:r=>s(r.uvNode||Tn()),forceUVContext:!0}),n=Z(t(s=>s));return se(Z(t(s=>s.add(s.dFdx()))).sub(n),Z(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),zN=he(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(s),l=s.dot(a).mul(fa),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class hm extends ct{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=FN({textureNode:this.textureNode,bumpScale:e});return zN({surf_pos:rn,surf_norm:ji,dHdxy:t})}}const BN=B(hm);O("bumpMap",BN);te("BumpMapNode",hm);const VN=he(({color:i,adjustment:e})=>e.mix(Wn(i.rgb),i.rgb)),HN=he(({color:i,adjustment:e})=>{const t=Mn(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return Ft(i.rgb,n,s)}),kN=he(({color:i,adjustment:e})=>{const t=q(.57735,.57735,.57735),n=e.cos();return q(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(Ia(t,i.rgb).mul(n.oneMinus())))))});class yn extends ct{constructor(e,t,n=Z(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let r=null;return e===yn.SATURATION?r=VN(s):e===yn.VIBRANCE?r=HN(s):e===yn.HUE?r=kN(s):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}yn.SATURATION="saturation";yn.VIBRANCE="vibrance";yn.HUE="hue";const GN=B(yn,yn.SATURATION),WN=B(yn,yn.VIBRANCE),XN=B(yn,yn.HUE),qN=q(.2125,.7154,.0721),Wn=(i,e=qN)=>Ia(i,e),dm=(i,e)=>Ft(q(0),i,Wn(i).sub(e).max(0));O("saturation",GN);O("vibrance",WN);O("hue",XN);O("threshold",dm);te("ColorAdjustmentNode",yn);const YN=he(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),o=e.dFdy(),a=s.dFdx(),c=s.dFdy(),l=t,u=o.cross(l),d=l.cross(r),h=u.mul(a.x).add(d.mul(c.x)),p=u.mul(a.y).add(d.mul(c.y)),g=h.dot(h).max(p.dot(p)),_=fa.mul(g.inverseSqrt());return Mn(h.mul(n.x,_),p.mul(n.y,_),l.mul(n.z)).normalize()});class fm extends ct{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=bi}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=q(s.xy.mul(n),s.z));let r=null;return t===sf?r=dp.mul(s).normalize():t===bi&&(e.hasGeometryAttribute("tangent")===!0?r=qs.mul(s).normalize():r=YN({eye_pos:rn,surf_norm:ji,mapN:s,uv:Tn()})),r}}const $N=B(fm);O("normalMap",$N);te("NormalMapNode",fm);class pm extends ct{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const jN=B(pm);O("posterize",jN);te("PosterizeNode",pm);const KN=he(({color:i,exposure:e})=>i.mul(e).clamp()),ZN=he(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),JN=he(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),QN=he(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),eA=he(({color:i,exposure:e})=>{const t=cn(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=cn(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=QN({color:i}),i=n.mul(i),i.clamp()}),tA=cn(q(1.6605,-.1246,-.0182),q(-.5876,1.1329,-.1006),q(-.0728,-.0083,1.1187)),nA=cn(q(.6274,.0691,.0164),q(.3293,.9195,.088),q(.0433,.0113,.8956)),iA=he(([i])=>{const e=q(i).toVar(),t=q(e.mul(e)).toVar(),n=q(t.mul(t)).toVar();return Z(15.5).mul(n.mul(t)).sub(ft(40.14,n.mul(e))).add(ft(31.96,n).sub(ft(6.868,t.mul(e))).add(ft(.4298,t).add(ft(.1191,e).sub(.00232))))}),sA=he(({color:i,exposure:e})=>{const t=q(i).toVar(),n=cn(q(.856627153315983,.137318972929847,.11189821299995),q(.0951212405381588,.761241990602591,.0767994186031903),q(.0482516061458583,.101439036467562,.811302368396859)),s=cn(q(1.1271005818144368,-.1413297634984383,-.14132976349843826),q(-.11060664309660323,1.157823702216272,-.11060664309660294),q(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=Z(-12.47393),o=Z(4.026069);return t.mulAssign(e),t.assign(nA.mul(t)),t.assign(n.mul(t)),t.assign(fn(t,1e-10)),t.assign(Ca(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(ms(t,0,1)),t.assign(iA(t)),t.assign(s.mul(t)),t.assign(Ei(fn(q(0),t),q(2.2))),t.assign(tA.mul(t)),t.assign(ms(t,0,1)),t}),rA=he(({color:i,exposure:e})=>{const t=Z(.76),n=Z(.15);i=i.mul(e);const s=Ti(i.r,Ti(i.g,i.b)),r=Un(s.lessThan(.08),s.sub(ft(6.25,s.mul(s))),.04);i.subAssign(r);const o=fn(i.r,fn(i.g,i.b));Lt(o.lessThan(t),()=>i);const a=ci(1,t),c=ci(1,a.mul(a).div(o.add(a.sub(t))));i.mulAssign(c.div(o));const l=ci(1,Li(1,n.mul(o.sub(c)).add(1)));return Ft(i,q(c),l)}).setLayout({name:"NeutralToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),oA={[Vd]:KN,[Hd]:ZN,[kd]:JN,[Gd]:eA,[Wd]:sA,[Xd]:rA};class mm extends ct{constructor(e=Ln,t=cA,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===Ln)return t;const s={exposure:this.exposureNode,color:t},r=oA[n];let o=null;return r?o=r(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const aA=(i,e,t)=>ce(new mm(i,ce(e),ce(t))),cA=SN("toneMappingExposure","float");O("toneMapping",(i,e,t)=>aA(e,t,i));te("ToneMappingNode",mm);let Ic=null;class gm extends Zr{constructor(e=kr,t=null){Ic===null&&(Ic=new Ef),super(e,t,Ic)}updateReference(){return this}}const lA=B(gm);O("viewportSharedTexture",lA);te("ViewportSharedTextureNode",gm);const uA=new xe;class Vl extends xs{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class Jr extends ct{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new Yr;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const r=new Ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dr});r.texture.name="PostProcessing",r.depthTexture=s,this.renderTarget=r,this.updateBeforeType=st.FRAME,this._textureNode=ce(new Vl(this,r.texture)),this._depthTextureNode=ce(new Vl(this,s)),this._linearDepthNode=null,this._viewZNode=null,this._cameraNear=ze(0),this._cameraFar=ze(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=zp(this._depthTextureNode,e,t)}return this._viewZNode}getLinearDepthNode(){if(this._linearDepthNode===null){const e=this._cameraNear,t=this._cameraFar;this._linearDepthNode=$o(this.getViewZNode(),e,t)}return this._linearDepthNode}setup(){return this.scope===Jr.COLOR?this.getTextureNode():this.getLinearDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(uA);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=Ln,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}Jr.COLOR="color";Jr.DEPTH="depth";const za=(i,e)=>ce(new Vl(i,e));te("PassNode",Jr);const Dc=new su(-1,1,1,-1,0,1);class hA extends Bn{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt(t,2))}}const dA=new hA;class Qr extends _n{constructor(e=null){super(dA,e),this.camera=Dc}renderAsync(e){return e.renderAsync(this,Dc)}render(e){e.render(this,Dc)}}const xd=new Qr,yd=new Qr;class fA extends ct{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=se(1),this._invSize=ze(new xe),this._passDirection=ze(new xe),this._horizontalRT=new Ri,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new Ri,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=za(this,this._verticalRT.texture),this.updateBeforeType=st.RENDER,this.resolution=new xe(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=t.getRenderTarget(),o=n.value;xd.material=this._material,yd.material=this._material,this.setSize(s.image.width,s.image.height);const a=s.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),xd.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),yd.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Me();const n=t.uvNode||Tn(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=he(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,d=se(this.directionNode).mul(this._passDirection),h=Z(l[0]).toVar(),p=Me(s(n).mul(h)).toVar();for(let g=1;g<c;g++){const _=Z(g),m=Z(l[g]),f=se(d.mul(u.mul(_))).toVar(),E=Me(s(n.add(f))),x=Me(s(n.sub(f)));p.addAssign(E.add(x).mul(m)),h.addAssign(ft(2,m))}return p.div(h)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const pA=(i,e)=>ce(new fA(ce(i),e));O("gaussianBlur",pA);const Uc=new xe,Md=new Qr;class mA extends ct{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Kt(),this.damp=ze(t),this._compRT=new Ri,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new Ri,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=za(this,this._compRT.texture),this.updateBeforeType=st.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,r=n.value.type;this._compRT.texture.type=r,this._oldRT.texture.type=r,t.getDrawingBufferSize(Uc),this.setSize(Uc.x,Uc.y);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget(),l=n.value;this.textureNodeOld.value=this._oldRT.texture,t.toneMapping=Ln,t.toneMappingNode=null,t.setRenderTarget(this._compRT),Md.render(t);const u=this._oldRT;this._oldRT=this._compRT,this._compRT=u,t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c),n.value=l}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Me();const s=t.uvNode||Tn();n.uvNode=s;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=he(([u,d])=>{const h=Z(d).toVar(),p=Me(u).toVar();return fn(Eu(p.sub(h)),0)}),a=he(()=>{const u=Me(n),d=Me(r(s));return u.mulAssign(this.damp.mul(o(u,.1))),fn(d,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),Md.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const gA=(i,e)=>ce(new mA(ce(i),e));O("afterImage",gA);const Sd=new Qr;class _A extends ct{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=q(.1,0,1),this.samples=s,this.resolution=new xe(1,1),this._renderTarget=new Ri,this._renderTarget.texture.name="anamorphic",this._invSize=ze(new xe),this._textureNode=za(this,this._renderTarget.texture),this.updateBeforeType=st.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;Sd.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),Sd.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Me();const n=t.uvNode||Tn(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=he(()=>{const c=this.samples,l=Math.floor(c/2),u=q(0).toVar();return Kn({start:-l,end:l},({i:d})=>{const h=Z(d).abs().div(l).oneMinus(),p=se(n.x.add(this._invSize.x.mul(d).mul(this.scaleNode)),n.y),g=s(p),_=dm(g,this.tresholdNode).mul(h);u.addAssign(_)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const vA=(i,e=.9,t=3,n=32)=>ce(new _A(ce(i),ce(e),ce(t),n));O("anamorphic",vA);class xA extends ct{constructor(e){super(),this.textureNode=e,this.updateBeforeType=st.RENDER,this._invSize=ze(new xe)}updateBefore(){const e=this.textureNode.value;this._invSize.value.set(1/e.image.width,1/e.image.height)}setup(){const{textureNode:e}=this,t=e.uvNode||Tn(),n=o=>this.textureNode.cache().context({getUV:()=>o,forceUVContext:!0});return he(()=>{const o=this._invSize,a=cn(-1,-2,-1,0,0,0,1,2,1),c=cn(-1,0,1,-2,0,2,-1,0,1),l=Wn(n(t.add(o.mul(se(-1,-1)))).xyz),u=Wn(n(t.add(o.mul(se(-1,0)))).xyz),d=Wn(n(t.add(o.mul(se(-1,1)))).xyz),h=Wn(n(t.add(o.mul(se(0,-1)))).xyz),p=Wn(n(t.add(o.mul(se(0,0)))).xyz),g=Wn(n(t.add(o.mul(se(0,1)))).xyz),_=Wn(n(t.add(o.mul(se(1,-1)))).xyz),m=Wn(n(t.add(o.mul(se(1,0)))).xyz),f=Wn(n(t.add(o.mul(se(1,1)))).xyz),E=Mn(a[0][0].mul(l),a[1][0].mul(h),a[2][0].mul(_),a[0][1].mul(u),a[1][1].mul(p),a[2][1].mul(m),a[0][2].mul(d),a[1][2].mul(g),a[2][2].mul(f)),x=Mn(c[0][0].mul(l),c[1][0].mul(h),c[2][0].mul(_),c[0][1].mul(u),c[1][1].mul(p),c[2][1].mul(m),c[0][2].mul(d),c[1][2].mul(g),c[2][2].mul(f)),N=E.mul(E).add(x.mul(x)).sqrt();return Me(q(N),1)})()}}const yA=i=>ce(new xA(ce(i)));O("sobel",yA);class MA extends ct{constructor(e,t,n=1,s=.025,r=1){super(),this.textureNode=e,this.viewZNode=t,this.focus=ze(n),this.aperture=ze(s),this.maxblur=ze(r),this._aspect=ze(0),this.updateBeforeType=st.RENDER}updateBefore(){const e=this.textureNode.value;this._aspect.value=e.image.width/e.image.height}setup(){const{textureNode:e}=this,t=e.uvNode||Tn(),n=o=>this.textureNode.uv(o);return he(()=>{const o=se(1,this._aspect),a=this.focus.add(this.viewZNode),c=se(ms(a.mul(this.aperture),this.maxblur.negate(),this.maxblur)),l=c.mul(.9),u=c.mul(.7),d=c.mul(.4);let h=Me(0);return h=h.add(n(t)),h=h.add(n(t.add(se(0,.4).mul(o).mul(c)))),h=h.add(n(t.add(se(.15,.37).mul(o).mul(c)))),h=h.add(n(t.add(se(.29,.29).mul(o).mul(c)))),h=h.add(n(t.add(se(-.37,.15).mul(o).mul(c)))),h=h.add(n(t.add(se(.4,0).mul(o).mul(c)))),h=h.add(n(t.add(se(.37,-.15).mul(o).mul(c)))),h=h.add(n(t.add(se(.29,-.29).mul(o).mul(c)))),h=h.add(n(t.add(se(-.15,-.37).mul(o).mul(c)))),h=h.add(n(t.add(se(0,-.4).mul(o).mul(c)))),h=h.add(n(t.add(se(-.15,.37).mul(o).mul(c)))),h=h.add(n(t.add(se(-.29,.29).mul(o).mul(c)))),h=h.add(n(t.add(se(.37,.15).mul(o).mul(c)))),h=h.add(n(t.add(se(-.4,0).mul(o).mul(c)))),h=h.add(n(t.add(se(-.37,-.15).mul(o).mul(c)))),h=h.add(n(t.add(se(-.29,-.29).mul(o).mul(c)))),h=h.add(n(t.add(se(.15,-.37).mul(o).mul(c)))),h=h.add(n(t.add(se(.15,.37).mul(o).mul(l)))),h=h.add(n(t.add(se(-.37,.15).mul(o).mul(l)))),h=h.add(n(t.add(se(.37,-.15).mul(o).mul(l)))),h=h.add(n(t.add(se(-.15,-.37).mul(o).mul(l)))),h=h.add(n(t.add(se(-.15,.37).mul(o).mul(l)))),h=h.add(n(t.add(se(.37,.15).mul(o).mul(l)))),h=h.add(n(t.add(se(-.37,-.15).mul(o).mul(l)))),h=h.add(n(t.add(se(.15,-.37).mul(o).mul(l)))),h=h.add(n(t.add(se(.29,.29).mul(o).mul(u)))),h=h.add(n(t.add(se(.4,0).mul(o).mul(u)))),h=h.add(n(t.add(se(.29,-.29).mul(o).mul(u)))),h=h.add(n(t.add(se(0,-.4).mul(o).mul(u)))),h=h.add(n(t.add(se(-.29,.29).mul(o).mul(u)))),h=h.add(n(t.add(se(-.4,0).mul(o).mul(u)))),h=h.add(n(t.add(se(-.29,-.29).mul(o).mul(u)))),h=h.add(n(t.add(se(0,.4).mul(o).mul(u)))),h=h.add(n(t.add(se(.29,.29).mul(o).mul(d)))),h=h.add(n(t.add(se(.4,0).mul(o).mul(d)))),h=h.add(n(t.add(se(.29,-.29).mul(o).mul(d)))),h=h.add(n(t.add(se(0,-.4).mul(o).mul(d)))),h=h.add(n(t.add(se(-.29,.29).mul(o).mul(d)))),h=h.add(n(t.add(se(-.4,0).mul(o).mul(d)))),h=h.add(n(t.add(se(-.29,-.29).mul(o).mul(d)))),h=h.add(n(t.add(se(0,.4).mul(o).mul(d)))),h=h.div(41),h.a=1,Me(h)})()}}const SA=(i,e,t,n,s)=>ce(new MA(ce(i),ce(e),t,n,s));O("dof",SA);const Td=new Qr;class TA extends ct{constructor(e,t=new xe(.5,.5),n=1.57,s=1){super("vec4"),this.colorNode=e,this.center=ze(t),this.angle=ze(n),this.scale=ze(s),this._renderTarget=new Ri,this._renderTarget.texture.name="dotScreen",this._size=ze(new xe),this._textureNode=za(this,this._renderTarget.texture),this.updateBeforeType=st.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._size.value.set(e,t),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.colorNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;Td.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),Td.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.colorNode,n=he(()=>{const a=Cn(this.angle),c=ni(this.angle),l=Tn().mul(this._size).sub(this.center),u=se(c.mul(l.x).sub(a.mul(l.y)),a.mul(l.x).add(c.mul(l.y))).mul(this.scale);return Cn(u.x).mul(Cn(u.y)).mul(4)}),s=he(()=>{const a=t,c=Mn(a.r,a.g,a.b).div(3);return Me(q(c.mul(10).sub(5).add(n())),a.a)}),r=this._material||(this._material=e.createNodeMaterial());r.fragmentNode=s();const o=e.getNodeProperties(this);return o.textureNode=t,this._textureNode}}const EA=(i,e,t,n)=>ce(new TA(ce(i),e,t,n));O("dotScreen",EA);class NA extends ct{constructor(e,t=.005,n=0){super("vec4"),this.textureNode=e,this.amount=ze(t),this.angle=ze(n),this.updateBeforeType=st.RENDER}updateBefore(){}setup(){const{textureNode:e}=this,t=e.uvNode||Tn(),n=r=>this.textureNode.uv(r);return he(()=>{const r=se(ni(this.angle),Cn(this.angle)).mul(this.amount),o=n(t.add(r)),a=n(t),c=n(t.sub(r));return Me(o.r,a.g,c.b,a.a)})()}}const AA=(i,e,t)=>ce(new NA(ce(i),e,t));O("rgbShift",AA);class _m extends ct{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const c=s[a],l=r[a];t.push(l.build(e,c.type))}else for(const a of s){const c=r[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const wA=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?js(e):ba(e[0]),ce(new _m(ce(i),e)));O("call",wA);te("FunctionCallNode",_m);class vm extends Ie{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new Pi,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:Z()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=Pf(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=If(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const jo=B(vm);O("scriptableValue",jo);te("ScriptableValueNode",vm);class xm extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class bA{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const Oc=new xm;class ym extends Ie{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new xm,this._output=jo(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=jo(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=jo(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new bA(this),s=Oc.get("THREE"),r=Oc.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,Oc,e,t,s,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:Z()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=s+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const RA=B(ym);O("scriptable",RA);te("ScriptableNode",ym);class Ba extends Ie{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||rn.z).negate()}setup(){return this.factorNode}}const CA=B(Ba);O("fog",CA);te("FogNode",Ba);class Mm extends Ba{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return li(this.nearNode,this.farNode,t)}}const LA=B(Mm);O("rangeFog",LA);te("FogRangeNode",Mm);class Sm extends Ba{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const PA=B(Sm);O("densityFog",PA);te("FogExp2Node",Sm);let rs=null,os=null;class Tm extends Ie{constructor(e=Z(),t=Z()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(Xi(this.minNode.value)),n=e.getTypeLength(Xi(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.count>1?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.count>1){const s=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(Xi(s)),a=e.getTypeLength(Xi(r));rs=rs||new nt,os=os||new nt,rs.setScalar(0),os.setScalar(0),o===1?rs.setScalar(s):s.isColor?rs.set(s.r,s.g,s.b):rs.set(s.x,s.y,s.z||0,s.w||0),a===1?os.setScalar(r):r.isColor?os.set(r.r,r.g,r.b):os.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let h=0;h<l;h++){const p=h%c,g=rs.getComponent(p),_=os.getComponent(p);u[h]=Ql.lerp(g,_,Math.random())}const d=this.getNodeType(e);if(t.count<=4096)n=Nu(u,"vec4",t.count).element(vu).convert(d);else{const h=new Sf(u,4);e.geometry.setAttribute("__range"+this.id,h),n=Pl(h).convert(d)}}else n=Z(0);return n}}B(Tm);te("RangeNode",Tm);class Em extends Ie{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=st.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const IA=(i,e,t)=>ce(new Em(ce(i),e,t));O("compute",IA);te("ComputeNode",Em);class _s extends Ie{constructor(e=_s.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===_s.TARGET_DIRECTION&&(n=_r.transformDirection(Rl(t).sub(Rl(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}_s.TARGET_DIRECTION="targetDirection";const Nm=B(_s,_s.TARGET_DIRECTION);te("LightNode",_s);const Am=he(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class wm extends Zi{constructor(e=null){super(e),this.cutoffDistanceNode=ze(0),this.decayExponentNode=ze(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:r}=this,o=e.context.lightingModel,a=Au(r).sub(rn),c=a.normalize(),l=a.length(),u=Am({lightDistance:l,cutoffDistance:n,decayExponent:s}),d=t.mul(u),h=e.context.reflectedLight;o.direct({lightDirection:c,lightColor:d,reflectedLight:h,shadowMask:this.shadowMaskNode},e.stack,e)}}te("PointLightNode",wm);Ms(OM,wm);class bm extends Zi{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=Nm(this.light),r=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:r,shadowMask:this.shadowMaskNode},e.stack,e)}}te("DirectionalLightNode",bm);Ms(bf,bm);const Fc=new vt,Do=new vt;let Uo,zc;class Rm extends Zi{constructor(e=null){super(e),this.halfHeight=ze(new L),this.halfWidth=ze(new L)}update(e){super.update(e);const{light:t}=this,n=e.camera.matrixWorldInverse;Do.identity(),Fc.copy(t.matrixWorld),Fc.premultiply(n),Do.extractRotation(Fc),this.halfWidth.value.set(t.width*.5,0,0),this.halfHeight.value.set(0,t.height*.5,0),this.halfWidth.value.applyMatrix4(Do),this.halfHeight.value.applyMatrix4(Do)}setup(e){super.setup(e),Uo===void 0&&(e.isAvailable("float32Filterable")?(Uo=Kt(pe.LTC_FLOAT_1),zc=Kt(pe.LTC_FLOAT_2)):(Uo=Kt(pe.LTC_HALF_1),zc=Kt(pe.LTC_HALF_2)));const{colorNode:t,light:n}=this,s=e.context.lightingModel,r=Au(n),o=e.context.reflectedLight;s.directRectArea({lightColor:t,lightPosition:r,halfWidth:this.halfWidth,halfHeight:this.halfHeight,reflectedLight:o,ltc_1:Uo,ltc_2:zc},e.stack,e)}}te("RectAreaLightNode",Rm);Ms(zM,Rm);class Cu extends Zi{constructor(e=null){super(e),this.coneCosNode=ze(0),this.penumbraCosNode=ze(0),this.cutoffDistanceNode=ze(0),this.decayExponentNode=ze(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return li(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:r,light:o}=this,a=Au(o).sub(rn),c=a.normalize(),l=c.dot(Nm(o)),u=this.getSpotAttenuation(l),d=a.length(),h=Am({lightDistance:d,cutoffDistance:s,decayExponent:r}),p=n.mul(u).mul(h),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:p,reflectedLight:g,shadowMask:this.shadowMaskNode},e.stack,e)}}te("SpotLightNode",Cu);Ms(wf,Cu);class Cm extends Cu{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=Kt(t,se(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}te("IESSpotLightNode",Cm);Ms(GM,Cm);class Lm extends Zi{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}te("AmbientLightNode",Lm);Ms(Rf,Lm);class Pm extends Zi{constructor(e=null){super(e),this.lightPositionNode=Rl(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=ze(new Ue)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,o=ji.dot(s).mul(.5).add(.5),a=Ft(n,t,o);e.context.irradiance.addAssign(a)}}te("HemisphereLightNode",Pm);Ms(IM,Pm);const DA=he(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class Im extends ct{constructor(e=Tn()){super("float"),this.uvNode=e}setup(){return DA({uv:this.uvNode})}}const UA=B(Im);O("checker",UA);te("CheckerNode",Im);const OA=new Tf;class FA extends ln{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(OA),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=he(()=>{Ot(se(),"vUv").assign(Tn());const n=nn("instancePosition"),s=Et("vec4","mvPos");s.assign(gs.mul(Me(n,1)));const r=er.z.div(er.w),o=si.mul(s),a=Et("vec2","offset");return a.assign(dn.xy),a.assign(a.mul(EE)),a.assign(a.div(er.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(Me(a,0,0))),o})(),this.fragmentNode=he(()=>{const n=Ot(se(),"vUv"),s=Et("float","alpha");s.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const l=Et("float","dlen");l.assign(a.fwidth()),s.assign(li(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=nn("instanceColor").mul(Hr):c=Hr,Me(c,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}qt("InstancedPointsNodeMaterial",FA);const zA=new Ta;class BA extends ln{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(zA),this.setValues(e)}}qt("LineBasicNodeMaterial",BA);const VA=new Af;class HA extends ln{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(VA),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?Z(this.dashScaleNode):Cl,n=this.dashSizeNode?Z(this.dashSizeNode):mp,s=this.dashSizeNode?Z(this.dashGapNode):gp;Js.assign(n),ca.assign(s);const r=Ot(nn("lineDistance").mul(t));(e?r.add(e):r).mod(Js.add(ca)).greaterThan(Js).discard()}}qt("LineDashedNodeMaterial",HA);const kA=new Af;class GA extends ln{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(kA),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,r=he(({start:a,end:c})=>{const l=si.element(2).element(2),h=si.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Me(Ft(a.xyz,c.xyz,h),c.w)});this.vertexNode=he(()=>{ei("vec2","vUv").assign(Tn());const a=nn("instanceStart"),c=nn("instanceEnd"),l=Et("vec4","start"),u=Et("vec4","end");l.assign(gs.mul(Me(a,1))),u.assign(gs.mul(Me(c,1))),s&&(ei("vec3","worldStart").assign(l.xyz),ei("vec3","worldEnd").assign(u.xyz));const d=er.z.div(er.w),h=si.element(2).element(3).equal(-1);Lt(h,()=>{Lt(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const p=si.mul(l),g=si.mul(u),_=p.xyz.div(p.w),m=g.xyz.div(g.w),f=m.xy.sub(_.xy).temp();f.x.assign(f.x.mul(d)),f.assign(f.normalize());const E=sa(Me());if(s){const x=u.xyz.sub(l.xyz).normalize(),N=Ft(l.xyz,u.xyz,.5).normalize(),D=x.cross(N).normalize(),b=x.cross(D),A=ei("vec4","worldPos");A.assign(dn.y.lessThan(.5).cond(l,u));const P=Sc.mul(.5);A.addAssign(Me(dn.x.lessThan(0).cond(D.mul(P),D.mul(P).negate()),0)),n||(A.addAssign(Me(dn.y.lessThan(.5).cond(x.mul(P).negate(),x.mul(P)),0)),A.addAssign(Me(b.mul(P),0)),Lt(dn.y.greaterThan(1).or(dn.y.lessThan(0)),()=>{A.subAssign(Me(b.mul(2).mul(P),0))})),E.assign(si.mul(A));const T=sa(q());T.assign(dn.y.lessThan(.5).cond(_,m)),E.z.assign(T.z.mul(E.w))}else{const x=Et("vec2","offset");x.assign(se(f.y,f.x.negate())),f.x.assign(f.x.div(d)),x.x.assign(x.x.div(d)),x.assign(dn.x.lessThan(0).cond(x.negate(),x)),Lt(dn.y.lessThan(0),()=>{x.assign(x.sub(f))}).elseif(dn.y.greaterThan(1),()=>{x.assign(x.add(f))}),x.assign(x.mul(Sc)),x.assign(x.div(er.w)),E.assign(dn.y.lessThan(.5).cond(p,g)),x.assign(x.mul(E.w)),E.assign(E.add(Me(x,0,0)))}return E})();const o=he(({p1:a,p2:c,p3:l,p4:u})=>{const d=a.sub(l),h=u.sub(l),p=c.sub(a),g=d.dot(h),_=h.dot(p),m=d.dot(p),f=h.dot(h),x=p.dot(p).mul(f).sub(_.mul(_)),D=g.mul(_).sub(m.mul(f)).div(x).clamp(),b=g.add(_.mul(D)).div(f).clamp();return se(D,b)});this.fragmentNode=he(()=>{const a=ei("vec2","vUv");if(n){const u=this.offsetNode?Z(this.offsetNodeNode):id,d=this.dashScaleNode?Z(this.dashScaleNode):Cl,h=this.dashSizeNode?Z(this.dashSizeNode):mp,p=this.dashSizeNode?Z(this.dashGapNode):gp;Js.assign(h),ca.assign(p);const g=nn("instanceDistanceStart"),_=nn("instanceDistanceEnd"),m=dn.y.lessThan(.5).cond(d.mul(g),Cl.mul(_)),f=Ot(m.add(id)),E=u?f.add(u):f;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),E.mod(Js.add(ca)).greaterThan(Js).discard()}const c=Et("float","alpha");if(c.assign(1),s){const u=ei("vec3","worldStart"),d=ei("vec3","worldEnd"),h=ei("vec4","worldPos").xyz.normalize().mul(1e5),p=d.sub(u),g=o({p1:u,p2:d,p3:q(0,0,0),p4:h}),_=u.add(p.mul(g.x)),m=h.mul(g.y),x=_.sub(m).length().div(Sc);if(!n)if(e){const N=x.fwidth();c.assign(li(N.negate().add(.5),N.add(.5),x).oneMinus())}else x.greaterThan(.5).discard()}else if(e){const u=a.x,d=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),h=u.mul(u).add(d.mul(d)),p=Et("float","dlen");p.assign(h.fwidth()),Lt(a.y.abs().greaterThan(1),()=>{c.assign(li(p.oneMinus(),p.add(1),h).oneMinus())})}else Lt(a.y.abs().greaterThan(1),()=>{const u=a.x,d=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(d.mul(d)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=nn("instanceColorStart"),d=nn("instanceColorEnd");l=dn.y.lessThan(.5).cond(u,d).mul(Hr)}else l=Hr;return Me(l,c)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}qt("Line2NodeMaterial",GA);const WA=new wM;class XA extends ln{constructor(e){super(),this.lights=!1,this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(WA),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?Z(this.opacityNode):pp;_t.assign(Me(Zp(Rt),e))}}qt("MeshNormalNodeMaterial",XA);const qA=new ya;class YA extends ln{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(qA),this.setValues(e)}}qt("MeshBasicNodeMaterial",YA);const Gr=he(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),lr=he(i=>i.diffuseColor.mul(1/Math.PI)),$A=()=>Z(.25),jA=he(({dotNH:i})=>Nl.mul(Z(.5)).add(1).mul(Z(1/Math.PI)).mul(i.pow(Nl))),KA=he(({lightDirection:i})=>{const e=i.add(Tt).normalize(),t=Rt.dot(e).clamp(),n=Tt.dot(e).clamp(),s=Gr({f0:Rn,f90:1,dotVH:n}),r=$A(),o=jA({dotNH:t});return s.mul(r).mul(o)});class Dm extends Ra{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Rt.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(lr({diffuseColor:_t.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(KA({lightDirection:e})).mul(rE))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(lr({diffuseColor:_t})))}}const ZA=new bM;class JA extends ln{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(ZA),this.setValues(e)}setupLightingModel(){return new Dm(!1)}}qt("MeshLambertNodeMaterial",JA);const QA=new Nf;class ew extends ln{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(QA),this.setValues(e)}setupLightingModel(){return new Dm}setupVariants(){const e=(this.shininessNode?Z(this.shininessNode):tE).max(1e-4);Nl.assign(e);const t=this.specularNode||iE;Rn.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}qt("MeshPhongNodeMaterial",ew);const tw=he(()=>{const i=ua.dFdx().abs().max(ua.dFdy().abs());return i.x.max(i.y).max(i.z)}),Um=he(i=>{const{roughness:e}=i,t=tw();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),nw=he(({alpha:i,dotNL:e,dotNV:t})=>{const n=i.pow2(),s=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),r=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return Li(.5,s.add(r).max(Zf))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),iw=he(({alphaT:i,alphaB:e,dotTV:t,dotBV:n,dotTL:s,dotBL:r,dotNV:o,dotNL:a})=>{const c=a.mul(q(i.mul(t),e.mul(n),o).length()),l=o.mul(q(i.mul(s),e.mul(r),a).length());return Li(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),sw=he(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),rw=Z(1/Math.PI),ow=he(({alphaT:i,alphaB:e,dotNH:t,dotTH:n,dotBH:s})=>{const r=i.mul(e),o=q(e.mul(n),i.mul(s),r.mul(t)),a=o.dot(o),c=r.div(a);return rw.mul(r.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),Ed=he(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=i,c=i.normalView||Rt,l=s.pow2(),u=e.add(Tt).normalize(),d=c.dot(e).clamp(),h=c.dot(Tt).clamp(),p=c.dot(u).clamp(),g=Tt.dot(u).clamp();let _=Gr({f0:t,f90:n,dotVH:g}),m,f;if(Zh(o)&&(_=yu.mix(_,r)),Zh(a)){const E=qo.dot(e),x=qo.dot(Tt),N=qo.dot(u),D=Zs.dot(e),b=Zs.dot(Tt),A=Zs.dot(u);m=iw({alphaT:El,alphaB:l,dotTV:x,dotBV:b,dotTL:E,dotBL:D,dotNV:h,dotNL:d}),f=ow({alphaT:El,alphaB:l,dotNH:p,dotTH:N,dotBH:A})}else m=nw({alpha:l,dotNL:d,dotNV:h}),f=sw({alpha:l,dotNH:p});return _.mul(m).mul(f)}),Om=he(({roughness:i,dotNV:e})=>{const t=Me(-1,-.0275,-.572,.022),n=Me(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return se(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),Fm=he(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,r=Om({dotNV:e,roughness:s});return t.mul(r.x).add(n.mul(r.y))}),aw=he(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(q(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),cw=he(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=Z(1).div(t),r=e.pow2().oneMinus().max(.0078125);return Z(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),lw=he(({dotNV:i,dotNL:e})=>Z(1).div(Z(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),uw=he(({lightDirection:i})=>{const e=i.add(Tt).normalize(),t=Rt.dot(i).clamp(),n=Rt.dot(Tt).clamp(),s=Rt.dot(e).clamp(),r=cw({roughness:xu,dotNH:s}),o=lw({dotNV:n,dotNL:t});return Ws.mul(r).mul(o)}),hw=he(({N:i,V:e,roughness:t})=>{const r=.0078125,o=i.dot(e).saturate(),a=se(t,o.oneMinus().sqrt());return a.assign(a.mul(.984375).add(r)),a}).setLayout({name:"LTC_Uv",type:"vec2",inputs:[{name:"N",type:"vec3"},{name:"V",type:"vec3"},{name:"roughness",type:"float"}]}),dw=he(({f:i})=>{const e=i.length();return fn(e.mul(e).add(i.z).div(e.add(1)),0)}).setLayout({name:"LTC_ClippedSphereFormFactor",type:"float",inputs:[{name:"f",type:"vec3"}]}),Oo=he(({v1:i,v2:e})=>{const t=i.dot(e),n=t.abs().toVar(),s=n.mul(.0145206).add(.4965155).mul(n).add(.8543985).toVar(),r=n.add(4.1616724).mul(n).add(3.417594).toVar(),o=s.div(r),a=t.greaterThan(0).cond(o,fn(t.mul(t).oneMinus(),1e-7).inverseSqrt().mul(.5).sub(o));return i.cross(e).mul(a)}).setLayout({name:"LTC_EdgeVectorFormFactor",type:"vec3",inputs:[{name:"v1",type:"vec3"},{name:"v2",type:"vec3"}]}),Nd=he(({N:i,V:e,P:t,mInv:n,p0:s,p1:r,p2:o,p3:a})=>{const c=r.sub(s).toVar(),l=a.sub(s).toVar(),u=c.cross(l),d=q().toVar();return Lt(u.dot(t.sub(s)).greaterThanEqual(0),()=>{const h=e.sub(i.mul(e.dot(i))).normalize(),p=i.cross(h).negate(),g=n.mul(cn(h,p,i).transpose()).toVar(),_=g.mul(s.sub(t)).normalize().toVar(),m=g.mul(r.sub(t)).normalize().toVar(),f=g.mul(o.sub(t)).normalize().toVar(),E=g.mul(a.sub(t)).normalize().toVar(),x=q(0).toVar();x.addAssign(Oo({v1:_,v2:m})),x.addAssign(Oo({v1:m,v2:f})),x.addAssign(Oo({v1:f,v2:E})),x.addAssign(Oo({v1:E,v2:_})),d.assign(q(dw({f:x})))}),d}).setLayout({name:"LTC_Evaluate",type:"vec3",inputs:[{name:"N",type:"vec3"},{name:"V",type:"vec3"},{name:"P",type:"vec3"},{name:"mInv",type:"mat3"},{name:"p0",type:"vec3"},{name:"p1",type:"vec3"},{name:"p2",type:"vec3"},{name:"p3",type:"vec3"}]}),Ad=he(([i,e,t,n,s])=>{const r=q(sp(e.negate(),Br(i),Li(1,n))),o=q(Qs(s[0].xyz),Qs(s[1].xyz),Qs(s[2].xyz));return Br(r).mul(t.mul(o))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),fw=he(([i,e])=>i.mul(ms(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),pw=Up(),wd=he(([i,e,t])=>{const n=pw.uv(i),s=Ca(Z(Ul.x)).mul(fw(e,t));return n.bicubic(s)}),bd=he(([i,e,t])=>(Lt(t.notEqual(0),()=>{const n=ep(e).negate().div(t);return Qf(n.negate().mul(i))}),q(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),mw=he(([i,e,t,n,s,r,o,a,c,l,u,d,h,p,g])=>{let _,m;if(g){_=Me().toVar(),m=q().toVar();const D=u.sub(1).mul(g.mul(.025)),b=q(u.sub(D),u,u.add(D));Kn({start:0,end:3},({i:A})=>{const P=b.element(A),T=Ad(i,e,d,P,a),M=o.add(T),C=l.mul(c.mul(Me(M,1))),G=se(C.xy.div(C.w)).toVar();G.addAssign(1),G.divAssign(2),G.assign(se(G.x,G.y.oneMinus()));const H=wd(G,t,P);_.element(A).assign(H.element(A)),_.a.addAssign(H.a),m.element(A).assign(n.element(A).mul(bd(Qs(T),h,p).element(A)))}),_.a.divAssign(3)}else{const D=Ad(i,e,d,u,a),b=o.add(D),A=l.mul(c.mul(Me(b,1))),P=se(A.xy.div(A.w)).toVar();P.addAssign(1),P.divAssign(2),P.assign(se(P.x,P.y.oneMinus())),_=wd(P,t,u),m=n.mul(bd(Qs(D),h,p))}const f=m.rgb.mul(_.rgb),E=i.dot(e).clamp(),x=q(Fm({dotNV:E,specularColor:s,specularF90:r,roughness:t})),N=m.r.add(m.g,m.b).div(3);return Me(x.oneMinus().mul(f),_.a.oneMinus().mul(N).oneMinus())}),gw=cn(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),_w=i=>{const e=i.sqrt();return q(1).add(e).div(q(1).sub(e))},Rd=(i,e)=>i.sub(e).div(i.add(e)).pow2(),vw=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=q(54856e-17,44201e-17,52481e-17),s=q(1681e3,1795300,2208400),r=q(43278e5,93046e5,66121e5),o=Z(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=q(a.x.add(o),a.y,a.z).div(10685e-11),gw.mul(a)},xw=he(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const r=Ft(i,e,li(0,.03,n)),o=i.div(r).pow2().mul(Z(1).sub(t.pow2())),c=Z(1).sub(o).sqrt(),l=Rd(r,i),u=Gr({f0:l,f90:1,dotVH:t}),d=u.oneMinus(),h=r.lessThan(i).cond(Math.PI,0),p=Z(Math.PI).sub(h),g=_w(s.clamp(0,.9999)),_=Rd(g,r.toVec3()),m=Gr({f0:_,f90:1,dotVH:c}),f=q(g.x.lessThan(r).cond(Math.PI,0),g.y.lessThan(r).cond(Math.PI,0),g.z.lessThan(r).cond(Math.PI,0)),E=r.mul(n,c,2),x=q(p).add(f),N=u.mul(m).clamp(1e-5,.9999),D=N.sqrt(),b=d.pow2().mul(m).div(q(1).sub(N));let P=u.add(b),T=b.sub(d);for(let M=1;M<=2;++M){T=T.mul(D);const C=vw(Z(M).mul(E),Z(M).mul(x)).mul(2);P=P.add(T.mul(C))}return P.max(q(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),yw=he(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),r=Un(t.lessThan(.25),Z(-339.2).mul(s).add(Z(161.4).mul(t)).sub(25.9),Z(-8.48).mul(s).add(Z(14.3).mul(t)).sub(9.95)),o=Un(t.lessThan(.25),Z(44).mul(s).sub(Z(23.7).mul(t)).add(3.26),Z(1.97).mul(s).sub(Z(3.27).mul(t)).add(.72));return Un(t.lessThan(.25),0,Z(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),Bc=q(.04),Vc=Z(1);class Lu extends Ra{constructor(e=!1,t=!1,n=!1,s=!1,r=!1,o=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=s,this.transmission=r,this.dispersion=o,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=q().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=q().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=q().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=q().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=q().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=Rt.dot(Tt).clamp();this.iridescenceFresnel=xw({outsideIOR:Z(1),eta2:Wf,cosTheta1:t,thinFilmThickness:Xf,baseF0:Rn}),this.iridescenceF0=aw({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=Ll,n=hp.sub(Ll).normalize(),s=fp;e.backdrop=mw(s,n,Si,_t,Rn,aa,t,Vr,_r,si,Yo,qf,$f,Yf,this.dispersion?jf:null),e.backdropAlpha=Al,_t.a.mulAssign(Ft(1,e.backdrop.a,Al))}}computeMultiscattering(e,t,n){const s=Rt.dot(Tt).clamp(),r=Om({roughness:Si,dotNV:s}),a=(this.iridescenceF0?yu.mix(Rn,this.iridescenceF0):Rn).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=Rn.add(Rn.oneMinus().mul(.047619)),d=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(d.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Rt.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(uw({lightDirection:e}))),this.clearcoat===!0){const a=Xs.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(Ed({lightDirection:e,f0:Bc,f90:Vc,roughness:oa,normalView:Xs})))}n.directDiffuse.addAssign(r.mul(lr({diffuseColor:_t.rgb}))),n.directSpecular.addAssign(r.mul(Ed({lightDirection:e,f0:Rn,f90:1,roughness:Si,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}directRectArea({lightColor:e,lightPosition:t,halfWidth:n,halfHeight:s,reflectedLight:r,ltc_1:o,ltc_2:a}){const c=t.add(n).sub(s),l=t.sub(n).sub(s),u=t.sub(n).add(s),d=t.add(n).add(s),h=Rt,p=Tt,g=rn.toVar(),_=hw({N:h,V:p,roughness:Si}),m=o.uv(_).toVar(),f=a.uv(_).toVar(),E=cn(q(m.x,0,m.y),q(0,1,0),q(m.z,0,m.w)).toVar(),x=Rn.mul(f.x).add(Rn.oneMinus().mul(f.y)).toVar();r.directSpecular.addAssign(e.mul(x).mul(Nd({N:h,V:p,P:g,mInv:E,p0:c,p1:l,p2:u,p3:d}))),r.directDiffuse.addAssign(e.mul(_t).mul(Nd({N:h,V:p,P:g,mInv:cn(1,0,0,0,1,0,0,0,1),p0:c,p1:l,p2:u,p3:d})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(lr({diffuseColor:_t})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(Ws,yw({normal:Rt,viewDir:Tt,roughness:xu}))),this.clearcoat===!0){const l=Xs.dot(Tt).clamp(),u=Fm({dotNV:l,specularColor:Bc,specularF90:Vc,roughness:oa});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=q().temp("singleScattering"),r=q().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(s,r,aa);const a=s.add(r),c=_t.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=Rt.dot(Tt).clamp().add(e),r=Si.mul(-16).oneMinus().negate().exp2(),o=e.sub(s.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=Xs.dot(Tt).clamp(),s=Gr({dotVH:n,f0:Bc,f90:Vc}),r=t.mul(Tl.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(Tl));t.assign(r)}if(this.sheen===!0){const n=Ws.r.max(Ws.g).max(Ws.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const Mw=new cu;class zm extends ln{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(Mw),this.setValues(e)}setupLightingModel(){return new Lu}setupSpecular(){const e=Ft(q(.04),_t.rgb,ra);Rn.assign(e),aa.assign(1)}setupVariants(){const e=this.metalnessNode?Z(this.metalnessNode):aE;ra.assign(e);let t=this.roughnessNode?Z(this.roughnessNode):oE;t=Um({roughness:t}),Si.assign(t),this.setupSpecular(),_t.assign(Me(_t.rgb.mul(e.oneMinus()),_t.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}qt("MeshStandardNodeMaterial",zm);const Sw=new NM;class Bm extends zm{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.dispersionNode=null,this.anisotropyNode=null,this.setDefaultValues(Sw),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}get useDispersion(){return this.dispersion>0||this.dispersionNode!==null}setupSpecular(){const e=this.iorNode?Z(this.iorNode):ME;Yo.assign(e),Rn.assign(Ft(Ti(ip(Yo.sub(1).div(Yo.add(1))).mul(sE),q(1)).mul(nd),_t.rgb,ra)),aa.assign(Ft(nd,1,ra))}setupLightingModel(){return new Lu(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission,this.useDispersion)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?Z(this.clearcoatNode):lE,n=this.clearcoatRoughnessNode?Z(this.clearcoatRoughnessNode):uE;Tl.assign(t),oa.assign(Um({roughness:n}))}if(this.useSheen){const t=this.sheenNode?q(this.sheenNode):fE,n=this.sheenRoughnessNode?Z(this.sheenRoughnessNode):pE;Ws.assign(t),xu.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?Z(this.iridescenceNode):gE,n=this.iridescenceIORNode?Z(this.iridescenceIORNode):_E,s=this.iridescenceThicknessNode?Z(this.iridescenceThicknessNode):vE;yu.assign(t),Wf.assign(n),Xf.assign(s)}if(this.useAnisotropy){const t=(this.anisotropyNode?se(this.anisotropyNode):mE).toVar();cs.assign(t.length()),Lt(cs.equal(0),()=>{t.assign(se(1,0))}).else(()=>{t.divAssign(se(cs)),cs.assign(cs.saturate())}),El.assign(cs.pow2().mix(Si.pow2(),1)),qo.assign(qs[0].mul(t.x).add(qs[1].mul(t.y))),Zs.assign(qs[1].mul(t.x).sub(qs[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?Z(this.transmissionNode):xE,n=this.thicknessNode?Z(this.thicknessNode):yE,s=this.attenuationDistanceNode?Z(this.attenuationDistanceNode):SE,r=this.attenuationColorNode?q(this.attenuationColorNode):TE;if(Al.assign(t),qf.assign(n),Yf.assign(s),$f.assign(r),this.useDispersion){const o=this.dispersionNode?Z(this.dispersionNode):NE;jf.assign(o)}}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?q(this.clearcoatNormalNode):hE;Xs.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.dispersionNode=e.dispersionNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}qt("MeshPhysicalNodeMaterial",Bm);class Tw extends Lu{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:d,thicknessScaleNode:h}=o,p=e.add(Rt.mul(c)).normalize(),g=Z(Tt.dot(p.negate()).saturate().pow(d).mul(h)),_=q(g.add(l).mul(a));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r)}}class Ew extends Bm{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=Z(.1),this.thicknessAmbientNode=Z(0),this.thicknessAttenuationNode=Z(.1),this.thicknessPowerNode=Z(2),this.thicknessScaleNode=Z(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new Tw(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}qt("MeshSSSNodeMaterial",Ew);const Nw=he(({normal:i,lightDirection:e,builder:t})=>{const n=i.dot(e),s=se(n.mul(.5).add(.5),0);if(t.material.gradientMap){const r=Ni("gradientMap","texture").context({getUV:()=>s});return q(r.r)}else{const r=s.fwidth().mul(.5);return Ft(q(.7),q(1),li(Z(.7).sub(r.x),Z(.7).add(r.x),s.x))}});class Aw extends Ra{direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){const o=Nw({normal:ua,lightDirection:e,builder:r}).mul(t);n.directDiffuse.addAssign(o.mul(lr({diffuseColor:_t.rgb})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(lr({diffuseColor:_t})))}}const ww=new AM;class bw extends ln{constructor(e){super(),this.isMeshToonNodeMaterial=!0,this.lights=!0,this.setDefaultValues(ww),this.setValues(e)}setupLightingModel(){return new Aw}}qt("MeshToonNodeMaterial",bw);const Rw=new RM;class Cw extends ln{constructor(e){super(),this.lights=!1,this.isMeshMatcapNodeMaterial=!0,this.setDefaultValues(Rw),this.setValues(e)}setupVariants(e){const t=dN;let n;e.material.matcap?n=Ni("matcap","texture").context({getUV:()=>t}):n=q(Ft(.2,.8,t.y)),_t.rgb.mulAssign(n.rgb)}}qt("MeshMatcapNodeMaterial",Cw);const Lw=new Tf;class Pw extends ln{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(Lw),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}qt("PointsNodeMaterial",Pw);const Iw=new SM;class Dw extends ln{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(Iw),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:r}=this,o=Jt;let a=gs.mul(q(n||0)),c=se(Vr[0].xyz.length(),Vr[1].xyz.length());r!==null&&(c=c.mul(r));let l=o.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(ze(e.center).sub(.5))),l=l.mul(c);const u=Z(s||dE),d=l.rotate(u);a=Me(a.xy.add(d),a.zw);const h=si.mul(a);return t.vertex=o,h}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}qt("SpriteNodeMaterial",Dw);class Uw extends Ra{constructor(){super(),this.shadowNode=Z(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){_t.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(_t.rgb)}}const Ow=new EM;class Fw extends ln{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(Ow),this.setValues(e)}setupLightingModel(){return new Uw}}qt("ShadowNodeMaterial",Fw);class zw extends ln{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.isVolumeNodeMaterial=!0,this.testNode=null,this.setValues(e)}setup(e){const t=wN(this.map,null,0),n=he(({orig:s,dir:r})=>{const o=q(-.5),a=q(.5),c=r.reciprocal(),l=o.sub(s).mul(c),u=a.sub(s).mul(c),d=Ti(l,u),h=fn(l,u),p=fn(d.x,fn(d.y,d.z)),g=Ti(h.x,Ti(h.y,h.z));return se(p,g)});this.fragmentNode=he(()=>{const s=Ot(q(JT.mul(Me(hp,1)))),o=Ot(dn.sub(s)).normalize(),a=Et("vec2","bounds").assign(n({orig:s,dir:o}));a.x.greaterThan(a.y).discard(),a.assign(se(fn(a.x,0),a.y));const c=Et("vec3","p").assign(s.add(a.x.mul(o))),l=Et("vec3","inc").assign(q(o.abs().reciprocal())),u=Et("float","delta").assign(Ti(l.x,Ti(l.y,l.z)));u.divAssign(Ni("steps","float"));const d=Et("vec4","ac").assign(Me(Ni("base","color"),0));return Kn({type:"float",start:a.x,end:a.y,update:"+= delta"},()=>{const h=Et("float","d").assign(t.uv(c.add(.5)).r);this.testNode!==null?this.testNode({map:t,mapValue:h,probe:c,finalColor:d}).append():(d.a.assign(1),Np()),c.addAssign(o.mul(u))}),d.a.equal(0).discard(),Me(d)})(),super.setup(e)}}qt("VolumeNodeMaterial",zw);const Ii=new MM,ur=new gn(10,window.innerWidth/window.innerHeight,.1,1e3),vr=new yM({canvas:document.querySelector("#bg"),antialias:!0});vr.setPixelRatio(window.devicePixelRatio);vr.setSize(window.innerWidth,window.innerHeight);vr.shadowMapSoft=!0;ur.position.setZ(30);const Bw=new $r(10,100,100,0,Math.PI*2,0,Math.PI),Vw=new jr().load(WM),Hw=new jr().load(XM),kw=new jr().load(qM),Gw=new jr().load(YM),Ww=new Nf({map:Vw,envMap:Gw,bumpMap:Hw,bumpScale:100,specularMap:kw,shininess:100,reflectivity:-1,polygonOffset:!0,polygonOffsetFactor:2e4,precision:"highp"}),Vm=new _n(Bw,Ww);Ii.add(Vm);const Hm={cameraPosition:{value:new L}},Xw=new $r(10,100,100,0,Math.PI*2,0,Math.PI),Pu=new Ci({fragmentShader:$M,vertexShader:jM,transparent:!0,uniforms:Hm,polygonOffset:!0,polygonOffsetFactor:-2e4});Pu.uniforms.uTime={value:0};Pu.uniforms.uRadius={value:.5};const qw=new _n(Xw,Pu);Ii.add(qw);const Yw=new $r(10,100,100,0,Math.PI*2,0,Math.PI),$w=new jr().load(KM),jw=new cu({color:16777215,alphaMap:$w,blending:Hc,polygonOffset:!0,polygonOffsetFactor:-1e4}),km=new _n(Yw,jw);Ii.add(km);const Gm=new bf(16777215,2),Kw=new Rf(268435455,.005);Gm.position.set(5,10,7.5);const pa=new L(0,1,0);new VM(pa);const Cd=Math.PI/3650;Ii.add(Kw);Ii.add(Gm);Ii.add(pa);Ii.add(ur);const Zw=new kM(ur,vr.domElement);vr.render(Ii,ur);function Wm(){requestAnimationFrame(Wm),Vm.rotateOnAxis(pa,Cd),Hm.cameraPosition.value.copy(ur.getWorldPosition(new L)),km.rotateOnAxis(pa,Cd*1.5),vr.render(Ii,ur),Zw.update()}Wm();
