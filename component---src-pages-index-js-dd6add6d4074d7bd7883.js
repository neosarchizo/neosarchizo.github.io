(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},A=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(A);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),m=function(e){var t=u(e),a=f(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function j(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+l+s+d+a+i+t+n+r+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(N,(0,o.default)({src:t},r,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,i(a),s):s},N=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":f,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:A,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&E&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,v=e.loading,j=e.draggable,B=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:B?1:0,transition:L?"opacity "+b+"ms":"none"},d),R="boolean"==typeof h?"lightgray":h,Q={transitionDelay:b+"ms"},z=(0,o.default)({opacity:this.state.imgLoaded?0:1},L&&Q,{},d,{},A),M={title:t,alt:this.state.isVisible?"":a,style:z,className:f,itemProp:y};if(p){var V=p,P=g(p);return l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),R&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&Q)}),P.base64&&l.default.createElement(C,{ariaHidden:!0,src:P.base64,spreadProps:M,imageVariants:V,generateSources:I}),P.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:P.tracedSVG,spreadProps:M,imageVariants:V,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(V),l.default.createElement(N,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:v},P,{imageVariants:V}))}}))}if(m){var T=m,Y=g(m),k=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},n);return"inherit"===n.display&&delete k.display,l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},R&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:R,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},L&&Q)}),Y.base64&&l.default.createElement(C,{ariaHidden:!0,src:Y.base64,spreadProps:M,imageVariants:T,generateSources:I}),Y.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:Y.tracedSVG,spreadProps:M,imageVariants:T,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(T),l.default.createElement(N,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:v},Y,{imageVariants:T}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});L.propTypes={resolutions:O,sizes:R,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=L;t.default=Q},FACU:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return g}));var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),s=a("vOnD"),d=a("nQLI"),o=a("JLE3"),l=a("Bswo"),c=a("rdAc"),u=s.a.article.withConfig({displayName:"Pages__MyArticle",componentId:"sc-19r63jx-0"})(["font-family:",";"],"Nanum Gothic"),A=s.a.h3.withConfig({displayName:"Pages__H3",componentId:"sc-19r63jx-1"})(["font-family:",";margin-bottom:",";"],"Nanum Gothic",Object(c.a)(1/4)),f=Object(s.a)(n.Link).withConfig({displayName:"Pages__MyLink",componentId:"sc-19r63jx-2"})(["box-shadow:none;"]);t.default=function(e){var t=e.data,a=e.location,i=t.site.siteMetadata.title,n=t.allMarkdownRemark.edges;return r.a.createElement(o.a,{location:a,title:i},r.a.createElement(l.a,{title:"All posts"}),r.a.createElement(d.a,null),n.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.a.createElement(u,{key:t.fields.slug},r.a.createElement("header",null,r.a.createElement(A,null,r.a.createElement(f,{to:t.fields.slug},a)),r.a.createElement("small",null,t.frontmatter.date)),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})))};var g="2362459843"},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,d=function(e,t,a,i){var r=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),d+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},h65Q:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAX/xAAYAQACAwAAAAAAAAAAAAAAAAACBAABA//aAAwDAQACEAMQAAABuWWsqc9mHlpzkuAJf//EABsQAAMAAgMAAAAAAAAAAAAAAAECAwAREyAx/9oACAEBAAEFAppyFZ7YHeQ9iwovT//EABgRAAMBAQAAAAAAAAAAAAAAAAABAhAS/9oACAEDAQE/AYhNI5Jz/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECEBH/2gAIAQIBAT8BqmmdKz//xAAcEAACAgIDAAAAAAAAAAAAAAABEQACECAhQnH/2gAIAQEABj8CTUsDwsW8ht2SOv8A/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARMRBhcaH/2gAIAQEAAT8hvcBcZlY3AFz7cQufZ3w5qeQUxTj/2gAMAwEAAgADAAAAEGDfPf/EABcRAAMBAAAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8QJh2ocX//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPxBwEX//xAAdEAEBAQACAgMAAAAAAAAAAAABEQAxQRAhUWFx/9oACAEBAAE/EPvYEveqIZEtmAh5zjDHqynR5/Dkw4PzVQUHaar7j0xl8f/Z","width":50,"height":50,"src":"/static/9dc2113152cb8e5db908dd472dc3ccf6/99438/profile-pic.jpg","srcSet":"/static/9dc2113152cb8e5db908dd472dc3ccf6/99438/profile-pic.jpg 1x,\\n/static/9dc2113152cb8e5db908dd472dc3ccf6/aba1d/profile-pic.jpg 1.5x,\\n/static/9dc2113152cb8e5db908dd472dc3ccf6/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"Neosarchizo","summary":"S/W & H/W 엔지니어"},"social":{"twitter":"neosarchizo","youtube":"neosarchizo"}}}}}')},nQLI:function(e,t,a){"use strict";a("f3/d"),a("0mN4");var i=a("h65Q"),r=a("q1tI"),n=a.n(r),s=a("9eSz"),d=a.n(s),o=a("vOnD"),l=a("rdAc"),c=o.a.div.withConfig({displayName:"Bio__Container",componentId:"sc-9th1b0-0"})(["display:flex;margin-bottom:",";font-family:",";"],Object(l.a)(2.5),"Nanum Gothic"),u=Object(o.a)(d.a).withConfig({displayName:"Bio__MyImage",componentId:"sc-9th1b0-1"})(["margin-right:",";margin-bottom:0;min-width:50px;border-radius:100%;"],Object(l.a)(2.5));t.a=function(){var e=i.data,t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement(c,null,n.a.createElement(u,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("strong",null,a.name)," : ",a.summary,n.a.createElement("br",null),n.a.createElement("a",{href:"https://youtube.com/"+r.youtube},"YouTube")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-dd6add6d4074d7bd7883.js.map