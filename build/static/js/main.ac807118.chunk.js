(this["webpackJsonprest-api"]=this["webpackJsonprest-api"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(19),c=a.n(r),i=(a(25),a(17)),o=(a(26),a(8)),d=a.n(o),l=a(11),h=a(12),b=a(9),j=a(0);var u=function(){Object(n.useEffect)((function(){r()}),[]);var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],s=t[1],r=function(){var e=Object(l.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://scpdatabase-0fe9.restdb.io/rest/data",e.next=3,fetch("https://scpdatabase-0fe9.restdb.io/rest/data",{method:"GET",headers:{"cache-control":"no-cache","x-apikey":"6099da8fe3b6e02545eda6a8"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(b.b,{to:"/",className:"navbar-brand",children:Object(j.jsx)("h2",{children:"SCP Foundation"})}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(j.jsxs)("ul",{class:"navbar-nav",children:[Object(j.jsx)(b.b,{to:"/",className:"nav-link","aria-current":"page",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsxs)("li",{class:"nav-item dropdown",children:[Object(j.jsx)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDarkDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"SCP Items"}),Object(j.jsx)("ul",{class:"dropdown-menu dropdown-menu-dark","aria-labelledby":"navbarDarkDropdownMenuLink",children:a.map((function(e){return Object(j.jsx)(b.b,{to:"/".concat(e._id),className:"dropdown-item",children:Object(j.jsx)("li",{children:e.scpNumber})})}))})]})]})})]})})};var m=function(e){var t=e.match,a=Object(n.useState)([]),s=Object(h.a)(a,2),r=s[0],c=s[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(l.a)(d.a.mark((function e(){var a,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://scpdatabase-0fe9.restdb.io/rest/data/".concat(t.params.id),e.next=3,fetch(a,{method:"GET",headers:{"cache-control":"no-cache","x-apikey":"6099da8fe3b6e02545eda6a8"}});case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,c(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"card mt-2 mb-2 bg-dark text-light",children:[Object(j.jsx)("h1",{className:"card-header",children:r.scpNumber}),Object(j.jsxs)("div",{className:"card-body bg-light text-dark",children:[Object(j.jsxs)("h2",{className:"card-title",children:["Item #",r.scpNumber]}),Object(j.jsxs)("h3",{children:["Object Class: ",r.scpObjectClass]}),Object(j.jsx)("h4",{children:"Special Containment Procedures"}),Object(j.jsx)("p",{children:r.scpSCP}),Object(j.jsx)("h4",{children:"Description"}),Object(j.jsx)("p",{children:r.scpDescription}),Object(j.jsx)("img",{src:r.scpImage})]})]})};var p=function(){return Object(j.jsxs)("div",{className:"card mt-2 bg-dark text-light",children:[Object(j.jsx)("h1",{className:"card-header",children:"About the SCP Foundation"}),Object(j.jsxs)("div",{className:"card-body bg-light text-dark",children:[Object(j.jsx)("div",{className:"accordion accordion-flush mb-2",id:"accordionExample",children:Object(j.jsxs)("div",{className:"accordion-item",children:[Object(j.jsx)("h2",{className:"accordion-header btn-light text-dark",id:"headingOne",children:Object(j.jsx)("button",{className:"accordion-button bg-light btn-light text-dark",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"SCP Foundation"})}),Object(j.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse in bg-light","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(j.jsx)("div",{className:"accordion-body text-dark",children:Object(j.jsxs)("p",{children:["Mankind in its present state has been around for a quarter of a million years, yet only the last 4,000 have been of any significance.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"So, what did we do for nearly 250,000 years? We huddled in caves and around small fires, fearful of the things that we didn't understand. It was more than explaining why the sun came up, it was the mystery of enormous birds with heads of men and rocks that came to life. So we called them 'gods' and 'demons', begged them to spare us, and prayed for salvation.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"In time, their numbers dwindled and ours rose. The world began to make more sense when there were fewer things to fear, yet the unexplained can never truly go away, as if the universe demands the absurd and impossible.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Mankind must not go back to hiding in fear. No one else will protect us, and we must stand up for ourselves.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"While the rest of mankind dwells in the light, we must stand in the darkness to fight it, contain it, and shield it from the eyes of the public, so that others may live in a sane and normal world.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"We secure. We contain. We protect.",Object(j.jsx)("hr",{}),"\u2014 The Administrator"]})})})]})}),Object(j.jsx)("h2",{className:"card-title",children:"Mission Statement"}),Object(j.jsxs)("p",{className:"card-text",children:["Operating clandestine and worldwide, the Foundation operates beyond jurisdiction, empowered and entrusted by every major national government with the task of containing anomalous objects, entities, and phenomena. These anomalies pose a significant threat to global security by threatening either physical or psychological harm.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"The Foundation operates to maintain normalcy, so that the worldwide civilian population can live and go on with their daily lives without fear, mistrust, or doubt in their personal beliefs, and to maintain human independence from extraterrestrial, extradimensional, and other extranormal influence.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Our mission is three-fold:"]}),Object(j.jsx)("h4",{children:"Secure"}),Object(j.jsx)("p",{className:"card-text",children:"The Foundation secures anomalies with the goal of preventing them from falling into the hands of civilian or rival agencies, through extensive observation and surveillance and by acting to intercept such anomalies at the earliest opportunity."}),Object(j.jsx)("h4",{children:"Contain"}),Object(j.jsx)("p",{className:"card-text",children:"The Foundation contains anomalies with the goal of preventing their influence or effects from spreading, by either relocating, concealing, or dismantling such anomalies or by suppressing or preventing public dissemination of knowledge thereof."}),Object(j.jsx)("h4",{children:"Protect"}),Object(j.jsx)("p",{className:"card-text",children:"The Foundation protects humanity from the effects of such anomalies as well as the anomalies themselves until such time that they are either fully understood or new theories of science can be devised based on their properties and behavior. The Foundation may also neutralize or destroy anomalies as an option of last resort, if they are determined to be too dangerous to be contained."})]})]})},x=a(2);var O=function(){return Object(j.jsx)(b.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{path:"/",exact:!0,component:p}),Object(j.jsx)(x.a,{path:"/:id",exact:!0,component:function(e){return Object(n.createElement)(m,Object(i.a)(Object(i.a)({},e),{},{key:window.location.pathname}))}})]})]})})};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ac807118.chunk.js.map