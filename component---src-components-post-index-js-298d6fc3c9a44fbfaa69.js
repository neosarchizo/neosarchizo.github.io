(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4M6O":function(e,t,n){"use strict";n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var a=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a;return function(){var i=this,r=arguments,o=function(){a=null,n||e.apply(i,r)},s=n&&!a;window.clearTimeout(a),a=setTimeout(o,t),s&&e.apply(i,r)}},t.isReactElement=o,t.shallowComparison=function e(t,n){var a,r=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(a=[]).concat.apply(a,(0,i.default)(r)).filter((function(a){if("object"==typeof t[a]){if(e(t[a],n[a]))return!0}else if(t[a]!==n[a]&&!o(t[a]))return!0})).length};var i=a(n("RIqP")),r=a(n("q1tI"));function o(e){return!!r.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return r.default.isValidElement(e)}))}},"6Gtm":function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAX/xAAYAQACAwAAAAAAAAAAAAAAAAACBAABA//aAAwDAQACEAMQAAABuWWsqc9mHlpzkuAJf//EABsQAAMAAgMAAAAAAAAAAAAAAAECAwAREyAx/9oACAEBAAEFAppyFZ7YHeQ9iwovT//EABgRAAMBAQAAAAAAAAAAAAAAAAABAhAS/9oACAEDAQE/AYhNI5Jz/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECEBH/2gAIAQIBAT8BqmmdKz//xAAcEAACAgIDAAAAAAAAAAAAAAABEQACECAhQnH/2gAIAQEABj8CTUsDwsW8ht2SOv8A/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARMRBhcaH/2gAIAQEAAT8hvcBcZlY3AFz7cQufZ3w5qeQUxTj/2gAMAwEAAgADAAAAEGDfPf/EABcRAAMBAAAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8QJh2ocX//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPxBwEX//xAAdEAEBAQACAgMAAAAAAAAAAAABEQAxQRAhUWFx/9oACAEBAAE/EPvYEveqIZEtmAh5zjDHqynR5/Dkw4PzVQUHaar7j0xl8f/Z","width":48,"height":48,"src":"/static/9dc2113152cb8e5db908dd472dc3ccf6/ffcc9/profile-pic.jpg","srcSet":"/static/9dc2113152cb8e5db908dd472dc3ccf6/ffcc9/profile-pic.jpg 1x,\\n/static/9dc2113152cb8e5db908dd472dc3ccf6/3e51d/profile-pic.jpg 1.5x,\\n/static/9dc2113152cb8e5db908dd472dc3ccf6/eee8e/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"social":{"github":"neosarchizo","youtube":"neosarchizo","telegram":"neosarchizo","email":"neosarchizo@gmail.com"}}}}}')},"9eSz":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("INYr"),n("0mN4");var a=n("TqRt");t.__esModule=!0,t.default=void 0;var i,r=a(n("PJYZ")),o=a(n("VbXa")),s=a(n("8OQS")),d=a(n("pVnL")),l=a(n("q1tI")),c=a(n("17x9")),u=function(e){var t=(0,d.default)({},e),n=t.resolutions,a=t.sizes,i=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,n=e.fixed;return p(t||n).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),n=m(t);return g[n]||!1},A="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,w=b&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,i=e.media,r=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:r}),l.default.createElement("source",{media:i,srcSet:n,sizes:r}))}))}function v(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function S(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:n,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:n,srcSet:a})}))}function x(e,t){var n=e.srcSet,a=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:n)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var C=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return n&&(n.observe(e),y.set(e,t)),function(){n.unobserve(e),y.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+o+s+n+a+t+r+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=function(e){var t=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,r=e.ariaHidden,o=l.default.createElement(q,(0,d.default)({src:t},i,{ariaHidden:r}));return n.length>1?l.default.createElement("picture",null,a(n),o):o},q=l.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,i=e.src,r=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:n,srcSet:a,src:i},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));q.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=b&&h(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!A&&w&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||b&&(A||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,r.default)(n)),n.handleRef=n.handleRef.bind((0,r.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=m(t),g[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,a=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,A=e.backgroundColor,b=e.durationFadeIn,w=e.Tag,y=e.itemProp,v=e.loading,x=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:C?1:0,transition:N?"opacity "+b+"ms":"none"},s),R="boolean"==typeof A?"lightgray":A,B={transitionDelay:b+"ms"},P=(0,d.default)({opacity:this.state.imgLoaded?0:1},N&&B,{},s,{},f),k={title:t,alt:this.state.isVisible?"":n,style:P,className:m,itemProp:y};if(g){var L=g,D=p(g);return l.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},l.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),R&&l.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&B)}),D.base64&&l.default.createElement(_,{ariaHidden:!0,src:D.base64,spreadProps:k,imageVariants:L,generateSources:I}),D.tracedSVG&&l.default.createElement(_,{ariaHidden:!0,src:D.tracedSVG,spreadProps:k,imageVariants:L,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,E(L),l.default.createElement(q,{alt:n,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:n,title:t,loading:v},D,{imageVariants:L}))}}))}if(h){var T=h,M=p(h),z=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},r);return"inherit"===r.display&&delete z.display,l.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},R&&l.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:R,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},N&&B)}),M.base64&&l.default.createElement(_,{ariaHidden:!0,src:M.base64,spreadProps:k,imageVariants:T,generateSources:I}),M.tracedSVG&&l.default.createElement(_,{ariaHidden:!0,src:M.tracedSVG,spreadProps:k,imageVariants:T,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,E(T),l.default.createElement(q,{alt:n,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:n,title:t,loading:v},M,{imageVariants:T}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});N.propTypes={resolutions:O,sizes:R,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var B=N;t.default=B},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},INYr:function(e,t,n){"use strict";var a=n("XKFU"),i=n("CkkT")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(r)},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},ORnI:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var i=a(n("VUT9"));t.Disqus=i.default;var r=a(n("qASQ"));t.CommentCount=r.default;var o=a(n("vAJ3"));t.CommentEmbed=o.default;var s=i.default;t.default=s},RIqP:function(e,t,n){var a=n("Ijbi"),i=n("EbDI"),r=n("ZhPi"),o=n("Bnag");e.exports=function(e){return a(e)||i(e)||r(e)||o()}},VUT9:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var i=a(n("pVnL")),r=a(n("8OQS")),o=a(n("VbXa")),s=a(n("q1tI")),d=a(n("17x9")),l=n("4M6O"),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="neosarchizogithubio",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,l.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,l.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,r.default)(e,["config"]));return s.default.createElement("div",(0,i.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(s.default.Component);t.default=c,c.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string,language:d.default.string,remoteAuthS3:d.default.string,apiKey:d.default.string})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},qASQ:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var i=a(n("pVnL")),r=a(n("8OQS")),o=a(n("VbXa")),s=a(n("q1tI")),d=a(n("17x9")),l=n("4M6O"),c=(0,l.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="neosarchizogithubio",n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?c():(0,l.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,l.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,a=(0,r.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,i.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},a,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(s.default.Component);t.default=u,u.defaultProps={placeholder:"..."},u.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string}},s0ze:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return k}));n("tUrg"),n("f3/d");var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("ofer"),s=n("dEtu"),d=n("ORnI"),l=(n("0mN4"),n("6Gtm")),c=n("9eSz"),u=n.n(c),f=n("WlWX"),m=n("egtg"),p=n("R0t4"),g=n("7RMY"),h=r.b.h1.withConfig({displayName:"PostHeader__H1",componentId:"sc-7l8j0k-0"})(["margin-bottom:0px;font-size:48px;@media screen and (max-width:","px){&{font-size:34px;}}"],(function(e){return e.theme.spacing(84)})),A=r.b.div.withConfig({displayName:"PostHeader__Row",componentId:"sc-7l8j0k-1"})(["display:flex;flex-direction:row;"]),b=r.b.div.withConfig({displayName:"PostHeader__Col",componentId:"sc-7l8j0k-2"})(["display:flex;flex-direction:column;"]),w=Object(r.b)(A).withConfig({displayName:"PostHeader__SocialRow",componentId:"sc-7l8j0k-3"})(["margin-top:24px;justify-content:space-between;@media screen and (max-width:","px){&{flex-direction:column-reverse;}}"],(function(e){return e.theme.spacing(84)})),y=Object(r.b)(A).withConfig({displayName:"PostHeader__AuthorInfo",componentId:"sc-7l8j0k-4"})(["align-items:center;"]),E=Object(r.b)(b).withConfig({displayName:"PostHeader__AuthorDateCol",componentId:"sc-7l8j0k-5"})(["margin-left:12px;font-family:'Lucida Grande','Lucida Sans Unicode','Lucida Sans',Geneva,Arial,sans-serif;font-size:13px;font-weight:300;"]),v=Object(r.b)(u.a).withConfig({displayName:"PostHeader__MyImage",componentId:"sc-7l8j0k-6"})(["min-width:48px;border-radius:100%;"]),S=r.b.div.withConfig({displayName:"PostHeader__Date",componentId:"sc-7l8j0k-7"})(["color:rgba(117,117,117,1);"]),I=Object(r.b)(A).withConfig({displayName:"PostHeader__SocialLinkRow",componentId:"sc-7l8j0k-8"})(["align-items:center;svg{color:rgba(117,117,117,1);margin-right:10px;}@media screen and (max-width:728px){&{margin-bottom:20px;}}"]),x=function(e){var t=e.title,n=e.date,a=e.author,r=l.data,o=r.avatar.childImageSharp.fixed,d=r.site.siteMetadata.social,c=d.github,u=d.youtube,A=d.telegram,b=d.email;return i.a.createElement("header",null,i.a.createElement(h,null,t),i.a.createElement(w,null,i.a.createElement(y,null,i.a.createElement(v,{fixed:o,alt:a,imgStyle:{borderRadius:"50%"}}),i.a.createElement(E,null,i.a.createElement("div",null,a),i.a.createElement(S,null,n))),i.a.createElement(I,null,i.a.createElement(s.OutboundLink,{href:"https://t.me/"+A},i.a.createElement(f.a,null)),i.a.createElement(s.OutboundLink,{href:"https://github.com/"+c},i.a.createElement(m.a,null)),i.a.createElement(s.OutboundLink,{href:"https://youtube.com/c/"+u},i.a.createElement(p.a,null)),i.a.createElement(s.OutboundLink,{href:"mailto:"+b},i.a.createElement(g.a,null)))))},C=n("0CCS"),j=n("Bswo"),_=r.b.article.withConfig({displayName:"Post__MyArticle",componentId:"sc-18as54q-0"})(["max-width:","px;margin-left:auto;margin-right:auto;font-family:'Nanum Gothic','Courier New',Courier,monospace,Georgia,Cambria,'Times New Roman',Times,serif;font-size:15px;"],(function(e){return e.theme.spacing(84)})),q=r.b.hr.withConfig({displayName:"Post__HR",componentId:"sc-18as54q-1"})([""]),N=r.b.section.withConfig({displayName:"Post__MySection",componentId:"sc-18as54q-2"})(["img{max-width:100%;}p{@media screen and (max-width:","px){margin-top:1.56em;font-size:16px;}@media screen and (min-width:","px){margin-top:2em;font-size:19px;}}a{color:inherit;}"],(function(e){return e.theme.spacing(84)}),(function(e){return e.theme.spacing(125)})),O=r.b.img.withConfig({displayName:"Post__Img",componentId:"sc-18as54q-3"})(["max-width:100%;@media screen and (max-width:","px){margin-top:","px;}@media screen and (min-width:","px){margin-top:","px;}"],(function(e){return e.theme.spacing(84)}),(function(e){return e.theme.spacing(5)}),(function(e){return e.theme.spacing(125)}),(function(e){return e.theme.spacing(7)})),R=Object(r.b)(o.a).withConfig({displayName:"Post__ImgCaption",componentId:"sc-18as54q-4"})(["margin-top:10px;text-align:center;font-size:13px;line-height:20px;"]),B=Object(r.b)(s.OutboundLink).withConfig({displayName:"Post__MyLink",componentId:"sc-18as54q-5"})(["color:inherit;"]),P=r.b.footer.withConfig({displayName:"Post__Footer",componentId:"sc-18as54q-6"})(["@media screen and (max-width:","px){margin-top:3em;}@media screen and (min-width:","px){margin-top:4em;}"],(function(e){return e.theme.spacing(84)}),(function(e){return e.theme.spacing(125)})),k=(t.default=function(e){var t=e.data,n=e.pageContext,a=e.location,r=t.markdownRemark,o=r.frontmatter,s=o.title,l=o.date,c=o.coverImage,u=c.src,f=c.owner,m=f.name,p=f.link,g=c.platform,h=g.name,A=g.link,b=r.excerpt,w=r.html,y=t.site.siteMetadata,E=y.title,v=y.author.name,S=y.siteUrl,I=n.slug,k={url:""+S+I,identifier:""+S+I,title:s};return i.a.createElement(C.a,{location:a,title:E,posts:[]},i.a.createElement(j.a,{title:s,description:b}),i.a.createElement(_,null,i.a.createElement(x,{title:s,date:l,author:v}),i.a.createElement(O,{src:u,alt:"Photo by "+m+" on "+h}),i.a.createElement(R,{variant:"body2"},"Photo by ",i.a.createElement(B,{href:p},m)," on"," ",i.a.createElement(B,{href:A},h)),i.a.createElement(N,{dangerouslySetInnerHTML:{__html:w}}),i.a.createElement(q,null),i.a.createElement(P,null,i.a.createElement(d.Disqus,{config:k}))))},"3405200417")},vAJ3:function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("Btvt");var a=n("TqRt");t.__esModule=!0,t.default=void 0;var i=a(n("VbXa")),r=a(n("q1tI")),o=a(n("17x9")),s=function(e){function t(){return e.apply(this,arguments)||this}(0,i.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(r.default.Component);t.default=s,s.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},s.propTypes={commentId:o.default.string.isRequired,width:o.default.number,height:o.default.number,showMedia:o.default.bool,showParentComment:o.default.bool}}}]);
//# sourceMappingURL=component---src-components-post-index-js-298d6fc3c9a44fbfaa69.js.map