(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,n,t){e.exports=t(14)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(2),c=t.n(u),o=(t(10),t(3)),i=(t(11),t(12),function(e){var n=e.onChange,t=e.count;return r.a.createElement("div",{className:"NumberPicker"},r.a.createElement("input",{type:"number",value:t,onChange:function(e){return n(Number(e.target.value))}}))}),l=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return 0===n?0:1===n?1:t[n]?t[n]:t[n]=e(n-1,t)+e(n-2,t)},m=(t(13),function(e){var n=e.count;if(0===n)return null;var t=function(e){for(var n=[],t={};n.length<e;)n.push(l(n.length,t));return n}(n);return r.a.createElement("div",{className:"NumberSequence"},t.map(function(e,n){return r.a.createElement("div",{key:n,className:"FibonacciNumber"},e)}))}),s=function(){var e=Object(a.useState)(0),n=Object(o.a)(e,2),t=n[0],u=n[1];return r.a.createElement("div",{className:"App"},r.a.createElement("span",null,"Generate the first ",r.a.createElement("strong",null,"n")," numbers in the Fibonacci sequence."),r.a.createElement(i,{onChange:u}),r.a.createElement(m,{count:t}))};c.a.render(r.a.createElement(s,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.28649fe3.chunk.js.map