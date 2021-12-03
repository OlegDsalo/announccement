(this.webpackJsonpannouncement=this.webpackJsonpannouncement||[]).push([[0],{141:function(e,t,n){},143:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);n(0);var c=n(18),i=n.n(c),a=n(19),s=n(27),r=n(10),d=n(129),l=n(224),j=n(222),o=n(221),u=n(223),b=n(126),m=n(42),O=function(e){return e.announcements},x=Object(m.a)(O,(function(e){return e.announcements})),h=Object(m.a)(O,(function(e){return e.announcement})),p=Object(m.a)(O,(function(e){return e.isFiltered})),f=Object(m.a)(O,(function(e){return e.filtered})),v=Object(m.a)(O,(function(e){return e.single})),g=n(24),A=n(20),y=(0,n(78).createSlice)({name:"announcements",initialState:{announcements:[{id:0,title:"dog",description:"dog eat apple",dateAdded:"21.10.1120"},{id:1,title:"dog play in forest ",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. s eu purus dapibus condimentum in nec turpis. Pellentesque dictum id.",dateAdded:"21.10.1120"},{id:2,title:"dog gav gav",description:"dog eat apple",dateAdded:"21.10.1120"},{id:3,title:"ogston raw asas",description:"og eat apple",dateAdded:"21.10.1120"},{id:4,title:"cat",description:"cat eat meat",dateAdded:"11.1.2020"},{id:5,title:"monkey",description:"monkey code javascript",dateAdded:"11.5.2021"},{id:6,title:"dxgcfgvjhbkjnl",description:"jnkm;;mmk; mk",dateAdded:"11.5.2021"},{id:7,title:"map is a function",description:"map is array based function",dateAdded:"11.5.2021"}],announcement:[],filtered:[],isFiltered:!1,similar:[]},reducers:{addAnnouncement:function(e,t){e.announcements=[t.payload].concat(Object(g.a)(e.announcements))},deleteAnnouncement:function(e,t){e.announcements=e.announcements.filter((function(e){return e.id!==t.payload.id}))},editAnnouncement:function(e,t){var n=t.payload.id,c=Object(A.a)(e.announcements);e.announcements=c.map((function(e){return e.id===n?t.payload:e}))},getAnnouncementById:function(e,t){var n=t.payload;e.single=e.announcements.find((function(e){return e.id===n}))},filterAnnouncement:function(e,t){var n=t.payload,c=Object(A.a)(e.announcements);n?(e.filtered=c.filter((function(e){return-1!==e.title.search(n)})),e.isFiltered=!0):(e.isFiltered=!1,e.filtered=e.announcements)},similarAnnouncement:function(e,t){var n=t.payload,c=n.title,i=n.id,a=c.charAt(0),s=e.announcements.filter((function(e){return e.id!==i})).filter((function(e){return-1!==e.title.search(a)&&-1!==e.description.search(a)}));e.announcement=s.slice(0,3)}}}),N=y.reducer,q=y.actions,k=q.addAnnouncement,T=q.deleteAnnouncement,S=q.editAnnouncement,D=q.getAnnouncementById,w=q.filterAnnouncement,L=q.similarAnnouncement,C=(n(141),n(4)),z=function(){var e=Object(a.b)(),t=Object(a.c)(x),n=Object(a.c)(f),c=Object(a.c)(p)?n:t;return Object(C.jsxs)(j.a,{className:"announcements",children:[Object(C.jsx)("h1",{children:"Announcements "}),Object(C.jsx)(o.a,{onChange:function(t){var n=t.target.value.toLowerCase();e(w(n))}}),c.map((function(t){return Object(C.jsxs)(j.a,{justify:"space-between",className:"container",xs:23,sm:23,md:23,lg:11,xl:11,xxl:11,children:[Object(C.jsxs)(u.a,{children:[Object(C.jsx)(s.b,{to:"/announcement/".concat(t.id),children:Object(C.jsxs)("h2",{children:["Title: \xa0",t.title]})}),Object(C.jsxs)("p",{children:["Date added: \xa0",t.dateAdded]}),Object(C.jsxs)("p",{children:["Description: \xa0",t.description]})]}),Object(C.jsxs)(u.a,{className:"icon-block",children:[Object(C.jsx)(s.b,{to:"/announcement/".concat(t.id,"/edit"),children:Object(C.jsx)(b.a,{className:"icon",type:"primary",size:"large",shape:"circle",icon:Object(C.jsx)(d.a,{})})}),Object(C.jsx)(b.a,{className:"icon",type:"primary",onClick:(n=t.id,function(){return e(T({id:n}))}),size:"large",shape:"circle",icon:Object(C.jsx)(l.a,{})})]})]},t.id);var n}))]})},F=n(31),M=n(91),B=(n(143),n(225)),E=n(37),I=function(){var e,t,n=Object(M.a)(),c=n.register,i=n.handleSubmit,s=n.formState.errors,d=Object(a.b)(),l=Object(r.f)();return Object(C.jsxs)("form",{className:"form-add-anc",onSubmit:i((function(e){var t=Math.floor(993*Math.random()+7),n=Object(F.a)(Object(F.a)({},e),{},{id:t});d(k(n)),l("/")})),children:[Object(C.jsx)("h1",{children:"Add Announcement"}),Object(C.jsxs)("label",{children:[Object(C.jsx)(E.a,{level:5,children:" Title:"}),Object(C.jsx)("input",Object(F.a)({},c("title",{required:!0,maxLength:50}))),s.title&&"required"===(null===(e=s.title)||void 0===e?void 0:e.type)&&Object(C.jsx)("span",{className:"error",role:"alert",children:"This is required"}),s.title&&"maxLength"===(null===(t=s.title)||void 0===t?void 0:t.type)&&Object(C.jsx)("span",{className:"error",role:"alert",children:"Max length exceeded 30 "})]}),Object(C.jsxs)("label",{children:[Object(C.jsx)(E.a,{level:5,children:"Description: "}),Object(C.jsx)("textarea",Object(F.a)({},c("description",{required:!0}))),s.descriptio&&Object(C.jsx)("span",{className:"error",role:"alert",children:"This is required"})]}),Object(C.jsxs)("label",{children:[Object(C.jsx)(E.a,{level:5,children:"Date added:"}),Object(C.jsx)("input",Object(F.a)({type:"date",min:"2020-01-01",max:"2025-01-01"},c("dateAdded",{required:!0}))),s.dateAdded&&Object(C.jsx)("span",{className:"error",children:"This field is required"})]}),Object(C.jsx)("button",{className:"add-button",type:"submit",children:Object(C.jsx)(B.a,{})})]})},V=(n(213),function(){var e=Object(a.c)(x),t=Object(a.b)(),n=Object(a.c)(f),c=Object(a.c)(p),i=c?n:e;return Object(C.jsxs)(j.a,{className:"homepage",children:[Object(C.jsx)("h1",{children:"Announcements "}),Object(C.jsx)(o.a,{onChange:function(e){var n=e.target.value.toLowerCase();t(w(n))}}),i.map((function(e){return Object(C.jsxs)(j.a,{justify:"space-between",className:"home-announcements",xs:23,sm:23,md:23,lg:11,xl:11,xxl:11,children:[Object(C.jsx)(u.a,{span:22,children:Object(C.jsx)(s.b,{to:"/announcement/".concat(e.id),children:Object(C.jsx)("h1",{className:"title",children:e.title})})}),Object(C.jsxs)(u.a,{span:2,className:"icon-block",children:[Object(C.jsx)(s.b,{to:"/announcement/".concat(e.id,"/edit"),children:Object(C.jsx)(b.a,{type:"primary",shape:"circle",icon:Object(C.jsx)(d.a,{}),className:"icon",size:"large"})}),Object(C.jsx)(b.a,{type:"primary",onClick:(n=e.id,function(){return t(T({id:n}))}),shape:"circle",icon:Object(C.jsx)(l.a,{}),className:"icon",size:"large"})]})]},e.id);var n}))]})}),J=n(71),H=(n(214),function(){var e=Object(r.g)().id,t=Object(a.b)();t(D(Number(e)));var n=Object(a.c)(v);t(L({title:n.title,id:n.id}));var c=Object(a.c)(h);return Object(C.jsxs)("div",{className:"single-announcements",children:[Object(C.jsxs)("div",{className:"single-announcement",children:[Object(C.jsxs)(E.a,{level:5,children:["Title:",n.title]}),Object(C.jsxs)(J.a,{children:["Date added:",n.dateAdded]}),Object(C.jsx)(J.a,{children:n.description}),Object(C.jsx)(s.b,{to:"/announcement/".concat(e,"/edit"),children:Object(C.jsx)(b.a,{className:"icon",type:"primary",size:"large",shape:"circle",icon:Object(C.jsx)(d.a,{})})})]}),0===c.length?null:Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{children:"Similar Announcements"}),c.map((function(e){return Object(C.jsxs)("div",{className:"similar-announcement",children:[Object(C.jsxs)(E.a,{level:5,children:["Title:",e.title]}),Object(C.jsxs)(J.a,{children:["Date added:",e.dateAdded]}),Object(C.jsx)(J.a,{children:e.description})]},e.id)}))]})]})}),P=(n(215),function(){var e,t,n=Object(a.b)(),c=Object(r.g)().id,i=Object(M.a)(),s=i.register,d=i.handleSubmit,l=i.formState.errors,j=Object(r.f)();n(D(Number(c)));var o=Object(a.c)(v);return Object(C.jsxs)("form",{className:"edit-form",onSubmit:d((function(e){var t=Object(F.a)(Object(F.a)({},e),{},{id:Number(c)});t.title&&t.description&&t.dateAdded&&(n(S(t)),j("/"))})),children:[Object(C.jsx)(E.a,{level:3,children:"Edit post ".concat(c)}),Object(C.jsxs)("label",{children:[Object(C.jsx)(E.a,{level:5,children:" Title:"}),Object(C.jsx)("input",Object(F.a)(Object(F.a)({},s("title",{required:!0,maxLength:50})),{},{defaultValue:o.title})),l.title&&"required"===(null===(e=l.title)||void 0===e?void 0:e.type)&&Object(C.jsx)("span",{className:"error",role:"alert",children:"This is required"}),l.title&&"maxLength"===(null===(t=l.title)||void 0===t?void 0:t.type)&&Object(C.jsx)("span",{className:"error",role:"alert",children:"Max length exceeded 30 "})]}),Object(C.jsxs)("label",{children:[Object(C.jsx)(E.a,{level:5,children:"Description: "}),Object(C.jsx)("textarea",Object(F.a)(Object(F.a)({},s("description",{required:!0})),{},{defaultValue:o.description})),l.description&&Object(C.jsx)("span",{className:"error",children:"This field is required"})]}),Object(C.jsxs)("label",{children:[Object(C.jsx)(E.a,{level:5,children:"Date added:"}),Object(C.jsx)("input",Object(F.a)(Object(F.a)({type:"date",min:"2020-01-01",max:"2025-01-01"},s("dateAdded",{required:!0,max:10})),{},{defaultValue:o.dateAdded})),l.dateAdded&&Object(C.jsx)("span",{className:"error",children:"This field is required"})]}),Object(C.jsx)("button",{className:"edit-button",type:"submit",children:"Edit announcement"})]})}),G=(n(216),function(){return Object(C.jsx)("div",{className:"error-page",children:Object(C.jsx)("h1",{children:" 404"})})}),K=(n(217),function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsxs)("header",{children:[Object(C.jsx)(s.b,{to:"/",children:"Home"}),Object(C.jsx)(s.b,{to:"/announcement",children:"Announcement"}),Object(C.jsx)(s.b,{to:"/add",children:"Add announcement "})]}),Object(C.jsxs)(r.c,{children:[Object(C.jsx)(r.a,{path:"/",element:Object(C.jsx)(V,{})}),Object(C.jsx)(r.a,{path:"/announcement",element:Object(C.jsx)(z,{})}),Object(C.jsx)(r.a,{path:"/add",element:Object(C.jsx)(I,{})}),Object(C.jsx)(r.a,{path:"/announcement/:id",element:Object(C.jsx)(H,{})}),Object(C.jsx)(r.a,{path:"/announcement/:id/edit",element:Object(C.jsx)(P,{})}),Object(C.jsx)(r.a,{path:"*",element:Object(C.jsx)(G,{})})]})]})}),Q=n(78),R=Object(Q.configureStore)({reducer:{announcements:N}});n(218),n(219);i.a.render(Object(C.jsx)(a.a,{store:R,children:Object(C.jsx)(s.a,{children:Object(C.jsx)(K,{})})}),document.getElementById("root"))}},[[220,1,2]]]);
//# sourceMappingURL=main.ca89ffb6.chunk.js.map