(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{20:function(e,t,n){e.exports={container:"employees_container__yCd8K",popup:"employees_popup__2b71X",popupContent:"employees_popupContent__3AWUo",x:"employees_x__13CCv",hide:"employees_hide__334kU",addBtn:"employees_addBtn__3i2VT"}},61:function(e,t,n){},62:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(18),s=n.n(r),i=(n(61),n(31)),o=n(5),u=(n(62),n(27)),j=n(26),l=n(33),d=n.n(l),p=n(45),b=n(52),O=n(21),m=n(46),h=n.n(m).a.create({baseURL:"https://reqres.in/api/users?"}),x=function(){return h.get("per_page=12").then((function(e){return e.data}))},f={employees:[]},v=function(e){return e.reducerPage.employees},y=n.p+"static/media/ava3.f64a2290.png",E=n(20),_=n.n(E),g=n(104),C=n(105),L=n(106),S=n(109),T=n(2),P=function(){var e=Object(j.c)(v),t=Object(c.useState)(!1),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(u.a)(s,2),o=i[0],l=i[1],b=Object(c.useState)(""),O=Object(u.a)(b,2),m=O[0],h=O[1],f=Object(c.useState)(""),E=Object(u.a)(f,2),P=E[0],k=E[1],A=Object(j.b)();Object(c.useEffect)((function(){A(function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:n=e.sent,t({type:"/reducer/GET_EMPLOYEES",employees:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[A]);var N=function(e){r(!1);var t=e.currentTarget.dataset.id;A(function(e){return{type:"/reducer/DELETE_EMPLOYEES",id:e}}(+t))};return Object(T.jsxs)(T.Fragment,{children:[a?Object(T.jsx)("div",{className:_.a.popup,children:Object(T.jsxs)("div",{className:_.a.popupContent,children:[Object(T.jsx)("span",{onClick:function(){return r(!1)},className:_.a.x,children:"X"}),Object(T.jsx)("input",{value:o,placeholder:"Name",name:"name",onChange:function(e){return l(e.currentTarget.value)},type:"text"}),Object(T.jsx)("input",{value:m,placeholder:"Last Name",name:"lastName",onChange:function(e){return h(e.currentTarget.value)},type:"text"}),Object(T.jsx)("input",{value:P,placeholder:"Email",name:"email",onChange:function(e){return k(e.currentTarget.value)},type:"text"}),Object(T.jsx)("button",{"data-update":"add",onClick:function(){r(!1),A(function(e){return{type:"/reducer/ADD_EMPLOYEES",employees:e}}({email:P,last_name:m,first_name:o,avatar:"",id:124}))},children:"Add"})]})}):"",e.map((function(e){return Object(T.jsxs)(g.a,{className:_.a.container,children:[Object(T.jsx)("span",{"data-id":e.id,onClick:N,className:_.a.x,children:"X"}),Object(T.jsxs)(C.a,{children:[e.avatar?Object(T.jsx)("img",{src:e.avatar,alt:"Avatar"}):Object(T.jsx)("img",{style:{width:"320px"},src:y,alt:"Avatar"}),Object(T.jsxs)(L.a,{variant:"h6",component:"h1",style:{textAlign:"center"},children:[e.first_name," ",e.last_name]}),Object(T.jsx)("div",{style:{textAlign:"center"},children:e.email})]})]},e.id)})),Object(T.jsx)("div",{className:_.a.addBtn,children:Object(T.jsx)(S.a,{color:"primary",variant:"contained",onClick:function(){return r(!0)},children:"Add"})})]})},k=function(){return Object(T.jsx)(T.Fragment,{children:"Main"})},A=n(107),N=n(108),M="/main",D="/employees";var F=function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(i.a,{children:[Object(T.jsx)(A.a,{position:"static",children:Object(T.jsxs)(N.a,{children:[Object(T.jsx)(i.b,{to:M,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(T.jsx)(i.b,{to:D,children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"})]})}),Object(T.jsx)("div",{children:Object(T.jsx)("div",{children:Object(T.jsx)("div",{children:Object(T.jsxs)(o.d,{children:[Object(T.jsx)(o.b,{path:D,render:function(){return Object(T.jsx)(P,{})}}),Object(T.jsx)(o.b,{exact:!0,path:M,render:function(){return Object(T.jsx)(k,{})}}),Object(T.jsx)(o.a,{from:"/",to:D})]})})})})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},Y=n(23),B=n(51),U=Object(Y.b)({reducerPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/reducer/GET_EMPLOYEES":return Object(O.a)(Object(O.a)({},e),{},{employees:t.employees});case"/reducer/ADD_EMPLOYEES":return Object(O.a)(Object(O.a)({},e),{},{employees:[].concat(Object(b.a)(e.employees),[t.employees])});case"/reducer/DELETE_EMPLOYEES":return Object(O.a)(Object(O.a)({},e),{},{employees:e.employees.filter((function(e){return e.id!==t.id}))});default:return e}}}),X=Object(Y.c)(U,Object(Y.a)(B.a));s.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(j.a,{store:X,children:Object(T.jsx)(F,{})})}),document.getElementById("root")),w()}},[[88,1,2]]]);
//# sourceMappingURL=main.7c6db778.chunk.js.map