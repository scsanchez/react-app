(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(9),i=c.n(a),r=(c(28),c(11)),o=(c(29),c(37)),j=c(36),l=c(22),b=c(39),h=c(16),u=c(1),d=function(){return Object(u.jsx)(h.a,{bg:"light",children:Object(u.jsxs)(h.a.Brand,{href:"#home",children:[Object(u.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",width:"40",height:"40",className:"d-inline-block align-items-center",alt:"GitHub logo"}),Object(u.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png",width:"70",height:"21",className:"d-inline-block align-items-center",alt:"GitHub"})]})})},m=c(38),O=function(e){var t=e.data;return Object(u.jsx)(m.a,{className:"mx-auto",children:Object(u.jsxs)(m.a.Body,{children:[Object(u.jsx)(m.a.Title,{children:t.name}),Object(u.jsx)(m.a.Text,{children:t.description}),Object(u.jsx)(b.a,{href:t.html_url,target:"_blank",variant:"secondary",children:"Repositorie Page"})]})})},g=function(e){var t=e.organization;return Object(u.jsx)(m.a,{className:"mx-auto",children:Object(u.jsxs)(m.a.Body,{children:[Object(u.jsx)(m.a.Title,{children:t.login}),Object(u.jsx)(m.a.Text,{children:t.description}),Object(u.jsx)(b.a,{href:"https://github.com/orgs/"+t.login,target:"_blank",variant:"secondary",children:"Organisation Page"})]})})},x=c(15),p=(c(33),function(e){if(!e.ok)throw Error(e.statusText);return e.json()}),f=function(e){console.error("Looks like there was a problem: ",e)};var v=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(r.a)(a,2),h=i[0],m=i[1],v=Object(n.useState)(""),N=Object(r.a)(v,2),k=N[0],y=N[1],S=Object(n.useState)(!1),w=Object(r.a)(S,2),T=w[0],F=w[1],B=Object(n.useState)(!1),C=Object(r.a)(B,2),H=C[0],L=C[1];return Object(u.jsxs)("div",{className:"App container",children:[Object(u.jsx)(d,{}),Object(u.jsx)("div",{className:"input",children:Object(u.jsx)(o.a,{onSubmit:function(e){e.preventDefault(),F(!0),function(e){var t="https://api.github.com/users/".concat(e,"/orgs");return fetch(t).then(p).catch(f)}(k).then((function(e){F(!1),m(e)})),L(!0),function(e){var t="https://api.github.com/users/".concat(e,"/repos");return fetch(t).then(p).catch(f)}(k).then((function(e){L(!1),s(e)}))},children:Object(u.jsxs)(j.a,{className:"justify-content-center mt-5 mb-5",children:[Object(u.jsxs)(l.a,{sm:2,children:[Object(u.jsx)(o.a.Label,{htmlFor:"inlineFormInputName",visuallyHidden:!0,children:"Username"}),Object(u.jsx)(o.a.Control,{id:"input",placeholder:"username",onChange:function(e){y(e.target.value)}})]}),Object(u.jsx)(l.a,{sm:1,children:Object(u.jsx)(b.a,{type:"submit",children:"Search"})})]})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col scroll",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h2",{children:"Organisations"})}),T?Object(u.jsx)(x.a,{animation:"border"}):Object(u.jsx)("div",{className:"repositories",children:h.map((function(e,t){return Object(u.jsx)(g,{organization:e},t)}))})]}),Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h2",{children:"Repositories"})}),H?Object(u.jsx)(x.a,{animation:"border"}):Object(u.jsx)("div",{className:"repositories",children:c.map((function(e,t){return Object(u.jsx)(O,{data:e},t)}))})]})]})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.f1f4080c.chunk.js.map