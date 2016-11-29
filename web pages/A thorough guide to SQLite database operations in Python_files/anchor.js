/**
 * AnchorJS - v3.1.0 - 2016-02-12
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2016 Bryan Braun; Licensed MIT
 */
function AnchorJS(A){"use strict";function e(A){A.icon=A.hasOwnProperty("icon")?A.icon:"",A.visible=A.hasOwnProperty("visible")?A.visible:"hover",A.placement=A.hasOwnProperty("placement")?A.placement:"right",A.class=A.hasOwnProperty("class")?A.class:"",A.truncate=A.hasOwnProperty("truncate")?Math.floor(A.truncate):64}function t(A){var e;if("string"==typeof A||A instanceof String)e=[].slice.call(document.querySelectorAll(A));else{if(!(Array.isArray(A)||A instanceof NodeList))throw new Error("The selector provided to AnchorJS was invalid.");e=[].slice.call(A)}return e}function n(){if(null===document.head.querySelector("style.anchorjs")){var A,e=document.createElement("style"),t=" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",n=" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",o=' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',i=" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";e.className="anchorjs",e.appendChild(document.createTextNode("")),A=document.head.querySelector('[rel="stylesheet"], style'),void 0===A?document.head.appendChild(e):document.head.insertBefore(e,A),e.sheet.insertRule(t,e.sheet.cssRules.length),e.sheet.insertRule(n,e.sheet.cssRules.length),e.sheet.insertRule(i,e.sheet.cssRules.length),e.sheet.insertRule(o,e.sheet.cssRules.length)}}this.options=A||{},this.elements=[],e(this.options),this.isTouchDevice=function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(A){var o,i,s,a,r,c,l,h,g,u,B,Q,f=[];if(e(this.options),Q=this.options.visible,"touch"===Q&&(Q=this.isTouchDevice()?"always":"hover"),A||(A="h1, h2, h3, h4, h5, h6"),o=t(A),0===o.length)return!1;for(n(),i=document.querySelectorAll("[id]"),s=[].map.call(i,function(A){return A.id}),r=0;r<o.length;r++)if(this.hasAnchorJSLink(o[r]))f.push(r);else{if(o[r].hasAttribute("id"))a=o[r].getAttribute("id");else{h=this.urlify(o[r].textContent),g=h,l=0;do void 0!==c&&(g=h+"-"+l),c=s.indexOf(g),l+=1;while(-1!==c);c=void 0,s.push(g),o[r].setAttribute("id",g),a=g}u=a.replace(/-/g," "),B=document.createElement("a"),B.className="anchorjs-link "+this.options.class,B.href="#"+a,B.setAttribute("aria-label","Anchor link for: "+u),B.setAttribute("data-anchorjs-icon",this.options.icon),"always"===Q&&(B.style.opacity="1"),""===this.options.icon&&(B.style.fontFamily="anchorjs-icons",B.style.fontStyle="normal",B.style.fontVariant="normal",B.style.fontWeight="normal",B.style.lineHeight=1,"left"===this.options.placement&&(B.style.lineHeight="inherit")),"left"===this.options.placement?(B.style.position="absolute",B.style.marginLeft="-1em",B.style.paddingRight="0.5em",o[r].insertBefore(B,o[r].firstChild)):(B.style.paddingLeft="0.375em",o[r].appendChild(B))}for(r=0;r<f.length;r++)o.splice(f[r]-r,1);return this.elements=this.elements.concat(o),this},this.remove=function(A){for(var e,n,o=t(A),i=0;i<o.length;i++)n=o[i].querySelector(".anchorjs-link"),n&&(e=this.elements.indexOf(o[i]),-1!==e&&this.elements.splice(e,1),o[i].removeChild(n));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(A){var t,n=/[& +$,:;=?@"#{}|^~[`%!'\]\.\/\(\)\*\\]/g;return this.options.truncate||e(this.options),t=A.trim().replace(/\'/gi,"").replace(n,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(A){var e=(" "+A.firstChild.className+" ").indexOf(" anchorjs-link ")>-1,t=(" "+A.lastChild.className+" ").indexOf(" anchorjs-link ")>-1;return e||t}}var anchors=new AnchorJS;