"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[164],{127:function(e,t,n){n.d(t,{N:function(){return i}});var r=n(861),a=n(757),c=n.n(a),s=n(912),i=function(){var e=(0,r.Z)(c().mark((function e(t,n,r){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/".concat(t),{method:"get",params:{api_key:"c69fb8daa91af9db5bc79adaff004050",query:n,page:r}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},244:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(439),a=n(689),c=n(791),s=n(127),i="Cast_item__PnSVd",u="Cast_img__XGMPG",o="Cast_imgNotFound__XpV0E",d=n(184),l=function(){var e=(0,c.useState)(null),t=(0,r.Z)(e,2),n=t[0],l=t[1],h=(0,a.UO)().movieId;if((0,c.useEffect)((function(){(0,s.N)("movie/".concat(h,"/credits")).then((function(e){return l(e.cast)})).catch(console.log)}),[h]),n)return(0,d.jsx)(d.Fragment,{children:n.length>0?(0,d.jsx)("ul",{children:n.slice(0,19).map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return(0,d.jsxs)("li",{className:i,children:[a?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:n,className:u,width:"100"}):(0,d.jsx)("div",{className:o,children:"Image not found"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:(0,d.jsx)("b",{children:n})}),(0,d.jsxs)("p",{children:["Character: ",(0,d.jsx)("b",{children:r})]})]})]},t)}))}):(0,d.jsx)("div",{children:"No casts"})})}}}]);
//# sourceMappingURL=164.76a8e329.chunk.js.map