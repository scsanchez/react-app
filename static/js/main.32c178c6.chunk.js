(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(9),i=c.n(a),r=(c(27),c(12)),j=(c(28),c(37)),l=c(36),b=c(21),o=c(33),h=c(11),u=c(16),m=c(1),d=function(){return Object(m.jsx)(u.a,{bg:"light",variant:"dark",children:Object(m.jsxs)(u.a.Brand,{href:"#home",children:[Object(m.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",width:"80",height:"60",className:"d-inline-block align-items-center",alt:"Octopus GitHub"}),Object(m.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png",width:"80",height:"21",className:"d-inline-block align-items-center",alt:"GitHub"})]})})};var O=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),u=i[0],O=i[1],g=Object(n.useState)(""),p=Object(r.a)(g,2),x=p[0],f=p[1],N=Object(n.useState)(""),v=Object(r.a)(N,2),y=(v[0],v[1]),S=Object(n.useState)(""),k=Object(r.a)(S,2),F=k[0],C=k[1],L=Object(n.useState)(""),T=Object(r.a)(L,2),w=T[0],I=T[1],_=Object(n.useState)(""),B=Object(r.a)(_,2),H=(B[0],B[1]),G=function(e){var t=e.name,c=e.login,n=e.repos_url,a=e.html_url,i=e.organizations_url;s(t),O(c),f(n),C(i),y(a)};return Object(n.useEffect)((function(){fetch("https://api.github.com/users/example").then((function(e){return e.json()})).then((function(e){G(e)}))}),[]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(d,{}),Object(m.jsx)("div",{className:"input",children:Object(m.jsx)(j.a,{onSubmit:function(e){e.preventDefault(),fetch("https://api.github.com/users/".concat(w)).then((function(e){return e.json()})).then((function(e){e.message?H(e.message):G(e)}))},children:Object(m.jsxs)(l.a,{className:"justify-content-center mt-5 mb-5",children:[Object(m.jsxs)(b.a,{className:"my-1 col-sm-2 ",children:[Object(m.jsx)(j.a.Label,{htmlFor:"inlineFormInputName",visuallyHidden:!0,children:"Name"}),Object(m.jsx)(j.a.Control,{id:"inlineFormInputName",placeholder:"Introduce username",onChange:function(e){I(e.target.value)}})]}),Object(m.jsx)(b.a,{className:"my-1 col-1",children:Object(m.jsx)(o.a,{type:"submit",children:"Search"})})]})})}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("myCard",{}),Object(m.jsx)(l.a,{className:"justify-content-center mt-5 mb-5",children:Object(m.jsx)(h.a,{style:{width:"18rem"},children:Object(m.jsxs)(h.a.Body,{children:[Object(m.jsx)(h.a.Title,{children:u}),Object(m.jsx)(h.a.Title,{children:c}),Object(m.jsx)(h.a.Link,{href:x,children:Object(m.jsx)(h.a.Text,{children:"Repositories"})}),Object(m.jsx)(h.a.Link,{href:F,children:Object(m.jsx)(h.a.Text,{children:"Organisations"})})]})})})]}),Object(m.jsx)("header",{className:"App-header"})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),g()}},[[32,1,2]]]);
//# sourceMappingURL=main.32c178c6.chunk.js.map