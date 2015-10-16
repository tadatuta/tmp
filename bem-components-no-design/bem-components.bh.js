!function(t){var e=function(){function t(){this._lastMatchId=0,this._matchers=[],this._infiniteLoopDetection=!1,this.lib={},this._shortTags={};for(var t=0;t<n.length;t++)this._shortTags[n[t]]=1;this._options={},this._optJsAttrName="onclick",this._optJsAttrIsJs=!0,this._optJsCls="i-bem",this._optJsElem=!0,this._optEscapeContent=!1,this._optNobaseMods=!1,this._optDelimElem="__",this._optDelimMod="_",this.utils={_expandoId:(new Date).getTime(),bh:this,isSimple:function(t){if(!t||t===!0)return!0;var e=typeof t;return"string"===e||"number"===e},extend:function(t){t&&"object"==typeof t||(t={});for(var e=1,n=arguments.length;n>e;e++){var o,a=arguments[e];if(a)for(o in a)t[o]=a[o]}return t},position:function(){var t=this.node;return"content"===t.index?1:t.position},isFirst:function(){var t=this.node;return"content"===t.index||1===t.position},isLast:function(){var t=this.node;return"content"===t.index||t.position===t.arr._listLength},tParam:function(t,e,n){var o="__tp_"+t,a=this.node;if(arguments.length>1)return(n||!a.hasOwnProperty(o))&&(a[o]=e),this;for(;a;){if(a.hasOwnProperty(o))return a[o];a=a.parentNode}return void 0},process:function(t){var e=this.ctx,n=this.node,o=this.bh.processBemJson(t,e.block);return this.ctx=e,this.node=n,o},applyBase:function(){var t=this.node,e=t.json,n=e.block,o=e.mods,a=this.bh._fastMatcher(this,e);return void 0!==a&&(this.ctx=t.arr[t.index]=t.json=a,t.block=n,t.mods=o),this},stop:function(){return this.ctx._stop=!0,this},generateId:function(){return"uniq"+this._expandoId+ ++e},mod:function(t,e,n){var o=this.ctx.elem?"elemMods":"mods";if(arguments.length>1){var a=this.ctx[o];return a[t]=!a.hasOwnProperty(t)||n?e:a[t],this}return this.ctx[o][t]},mods:function(t,e){var n=this.ctx.elem?"elemMods":"mods",o=this.ctx[n];return void 0!==t?(this.ctx[n]=e?this.extend(o,t):this.extend(t,o),this):o},tag:function(t,e){return void 0===t?this.ctx.tag:((e||void 0===this.ctx.tag)&&(this.ctx.tag=t),this)},mix:function(t,e){return void 0===t?this.ctx.mix:(this.ctx.mix=e||!this.ctx.mix?t:(Array.isArray(this.ctx.mix)?this.ctx.mix:[this.ctx.mix]).concat(t),this)},attr:function(t,e,n){var o;return arguments.length>1?(o=this.ctx.attrs||(this.ctx.attrs={}),o[t]=!o.hasOwnProperty(t)||n?e:o[t],this):(o=this.ctx.attrs,o?o[t]:void 0)},attrs:function(t,e){var n=this.ctx.attrs||{};return void 0===t?n:(this.ctx.attrs=e?this.extend(n,t):this.extend(t,n),this)},bem:function(t,e){return void 0===t?this.ctx.bem:((e||void 0===this.ctx.bem)&&(this.ctx.bem=t),this)},js:function(t,e){var n=this.ctx;return void 0===t?n.js:(e||void 0===n.js?n.js=t:n.js!==!1&&(n.js=this.extend(n.js,t)),this)},cls:function(t,e){return void 0===t?this.ctx.cls:((e||void 0===this.ctx.cls)&&(this.ctx.cls=t),this)},param:function(t,e,n){return void 0===e?this.ctx[t]:((n||void 0===this.ctx[t])&&(this.ctx[t]=e),this)},content:function(t,e){return void 0===t?this.ctx.content:((e||void 0===this.ctx.content)&&(this.ctx.content=t),this)},html:function(t,e){return void 0===t?this.ctx.html:((e||void 0===this.ctx.html)&&(this.ctx.html=t),this)},json:function(){return this.ctx}}}var e=0;t.prototype={setOptions:function(t){var e;for(e in t)this._options[e]=t[e];if(t.jsAttrName&&(this._optJsAttrName=t.jsAttrName),t.jsAttrScheme&&(this._optJsAttrIsJs="js"===t.jsAttrScheme),void 0!==t.jsCls&&(this._optJsCls=t.jsCls),t.hasOwnProperty("jsElem")&&(this._optJsElem=t.jsElem),t.clsNobaseMods&&(this._optNobaseMods=!0),t.escapeContent&&(this._optEscapeContent=t.escapeContent),t.delimElem&&(this._optDelimElem=t.delimElem),t.delimMod&&(this._optDelimMod=t.delimMod),t.shortTags)for(var n=0;n<t.shortTags.length;n++)this._shortTags[t.shortTags[n]]=1;return this},getOptions:function(){return this._options},enableInfiniteLoopDetection:function(t){return this._infiniteLoopDetection=t,this},apply:function(t){return this.toHtml(this.processBemJson(t))},match:function(t,e){if(!t)return this;if(Array.isArray(t))return t.forEach(function(n,o){this.match(t[o],e)},this),this;if("object"==typeof t){for(var n in t)this.match(n,t[n]);return this}return e.__id="__func"+this._lastMatchId++,this._matchers.push([t,e]),this._fastMatcher=null,this},beforeEach:function(t){return this.match("$before",t)},afterEach:function(t){return this.match("$after",t)},buildMatcher:function(){function t(t,e){for(var n={},o=0,a=t.length;a>o;o++){var i=t[o],c=i[e]||"__no_value__";(n[c]||(n[c]=[])).push(i)}return n}function e(t,e,n){t.push("json."+e+" = true;","subRes = _m"+n+"(ctx, json);",'if (subRes !== undefined) return (subRes || "");',"if (json._stop) return;")}var n,o,a,i,c,r,s,l,d=[],m=["bh = this"],u=this._matchers,h=[];for(n=u.length-1;n>=0;n--)r=u[n],c=r[0],m.push("_m"+n+" = ms["+n+"][1]"),i={fn:r[1],index:n},~c.indexOf(this._optDelimElem)?(s=c.split(this._optDelimElem),l=s[0].split(this._optDelimMod),i.block=l[0],l.length>1&&(i.blockMod=l[1],i.blockModVal=l[2]||!0),s=s[1].split(this._optDelimMod),i.elem=s[0],s.length>1&&(i.elemMod=s[1],i.elemModVal=s[2]||!0)):(s=c.split(this._optDelimMod),i.block=s[0],s.length>1&&(i.blockMod=s[1],i.blockModVal=s[2]||!0)),h.push(i);var f=t(h,"block"),p=f.$before,b=f.$after;if(b&&delete f.$after,d.push("var "+m.join(", ")+";","function applyMatchers(ctx, json) {","var subRes;"),p)for(delete f.$before,o=0,a=p.length;a>o;o++)i=p[o],e(d,i.fn.__id,i.index);d.push("switch (json.block) {");for(var _ in f){d.push('case "'+_+'":');var x=t(f[_],"elem");d.push("switch (json.elem) {");for(var v in x){d.push("__no_value__"===v?"case undefined:":'case "'+v+'":');var g=x[v];for(o=0,a=g.length;a>o;o++){i=g[o];var k=i.fn,y=[];y.push("!json."+k.__id),i.elemMod&&y.push('json.elemMods && json.elemMods["'+i.elemMod+'"] === '+(i.elemModVal===!0||'"'+i.elemModVal+'"')),i.blockMod&&y.push('json.mods && json.mods["'+i.blockMod+'"] === '+(i.blockModVal===!0||'"'+i.blockModVal+'"')),d.push("if ("+y.join(" && ")+") {"),e(d,k.__id,i.index),d.push("}")}d.push("break;")}d.push("}","break;")}if(d.push("}"),b)for(o=0,a=b.length;a>o;o++)i=b[o],e(d,i.fn.__id,i.index);return d.push("};","return applyMatchers;"),d.join("\n")},processBemJson:function(t,e,n){function o(){this.ctx=null}if(null!=t){var a,i,c,r,s,l,d,m,u,h,f=[t],p=[{json:t,arr:f,index:0,block:e,mods:null}],b=this._fastMatcher||(this._fastMatcher=Function("ms",this.buildMatcher())(this._matchers)),_=!n,x=this._infiniteLoopDetection;o.prototype=this.utils;for(var v=new o;a=p.shift();){if(i=a.json,c=a.block,r=a.mods,Array.isArray(i)){for(s=0,l=0,d=i.length;d>s;s++)u=i[s],u!==!1&&null!=u&&"object"==typeof u&&p.push({json:u,arr:i,index:s,position:++l,block:c,mods:r,parentNode:a});i._listLength=l}else{var g,k=!1;if(i.elem?(c=i.block=i.block||c,i.elemMods||(i.elemMods=i.mods||{},i.mods=null),r=i.mods=i.mods||r):i.block&&(c=i.block,r=i.mods=i.mods||{}),"object"==typeof i){if(x){if(i.__processCounter=(i.__processCounter||0)+1,b.__processCounter=(b.__processCounter||0)+1,i.__processCounter>100)throw new Error('Infinite json loop detected at "'+i.block+(i.elem?this._optDelimElem+i.elem:"")+'".');if(b.__processCounter>1e3)throw new Error('Infinite matcher loop detected at "'+i.block+(i.elem?this._optDelimElem+i.elem:"")+'".')}h=void 0,i._stop||(v.node=a,v.ctx=i,h=b(v,i),void 0!==h&&(i=h,a.json=i,a.block=c,a.mods=r,p.push(a),k=!0))}if(!k&&_&&(g=i.content))if(Array.isArray(g)){var y;do{for(y=!1,s=0,d=g.length;d>s;s++)if(Array.isArray(g[s])){y=!0;break}y&&(i.content=g=g.concat.apply([],g))}while(y);for(s=0,l=0,d=g.length,m=d-1;d>s;s++)u=g[s],u!==!1&&null!=u&&"object"==typeof u&&p.push({json:u,arr:g,index:s,position:++l,block:c,mods:r,parentNode:a});g._listLength=l}else p.push({json:g,arr:i,index:"content",block:c,mods:r,parentNode:a})}a.arr[a.index]=i}return f[0]}},toHtml:function(t){this._buf="",this._html(t);var e=this._buf;return delete this._buf,e},_html:function(t){var e,n,r;if(t!==!1&&null!=t)if("object"!=typeof t)this._buf+=this._optEscapeContent?o(t):t;else if(Array.isArray(t))for(e=0,n=t.length;n>e;e++)r=t[e],r!==!1&&null!=r&&this._html(r);else{if(t.toHtml){var s=t.toHtml.call(this,t)||"";return void(this._buf+=s)}var l=t.bem!==!1;if("undefined"!=typeof t.tag&&!t.tag)return void(t.html?this._buf+=t.html:this._html(t.content));t.mix&&!Array.isArray(t.mix)&&(t.mix=[t.mix]);var d,m,u,h="",f="",p=!1;if(d=t.attrs)for(e in d)m=d[e],m===!0?f+=" "+e:m!==!1&&null!==m&&void 0!==m&&(f+=" "+e+'="'+a(m)+'"');if(l){var b=t.block+(t.elem?this._optDelimElem+t.elem:"");t.block&&(h=c(t,b,null,this._optNobaseMods,this._optDelimMod),t.js&&((u={})[b]=t.js===!0?{}:t.js));var _=this._optJsCls&&(this._optJsElem||!t.elem),x=t.mix;if(x&&x.length)for(e=0,n=x.length;n>e;e++){var v=x[e];if(v&&v.bem!==!1){var g=v.block||t.block||"",k=v.elem||(v.block?null:t.block&&t.elem),y=g+(k?this._optDelimElem+k:"");g&&(h+=c(v,y,b,this._optNobaseMods,this._optDelimMod),v.js&&((u=u||{})[y]=v.js===!0?{}:v.js,p=!0,_||(_=g&&this._optJsCls&&(this._optJsElem||!k))))}}if(u){_&&(h+=" "+this._optJsCls);var j=p||t.js!==!0?i(JSON.stringify(u)):'{"'+b+'":{}}';f+=" "+(t.jsAttr||this._optJsAttrName)+"='"+(this._optJsAttrIsJs?"return "+j:j)+"'"}}t.cls&&(h=(h?h+" ":"")+a(t.cls).trim());var P=t.tag||"div";this._buf+="<"+P+(h?' class="'+h+'"':"")+(f?f:""),this._shortTags[P]?this._buf+="/>":(this._buf+=">",t.html?this._buf+=t.html:this._html(t.content),this._buf+="</"+P+">")}}};var n="area base br col command embed hr img input keygen link menuitem meta param source track wbr".split(" "),o=t.prototype.xmlEscape=function(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},a=t.prototype.attrEscape=function(t){return(t+"").replace(/&/g,"&amp;").replace(/"/g,"&quot;")},i=t.prototype.jsAttrEscape=function(t){return(t+"").replace(/&/g,"&amp;").replace(/'/g,"&#39;")},c=function(t,e,n,o,a){var i,c,r,s="";if(n!==e&&(n&&(s+=" "),s+=e),i=t.elem&&t.elemMods||t.mods)for(r in i)c=i[r],(c||0===c)&&(s+=" "+(o?a:e+a)+r+(c===!0?"":a+c));return s};return t}();"undefined"!=typeof module&&(module.exports=e);var n=new e;n.setOptions({jsAttrName:"data-bem",jsAttrScheme:"json"});var o=function(){!function(){n.match("ua",function(t){t.bem(!1).tag("script").content(["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");'],!0)})}(),function(){n.match("i-bem__i18n",function(t,e){if(!e)return"";var o=e.keyset,a=e.key,i=e.params||{};return o||a?(("undefined"==typeof e.content||null!==e.content)&&(i.content=n.apply(e.content)),n.lib.i18n(o,a,i)):""})}(),function(){n.match("page",function(t,e){return t.tag("body").tParam("nonceCsp",e.nonce).content([t.content(),e.scripts],!0),[e.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},e.uaCompatible===!1?"":{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:e.uaCompatible||"IE=edge"}},{tag:"title",content:e.title},{block:"ua",attrs:{nonce:e.nonce}},e.head,e.styles,e.favicon?{elem:"favicon",url:e.favicon}:""]},e]}]}),n.match("page__head",function(t){t.bem(!1).tag("head")}),n.match("page__meta",function(t){t.bem(!1).tag("meta")}),n.match("page__link",function(t){t.bem(!1).tag("link")}),n.match("page__favicon",function(t,e){t.bem(!1).tag("link").attr("rel","shortcut icon").attr("href",e.url)})}(),function(){n.match("page__css",function(t,e){t.bem(!1),e.url?t.tag("link").attr("rel","stylesheet").attr("href",e.url):t.tag("style")})}(),function(){n.match("page__css",function(t,e){if(e.hasOwnProperty("ie")){var n=e.ie;if(n===!0){var o=e.url;return[6,7,8,9].map(function(t){return{elem:"css",url:o+".ie"+t+".css",ie:"IE "+t}})}var a=n?"!IE"===n?[n,"<!-->","<!--"]:[n,"",""]:["gt IE 9","<!-->","<!--"];return["<!--[if "+a[0]+"]>"+a[1],e,a[2]+"<![endif]-->"]}})}(),function(){n.match("page__js",function(t,e){var n=t.tParam("nonceCsp");t.bem(!1).tag("script"),e.url?t.attr("src",e.url):n&&t.attr("nonce",n)})}(),function(){n.match("ua",function(t,e){t.applyBase(),t.content([e.content,"(function(d,n){","d.documentElement.className+=",'" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");','})(document,"createElementNS");'],!0)})}(),function(){n.match("page__conditional-comment",function(t,e){t.tag(!1);var n=e.condition.replace("<","lt").replace(">","gt").replace("=","e"),o=n.indexOf("!")>-1,a=e.msieOnly===!1,i=o||a;return["<!--[if "+n+"]>",a?"<!":"",i?"-->":"",e,i?"<!--":"","<![endif]-->"]})}(),function(){n.match("attach",function(t,e){t.tParam("_attach",e).tag("span").js(!0);var n=e.button;"object"==typeof n||(n={block:"button",tag:"span",text:n});var o=t.mods(),a=n.mods||(n.mods={});["size","theme","disabled","focused"].forEach(function(t){a[t]||(a[t]=o[t])}),t.content([n,{elem:"no-file",content:e.noFileText}],!0)})}(),function(){n.match("button",function(t,e){t.tag(e.tag||"button");var n=t.mod("type"),o="button"===t.tag()&&(!n||"submit"===n);t.tParam("_button",e).js(!0).attrs({role:"button",tabindex:e.tabIndex,id:e.id,type:o?n||"button":void 0,name:e.name,value:e.val,title:e.title}).mix({elem:"control"}),t.mod("disabled")&&(o?t.attr("disabled","disabled"):t.attr("aria-disabled","true"));var a=t.content();"undefined"==typeof a&&(a=[e.icon],"text"in e&&a.push({elem:"text",content:e.text}),t.content(a))})}(),function(){n.match("button__text",function(t){t.tag("span")})}(),function(){n.match("button_focused",function(t,e){t.js(t.extend(e.js,{live:!1}),!0)})}(),function(){n.match("icon",function(t,e){var n={},o=e.url;o&&(n.style="background-image:url("+o+")"),t.tag("span").attrs(n)})}(),function(){n.match("button",function(t){t.tParam("_attach")&&t.tag("span",!0).applyBase().content([{block:"attach",elem:"control"},t.content()],!0)})}(),function(){n.match("attach__control",function(t){var e={type:"file"},n=t.tParam("_attach");n&&(e.name=n.name,n.mods&&n.mods.disabled&&(e.disabled="disabled"),n.tabIndex&&(e.tabindex=n.tabIndex)),t.tag("input").attrs(e)})}(),function(){n.match("attach__no-file",function(t){t.tag("span")})}(),function(){n.match("attach__file",function(t){t.tag("span")})}(),function(){n.match("attach__text",function(t){t.tag("span")})}(),function(){n.match("attach__clear",function(t){t.tag("span")})}(),function(){n.match(["button_togglable_check","button_togglable_radio"],function(t){t.attr("aria-pressed",String(!!t.mod("checked")))})}(),function(){n.match("button_type_link",function(t,e){t.tag("a").attr("role","link"),e.target&&t.attr("target",e.target),t.mod("disabled")?t.attr("aria-disabled","true").js({url:e.url}):t.attr("href",e.url)})}(),function(){n.match("checkbox",function(t,e){t.tag("label").js(!0).content([{elem:"box",content:{elem:"control",checked:t.mod("checked"),disabled:t.mod("disabled"),name:e.name,val:e.val}},e.text&&{elem:"text",content:e.text}])})}(),function(){n.match("checkbox__box",function(t){t.tag("span")})}(),function(){n.match("checkbox__control",function(t,e){t.tag("input");var n={type:"checkbox",autocomplete:"off"};n.name=e.name,n.value=e.val,e.checked&&(n.checked="checked"),e.disabled&&(n.disabled="disabled"),t.attrs(n)})}(),function(){n.match("checkbox__text",function(t){t.tag("span").attrs({role:"presentation"})})}(),function(){n.match("checkbox_type_button",function(t,e){var n=t.mods();t.content([{block:"button",mods:{togglable:"check",checked:n.checked,disabled:n.disabled,theme:n.theme,size:n.size},attrs:{role:"checkbox","aria-pressed":null,"aria-checked":String(!!n.checked)},title:e.title,content:[e.icon,"undefined"!=typeof e.text?{elem:"text",content:e.text}:""]},{block:"checkbox",elem:"control",checked:n.checked,disabled:n.disabled,name:e.name,val:e.val}])})}(),function(){n.match("checkbox-group",function(t,e){t.tag("span").attrs({role:"group"}).js(!0).mix({block:"control-group"});var n=t.mods(),o=e.val,a="undefined"!=typeof o;if(a&&!Array.isArray(o))throw Error("checkbox-group: val must be an array");t.content((e.options||[]).map(function(t,i){return[!!i&&!n.type&&{tag:"br"},{block:"checkbox",mods:{type:n.type,theme:n.theme,size:n.size,checked:a&&o.indexOf(t.val)>-1,disabled:t.disabled||n.disabled},name:e.name,val:t.val,text:t.text,title:t.title,icon:t.icon}]}))})}(),function(){n.match("control-group",function(t){t.attrs({role:"group"})})}(),function(){n.match({dropdown:function(t){var e=t.json();return t.js(t.extend({id:t.generateId()},t.js())).tParam("dropdown",e).tParam("popupId",t.generateId()).tParam("theme",t.mod("theme")).tParam("mix",[e].concat(e.switcher.mix||[],e.mix||[])),[{elem:"switcher"},{elem:"popup"}]},dropdown__popup:function(t){var e=t.tParam("dropdown"),n=e.popup;(t.isSimple(n)||"popup"!==n.block)&&(n={block:"popup",content:n});var o=n.mods||(n.mods={}),a=n.attrs||(n.attrs={});return o.theme||(o.theme=t.tParam("theme")),o.hasOwnProperty("autoclosable")||(o.autoclosable=!0),o.target="anchor",a.id=t.tParam("popupId"),n.mix=[e].concat(n.mix||[]),n},dropdown__switcher:function(t){var e=t.tParam("dropdown"),n=e.switcher;return n.block&&(n.mix=t.tParam("mix")),n}})}(),function(){n.match("popup",function(t,e){t.js({mainOffset:e.mainOffset,secondaryOffset:e.secondaryOffset,viewportOffset:e.viewportOffset,directions:e.directions,zIndexGroupLevel:e.zIndexGroupLevel}).attrs({"aria-hidden":"true"})})}(),function(){n.match("dropdown_switcher_button__switcher",function(t,e){var n=t.tParam("dropdown"),o=n.switcher;if(Array.isArray(o))return o;var a=t.isSimple(o)?{block:"button",text:o}:o;if("button"===a.block){var i=a.mods||(a.mods={}),c=a.attrs||(a.attrs={}),r=e.blockMods||e.mods;i.size||(i.size=r.size),i.theme||(i.theme=r.theme),i.disabled=r.disabled,c["aria-haspopup"]="true",c["aria-controls"]=t.tParam("popupId"),c["aria-expanded"]="false",a.mix=t.tParam("mix")}return a})}(),function(){n.match("dropdown_switcher_link__switcher",function(t,e){var n=t.tParam("dropdown"),o=n.switcher;if(Array.isArray(o))return o;var a=t.isSimple(o)?{block:"link",mods:{pseudo:!0},content:o}:o;if("link"===a.block){var i=a.mods||(a.mods={}),c=a.attrs||(a.attrs={}),r=e.blockMods||e.mods;i.theme||(i.theme=r.theme),i.disabled=r.disabled,c["aria-haspopup"]="true",c["aria-controls"]=t.tParam("popupId"),c["aria-expanded"]="false",a.mix=t.tParam("mix")}return a})}(),function(){n.match("link",function(t,e){t.tag("a").mix({elem:"control"});var o,a="object"==typeof e.url?n.apply(e.url):e.url,i={role:"link"};t.mod("disabled")?(t.js(a?{url:a}:!0),i["aria-disabled"]="true"):(a?(i.href=a,o=e.tabIndex):o=e.tabIndex||0,t.js(!0)),"undefined"==typeof o||(i.tabindex=o),e.title&&(i.title=e.title),e.target&&(i.target=e.target),t.attrs(i)})}(),function(){n.match("link_pseudo",function(t,e){e.url||t.tag("span").attr("role","button")})}(),function(){n.match("image",function(t,e){t.attr("role","img"),"undefined"!=typeof e.content?t.tag("span"):t.tag("img").attrs({role:null,src:e.url,width:e.width,height:e.height,alt:e.alt,title:e.title},!0)})}(),function(){n.match("input",function(t,e){t.tag("span").js(!0).tParam("_input",e).content({elem:"box",content:{elem:"control"}},!0)})}(),function(){n.match("input__box",function(t){t.tag("span")})}(),function(){n.match("input__control",function(t){t.tag("input");var e=t.tParam("_input"),n={id:e.id,name:e.name,value:e.val,maxlength:e.maxLength,tabindex:e.tabIndex,placeholder:e.placeholder};e.autocomplete===!1&&(n.autocomplete="off"),e.mods&&e.mods.disabled&&(n.disabled="disabled"),t.attrs(n)})}(),function(){n.match("input_has-clear__box",function(t){t.content([t.content(),{elem:"clear"}],!0)})}(),function(){n.match("input__clear",function(t){t.tag("span")})}(),function(){n.match("input_type_password__control",function(t){t.attr("type","password")})}(),function(){n.match("input_type_search__control",function(t){t.attr("type","search")})}(),function(){n.match("menu",function(t,e){var n=t.mods(),o={role:"menu"};t.js(!0).tParam("menuMods",n).mix({elem:"control"}),n.disabled?o["aria-disabled"]="true":o.tabindex=0,t.attrs(o);var a,i=[];if(e.content){var c="undefined"!=typeof e.val,r="check"===t.mod("mode"),s=function(t){return c&&(r?e.val.indexOf(t)>-1:e.val===t)},l=function(t){for(var e,n=0;e=t[n++];)"menu-item"===e.block?(a||(a=e),s(e.val)&&((e.mods=e.mods||{}).checked=!0,i.push(e))):e.content&&l(e.content)};if(!Array.isArray(e.content))throw Error("menu: content must be an array of the menu items");l(e.content)}t.tParam("firstItem",a).tParam("checkedItems",i)})}(),function(){n.match("menu-item",function(t,e){var n=t.tParam("menuMods"),o=n&&n.mode,a=o?"check"===o?"menuitemcheckbox":"menuitemradio":"menuitem";n&&t.mods({theme:n.theme,disabled:n.disabled}),t.js({val:e.val}).attrs({role:a,id:t.generateId(),"aria-disabled":t.mod("disabled")&&"true","aria-checked":o&&String(!!t.mod("checked"))})})}(),function(){n.match("menu_focused",function(t){var e=t.extend(t.js()||{},{live:!1});t.js(e)})}(),function(){n.match("menu__group",function(t,e){var n=e.title;if(t.attr("role","group"),"undefined"!=typeof n){var o=t.generateId();t.attr("aria-labelledby",o).content([{elem:"group-title",attrs:{role:"presentation",id:o},content:n},t.content()],!0)}})}(),function(){n.match("menu_mode_radio",function(t){t.applyBase();var e=t.tParam("firstItem");e&&!t.tParam("checkedItems").length&&((e.mods=e.mods||{}).checked=!0)})}(),function(){n.match("menu-item_type_link",function(t){t.applyBase(),t.mod("disabled")&&t.tParam("_menuItemDisabled",!0)}),n.match("link",function(t){t.tParam("_menuItemDisabled")&&t.mod("disabled",!0)})}(),function(){n.match("modal",function(t,e){t.js(!0).mix({block:"popup",js:{zIndexGroupLevel:e.zIndexGroupLevel||20},mods:{autoclosable:t.mod("autoclosable")}}).attrs({role:"dialog","aria-hidden":"true"}).content({elem:"table",content:{elem:"cell",content:{elem:"content",content:t.content()}}},!0)})}(),function(){n.match("progressbar",function(t,e){var n=e.val||0;t.js({val:n}).attrs({role:"progressbar","aria-valuenow":n+"%"}).content({elem:"bar",attrs:{style:"width:"+n+"%"}})})}(),function(){n.match("radio",function(t,e){t.tag("label").js(!0).content([{elem:"box",content:{elem:"control",checked:t.mod("checked"),disabled:t.mod("disabled"),name:e.name,val:e.val}},e.text&&{elem:"text",content:e.text}])})}(),function(){n.match("radio__box",function(t){t.tag("span")})}(),function(){n.match("radio__control",function(t,e){t.tag("input");var n={type:"radio",autocomplete:"off",name:e.name,value:e.val};e.checked&&(n.checked="checked"),e.disabled&&(n.disabled="disabled"),t.attrs(n)})}(),function(){n.match("radio__text",function(t){t.tag("span").attrs({role:"presentation"})})}(),function(){n.match("radio_type_button",function(t,e){var n=t.mods();t.content([{block:"button",mods:{togglable:"radio-check"===n.mode?"check":"radio",checked:n.checked,disabled:n.disabled,theme:n.theme,size:n.size},title:e.title,content:[e.icon,"undefined"!=typeof e.text?{elem:"text",content:e.text}:""]},{block:"radio",elem:"control",checked:n.checked,disabled:n.disabled,name:e.name,val:e.val}])})}(),function(){n.match("radio-group",function(t,e){t.tag("span").attrs({role:"radiogroup"}).js(!0).mix({block:"control-group"});var n=t.mods(),o="undefined"!=typeof e.val;t.content((e.options||[]).map(function(t,a){return[!!a&&!n.type&&{tag:"br"},{block:"radio",mods:{type:n.type,mode:n.mode,theme:n.theme,size:n.size,checked:o&&e.val===t.val,disabled:t.disabled||n.disabled},name:e.name,val:t.val,text:t.text,title:t.title,icon:t.icon}]}))})}(),function(){n.match("radio-group_mode_radio-check",function(t){if("button"!==t.mod("type"))throw Error("Modifier mode=radio-check can be only with modifier type=button")})}(),function(){n.match("select",function(t,e){function n(t){return i&&(c?e.val.indexOf(t)>-1:e.val===t)}function o(e){for(var i,c=0;i=e[c++];)i.group?o(i.group):(a||(a=i),s.push(i.id=t.generateId()),n(i.val)&&(i.checked=!0,r.push(i)))}if(!t.mod("mode"))throw Error("Can't build select without mode modifier");var a,i="undefined"!=typeof e.val,c="check"===t.mod("mode"),r=[],s=[];o(e.options),t.js({name:e.name,optionsMaxHeight:e.optionsMaxHeight}).tParam("select",e).tParam("firstOption",a).tParam("checkedOptions",r).tParam("optionIds",s).content([{elem:"button"},{block:"popup",mods:{target:"anchor",theme:t.mod("theme"),autoclosable:!0},directions:["bottom-left","bottom-right","top-left","top-right"],content:{block:e.block,mods:t.mods(),elem:"menu"}}])})}(),function(){n.match("select_focused",function(t){t.applyBase().extend(t.js(),{live:!1})})}(),function(){n.match("select__control",function(t,e){var n=e.blockMods||e.mods;t.tag("input").attrs({type:"hidden",name:t.tParam("select").name,value:e.val,disabled:n.disabled?"disabled":void 0})})}(),function(){n.match("select__button",function(t,e){var n=e.blockMods||e.mods,o=t.tParam("select"),a=t.tParam("checkedOptions"),i=t.generateId();return t.tParam("selectTextId",i),{block:"button",mix:{block:e.block,elem:e.elem},mods:{size:n.size,theme:n.theme,view:n.view,focused:n.focused,disabled:n.disabled,checked:"radio"!==n.mode&&!!a.length},id:o.id,attrs:{role:"listbox","aria-owns":t.tParam("optionIds").join(" "),"aria-multiselectable":"check"===n.mode?"true":null,"aria-labelledby":i},tabIndex:o.tabIndex,content:[t.content(),{block:"icon",mix:{block:"select",elem:"tick"}}]}}),n.match("button__text",function(t){t.tParam("select")&&t.attr("id",t.tParam("selectTextId"))})}(),function(){n.match("select__menu",function(t,e){var n=t.mods(),o=t.tParam("select"),a=function(t){var e={block:"menu-item",mods:{disabled:n.disabled||t.disabled},attrs:{role:"option"},id:t.id,val:t.val,js:{checkedText:t.checkedText},content:t.text};return t.icon&&(e.js.text=t.text,e.content=[t.icon,e.content]),e};return{block:"menu",mix:{block:e.block,elem:e.elem},mods:{size:n.size,theme:n.theme,disabled:n.disabled,mode:n.mode},val:o.val,attrs:{role:null,tabindex:null},content:o.options.map(function(t){return t.group?{elem:"group",title:t.title,content:t.group.map(a)}:a(t)})}})}(),function(){n.match("select_mode_check",function(t,e){t.applyBase().extend(t.js(),{text:e.text});var n=t.tParam("checkedOptions");if(n[0]){var o=n.map(function(t){return{elem:"control",val:t.val}});t.content([o,t.content()],!0)}}),n.match("select_mode_check__button",function(t){var e=t.tParam("checkedOptions");t.content({elem:"text",content:1===e.length?e[0].text:e.reduce(function(t,e){return t+(t?", ":"")+(e.checkedText||e.text)},"")||t.tParam("select").text})})}(),function(){n.match("select_mode_radio-check",function(t,e){t.applyBase().extend(t.js(),{text:e.text});var n=t.tParam("checkedOptions");n[0]&&t.content([{elem:"control",val:n[0].val},t.content()],!0)}),n.match("select_mode_radio-check__button",function(t){var e=t.tParam("checkedOptions");t.content({elem:"text",content:(e[0]||t.tParam("select")).text})})}(),function(){n.match("select_mode_radio",function(t){t.applyBase();var e=t.tParam("checkedOptions"),n=t.tParam("firstOption");n&&!e.length&&(n.checked=!0,e=[n]),t.tParam("checkedOption",e[0]).content([{elem:"control",val:e[0].val},t.content()],!0)}),n.match("select_mode_radio__button",function(t){t.content({elem:"text",content:t.tParam("checkedOption").text})})}(),function(){n.match("spin",function(t){t.tag("span")})}(),function(){n.match("textarea",function(t,e){var n={id:e.id,name:e.name,tabindex:e.tabIndex,placeholder:e.placeholder};e.autocomplete===!1&&(n.autocomplete="off"),t.mod("disabled")&&(n.disabled="disabled"),t.js(!0).tag("textarea").mix({elem:"control"}).attrs(n).content(e.val,!0)})}()},a=!0;"object"==typeof modules?(modules.define("BH",[],function(t){o(),t(n)}),modules.define("bh",["BH"],function(t){t(n)}),modules.define("BEMHTML",["BH"],function(t){t(n)}),a=!1):"object"==typeof exports&&(o(),n.bh=n,n.BEMHTML=n,module.exports=n,a=!1),a&&(o(),t.BH=n,t.bh=n,t.BEMHTML=n)}(this);