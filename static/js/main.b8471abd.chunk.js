(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,a,t){e.exports=t(66)},43:function(e,a,t){},44:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),i=t.n(r),c=(t(41),t(42),t(43),t(13)),s=t(14),m=t(17),o=t(15),u=t(16),d=(t(44),[{section:"\u4ea7\u54c1\u670d\u52a1",id:0,name:"\u4e2a\u4eba\u4e3b\u9875",image:"/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}]),h=t(67),E=t(68),f=t(69),g=t(70),p=t(71),v=t(72),b=t(6);function N(e){var a=e.dish;e.onClick;return l.a.createElement(h.a,null,l.a.createElement(b.b,{to:"/menu/".concat(a.id)},l.a.createElement(E.a,{width:"100%",src:a.image,alt:a.name}),l.a.createElement(f.a,null,l.a.createElement(g.a,null,a.name))))}var y=function(e){var a=e.dishes.map(function(a){return l.a.createElement("div",{key:a.id,className:"col-12 col-md-5 m-1"},l.a.createElement(N,{dish:a,onClick:e.onClick}))});return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement(b.b,{to:"/home"},"\u9996\u9875")),l.a.createElement(v.a,{active:!0},"\u670d\u52a1")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"\u670d\u52a1"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},a))},w=t(73),k=t(74);function I(e){var a=e.dish;return a?l.a.createElement(h.a,null,l.a.createElement(E.a,{src:a.image,alt:a.name}),l.a.createElement(w.a,null,l.a.createElement(g.a,null,a.name),l.a.createElement(k.a,null,a.description))):l.a.createElement("div",null)}function C(e){var a=e.comments;if(a){var t=a.map(function(e){return l.a.createElement("li",{key:"",className:"col-12 col-md-12 m-1"},l.a.createElement("div",null,e.content," "),l.a.createElement("div",null,"--",e.author,",",new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))});return l.a.createElement("div",null,l.a.createElement("h1",null,"Comments"),l.a.createElement("ul",null,t))}return l.a.createElement("div",null)}var O=function(e){return null!=e.dish?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement(b.b,{to:"/menu"},"\u670d\u52a1")),l.a.createElement(v.a,{active:!0},e.dish.name)),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,e.dish.name),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement(I,{dish:e.dish})),l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement(C,{comments:e.comments})))):l.a.createElement("div",null)},j=t(11),T=t(75),F=t(76),x=t(77),S=t(91),Z=t(78),B=t(79),z=t(80),P=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).toggleNav=t.toggleNav.bind(Object(j.a)(Object(j.a)(t))),t.state={isNavOpen:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(T.a,{dark:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(F.a,{onClick:this.toggleNav}),l.a.createElement(x.a,{className:"mr-auto",href:"/"},l.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),l.a.createElement(S.a,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(Z.a,{navbar:!0},l.a.createElement(B.a,null,l.a.createElement(b.c,{className:"nav-link",to:"/home"},l.a.createElement("span",{className:"fa fa-home fa-lg"})," \u9996\u9875")),l.a.createElement(B.a,null,l.a.createElement(b.c,{className:"nav-link",to:"/menu"},l.a.createElement("span",{className:"fa fa-list fa-lg"})," \u4ea7\u54c1\u670d\u52a1")),l.a.createElement(B.a,null,l.a.createElement(b.c,{className:"nav-link",to:"/aboutus"},l.a.createElement("span",{className:"fa fa-info fa-lg"}),"\u5173\u4e8e\u6211\u4eec")),l.a.createElement(B.a,null,l.a.createElement(b.c,{className:"nav-link",to:"/contactus"},l.a.createElement("span",{className:"fa fa-address-card fa-lg"})," \u8054\u7cfb\u6211\u4eec")))))),l.a.createElement(z.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-header"},l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("h1",null,"Ristorante con Fusion"),l.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),a}(n.Component);var A=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},l.a.createElement("h5",null,"\u94fe\u63a5"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement(b.b,{to:"/home"},"\u9996\u9875")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/menu"},"\u4ea7\u54c1\u670d\u52a1")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/aboutus"},"\u5173\u4e8e\u6211\u4eec")),l.a.createElement("li",null,l.a.createElement(b.b,{to:"/contactus"},"\u8054\u7cfb\u6211\u4eec")))),l.a.createElement("div",{className:"col-7 col-sm-5"},l.a.createElement("h5",null,"\u8054\u7cfb\u5730\u5740"),l.a.createElement("address",null,l.a.createElement("i",{className:"fa fa-location-arrow fa-lg"}),": \u6c5f\u82cf\u7701\u82cf\u5dde\u5e02\u9ad8\u65b0\u533a\u79d1\u53d1\u8def\u81f4\u8fdc\u5927\u53a6",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone fa-lg"}),": 138 6207 2905",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",l.a.createElement("a",{href:"mailto:jiabantiaoxiu@outlook.com"},"jiabantiaoxiu@outlook.com"))),l.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},l.a.createElement("div",{className:"text-center"}))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("p",null,"\xa9 Copyright 2017-",(new Date).getFullYear()," \u5feb\u4e50\u516b\u54e5"))))))},D=t(81),R=t(82),H=t(83);function J(e){var a=e.item;return l.a.createElement(h.a,null,l.a.createElement(D.a,null,a.section),l.a.createElement(E.a,{src:a.image,alt:a.name}),l.a.createElement(w.a,{className:"text-center"},l.a.createElement(g.a,null,a.name),a.designation?l.a.createElement(R.a,null,a.designation):null,l.a.createElement(k.a,null,a.description),l.a.createElement(H.a,null,"\u67e5\u770b\u66f4\u591a")))}var M=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-start"},l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(J,{item:e.dish})),l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(J,{item:e.promotion})),l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(J,{item:e.leader}))))},L=t(20),W=t(35),q=t(84),Y=t(85),V=t(86),G=t(87),K=t(88),U=t(89),$=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).handleBlur=function(e){return function(a){t.setState({touched:Object(W.a)({},t.state.touched,Object(L.a)({},e,!0))})}},t.state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:"",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},t.handleInputChange=t.handleInputChange.bind(Object(j.a)(Object(j.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(j.a)(Object(j.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"validate",value:function(e,a,t,n){var l={firstname:"",lastname:"",telnum:"",email:""};this.state.touched.firstname&&e.length<3?l.firstname="First Name should be >= 3 characters":this.state.touched.firstname&&e.length>10&&(l.firstname="First Name should be <= 10 characters"),this.state.touched.lastname&&a.length<3?l.lastname="Last Name should be >= 3 characters":this.state.touched.lastname&&a.length>10&&(l.lastname="Last Name should be <= 10 characters");return this.state.touched.telnum&&!/^\d+$/.test(t)&&(l.telnum="Tel. Number should contain only numbers"),this.state.touched.email&&1!==n.split("").filter(function(e){return"@"===e}).length&&(l.email="Email should contain a @"),l}},{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(L.a)({},n,t))}},{key:"handleSubmit",value:function(e){console.log("current state is:"+JSON.stringify(this.state)),e.preventDefault()}},{key:"render",value:function(){var e=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement(b.b,{to:"/home"},"\u9996\u9875")),l.a.createElement(v.a,{active:!0},"\u8054\u7cfb\u6211\u4eec")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"\u8054\u7cfb\u6211\u4eec"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"\u4f4d\u7f6e\u4fe1\u606f")),l.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},l.a.createElement("h5",null,"\u6211\u4eec\u7684\u5730\u5740"),l.a.createElement("address",null,"121, Clear Water Bay Road",l.a.createElement("br",null),"Clear Water Bay, Kowloon",l.a.createElement("br",null),"HONG KONG",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope"}),": ",l.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),l.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},l.a.createElement("h5",null,"\u5730\u56fe")),l.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},l.a.createElement("div",{className:"btn-group",role:"group"},l.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},l.a.createElement("i",{className:"fa fa-phone"})," Call"),l.a.createElement("a",{role:"button",className:"btn btn-info"},l.a.createElement("i",{className:"fa fa-skype"})," Skype"),l.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"\u53cd\u9988\u610f\u89c1")),l.a.createElement("div",{className:"col-12 col-md-9"},l.a.createElement(q.a,{onSubmit:this.handleSubmit},l.a.createElement(Y.a,{row:!0},l.a.createElement(V.a,{htmlFor:"lastname",md:2},"\u59d3"),l.a.createElement(G.a,{md:10},l.a.createElement(K.a,{type:"text",id:"lastname",name:"lastname",placeholder:"\u59d3",value:this.state.lastname,valid:""===e.lastname,invalid:""!==e.lastname,onBlur:this.handleBlur("lastname"),onChange:this.handleInputChange}),l.a.createElement(U.a,null,e.lastname))),l.a.createElement(Y.a,{row:!0},l.a.createElement(V.a,{htmlFor:"firstname",md:2},"\u540d"),l.a.createElement(G.a,{md:10},l.a.createElement(K.a,{type:"text",id:"firstname",name:"firstname",placeholder:"\u540d",value:this.state.firstname,valid:""===e.firstname,invalid:""!==e.firstname,onBlur:this.handleBlur("firstname"),onChange:this.handleInputChange}),l.a.createElement(U.a,null,e.firstname))),l.a.createElement(Y.a,{row:!0},l.a.createElement(V.a,{htmlFor:"telnum",md:2},"\u8054\u7cfb\u7535\u8bdd"),l.a.createElement(G.a,{md:10},l.a.createElement(K.a,{type:"text",id:"telnum",name:"telnum",placeholder:"\u7535\u8bdd\u53f7\u7801",value:this.state.telnum,valid:""===e.telnum,invalid:""!==e.telnum,onBlur:this.handleBlur("telnum"),onChange:this.handleInputChange}),l.a.createElement(U.a,null,e.telnum))),l.a.createElement(Y.a,{row:!0},l.a.createElement(V.a,{htmlFor:"email",md:2},"\u90ae\u7bb1"),l.a.createElement(G.a,{md:10},l.a.createElement(K.a,{type:"text",id:"email",name:"email",placeholder:"\u90ae\u7bb1",value:this.state.email,valid:""===e.email,invalid:""!==e.email,onBlur:this.handleBlur("email"),onChange:this.handleInputChange}),l.a.createElement(U.a,null,e.email))),l.a.createElement(Y.a,{row:!0},l.a.createElement(G.a,{md:{size:6,offset:2}},l.a.createElement(Y.a,{check:!0},l.a.createElement(V.a,{check:!0},l.a.createElement(K.a,{name:"agree",type:"checkbox",id:"agree",checked:this.state.agree,onChange:this.handleInputChange})," ",l.a.createElement("p",null,"\u5141\u8bb8\u6211\u4eec\u5c06\u4f1a\u8054\u7cfb\u60a8?")))),l.a.createElement(G.a,{md:{size:3,offset:1}},l.a.createElement(K.a,{type:"select",name:"contactType",value:this.state.contactType,onChange:this.handleInputChange},l.a.createElement("option",{value:"tel"},"\u7535\u8bdd"),l.a.createElement("option",{value:"email"},"\u90ae\u7bb1")))),l.a.createElement(Y.a,{row:!0},l.a.createElement(V.a,{htmlFor:"message",md:2},"\u53cd\u9988\u5185\u5bb9"),l.a.createElement(G.a,{md:10},l.a.createElement(K.a,{type:"textarea",id:"message",name:"message",rows:"6",value:this.state.message,onChange:this.handleInputChange}))),l.a.createElement(Y.a,{row:!0},l.a.createElement(G.a,{md:{size:10,offset:2}},l.a.createElement(H.a,{type:"submit",color:"primary"},"\u53d1\u9001")))))))}}]),a}(n.Component),Q=t(90);function X(e){var a=e.leaders;if(a){var t=a.map(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Q.a,null,l.a.createElement(Q.a,{left:!0,className:"col-sm-2"},l.a.createElement("img",{width:100,height:100,src:e.image,alt:"thumbnail"})),l.a.createElement(Q.a,{body:!0},l.a.createElement(Q.a,{heading:!0},e.name),l.a.createElement("p",null,e.abbr),l.a.createElement("br",null),l.a.createElement("p",null,e.description))))});return l.a.createElement(l.a.Fragment,null,l.a.createElement(Q.a,{list:!0},t))}return l.a.createElement("div",null)}var _=function(e){return e.leaders.map(function(e){return l.a.createElement("p",null,"Leader ",e.name)}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement(b.b,{to:"/home"},"\u9996\u9875")),l.a.createElement(v.a,{active:!0},"\u5173\u4e8e\u6211\u4eec")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"\u5173\u4e8e\u6211\u4eec"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("h2",null,"Our History"),l.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),l.a.createElement("p",null,"The restaurant traces its humble beginnings to ",l.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),l.a.createElement("div",{className:"col-12 col-md-5"},l.a.createElement(h.a,null,l.a.createElement(D.a,{className:"bg-primary text-white"},"Facts At a Glance"),l.a.createElement(w.a,null,l.a.createElement("dl",{className:"row p-1"},l.a.createElement("dt",{className:"col-6"},"Started"),l.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),l.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),l.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),l.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),l.a.createElement("dd",{className:"col-6"},"$1,250,375"),l.a.createElement("dt",{className:"col-6"},"Employees"),l.a.createElement("dd",{className:"col-6"},"40"))))),l.a.createElement("div",{className:"col-12"},l.a.createElement(h.a,null,l.a.createElement(w.a,{className:"bg-faded"},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),l.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",l.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",null,"Corporate Leadership")),l.a.createElement("div",{className:"col-12"},l.a.createElement(X,{leaders:e.leaders}))))},ee=t(19),ae=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],te=[{section:"\u5c0f\u7a0b\u5e8f",id:0,name:"\u8f66\u7ba1\u5bb6",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],ne=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"\u8f66\u7ba1\u5bb6\u5c0f\u7a0b\u5e8f",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{section:"\u56e2\u961f",id:3,name:"Lee",image:"/assets/images/lee.jpg",designation:"\u5168\u6808\u5de5\u7a0b\u5e08",abbr:"\u521b\u59cb\u4eba",featured:!0,description:"2011\u5e74\u6bd5\u4e1a\u4e8e\u5357\u660c\u5927\u5b66\uff0c\u76ee\u524d\u5c31\u804c\u4e8e\u4e2d\u56fd\u79fb\u52a8\u82cf\u5dde\u7814\u53d1\u4e2d\u5fc3\u3002\u8d1f\u8d23\u516c\u53f8\u4e91\u5e73\u53f0\u7684\u524d\u7aef\u67b6\u6784\u548c\u5f00\u53d1\u5de5\u4f5c\u3002"}],le=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={dishes:d,comments:ae,promotions:te,leaders:ne,selectedDish:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(P,null),l.a.createElement(ee.d,null,l.a.createElement(ee.b,{path:"/home",component:function(){return l.a.createElement(M,{dish:e.state.dishes.filter(function(e){return e.featured})[0],promotion:e.state.promotions.filter(function(e){return e.featured})[0],leader:e.state.leaders.filter(function(e){return e.featured})[0]})}}),l.a.createElement(ee.b,{exact:!0,path:"/menu",component:function(){return l.a.createElement(y,{dishes:e.state.dishes})}}),l.a.createElement(ee.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return l.a.createElement(O,{dish:e.state.dishes.filter(function(e){return e.id===parseInt(t.params.dishId,10)})[0],comments:e.state.comments.filter(function(e){return e.dishId===parseInt(t.params.dishId,10)})})}}),l.a.createElement(ee.b,{exact:!0,path:"/aboutus",component:function(){return l.a.createElement(_,{leaders:e.state.leaders})}}),l.a.createElement(ee.b,{exact:!0,path:"/contactus",component:$}),l.a.createElement(ee.a,{to:"/home"})),l.a.createElement(A,null))}}]),a}(n.Component),re=(t(65),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={dishes:d},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(b.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(le,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.b8471abd.chunk.js.map