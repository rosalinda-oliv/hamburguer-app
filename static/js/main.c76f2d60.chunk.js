(this["webpackJsonphamburger-app"]=this["webpackJsonphamburger-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={BreadBottom:"BurguerIngredient_BreadBottom__2-J6M",BreadTop:"BurguerIngredient_BreadTop__wHirJ",Seeds1:"BurguerIngredient_Seeds1__4pU-4",Seeds2:"BurguerIngredient_Seeds2__2a99h",Meat:"BurguerIngredient_Meat__323ql",Tofu:"BurguerIngredient_Tofu__3y5NP",Cheese:"BurguerIngredient_Cheese__2DJYZ",Salad:"BurguerIngredient_Salad__2mKFF",Bacon:"BurguerIngredient_Bacon__38fVp",Ketchup:"BurguerIngredient_Ketchup__1wqIS",AvocadoMayo:"BurguerIngredient_AvocadoMayo__3AmjF"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__17mMy",Label:"BuildControl_Label__2NZId",Less:"BuildControl_Less__1MwdV",More:"BuildControl_More__2qeqU"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__3gtdH",OrderButton:"BuildControls_OrderButton__3GaOz",enable:"BuildControls_enable__1YBYE"}},function(e,t,a){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__2WLOk"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToogle_DrawerToggle__3XvuN"}},function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,a){e.exports={Burguer:"Burguer_Burguer__2-nCG"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1-5dN"}},,function(e,t,a){e.exports={Loader:"Spinner_Loader__1twK-",load4:"Spinner_load4__dJ24G"}},,function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),c=(a(40),a(2)),s=a(3),i=a(4),u=a(5),d=function(e){return e.children},p=a(24),m=a.n(p),h=a(11),g=a.n(h),f=function(e){return r.a.createElement("li",{className:g.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?g.a.active:null},e.children))},_=a(25),v=a.n(_),b=function(e){return r.a.createElement("ul",{className:v.a.NavigationItems},r.a.createElement(f,{link:"/",active:!0}," Burguer Builder"),r.a.createElement(f,{link:"/"}," Burguer Builder"))},E=a(9),y=a.n(E),k=a(26),C=a.n(k),B=function(e){return r.a.createElement("div",{className:C.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},w=a(27),S=a.n(w),N=a(28),O=a.n(N),j=function(e){return r.a.createElement("div",{className:S.a.Logo,style:{style:e.height}},r.a.createElement("img",{src:O.a,alt:"hamburguer"}))},D=function(e){return r.a.createElement("header",{className:y.a.Toolbar},r.a.createElement(B,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:y.a.Logo},r.a.createElement(j,null)),r.a.createElement("nav",{className:y.a.DesktopOnly},r.a.createElement(b,null)))},I=a(7),L=a.n(I),M=a(29),T=a.n(M),x=function(e){return e.show?r.a.createElement("div",{onClick:e.clicked,className:T.a.Backdrop}):null},H=function(e){var t=[L.a.SideDrawer,L.a.Close];return console.log(e.open),e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(d,null,r.a.createElement(x,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(j,null)),r.a.createElement("nav",null,r.a.createElement(b,null))))},P=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerCloseHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){console.log("ta mal"),e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement("div",null,r.a.createElement(D,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(H,{open:this.state.showSideDrawer,closed:this.sideDrawerCloseHandler})),r.a.createElement("main",{className:m.a.Content},this.props.children))}}]),a}(n.Component),A=a(10),q=a(34),U=a(6),K=a.n(U),F=function(e){var t=null;switch(e.type){case"bread-top":t=r.a.createElement("div",{className:K.a.BreadTop},r.a.createElement("div",{className:K.a.Seeds1}),r.a.createElement("div",{className:K.a.Seeds2}));break;case"salad":t=r.a.createElement("div",{className:K.a.Salad});break;case"tofu":t=r.a.createElement("div",{className:K.a.Tofu});break;case"cheese":t=r.a.createElement("div",{className:K.a.Cheese});break;case"ketchup":t=r.a.createElement("div",{className:K.a.Ketchup});break;case"avocadoMayo":t=r.a.createElement("div",{className:K.a.AvocadoMayo});break;case"meat":t=r.a.createElement("div",{className:K.a.Meat});break;case"bread-bottom":t=r.a.createElement("div",{className:K.a.BreadBottom});break;default:t=null}return t},J=a(30),Y=a.n(J),R=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(q.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(F,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null," Please select ingredients.")),r.a.createElement("div",{className:Y.a.Burguer},r.a.createElement(F,{type:"bread-top"}),t,r.a.createElement(F,{type:"bread-bottom"}))},W=a(12),X=a.n(W),z=a(8),G=a.n(z),V=function(e){return r.a.createElement("div",{className:G.a.BuildControl},r.a.createElement("div",{className:G.a.Label},e.label),r.a.createElement("button",{disabled:e.disabled,onClick:e.removed,className:G.a.Less}," Less "),r.a.createElement("button",{onClick:e.added,className:G.a.More}," More "))},Z=[{label:"Salad",type:"salad"},{label:"Tofu",type:"tofu"},{label:"Ketchup",type:"ketchup"},{label:"Cheese",type:"cheese"},{label:"AvocadoMayo",type:"avocadoMayo"},{label:"Meat",type:"meat"}],$=function(e){return r.a.createElement("div",{className:X.a.BuildControls},r.a.createElement("p",null," Current price: ",r.a.createElement("strong",null,e.price.toFixed(2))),Z.map((function(t){return r.a.createElement(V,{key:t.label,added:function(){return e.ingredientsAdded(t.type)},removed:function(){return e.ingredientsRemoved(t.type)},label:t.label,disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:X.a.OrderButton,onClick:e.ordered,disabled:!e.purchaseable},"Order Now"))},Q=a(31),ee=a.n(Q),te=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentDidUpdate",value:function(){console.log("Modal WillUpdate")}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement("div",{style:{transform:this.props.show?"translateY(0)":"translateY(100vh)",opacity:this.props.show?"1":"0"},className:ee.a.Modal},this.props.children),r.a.createElement(x,{clicked:this.props.modelClosed,show:this.props.show}))}}]),a}(n.Component),ae=a(13),ne=a.n(ae),re=function(e){return r.a.createElement("button",{className:[ne.a.Button,ne.a[e.buttonType]],onClick:e.clicked},e.children)},oe=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).testClick=function(){alert("test click")},e}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"componentDidUpdate",value:function(){console.log("orderSummary")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}})," ",t,": ",e.props.ingredients[t])}));return r.a.createElement(d,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"Delicious Burguer"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(re,{buttonType:"Danger",clicked:this.props.purchasedCancelled},"Cancel"),r.a.createElement(re,{buttonType:"Success",clicked:this.props.purchaseContinued},"Continue"))}}]),a}(n.Component),le=a(32),ce=a.n(le).a.create({baseURL:"https://react-hamburger-f5381.firebaseio.com/"}),se=a(33),ie=a.n(se),ue=function(){return r.a.createElement("div",{className:ie.a.Loader},"Loading...")},de={salad:.5,cheese:.3,meat:1.3,tofu:1.8,ketchup:.2,avocadoMayo:.8},pe=function(e,t){return function(a){Object(u.a)(o,a);var n=Object(i.a)(o);function o(){var e;Object(c.a)(this,o);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(s.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentDidMount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(te,{show:this.state.error,modelClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(n.Component)}(function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,totalPrice:4,purchaseing:!1,purchaseable:!1,loading:!1,error:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(A.a)({},e.state.ingredients);n[t]=a;var r=de[t],o=e.state.totalPrice+r;e.setState({ingredients:n,totalPrice:o}),console.log(o),e.setState({ingredients:n}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(A.a)({},e.state.ingredients);r[t]=n;var o=de[t],l=e.state.totalPrice-o;console.log(l),e.setState({ingredients:r,totalPrice:l}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){console.log("purchaseHandler"),e.setState({purchaseing:!0})},e.purchaseCancelHandler=function(){e.setState({purchaseing:!1})},e.purchaseContinue=function(){e.setState({loading:!0});var t={ingredients:e.state.ingredients,proce:e.state.totalPrice,customer:{name:"Rosi",address:{street:"dcjd",zipCode:"1111",country:"Portugal"},email:"test@hhh.com"},deliveryMethod:"fastest"};ce.post("/orders.json",t).then((function(t){e.setState({purchaseing:!1}),e.setState({loading:!1})})).catch((function(t){e.setState({purchaseing:!1}),e.setState({loading:!1})}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;ce.get("https://react-hamburger-f5381.firebaseio.com/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){console.log("entrou no catch"),e.setState({error:!0}),console.log("dentro do catch"+e.state.error)}))}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchaseable:t>0})}},{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients),t=null;console.log(this.state.error);var a=this.state.error?r.a.createElement("p",null," bla blah "):r.a.createElement(ue,null);for(var n in this.state.ingredients&&(a=r.a.createElement(d,null,r.a.createElement(R,{ingredients:this.state.ingredients}),r.a.createElement($,{ingredientsAdded:this.addIngredientHandler,ingredientsRemoved:this.removeIngredientHandler,disabled:e,ordered:this.purchaseHandler,purchaseable:this.state.purchaseable,price:this.state.totalPrice})),t=r.a.createElement(oe,{purchaseContinued:this.purchaseContinue,purchasedCancelled:this.purchaseCancelHandler,ingredients:this.state.ingredients,price:this.state.totalPrice})),this.state.loading&&(t=r.a.createElement(ue,null)),e)e[n]=e[n]<=0;return r.a.createElement(d,null,r.a.createElement(te,{show:this.state.purchaseing,modelClosed:this.purchaseCancelHandler},t),a)}}]),a}(n.Component),ce),me=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P,null,r.a.createElement(pe,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.c76f2d60.chunk.js.map