(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,r){e.exports={table:"table_table__2rI6A",title:"table_title__2aI6d"}},43:function(e,t,r){e.exports=r(67)},67:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(28),l=r.n(c),o=r(14),i=r(34),u=r(35),s=r(40),m=r(36),d=r(41),y=r(18),v=r.n(y),h=function(e){var t=e.rates,r=e.active,n=e.rowOnClick,c=t.map(function(e){var t=e.currency,r=e.rate;return a.a.createElement("tr",{key:t},a.a.createElement("td",{"data-currency":t},t),a.a.createElement("td",null,r))});return a.a.createElement("table",{className:v.a.table},a.a.createElement("caption",{className:v.a.title},r),a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Currency"),a.a.createElement("th",null,"Rate"))),a.a.createElement("tbody",{onClick:n},c))},b=r(37),p=r(13);function E(){var e=Object(b.a)(["\n  query rates($currency: String!) {\n    rates(currency: $currency) {\n      currency\n      rate\n  }\n}"]);return E=function(){return e},e}var w=r.n(p)()(E()),f=function(e){function t(){var e,r;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(r=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={currency:"UAH"},r.handlerOnClick=function(e){var t=e.target.dataset.currency;void 0!==t&&r.setState({currency:t})},r.renderTable=function(e){var t=e.loading,n=e.error,c=e.data,l=r.state.currency;return t?a.a.createElement("p",null,"Loading..."):n?a.a.createElement("p",null,"Error :("):a.a.createElement(h,{rates:c.rates,active:l,rowOnClick:r.handlerOnClick})},r}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={currency:this.state.currency};return a.a.createElement(o.Query,{variables:e,query:w},this.renderTable)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=new(r(39).a)({uri:"https://5qz5mr35n9.lp.gql.zone/graphql"});l.a.render(a.a.createElement(o.ApolloProvider,{client:g},a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.b9a4aed7.chunk.js.map