(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(9),i=c.n(a),j=(c(27),c(12)),r=(c(28),c(37)),l=c(36),b=c(21),h=c(33),o=c(11),d=c(16),u=c(1),m=function(){return Object(u.jsx)(d.a,{bg:"primary",variant:"dark",children:Object(u.jsxs)(d.a.Brand,{href:"#home",children:[Object(u.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",width:"80",height:"60",className:"d-inline-block align-items-center",alt:"Octopus GitHub"}),Object(u.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png",width:"80",height:"21",className:"d-inline-block align-items-center",alt:"GitHub"})]})})};var O=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(j.a)(a,2),d=i[0],O=i[1],x=Object(s.useState)(""),g=Object(j.a)(x,2),p=g[0],f=g[1],y=Object(s.useState)(""),N=Object(j.a)(y,2),v=(N[0],N[1]),S=Object(s.useState)(""),T=Object(j.a)(S,2),k=T[0],w=T[1],F=Object(s.useState)(""),C=Object(j.a)(F,2),L=C[0],B=C[1],I=Object(s.useState)(""),_=Object(j.a)(I,2),H=(_[0],_[1]),G=function(e){var t=e.name,c=e.login,s=e.repos_url,a=e.html_url,i=e.organizations_url;n(t),O(c),f(s),w(i),v(a)};return Object(s.useEffect)((function(){fetch("https://api.github.com/users/example").then((function(e){return e.json()})).then((function(e){G(e)}))}),[]),Object(u.jsxs)("div",{className:"App col-12",children:[Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"input",children:Object(u.jsx)(r.a,{onSubmit:function(e){e.preventDefault(),fetch("https://api.github.com/users/".concat(L)).then((function(e){return e.json()})).then((function(e){e.message?H(e.message):G(e)}))},children:Object(u.jsxs)(l.a,{className:"justify-content-center mt-5 mb-5",children:[Object(u.jsxs)(b.a,{className:"my-1 col-sm-2 ",children:[Object(u.jsx)(r.a.Label,{htmlFor:"inlineFormInputName",visuallyHidden:!0,children:"Name"}),Object(u.jsx)(r.a.Control,{id:"inlineFormInputName",placeholder:"Introduce username",onChange:function(e){B(e.target.value)}})]}),Object(u.jsx)(b.a,{className:"my-1 col-1",children:Object(u.jsx)(h.a,{type:"submit",children:"Search"})})]})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"card col-6",children:[Object(u.jsx)("myCard",{}),Object(u.jsx)(b.a,{children:Object(u.jsx)(l.a,{className:"justify-content-center mt-5 mb-5",children:Object(u.jsx)(o.a,{style:{width:"18rem"},children:Object(u.jsxs)(o.a.Body,{children:[Object(u.jsx)(o.a.Title,{children:d}),Object(u.jsx)(o.a.Title,{children:c}),Object(u.jsx)(o.a.Link,{href:k,children:Object(u.jsx)(o.a.Text,{children:"Organisations"})})]})})})})]}),Object(u.jsx)("div",{className:"card col-6",children:Object(u.jsx)(b.a,{children:Object(u.jsx)(l.a,{className:"justify-content-center mt-5 mb-5",children:Object(u.jsx)(o.a,{style:{width:"18rem"},children:Object(u.jsxs)(o.a.Body,{children:[Object(u.jsx)(o.a.Title,{children:d}),Object(u.jsx)(o.a.Title,{children:c}),Object(u.jsx)(o.a.Link,{href:p,children:Object(u.jsx)(o.a.Text,{children:"Repositories"})})]})})})})})]}),Object(u.jsx)("header",{className:"App-header"})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()}},[[32,1,2]]]);
//# sourceMappingURL=main.fadccdf8.chunk.js.map