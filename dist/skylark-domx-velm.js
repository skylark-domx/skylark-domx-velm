/**
 * skylark-domx-velm - The skylark velm library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,r){var n=r.define,t=r.require,o="function"==typeof n&&n.amd,a=!o&&"undefined"!=typeof exports;if(!o&&!n){var i={};n=r.define=function(e,r,n){"function"==typeof n?(i[e]={factory:n,deps:r.map(function(r){return function(e,r){if("."!==e[0])return e;var n=r.split("/"),t=e.split("/");n.pop();for(var o=0;o<t.length;o++)"."!=t[o]&&(".."==t[o]?n.pop():n.push(t[o]));return n.join("/")}(r,e)}),resolved:!1,exports:null},t(e)):i[e]={factory:null,resolved:!0,exports:n}},t=r.require=function(e){if(!i.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var n=i[e];if(!n.resolved){var o=[];n.deps.forEach(function(e){o.push(t(e))}),n.exports=n.factory.apply(r,o)||null,n.resolved=!0}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,r){e("skylark-domx-velm/velm",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-eventer","skylark-domx-finder","skylark-domx-query"],function(e,r,n,t,o,a,i){var l=Array.prototype.map,s=Array.prototype.slice,u=r.klass({klassName:"VisualElement",_construct:function(e){r.isString(e)&&(e="<"===e.charAt(0)?n.createFragment(e)[0]:document.getElementById(e)),this._elm=e}});u.prototype.$=u.prototype.query=function(e){return i(e,this._elm)},u.prototype.elm=function(){return this._elm};var c=new u(document.body),f=function(e){return e?new u(e):c};r.mixin(f,{batch:function(e,r,n){return e.forEach(function(e){var t=e instanceof u?e:f(e);t[r].apply(t,n)}),this},root:new u(document.body),VisualElement:u,partial:function(e,r){var n={};n[e]=r,u.partial(n)},delegate:function(e,n){var t={};e.forEach(function(e){t[e]=function(e,n){return function(){var t=this._elm,o=e.apply(n,[t].concat(s.call(arguments)));if(o){if(o===n)return this;o instanceof HTMLElement?o=new u(o):r.isArrayLike(o)&&(o=l.call(o,function(e){return e instanceof HTMLElement?new u(e):e}))}return o}}(n[e],n)}),u.partial(t)}}),f.delegate(["attr","data","prop","removeAttr","removeData","text","val"],t),f.delegate(["off","on","one","shortcuts","trigger"],o),f.delegate(["ancestor","ancestors","children","descendant","find","findAll","firstChild","lastChild","matches","nextSibling","nextSiblings","parent","previousSibling","previousSiblings","siblings"],a),f.find=function(e){return"body"===e?this.root:this.root.descendant(e)},f.delegate(["after","append","before","clone","contains","contents","empty","html","isChildOf","isDocument","isInDocument","isWindow","ownerDoc","prepend","remove","removeChild","replace","reverse","throb","traverse","wrapper","wrapperInner","unwrap"],n);return["keyUp","keyDown","mouseOver","mouseOut","click","dblClick","change"].forEach(function(e){var r=e;u.prototype[r]=function(r){return this.on(e.toLowerCase(),r),this}}),e.attach("domx.velm",f)}),e("skylark-domx-velm/main",["./velm"],function(e){return e}),e("skylark-domx-velm",["skylark-domx-velm/main"],function(e){return e})}(n),!o){var l=t("skylark-langx/skylark");a?module.exports=l:r.skylarkjs=l}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-velm.js.map
