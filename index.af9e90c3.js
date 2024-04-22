function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t,n,r,i,l,o){try{var s=e[l](o),u=s.value}catch(e){n(e);return}s.done?t(u):Promise.resolve(u).then(r,i)}function n(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function l(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=0,s=document.getElementById("game-score"),u=document.getElementById("message-start"),a=document.getElementById("message-lose"),c=document.getElementById("message-win"),f=document.getElementById("button-start"),m=document.getElementById("game-board"),h=!1,y=function(){function e(t){n(this,e),t.style.setProperty("--grid-size",4),t.style.setProperty("--cell-size","".concat(75,"px")),t.style.setProperty("--gap-size","".concat(5,"px")),this._cells=(function(e){for(var t=[],n=0;n<16;n++){var r=document.createElement("div");r.classList.add("cell"),t.push(r),e.append(r)}return t})(t).map(function(e,t){return new d(e,t%4,Math.floor(t/4))})}return i(e,[{key:"cells",get:function(){return this._cells}},{key:"cellsByColumn",get:function(){return this._cells.reduce(function(e,t){return e[t.x]=e[t.x]||[],e[t.x][t.y]=t,e},[])}},{key:"cellsByRow",get:function(){return this._cells.reduce(function(e,t){return e[t.y]=e[t.y]||[],e[t.y][t.x]=t,e},[])}},{key:"_emptyCells",get:function(){return this._cells.filter(function(e){return null==e.tile})}},{key:"randomEmptyCell",value:function(){var e=Math.floor(Math.random()*this._emptyCells.length);return this._emptyCells[e]}}]),e}(),d=function(){function e(t,r,i){n(this,e),this._cellElement=t,this._x=r,this._y=i}return i(e,[{key:"x",get:function(){return this._x}},{key:"y",get:function(){return this._y}},{key:"tile",get:function(){return this._tile},set:function(e){this._tile=e,null!=e&&(this._tile.x=this._x,this._tile.y=this._y)}},{key:"mergeTile",get:function(){return this._mergeTile},set:function(e){this._mergeTile=e,null!=e&&(this._mergeTile.x=this._x,this._mergeTile.y=this._y)}},{key:"canAccept",value:function(e){return null==this.tile||null==this.mergeTile&&this.tile.value===e.value}},{key:"mergeTiles",value:function(){null!=this.tile&&null!=this.mergeTile&&(o+=this.tile.value,this.tile.value=this.tile.value+this.mergeTile.value,L(),this.mergeTile.remove(),this.mergeTile=null,2048===this.tile.value&&(c.classList.remove("message--hidden"),f.classList.remove("button--restart"),f.textContent="Start",f.classList.add("button--start"),window.removeEventListener("keydown",_),h=!0))}}]),e}(),v=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.random()>.1?2:4;n(this,e),this._tileElement=document.createElement("div"),this._tileElement.classList.add("tile"),t.append(this._tileElement),this.value=r}return i(e,[{key:"value",get:function(){return this._value},set:function(e){this._value=e,this._tileElement.textContent=e,this._tileElement.classList.add("tile--".concat(this._value))}},{key:"x",get:function(){return this._x},set:function(e){this._x=e,this._tileElement.style.setProperty("--x",e)}},{key:"y",get:function(){return this._y},set:function(e){this._y=e,this._tileElement.style.setProperty("--y",e)}},{key:"remove",value:function(){this._tileElement.remove()}},{key:"waitForTransition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this;return new Promise(function(n){t._tileElement.addEventListener(e?"animationend":"transitionend",n,{once:!0})})}}]),e}();f.addEventListener("click",function(){o=0,L(),g(),f.classList.remove("button--start"),f.classList.add("button--restart"),f.textContent="↻",a.classList.add("message--hidden"),u.classList.add("message--hidden"),c.classList.add("message--hidden"),p.cells.forEach(function(e){null!=e.tile&&(e.tile.remove(),e.tile=null)}),p.randomEmptyCell().tile=new v(m),p.randomEmptyCell().tile=new v(m),h=!1,g()});var p=new y(m);function g(){window.addEventListener("keydown",_,{once:!0})}function _(e){return w.apply(this,arguments)}function w(){var e;return e=function(e){var t;return function(e,t){var n,r,i,l,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(l){return function(s){return function(l){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(6===l[0]&&o.label<i[1]){o.label=i[1],i=l;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(l);break}i[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}(this,function(n){switch(n.label){case 0:if(h)return[2];switch(e.key){case"ArrowUp":return[3,1];case"ArrowDown":return[3,3];case"ArrowLeft":return[3,5];case"ArrowRight":return[3,7]}return[3,9];case 1:if(!E())return g(),[2];return[4,b(p.cellsByColumn)];case 2:case 4:case 6:case 8:return n.sent(),[3,10];case 3:if(!k())return g(),[2];return[4,b(p.cellsByColumn.map(function(e){return l(e).reverse()}))];case 5:if(!x())return g(),[2];return[4,b(p.cellsByRow)];case 7:if(!C())return g(),[2];return[4,b(p.cellsByRow.map(function(e){return l(e).reverse()}))];case 9:return g(),[2];case 10:if(p.cells.forEach(function(e){return e.mergeTiles()}),t=new v(m),p.randomEmptyCell().tile=t,!E()&&!k()&&!x()&&!C())return t.waitForTransition(!0).then(function(){a.classList.remove("message--hidden"),f.textContent="Restart"}),[2];return g(),[2]}})},(w=function(){var n=this,r=arguments;return new Promise(function(i,l){var o=e.apply(n,r);function s(e){t(o,i,l,s,u,"next",e)}function u(e){t(o,i,l,s,u,"throw",e)}s(void 0)})}).apply(this,arguments)}function b(e){return Promise.all(e.flatMap(function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];if(null!=r.tile){for(var i=void 0,l=n-1;l>=0;l--){var o=e[l];if(!o.canAccept(r.tile))break;i=o}null!=i&&(t.push(r.tile.waitForTransition()),null!=i.tile?i.mergeTile=r.tile:i.tile=r.tile,r.tile=null)}}return t}))}function E(){return T(p.cellsByColumn)}function k(){return T(p.cellsByColumn.map(function(e){return l(e).reverse()}))}function x(){return T(p.cellsByRow)}function C(){return T(p.cellsByRow.map(function(e){return l(e).reverse()}))}function T(e){return e.some(function(e){return e.some(function(t,n){return 0!==n&&null!=t.tile&&e[n-1].canAccept(t.tile)})})}function L(){s.textContent=o}
//# sourceMappingURL=index.af9e90c3.js.map
