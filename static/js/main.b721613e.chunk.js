(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(9),a=n.n(i),r=(n(28),n(11)),o=(n(29),n(38)),l=n(37),j=n(22),h=n(40),b=n(16),d=n(1),u=function(){return Object(d.jsx)(b.a,{bg:"light",variant:"dark",children:Object(d.jsxs)(b.a.Brand,{href:"#home",children:[Object(d.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",width:"40",height:"30",className:"d-inline-block align-items-center",alt:"Octopus GitHub"}),Object(d.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png",width:"40",height:"11",className:"d-inline-block align-items-center",alt:"GitHub"})]})})},m=n(39),O=(n(33),function(e){var t=e.data;return Object(d.jsx)(m.a,{children:Object(d.jsxs)(m.a.Body,{children:[Object(d.jsx)(m.a.Title,{children:t.name}),Object(d.jsx)(m.a.Text,{children:t.description}),Object(d.jsx)(h.a,{href:t.html_url,target:"_blank",variant:"secondary",children:"Repositorie Page"})]})})}),g=function(e){var t=e.data,n=e.data.login;return Object(d.jsx)(m.a,{children:Object(d.jsxs)(m.a.Body,{children:[Object(d.jsx)(m.a.Title,{children:t.login}),Object(d.jsx)(m.a.Text,{children:t.description}),Object(d.jsx)(h.a,{href:"https://github.com/orgs/"+n,target:"_blank",variant:"secondary",children:"Organisation Page"})]})})},x=n(15);n(34);var p=function(){var e=Object(c.useState)(),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(),a=Object(r.a)(i,2),b=a[0],m=a[1],p=Object(c.useState)(),f=Object(r.a)(p,2),v=f[0],N=f[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"input",children:Object(d.jsx)(o.a,{onSubmit:function(e){s(e.target.value),e.preventDefault(),fetch("https://api.github.com/users/"+n+"/orgs").then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){N(e)})).catch((function(e){console.log("Looks like there was a problem: \n",e)})),fetch("https://api.github.com/users/"+n+"/repos").then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){m(e)})).catch((function(e){console.log("Looks like there was a problem: \n",e)}))},children:Object(d.jsxs)(l.a,{className:"justify-content-center mt-5 mb-5",children:[Object(d.jsxs)(j.a,{sm:2,children:[Object(d.jsx)(o.a.Label,{htmlFor:"inlineFormInputName",visuallyHidden:!0,children:"Name"}),Object(d.jsx)(o.a.Control,{id:"inlineFormInputName",placeholder:"username",onChange:function(e){s(e.target.value)}})]}),Object(d.jsx)(j.a,{sm:1,children:Object(d.jsx)(h.a,{type:"submit",children:"Search"})})]})})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col scroll",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h2",{children:"Organisations"})}),v?v.map((function(e,t){return Object(d.jsx)(g,{data:e},t)})):n?Object(d.jsx)(x.a,{animation:"border"}):""]}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h2",{children:"Repositories"})}),Object(d.jsx)("div",{className:"repositories",children:b?b.map((function(e,t){return Object(d.jsx)(O,{data:e},t)})):n?Object(d.jsx)(x.a,{animation:"border"}):""})]})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}},[[35,1,2]]]);
//# sourceMappingURL=main.b721613e.chunk.js.map