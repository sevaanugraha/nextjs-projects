(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[217],{4293:function(e,t,r){let n=r(7294),a=n.forwardRef(function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}))});e.exports=a},3454:function(e,t,r){"use strict";var n,a;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(7663)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,a=r(2648).Z,i=r(1598).Z,o=r(7273).Z,l=i(r(7294)),s=a(r(2636)),u=r(7757),c=r(3735),d=r(3341);r(4210);var f=a(r(7746));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,a,i,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;a.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let b=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:i,qualityInt:s,className:u,imgStyle:c,blurStyle:d,isLazy:f,fill:p,placeholder:g,loading:m,srcString:b,config:v,unoptimized:x,loader:y,onLoadRef:w,onLoadingCompleteRef:E,setBlurComplete:T,setShowAltText:P,onLoad:S,onError:I}=e,R=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},R,{loading:m,width:i,height:a,decoding:"async","data-nimg":p?"fill":"1",className:u,style:n({},c,d)},r,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(I&&(e.src=e.src),e.complete&&h(e,b,g,w,E,T,x))},[b,g,w,E,T,I,x,t]),onLoad:e=>{let t=e.currentTarget;h(t,b,g,w,E,T,x)},onError:e=>{P(!0),"blur"===g&&T(!0),I&&I(e)}})))}),v=l.forwardRef((e,t)=>{let r,a;var i,{src:h,sizes:v,unoptimized:x=!1,priority:y=!1,loading:w,className:E,quality:T,width:P,height:S,fill:I,style:R,onLoad:O,onLoadingComplete:C,placeholder:k="empty",blurDataURL:A,layout:_,objectFit:j,objectPosition:z,lazyBoundary:M,lazyRoot:L}=e,D=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=l.useContext(d.ImageConfigContext),N=l.useMemo(()=>{let e=p||F||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[F]),B=D,W=B.loader||f.default;delete B.loader;let U="__next_img_default"in W;if(U){if("custom"===N.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:r}=t,n=o(t,["config"]);return e(n)}}if(_){"fill"===_&&(I=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(R=n({},R,e));let t={responsive:"100vw",fill:"100vw"}[_];t&&!v&&(v=t)}let Y="",q=m(P),G=m(S);if("object"==typeof(i=h)&&(g(i)||void 0!==i.src)){let e=g(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,a=e.blurHeight,A=A||e.blurDataURL,Y=e.src,!I){if(q||G){if(q&&!G){let t=q/e.width;G=Math.round(e.height*t)}else if(!q&&G){let t=G/e.height;q=Math.round(e.width*t)}}else q=e.width,G=e.height}}let V=!y&&("lazy"===w||void 0===w);((h="string"==typeof h?h:Y).startsWith("data:")||h.startsWith("blob:"))&&(x=!0,V=!1),N.unoptimized&&(x=!0),U&&h.endsWith(".svg")&&!N.dangerouslyAllowSVG&&(x=!0);let[$,Z]=l.useState(!1),[H,J]=l.useState(!1),K=m(T),Q=Object.assign(I?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:z}:{},H?{}:{color:"transparent"},R),X="blur"===k&&A&&!$?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:q,heightInt:G,blurWidth:r,blurHeight:a,blurDataURL:A,objectFit:Q.objectFit}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:i,sizes:o,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:i,kind:"x"}}(t,a,o),c=s.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:i,width:e})," ").concat("w"===u?e:n+1).concat(u)).join(", "),src:l({config:t,src:r,quality:i,width:s[c]})}}({config:N,src:h,unoptimized:x,width:q,quality:K,sizes:v,loader:W}),et=h,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},en=l.useRef(O);l.useEffect(()=>{en.current=O},[O]);let ea=l.useRef(C);l.useEffect(()=>{ea.current=C},[C]);let ei=n({isLazy:V,imgAttributes:ee,heightInt:G,widthInt:q,qualityInt:K,className:E,imgStyle:Q,blurStyle:X,loading:w,config:N,fill:I,unoptimized:x,placeholder:k,loader:W,srcString:et,onLoadRef:en,onLoadingCompleteRef:ea,setBlurComplete:Z,setShowAltText:J},B);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},ei,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:i,objectFit:o}=e,l=n||t,s=a||r,u=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&a?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},7663:function(e){!function(){var t={229:function(e){var t,r,n,a=e.exports={};function i(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var s=[],u=!1,c=-1;function d(){u&&n&&(u=!1,n.length?s=n.concat(s):c=-1,s.length&&f())}function f(){if(!u){var e=l(d);u=!0;for(var t=s.length;t;){for(n=s,s=[];++c<t;)n&&n[c].run();c=-1,t=s.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new p(e,t)),1!==s.length||u||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}},o=!0;try{t[e](i,i.exports,n),o=!1}finally{o&&delete r[e]}return i.exports}n.ab="//";var a=n(229);e.exports=a}()},5675:function(e,t,r){e.exports=r(3740)},9965:function(e,t,r){"use strict";r.d(t,{O:function(){return M}});var n,a,i,o=r(7294),l=r(7237),s=r(4203),u=r(2984),c=r(1363),d=r(4575),f=r(6723),p=r(3784),g=r(4157),m=r(3855),h=r(6045);function b({onFocus:e}){let[t,r]=(0,o.useState)(!0);return t?o.createElement(h._,{as:"button",type:"button",features:h.A.Focusable,onFocus:t=>{t.preventDefault();let n,a=50;n=requestAnimationFrame(function t(){if(a--<=0){n&&cancelAnimationFrame(n);return}if(e()){r(!1),cancelAnimationFrame(n);return}n=requestAnimationFrame(t)})}}):null}var v=r(3781),x=r(1021),y=r(5466);let w=o.createContext(null);function E({children:e}){let t=o.useRef({groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let a=null!=(r=n.get(t))?r:0;return n.set(t,a+1),[Array.from(n.keys()).indexOf(t),function(){let e=n.get(t);e>1?n.set(t,e-1):n.delete(t)}]}});return o.createElement(w.Provider,{value:t},e)}function T(e){let t=o.useContext(w);if(!t)throw Error("You must wrap your component in a <StableCollection>");let r=function(){var e,t,r;let n=null!=(r=null==(t=null==(e=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?r:null;if(!n)return Symbol();let a=[],i=n;for(;i;)a.push(i.index),i=i.return;return"$."+a.join(".")}(),[n,a]=t.current.get(e,r);return o.useEffect(()=>a,[]),n}var P=((n=P||{})[n.Forwards=0]="Forwards",n[n.Backwards=1]="Backwards",n),S=((a=S||{})[a.Less=-1]="Less",a[a.Equal=0]="Equal",a[a.Greater=1]="Greater",a),I=((i=I||{})[i.SetSelectedIndex=0]="SetSelectedIndex",i[i.RegisterTab=1]="RegisterTab",i[i.UnregisterTab=2]="UnregisterTab",i[i.RegisterPanel=3]="RegisterPanel",i[i.UnregisterPanel=4]="UnregisterPanel",i);let R={0(e,t){var r;let n=(0,d.z2)(e.tabs,e=>e.current),a=(0,d.z2)(e.panels,e=>e.current),i=n.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),o={...e,tabs:n,panels:a};if(t.index<0||t.index>n.length-1){let r=(0,u.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,u.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===i.length?o:{...o,selectedIndex:(0,u.E)(r,{0:()=>n.indexOf(i[0]),1:()=>n.indexOf(i[i.length-1])})}}let l=n.slice(0,t.index),s=[...n.slice(t.index),...l].find(e=>i.includes(e));if(!s)return o;let c=null!=(r=n.indexOf(s))?r:e.selectedIndex;return -1===c&&(c=e.selectedIndex),{...o,selectedIndex:c}},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=(0,d.z2)([...e.tabs,t.tab],e=>e.current),i=null!=(r=a.indexOf(n))?r:e.selectedIndex;return -1===i&&(i=e.selectedIndex),{...e,tabs:a,selectedIndex:i}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,d.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},O=(0,o.createContext)(null);function C(e){let t=(0,o.useContext)(O);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}O.displayName="TabsDataContext";let k=(0,o.createContext)(null);function A(e){let t=(0,o.useContext)(k);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}function _(e,t){return(0,u.E)(t.type,R,e,t)}k.displayName="TabsActionsContext";let j=o.Fragment,z=l.AN.RenderStrategy|l.AN.Static,M=Object.assign((0,l.yV)(function(e,t){var r,n;let a=(0,s.M)(),{id:i=`headlessui-tabs-tab-${a}`,...m}=e,{orientation:h,activation:b,selectedIndex:w,tabs:E,panels:P}=C("Tab"),S=A("Tab"),I=C("Tab"),R=(0,o.useRef)(null),O=(0,p.T)(R,t);(0,f.e)(()=>S.registerTab(R),[S,R]);let k=T("tabs"),_=E.indexOf(R);-1===_&&(_=k);let j=_===w,z=(0,v.z)(e=>{var t;let r=e();if(r===d.fE.Success&&"auto"===b){let e=null==(t=(0,y.r)(R))?void 0:t.activeElement,r=I.tabs.findIndex(t=>t.current===e);-1!==r&&S.change(r)}return r}),M=(0,v.z)(e=>{let t=E.map(e=>e.current).filter(Boolean);if(e.key===c.R.Space||e.key===c.R.Enter){e.preventDefault(),e.stopPropagation(),S.change(_);return}switch(e.key){case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),z(()=>(0,d.jA)(t,d.TO.First));case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),z(()=>(0,d.jA)(t,d.TO.Last))}if(z(()=>(0,u.E)(h,{vertical:()=>e.key===c.R.ArrowUp?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowDown?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error,horizontal:()=>e.key===c.R.ArrowLeft?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowRight?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error}))===d.fE.Success)return e.preventDefault()}),L=(0,o.useRef)(!1),D=(0,v.z)(()=>{var e;L.current||(L.current=!0,null==(e=R.current)||e.focus(),S.change(_),(0,x.Y)(()=>{L.current=!1}))}),F=(0,v.z)(e=>{e.preventDefault()}),N=(0,o.useMemo)(()=>({selected:j}),[j]),B={ref:O,onKeyDown:M,onMouseDown:F,onClick:D,id:i,role:"tab",type:(0,g.f)(e,R),"aria-controls":null==(n=null==(r=P[_])?void 0:r.current)?void 0:n.id,"aria-selected":j,tabIndex:j?0:-1};return(0,l.sY)({ourProps:B,theirProps:m,slot:N,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,l.yV)(function(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:a=!1,onChange:i,selectedIndex:s=null,...u}=e,c=n?"vertical":"horizontal",g=a?"manual":"auto",h=null!==s,x=(0,p.T)(t),[y,w]=(0,o.useReducer)(_,{selectedIndex:null!=s?s:r,tabs:[],panels:[]}),T=(0,o.useMemo)(()=>({selectedIndex:y.selectedIndex}),[y.selectedIndex]),P=(0,m.E)(i||(()=>{})),S=(0,m.E)(y.tabs),I=(0,o.useMemo)(()=>({orientation:c,activation:g,...y}),[c,g,y]),R=(0,v.z)(e=>(w({type:1,tab:e}),()=>w({type:2,tab:e}))),C=(0,v.z)(e=>(w({type:3,panel:e}),()=>w({type:4,panel:e}))),A=(0,v.z)(e=>{z.current!==e&&P.current(e),h||w({type:0,index:e})}),z=(0,m.E)(h?e.selectedIndex:y.selectedIndex),M=(0,o.useMemo)(()=>({registerTab:R,registerPanel:C,change:A}),[]);return(0,f.e)(()=>{w({type:0,index:null!=s?s:r})},[s]),(0,f.e)(()=>{if(void 0===z.current||y.tabs.length<=0)return;let e=(0,d.z2)(y.tabs,e=>e.current);e.some((e,t)=>y.tabs[t]!==e)&&A(e.indexOf(y.tabs[z.current]))}),o.createElement(E,null,o.createElement(k.Provider,{value:M},o.createElement(O.Provider,{value:I},I.tabs.length<=0&&o.createElement(b,{onFocus:()=>{var e,t;for(let r of S.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(t=r.current)||t.focus(),!0;return!1}}),(0,l.sY)({ourProps:{ref:x},theirProps:u,slot:T,defaultTag:j,name:"Tabs"}))))}),List:(0,l.yV)(function(e,t){let{orientation:r,selectedIndex:n}=C("Tab.List"),a=(0,p.T)(t);return(0,l.sY)({ourProps:{ref:a,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,l.yV)(function(e,t){let{selectedIndex:r}=C("Tab.Panels"),n=(0,p.T)(t),a=(0,o.useMemo)(()=>({selectedIndex:r}),[r]);return(0,l.sY)({ourProps:{ref:n},theirProps:e,slot:a,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,l.yV)(function(e,t){var r,n,a,i;let u=(0,s.M)(),{id:c=`headlessui-tabs-panel-${u}`,tabIndex:d=0,...g}=e,{selectedIndex:m,tabs:b,panels:v}=C("Tab.Panel"),x=A("Tab.Panel"),y=(0,o.useRef)(null),w=(0,p.T)(y,t);(0,f.e)(()=>x.registerPanel(y),[x,y]);let E=T("panels"),P=v.indexOf(y);-1===P&&(P=E);let S=P===m,I=(0,o.useMemo)(()=>({selected:S}),[S]),R={ref:w,id:c,role:"tabpanel","aria-labelledby":null==(n=null==(r=b[P])?void 0:r.current)?void 0:n.id,tabIndex:S?d:-1};return S||null!=(a=g.unmount)&&!a||null!=(i=g.static)&&i?(0,l.sY)({ourProps:R,theirProps:g,slot:I,defaultTag:"div",features:z,visible:S,name:"Tabs.Panel"}):o.createElement(h._,{as:"span",...R})})})},1021:function(e,t,r){"use strict";function n(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}r.d(t,{Y:function(){return n}})}}]);