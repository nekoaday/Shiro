import{r as xe,j as L}from"./index-CQrn7TS7.js";import{c as Re,a as pe}from"./helper-BGko9IlV.js";import{L as Pe}from"./index-Dbo25glw.js";import{m as Ve}from"./proxy-B0oLt6wm.js";const ce=xe.forwardRef(({children:e,...t},r)=>L.jsx(Ve.button,{initial:!0,whileFocus:{scale:1.02},whileHover:{scale:1.02},whileTap:{scale:.95},...t,ref:r,children:e}));ce.displayName="MotionButtonBase";const Ie=xe.forwardRef(({className:e,children:t,...r},n)=>L.jsx(ce,{ref:n,className:Re("inline-flex rounded-full bg-accent p-2 text-center leading-none center hover:opacity-90",e),...r,children:t}));Ie.displayName="RoundedIconButton";var fe=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,G=e=>!e||typeof e!="object"||Object.keys(e).length===0,Te=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function ve(e,t){e.forEach(function(r){Array.isArray(r)?ve(r,t):t.push(r)})}function we(e){let t=[];return ve(e,t),t}var ke=(...e)=>we(e).filter(Boolean),Ce=(e,t)=>{let r={},n=Object.keys(e),a=Object.keys(t);for(let o of n)if(a.includes(o)){let i=e[o],s=t[o];Array.isArray(i)||Array.isArray(s)?r[o]=ke(s,i):typeof i=="object"&&typeof s=="object"?r[o]=Ce(i,s):r[o]=s+" "+i}else r[o]=e[o];for(let o of a)n.includes(o)||(r[o]=t[o]);return r},be=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim();const de="-",Ee=e=>{const t=Le(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:i=>{const s=i.split(de);return s[0]===""&&s.length!==1&&s.shift(),ze(s,t)||Oe(i)},getConflictingClassGroupIds:(i,s)=>{const u=r[i]||[];return s&&n[i]?[...u,...n[i]]:u}}},ze=(e,t)=>{if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),a=n?ze(e.slice(1),n):void 0;if(a)return a;if(t.validators.length===0)return;const o=e.join(de);return t.validators.find(({validator:i})=>i(o))?.classGroupId},ge=/^\[(.+)\]$/,Oe=e=>{if(ge.test(e)){const t=ge.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Le=e=>{const{theme:t,prefix:r}=e,n={nextPart:new Map,validators:[]};return We(Object.entries(e.classGroups),r).forEach(([o,i])=>{se(i,n,o,t)}),n},se=(e,t,r,n)=>{e.forEach(a=>{if(typeof a=="string"){const o=a===""?t:me(t,a);o.classGroupId=r;return}if(typeof a=="function"){if(Be(a)){se(a(n),t,r,n);return}t.validators.push({validator:a,classGroupId:r});return}Object.entries(a).forEach(([o,i])=>{se(i,me(t,o),r,n)})})},me=(e,t)=>{let r=e;return t.split(de).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r},Be=e=>e.isThemeGetter,We=(e,t)=>t?e.map(([r,n])=>{const a=n.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([i,s])=>[t+i,s])):o);return[r,a]}):e,_e=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;const a=(o,i)=>{r.set(o,i),t++,t>e&&(t=0,n=r,r=new Map)};return{get(o){let i=r.get(o);if(i!==void 0)return i;if((i=n.get(o))!==void 0)return a(o,i),i},set(o,i){r.has(o)?r.set(o,i):a(o,i)}}},Ae="!",$e=e=>{const{separator:t,experimentalParseClassName:r}=e,n=t.length===1,a=t[0],o=t.length,i=s=>{const u=[];let C=0,m=0,j;for(let b=0;b<s.length;b++){let A=s[b];if(C===0){if(A===a&&(n||s.slice(b,b+o)===t)){u.push(s.slice(m,b)),m=b+o;continue}if(A==="/"){j=b;continue}}A==="["?C++:A==="]"&&C--}const S=u.length===0?s:s.substring(m),R=S.startsWith(Ae),M=R?S.substring(1):S,k=j&&j>m?j-m:void 0;return{modifiers:u,hasImportantModifier:R,baseClassName:M,maybePostfixModifierPosition:k}};return r?s=>r({className:s,parseClassName:i}):i},Ue=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(n=>{n[0]==="["?(t.push(...r.sort(),n),r=[]):r.push(n)}),t.push(...r.sort()),t},Fe=e=>({cache:_e(e.cacheSize),parseClassName:$e(e),...Ee(e)}),Je=/\s+/,qe=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a}=t,o=[],i=e.trim().split(Je);let s="";for(let u=i.length-1;u>=0;u-=1){const C=i[u],{modifiers:m,hasImportantModifier:j,baseClassName:S,maybePostfixModifierPosition:R}=r(C);let M=!!R,k=n(M?S.substring(0,R):S);if(!k){if(!M){s=C+(s.length>0?" "+s:s);continue}if(k=n(S),!k){s=C+(s.length>0?" "+s:s);continue}M=!1}const b=Ue(m).join(":"),A=j?b+Ae:b,h=A+k;if(o.includes(h))continue;o.push(h);const B=a(k,M);for(let V=0;V<B.length;++V){const W=B[V];o.push(A+W)}s=C+(s.length>0?" "+s:s)}return s};function Ke(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=je(t))&&(n&&(n+=" "),n+=r);return n}const je=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=je(e[n]))&&(r&&(r+=" "),r+=t);return r};function le(e,...t){let r,n,a,o=i;function i(u){const C=t.reduce((m,j)=>j(m),e());return r=Fe(C),n=r.cache.get,a=r.cache.set,o=s,s(u)}function s(u){const C=n(u);if(C)return C;const m=qe(u,r);return a(u,m),m}return function(){return o(Ke.apply(null,arguments))}}const w=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Se=/^\[(?:([a-z-]+):)?(.+)\]$/i,He=/^\d+\/\d+$/,Qe=new Set(["px","full","screen"]),Xe=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ze=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ye=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,De=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,er=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,I=e=>$(e)||Qe.has(e)||He.test(e),E=e=>U(e,"length",ar),$=e=>!!e&&!Number.isNaN(Number(e)),oe=e=>U(e,"number",$),H=e=>!!e&&Number.isInteger(Number(e)),rr=e=>e.endsWith("%")&&$(e.slice(0,-1)),c=e=>Se.test(e),O=e=>Xe.test(e),tr=new Set(["length","size","percentage"]),or=e=>U(e,tr,Me),nr=e=>U(e,"position",Me),sr=new Set(["image","url"]),lr=e=>U(e,sr,dr),ir=e=>U(e,"",cr),Q=()=>!0,U=(e,t,r)=>{const n=Se.exec(e);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):r(n[2]):!1},ar=e=>Ze.test(e)&&!Ye.test(e),Me=()=>!1,cr=e=>De.test(e),dr=e=>er.test(e),ie=()=>{const e=w("colors"),t=w("spacing"),r=w("blur"),n=w("brightness"),a=w("borderColor"),o=w("borderRadius"),i=w("borderSpacing"),s=w("borderWidth"),u=w("contrast"),C=w("grayscale"),m=w("hueRotate"),j=w("invert"),S=w("gap"),R=w("gradientColorStops"),M=w("gradientColorStopPositions"),k=w("inset"),b=w("margin"),A=w("opacity"),h=w("padding"),B=w("saturate"),V=w("scale"),W=w("sepia"),D=w("skew"),F=w("space"),J=w("translate"),_=()=>["auto","contain","none"],q=()=>["auto","hidden","clip","visible","scroll"],K=()=>["auto",c,t],l=()=>[c,t],p=()=>["",I,E],d=()=>["auto",$,c],g=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],f=()=>["solid","dashed","dotted","double","none"],y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],x=()=>["start","end","center","between","around","evenly","stretch"],v=()=>["","0",c],z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[$,c];return{cacheSize:500,separator:":",theme:{colors:[Q],spacing:[I,E],blur:["none","",O,c],brightness:N(),borderColor:[e],borderRadius:["none","","full",O,c],borderSpacing:l(),borderWidth:p(),contrast:N(),grayscale:v(),hueRotate:N(),invert:v(),gap:l(),gradientColorStops:[e],gradientColorStopPositions:[rr,E],inset:K(),margin:K(),opacity:N(),padding:l(),saturate:N(),scale:N(),sepia:v(),skew:N(),space:l(),translate:l()},classGroups:{aspect:[{aspect:["auto","square","video",c]}],container:["container"],columns:[{columns:[O]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...g(),c]}],overflow:[{overflow:q()}],"overflow-x":[{"overflow-x":q()}],"overflow-y":[{"overflow-y":q()}],overscroll:[{overscroll:_()}],"overscroll-x":[{"overscroll-x":_()}],"overscroll-y":[{"overscroll-y":_()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",H,c]}],basis:[{basis:K()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",c]}],grow:[{grow:v()}],shrink:[{shrink:v()}],order:[{order:["first","last","none",H,c]}],"grid-cols":[{"grid-cols":[Q]}],"col-start-end":[{col:["auto",{span:["full",H,c]},c]}],"col-start":[{"col-start":d()}],"col-end":[{"col-end":d()}],"grid-rows":[{"grid-rows":[Q]}],"row-start-end":[{row:["auto",{span:[H,c]},c]}],"row-start":[{"row-start":d()}],"row-end":[{"row-end":d()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",c]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",c]}],gap:[{gap:[S]}],"gap-x":[{"gap-x":[S]}],"gap-y":[{"gap-y":[S]}],"justify-content":[{justify:["normal",...x()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...x(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...x(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[F]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[F]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",c,t]}],"min-w":[{"min-w":[c,t,"min","max","fit"]}],"max-w":[{"max-w":[c,t,"none","full","min","max","fit","prose",{screen:[O]},O]}],h:[{h:[c,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[c,t,"auto","min","max","fit"]}],"font-size":[{text:["base",O,E]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",oe]}],"font-family":[{font:[Q]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",c]}],"line-clamp":[{"line-clamp":["none",$,oe]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",I,c]}],"list-image":[{"list-image":["none",c]}],"list-style-type":[{list:["none","disc","decimal",c]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...f(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",I,E]}],"underline-offset":[{"underline-offset":["auto",I,c]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:l()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...g(),nr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",or]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},lr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[M]}],"gradient-via-pos":[{via:[M]}],"gradient-to-pos":[{to:[M]}],"gradient-from":[{from:[R]}],"gradient-via":[{via:[R]}],"gradient-to":[{to:[R]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[...f(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:f()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...f()]}],"outline-offset":[{"outline-offset":[I,c]}],"outline-w":[{outline:[I,E]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:p()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[I,E]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",O,ir]}],"shadow-color":[{shadow:[Q]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":[...y(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":y()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",O,c]}],grayscale:[{grayscale:[C]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[j]}],saturate:[{saturate:[B]}],sepia:[{sepia:[W]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[C]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[j]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[B]}],"backdrop-sepia":[{"backdrop-sepia":[W]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",c]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",c]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",c]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[V]}],"scale-x":[{"scale-x":[V]}],"scale-y":[{"scale-y":[V]}],rotate:[{rotate:[H,c]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[D]}],"skew-y":[{"skew-y":[D]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",c]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",c]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":l()}],"scroll-mx":[{"scroll-mx":l()}],"scroll-my":[{"scroll-my":l()}],"scroll-ms":[{"scroll-ms":l()}],"scroll-me":[{"scroll-me":l()}],"scroll-mt":[{"scroll-mt":l()}],"scroll-mr":[{"scroll-mr":l()}],"scroll-mb":[{"scroll-mb":l()}],"scroll-ml":[{"scroll-ml":l()}],"scroll-p":[{"scroll-p":l()}],"scroll-px":[{"scroll-px":l()}],"scroll-py":[{"scroll-py":l()}],"scroll-ps":[{"scroll-ps":l()}],"scroll-pe":[{"scroll-pe":l()}],"scroll-pt":[{"scroll-pt":l()}],"scroll-pr":[{"scroll-pr":l()}],"scroll-pb":[{"scroll-pb":l()}],"scroll-pl":[{"scroll-pl":l()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",c]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[I,E,oe]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ur=(e,{cacheSize:t,prefix:r,separator:n,experimentalParseClassName:a,extend:o={},override:i={}})=>{Z(e,"cacheSize",t),Z(e,"prefix",r),Z(e,"separator",n),Z(e,"experimentalParseClassName",a);for(const s in i)pr(e[s],i[s]);for(const s in o)fr(e[s],o[s]);return e},Z=(e,t,r)=>{r!==void 0&&(e[t]=r)},pr=(e,t)=>{if(t)for(const r in t)Z(e,r,t[r])},fr=(e,t)=>{if(t)for(const r in t){const n=t[r];n!==void 0&&(e[r]=(e[r]||[]).concat(n))}},br=(e,...t)=>typeof e=="function"?le(ie,e,...t):le(()=>ur(ie(),e),...t),gr=le(ie);var mr={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Ne=e=>e||void 0,Y=(...e)=>Ne(we(e).filter(Boolean).join(" ")),ne=null,T={},ae=!1,X=(...e)=>t=>t.twMerge?((!ne||ae)&&(ae=!1,ne=G(T)?gr:br({...T,extend:{theme:T.theme,classGroups:T.classGroups,conflictingClassGroupModifiers:T.conflictingClassGroupModifiers,conflictingClassGroups:T.conflictingClassGroups,...T.extend}})),Ne(ne(Y(e)))):Y(e),he=(e,t)=>{for(let r in t)e.hasOwnProperty(r)?e[r]=Y(e[r],t[r]):e[r]=t[r];return e},hr=(e,t)=>{let{extend:r=null,slots:n={},variants:a={},compoundVariants:o=[],compoundSlots:i=[],defaultVariants:s={}}=e,u={...mr,...t},C=r!=null&&r.base?Y(r.base,e?.base):e?.base,m=r!=null&&r.variants&&!G(r.variants)?Ce(a,r.variants):a,j=r!=null&&r.defaultVariants&&!G(r.defaultVariants)?{...r.defaultVariants,...s}:s;!G(u.twMergeConfig)&&!Te(u.twMergeConfig,T)&&(ae=!0,T=u.twMergeConfig);let S=G(r?.slots),R=G(n)?{}:{base:Y(e?.base,S&&r?.base),...n},M=S?R:he({...r?.slots},G(R)?{base:e?.base}:R),k=G(r?.compoundVariants)?o:ke(r?.compoundVariants,o),b=h=>{if(G(m)&&G(n)&&S)return X(C,h?.class,h?.className)(u);if(k&&!Array.isArray(k))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof k}`);if(i&&!Array.isArray(i))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);let B=(l,p,d=[],g)=>{let f=d;if(typeof p=="string")f=f.concat(be(p).split(" ").map(y=>`${l}:${y}`));else if(Array.isArray(p))f=f.concat(p.reduce((y,x)=>y.concat(`${l}:${x}`),[]));else if(typeof p=="object"&&typeof g=="string"){for(let y in p)if(p.hasOwnProperty(y)&&y===g){let x=p[y];if(x&&typeof x=="string"){let v=be(x);f[g]?f[g]=f[g].concat(v.split(" ").map(z=>`${l}:${z}`)):f[g]=v.split(" ").map(z=>`${l}:${z}`)}else Array.isArray(x)&&x.length>0&&(f[g]=x.reduce((v,z)=>v.concat(`${l}:${z}`),[]))}}return f},V=(l,p=m,d=null,g=null)=>{var f;let y=p[l];if(!y||G(y))return null;let x=(f=g?.[l])!=null?f:h?.[l];if(x===null)return null;let v=fe(x),z=Array.isArray(u.responsiveVariants)&&u.responsiveVariants.length>0||u.responsiveVariants===!0,N=j?.[l],P=[];if(typeof v=="object"&&z)for(let[te,ue]of Object.entries(v)){let Ge=y[ue];if(te==="initial"){N=ue;continue}Array.isArray(u.responsiveVariants)&&!u.responsiveVariants.includes(te)||(P=B(te,Ge,P,d))}let ee=v!=null&&typeof v!="object"?v:fe(N),re=y[ee||"false"];return typeof P=="object"&&typeof d=="string"&&P[d]?he(P,re):P.length>0?(P.push(re),d==="base"?P.join(" "):P):re},W=()=>m?Object.keys(m).map(l=>V(l,m)):null,D=(l,p)=>{if(!m||typeof m!="object")return null;let d=new Array;for(let g in m){let f=V(g,m,l,p),y=l==="base"&&typeof f=="string"?f:f&&f[l];y&&(d[d.length]=y)}return d},F={};for(let l in h)h[l]!==void 0&&(F[l]=h[l]);let J=(l,p)=>{var d;let g=typeof h?.[l]=="object"?{[l]:(d=h[l])==null?void 0:d.initial}:{};return{...j,...F,...g,...p}},_=(l=[],p)=>{let d=[];for(let{class:g,className:f,...y}of l){let x=!0;for(let[v,z]of Object.entries(y)){let N=J(v,p)[v];if(Array.isArray(z)){if(!z.includes(N)){x=!1;break}}else{let P=ee=>ee==null||ee===!1;if(P(z)&&P(N))continue;if(N!==z){x=!1;break}}}x&&(g&&d.push(g),f&&d.push(f))}return d},q=l=>{let p=_(k,l);if(!Array.isArray(p))return p;let d={};for(let g of p)if(typeof g=="string"&&(d.base=X(d.base,g)(u)),typeof g=="object")for(let[f,y]of Object.entries(g))d[f]=X(d[f],y)(u);return d},K=l=>{if(i.length<1)return null;let p={};for(let{slots:d=[],class:g,className:f,...y}of i){if(!G(y)){let x=!0;for(let v of Object.keys(y)){let z=J(v,l)[v];if(z===void 0||(Array.isArray(y[v])?!y[v].includes(z):y[v]!==z)){x=!1;break}}if(!x)continue}for(let x of d)p[x]=p[x]||[],p[x].push([g,f])}return p};if(!G(n)||!S){let l={};if(typeof M=="object"&&!G(M))for(let p of Object.keys(M))l[p]=d=>{var g,f;return X(M[p],D(p,d),((g=q(d))!=null?g:[])[p],((f=K(d))!=null?f:[])[p],d?.class,d?.className)(u)};return l}return X(C,W(),_(k),h?.class,h?.className)(u)},A=()=>{if(!(!m||typeof m!="object"))return Object.keys(m)};return b.variantKeys=A(),b.extend=r,b.base=C,b.slots=M,b.variants=m,b.defaultVariants=j,b.compoundSlots=i,b.compoundVariants=k,b};const ye=hr({base:"inline-flex select-none cursor-default items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none",variants:{variant:{primary:pe("bg-accent text-zinc-100","hover:contrast-[1.10] active:contrast-125","font-semibold","disabled:cursor-not-allowed disabled:bg-accent/40 disabled:opacity-80 disabled:dark:text-zinc-50","dark:text-neutral-800"),secondary:pe("group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20","disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-80 disabled:dark:bg-gray-800 disabled:dark:text-zinc-50")}}}),Cr=({variant:e="primary",className:t,isLoading:r,href:n,...a})=>{const o=r?yr:"div";return L.jsx(o,{children:n?L.jsx(Pe,{href:n,className:ye({variant:e,className:t}),...a}):L.jsx(ce,{className:ye({variant:e,className:t}),...a})})},yr=({children:e})=>L.jsxs("div",{className:"relative",children:[e,L.jsx("div",{className:"absolute inset-0 z-[1] flex items-center justify-center",children:L.jsx("div",{className:"loading loading-spinner size-5"})})]});export{ce as M,Cr as S,hr as c};
