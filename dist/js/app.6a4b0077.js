(function(e){function t(t){for(var a,n,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&l.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,n=1;n<r.length;n++){var s=r[n];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({about:"about","checkout~login~product_detail~register":"checkout~login~product_detail~register",checkout:"checkout",login:"login",product_detail:"product_detail",register:"register"}[e]||e)+"."+{about:"465b3648","checkout~login~product_detail~register":"6187f184",checkout:"0a3d9ec3",login:"98c0c6e9",product_detail:"02e73bcc",register:"4a8b5900"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"checkout~login~product_detail~register":1,checkout:1,product_detail:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({about:"about","checkout~login~product_detail~register":"checkout~login~product_detail~register",checkout:"checkout",login:"login",product_detail:"product_detail",register:"register"}[e]||e)+"."+{about:"31d6cfe0","checkout~login~product_detail~register":"e5a04aaf",checkout:"5c8076a7",login:"31d6cfe0",product_detail:"f59da625",register:"31d6cfe0"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===a||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],p.parentNode.removeChild(p),r(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,r[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0d32":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"grey lighten-5"},e._l(e.all_categories,(function(t){return r("v-row",{key:t.id,staticClass:"mb-6",attrs:{justify:"center","no-gutters":""}},[r("keep-alive",[r("v-col",{staticClass:"blue-grey--text"},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"black white--text align-end",attrs:{height:"200px",src:t.image}}),r("v-card-subtitle",{staticClass:"pb-0 blue-grey--text"},[e._v(e._s(t.name))]),r("v-card-text",{staticClass:"text--primary"},[r("v-list",{attrs:{disabled:e.disabled,dense:e.dense,"two-line":e.twoLine,"three-line":e.threeLine,shaped:e.shaped,flat:e.flat,subheader:e.subheader,"sub-group":e.subGroup,nav:e.nav,avatar:e.avatar,rounded:e.rounded}},[r("v-list-item-group",{attrs:{color:"primary"}},e._l(t.products,(function(t){return r("v-list-item",{key:t.id},[r("v-list-item-content",[r("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/product_detail/"+t.id}},[r("v-list-item-title",[e._v(e._s(t.name))]),e.twoLine||e.threeLine?r("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.description)}}):e._e(),r("v-list-item-title",[e._v("R "+e._s(t.price))]),r("v-divider")],1)],1)],1)})),1)],1)],1),r("router-view")],1)],1)],1)],1)})),1)},n=[],o=r("5530"),i=r("2f62"),s={name:"Category",components:{},data:function(){return{disabled:!1,dense:!0,twoLine:!0,threeLine:!1,shaped:!1,flat:!1,subheader:!1,inactive:!1,subGroup:!1,nav:!1,avatar:!1,rounded:!1}},methods:Object(o["a"])({},Object(i["b"])(["fetchCatergories"])),computed:Object(i["c"])(["all_categories"]),created:function(){this.fetchCatergories()}},c=s,u=r("2877"),d=r("6544"),l=r.n(d),p=r("b0af"),m=r("99d9"),f=r("62ad"),_=r("a523"),h=r("ce7e"),g=r("adda"),v=r("8860"),b=r("da13"),w=r("5d23"),k=r("1baa"),C=r("0fd9"),y=Object(u["a"])(c,a,n,!1,null,null,null);t["a"]=y.exports;l()(y,{VCard:p["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCol:f["a"],VContainer:_["a"],VDivider:h["a"],VImg:g["a"],VList:v["a"],VListItem:b["a"],VListItemContent:w["a"],VListItemGroup:k["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:C["a"]})},1182:function(e,t,r){},"34ba":function(e,t,r){"use strict";var a=r("1182"),n=r.n(a);n.a},3693:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-carousel",{attrs:{cycle:"",height:"auto","hide-delimiter-background":"","show-arrows-on-hover":""}},e._l(e.items,(function(e,t){return r("v-carousel-item",{key:t,attrs:{src:e.src}})})),1)},n=[],o={name:"Carousel",data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["this is a first slide","this is the second slide","this ia a third slide"],items:[{src:"https://storestuff-assets.s3.amazonaws.com/media/user_media/2020/05/Free_to_use_1_luvM66w.png",text:"this is a first slide"},{src:"https://storestuff-assets.s3.amazonaws.com/media/user_media/2020/05/Free_to_use_2_49Z5kkX.png",text:"this is the second slide"},{src:"https://storestuff-assets.s3.amazonaws.com/media/user_media/2020/05/Free_to_use_1_luvM66w.png",text:"this ia a third slide"}]}}},i=o,s=r("2877"),c=r("6544"),u=r.n(c),d=r("5e66"),l=r("3e35"),p=Object(s["a"])(i,a,n,!1,null,null,null);t["a"]=p.exports;u()(p,{VCarousel:d["a"],VCarouselItem:l["a"]})},4360:function(e,t,r){"use strict";r("4de4"),r("4160"),r("159b"),r("96cf");var a=r("1da1"),n=r("2b0e"),o=r("2f62"),i=r("bc3a"),s=r.n(i),c=r("a18c");n["default"].use(o["a"]),t["a"]=new o["a"].Store({state:{authorization:"",jwt:localStorage.getItem("token"),username:localStorage.getItem("username"),username2:"",endpoints:{obtainJWT:"api-food_delivery/api/token/",refreshJWT:"api-food_delivery/api/token/refresh/",baseURL:"https://try-coding.herokuapp.com/"},loggedIn:"",registered:"",categories_data:[],resturants_data:[],products_data:[],product_detail_data:[],cart_id:"",user_cart_data:[],user_get_cart_sum:0,comments:[],addCartLoading:!1,completeCartLoading:!1},mutations:{updateToken:function(e,t){localStorage.setItem("token",t),e.jwt=t},removeToken:function(e){localStorage.removeItem("token"),e.jwt=null},updateUsername:function(e,t){localStorage.setItem("username",t),e.jwt=t},loginSuccess:function(e,t){e.loggedIn=!0,e.username=t,e.jwt=localStorage.getItem("token")},loginFailure:function(e){e.loggedIn=!1,e.username=null},registerSuccess:function(e){e.registered=!0,e.jwt=localStorage.getItem("token")},registerFailure:function(e){e.registered=!1},itemAddedCart:function(){n["default"].$toast.open("Failure to registered",{timeout:2e3})},nullShit:function(){},authHeader:function(e){var t=localStorage.getItem("token"),r=localStorage.getItem("username");e.authorization=r&&t?"Bearer "+t:""},addCategories:function(e,t){e.categories_data=t},addResturants:function(e,t){e.resturants_data=t},addProducts:function(e,t){e.products_data=t},addProductDetail:function(e,t){e.product_detail_data=t},addCartID:function(e,t){e.cart_id=t},addUserCartData:function(e,t){e.user_cart_data=t,e.user_get_cart_sum=t.get_cart_sum},addProductComments:function(e,t){e.comments=t},addCartLoad:function(e,t){e.addCartLoading=t},completeCartUser:function(e,t){e.completeCartLoading=t}},getters:{isLoggedIn:function(e){return!!e.jwt},userName:function(e){return e.username2},userjwt:function(e){return e.jwt},userName1:function(e){return e.username},cartQuantity:function(e){return e.cart_quantity},loggedIn:function(e){return e.loggedIn},all_categories:function(e){return e.categories_data},all_resturants:function(e){return e.resturants_data},all_products:function(e){return e.products_data},product_detail:function(e){return e.product_detail_data},user_cart:function(e){return e.user_cart_data},user_cart_sum:function(e){return e.user_get_cart_sum},product_comments:function(e){return e.comments},cart_loading:function(e){return e.addCartLoading},complete_cart_loading:function(e){return e.completeCartLoading}},actions:{obtainToken:function(e,t){var r=this,a=e.commit,o=t.username;s.a.post(this.state.endpoints.baseURL+this.state.endpoints.obtainJWT,t).then((function(e){a("updateToken",e.data.access),a("updateUsername",o);var t=e.data.token;s.a.defaults.headers.common["Authorization"]=t,r.state.username2=o,a("loginSuccess",o),c["a"].push("/"),n["default"].$toast.open("Login successful",{timeout:2e3})})).catch((function(e){a("loginFailure"),e.response.data.username?n["default"].$toast.error(e.response.data.username[0],{timeout:2e3}):e.response.data.email?n["default"].$toast.error(e.response.data.email[0],{timeout:2e3}):e.response.data.password?n["default"].$toast.error(e.response.data.password[0],{timeout:2e3}):e.response.data.detail?n["default"].$toast.error(e.response.data.detail,{timeout:2e3}):n["default"].$toast.error(e.response.data,{timeout:2e3})}))},newRegister:function(e,t){var r=this,a=e.commit,o=t.username,i=t.first_name,c=t.email,u=t.password,d=t.password_confirm;s.a.post(this.state.endpoints.baseURL+"api-food_delivery/auth/accounts/register/",{username:o,first_name:i,email:c,password:u,password_confirm:d}).then((function(e){r.dispatch("obtainToken",{username:o,password:u}),r.state.username2=o,console.log(e),a("registerSuccess"),n["default"].$toast.open("Registration successful",{timeout:2e3})})).catch((function(e){r.commit("registerFailure"),console.log("err: ",e.response.data),e.response.data.username?n["default"].$toast.error(e.response.data.username[0],{timeout:2e3}):e.response.data.email?n["default"].$toast.error(e.response.data.email[0],{timeout:2e3}):e.response.data.password?n["default"].$toast.error(e.response.data.password[0],{timeout:2e3}):e.response.data.password_confirm?n["default"].$toast.error(e.response.data.password_confirm[0],{timeout:2e3}):n["default"].$toast.error(e.response.data,{timeout:2e3})}))},getTestAPI:function(){var e={headers:{"Content-Type":"application/json",Authorization:this.state.authorization}};s.a.get(this.state.endpoints.baseURL+"api-food_delivery/api_food_delivery_productList/",e)},fetchCatergories:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.next=3,s.a.get(t.state.endpoints.baseURL+"api-food_delivery/api_food_delivery_catergory/");case 3:n=r.sent,a("addCategories",n.data);case 5:case"end":return r.stop()}}),r)})))()},fetchResturants:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.next=3,s.a.get(t.state.endpoints.baseURL+"api-food_delivery/api_food_delivery_resturent/");case 3:n=r.sent,a("addResturants",n.data);case 5:case"end":return r.stop()}}),r)})))()},fetchProductList:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.next=3,s.a.get(t.state.endpoints.baseURL+"api-food_delivery/api_food_delivery_productList/");case 3:n=r.sent,a("addProducts",n.data);case 5:case"end":return r.stop()}}),r)})))()},fetchProductDetail:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,s.a.get(r.state.endpoints.baseURL+"api-food_delivery/api_food_delivery_detail/"+t);case 3:o=a.sent,n("addProductDetail",o.data);case 5:case"end":return a.stop()}}),a)})))()},AddtoCart:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o,i,c,u,d,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,console.log("adding to cart lana"),n("addCartLoad",!0),o=t.prod_id,i=t.user_id,c=t.user_quantity,a.next=8,s.a.get(r.state.endpoints.baseURL+"api-accounts_profile/accounts_profile_detail/?search="+i);case 8:return u=a.sent,d=u.data[0].id,a.next=12,s.a.get(r.state.endpoints.baseURL+"api-shopping_cart3/api_shopping_cart3_cartList_byOwner/?search="+d);case 12:l=a.sent,r.dispatch("FilterUserCart",{responseCart:l,prod_id:o,user_id:i,responseProfile_id:d,user_quantity:c}),n("nullShit");case 15:case"end":return a.stop()}}),a)})))()},FilterUserCart:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o,i,c,u,d,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.commit,o=t.responseProfile_id,i=t.responseCart,c=t.prod_id,u=t.user_quantity,d=[],i.data.length>0&&(d=i.data.filter((function(e){return e.owner==o&&0==e.is_complete}))),n("nullShit"),0!=d.length){a.next=17;break}return a.next=11,s.a.post(r.state.endpoints.baseURL+"api-shopping_cart3/api_shopping_cart3_cartList_byOwner/?search="+o,{owner:o});case 11:l=a.sent,d=[l.data],r.dispatch("fetchCartDetailsUserProfile",{user_profile:o}),r.dispatch("AddCartItem",{new_array:d,prod_id:c,user_profile:o,user_quantity:u}),a.next=18;break;case 17:r.dispatch("AddCartItem",{new_array:d,prod_id:c,user_profile:o,user_quantity:u});case 18:case"end":return a.stop()}}),a)})))()},AddCartItem:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o,i,c,u,d,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=e.commit,n("nullShit"),o=t.new_array[0].cart_item,i=t.new_array[0].id,c=t.prod_id,u=t.user_quantity,d=t.user_profile,l=r.state.endpoints.baseURL+"api-shopping_cart3/api_shopping_cart3_cartItem/",s.a.post(l,{items:c,quantity:u}).then((function(e){r.dispatch("updateCart",{responseCart2:e,cart_id:i,user_profile:d,existing_items:o})}));case 9:case"end":return a.stop()}}),a)})))()},updateCart:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var o,i,c,u,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:o=e.commit,i=t.responseCart2.data.id,c=t.cart_id,u=t.existing_items,u.push(i),o("nullShit"),d=r.state.endpoints.baseURL+"api-shopping_cart3/api_shopping_cart3_cartdetail/"+c+"/",s.a.patch(d,{cart_item:u}).then((function(e){n["default"].$toast.open("Item added to cart"+e,{timeout:2e3}),console.log("Finished adding to cart"),o("addCartLoad",!1)}));case 8:case"end":return a.stop()}}),a)})))()},completeCart:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var o,i,c,u,d,l,p,m,f,_;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=e.commit,i=t.user_id,c=t.cell_number,u=t.delivery_address,d=t.comment,console.log("starting to complete cart"),o("completeCartUser",!0),a.next=9,s.a.get(r.state.endpoints.baseURL+"api-accounts_profile/accounts_profile_detail/?search="+i);case 9:return l=a.sent,p=l.data[0].id,o("nullShit"),a.next=14,s.a.get(r.state.endpoints.baseURL+"api-shopping_cart3/api_shopping_cart3_cartList_byOwner/?search="+p);case 14:m=a.sent,f=[],m.data.forEach((function(e){0==e.is_complete&&(f=e)})),_=r.state.endpoints.baseURL+"api-shopping_cart3/api_shopping_cart3_cartdetail/"+f.id+"/",s.a.patch(_,{cell_number:c,delivery_address:u,comment:d,is_complete:!0}).then((function(e){n["default"].$toast.open("Thank you for your order"+e,{timeout:4e3}),console.log("resupdateCart: ",e.data);var t=e.data.id;console.log("finished to complete cart"),o("completeCartUser",!1),console.log("orderDetails: ",t),r.dispatch("sendOrderEmail",{orderNo:t})}));case 19:case"end":return a.stop()}}),a)})))()},fetchCartDetails:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o,i,c,u,d,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,console.log("user_id cart detail: ",t.user_id),a.next=4,s.a.get(r.state.endpoints.baseURL+"api-accounts_profile/accounts_profile_detail/?search="+t);case 4:return o=a.sent,i=o.data[0].id,a.next=8,s.a.get(r.state.endpoints.baseURL+"api-shopping_cart3/api_shopping_cart3_cartList_byOwner/?search="+i);case 8:if(c=a.sent,u=[],c.data.forEach((function(e){0==e.is_complete&&(u=e)})),1!=u.is_complete){a.next=15;break}n("nullShit"),a.next=20;break;case 15:return d=r.state.endpoints.baseURL+"api-shopping_cart3/UIapi_shopping_cart3_cartdetail/"+u.id+"/",a.next=18,s.a.get(d);case 18:l=a.sent,n("addUserCartData",l.data);case 20:case"end":return a.stop()}}),a)})))()},fetchCartDetailsUserProfile:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o,i,c,u,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,o=t,a.next=4,s.a.get(r.state.endpoints.baseURL+"api-shopping_cart3/api_shopping_cart3_cartList_byOwner/?search="+o);case 4:if(i=a.sent,c=[],i.data.forEach((function(e){0==e.is_complete&&(c=e)})),1!=c.is_complete){a.next=11;break}n("nullShit"),a.next=16;break;case 11:return u=r.state.endpoints.baseURL+"api-shopping_cart3/UIapi_shopping_cart3_cartdetail/"+c.id+"/",a.next=14,s.a.get(u);case 14:d=a.sent,n("addUserCartData",d.data);case 16:case"end":return a.stop()}}),a)})))()},sendOrderEmail:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,n("nullShit"),o=t.orderNo,console.log("order_id: ",o),a.next=6,s.a.get(r.state.endpoints.baseURL+"api-shopping_cart3/api_shopping_userEmail/?cart_id="+o);case 6:i=a.sent,console.log("res_email: ",i);case 8:case"end":return a.stop()}}),a)})))()},fetchComments:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,s.a.get(r.state.endpoints.baseURL+"api_comments/comments/?search="+t.prod_id);case 3:o=a.sent,console.log("res_comments.data: ",o.data),n("addProductComments",o.data);case 6:case"end":return a.stop()}}),a)})))()},sendComment:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=e.commit,console.log("commit: ",n),o=t.prod_id,i=r.state.endpoints.baseURL+"api_comments/new_comment/",s.a.post(i,{user:t.user_id,product:t.prod_id,content:t.comment}).then((function(e){return r.dispatch("fetchComments",{prod_id:o,res_comment:e})})).catch((function(e){return console.error(e)}));case 5:case"end":return a.stop()}}),a)})))()},sendContact:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:o=e.commit,console.log("commit: ",o),i=r.state.endpoints.baseURL+"api_contact/api_contact/",s.a.post(i,{first_name:t.first_name,cell_number:t.cell_number,email:t.email}).then((function(e){console.log(e),n["default"].$toast.open("Thank you. We will get in touch soon",{timeout:4e3})}));case 4:case"end":return a.stop()}}),a)})))()},RemovefromCart:function(e,t){var r=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var n,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=e.commit,console.log("commit: ",n),console.log("item_id: ",t.item_id),console.log("user_id: ",t.user_id),o=t.user_id,i=r.state.endpoints.baseURL+"api-shopping_cart3/api_shopping_cart3_cartItem/"+t.item_id+"/",s.a.delete(i).then((function(e){return console.log(e)}),r.dispatch("fetchCartDetails",o)).catch((function(e){return console.error(e)}));case 7:case"end":return a.stop()}}),a)})))()}},modules:{}})},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=(r("d3b7"),r("bc3a")),o=r.n(n),i={},s=o.a.create(i);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},a["default"].use(Plugin);Plugin;var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("NavBar"),r("v-content")],1)},u=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-main",[r("v-app-bar",{attrs:{color:"#a67650",dense:"",dark:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-toolbar-title",[r("span",{staticClass:"font-weight-light"},[e._v("KasiFood")]),r("span",[e._v("Delivery")])]),r("v-spacer"),r("router-link",{staticClass:"router_link",attrs:{to:"/checkout"}},[r("v-btn",{staticClass:"pr-10 pt-5",attrs:{icon:""}},[r("v-badge",{attrs:{color:"green",content:""+e.user_cart_sum}},[r("v-icon",[e._v("mdi-cart")])],1)],1)],1)],1),r("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[e._v(" hi "+e._s(e.$store.getters.userName1)+" ")])],1)],1),r("v-divider"),r("v-list-item",[r("v-list-item-content",[r("router-link",{staticClass:"router_link",attrs:{to:"/"}},[r("v-btn",{attrs:{block:"",color:"",dark:""}},[e._v("Home")])],1),r("router-link",{staticClass:"router_link",attrs:{to:"/register"}},[r("v-btn",{attrs:{block:"",color:"",dark:""}},[e._v("Register")])],1),r("router-link",{staticClass:"router_link",attrs:{to:"/login"}},[r("v-btn",{attrs:{block:"",color:"",dark:""}},[e._v("Login")])],1),r("router-link",{staticClass:"router_link",attrs:{to:"/checkout"}},[r("v-btn",{attrs:{block:"",color:"warning",dark:""}},[e._v("My Orders "+e._s(e.user_cart_sum)+" Items")])],1),r("router-link",{staticClass:"router_link",attrs:{to:"/become_driver"}},[r("v-btn",{attrs:{block:"",color:"",dark:""}},[e._v("Become a Driver")])],1)],1)],1)],1),r("router-view")],1)],1)},l=[],p=r("5530"),m=r("2f62"),f=r("48ac"),_=r.n(f),h={name:"NavBar",components:{},data:function(){return{drawer:!1}},methods:Object(p["a"])({},Object(m["b"])(["fetchCartDetails"])),computed:Object(m["c"])(["userjwt","user_cart","user_cart_sum"]),created:function(){var e=_.a.decode(this.$store.getters.userjwt).user_id;this.fetchCartDetails(e)}},g=h,v=(r("34ba"),r("2877")),b=r("6544"),w=r.n(b),k=r("40dc"),C=r("5bc1"),y=r("4ca6"),x=r("8336"),L=r("ce7e"),R=r("132d"),j=r("da13"),O=r("5d23"),V=r("f6c4"),I=r("f774"),U=r("2fa4"),P=r("2a7f"),S=Object(v["a"])(g,d,l,!1,null,null,null),T=S.exports;w()(S,{VAppBar:k["a"],VAppBarNavIcon:C["a"],VBadge:y["a"],VBtn:x["a"],VDivider:L["a"],VIcon:R["a"],VListItem:j["a"],VListItemContent:O["a"],VListItemTitle:O["c"],VMain:V["a"],VNavigationDrawer:I["a"],VSpacer:U["a"],VToolbarTitle:P["a"]});var $={name:"App",components:{NavBar:T},data:function(){return{}}},D=$,E=r("7496"),A=r("a75b"),F=Object(v["a"])(D,c,u,!1,null,null,null),q=F.exports;w()(F,{VApp:E["a"],VContent:A["a"]});var N=r("a18c"),B=r("4360"),M=r("f309");a["default"].use(M["a"]);var z=new M["a"]({}),G=r("8203"),H=r.n(G),J=r("b079"),W=r.n(J);r("4238");a["default"].use(W.a),a["default"].component("vue-number-input",H.a),a["default"].config.productionTip=!1,new a["default"]({router:N["a"],store:B["a"],vuetify:z,render:function(e){return e(q)}}).$mount("#app")},"94af":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"grey lighten-5"},e._l(e.all_resturants,(function(t){return r("v-row",{key:t.id,staticClass:"mb-6",attrs:{justify:"center","no-gutters":""}},[r("keep-alive",[r("v-col",{staticClass:"blue-grey--text"},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"black white--text align-end",attrs:{height:"200px",src:t.image}}),r("v-card-subtitle",{staticClass:"pb-0 blue-grey--text"},[e._v(e._s(t.name))]),r("v-card-text",{staticClass:"text--primary"},[r("v-list",{attrs:{disabled:e.disabled,dense:e.dense,"two-line":e.twoLine,"three-line":e.threeLine,shaped:e.shaped,flat:e.flat,subheader:e.subheader,"sub-group":e.subGroup,nav:e.nav,avatar:e.avatar,rounded:e.rounded}},[r("v-list-item-group",{attrs:{color:"primary"}},e._l(t.products,(function(t){return r("v-list-item",{key:t.id},[r("v-list-item-content",[r("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/product_detail/"+t.id}},[r("v-list-item-title",[e._v(e._s(t.name))]),e.twoLine||e.threeLine?r("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.description)}}):e._e(),r("v-list-item-title",[e._v("R "+e._s(t.price))]),r("v-divider")],1)],1)],1)})),1)],1)],1),r("router-view")],1)],1)],1)],1)})),1)},n=[],o=r("5530"),i=r("2f62"),s={name:"Resturants",components:{},data:function(){return{disabled:!1,dense:!0,twoLine:!0,threeLine:!1,shaped:!1,flat:!1,subheader:!1,inactive:!1,subGroup:!1,nav:!1,avatar:!1,rounded:!1}},methods:Object(o["a"])({},Object(i["b"])(["fetchResturants"])),computed:Object(i["c"])(["all_resturants"]),created:function(){this.fetchResturants()}},c=s,u=r("2877"),d=r("6544"),l=r.n(d),p=r("b0af"),m=r("99d9"),f=r("62ad"),_=r("a523"),h=r("ce7e"),g=r("adda"),v=r("8860"),b=r("da13"),w=r("5d23"),k=r("1baa"),C=r("0fd9"),y=Object(u["a"])(c,a,n,!1,null,null,null);t["a"]=y.exports;l()(y,{VCard:p["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCol:f["a"],VContainer:_["a"],VDivider:h["a"],VImg:g["a"],VList:v["a"],VListItem:b["a"],VListItemContent:w["a"],VListItemGroup:k["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:C["a"]})},a18c:function(e,t,r){"use strict";r("45fc"),r("d3b7");var a=r("2b0e"),n=r("8c4f"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"root"},[r("Carousel"),r("UserFilter"),r("Resturant")],1)},i=[],s=r("adad"),c=r("94af"),u=r("0d32"),d=r("3693"),l={name:"Root",components:{Resturant:c["a"],Category:u["a"],Carousel:d["a"],UserFilter:s["a"]}},p=l,m=r("2877"),f=Object(m["a"])(p,o,i,!1,null,null,null),_=f.exports,h=r("4360");a["default"].use(n["a"]);var g=[{path:"/",name:"Home",component:_},{path:"/myorders",name:"MyOrders",meta:{requiresAuth:!0},component:function(){return r.e("about").then(r.bind(null,"65a8"))}},{path:"/register",name:"Register",component:function(){return Promise.all([r.e("checkout~login~product_detail~register"),r.e("register")]).then(r.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return Promise.all([r.e("checkout~login~product_detail~register"),r.e("login")]).then(r.bind(null,"a55b"))}},{path:"/resturant",name:"Resturant",component:function(){return Promise.all([r.e("checkout~login~product_detail~register"),r.e("register")]).then(r.bind(null,"f47c"))}},{path:"/category",name:"Category",component:function(){return Promise.all([r.e("checkout~login~product_detail~register"),r.e("login")]).then(r.bind(null,"4886"))}},{path:"/product_detail/:id",name:"ProductDetail",meta:{requiresAuth:!0},component:function(){return Promise.all([r.e("checkout~login~product_detail~register"),r.e("product_detail")]).then(r.bind(null,"5f47"))}},{path:"/checkout",name:"Checkout",meta:{requiresAuth:!0},component:function(){return Promise.all([r.e("checkout~login~product_detail~register"),r.e("checkout")]).then(r.bind(null,"7cb4"))}},{path:"/become_driver",name:"BecomeDriver",component:function(){return Promise.all([r.e("checkout~login~product_detail~register"),r.e("checkout")]).then(r.bind(null,"470c"))}}],v=new n["a"]({routes:g});v.beforeEach((function(e,t,r){if(e.matched.some((function(e){return e.meta.requiresAuth}))){if(h["a"].getters.isLoggedIn)return void r();r("/login")}else r()}));t["a"]=v},adad:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"8"}},[r("h3",{staticClass:"blue-grey--text"},[e._v("Filter by:")])])],1),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"8"}},[r("router-link",{staticClass:"router_link",attrs:{to:"/resturant"}},[r("v-btn",{attrs:{rounded:"",color:"primary","dar+k":""}},[e._v(" Resturant ")])],1),r("router-link",{staticClass:"router_link",attrs:{to:"/category"}},[r("v-btn",{attrs:{rounded:"",color:"primary",dark:""}},[e._v(" Food Type ")])],1)],1)],1)],1)],1)},n=[],o={name:"Filter"},i=o,s=r("2877"),c=r("6544"),u=r.n(c),d=r("8336"),l=r("62ad"),p=r("a523"),m=r("0fd9"),f=Object(s["a"])(i,a,n,!1,null,null,null);t["a"]=f.exports;u()(f,{VBtn:d["a"],VCol:l["a"],VContainer:p["a"],VRow:m["a"]})}});
//# sourceMappingURL=app.6a4b0077.js.map