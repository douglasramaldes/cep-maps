(this["webpackJsonpcep-maps"]=this["webpackJsonpcep-maps"]||[]).push([[0],{33:function(n,e,t){n.exports=t(44)},44:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(23),i=t.n(o),c=t(18),u=t(12),l=t(7),s=t(8),d=t(10),h=t(9),m=t(11),p=t(1),b=t(24),f=t(2),v=t(25),g=t.n(v);function j(){var n=Object(p.a)(["\n  display: inline-block;\n  width: ","px;\n  height: ","px;\n  color: ",";\n  stroke-width: ",";\n"]);return j=function(){return n},n}var C=f.b.span(j(),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.color}),(function(n){return n.strokeWidth})),O=function(n){return a.a.createElement(C,{className:n.className,size:n.size,onClick:n.onClick,color:n.color,strokeWidth:n.strokeWidth,dangerouslySetInnerHTML:{__html:g.a.icons[n.name].toSvg({width:"100%",height:"100%","stroke-width":"inherit"})}})};O.defaultProps={className:"",color:"currentColor",size:24,strokeWidth:2};var E=O;function w(){var n=Object(p.a)(["\n  position: absolute;\n  top: 0.6rem;\n  right: 0.6rem;\n  cursor: pointer;\n"]);return w=function(){return n},n}function k(){var n=Object(p.a)(["\n  border: 2px solid #ccc;\n  padding: 1rem 2rem;\n  position: relative;\n  width: 90%;\n"]);return k=function(){return n},n}var y=f.b.div(k()),x=f.b.div(w()),S=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(d.a)(this,Object(h.a)(e).call(this,n))).handleClick=function(){t.props.handleClose()},t.state={showMap:!0},t}return Object(m.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(y,null,a.a.createElement(x,null,a.a.createElement(E,{name:"x",size:35,onClick:this.handleClick})),this.props.children)}}]),e}(r.Component);function z(){var n=Object(p.a)(["\n  margin-bottom: 1.4rem;\n"]);return z=function(){return n},n}function F(){var n=Object(p.a)(["\n  background-color: #eee;\n  padding: 1rem 2rem;\n  margin-bottom: 0.4rem;\n  width: 90%;\n"]);return F=function(){return n},n}var W=f.b.div(F()),B=f.b.h2(z()),P=function(n){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(W,null,a.a.createElement(B,null,this.props.title),this.props.children)}}]),e}(r.Component);function A(n){return/\d{5}-\d{3}/.test(n)}function H(n){return 6===(n=n.replace(/[^0-9-]/g,"")).length||n.charAt(n.length-1).match(/\d/)||(n=n.substring(0,n.length-1)),/^\d{6}/.test(n)&&(n=n.substring(0,5)+"-"+n.substring(5)),n}function I(){var n=Object(p.a)(["\n  color: #333;\n  padding-right: 1rem;\n"]);return I=function(){return n},n}function N(){var n=Object(p.a)(["\n  padding: 0.2rem 0.5rem;\n  height: 2.1rem;\n  color: #333;\n  margin-right: 0.6rem;\n  border: none;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n"]);return N=function(){return n},n}function J(){var n=Object(p.a)(["\n  background-color: #48a3ea;\n  border: none;\n  color: #fff;\n  padding: 0.5rem 1rem;\n  font-weight: bold;\n  border-radius: 0.2rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: steelBlue;\n    color: white;\n  }\n"]);return J=function(){return n},n}var L=f.b.button(J()),V=f.b.input(N()),D=f.b.label(I()),M=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(a)))).handleChange=function(n){t.props.onChange(n.target.value)},t.handleSubmit=function(n){n.preventDefault(),A(H(t.props.value))&&t.props.onSubmit(H(t.props.value))},t}return Object(m.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement(D,null,"CEP"),a.a.createElement(V,{id:"CepFormInput",type:"text",value:H(this.props.value),onChange:this.handleChange,placeholder:"00000-000",maxLength:"9",pattern:"^\\d{5}-\\d{3}$"}),a.a.createElement(L,{type:"submit"},"Buscar"))}}]),e}(r.Component);function $(){var n=Object(p.a)(["\n  margin: 1%;\n  line-height: 1;\n"]);return $=function(){return n},n}function _(){var n=Object(p.a)(["\n  margin: 1%;\n"]);return _=function(){return n},n}function q(){var n=Object(p.a)(["\n  line-height: 0.6;\n"]);return q=function(){return n},n}var T=f.b.div(q()),X=f.b.h2(_()),Z=f.b.p($());function G(n){return a.a.createElement(T,null,n.notValid&&a.a.createElement(X,null,"CEP n\xe3o encontrado"),a.a.createElement(X,null,n.address.logradouro),a.a.createElement(Z,null,n.address.bairro),a.a.createElement(Z,null," ",n.address.localidade," - ",n.address.uf),a.a.createElement(Z,null,n.address.cep))}var K=t(28),Q=t.n(K);function R(){var n=Object(p.a)(["\n  overflow: hidden;\n  padding-top: 40.25%;\n  position: relative;\n"]);return R=function(){return n},n}function U(){var n=Object(p.a)(["\n  border: 0;\n  height: 90%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"]);return U=function(){return n},n}function Y(){var n=Object(p.a)(["\n  width: 90%;\n  background: #fff;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Y=function(){return n},n}function nn(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return nn=function(){return n},n}var en=f.b.div(nn()),tn=f.b.div(Y()),rn=Object(f.b)(b.a)(U()),an=f.b.div(R());var on=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(d.a)(this,Object(h.a)(e).call(this,n))).handleClose=function(){t.setState({showCard:!1,value:"",notFound:!1})},t.handleCepChange=function(n){t.setState({value:n})},t.validationCep=function(n){A(n)&&n!==t.currentCep&&(t.currentCep=n,function(n){return Q()("https://viacep.com.br/ws/".concat(n,"/json/?callback=searchCep"))}(n).then((function(n){return n.json()})).then((function(n){n.erro&&t.setState({notFound:!0}),t.setState({showCard:!0,address:n})})).catch((function(n){})))},t.handleSubmit=function(n){t.setState({notFound:!1}),t.validationCep(n)},t.state={value:"",address:"",cep:"",showCard:!1,notFound:!1},t.currentCep=null,t}return Object(m.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(en,null,a.a.createElement(tn,null,a.a.createElement(P,{title:"Consultar"},a.a.createElement(M,{value:this.state.value,onChange:this.handleCepChange,onSubmit:this.handleSubmit})),this.state.showCard&&a.a.createElement(S,{showCard:this.state.showCard,handleClose:this.handleClose},a.a.createElement(G,{address:this.state.address,notValid:this.state.notFound}),a.a.createElement(an,null,a.a.createElement(rn,{url:"https://www.google.com/maps/embed/v1/search?key=AIzaSyBxp983W4Ppj3r0d6JPBDNkZa2XmHVAeHc&q=".concat(this.state.address.logradouro," ").concat(this.state.address.bairro," ").concat(this.state.address.localidade," ").concat(this.state.address.uf),id:"myId",display:"block"})))))}}]),e}(r.Component),cn=Object(u.f)(on),un=function(){return a.a.createElement(c.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",component:cn}),"/>",a.a.createElement(u.a,{path:"*",component:function(){return a.a.createElement("h1",null,"Page not found")}})))};function ln(){var n=Object(p.a)(["\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    outline: 0;\n  }\n  body, html {\n    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;\n    text-rendering: optimizeLegibility !important;\n    -webkit-font-smoothing: antialiased !important;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    padding-top: 5px\n  }\n"]);return ln=function(){return n},n}var sn=Object(f.a)(ln()),dn=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(un,null),a.a.createElement(sn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(dn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.1bb05d21.chunk.js.map