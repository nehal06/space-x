(this["webpackJsonpspace-x"]=this["webpackJsonpspace-x"]||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/error-404.9174ed1c.svg"},46:function(e,a,t){e.exports=t(92)},51:function(e,a,t){},52:function(e,a,t){},57:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(43),l=t.n(c),o=(t(51),t(6)),r=t(7),i=(t(52),function(){return s.a.createElement("div",{className:"nav"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(o.b,{to:"/"},"SpaceX"))),s.a.createElement("ul",{className:"right"},s.a.createElement("li",null,s.a.createElement(o.b,{to:"/launchpads"}," Launchpads")),s.a.createElement("li",null,s.a.createElement(o.b,{to:"/missions"}," Missions"))))}),m=(t(57),function(e){for(var a=[],t=0;t<=1e3;t++)a.push(s.a.createElement("div",{className:"particle",key:"p".concat(t)}));return s.a.createElement("div",{id:"particle-container"},a)}),u=t(11),d=t(12),h=t(15),p=t(13),E=t(16),f=t(14),v=t.n(f),N=t(20),g=t.n(N),y=function(e){var a=e.launchpads,t=s.a.createRef();return s.a.createElement(n.Fragment,null,a.map((function(e,a){return s.a.createElement("div",{className:"card",key:a},s.a.createElement("div",{className:"card-content"},s.a.createElement("h6",{title:e.site_name_long,className:"title"},e.name),s.a.createElement("span",{className:"status ".concat(e.status.replace(" ","-"))},s.a.createElement("i",null,e.status)),s.a.createElement("p",{className:"location"},s.a.createElement("i",null,"".concat(e.location.name," , ").concat(e.location.region))),s.a.createElement(g.a,{ref:t,className:"read-more-content",charLimit:250,readMoreText:"Read more",readLessText:"Read less"},e.details)))})))},b=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).onSelectChange=function(e){var a=e.target.value,n=[];n="All"!=a?0!=t.state.allLaunchpads.length?t.state.allLaunchpads.filter((function(e){return e.status==a})):[]:t.state.allLaunchpads,t.setState({filteredLaunchpads:n,selectVal:a})},t.state={showNoData:!1,allLaunchpads:[],filteredLaunchpads:[],statusArray:[],selectVal:"All"},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://api.spacexdata.com/v3/launchpads").then((function(a){if(console.log(a.data),200==a.status){var t=[];a.data.map((function(e){0==t.length?t.push(e.status):t.includes(e.status)||t.push(e.status)})),e.setState({allLaunchpads:a.data,filteredLaunchpads:a.data,statusArray:t})}else e.setState({showNoData:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log("render"),s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"filterRow"},s.a.createElement("label",{htmlFor:"statusFilter",className:"selectLabel"},"Status Filter"),s.a.createElement("select",{id:"statusFilter",onChange:this.onSelectChange,value:this.state.value},s.a.createElement("option",{value:"All"},"All"),this.state.statusArray.map((function(e,a){return s.a.createElement("option",{value:e,key:a},e)})))),s.a.createElement("div",{className:"grid-container"},this.state.showNoData&&s.a.createElement("div",{className:"noDataFound"},s.a.createElement("h4",null,"No Data Found")),!this.state.showNoData&&s.a.createElement(y,{launchpads:this.state.filteredLaunchpads})))}}]),a}(n.Component),D=function(e){var a=e.missions,t=s.a.createRef();return s.a.createElement(n.Fragment,null,a.map((function(e,a){return s.a.createElement("div",{className:"card",key:a},s.a.createElement("div",{className:"card-content"},s.a.createElement("h6",{title:e.mission_name,className:"title"},e.mission_name),s.a.createElement(g.a,{ref:t,className:"read-more-content",charLimit:250,readMoreText:"Read more",readLessText:"Read less"},e.description),s.a.createElement("hr",{className:"new"}),e.payload_ids.map((function(e,a){return s.a.createElement("span",{className:"chip",key:"k_".concat(a)},s.a.createElement(o.b,{to:"/payload/".concat(e)},s.a.createElement("i",null,e)))}))))})))},w=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={showNoData:!1,allMissions:[]},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://api.spacexdata.com/v3/missions").then((function(a){console.log(a.data),200==a.status?e.setState({allMissions:a.data}):e.setState({showNoData:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"grid-container2"},this.state.showNoData&&s.a.createElement("div",{className:"noDataFound"},s.a.createElement("h4",null,"No Data Found")),!this.state.showNoData&&s.a.createElement(D,{missions:this.state.allMissions}))}}]),a}(n.Component),k=t(21),x=t.n(k),O=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={showNoData:!1,payloadData:{},status:200},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://api.spacexdata.com/v3/payloads/".concat(this.props.match.params.id)).then((function(a){200==a.status?e.setState({payloadData:a.data}):(console.log(a.data),e.setState({showNoData:!0,status:a.status}))})).catch((function(a){console.log(a),e.setState({showNoData:!0,status:404})}))}},{key:"render",value:function(){var e=this.state,a=e.payloadData;e.status;return s.a.createElement(n.Fragment,null,this.state.showNoData&&s.a.createElement("div",{className:"noDataFound"},s.a.createElement("img",{src:x.a})),!this.state.showNoData&&s.a.createElement("div",{className:"payloadData card"},s.a.createElement("h1",{className:"mainTitle"},"Payload"),s.a.createElement("h6",{className:"title"},a.payload_id),a.manufacturer&&s.a.createElement("h6",{className:"secondaryText"},"Nationality : ".concat(a.nationality)),a.manufacturer&&s.a.createElement("h6",{className:"secondaryText"},"Manufacturer : ".concat(a.manufacturer)),a.orbit&&s.a.createElement("h6",{className:"secondaryText"},"Orbit : ".concat(a.orbit)),a.payload_mass_kg&&s.a.createElement("h6",{className:"secondaryText"},"Mass : ".concat(a.payload_mass_kg," kg"))))}}]),a}(n.Component),j=function(){return s.a.createElement("div",{className:"noDataFound"},s.a.createElement("img",{src:x.a}))};var L=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(o.a,null,s.a.createElement(i,null),s.a.createElement(r.c,null,s.a.createElement(r.a,{exact:!0,path:"/",component:m,particle:100}),s.a.createElement(r.a,{exact:!0,path:"/launchpads",component:b}),s.a.createElement(r.a,{exact:!0,path:"/missions",component:w}),s.a.createElement(r.a,{exact:!0,path:"/payload/:id",component:O}),s.a.createElement(r.a,{component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.a30cc6a7.chunk.js.map