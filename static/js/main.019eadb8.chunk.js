(this["webpackJsonpuser-profiles"]=this["webpackJsonpuser-profiles"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(13),n(14),n(3)),s=n(4),i=n(6),u=n(5),m=n(7);n(15),n(16);function h(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}var d=function(e){return r.a.createElement("div",{className:"User"},r.a.createElement("img",{src:e.picture,alt:e.lastname}),r.a.createElement("h3",null,"First Name: ",h(e.firstname)),r.a.createElement("h3",null,"Last Name: ",h(e.lastname)),r.a.createElement("h3",null,"Gender: ",h(e.gender)),r.a.createElement("h3",null,"City: ",h(e.city)),r.a.createElement("h3",null,"Postcode: ",e.postcode),r.a.createElement("h3",null,"Email: ",e.email),r.a.createElement("h3",null,"DOB: ",e.dob.substr(0,10).split("-").reverse().join("-")),r.a.createElement("h3",null,"Phone: ",e.phone.split("-")),r.a.createElement("h3",null,"Country: ",e.country))},f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={users:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=10&nat=gb").then((function(e){return e.json()})).then((function(t){e.setState({users:t.results})})).catch((function(e){console.log("Error fetching and parsing error",e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"userinfo"},this.state.users.map((function(e){return r.a.createElement(d,{key:e.id.value,picture:e.picture.large,firstname:e.name.first,lastname:e.name.last,gender:e.gender,city:e.location.city,postcode:e.location.postcode,email:e.email,dob:e.dob.date,phone:e.cell,country:e.nat})})))}}]),t}(r.a.Component);var p=function(){return r.a.createElement("div",null,r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.019eadb8.chunk.js.map