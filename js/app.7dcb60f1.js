(function(t){function e(e){for(var n,o,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},c=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"12751540"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(t);var u=new Error;c=function(e){s.onerror=s.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",u.name="ChunkLoadError",u.type=n,u.request=c,r[1](u)}a[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=u;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0b1e":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r(t.layout,{tag:"component"},[r("router-view")],1)],1)},c=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"page"},[r("ShadowBlock"),r("Cart"),r("header",{staticClass:"header"},[r("div",{staticClass:"container"},[r("div",{staticClass:"header__row"},[t._m(0),r("div",{staticClass:"header__left"},[r("div",{staticClass:"header__logo"},[r("router-link",{attrs:{to:"#"}},[r("img",{attrs:{src:"img/logo.svg",alt:""}})])],1),r("nav",{staticClass:"header__navigation"},[r("ul",[r("li",[r("router-link",{attrs:{to:"#"}},[t._v("Продукты")])],1),r("li",[r("router-link",{attrs:{to:"#"}},[t._v("Цвета")])],1),r("li",[r("router-link",{attrs:{to:"#"}},[t._v("Вдохновение")])],1),r("li",[r("router-link",{attrs:{to:"#"}},[t._v("Советы")])],1),r("li",[r("router-link",{attrs:{to:"#"}},[t._v("Найти магазин")])],1)])])]),r("div",{staticClass:"header__right"},[t._m(1),r("div",{staticClass:"header__personal"},[t._m(2),r("button",{staticClass:"header__cart_opener",on:{click:function(e){t.$store.state.active="cart"}}},[t._v(t._s(t.$store.getters.count))])])])])])]),r("div",{staticClass:"content"},[r("Breadcrumbs"),r("h2",{staticClass:"mobile-title container"},[t._v("Краски")]),r("router-view")],1),r("footer",{staticClass:"footer"})],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header__burger"},[r("input",{attrs:{id:"burger",type:"checkbox"}}),r("label",{attrs:{for:"burger"}},[r("span")]),r("div",{staticClass:"burger"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header__phone"},[r("a",{attrs:{href:"tel:+74952217769"}},[t._v("+7 (495) 221-77-69")]),r("button",{staticClass:"header__callback_opener"},[t._v("Заказать звонок")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("button",{staticClass:"header__search_opener"},[r("img",{attrs:{src:"img/icons/search.svg",alt:""}})])]),r("li",[r("button",{staticClass:"header__profile_opener"},[r("img",{attrs:{src:"img/icons/profile.svg",alt:""}})])]),r("li",[r("button",{staticClass:"header__favorites_opener"},[r("img",{attrs:{src:"img/icons/favorites.svg",alt:""}})])])])}],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shadow",class:t.$store.state.active?"active":"",on:{click:function(e){t.$store.state.active=""}}})},u=[],l=r("2877"),d={},f=Object(l["a"])(d,s,u,!1,null,null,null),p=f.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart",class:"cart"===t.$store.state.active?"active":""},[r("div",{staticClass:"cart__top"},[r("div",{staticClass:"cart__title"},[t._v("Корзина")]),r("button",{staticClass:"cart__closer",on:{click:function(e){return t.cartClose()}}},[r("img",{attrs:{src:"img/icons/close.svg",alt:""}})])]),t.loading?r("Loader"):r("div",{staticClass:"cart__main"},[r("div",{staticClass:"cart__table-top"},[r("p",{staticClass:"cart__count"},[t._v(t._s(t.count)+" товар"+t._s(t.ending))]),r("button",{staticClass:"cart__clear",on:{click:function(e){return t.updateCart({func:"clear"})}}},[t._v("очистить список")])]),r("table",{staticClass:"cart__table"},t._l(t.cartItems,(function(e,n){return r("tr",{staticClass:"cart__item cart-item"},[r("td",{staticClass:"cart-item__image"},[r("img",{attrs:{src:"img/products/"+e.src,alt:""}})]),r("td",{staticClass:"cart-item__info"},[r("router-link",{staticClass:"cart-item__title",attrs:{to:"#"}},[t._v(t._s(e.title))]),r("p",{staticClass:"cart-item__price"},[r("span",[t._v(t._s(e.price))]),t._v(" ₽")])],1),r("td",{staticClass:"cart-item__decrement"},[r("button",{on:{click:function(r){return t.updateCart({item:e,index:n,func:"decrement"})}}},[r("img",{attrs:{src:"img/icons/minus.svg",alt:""}})])]),r("td",{staticClass:"cart-item__count"},[t._v(t._s(e.count))]),r("td",{staticClass:"cart-item__increment"},[r("button",{on:{click:function(r){return t.updateCart({item:e,index:n,func:"increment"})}}},[r("img",{attrs:{src:"img/icons/plus.svg",alt:""}})])]),r("td",{staticClass:"cart-item__remove"},[r("button",{on:{click:function(r){return t.updateCart({item:e,index:n,func:"remove"})}}},[r("img",{attrs:{src:"img/icons/close.svg",alt:""}})])])])})),0)]),r("div",{staticClass:"cart__bottom"},[r("div",{staticClass:"cart__total"},[r("p",[t._v("Итого")]),r("p",{staticClass:"total"},[t._v(t._s(t.total)+"₽")])]),r("button",{staticClass:"cart__submit"},[t._v("Оформить заказ")])])],1)},v=[],_=r("1da1"),h=(r("96cf"),r("fc1c")),g={name:"cart",data:function(){return{loading:!0,ending:"ов"}},methods:{cartClose:function(){this.$store.commit("setActive","")},filterEnding:function(){return this.count%10===1&&1!==Math.floor(this.count%100/10)?"":this.count%10!==2&&this.count%10!==3&&this.count%10!==4||1===Math.floor(this.count%100/10)?"ов":"а"},updateCart:function(t){this.$store.dispatch("updateCart",t),this.ending=this.filterEnding()}},mounted:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getCart");case 2:t.ending=t.filterEnding(),t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},computed:{cartItems:function(){return this.$store.getters.cart},count:function(){return this.$store.getters.count},total:function(){return this.$store.getters.total}},components:{Loader:h["a"]}},b=g,C=Object(l["a"])(b,m,v,!1,null,null,null),w=C.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumbs"},[r("div",{staticClass:"container"},[r("ul",{staticClass:"breadcrumbs__row"},[r("li",[r("router-link",{attrs:{to:"#"}},[t._v("Главная")])],1),r("li",[r("router-link",{attrs:{to:"#"}},[t._v("Продукты")])],1),r("li",[r("router-link",{attrs:{to:"#"}},[t._v("Краски")])],1)])])])},k=[],x={},P=Object(l["a"])(x,y,k,!1,null,null,null),j=P.exports,E={name:"main-layout",components:{ShadowBlock:p,Cart:w,Breadcrumbs:j}},O=E,$=Object(l["a"])(O,o,i,!1,null,null,null),S=$.exports,M={computed:{layout:function(){return"main-layout"}},components:{MainLayout:S}},A=M,R=(r("5c0b"),Object(l["a"])(A,a,c,!1,null,null,null)),B=R.exports,L=r("9483");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7"),r("3ca3"),r("ddb0");var T=r("8c4f");n["a"].use(T["a"]);var I=[{path:"/",name:"Catalog",component:function(){return r.e("about").then(r.bind(null,"247d"))}}],N=new T["a"]({mode:"history",base:"/",routes:I}),q=N,F=r("2f62"),J=(r("159b"),r("a434"),r("c740"),r("bc3a")),z=r.n(J),D={state:{cart:[],count:0,total:0},mutations:{setCart:function(t,e){e.cart.forEach((function(e){t.cart.push(e)})),t.count=e.count,t.total=e.total},updateCart:function(t,e){if("decrement"===e.func)t.count--,t.total-=e.item.price,1===e.item.count?t.cart.splice(e.index,1):t.cart[e.index].count--;else if("increment"===e.func)t.cart[e.index].count++,t.count++,t.total+=e.item.price;else if("remove"===e.func)t.count-=e.item.count,t.total-=e.item.count*e.item.price,t.cart.splice(e.index,1);else if("clear"===e.func)t.count=0,t.total=0,t.cart.splice(0,t.cart.length);else if("add"===e.func){var r=t.cart.findIndex((function(t){return t.id===e.item.id}));r>=0?t.cart[r].count++:(e.item.count=1,t.cart.push(e.item)),t.count++,t.total+=e.item.price}}},actions:{getCart:function(t){return Object(_["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,z.a.get("/server/cart.json").then((function(t){var e=t.data.cartItems,n=t.data.count,a=t.data.total;r("setCart",{cart:e,count:n,total:a})})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},updateCart:function(t,e){var r=t.commit;r("updateCart",e)}},getters:{cart:function(t){return t.cart},count:function(t){return t.count},total:function(t){return t.total}}},G=(r("caad"),r("2532"),r("4de4"),{state:{sort:"",products:[],amount:0,filteredProducts:[]},mutations:{setProducts:function(t,e){e.forEach((function(e){t.products.push(e),t.filteredProducts.push(e)})),t.amount=t.filteredProducts.length},filterProducts:function(t,e){0===e.length?(t.filteredProducts.splice(0,t.filteredProducts.length),t.products.forEach((function(e){t.filteredProducts.push(e)}))):e.includes("available")?t.filteredProducts=t.products.filter((function(t){if(t.number<=0)return!1;var r=!0;return e.forEach((function(e){"available"===e||t.types.includes(e)||(r=!1)})),r})):t.filteredProducts=t.products.filter((function(t){var r=!0;return e.forEach((function(e){t.types.includes(e)||(r=!1)})),r})),t.amount=t.filteredProducts.length},sortProducts:function(t,e){t.sort=e,"expensive"===e?t.filteredProducts.sort((function(t,e){return t.price<e.price?1:-1})):"cheap"===e?t.filteredProducts.sort((function(t,e){return t.price>e.price?1:-1})):"popular"===e?t.filteredProducts.sort((function(t){return t.types.includes("exclusive")||t.types.includes("sale")?1:-1})):"new"===e&&t.filteredProducts.sort((function(t){return t.types.includes("new")?1:-1}))}},actions:{getProducts:function(t){return Object(_["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,z.a.get("/server/products.json").then((function(t){var e=t.data.products;r("setProducts",e)})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()}},getters:{filteredProducts:function(t){return t.filteredProducts},amount:function(t){return t.amount}}});n["a"].use(F["a"]);var H=new F["a"].Store({state:{active:""},mutations:{setActive:function(t,e){t.active=e}},modules:{cart:D,catalog:G}});n["a"].config.productionTip=!1,new n["a"]({router:q,store:H,render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},ae49:function(t,e,r){"use strict";r("0b1e")},fc1c:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading"},[t._v("Какое-то окно загрузки....")])},a=[],c=(r("ae49"),r("2877")),o={},i=Object(c["a"])(o,n,a,!1,null,null,null);e["a"]=i.exports}});
//# sourceMappingURL=app.7dcb60f1.js.map