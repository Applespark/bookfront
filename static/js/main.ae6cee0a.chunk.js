(this.webpackJsonpdqflex=this.webpackJsonpdqflex||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},61:function(e,t,c){},66:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(14),r=c.n(s),o=(c(40),c(7)),i=c(3),l="https://3.37.128.71",d={fetchDQsPick:"/all",fetchActionMovies:"/genres/action",fetchComedyMovies:"/genres/comedy",fetchHorrorMovies:"/genres/horror",fetchRomanceMovies:"/genres/romance"},j=(c(41),c(8)),b=c(16),u=c(17),h=c.n(u),m=c(29),f=c.n(m).a.create({baseURL:l}),O=(c(61),c(1)),v=function(){var e,t,c=Object(n.useState)([]),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(d.fetchDQsPick,{headers:{"Access-Control-Allow-Origin":"*"}});case 2:return t=e.sent,r(t.data.result[Math.floor(Math.random()*t.data.result.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("header",{className:"banner",style:{backgroundImage:'url(\n                    "https://image.tmdb.org/t/p/original/'.concat(null===s||void 0===s?void 0:s.poster_path,'"\n                    )'),backgroundPosition:"top center",backgroundSize:"cover"},children:[Object(O.jsxs)("div",{className:"banner__contents",children:[Object(O.jsx)("h1",{className:"banner__title",children:(null===s||void 0===s?void 0:s.title)||(null===s||void 0===s?void 0:s.name)||(null===s||void 0===s?void 0:s.original_name)}),Object(O.jsx)("div",{className:"banner__buttons",children:Object(O.jsxs)("button",{className:"banner__button play",children:[Object(O.jsx)(h.a,{}),"Play"]})}),Object(O.jsx)("h1",{className:"banner__description",children:(e=null===s||void 0===s?void 0:s.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(O.jsx)("div",{className:"banner--fadeBottom"})]})},p=(c(66),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>50?a(!0):a(!1)})),function(){window.removeEventListener("scroll",(function(){}))}}),[]),Object(O.jsxs)("nav",{className:"nav ".concat(c&&"nav__black"),children:[Object(O.jsx)("img",{alt:"DQflex logo",src:"https://i.ibb.co/svtr2tD/dqflex-logo.png",className:"nav__logo"}),Object(O.jsx)("img",{alt:"User logged",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",className:"nav__avatar"})]})}),x=c(19),g=c(33),_=c.n(g),w=c(34),N=c.n(w),k=c(32),M=c.n(k),y=c(31),R=c.n(y),C=(c(69),function(e){var t=e.poster_path,c=e.movieId,n=e.title,a=e.genres,s=e.url,r=e.rating_avg,o=e.rating_count,i=e.setModalVisibility,d=e.addRating;return Object(O.jsx)("div",{className:"presentation",role:"presentation",children:Object(O.jsx)("div",{className:"wrapper-modal",children:Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsx)("span",{onClick:function(){return i(!1)},className:"modal-close",children:Object(O.jsx)(M.a,{})}),Object(O.jsxs)("div",{className:"modal__header",children:[Object(O.jsx)("img",{className:"modal__poster-img",src:"".concat(t),alt:"".concat(n)}),Object(O.jsxs)("div",{className:"modal__content",children:[Object(O.jsxs)("p",{className:"modal__details",children:[Object(O.jsx)("span",{className:"modal__user-perc",children:"Genre: "})," ",a.replaceAll("|"," | ")]}),Object(O.jsx)("h3",{className:"modal__title",children:n}),Object(O.jsxs)("p",{className:"modal__overview",children:["Vote Average: ",r.toFixed(2)]}),Object(O.jsxs)("p",{className:"modal__overview",children:["Vote Count: ",o]}),Object(O.jsxs)("div",{className:"modal__header",children:[Object(O.jsxs)("button",{className:"banner__button play",onClick:function(){window.open(s)},children:[Object(O.jsx)(h.a,{}),"Detail"]}),Object(O.jsx)(R.a,{count:5,onChange:function(e){var t="".concat(c,":").concat(e);console.log(t),d(t),i(!1)},size:24,color2:"#ffd700"})]})]})]}),Object(O.jsx)(A,{title:"You may also like...",id:c,fetchUrl:"".concat(l,"/item-based/").concat(c)})]})})})}),A=(c(70),function(e){var t=e.title,c=e.fetchUrl,a=(e.id,e.addRating),s=Object(n.useState)([]),r=Object(i.a)(s,2),o=r[0],l=r[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2),h=u[0],m=u[1],v=Object(n.useState)({}),p=Object(i.a)(v,2),g=p[0],w=p[1],k=Object(n.useRef)(null);Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get(c,{headers:{"Access-Control-Allow-Origin":"*"}});case 3:t=e.sent,l(t.data.result),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]);return Object(O.jsxs)("section",{className:"row",children:[Object(O.jsx)("h2",{children:t}),Object(O.jsxs)("div",{className:"slider",children:[Object(O.jsx)("div",{className:"slider__arrow-left",children:Object(O.jsx)("span",{className:"arrow",onClick:function(){k.current&&(k.current.scrollLeft-=window.innerWidth-80)},children:Object(O.jsx)(_.a,{})})}),Object(O.jsx)("div",{ref:k,className:"row__posters",children:o.map((function(e,t){return Object(O.jsx)("img",{onClick:function(){return function(e){m(!0),w(e)}(e)},className:"row__poster row__posterLarge",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),loading:"lazy",alt:e.title},t)}))}),Object(O.jsx)("div",{className:"slider__arrow-right",children:Object(O.jsx)("span",{className:"arrow",onClick:function(){k.current&&(k.current.scrollLeft+=window.innerWidth-80)},children:Object(O.jsx)(N.a,{})})})]}),h&&Object(O.jsx)(C,Object(x.a)(Object(x.a)({},g),{},{setModalVisibility:m,addRating:a}))]})}),U=function(){var e=Object(n.useState)(l+"/all"),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(i.a)(s,2),j=r[0],b=r[1],u=function(e){b((function(t){return[].concat(Object(o.a)(t),[e])}))};return Object(n.useEffect)((function(){if(j.length>0){var e=j.join("&params="),t="".concat(l,"/user-based/?params=").concat(e);a(t)}}),[j]),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(p,{}),Object(O.jsx)(v,{}),Object(O.jsx)(A,{title:"Recommend For You",id:"RF",fetchUrl:c,addRating:u},c),Object(O.jsx)(A,{title:"DQ's Pick",id:"DP",fetchUrl:d.fetchDQsPick,addRating:u}),Object(O.jsx)(A,{title:"Action Movies",id:"AM",fetchUrl:d.fetchActionMovies,addRating:u}),Object(O.jsx)(A,{title:"Comedy Movies",id:"CM",fetchUrl:d.fetchComedyMovies,addRating:u}),Object(O.jsx)(A,{title:"Horror Movies",id:"HM",fetchUrl:d.fetchHorrorMovies,addRating:u}),Object(O.jsx)(A,{title:"Romance  Movies",id:"RM",fetchUrl:d.fetchRomanceMovies,addRating:u})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.ae6cee0a.chunk.js.map