(this["webpackJsonpsanta-shares.github.io"]=this["webpackJsonpsanta-shares.github.io"]||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),c=t.n(l),s=(t(13),t(3)),o=t(4),i=t(6),u=t(5),m=t(7),v=function(e){var a=e.users;return r.a.createElement("div",{class:"container"},r.a.createElement("h3",null,"Leaderboard"),r.a.createElement("table",{class:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Cash"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.user_id),r.a.createElement("td",null,e.user_name),r.a.createElement("td",null,"\xa3",e.balance))})))))},h=function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"Santa-Shares"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#"},"Leaderboard")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#"},"Stock")),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#"},"Help/About")))))},b=(t(14),t(15),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={users:[]},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://santa-shares.azurewebsites.net/api/users").then((function(e){return e.json()})).then((function(a){a.sort((function(e,a){return e.balance-a.balance})),e.setState({users:a})})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(v,{users:this.state.users}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.2b2ad176.chunk.js.map