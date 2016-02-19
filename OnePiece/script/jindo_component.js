(function(_namespace){var jsTags=document.getElementsByTagName("script");
var jsTag=jsTags[jsTags.length-1];
if(jsTag&&/[\?&]jindo=([^&]+)/.test(jsTag.src)){_namespace=RegExp.$1
}var jindo=window[_namespace];
jindo.Component=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var t=this.constructor.getInstance();
t.push(this),this._htEventHandler={},this._htOption={},this._htOption._htSetter={}
},option:function(t,e){switch(typeof t){case"undefined":var i={};
for(var n in this._htOption){"htCustomEventHandler"!=n&&"_htSetter"!=n&&(i[n]=this._htOption[n])
}return i;
case"string":if("undefined"==typeof e){return this._htOption[t]
}if("htCustomEventHandler"==t){if("undefined"!=typeof this._htOption[t]){return this
}this.attach(e)
}this._htOption[t]=e,"function"==typeof this._htOption._htSetter[t]&&this._htOption._htSetter[t](e);
break;
case"object":for(var s in t){if("htCustomEventHandler"==s){if("undefined"!=typeof this._htOption[s]){continue
}this.attach(t[s])
}"_htSetter"!==s&&(this._htOption[s]=t[s]),"function"==typeof this._htOption._htSetter[s]&&this._htOption._htSetter[s](t[s])
}}return this
},optionSetter:function(t,e){switch(typeof t){case"undefined":return this._htOption._htSetter;
case"string":if("undefined"==typeof e){return this._htOption._htSetter[t]
}this._htOption._htSetter[t]=jindo.$Fn(e,this).bind();
break;
case"object":for(var i in t){this._htOption._htSetter[i]=jindo.$Fn(t[i],this).bind()
}}return this
},fireEvent:function(t,e){e=e||{};
var i=this["on"+t],n=this._htEventHandler[t]||[],s="function"==typeof i,o=n.length>0;
if(!s&&!o){return !0
}n=n.concat(),e.sType=t,"undefined"==typeof e._aExtend&&(e._aExtend=[],e.stop=function(){e._aExtend.length>0&&(e._aExtend[e._aExtend.length-1].bCanceled=!0)
}),e._aExtend.push({sType:t,bCanceled:!1});
var a,r,h=[e];
for(a=2,r=arguments.length;
r>a;
a++){h.push(arguments[a])
}if(s&&i.apply(this,h),o){var l;
for(a=0,l;
l=n[a];
a++){l.apply(this,h)
}}return !e._aExtend.pop().bCanceled
},attach:function(t,e){if(1==arguments.length){return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(t,e){this.attach(e,t)
},this).bind()),this
}var i=this._htEventHandler[t];
return"undefined"==typeof i&&(i=this._htEventHandler[t]=[]),i.push(e),this
},detach:function(t,e){if(1==arguments.length){return jindo.$H(arguments[0]).forEach(jindo.$Fn(function(t,e){this.detach(e,t)
},this).bind()),this
}var i=this._htEventHandler[t];
if(i){for(var n,s=0;
n=i[s];
s++){if(n===e){i=i.splice(s,1);
break
}}}return this
},detachAll:function(t){var e=this._htEventHandler;
if(arguments.length){return"undefined"==typeof e[t]?this:(delete e[t],this)
}for(var i in e){delete e[i]
}return this
}}),jindo.Component.factory=function(t,e){var i,n=[];
"undefined"==typeof e&&(e={});
for(var s,o=0;
s=t[o];
o++){i=new this(s,e),n[n.length]=i
}return n
},jindo.Component.getInstance=function(){return"undefined"==typeof this._aInstance&&(this._aInstance=[]),this._aInstance
},jindo.Component.VERSION="1.7.0.WEBTOON",jindo.Timer=jindo.$Class({$init:function(){this._nTimer=null,this._nLatest=null,this._nRemained=0,this._nDelay=null,this._fRun=null,this._bIsRunning=!1
},start:function(t,e){return this.abort(),this._nRemained=0,this._nDelay=e,this._fRun=t,this._bIsRunning=!0,this._nLatest=this._getTime(),this.fireEvent("wait"),this._excute(this._nDelay,!1),!0
},isRunning:function(){return this._bIsRunning
},_getTime:function(){return(new Date).getTime()
},_clearTimer:function(){var t=!1;
return this._nTimer&&(clearTimeout(this._nTimer),this._bIsRunning=!1,t=!0),this._nTimer=null,t
},abort:function(){return this._clearTimer(),this._fRun?(this.fireEvent("abort"),this._fRun=null,!0):!1
},pause:function(){var t=this._getTime()-this._nLatest;
return this._nRemained=Math.max(this._nDelay-t,0),this._clearTimer()
},_excute:function(t){var e=this;
this._clearTimer(),this._bIsRunning=!0;
var i=function(t){if(e._fRun&&(e._nTimer||t)){e.fireEvent("run");
var i=e._fRun();
if(e._nLatest=e._getTime(),!i){return t||clearTimeout(e._nTimer),e._nTimer=null,e._bIsRunning=!1,void e.fireEvent("end")
}e.fireEvent("wait"),e._excute(e._nDelay,!1)
}};
t>-1?this._nTimer=setTimeout(i,t):i(!0)
},resume:function(){return !this._fRun||this.isRunning()?!1:(this._bIsRunning=!0,this.fireEvent("wait"),this._excute(this._nRemained,!0),this._nRemained=0,!0)
}}).extend(jindo.Component),jindo.Effect=function(t){if(this instanceof arguments.callee){throw new Error("You can't create a instance of this")
}var e=/^(\-?[0-9\.]+)(%|\w+)?$/,i=/^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,n=/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,s=/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i,o=function(t){var o,a=t;
if(e.test(t)){a=parseFloat(t),o=RegExp.$2||""
}else{if(i.test(t)){a=[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10)],o="color"
}else{if(!n.test(t=t.replace(s,"#$1$1$2$2$3$3"))){throw new Error("unit error")
}a=[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16)],o="color"
}}return{nValue:a,sUnit:o}
};
return function(e,i){var n;
if(arguments.length>1?(e=o(e),i=o(i),n=i.sUnit):(i=o(e),e=null,n=i.sUnit),e&&0===e.nValue&&!e.sUnit?n=e.sUnit=i.sUnit:e&&0===i.nValue&&!i.sUnit&&(n=i.sUnit=e.sUnit),e&&i&&e.sUnit!=i.sUnit){throw new Error("unit error")
}e=e&&e.nValue,i=i&&i.nValue;
var s=function(s){var o=t(s),a=function(t,e){return(e-t)*o+t+n
};
if("color"==n){var r=Math.max(0,Math.min(255,parseInt(a(e[0],i[0]),10)))<<16;
r|=Math.max(0,Math.min(255,parseInt(a(e[1],i[1]),10)))<<8,r|=Math.max(0,Math.min(255,parseInt(a(e[2],i[2]),10))),r=r.toString(16).toUpperCase();
for(var h=0;
6-r.length;
h++){r="0"+r
}return"#"+r
}return a(e,i)
};
return null===e&&(s.setStart=function(t){if(t=o(t),0!==t.nValue&&t.sUnit!=n){throw new Error("unit error")
}e=t.nValue
}),s
}
},jindo.Effect.linear=jindo.Effect(function(t){return t
}),jindo.Effect.easeInSine=jindo.Effect(function(t){return 1==t?1:-Math.cos(t*(Math.PI/2))+1
}),jindo.Effect.easeOutSine=jindo.Effect(function(t){return Math.sin(t*(Math.PI/2))
}),jindo.Effect.easeInOutSine=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInSine(0,1)(2*t):0.5*jindo.Effect.easeOutSine(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInSine=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutSine(0,1)(2*t):0.5*jindo.Effect.easeInSine(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInQuad=jindo.Effect(function(t){return t*t
}),jindo.Effect.easeOutQuad=jindo.Effect(function(t){return -(t*(t-2))
}),jindo.Effect.easeInOutQuad=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInQuad(0,1)(2*t):0.5*jindo.Effect.easeOutQuad(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInQuad=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutQuad(0,1)(2*t):0.5*jindo.Effect.easeInQuad(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInCubic=jindo.Effect(function(t){return Math.pow(t,3)
}),jindo.Effect.easeOutCubic=jindo.Effect(function(t){return Math.pow(t-1,3)+1
}),jindo.Effect.easeInOutCubic=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeIn(0,1)(2*t):0.5*jindo.Effect.easeOut(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInCubic=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOut(0,1)(2*t):0.5*jindo.Effect.easeIn(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInQuart=jindo.Effect(function(t){return Math.pow(t,4)
}),jindo.Effect.easeOutQuart=jindo.Effect(function(t){return -(Math.pow(t-1,4)-1)
}),jindo.Effect.easeInOutQuart=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInQuart(0,1)(2*t):0.5*jindo.Effect.easeOutQuart(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInQuart=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutQuart(0,1)(2*t):0.5*jindo.Effect.easeInQuart(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInQuint=jindo.Effect(function(t){return Math.pow(t,5)
}),jindo.Effect.easeOutQuint=jindo.Effect(function(t){return Math.pow(t-1,5)+1
}),jindo.Effect.easeInOutQuint=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInQuint(0,1)(2*t):0.5*jindo.Effect.easeOutQuint(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInQuint=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutQuint(0,1)(2*t):0.5*jindo.Effect.easeInQuint(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInCircle=jindo.Effect(function(t){return -(Math.sqrt(1-t*t)-1)
}),jindo.Effect.easeOutCircle=jindo.Effect(function(t){return Math.sqrt(1-(t-1)*(t-1))
}),jindo.Effect.easeInOutCircle=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInCircle(0,1)(2*t):0.5*jindo.Effect.easeOutCircle(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInCircle=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutCircle(0,1)(2*t):0.5*jindo.Effect.easeInCircle(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInBack=jindo.Effect(function(t){var e=1.70158;
return 1==t?1:t/1*(t/1)*((1+e)*t-e)
}),jindo.Effect.easeOutBack=jindo.Effect(function(t){var e=1.70158;
return 0===t?0:(t=t/1-1)*t*((e+1)*t+e)+1
}),jindo.Effect.easeInOutBack=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInBack(0,1)(2*t):0.5*jindo.Effect.easeOutBack(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInElastic=jindo.Effect(function(t){var e,i=0,n=0;
return 0===t?0:1==(t/=1)?1:(i||(i=0.3),!n||1>n?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-(n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-1)*Math.PI/i)))
}),jindo.Effect.easeOutElastic=jindo.Effect(function(t){var e,i=0,n=0;
return 0===t?0:1==(t/=1)?1:(i||(i=0.3),!n||1>n?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin(2*(t-e)*Math.PI/i)+1)
}),jindo.Effect.easeInOutElastic=jindo.Effect(function(t){var e,i=0,n=0;
return 0===t?0:2==(t/=0.5)?1:(i||(i=0.3*1.5),!n||1>n?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),1>t?-0.5*n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-e)*Math.PI/i):n*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-e)*Math.PI/i)*0.5+1)
}),jindo.Effect.easeOutBounce=jindo.Effect(function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+0.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+0.9375:7.5625*(t-=2.625/2.75)*t+0.984375
}),jindo.Effect.easeInBounce=jindo.Effect(function(t){return 1-jindo.Effect.easeOutBounce(0,1)(1-t)
}),jindo.Effect.easeInOutBounce=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInBounce(0,1)(2*t):0.5*jindo.Effect.easeOutBounce(0,1)(2*t-1)+0.5
}),jindo.Effect.easeInExpo=jindo.Effect(function(t){return 0===t?0:Math.pow(2,10*(t-1))
}),jindo.Effect.easeOutExpo=jindo.Effect(function(t){return 1==t?1:-Math.pow(2,-10*t/1)+1
}),jindo.Effect.easeInOutExpo=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeInExpo(0,1)(2*t):0.5*jindo.Effect.easeOutExpo(0,1)(2*t-1)+0.5
}),jindo.Effect.easeOutInExpo=jindo.Effect(function(t){return 0.5>t?0.5*jindo.Effect.easeOutExpo(0,1)(2*t):0.5*jindo.Effect.easeInExpo(0,1)(2*t-1)+0.5
}),jindo.Effect._cubicBezier=function(t,e,i,n){return function(s){function o(t){return((u*t+c)*t+l)*t
}function a(t){return((_*t+f)*t+d)*t
}function r(t){return(3*u*t+2*c)*t+l
}function h(t,e){var i,n,s,a,h,l;
for(s=t,l=0;
8>l;
l++){if(a=o(s)-t,Math.abs(a)<e){return s
}if(h=r(s),Math.abs(h)<0.000001){break
}s-=a/h
}if(i=0,n=1,s=t,i>s){return i
}if(s>n){return n
}for(;
n>i;
){if(a=o(s),Math.abs(a-t)<e){return s
}t>a?i=s:n=s,s=0.5*(n-i)+i
}return s
}var l=3*t,c=3*(i-t)-l,u=1-l-c,d=3*e,f=3*(n-e)-d,_=1-d-f;
return a(h(s,0.005))
}
},jindo.Effect.cubicBezier=function(t,e,i,n){var s=jindo.Effect(jindo.Effect._cubicBezier(t,e,i,n));
return s.cubicBezier=[t,e,i,n],s
},jindo.Effect.cubicEase=jindo.Effect.cubicBezier(0.25,0.1,0.25,1),jindo.Effect.cubicEaseIn=jindo.Effect.cubicBezier(0.42,0,1,1),jindo.Effect.cubicEaseOut=jindo.Effect.cubicBezier(0,0,0.58,1),jindo.Effect.cubicEaseInOut=jindo.Effect.cubicBezier(0.42,0,0.58,1),jindo.Effect.cubicEaseOutIn=jindo.Effect.cubicBezier(0,0.42,1,0.58),jindo.Effect.overphase=jindo.Effect(function(t){return t/=0.652785,(Math.sqrt((2-t)*t)+0.1*t).toFixed(5)
}),jindo.Effect.sinusoidal=jindo.Effect(function(t){return -Math.cos(t*Math.PI)/2+0.5
}),jindo.Effect.mirror=jindo.Effect(function(t){return jindo.Effect.sinusoidal(0,1)(0.5>t?2*t:1-2*(t-0.5))
}),jindo.Effect.pulse=function(t){return jindo.Effect(function(e){return -Math.cos(e*(t-0.5)*2*Math.PI)/2+0.5
})
},jindo.Effect.wave=function(t,e){return jindo.Effect(function(i){return(e||1)*Math.sin(360*t*i*Math.PI/180).toFixed(5)
})
},jindo.Effect.easeIn=jindo.Effect.easeInCubic,jindo.Effect.easeOut=jindo.Effect.easeOutCubic,jindo.Effect.easeInOut=jindo.Effect.easeInOutCubic,jindo.Effect.easeOutIn=jindo.Effect.easeOutInCubic,jindo.Effect.bounce=jindo.Effect.easeOutBounce,jindo.Effect.elastic=jindo.Effect.easeInElastic,jindo.Transition=jindo.$Class({_nFPS:30,_aTaskQueue:null,_oTimer:null,_bIsWaiting:!0,_bIsPlaying:!1,$init:function(t){this._aTaskQueue=[],this._oTimer=new jindo.Timer,this._oSleepTimer=new jindo.Timer,this.option({fEffect:jindo.Effect.linear,bCorrection:!1}),this.option(t||{})
},fps:function(t){return arguments.length>0?(this._nFPS=t,this):this._nFPS
},isPlaying:function(){return this._bIsPlaying
},abort:function(){return this._aTaskQueue=[],this._oTimer.abort(),this._oSleepTimer.abort(),this._bIsPlaying&&this.fireEvent("abort"),this._bIsWaiting=!0,this._bIsPlaying=!1,this._htTaskToDo=null,this
},start:function(){return arguments.length>0&&this.queue.apply(this,arguments),this._prepareNextTask(),this
},queue:function(t){var e;
if("function"==typeof arguments[0]){e={sType:"function",fTask:arguments[0]}
}else{var i=[];
if(arguments[1] instanceof Array){i=arguments[1]
}else{var n=[];
jindo.$A(arguments).forEach(function(t,e){e>0&&(n.push(t),e%2===0&&(i.push(n.concat()),n=[]))
})
}e={sType:"task",nDuration:t,aList:[]};
for(var s=0,o=i.length;
o>s;
s++){var a,r=[],h=i[s][1];
for(var l in h){a=h[l],r.push(/^(@|style\.)(\w+)/i.test(l)?["style",RegExp.$2,a]:["attr",l,a])
}e.aList.push({elTarget:i[s][0],aValue:r})
}}return this._queueTask(e),this
},pause:function(){return this._oTimer.abort()&&this.fireEvent("pause"),this
},resume:function(){if(this._htTaskToDo){this._bIsWaiting===!1&&this._bIsPlaying===!0&&this.fireEvent("resume"),this._doTask(),this._bIsWaiting=!1,this._bIsPlaying=!0;
var t=this;
this._oTimer.start(function(){var e=!t._doTask();
return e&&(t._bIsWaiting=!0,setTimeout(function(){t._prepareNextTask()
},0)),!e
},this._htTaskToDo.nInterval)
}return this
},precede:function(){return this.start.apply(this,arguments),this
},sleep:function(t,e){return"undefined"==typeof e&&(e=function(){}),this._queueTask({sType:"sleep",nDuration:t,fCallback:e}),this._prepareNextTask(),this
},_queueTask:function(t){this._aTaskQueue.push(t)
},_dequeueTask:function(){var t=this._aTaskQueue.shift();
if(t){if("task"==t.sType){for(var e=t.aList,i=0,n=e.length;
n>i;
i++){for(var s=e[i].elTarget,o=null,a=0,r=e[i].aValue,h=r.length;
h>a;
a++){var l=r[a][0],c=r[a][1],u=r[a][2];
if("function"!=typeof u){var d=this.option("fEffect");
u=u instanceof Array?d(u[0],u[1]):d(u),r[a][2]=u
}if(u.setStart){if(this._isHTMLElement(s)){switch(o=o||jindo.$Element(s),l){case"style":u.setStart(o.css(c));
break;
case"attr":u.setStart(o.$value()[c])
}}else{u.setStart(s.getter(c))
}}}}}return t
}return null
},_prepareNextTask:function(){if(this._bIsWaiting){var t=this._dequeueTask();
if(t){switch(t.sType){case"task":this._bIsPlaying||this.fireEvent("start");
var e=1000/this._nFPS,i=e/t.nDuration;
this._htTaskToDo={aList:t.aList,nRatio:0,nInterval:e,nGap:i,nStep:0,nTotalStep:Math.ceil(t.nDuration/e)},this.resume();
break;
case"function":this._bIsPlaying||this.fireEvent("start"),t.fTask(),this._prepareNextTask();
break;
case"sleep":this._bIsPlaying&&(this.fireEvent("sleep",{nDuration:t.nDuration}),t.fCallback());
var n=this;
this._oSleepTimer.start(function(){n.fireEvent("awake"),n._prepareNextTask()
},t.nDuration)
}}else{this._bIsPlaying&&(this._bIsPlaying=!1,this.abort(),this.fireEvent("end"))
}}},_isHTMLElement:function(t){return"tagName" in t
},_doTask:function(){for(var t=this._htTaskToDo,e=parseFloat(t.nRatio.toFixed(5),1),i=t.nStep,n=t.nTotalStep,s=t.aList,o={},a=this.option("bCorrection"),r=0,h=s.length;
h>r;
r++){for(var l=s[r].elTarget,c=null,u=0,d=s[r].aValue,f=d.length;
f>u;
u++){var _=d[u][0],g=d[u][1],p=d[u][2](e);
if(this._isHTMLElement(l)){if(a){var v=/^\-?[0-9\.]+(%|[\w]+)?$/.test(p)&&RegExp.$1||"";
if(v){var m=parseFloat(p);
m+=o[g]||0,m=parseFloat(m.toFixed(5)),r==h-1?p=Math.round(m)+v:(o[g]=m-Math.floor(m),p=parseInt(m,10)+v)
}}switch(c=c||jindo.$Element(l),_){case"style":c.css(g,p);
break;
case"attr":c.$value()[g]=p
}}else{l.setter(g,p)
}this._bIsPlaying&&this.fireEvent("playing",{element:l,sKey:g,sValue:p,nStep:i,nTotalStep:n})
}}return t.nRatio=Math.min(t.nRatio+t.nGap,1),t.nStep+=1,1!=e
}}).extend(jindo.Component),function(){var t=jindo.$Element.prototype.css;
jindo.$Element.prototype.css=function(e,i){return"opacity"==e?"undefined"!=typeof i?this.opacity(parseFloat(i)):this.opacity():"undefined"!=typeof i?t.call(this,e,i):t.call(this,e)
}
}(),jindo.UIComponent=jindo.$Class({$init:function(){this._bIsActivating=!1
},isActivating:function(){return this._bIsActivating
},activate:function(){return this.isActivating()?this:(this._bIsActivating=!0,arguments.length>0?this._onActivate.apply(this,arguments):this._onActivate(),this)
},deactivate:function(){return this.isActivating()?(this._bIsActivating=!1,arguments.length>0?this._onDeactivate.apply(this,arguments):this._onDeactivate(),this):this
}}).extend(jindo.Component),jindo.Accordion=jindo.$Class({$init:function(t,e){this._el=jindo.$(t),this._wel=jindo.$Element(this._el),this.option({sClassPrefix:"accordion-",sDirection:"vertical",sExpandEvent:"click",nDefaultIndex:null,bToggle:!1,nDuration:300,nFPS:30,fExpandEffect:jindo.Effect.cubicEaseOut,fContractEffect:jindo.Effect.cubicEaseIn,nExpandDelay:0,nContractDelay:0,bActivateOnload:!0}),this.option(e||{}),this._nExpanded=null,this._oTimer=new jindo.Timer,this._oTransition=new jindo.Transition({bCorrection:!0}).fps(this.option("nFPS")),this._wfOnMouseOver=jindo.$Fn(this._onMouseOver,this),this._wfOnMouseOut=jindo.$Fn(this._onMouseOut,this),this._wfOnExpandEvent=jindo.$Fn(this._onExpandEvent,this),this.option("bActivateOnload")&&this.activate()
},getBaseElement:function(){return this._el
},_onActivate:function(){jindo.$Element.prototype.preventTapHighlight&&this._wel.preventTapHighlight(!0),this._wfOnExpandEvent.attach(this._el,this.option("sExpandEvent")),this._wfOnMouseOver.attach(this._el,"mouseover"),this._wfOnMouseOut.attach(this._el,"mouseout");
var t=this.option("nDefaultIndex");
"number"==typeof t&&this.expand(t)
},_onDeactivate:function(){jindo.$Element.prototype.preventTapHighlight&&this._wel.preventTapHighlight(!1),this._wfOnExpandEvent.detach(this._el,this.option("sExpandEvent")),this._wfOnMouseOver.detach(this._el,"mouseover"),this._wfOnMouseOut.detach(this._el,"mouseout")
},_getBlock:function(t){var e=this.option("sClassPrefix");
return jindo.$Element(t).hasClass(e+"block")?t:jindo.$$.getSingle("! ."+e+"block",t)
},_onMouseOver:function(t){var e=t.element,i=this._getBlock(e),n=i?jindo.$A(this.getAllBlocks()).indexOf(i):null;
if("number"==typeof n){var s=this.getHandler(n);
(s===i||e===s||jindo.$Element(e).isChildOf(s))&&this.fireEvent(t.type,{nIndex:n,elBlock:i,elHandler:s,weEvent:t})
}},_onExpandEvent:function(t){var e=t.element,i=this._getBlock(e),n=i?jindo.$A(this.getAllBlocks()).indexOf(i):null;
if("number"==typeof n){var s=this.getHandler(n);
(s===i||e===s||jindo.$Element(e).isChildOf(s))&&(this.option("bToggle")&&this.getExpanded()===n?this.contractAll():this.expand(n))
}},_onMouseOut:function(t){var e=t.element,i=this._getBlock(e),n=i?jindo.$Element(i).parent().indexOf(i):null;
i&&"number"==typeof n&&this.fireEvent(t.type,{nIndex:n,elBlock:i,elHandler:this.getHandler(n),weEvent:t})
},_getHeadSize:function(t){var e=this.getHead(t);
return e.style.zoom=1,{width:jindo.$Element(e).width(),height:jindo.$Element(e).height()}
},_getBodySize:function(t){var e=this.getBody(t);
return e.style.zoom=1,{width:jindo.$Element(e).width(),height:jindo.$Element(e).height()}
},getTransition:function(){return this._oTransition
},expand:function(t){var e=this.getAllBlocks(),i=this;
if(t=Math.max(0,Math.min(e.length,t)),this.getExpanded()===t){return this
}var n={nIndex:t,elBlock:e[t],elHandler:this.getHandler(t)};
if(this.fireEvent("beforeExpand",n)){var s=i.option("fExpandEffect"),o=[this.option("nDuration")];
jindo.$A(e).forEach(function(e,n,a){var r=i._getHeadSize(n),h=i._getBodySize(n);
switch(i.option("sDirection")){case"vertical":n==t?o.push(a[n],{"@height":s(h.height+r.height+"px")}):o.push(a[n],{"@height":s(r.height+"px")});
break;
case"horizontal":n==t?o.push(a[n],{"@width":s(h.width+r.width+"px")}):o.push(a[n],{"@width":s(r.width+"px")})
}}),this._oTimer.abort(),this._oTimer.start(function(){i._setExpanded(t),i._oTransition.abort().queue.apply(i._oTransition,o).start(function(){i.fireEvent("expand",n)
})
},this.option("nExpandDelay"))
}return this
},expandAll:function(){return this
},contractAll:function(){var t=this,e=t.option("fContractEffect"),i=[this.option("nDuration")];
return jindo.$A(this.getAllBlocks()).forEach(function(n,s,o){var a=t._getHeadSize(s);
switch(t.option("sDirection")){case"vertical":i.push(o[s],{"@height":e(a.height+"px")});
break;
case"horizontal":i.push(o[s],{"@width":e(a.width+"px")})
}}),this.fireEvent("beforeContract")&&this._oTimer.start(function(){t._setExpanded(null),t._oTransition.abort().queue.apply(t._oTransition,i).start(function(){t.fireEvent("contract")
})
},this.option("nContractDelay")),this
},_setExpanded:function(t){this._nExpanded=t
},getExpanded:function(){return this._nExpanded
},getBlock:function(t){return this.getAllBlocks()[t]
},getAllBlocks:function(){return jindo.$$("."+this.option("sClassPrefix")+"block",this._el)
},getHead:function(t){return jindo.$$.getSingle("dt",this.getBlock(t))
},getBody:function(t){return jindo.$$.getSingle("dd",this.getBlock(t))
},getHandler:function(t){var e=this.getHead(t);
return jindo.$$.getSingle("."+this.option("sClassPrefix")+"handler",e)||e
}}).extend(jindo.UIComponent),jindo.AjaxHistory=jindo.$Class({_htEventHandler:{},_htHistoryData:{},_oAgent:null,_welIFrame:null,_nIntervalId:0,_sCheckType:"",_sComponentId:"",$static:{checkIFrameChange:function(t){var e=jindo.$S(t.search.substring(1)).parseString();
this._aInstances[0]._checkLocationChange(encodeURIComponent(e.hash))
}},$init:function(t){this._oAgent=jindo.$Agent().navigator(),this._sComponentId="AjaxHistory"+(new Date).getTime(),this.option({sIFrameUrl:"history.html",nCheckInterval:100}),this.option(t||{}),(this.constructor._aInstances=this.constructor._aInstances||[]).push(this)
},initialize:function(){var t=this._getLocationHash();
if(this._oAgent.ie&&(document.documentMode||this._oAgent.version)>=8&&"Standards"==jindo.$Document().renderingMode()||this._oAgent.firefox&&this._oAgent.version>=3.6||this._oAgent.chrome&&this._oAgent.version>3||this._oAgent.safari&&this._oAgent.version>=5||this._oAgent.opera&&this._oAgent.version>=10.6?(this._htEventHandler.hashchange=jindo.$Fn(this._checkLocationChange,this).attach(window,"hashchange"),this._sCheckType="hashchangeevent"):this._oAgent.ie?(this._welIFrame=jindo.$Element("<IFRAME>"),this._welIFrame.hide(),this._welIFrame.appendTo(document.body),this._sCheckType="iframe"):(this._nIntervalId=setInterval(jindo.$Fn(this._checkLocationChange,this).bind(),this.option("nCheckInterval")),this._sCheckType="setinterval"),t&&"%7B%7D"!=t){"iframe"==this._sCheckType?this._welIFrame.$value().src=this.option("sIFrameUrl")+"?hash="+t:(this._htHistoryData=this._getDecodedData(t),this.fireEvent("change",{htHistoryData:this._htHistoryData}))
}else{var e=this;
if(this._oAgent.ie&&(document.documentMode||this._oAgent.version)<8){var i=this._welIFrame.$value();
i.onreadystatechange=function(){"complete"==i.readyState&&(e.fireEvent("load"),i.onreadystatechange=function(){})
},i.src=this.option("sIFrameUrl")
}else{setTimeout(function(){e.fireEvent("load")
},0)
}}return this
},getComponentId:function(){return this._sComponentId
},_getLocationHash:function(){var t=jindo.$Agent().navigator();
return t.firefox?encodeURIComponent(location.hash.substring(1)):location.hash.substring(1)||"%7B%7D"
},_setLocationHash:function(t){location.hash="%7B%7D"==t?"":t
},addHistory:function(t){if(t&&"object"==typeof t&&jindo.$H(t).length()>0){this._htHistoryData=jindo.$Json(jindo.$Json(t).toString()).toObject();
var e=this._getEncodedData(t);
return this._getLocationHash()!=e?(this._setLocationHash(e),"iframe"==this._sCheckType&&(this._welIFrame.$value().src=this.option("sIFrameUrl")+"?hash="+e),!0):!1
}return !1
},_checkLocationChange:function(t){t="undefined"==t?"%7B%7D":t,t=t&&"string"==typeof t?t:this._getLocationHash();
var e=this._getDecodedData(t);
this._compareData(this._htHistoryData,e)||(this._htHistoryData=e,"iframe"==this._sCheckType&&this._setLocationHash(t),this.fireEvent("change",{htHistoryData:this._htHistoryData}))
},_getEncodedData:function(t){return t?encodeURIComponent("object"==typeof JSON&&"function"==typeof JSON.stringify?JSON.stringify(t):jindo.$Json(t).toString()):""
},_getDecodedData:function(t){try{if(t){var e=decodeURIComponent(t);
return"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):jindo.$Json(e).toObject()
}}catch(i){}return{}
},_compareData:function(t,e){if(!t||!e){return !1
}var i=t instanceof Array?jindo.$A(t):jindo.$H(t),n=e instanceof Array?jindo.$A(e):jindo.$H(e);
if(i.length()!=n.length()){return !1
}var s=!0,o=arguments.callee;
return i.forEach(function(t,i){if("object"==typeof t){if(!o(t,e[i])){return void (s=!1)
}}else{if(t!=e[i]){return void (s=!1)
}}}),s
},destroy:function(){"hashchangeevent"==this._sCheckType?this._htEventHandler.hashchange.detach(window,"hashchange"):"iframe"==this._sCheckType?this._welIFrame.leave():clearInterval(this._nIntervalId),this._htEventHandler=null,this._htHistoryData=null,this._oAgent=null,this._welIFrame=null,this._nIntervalId=null,this._sCheckType=null,this._sComponentId=null;
var t=this.constructor._aInstances||[],e=jindo.$A(t).indexOf(this);
e>-1&&t.splice(e,1)
}}).extend(jindo.Component),jindo.BrowseButton=jindo.$Class({$init:function(t,e){this.option({sClassPrefix:"browse-"}),this.option(e||{}),this._el=jindo.$(t),this._assignHTMLElement(),this._attachEvents()
},_assignHTMLElement:function(){var t=this.option("sClassPrefix");
this._elBox=jindo.$$.getSingle("."+t+"box",this._el),this._elFileSelect=jindo.$$.getSingle("."+t+"file-input",this._el),this._elBrowseButton=jindo.$$.getSingle("."+t+"button",this._el),this._elFileSelect.style.cssText="top:-.5em !important; height:500px !important;",jindo.$Element(this._elBrowseButton).addClass(t+"applied")
},_adjustFileSelectPos:function(t){this.getFileSelect().style.right=jindo.$Element(this.getBox()).offset().left+jindo.$Element(this.getBox()).width()-t-20+"px"
},_attachEvents:function(){var t=this.getBrowseButton(),e=jindo.$Element(t),i=this.getBox(),n=this.getFileSelect(),s=jindo.$Fn(function(t){e.addClass(this.option("sClassPrefix")+"over"),this.fireEvent("over"),this._adjustFileSelectPos(t.pos().pageX)
},this),o=jindo.$Fn(function(){e.removeClass(this.option("sClassPrefix")+"over"),n.style.right="0px",this.fireEvent("out")
},this),a=jindo.$Fn(function(t){this._adjustFileSelectPos(t.pos().pageX)
},this);
jindo.$Fn(function(){this.fireEvent("sourceChange")
},this).attach(this.getFileSelect(),"change"),s.attach(i,"mouseover"),a.attach(i,"mousemove"),o.attach(i,"mouseout")
},getBox:function(){return this._elBox
},getFileSelect:function(){return this._elFileSelect
},getBrowseButton:function(){return this._elBrowseButton
}}).extend(jindo.Component),jindo.Cache=jindo.$Class({$init:function(t){this._htCacheData={},this._htExpireTime={},this._waKeyList=jindo.$A(),this.option({nCacheLimit:50,nExpireTime:0}),this.option(t)
},add:function(t,e,i){if(t&&e){this._checkCacheExpire(),this._checkCacheLimit();
var n=this._makeKey(t);
if(n){return this._htCacheData[n]=e,this._htExpireTime[n]=this._getExpireTime(i),this._waKeyList.push(n),!0
}}return !1
},remove:function(t){if(t){var e=this._makeKey(t);
if(this._htCacheData[e]){return this._waKeyList=this._waKeyList.refuse(e),delete this._htExpireTime[e],delete this._htCacheData[e],!0
}}return !1
},clear:function(){this._htCacheData={},this._htExpireTime={},this._waKeyList=jindo.$A()
},get:function(t){if(t){var e=this._makeKey(t);
if(this.check(t)){return this._htCacheData[e]
}}return null
},check:function(t){if(t){var e=this._makeKey(t);
if(this._htCacheData[e]&&this._checkCacheExpire(e)){return !0
}}return !1
},_checkCacheLimit:function(){this._waKeyList.length()==this.option("nCacheLimit")&&this.remove(this._waKeyList.get(0))
},_checkCacheExpire:function(t){if(t){var e=this._getTime();
return 0===this._htExpireTime[t]||e<this._htExpireTime[t]?!0:(this.remove(jindo.$S(t).parseString()),!1)
}for(var i=0,n=this._waKeyList.length();
n>i;
i++){return this._checkCacheExpire(this._waKeyList.get(i))
}},_getExpireTime:function(t){return t?this._getTime()+1000*t:this.option("nExpireTime")?this._getTime()+1000*this.option("nExpireTime"):0
},_makeKey:function(t){if(!t){return""
}if("string"==typeof t){return t
}try{return jindo.$H(t).toQueryString()
}catch(e){return""
}},_getTime:function(){return +new Date
},destroy:function(){this._waKeyList=null,this._htCacheData=null,this._htExpireTime=null
}}).extend(jindo.Component),jindo.Calendar=jindo.$Class({$init:function(t,e){var i=this.constructor.getToday();
this.setToday(i.nYear,i.nMonth,i.nDate),this._elLayer=jindo.$(t),this._htDefaultOption={sClassPrefix:"calendar-",nYear:this._htToday.nYear,nMonth:this._htToday.nMonth,nDate:this._htToday.nDate,sTitleFormat:"yyyy-mm",sYearTitleFormat:"yyyy",sMonthTitleFormat:"m",aMonthTitle:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],bDrawOnload:!0},this.option(this._htDefaultOption),this.option(e||{}),this._assignHTMLElements(),this.activate(),this.setDate(this.option("nYear"),this.option("nMonth"),this.option("nDate")),this.option("bDrawOnload")&&this.draw()
},getBaseElement:function(){return this._elLayer
},getDate:function(){return this._htDate
},getDateOfElement:function(t){var e=jindo.$A(this._aDateContainerElement).indexOf(t);
return e>-1?this._aMetaData[e]:null
},setToday:function(t,e,i){return this._htToday||(this._htToday={}),this._htToday.nYear=t,this._htToday.nMonth=e,this._htToday.nDate=i,this
},getToday:function(){return{nYear:this._htToday.nYear,nMonth:this._htToday.nMonth,nDate:this._htToday.nDate}
},setDate:function(t,e,i){this._htDate={nYear:t,nMonth:1*e,nDate:1*i}
},getShownDate:function(){return this._getShownDate()
},_getShownDate:function(){return this.htShownDate||this.getDate()
},_setShownDate:function(t,e){this.htShownDate={nYear:t,nMonth:1*e,nDate:1}
},_assignHTMLElements:function(){var t=this.option("sClassPrefix"),e=this.getBaseElement();
(this.elBtnPrevYear=jindo.$$.getSingle("."+t+"btn-prev-year",e))&&(this.wfPrevYear=jindo.$Fn(function(t){t.stop(jindo.$Event.CANCEL_DEFAULT),this.draw(-1,0,!0)
},this)),(this.elBtnPrevMonth=jindo.$$.getSingle("."+t+"btn-prev-mon",e))&&(this.wfPrevMonth=jindo.$Fn(function(t){t.stop(jindo.$Event.CANCEL_DEFAULT),this.draw(0,-1,!0)
},this)),(this.elBtnNextMonth=jindo.$$.getSingle("."+t+"btn-next-mon",e))&&(this.wfNextMonth=jindo.$Fn(function(t){t.stop(jindo.$Event.CANCEL_DEFAULT),this.draw(0,1,!0)
},this)),(this.elBtnNextYear=jindo.$$.getSingle("."+t+"btn-next-year",e))&&(this.wfNextYear=jindo.$Fn(function(t){t.stop(jindo.$Event.CANCEL_DEFAULT),this.draw(1,0,!0)
},this)),this.elTitle=jindo.$$.getSingle("."+t+"title",e),this.elTitleYear=jindo.$$.getSingle("."+t+"title-year",e),this.elTitleMonth=jindo.$$.getSingle("."+t+"title-month",e);
var i=jindo.$$.getSingle("."+t+"week",e);
this.elWeekTemplate=i.cloneNode(!0),this.elWeekAppendTarget=i.parentNode
},_setCalendarTitle:function(t,e,i){10>e&&(e=("0"+1*e).toString());
var n,s=this.elTitle,o=this.option("sTitleFormat");
if("undefined"!=typeof i){switch(i){case"year":s=this.elTitleYear,o=this.option("sYearTitleFormat"),n=o.replace(/yyyy/g,t).replace(/y/g,t.toString().substr(2,2));
break;
case"month":s=this.elTitleMonth,o=this.option("sMonthTitleFormat"),n=o.replace(/mm/g,e).replace(/m/g,1*e).replace(/M/g,this.option("aMonthTitle")[e-1])
}}else{n=o.replace(/yyyy/g,t).replace(/y/g,t.toString().substr(2,2)).replace(/mm/g,e).replace(/m/g,1*e).replace(/M/g,this.option("aMonthTitle")[e-1])
}jindo.$Element(s).text(n)
},draw:function(t,e,i){var n=this.option("sClassPrefix"),s=this.getDate(),o=this._getShownDate();
if(o&&"undefined"!=typeof i&&i){var a=this.constructor.getRelativeDate(t,e,0,o);
t=a.nYear,e=a.nMonth
}else{"undefined"==typeof t&&"undefined"==typeof e&&"undefined"==typeof i?(t=s.nYear,e=s.nMonth):(t=t||o.nYear,e=e||o.nMonth)
}if(this.fireEvent("beforeDraw",{nYear:t,nMonth:e})){this.elTitle&&this._setCalendarTitle(t,e),this.elTitleYear&&this._setCalendarTitle(t,e,"year"),this.elTitleMonth&&this._setCalendarTitle(t,e,"month"),this._clear(jindo.Calendar.getWeeks(t,e)),this._setShownDate(t,e);
var r,h,l,c,u,d,f,_,g,p=this.getToday(),v=this.constructor.getFirstDay(t,e),m=this.constructor.getLastDay(t,e),E=this.constructor.getLastDate(t,e),b=0,S=this.constructor.getRelativeDate(0,-1,0,{nYear:t,nMonth:e,nDate:1}),w=this.constructor.getRelativeDate(0,1,0,{nYear:t,nMonth:e,nDate:1}),j=this.constructor.getLastDate(S.nYear,S.nMonth),C=[],y=this.constructor.getWeeks(t,e);
for(g=0;
y>g;
g++){_=this.elWeekTemplate.cloneNode(!0),jindo.$Element(_).appendTo(this.elWeekAppendTarget),this._aWeekElement.push(_)
}if(this._aDateElement=jindo.$$("."+n+"date",this.elWeekAppendTarget),this._aDateContainerElement=jindo.$$("."+n+"week > *",this.elWeekAppendTarget),v>0){for(g=j-v;
j>g;
g++){C.push(g+1)
}}for(g=1;
E+1>g;
g++){C.push(g)
}for(f=C.length-1,g=1;
7-m>g;
g++){C.push(g)
}for(g=0;
g<C.length;
g++){r=!1,h=!1,l=jindo.$Element(this._aDateContainerElement[g]),c=t,u=e,v>g?(r=!0,l.addClass(n+"prev-mon"),c=S.nYear,u=S.nMonth):g>f?(h=!0,l.addClass(n+"next-mon"),c=w.nYear,u=w.nMonth):(c=t,u=e),0===b&&l.addClass(n+"sun"),6==b&&l.addClass(n+"sat"),c==p.nYear&&1*u==p.nMonth&&C[g]==p.nDate&&l.addClass(n+"today"),d={elDate:this._aDateElement[g],elDateContainer:l.$value(),nYear:c,nMonth:u,nDate:C[g],bPrevMonth:r,bNextMonth:h,sHTML:C[g]},jindo.$Element(d.elDate).html(d.sHTML.toString()),this._aMetaData.push({nYear:c,nMonth:u,nDate:C[g]}),b=(b+1)%7,this.fireEvent("draw",d)
}this.fireEvent("afterDraw",{nYear:t,nMonth:e})
}},_clear:function(){this._aMetaData=[],this._aWeekElement=[],jindo.$Element(this.elWeekAppendTarget).empty()
},attachEvent:function(){this.activate()
},detachEvent:function(){this.deactivate()
},_onActivate:function(){this.elBtnPrevYear&&this.wfPrevYear.attach(this.elBtnPrevYear,"click"),this.elBtnPrevMonth&&this.wfPrevMonth.attach(this.elBtnPrevMonth,"click"),this.elBtnNextMonth&&this.wfNextMonth.attach(this.elBtnNextMonth,"click"),this.elBtnNextYear&&this.wfNextYear.attach(this.elBtnNextYear,"click")
},_onDeactivate:function(){this.elBtnPrevYear&&this.wfPrevYear.detach(this.elBtnPrevYear,"click"),this.elBtnPrevMonth&&this.wfPrevMonth.detach(this.elBtnPrevMonth,"click"),this.elBtnNextMonth&&this.wfNextMonth.detach(this.elBtnNextMonth,"click"),this.elBtnNextYear&&this.wfNextYear.detach(this.elBtnNextYear,"click")
}}).extend(jindo.UIComponent),jindo.Calendar.setToday=function(t,e,i){return this._htToday||(this._htToday={}),this._htToday.nYear=t,this._htToday.nMonth=e,this._htToday.nDate=i,this
},jindo.Calendar.getToday=function(){var t=this._htToday||this.getDateHashTable(new Date);
return{nYear:t.nYear,nMonth:t.nMonth,nDate:t.nDate}
},jindo.Calendar.getDateObject=function(t){return 3==arguments.length?new Date(arguments[0],arguments[1]-1,arguments[2]):new Date(t.nYear,t.nMonth-1,t.nDate)
},jindo.Calendar.getDateHashTable=function(t){return 3==arguments.length?{nYear:arguments[0],nMonth:arguments[1],nDate:arguments[2]}:(arguments.length<=1&&(t=t||new Date),{nYear:t.getFullYear(),nMonth:t.getMonth()+1,nDate:t.getDate()})
},jindo.Calendar.getTime=function(t){return this.getDateObject(t).getTime()
},jindo.Calendar.getFirstDay=function(t,e){return new Date(t,e-1,1).getDay()
},jindo.Calendar.getLastDay=function(t,e){return new Date(t,e,0).getDay()
},jindo.Calendar.getLastDate=function(t,e){return new Date(t,e,0).getDate()
},jindo.Calendar.getWeeks=function(t,e){var i=this.getFirstDay(t,e),n=this.getLastDate(t,e);
return Math.ceil((i+n)/7)
},jindo.Calendar.getRelativeDate=function(t,e,i,n){var s=jindo.$Date(new Date(n.nYear,n.nMonth,n.nDate)),o={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
s.isLeapYear()&&(o={1:31,2:29,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}),o[n.nMonth]==n.nDate&&(n.nDate=o[n.nMonth+e]);
this.getDateHashTable(new Date(n.nYear+t,n.nMonth+e-1,n.nDate+i));
return this.getDateHashTable(new Date(n.nYear+t,n.nMonth+e-1,n.nDate+i))
},jindo.Calendar.isValidDate=function(t,e,i){return 12>=e&&i<=this.getLastDate(t,e)?!0:!1
},jindo.Calendar.isPast=function(t,e){return this.getTime(t)<this.getTime(e)?!0:!1
},jindo.Calendar.isFuture=function(t,e){return this.getTime(t)>this.getTime(e)?!0:!1
},jindo.Calendar.isSameDate=function(t,e){return this.getTime(t)==this.getTime(e)?!0:!1
},jindo.Calendar.isBetween=function(t,e,i){return this.isFuture(t,i)||this.isPast(t,e)?!1:!0
},document.createElement("canvas").getContext||!function(){function t(){return this.context_||(this.context_=new l(this))
}function e(t,e){var i=j.call(arguments,2);
return function(){return t.apply(e,i.concat(j.call(arguments)))
}
}function i(t){var e=t.srcElement;
switch(t.propertyName){case"width":e.style.width=e.attributes.width.nodeValue+"px",e.getContext().clearRect();
break;
case"height":e.style.height=e.attributes.height.nodeValue+"px",e.getContext().clearRect()
}}function n(t){var e=t.srcElement;
e.firstChild&&(e.firstChild.style.width=e.clientWidth+"px",e.firstChild.style.height=e.clientHeight+"px")
}function s(){return[[1,0,0],[0,1,0],[0,0,1]]
}function o(t,e){for(var i=s(),n=0;
3>n;
n++){for(var o=0;
3>o;
o++){for(var a=0,r=0;
3>r;
r++){a+=t[n][r]*e[r][o]
}i[n][o]=a
}}return i
}function a(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.arcScaleX_=t.arcScaleX_,e.arcScaleY_=t.arcScaleY_,e.lineScale_=t.lineScale_
}function r(t){var e,i=1;
if(t=String(t),"rgb"==t.substring(0,3)){var n=t.indexOf("(",3),s=t.indexOf(")",n+1),o=t.substring(n+1,s).split(",");
e="#";
for(var a=0;
3>a;
a++){e+=C[Number(o[a])]
}4==o.length&&"a"==t.substr(3,1)&&(i=o[3])
}else{e=t
}return{color:e,alpha:i}
}function h(t){switch(t){case"butt":return"flat";
case"round":return"round";
case"square":break;
default:return"square"
}}function l(t){this.m_=s(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*S,this.globalAlpha=1,this.canvas=t;
var e=t.ownerDocument.createElement("div");
e.style.width=t.clientWidth+"px",e.style.height=t.clientHeight+"px",t.appendChild(e),this.element_=e,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1
}function c(t,e,i,n){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:n.x,y:n.y}),t.currentX_=n.x,t.currentY_=n.y
}function u(t){for(var e=0;
3>e;
e++){for(var i=0;
2>i;
i++){if(!isFinite(t[e][i])||isNaN(t[e][i])){return !1
}}}return !0
}function d(t,e,i){if(u(e)&&(t.m_=e,i)){var n=e[0][0]*e[1][1]-e[0][1]*e[1][0];
t.lineScale_=b(E(n))
}}function f(t){this.type_=t,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]
}function _(){}for(var g=Math,p=g.round,v=g.sin,m=g.cos,E=g.abs,b=g.sqrt,S=10,w=S/2,j=Array.prototype.slice,C=[],y=0;
16>y;
y++){for(var T=0;
16>T;
T++){C[16*y+T]=y.toString(16)+T.toString(16)
}}var $={init:function(t){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var i=t||document;
i.createElement("canvas"),i.attachEvent("onreadystatechange",e(this.init_,this,i))
}},init_:function(t){if(t.namespaces.g_vml_||t.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),t.namespaces.g_o_||t.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),!t.styleSheets.ex_canvas_){var e=t.createStyleSheet();
e.owningElement.id="ex_canvas_",e.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"
}for(var i=t.getElementsByTagName("canvas"),n=0;
n<i.length;
n++){this.initElement(i[n])
}},initElement:function(e){if(!e.getContext){e.getContext=t,e.innerHTML="",e.attachEvent("onpropertychange",i),e.attachEvent("onresize",n);
var s=e.attributes;
s.width&&s.width.specified?e.style.width=s.width.nodeValue+"px":e.width=e.clientWidth,s.height&&s.height.specified?e.style.height=s.height.nodeValue+"px":e.height=e.clientHeight
}return e
}};
$.init();
var x=l.prototype;
x.clearRect=function(){this.element_.innerHTML=""
},x.beginPath=function(){this.currentPath_=[]
},x.moveTo=function(t,e){var i=this.getCoords_(t,e);
this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y
},x.lineTo=function(t,e){var i=this.getCoords_(t,e);
this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y
},x.bezierCurveTo=function(t,e,i,n,s,o){var a=this.getCoords_(s,o),r=this.getCoords_(t,e),h=this.getCoords_(i,n);
c(this,r,h,a)
},x.quadraticCurveTo=function(t,e,i,n){var s=this.getCoords_(t,e),o=this.getCoords_(i,n),a={x:this.currentX_+2/3*(s.x-this.currentX_),y:this.currentY_+2/3*(s.y-this.currentY_)},r={x:a.x+(o.x-this.currentX_)/3,y:a.y+(o.y-this.currentY_)/3};
c(this,a,r,o)
},x.arc=function(t,e,i,n,s,o){i*=S;
var a=o?"at":"wa",r=t+m(n)*i-w,h=e+v(n)*i-w,l=t+m(s)*i-w,c=e+v(s)*i-w;
r!=l||o||(r+=0.125);
var u=this.getCoords_(t,e),d=this.getCoords_(r,h),f=this.getCoords_(l,c);
this.currentPath_.push({type:a,x:u.x,y:u.y,radius:i,xStart:d.x,yStart:d.y,xEnd:f.x,yEnd:f.y})
},x.rect=function(t,e,i,n){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+n),this.lineTo(t,e+n),this.closePath()
},x.strokeRect=function(t,e,i,n){var s=this.currentPath_;
this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+n),this.lineTo(t,e+n),this.closePath(),this.stroke(),this.currentPath_=s
},x.fillRect=function(t,e,i,n){var s=this.currentPath_;
this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+n),this.lineTo(t,e+n),this.closePath(),this.fill(),this.currentPath_=s
},x.createLinearGradient=function(t,e,i,n){var s=new f("gradient");
return s.x0_=t,s.y0_=e,s.x1_=i,s.y1_=n,s
},x.createRadialGradient=function(t,e,i,n,s,o){var a=new f("gradientradial");
return a.x0_=t,a.y0_=e,a.r0_=i,a.x1_=n,a.y1_=s,a.r1_=o,a
},x.drawImage=function(t){var e,i,n,s,o,a,r,h,l=t.runtimeStyle.width,c=t.runtimeStyle.height;
t.runtimeStyle.width="auto",t.runtimeStyle.height="auto";
var u=t.width,d=t.height;
if(t.runtimeStyle.width=l,t.runtimeStyle.height=c,3==arguments.length){e=arguments[1],i=arguments[2],o=a=0,r=n=u,h=s=d
}else{if(5==arguments.length){e=arguments[1],i=arguments[2],n=arguments[3],s=arguments[4],o=a=0,r=u,h=d
}else{if(9!=arguments.length){throw Error("Invalid number of arguments")
}o=arguments[1],a=arguments[2],r=arguments[3],h=arguments[4],e=arguments[5],i=arguments[6],n=arguments[7],s=arguments[8]
}}var f=this.getCoords_(e,i),_=[],v=10,m=10;
if(_.push(" <g_vml_:group",' coordsize="',S*v,",",S*m,'"',' coordorigin="0,0"',' style="width:',v,"px;height:",m,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]){var E=[];
E.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",p(f.x/S),",","Dy=",p(f.y/S),"");
var b=f,w=this.getCoords_(e+n,i),j=this.getCoords_(e,i+s),C=this.getCoords_(e+n,i+s);
b.x=g.max(b.x,w.x,j.x,C.x),b.y=g.max(b.y,w.y,j.y,C.y),_.push("padding:0 ",p(b.x/S),"px ",p(b.y/S),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",E.join(""),", sizingmethod='clip');")
}else{_.push("top:",p(f.y/S),"px;left:",p(f.x/S),"px;")
}_.push(' ">','<g_vml_:image src="',t.src,'"',' style="width:',S*n,"px;"," height:",S*s,'px;"',' cropleft="',o/u,'"',' croptop="',a/d,'"',' cropright="',(u-o-r)/u,'"',' cropbottom="',(d-a-h)/d,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",_.join(""))
},x.stroke=function(t){var e=[],i=r(t?this.fillStyle:this.strokeStyle),n=i.color,s=i.alpha*this.globalAlpha,o=10,a=10;
e.push("<g_vml_:shape",' filled="',!!t,'"',' style="position:absolute;width:',o,"px;height:",a,'px;"',' coordorigin="0 0" coordsize="',S*o," ",S*a,'"',' stroked="',!t,'"',' path="');
var l,c={x:null,y:null},u={x:null,y:null};
for(l=0;
l<this.currentPath_.length;
l++){var d,f=this.currentPath_[l];
switch(f.type){case"moveTo":d=f,e.push(" m ",p(f.x),",",p(f.y));
break;
case"lineTo":e.push(" l ",p(f.x),",",p(f.y));
break;
case"close":e.push(" x "),f=null;
break;
case"bezierCurveTo":e.push(" c ",p(f.cp1x),",",p(f.cp1y),",",p(f.cp2x),",",p(f.cp2y),",",p(f.x),",",p(f.y));
break;
case"at":case"wa":e.push(" ",f.type," ",p(f.x-this.arcScaleX_*f.radius),",",p(f.y-this.arcScaleY_*f.radius)," ",p(f.x+this.arcScaleX_*f.radius),",",p(f.y+this.arcScaleY_*f.radius)," ",p(f.xStart),",",p(f.yStart)," ",p(f.xEnd),",",p(f.yEnd))
}f&&((null===c.x||f.x<c.x)&&(c.x=f.x),(null===u.x||f.x>u.x)&&(u.x=f.x),(null===c.y||f.y<c.y)&&(c.y=f.y),(null===u.y||f.y>u.y)&&(u.y=f.y))
}if(e.push(' ">'),t){if("object"==typeof this.fillStyle){var _,v=this.fillStyle,m=0,E={x:0,y:0},b=0,w=1;
if("gradient"==v.type_){var j=v.x0_/this.arcScaleX_,C=v.y0_/this.arcScaleY_,y=v.x1_/this.arcScaleX_,T=v.y1_/this.arcScaleY_;
_=this.getCoords_(j,C);
var $=this.getCoords_(y,T),x=$.x-_.x,D=$.y-_.y;
m=180*Math.atan2(x,D)/Math.PI,0>m&&(m+=360),0.000001>m&&(m=0)
}else{_=this.getCoords_(v.x0_,v.y0_);
var L=u.x-c.x,P=u.y-c.y;
E={x:(_.x-c.x)/L,y:(_.y-c.y)/P},L/=this.arcScaleX_*S,P/=this.arcScaleY_*S;
var I=g.max(L,P);
b=2*v.r0_/I,w=2*v.r1_/I-b
}var M=v.colors_;
M.sort(function(t,e){return t.offset-e.offset
});
var O=M.length,F=M[0].color,k=M[O-1].color,A=M[0].alpha*this.globalAlpha,H=M[O-1].alpha*this.globalAlpha,B=[];
for(l=0;
O>l;
l++){var N=M[l];
B.push(N.offset*w+b+" "+N.color)
}e.push('<g_vml_:fill type="',v.type_,'"',' method="none" focus="100%"',' color="',F,'"',' color2="',k,'"',' colors="',B.join(","),'"',' opacity="',H,'"',' g_o_:opacity2="',A,'"',' angle="',m,'"',' focusposition="',E.x,",",E.y,'" />')
}else{e.push('<g_vml_:fill color="',n,'" opacity="',s,'" />')
}}else{var R=this.lineScale_*this.lineWidth;
1>R&&(s*=R),e.push("<g_vml_:stroke",' opacity="',s,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',h(this.lineCap),'"',' weight="',R,'px"',' color="',n,'" />')
}e.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",e.join(""))
},x.fill=function(){this.stroke(!0)
},x.closePath=function(){this.currentPath_.push({type:"close"})
},x.getCoords_=function(t,e){var i=this.m_;
return{x:S*(t*i[0][0]+e*i[1][0]+i[2][0])-w,y:S*(t*i[0][1]+e*i[1][1]+i[2][1])-w}
},x.save=function(){var t={};
a(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=o(s(),this.m_)
},x.restore=function(){a(this.aStack_.pop(),this),this.m_=this.mStack_.pop()
},x.translate=function(t,e){var i=[[1,0,0],[0,1,0],[t,e,1]];
d(this,o(i,this.m_),!1)
},x.rotate=function(t){var e=m(t),i=v(t),n=[[e,i,0],[-i,e,0],[0,0,1]];
d(this,o(n,this.m_),!1)
},x.scale=function(t,e){this.arcScaleX_*=t,this.arcScaleY_*=e;
var i=[[t,0,0],[0,e,0],[0,0,1]];
d(this,o(i,this.m_),!0)
},x.transform=function(t,e,i,n,s,a){var r=[[t,e,0],[i,n,0],[s,a,1]];
d(this,o(r,this.m_),!0)
},x.setTransform=function(t,e,i,n,s,o){var a=[[t,e,0],[i,n,0],[s,o,1]];
d(this,a,!0)
},x.clip=function(){},x.arcTo=function(){},x.createPattern=function(){return new _
},f.prototype.addColorStop=function(t,e){e=r(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})
},G_vmlCanvasManager=$,CanvasRenderingContext2D=l,CanvasGradient=f,CanvasPattern=_
}(),jindo.Canvas=jindo.$Class({$init:function(t){"undefined"==typeof t&&(t=jindo.Canvas.create()),this._el=t,this._elContainer=this._el.parentNode,this._oContext=jindo.Canvas.getContext(t)
},getElement:function(){return this._el
},getContainer:function(){return this._elContainer
},width:function(t){return"number"==typeof t?(this._el.width=t,this):this._el.width
},height:function(t){return"number"==typeof t?(this._el.height=t,this):this._el.height
},getContext:function(){return this._oContext
},clear:function(){return this._oContext.clearRect(0,0,this._el.width,this._el.height),this
},_merge:function(t,e){for(var i in e){t[i]=e[i]
}},drawLine:function(t,e,i){var n,s=this._oContext,o=0,a=t.length;
if(e=e||{},a>1){if("undefined"==typeof i&&(i=!0),s.save(),this._merge(s,e),s.beginPath(),i){if(s.lineWidth%2===1&&(o=0.5),2===a){t[0][0]===t[1][0]&&(s.moveTo(Math.round(t[0][0])+o,t[0][1]),s.lineTo(Math.round(t[1][0])+o,t[1][1])),t[0][1]===t[1][1]&&(s.moveTo(t[0][0],Math.round(t[0][1])+o),s.lineTo(t[1][0],Math.round(t[1][1])+o))
}else{for(s.moveTo(Math.round(t[0][0])+o,Math.round(t[0][1])+o),n=1;
a>n;
n++){s.lineTo(Math.round(t[n][0])+o,Math.round(t[n][1])+o)
}}}else{for(s.moveTo(t[0][0],t[0][1]),n=1;
a>n;
n++){s.lineTo(t[n][0],t[n][1])
}}s.stroke(),s.closePath(),s.restore()
}return this
},drawFace:function(t,e){var i=this._oContext,n=t.length;
if(e=e||{},n>2){i.save(),this._merge(i,e),i.beginPath(),i.moveTo(t[0][0],t[0][1]);
for(var s=1;
n>s;
s++){i.lineTo(t[s][0],t[s][1])
}i.fill(),i.closePath(),i.restore()
}return this
},_round:function(t,e){return e%2===1?Math.round(t)+0.5:t
},drawRect:function(t,e,i,n,s,o){var a=this._oContext,r="undefined"!=typeof s.fillStyle,h="undefined"!=typeof s.strokeStyle&&s.lineWidth>0;
return s=s||{},(r||h)&&(a.save(),this._merge(a,s),r&&a.fillRect(t,e,i,n),h&&("undefined"==typeof o&&(o=!0),o&&(t=this._round(t,a.lineWidth),e=this._round(e,a.lineWidth),n=Math.round(n),i=Math.round(i)),a.strokeRect(t,e,i,n)),a.restore()),this
}}),jindo.Canvas.create=function(t,e,i){var n=document.createElement("canvas");
return n.setAttribute("width",t||300),n.setAttribute("height",e||150),"undefined"==typeof n.getContext&&G_vmlCanvasManager.initElement(n),i&&i.appendChild(n),n
},jindo.Canvas.getContext=function(t){return t.getContext("2d")
},jindo.HTMLComponent=jindo.$Class({sTagName:"",$init:function(){},paint:function(){return this._onPaint(),this
},_onActivate:function(){(this.constructor._aInstances=this.constructor._aInstances||[]).push(this)
},_onDeactivate:function(){var t=this.constructor._aInstances||[],e=jindo.$A(t).indexOf(this);
e>-1&&t.splice(e,1)
}}).extend(jindo.UIComponent),jindo.HTMLComponent.paint=function(){for(var t,e=this._aInstances||[],i=0;
t=e[i];
i++){t.paint()
}},jindo.CheckBox=jindo.$Class({sTagName:"input[type=checkbox]",$init:function(t,e){this.option({sClassPrefix:"checkbox-"}),this.option(e||{}),this._elWrapper=jindo.$(t),this._welWrapper=jindo.$Element(t),this._assignHTMLElements(),this.wfOnClickInput=jindo.$Fn(this._onClickInput,this),this.wfOnClickWrapper=jindo.$Fn(this._onClickWrapper,this),this.wfOnFocusInput=jindo.$Fn(this._onFocusInput,this),this.wfOnBlurInput=jindo.$Fn(this._onBlurInput,this),this.activate(),this.paint()
},_assignHTMLElements:function(){var t=this._elWrapper;
this._elInput=jindo.$$.getSingle("input",t),"radio"==this._elInput.type&&(this.sTagName="input[type=radio]",this.option("sClassPrefix","radio-"));
var e=this.option("sClassPrefix");
this._elSubstitute=jindo.$$.getSingle("."+e+"mark",t),this._welSubstitute=jindo.$Element(this._elSubstitute)
},getInput:function(){return this._elInput
},getChecked:function(){return this.getInput().checked
},setChecked:function(t,e){"undefined"==typeof e&&(e=!0);
var i=this.getInput(),n=i.checked;
if(n!=t){switch(i.checked=t,i.type){case"checkbox":this.paint();
break;
case"radio":jindo.$A(this.constructor._aInstances).forEach(function(t){t.getInput().name==i.name&&t.paint()
})
}e&&this._fireChangeEvent(t)
}return this
},_fireChangeEvent:function(t){this.fireEvent("change",{bChecked:t})
},enable:function(){return this.getInput().disabled=!1,this.paint(),this
},disable:function(){return this.getInput().disabled=!0,this.paint(),this
},_onClickInput:function(t){t.stop(jindo.$Event.CANCEL_DEFAULT);
var e=this;
setTimeout(function(){e._welWrapper.fireEvent("click")
},1)
},_onClickWrapper:function(t){var e=this._elInput;
e.disabled||t.element===e||(e.focus(),this.fireEvent("beforeChange",{bChecked:e.checked})&&this.setChecked("radio"==e.type?!0:!e.checked))
},_onFocusInput:function(){this._welWrapper.addClass(this.option("sClassPrefix")+"focused")
},_onBlurInput:function(){this._welWrapper.removeClass(this.option("sClassPrefix")+"focused")
},_onActivate:function(){this.$super._onActivate(),this._welWrapper.addClass(this.option("sClassPrefix")+"applied"),this.wfOnClickInput.attach(this._elInput,"click"),this.wfOnClickWrapper.attach(this._elWrapper,"click"),this.wfOnFocusInput.attach(this._elInput,"focus"),this.wfOnBlurInput.attach(this._elInput,"blur")
},_onDeactivate:function(){this._welWrapper.removeClass(this.option("sClassPrefix")+"applied"),this.wfOnClickInput.detach(this._elInput,"click"),this.wfOnClickWrapper.detach(this._elWrapper,"click"),this.wfOnFocusInput.detach(this._elInput,"focus"),this.wfOnBlurInput.detach(this._elInput,"blur"),this.$super._onDeactivate()
},_onPaint:function(){var t=this.option("sClassPrefix");
this._elInput.disabled?this._welWrapper.addClass(t+"disabled"):this._welWrapper.removeClass(t+"disabled"),this._elInput.checked?this._welSubstitute.addClass(t+"checked"):this._welSubstitute.removeClass(t+"checked")
}}).extend(jindo.HTMLComponent),jindo.Rolling=jindo.$Class({_oTransition:null,$init:function(t,e){this.option({nFPS:50,nDuration:800,sDirection:"horizontal",fEffect:jindo.Effect.linear,sClassPrefix:"rolling-"}),this.option(e||{}),this._el=jindo.$(t);
var i="."+this.option("sClassPrefix")+"list";
this._bUsedClassPrefix=!0,this._elList=jindo.$$.test(this._el,i)?this._el:jindo.$$.getSingle("> "+i,t),this._elList||(this._elList=jindo.$$.test(this._el,"ul, ol")?this._el:jindo.$$.getSingle("> ul, > ol",t),this._bUsedClassPrefix=!1),this._oKeys="horizontal"==this.option("sDirection")?{offsetWidth:"offsetWidth",marginLeft:"marginLeft",marginRight:"marginRight",clientWidth:"clientWidth",scrollLeft:"scrollLeft"}:{offsetWidth:"offsetHeight",marginLeft:"marginTop",marginRight:"marginBottom",clientWidth:"clientHeight",scrollLeft:"scrollTop"},this._initTransition()
},_initTransition:function(){var t=this;
this._oTransition=(new jindo.Transition).fps(this.option("nFPS")).attach({end:function(){if(t._nItemCount){var e=t._oKeys;
t._el[e.scrollLeft]=t._getPosition(t.getIndex()%t._nItemCount)
}t.fireEvent("afterMove",{nIndex:t.getIndex()})
}})
},getTransition:function(){return this._oTransition
},getList:function(){return this._elList
},getItems:function(){var t="."+this.option("sClassPrefix")+"item";
return this._bUsedClassPrefix?jindo.$$("> "+t,this._elList):jindo.$$("> li",this._elList)
},_offsetSize:function(t){var e=jindo.$Element(t),i=this._oKeys,n=parseInt(e.css(i.marginLeft),10)||0,s=parseInt(e.css(i.marginRight),10)||0;
return t[i.offsetWidth]+n+s
},getIndex:function(){if(this.isMoving()){return this._nMoveTo
}for(var t=this._el,e=this._oKeys,i=t[e.scrollLeft],n=this.getItems(),s=0,o=0,a=99999999,r=0;
r<n.length;
r++){var h=Math.abs(i-s);
a>h&&(a=h,o=r),s+=this._offsetSize(n[r])
}return o
},_getPosition:function(t){for(var e=this._el,i=this._oKeys,n=this.getItems(),s=0,o=this._getSize(),a=0;
t>a;
a++){s+=this._offsetSize(n[a])
}return s+e[i.clientWidth]>o&&(s=o-e[i.clientWidth]),s
},_getSize:function(){for(var t=this.getItems(),e=0,i=0;
i<t.length;
i++){e+=this._offsetSize(t[i])
}return this._nSize=e
},_move:function(t){var e=this._el,i=this._oKeys,n=(this.getItems(),this._getPosition(t)),s=(this._getSize(),{element:e,nIndex:t,nScroll:n});
if(this.fireEvent("beforeMove",s)&&e[i.scrollLeft]!=s.nScroll){var o={};
return o[i.scrollLeft]=this.option("fEffect")(s.nScroll),this._nMoveTo=t,this.getTransition().abort().start(this.option("nDuration"),s.element,o),!0
}return !1
},moveTo:function(t){return t=Math.min(t,this.getItems().length-1),t=Math.max(t,0),this._move(t)
},moveLastTo:function(t){return this.moveTo(this.getItems().length-1-t)
},moveBy:function(t){return this.moveTo(this.getIndex()+t)
},isMoving:function(){return this._oTransition.isPlaying()
},isOverflowed:function(){return this._getSize()>this._el[this._oKeys.clientWidth]
},getDisplayedItemCount:function(){for(var t=0,e=this.getItems(),i=0,n=0;
n<e.length&&(i+=this._offsetSize(e[n]),i<=this._el[this._oKeys.clientWidth]);
n++){t++
}return t
}}).extend(jindo.Component),jindo.CircularRolling=jindo.$Class({$init:function(){this.refresh()
},refresh:function(){return this.getTransition().abort(),this._el[this._oKeys.scrollLeft]=0,this._nDuplicateCount=0,this._nItemCount=this.getItems().length,this._nDisplayedCount=this.getDisplayedItemCount(),this.isOverflowed()&&(this._nDuplicateCount=this._nDisplayedCount<=this._nItemCount/2?1:2,this._duplicate(this._nDuplicateCount)),this
},_duplicate:function(t){for(var e,i=this._elList,n=jindo.$("<"+i.tagName+">"),s=i.innerHTML,o=">"+(this._bUsedClassPrefix?"."+this.option("sClassPrefix")+"item":"li"),a=0;
t>a;
a++){n.innerHTML=s,e=jindo.$$(o,n);
for(var r=0;
r<e.length;
r++){i.appendChild(e[r])
}}},_setStartPosition:function(t,e){var i=this._oKeys,n=t%this._nItemCount||0;
if(0>t+e){var s=this._nDuplicateCount;
n+this._nDisplayedCount>this._nItemCount&&(s-=1),n+=this._nItemCount*s
}this._el[i.scrollLeft]=this._getPosition(n)
},moveBy:function(t){if(this.isMoving()){return !1
}var e=t>=this._nItemCount;
t%=this._nItemCount,e&&(t+=this._nItemCount),this._setStartPosition(this.getIndex(),t);
var i=this.getIndex()+t;
return this._move(i)?!0:!1
}}).extend(jindo.Rolling),jindo.Clipboard=jindo.$Class({_aElement:null,_aData:null,_elOvered:null,_bFailed:!0,$init:function(t){this._sFlashURL=t;
var e=jindo.Clipboard;
this._sUnique="S"+(new Date).getTime()+parseInt(1000000000*Math.random(),10);
"undefined"==typeof e._callbacks&&(e._callbacks={}),e._callbacks[this._sUnique]={click:jindo.$Fn(this._onFlashClick,this).bind(),mouseover:jindo.$Fn(this._onFlashMouseOver,this).bind(),mouseout:jindo.$Fn(this._onFlashMouseOut,this).bind(),mousedown:jindo.$Fn(this._onFlashMouseDown,this).bind(),mouseup:jindo.$Fn(this._onFlashMouseUp,this).bind(),load:jindo.$Fn(this._onFlashLoad,this).bind()},this._aElement=[],this._aData=[],this._agent=jindo.$Agent(),this._initFlash(),this._wfHandler=jindo.$Fn(function(t){this._initFlash();
var e=t.element,i=jindo.$Element(e).offset();
this._setFlashPosSize(i.left,i.top,e.offsetWidth,e.offsetHeight),this._setClipboard(e,this._getData(e)),this._elOvered=e
},this)
},_initFlash:function(){if(!this._elDummy){var t=this._elDummy=jindo.$("<div>"),e=this._sUnique;
t.style.cssText="position:absolute !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:visible !important; z-index:32000 !important;",document.body.insertBefore(t,document.body.firstChild),this._agent.flash().version>=11&&this._agent.navigator().ie&&(this._sFlashURL+="?"+Math.floor(10000*Math.random()));
var i=nhn.FlashObject.generateTag(this._sFlashURL,"CLIPBOARD"+e,1,1,{flashVars:{sUniq:e},wmode:"transparent"});
i=i.replace(/style="position:relative !important;"/gi,'style="position:absolute !important; left:0 !important; top:0 !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:visible !important;"'),t.innerHTML=i,jindo.$Fn(this._checkFailed,this).attach(t,"click")
}},_getFlash:function(){return nhn.FlashObject.find("CLIPBOARD"+this._sUnique)
},_setFlashPosSize:function(t,e,i,n){var s=this._elDummy;
s.style.left=t+"px",s.style.top=e+"px";
var o=this._getFlash();
o.width=i,o.height=n,o.style.width=i+"px",o.style.height=n+"px"
},setData:function(t,e){t=jindo.$(t);
var i=jindo.$A(this._aElement).indexOf(t),n=-1!=i;
return n&&!e&&""!==e?(this._wfHandler.detach(t,"mousemove"),this._aElement.splice(i,1),this._aData.splice(i,1),void this._setFlashPosSize(0,0,1,1)):(n?this._aData[i]=e:(this._wfHandler.attach(t,"mousemove"),this._aElement.push(t),this._aData.push(e)),void this._setClipboard(t,e))
},_getData:function(t){var e=jindo.$A(this._aElement).indexOf(t);
return this._aData[e]
},_setClipboard:function(t,e){var i=this._getFlash(),n=(jindo.$Element(t).css("cursor")||"").toUpperCase(),s="POINTER"==n||"HAND"==n;
try{i.setClipboardData(e),i.setClipboardOptions({cursor:s?"pointer":"default"}),this._sAppliedData=e,this._bFailed=!1
}catch(o){this._bFailed=!0
}},_checkFailed:function(){this._bFailed&&this.fireEvent("failure",{element:this._elOvered,data:this._lastestData})
},_onFlashClick:function(t){this.fireEvent("copy",{element:this._elOvered,data:t})
},_onFlashMouseOver:function(){this.fireEvent("over",{element:this._elOvered})
},_onFlashMouseOut:function(){this.fireEvent("out",{element:this._elOvered})
},_onFlashMouseDown:function(){this.fireEvent("down",{element:this._elOvered})
},_onFlashMouseUp:function(){this.fireEvent("up",{element:this._elOvered})
},_onFlashLoad:function(){this.fireEvent("load")
}}).extend(jindo.Component),jindo.DataBridge=jindo.$Class({_htEvent:{},$static:{log:function(t,e){t&&e?this.getComponentInstance(t)._onLog(e):alert("Parameter is wrong!!")
},onReceive:function(t,e,i){t&&e&&i?this.getComponentInstance(t)._onReceiveData(e,i):alert("Parameter is wrong!!")
},getComponentInstance:function(t){for(var e=this._aInstances,i=0;
i<e.length;
i++){if(t==e[i].getFlashObjectId()){return e[i]
}}}},$init:function(t){this.option({sSwfPath:"data_bridge.swf",nRetryLimit:3}),this.option(t),this._attachEvent(),this._createFlashObject(),(this.constructor._aInstances=this.constructor._aInstances||[]).push(this)
},_attachEvent:function(){this._htEvent.beforeunload=jindo.$Fn(this.destroy,this).attach(window,"beforeunload")
},_createFlashObject:function(){this._sFlashId="data_bridge_"+(new Date).getMilliseconds()+Math.floor(100000*Math.random());
var t=jindo.$Element('<div style="position:absolute;top:-1000px;left:0px">'),e="serviceId="+this.option("sServiceId")+"&logHandler=jindo.DataBridge.log&onReceiveHandler=jindo.DataBridge.onReceive&flashId="+this._sFlashId+"&retryLimit="+this.option("nRetryLimit");
t.appendTo(document.body),t.html('<object id="'+this._sFlashId+'" width="1" height="1" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"><param name="flashvars" value="'+e+'"><param name="movie" value="'+this.option("sSwfPath")+'"><param name = "allowScriptAccess" value = "always" /><embed name="'+this._sFlashId+'" src="'+this.option("sSwfPath")+'" flashvars="'+e+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true"></embed></object>')
},_getFlashObject:function(){return document[this._sFlashId]||jindo.$(this._sFlashId)
},getFlashObjectId:function(){return this._sFlashId
},getClientId:function(){return this.option("sServiceId")+"_"+this._sFlashId
},send:function(t){if(t){try{this._getFlashObject().send(t)
}catch(e){alert("Flash object is not ready!!")
}}else{alert("vData parameter is null!!")
}return this
},_onReceiveData:function(t,e){this.fireEvent("receive",{sSenderId:t,vData:e})
},_onLog:function(t){this.fireEvent("log",{sMessage:t})
},_close:function(){this._getFlashObject().close()
},_detachEvent:function(){this._htEvent.beforeunload.detach(window,"beforeunload")
},getLocalData:function(){},setLocalData:function(){},resetLocalData:function(){},destroy:function(){this._close(),this._detachEvent(),this._htEvent={},jindo.$Element(this._getFlashObject()).leave();
var t=this.constructor._aInstances||[],e=jindo.$A(t).indexOf(this);
e>-1&&t.splice(e,1)
}}).extend(jindo.Component),jindo.LayerManager=jindo.$Class({_bIsActivating:!1,_bIsHiding:!1,_bIsShowing:!1,_aLink:null,$init:function(t,e){this.option({sCheckEvent:"click",nCheckDelay:100,nShowDelay:0,nHideDelay:100}),this.option(e||{}),this.setLayer(t),this._aLink=[],this._oShowTimer=new jindo.Timer,this._oHideTimer=new jindo.Timer,this._oEventTimer=new jindo.Timer,this._wfOnEvent=jindo.$Fn(this._onEvent,this),this.getVisible(),this.activate()
},_onActivate:function(){this._wfOnEvent.attach(document,this.option("sCheckEvent"))
},_onDeactivate:function(){this._wfOnEvent.detach(document,this.option("sCheckEvent"))
},getVisible:function(){return this._wel.visible()
},_check:function(t){for(var e,i,n=jindo.$Element(t),s=0;
e=this._aLink[s];
s++){if(i=jindo.$Element(e),i&&(e=i.$value(),e&&n&&(t==e||n.isChildOf(e)))){return !0
}}return !1
},_find:function(t){for(var e,i=0;
e=this._aLink[i];
i++){if(e==t){return i
}}return -1
},getLayer:function(){return this._el
},setLayer:function(t){return this._el=jindo.$(t),this._wel=jindo.$Element(t),this
},getLinks:function(){return this._aLink
},setLinks:function(t){return this._aLink=jindo.$A(t).unique().$value(),this
},link:function(t){if(arguments.length>1){for(var e=0,i=arguments.length;
i>e;
e++){this.link(arguments[e])
}return this
}return -1!=this._find(t)?this:(this._aLink.push(t),this)
},unlink:function(t){if(arguments.length>1){for(var e=0,i=arguments.length;
i>e;
e++){this.unlink(arguments[e])
}return this
}var n=this._find(t);
return n>-1&&this._aLink.splice(n,1),this
},_fireEventBeforeShow:function(){return this.fireEvent("beforeShow",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_fireEventShow:function(){this._bIsShowing=!1,this.fireEvent("show",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_fireEventBeforeHide:function(){var t=this.fireEvent("beforeHide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()});
return t||(this._bIsHiding=!1),t
},_fireEventHide:function(){this._bIsHiding=!1,this.fireEvent("hide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})
},_show:function(t,e){var i=this;
this._oEventTimer.abort(),this._bIsShowing=!0,this._bIsHiding=!1,0>=e&&i._oHideTimer.abort(),this._oShowTimer.start(function(){t()
},e)
},_hide:function(t,e){var i=this;
this._bIsShowing=!1,this._bIsHiding=!0,0>=e&&i._oShowTimer.abort(),this._oHideTimer.start(function(){t()
},e)
},show:function(t){"undefined"==typeof t&&(t=this.option("nShowDelay"));
var e=this;
return this._show(function(){e.getVisible()||e._fireEventBeforeShow()&&(e._wel.show(),e._fireEventShow())
},t),this
},hide:function(t){"undefined"==typeof t&&(t=this.option("nHideDelay"));
var e=this;
return this._hide(function(){e.getVisible()&&e._fireEventBeforeHide()&&(e._wel.hide(),e._fireEventHide())
},t),this
},toggle:function(t){return !this.getVisible()||this._bIsHiding?this.show(t||this.option("nShowDelay")):this.hide(t||this.option("nHideDelay")),this
},_onEvent:function(t){var e=t.element,i=this;
this._oEventTimer.start(function(){!i._bIsHiding&&i.getVisible()&&(i._check(e)?i._bIsShowing||(i.fireEvent("ignore",{sCheckEvent:i.option("sCheckEvent")}),i._oHideTimer.abort(),i._bIsHiding=!1):"undefined"!=typeof e.tagName&&i.hide())
},this.option("nCheckDelay"))
}}).extend(jindo.UIComponent),jindo.LayerPosition=jindo.$Class({$init:function(t,e,i){this.option({sPosition:"outside-bottom",sAlign:"left",sValign:"",nTop:0,nLeft:0,bAuto:!1}),this.option(i||{}),this.setElement(t),e&&this.setLayer(e),t&&e&&this.setPosition(),this._wfSetPosition=jindo.$Fn(function(){var t=this._elLayer;
t&&this._welLayer.visible()&&this.fireEvent("beforeAdjust",{elLayer:t,htCurrentPosition:this.getCurrentPosition(),htAdjustedPosition:this._adjustPosition(this.getCurrentPosition())})&&(this.setPosition(),this.fireEvent("adjust",{elLayer:t,htCurrentPosition:this.getCurrentPosition()}))
},this),this.option("bAuto")&&this._wfSetPosition.attach(window,"scroll").attach(window,"resize")
},getElement:function(){return this._el
},setElement:function(t){return this._wel=this._el=jindo.$(t),this._el&&(this._wel=jindo.$Element(t)),this
},getLayer:function(){return this._elLayer
},setLayer:function(t){return this._elLayer=jindo.$(t),this._welLayer=jindo.$Element(t),this._elLayer.parentNode!=document.body&&document.body.insertBefore(this._elLayer,document.body.firstChild),this
},_isPosition:function(t,e){return t.sPosition.indexOf(e)>-1?!0:!1
},_setLeftRight:function(t,e){var i=this.getElement(),n=this.getLayer(),s=i.offsetWidth,o=n.offsetWidth;
i==document.body&&(s=jindo.$Document().clientSize().width);
var a=this._isPosition(t,"left"),r=this._isPosition(t,"right"),h=this._isPosition(t,"inside");
return a?h?e.nLeft+=t.nLeft:(e.nLeft-=o,e.nLeft-=t.nLeft):r?(e.nLeft+=s,h?(e.nLeft-=o,e.nLeft-=t.nLeft):e.nLeft+=t.nLeft):("left"==t.sAlign&&(e.nLeft+=t.nLeft),"center"==t.sAlign&&(e.nLeft+=(s-o)/2),"right"==t.sAlign&&(e.nLeft+=s-o,e.nLeft-=t.nLeft)),e
},_setVerticalAlign:function(t,e){var i=this.getElement(),n=this.getLayer(),s=i.offsetHeight,o=n.offsetHeight;
switch(i==document.body&&(s=jindo.$Document().clientSize().height),t.sValign){case"top":e.nTop+=t.nTop;
break;
case"middle":e.nTop+=(s-o)/2;
break;
case"bottom":e.nTop+=s-o-t.nTop
}return e
},_adjustScrollPosition:function(t){if(this.getElement()==document.body){var e=jindo.$Document().scrollPosition();
t.nTop+=e.top,t.nLeft+=e.left
}return t
},getPosition:function(t){"object"!=typeof t&&(t=this.option()),"undefined"==typeof t.nTop&&(t.nTop=0),"undefined"==typeof t.nLeft&&(t.nLeft=0);
var e,i=this._isPosition(t,"center"),n=this._isPosition(t,"inside"),s=this._isPosition(t,"top"),o=this._isPosition(t,"bottom"),a=this._isPosition(t,"left"),r=this._isPosition(t,"right");
a&&(e="left"),r&&(e="right"),s&&(e="top"),o&&(e="bottom"),i&&(e="center");
var h,l=this.getElement(),c=jindo.$Element(l),u=this.getLayer(),d=jindo.$Element(u),f=c.offset(),_=l.offsetWidth,g=l.offsetHeight,p=u.offsetWidth,v=u.offsetHeight,m={nTop:f.top,nLeft:f.left};
switch(l==document.body&&(h=jindo.$Document().clientSize(),_=h.width,g=h.height),p+=parseInt(d.css("marginLeft"),10)+parseInt(d.css("marginRight"),10)||0,v+=parseInt(d.css("marginTop"),10)+parseInt(d.css("marginBottom"),10)||0,e){case"center":m.nTop+=(g-v)/2,m.nTop+=t.nTop,m.nLeft+=(_-p)/2,m.nLeft+=t.nLeft;
break;
case"top":n?m.nTop+=t.nTop:m.nTop-=t.nTop+v,m=this._setLeftRight(t,m);
break;
case"bottom":m.nTop+=g,n?m.nTop-=t.nTop+v:m.nTop+=t.nTop,m=this._setLeftRight(t,m);
break;
case"left":n?m.nLeft+=t.nLeft:m.nLeft-=t.nLeft+p,m=this._setVerticalAlign(t,m);
break;
case"right":m.nLeft+=_,n?m.nLeft-=t.nLeft+p:m.nLeft+=t.nLeft,m=this._setVerticalAlign(t,m)
}if(m=this._adjustScrollPosition(m),jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<8&&window.external){try{var E=window!=top&&window.frameElement&&!window.frameElement.frameBorder;
E&&(m.nLeft-=2,m.nTop-=2)
}catch(b){}}return m
},setPosition:function(t){var e=jindo.$Element(this.getLayer()),i=e.visible();
return i||e.show(),e.css("left","-9999px").css("top","0px"),"undefined"==typeof t&&(t=this.getPosition()),this.option("bAuto")&&(t=this._adjustPosition(t)),e.css("left",t.nLeft+"px").css("top",t.nTop+"px"),i||e.hide(),this
},getCurrentPosition:function(){var t=jindo.$Element(this.getLayer());
return{nTop:parseInt(t.css("top"),10),nLeft:parseInt(t.css("left"),10)}
},_isFullyVisible:function(t){var e=this.getLayer(),i=jindo.$Element(e),n=jindo.$Document().scrollPosition(),s=n.top,o=n.left,a=jindo.$Document().clientSize(),r=e.offsetWidth+(parseInt(i.css("marginLeft"),10)+parseInt(i.css("marginRight"),10)||0),h=e.offsetHeight+(parseInt(i.css("marginTop"),10)+parseInt(i.css("marginBottom"),10)||0);
return t.nLeft>=0&&t.nTop>=0&&a.width>=t.nLeft-o+r&&a.height>=t.nTop-s+h?!0:!1
},_mirrorHorizontal:function(t){if("center"==t.sAlign||"inside-center"==t.sPosition){return t
}var e={};
for(var i in t){e[i]=t[i]
}return this._isPosition(e,"right")?e.sPosition=e.sPosition.replace(/right/,"left"):this._isPosition(e,"left")?e.sPosition=e.sPosition.replace(/left/,"right"):"right"==e.sAlign?e.sAlign="left":"left"==e.sAlign&&(e.sAlign="right"),e
},_mirrorVertical:function(t){if("middle"==t.sValign||"inside-center"==t.sPosition){return t
}var e={};
for(var i in t){e[i]=t[i]
}return this._isPosition(e,"top")?e.sPosition=e.sPosition.replace(/top/,"bottom"):this._isPosition(e,"bottom")?e.sPosition=e.sPosition.replace(/bottom/,"top"):"top"==e.sValign?e.sValign="bottom":"bottom"==e.sValign&&(e.sValign="top"),e
},_adjustPosition:function(t){var e=this.option(),i=[];
i.push(t),i.push(this.getPosition(this._mirrorHorizontal(e))),i.push(this.getPosition(this._mirrorVertical(e))),i.push(this.getPosition(this._mirrorVertical(this._mirrorHorizontal(e))));
for(var n,s=0;
n=i[s];
s++){if(this._isFullyVisible(n)){t=n;
break
}}return t
}}).extend(jindo.Component),jindo.DatePicker=jindo.$Class({_aDatePickerSet:null,_htSelectedDatePickerSet:null,$init:function(t,e){var i=new Date;
this.option({bUseLayerPosition:!0,Calendar:{sClassPrefix:"calendar-",nYear:i.getFullYear(),nMonth:i.getMonth()+1,nDate:i.getDate(),sTitleFormat:"yyyy-mm",aMonthTitle:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]},LayerManager:{sCheckEvent:"click",nShowDelay:0,nHideDelay:0},LayerPosition:{sPosition:"outside-bottom",sAlign:"left",nTop:0,nLeft:0,bAuto:!1}}),this.option(e),this._aDatePickerSet=[],this._elCalendarLayer=jindo.$(t),this._initCalendar(),this._initLayerManager(),this._initLayerPosition(),this._wfFocusInput=jindo.$Fn(this._onFocusInput,this),this._wfClickLinkedElement=jindo.$Fn(this._onClickLinkedElement,this),this._wfMouseOverDate=jindo.$Fn(this._onMouseOverDate,this),this._wfMouseOutDate=jindo.$Fn(this._onMouseOutDate,this),this._wfClickDate=jindo.$Fn(this._onClickDate,this),this.activate()
},addDatePickerSet:function(t){var e=(this.option(),this.getCalendar().option()),i={nYear:e.nYear,nMonth:e.nMonth,nDate:e.nDate,bDefaultSet:!0,bReadOnly:!0,sDateFormat:"yyyy-mm-dd",htSelectableDateFrom:{nYear:1900,nMonth:1,nDate:1},htSelectableDateTo:{nYear:2100,nMonth:12,nDate:31}};
if("undefined"!=typeof t.htOption){for(var n in t.htOption){"undefined"!=typeof i[n]&&(i[n]=t.htOption[n])
}}t.htOption=i,this._aDatePickerSet.push(t);
var s=this.getLayerManager();
return"undefined"!=typeof t.elInput&&(s.link(t.elInput),t.htOption.bReadOnly&&(t.elInput.readOnly=!0),this._wfFocusInput.attach(t.elInput,"focus"),this._wfClickLinkedElement.attach(t.elInput,"click")),"undefined"!=typeof t.elButton&&(s.link(t.elButton),this._wfClickLinkedElement.attach(t.elButton,"click")),t.htOption.bDefaultSet&&this._setDate(t,t.htOption),this
},removeDatePickerSet:function(t){for(var e=-1,i=0,n=this._aDatePickerSet.length;
n>i;
i++){if(this._aDatePickerSet[i].elInput==t.elInput||this._aDatePickerSet[i].elButton==t.elButton){e=i;
break
}}var s=this._aDatePickerSet[e],o=this.getLayerManager();
return"undefined"!=typeof s.elButton&&(o.unlink(s.elButton),this._wfClickLinkedElement.detach(s.elButton,"click")),"undefined"!=typeof s.elInput&&(this._wfFocusInput.detach(s.elInput,"focus"),this._wfClickLinkedElement.detach(s.elInput,"click"),s.elInput.readOnly=!1),s==this._htSelectedDatePickerSet&&(this._htSelectedDatePickerSet=null),this._aDatePickerSet.splice(i,1),this
},getDatePickerSet:function(t){if("undefined"==typeof t){return this._aDatePickerSet
}for(var e=0,i=this._aDatePickerSet.length;
i>e;
e++){if(this._aDatePickerSet[e].elInput==t||this._aDatePickerSet[e].elButton==t){return this._aDatePickerSet[e]
}}return !1
},getCalendarLayer:function(){return this._elCalendarLayer
},_initCalendar:function(){var t=this;
this._oCalendar=new jindo.Calendar(this.getCalendarLayer(),this.option("Calendar")).attach({beforeDraw:function(e){t.fireEvent("beforeDraw",e)||e.stop()
},draw:function(e){var i=this.option("sClassPrefix"),n=t._htSelectedDatePickerSet;
t.isSelectable(n,e)?(e.bSelectable=!0,jindo.Calendar.isSameDate(e,n)&&jindo.$Element(e.elDateContainer).addClass(i+"selected")):(e.bSelectable=!1,jindo.$Element(e.elDateContainer).addClass(this.option("sClassPrefix")+"unselectable")),t.fireEvent("draw",e)||e.stop()
},afterDraw:function(e){t.fireEvent("afterDraw",e)
}})
},getCalendar:function(){return this._oCalendar
},_initLayerManager:function(){var t=this,e=this.getCalendarLayer();
this._oLayerManager=new jindo.LayerManager(e,this.option("LayerManager")).attach({show:function(){t._oTimerDatePickerSet&&(clearTimeout(t._oTimerDatePickerSet),t._oTimerDatePickerSet=null),t.fireEvent("showCalendar")
},hide:function(){t._oTimerDatePickerSet=setTimeout(function(){t._htSelectedDatePickerSet=null,t._oTimerDatePickerSet=null
},0),t.fireEvent("hideCalendar")
}}).link(e)
},getLayerManager:function(){return this._oLayerManager
},_initLayerPosition:function(){this.option("bUseLayerPosition")&&(this._oLayerPosition=new jindo.LayerPosition(null,this.getCalendarLayer(),this.option("LayerPosition")))
},getLayerPosition:function(){return this._oLayerPosition
},getInput:function(t){return"undefined"!=typeof t?t.elInput||null:this._htSelectedDatePickerSet?this._htSelectedDatePickerSet.elInput||null:null
},getDate:function(t){return{nYear:t.nYear,nMonth:t.nMonth,nDate:t.nDate}
},_setDate:function(t,e){t.nYear=1*e.nYear,t.nMonth=1*e.nMonth,t.nDate=1*e.nDate,"undefined"!=typeof t.elInput&&(t.elInput.value=this._getDateFormat(t,e))
},isSelectable:function(t,e){return jindo.Calendar.isBetween(e,t.htOption.htSelectableDateFrom,t.htOption.htSelectableDateTo)
},setDate:function(t,e){if(this.isSelectable(t,e)){var i=this._getDateFormat(t,e),n={sText:i,nYear:e.nYear,nMonth:e.nMonth,nDate:e.nDate};
return this.fireEvent("beforeSelect",n)&&(this._setDate(t,e),this.getLayerManager().hide(),this.fireEvent("select",n)),!0
}return !1
},_getDateFormat:function(t,e){var i=e.nYear,n=e.nMonth,s=e.nDate;
10>n&&(n=("0"+1*n).toString()),10>s&&(s=("0"+1*s).toString());
var o=t.htOption.sDateFormat;
return o=o.replace(/yyyy/g,i).replace(/y/g,i.toString().substr(2,2)).replace(/mm/g,n).replace(/m/g,1*n).replace(/M/g,this.getCalendar().option("aMonthTitle")[n-1]).replace(/dd/g,s).replace(/d/g,1*s)
},_linkOnly:function(t){var e=this.getLayerManager();
e.setLinks([this.getCalendarLayer()]),"undefined"!=typeof t.elInput&&e.link(t.elInput),"undefined"!=typeof t.elButton&&e.link(t.elButton)
},_onActivate:function(){var t=this.getCalendarLayer();
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(t).preventTapHighlight(!0),this._wfMouseOverDate.attach(t,"mouseover"),this._wfMouseOutDate.attach(t,"mouseout"),this._wfClickDate.attach(t,"click"),this.getLayerManager().activate(),this.getCalendar().activate()
},_onDeactivate:function(){var t=this.getCalendarLayer();
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(t).preventTapHighlight(!1),this._wfMouseOverDate.detach(t,"mouseover"),this._wfMouseOutDate.detach(t,"mouseout"),this._wfClickDate.detach(t,"click").detach(t,"mouseover").detach(t,"mouseout"),this.getLayerManager().deactivate(),this.getCalendar().deactivate()
},_onFocusInput:function(t){this.fireEvent("focus",{element:t.element})
},_onClickLinkedElement:function(t){if(t.stop(jindo.$Event.CANCEL_DEFAULT),this.fireEvent("click",{element:t.element})){var e=this.getDatePickerSet(t.currentElement);
if(e){this._htSelectedDatePickerSet=e,this._linkOnly(e),e.nYear||(e.nYear=e.htOption.nYear),e.nMonth||(e.nMonth=e.htOption.nMonth),e.nDate||(e.nDate=e.htOption.nDate);
var i=e.nYear,n=e.nMonth;
this.getLayerManager().show(),this.getCalendar().draw(i,n),this.option("bUseLayerPosition")&&("undefined"!=typeof e.elLayerPosition?this.getLayerPosition().setElement(e.elLayerPosition).setPosition():this.getLayerPosition().setElement(e.elInput).setPosition())
}}},_getTargetDateElement:function(t){var e=this.getCalendar().option("sClassPrefix"),i=jindo.$Element(t).hasClass(e+"date")?t:jindo.$$.getSingle("."+e+"date",t);
return !i||i!=t&&1!=i.length?null:i
},_getTargetDateContainerElement:function(t){var e=this.getCalendar().option("sClassPrefix"),i=jindo.$$.getSingle("! ."+e+"week",t);
if(i){for(var n=t;
!jindo.$Element(n.parentNode).hasClass(e+"week");
){n=n.parentNode
}return jindo.$Element(n).hasClass(e+"unselectable")?null:n
}return null
},_setSelectedAgain:function(){if(this._elSelected){var t=this.getCalendar().option("sClassPrefix");
jindo.$Element(this._elSelected).addClass(t+"selected"),this._elSelected=null
}},_setAsideSelected:function(){if(!this._elSelected){var t=this.getCalendar().option("sClassPrefix");
this._elSelected=jindo.$$.getSingle("."+t+"selected",this.elWeekAppendTarget),this._elSelected&&jindo.$Element(this._elSelected).removeClass(t+"selected")
}},_onMouseOverDate:function(t){var e=this.getCalendar().option("sClassPrefix"),i=this._getTargetDateContainerElement(t.element);
if(i){var n=this.getCalendar().getDateOfElement(i),s={element:t.element,nYear:n.nYear,nMonth:n.nMonth,nDate:n.nDate,bSelectable:!1};
this._htSelectedDatePickerSet&&this.isSelectable(this._htSelectedDatePickerSet,n)&&(this._setAsideSelected(),jindo.$Element(i).addClass(e+"over"),s.bSelectable=!0),this.fireEvent("mouseover",s)
}},_onMouseOutDate:function(t){var e=this.getCalendar().option("sClassPrefix"),i=this._getTargetDateContainerElement(t.element);
if(i){var n=this.getCalendar().getDateOfElement(i),s={element:t.element,nYear:n.nYear,nMonth:n.nMonth,nDate:n.nDate,bSelectable:!1};
this._htSelectedDatePickerSet&&this.isSelectable(this._htSelectedDatePickerSet,n)&&(jindo.$Element(i).removeClass(e+"over"),s.bSelectable=!0,this._setSelectedAgain()),this.fireEvent("mouseout",s)
}else{this._setSelectedAgain()
}},_onClickDate:function(t){t.stop(jindo.$Event.CANCEL_DEFAULT);
var e=t.element,i=this._getTargetDateElement(e);
if(i){var n=this._getTargetDateContainerElement(i);
if(n){var s=this.getCalendar().getDateOfElement(n);
this.isSelectable(this._htSelectedDatePickerSet,s)&&this.setDate(this._htSelectedDatePickerSet,s)
}}}}).extend(jindo.UIComponent),jindo.DefaultTextValue=jindo.$Class({$init:function(t,e){this.option({sValue:"",bActivateOnload:!0}),this.option(e||{}),this._elBaseTarget=jindo.$(t),this._wfOnFocusAndBlur=jindo.$Fn(this._onFocusAndBlur,this),this.option("bActivateOnload")&&this.activate()
},getBaseElement:function(){return this._elBaseTarget
},setDefault:function(){return this.getBaseElement().value=this.option("sValue"),this
},setDefaultValue:function(t){var e=this.option("sValue");
return this.option("sValue",t),this.getBaseElement().value==e&&this.setDefault(),this
},getDefaultValue:function(){return this.option("sValue")
},paint:function(){return this
},_onActivate:function(){var t=this.getBaseElement();
""==t.value&&this.setDefault(),this._wfOnFocusAndBlur.attach(t,"focus").attach(t,"blur")
},_onDeactivate:function(){var t=this.getBaseElement();
this._wfOnFocusAndBlur.detach(t,"focus").detach(t,"blur")
},_onFocusAndBlur:function(t){var e=this._elBaseTarget,i=e.value;
switch(t.type){case"focus":i.replace(/\r\n/g,"\n")==this.getDefaultValue()&&(e.value="",e.select());
break;
case"blur":""==jindo.$S(i).trim().$value()&&this.setDefault()
}}}).extend(jindo.UIComponent),jindo.Dialog=jindo.$Class({$init:function(t){var e={sClassPrefix:"dialog-",LayerPosition:{sPosition:"inside-center",bAuto:!0}};
this.option(e),this.option(t||{}),this._bIsEventAttached=!1,this._bIsShown=!1,this._assignHTMLElements(),this._initLayerPosition()
},_assignHTMLElements:function(){this._elLayer=jindo.$('<div class="'+this.option("sClassPrefix")+'layer"></div>'),this._welLayer=jindo.$Element(this._elLayer),this._wfClick=jindo.$Fn(this._onClick,this),jindo.$Element.prototype.preventTapHighlight&&this._welLayer.preventTapHighlight(!0)
},_initLayerPosition:function(){this._oLayerPosition=new jindo.LayerPosition(document.body,this._elLayer,this.option("LayerPosition"))
},getLayer:function(){return this._elLayer
},getLayerPosition:function(){return this._oLayerPosition
},setLayerTemplate:function(t){this._sTemplate=t,this._template=jindo.$Template(this._sTemplate)
},getLayerTemplate:function(){return this._sTemplate
},show:function(t,e){if(!this.isShown()){this.attach(e),document.body.appendChild(this._elLayer),this._welLayer.html(this._template.process(t));
var i={elLayer:this._elLayer};
this.fireEvent("beforeShow",i)&&(this._welLayer.show(),this._attachEvents(),this.getLayerPosition().setPosition(),this._bIsShown=!0,this.fireEvent("show",i))
}},hide:function(){if(this.isShown()){var t={elLayer:this._elLayer};
this.fireEvent("beforeHide",t)&&(this.detachAll("close").detachAll("confirm").detachAll("cancel"),this._detachEvents(),this._welLayer.hide(),this._welLayer.leave(),this._bIsShown=!1,this.fireEvent("hide",t))
}},isShown:function(){return this._bIsShown
},_isEventAttached:function(){return this._bIsEventAttached
},_attachEvents:function(){return this._isEventAttached()||(this._wfClick.attach(this._elLayer,"click"),this._bIsEventAttached=!0),this
},_detachEvents:function(){return this._isEventAttached()&&(this._wfClick.detach(this._elLayer,"click"),this._bIsEventAttached=!1),this
},_onClick:function(t){var e,i,n,s=this.option("sClassPrefix");
(e=this._getClosest("."+s+"close",t.element))?this.fireEvent("close")&&this.hide():(i=this._getClosest("."+s+"confirm",t.element))?this.fireEvent("confirm")&&this.hide():(n=this._getClosest("."+s+"cancel",t.element))&&this.fireEvent("cancel")&&this.hide()
},_getClosest:function(t,e){return jindo.$$.test(e,t)?e:jindo.$$.getSingle("! "+t,e)
}}).extend(jindo.Component),jindo.DragArea=jindo.$Class({$init:function(t,e){this.option({sClassName:"draggable",bFlowOut:!0,bSetCapture:!0,nThreshold:0}),this.option(e||{}),this._el=t,this._bIE=jindo.$Agent().navigator().ie,this._htDragInfo={bIsDragging:!1,bPrepared:!1,bHandleDown:!1,bForceDrag:!1},this._wfOnMouseDown=jindo.$Fn(this._onMouseDown,this),this._wfOnMouseMove=jindo.$Fn(this._onMouseMove,this),this._wfOnMouseUp=jindo.$Fn(this._onMouseUp,this),this._wfOnDragStart=jindo.$Fn(this._onDragStart,this),this._wfOnSelectStart=jindo.$Fn(this._onSelectStart,this),this.activate()
},_findDraggableElement:function(t){if(1===t.nodeType&&jindo.$$.test(t,"input[type=text], textarea, select")){return null
}var e=this,i="."+this.option("sClassName"),n=function(t){return null===t?!1:e._el===document||e._el===t?!0:jindo.$Element(e._el).isParentOf(t)
},s=jindo.$$.test(t,i)?t:jindo.$$.getSingle("! "+i,t);
return n(s)||(s=null),s
},isDragging:function(){var t=this._htDragInfo;
return t.bIsDragging&&!t.bPrepared
},stopDragging:function(){return this._stopDragging(!0),this
},_stopDragging:function(t){if(this._wfOnMouseMove.detach(document,"mousemove"),this._wfOnMouseUp.detach(document,"mouseup"),this.isDragging()){var e=this._htDragInfo,i=jindo.$Element(e.elDrag);
e.bIsDragging=!1,e.bForceDrag=!1,e.bPrepared=!1,this._bIE&&this._elSetCapture&&(this._elSetCapture.releaseCapture(),this._elSetCapture=null),this.fireEvent("dragEnd",{elArea:this._el,elHandle:e.elHandle,elDrag:e.elDrag,nX:parseInt(i.css("left"),10)||0,nY:parseInt(i.css("top"),10)||0,bInterupted:t})
}},_onActivate:function(){this._wfOnMouseDown.attach(this._el,"mousedown"),this._wfOnDragStart.attach(this._el,"dragstart"),this._wfOnSelectStart.attach(this._el,"selectstart")
},_onDeactivate:function(){this.stopDragging(),this._wfOnMouseDown.detach(this._el,"mousedown"),this._wfOnDragStart.detach(this._el,"dragstart"),this._wfOnSelectStart.detach(this._el,"selectstart")
},attachEvent:function(){this.activate()
},detachEvent:function(){this.deactivate()
},isEventAttached:function(){return this.isActivating()
},startDragging:function(t){var e=this._findDraggableElement(t);
return e?(this._htDragInfo.bForceDrag=!0,this._htDragInfo.bPrepared=!0,this._htDragInfo.elHandle=e,this._htDragInfo.elDrag=e,this._wfOnMouseMove.attach(document,"mousemove"),this._wfOnMouseUp.attach(document,"mouseup"),!0):!1
},_onMouseDown:function(t){var e=t.mouse(!0);
if(/^mouse/.test(t.type)&&(!e.left||e.right||e.scrollbar)){return void this._stopDragging(!0)
}var i=this._findDraggableElement(t.element);
if(i){var n=t.pos(),s=this._htDragInfo;
s.bHandleDown=!0,s.bPrepared=!0,s.nButton=t._event.button,s.elHandle=i,s.elDrag=i,s.nPageX=n.pageX,s.nPageY=n.pageY,this.fireEvent("handleDown",{elHandle:i,elDrag:i,weEvent:t})&&this._wfOnMouseMove.attach(document,"mousemove"),this._wfOnMouseUp.attach(document,"mouseup"),t.stop(jindo.$Event.CANCEL_DEFAULT)
}},_onMouseMove:function(t){var e,i,n=this._htDragInfo,s=t.pos(),o={nX:s.pageX-n.nPageX,nY:s.pageY-n.nPageY};
if(n.bPrepared){var a=this.option("nThreshold"),r={};
if(!n.bForceDrag&&a){r.nPageX=s.pageX-n.nPageX,r.nPageY=s.pageY-n.nPageY;
var h=Math.sqrt(r.nPageX*r.nPageX+r.nPageY*r.nPageY);
if(a>h){return
}}if(this._bIE&&this.option("bSetCapture")&&(this._elSetCapture=this._el===document?document.body:this._findDraggableElement(t.element),this._elSetCapture&&this._elSetCapture.setCapture(!1)),e={elArea:this._el,elHandle:n.elHandle,elDrag:n.elDrag,htDiff:r,weEvent:t},n.bIsDragging=!0,n.bPrepared=!1,!this.fireEvent("dragStart",e)){return void (n.bPrepared=!0)
}var l=jindo.$Element(e.elDrag),c=l.offset();
n.elHandle=e.elHandle,n.elDrag=e.elDrag,n.nX=parseInt(l.css("left"),10)||0,n.nY=parseInt(l.css("top"),10)||0,n.nClientX=c.left+l.width()/2,n.nClientY=c.top+l.height()/2
}if(n.bForceDrag&&(o.nX=s.clientX-n.nClientX,o.nY=s.clientY-n.nClientY),e={elArea:this._el,elFlowOut:n.elDrag.parentNode,elHandle:n.elHandle,elDrag:n.elDrag,weEvent:t,nX:n.nX+o.nX,nY:n.nY+o.nY,nGapX:o.nX,nGapY:o.nY},this.fireEvent("beforeDrag",e)){var u=n.elDrag;
if(this.option("bFlowOut")===!1){var d=e.elFlowOut,f=[u.offsetWidth,u.offsetHeight],_=0,g=0;
d==document.body&&(_=document.body.scrollLeft||document.documentElement.scrollLeft,g=document.body.scrollTop||document.documentElement.scrollTop,d=null);
var p=d&&{w:Math.max(d.offsetWidth,d.scrollWidth),h:Math.max(d.offsetHeight,d.scrollHeight)};
if(d&&f[0]<=p.w&&f[1]<=p.h){i={nWidth:d.clientWidth,nHeight:d.clientHeight},_=d.scrollLeft,g=d.scrollTop
}else{var v=jindo.$Document().clientSize();
i={nWidth:v.width,nHeight:v.height}
}null!==e.nX&&(e.nX=Math.max(e.nX,_),e.nX=Math.min(e.nX,i.nWidth-f[0]+_)),null!==e.nY&&(e.nY=Math.max(e.nY,g),e.nY=Math.min(e.nY,i.nHeight-f[1]+g))
}null!==e.nX&&(u.style.left=e.nX+"px"),null!==e.nY&&(u.style.top=e.nY+"px"),this.fireEvent("drag",e)
}else{n.bIsDragging=!1
}},_onMouseUp:function(t){this._stopDragging(!1);
var e=this._htDragInfo;
e.bHandleDown=!1,this.fireEvent("handleUp",{weEvent:t,elHandle:e.elHandle,elDrag:e.elDrag})
},_onDragStart:function(t){this._findDraggableElement(t.element)&&t.stop(jindo.$Event.CANCEL_DEFAULT)
},_onSelectStart:function(t){(this.isDragging()||this._findDraggableElement(t.element))&&t.stop(jindo.$Event.CANCEL_DEFAULT)
}}).extend(jindo.UIComponent),jindo.DropArea=jindo.$Class({$init:function(t,e){this._el=jindo.$(t),this._wel=jindo.$Element(this._el),this.option({sClassName:"droppable",oDragInstance:null}),this.option(e||{}),this._waOveredDroppableElement=jindo.$A([]),this._elHandle=null,this._elDragging=null,this._wfMouseMove=jindo.$Fn(this._onMouseMove,this),this._wfMouseOver=jindo.$Fn(this._onMouseOver,this),this._wfMouseOut=jindo.$Fn(this._onMouseOut,this);
var i=this.option("oDragInstance");
if(i){var n=this;
i.attach({handleDown:function(t){n._elHandle=t.elHandle,n._waOveredDroppableElement.empty()
},dragStart:function(t){n._reCalculate(),n.fireEvent(t.sType,t),n._wfMouseMove.attach(document,"mousemove")
},drag:function(t){n._elDragging=t.elDrag
},dragEnd:function(t){var e={};
for(var i in t){e[i]=t[i]
}e.aDrop=n.getOveredLists().concat(),n._clearOveredDroppableElement(t.weEvent,t.bInterupted),n.fireEvent(t.sType,e),n._wfMouseMove.detach(document,"mousemove")
},handleUp:function(){n._elDragging=null,n._elHandle=null
}})
}},_addOveredDroppableElement:function(t){-1==this._waOveredDroppableElement.indexOf(t)&&(this._waOveredDroppableElement.push(t),this.fireEvent("over",{elHandle:this._elHandle,elDrag:this._elDragging,elDrop:t}))
},_fireMoveEvent:function(t,e,i,n){var s=(i.pageX-e.nLeft)/(e.nRight-e.nLeft),o=(i.pageY-e.nTop)/(e.nBottom-e.nTop);
this.fireEvent("move",{weEvent:n,elHandle:this._elHandle,elDrag:this._elDragging,elDrop:t,nRatioX:s,nRatioY:o})
},_removeOveredDroppableElement:function(t){var e=this._waOveredDroppableElement.indexOf(t);
-1!=e&&(this._waOveredDroppableElement.splice(e,1),this.fireEvent("out",{elHandle:this._elHandle,elDrag:this._elDragging,elDrop:t}))
},_clearOveredDroppableElement:function(t,e){if(e){return void this._waOveredDroppableElement.empty()
}for(var i;
i=this._waOveredDroppableElement.$value()[0];
){this._waOveredDroppableElement.splice(0,1),this.fireEvent("drop",{weEvent:t,elHandle:this._elHandle,elDrag:this._elDragging,elDrop:i})
}},getOveredLists:function(){return this._waOveredDroppableElement?this._waOveredDroppableElement.$value():[]
},_isChildOfDropArea:function(t){return this._el===document||this._el===t?!0:this._wel.isParentOf(t)
},_findDroppableElement:function(t){if(!t){return null
}var e="."+this.option("sClassName"),i=jindo.$$.test(t,e)?t:jindo.$$.getSingle("! "+e,t);
return this._isChildOfDropArea(t)||(i=null),i
},_isDragging:function(){var t=this.option("oDragInstance");
return t&&t.isDragging()
},_onMouseMove:function(t){if(this._isDragging()){var e=t.pos();
if(t.element==this._elDragging||jindo.$Element(this._elDragging).isParentOf(t.element)){for(var i,n,s=this._aItem,o=this._aItemRect,a=0;
(i=o[a])&&(n=s[a]);
a++){i.nLeft<=e.pageX&&e.pageX<=i.nRight&&i.nTop<=e.pageY&&e.pageY<=i.nBottom?(this._addOveredDroppableElement(n),this._fireMoveEvent(n,i,e,t)):this._removeOveredDroppableElement(n)
}}else{var r=this._findDroppableElement(t.element);
if(this.elPrevMove&&this.elPrevMove!=r&&(this._removeOveredDroppableElement(this.elPrevMove),this.elPrevMove=null),(r==t.element||!r&&document.elementFromPoint)&&(r=this._findDroppableElement(document.elementFromPoint(e.pageX,e.pageY))),!r){return
}this.elPrevMove=r,this._addOveredDroppableElement(r);
var h=jindo.$Element(r).offset(),l={nLeft:h.left,nTop:h.top,nRight:h.left+r.offsetWidth,nBottom:h.top+r.offsetHeight};
l.nLeft<=e.pageX&&e.pageX<=l.nRight&&l.nTop<=e.pageY&&e.pageY<=l.nBottom&&this._fireMoveEvent(r,l,e,t)
}}},_onMouseOver:function(t){if(this._isDragging()){var e=this._findDroppableElement(t.element);
e&&this._addOveredDroppableElement(e)
}},_onMouseOut:function(t){if(this._isDragging()){var e=this._findDroppableElement(t.element);
e&&t.relatedElement&&!jindo.$Element(t.relatedElement).isChildOf(t.element)&&this._removeOveredDroppableElement(e)
}},_getRectInfo:function(t){var e=jindo.$Element(t).offset();
return{nLeft:e.left,nTop:e.top,nRight:e.left+t.offsetWidth,nBottom:e.top+t.offsetHeight}
},_reCalculate:function(){var t=jindo.$$("."+this.option("sClassName"),this._el);
this._el.tagName&&jindo.$$.test(this._el,"."+this.option("sClassName"))&&t.push(this._el),this._aItem=t,this._aItemRect=[];
for(var e,i=0;
e=t[i];
i++){this._aItemRect.push(this._getRectInfo(e))
}}}).extend(jindo.Component),jindo.Tree=jindo.$Class({_bIsActivating:!1,_sTemplate:null,_htNodeData:null,_el:null,_elSelectedNode:null,$init:function(t,e){this.option({sClassPrefix:"tree-",sEventSelect:"click",sEventExpand:"dblclick",bExpandOnSelect:!0,bActivateOnload:!0}),this.option(e||{});
var i=this.option("sClassPrefix");
this.htClassName={sNode:i+"node",sLastNode:i+"last-node",sHasChild:i+"has-child",sButton:i+"button",sLabel:i+"label",sSelected:i+"selected",sCollapsed:i+"collapsed"},this.setNodeTemplate('<li class="{=sNodeClass}{if bLastNode} {=sLastNodeClass}{/if}"><div{if bHasChild} class="{=sHasChildClass}"{/if}><button class="{=sButtonClass}">+</button><span class="{=sLabelClass}" unselectable="on">{=sText}</span></div></li>'),this._htNodeData={},t=jindo.$(t),this._setRootList(t),this._wfSelectHandler=jindo.$Fn(this._onSelectEvent,this),this._wfExpandHandler=jindo.$Fn(this._onExpandEvent,this),this._makeNodeDataKeyFromHTML(),this.paintAllNodes();
var n=jindo.$$.getSingle("."+this.htClassName.sNode+" > ."+this.htClassName.sSelected,this.getRootList());
n&&this._setSelectedNode(this.getNode(n)),this.option("bActivateOnload")&&this.activate()
},_onActivate:function(){var t=this.getRootList();
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(t).preventTapHighlight(!0),this._wfSelectHandler.attach(t,this.option("sEventSelect")),this._wfExpandHandler.attach(t,this.option("sEventExpand"))
},_onDeactivate:function(){var t=this.getRootList();
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(t).preventTapHighlight(!1),this._wfSelectHandler.detach(t,this.option("sEventSelect")),this._wfExpandHandler.detach(t,this.option("sEventExpand"))
},_onSelectEvent:function(t){var e=t.element,i=this.getNode(e);
if(i){var n=jindo.$$.test(e,"."+this.htClassName.sButton)?e:jindo.$$.getSingle("! ."+this.htClassName.sButton,e);
if(n){return void (this.isCollapsed(i)?this.expandNode(i):this.collapseNode(i))
}var s=jindo.$$.test(e,"."+this.htClassName.sLabel)?e:jindo.$$.getSingle("! ."+this.htClassName.sLabel,e);
if(s){var o=this.getPartsOfNode(i);
o.elItem&&this.fireEvent(t.type,{element:i,weEvent:t})&&this.selectNode(i)
}}},_onExpandEvent:function(t){var e=t.element,i=this.getNode(e);
if(i&&this.hasChild(i)){var n=jindo.$$.test(e,"."+this.htClassName.sLabel)?e:jindo.$$.getSingle("! ."+this.htClassName.sLabel,e);
if(n){var s={element:i,weEvent:t},o=this.getPartsOfNode(i);
o.elItem&&jindo.$Element(o.elItem).visible()&&(this.isCollapsed(i)?this.fireEvent(t.type,s)&&this.expandNode(i):this._bExpandOnSelect||this.fireEvent(t.type,s)&&this.collapseNode(i))
}}},paintNode:function(t,e){if("undefined"==typeof e&&(e=!0),this._paintNode(t),e){for(var i=this.getChildNodes(t),n=0;
n<i.length;
n++){this.paintNode(i[n])
}}return this
},paintAllNodes:function(t){return this.paintNode(t||this.getRootNode()),this
},_paintNode:function(t){if(t){var e=this.getPartsOfNode(t),i=this.getChildNodes(t),n=this.getNodeData(t),s=jindo.$Element(t),o=jindo.$Element(e.elItem);
if(delete n._aChildren,this.hasChild(t)){o.addClass(this.htClassName.sHasChild),n.bHasChild=!0,n._aChildren=[];
var a=this;
jindo.$A(i).forEach(function(t){n._aChildren.push(a.getNodeData(t))
})
}else{n.bHasChild=!1,o.removeClass(this.htClassName.sHasChild),e.elChild&&e.elChild.parentNode.removeChild(e.elChild)
}n.bLastNode=jindo.$$.getSingle("~ ."+this.htClassName.sNode,t)?!1:!0,n.bLastNode?s.addClass(this.htClassName.sLastNode):s.removeClass(this.htClassName.sLastNode),t.parentNode.style.zoom=1
}},getNodeTemplate:function(){return this._sTemplate
},setNodeTemplate:function(t){return this._sTemplate=t,this
},getChildListOfNode:function(t){return jindo.$$.getSingle("ul",t)
},getRootList:function(){return this._el
},_setRootList:function(t){this._el=t
},getNode:function(t){var e=jindo.$$.test(t,"."+this.htClassName.sNode)?t:jindo.$$.getSingle("! ."+this.htClassName.sNode,t);
return e&&jindo.$Element(e).isChildOf(this.getRootList())?e:null
},getPartsOfNode:function(t){var e=jindo.$$("> *",t);
return{elItem:e[0],elChild:e[1]}
},getNodeType:function(t){return t===this.getRootNode()?"root":this.getChildNodes(t).length>0?"internal":"leaf"
},getRootNode:function(){return this._elRootNode?this._elRootNode:(this._elRootNode=jindo.$$.getSingle("."+this.htClassName.sNode,this.getRootList()),this._elRootNode)
},getAllNodes:function(){return jindo.$$("."+this.htClassName.sNode,this.getRootList())
},getChildNodes:function(t){var e=this.getChildListOfNode(t);
return e?jindo.$$("> ."+this.htClassName.sNode,e):[]
},hasChild:function(t){var e=this.getPartsOfNode(t);
return e.elChild&&e.elChild.getElementsByTagName("li")[0]?!0:!1
},getParentNode:function(t){var e=this.getRootNode();
return t===e?null:this.getNode(t.parentNode)
},getPreviousNode:function(t){var e=jindo.$$.getSingle("!~ ."+this.htClassName.sNode,t);
return e?this.getNode(e):null
},getNextNode:function(t){var e=jindo.$$.getSingle("~ ."+this.htClassName.sNode,t);
return e?this.getNode(e):null
},getSelectedNode:function(){return this._elSelectedNode
},_setSelectedNode:function(t){this._elSelectedNode=t
},isCollapsed:function(t){return jindo.$Element(t).hasClass(this.htClassName.sCollapsed)
},getNodeDepth:function(t){for(var e=-1;
t&&t!=this.getRootList();
t=t.parentNode){jindo.$$.test(t,"."+this.htClassName.sNode)&&e++
}return e
},setNodeData:function(t,e){var i=this._getNodeDataKey(t);
delete e._aChildren,delete e.sLabel;
for(var n in e){this._htNodeData[i][n]=e[n]
}return this
},getNodeLabelElement:function(t){return jindo.$$.getSingle("."+this.htClassName.sLabel,t)
},getNodeLabel:function(t){return jindo.$Element(this.getNodeLabelElement(t)).html()
},setNodeLabel:function(t,e){var i=this._getNodeDataKey(t);
return this._htNodeData[i].sLabel=e,jindo.$Element(this.getNodeLabelElement(t)).html(e),this
},_makeNodeDataKeyFromHTML:function(){for(var t=this.getAllNodes(),e=0;
e<t.length;
e++){var i=t[e];
this._makeNodeDataKey(i),this._makeNodeData(i)
}},_makeNodeDataKey:function(t){var e=jindo.$Element(t),i=this._getNodeDataKey(t);
if(i){return !1
}var n=this.option("sClassPrefix"),s=("data-"+(new Date).getTime()+parseInt(10000000*Math.random(),10)).toString(),o=n+s;
e.addClass(o);
var a=this._getNodeDataKey(t);
return this._htNodeData[a]={},a
},_makeNodeData:function(t){var e=this.getNodeData(t);
e.element=t,e.sLabel=jindo.$Element(this.getNodeLabelElement(t)).text(),e.bLastNode=jindo.$$.getSingle("~ ."+this.htClassName.sNode,t)?!1:!0
},_getNodeDataKey:function(t){var e=t.className,i=this.option("sClassPrefix"),n=new RegExp("("+i+"data-[0-9]+)");
return n.test(e)?RegExp.$1:null
},getNodeData:function(t){return t?this._htNodeData[this._getNodeDataKey(t)]:this._htNodeData
},_clearNodeData:function(t){var e=this.getParentNode(t),i=this.getNodeData(t),n=this._getNodeDataKey(t);
if(e){var s=this.getNodeData(e);
if(s){var o=jindo.$A(s._aChildren).indexOf(i);
o>-1&&s._aChildren.splice(o,1)
}}var a=this;
this.hasChild(t)&&jindo.$A(this.getChildNodes(t)).forEach(function(t){a._clearNodeData(t)
}),delete this._htNodeData[n]
},expandNode:function(t,e){if(this.fireEvent("beforeExpand",{element:t})){var i=this.getPartsOfNode(t),n=[];
jindo.$$.test(i.elItem,"."+this.htClassName.sHasChild)&&n.push(t),e&&(n=n.concat(jindo.$$("."+this.htClassName.sHasChild,t)));
for(var s,o=0;
s=n[o];
o++){var a=this.getNode(s);
jindo.$Element(a).removeClass(this.htClassName.sCollapsed),this.fireEvent("expand",{element:a})
}return this
}},collapseNode:function(t,e){if(this.fireEvent("beforeCollapse",{element:t})){var i=this.getPartsOfNode(t),n=[];
jindo.$$.test(i.elItem,"."+this.htClassName.sHasChild)&&n.push(t),e&&(n=n.concat(jindo.$$("."+this.htClassName.sHasChild,t)));
for(var s,o=0;
s=n[o];
o++){var a=this.getNode(s);
jindo.$Element(a).addClass(this.htClassName.sCollapsed),this.fireEvent("collapse",{element:a})
}return this
}},selectNode:function(t){var e=this.getPartsOfNode(t),i=this.getSelectedNode(),n=e.elItem;
if(!this.fireEvent("beforeSelect",{element:t})){return !1
}if(i!=t&&(this.deselectNode(),jindo.$Element(n).addClass(this.htClassName.sSelected),this._setSelectedNode(t)),this.fireEvent("select",{element:t}),this.option("bExpandOnSelect")&&i!=t&&this.isCollapsed(t)){var s=this;
this._bExpandOnSelect=!0,setTimeout(function(){s._bExpandOnSelect=!1
},500),this.expandNode(t)
}return !0
},deselectNode:function(){var t=this.getSelectedNode();
return t&&jindo.$Element(this.getPartsOfNode(t).elItem).removeClass(this.htClassName.sSelected),this._setSelectedNode(null),this
},_createChild:function(t){var e=this.getChildListOfNode(t);
e||(e=jindo.$("<ul>"),t.appendChild(e));
try{return e
}finally{e=null
}},removeNode:function(t){if(!t||t===this.getRootNode()){return this.clearNode(t),this
}var e=this.getNodeData(t),i=e.bLastNode?this.getPreviousNode(t):null,n=1==t.parentNode.childNodes.length,s=this.getParentNode(t);
if(this._clearNodeData(t),t.parentNode.removeChild(t),this.selectNode(s),this._paintNode(i),n){var o=this.getNodeData(s);
o.bHasChild=!1
}return this._paintNode(s),this
},clearNode:function(t){var e=this.getChildListOfNode(t);
if(e){for(var i,n=e.getElementsByTagName("li"),s=0;
i=n[s];
s++){this._clearNodeData(i)
}e.parentNode.removeChild(e);
var o=this.getNodeData(t);
return o.bHasChild=!1,this._paintNode(t),!0
}return !1
},clearTree:function(){return this.clearNode(this.getRootNode()),this
},_moveNodes:function(t,e,i){for(var n,s=0;
n=e[s];
s++){i(n)
}},appendNode:function(t,e){if(!(e instanceof Array)){return arguments.callee.call(this,t,[e])
}var i=this,n=this._createChild(t);
return this._moveNodes(t,e,function(t){var e=null;
e=i.getParentNode(t),n.appendChild(t),e&&(i.paintNode(e,!1),jindo.$A(i.getChildNodes(e)).forEach(function(t){i.paintNode(t,!1)
}))
}),this.paintNode(t,!1),jindo.$A(this.getChildNodes(t)).forEach(function(t){i.paintNode(t,!1)
}),this
},insertNodeBefore:function(t,e){if(t!=this.getRootNode()){if(!(e instanceof Array)){return arguments.callee.call(this,t,[e])
}var i=this,n=t.parentNode;
return this._moveNodes(t,e,function(e){var s=null;
s=i.getNode(n),n.insertBefore(e,t),s&&jindo.$A(i.getChildNodes(s)).forEach(function(t){i.paintNode(t,!1)
})
}),this
}},insertNodeAfter:function(t,e){if(t!=this.getRootNode()){if(!(e instanceof Array)){return arguments.callee.call(this,t,[e])
}var i=this,n=t.parentNode,s=t;
return this._moveNodes(t,e,function(t){var e=null;
e=i.getNode(n),n.insertBefore(t,s.nextSibling),s=t,e&&jindo.$A(i.getChildNodes(e)).forEach(function(t){i.paintNode(t,!1)
})
}),this
}},_getCode:function(t){if(t instanceof Array){for(var e=[],i=this.getNodeTemplate(),n=0;
n<t.length;
n++){var s=t[n],o={sTemplate:i,htData:s};
this.fireEvent("beforeProcessData",o);
var a={sNodeClass:this.htClassName.sNode,bLastNode:n==t.length-1?!0:!1,sLastNodeClass:this.htClassName.sLastNode,bHasChild:"undefined"!=typeof s._aChildren&&s._aChildren.length>0?!0:!1,sHasChildClass:this.htClassName.sHasChild,sCollapsedClass:this.htClassName.sCollapsed,sButtonClass:this.htClassName.sButton,sLabelClass:this.htClassName.sLabel,sText:s.sLabel,htData:s},r=jindo.$Template(o.sTemplate).process(a);
r=this._getChildCode(s._aChildren,r),e.push(r)
}return e.join("\n")
}},_getChildCode:function(t,e){var i=t?this._getCode(t):"";
if(i){var n=!1;
e=e.replace(/(<ul(\s[^>]*)*>)(<\/ul>)/i,function(t,e,s,o){return n=!0,e+i+o
}),n||(e=e.replace(/<\/li>/i,function(t){return"\n<ul>"+i+"</ul>\n"+t
}))
}return e
},_setData:function(t,e){for(var i=jindo.$$("> ."+this.htClassName.sNode,t),n=0,s=i.length;
s>n;
n++){var o=i[n],a=e[n],r=this._makeNodeDataKey(o);
a.bLastNode=n===s-1,this._htNodeData[r]=a;
var h="undefined"!=typeof a._aChildren&&a._aChildren.length||a.bHasChild?!0:!1;
a.bHasChild==h&&this._setData(this.getChildListOfNode(o),a._aChildren)
}},createNode:function(t){var e=jindo.$("<ul>");
e.innerHTML=this._getCode(t);
var i=jindo.$$("> ."+this.htClassName.sNode,e);
return this._setData(e,t),i
},getNodeRawData:function(t){return this.getNodeData(t)
},getSelectCount:function(){return this
}}).extend(jindo.UIComponent),jindo.DynamicTree=jindo.$Class({$init:function(t,e){var i={sUrl:"",sRequestType:"jsonp",sRequestMethod:"get",htRequestParameter:{}};
this.option(i),this.option(e||{}),this._attachEvents(),this._initAjax()
},_attachEvents:function(){this.attach("beforeExpand",function(t){var e=t.element,i=this;
if(!i.getNodeData(e).hasOwnProperty("_aChildren")||!i.getNodeData(e)._aChildren.length){var n=i.option("htRequestParameter");
n.key=i._getNodeDataKey(e);
var s={element:e,htRequestParameter:n};
i.fireEvent("request",s)?i._request(s.htRequestParameter):t.stop()
}})
},_initAjax:function(){var t=this.option(),e=this.option("sClassPrefix"),i=t.sUrl,n=this;
this._oAjax=jindo.$Ajax(i,{type:t.sRequestType,method:t.sRequestMethod,onload:function(t){try{var i={htResponseJSON:t.json()};
if(!n.fireEvent("response",i)){return
}var s=n.createNode(i.htResponseJSON.aChildren),o=jindo.$$.getSingle("."+i.htResponseJSON.sKey,n.getRootList());
if(n.getChildListOfNode(o)){return
}n.appendNode(o,s),jindo.$A(s).forEach(function(t){jindo.$$.getSingle("."+e+"has-child",t)&&jindo.$Element(t).addClass(e+"collapsed")
})
}catch(a){}}})
},_request:function(t){this._oAjax.abort(),this._oAjax.request(t)
},hasChild:function(t){return this._htNodeData[this._getNodeDataKey(t)].bHasChild||this.getChildNodes(t).length>0
},_makeNodeData:function(t){var e=this.getNodeData(t);
e.bHasChild=!1,jindo.$Element(this.getPartsOfNode(t).elItem).hasClass(this.option("sClassPrefix")+"has-child")&&(e.bHasChild=!0),this.$super._makeNodeData(t)
}}).extend(jindo.Tree),jindo.FileUploader=jindo.$Class({_bIsActivating:!1,_aHiddenInput:[],$init:function(t,e){var i={sUrl:"",sCallback:"",htData:{},sFiletype:"*",sMsgNotAllowedExt:"업로드가 허용되지 않는 파일형식입니다",bAutoUpload:!1,bAutoReset:!0,bActivateOnload:!0};
this.option(i),this.option(e||{}),this._el=jindo.$(t),this._wel=jindo.$Element(this._el),this._elForm=this._el.form,this._aHiddenInput=[],this.constructor._oCallback={},this._wfChange=jindo.$Fn(this._onFileSelectChange,this),this._sFunctionName=null,this.option("bActivateOnload")&&this.activate()
},_appendIframe:function(){var t="tmpFrame_"+this._makeUniqueId();
this._welIframe=jindo.$Element(jindo.$('<iframe name="'+t+'" src="">')).css({position:"absolute",width:"1px",height:"1px",left:"-100px",top:"-100px"}),document.body.appendChild(this._welIframe.$value())
},_removeIframe:function(){this._welIframe&&this._welIframe.leave()
},getBaseElement:function(){return this.getFileSelect()
},getFileSelect:function(){return this._el
},getFormElement:function(){return this._elForm
},upload:function(){this._appendIframe();
var t=this.getFormElement(),e=jindo.$Element(t),i=this._welIframe.attr("name"),n=this._sFunctionName=i+"_func",s=this.option("sUrl");
e.attr({target:i,action:s}),this._aHiddenInput.push(this._createElement("input",{type:"hidden",name:"callback",value:this.option("sCallback")})),this._aHiddenInput.push(this._createElement("input",{type:"hidden",name:"callback_func",value:n}));
for(var o in this.option("htData")){this._aHiddenInput.push(this._createElement("input",{type:"hidden",name:o,value:this.option("htData")[o]}))
}for(var a=0;
a<this._aHiddenInput.length;
a++){t.appendChild(this._aHiddenInput[a])
}this.constructor._oCallback[n+"_success"]=jindo.$Fn(function(t){this.option("bAutoReset")&&this.reset(),this._revertFormAttr(),this.fireEvent("success",{htResult:t}),this._clear()
},this).bind(),this.constructor._oCallback[n+"_error"]=jindo.$Fn(function(t){this.option("bAutoReset")&&this.reset(),this._revertFormAttr(),this.fireEvent("error",{htResult:t}),this._clear()
},this).bind(),t.submit()
},reset:function(){var t=jindo.$("<form>");
return this._wel.wrap(t),t.reset(),jindo.$Element(t).replace(this._el),this._clear(),this
},_revertFormAttr:function(){var t=this.getFormElement(),e=jindo.$Element(t);
e.attr({target:this._sPrevTarget,action:this._sAction})
},_onActivate:function(){var t=this.getFormElement(),e=jindo.$Element(t);
this._sPrevTarget=e.attr("target"),this._sAction=e.attr("action"),this._el.value="",this._wfChange.attach(this._el,"change")
},_onDeactivate:function(){this._wfChange.detach(this._el,"change")
},_makeUniqueId:function(){return(new Date).getMilliseconds()+Math.floor(100000*Math.random())
},_createElement:function(t,e){var i=jindo.$("<"+t+">"),n=jindo.$Element(i);
for(var s in e){n.attr(s,e[s])
}return i
},_checkExtension:function(t){for(var e,i=this.option("sFiletype").split(";"),n=0;
n<i.length;
n++){if(e="*.*"==i[n]?"*":i[n],e=e.replace(/^\s+|\s+$/,""),e=e.replace(/\./g,"\\."),e=e.replace(/\*/g,"[^\\/]+"),new RegExp(e+"$","gi").test(t)){return !0
}}return !1
},_onFileSelectChange:function(t){var e=t.element.value,i=this._checkExtension(e),n={sValue:e,bAllowed:i,sMsgNotAllowedExt:this.option("sMsgNotAllowedExt")};
e.length&&this.fireEvent("select",n)&&(i?this.option("bAutoUpload")&&this.upload():alert(n.sMsgNotAllowedExt))
},_clear:function(){null!=this._sFunctionName&&(delete this.constructor._oCallback[this._sFunctionName+"_success"],delete this.constructor._oCallback[this._sFunctionName+"_error"],this._sFunctionName=null);
for(var t=0,e=this._aHiddenInput.length;
e>t;
t++){jindo.$Element(this._aHiddenInput[t]).leave()
}this._aHiddenInput.length=0,this._removeIframe()
}}).extend(jindo.UIComponent),jindo.FloatingLayer=jindo.$Class({$init:function(t,e){this._el=jindo.$(t),this._wel=jindo.$Element(t),this.option({nDelay:0,nDuration:500,fEffect:jindo.Effect.easeOut,bActivateOnload:!0}),this.option(e||{}),this._htPos=this._getPosition(),this._oTransition=(new jindo.Transition).fps(60),this._oTimer=new jindo.Timer,this._wfScroll=jindo.$Fn(this._onScroll,this),this.option("bActivateOnload")&&this.activate()
},getTransition:function(){return this._oTransition
},getTimer:function(){return this._oTimer
},_onActivate:function(){var t=this;
setTimeout(function(){t._onScroll()
},0),this._wfScroll.attach(window,"scroll").attach(window,"resize")
},_onDeactivate:function(){this._wfScroll.detach(window,"scroll").detach(window,"resize")
},_getPosition:function(){var t=this._el,e=this._wel,i=t.style.left,n=t.style.right,s=t.style.top,o=t.style.bottom,a={sAlignX:i?"left":n?"right":null,sAlignY:s?"top":o?"bottom":null},r=e.offset(),h=jindo.$Document().clientSize();
switch(a.sAlignX){case"left":a.nX=r.left;
break;
case"right":a.nX=Math.max(h.width-r.left-e.width(),parseFloat(n))
}switch(a.sAlignY){case"top":a.nY=r.top;
break;
case"bottom":a.nY=Math.max(h.height-r.top-e.height(),parseFloat(o))
}return a
},_onScroll:function(){var t=this;
this._oTimer.start(function(){t._paint()
},this.option("nDelay"))
},_paint:function(){var t,e,i=document.documentElement||document,n=document.body,s=this._el,o=this._wel,a=this._htPos,r={},h=jindo.$Element(s).offset(),l={nX:null,nY:null};
if(a.sAlignX){switch(a.sAlignX){case"left":r.x=i.scrollLeft||n.scrollLeft,t=h.left-r.x;
break;
case"right":r.x=(i.scrollLeft||n.scrollLeft)+jindo.$Document().clientSize().width,t=r.x-(h.left+o.width())
}l.nX=parseFloat(o.css(a.sAlignX))+(a.nX-t)
}if(a.sAlignY){switch(a.sAlignY){case"top":r.y=i.scrollTop||n.scrollTop,e=h.top-r.y;
break;
case"bottom":r.y=(i.scrollTop||n.scrollTop)+jindo.$Document().clientSize().height,e=r.y-(h.top+o.height())
}l.nY=parseFloat(o.css(a.sAlignY))+(a.nY-e)
}if(this.fireEvent("beforeMove",l)){var c={},u=this.option("fEffect");
null!==l.nX&&(c["@"+a.sAlignX]=u(l.nX+"px")),null!==l.nY&&(c["@"+a.sAlignY]=u(l.nY+"px"));
var d=this;
this._oTransition.abort().start(this.option("nDuration"),s,c).start(function(){d.fireEvent("move")
})
}}}).extend(jindo.UIComponent),jindo.Foggy=jindo.$Class({_elFog:null,_bFogAppended:!1,_oExcept:null,_bFogVisible:!1,_bFogShowing:!1,_oTransition:null,$init:function(t){this.option({sClassName:"fog",nShowDuration:200,nShowOpacity:0.5,nHideDuration:200,nHideOpacity:0,fShowEffect:jindo.Effect.linear,fHideEffect:jindo.Effect.linear,nFPS:15,nZIndex:32000}),this.option(t||{}),this._elFog=jindo.$('<div class="'+this.option("sClassName")+'">'),this._welFog=jindo.$Element(this._elFog),document.body.insertBefore(this._elFog,document.body.firstChild),this._welFog.opacity(this.option("nHideOpacity")),this._welFog.hide(),this._oExcept={},this._oTransition=(new jindo.Transition).fps(this.option("nFPS")),this._fOnResize=jindo.$Fn(this._fitFogToDocument,this),this._fOnScroll=jindo.$Fn(this._fitFogToDocumentScrollSize,this)
},_getScroll:function(t){return{top:window.pageYOffset||document[t._docKey].scrollTop,left:window.pageXOffset||document[t._docKey].scrollLeft}
},_fitFogToDocument:function(){var t=jindo.$Document();
this._elFog.style.left=this._getScroll(t).left+"px",this._elFog.style.width="100%";
var e=this;
clearTimeout(this._nTimer),this._nTimer=null,this._nTimer=setTimeout(function(){var i=t.clientSize();
e._elFog.style.top=e._getScroll(t).top+"px",e._elFog.style.height=i.height+"px",e._elFog.style.left=e._getScroll(t).left+"px"
},100)
},_fitFogToDocumentScrollSize:function(){var t=jindo.$Document().scrollSize();
this._elFog.style.left="0",this._elFog.style.top="0",this._elFog.style.width=t.width+"px",this._elFog.style.height=t.height+"px"
},getFog:function(){return this._elFog
},isShown:function(){return this._bFogVisible
},isShowing:function(){return this._bFogShowing
},show:function(t){if(!this._bFogVisible&&this.fireEvent("beforeShow")){if(t){this._oExcept.element=t;
var e=jindo.$Element(t).css("position");
"static"==e&&(t.style.position="relative"),this._oExcept.position=t.style.position,this._oExcept.zIndex=t.style.zIndex,t.style.zIndex=this.option("nZIndex")+1
}this._elFog.style.zIndex=this.option("nZIndex"),this._elFog.style.display="none",this._fitFogToDocument(),this._fOnResize.attach(window,"resize"),this._fOnScroll.attach(window,"scroll"),this._elFog.style.display="block";
var i=this;
this._bFogShowing=!0,this._oTransition.abort().start(this.option("nShowDuration"),this._elFog,{"@opacity":this.option("fShowEffect")(this.option("nShowOpacity"))}).start(function(){i._bFogVisible=!0,i._bFogShowing=!1,i.fireEvent("show")
})
}},hide:function(){if((this._bFogVisible||this._bFogShowing)&&this.fireEvent("beforeHide")){var t=this;
this._oTransition.abort().start(this.option("nHideDuration"),this._elFog,{"@opacity":this.option("fHideEffect")(this.option("nHideOpacity"))}).start(function(){t._elFog.style.display="none";
var e=t._oExcept.element;
e&&(e.style.position=t._oExcept.position,e.style.zIndex=t._oExcept.zIndex),t._oExcept={},t._fOnResize.detach(window,"resize"),t._fOnScroll.detach(window,"scroll"),t._bFogVisible=!1,t.fireEvent("hide")
})
}}}).extend(jindo.Component),jindo.TextRange=jindo.$Class({$init:function(t,e){this.option({bActivateOnload:!0}),this.option(e||{}),this._el=jindo.$(t),this._bFocused=!1,this._wfFocus=jindo.$Fn(function(){this._bFocused=!0
},this),this._wfBlur=jindo.$Fn(function(){this._bFocused=!1
},this),this.option("bActivateOnload")&&this.activate()
},_onActivate:function(){this._wfFocus.attach(this._el,"focus").attach(this._el,"keydown"),this._wfBlur.attach(this._el,"blur")
},_onDeactivate:function(){this._wfFocus.detach(this._el,"focus").detach(this._el,"keydown"),this._wfBlur.detach(this._el,"blur")
},hasFocus:function(){return this._bFocused
},getSelection:function(){var t,e,i,n,s,o,a=this._el;
if(isNaN(this._el.selectionStart)){var r=document.selection.createRange();
r&&r.parentElement()==a&&(o=a.value.length,t=a.value.replace(/\r\n/g,"\n"),e=a.createTextRange(),e.moveToBookmark(r.getBookmark()),i=a.createTextRange(),i.collapse(!1),e.compareEndPoints("StartToEnd",i)>-1?n=s=o:(n=-e.moveStart("character",-o),n+=t.slice(0,n).split("\n").length-1,e.compareEndPoints("EndToEnd",i)>-1?s=o:(s=-e.moveEnd("character",-o),s+=t.slice(0,s).split("\n").length-1)))
}else{n=a.selectionStart,s=a.selectionEnd
}return[n,s]
},setSelection:function(t,e){var i=this._el;
if("undefined"==typeof e&&(e=t),i.setSelectionRange){i.setSelectionRange(t,e)
}else{if(i.createTextRange){var n=i.createTextRange();
n.collapse(!0),n.moveStart("character",t),n.moveEnd("character",e-t),n.select()
}}},copy:function(){this._bFocused||this._el.focus();
var t=this.getSelection();
return this._el.value.substring(t[0],t[1])
},paste:function(t){this._bFocused||this._el.focus();
var e=this._el,i=this.getSelection(),n=e.value,s=n.substr(0,i[0]),o=n.substr(i[1]);
n=s+t+o,e.value=n,this.setSelection(i[0]+t.length)
},cut:function(){var t=this.copy();
return this.paste(""),t
}}).extend(jindo.UIComponent),jindo.WatchInput=jindo.$Class({_bTimerRunning:!1,_bFocused:!1,_sPrevValue:"",$init:function(t,e){var i={nInterval:100,bUseTimerOnIE:!1,sKeyEvent:"keyup",bPermanent:!1,bActivateOnload:!0};
this.option(i),this.option(e||{}),this._elInput=jindo.$(t),this._oTimer=new jindo.Timer,this._bIE=jindo.$Agent().navigator().ie,this._wfFocus=jindo.$Fn(this._onFocus,this),this._wfBlur=jindo.$Fn(this._onBlur,this),this._wfKeyEvent=jindo.$Fn(this._onKeyEvent,this),this._wfStartTimer=jindo.$Fn(this._startTimer,this),this._wfStopTimer=jindo.$Fn(this._stopTimer,this),this.option("bActivateOnload")&&this.activate(!0)
},getInput:function(){return this._elInput
},setInputValue:function(t){return this.getInput().value=t,this.setCompareValue(t),this
},getCompareValue:function(){return this._sPrevValue
},setCompareValue:function(t){return this._sPrevValue=t,this
},fireChangeEvent:function(){var t=this.getInput(),e=t.value;
return this.setCompareValue(e),this.fireEvent("change",{elInput:t,sText:e}),this
},start:function(t){return this.activate(t||!1)
},stop:function(){return this.deactivate()
},_onActivate:function(t){this.setCompareValue("");
var e=this.getInput();
if(this._wfFocus.attach(e,"focus"),this._bIE&&!this.option("bUseTimerOnIE")){this.fireEvent("start"),this._wfKeyEvent.attach(e,this.option("sKeyEvent"))
}else{if(this._isTimerRunning()){return
}this.fireEvent("start"),this.option("bPermanent")?this._startTimer():(this._wfStartTimer.attach(e,"focus"),this._wfStopTimer.attach(e,"blur"))
}this._wfBlur.attach(e,"blur"),t&&this.compare()
},_onDeactivate:function(){var t=this.getInput();
this._wfFocus.detach(t,"focus"),this._wfKeyEvent.detach(t,this.option("sKeyEvent")),this._stopTimer(),this._wfStartTimer.detach(t,"focus"),this._wfStopTimer.detach(t,"blur"),this._wfBlur.detach(t,"blur"),this.fireEvent("stop")
},getInterval:function(){return this.option("nInterval")
},setInterval:function(t){return this.option("nInterval",t),this
},_isTimerRunning:function(){return this._bTimerRunning
},_startTimer:function(){if(!this._isTimerRunning()){this._bTimerRunning=!0,this.fireEvent("timerStart"),this.compare();
var t=this;
this._oTimer.start(function(){return t.compare(),!0
},this.getInterval())
}},_stopTimer:function(){this._isTimerRunning()&&(this._oTimer.abort(),this._bTimerRunning=!1,this.compare(),this.fireEvent("timerStop"))
},_onKeyEvent:function(){this.compare()
},_onFocus:function(){this._bFocused=!0,this.fireEvent("focus")
},_onBlur:function(){this._bFocused=!1,this.fireEvent("blur")
},compare:function(){return this.getInput().value!=this.getCompareValue()&&this.fireChangeEvent(),this
}}).extend(jindo.UIComponent),jindo.Formatter=jindo.$Class({_aMarks:["\x00","￿"],_sPrevValue:null,_oTextRange:null,_bFakeFocus:!1,$init:function(t,e){this._el=jindo.$(t),this.option({bPaintOnload:!0,bActivateOnload:!0,WatchInput:{nInterval:100,bPermanent:!0,bActivateOnload:!1}}),this.option(e||{}),this.isOpera=jindo.$Agent().navigator.opera;
var i=this;
this._wfRealBlur=jindo.$Fn(this._realBlur,this),this._wfRealFocus=jindo.$Fn(this._realFocus,this),this._oTextRange=new jindo.TextRange(t),this._oWatchInput=new jindo.WatchInput(t,this.option("WatchInput")).attach({change:function(){setTimeout(function(){i.paint()
},1)
}}),this.option("bPaintOnload")&&setTimeout(function(){i.paint()
},1),this.option("bActivateOnload")&&this.activate()
},getWatchInput:function(){return this._oWatchInput
},_splice:function(t,e,i,n){return t.slice(0,e)+n+t.slice(e+i)
},setValue:function(t){return this._el.value=t,this.paint(),this
},paint:function(){var t,e,i=this._el,n=this._oTextRange,s=this._aMarks,o=i.value.toString(),a=n.hasFocus();
if(a){t=[-1,-1];
try{t=n.getSelection()
}catch(r){}o=this._splice(this._splice(o,t[1],0,s[1]),t[0],0,s[0])
}if(e={elInput:i,sText:o,sStartMark:s[0],sEndMark:s[1]},this.fireEvent("beforeChange",e)){var h=e.sText;
if(a){var l=h.indexOf(s[0]);
l>-1&&(h=this._splice(h,l,1,"")),t=[l],t[1]=h.indexOf(s[1]),t[1]>-1&&(h=this._splice(h,t[1],1,""));
var c=this;
setTimeout(function(){c._bFakeFocus=!0,!this.isOpera||i.blur()
},1),setTimeout(function(){c._oWatchInput.setInputValue(h),i.focus();
try{n.setSelection(t[0],t[1])
}catch(e){}c.fireEvent("change",{elInput:i})
},2),setTimeout(function(){c._bFakeFocus=!1
},20)
}else{this._oWatchInput.setInputValue(h),this.fireEvent("change",{elInput:i})
}}return this
},_realBlur:function(){this._bFakeFocus||(this.getWatchInput().stop(),this.fireEvent("blur",{elInput:this._el}))
},_realFocus:function(){this._bFakeFocus||(this.getWatchInput().start(!0),this.fireEvent("focus",{elInput:this._el}))
},_onActivate:function(){this._wfRealBlur.attach(this._el,"blur"),this._wfRealFocus.attach(this._el,"focus")
},_onDeactivate:function(){this._wfRealBlur.detach(this._el,"blur"),this._wfRealFocus.detach(this._el,"focus")
}}).extend(jindo.UIComponent),jindo.InlineTextEdit=jindo.$Class({_bIsEditing:!1,$init:function(t){var e={elInput:jindo.$('<input type="text">'),bHandleBlur:!0,bHandleKeyDown:!0};
this.option(e),this.option(t||{}),this._wfBlur=jindo.$Fn(this._onBlur,this),this._wfKeyDown=jindo.$Fn(this._onKeyDown,this)
},getTextInput:function(){return this._getTextInput().$value()
},_getTextInput:function(){return this._welInput&&this._welInput.$value()?this._welInput:this._welInput=jindo.$Element(this.option("elInput"))
},_resize:function(t,e){var i=jindo.$Element(t),n=jindo.$Element(e);
n.width(i.width()).height(i.height())
},isEditing:function(){return this._bIsEditing
},edit:function(t,e){var i=jindo.$Element(t),n=this._getTextInput(),s=n.$value();
return this._welHidden=i,i.after(s),this._resize(e||t,s),i.hide(),s.value=i.text(),s.focus(),this._bIsEditing=!0,this.option("bHandleBlur")&&this._wfBlur.attach(s,"blur"),this.option("bHandleKeyDown")&&this._wfKeyDown.attach(s,"keydown"),this
},apply:function(){if(this.isEditing()){var t=this._getTextInput(),e=t.$value(),i=e.value,n={sText:i,elInput:e,elText:this._welHidden.$value()};
this._welHidden.text()!=i&&this.fireEvent("beforeChange",n)?(this._welHidden.text(n.sText).show(),this._bIsEditing=!1,this.fireEvent("change",n)):this._welHidden.show(),this._wfBlur.detach(e,"blur").detach(e,"keydown"),t.leave()
}return this
},cancel:function(){if(this.isEditing()){var t=this._getTextInput(),e=t.$value();
this._welHidden.show(),this._bIsEditing=!1,this._wfBlur.detach(e,"blur").detach(e,"keydown"),t.leave()
}return this
},_onBlur:function(){this.apply()
},_onKeyDown:function(t){switch(t.key().keyCode){case 27:this.cancel();
break;
case 13:"input"==this.getTextInput().tagName.toLowerCase()&&this.apply()
}}}).extend(jindo.Component),jindo.LayerEffect=jindo.$Class({$init:function(t){this.setLayer(t);
var e=this;
this._htTransitionGetterSetter={getter:function(t){return jindo.$Element(e._el)[t]()
},setter:function(t,i){jindo.$Element(e._el)[t](parseFloat(i))
}}
},getLayer:function(){return this._el
},setLayer:function(t){this._el=jindo.$(t),this._wel=jindo.$Element(t);
var e=this._el.cloneNode(!0),i=jindo.$Element(e);
i.opacity(0),this._wel.after(i),i.show(),this._sLayerCSSPosition=i.css("position");
var n=i.offset();
i.css({position:"absolute",top:"0px",left:"0px"});
var s=i.offset();
return this._sLayerCSSLeft=n.left-s.left+"px",this._sLayerCSSTop=n.top-s.top+"px",this._sLayerBGColor=i.css("backgroundColor"),this._nLayerWidth=i.width(),this._nLayerHeight=i.height(),i.width(this._nLayerWidth),i.height(this._nLayerHeight),this._sLayerCSSWidth=i.css("width"),this._sLayerCSSHeight=i.css("height"),this._sLayerCSSOverflowX=this._wel.css("overflowX"),this._sLayerCSSOverflowY=this._wel.css("overflowY"),this._sLayerCSSFontSize=this._wel.css("fontSize"),this._sLayerCSSFontSizeUnit=this._sLayerCSSFontSize.match(/^\-?[0-9\.]+(%|px|pt|em)?$/i)[1],i.css({overflow:"hidden",width:0,height:0}),this._nSlideMinWidth=i.width()+1,this._nSlideMinHeight=i.height()+1,i.leave(),this
},_transform:function(){this._wel.css({overflowX:"hidden",overflowY:"hidden"})
},_restore:function(){this._wel.css({position:this._sLayerCSSPosition,overflowX:this._sLayerCSSOverflowX,overflowY:this._sLayerCSSOverflowY})
},_fireEventBefore:function(t){return t&&this._transform(),this.fireEvent("before",{elLayer:this.getLayer()})
},_fireEventAppear:function(){this.fireEvent("appear",{elLayer:this.getLayer()})
},_fireEventEnd:function(){this._restore(),this.fireEvent("end",{elLayer:this.getLayer()})
},_getTransition:function(){return this._oTransition?this._oTransition:this._oTransition=new jindo.Transition({bCorrection:!0})
},_afterHide:function(){this._wel.hide().opacity(1),this._wel.css({top:this._sLayerCSSTop,left:this._sLayerCSSLeft,width:this._sLayerCSSWidth,height:this._sLayerCSSHeight,fontSize:this._sLayerCSSFontSize})
},_onShowTransitionEnd:function(){this._getTransition().detach("end",arguments.callee),this._fireEventEnd()
},_onHideTransitionEnd:function(){this._getTransition().detach("end",arguments.callee),this._afterHide(),this._fireEventEnd()
},_getOption:function(t,e){for(var i in e){t[i]=e[i]
}return t
},fadeIn:function(t){t=this._getOption({nFPS:30,nDuration:500},t||{});
var e=this._wel.visible()&&this._wel.opacity()>0;
if(e?t.nDuration*=(1-this._wel.opacity())/1:(this._wel.opacity(0),this._wel.show()),t.nDuration>0){this._fireEventBefore(!0);
var i=this,n=this._getTransition().fps(t.nFPS).abort().detachAll();
n.attach({playing:function(t){1===t.nStep&&(this.detach("playing",arguments.callee),e||i._fireEventAppear())
},end:jindo.$Fn(this._onShowTransitionEnd,this).bind(this)}).queue(t.nDuration,this._wel.$value(),{"@opacity":jindo.Effect.linear(1)}),t.fCallback&&n.queue(jindo.$Fn(t.fCallback,this).bind(this)),n.start()
}return this
},fadeOut:function(t){t=this._getOption({nFPS:30,nDuration:500},t||{});
var e=this._wel.visible()&&this._wel.opacity()>0;
if(e){this._fireEventBefore(),t.nDuration*=this._wel.opacity()/1;
var i=this._getTransition().fps(t.nFPS).abort().detachAll();
i.attach({end:jindo.$Fn(this._onHideTransitionEnd,this).bind(this)}).queue(t.nDuration,this._wel.$value(),{"@opacity":jindo.Effect.linear(0)}),t.fCallback&&i.queue(jindo.$Fn(t.fCallback,this).bind(this)),i.start()
}return this
},slideDown:function(t){t=this._getOption({nFPS:30,nDuration:500},t||{});
var e=this._wel.visible();
if(Math.ceil(this._wel.height())<this._nLayerHeight&&this._fireEventBefore(!0)){e?t.nDuration=Math.ceil(t.nDuration*((this._nLayerHeight-this._wel.height())/(this._nLayerHeight-this._nSlideMinHeight))):this._wel.css("height",0).show().height(this._nSlideMinHeight);
var i=this,n=this._getTransition().fps(t.nFPS).abort().detachAll();
n.attach({playing:function(t){1===t.nStep&&(this.detach("playing",arguments.callee),e||i._fireEventAppear())
},end:jindo.$Fn(this._onShowTransitionEnd,this).bind(this)}).queue(t.nDuration,this._htTransitionGetterSetter,{height:jindo.Effect.cubicEaseOut(this._nLayerHeight)}),t.fCallback&&n.queue(jindo.$Fn(t.fCallback,this).bind(this)),n.start()
}return this
},slideUp:function(t){t=this._getOption({nFPS:30,nDuration:500},t||{});
var e=this._wel.visible();
if(e&&this._fireEventBefore(!0)){t.nDuration=Math.ceil(t.nDuration*(this._wel.height()/this._nLayerHeight));
var i=this._getTransition().fps(t.nFPS).abort().detachAll();
i.attach({end:jindo.$Fn(this._onHideTransitionEnd,this).bind(this)}).queue(t.nDuration,this._htTransitionGetterSetter,{height:jindo.Effect.cubicEaseOut(this._nSlideMinHeight)}),t.fCallback&&i.queue(jindo.$Fn(t.fCallback,this).bind(this)),i.start()
}return this
},grow:function(t){t=this._getOption({nFPS:30,nDuration:500},t||{});
var e=this._wel.visible();
if(Math.ceil(this._wel.height())<this._nLayerHeight&&this._fireEventBefore(!0)){e?t.nDuration=Math.ceil(t.nDuration*((this._nLayerHeight-this._wel.height())/(this._nLayerHeight-this._nSlideMinHeight))):this._wel.css({width:0,height:0}).show().width(this._nSlideMinWidth).height(this._nSlideMinHeight);
var i=this,n=this._getTransition().fps(t.nFPS).abort().detachAll();
n.attach({playing:function(t){1===t.nStep&&(this.detach("playing",arguments.callee),e||i._fireEventAppear())
},end:jindo.$Fn(this._onShowTransitionEnd,this).bind(this)}).queue(t.nDuration,this._htTransitionGetterSetter,{width:jindo.Effect.cubicEaseOut(this._nLayerWidth),height:jindo.Effect.cubicEaseOut(this._nLayerHeight)}),t.fCallback&&n.queue(jindo.$Fn(t.fCallback,this).bind(this)),n.start()
}return this
},shrink:function(t){t=this._getOption({nFPS:30,nDuration:500},t||{});
var e=this._wel.visible();
if(e&&this._fireEventBefore(!0)){t.nDuration=Math.ceil(t.nDuration*(this._wel.height()/this._nLayerHeight));
var i=this._getTransition().fps(t.nFPS).abort().detachAll();
i.attach({end:jindo.$Fn(this._onHideTransitionEnd,this).bind(this)}).queue(t.nDuration,this._htTransitionGetterSetter,{width:jindo.Effect.cubicEaseOut(this._nSlideMinWidth),height:jindo.Effect.cubicEaseOut(this._nSlideMinHeight)}),t.fCallback&&i.queue(jindo.$Fn(t.fCallback,this).bind(this)),i.start()
}return this
},unfold:function(t){t=this._getOption({nFPS:30,nDuration:500,nWidth:this._nSlideMinWidth,nHeight:this._nSlideMinHeight},t||{});
var e,i,n=this._wel.visible();
if(n?(e=t.nDuration/2*(this._nLayerWidth-this._wel.width())/this._nLayerWidth,i=t.nDuration/2*(this._nLayerHeight-this._wel.height())/this._nLayerHeight):(this._wel.css({width:0,height:0}).show().width(Math.max(t.nWidth,this._nSlideMinWidth)).height(Math.max(t.nHeight,this._nSlideMinHeight)),e=t.nDuration/2,i=e),i>0){var s=this;
if(this._fireEventBefore(!0)){var o=this._getTransition().fps(t.nFPS).abort().detachAll();
o.attach({playing:function(t){1===t.nStep&&(this.detach("playing",arguments.callee),n||s._fireEventAppear())
},end:jindo.$Fn(this._onShowTransitionEnd,this).bind(this)}).queue(e,this._htTransitionGetterSetter,{width:jindo.Effect.cubicEaseOut(this._nLayerWidth)}).queue(i,this._htTransitionGetterSetter,{height:jindo.Effect.cubicEaseOut(this._nLayerHeight)}),t.fCallback&&o.queue(jindo.$Fn(t.fCallback,this).bind(this)),o.start()
}}return this
},fold:function(t){t=this._getOption({nFPS:30,nDuration:500,nWidth:this._nSlideMinWidth,nHeight:this._nSlideMinHeight},t||{});
var e,i,n=this._wel.visible();
if(n&&(i=t.nDuration/2*this._wel.height()/this._nLayerHeight,e=t.nDuration/2*this._wel.width()/this._nLayerWidth,e>0&&this._fireEventBefore(!0))){var s=this._getTransition().fps(t.nFPS).abort().detachAll();
s.attach({end:jindo.$Fn(this._onHideTransitionEnd,this).bind(this)}).queue(i,this._htTransitionGetterSetter,{height:jindo.Effect.cubicEaseOut(Math.max(t.nHeight,this._nSlideMinHeight))}).queue(e,this._htTransitionGetterSetter,{width:jindo.Effect.cubicEaseOut(Math.max(t.nWidth,this._nSlideMinWidth))}),t.fCallback&&s.queue(jindo.$Fn(t.fCallback,this).bind(this)),s.start()
}return this
},pullUp:function(t){t=this._getOption({nFPS:30,nDuration:500},t||{});
var e=this._wel.visible();
if(Math.ceil(this._wel.height())<this._nLayerHeight&&this._fireEventBefore(!0)){this._wel.css("position","absolute"),e?t.nDuration=Math.ceil(t.nDuration*((this._nLayerHeight-this._wel.height())/(this._nLayerHeight-this._nSlideMinHeight))):this._wel.css({height:0,top:parseInt(this._sLayerCSSTop,10)+this._nLayerHeight-this._nSlideMinHeight+"px"}).show().height(this._nSlideMinHeight);
var i=this,n=this._getTransition().fps(t.nFPS).abort().detachAll();
n.attach({playing:function(t){1===t.nStep&&(this.detach("playing",arguments.callee),e||i._fireEventAppear())
},end:jindo.$Fn(this._onShowTransitionEnd,this).bind(this)}).attach({playing:function(){i._wel.css("top",parseInt(i._sLayerCSSTop,10)+i._nLayerHeight-i._wel.height()+"px")
}}).queue(t.nDuration,this._htTransitionGetterSetter,{height:jindo.Effect.cubicEaseOut(this._nLayerHeight)}),t.fCallback&&n.queue(jindo.$Fn(t.fCallback,this).bind(this)),n.start()
}return this
},pushDown:function(t){t=this._getOption({nFPS:30,nDuration:500},t||{});
var e=this._wel.visible();
if(e&&this._fireEventBefore(!0)){this._wel.css("position","absolute"),t.nDuration=Math.ceil(t.nDuration*(this._wel.height()/this._nLayerHeight));
var i=this,n=this._getTransition().fps(t.nFPS).abort().detachAll();
n.attach({playing:function(){i._wel.css("top",parseInt(i._sLayerCSSTop,10)+i._nLayerHeight-i._wel.height()+"px")
},end:jindo.$Fn(this._onHideTransitionEnd,this).bind(this)}).queue(t.nDuration,this._htTransitionGetterSetter,{height:jindo.Effect.cubicEaseOut(this._nSlideMinHeight)}),t.fCallback&&n.queue(jindo.$Fn(t.fCallback,this).bind(this)),n.start()
}return this
},condense:function(t){t=this._getOption({nFPS:30,nDuration:500,nScale:2},t||{});
var e=this._wel.visible()&&this._wel.opacity()>0;
if(e?t.nDuration*=(1-this._wel.opacity())/1:(this._wel.opacity(0),this._wel.show(),this._wel.css({left:parseInt(this._sLayerCSSLeft,10)-this._nLayerWidth/2+"px",top:parseInt(this._sLayerCSSTop,10)-this._nLayerHeight/2+"px",width:parseInt(this._sLayerCSSWidth,10)*t.nScale+"px",height:parseInt(this._sLayerCSSHeight,10)*t.nScale+"px",fontSize:parseInt(this._sLayerCSSFontSize,10)*t.nScale+this._sLayerCSSFontSizeUnit})),t.nDuration>0&&this._fireEventBefore(!0)){this._wel.css("position","absolute");
var i=this,n=i.getLayer(),s=this._getTransition().fps(t.nFPS).abort().detachAll();
s.attach({playing:function(t){1===t.nStep&&(this.detach("playing",arguments.callee),e||i._fireEventAppear())
},end:jindo.$Fn(this._onShowTransitionEnd,this).bind(this)}).queue(t.nDuration,this._htTransitionGetterSetter,{width:jindo.Effect.cubicEaseOut(this._nLayerWidth),height:jindo.Effect.cubicEaseOut(this._nLayerHeight)},n,{"@left":jindo.Effect.cubicEaseOut(this._sLayerCSSLeft),"@top":jindo.Effect.cubicEaseOut(this._sLayerCSSTop),"@fontSize":jindo.Effect.cubicEaseOut(this._sLayerCSSFontSize),"@opacity":jindo.Effect.linear(1)}),t.fCallback&&s.queue(jindo.$Fn(t.fCallback,this).bind(this)),s.start()
}return this
},expand:function(t){if(t=this._getOption({nFPS:30,nDuration:500,nScale:2},t||{}),this._wel.visible()&&this._wel.opacity()>0&&this._fireEventBefore(!0)){t.nDuration*=this._wel.opacity()/1,this._wel.css("position","absolute"),"auto"==this._wel.css("left")&&this._wel.css("left",this._sLayerCSSLeft),"auto"==this._wel.css("top")&&this._wel.css("top",this._sLayerCSSTop);
var e=this._getTransition().fps(t.nFPS).abort().detachAll();
e.attach({end:jindo.$Fn(this._onHideTransitionEnd,this).bind(this)}).queue(t.nDuration,this._htTransitionGetterSetter,{width:jindo.Effect.cubicEaseOut(this._nLayerWidth*t.nScale),height:jindo.Effect.cubicEaseOut(this._nLayerHeight*t.nScale)},this.getLayer(),{"@left":jindo.Effect.cubicEaseOut(parseInt(this._sLayerCSSLeft,10)-parseInt(this._sLayerCSSWidth,10)/2+"px"),"@top":jindo.Effect.cubicEaseOut(parseInt(this._sLayerCSSTop,10)-parseInt(this._sLayerCSSHeight,10)/2+"px"),"@fontSize":jindo.Effect.cubicEaseOut(parseInt(this._sLayerCSSFontSize,10)+this._sLayerCSSFontSizeUnit,2*parseInt(this._sLayerCSSFontSize,10)+this._sLayerCSSFontSizeUnit),"@opacity":jindo.Effect.linear(0)}),t.fCallback&&e.queue(jindo.$Fn(t.fCallback,this).bind(this)),e.start()
}return this
},shake:function(t){if(t=this._getOption({nFPS:30,nDuration:500,nWidth:20,nCount:3},t||{}),this._wel.visible()&&this._fireEventBefore()){this._wel.css("position","absolute");
var e=this,i=this._getTransition().fps(t.nFPS).abort().detachAll();
i.attach({end:jindo.$Fn(this._onShowTransitionEnd,this).bind(this),abort:function(){e._wel.css("left",this._sLayerCSSLeft)
}}).queue(t.nDuration,this.getLayer(),{"@left":jindo.Effect.wave(t.nCount)(this._sLayerCSSLeft,t.nWidth+"px")}),t.fCallback&&i.queue(jindo.$Fn(t.fCallback,this).bind(this)),i.start()
}return this
},blink:function(t){if(t=this._getOption({nFPS:30,nDuration:500,nOpacity:0,nCount:1},t||{}),this._wel.visible()&&this._fireEventBefore()){var e=this,i=this._getTransition().fps(t.nFPS).abort().detachAll();
i.attach({end:jindo.$Fn(this._onShowTransitionEnd,this).bind(this),abort:function(){e._wel.opacity(1)
}}).queue(t.nDuration,this.getLayer(),{"@opacity":jindo.Effect.wave(t.nCount)(1,t.nOpacity)}),t.fCallback&&i.queue(jindo.$Fn(t.fCallback,this).bind(this)),i.start()
}return this
},flicker:function(t){t=this._getOption({nFPS:30,nDuration:500,sBackgroundColor:"#ffff00"},t||{});
var e="transparent"==this._sLayerBGColor||"rgba(0, 0, 0, 0)"==this._sLayerBGColor?"#ffffff":this._sLayerBGColor;
if(this._wel.visible()&&this._fireEventBefore()){var i=this,n=this._getTransition().fps(t.nFPS).abort().detachAll();
n.attach({end:jindo.$Fn(this._onShowTransitionEnd,this).bind(this),abort:function(){i._wel.css("backgroundColor",i._sLayerBGColor)
}}).queue(t.nDuration,this.getLayer(),{"@backgroundColor":jindo.Effect.cubicEaseIn(t.sBackgroundColor,e)}).queue(function(){i._wel.css("backgroundColor",i._sLayerBGColor)
}),t.fCallback&&n.queue(jindo.$Fn(t.fCallback,this).bind(this)),n.start()
}return this
},bounce:function(t){if(t=this._getOption({nFPS:30,nDuration:500,nHeight:50},t||{}),this._wel.visible()&&this._fireEventBefore()){this._wel.css("position","absolute");
var e=this,i=this._getTransition().fps(t.nFPS).abort().detachAll();
i.attach({end:jindo.$Fn(this._onShowTransitionEnd,this).bind(this),abort:function(){e._wel.css("top",e._sLayerCSSTop)
}}).queue(t.nDuration/5,this.getLayer(),{"@top":jindo.Effect.easeOut(this._sLayerCSSTop,parseInt(this._sLayerCSSTop,10)-t.nHeight+"px")}).queue(t.nDuration/5*4,this.getLayer(),{"@top":jindo.Effect.bounce(this._sLayerCSSTop)}),t.fCallback&&i.queue(jindo.$Fn(t.fCallback,this).bind(this)),i.start()
}return this
}}).extend(jindo.Component),jindo.LazyLoading={_bIE:jindo.$Agent().navigator().ie,_waLoading:jindo.$A([]),_waLoaded:jindo.$A([]),_whtScript:jindo.$H({}),_whtCallback:jindo.$H({})},jindo.LazyLoading.load=function(t,e,i){if("function"!=typeof e&&(e=function(){}),this._queueCallback(t,e),this._checkIsLoading(t)){return !1
}if(this._checkAlreadyLoaded(t)){return this._doCallback(t),!0
}this._waLoading.push(t);
var n=this,s=document.getElementsByTagName("head")[0],o=document.createElement("script");
return o.type="text/javascript",o.charset=i||"utf-8",o.src=t,this._whtScript.add(t,o),this._bIE?o.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(n._waLoaded.push(t),n._waLoading=n._waLoading.refuse(t),n._doCallback(t),this.onreadystatechange=null)
}:o.onload=function(){n._waLoaded.push(t),n._waLoading=n._waLoading.refuse(t),n._doCallback(t)
},s.appendChild(o),!0
},jindo.LazyLoading._queueCallback=function(t,e){var i=this._whtCallback.$(t);
i?i.push(e):this._whtCallback.$(t,[e])
},jindo.LazyLoading._doCallback=function(t){for(var e=this._whtCallback.$(t).concat(),i=0;
i<e.length;
i++){this._whtCallback.$(t).splice(i,1),e[i]()
}},jindo.LazyLoading.abort=function(t){if(this._checkIsLoading(t)){var e=this.getScriptElement(t);
return this._waLoading=this._waLoading.refuse(t),this._bIE?e.onreadystatechange=null:e.onload=null,jindo.$Element(e).leave(),this._whtScript.remove(t),this._whtCallback.remove(t),!0
}return !1
},jindo.LazyLoading._checkAlreadyLoaded=function(t){return this._waLoaded.has(t)
},jindo.LazyLoading._checkIsLoading=function(t){return this._waLoading.has(t)
},jindo.LazyLoading.getLoaded=function(){return this._waLoaded.$value()
},jindo.LazyLoading.getLoading=function(){return this._waLoading.$value()
},jindo.LazyLoading.getScriptElement=function(t){return this._whtScript.$(t)||null
},jindo.ModalDialog=jindo.$Class({$init:function(t){var e={Foggy:{nShowDuration:150,nShowOpacity:0.8,nHideDuration:150,nHideOpacity:0,sEffect:"linear",nFPS:30}};
this.option(e),this.option(t||{}),this._initFoggy()
},_initFoggy:function(){var t=this;
this._oFoggy=new jindo.Foggy(this.option("Foggy")).attach({show:function(){t.fireEvent("show",{elLayer:t._elLayer})
},hide:function(){t.detachAll("close").detachAll("confirm").detachAll("cancel"),t._detachEvents(),t._welLayer.hide(),t._welLayer.leave(),t._bIsShown=!1,t.fireEvent("hide",{elLayer:t._elLayer})
}}),this._oFoggy.getFog().className=this.option("sClassPrefix")+"fog"
},getFoggy:function(){return this._oFoggy
},show:function(t,e){if(!this.isShown()){this.attach(e),document.body.appendChild(this._elLayer),this._welLayer.html(this._template.process(t));
var i={elLayer:this._elLayer};
this.fireEvent("beforeShow",i)&&(this._welLayer.show(),this._attachEvents(),this.getLayerPosition().setPosition(),this._bIsShown=!0,this._oFoggy.show(this._elLayer))
}},hide:function(){this.fireEvent("beforeHide",{elLayer:this._elLayer})&&this._oFoggy.hide()
}}).extend(jindo.Dialog),jindo.Morph=jindo.$Class({$init:function(t){this.option({fEffect:jindo.Effect.linear,bUseTransition:!0}).option(t);
var e=document.body.style;
this._bTransitionSupport="transition" in e||"webkitTransition" in e||"MozTransition" in e||"OTransition" in e||"msTransition" in e,this._aQueue=[],this._aIngItem=null,this._oTimer=null,this._bPlaying=null,this._bReservePause=!1,this._nPtr=0,this._nPausePassed=0,this._aRepeat=[],this._sTransitionEnd="webkitTransition" in e&&"webkitTransitionEnd"||"transition" in e&&"transitionend"||"MozTransition" in e&&"transitionend"||"OTransition" in e&&"oTransitionEnd"||"msTransition" in e&&"MSTransitionEnd"
},pushAnimate:function(t,e){if(e&&!(e instanceof Array)){throw Error("aLists should be a instance of Array")
}return e=[].concat(e),e.duration=t,this._aQueue.push(e),this
},pushWait:function(){for(var t=0,e=arguments.length;
e>t;
t++){var i=arguments[t];
i instanceof this.constructor?this._aQueue.push(i):this.pushAnimate(i,[])
}return this
},pushCall:function(t){return this._aQueue.push(t),this
},pushRepeatStart:function(t){"undefined"==typeof t&&(t=1);
var e="L"+Math.round((new Date).getTime()*Math.random());
return this._aRepeat.push(e),this._pushLabel(e,t),this
},_pushLabel:function(t,e){return"undefined"==typeof e&&(e=1/0),this._aQueue.push({action:"label",args:{label:t,times:e}}),this
},pushRepeatEnd:function(){var t=this,e=this._aRepeat.pop(),i=function(){var i=t._getLabelIndex(e);
if(-1===i){throw"Repeat calls don't matched."
}var n=this._aQueue[i];
n.args.count=n.args.count||0,++n.args.count<n.args.times&&t._goto(i+1)
};
return i.__repeat_end=e,this.pushCall(i),this
},_waitMorph:function(t){var e=this;
if(!t.isPlaying()){return !0
}var i=function(){t.detach("end",i).detach("pause",i),e._flushQueue()
};
return t.attach("end",i).attach("pause",i),!1
},_getLabelIndex:function(t){for(var e=null,i=0,n=this._aQueue.length;
n>i;
i++){if(e=this._aQueue[i],"label"===e.action&&e.args.label===t){return i
}}return -1
},_getRepeatEndIndex:function(t,e){for(var i=null,n=e||0,s=this._aQueue.length;
s>n;
n++){if(i=this._aQueue[n],i instanceof Function&&i.__repeat_end===t){return n
}}return -1
},_flushQueue:function(){var t,e,i=this;
do{if(t=!1,e=this._aIngItem=this._aQueue[this._nPtr],this._bReservePause||!e){return this._bPlaying=!1,this._bReservePause=!1,void (e||this.fireEvent("end"))
}if(this._nPtr++,e instanceof Function){e.call(this),t=!0
}else{if(e instanceof this.constructor){t=this._waitMorph(e)
}else{if("number"!=typeof e){if("label"!==e.action){if("goto"!==e.action){var n=this._aCompiledItem,s=this._nPausePassed;
if(s){for(var o=0,a=n.length;
a>o;
o++){n[o].oEffectCSS={}
}}else{n=this._aCompiledItem=this._compileItem(e)
}t=n.duration<0,t?this._processItem(1,!0):(this._playItem(s),this._nPausePassed=0)
}else{this._goto(e.args.label),t=!0
}}else{if(delete e.args.count,e.args.times<1){var r=this._getRepeatEndIndex(e.args.label,this._nPtr);
r>-1&&this._goto(r+1)
}t=!0
}}else{setTimeout(function(){i._flushQueue()
},e)
}}}}while(t)
},_playItem:function(t){var e=this;
this._nStart=(new Date).getTime()-t,this._nIng=2,t||this._processItem(0,!0,2),this._animationLoop(!0),setTimeout(function(){var t=(this._aCompiledItem,e._processItem(1,!0,1));
if(!t){return void (0===--e._nIng&&e._flushQueue())
}var i=t[0],n=i.$value(),s=function(){for(var i;
i=t.pop();
){i.css(e._getCSSKey("transitionProperty"),"none"),i.css(e._getCSSKey("transitionDuration"),"0s")
}n.removeEventListener(e._sTransitionEnd,e._fpOnTransitionEnd,!0),t=null,e._fpOnTransitionEnd=null,0===--e._nIng&&e._flushQueue()
};
e._fpOnTransitionEnd=s,n.addEventListener(e._sTransitionEnd,e._fpOnTransitionEnd,!0)
},0)
},_animationLoop:function(t){var e=this;
this._oTimer=this._requestAnimationFrame(function(){var i=e._nStart,n=e._aCompiledItem.duration;
if(null!==e._oTimer){e._oTimer=null;
var s=Math.min(1,Math.max(0,((new Date).getTime()-i)/n));
e._processItem(s,t,2),1>s?e._animationLoop():0===--e._nIng&&e._flushQueue()
}})
},_processItem:function(t,e,i){var n,s,o,a,r,h,l,c=this._aCompiledItem,u=c.duration,d=!0,f=null;
if(i=i||3,this.fireEvent("beforeProgress",{nRate:t})){for(var _,g,p=[],v=0;
g=c[v];
v++){n=g.oObj,s=g.welObj,o=g.oProps,a=g.oEffectCSS,d=!0,_={},p.push(n),p.push(_),s&&s.$value().clientHeight;
for(var m in o){if(o.hasOwnProperty(m)){if(r=o[m],h=a[m]?1:2,!(i&h)){continue
}if(1&i&&1&h&&d&&(f=f||[],f.push(s),"@transition" in o||("@transitionProperty" in o||s.css(this._getCSSKey("transitionProperty"),"all"),"@transitionDuration" in o||s.css(this._getCSSKey("transitionDuration"),(u/1000).toFixed(3)+"s"),"@transitionTimingFunction" in o||s.css(this._getCSSKey("transitionTimingFunction"),a[m])),d=!1),"function"==typeof r){r=r(t)
}else{if(!e){continue
}}/^@(.*)$/.test(m)?(l=RegExp.$1,/transition/.test(m)&&(r=this._getCSSVal(r)),s.css(this._getCSSKey(l),r)):n[m]=r,_[m]=r
}}}return this.fireEvent("progress",{aLists:p,nRate:t}),f
}},_compileItem:function(t){var e=[];
e.duration=t.duration;
for(var i,n,s,o,a,r,h,l,c,u=!1,d=this.option("fEffect"),f=0,_=t.length;
_>f;
f+=2){i=t[f],n=jindo.$Element(i),s=t[f+1],r={},h={};
for(var g in s){if(s.hasOwnProperty(g)){if(a=s[g],l=/^@(.*)$/.test(g),c=RegExp.$1,a instanceof Array?(o=a[0],a=a[1]):o=l?n.css(this._getCSSKey(c)):i[g],l||(h[g]=null),/^@transform$/.test(g)){r[g]=this._getTransformFunction(o,a,d)
}else{try{"function"==typeof a?("setStart" in a&&a.setStart(o||""),r[g]=a,l&&(u=!0)):r[g]=d(o||"",a)
}catch(p){if(!/^unit error/.test(p.message)){throw p
}r[g]=a,h[g]=null
}}g in h||(h[g]=this._getEffectCSS(d))
}}u&&(h={}),e.push({oObj:i,welObj:n,oProps:r,oEffectCSS:h})
}return e
},play:function(){return this._bPlaying||(this._bPlaying=!0,this.fireEvent("play"),this._flushQueue()),this
},reset:function(){return this._goto(0)
},pause:function(t){if(!this._bPlaying){return this
}if(this._cancelAnimationFrame(this._oTimer),this._oTimer=null,this._fpOnTransitionEnd&&this._fpOnTransitionEnd.bind()(),"undefined"==typeof t){var e=this._nStart,i=this._aCompiledItem.duration,n=(new Date).getTime()-e,s=Math.min(1,Math.max(0,n/i));
this._processItem(s,!0),this._nPtr--,this._nPausePassed=n
}else{this._processItem(Math.max(0,Math.min(1,t)))
}return this._bPlaying=!1,this._bReservePause=!1,this.fireEvent("pause"),this
},_goto:function(t){var e=t;
if("number"==typeof t){t=t||0
}else{if(t=this._getLabelIndex(e),-1===t){throw"Label not found"
}t++
}return this._nPtr=t,this._nPausePassed=0,this
},isPlaying:function(){return this._bPlaying||!1
},clear:function(){return this._aQueue.length=0,this._aRepeat.length=0,this._nPtr=0,this
},_getPointer:function(){return this._nPtr
},_oProperPrefix:{},_getProperPrefix:function(t){var e=this._oProperPrefix;
if(t in e){return e[t]
}for(var i,n,s=document.body.style,o=["webkit","","Moz","O","ms"],a=0,r=o.length;
r>a;
a++){if(i=o[a],n=i+(i?t.replace(/^[a-z]/,function(t){return t.toUpperCase()
}):t),n in s){return e[t]=i
}}return e[t]=""
},_getCSSKey:function(t){var e=this,i="",n=t.replace(/^(\-(webkit|o|moz|ms)\-)?([a-z]+)/,function(t,n,s,o){return i=s||e._getProperPrefix(o),i&&(o=o.replace(/^[a-z]/,function(t){return t.toUpperCase()
})),o
}).replace(/\-(\w)/g,function(t,e){return e.toUpperCase()
});
return({o:"O",moz:"Moz",webkit:"Webkit"}[i]||i)+n
},_getCSSVal:function(t){var e=this,i=t.replace(/(^|\s)(\-(webkit|moz|o|ms)\-)?([a-z]+)/g,function(t,i,n,s,o){return s=s||e._getProperPrefix(o),i+(s&&"-"+s+"-")+o
});
return i
},_parseTransformText:function(t){t=t||"";
var e={};
return t.replace(/([\w\-]+)\(([^\)]*)\)/g,function(t,i,n){var s=n.split(/\s*,\s*/);
switch(i){case"translate3d":case"scale3d":case"skew3d":i=i.replace(/3d$/,""),e[i+"Z"]=s[2];
case"translate":case"scale":case"skew":e[i+"X"]=s[0],"undefined"==typeof s[1]?"scale"===i&&(e[i+"Y"]=s[0]):e[i+"Y"]=s[1];
break;
default:e[i]=s.join(",")
}}),e
},_getTransformFunction:function(t,e,i){var n,s=this._parseTransformText(t),o=this._parseTransformText(e),a={};
for(n in s){s.hasOwnProperty(n)&&(a[n]=i(s[n],o[n]||(/^scale/.test(n)?1:0)))
}for(n in o){!o.hasOwnProperty(n)||n in s||(a[n]=i(s[n]||(/^scale/.test(n)?1:0),o[n]))
}var r=function(t){var e=[];
for(var i in a){a.hasOwnProperty(i)&&e.push(i+"("+a[i](t)+")")
}return e.join(" ")
};
return r
},_getEffectCSS:function(t){var e=this.option("bUseTransition")&&this._bTransitionSupport;
if(!e){return null
}if(this._htEventHandler.progress&&this._htEventHandler.progress.length||this._htEventHandler.beforeProgress&&this._htEventHandler.beforeProgress.length){return null
}switch(t){case jindo.Effect.linear:return"linear";
case jindo.Effect.cubicEase:return"ease";
case jindo.Effect.cubicEaseIn:return"ease-in";
case jindo.Effect.cubicEaseOut:return"ease-out";
case jindo.Effect.cubicEaseInOut:return"ease-in-out";
default:if(t.cubicBezier&&Math.max.apply(Math,t.cubicBezier)<=1&&Math.min.apply(Math,t.cubicBezier)>=0){return"cubic-bezier("+t.cubicBezier.join(",")+")"
}}return null
},_requestAnimationFrame:function(t){var e,i=this,n=function(){e===i._oLastRAF&&(i._oLastRAF=null,t())
};
return e=window.requestAnimationFrame?requestAnimationFrame(n):setTimeout(n,1000/60),this._oLastRAF=e
},_cancelAnimationFrame:function(t){var e;
return e=window.cancelAnimationFrame?cancelAnimationFrame(t):clearTimeout(t),this._oLastRAF=null,e
}}).extend(jindo.Component),jindo.MouseGesture=jindo.$Class({_elCanvas:null,_oDC:null,_htEventHandler:{},_aPointList:[],_nPointCount:0,_sDrawingType:"",_bMobileSafari:!1,$init:function(t){this.option({sLineColor:"#FF0000",nLineThickness:5,nFilteringDistance:10,elTargetWindow:window}),this.option(t);
var e=window.navigator.userAgent.toLowerCase();
this._bMobileSafari=/mobile/.test(e)&&/safari/.test(e)||/iphone/.test(e),this._htEventHandler.mouse_down=jindo.$Fn(this._onMouseDown,this).attach(this.option("elTargetWindow").document,this._bMobileSafari?"touchstart":"mousedown",!0),this._createCanvas()
},_createCanvas:function(){if(jindo.$Agent().navigator().ie){this.option("elTargetWindow").document.namespaces.vml_nhn||this.option("elTargetWindow").document.namespaces.add("vml_nhn","urn:schemas-microsoft-com:vml");
var t=this.option("elTargetWindow").document.createStyleSheet();
t.cssText="vml_nhn\\:shape, vml_nhn\\:stroke {behavior:url(#default#VML); display:inline-block; position:absolute;width:1px;height:1px;};",this._elCanvas=jindo.$("<div>"),this._sDrawingType="vml"
}else{this._elCanvas=jindo.$("<canvas>"),this._oDC=this._elCanvas.getContext("2d"),this._sDrawingType="canvas",this._oDC.globalCompositeOperation="destination-over"
}jindo.$Element(this._elCanvas).css({position:"absolute",top:"0px",left:"0px"}).hide().appendTo(this.option("elTargetWindow").document.body)
},_showCanvas:function(){var t=jindo.$Document(this.option("elTargetWindow").document).clientSize(),e=jindo.$Document(this.option("elTargetWindow").document).scrollPosition();
"canvas"==this._sDrawingType&&(this._elCanvas.width=t.width,this._elCanvas.height=t.height),jindo.$Element(this._elCanvas).css({top:e.top+"px",width:t.width+"px",height:t.height+"px",zIndex:999999}).show()
},_hideCanvas:function(){this._elCanvas&&("vml"==this._sDrawingType?this._elCanvas.innerHTML="":"canvas"==this._sDrawingType&&(this._oDC.beginPath(),this._oDC.clearRect(0,0,this._elCanvas.offsetWidth,this._elCanvas.offsetHeight),this._oDC.closePath()),jindo.$Element(this._elCanvas).hide())
},_drawLine:function(t,e){if("vml"==this._sDrawingType){var i=" m "+(1*t.nX-5)+","+(1*t.nY-5)+" l "+(1*e.nX-5)+","+(1*e.nY-5),n='<vml_nhn:shape coordsize="1 1" strokeweight="'+this.option("nLineThickness")+'pt" strokecolor="'+this.option("sLineColor")+'" path="'+i+'"><vml_nhn:stroke endcap="round" /></vml_nhn:shape>';
this._elCanvas.insertAdjacentHTML("BeforeEnd",n)
}else{"canvas"==this._sDrawingType&&(this._oDC.save(),this._oDC.beginPath(),this._oDC.lineCap="round",this._oDC.lineWidth=this.option("nLineThickness")+2,this._oDC.strokeStyle=this.option("sLineColor"),this._oDC.moveTo(t.nX,t.nY),this._oDC.lineTo(e.nX,e.nY),this._oDC.stroke(),this._oDC.closePath(),this._oDC.restore())
}},_addPointList:function(t){var e;
e=this._bMobileSafari?{pageX:t._event.targetTouches[0].clientX,pageY:t._event.targetTouches[0].clientY}:t.pos();
var i={nX:e.clientX,nY:e.clientY};
return this._aPointList.push(i),this._nPointCount++,i
},_onMouseDown:function(t){(t.mouse().right||this._bMobileSafari)&&(t.stop(),this._addPointList(t),this._htEventHandler.mouse_move=jindo.$Fn(this._onMouseMove,this).attach(this.option("elTargetWindow").document,this._bMobileSafari?"touchmove":"mousemove"),this._htEventHandler.mouse_up=jindo.$Fn(this._onMouseUp,this).attach(this.option("elTargetWindow").document,this._bMobileSafari?"touchend":"mouseup"),"vml"==this._sDrawingType&&this.option("elTargetWindow").document.body.setCapture())
},_onMouseMove:function(t){var e=this._addPointList(t);
2===this._nPointCount&&this._showCanvas(),this._nPointCount%2&&this._drawLine({nX:this._aPointList[this._nPointCount-3].nX,nY:this._aPointList[this._nPointCount-3].nY},e)
},_recognitionGesture:function(){for(var t,e,i,n,s,o,a,r,h=[],l=[],c=Math.tan(22.5*Math.PI/180),u=Math.tan(67.5*Math.PI/180),d=1;
d<this._aPointList.length;
d++){t=this._aPointList[d].nX,e=this._aPointList[d].nY,i=this._aPointList[d-1].nX,n=this._aPointList[d-1].nY,r=Math.sqrt(Math.pow(e-n,2)+Math.pow(t-i,2)),r>this.option("nFilteringDistance")&&(s=-(e-n)/(t-i),o=Math.abs(s),o>=u?a=n>e?8:4:c>o?a=i>t?6:2:o>=c&&u>o&&(a=s>0?1:3,i>t&&(a+=4)),h.push(a))
}for(d=1;
d<h.length;
d++){0===l.length?l.push(h[d]):l[l.length-1]!=h[d]&&l.push(h[d])
}return{aCodeList:l,sCode:l.join("")}
},_onMouseUp:function(t){if(t.mouse().right||this._bMobileSafari){t.stop(),this._htEventHandler.mouse_move&&this._htEventHandler.mouse_move.detach(this.option("elTargetWindow").document,this._bMobileSafari?"touchmove":"mousemove"),this._htEventHandler.mouse_up&&this._htEventHandler.mouse_up.detach(this.option("elTargetWindow").document,this._bMobileSafari?"touchend":"mouseup"),this._aPointList.length&&!this._bMobileSafari&&(this._htEventHandler.setted_context_menu=this.option("elTargetWindow").document.oncontextmenu,this.option("elTargetWindow").document.oncontextmenu=function(){return !1
},setTimeout(jindo.$Fn(function(){this.option("elTargetWindow").document.oncontextmenu=this._htEventHandler.setted_context_menu
},this).bind(),1)),"vml"==this._sDrawingType&&this.option("elTargetWindow").document.body.releaseCapture();
var e=this._recognitionGesture();
e.sCode&&this.fireEvent("gesture",e),this._nPointCount=0,this._aPointList=[],this._hideCanvas()
}},destroy:function(){jindo.$Element(this._elCanvas).leave(),this._elCanvas=null,this._oDC=null,this._htEventHandler=null,this._nPointcount=null,this._aPointList=null,this._sDrawingType=null,this._bMobileSafari=null
}}).extend(jindo.Component),jindo.MultipleAjaxRequest=jindo.$Class({_bIsRequesting:!1,$init:function(t){var e={sMode:"parallel"};
this.option(e),this.option(t)
},isRequesting:function(){return this._bIsRequesting
},request:function(t,e){if(this.isRequesting()){return !1
}switch(t instanceof Array||(t=[t]),"undefined"==typeof e&&(e={}),this._htMetaData=e,this.option("sMode")){case"parallel":this._parallelRequest(t);
break;
case"serial":this._serialRequest(t);
break;
default:return !1
}return !0
},_fireEventStart:function(){return this._bIsRequesting=!0,this.fireEvent("start",{aAjax:this._aAjax,htMetaData:this._htMetaData})?!0:(this.abort(),!1)
},_fireEventBeforeEachRequest:function(t){return this.fireEvent("beforeEachRequest",{oAjax:this._aAjax[t],nIndex:t})?!0:(this.abort(),!1)
},_fireEventAfterEachResponse:function(t){return this.fireEvent("afterEachResponse",{oAjax:this._aAjax[t],nIndex:t})?!0:(this.abort(),!1)
},_parallelRequest:function(t){if(this._aAjaxData=t,this._aAjax=[],this._aStatus=[],this._aStatus.length=t.length,this._aResponse=[],this._fireEventStart()){var e=this;
jindo.$A(this._aAjaxData).forEach(function(t,i){var n=function(t){t._constructor=e._aAjax[i];
var n=e._findAjaxObjectIndexOfResponse(t._constructor);
e._aResponse[n]=t,e._aStatus[n]=!0,e._fireEventAfterEachResponse(n)&&e._hasCompletedGotResponsesOfParallelResponses()&&e._complete()
};
e._aAjax.push(jindo.$Ajax(t.sUrl,t.htOption)),t.htOption.onload=n,t.htOption.onerror=n,t.htOption.ontimeout=n,e._aAjax[i].option(t.htOption),e._fireEventBeforeEachRequest(i)?e._aAjax[i].request(t.htParameter||{}):jindo.$A.Break()
})
}},_findAjaxObjectIndexOfResponse:function(t){return jindo.$A(this._aAjax).indexOf(t)
},_hasCompletedGotResponsesOfParallelResponses:function(){var t=!0;
return jindo.$A(this._aStatus).forEach(function(e){e||(t=!1,jindo.$A.Break())
}),t
},_serialRequest:function(t){this._aAjaxData=t,this._aAjax=[],this._aStatus=[],this._aStatus.length=t.length,this._aResponse=[];
var e=this;
jindo.$A(this._aAjaxData).forEach(function(t,i){var n=function(t){t._constructor=e._aAjax[i],e._aResponse.push(t),e._serialRequestNext()
};
e._aAjax.push(jindo.$Ajax(t.sUrl,t.htOption)),t.htOption.onload=n,t.htOption.onerror=n,t.htOption.ontimeout=n,e._aAjax[i].option(t.htOption)
}),this._fireEventStart()&&this._fireEventBeforeEachRequest(0)&&(this._aAjax[0].request(this._aAjaxData[0].htParameter||{}),this._aStatus[0]=!0)
},_serialRequestNext:function(){for(var t=-1,e=0;
e<this._aStatus.length;
e++){if(!this._aStatus[e]){this._aStatus[e]=!0,t=e;
break
}}t>0?this._fireEventAfterEachResponse(t-1)&&this._fireEventBeforeEachRequest(t)&&this._aAjax[t].request(this._aAjaxData[t].htParameter||{}):-1==t&&this._fireEventAfterEachResponse(this._aStatus.length-1)&&this._complete()
},_reset:function(){this._aAjaxData.length=0,this._aAjax.length=0,this._aStatus.length=0,this._aResponse.length=0,this._htMetaData=null,delete this._aAjaxData,delete this._aAjax,delete this._aStatus,delete this._aResponse,delete this._htMetaData,this._bIsRequesting=!1
},abort:function(){jindo.$A(this._aAjax).forEach(function(t){t.abort()
}),this._reset()
},_complete:function(){var t,e=this._aResponse.concat(),i={};
for(t in this._htMetaData){i[t]=this._htMetaData[t]
}this._reset(),this.fireEvent("complete",{aResponse:e,htMetaData:i})
}}).extend(jindo.Component),jindo.NumberFormatter=jindo.$Class({$init:function(t,e){this.option({nDecimalPoint:0}),this.option(e||{}),this.attach("beforeChange",function(t){var e=t.sText,i="",n=this.option("nDecimalPoint"),s=t.sStartMark,o=t.sEndMark;
if(0===n){e=e.replace(new RegExp("[^0-9"+s+o+"]","g"),""),e=e.replace(/^0+/,""),e=e.replace(new RegExp("^0*"+s+"0*"+o+"0*"),s+o)
}else{var a=0,r=[];
e.replace(new RegExp("((?:[0-9]|"+s+o+")\\.|[0-9]|"+s+"|"+o+")","g"),function(t){/\.$/.test(t)?0==a?(a++,r.push(t)):r.push(t.replace(".","")):r.push(t)
}),e=r?r.join(""):"",new RegExp("^(?:0|[0-9]\\.(?:[0-9]*?))"+s+o+"$").test(e)||(e=e.replace(/^0+/,""))
}i=this._convertCurrency(e),n>0&&(i=this._limitDecimalPoint(i,n)),t.sText=i
})
},getValue:function(){return this._el.value.replace(new RegExp("[,"+this._aMarks[0]+this._aMarks[1]+"]+?","g"),"")
},_convertCurrency:function(t){var e=0,i="",n=t.indexOf("."),s=t.length;
n>-1&&(s=n-1);
for(var o=t.length;
o>=0;
o--){var a=t.charAt(o);
o>s?i=a+i:/[0-9]/.test(a)?(e>=3&&(i=","+i,e=0),e++,i=a+i):(a==this._aMarks[0]||a==this._aMarks[1])&&(i=a+i)
}return i
},_limitDecimalPoint:function(t,e){var i="",n=t.indexOf("."),s=t.length;
if(n>-1&&(s=n-1),n=t.indexOf("."),n>-1&&e>0){for(var o=0,a=0;
a<t.length;
a++){var r=t.charAt(a),h=/[0-9]/.test(r);
if(h){if(o==e){continue
}a>n&&o++
}i+=r
}}else{i=t
}return i
}}).extend(jindo.Formatter),jindo.NumericStepper=jindo.$Class({_bIsOnFocus:!1,$init:function(t,e){this._el=jindo.$(t),this.option({sClassPrefix:"ns-",bActivateOnload:!0,bUseMouseWheel:!1,nStep:1,nDecimalPoint:0,nMin:-1/0,nMax:1/0,nDefaultValue:0,bInputReadOnly:!0}),this.option(e||{}),this._assignHTMLElements(),this._wfPlusClick=jindo.$Fn(this._onPlusClick,this),this._wfMinusClick=jindo.$Fn(this._onMinusClick,this),this._wfWheel=jindo.$Fn(this._onWheel,this),this._wfFocus=jindo.$Fn(this._onFocus,this),this._wfBlur=jindo.$Fn(this._onBlur,this),this.option("bActivateOnload")&&this.activate()
},_assignHTMLElements:function(){var t=this.option("sClassPrefix");
this._elInput=jindo.$$.getSingle("."+t+"input",this._el),this._elPlusButton=jindo.$$.getSingle("."+t+"plus",this._el),this._elMinusButton=jindo.$$.getSingle("."+t+"minus",this._el)
},reset:function(){this._elInput.value=this.option("nDefaultValue").toFixed(this.option("nDecimalPoint"))
},getValue:function(){return parseFloat(this._elInput.value)
},setValue:function(t){"number"!=typeof t&&(t=this.option("nDefaultValue"));
var e=this.option("nMin"),i=this.option("nMax"),n={nValue:t,nMin:e,nMax:i};
this.fireEvent("beforeChange",n)&&((n.nValue>i||n.nValue<e)&&(this.fireEvent("overLimit",n),n.nValue=Math.max(e,Math.min(i,n.nValue))),this._elInput.value=n.nValue.toFixed(this.option("nDecimalPoint")),this.fireEvent("change",n))
},getBaseElement:function(){return this._el
},getInputElement:function(){return this._elInput
},getPlusElement:function(){return this._elPlusButton
},getMinusElement:function(){return this._elMinusButton
},isFocused:function(){return this._bIsOnFocus
},_onActivate:function(){var t=this.getInputElement();
this._wfPlusClick.attach(this.getPlusElement(),"click"),this._wfMinusClick.attach(this.getMinusElement(),"click"),this._wfFocus.attach(t,"focus"),this._wfBlur.attach(t,"blur"),this.option("bUseMouseWheel")&&this._wfWheel.attach(t,"mousewheel"),this._elInput.readOnly=this.option("bInputReadOnly"),this.reset()
},_onDeactivate:function(){var t=this.getInputElement();
this._wfPlusClick.detach(this.getPlusElement(),"click"),this._wfMinusClick.detach(this.getMinusElement(),"click"),this._wfFocus.detach(t,"focus"),this._wfBlur.detach(t,"blur"),this._wfWheel.detach(t,"mousewheel")
},_onMinusClick:function(){this.setValue(this.getValue()-this.option("nStep"))
},_onPlusClick:function(){this.setValue(this.getValue()+this.option("nStep"))
},_onWheel:function(t){this.isFocused()&&(t.stop(jindo.$Event.CANCEL_DEFAULT),t.mouse().delta>0?this._onPlusClick():this._onMinusClick())
},_onFocus:function(){this._bIsOnFocus=!0
},_onBlur:function(){this._bIsOnFocus=!1,this.setValue(this.getValue()),this._elInput.readOnly=this.option("bInputReadOnly")
}}).extend(jindo.UIComponent),jindo.Pagination=jindo.$Class({$init:function(t,e){this._elPageList=jindo.$(t),this._welPageList=jindo.$Element(this._elPageList),this._waPage=jindo.$A([]),this._fClickPage=jindo.$Fn(this._onClickPageList,this),this.option({bActivateOnload:!0,nItem:10,nItemPerPage:10,nPagePerPageList:10,nPage:1,sMoveUnit:"pagelist",bAlignCenter:!1,sInsertTextNode:"",sClassPrefix:"",sClassFirst:"first-child",sClassLast:"last-child",sPageTemplate:"<a href='#'>{=page}</a>",sCurrentPageTemplate:"<strong>{=page}</strong>",elFirstPageLinkOn:jindo.$$.getSingle("a."+this._wrapPrefix("pre_end"),this._elPageList),elPrevPageLinkOn:jindo.$$.getSingle("a."+this._wrapPrefix("pre"),this._elPageList),elNextPageLinkOn:jindo.$$.getSingle("a."+this._wrapPrefix("next"),this._elPageList),elLastPageLinkOn:jindo.$$.getSingle("a."+this._wrapPrefix("next_end"),this._elPageList),elFirstPageLinkOff:jindo.$$.getSingle("span."+this._wrapPrefix("pre_end"),this._elPageList),elPrevPageLinkOff:jindo.$$.getSingle("span."+this._wrapPrefix("pre"),this._elPageList),elNextPageLinkOff:jindo.$$.getSingle("span."+this._wrapPrefix("next"),this._elPageList),elLastPageLinkOff:jindo.$$.getSingle("span."+this._wrapPrefix("next_end"),this._elPageList)}),this.option(e||{}),this.option("bActivateOnload")&&this.activate()
},option:function(t,e){var i=jindo.Component.prototype.option.apply(this,arguments);
if("object"==typeof t||"undefined"!=typeof e){var n=this.option("sMoveUnit"),s=this.option("bAlignCenter");
if(s&&"pageunit"===n){throw new Error('Invalid Option : sMoveUnit can\'t be set to "pageunit" when bAlignCenter is true.')
}}return i
},_wrapPrefix:function(t){var e=this.option("sClassPrefix");
return e?e+t.replace(/_/g,"-"):t
},getBaseElement:function(){return this._elPageList
},getItemCount:function(){return this.option("nItem")
},setItemCount:function(t){this.option({nItem:t})
},getItemPerPage:function(){return this.option("nItemPerPage")
},setItemPerPage:function(t){this.option("nItemPerPage",t)
},getCurrentPage:function(){return this._nCurrentPage
},getFirstItemOfPage:function(t){return this.getItemPerPage()*(t-1)+1
},getPageOfItem:function(t){return Math.ceil(t/this.getItemPerPage())
},_getLastPage:function(){return Math.ceil(this.getItemCount()/this.getItemPerPage())
},_getRelativePage:function(t){var e=null,i="page"==this.option("sMoveUnit"),n=this._getPageList(this.getCurrentPage());
switch(t){case"pre_end":e=1;
break;
case"next_end":e=this._getLastPage();
break;
case"pre":e=i?this.getCurrentPage()-1:(n-1)*this.option("nPagePerPageList");
break;
case"next":e=i?this.getCurrentPage()+1:n*this.option("nPagePerPageList")+1
}return e
},_getPageList:function(t){if(this.option("bAlignCenter")){var e=Math.floor(this.option("nPagePerPageList")/2),i=t-e;
return i=Math.max(i,1),i=Math.min(i,this._getLastPage())
}return Math.ceil(t/this.option("nPagePerPageList"))
},_isIn:function(t,e){return e?t===e?!0:jindo.$Element(t).isChildOf(e):!1
},_getPageElement:function(t){for(var e=0,i=this._waPage.$value().length;
i>e;
e++){var n=this._waPage.get(e);
if(this._isIn(t,n)){return n
}}return null
},_onClickPageList:function(t){t.stop(jindo.$Event.CANCEL_DEFAULT);
var e=null,i=this.option(),n=t.element;
if(this._isIn(n,i.elFirstPageLinkOn)){e=this._getRelativePage("pre_end")
}else{if(this._isIn(n,i.elPrevPageLinkOn)){e=this._getRelativePage("pre")
}else{if(this._isIn(n,i.elNextPageLinkOn)){e=this._getRelativePage("next")
}else{if(this._isIn(n,i.elLastPageLinkOn)){e=this._getRelativePage("next_end")
}else{var s=this._getPageElement(n);
if(!s){return
}e=parseInt(jindo.$Element(s).text(),10)
}}}}this.fireEvent("click",{nPage:e,weEvent:t})&&this.movePageTo(e)
},_convertToAvailPage:function(t){var e=this._getLastPage();
return t=Math.max(t,1),t=Math.min(t,e)
},movePageTo:function(t,e){"undefined"==typeof e&&(e=!0),t=this._convertToAvailPage(t),this._nCurrentPage=t,(!e||this.fireEvent("beforeMove",{nPage:t}))&&(this._paginate(t),e&&this.fireEvent("move",{nPage:t}))
},reset:function(t){"undefined"==typeof t&&(t=this.option("nItem")),this.setItemCount(t),this.movePageTo(1,!1)
},_onActivate:function(){jindo.$Element.prototype.preventTapHighlight&&this._welPageList.preventTapHighlight(!0),this._fClickPage.attach(this._elPageList,"click"),this.setItemCount(this.option("nItem")),this.movePageTo(this.option("nPage"),!1),this._welPageList.addClass(this._wrapPrefix("loaded"))
},_onDeactivate:function(){jindo.$Element.prototype.preventTapHighlight&&this._welPageList.preventTapHighlight(!1),this._fClickPage.detach(this._elPageList,"click"),this._welPageList.removeClass(this._wrapPrefix("loaded"))
},_addTextNode:function(){var t=this.option("sInsertTextNode");
this._elPageList.appendChild(document.createTextNode(t))
},_paginate:function(t){this._empty(),this._addTextNode();
var e=this.option(),i=e.elFirstPageLinkOn,n=e.elPrevPageLinkOn,s=e.elNextPageLinkOn,o=e.elLastPageLinkOn,a=e.elFirstPageLinkOff,r=e.elPrevPageLinkOff,h=e.elNextPageLinkOff,l=e.elLastPageLinkOff,c=this._getLastPage(),u=this._getPageList(t),d=this._getPageList(c);
0===c?this._welPageList.addClass(this._wrapPrefix("no-result")):1==c?this._welPageList.addClass(this._wrapPrefix("only-one")).removeClass(this._wrapPrefix("no-result")):this._welPageList.removeClass(this._wrapPrefix("only-one")).removeClass(this._wrapPrefix("no-result"));
var f,_;
if(e.bAlignCenter){var g=Math.floor(e.nPagePerPageList/2);
f=t-g,f=Math.max(f,1),_=f+e.nPagePerPageList-1,_>c&&(f=c-e.nPagePerPageList+1,f=Math.max(f,1),_=c)
}else{f=(u-1)*e.nPagePerPageList+1,_=u*e.nPagePerPageList,_=Math.min(_,c)
}"page"==e.sMoveUnit&&(u=t,d=c),t>1?i&&(this._welPageList.append(i),this._addTextNode()):a&&(this._welPageList.append(a),this._addTextNode()),u>1?n&&(this._welPageList.append(n),this._addTextNode()):r&&(this._welPageList.append(r),this._addTextNode());
for(var p,v,m=f;
_>=m;
m++){m==t?p=jindo.$(jindo.$Template(e.sCurrentPageTemplate).process({page:m.toString()})):(p=jindo.$(jindo.$Template(e.sPageTemplate).process({page:m.toString()})),this._waPage.push(p)),v=jindo.$Element(p),m==f&&v.addClass(this._wrapPrefix(this.option("sClassFirst"))),m==_&&v.addClass(this._wrapPrefix(this.option("sClassLast"))),this._welPageList.append(p),this._addTextNode()
}d>u?s&&(this._welPageList.append(s),this._addTextNode()):h&&(this._welPageList.append(h),this._addTextNode()),c>t?o&&(this._welPageList.append(o),this._addTextNode()):l&&(this._welPageList.append(l),this._addTextNode())
},_empty:function(){var t=this.option(),e=t.elFirstPageLinkOn,i=t.elPrevPageLinkOn,n=t.elNextPageLinkOn,s=t.elLastPageLinkOn,o=t.elFirstPageLinkOff,a=t.elPrevPageLinkOff,r=t.elNextPageLinkOff,h=t.elLastPageLinkOff;
t.elFirstPageLinkOn=this._clone(e),t.elPrevPageLinkOn=this._clone(i),t.elLastPageLinkOn=this._clone(s),t.elNextPageLinkOn=this._clone(n),t.elFirstPageLinkOff=this._clone(o),t.elPrevPageLinkOff=this._clone(a),t.elLastPageLinkOff=this._clone(h),t.elNextPageLinkOff=this._clone(r),this._waPage.empty(),this._welPageList.empty()
},_clone:function(t){return t&&t.cloneNode?t.cloneNode(!0):t
}}).extend(jindo.UIComponent),jindo.RollingChart=jindo.$Class({_nIndexOfRolling:0,_bIsRolling:!1,$init:function(t,e){var i={sClassPrefix:"rollingchart-",sDirection:"down",nFPS:50,nDuration:300,nRollingInterval:100,sUrl:"",sRequestType:"jsonp",sRequestMethod:"get",htRequestParameter:null,nRequestInterval:10000,bActivateOnload:!0};
this.option(i),this.option(e||{}),this._el=jindo.$(t),this._assignHTMLElements(),this._initTimer(),this._initRolling(),this.option("bActivateOnload")&&this.activate()
},_assignHTMLElements:function(){this._elList=jindo.$$.getSingle("ol",this._el),this._aItems=jindo.$$("> li",this._elList)
},getList:function(){return this._elList
},getItems:function(){return this._aItems
},getListOfItem:function(t){return jindo.$$.getSingle("ul",t)
},isRolling:function(){return this._bIsRolling
},_initTimer:function(){this._oRequestTimer=new jindo.Timer
},getTimer:function(){return this._oRequestTimer
},_initRolling:function(){var t=this;
this._oRollingEventHandler={end:function(){setTimeout(function(){t.fireEvent("afterRolling",{nIndex:t._nIndexOfRolling}),t._roll(t._nIndexOfRolling+1)
},t.option("nRollingInterval"))
}},this._oRolling=new jindo.Rolling(this._el,{nFPS:this.option("nFPS"),nDuration:this.option("nDuration"),sDirection:"vertical",fEffect:jindo.Effect.linear})
},getRolling:function(){return this._oRolling
},_setItemIndexToRolling:function(t){var e=this.getListOfItem(this.getItems()[t]),i=this.getRolling();
i._el=e,i._elList=e
},_onActivate:function(){var t=this;
this.getTimer().start(function(){return t._stopRequest(),t._request(),!0
},this.option("nRequestInterval"))
},_onDeactivate:function(){this.getTimer().abort()
},_request:function(){if(!this.isRolling()){var t=this.option(),e=t.sUrl,i=t.htRequestParameter,n=this;
this._oAjax=jindo.$Ajax(e,{type:t.sRequestType,method:t.sRequestMethod,onload:function(t){try{var e={htResponseJSON:t.json()};
if(!n.fireEvent("response",e)){return
}if(!n.fireEvent("beforeUpdate")){return
}var i=e.htResponseJSON;
n._addItemToRolling(i),n.getRolling().getTransition().attach(n._oRollingEventHandler),n._roll(0)
}catch(s){}}}),n.fireEvent("request")&&this._oAjax.request(i)
}},_stopRequest:function(){try{this._oAjax.abort(),this._oAjax=null
}catch(t){}},_addItemToRolling:function(t){var e=this,i=this.option("sDirection");
jindo.$A(this.getItems()).forEach(function(n,s){var o=jindo.$Element(jindo.$("<li>"));
o.html(t.items[s]);
var a=e.getListOfItem(n);
"down"==i?(a.insertBefore(o.$value(),a.firstChild),a.scrollTop=9999):(jindo.$Element(a).append(o.$value()),a.scrollTop=0)
})
},_removeItemRolled:function(){var t=this,e=this.option("sDirection");
jindo.$A(this.getItems()).forEach(function(i){if("down"==e){jindo.$Element(jindo.$$("li",t.getListOfItem(i))[1]).leave()
}else{var n=t.getListOfItem(i);
jindo.$Element(jindo.$$.getSingle("li",n)).leave(),n.scrollTop=0
}}),this._nIndexOfRolling=0
},_roll:function(t){this._bIsRolling=!0,this._nIndexOfRolling=t,this.fireEvent("beforeRolling",{nIndex:t});
var e=t;
if(e==this.getItems().length){return this._removeItemRolled(),this._nIndexOfRolling=0,this.getRolling().getTransition().detach(this._oRollingEventHandler),this._bIsRolling=!1,void this.fireEvent("afterUpdate")
}this._setItemIndexToRolling(e);
var i=1;
"down"==this.option("sDirection")&&(i=-1),this.getRolling().moveBy(i)
}}).extend(jindo.UIComponent),jindo.RolloverArea=jindo.$Class({$init:function(t,e){this.option({sClassName:"rollover",sClassPrefix:"rollover-",bCheckMouseDown:!0,bActivateOnload:!0,htStatus:{sOver:"over",sDown:"down"}}),this.option(e||{}),this._elArea=jindo.$(t),this._aOveredElements=[],this._aDownedElements=[],this._wfMouseOver=jindo.$Fn(this._onMouseOver,this),this._wfMouseOut=jindo.$Fn(this._onMouseOut,this),this._wfMouseDown=jindo.$Fn(this._onMouseDown,this),this._wfMouseUp=jindo.$Fn(this._onMouseUp,this),this.option("bActivateOnload")&&this.activate()
},_addOvered:function(t){this._aOveredElements.push(t)
},_removeOvered:function(t){this._aOveredElements.splice(jindo.$A(this._aOveredElements).indexOf(t),1)
},_addStatus:function(t,e){jindo.$Element(t).addClass(this.option("sClassPrefix")+e)
},_removeStatus:function(t,e){jindo.$Element(t).removeClass(this.option("sClassPrefix")+e)
},_isInnerElement:function(t,e){return t===e?!0:jindo.$Element(t).isParentOf(e)
},_onActivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elArea).preventTapHighlight(!0),this._wfMouseOver.attach(this._elArea,"mouseover"),this._wfMouseOut.attach(this._elArea,"mouseout"),this.option("bCheckMouseDown")&&(this._wfMouseDown.attach(this._elArea,"mousedown"),this._wfMouseUp.attach(document,"mouseup"))
},_onDeactivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elArea).preventTapHighlight(!1),this._wfMouseOver.detach(this._elArea,"mouseover"),this._wfMouseOut.detach(this._elArea,"mouseout"),this._wfMouseDown.detach(this._elArea,"mousedown"),this._wfMouseUp.detach(document,"mouseup"),this._aOveredElements.length=0,this._aDownedElements.length=0
},_findRollover:function(t){var e=this.option("sClassName");
return jindo.$$.test(t,"."+e)?t:jindo.$$.getSingle("! ."+e,t)
},_onMouseOver:function(t){for(var e,i=t.element,n=t.relatedElement;
i=this._findRollover(i);
i=i.parentNode){n&&this._isInnerElement(i,n)||(this._addOvered(i),e={element:i,htStatus:this.option("htStatus"),weEvent:t},this.fireEvent("over",e)&&this._addStatus(e.element,e.htStatus.sOver))
}},_onMouseOut:function(t){for(var e,i=t.element,n=t.relatedElement;
i=this._findRollover(i);
i=i.parentNode){n&&this._isInnerElement(i,n)||(this._removeOvered(i),e={element:i,htStatus:this.option("htStatus"),weEvent:t},this.fireEvent("out",e)&&this._removeStatus(e.element,e.htStatus.sOver))
}},_onMouseDown:function(t){for(var e,i=t.element;
i=this._findRollover(i);
){e={element:i,htStatus:this.option("htStatus"),weEvent:t},this._aDownedElements.push(i),this.fireEvent("down",e)&&this._addStatus(e.element,e.htStatus.sDown),i=i.parentNode
}},_onMouseUp:function(t){var e,i,n,s=t.element,o=[],a=this._aDownedElements;
for(n=0;
i=a[n];
n++){o.push({element:i,htStatus:this.option("htStatus"),weEvent:t})
}for(;
s=this._findRollover(s);
s=s.parentNode){jindo.$A(a).indexOf(s)>-1||o.push({element:s,htStatus:this.option("htStatus"),weEvent:t})
}for(n=0;
e=o[n];
n++){this.fireEvent("up",e)&&this._removeStatus(e.element,e.htStatus.sDown)
}this._aDownedElements=[]
}}).extend(jindo.UIComponent),jindo.RolloverClick=jindo.$Class({$init:function(t,e){this.option({bActivateOnload:!0,sCheckEvent:"click",bCheckDblClick:!1,RolloverArea:{sClassName:"rollover",sClassPrefix:"rollover-",bCheckMouseDown:!1,bActivateOnload:!1,htStatus:{sOver:"over",sDown:"down"}}}),this.option(e||{});
var i=this;
this._oRolloverArea=new jindo.RolloverArea(t,this.option("RolloverArea")).attach({over:function(t){i.fireEvent("over",t)||t.stop()
},out:function(t){i.fireEvent("out",t)||t.stop()
}}),this._wfClick=jindo.$Fn(this._onClick,this),this._wfDblClick=jindo.$Fn(this._onClick,this),this.option("bActivateOnload")&&this.activate()
},_onClick:function(t){var e=t.element,i="click";
for("dblclick"==t.type&&(i=t.type);
e=this._oRolloverArea._findRollover(e);
){this.fireEvent(i,{element:e,htStatus:this._oRolloverArea.option("htStatus"),weEvent:t}),e=e.parentNode
}},_onActivate:function(){this._wfClick.attach(this._oRolloverArea._elArea,this.option("sCheckEvent")),this.option("bCheckDblClick")&&this._wfDblClick.attach(this._oRolloverArea._elArea,"dblclick"),this._oRolloverArea.activate()
},_onDeactivate:function(){this._wfClick.detach(this._oRolloverArea._elArea,this.option("sCheckEvent")),this._wfDblClick.detach(this._oRolloverArea._elArea,"dblclick"),this._oRolloverArea.deactivate()
}}).extend(jindo.UIComponent),jindo.Slider=jindo.$Class({_elTrack:null,_aThumbs:null,_aPoses:null,_htSwap:null,$init:function(t,e){this.option({sClassPrefix:"slider-",bVertical:!1,bJump:!0,bDragOnTrack:!0,fAdjustValue:null,nMinValue:0,nMaxValue:1,bActivateOnload:!0}),this.option(e||{}),this._htSwap=this.option("bVertical")?{y:"nX",x:"nY",clientX:"clientY",pageX:"pageY",offsetWidth:"offsetHeight",left:"top"}:{y:"nY",x:"nX",clientX:"clientX",pageX:"pageX",offsetWidth:"offsetWidth",left:"left"},this._elTrack=jindo.$(t),this._aThumbs=jindo.$$("."+this.option("sClassPrefix")+"thumb",this._elTrack),this._sRand="S"+parseInt(100000000*Math.random(),10),jindo.$ElementList(this._aThumbs).addClass(this._sRand),this._aPoses=this.positions(),this._onTrackMouseDownFn=jindo.$Fn(this._onTrackMouseDown,this),this._initDragArea(),this.option("bActivateOnload")&&this.activate()
},getTrack:function(){return this._elTrack
},getThumb:function(t){return this._aThumbs[t]
},_initDragArea:function(){var t=this,e=this._htSwap;
this._oDragArea=new jindo.DragArea(this._elTrack,{sClassName:this._sRand,bFlowOut:!1}).attach({beforeDrag:function(i){var n=t._getThumbIndex(i.elHandle),s={nIndex:n,nPos:i[e.x],bJump:!1};
return t.fireEvent("beforeChange",s)?(i[e.x]=t._getAdjustedPos(n,s.nPos),void (i[e.y]=null)):(i.stop(),!1)
},drag:function(i){var n=t._getThumbIndex(i.elHandle),s=i[e.x];
s!=t._aPoses[n]&&(t._aPoses[n]=s,t._fireChangeEvent(n))
}})
},getDragArea:function(){return this._oDragArea
},_fireChangeEvent:function(t){var e=this._getPosition(t);
this.fireEvent("change",{nIndex:t,nPos:e,nValue:this._getValue(t,e)})
},_onActivate:function(){this.getDragArea().activate(),jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elTrack).preventTapHighlight(!0),this._onTrackMouseDownFn.attach(this._elTrack,"mousedown")
},_onDeactivate:function(){this.getDragArea().deactivate(),jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elTrack).preventTapHighlight(!1),this._onTrackMouseDownFn.detach(this._elTrack,"mousedown")
},_onTrackMouseDown:function(t){if(this.option("bJump")){t.stop(jindo.$Event.CANCEL_DEFAULT);
var e=0,i=this._htSwap,n=t.element,s="."+this.option("sClassPrefix")+"thumb",o=jindo.$$.test(n,s)||jindo.$$.getSingle("! "+s,n);
if(!o){var a=t.pos()[i.pageX];
a-=jindo.$Element(this._elTrack).offset()[i.left];
for(var r,h=9999999,l=0;
r=this._aThumbs[l];
l++){var c=parseInt(jindo.$Element(r).css(i.left),10)||0;
c+=parseInt(r[i.offsetWidth]/2,10);
var u=Math.abs(a-c);
h>u&&(h=u,e=l)
}a-=parseInt(this._aThumbs[e][i.offsetWidth]/2,10),this.positions(e,a),this.option("bDragOnTrack")&&this.getDragArea().startDragging(this._aThumbs[e])
}}},_getTrackInfo:function(t){var e=this._htSwap,i=this._aThumbs[t],n=i[e.offsetWidth],s=this._elTrack[e.offsetWidth],o=s-n,a=this.option("nMaxValue"),r=this.option("nMinValue");
return{maxPos:o,max:a,min:r}
},_getValue:function(t,e){"undefined"==typeof e&&(e=this._getPosition(t));
var i=this._getTrackInfo(t),n=0;
0!==i.maxPos&&(n=e*(i.max-i.min)/i.maxPos);
var s=n+i.min;
s=Math.min(Math.max(s,Math.min(i.min,i.max)),Math.max(i.min,i.max));
var o=this.option("fAdjustValue");
return o&&(s=o.call(this,s)),s
},_getAdjustedPos:function(t,e){var i=e,n=this._getTrackInfo(t),s=this.option("fAdjustValue");
if(s){var o=Math.min(Math.max(i*(n.max-n.min)/n.maxPos+n.min,n.min),n.max),a=s.call(this,o);
o!=a&&(i=n.maxPos*(a-n.min)/(n.max-n.min))
}return i=Math.max(i,0),i=Math.min(i,n.maxPos)
},_getThumbIndex:function(t){for(var e=0,i=this._aThumbs.length;
i>e;
e++){if(this._aThumbs[e]==t){return e
}}return -1
},_getPosition:function(t){var e=jindo.$Element(this._aThumbs[t]).css(this._htSwap.left);
return"auto"==e?0:parseInt(e,10)
},_setPosition:function(t,e){this._aPoses[t]=e,jindo.$Element(this._aThumbs[t]).css(this._htSwap.left,e+"px")
},positions:function(t,e,i){switch("undefined"==typeof i&&(i=!0),arguments.length){case 0:var n=[];
return jindo.$A(this._aThumbs).forEach(function(t,e){n[e]=this._getPosition(e)
},this),n;
case 1:return this._getPosition(t);
default:if(i){var s={nIndex:t,nPos:e,bJump:!0};
if(this.fireEvent("beforeChange",s)){var o=this._getAdjustedPos(t,s.nPos),a=o!=this._aPoses[t];
this._setPosition(t,o),a&&this._fireChangeEvent(t)
}return this
}return this._setPosition(t,this._getAdjustedPos(t,e)),this
}},values:function(t,e,i){switch("undefined"==typeof i&&(i=!0),arguments.length){case 0:for(var n=[],s=0,o=this._aThumbs.length;
o>s;
s++){n[s]=this._getValue(s)
}return n;
case 1:return this._getValue(t,this.positions(t));
default:var a=this._getTrackInfo(t);
return this.positions(t,(e-a.min)*a.maxPos/(a.max-a.min)||0,i),this
}}}).extend(jindo.UIComponent),jindo.ScrollBar=new jindo.$Class({_bMouseEnter:!1,_bIsEventAttachedForCommon:!1,_bIsEventAttachedForVertical:!1,_bIsEventAttachedForHorizontal:!1,$init:function(t,e){this.option({sClassPrefix:"scrollbar-",nDelta:16,sClassNameForRollover:"rollover",bActivateOnload:!0}),this.option(e||{}),this._el=jindo.$(t),this._oOldPos={left:null,top:null},this._oTimer=new jindo.Timer,this._oTransition=(new jindo.Transition).fps(30),this._wfOnMouseEnter=jindo.$Fn(this._onMouseEnter,this),this._wfOnMouseLeave=jindo.$Fn(this._onMouseLeave,this),this._wfOnWheel=jindo.$Fn(this._onWheel,this),this._wfOnMouseUp=jindo.$Fn(this._onMouseUp,this),this._assignHTMLElements(),this._initialize4Tablet(),this.option("bActivateOnload")&&this.activate()
},_assignHTMLElements:function(){var t=this._el,e=this.option("sClassPrefix");
this._elBox=jindo.$$.getSingle("."+e+"box",t),this._elContent=jindo.$$.getSingle("."+e+"content",t);
var i=jindo.$Element(this._elBox),n=jindo.$Element(this._elContent);
this._oBoxSize={nWidth:i.width(),nHeight:i.height()},this._oContentSize={nWidth:n.width(),nHeight:n.height()},this._oHorizontal={elScrollBar:jindo.$$.getSingle("."+e+"h",t)};
var s=this._oHorizontal;
s.elScrollBar&&(s.elTrack=jindo.$$.getSingle("."+e+"track",s.elScrollBar),s.elThumb=jindo.$$.getSingle("."+e+"thumb",s.elTrack),s.elThumbHead=jindo.$$.getSingle("."+e+"thumb-head",s.elThumb),s.elThumbBody=jindo.$$.getSingle("."+e+"thumb-body",s.elThumb),s.elThumbFoot=jindo.$$.getSingle("."+e+"thumb-foot",s.elThumb),s.elButtonLeft=jindo.$$.getSingle("."+e+"button-left",s.elScrollBar),s.elButtonRight=jindo.$$.getSingle("."+e+"button-right",s.elScrollBar)),this._oVertical={elScrollBar:jindo.$$.getSingle("."+e+"v",t)};
var o=this._oVertical;
o.elScrollBar&&(o.elTrack=jindo.$$.getSingle("."+e+"track",o.elScrollBar),o.elThumb=jindo.$$.getSingle("."+e+"thumb",o.elTrack),o.elThumbHead=jindo.$$.getSingle("."+e+"thumb-head",o.elThumb),o.elThumbBody=jindo.$$.getSingle("."+e+"thumb-body",o.elThumb),o.elThumbFoot=jindo.$$.getSingle("."+e+"thumb-foot",o.elThumb),o.elButtonUp=jindo.$$.getSingle("."+e+"button-up",o.elScrollBar),o.elButtonDown=jindo.$$.getSingle("."+e+"button-down",o.elScrollBar))
},getBox:function(){return this._elBox
},getContent:function(){return this._elContent
},getDefaultBoxSize:function(){return this._oBoxSize
},getDefaultContentSize:function(){return this._oContentSize
},getScrollBarHorizontal:function(){return this._oHorizontal
},getScrollBarVertical:function(){return this._oVertical
},getSliderHorizontal:function(){return this._oSliderHorizontal||null
},getSliderVertical:function(){return this._oSliderVertical||null
},getRolloverArea:function(){return this._oRolloverArea
},_attachEvent:function(t){function e(t){if(t.elScrollBar){var e=o.option("sClassNameForRollover");
jindo.$Element(t.elTrack).addClass(e),jindo.$Element(t.elThumb).addClass(e),t.elButtonLeft&&jindo.$Element(t.elButtonLeft).addClass(e),t.elButtonRight&&jindo.$Element(t.elButtonRight).addClass(e),t.elButtonUp&&jindo.$Element(t.elButtonUp).addClass(e),t.elButtonDown&&jindo.$Element(t.elButtonDown).addClass(e)
}}function i(){o._bIsEventAttachedForHorizontal||e(a),o._bIsEventAttachedForHorizontal=!0
}function n(){o._bIsEventAttachedForVertical||e(r),o._bIsEventAttachedForVertical=!0
}var s=this.option("sClassPrefix"),o=this,a=this.getScrollBarHorizontal(),r=this.getScrollBarVertical();
this._bIsEventAttachedForCommon||(this._initSliders(),this._initRolloverArea(),this._wfOnMouseEnter.attach(this._el,"mouseenter"),this._wfOnMouseLeave.attach(this._el,"mouseleave"),this._wfOnWheel.attach(document,"mousewheel"),this._wfOnMouseUp.attach(document,"mouseup"),this._bIsEventAttachedForCommon=!0,jindo.$Element(this._el).removeClass(s+"noscript")),t||(i(),n()),"horizontal"==t&&i(),"vertical"==t&&n()
},_detachEvent:function(t){function e(t){if(t.elScrollBar){var e=o.option("sClassNameForRollover");
jindo.$Element(t.elTrack).removeClass(e),jindo.$Element(t.elThumb).removeClass(e),t.elButtonLeft&&jindo.$Element(t.elButtonLeft).removeClass(e),t.elButtonRight&&jindo.$Element(t.elButtonRight).removeClass(e),t.elButtonUp&&jindo.$Element(t.elButtonUp).removeClass(e),t.elButtonDown&&jindo.$Element(t.elButtonDown).removeClass(e)
}}function i(){o._bIsEventAttachedForHorizontal&&e(a),o._bIsEventAttachedForHorizontal=!1
}function n(){o._bIsEventAttachedForVertical&&e(r),o._bIsEventAttachedForVertical=!1
}var s=this.option("sClassPrefix"),o=this,a=this.getScrollBarHorizontal(),r=this.getScrollBarVertical();
t?"horizontal"==t?i():"vertical"==t&&n():(i(),n()),!this._bIsEventAttachedForCommon||this._bIsEventAttachedForHorizontal||this._bIsEventAttachedForVertical||(this._wfOnMouseEnter.detach(this._el,"mouseenter"),this._wfOnMouseLeave.detach(this._el,"mouseleave"),this._wfOnWheel.detach(document,"mousewheel"),this._wfOnMouseUp.detach(document,"mouseup"),this._bMouseEnter=!1,this._bIsEventAttachedForCommon=!1,this.getRolloverArea().deactivate(),jindo.$Element(this._el).addClass(s+"noscript"))
},_activateH:function(){var t=this.getSliderHorizontal();
t&&(t.activate(),this.getBox().scrollLeft=0,this.setScrollLeft(0))
},_activateV:function(){var t=this.getSliderVertical();
t&&(t.activate(),this.getBox().scrollTop=0,this.setScrollTop(0))
},_onActivate:function(t){return this._attachEvent(t||null),this._activate4Tablet(),t?"horizontal"==t?void this._activateH():"vertical"==t?void this._activateV():void 0:(this._activateH(),this._activateV(),void jindo.$Element(this._el).removeClass(this.option("sClassPrefix")+"noscript"))
},_deactivateH:function(){var t=this.getSliderHorizontal();
t&&(t.deactivate(),this.getContent().style.left="0px",this.getBox().scrollLeft=0)
},_deactivateV:function(){var t=this.getSliderVertical();
t&&(t.deactivate(),this.getContent().style.top="0px",this.getBox().scrollTop=0)
},_onDeactivate:function(t){return this._detachEvent(t||null),this._deactivate4Tablet(),t?"horizontal"==t?void this._deactivateH():"vertical"==t?void this._deactivateV():void 0:(this._deactivateH(),this._deactivateV(),void jindo.$Element(this._el).addClass(this.option("sClassPrefix")+"noscript"))
},_initSliders:function(){var t=this,e=this.option("sClassPrefix"),i=this.getScrollBarHorizontal(),n=this.getScrollBarVertical();
i.elScrollBar&&(this._nScrollWidth=jindo.$Element(this._elContent).width()-jindo.$Element(this._elBox).width(),this._oSliderHorizontal=new jindo.Slider(i.elTrack,{sClassPrefix:e,bVertical:!1,nMinValue:0,nMaxValue:this._nScrollWidth}),this._oSliderHorizontal._oTransition=(new jindo.Transition).fps(30),this._oSliderHorizontal.attach({beforeChange:function(e){var i=jindo.$Element(this.getTrack()).width(),n=jindo.$Element(this.getThumb(e.nIndex)).width(),s=i-n;
e.nPos=Math.min(e.nPos,s),e.nPos=Math.max(e.nPos,0),e.bJump?(e.stop(),this._oTransition.abort().start(200,this.getThumb(e.nIndex),{"@left":jindo.Effect.easeOut(e.nPos+"px")}).attach({playing:function(e){t.setScrollLeft(t._oSliderHorizontal._getValue(0,parseInt(e.sValue,10)))
}})):t.setScrollLeft(this._getValue(0,e.nPos))
}})),n.elScrollBar&&(this._nScrollHeight=jindo.$Element(this._elContent).height()-jindo.$Element(this._elBox).height(),this._oSliderVertical=new jindo.Slider(n.elTrack,{sClassPrefix:e,bVertical:!0,nMinValue:0,nMaxValue:this._nScrollHeight}),this._oSliderVertical._oTransition=(new jindo.Transition).fps(30),this._oSliderVertical.attach({beforeChange:function(e){var i=jindo.$Element(this.getTrack()).height(),n=jindo.$Element(this.getThumb(e.nIndex)).height(),s=i-n;
e.nPos=Math.min(e.nPos,s),e.nPos=Math.max(e.nPos,0),e.bJump?(e.stop(),this._oTransition.abort().start(200,this.getThumb(e.nIndex),{"@top":jindo.Effect.easeOut(e.nPos+"px")}).attach({playing:function(){t.setScrollTop(t._oSliderVertical.values(0))
}})):t.setScrollTop(this._getValue(0,e.nPos))
}}))
},_initRolloverArea:function(){var t=this,e=this.option("sClassPrefix"),i=this.option("sClassNameForRollover");
this._oRolloverArea=new jindo.RolloverArea(this._el,{sClassName:i,sClassPrefix:e}).attach({over:function(e){e.stop(),t._onRollover("over",e.element)
},down:function(e){e.stop(),t._onMouseDown(e.element),t._onRollover("down",e.element)
},up:function(e){e.stop(),t._onMouseUp(e.element),t._onRollover("up",e.element)
},out:function(e){e.stop(),t._onRollover("out",e.element)
}})
},reset:function(){var t=this.getSliderHorizontal(),e=this.getSliderVertical();
t&&(this._nScrollWidth=jindo.$Element(this._elContent).width()-jindo.$Element(this._elBox).width(),t.option("nMaxValue",this._nScrollWidth),this.setScrollLeft(0)),e&&(this._nScrollHeight=jindo.$Element(this._elContent).height()-jindo.$Element(this._elBox).height(),e.option("nMaxValue",this._nScrollHeight),this.setScrollTop(0)),this._elBox.scrollLeft=0,this._elBox.scrollTop=0
},hasScrollBarHorizontal:function(){var t=this.option("sClassPrefix"),e=this.getScrollBarHorizontal();
if(e.elScrollBar){var i=jindo.$Element(e.elScrollBar);
return i.visible()||i.hasClass(t+"show")
}return !1
},hasScrollBarVertical:function(){var t=this.option("sClassPrefix"),e=this.getScrollBarVertical();
if(e.elScrollBar){var i=jindo.$Element(e.elScrollBar);
return i.visible()||i.hasClass(t+"show")
}return !1
},setScrollTop:function(t){t=Math.min(t,this._nScrollHeight||0),t=Math.max(t,0),t=Math.round(t);
var e={sDirection:"top",nPosition:t};
jindo.$Element(this._elContent).css("top",-1*e.nPosition+"px");
var i=this.getSliderVertical();
i&&i.values(0,e.nPosition,!1),this._fireScrollEvent(e)
},setScrollLeft:function(t){t=Math.min(t,this._nScrollWidth||0),t=Math.max(t,0),t=Math.round(t);
var e={sDirection:"left",nPosition:t};
jindo.$Element(this._elContent).css("left",-1*e.nPosition+"px");
var i=this.getSliderHorizontal();
i&&i.values(0,e.nPosition,!1),this._fireScrollEvent(e)
},setScrollTopBy:function(t){this.setScrollTop(this.getScrollTop()+t)
},setScrollLeftBy:function(t){this.setScrollLeft(this.getScrollLeft()+t)
},getScrollTop:function(){return -1*parseInt(jindo.$Element(this._elContent).css("top"),10)
},getScrollLeft:function(){return -1*parseInt(jindo.$Element(this._elContent).css("left"),10)
},_getElementType:function(t){var e=this.option("sClassPrefix");
return t.hasClass(e+"track")?"track":t.hasClass(e+"thumb")?"thumb":t.hasClass(e+"button-up")?"button-up":t.hasClass(e+"button-up")?"button-up":t.hasClass(e+"button-down")?"button-down":t.hasClass(e+"button-left")?"button-left":t.hasClass(e+"button-right")?"button-right":!1
},_fireScrollEvent:function(t){this._oOldPos[t.sDirection]!==t.nPosition&&(this._oOldPos[t.sDirection]=t.nPosition,this.fireEvent("scroll",t))
},_onWheel:function(t){if(this._bMouseEnter){t.stop(jindo.$Event.CANCEL_DEFAULT);
var e=t.mouse().delta,i=0===e?0:e/Math.abs(e)*-1,n=Math.ceil(Math.abs(e))*i*this.option("nDelta"),s=this.hasScrollBarHorizontal(),o=this.hasScrollBarVertical();
if(s||o){return this.hasScrollBarVertical()&&this._bIsEventAttachedForVertical?void this.setScrollTop(this.getScrollTop()+n):void this.setScrollLeft(this.getScrollLeft()+n)
}}},_onMouseDown:function(t){var e,i=jindo.$Element(t),n=this,s=this._getElementType(i);
switch(s){case"button-up":e=function(t){n.setScrollTopBy(~~(-1*t))
};
break;
case"button-down":e=function(t){n.setScrollTopBy(t)
};
break;
case"button-left":e=function(t){n.setScrollLeftBy(~~(-1*t))
};
break;
case"button-right":e=function(t){n.setScrollLeftBy(t)
};
break;
default:return
}e(16),this._oTimer.start(function(){return e(16),!0
},100)
},_onMouseUp:function(){this._oTimer.abort()
},_onMouseEnter:function(){this._bMouseEnter=!0
},_onMouseLeave:function(){this._bMouseEnter=!1
},_onRollover:function(t,e){var i=jindo.$Element(e),n=this.option("sClassPrefix"),s=this._getElementType(i);
switch(t){case"over":i.addClass(n+s+"-over");
break;
case"down":i.addClass(n+s+"-hold");
break;
case"up":i.removeClass(n+s+"-hold");
break;
case"out":i.removeClass(n+s+"-over")
}},_initialize4Tablet:function(){this._fpOnTouchDragStart=jindo.$Fn(function(t){this._oPos4Tablet=t.pos()
},this),this._fpOnTouchDragMove=jindo.$Fn(function(t){if(this._oPos4Tablet){var e=this._oPos4Tablet,i=t.pos();
this.setScrollLeftBy(e.pageX-i.pageX),this.setScrollTopBy(e.pageY-i.pageY),this._oPos4Tablet=i,t.stopDefault()
}},this),this._fpOnTouchDragEnd=jindo.$Fn(function(){this._oPos4Tablet=null
},this)
},_activate4Tablet:function(){var t=this._elContent;
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(!0),this._fpOnTouchDragStart.attach(t,"touchstart"),this._fpOnTouchDragMove.attach(t,"touchmove"),this._fpOnTouchDragEnd.attach(t,"touchend")
},_deactivate4Tablet:function(){var t=this._elContent;
jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(!1),this._fpOnTouchDragStart.detach(t,"touchstart"),this._fpOnTouchDragMove.detach(t,"touchmove"),this._fpOnTouchDragEnd.detach(t,"touchend")
}}).extend(jindo.UIComponent),jindo.ScrollBox=new jindo.$Class({$init:function(t,e){this.option({sClassPrefix:"scrollbar-",bActivateOnload:!0,sOverflowX:"auto",sOverflowY:"auto",bAdjustThumbSize:!0,nMinThumbSize:50,nDelta:16}),this.option(e||{}),this._el=jindo.$(t),this.option("bActivateOnload")&&(this.activate(),this.reset())
},reset:function(){this._autoToggleScrollBar();
var t=this.hasScrollBarHorizontal(),e=this.hasScrollBarVertical();
this._adjustBoxSize(),this._adjustContentSize(),this._autoToggleScrollBar(),(t!=this.hasScrollBarHorizontal()||e!=this.hasScrollBarVertical())&&(this._adjustBoxSize(),this._adjustContentSize()),this._autoToggleAvailability(),this._adjustTrackSize(),this._adjustThumbSize(),this.$super.reset()
},_onActivate:function(){this.$super._onActivate(),this.reset()
},_onDeactivate:function(){this.$super._onDeactivate(),this._adjustBoxSize()
},setSize:function(t,e){t&&jindo.$Element(this._el).css("width",t+"px"),e&&jindo.$Element(this._el).css("height",e+"px"),this.setBoxSize(t,e),this._oBoxSize={nWidth:jindo.$Element(this._elBox).width(),nHeight:jindo.$Element(this._elBox).height()},this.reset()
},getContentSize:function(){var t=jindo.$Element(this._elContent);
return{nWidth:parseInt(t.width(),10),nHeight:parseInt(t.height(),10)}
},setContentSize:function(t,e){var i=jindo.$Element(this._elContent);
t&&(1/0==t?i.css("width",""):i.css("width",t+"px")),e&&(1/0==e?i.css("height","auto"):i.css("height",e+"px")),this.$super.reset()
},getBoxSize:function(){var t=jindo.$Element(this._elBox);
return{nWidth:parseInt(t.width(),10),nHeight:parseInt(t.height(),10)}
},setBoxSize:function(t,e){var i=jindo.$Element(this._elBox);
t&&i.css("width",t+"px"),e&&i.css("height",e+"px"),this.$super.reset()
},getTrackSize:function(t){if(!t.elScrollBar){return{nWidth:0,nHeight:0}
}var e=jindo.$Element(t.elTrack);
return{nWidth:parseInt(e.width(),10),nHeight:parseInt(e.height(),10)}
},setTrackSize:function(t,e,i){var n=jindo.$Element(t.elTrack);
e&&n.css("width",e+"px"),i&&n.css("height",i+"px")
},isNeededScrollBarHorizontal:function(){if("scroll"==this.option("sOverflowX")){return !0
}var t=this.getContentSize(),e=this.getDefaultBoxSize();
if(this.getScrollBarHorizontal().elScrollBar&&"hidden"!=this.option("sOverflowX")){if(this.hasScrollBarVertical()&&t.nWidth>e.nWidth-jindo.$Element(this.getScrollBarVertical().elScrollBar).width()){return !0
}if(t.nWidth>e.nWidth){return !0
}}return !1
},isNeededScrollBarVertical:function(){if("scroll"==this.option("sOverflowY")){return !0
}var t=this.getContentSize(),e=this.getDefaultBoxSize();
if(this.getScrollBarVertical().elScrollBar&&"hidden"!=this.option("sOverflowY")){if(this.hasScrollBarHorizontal()&&t.nHeight>e.nHeight-jindo.$Element(this.getScrollBarHorizontal().elScrollBar).height()){return !0
}if(t.nHeight>e.nHeight){return !0
}}return !1
},_autoToggleScrollBar:function(){if(this.isActivating()){var t,e=this.option("sClassPrefix"),i=this.getScrollBarHorizontal(),n=this.getScrollBarVertical(),s=this.option("bAdjustThumbSize"),o=this.isNeededScrollBarVertical();
n.elScrollBar&&(t=jindo.$Element(n.elScrollBar),o?t.addClass(e+"show"):t.removeClass(e+"show"),n.elThumb&&s&&jindo.$Element(n.elThumb).css("height","0px"));
var a=this.isNeededScrollBarHorizontal();
i.elScrollBar&&(t=jindo.$Element(i.elScrollBar),a?t.addClass(e+"show"):t.removeClass(e+"show"),i.elThumb&&s&&jindo.$Element(i.elThumb).css("width","0px")),n.elScrollBar&&(t=jindo.$Element(n.elScrollBar),this.isNeededScrollBarVertical()?t.addClass(e+"show"):t.removeClass(e+"show"),n.elThumb&&s&&jindo.$Element(n.elThumb).css("height","0px"))
}},_adjustTrackSize:function(){if(this.isActivating()){var t=this.getDefaultBoxSize(),e=this.getScrollBarHorizontal(),i=this.getScrollBarVertical(),n=this.isNeededScrollBarHorizontal();
if(n&&e.elScrollBar){var s=t.nWidth,o=jindo.$Element(e.elScrollBar);
o.css("top",t.nHeight-o.height()+"px");
var a=0;
this.hasScrollBarVertical()&&i.elScrollBar&&(a=parseInt(jindo.$Element(i.elScrollBar).width(),10),s-=a),o.width(s);
var r=0;
e.elButtonLeft&&(r=parseInt(jindo.$Element(e.elButtonLeft).width(),10),s-=r),e.elButtonRight&&(s-=parseInt(jindo.$Element(e.elButtonRight).width(),10)),jindo.$Element(e.elTrack).css("left",r+"px"),this.setTrackSize(e,s,null)
}var h=this.isNeededScrollBarVertical();
if(h&&i.elScrollBar){var l=t.nHeight,c=0;
this.hasScrollBarHorizontal()&&e.elScrollBar&&(c=parseInt(jindo.$Element(e.elScrollBar).height(),10),l-=c),i.elButtonUp&&(l-=parseInt(jindo.$Element(i.elButtonUp).height(),10)),i.elButtonDown&&(l-=parseInt(jindo.$Element(i.elButtonDown).height(),10)),this.setTrackSize(i,null,l)
}}},_adjustBoxSize:function(){var t=this.getDefaultBoxSize(),e=this.getScrollBarHorizontal(),i=this.getScrollBarVertical(),n=this.hasScrollBarVertical(),s=this.hasScrollBarHorizontal();
if(this.setBoxSize(t.nWidth,t.nHeight),this.isActivating()){if(s&&e.elScrollBar){var o=t.nHeight;
o-=parseInt(jindo.$Element(e.elScrollBar).height(),10),this.setBoxSize(null,o)
}if(n&&i.elScrollBar){var a=t.nWidth;
a-=parseInt(jindo.$Element(i.elScrollBar).width(),10),this.setBoxSize(a,null)
}}},_adjustContentSize:function(){if(this.isActivating()){var t,e,i=this.getBoxSize(),n="hidden"!=this.option("sOverflowY"),s="hidden"!=this.option("sOverflowX");
n&&!s&&(t=i.nWidth),s&&!n&&(e=i.nHeight),this.setContentSize(t||1/0,e||1/0)
}},_adjustThumbSize:function(){if(this.isActivating()&&this.option("bAdjustThumbSize")){var t=this.option("nMinThumbSize");
"undefined"==typeof t&&(t=50);
var e,i=this.getContentSize(),n=this.getBoxSize(),s=this.getScrollBarHorizontal(),o=this.getScrollBarVertical();
if(o.elScrollBar){var a=this.getTrackSize(o),r=Math.floor(parseInt(a.nHeight*n.nHeight/i.nHeight,10));
isNaN(r)&&(r=0),t>r&&(r=t),r>=a.nHeight&&(r=a.nHeight),jindo.$Element(o.elThumb).height(r),e=0,o.elThumbHead&&(e+=jindo.$Element(o.elThumbHead).height()),o.elThumbFoot&&(e+=jindo.$Element(o.elThumbFoot).height()),o.elThumbBody&&jindo.$Element(o.elThumbBody).height(r-e)
}if(s.elScrollBar){var h=this.getTrackSize(s),l=Math.floor(parseInt(h.nWidth*n.nWidth/i.nWidth,10));
isNaN(l)&&(l=0),t>l&&(l=t),l>=h.nWidth&&(l=h.nWidth),jindo.$Element(s.elThumb).width(l),e=0,s.elThumbHead&&(e+=jindo.$Element(s.elThumbHead).width()),s.elThumbFoot&&(e+=jindo.$Element(s.elThumbFoot).width()),s.elThumbBody&&jindo.$Element(s.elThumbBody).width(l-e)
}}},_autoToggleAvailability:function(){var t=this.option("sClassPrefix"),e=this.getContentSize(),i=this.getBoxSize(),n=this.getScrollBarHorizontal(),s=this.getScrollBarVertical();
n.elScrollBar&&("scroll"==this.option("sOverflowX")&&i.nWidth>=e.nWidth?(jindo.$Element(n.elScrollBar).addClass(t+"disabled"),this.$super._onDeactivate("horizontal"),this.isActivating()&&jindo.$Element(this._el).removeClass(t+"noscript")):(jindo.$Element(n.elScrollBar).removeClass(t+"disabled"),this.isActivating()&&this.$super._onActivate("horizontal"))),s.elScrollBar&&("scroll"==this.option("sOverflowY")&&i.nHeight>=e.nHeight?(jindo.$Element(s.elScrollBar).addClass(t+"disabled"),this.$super._onDeactivate("vertical"),this.isActivating()&&jindo.$Element(this._el).removeClass(t+"noscript")):(jindo.$Element(s.elScrollBar).removeClass(t+"disabled"),this.isActivating()&&this.$super._onActivate("vertical")))
}}).extend(jindo.ScrollBar),jindo.SelectArea=jindo.$Class({_waToggleCandidate:null,_waSelected:null,_aSizeInfo:null,$init:function(t,e){this._el=jindo.$(t),this._wel=jindo.$Element(this._el);
var i={bActivateOnload:!0,sClassName:"selectable",htStatus:{sSelected:"selected"},bMultiSelection:!0,bDragSelect:!0,nThreshold:5,bDeselectAllOutside:!0,bRemainOne:!1,bToggleSelected:!1};
this.option(i),this.option(e||{}),this._waToggleCandidate=jindo.$A([]),this._waSelected=jindo.$A([]),this._sCtrl=jindo.$Agent().os().mac?"meta":"ctrl",this._welRectIndicator=null,this._wfDragStart=jindo.$Fn(this._onDragSelectStart,this),this._wfSelectStart=jindo.$Fn(this._onDragSelectStart,this),this._wfMouseDown=jindo.$Fn(this._onMouseDown,this),this._wfMouseMove=jindo.$Fn(this._onMouseMove,this),this._wfMouseUp=jindo.$Fn(this._onMouseUp,this),this._wfMouseUpWithinSelected=jindo.$Fn(this._onMouseUpWithinSelected,this),this._wfCompute=jindo.$Fn(this._computeSizeAndPos,this),this.option("bActivateOnload")&&this.activate()
},getSelectableElement:function(){return jindo.$$("."+this.option("sClassName"),this._el)
},isSelectable:function(t){return jindo.$Element(t).isChildOf(this._el)&&jindo.$$.test(t,"."+this.option("sClassName"))
},getIndex:function(t){return jindo.$A(this.getSelectableElement()).indexOf(t)
},select:function(t,e,i){t=this._convertArray(t),"undefined"==typeof e&&(e=!1),"undefined"==typeof i&&(i=!0),e&&this.option("bMultiSelection")||this.deselectAll(!1);
for(var n=this._convertArray(this.getSelected()).concat(),s=this.option("htStatus"),o=0;
o<t.length;
o++){var a=t[o],r=jindo.$Element(a),h={elSelectable:a,nIndex:this.getIndex(a),bSelectedAgain:1===t.length&&this._vLastSelected===t[0]};
this.isSelectable(a)&&!this.isSelected(a)&&this.fireEvent("beforeSelect",h)&&(h={elSelectable:a,nIndex:this.getIndex(a),bSelectedAgain:1===t.length&&this._vLastSelected===t[0]},r.addClass(s.sSelected),this._waSelected.push(a),this.fireEvent("select",h))
}return i&&this._fireChangeEvent(n),this
},deselect:function(t,e){t=this._convertArray(t),"undefined"==typeof e&&(e=!0);
for(var i=this._convertArray(this.getSelected()).concat(),n=this.option("htStatus"),s=0;
s<t.length;
s++){var o=t[s],a=jindo.$Element(o),r={elSelectable:o,nIndex:this.getIndex(o)};
this.isSelectable(o)&&this.isSelected(o)&&this.fireEvent("beforeDeselect",r)&&(a.removeClass(n.sSelected),this._waSelected=this._waSelected.refuse(o),this.fireEvent("deselect",r))
}return e&&this._fireChangeEvent(i),this
},deselectAll:function(t){return"undefined"==typeof t&&(t=!0),this.deselect(this.getSelected(),t),this
},toggle:function(t,e){t=this._convertArray(t),"undefined"==typeof e&&(e=!0);
for(var i=0;
i<t.length;
i++){var n=t[i];
this.isSelected(n)?this.deselect(n,e):this.select(n,!0,e)
}return this
},getSelected:function(){return this._waSelected.length()>0?1===this._waSelected.length()?this._waSelected.get(0):this._waSelected.$value():null
},isSelected:function(t){return this._waSelected.has(t)
},_getSelectableUntil:function(t){var e=t,i=this._elStartPoint;
if(i&&this.isSelected(i)){var n=jindo.$A(this.getSelectableElement()),s=n.indexOf(i),o=n.indexOf(t);
e=n.slice(Math.min(s,o),Math.min(s,o)+Math.abs(s-o)+1).$value()
}return e
},_findSelectableElement:function(t){var e=this.option("sClassName");
return jindo.$$.test(t,"."+e)?t:jindo.$$.getSingle("! ."+e,t)
},_isChanged:function(t){var e=jindo.$A(t),i=this._convertArray(this.getSelected());
if(t.length!=i.length){return !0
}for(var n=0;
n<i.length;
n++){if(!e.has(i[n])){return !0
}}return !1
},_fireChangeEvent:function(t){this._isChanged(t)&&this.fireEvent("change")
},_convertArray:function(t){return t instanceof Array||(t=t?[t]:[]),t
},_onMouseDown:function(t){var e=t.key(),i=t.mouse(!0);
if(!i.scrollbar){var n=this._findSelectableElement(t.element),s=this._convertArray(this.getSelected()).concat();
if(this._vLastSelected=this.getSelected(),this._waSelectable=jindo.$A(this.getSelectableElement()),this._waLastSelected=jindo.$A(this._convertArray(this._vLastSelected)),n){var o=jindo.$A(this._convertArray(this._vLastSelected)).has(n);
if(this.fireEvent("selectStart",{vLastSelected:this._vLastSelected,elSelectable:n,bWithinSelected:o,weEvent:t})){if(!o||e.shift||e[this._sCtrl]){var a=!1;
if(this.option("bMultiSelection")){if(e.shift){e[this._sCtrl]&&(a=!0);
var r=this._getSelectableUntil(n);
r==n&&(this._elStartPoint=n),this.select(r,a,!1)
}else{this._elStartPoint=n,e[this._sCtrl]?this.toggle(n,!1):this.select(n,a,!1)
}}else{!this.option("bRemainOne")&&this.option("bToggleSelected")&&this.getSelected()==n?this.deselect(n,!1):this.select(n,a,!1)
}this._fireChangeEvent(s),this.fireEvent("selectEnd",{vSelected:this.getSelected()})
}else{this._elWaitMouseUp=n,this._wfMouseUpWithinSelected.attach(this._elWaitMouseUp,"mouseup")
}}}else{this._wfMouseUp.attach(document,"mouseup"),this._wfCompute.attach(window,"resize").attach(this._el,"scroll"),this.option("bMultiSelection")&&this.option("bDragSelect")&&(this._bOverThreshold=null,this._htDragStartPos=t.pos(),this._htDragStartPos.scrollTop=this._el.scrollTop,this._htDragStartPos.scrollLeft=this._el.scrollLeft,this._wfMouseMove.attach(document,"mousemove"))
}}},_onDragSelectStart:function(t){t.stop(jindo.$Event.CANCEL_DEFAULT)
},_getRectangleElement:function(){return !this._welRectIndicator&&this.option("bMultiSelection")&&this.option("bDragSelect")&&(this._welRectIndicator=jindo.$Element(jindo.$('<div style="position:absolute;left:-10px;top:-10px;width:1px;height:1px;margin:0;padding:0;border:1px dotted black;z-index:99999;">')),this._welRectIndicator.appendTo(this._el)),this._welRectIndicator
},getRectangleElement:function(){return this._getRectangleElement().$value()
},_computeSizeAndPos:function(){var t=this._aSizeInfo=[];
jindo.$A(this.getSelectableElement()).forEach(function(e){t.push([e,e.offsetLeft,e.offsetTop,e.offsetLeft+e.offsetWidth,e.offsetTop+e.offsetHeight])
})
},_onMouseMove:function(t){this._htDragEndPos=t.pos();
var e=this._getRectangleElement(),i=e.$value(),n=this._htDragEndPos.pageX-this._htDragStartPos.pageX,s=this._htDragEndPos.pageY-this._htDragStartPos.pageY,o=this._htDragStartPos.layerX,a=this._htDragStartPos.layerY,r=this.option("nThreshold");
if(r&&!this._bOverThreshold){var h=Math.sqrt(n*n+s*s);
if(r>h){return
}this.fireEvent("dragStart"),this._bOverThreshold=!0,this._computeSizeAndPos(),this._nRectX=o,this._nRectY=a,this._nDragDirectionX=1,this._nDragDirectionY=1,e.offset(a,o),t.key()[this._sCtrl]||this.deselectAll(!1)
}var l=n,c=s;
this._placeRect(o,a,l,c),this._setToggleCandidate(this._getSelectableByRect([i,i.offsetLeft,i.offsetTop,i.offsetLeft+i.offsetWidth,i.offsetTop+i.offsetHeight]))
},_placeRect:function(t,e,i,n){var s=this._getRectangleElement();
s.show(),this._nDragDirectionX=t>this._nRectX?1:-1,this._nDragDirectionY=e>this._nRectY?1:-1,i-=(this._el.scrollLeft-this._htDragStartPos.scrollLeft)*this._nDragDirectionX,n-=(this._el.scrollTop-this._htDragStartPos.scrollTop)*this._nDragDirectionY,s.width(Math.max(Math.abs(i),2)).height(Math.max(Math.abs(n),2)),t+=Math.min(i,0),e+=Math.min(n,0),s.css("left",t+"px").css("top",e+"px")
},_getSelectableByRect:function(t){var e=[];
return jindo.$A(this._aSizeInfo).forEach(function(i){i[1]<t[3]&&i[3]>t[1]&&i[2]<t[4]&&i[4]>t[2]&&(e.push(i[0]),jindo.$A.Continue())
}),e
},_setToggleCandidate:function(t){t=this._convertArray(t);
var e=!1;
this._waToggleCandidate.length()!=t.length&&(e=!0);
var i=this.option("htStatus"),n=jindo.$A(t),s=jindo.$A([]);
this._waToggleCandidate.forEach(function(t){n.has(t)||(s.push(t),e=!0)
}),e&&(s.forEach(function(t){this._waToggleCandidate=this._waToggleCandidate.refuse(t),jindo.$Element(t).toggleClass(i.sSelected)
},this),n.forEach(function(t){this.isSelected(t)?jindo.$Element(t).removeClass(i.sSelected):jindo.$Element(t).addClass(i.sSelected)
},this),this._waToggleCandidate=jindo.$A(this._waToggleCandidate.$value().concat(t)).unique(),this.fireEvent("dragSelecting",{aSelectable:this._waToggleCandidate.$value()}))
},_onMouseUp:function(t){var e=!this.isDragging()&&!t.key()[this._sCtrl]&&!this.option("bRemainOne")&&this.option("bDeselectAllOutside"),i=this._waToggleCandidate.length(),n=this._convertArray(this.getSelected()).concat();
e&&this.deselectAll(!1),i&&(this._elStartPoint=this._waToggleCandidate.$value()[0],this.toggle(this._waToggleCandidate.$value())),this._fireChangeEvent(n),this._stopDragging()
},stopSelecting:function(){return this._wfMouseUpWithinSelected.detach(this._elWaitMouseUp,"mouseup"),this
},isDragging:function(){return this._bOverThreshold
},_restore:function(){jindo.$ElementList(this._waToggleCandidate.$value()).removeClass(this.option("htStatus").sSelected),this.deselectAll(!1),this._waLastSelected.$value().length&&this.select(this._waLastSelected.$value(),!1,!1)
},_stopDragging:function(){this._waToggleCandidate.empty(),this._htDragStartPos=null,this._htDragEndPos=null,this._wfMouseMove.detach(document,"mousemove"),this._wfMouseUp.detach(document,"mouseup"),this._wfCompute.detach(window,"resize").detach(this._el,"scroll"),this.isDragging()&&(this._bOverThreshold=null,this._getRectangleElement().hide(),this.fireEvent("dragEnd"))
},stopDragging:function(){return this.isDragging()&&(this._restore(),this._stopDragging()),this
},_onMouseUpWithinSelected:function(t){this.stopSelecting();
var e=this._findSelectableElement(t.element);
e&&e==t.currentElement&&(this.deselectAll(!1),this.select(e,!1,!0))
},_onActivate:function(){this._sMozUserSelect=this._wel.css("MozUserSelect"),this._wel.css("MozUserSelect","none"),jindo.$Element.prototype.preventTapHighlight&&this._wel.preventTapHighlight(!0),this._wfMouseDown.attach(this._el,"mousedown"),this._wfDragStart.attach(this._el,"dragstart"),this._wfSelectStart.attach(this._el,"selectstart")
},_onDeactivate:function(){this._wel.css("MozUserSelect",this._sMozUserSelect||""),jindo.$Element.prototype.preventTapHighlight&&this._wel.preventTapHighlight(!1),this._wfMouseDown.detach(this._el,"mousedown"),this._wfDragStart.detach(this._el,"dragstart"),this._wfSelectStart.detach(this._el,"selectstart")
}}).extend(jindo.UIComponent),jindo.SelectBox=jindo.$Class({sTagName:"select",_bDisabled:!1,_sPrevValue:null,_nSelectedIndex:0,$init:function(t,e){this._aItemData=[],this._aListItem=[],this._aOptions=[],this.option({sClassPrefix:"selectbox-",nWidth:null,nHeight:null,bUseLayerPosition:!0,aOptionHTML:[],aOptionLabel:[],LayerPosition:{sPosition:"outside-bottom",sAlign:"left",nTop:0,nLeft:0},LayerManager:{sCheckEvent:"mousedown",nShowDelay:20,nHideDelay:0}}),this.option(e||{}),this._el=jindo.$(t),this._assignHTMLElements(),this.option("bUseLayerPosition")&&this._initLayerPosition(),this._initLayerManager(),this._initRolloverClick(),this._oTimer=new jindo.Timer,this._wfOnFocusSelect=jindo.$Fn(this._onFocusSelect,this),this._wfOnBlurSelect=jindo.$Fn(this._onBlurSelect,this),this._wfOnMouseDownBox=jindo.$Fn(this._onMouseDownBox,this),this._wfOnMouseDownList=jindo.$Fn(this._onMouseDownList,this),this._wfOnKeyDown=jindo.$Fn(this._onKeyDown,this),this._wfOnMouseWheel=jindo.$Fn(function(t){t.stop(jindo.$Event.CANCEL_DEFAULT),this._elLayer.scrollTop-=16*t.mouse().delta
},this),this._wfOnMouseWheelOnBody=jindo.$Fn(this.close,this),this._oAgent=jindo.$Agent(),this.activate()
},_assignHTMLElements:function(){var t=this.option("sClassPrefix"),e=this._el;
this._wel=jindo.$Element(e),this._elSelect=jindo.$$.getSingle("select."+t+"source",e),this._sSelectInnerHTML=this._elSelect.innerHTML,this._elOptionDefault=jindo.$$.getSingle("option."+t+"default",e),this._elSelectOptionGroup=jindo.$$.getSingle("select."+t+"source-option-group",e),this._elBox=jindo.$$.getSingle("."+t+"box",e),this._elLabel=jindo.$$.getSingle("."+t+"label",e),this._elLayer=jindo.$$.getSingle("."+t+"layer",e),this._elList=jindo.$$.getSingle("."+t+"list",e),this._elList.innerHTML="",this._elSelectList=jindo.$("<ul>"),this._elList.insertBefore(this._elSelectList,this._elList.firstChild)
},getSelectElement:function(){return this._elSelect
},getBoxElement:function(){return this._elBox
},getLabelElement:function(){return this._elLabel
},getLayerElement:function(){return this._elLayer
},getListElement:function(){return this._elList
},getSelectListElement:function(){return this._elSelectList
},_limitWidth:function(){var t=this.option("nWidth");
t&&(jindo.$Element(this.getBoxElement()).css({width:t+"px",overflowX:"hidden"}),jindo.$Element(this.getLayerElement()).css({width:t+"px",overflowX:"hidden",overflowY:"auto"}))
},_limitHeight:function(){var t=this.option("nHeight");
if(t){var e,i=jindo.$Element(this.getLayerElement()),n=i.$value().cloneNode(!0),s=jindo.$Element(n);
s.opacity(0),i.after(s),s.show(),e=s.height(),s.leave(),e>t&&i.css({height:t+"px",overflowX:"hidden",overflowY:"auto"})
}},_initLayerManager:function(){var t=this,e=this.option("sClassPrefix"),i=this.getSelectElement();
this._oLayerManager=new jindo.LayerManager(this.getLayerElement(),this.option("LayerManager")).attach({beforeShow:function(n){t.fireEvent("open")?(t._limitWidth(),t._limitHeight(),setTimeout(function(){try{i.focus()
}catch(t){}},10),t._wel.addClass(e+"open"),t.option("bUseLayerPosition")&&t.getLayerPosition().setPosition()):n.stop()
},show:function(){t._paintSelected()
},beforeHide:function(i){t.fireEvent("close")?t._wel.removeClass(e+"open"):i.stop()
}}).link(this.getBoxElement()).link(this.getLayerElement())
},getLayerManager:function(){return this._oLayerManager
},_initRolloverClick:function(){var t=this,e=this.option("sClassPrefix");
this._oRolloverClick=new jindo.RolloverClick(this.getSelectListElement(),{sCheckEvent:"mouseup",RolloverArea:{sClassName:e+"item",sClassPrefix:e+"item-"}}).attach({over:function(i){t._welOvered&&t._welOvered.removeClass(e+"item-over");
var n=jindo.$Element(i.element);
n.addClass(e+"item-over"),t._welOvered=n
},out:function(t){t.stop()
},click:function(i){var n=t._nSelectedIndex,s=-1;
jindo.$A(t._aItemData).forEach(function(t,e){t.elItem===i.element&&(s=e,jindo.$A.Break())
}),t.fireEvent("click",{nIndex:s,weEvent:i.weEvent})&&(-1!==s&&t.setValue(t._aItemData[s].sValue),s=t.getSelectedIndex(),s!=n&&(jindo.$Element(t.getSelectElement()).fireEvent("change"),t.fireEvent("change",{nIndex:s,nLastIndex:n})),jindo.$Element(i.element).hasClass(e+"notclose")||t.getLayerManager().hide())
}})
},getRolloverClick:function(){return this._oRolloverClick
},_initLayerPosition:function(){this._oLayerPosition=new jindo.LayerPosition(this.getBoxElement(),this.getLayerElement(),this.option("LayerPosition"))
},getLayerPosition:function(){return this._oLayerPosition
},_onActivate:function(){jindo.HTMLComponent.prototype._onActivate.apply(this);
var t=this.option("sClassPrefix"),e=this.getSelectElement();
this._limitWidth(),this._wel.removeClass(t+"noscript"),jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this.getListElement()).preventTapHighlight(!0),this._wfOnFocusSelect.attach(e,"focus"),this._wfOnBlurSelect.attach(e,"blur"),this._wfOnMouseDownBox.attach(this.getBoxElement(),"mousedown"),this._wfOnMouseDownList.attach(this.getListElement(),"mousedown"),this._wfOnKeyDown.attach(e,"keydown"),this._wfOnMouseWheel.attach(e,"mousewheel"),this._wfOnMouseWheelOnBody.attach(document,"mousewheel"),this.paint(),this._sPrevValue=this.getValue()
},_onDeactivate:function(){this.getLayerManager().hide();
var t=this.option("sClassPrefix"),e=this.getSelectElement();
this._wel.addClass(t+"noscript"),jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this.getListElement()).preventTapHighlight(!1),this._wfOnFocusSelect.detach(e,"focus"),this._wfOnBlurSelect.detach(e,"blur"),this._wfOnMouseDownBox.detach(this.getBoxElement(),"mousedown"),this._wfOnMouseDownList.detach(this.getListElement(),"mousedown"),this._wfOnKeyDown.detach(e,"keydown"),this._wfOnMouseWheel.detach(e,"mousewheel"),this._wfOnMouseWheelOnBody.detach(document,"mousewheel"),jindo.HTMLComponent.prototype._onDeactivate.apply(this)
},getValueOf:function(t){for(var e,i=0;
e=this._aItemData[i];
i++){if(e.sText==t){return e.sValue
}}return null
},getValue:function(){var t=this.getSelectElement();
return t.options[t.selectedIndex].value
},getText:function(){var t=this._aItemData[this._nSelectedIndex];
return t&&t.sText||""
},getHTML:function(){return this.getLabelElement().innerHTML
},setValue:function(t){this.getSelectElement().value=t,this._sPrevValue=this.getValue(),this._paint()
},getSelectedIndex:function(){return this.getSelectElement().selectedIndex
},setSelectedIndex:function(t,e){if("undefined"==typeof e&&(e=!0),this._isSelectable(t)){var i=this.getSelectedIndex();
return this._setSelectedIndex(t),this._paint(),e&&i!=t&&this.fireEvent("change",{nIndex:t,nLastIndex:i}),!0
}return !1
},_setSelectedIndex:function(t){this.getSelectElement().selectedIndex=t
},_isSelectable:function(t){var e=this._aItemData[t];
return !e||e.bDisabled||e.bDefault?!1:!0
},getOptions:function(){return this._aOptions
},getListItems:function(){return this._aListItem
},getDisabled:function(){return this._bDisabled
},setOptionGroup:function(t){if(!this._elSelectOptionGroup||!this._elOptionDefault){return !1
}var e=this.getSelectElement(),i=this.option("sClassPrefix"),n=jindo.$$("."+i+"option-group-"+t,this._elSelectOptionGroup),s=this._elOptionDefault=this._elOptionDefault.cloneNode(!0);
e.innerHTML="",e.appendChild(s),this._nSelectedIndex=0;
for(var o=0;
o<n.length;
o++){e.appendChild(n[o].cloneNode(!0))
}return this._sPrevValue=this.getValue(),this.paint(),!0
},isSelected:function(){return !this._aItemData[this.getSelectedIndex()].bDefault
},setDefault:function(){var t=-1;
jindo.$A(this._aItemData).forEach(function(e,i){(e.bDefault||e.bSelected)&&(t=i)
}),0>t&&(t=0),this._nSelectedIndex=t,this._setSelectedIndex(t),this._sPrevValue=this.getValue(),this._paint()
},paint:function(){this._paintList(),this._paintSelected(),this._paintLabel(),this.getLayerManager().setLayer(this.getLayerElement())
},_paint:function(){this._paintSelected(),this._paintLabel()
},_paintLabel:function(){var t=jindo.$Element(this.getLabelElement()),e=this.option("aOptionHTML")[this._nSelectedIndex]||"",i=this.option("aOptionLabel")[this._nSelectedIndex]||"",n=this.getText();
e?t.html(i?i:e):t.text(n),t.attr("unselectable","on")
},_paintList:function(){var t=this.option("sClassPrefix");
this._aOptions=jindo.$$("option",this.getSelectElement());
var e=this._aOptions;
this._aItemData=[],this._aListItem=[],this._nSelectedIndex=0;
var i=this.getSelectListElement();
i.innerHTML="",this.option("nHeight")&&jindo.$Element(this.getLayerElement()).css("height","auto");
for(var n,s=[],o=[],a=0;
n=e[a];
a++){var r=jindo.$Element(n),h=r.hasClass(t+"default"),l="selected"==r.attr("selected"),c=h||n.disabled,u=this.option("aOptionHTML")[a]||"",d=r.text()||"",f=r.attr("value");
f||(r.attr("value",d),f=d),this._aItemData[a]={elOption:n,elItem:null,sHTML:u,sText:d,sValue:f,bDisabled:c,bSelected:l,bDefault:h};
var _=null,g=this._aItemData[a];
g.bDefault||(s.push(['<li style="',g.elOption.style.cssText,'" ','class="',g.elOption.className," ",t+(g.bDisabled?"item-disabled":"item"),'" unselectable="on">',g.sHTML||jindo.$S(g.sText).escapeHTML(),"</li>"].join("")),o.push(a))
}i.innerHTML=s.join("");
for(var p=i.childNodes,v=0,m=p.length;
m>v;
v++){var _=p[v];
this._aListItem.push(_),this._aItemData[o[v]].elItem=_
}return jindo.$Element(this.getLayerElement()).visible()&&(this._limitWidth(),this._limitHeight()),this._elSelect.disabled?void this.disable():void this.enable()
},_paintSelected:function(){var t,e=this.option("sClassPrefix"),i=this.getSelectedIndex(),n=this._nSelectedIndex;
if(this._welSelected&&(this._welSelected.removeClass(e+"item-selected"),this._welSelected=null),this._welOvered&&(this._welOvered.removeClass(e+"item-over"),this._welOvered=null),i=Math.min(i,this._aItemData.length-1),this._nSelectedIndex=i,t=this._aItemData[i],t&&t.elItem){var s=t.elItem,o=jindo.$Element(s);
if(this._welSelected=this._welOvered=o,o.addClass(e+"item-selected").addClass(e+"item-over"),this.isLayerOpened()){var a,r=this.getLayerElement(),h=parseInt(jindo.$Element(r).css("height"),10),l=s.offsetTop,c=s.offsetHeight,u=r.scrollTop;
a=i>n?!0:!1,(u>l||l>u+h)&&(r.scrollTop=l),a?l+c>h+u&&(r.scrollTop=l+c-h):u>l&&(r.scrollTop=l)
}}},isLayerOpened:function(){return this.getLayerManager().getVisible()
},disable:function(){this.getLayerManager().hide();
var t=this.option("sClassPrefix");
this._wel.addClass(t+"disabled"),this.getSelectElement().disabled=!0,this._bDisabled=!0
},enable:function(){var t=this.option("sClassPrefix");
this._wel.removeClass(t+"disabled"),this.getSelectElement().disabled=!1,this._bDisabled=!1
},open:function(){return this._bDisabled||this.getLayerManager().show(),this
},close:function(){return this.getLayerManager().hide(),this
},_onMouseDownBox:function(t){t.stop(jindo.$Event.CANCEL_DEFAULT),this._bDisabled||this.getLayerManager().toggle()
},_onMouseDownList:function(t){jindo.$$.getSingle("! ."+this.option("sClassPrefix")+"notclose",t.element)||t.stop(jindo.$Event.CANCEL_DEFAULT)
},_getSelectableIndex:function(t,e){var i,n=-1,s=this._aItemData.length-1;
for(i=0;
i<this._aItemData.length;
i++){this._isSelectable(i)&&(0>n?n=i:s=i)
}switch(e){case -1:if(t==n){return t
}for(i=t-1;
i>n;
i--){if(this._isSelectable(i)){return i
}}return n;
case 1:if(t==s){return t
}for(i=t+1;
s>i;
i++){if(this._isSelectable(i)){return i
}}return s;
case 1/0:return s;
case -1/0:return n
}},_onKeyDown:function(t){var e=t.key();
if(this._oAgent.os().mac&&this._oAgent.navigator().safari||this._oAgent.navigator().ie&&6==this._oAgent.navigator().version){var i=e.keyCode;
9!=i&&t.stop(jindo.$Event.CANCEL_DEFAULT);
var n=this.getSelectedIndex(),s=n;
switch(i){case 37:s=this._getSelectableIndex(n,-1);
break;
case 38:s=this._getSelectableIndex(n,-1);
break;
case 39:s=this._getSelectableIndex(n,1);
break;
case 40:s=this._getSelectableIndex(n,1);
break;
case 33:s=this._getSelectableIndex(n,-1/0);
break;
case 34:s=this._getSelectableIndex(n,1/0);
break;
case 13:this.getLayerManager().hide();
break;
case 9:this.getLayerManager().hide()
}var o={nIndex:s,nLastIndex:parseInt(this._nSelectedIndex,10)};
this._setSelectedIndex(s),this._paint(),o.nIndex!=o.nLastIndex&&this.fireEvent("change",o)
}else{this.isLayerOpened()&&(e.enter||9==e.keyCode)&&this.getLayerManager().hide()
}},_restoreLeftTimer:null,_onFocusSelect:function(){var t=this.option("sClassPrefix"),e=this._wel;
if(elSelect=this.getSelectElement(),n=this,!this._restoreLeftTimer){var i=elSelect.style.left||"";
elSelect.style.left="auto",this._restoreLeftTimer=setTimeout(function(){elSelect.style.left=i,n._restoreLeftTimer=null
},0)
}if(!this.isLayerOpened()&&!this.fireEvent("focus")){return void this.getSelectElement().blur()
}if(e.addClass(t+"focused"),!this._oAgent.os().mac||!this._oAgent.navigator().safari){var n=this;
this._oTimer.start(function(){var t=n.getValue();
if(n._sPrevValue&&n._sPrevValue!=t){var e=n.getSelectElement().selectedIndex;
if(!n._isSelectable(e)){var i=-(n._nSelectedIndex-e);
return i=i>0?1:-1,n._setSelectedIndex(n._getSelectableIndex(n._nSelectedIndex,i,e)),!0
}var s={nIndex:e,nLastIndex:parseInt(n._nSelectedIndex,10)};
n._paint(),s.nIndex!=s.nLastIndex&&n.fireEvent("change",s),n._sPrevValue=t
}return !0
},10)
}},_onBlurSelect:function(){var t=this,e=this.option("sClassPrefix");
this.fireEvent("blur"),this._wel.removeClass(e+"focused"),setTimeout(function(){t._oTimer.abort()
},10)
}}).extend(jindo.HTMLComponent),jindo.StarRating=jindo.$Class({$init:function(t,e){var i={nStep:1,nMaxValue:10,nDefaultValue:0,bSnap:!1,bActivateOnload:!0};
this.option(i),this.option(e||{}),this._el=jindo.$(t),this._wel=jindo.$Element(t),this._assignHTMLElements(),this._wfMouseMove=jindo.$Fn(this._onMouseMove,this),this._wfMouseLeave=jindo.$Fn(this._onMouseLeave,this),this._wfClick=jindo.$Fn(this._onClick,this),this.option("bActivateOnload")&&this.activate()
},_assignHTMLElements:function(){this._elRatingElement=jindo.$$.getSingle("span",this.getBaseElement()),this._welRatingElement=jindo.$Element(this._elRatingElement)
},getBaseElement:function(){return this._el
},getRatingElement:function(){return this._elRatingElement
},getValue:function(){return this._nValue
},getValueByWidth:function(){return this._welRatingElement.width()/this._nBaseWidth*this.option("nMaxValue")
},getValueToBeSet:function(t){return t=this._round(t,this.option("nStep")),t=Math.min(t,this.option("nMaxValue")),t=Math.max(t,0)
},setValue:function(t,e){"undefined"==typeof e&&(e=!0);
var i=this.option("nMaxValue");
t=this.getValueToBeSet(t);
var n=this._nBaseWidth*t/i;
return n=Math.min(n,this._nBaseWidth),this._welRatingElement.width(n),this._nValue=t,e&&this.fireEvent("set",{nValue:this._nValue}),this
},reset:function(){var t=this.option("nDefaultValue")||0;
return this.setValue(t,!1),this
},_round:function(t,e){var i,n,s=t,o=Math.floor(t),a=o+1,r=1;
for(n=o;
a>=n;
n+=e){i=Math.abs(t-n),r>=i&&(r=i,s=n)
}return s.toFixed(Math.max(e.toString().length-2,0))
},_onActivate:function(){var t=this.getBaseElement();
this._wfMouseMove.attach(t,"mousemove"),this._wfMouseLeave.attach(t,"mouseleave"),this._wfClick.attach(t,"click"),this._nBaseWidth=this._wel.width(),this.reset()
},_onDeactivate:function(){var t=this.getBaseElement();
this._wfMouseMove.detach(t,"mousemove"),this._wfMouseLeave.detach(t,"mouseleave"),this._wfClick.detach(t,"click")
},_onMouseMove:function(t){var e,i=t.pos(!0).offsetX+1,n=i>this._nBaseWidth?this._nBaseWidth:i;
this.option("bSnap")&&(e=i/this._nBaseWidth*this.option("nMaxValue"),n=this._round(e,this.option("nStep"))*this._nBaseWidth/this.option("nMaxValue"),n=Math.min(n,this._nBaseWidth)),this._welRatingElement.css("width",n+"px"),e=this.getValueByWidth(),this.fireEvent("move",{nValue:e,nValueToBeSet:this.getValueToBeSet(e)})
},_onMouseLeave:function(){this.setValue(this._nValue,!1),this.fireEvent("out")
},_onClick:function(){this.setValue(this.getValueByWidth())
}}).extend(jindo.UIComponent),jindo.TabControl=jindo.$Class({_bIsActivating:!1,_nCurrentIndex:null,_welSelectedTab:null,_welSelectedPanel:null,$init:function(t,e){var i={sClassPrefix:"tc-",sCheckEvent:"click",bActivateOnload:!0};
this.option(i),this.option(e||{}),this._el=jindo.$(t),this._wfEventTab=jindo.$Fn(this._onEventTab,this),this._assignHTMLElements(),this.option("bActivateOnload")&&(this._selectTab(this._elSelectedTab),this.activate())
},_assignHTMLElements:function(){var t=this.option("sClassPrefix"),e=this._el;
this._aTab=jindo.$$("."+t+"tab",e),this._aPanel=jindo.$$("."+t+"panel",e),this._elSelectedTab=jindo.$$.getSingle("."+t+"tab."+t+"selected",e)||this.getTab(0),this._waTab=jindo.$A(this._aTab)
},getTab:function(t){return this.getTabs()[t]
},getTabs:function(){return this._aTab
},getPanel:function(t){return this.getPanels()[t]
},getPanels:function(){return this._aPanel
},selectTab:function(t,e){"undefined"==typeof e&&(e=!0),this._selectTab(this.getTab(t),e)
},getIndex:function(t){return this._waTab.indexOf(t)
},getCurrentIndex:function(){return this._nCurrentIndex
},_selectTab:function(t,e){"undefined"==typeof e&&(e=!0);
var i=this.option("sClassPrefix"),n=this.getIndex(t),s=this.getPanel(n);
if(!e||this.fireEvent("beforeSelect",{nIndex:n,elTab:t,elPanel:s})){var o=jindo.$Element(t);
this._welSelectedTab&&this._welSelectedTab.removeClass(i+"selected"),this._welSelectedTab=o,o.addClass(i+"selected");
var a=jindo.$Element(s);
this._welSelectedPanel&&this._welSelectedPanel.removeClass(i+"selected"),this._welSelectedPanel=a,a.addClass(i+"selected"),this._nCurrentIndex=n,e&&this.fireEvent("select",{nIndex:n,elTab:t,elPanel:s})
}},getBaseElement:function(){return this._el
},_onActivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(!0),this._wfEventTab.attach(this._el,this.option("sCheckEvent"))
},_onDeactivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(!1),this._wfEventTab.detach(this._el,this.option("sCheckEvent"))
},_onEventTab:function(t){if(this.fireEvent(t.type,{weEvent:t})){var e=this.option("sClassPrefix"),i=t.element,n=jindo.$$.test(i,"."+e+"tab")?i:jindo.$$.getSingle("! ."+e+"tab",i);
n&&this._selectTab(n)
}}}).extend(jindo.UIComponent),jindo.UploadQueue=jindo.$Class({_states:{NONE:"NONE",WAIT:"WAIT",PROGRESS:"PROGRESS",LOAD:"LOAD",ERROR:"ERROR"},_callbackForFlash:{buttonOver:function(){this.fireEvent("buttonOver")
},buttonOut:function(){this.fireEvent("buttonOut")
},selectFile:function(t){this._addQueue(t)
},selectFileError:function(t){this.fireEvent("selectError",{sMessage:t})
},start:function(){},progress:function(t){var e=t.sKey,i=this._getFileObj(e,t.oFile);
i.state===this._states.PROGRESS&&this.fireEvent("uploadProgress",{oFile:i,sKey:e})
},load:function(t){var e=t.sKey,i=this._getFileObj(e,t.oFile),n=t.sResponse;
this._setDoneState(e,i,"uploadLoad",i.size,1,this._states.LOAD,n)
},error:function(){this._setDoneState(sKey,oFile,"uploadError",0,0,this._states.ERROR)
}},_showFlashForFlash:function(t){if(t){var e=t.offset(),i=this._getFlash();
this._elDummy.style.left=e.left+"px",this._elDummy.style.top=e.top+"px",this._elDummy.style.width=i.style.width=t.width()+"px",this._elDummy.style.height=i.style.height=t.height()+"px"
}else{this._elDummy.style.left=this._elDummy.style.top=0,this._elDummy.style.width=this._elDummy.style.height="1px"
}},_createFlashForFlash:function(t){if(!this._elDummy){var e=this._elDummy=jindo.$("<div>"),i=t,n=this.option("sSwfPath"),s=jindo.$Agent();
e.style.cssText="position:absolute !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:hidden !important; z-index:32001 !important;",document.body.insertBefore(e,document.body.firstChild),s.flash().version>=11&&s.navigator().ie&&(n+="?"+Math.floor(10000*Math.random()));
var o={bMultiple:this.option("bMultiple"),sJSFunctionName:"jindo.UploadQueue.__flashCallback."+t,nButtonOpacity:0,sParamName:this.option("sParamName"),sURL:this._url},a=nhn.FlashObject.generateTag(n,"UPLOADQUEUE"+i,50,50,{flashVars:o,wmode:"transparent"});
a=a.replace(/style="position:relative !important;"/gi,'style="position:absolute !important; left:0 !important; top:0 !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:visible !important;"'),e.innerHTML=a,this._showFlashForFlash(!1),this._getFlash=function(){return nhn.FlashObject.find("UPLOADQUEUE"+i)
}
}},_sendForFlash:function(t,e){if(this._getFlash){var i=this._getFlash();
i[t].apply(i,e||[])
}},$init:function(t,e){var i="undefined"!=typeof FormData;
this._methodPostfix=i?"ForHTML5":"ForFlash",this.getMethod=function(){return i?"HTML5":"flash"
},this.option({bMultiple:!0,nParallel:1,sParamName:"file"}),this.option(e||{}),this._url=t,this._queue=[],this._uploading=0,this._initialize(),this._attachEvents()
},_getFileObj:function(){var t=this["_getFileObj"+this._methodPostfix];
return(this._getFileObj=t).apply(this,arguments)
},_getFileObjForHTML5:function(t,e){return e
},_getFileObjForFlash:function(t,e){var i=this._flashFiles[t];
if(i&&e){for(var n in e){e.hasOwnProperty(n)&&(i[n]=e[n])
}}return i
},_initialize:function(){var t=this["_initialize"+this._methodPostfix];
return(this._initialize=t).apply(this,arguments)
},_initializeForHTML5:function(){this._xhr={},this._browseButton=new jindo.BrowseButton(this.option("elButton")),this._browseButton.getFileSelect().multiple=this.option("bMultiple")
},_initializeForFlash:function(){this._flashFiles={}
},_attachEvents:function(){var t=this["_attachEvents"+this._methodPostfix];
return(this._attachEvents=t).apply(this,arguments)
},_attachEventsForHTML5:function(){var t=this;
this._browseButton.attach({sourceChange:function(){t._addQueue(this.getFileSelect().files),this.getFileSelect().value=""
},over:function(){t.fireEvent("buttonOver")
},out:function(){t.fireEvent("buttonOut")
}});
var e=jindo.$(this.option("elDropArea")),i=!1,n=function(e,n){e.stopDefault(),i!==n&&(t.fireEvent(n?"dragOver":"dragOut"),i=n)
};
e&&jindo.$Element(e).attach("dragenter",function(t){t.stopDefault()
}).attach("dragover",function(t){n(t,!0)
}).attach("dragleave",function(t){n(t,!1)
}).attach("drop",function(e){n(e,!1),t._addQueue(e.$value().dataTransfer.files)
})
},_attachEventsForFlash:function(){var t=this,e="UQ"+(new Date).getTime()+Math.floor(1000000*Math.random());
jindo.UploadQueue.__flashCallback[e]=function(e,i){var n=t._callbackForFlash[e];
n&&n.apply(t,i||[])
},this._createFlashForFlash(e);
var i=jindo.$Element(this.option("elButton"));
jindo.$Fn(function(){t._showFlashForFlash(i)
}).attach(i,"mousemove")
},_uploadFile:function(){var t=this["_uploadFile"+this._methodPostfix];
return(this._uploadFile=t).apply(this,arguments)
},_uploadFileForFlash:function(t){var e=t.file,i=t.key;
e.state=this._states.PROGRESS,this._uploading++,this._sendForFlash("upload",[[i]])
},_uploadFileForHTML5:function(t){var e=this,i=t.file,n=t.key;
i.state=this._states.PROGRESS,this._uploading++;
var s=new XMLHttpRequest,o=s.upload;
o.addEventListener("progress",function(t){t.lengthComputable&&e._xhr[n]&&(i.loaded=t.loaded,i.rate=t.loaded&&t.loaded/i.size,e.fireEvent("uploadProgress",{oFile:i,sKey:n}))
},!1),o.addEventListener("load",function(){var t=this,o=arguments.callee;
return 4!==s.readyState?void setTimeout(function(){o.call(t)
},0):void (200===s.status?e._setDoneState(n,i,"uploadLoad",i.size,1,e._states.LOAD,s.responseText):e._setDoneState(n,i,"uploadError",0,0,e._states.ERROR))
},!1),o.addEventListener("error",function(){e._setDoneState(n,i,"uploadError",0,0,e._states.ERROR)
},!1),o.addEventListener("abort",function(){e._setDoneState(n,i,"uploadAbort",0,0,e._states.NONE)
},!1),s.open("POST",this._url),s.setRequestHeader("Cache-Control","no-cache"),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-File-Name",i.name),this._xhr[n]=s,this.fireEvent("uploadStart",{oFile:i,sKey:n});
var a=new FormData;
return a.append(this.option("sParamName"),i),s.send(a),!0
},_addQueue:function(t){for(var e=0,i=t.length;
i>e;
e++){t[e].ext=/\.([^\.]+)$/.test(t[e].name)&&RegExp.$1||""
}if(!this.fireEvent("beforeSelect",{aFiles:t})){return !1
}for(var e=0,i=t.length;
i>e;
e++){var n=t[e],s={oFile:n,sKey:"UQ"+(new Date).getTime()+Math.round(100000*Math.random())};
if(this.fireEvent("beforeAdd",s)){var o=s.sKey;
this._queue.push({key:s.sKey,file:n}),n.loaded=0,n.rate=0,n.state=this._states.NONE,this._flashFiles&&(this._flashFiles[s.sKey]=n),this._sendForFlash("setUniqueKeyAt",[e,o]),this.fireEvent("add",{oFile:n,sKey:o})
}}return !0
},_findQueue:function(t){for(var e=0,i=this._queue.length;
i>e;
e++){if(this._queue[e].key===t){return e
}}return -1
},getInfo:function(){for(var t={size:{none:0,wait:0,progress:0,load:0,error:0,total:0},count:{none:0,wait:0,progress:0,load:0,error:0,total:0}},e=0,i=this._queue.length;
i>e;
e++){var n=this._queue[e].file,s=n.state.toLowerCase(),o=n.size;
t.size[s]+=o,t.count[s]++,t.size.total+=o,t.count.total++
}return t
},remove:function(t){var e=typeof t;
switch(e){case"string":var i=this._findQueue(t);
return this._removeFile(i);
case"function":default:for(var n=this._queue.length-1;
n>=0;
n--){var s=this._queue[n];
("function"!==e||t.call(this,s.key,s.file))&&this._removeFile(n)
}}return !0
},_removeFile:function(t){var e=this._queue[t];
if(!e){return !1
}var i=e.file,n=e.key;
return this._abortFile(t),this._queue.splice(t,1),this._flashFiles&&delete this._flashFiles[n],this._sendForFlash("remove",[[n]]),this.fireEvent("remove",{oFile:i,sKey:n}),!0
},abort:function(t){var e=typeof t;
switch(e){case"string":var i=this._findQueue(t);
return this._abortFile(i);
case"function":default:for(var n=this._queue.length-1;
n>=0;
n--){var s=this._queue[n];
("function"!==e||t.call(this,s.key,s.file))&&this._abortFile(n)
}}return !0
},_abortFile:function(t){var e=this._queue[t];
if(!e){return !1
}var i=e.key,n=e.file;
return n.state!==this._states.WAIT&&n.state!==this._states.PROGRESS?!1:(this._xhr&&this._xhr[i]&&this._xhr[i].abort(),this._sendForFlash("abort",[[i]]),this._setDoneState(i,n,"abort",0,0,this._states.NONE),!0)
},reset:function(t){var e=typeof t;
switch(e){case"string":var i=this._findQueue(t);
return this._resetFile(i);
case"function":default:for(var n=this._queue.length-1;
n>=0;
n--){var s=this._queue[n];
("function"!==e||t.call(this,s.key,s.file))&&this._resetFile(n)
}}return !0
},_resetFile:function(t){var e=this._queue[t];
if(!e){return !1
}var i=e.key,n=e.file;
return n.state!==this._states.LOAD&&n.state!==this._states.ERROR?!1:(n.state=this._states.NONE,this.fireEvent("reset",{oFile:n,sKey:i}),!0)
},upload:function(t){var e=typeof t,i=t;
switch(e){case"string":e="function",t=function(t){return i===t
};
case"function":default:for(var n=this._queue.length-1;
n>=0;
n--){var s=this._queue[n];
"function"===e&&!t.call(this,s.key,s.file)||s.file.state!==this._states.NONE||(s.file.state=this._states.WAIT,this.fireEvent("wait",{oFile:s.file,sKey:s.key}))
}}return this._startUploadFile(),!0
},_startUploadFile:function(){var t=this.option("nParallel");
if(this._uploading>=t){return !1
}for(var e=!0,i=0,n=this._queue.length;
n>i;
i++){var s=this._queue[i];
s.file.state===this._states.WAIT?(e=!1,this._uploading<t&&this._uploadFile(s)):s.file.state===this._states.PROGRESS&&(e=!1)
}return e
},_setDoneState:function(t,e,i,n,s,o,a){if(e.state!==o){if("uploadLoad"===i&&!this.fireEvent("beforeUploadLoad",{oFile:e,sKey:t,sResponseText:a})){return this._setDoneState(t,e,"uploadError",0,0,this._states.ERROR)
}var r=e.state===this._states.PROGRESS;
e.loaded=n,e.rate=s,e.state=o,this._xhr&&delete this._xhr[t],this.fireEvent(i,{oFile:e,sKey:t}),r&&this._uploading--;
var h=this._startUploadFile();
this.fireEvent("uploadEnd",{oFile:e,sKey:t,bFinish:h})
}}}).extend(jindo.Component),jindo.UploadQueue.__flashCallback={}
})("jindo");