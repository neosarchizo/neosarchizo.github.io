/*! For license information please see e9e4ae58e2724cf0cd073cb21fe7486cb9ca7c5f-1546412b2f3c652268a0.js.LICENSE.txt */
(self.webpackChunkneosarchizo_blog=self.webpackChunkneosarchizo_blog||[]).push([[624],{3720:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(){var t={808:function(t,e,n){var i,o,r;void 0===(o="function"==typeof(i=r=function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(i){function o(){}function r(e,n,r){if("undefined"!=typeof document){"number"==typeof(r=t({path:"/"},o.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(t){}n=i.write?i.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in r)r[s]&&(c+="; "+s,!0!==r[s]&&(c+="="+r[s].split(";")[0]));return document.cookie=e+"="+n+c}}function a(t,n){if("undefined"!=typeof document){for(var o={},r=document.cookie?document.cookie.split("; "):[],a=0;a<r.length;a++){var c=r[a].split("="),s=c.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var l=e(c[0]);if(s=(i.read||i)(s,l)||e(s),n)try{s=JSON.parse(s)}catch(t){}if(o[l]=s,t===l)break}catch(t){}}return t?o[t]:o}}return o.set=r,o.get=function(t){return a(t,!1)},o.getJSON=function(t){return a(t,!0)},o.remove=function(e,n){r(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))})?i.call(e,n,e,t):i)||(t.exports=o),t.exports=r()},703:function(t,e,n){"use strict";var i=n(414);function o(){}function r(){}r.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,r,a){if(a!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},697:function(t,e,n){t.exports=n(703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return function(){"use strict";i.r(o),i.d(o,{Cookies:function(){return s()},OPTIONS:function(){return v},SAME_SITE_OPTIONS:function(){return j},VISIBLE_OPTIONS:function(){return w},default:function(){return I},getCookieConsentValue:function(){return C},resetCookieConsentValue:function(){return S}});var t=n(7294),e=i.n(t),r=i(697),a=i.n(r),c=i(808),s=i.n(c);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u=["children"];function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return y(t)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v={TOP:"top",BOTTOM:"bottom",NONE:"none"},j={STRICT:"strict",LAX:"lax",NONE:"none"},w={HIDDEN:"hidden",SHOW:"show",BY_COOKIE_VALUE:"byCookieValue"},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=s().get(t);return void 0===e?s().get(k(t)):e},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;s().remove(t)},k=function(t){return"".concat(t,"-legacy")},O="CookieConsent",_=function(t){var e=t.condition,n=t.wrapper,i=t.children;return e?n(i):i},N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(c,t);var n,i,o,r,a=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(o);if(r){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),x(y(e=a.call(this,t)),"handleScroll",(function(){var t=e.props.acceptOnScrollPercentage,n=document.documentElement,i=document.body,o="scrollTop",r="scrollHeight";(n[o]||i[o])/((n[r]||i[r])-n.clientHeight)*100>t&&e.accept(!0)})),x(y(e),"removeScrollListener",(function(){e.props.acceptOnScroll&&window.removeEventListener("scroll",e.handleScroll)})),e.state={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},e}return n=c,(i=[{key:"componentDidMount",value:function(){var t=this.props.debug;(void 0===this.getCookieValue()||t)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))}},{key:"componentWillUnmount",value:function(){this.removeScrollListener()}},{key:"accept",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.props,n=e.cookieName,i=e.cookieValue,o=e.hideOnAccept,r=e.onAccept;this.setCookie(n,i),r(null!=t&&t),o&&(this.setState({visible:!1}),this.removeScrollListener())}},{key:"overlayClick",value:function(){var t=this.props,e=t.acceptOnOverlayClick,n=t.onOverlayClick;e&&this.accept(),n()}},{key:"decline",value:function(){var t=this.props,e=t.cookieName,n=t.declineCookieValue,i=t.hideOnDecline,o=t.onDecline;t.setDeclineCookie&&this.setCookie(e,n),o(),i&&this.setState({visible:!1})}},{key:"setCookie",value:function(t,e){var n=this.props,i=n.extraCookieOptions,o=n.expires,r=n.sameSite,a=this.props.cookieSecurity;void 0===a&&(a=!location||"https:"===location.protocol);var c=p(p({expires:o},i),{},{sameSite:r,secure:a});r===j.NONE&&s().set(k(t),e,c),s().set(t,e,c)}},{key:"getCookieValue",value:function(){var t=this.props.cookieName;return C(t)}},{key:"render",value:function(){var t=this;switch(this.props.visible){case w.HIDDEN:return null;case w.BY_COOKIE_VALUE:if(!this.state.visible)return null}var n=this.props,i=n.location,o=n.style,r=n.buttonStyle,a=n.declineButtonStyle,c=n.contentStyle,s=n.disableStyles,l=n.buttonText,u=n.declineButtonText,f=n.containerClasses,h=n.contentClasses,m=n.buttonClasses,g=n.buttonWrapperClasses,y=n.declineButtonClasses,b=n.buttonId,x=n.declineButtonId,j=n.disableButtonStyles,C=n.enableDeclineButton,S=n.flipButtons,k=n.ButtonComponent,O=n.overlay,N=n.overlayClasses,I=n.overlayStyle,T=n.ariaAcceptLabel,B=n.ariaDeclineLabel,E=n.customContainerAttributes,M=n.customContentAttributes,P=n.customButtonProps,D={},A={},R={},L={},z={};switch(s?(D=d({},o),A=d({},r),R=d({},a),L=d({},c),z=d({},I)):(D=d({},p(p({},this.state.style),o)),L=d({},p(p({},this.state.contentStyle),c)),z=d({},p(p({},this.state.overlayStyle),I)),j?(A=d({},r),R=d({},a)):(A=d({},p(p({},this.state.buttonStyle),r)),R=d({},p(p({},this.state.declineButtonStyle),a)))),i){case v.TOP:D.top="0";break;case v.BOTTOM:D.bottom="0"}var F=[];return C&&F.push(e().createElement(k,{key:"declineButton",style:R,className:y,id:x,"aria-label":B,onClick:function(){t.decline()}},u)),F.push(e().createElement(k,d({},P,{key:"acceptButton",style:A,className:m,id:b,"aria-label":T,onClick:function(){t.accept()}}),l)),S&&F.reverse(),e().createElement(_,{condition:O,wrapper:function(n){return e().createElement("div",{style:z,className:N,onClick:function(){t.overlayClick()}},n)}},e().createElement("div",d({className:"".concat(f),style:D},E),e().createElement("div",d({style:L,className:h},M),this.props.children),e().createElement("div",{className:"".concat(g)},F.map((function(t){return t})))))}}])&&h(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),c}(t.Component);N.propTypes={location:a().oneOf(Object.keys(v).map((function(t){return v[t]}))),visible:a().oneOf(Object.keys(w).map((function(t){return w[t]}))),sameSite:a().oneOf(Object.keys(j).map((function(t){return j[t]}))),style:a().object,buttonStyle:a().object,declineButtonStyle:a().object,contentStyle:a().object,children:a().any,disableStyles:a().bool,hideOnAccept:a().bool,hideOnDecline:a().bool,onAccept:a().func,onDecline:a().func,buttonText:a().oneOfType([a().string,a().func,a().element]),declineButtonText:a().oneOfType([a().string,a().func,a().element]),cookieName:a().string,cookieValue:a().oneOfType([a().string,a().bool,a().number]),declineCookieValue:a().oneOfType([a().string,a().bool,a().number]),setDeclineCookie:a().bool,debug:a().bool,expires:a().number,containerClasses:a().string,contentClasses:a().string,buttonClasses:a().string,buttonWrapperClasses:a().string,declineButtonClasses:a().string,buttonId:a().string,declineButtonId:a().string,extraCookieOptions:a().object,disableButtonStyles:a().bool,enableDeclineButton:a().bool,flipButtons:a().bool,ButtonComponent:a().elementType,cookieSecurity:a().bool,overlay:a().bool,overlayClasses:a().string,overlayStyle:a().object,onOverlayClick:a().func,acceptOnOverlayClick:a().bool,ariaAcceptLabel:a().string,ariaDeclineLabel:a().string,acceptOnScroll:a().bool,acceptOnScrollPercentage:a().number,customContentAttributes:a().object,customContainerAttributes:a().object,customButtonProps:a().object},N.defaultProps={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:v.BOTTOM,visible:w.BY_COOKIE_VALUE,onAccept:function(){},onDecline:function(){},cookieName:O,cookieValue:!0,declineCookieValue:!1,setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:j.LAX,ButtonComponent:function(t){var n=t.children,i=function(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,u);return e().createElement("button",i,n)},overlay:!1,overlayClasses:"",onOverlayClick:function(){},acceptOnOverlayClick:!1,ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25,customContentAttributes:{},customContainerAttributes:{},customButtonProps:{}};var I=N}(),o}()},636:function(t,e,n){"use strict";n.d(e,{CL:function(){return s},BQ:function(){return p},Q0:function(){return h},Wl:function(){return m},VN:function(){return w},oo:function(){return C},x0:function(){return N},UM:function(){return I},UO:function(){return F},ko:function(){return $},or:function(){return _t},xM:function(){return tt},$7:function(){return r},n6:function(){return et},_$:function(){return nt},XN:function(){return it},Se:function(){return St}});var i=n(3729),o=n(5893),r=function(t){var e=t.location;return(0,o.jsxs)(i.Ar,{location:e,children:[(0,o.jsx)(i.HJ,{title:"404: Not Found"}),(0,o.jsx)("h1",{children:"Not Found"}),(0,o.jsx)("p",{children:"You just hit a route that doesn't exist... the sadness."})]})},a=n(3583),c=a.default.div.withConfig({displayName:"styles__Container",componentId:"sc-1gxi0oq-0"})(["color:teal;"]),s=function(){return(0,o.jsxs)(c,{children:[(0,o.jsx)("h1",{children:"About Gatsby"}),(0,o.jsx)("p",{children:"Such wow. Very React."})]})},l=n(8904),u=n(1597),d=a.default.article.withConfig({displayName:"styles__MyArticle",componentId:"sc-htsard-0"})(["max-width:",";margin-left:auto;margin-right:auto;margin-bottom:",";font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','Apple SD Gothic Neo','Malgun Gothic','맑은 고딕',나눔고딕,'Nanum Gothic','Noto Sans KR','Noto Sans CJK KR',arial,돋움,Dotum,Tahoma,Geneva,sans-serif;font-size:15px;display:flex;align-items:center;flex-direction:column;text-align:center;padding-top:",";padding-bottom:",";"],(function(t){return t.theme.spacing(84)}),(function(t){return t.theme.spacing(10)}),(function(t){return t.theme.spacing(10)}),(function(t){return t.theme.spacing(10)})),f=(0,a.default)(u.Link).withConfig({displayName:"styles__MyLink",componentId:"sc-htsard-1"})(["color:inherit;text-decoration:none;font-size:20px;font-weight:bold;margin-bottom:20px;"]),p=function(t){var e=t.location,n=(0,l.Q)().t;return(0,o.jsxs)(i.Ar,{location:e,children:[(0,o.jsx)(i.HJ,{title:n("apps"),description:n("apps")}),(0,o.jsxs)(d,{children:[(0,o.jsx)(f,{to:"/apps/eye-training",children:n("eyeTraining")}),(0,o.jsx)(f,{to:"/apps/kegel-training",children:n("kegelTraining")})]})]})},h=function(t){var e=(0,l.Q)().t,n=t.data,r=n.site.siteMetadata,a=r.author.summary,c=r.social,s=c.email,u=c.telegram,d=c.github,f=c.youtube,p=n.allMdx.edges,h=t.location;return(0,o.jsx)(i.or,{title:e("arduino"),authorSummary:a,email:s,telegram:u,github:d,youtube:f,posts:p,location:h})},m=function(t){var e=(0,l.Q)().t,n=t.data,r=n.site.siteMetadata,a=r.author.summary,c=r.social,s=c.email,u=c.telegram,d=c.github,f=c.youtube,p=n.allMdx.edges,h=t.location;return(0,o.jsx)(i.or,{title:e("aws"),authorSummary:a,email:s,telegram:u,github:d,youtube:f,posts:p,location:h})},g=n(757),y=n(9308),b=a.default.article.withConfig({displayName:"styles__MyArticle",componentId:"sc-v0x2p3-0"})(["max-width:",";margin-left:auto;margin-right:auto;margin-bottom:",";font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','Apple SD Gothic Neo','Malgun Gothic','맑은 고딕',나눔고딕,'Nanum Gothic','Noto Sans KR','Noto Sans CJK KR',arial,돋움,Dotum,Tahoma,Geneva,sans-serif;font-size:15px;display:flex;align-items:center;flex-direction:column;text-align:center;"],(function(t){return t.theme.spacing(84)}),(function(t){return t.theme.spacing(10)})),x=a.default.img.withConfig({displayName:"styles__Img",componentId:"sc-v0x2p3-1"})(["width:30%;height:auto;@media screen and (max-width:","){margin-top:",";width:70%;}@media screen and (min-width:","){margin-top:",";}"],(function(t){return t.theme.spacing(84)}),(function(t){return t.theme.spacing(5)}),(function(t){return t.theme.spacing(125)}),(function(t){return t.theme.spacing(7)})),v=(0,a.default)(g.M).withConfig({displayName:"styles__MyLink",componentId:"sc-v0x2p3-2"})(["text-decoration:none;color:inherit;@media screen and (max-width:","){margin-top:",";}@media screen and (min-width:","){margin-top:",";}"],(function(t){return t.theme.spacing(84)}),(function(t){return t.theme.spacing(5)}),(function(t){return t.theme.spacing(125)}),(function(t){return t.theme.spacing(7)})),j=(0,a.default)(y.Z).withConfig({displayName:"styles__Title",componentId:"sc-v0x2p3-3"})([""]),w=function(t){var e=t.location,n=(0,l.Q)().t,r=function(t){return"http://www.yes24.com/Product/Goods/"+t};return(0,o.jsxs)(i.Ar,{location:e,children:[(0,o.jsx)(i.HJ,{title:n("books"),description:n("booksDescription")}),(0,o.jsxs)(b,{children:[(0,o.jsx)(v,{href:r(43948265),children:(0,o.jsx)(x,{src:"http://image.yes24.com/goods/43948265"})}),(0,o.jsx)(v,{href:r(43948265),children:(0,o.jsx)(j,{children:"아두이노, 상상을 현실로 만드는 프로젝트 입문편+아두이노 키트 세트"})}),(0,o.jsx)(v,{href:r(33009811),children:(0,o.jsx)(x,{src:"http://image.yes24.com/goods/33009811"})}),(0,o.jsx)(v,{href:r(33009811),children:(0,o.jsx)(j,{children:"아두이노, 상상을 현실로 만드는 프로젝트 실전편"})}),(0,o.jsx)(v,{href:r(64491488),children:(0,o.jsx)(x,{src:"http://image.yes24.com/goods/64491488"})}),(0,o.jsx)(v,{href:r(64491488),children:(0,o.jsx)(j,{children:"라즈베리 파이, 상상을 현실로 만드는 프로젝트 입문편"})}),(0,o.jsx)(v,{href:r(77109353),children:(0,o.jsx)(x,{src:"http://image.yes24.com/goods/77109353"})}),(0,o.jsx)(v,{href:r(77109353),children:(0,o.jsx)(j,{children:"마이크로비트, 상상을 현실로 만드는 프로젝트 입문편"})})]})]})},C=function(t){var e=(0,l.Q)().t,n=t.data,r=n.site.siteMetadata,a=r.author.summary,c=r.social,s=c.email,u=c.telegram,d=c.github,f=c.youtube,p=n.allMdx.edges,h=t.location;return(0,o.jsx)(i.or,{title:e("esp32"),authorSummary:a,email:s,telegram:u,github:d,youtube:f,posts:p,location:h})},S=a.default.article.withConfig({displayName:"styles__MyArticle",componentId:"sc-12yncer-0"})(["max-width:",";margin-left:auto;margin-right:auto;margin-bottom:",";font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','Apple SD Gothic Neo','Malgun Gothic','맑은 고딕',나눔고딕,'Nanum Gothic','Noto Sans KR','Noto Sans CJK KR',arial,돋움,Dotum,Tahoma,Geneva,sans-serif;font-size:15px;display:flex;align-items:center;flex-direction:column;text-align:center;padding-top:",";padding-bottom:",";"],(function(t){return t.theme.spacing(84)}),(function(t){return t.theme.spacing(10)}),(function(t){return t.theme.spacing(10)}),(function(t){return t.theme.spacing(10)})),k=(0,a.default)(u.Link).withConfig({displayName:"styles__MyLink",componentId:"sc-12yncer-1"})(["color:inherit;text-decoration:none;font-size:20px;font-weight:bold;margin-bottom:20px;"]),O=n(1425),_=n(1428),N=function(t){var e=t.location,n=(0,l.Q)().t;return(0,o.jsxs)(O.Z,{location:e,children:[(0,o.jsx)(_.Z,{title:n("apps"),description:n("apps")}),(0,o.jsxs)(S,{children:[(0,o.jsx)(k,{to:"/apps/eye-training/se",children:n("eyeTrainingSe")}),(0,o.jsx)(k,{to:"/apps/eye-training/kiho",children:n("eyeTrainingKiho")})]})]})},I=function(t){var e=(0,l.Q)().t,n=t.data,r=n.site.siteMetadata,a=r.author.summary,c=r.social,s=c.email,u=c.telegram,d=c.github,f=c.youtube,p=n.allMdx.edges,h=t.location;return(0,o.jsx)(i.or,{title:e("fusion360"),authorSummary:a,email:s,telegram:u,github:d,youtube:f,posts:p,location:h})},T=n(7294),B=n(559),E=n(9148),M=function(t,e){var n=(0,T.useRef)((function(){}));(0,T.useEffect)((function(){n.current=t}),[t]),(0,T.useEffect)((function(){if(null!==e){var t=setInterval((function(){(0,n.current)()}),e);return function(){return clearInterval(t)}}return function(){}}),[e])},P=(0,a.createGlobalStyle)(["html,body,#___gatsby,#gatsby-focus-wrapper{height:100%;}body{margin:0px;}"]),D=a.default.div.withConfig({displayName:"styles__Container",componentId:"sc-1cl5e4g-0"})(["height:100%;width:100%;display:flex;align-items:center;justify-content:center;"]),A=a.default.div.withConfig({displayName:"styles__Number",componentId:"sc-1cl5e4g-1"})(["font-size:180px;font-weight:bold;@media screen and (min-width:","){font-size:300px;}"],(function(t){return t.theme.spacing(125)})),R=(0,a.default)(A).withConfig({displayName:"styles__Counter",componentId:"sc-1cl5e4g-2"})(["color:red;"]),L=a.default.div.withConfig({displayName:"styles__Overlay",componentId:"sc-1cl5e4g-3"})(["position:absolute;width:100%;height:100%;"]),z=(0,B.Z)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}},{color:{foreground:"#050505",background:"white",faded:"#888"}}),F=function(){var t=(0,T.useState)(100),e=t[0],n=t[1],i=(0,T.useState)(5),r=i[0],c=i[1],s=(0,T.useState)(!1),l=s[0],u=s[1],d=(0,T.useState)(null),f=d[0],p=d[1],h=(0,T.useCallback)((function(){c((function(t){var e=t-1;return 0===e&&(u(!1),n((function(t){return t-1})),p(null)),e}))}),[]);M(h,f);var m=(0,T.useCallback)((function(t){32===t.keyCode&&!l&&e>0&&(u(!0),c(5),p(1e3))}),[l,e]);return(0,T.useEffect)((function(){return document.addEventListener("keydown",m),function(){document.removeEventListener("keydown",m)}}),[l,e,m]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E.ZP,{}),(0,o.jsx)(P,{}),(0,o.jsx)(a.ThemeProvider,{theme:z,children:(0,o.jsxs)(D,{children:[l?(0,o.jsx)(R,{children:r}):(0,o.jsx)(A,{children:e}),(0,o.jsx)(L,{})]})})]})},V=n(3964),G=n.n(V),H=(0,a.createGlobalStyle)(["html,body,#___gatsby,#gatsby-focus-wrapper{height:100%;}body{margin:0px;}"]),Q=a.default.div.withConfig({displayName:"styles__Container",componentId:"sc-188zorp-0"})(["height:100%;width:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(181,219,146);cursor:none;flex-direction:column;padding-left:14%;padding-right:14%;padding-top:5%;padding-bottom:5%;"]),U=a.default.div.withConfig({displayName:"styles__Ball",componentId:"sc-188zorp-1"})(["width:","px;height:","px;border-radius:50%;border-color:",";border-style:solid;border-width:thick;display:flex;align-items:center;justify-content:center;"],(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.activated?"rgb(30, 109, 4)":"rgb(248,222,102)"})),K=a.default.div.withConfig({displayName:"styles__Arc",componentId:"sc-188zorp-2"})(["width:20%;padding-top:20%;background-color:",";border-radius:50%;"],(function(t){return t.activated?"rgb(30, 109, 4)":"rgb(248,222,102)"})),Y=a.default.div.withConfig({displayName:"styles__Row",componentId:"sc-188zorp-3"})(["flex:1;width:100%;display:flex;flex-direction:row;justify-content:space-between;"]),W=(0,a.default)(y.Z).attrs({variant:"h4"}).withConfig({displayName:"styles__TxtFinish",componentId:"sc-188zorp-4"})([""]),Z=function(t){var e=t.activated,n=t.height,i=t.width;return(0,o.jsx)(U,{activated:e,height:n,width:i,children:(0,o.jsx)(K,{activated:e})})},J=function(t){var e=t.activated,n=t.height,i=t.width;return(0,o.jsxs)(Y,{children:[(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i}),(0,o.jsx)(Z,{activated:e,height:n,width:i})]})},q=.028,X=(0,B.Z)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),$=function(){var t=(0,T.useState)(0),e=t[0],n=t[1],i=(0,T.useState)(0),r=i[0],c=i[1],s=(0,T.useState)(0),u=s[0],d=s[1],f=(0,T.useState)(250),p=f[0],h=f[1],m=(0,l.Q)().t;M((function(){d((function(t){var e=t+1;return 140===e&&(localStorage.setItem("last_date",G()().format("YYYY-MM-DD")),h(null)),e}))}),p);var g=function(){n(window.innerWidth*q),c(window.innerHeight*q)};return(0,T.useEffect)((function(){return n(window.innerWidth*q),c(window.innerHeight*q),window.addEventListener("resize",g),function(){window.removeEventListener("resize",g)}}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E.ZP,{}),(0,o.jsx)(H,{}),(0,o.jsx)(a.ThemeProvider,{theme:X,children:(0,o.jsx)(Q,{children:null!=p?Array.from(Array(20)).map((function(t,n){return(0,o.jsx)(J,{activated:u%10*2===n||u%10*2+1===n,height:r,width:e})})):(0,o.jsx)(W,{children:m("msgEyeTrainingFinish")})})})]})},tt=function(t){var e=(0,l.Q)().t,n=t.data,r=n.site.siteMetadata,a=r.author.summary,c=r.social,s=c.email,u=c.telegram,d=c.github,f=c.youtube,p=n.allMdx.edges,h=t.location;return(0,o.jsx)(i.or,{title:e("nordic"),authorSummary:a,email:s,telegram:u,github:d,youtube:f,posts:p,location:h})},et=function(t){var e=(0,l.Q)().t,n=t.data,r=n.site.siteMetadata,a=r.author.summary,c=r.social,s=c.email,u=c.telegram,d=c.github,f=c.youtube,p=n.allMdx.edges,h=t.location;return(0,o.jsx)(i.or,{title:e("raspberryPi"),authorSummary:a,email:s,telegram:u,github:d,youtube:f,posts:p,location:h})},nt=function(t){var e=(0,l.Q)().t,n=t.data,r=n.site.siteMetadata,a=r.author.summary,c=r.social,s=c.email,u=c.telegram,d=c.github,f=c.youtube,p=n.allMdx.edges,h=t.location;return(0,o.jsx)(i.or,{title:e("react"),authorSummary:a,email:s,telegram:u,github:d,youtube:f,posts:p,location:h})},it=function(t){var e=(0,l.Q)().t,n=t.data,r=n.site.siteMetadata,a=r.author.summary,c=r.social,s=c.email,u=c.telegram,d=c.github,f=c.youtube,p=n.allMdx.edges,h=t.location;return(0,o.jsx)(i.or,{title:e("reactNative"),authorSummary:a,email:s,telegram:u,github:d,youtube:f,posts:p,location:h})},ot=a.default.div.withConfig({displayName:"styles__Container",componentId:"sc-dz719m-0"})(["height:100%;width:100%;display:flex;align-items:center;justify-content:space-between;background-color:rgba(181,219,146);cursor:none;"]),rt=a.default.div.withConfig({displayName:"styles__Ball",componentId:"sc-dz719m-1"})(["width:","px;height:","px;background-color:",";border-radius:50%;"],(function(t){return t.radian}),(function(t){return t.radian}),(function(t){return t.activated?"rgb(30, 109, 4)":"rgb(248,222,102)"})),at=a.default.div.withConfig({displayName:"styles__Col",componentId:"sc-dz719m-2"})(["display:flex;flex-direction:column;justify-content:space-around;margin-left:2%;margin-right:2%;margin-top:8.1%;margin-bottom:8.1%;width:3.7%;height:100%;"]),ct=function(t){var e=t.onFinish,n=t.playing,i=t.intervalMs,r=t.radian,a=(0,T.useState)(0),c=a[0],s=a[1],l=(0,T.useRef)(!1),u=(0,T.useRef)(0);return M((function(){n&&s((function(t){var n=0;return l.current?-1===(n=t-1)&&(n=1,l.current=!1,u.current+=1,7===u.current&&e()):12===(n=t+1)&&(n=10,l.current=!0),n}))}),i),(0,o.jsxs)(ot,{children:[(0,o.jsxs)(at,{children:[(0,o.jsx)(rt,{radian:r,activated:0===c}),(0,o.jsx)(rt,{radian:r,activated:2===c}),(0,o.jsx)(rt,{radian:r,activated:4===c}),(0,o.jsx)(rt,{radian:r,activated:6===c}),(0,o.jsx)(rt,{radian:r,activated:8===c}),(0,o.jsx)(rt,{radian:r,activated:10===c})]}),(0,o.jsxs)(at,{children:[(0,o.jsx)(rt,{radian:r,activated:1===c}),(0,o.jsx)(rt,{radian:r,activated:3===c}),(0,o.jsx)(rt,{radian:r,activated:5===c}),(0,o.jsx)(rt,{radian:r,activated:7===c}),(0,o.jsx)(rt,{radian:r,activated:9===c}),(0,o.jsx)(rt,{radian:r,activated:11===c})]})]})},st=a.default.div.withConfig({displayName:"styles__Container",componentId:"sc-1bdhqg5-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;background-color:rgba(181,219,146);cursor:none;"]),lt=a.default.div.withConfig({displayName:"styles__Ball",componentId:"sc-1bdhqg5-1"})(["width:","px;height:","px;background-color:",";border-radius:50%;"],(function(t){return t.radian}),(function(t){return t.radian}),(function(t){return t.activated?"rgb(30, 109, 4)":"rgb(248,222,102)"})),ut=a.default.div.withConfig({displayName:"styles__Row",componentId:"sc-1bdhqg5-2"})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;height:7.4%;position:absolute;"]),dt=(0,a.default)(ut).withConfig({displayName:"styles__TopRow",componentId:"sc-1bdhqg5-3"})(["top:8.1%;> ","{:first-of-type{margin-left:2%;}:last-of-type{margin-right:2%;}}"],lt),ft=(0,a.default)(ut).withConfig({displayName:"styles__BottomRow",componentId:"sc-1bdhqg5-4"})(["bottom:8.1%;> ","{:first-of-type{margin-left:10.88%;}:last-of-type{margin-right:10.88%;}}"],lt),pt=function(t){var e=t.onFinish,n=t.playing,i=t.intervalMs,r=t.radian,a=(0,T.useState)(0),c=a[0],s=a[1],l=(0,T.useRef)(!1),u=(0,T.useRef)(0);return M((function(){n&&s((function(t){var n=0;return l.current?-1===(n=t-1)&&(n=1,l.current=!1,u.current+=1,7===u.current&&e()):13===(n=t+1)&&(n=11,l.current=!0),n}))}),i),(0,o.jsxs)(st,{children:[(0,o.jsxs)(dt,{children:[(0,o.jsx)(lt,{radian:r,activated:0===c}),(0,o.jsx)(lt,{radian:r,activated:2===c}),(0,o.jsx)(lt,{radian:r,activated:4===c}),(0,o.jsx)(lt,{radian:r,activated:6===c}),(0,o.jsx)(lt,{radian:r,activated:8===c}),(0,o.jsx)(lt,{radian:r,activated:10===c}),(0,o.jsx)(lt,{radian:r,activated:12===c})]}),(0,o.jsxs)(ft,{children:[(0,o.jsx)(lt,{radian:r,activated:1===c}),(0,o.jsx)(lt,{radian:r,activated:3===c}),(0,o.jsx)(lt,{radian:r,activated:5===c}),(0,o.jsx)(lt,{radian:r,activated:7===c}),(0,o.jsx)(lt,{radian:r,activated:9===c}),(0,o.jsx)(lt,{radian:r,activated:11===c})]})]})},ht=a.default.div.withConfig({displayName:"styles__Container",componentId:"sc-wxb4pt-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;background-color:rgba(181,219,146);cursor:none;"]),mt=a.default.div.withConfig({displayName:"styles__Ball",componentId:"sc-wxb4pt-1"})(["width:","px;height:","px;background-color:",";border-radius:50%;margin-left:2%;margin-right:2%;"],(function(t){return t.radian}),(function(t){return t.radian}),(function(t){return t.activated?"rgb(30, 109, 4)":"rgb(248,222,102)"})),gt=a.default.div.withConfig({displayName:"styles__Row",componentId:"sc-wxb4pt-2"})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;height:7.4%;position:absolute;"]),yt=(0,a.default)(gt).withConfig({displayName:"styles__TopRow",componentId:"sc-wxb4pt-3"})(["top:8.1%;"]),bt=(0,a.default)(gt).withConfig({displayName:"styles__BottomRow",componentId:"sc-wxb4pt-4"})(["bottom:8.1%;"]),xt=function(t){var e=t.onFinish,n=t.playing,i=t.intervalMs,r=t.radian,a=(0,T.useState)(0),c=a[0],s=a[1],l=(0,T.useRef)(0);return M((function(){n&&s((function(t){var n=0;return 4===(n=t+1)&&(n=0,l.current+=1,7===l.current&&e()),n}))}),i),(0,o.jsxs)(ht,{children:[(0,o.jsxs)(yt,{children:[(0,o.jsx)(mt,{radian:r,activated:0===c}),(0,o.jsx)(mt,{radian:r,activated:2===c})]}),(0,o.jsxs)(bt,{children:[(0,o.jsx)(mt,{radian:r,activated:1===c}),(0,o.jsx)(mt,{radian:r,activated:3===c})]})]})},vt=(0,a.createGlobalStyle)(["html,body,#___gatsby,#gatsby-focus-wrapper{height:100%;}body{margin:0px;}"]),jt=a.default.div.withConfig({displayName:"styles__Container",componentId:"sc-k63px8-0"})(["height:100%;width:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(181,219,146);cursor:none;"]),wt=(a.default.div.withConfig({displayName:"styles__Ball",componentId:"sc-k63px8-1"})(["width:3.7%;padding-top:3.7%;background-color:",";border-radius:50%;"],(function(t){return t.activated?"rgb(30, 109, 4)":"rgb(248,222,102)"})),(0,a.default)(y.Z).attrs({variant:"h4"}).withConfig({displayName:"styles__TxtFinish",componentId:"sc-k63px8-2"})([""])),Ct=(0,B.Z)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),St=function(){var t=(0,l.Q)().t,e=(0,T.useState)(0),n=e[0],i=e[1],r=(0,T.useState)(0),c=r[0],s=r[1],u=function(){s(.074*window.innerHeight)};(0,T.useEffect)((function(){return s(.074*window.innerHeight),window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}),[]);var d=(0,T.useCallback)((function(){2===n&&localStorage.setItem("last_date",G()().format("YYYY-MM-DD")),i((function(t){return t+1}))}),[n]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E.ZP,{}),(0,o.jsx)(vt,{}),(0,o.jsxs)(a.ThemeProvider,{theme:Ct,children:[0===n?(0,o.jsx)(ct,{radian:c,playing:0===n,onFinish:d,intervalMs:170}):null,1===n?(0,o.jsx)(pt,{radian:c,playing:1===n,onFinish:d,intervalMs:170}):null,2===n?(0,o.jsx)(xt,{radian:c,playing:2===n,onFinish:d,intervalMs:170}):null,3===n?(0,o.jsx)(jt,{children:(0,o.jsx)(wt,{children:t("msgEyeTrainingFinish")})}):null]})]})},kt=n(3720),Ot=n.n(kt),_t=function(t){var e=(0,l.Q)().t,n=t.data,r=n.site.siteMetadata,a=r.author.summary,c=r.social,s=c.email,u=c.telegram,d=c.github,f=c.youtube,p=n.allMdx.edges,h=t.location;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.or,{title:e("allPosts"),authorSummary:a,email:s,telegram:u,github:d,youtube:f,posts:p,location:h}),(0,o.jsx)(Ot(),{buttonText:e("ok"),children:e("cookieConsent")})]})}}}]);
//# sourceMappingURL=e9e4ae58e2724cf0cd073cb21fe7486cb9ca7c5f-1546412b2f3c652268a0.js.map