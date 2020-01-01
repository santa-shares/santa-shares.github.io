(this["webpackJsonpsanta-shares.github.io"]=this["webpackJsonpsanta-shares.github.io"]||[]).push([[0],{152:function(e,t,a){e.exports=a(265)},157:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(138),c=a.n(r),s=(a(157),a(41)),o=a(42),i=a(47),u=a(43),m=a(48),h=a(52),d=a(35),E=function(e){var t=e.items,a=t.reduce((function(e,t){return e+t.price*t.amount}),0),n=t.reduce((function(e,t){return e+t.amount}),0);return l.a.createElement("div",{class:"container"},l.a.createElement("h3",null,"Current Stock"),l.a.createElement("p",null,"Number of item types: ",t.length),l.a.createElement("p",null,"Number of items in stock: ",n),l.a.createElement("p",null,"Total value of remaining stock: ","\xa3"+(a/100).toFixed(2)),l.a.createElement("table",{class:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"ID"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{style:{textAlign:"center"},scope:"col"},"Price"),l.a.createElement("th",{style:{textAlign:"center"},scope:"col"},"Amount"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.item_id),l.a.createElement("td",null,e.item_name),l.a.createElement("td",{style:{textAlign:"center"}},"\xa3"+(e.price/100).toFixed(2)),l.a.createElement("td",{style:{textAlign:"center"}},e.amount))})))))},p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){this.setState({redirect:e})}},{key:"render",value:function(){var e=this;return void 0!==this.state.redirect?l.a.createElement(d.a,{to:"/users/"+this.state.redirect}):l.a.createElement("div",{class:"container"},l.a.createElement("h3",null,"Leaderboard"),l.a.createElement("table",{class:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"ID"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{style:{textAlign:"center"},scope:"col"},"Cash"),l.a.createElement("th",{style:{textAlign:"center"},scope:"col"},"Stock"),l.a.createElement("th",{style:{textAlign:"center"},scope:"col"},"Total"))),l.a.createElement("tbody",null,this.props.users.map((function(t){return l.a.createElement("tr",{key:t.user_id,onClick:function(){return e.handleClick(t.user_id)}},l.a.createElement("td",null,t.user_id),l.a.createElement("td",null,t.user_name),l.a.createElement("td",{style:{textAlign:"center"}},"\xa3"+(t.balance/100).toFixed(2)),l.a.createElement("td",{style:{textAlign:"center"}},"\xa3"+(t.stock_value/100).toFixed(2)),l.a.createElement("td",{style:{textAlign:"center"}},"\xa3"+(t.total/100).toFixed(2)))})))))}}]),t}(n.Component),b=a(273),v=a(276),g=a(271),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={user:void 0,user_history:[{time:0,total:0}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://santa-shares.azurewebsites.net/api/users/"+this.props.user_id).then((function(e){return e.json()})).then((function(t){var a=t;void 0===a.items&&(a.items=[]),a.stock_value=a.items.reduce((function(e,t){return e+t.price*t.amount}),0),a.total_value=a.stock_value+a.balance;for(var n=0;n<a.items.length;n++){var l=a.items[n];l.sub_total=l.amount*l.price}e.setState({user:a}),console.log(e.state)})).catch(console.log),fetch("https://santa-shares.azurewebsites.net/api/users/"+this.props.user_id+"/history").then((function(e){return e.json()})).then((function(t){for(var a=[],n=0;n<t.length;n++){var l=t[n];a.push({time:new Date(l.time),total:l.balance+l.stock_value})}e.setState({user_history:a}),console.log(e.state)})).catch(console.log)}},{key:"render",value:function(){return void 0===this.state.user?l.a.createElement("div",{class:"container"},l.a.createElement("h5",null,"Loading user data..."),l.a.createElement("div",{class:"progress"},l.a.createElement("div",{class:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",style:{width:"50%"}}),"                ")):l.a.createElement("div",null,l.a.createElement("div",{class:"container"},l.a.createElement("h3",null,this.state.user.user_name),l.a.createElement("h5",null,"Summary"),l.a.createElement("table",{class:"table table-hover"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Cash"),l.a.createElement("td",{style:{textAlign:"center"}},"\xa3"+(this.state.user.balance/100).toFixed(2))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Stock Value"),l.a.createElement("td",{style:{textAlign:"center"}},"\xa3"+(this.state.user.stock_value/100).toFixed(2))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Total"),l.a.createElement("td",{style:{textAlign:"center"}},"\xa3"+(this.state.user.total_value/100).toFixed(2))))),l.a.createElement("h5",null,"Items"),l.a.createElement("table",{class:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"ID"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{style:{textAlign:"center"},scope:"col"},"Price"),l.a.createElement("th",{style:{textAlign:"center"},scope:"col"},"Amount"),l.a.createElement("th",{style:{textAlign:"center"},scope:"col"},"SubTotal"))),l.a.createElement("tbody",null,this.state.user.items.map((function(e){return l.a.createElement("tr",{key:e.item_id},l.a.createElement("td",null,e.item_id),l.a.createElement("td",null,e.item_name),l.a.createElement("td",{style:{textAlign:"center"}},"\xa3"+(e.price/100).toFixed(2)),l.a.createElement("td",{style:{textAlign:"center"}},e.amount),l.a.createElement("td",{style:{textAlign:"center"}},"\xa3"+(e.sub_total/100).toFixed(2)))}))))),l.a.createElement("div",{class:"container"},l.a.createElement(b.a,{theme:v.a.grayscale,style:{width:"50%"}},l.a.createElement(g.a,{style:{data:{stroke:"#c43a31"},parent:{border:"1px solid #ccc"}},data:this.state.user_history,x:"time",y:"total"}))))}}]),t}(n.Component),y=function(){return l.a.createElement("div",{class:"container"},l.a.createElement("h3",null,"About"),l.a.createElement("p",null,"Welcome to Santa-Shares!"),l.a.createElement("p",null,"Santa-shares is a frame-work which allows the buying and selling of gifts using fake money. The intent is to encourage the design, implementation and testing of automated solutions to make the most cash."),l.a.createElement("p",null,"The trading is done via an endpoint"),l.a.createElement("h4",null,"Getting Started"),l.a.createElement("p",null,"Blah blah bah"))},k=(a(263),a(264),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={users:[],items:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://santa-shares.azurewebsites.net/api/items").then((function(e){return e.json()})).then((function(t){t.sort((function(e,t){return e.item_id-t.item_id})),e.setState({items:t}),console.log("Fetching users..."),fetch("https://santa-shares.azurewebsites.net/api/users").then((function(e){return e.json()})).then((function(t){console.log("Received "+t.length+" users..."),t.sort((function(e,t){return t.total-e.total})),e.setState({users:t})})).catch(console.log)})).catch(console.log)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{class:"navbar-brand",href:"/"},"Santa-Shares"),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{class:"navbar-nav mr-auto"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(h.b,{class:"nav-link",to:"/"},"Leaderboard")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(h.b,{class:"nav-link",to:"/stock"},"Stock")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(h.b,{class:"nav-link",to:"/about"},"About"))))),l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/users/:user_id",render:function(e){var t=e.match.params.user_id;return l.a.createElement(f,{user_id:t})}}),l.a.createElement(d.b,{path:"/about"},l.a.createElement(y,null)),l.a.createElement(d.b,{path:"/stock"},l.a.createElement(E,{items:this.state.items})),l.a.createElement(d.b,{path:"/"},l.a.createElement(p,{users:this.state.users}))))))}}]),t}(n.Component));c.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.fe577f1a.chunk.js.map