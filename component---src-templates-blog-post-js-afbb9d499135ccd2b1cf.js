(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),o=i(a("VbXa")),s=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},A=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(A);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function B(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?B(e,!0):"")+B(e)})).join("")+"<img "+l+o+s+a+i+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=e.ariaHidden,o=l.default.createElement(N,(0,d.default)({src:t},r,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,i(a),o):o},N=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":f,sizes:a,srcSet:i,src:r},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:A,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,m=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,B=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,d.default)({opacity:j?1:0,transition:O?"opacity "+b+"ms":"none"},s),R="boolean"==typeof h?"lightgray":h,Q={transitionDelay:b+"ms"},z=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&Q,{},s,{},A),P={title:t,alt:this.state.isVisible?"":a,style:z,className:f,itemProp:E};if(m){var V=m,M=g(m);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),R&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&Q)}),M.base64&&l.default.createElement(C,{ariaHidden:!0,src:M.base64,spreadProps:P,imageVariants:V,generateSources:I}),M.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:M.tracedSVG,spreadProps:P,imageVariants:V,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(V),l.default.createElement(N,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:B})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:S},M,{imageVariants:V}))}}))}if(p){var T=p,Y=g(p),k=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},n);return"inherit"===n.display&&delete k.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},R&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:R,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},O&&Q)}),Y.base64&&l.default.createElement(C,{ariaHidden:!0,src:Y.base64,spreadProps:P,imageVariants:T,generateSources:I}),Y.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:Y.tracedSVG,spreadProps:P,imageVariants:T,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(T),l.default.createElement(N,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:B})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:S},Y,{imageVariants:T}))}}))}return null},t}(l.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:L,sizes:R,fixed:c.default.oneOfType([L,c.default.arrayOf(L)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=O;t.default=Q},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),i(i.P+i.F*o,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),o=/"/g,s=function(e,t,a,i){var r=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},h65Q:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAX/xAAYAQACAwAAAAAAAAAAAAAAAAACBAABA//aAAwDAQACEAMQAAABuWWsqc9mHlpzkuAJf//EABsQAAMAAgMAAAAAAAAAAAAAAAECAwAREyAx/9oACAEBAAEFAppyFZ7YHeQ9iwovT//EABgRAAMBAQAAAAAAAAAAAAAAAAABAhAS/9oACAEDAQE/AYhNI5Jz/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECEBH/2gAIAQIBAT8BqmmdKz//xAAcEAACAgIDAAAAAAAAAAAAAAABEQACECAhQnH/2gAIAQEABj8CTUsDwsW8ht2SOv8A/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARMRBhcaH/2gAIAQEAAT8hvcBcZlY3AFz7cQufZ3w5qeQUxTj/2gAMAwEAAgADAAAAEGDfPf/EABcRAAMBAAAAAAAAAAAAAAAAAAEQITH/2gAIAQMBAT8QJh2ocX//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPxBwEX//xAAdEAEBAQACAgMAAAAAAAAAAAABEQAxQRAhUWFx/9oACAEBAAE/EPvYEveqIZEtmAh5zjDHqynR5/Dkw4PzVQUHaar7j0xl8f/Z","width":50,"height":50,"src":"/static/9dc2113152cb8e5db908dd472dc3ccf6/99438/profile-pic.jpg","srcSet":"/static/9dc2113152cb8e5db908dd472dc3ccf6/99438/profile-pic.jpg 1x,\\n/static/9dc2113152cb8e5db908dd472dc3ccf6/aba1d/profile-pic.jpg 1.5x,\\n/static/9dc2113152cb8e5db908dd472dc3ccf6/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"Neosarchizo","summary":"S/W & H/W 엔지니어"},"social":{"twitter":"neosarchizo","youtube":"neosarchizo"}}}}}')},nQLI:function(e,t,a){"use strict";a("f3/d"),a("0mN4");var i=a("h65Q"),r=a("q1tI"),n=a.n(r),o=a("9eSz"),s=a.n(o),d=a("vOnD"),l=a("rdAc"),c=d.a.div.withConfig({displayName:"Bio__Container",componentId:"sc-9th1b0-0"})(["display:flex;margin-bottom:",";font-family:",";"],Object(l.a)(2.5),"Nanum Gothic"),u=Object(d.a)(s.a).withConfig({displayName:"Bio__MyImage",componentId:"sc-9th1b0-1"})(["margin-right:",";margin-bottom:0;min-width:50px;border-radius:100%;"],Object(l.a)(2.5));t.a=function(){var e=i.data,t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement(c,null,n.a.createElement(u,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("strong",null,a.name)," : ",a.summary,n.a.createElement("br",null),n.a.createElement("a",{href:"https://youtube.com/"+r.youtube},"YouTube")))}},wK7I:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));a("91GP");var i=a("q1tI"),r=a.n(i),n=a("Wbzz"),o=a("vOnD"),s=a("nQLI"),d=a("JLE3"),l=a("Bswo"),c=a("rdAc"),u=o.a.article.withConfig({displayName:"BlogPost__MyArticle",componentId:"mye8yq-0"})(["font-family:",";"],"Nanum Gothic Coding"),A=o.a.h1.withConfig({displayName:"BlogPost__H1",componentId:"mye8yq-1"})(["margin-top:",";margin-bottom:0px;font-family:",";"],Object(c.a)(1),"Nanum Gothic"),f=o.a.p.withConfig({displayName:"BlogPost__P",componentId:"mye8yq-2"})(["display:block;margin-bottom:",";"],Object(c.a)(1)),g=o.a.hr.withConfig({displayName:"BlogPost__HR",componentId:"mye8yq-3"})(["margin-bottom:",";"],Object(c.a)(1)),m=o.a.ul.withConfig({displayName:"BlogPost__UL",componentId:"mye8yq-4"})(["display:flex;flex-wrap:wrap;justify-content:space-between;list-style:none;padding:0px;"]);t.default=function(e){var t=e.data,a=e.pageContext,i=e.location,o=t.markdownRemark,p=t.site.siteMetadata.title,h=a.previous,b=a.next;return r.a.createElement(d.a,{location:i,title:p},r.a.createElement(l.a,{title:o.frontmatter.title,description:o.frontmatter.description||o.excerpt}),r.a.createElement(u,null,r.a.createElement("header",null,r.a.createElement(A,null,o.frontmatter.title),r.a.createElement(f,{style:Object.assign({},Object(c.b)(-.2))},o.frontmatter.date)),r.a.createElement("section",{dangerouslySetInnerHTML:{__html:o.html}}),r.a.createElement(g,null),r.a.createElement("footer",null,r.a.createElement(s.a,null))),r.a.createElement("nav",null,r.a.createElement(m,null,r.a.createElement("li",null,h&&r.a.createElement(n.Link,{to:h.fields.slug,rel:"prev"},"← ",h.frontmatter.title)),r.a.createElement("li",null,b&&r.a.createElement(n.Link,{to:b.fields.slug,rel:"next"},b.frontmatter.title," →")))))};var p="1669349758"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-afbb9d499135ccd2b1cf.js.map