!function(){"use strict";function e(e,t,n){var a=document.createElement(e);return a.setAttribute("class",t),void 0!==n&&(Array.isArray(n)||(n=[n]),n.forEach((function(e){e&&a.appendChild(e)}))),a}var t;!function(){var e=/^sect(\d)$/,t=document.querySelector(".nav-container"),n=document.querySelector(".nav-toggle");if(t&&n){n&&n.addEventListener("click",(function(e){if(n.classList.contains("is-active"))return d(e);var a=document.documentElement;a.classList.add("is-clipped--nav"),n.classList.add("is-active"),t.classList.add("is-active"),a.addEventListener("click",d),u(e)})),t&&t.addEventListener("click",u);var a=t.querySelector("[data-panel=menu]");if(!a)return;var o=t.querySelector(".nav"),i=a.querySelector(".is-current-page"),r=i;i?(s(i),m(a,i.querySelector(".nav-link"))):a.scrollTop=0,v(a,".nav-item-toggle").forEach((function(e){var t=e.parentElement;e.addEventListener("click",l.bind(t));var n=function(e,t){var n=e.nextElementSibling;if(!n)return;return t?n[n.matches?"matches":"msMatchesSelector"](t)&&n:n}(e,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",l.bind(t)))})),o.querySelector(".context")&&o.querySelector(".context").addEventListener("click",(function(){var e=o.querySelector(".is-active[data-panel]"),t="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),o.querySelector("[data-panel="+t+"]").classList.toggle("is-active")})),a.addEventListener("mousedown",(function(e){e.detail>1&&e.preventDefault()})),a&&a.querySelector('.nav-link[href^="#"]')&&(window.location.hash&&c(),window.addEventListener("hashchange",c))}function c(){var t,n,o=window.location.hash;if(o&&(o.indexOf("%")&&(o=decodeURIComponent(o)),!(t=a.querySelector('.nav-link[href="'+o+'"]')))){var c=document.getElementById(o.slice(1));if(c)for(var l=c,d=document.querySelector("article.doc");(l=l.parentNode)&&l!==d;){var u=l.id;if(!u&&(u=l.className.match(e))&&(u=(l.firstElementChild||{}).id),u&&(t=a.querySelector('.nav-link[href="#'+u+'"]')))break}}if(t)n=t.parentNode;else{if(!r)return;t=(n=r).querySelector(".nav-link")}n!==i&&(v(a,".nav-item.is-active").forEach((function(e){e.classList.remove("is-active","is-current-path","is-current-page")})),n.classList.add("is-current-page"),i=n,s(n),m(a,t))}function s(e){for(var t,n=e.parentNode;!(t=n.classList).contains("nav-menu");)"LI"===n.tagName&&t.contains("nav-item")&&t.add("is-active","is-current-path"),n=n.parentNode;e.classList.add("is-active")}function l(){this.classList.toggle("is-active")}function d(e){var a=document.documentElement;a.classList.remove("is-clipped--nav"),n.classList.remove("is-active"),t.classList.remove("is-active"),a.removeEventListener("click",d),u(e)}function u(e){e.stopPropagation()}function m(e,t){var n=e.getBoundingClientRect(),a=n.height,i=window.getComputedStyle(o);"sticky"===i.position&&(a-=n.top-parseFloat(i.top)),e.scrollTop=Math.max(0,.5*(t.getBoundingClientRect().height-a)+t.offsetTop)}function v(e,t){return[].slice.call(e.querySelectorAll(t))}}(),function(){var e=document.querySelector("aside.toc.sidebar");if(e){if(document.querySelector("body.-toc"))return e.parentNode.removeChild(e);var t=parseInt(e.dataset.levels||2);if(!(t<0)){for(var n,a,o,i,r=document.querySelector("article.doc"),c=[],s=0;s<=t;s++)c.push(s?".sect"+s+">h"+(s+1)+"[id]":"h1[id].sect0");if(!(a=c.join(","),o=r,n=[].slice.call((o||document).querySelectorAll(a))).length)return e.parentNode.removeChild(e);var l={},d=n.reduce((function(e,t){var n=document.createElement("a");n.textContent=t.textContent,l[n.href="#"+t.id]=n;var a=document.createElement("li");return a.dataset.level=parseInt(t.nodeName.slice(1))-1,a.appendChild(n),e.appendChild(a),e}),document.createElement("ul")),u=e.querySelector(".toc-menu");u||((u=document.createElement("div")).className="toc-menu");var m=document.createElement("h2");m.textContent=e.dataset.title||"Contents",u.appendChild(m),u.appendChild(d);var v=!document.getElementById("toc")&&r.querySelector("h1.page ~ :not(.is-before-toc)");if(v){var f=document.createElement("aside");f.className="toc embedded",f.appendChild(u.cloneNode(!0)),v.parentNode.insertBefore(f,v)}window.addEventListener("load",(function(){p(),window.addEventListener("scroll",p)}))}}function p(){var e,t=window.pageYOffset,a=1.15*h(document.documentElement,"fontSize"),o=r.offsetTop;if(t&&window.innerHeight+t+2>=document.documentElement.scrollHeight){i=Array.isArray(i)?i:Array(i||0);var c=[],s=n.length-1;return n.forEach((function(e,t){var n="#"+e.id;t===s||e.getBoundingClientRect().top+h(e,"paddingTop")>o?(c.push(n),i.indexOf(n)<0&&l[n].classList.add("is-active")):~i.indexOf(n)&&l[i.shift()].classList.remove("is-active")})),d.scrollTop=d.scrollHeight-d.offsetHeight,void(i=c.length>1?c:c[0])}if(Array.isArray(i)&&(i.forEach((function(e){l[e].classList.remove("is-active")})),i=void 0),n.some((function(t){if(t.getBoundingClientRect().top+h(t,"paddingTop")-a>o)return!0;e="#"+t.id})),e){if(e===i)return;i&&l[i].classList.remove("is-active");var u=l[e];u.classList.add("is-active"),d.scrollHeight>d.offsetHeight&&(d.scrollTop=Math.max(0,u.offsetTop+u.offsetHeight-d.offsetHeight)),i=e}else i&&(l[i].classList.remove("is-active"),i=void 0)}function h(e,t){return parseFloat(window.getComputedStyle(e)[t])}}(),function(){var e=document.querySelector("article.doc"),t=document.querySelector(".toolbar"),n=document.querySelector("header > .navbar");function a(e){return e&&(~e.indexOf("%")?decodeURIComponent(e):e).slice(1)}function o(t,n){return e.contains(t)?o(t.offsetParent,t.offsetTop+n):n}function i(e){e&&(window.location.hash="#"+this.id,e.preventDefault());var a=t?t.getBoundingClientRect().bottom:n.getBoundingClientRect().bottom;window.scrollTo(0,o(this,0)-a)}window.addEventListener("load",(function e(t){var n,o;(n=a(window.location.hash))&&(o=document.getElementById(n))&&(i.bind(o)(),setTimeout(i.bind(o),0)),window.removeEventListener("load",e)})),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach((function(e){var t,n;(t=a(e.hash))&&(n=document.getElementById(t))&&e.addEventListener("click",i.bind(n))}))}(),function(){var e=document.querySelector(".page-versions .version-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",(function(e){t.classList.toggle("is-active"),e.stopPropagation()})),document.documentElement.addEventListener("click",(function(){t.classList.remove("is-active")}))}}(),document.addEventListener("DOMContentLoaded",(function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==e.length&&e.forEach((function(e){e.addEventListener("click",(function(t){t.stopPropagation(),e.classList.toggle("is-active"),document.getElementById(e.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")}))}))})),t=/\\\s*$/,window.neo4jDocs={copyableCommand:function(e){var n=e;if(e.startsWith("$ ")){for(var a=n.split("\n"),o="",i=[],r=!1,c=0;c<a.length;c++){var s=a[c];(r||s.startsWith("$ "))&&(r?o+="\n"+s:s.startsWith("$ ")&&(o=s.substr(2,s.length)),(r=s.match(t))||i.push(o))}n=i.join("; ")}return n}},document.addEventListener("DOMContentLoaded",(function(){var t=["gram"],n=function(e,t){var n=document.createElement("div");n.innerHTML=e,Array.from(n.querySelectorAll("i.conum, b")).map((function(e){n.removeChild(e)}));var a=document.createElement("textarea"),o=n.innerHTML;return"bash"!==t&&"sh"!==t&&"shell"!==t&&"console"!==t||(o=window.neo4jDocs.copyableCommand(o)),a.innerHTML=o,a.value};document.querySelectorAll(".highlight").forEach((function(a){var o=a.parentElement.parentElement;if(!o.classList.contains("noheader")){var i=!o.classList.contains("nocopy"),r=!o.classList.contains("noplay"),c=a.querySelector("code"),s=a.parentNode,l=c.innerHTML,d=c.hasAttribute("class")&&c.getAttribute("class").match(/language-([a-z0-9-])+/i)[0].replace("language-","");if(!(d&&t.indexOf(d.toLowerCase())>-1)){var u=document.createElement("div");u.className="code-language",d&&(u.innerHTML=function(e){var t,n;switch(e){case"csharp":case"dotnet":t="C#";break;case"javascript":t="JavaScript";break;default:t=(n=e).charAt(0).toUpperCase()+n.slice(1)}return t}(d));var m=[u];if(i){var v=e("button","btn btn-copy",[document.createTextNode("Copy to Clipboard")]);v.addEventListener("click",(function(e){e.preventDefault(),function(e,t){var a=document.createElement("textarea");a.value=n(e,t),a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),window.mixpanel&&window.mixpanel.track("DOCS_CODE_COPY",{pathname:window.location.origin+window.location.pathname,search:window.location.search,hash:window.location.hash,language:t,code:a.value})}(l,d);var t=e.target,a=t.innerHTML,o=t.clientWidth;t.style.width=o+"px",t.classList.add("btn-success"),t.innerHTML="Copied!",setTimeout((function(){t.style.width="",t.innerHTML=a,t.classList.remove("btn-success")}),1e3)})),m.push(v)}if("cypher"===d&&r){var f=e("button","btn btn-run btn-primary",[document.createTextNode("Run in Neo4j Browser")]);f.addEventListener("click",(function(e){e.preventDefault(),window.location.href="neo4j-desktop://graphapps/neo4j-browser?cmd=edit&arg="+encodeURIComponent(n(l)),window.mixpanel&&window.mixpanel.track("DOCS_CODE_RUN_IN_BROWSER",{pathname:window.location.origin+window.location.pathname,search:window.location.search,hash:window.location.hash,language:d,code:n(l)})})),m.push(f)}var p=s.parentNode.querySelector(".title");if(p){var h=document.createElement("div");h.className="code-title",h.innerHTML=p.innerHTML,p.style.display="none",m.unshift(h)}var g=e("div","code-header",m);a.className+=" has-header",s.insertBefore(g,a)}}}));var a="tabbed-target--active",o="tabbed-tab--active",i=function(e){var t=e.target,n=t.innerHTML;document.querySelectorAll('.tabbed-target[data-title="'+n+'"]').forEach((function(e){e.parentElement.querySelectorAll("."+a).forEach((function(e){e.classList.remove(a)})),e.classList.add(a),e.parentElement.parentElement.querySelectorAll("."+o).forEach((function(e){e.classList.remove(o)})),e.parentElement.parentElement.querySelectorAll('.tabbed-tab[data-title="'+n+'"]').forEach((function(e){e.classList.add(o)}))}));var i=0,r=document.querySelector(".toolbar");r.offsetHeight&&(i=r.offsetHeight);var c=document.querySelector(".navbar").offsetHeight+i+20,s=document.body.getBoundingClientRect().top,l=t.getBoundingClientRect().top-s-c;window.scrollTo({top:l,behavior:"smooth"})};Array.from(document.querySelectorAll(".tabs")).forEach((function(t){for(var n=t,a=t.parentElement,o=[t];t;){var r=t.nextElementSibling;r&&!r.classList.contains("sect2")&&r.querySelector("code")?(o.push(r),t=r):t=!1}if(!(o.length<=1)){var c=e("div","tabbed-container",[]),s=e("div","tabbed",[c]);a.insertBefore(s,n);var l=o.map((function(t){var n,a=t.querySelector(".title"),o=t.querySelector(".code-language");a?n=a.innerHTML:o&&(n=o.innerHTML);var r=e("li","tabbed-tab",[document.createTextNode(n)]);return t.dataset.title=n,r.dataset.title=n,r.addEventListener("click",i),r}));l[0].classList.add("tabbed-tab--active"),s.insertBefore(e("ul","tabbed-tabs",l),c),o.forEach((function(e){a.removeChild(e),c.appendChild(e),e.classList.add("tabbed-target")})),o[0].classList.add("tabbed-target--active")}}))})),document.addEventListener("DOMContentLoaded",(function(){function t(e){return e.charAt(0).toUpperCase()+e.slice(1)}var n="tabbed-target--active",a="tabbed-tab--active",o=void 0!==window.sessionStorage&&"function"==typeof window.sessionStorage.getItem&&"function"==typeof window.sessionStorage.setItem,i=function(e){var t=e.target,i=t.dataset.lang,r=t.dataset.title;document.querySelectorAll('.tabbed-target[data-title="'+r+'"]').forEach((function(e){e.parentElement.querySelectorAll("."+n).forEach((function(e){e.classList.remove(n)})),e.classList.add(n),e.parentElement.parentElement.querySelectorAll("."+a).forEach((function(e){e.classList.remove(a)})),e.parentElement.parentElement.querySelectorAll('.tabbed-tab[data-title="'+r+'"]').forEach((function(e){e.classList.add(a)}))}));var c=0,s=document.querySelector(".toolbar");s.offsetHeight&&(c=s.offsetHeight);var l=document.querySelector(".navbar").offsetHeight+c+20,d=document.body.getBoundingClientRect().top,u=t.getBoundingClientRect().top-d-l;window.scrollTo({top:u,behavior:"smooth"}),o&&window.sessionStorage.setItem("code_example_language",i),window.mixpanel&&window.mixpanel.track("DOCS_TAB_CHANGE",{pathname:window.location.origin+window.location.pathname,search:window.location.search,hash:window.location.hash,language:i,title:r})},r=["train","stream","stats","mutate","write"],c=["dotnet","go","java","javascript","python"].concat(r),s="dotnet";if(o){var l=new URLSearchParams(window.location.search).get("language");if(l&&c.includes(l.toLocaleLowerCase()))s=l.toLocaleLowerCase(),window.sessionStorage.setItem("code_example_language",s);else{var d=window.sessionStorage.getItem("code_example_language");d&&c.includes(d)&&(s=d)}}Array.from(document.querySelectorAll(".tabbed-example")).forEach((function(n){var o=n.querySelector(".title"),l=n,d=n.parentElement,u=[],m=!1;if(c.forEach((function(e){n.querySelectorAll(".include-with-"+e).forEach((function(t){t.setAttribute("data-title",e),t.setAttribute("data-lang",e),u.push(t),r.includes(e)&&(m=!0)}))})),!(u.length<=1)||m){var v=e("div","tabbed-container",[]),f=e("div","tabbed",[v]);o&&d.insertBefore(o,l),d.insertBefore(f,l);var p=u.map((function(n){var o=n.getAttribute("data-lang"),r=function(e){var n;switch(e){case"csharp":case"dotnet":n="C#";break;case"javascript":n="JavaScript";break;case"mutate":case"stats":case"stream":case"train":case"write":n=t(e)+" mode";break;default:n=t(e)}return n}(o),c=e("li","tabbed-tab",[document.createTextNode(r)]);return n.dataset.title=r,n.dataset.lang=o,c.dataset.title=r,c.dataset.lang=o,o===s&&c.classList.add(a),c.addEventListener("click",i),c})),h=!1;if(u.forEach((function(e){v.appendChild(e),e.classList.add("tabbed-target"),e.getAttribute("data-lang")===s&&(e.classList.add("tabbed-target--active"),h=!0)})),!h){var g=u[0].getAttribute("data-lang"),b=0;u.forEach((function(e){e.getAttribute("data-lang")===g&&(e.classList.add("tabbed-target--active"),p[b].classList.add("tabbed-tab--active")),b++}))}f.insertBefore(e("ul","tabbed-tabs",p),v),d.removeChild(l)}}))}))}();
