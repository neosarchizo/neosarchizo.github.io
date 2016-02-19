var jindo=window.jindo||{};
jindo._p_={};
jindo._p_.jindoName="jindo";
if(window[jindo._p_.jindoName]){var __old_j=window[jindo._p_.jindoName];
for(var i in __old_j){jindo[i]=__old_j[i]
}}jindo._p_._j_ag=navigator.userAgent;
jindo._p_._JINDO_IS_IE=/(MSIE|Trident)/.test(jindo._p_._j_ag);
jindo._p_._JINDO_IS_FF=jindo._p_._j_ag.indexOf("Firefox")>-1;
jindo._p_._JINDO_IS_OP=jindo._p_._j_ag.indexOf("Opera")>-1;
jindo._p_._JINDO_IS_SP=jindo._p_._j_ag.indexOf("Safari")>-1;
jindo._p_._JINDO_IS_SF=jindo._p_._j_ag.indexOf("Apple")>-1;
jindo._p_._JINDO_IS_CH=jindo._p_._j_ag.indexOf("Chrome")>-1;
jindo._p_._JINDO_IS_WK=jindo._p_._j_ag.indexOf("WebKit")>-1;
jindo._p_._JINDO_IS_MO=/(iPad|Mobile|Android|Nokia|webOS|BlackBerry|Opera Mini)/.test(jindo._p_._j_ag);
jindo._p_.trim=function(str){return str.replace(/^(\s|　)+/g,"").replace(/(\s|　)+$/g,"")
};
jindo.$Jindo=function(){var cl=arguments.callee;
var cc=cl._cached;
if(cc){return cc
}if(!(this instanceof cl)){return new cl()
}if(!cc){cl._cached=this
}this.version="2.8.1"
};
jindo.$Jindo.VERSION="2.8.1";
jindo._p_.addExtension=function(sClass,sMethod,fpFunction){if(jindo[sClass][sMethod]){jindo.$Jindo._warn(sClass+"."+sMethod+" was overwrite.")
}else{if(/^x/.test(sMethod)){jindo[sClass][sMethod]=fpFunction
}else{jindo.$Jindo._warn("The Extension Method("+sClass+"."+sMethod+") must be used with x prefix.")
}}};
jindo.$Jindo.compatible=function(){return false
};
jindo.$Jindo.mixin=function(oDestination,oSource){g_checkVarType(arguments,{obj:["oDestination:Hash+","oSource:Hash+"]},"<static> $Jindo#mixin");
var oReturn={};
for(var i in oDestination){oReturn[i]=oDestination[i]
}for(i in oSource){if(oSource.hasOwnProperty(i)&&!jindo.$Jindo.isHash(oSource[i])){oReturn[i]=oSource[i]
}}return oReturn
};
jindo._p_._objToString=Object.prototype.toString;
jindo.$Error=function(sMessage,sMethod){this.message="\tmethod : "+sMethod+"\n\tmessage : "+sMessage;
this.type="Jindo Custom Error";
this.toString=function(){return this.message+"\n\t"+this.type
}
};
jindo.$Except={CANNOT_USE_OPTION:"해당 옵션은 사용할 수 없습니다.",CANNOT_USE_HEADER:"type이 jsonp일때 header메서드는 사용할 수 없습니다.",PARSE_ERROR:"파싱중 에러가 발생했습니다.",NOT_FOUND_ARGUMENT:"파라미터가 없습니다.",NOT_STANDARD_QUERY:"css셀렉터가 정상적이지 않습니다.",INVALID_DATE:"날짜 포멧이 아닙니다.",REQUIRE_AJAX:"가 없습니다.",NOT_FOUND_ELEMENT:"엘리먼트가 없습니다.",HAS_FUNCTION_FOR_GROUP:"그룹으로 지우지 않는 경우 detach할 함수가 있어야 합니다.",NONE_ELEMENT:"에 해당하는 엘리먼트가 없습니다.",NOT_SUPPORT_SELECTOR:"는 지원하지 않는 selector입니다.",NOT_SUPPORT_METHOD:"desktop에서 지원하지 않는 메서드 입니다.",JSON_MUST_HAVE_ARRAY_HASH:"get메서드는 json타입이 hash나 array타입만 가능합니다.",MUST_APPEND_DOM:"document에 붙지 않은 엘리먼트를 기준 엘리먼트로 사용할 수 없습니다.",NOT_USE_CSS:"는 css를 사용 할수 없습니다.",NOT_WORK_DOMREADY:"domready이벤트는 iframe안에서 사용할 수 없습니다.",CANNOT_SET_OBJ_PROPERTY:"속성은 오브젝트입니다.\n클래스 속성이 오브젝트이면 모든 인스턴스가 공유하기 때문에 위험합니다.",NOT_FOUND_HANDLEBARS:"",INVALID_MEDIA_QUERY:""};
jindo._p_._toArray=function(aArray){return Array.prototype.slice.apply(aArray)
};
try{Array.prototype.apply(document.documentElement.childNodes)
}catch(e){jindo._p_._toArray=function(aArray){var returnArray=[];
var leng=aArray.length;
for(var i=0;
i<leng;
i++){returnArray.push(aArray[i])
}return returnArray
}
}jindo.$Jindo.isNumeric=function(nNum){return !isNaN(parseFloat(nNum))&&!jindo.$Jindo.isArray(nNum)&&isFinite(nNum)
};
(function(){var oType={Element:1,Document:9};
for(var i in oType){jindo.$Jindo["is"+i]=(function(sType,nNodeNumber){return function(oObj){if(new RegExp(sType).test(jindo._p_._objToString.call(oObj))){return true
}else{if(jindo._p_._objToString.call(oObj)=="[object Object]"&&oObj!==null&&oObj!==undefined&&oObj.nodeType==nNodeNumber){return true
}}return false
}
})(i,oType[i])
}var _$type=["Function","Array","String","Boolean","Date","RegExp"];
for(var i=0,l=_$type.length;
i<l;
i++){jindo.$Jindo["is"+_$type[i]]=(function(type){return function(oObj){return jindo._p_._objToString.call(oObj)=="[object "+type+"]"
}
})(_$type[i])
}})();
jindo.$Jindo.isNode=function(eEle){try{return !!(eEle&&eEle.nodeType)
}catch(e){return false
}};
jindo.$Jindo.isHash=function(oObj){return jindo._p_._objToString.call(oObj)=="[object Object]"&&oObj!==null&&oObj!==undefined&&!!!oObj.nodeType&&!jindo.$Jindo.isWindow(oObj)
};
jindo.$Jindo.isNull=function(oObj){return oObj===null
};
jindo.$Jindo.isUndefined=function(oObj){return oObj===undefined
};
jindo.$Jindo.isWindow=function(oObj){return oObj&&(oObj==window.top||oObj==oObj.window)
};
jindo.$Jindo.Break=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$Jindo.Continue=function(){if(!(this instanceof arguments.callee)){throw new arguments.callee
}};
jindo.$Jindo._F=function(sKeyType){return sKeyType
};
jindo.$Jindo._warn=function(sMessage){window.console&&((console.warn&&console.warn(sMessage),true)||(console.log&&console.log(sMessage),true))
};
jindo.$Jindo._maxWarn=function(nCurrentLength,nMaxLength,sMessage){if(nCurrentLength>nMaxLength){jindo.$Jindo._warn("추가적인 파라미터가 있습니다. : "+sMessage)
}};
jindo.$Jindo.checkVarType=function(aArgs,oRules,sFuncName){var sFuncName=sFuncName||aArgs.callee.name||"anonymous";
var $Jindo=jindo.$Jindo;
var bCompat=$Jindo.compatible();
var fpChecker=aArgs.callee["_checkVarType_"+bCompat];
if(fpChecker){return fpChecker(aArgs,oRules,sFuncName)
}var aPrependCode=[];
aPrependCode.push("var nArgsLen = aArgs.length;");
aPrependCode.push("var $Jindo = "+jindo._p_.jindoName+".$Jindo;");
if(bCompat){aPrependCode.push("var nMatchScore;");
aPrependCode.push("var nMaxMatchScore = -1;");
aPrependCode.push("var oFinalRet = null;")
}var aBodyCode=[];
var nMaxRuleLen=0;
for(var sType in oRules){if(oRules.hasOwnProperty(sType)){nMaxRuleLen=Math.max(oRules[sType].length,nMaxRuleLen)
}}for(var sType in oRules){if(oRules.hasOwnProperty(sType)){var aRule=oRules[sType];
var nRuleLen=aRule.length;
var aBodyPrependCode=[];
var aBodyIfCode=[];
var aBodyThenCode=[];
if(!bCompat){if(nRuleLen<nMaxRuleLen){aBodyIfCode.push("nArgsLen === "+nRuleLen)
}else{aBodyIfCode.push("nArgsLen >= "+nRuleLen)
}}aBodyThenCode.push("var oRet = new $Jindo._varTypeRetObj();");
var nTypeCount=nRuleLen;
for(var i=0;
i<nRuleLen;
++i){/^([^:]+):([^\+]*)(\+?)$/.test(aRule[i]);
var sVarName=RegExp.$1;
var sVarType=RegExp.$2;
var bAutoCast=RegExp.$3?true:false;
if(sVarType==="Variant"){if(bCompat){aBodyIfCode.push(i+" in aArgs")
}aBodyThenCode.push('oRet["'+sVarName+'"] = aArgs['+i+"];");
nTypeCount--
}else{if($Jindo._varTypeList[sVarType]){var vVar="tmp"+sVarType+"_"+i;
aBodyPrependCode.push("var "+vVar+" = $Jindo._varTypeList."+sVarType+"(aArgs["+i+"], "+bAutoCast+");");
aBodyIfCode.push(vVar+" !== "+jindo._p_.jindoName+".$Jindo.VARTYPE_NOT_MATCHED");
aBodyThenCode.push('oRet["'+sVarName+'"] = '+vVar+";")
}else{if(/^\$/.test(sVarType)&&jindo[sVarType]){var sOR="";
var sNativeVarType;
if(bAutoCast){sNativeVarType=({$Fn:"Function",$S:"String",$A:"Array",$H:"Hash",$ElementList:"Array"})[sVarType]||sVarType.replace(/^\$/,"");
if(jindo.$Jindo["is"+sNativeVarType]){sOR=" || $Jindo.is"+sNativeVarType+"(vNativeArg_"+i+")"
}}aBodyIfCode.push("(aArgs["+i+"] instanceof "+jindo._p_.jindoName+"."+sVarType+sOR+")");
aBodyThenCode.push('oRet["'+sVarName+'"] = '+jindo._p_.jindoName+"."+sVarType+"(aArgs["+i+"]);")
}else{if(jindo.$Jindo["is"+sVarType]){var sOR="";
var sWrapedVarType;
if(bAutoCast){sWrapedVarType=({Function:"$Fn",String:"$S",Array:"$A",Hash:"$H"})[sVarType]||"$"+sVarType;
if(jindo[sWrapedVarType]){sOR=" || aArgs["+i+"] instanceof "+jindo._p_.jindoName+"."+sWrapedVarType
}}aBodyIfCode.push("($Jindo.is"+sVarType+"(aArgs["+i+"])"+sOR+")");
aBodyThenCode.push('oRet["'+sVarName+'"] = vNativeArg_'+i+";")
}else{throw new Error("VarType("+sVarType+") Not Found")
}}}}}aBodyThenCode.push('oRet.__type = "'+sType+'";');
if(bCompat){aBodyThenCode.push("nMatchScore = "+(nRuleLen*1000+nTypeCount*10)+" + (nArgsLen === "+nRuleLen+" ? 1 : 0);");
aBodyThenCode.push("if (nMatchScore > nMaxMatchScore) {");
aBodyThenCode.push("    nMaxMatchScore = nMatchScore;");
aBodyThenCode.push("    oFinalRet = oRet;");
aBodyThenCode.push("}")
}else{aBodyThenCode.push("return oRet;")
}aBodyCode.push(aBodyPrependCode.join("\n"));
if(aBodyIfCode.length){aBodyCode.push("if ("+aBodyIfCode.join(" && ")+") {")
}aBodyCode.push(aBodyThenCode.join("\n"));
if(aBodyIfCode.length){aBodyCode.push("}")
}}}aPrependCode.push(" $Jindo._maxWarn(nArgsLen,"+nMaxRuleLen+',"'+sFuncName+'");');
for(var i=0;
i<nMaxRuleLen;
++i){var sArg="aArgs["+i+"]";
aPrependCode.push(["var vNativeArg_",i," = ",sArg," && ",sArg,".$value ? ",sArg,".$value() : ",sArg+";"].join(""))
}if(!bCompat){aBodyCode.push("$Jindo.checkVarType._throwException(aArgs, oRules, sFuncName);")
}aBodyCode.push("return oFinalRet;");
aArgs.callee["_checkVarType_"+bCompat]=fpChecker=new Function("aArgs,oRules,sFuncName",aPrependCode.join("\n")+aBodyCode.join("\n"));
return fpChecker(aArgs,oRules,sFuncName)
};
var g_checkVarType=jindo.$Jindo.checkVarType;
jindo.$Jindo._varTypeRetObj=function(){};
jindo.$Jindo._varTypeRetObj.prototype.toString=function(){return this.__type
};
jindo.$Jindo.checkVarType._throwException=function(aArgs,oRules,sFuncName){var fpGetType=function(vArg){for(var sKey in jindo){if(jindo.hasOwnProperty(sKey)){var oConstructor=jindo[sKey];
if(typeof oConstructor!=="function"){continue
}if(vArg instanceof oConstructor){return sKey
}}}var $Jindo=jindo.$Jindo;
for(var sKey in $Jindo){if($Jindo.hasOwnProperty(sKey)){if(!/^is(.+)$/.test(sKey)){continue
}var sType=RegExp.$1;
var fpMethod=$Jindo[sKey];
if(fpMethod(vArg)){return sType
}}}return"Unknown"
};
var fpErrorMessage=function(sUsed,aSuggs,sURL){var aMsg=["잘못된 파라미터입니다.",""];
if(sUsed){aMsg.push("호출한 형태 :");
aMsg.push("\t"+sUsed);
aMsg.push("")
}if(aSuggs.length){aMsg.push("사용 가능한 형태 :");
for(var i=0,nLen=aSuggs.length;
i<nLen;
i++){aMsg.push("\t"+aSuggs[i])
}aMsg.push("")
}if(sURL){aMsg.push("매뉴얼 페이지 :");
aMsg.push("\t"+sURL);
aMsg.push("")
}aMsg.unshift();
return aMsg.join("\n")
};
var aArgName=[];
for(var i=0,ic=aArgs.length;
i<ic;
++i){try{aArgName.push(fpGetType(aArgs[i]))
}catch(e){aArgName.push("Unknown")
}}var sUsed=sFuncName+"("+aArgName.join(", ")+")";
var aSuggs=[];
for(var sKey in oRules){if(oRules.hasOwnProperty(sKey)){var aRule=oRules[sKey];
aSuggs.push(""+sFuncName+"("+aRule.join(", ").replace(/(^|,\s)[^:]+:/g,"$1")+")")
}}var sURL;
if(/(\$\w+)#(\w+)?/.test(sFuncName)){sURL="http://jindo.nhncorp.com/docs/jindo/archive/Jindo2-2.8.1/desktop/ko/classes/"+encodeURIComponent(RegExp.$1)+".html#method_"+RegExp.$2
}throw new TypeError(fpErrorMessage(sUsed,aSuggs,sURL))
};
var _getElementById=function(doc,id){docEle=doc.documentElement;
var sCheckId="jindo"+(new Date()).getTime();
var eDiv=doc.createElement("div");
eDiv.style.display="none";
if(typeof MSApp!="undefined"){MSApp.execUnsafeLocalFunction(function(){eDiv.innerHTML="<input type='hidden' name='"+sCheckId+"'/>"
})
}else{eDiv.innerHTML="<input type='hidden' name='"+sCheckId+"'/>"
}docEle.insertBefore(eDiv,docEle.firstChild);
if(doc.getElementById(sCheckId)){_getElementById=function(doc,id){var eId=doc.getElementById(id);
if(eId==null){return eId
}if(eId.attributes.id&&eId.attributes.id.value==id){return eId
}var aEl=doc.all[id];
for(var i=1;
i<aEl.length;
i++){if(aEl[i].attributes.id&&aEl[i].attributes.id.value==id){return aEl[i]
}}}
}else{_getElementById=function(doc,id){return doc.getElementById(id)
}
}docEle.removeChild(eDiv);
return _getElementById(doc,id)
};
jindo.$Jindo.varType=function(){var oArgs=this.checkVarType(arguments,{s4str:["sTypeName:String+","fpFunc:Function+"],s4obj:["oTypeLists:Hash+"],g:["sTypeName:String+"]});
var sDenyTypeListComma=jindo.$Jindo._denyTypeListComma;
switch(oArgs+""){case"s4str":var sTypeNameComma=","+oArgs.sTypeName.replace(/\+$/,"")+",";
if(sDenyTypeListComma.indexOf(sTypeNameComma)>-1){throw new Error("Not allowed Variable Type")
}this._varTypeList[oArgs.sTypeName]=oArgs.fpFunc;
return this;
case"s4obj":var oTypeLists=oArgs.oTypeLists;
for(var sTypeName in oTypeLists){if(oTypeLists.hasOwnProperty(sTypeName)){fpFunc=oTypeLists[sTypeName];
arguments.callee.call(this,sTypeName,fpFunc)
}}return this;
case"g":return this._varTypeList[oArgs.sTypeName]
}};
jindo.$Jindo.VARTYPE_NOT_MATCHED={};
(function(){var oVarTypeList=jindo.$Jindo._varTypeList={};
var cache=jindo.$Jindo;
var ___notMatched=cache.VARTYPE_NOT_MATCHED;
oVarTypeList.Numeric=function(v){if(cache.isNumeric(v)){return v*1
}return ___notMatched
};
oVarTypeList.Hash=function(val,bAutoCast){if(bAutoCast&&jindo.$H&&val instanceof jindo.$H){return val.$value()
}else{if(cache.isHash(val)){return val
}}return ___notMatched
};
oVarTypeList["$Class"]=function(val,bAutoCast){if((!cache.isFunction(val))||!val.extend){return ___notMatched
}return val
};
var aDenyTypeList=[];
for(var sTypeName in cache){if(cache.hasOwnProperty(sTypeName)){if(/^is(.+)$/.test(sTypeName)){aDenyTypeList.push(RegExp.$1)
}}}cache._denyTypeListComma=aDenyTypeList.join(",");
cache.varType("ArrayStyle",function(val,bAutoCast){if(!val){return ___notMatched
}if(/(Arguments|NodeList|HTMLCollection|global|Window)/.test(jindo._p_._objToString.call(val))||/Object/.test(jindo._p_._objToString.call(val))&&cache.isNumeric(val.length)){return jindo._p_._toArray(val)
}return ___notMatched
});
cache.varType("Form",function(val,bAutoCast){if(!val){return ___notMatched
}if(bAutoCast&&val.$value){val=val.$value()
}if(val.tagName&&val.tagName.toUpperCase()=="FORM"){return val
}return ___notMatched
})
})();
jindo._p_._createEle=function(sParentTag,sHTML,oDoc,bWantParent){var sId="R"+new Date().getTime()+parseInt(Math.random()*100000,10);
var oDummy=oDoc.createElement("div");
switch(sParentTag){case"select":case"table":case"dl":case"ul":case"fieldset":case"audio":oDummy.innerHTML="<"+sParentTag+' class="'+sId+'">'+sHTML+"</"+sParentTag+">";
break;
case"thead":case"tbody":case"col":oDummy.innerHTML="<table><"+sParentTag+' class="'+sId+'">'+sHTML+"</"+sParentTag+"></table>";
break;
case"tr":oDummy.innerHTML='<table><tbody><tr class="'+sId+'">'+sHTML+"</tr></tbody></table>";
break;
default:oDummy.innerHTML='<div class="'+sId+'">'+sHTML+"</div>"
}var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}return bWantParent?oFound:oFound.childNodes
};
jindo.$=function(sID){if(!arguments.length){throw new jindo.$Error(jindo.$Except.NOT_FOUND_ARGUMENT,"$")
}var ret=[],arg=arguments,nArgLeng=arg.length,lastArgument=arg[nArgLeng-1],doc=document,el=null;
var reg=/^<([a-z]+|h[1-5])>$/i;
var reg2=/^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
if(nArgLeng>1&&typeof lastArgument!="string"&&lastArgument.body){arg=Array.prototype.slice.apply(arg,[0,nArgLeng-1]);
doc=lastArgument
}for(var i=0;
i<nArgLeng;
i++){el=arg[i]&&arg[i].$value?arg[i].$value():arg[i];
if(jindo.$Jindo.isString(el)||jindo.$Jindo.isNumeric(el)){el+="";
el=el.replace(/^\s+|\s+$/g,"");
el=el.replace(/<!--(.|\n)*?-->/g,"");
if(el.indexOf("<")>-1){if(reg.test(el)){el=doc.createElement(RegExp.$1)
}else{if(reg2.test(el)){var p={thead:"table",tbody:"table",tr:"tbody",td:"tr",dt:"dl",dd:"dl",li:"ul",legend:"fieldset",option:"select",source:"audio"};
var tag=RegExp.$1.toLowerCase();
var ele=jindo._p_._createEle(p[tag],el,doc);
for(var i=0,leng=ele.length;
i<leng;
i++){ret.push(ele[i])
}el=null
}}}else{el=_getElementById(doc,el)
}}if(el&&el.nodeType){ret[ret.length]=el
}}return ret.length>1?ret:(ret[0]||null)
};
jindo.$Class=function(oDef){var oArgs=g_checkVarType(arguments,{"4obj":["oDef:Hash+"]},"$Class");
function typeClass(){var t=this;
var a=[];
var superFunc=function(m,superClass,func){if(m!="constructor"&&func.toString().indexOf("$super")>-1){var funcArg=func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g,"$1").split(",");
var funcStr=func.toString().replace(/function[^{]*{/,"").replace(/(\w|\.?)(this\.\$super|this)/g,function(m,m2,m3){if(!m2){return m3+".$super"
}return m
});
funcStr=funcStr.substr(0,funcStr.length-1);
func=superClass[m]=eval("false||function("+funcArg.join(",")+"){"+funcStr+"}")
}return function(){var f=this.$this[m];
var t=this.$this;
var r=(t[m]=func).apply(t,arguments);
t[m]=f;
return r
}
};
while(t._$superClass!==undefined){t.$super=new Object;
t.$super.$this=this;
for(var x in t._$superClass.prototype){if(t._$superClass.prototype.hasOwnProperty(x)){if(this[x]===undefined&&x!="$init"){this[x]=t._$superClass.prototype[x]
}if(x!="constructor"&&x!="_$superClass"&&typeof t._$superClass.prototype[x]=="function"){t.$super[x]=superFunc(x,t._$superClass,t._$superClass.prototype[x])
}else{t.$super[x]=t._$superClass.prototype[x]
}}}if(typeof t.$super.$init=="function"){a[a.length]=t
}t=t.$super
}for(var i=a.length-1;
i>-1;
i--){a[i].$super.$init.apply(a[i].$super,arguments)
}if(this.$autoBind){for(var i in this){if(/^\_/.test(i)){this[i]=jindo.$Fn(this[i],this).bind()
}}}if(typeof this.$init=="function"){this.$init.apply(this,arguments)
}}if(oDef.$static!==undefined){var i=0,x;
for(x in oDef){if(oDef.hasOwnProperty(x)){x=="$static"||i++
}}for(x in oDef.$static){if(oDef.$static.hasOwnProperty(x)){typeClass[x]=oDef.$static[x]
}}if(!i){return oDef.$static
}delete oDef.$static
}typeClass.prototype=oDef;
typeClass.prototype.constructor=typeClass;
typeClass.prototype.kindOf=function(oClass){return jindo._p_._kindOf(this.constructor.prototype,oClass.prototype)
};
typeClass.extend=jindo.$Class.extend;
return typeClass
};
jindo._p_._kindOf=function(oThis,oClass){if(oThis!=oClass){if(oThis._$superClass){return jindo._p_._kindOf(oThis._$superClass.prototype,oClass)
}else{return false
}}else{return true
}};
jindo.$Class.extend=function(superClass){var oArgs=g_checkVarType(arguments,{"4obj":["oDef:$Class"]},"<static> $Class#extend");
this.prototype._$superClass=superClass;
var superProto=superClass.prototype;
for(var prop in superProto){if(jindo.$Jindo.isHash(superProto[prop])){jindo.$Jindo._warn(jindo.$Except.CANNOT_SET_OBJ_PROPERTY)
}}for(var x in superClass){if(superClass.hasOwnProperty(x)){if(x=="prototype"){continue
}this[x]=superClass[x]
}}return this
};
jindo.$$=jindo.cssquery=(function(){var sVersion="3.0";
var debugOption={repeat:1};
var UID=1;
var cost=0;
var validUID={};
var bSupportByClassName=document.getElementsByClassName?true:false;
var safeHTML=false;
var getUID4HTML=function(oEl){var nUID=safeHTML?(oEl._cssquery_UID&&oEl._cssquery_UID[0]):oEl._cssquery_UID;
if(nUID&&validUID[nUID]==oEl){return nUID
}nUID=UID++;
oEl._cssquery_UID=safeHTML?[nUID]:nUID;
validUID[nUID]=oEl;
return nUID
};
function GEBID(oBase,sId,oDoc){if(oBase.nodeType===9||oBase.parentNode&&oBase.parentNode.tagName){return _getElementById(oDoc,sId)
}else{var aEle=oBase.getElementsByTagName("*");
for(var i=0,l=aEle.length;
i<l;
i++){if(aEle[i].id===sId){return aEle[i]
}}}}var getUID4XML=function(oEl){var oAttr=oEl.getAttribute("_cssquery_UID");
var nUID=safeHTML?(oAttr&&oAttr[0]):oAttr;
if(!nUID){nUID=UID++;
oEl.setAttribute("_cssquery_UID",safeHTML?[nUID]:nUID)
}return nUID
};
var getUID=getUID4HTML;
var uniqid=function(sPrefix){return(sPrefix||"")+new Date().getTime()+parseInt(Math.random()*100000000,10)
};
function getElementsByClass(searchClass,node,tag){var classElements=new Array();
if(node==null){node=document
}if(tag==null){tag="*"
}var els=node.getElementsByTagName(tag);
var elsLen=els.length;
var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
for(i=0,j=0;
i<elsLen;
i++){if(pattern.test(els[i].className)){classElements[j]=els[i];
j++
}}return classElements
}var getChilds_dontShrink=function(oEl,sTagName,sClassName){if(bSupportByClassName&&sClassName){if(oEl.getElementsByClassName){return oEl.getElementsByClassName(sClassName)
}if(oEl.querySelectorAll){return oEl.querySelectorAll(sClassName)
}return getElementsByClass(sClassName,oEl,sTagName)
}else{if(sTagName=="*"){return oEl.all||oEl.getElementsByTagName(sTagName)
}}return oEl.getElementsByTagName(sTagName)
};
var clearKeys=function(){backupKeys._keys={}
};
var oDocument_dontShrink=document;
var bXMLDocument=false;
var backupKeys=function(sQuery){var oKeys=backupKeys._keys;
sQuery=sQuery.replace(/'(\\'|[^'])*'/g,function(sAll){var uid=uniqid("QUOT");
oKeys[uid]=sAll;
return uid
});
sQuery=sQuery.replace(/"(\\"|[^"])*"/g,function(sAll){var uid=uniqid("QUOT");
oKeys[uid]=sAll;
return uid
});
sQuery=sQuery.replace(/\[(.*?)\]/g,function(sAll,sBody){if(sBody.indexOf("ATTR")==0){return sAll
}var uid="["+uniqid("ATTR")+"]";
oKeys[uid]=sAll;
return uid
});
var bChanged;
do{bChanged=false;
sQuery=sQuery.replace(/\(((\\\)|[^)|^(])*)\)/g,function(sAll,sBody){if(sBody.indexOf("BRCE")==0){return sAll
}var uid="_"+uniqid("BRCE");
oKeys[uid]=sAll;
bChanged=true;
return uid
})
}while(bChanged);
return sQuery
};
var restoreKeys=function(sQuery,bOnlyAttrBrace){var oKeys=backupKeys._keys;
var bChanged;
var rRegex=bOnlyAttrBrace?/(\[ATTR[0-9]+\])/g:/(QUOT[0-9]+|\[ATTR[0-9]+\])/g;
do{bChanged=false;
sQuery=sQuery.replace(rRegex,function(sKey){if(oKeys[sKey]){bChanged=true;
return oKeys[sKey]
}return sKey
})
}while(bChanged);
sQuery=sQuery.replace(/_BRCE[0-9]+/g,function(sKey){return oKeys[sKey]?oKeys[sKey]:sKey
});
return sQuery
};
var restoreString=function(sKey){var oKeys=backupKeys._keys;
var sOrg=oKeys[sKey];
if(!sOrg){return sKey
}return eval(sOrg)
};
var wrapQuot=function(sStr){return'"'+sStr.replace(/"/g,'\\"')+'"'
};
var getStyleKey=function(sKey){if(/^@/.test(sKey)){return sKey.substr(1)
}return null
};
var getCSS=function(oEl,sKey){if(oEl.currentStyle){if(sKey=="float"){sKey="styleFloat"
}return oEl.currentStyle[sKey]||oEl.style[sKey]
}else{if(window.getComputedStyle){return oDocument_dontShrink.defaultView.getComputedStyle(oEl,null).getPropertyValue(sKey.replace(/([A-Z])/g,"-$1").toLowerCase())||oEl.style[sKey]
}}if(sKey=="float"&&jindo._p_._JINDO_IS_IE){sKey="styleFloat"
}return oEl.style[sKey]
};
var oCamels={accesskey:"accessKey",cellspacing:"cellSpacing",cellpadding:"cellPadding","class":"className",colspan:"colSpan","for":"htmlFor",maxlength:"maxLength",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",valign:"vAlign"};
var getDefineCode=function(sKey){var sVal;
var sStyleKey;
if(bXMLDocument){sVal='oEl.getAttribute("'+sKey+'",2)'
}else{if(sStyleKey=getStyleKey(sKey)){sKey="$$"+sStyleKey;
sVal='getCSS(oEl, "'+sStyleKey+'")'
}else{switch(sKey){case"checked":sVal='oEl.checked + ""';
break;
case"disabled":sVal='oEl.disabled + ""';
break;
case"enabled":sVal='!oEl.disabled + ""';
break;
case"readonly":sVal='oEl.readOnly + ""';
break;
case"selected":sVal='oEl.selected + ""';
break;
default:if(oCamels[sKey]){sVal="oEl."+oCamels[sKey]
}else{sVal='oEl.getAttribute("'+sKey+'",2)'
}}}}return"_"+sKey.replace(/\-/g,"_")+" = "+sVal
};
var getReturnCode=function(oExpr){var sStyleKey=getStyleKey(oExpr.key);
var sVar="_"+(sStyleKey?"$$"+sStyleKey:oExpr.key);
sVar=sVar.replace(/\-/g,"_");
var sVal=oExpr.val?wrapQuot(oExpr.val):"";
switch(oExpr.op){case"~=":return"("+sVar+' && (" " + '+sVar+' + " ").indexOf(" " + '+sVal+' + " ") > -1)';
case"^=":return"("+sVar+" && "+sVar+".indexOf("+sVal+") == 0)";
case"$=":return"("+sVar+" && "+sVar+".substr("+sVar+".length - "+oExpr.val.length+") == "+sVal+")";
case"*=":return"("+sVar+" && "+sVar+".indexOf("+sVal+") > -1)";
case"!=":return"("+sVar+" != "+sVal+")";
case"=":return"("+sVar+" == "+sVal+")"
}return"("+sVar+")"
};
var getNodeIndex=function(oEl){var nUID=getUID(oEl);
var nIndex=oNodeIndexes[nUID]||0;
if(nIndex==0){for(var oSib=(oEl.parentNode||oEl._IE5_parentNode).firstChild;
oSib;
oSib=oSib.nextSibling){if(oSib.nodeType!=1){continue
}nIndex++;
setNodeIndex(oSib,nIndex)
}nIndex=oNodeIndexes[nUID]
}return nIndex
};
var oNodeIndexes={};
var setNodeIndex=function(oEl,nIndex){var nUID=getUID(oEl);
oNodeIndexes[nUID]=nIndex
};
var unsetNodeIndexes=function(){setTimeout(function(){oNodeIndexes={}
},0)
};
var oPseudoes_dontShrink={contains:function(oEl,sOption){return(oEl.innerText||oEl.textContent||"").indexOf(sOption)>-1
},"last-child":function(oEl,sOption){for(oEl=oEl.nextSibling;
oEl;
oEl=oEl.nextSibling){if(oEl.nodeType==1){return false
}}return true
},"first-child":function(oEl,sOption){for(oEl=oEl.previousSibling;
oEl;
oEl=oEl.previousSibling){if(oEl.nodeType==1){return false
}}return true
},"only-child":function(oEl,sOption){var nChild=0;
for(var oChild=(oEl.parentNode||oEl._IE5_parentNode).firstChild;
oChild;
oChild=oChild.nextSibling){if(oChild.nodeType==1){nChild++
}if(nChild>1){return false
}}return nChild?true:false
},empty:function(oEl,_){return oEl.firstChild?false:true
},"nth-child":function(oEl,nMul,nAdd){var nIndex=getNodeIndex(oEl);
return nIndex%nMul==nAdd
},"nth-last-child":function(oEl,nMul,nAdd){var oLast=(oEl.parentNode||oEl._IE5_parentNode).lastChild;
for(;
oLast;
oLast=oLast.previousSibling){if(oLast.nodeType==1){break
}}var nTotal=getNodeIndex(oLast);
var nIndex=getNodeIndex(oEl);
var nLastIndex=nTotal-nIndex+1;
return nLastIndex%nMul==nAdd
},checked:function(oEl){return !!oEl.checked
},selected:function(oEl){return !!oEl.selected
},enabled:function(oEl){return !oEl.disabled
},disabled:function(oEl){return !!oEl.disabled
}};
var getExpression=function(sBody){var oRet={defines:"",returns:"true"};
var sBody=restoreKeys(sBody,true);
var aExprs=[];
var aDefineCode=[],aReturnCode=[];
var sId,sTagName;
var sBody=sBody.replace(/:([\w-]+)(\(([^)]*)\))?/g,function(_1,sType,_2,sOption){switch(sType){case"not":var oInner=getExpression(sOption);
var sFuncDefines=oInner.defines;
var sFuncReturns=oInner.returnsID+oInner.returnsTAG+oInner.returns;
aReturnCode.push("!(function() { "+sFuncDefines+" return "+sFuncReturns+" })()");
break;
case"nth-child":case"nth-last-child":sOption=restoreString(sOption);
if(sOption=="even"){sOption="2n"
}else{if(sOption=="odd"){sOption="2n+1"
}}var nMul,nAdd;
var matchstr=sOption.match(/([0-9]*)n([+-][0-9]+)*/);
if(matchstr){nMul=matchstr[1]||1;
nAdd=matchstr[2]||0
}else{nMul=Infinity;
nAdd=parseInt(sOption,10)
}aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+nMul+", "+nAdd+")");
break;
case"first-of-type":case"last-of-type":sType=(sType=="first-of-type"?"nth-of-type":"nth-last-of-type");
sOption=1;
case"nth-of-type":case"nth-last-of-type":sOption=restoreString(sOption);
if(sOption=="even"){sOption="2n"
}else{if(sOption=="odd"){sOption="2n+1"
}}var nMul,nAdd;
if(/([0-9]*)n([+-][0-9]+)*/.test(sOption)){nMul=parseInt(RegExp.$1,10)||1;
nAdd=parseInt(RegExp.$2,20)||0
}else{nMul=Infinity;
nAdd=parseInt(sOption,10)
}oRet.nth=[nMul,nAdd,sType];
break;
default:sOption=sOption?restoreString(sOption):"";
aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+wrapQuot(sOption)+")")
}return""
});
var sBody=sBody.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g,function(_1,sKey,_2,sOp,sVal){sKey=restoreString(sKey);
sVal=restoreString(sVal);
if(sKey=="checked"||sKey=="disabled"||sKey=="enabled"||sKey=="readonly"||sKey=="selected"){if(!sVal){sOp="=";
sVal="true"
}}aExprs.push({key:sKey,op:sOp,val:sVal});
return""
});
var sClassName=null;
var sBody=sBody.replace(/\.([\w-]+)/g,function(_,sClass){aExprs.push({key:"class",op:"~=",val:sClass});
if(!sClassName){sClassName=sClass
}return""
});
var sBody=sBody.replace(/#([\w-]+)/g,function(_,sIdValue){if(bXMLDocument){aExprs.push({key:"id",op:"=",val:sIdValue})
}else{sId=sIdValue
}return""
});
sTagName=sBody=="*"?"":sBody;
var oVars={};
for(var i=0,oExpr;
oExpr=aExprs[i];
i++){var sKey=oExpr.key;
if(!oVars[sKey]){aDefineCode.push(getDefineCode(sKey))
}aReturnCode.unshift(getReturnCode(oExpr));
oVars[sKey]=true
}if(aDefineCode.length){oRet.defines="var "+aDefineCode.join(",")+";"
}if(aReturnCode.length){oRet.returns=aReturnCode.join("&&")
}oRet.quotID=sId?wrapQuot(sId):"";
oRet.quotTAG=sTagName?wrapQuot(bXMLDocument?sTagName:sTagName.toUpperCase()):"";
if(bSupportByClassName){oRet.quotCLASS=sClassName?wrapQuot(sClassName):""
}oRet.returnsID=sId?"oEl.id == "+oRet.quotID+" && ":"";
oRet.returnsTAG=sTagName&&sTagName!="*"?"oEl.tagName == "+oRet.quotTAG+" && ":"";
return oRet
};
var splitToParts=function(sQuery){var aParts=[];
var sRel=" ";
var sBody=sQuery.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g,function(_,sBody,sRelative){if(sBody){aParts.push({rel:sRel,body:sBody})
}sRel=sRelative.replace(/\s+$/g,"")||" ";
return""
});
if(sBody){aParts.push({rel:sRel,body:sBody})
}return aParts
};
var isNth_dontShrink=function(oEl,sTagName,nMul,nAdd,sDirection){var nIndex=0;
for(var oSib=oEl;
oSib;
oSib=oSib[sDirection]){if(oSib.nodeType==1&&(!sTagName||sTagName==oSib.tagName)){nIndex++
}}return nIndex%nMul==nAdd
};
var compileParts=function(aParts){var aPartExprs=[];
for(var i=0,oPart;
oPart=aParts[i];
i++){aPartExprs.push(getExpression(oPart.body))
}var sFunc="";
var sPushCode="aRet.push(oEl); if (oOptions.single) { bStop = true; }";
for(var i=aParts.length-1,oPart;
oPart=aParts[i];
i--){var oExpr=aPartExprs[i];
var sPush=(debugOption.callback?"cost++;":"")+oExpr.defines;
var sReturn="if (bStop) {"+(i==0?"return aRet;":"return;")+"}";
if(oExpr.returns=="true"){sPush+=(sFunc?sFunc+"(oEl);":sPushCode)+sReturn
}else{sPush+="if ("+oExpr.returns+") {"+(sFunc?sFunc+"(oEl);":sPushCode)+sReturn+"}"
}var sCheckTag="oEl.nodeType != 1";
if(oExpr.quotTAG){sCheckTag="oEl.tagName != "+oExpr.quotTAG
}var sTmpFunc="(function(oBase"+(i==0?", oOptions) { var bStop = false; var aRet = [];":") {");
if(oExpr.nth){sPush="if (isNth_dontShrink(oEl, "+(oExpr.quotTAG?oExpr.quotTAG:"false")+","+oExpr.nth[0]+","+oExpr.nth[1]+',"'+(oExpr.nth[2]=="nth-of-type"?"previousSibling":"nextSibling")+'")) {'+sPush+"}"
}switch(oPart.rel){case" ":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {if (oCandi == oBase) break;}if (!oCandi || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="var aCandi = getChilds_dontShrink(oBase, "+(oExpr.quotTAG||'"*"')+", "+(oExpr.quotCLASS||"null")+");for (var i = 0, oEl; oEl = aCandi[i]; i++) {"+(oExpr.quotCLASS?"if ("+sCheckTag+") continue;":"")+sPush+"}"
}break;
case">":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }"+sPush+"}"
}break;
case"+":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oPrev;for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }if (!oPrev || oPrev != oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"~":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oCandi = oEl;for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }if (!oCandi || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}break;
case"!":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }if (!oBase || "+sCheckTag+") return aRet;"+sPush
}else{sTmpFunc+="for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = (oEl.parentNode || oEl._IE5_parentNode)) {if ("+sCheckTag+") { continue; }"+sPush+"}"
}break;
case"!>":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel = (oBase.parentNode || oBase._IE5_parentNode);if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="var oEl = (oBase.parentNode || oBase._IE5_parentNode);if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"!+":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }if (!oRel || oEl != oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }if (!oEl || "+sCheckTag+") { return aRet; }"+sPush
}break;
case"!~":if(oExpr.quotID){sTmpFunc+="var oEl = GEBID(oBase,"+oExpr.quotID+",oDocument_dontShrink);var oRel;for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType != 1) { continue; }if (oRel == oEl) { break; }}if (!oRel || ("+sCheckTag+")) return aRet;"+sPush
}else{sTmpFunc+="for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {if ("+sCheckTag+") { continue; }if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}"
}}sTmpFunc+=(i==0?"return aRet;":"")+"})";
sFunc=sTmpFunc
}eval("var fpCompiled = "+sFunc+";");
return fpCompiled
};
var parseQuery=function(sQuery){var sCacheKey=sQuery;
var fpSelf=arguments.callee;
var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var aParts=splitToParts(sQuery);
fpFunction=fpSelf._cache[sCacheKey]=compileParts(aParts);
fpFunction.depth=aParts.length
}return fpFunction
};
parseQuery._cache={};
var parseTestQuery=function(sQuery){var fpSelf=arguments.callee;
var aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/);
var aResult=[];
var nLen=aSplitQuery.length;
var aFunc=[];
for(var i=0;
i<nLen;
i++){aFunc.push((function(sQuery){var sCacheKey=sQuery;
var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);
var oExpr=getExpression(sQuery);
eval("fpFunction = function(oEl) { "+oExpr.defines+"return ("+oExpr.returnsID+oExpr.returnsTAG+oExpr.returns+"); };")
}return fpFunction
})(restoreKeys(aSplitQuery[i])))
}return aFunc
};
parseTestQuery._cache={};
var distinct=function(aList){var aDistinct=[];
var oDummy={};
for(var i=0,oEl;
oEl=aList[i];
i++){var nUID=getUID(oEl);
if(oDummy[nUID]){continue
}aDistinct.push(oEl);
oDummy[nUID]=true
}return aDistinct
};
var markElement_dontShrink=function(oEl,nDepth){var nUID=getUID(oEl);
if(cssquery._marked[nDepth][nUID]){return false
}cssquery._marked[nDepth][nUID]=true;
return true
};
var getParentElement=function(oParent){var nParentNodeType;
oParent=oParent&&oParent.$value?oParent.$value():oParent;
if(jindo.$Jindo.isString(oParent)){try{oParent=document.getElementById(oParent)
}catch(e){oParent=document
}}if(!oParent){oParent=document
}nParentNodeType=oParent.nodeType;
if(nParentNodeType!=1&&nParentNodeType!=9&&nParentNodeType!=10&&nParentNodeType!=11){oParent=oParent.ownerDocument||oParent.document
}return oParent||oParent.ownerDocument||oParent.document
};
var oResultCache=null;
var bUseResultCache=false;
var bExtremeMode=false;
var old_cssquery=function(sQuery,oParent,oOptions){var oArgs=g_checkVarType(arguments,{"4str":["sQuery:String+"],"4var":["sQuery:String+","oParent:Variant"],"4var2":["sQuery:String+","oParent:Variant","oOptions:Variant"]},"cssquery");
oParent=getParentElement(oParent);
oOptions=oOptions&&oOptions.$value?oOptions.$value():oOptions;
if(typeof sQuery=="object"){var oResult={};
for(var k in sQuery){if(sQuery.hasOwnProperty(k)){oResult[k]=arguments.callee(sQuery[k],oParent,oOptions)
}}return oResult
}cost=0;
var executeTime=new Date().getTime();
var aRet;
for(var r=0,rp=debugOption.repeat;
r<rp;
r++){aRet=(function(sQuery,oParent,oOptions){if(oOptions){if(!oOptions.oneTimeOffCache){oOptions.oneTimeOffCache=false
}}else{oOptions={oneTimeOffCache:false}
}cssquery.safeHTML(oOptions.oneTimeOffCache);
if(!oParent){oParent=document
}oDocument_dontShrink=oParent.ownerDocument||oParent.document||oParent;
if(/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(jindo._p_._j_ag)&&parseFloat(RegExp.$1)<6){try{oDocument_dontShrink.location
}catch(e){oDocument_dontShrink=document
}oDocument_dontShrink.firstChild=oDocument_dontShrink.getElementsByTagName("html")[0];
oDocument_dontShrink.firstChild._IE5_parentNode=oDocument_dontShrink
}bXMLDocument=(typeof XMLDocument!=="undefined")?(oDocument_dontShrink.constructor===XMLDocument):(!oDocument_dontShrink.location);
getUID=bXMLDocument?getUID4XML:getUID4HTML;
clearKeys();
var aSplitQuery=backupKeys(sQuery).split(/\s*,\s*/);
var aResult=[];
var nLen=aSplitQuery.length;
for(var i=0;
i<nLen;
i++){aSplitQuery[i]=restoreKeys(aSplitQuery[i])
}for(var i=0;
i<nLen;
i++){var sSingleQuery=aSplitQuery[i];
var aSingleQueryResult=null;
var sResultCacheKey=sSingleQuery+(oOptions.single?"_single":"");
var aCache=bUseResultCache?oResultCache[sResultCacheKey]:null;
if(aCache){for(var j=0,oCache;
oCache=aCache[j];
j++){if(oCache.parent==oParent){aSingleQueryResult=oCache.result;
break
}}}if(!aSingleQueryResult){var fpFunction=parseQuery(sSingleQuery);
cssquery._marked=[];
for(var j=0,nDepth=fpFunction.depth;
j<nDepth;
j++){cssquery._marked.push({})
}aSingleQueryResult=distinct(fpFunction(oParent,oOptions));
if(bUseResultCache&&!oOptions.oneTimeOffCache){if(!(oResultCache[sResultCacheKey] instanceof Array)){oResultCache[sResultCacheKey]=[]
}oResultCache[sResultCacheKey].push({parent:oParent,result:aSingleQueryResult})
}}aResult=aResult.concat(aSingleQueryResult)
}unsetNodeIndexes();
return aResult
})(sQuery,oParent,oOptions)
}executeTime=new Date().getTime()-executeTime;
if(debugOption.callback){debugOption.callback(sQuery,cost,executeTime)
}return aRet
};
var cssquery;
if(document.querySelectorAll){function _isNonStandardQueryButNotException(sQuery){return/\[\s*(?:checked|selected|disabled)/.test(sQuery)
}function _commaRevise(sQuery,sChange){return sQuery.replace(/\,/gi,sChange)
}function _startCombinator(sQuery){return/^[~>+]/.test(sQuery)
}function _addQueryId(el,sIdName){var sQueryId,sValue;
if(/^\w+$/.test(el.id)){sQueryId="#"+el.id
}else{sValue="C"+new Date().getTime()+Math.floor(Math.random()*1000000);
el.setAttribute(sIdName,sValue);
sQueryId="["+sIdName+"="+sValue+"]"
}return sQueryId
}var _div=document.createElement("div");
cssquery=function(sQuery,oParent,oOptions){var oArgs=g_checkVarType(arguments,{"4str":["sQuery:String+"],"4var":["sQuery:String+","oParent:Variant"],"4var2":["sQuery:String+","oParent:Variant","oOptions:Variant"]},"cssquery"),sTempId,aRet,nParentNodeType,bUseQueryId,oOldParent,queryid,_clone,sTagName;
oParent=getParentElement(oParent);
oOptions=oOptions&&oOptions.$value?oOptions.$value():oOptions;
sQuery=sQuery.replace(/\[(.*?)\=(\d*)\]/g,function(_,key,value){return"["+key+"='"+value+"']"
});
nParentNodeType=oParent.nodeType;
try{if(_isNonStandardQueryButNotException(sQuery)){return old_cssquery(sQuery,oParent,oOptions)
}sTagName=(oParent.tagName||"").toUpperCase();
if(nParentNodeType!==9&&sTagName!="HTML"){if(nParentNodeType===11){oParent=oParent.cloneNode(true);
_clone=_div.cloneNode(true);
_clone.appendChild(oParent);
oParent=_clone;
_clone=null
}queryid=_addQueryId(oParent,"queryid");
bUseQueryId=true;
if((_parent=oParent.parentNode)||sTagName==="BODY"||jindo.$Element._contain((oParent.ownerDocument||oParent.document).body,oParent)){oOldParent=oParent;
oParent=_parent
}else{_clone=_div.cloneNode(true);
oOldParent=oParent;
_clone.appendChild(oOldParent);
oParent=_clone
}sQuery=_commaRevise(queryid+" "+sQuery,", "+queryid+" ")
}else{oParent=(oParent.ownerDocument||oParent.document||oParent);
if(_startCombinator(sQuery)){return[]
}}if(oOptions&&oOptions.single){aRet=[oParent.querySelector(sQuery)]
}else{aRet=jindo._p_._toArray(oParent.querySelectorAll(sQuery))
}}catch(e){aRet=old_cssquery(sQuery,oParent,oOptions)
}if(bUseQueryId){oOldParent.removeAttribute("queryid");
_clone=null
}return aRet
}
}else{cssquery=old_cssquery
}cssquery.test=function(oEl,sQuery){clearKeys();
try{var oArgs=g_checkVarType(arguments,{"4ele":["oEl:Element+","sQuery:String+"],"4doc":["oEl:Document+","sQuery:String+"]},"<static> cssquery#test");
eEl=oArgs.oEl;
sQuery=oArgs.sQuery
}catch(e){return false
}var aFunc=parseTestQuery(sQuery);
for(var i=0,nLen=aFunc.length;
i<nLen;
i++){if(aFunc[i](oEl)){return true
}}return false
};
cssquery.useCache=function(bFlag){if(bFlag!==undefined){bUseResultCache=bFlag;
cssquery.clearCache()
}return bUseResultCache
};
cssquery.clearCache=function(){oResultCache={}
};
cssquery.getSingle=function(sQuery,oParent,oOptions){oOptions=oOptions&&oOptions.$value?oOptions.$value():oOptions;
return cssquery(sQuery,oParent,{single:true,oneTimeOffCache:oOptions?(!!oOptions.oneTimeOffCache):false})[0]||null
};
cssquery.xpath=function(sXPath,oParent){sXPath=sXPath&&sXPath.$value?sXPath.$value():sXPath;
sXPath=sXPath.replace(/\/(\w+)(\[([0-9]+)\])?/g,function(_1,sTag,_2,sTh){sTh=sTh||"1";
return">"+sTag+":nth-of-type("+sTh+")"
});
return old_cssquery(sXPath,oParent)
};
cssquery.debug=function(fpCallback,nRepeat){var oArgs=g_checkVarType(arguments,{"4fun":["fpCallback:Function+"],"4fun2":["fpCallback:Function+","nRepeat:Numeric"]},"<static> cssquery#debug");
debugOption.callback=oArgs.fpCallback;
debugOption.repeat=oArgs.nRepeat||1
};
cssquery.safeHTML=function(bFlag){if(arguments.length>0){safeHTML=bFlag&&jindo._p_._JINDO_IS_IE
}return safeHTML||!jindo._p_._JINDO_IS_IE
};
cssquery.version=sVersion;
cssquery.release=function(){if(jindo._p_._JINDO_IS_IE){delete validUID;
validUID={};
if(bUseResultCache){cssquery.clearCache()
}}};
cssquery._getCacheInfo=function(){return{uidCache:validUID,eleCache:oResultCache}
};
cssquery._resetUID=function(){UID=0
};
cssquery.extreme=function(bExtreme){if(arguments.length==0){bExtreme=true
}bExtremeMode=bExtreme
};
return cssquery
})();
jindo.$Agent=function(){var cl=arguments.callee;
var cc=cl._cached;
if(cc){return cc
}if(!(this instanceof cl)){return new cl
}if(!cc){cl._cached=this
}this._navigator=navigator;
this._dm=document.documentMode
};
jindo.$Agent.prototype.navigator=function(){var info={},ver=-1,nativeVersion=-1,u=this._navigator.userAgent,v=this._navigator.vendor||"",dm=this._dm;
function f(s,h){return((h||"").indexOf(s)>-1)
}info.getName=function(){var name="";
for(x in info){if(typeof info[x]=="boolean"&&info[x]&&info.hasOwnProperty(x)){name=x
}}return name
};
info.webkit=f("WebKit",u);
info.opera=(window.opera!==undefined)||f("Opera",u);
info.ie=!info.opera&&(f("MSIE",u)||f("Trident",u));
info.chrome=info.webkit&&f("Chrome",u);
info.safari=info.webkit&&!info.chrome&&f("Apple",v);
info.firefox=f("Firefox",u);
info.mozilla=f("Gecko",u)&&!info.safari&&!info.chrome&&!info.firefox&&!info.ie;
info.camino=f("Camino",v);
info.netscape=f("Netscape",u);
info.omniweb=f("OmniWeb",u);
info.icab=f("iCab",v);
info.konqueror=f("KDE",v);
info.mobile=(f("Mobile",u)||f("Android",u)||f("Nokia",u)||f("webOS",u)||f("Opera Mini",u)||f("BlackBerry",u)||(f("Windows",u)&&f("PPC",u))||f("Smartphone",u)||f("IEMobile",u))&&!f("iPad",u);
info.msafari=(!f("IEMobile",u)&&f("Mobile",u))||(f("iPad",u)&&f("Safari",u));
info.mopera=f("Opera Mini",u);
info.mie=f("PPC",u)||f("Smartphone",u)||f("IEMobile",u);
try{if(info.ie){if(dm>0){ver=dm;
if(u.match(/(?:Trident)\/([0-9.]+)/)){var nTridentNum=parseFloat(RegExp.$1,10);
if(nTridentNum>3){nativeVersion=nTridentNum+4
}}else{nativeVersion=ver
}}else{nativeVersion=ver=u.match(/(?:MSIE) ([0-9.]+)/)[1]
}}else{if(info.safari||info.msafari){ver=parseFloat(u.match(/Safari\/([0-9.]+)/)[1]);
if(ver==100){ver=1.1
}else{if(u.match(/Version\/([0-9.]+)/)){ver=RegExp.$1
}else{ver=[1,1.2,-1,1.3,2,3][Math.floor(ver/100)]
}}}else{if(info.mopera){ver=u.match(/(?:Opera\sMini)\/([0-9.]+)/)[1]
}else{if(info.firefox||info.opera||info.omniweb){ver=u.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1]
}else{if(info.mozilla){ver=u.match(/rv:([0-9.]+)/)[1]
}else{if(info.icab){ver=u.match(/iCab[ \/]([0-9.]+)/)[1]
}else{if(info.chrome){ver=u.match(/Chrome[ \/]([0-9.]+)/)[1]
}}}}}}}info.version=parseFloat(ver);
info.nativeVersion=parseFloat(nativeVersion);
if(isNaN(info.version)){info.version=-1
}}catch(e){info.version=-1
}this.navigator=function(){return info
};
return info
};
jindo.$Agent.prototype.os=function(){var info={};
u=this._navigator.userAgent,p=this._navigator.platform,f=function(s,h){return(h.indexOf(s)>-1)
},aMatchResult=null;
info.getName=function(){var name="";
for(x in info){if(info[x]===true&&info.hasOwnProperty(x)){name=x
}}return name
};
info.win=f("Win",p);
info.mac=f("Mac",p);
info.linux=f("Linux",p);
info.win2000=info.win&&(f("NT 5.0",u)||f("Windows 2000",u));
info.winxp=info.win&&f("NT 5.1",u);
info.xpsp2=info.winxp&&f("SV1",u);
info.vista=info.win&&f("NT 6.0",u);
info.win7=info.win&&f("NT 6.1",u);
info.win8=info.win&&f("NT 6.2",u);
info.ipad=f("iPad",u);
info.iphone=f("iPhone",u)&&!info.ipad;
info.android=f("Android",u);
info.nokia=f("Nokia",u);
info.webos=f("webOS",u);
info.blackberry=f("BlackBerry",u);
info.mwin=f("PPC",u)||f("Smartphone",u)||f("IEMobile",u)||f("Windows Phone",u);
info.ios=info.ipad||info.iphone;
info.symbianos=f("SymbianOS",u);
info.version=null;
if(info.win){aMatchResult=u.match(/Windows NT ([\d|\.]+)/);
if(aMatchResult!=null&&aMatchResult[1]!=undefined){info.version=aMatchResult[1]
}}else{if(info.mac){aMatchResult=u.match(/Mac OS X ([\d|_]+)/);
if(aMatchResult!=null&&aMatchResult[1]!=undefined){info.version=String(aMatchResult[1]).split("_").join(".")
}}else{if(info.linux){}else{if(info.android){aMatchResult=u.match(/Android ([\d|\.]+)/);
if(aMatchResult!=null&&aMatchResult[1]!=undefined){info.version=aMatchResult[1]
}}else{if(info.ios){aMatchResult=u.match(/(iPhone )?OS ([\d|_]+)/);
if(aMatchResult!=null&&aMatchResult[2]!=undefined){info.version=String(aMatchResult[2]).split("_").join(".")
}}else{if(info.blackberry){aMatchResult=u.match(/Version\/([\d|\.]+)/);
if(aMatchResult==null){aMatchResult=u.match(/BlackBerry\s?\d{4}\/([\d|\.]+)/)
}if(aMatchResult!=null&&aMatchResult[1]!=undefined){info.version=aMatchResult[1]
}}else{if(info.symbianos){aMatchResult=u.match(/SymbianOS\/(\d+.\w+)/);
if(aMatchResult!=null&&aMatchResult[1]!=undefined){info.version=aMatchResult[1]
}}else{if(info.webos){aMatchResult=u.match(/webOS\/([\d|\.]+)/);
if(aMatchResult!=null&&aMatchResult[1]!=undefined){info.version=aMatchResult[1]
}}else{if(info.mwin){aMatchResult=u.match(/Windows CE ([\d|\.]+)/);
if(aMatchResult!=null&&aMatchResult[1]!=undefined){info.version=aMatchResult[1]
}if(!info.version&&(aMatchResult=u.match(/Windows Phone (OS )?([\d|\.]+)/))){info.version=aMatchResult[2]
}}}}}}}}}}this.os=function(){return info
};
return info
};
jindo.$Agent.prototype.flash=function(){var info={};
var p=this._navigator.plugins;
var m=this._navigator.mimeTypes;
var f=null;
info.installed=false;
info.version=-1;
if(!jindo.$Jindo.isUndefined(p)&&p.length){f=p["Shockwave Flash"];
if(f){info.installed=true;
if(f.description){info.version=parseFloat(f.description.match(/[0-9.]+/)[0])
}}if(p["Shockwave Flash 2.0"]){info.installed=true;
info.version=2
}}else{if(!jindo.$Jindo.isUndefined(m)&&m.length){f=m["application/x-shockwave-flash"];
info.installed=(f&&f.enabledPlugin)
}else{try{info.version=parseFloat(new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/(.\d?),/)[1]);
info.installed=true
}catch(e){}}}this.flash=function(){return info
};
this.info=this.flash;
return info
};
jindo.$Agent.prototype.silverlight=function(){var info=new Object;
var p=this._navigator.plugins;
var s=null;
info.installed=false;
info.version=-1;
if(!jindo.$Jindo.isUndefined(p)&&p.length){s=p["Silverlight Plug-In"];
if(s){info.installed=true;
info.version=parseInt(s.description.split(".")[0],10);
if(s.description=="1.0.30226.2"){info.version=2
}}}else{try{s=new ActiveXObject("AgControl.AgControl");
info.installed=true;
if(s.isVersionSupported("3.0")){info.version=3
}else{if(s.isVersionSupported("2.0")){info.version=2
}else{if(s.isVersionSupported("1.0")){info.version=1
}}}}catch(e){}}this.silverlight=function(){return info
};
return info
};
jindo.$A=function(array){var cl=arguments.callee;
if(array instanceof cl){return array
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$A");
return new cl(array)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4voi":[],"4arr":["aPram:Array+"],"4nul":["oNull:Null"],"4und":["oUndefined:Undefined"],arrt:["aPram:ArrayStyle"]},"$A");
if(oArgs==null){array=[]
}switch(oArgs+""){case"arrt":case"4arr":array=oArgs.aPram;
break;
case"4nul":case"4und":case"4voi":array=[]
}this._array=[];
for(var i=0;
i<array.length;
i++){this._array[this._array.length]=array[i]
}};
jindo.$A.checkVarTypeObj={"4fun":["fCallback:Function+"],"4thi":["fCallback:Function+","oThis:Variant"]};
jindo.$A.prototype.toString=function(){return this._array.toString()
};
jindo.$A.prototype.get=function(nIndex){g_checkVarType(arguments,{"4num":["nIndex:Numeric"]},"$A#get");
return this._array[nIndex]
};
jindo.$A.prototype.set=function(nIndex,vValue){g_checkVarType(arguments,{"4num":["nIndex:Numeric","vValue:Variant"]},"$A#set");
this._array[nIndex]=vValue;
return this
};
jindo.$A.prototype.length=function(nLen,oValue){var oArgs=g_checkVarType(arguments,{"4num":[jindo.$Jindo._F("nLen:Numeric")],sv:["nLen:Numeric","vValue:Variant"],"4voi":[]},"$A#length");
switch(oArgs+""){case"4num":this._array.length=oArgs.nLen;
return this;
case"sv":var l=this._array.length;
this._array.length=oArgs.nLen;
for(var i=l;
i<nLen;
i++){this._array[i]=oArgs.vValue
}return this;
case"4voi":return this._array.length
}};
jindo.$A.prototype.has=function(oValue){return(this.indexOf(oValue)>-1)
};
jindo.$A.prototype.indexOf=function(oValue){if(this._array.indexOf){jindo.$A.prototype.indexOf=function(oValue){return this._array.indexOf(oValue)
}
}else{jindo.$A.prototype.indexOf=function(oValue){for(var i=0;
i<this._array.length;
i++){if(this._array[i]==oValue){return i
}}return -1
}
}return this.indexOf(oValue)
};
jindo.$A.prototype.$value=function(){return this._array
};
jindo.$A.prototype.push=function(oValue1){return this._array.push.apply(this._array,jindo._p_._toArray(arguments))
};
jindo.$A.prototype.pop=function(){return this._array.pop()
};
jindo.$A.prototype.shift=function(){return this._array.shift()
};
jindo.$A.prototype.unshift=function(oValue1){this._array.unshift.apply(this._array,jindo._p_._toArray(arguments));
return this._array.length
};
jindo.$A.prototype.forEach=function(fCallback,oThis){function forEachBody(fpEach){return function(fCallback,oThis){var oArgs=g_checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#forEach");
var that=this;
function f(v,i,a){try{fCallback.apply(oThis||that,jindo._p_._toArray(arguments))
}catch(e){if(!(e instanceof that.constructor.Continue)){throw e
}}}fpEach(this,f);
return this
}
}if(this._array.forEach){jindo.$A.prototype.forEach=forEachBody(function(scope,fp){try{scope._array.forEach(fp)
}catch(e){if(!(e instanceof scope.constructor.Break)){throw e
}}})
}else{jindo.$A.prototype.forEach=forEachBody(function(scope,fp){var arr=scope._array;
for(var i=0,l=arr.length;
i<l;
i++){try{fp(arr[i],i,arr)
}catch(e){if(e instanceof scope.constructor.Break){break
}throw e
}}})
}return this.forEach.apply(this,jindo._p_._toArray(arguments))
};
jindo.$A.prototype.slice=function(nStart,nEnd){var a=this._array.slice.call(this._array,nStart,nEnd);
return jindo.$A(a)
};
jindo.$A.prototype.splice=function(nIndex,nHowMany){var a=this._array.splice.apply(this._array,jindo._p_._toArray(arguments));
return jindo.$A(a)
};
jindo.$A.prototype.shuffle=function(){this._array.sort(function(a,b){return Math.random()>Math.random()?1:-1
});
return this
};
jindo.$A.prototype.reverse=function(){this._array.reverse();
return this
};
jindo.$A.prototype.empty=function(){this._array.length=0;
return this
};
jindo.$A.prototype.sort=function(fpSort){var oArgs=g_checkVarType(arguments,{"void":[],"4fp":["fpSort:Function+"]},"$A#sort");
if(fpSort){this._array.sort(jindo.$Fn(oArgs.fpSort,this).bind())
}else{this._array.sort()
}return this
};
jindo.$A.Break=jindo.$Jindo.Break;
jindo.$A.Continue=jindo.$Jindo.Continue;
jindo.$A.prototype.map=function(fCallback,oThis){function mapBody(fpEach){return function(fCallback,oThis){var oArgs=g_checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#map");
if(oArgs==null){return this
}var returnArr=[];
var that=this;
function f(v,i,a){try{returnArr.push(fCallback.apply(oThis||that,jindo._p_._toArray(arguments)))
}catch(e){if(e instanceof that.constructor.Continue){returnArr.push(v)
}else{throw e
}}}fpEach(this,f);
return jindo.$A(returnArr)
}
}if(this._array.map){jindo.$A.prototype.map=mapBody(function(scope,fp){scope.forEach(fp)
})
}else{jindo.$A.prototype.map=mapBody(function(scope,fp){var arr=scope._array;
for(var i=0,l=scope._array.length;
i<l;
i++){try{fp(arr[i],i,arr)
}catch(e){if(e instanceof scope.constructor.Break){break
}else{throw e
}}}})
}return this.map.apply(this,jindo._p_._toArray(arguments))
};
jindo.$A.prototype.filter=function(fCallback,oThis){function filterBody(fpEach){return function(fCallback,oThis){var oArgs=g_checkVarType(arguments,jindo.$A.checkVarTypeObj,"$A#filter");
if(oArgs==null){return this
}var returnArr=[];
var that=this;
function f(v,i,a){try{if(fCallback.apply(oThis||that,jindo._p_._toArray(arguments))){returnArr.push(v)
}}catch(e){if(!(e instanceof that.constructor.Continue)){throw e
}}}fpEach(this,f);
return jindo.$A(returnArr)
}
}if(this._array.filter){jindo.$A.prototype.filter=filterBody(function(scope,fp){try{scope.forEach(fp)
}catch(e){if(!(e instanceof scope.constructor.Break)){throw e
}}})
}else{jindo.$A.prototype.filter=filterBody(function(scope,fp){var arr=scope._array;
for(var i=0,l=scope._array.length;
i<l;
i++){try{fp(arr[i],i,arr)
}catch(e){if(e instanceof scope.constructor.Break){break
}else{throw e
}}}})
}return this.filter.apply(this,jindo._p_._toArray(arguments))
};
jindo.$A.prototype.every=function(fCallback,oThis){var ___checkVarType=g_checkVarType;
var ___checkObj=jindo.$A.checkVarTypeObj;
if(this._array.every){jindo.$A.prototype.every=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#every");
return this._array.every(fCallback,oThis||this)
}
}else{jindo.$A.prototype.every=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#every");
var result=true;
var arr=this._array;
for(var i=0,l=arr.length;
i<l;
i++){if(fCallback.call(oThis||this,arr[i],i,arr)===false){result=false;
break
}}return result
}
}return this.every.apply(this,jindo._p_._toArray(arguments))
};
jindo.$A.prototype.some=function(fCallback,oThis){var ___checkVarType=g_checkVarType;
var ___checkObj=jindo.$A.checkVarTypeObj;
if(this._array.some){jindo.$A.prototype.some=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#some");
return this._array.some(fCallback,oThis||this)
}
}else{jindo.$A.prototype.some=function(fCallback,oThis){___checkVarType(arguments,___checkObj,"$A#some");
var result=false;
var arr=this._array;
for(var i=0,l=arr.length;
i<l;
i++){if(fCallback.call(oThis||this,arr[i],i,arr)===true){result=true;
break
}}return result
}
}return this.some.apply(this,jindo._p_._toArray(arguments))
};
jindo.$A.prototype.refuse=function(oValue1){var a=jindo.$A(jindo._p_._toArray(arguments));
return this.filter(function(v,i){return !(a.indexOf(v)>-1)
})
};
jindo.$A.prototype.unique=function(){var a=this._array,b=[],l=a.length;
var i,j;
for(i=0;
i<l;
i++){for(j=0;
j<b.length;
j++){if(a[i]==b[j]){break
}}if(j>=b.length){b[j]=a[i]
}}this._array=b;
return this
};
jindo.$Ajax=function(url,option){var cl=arguments.callee;
if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,2,"$Ajax");
return new cl(url,option||{})
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var ___ajax=jindo.$Ajax;
var ___error=jindo.$Error;
var ___except=jindo.$Except;
var oArgs=g_checkVarType(arguments,{"4str":["sURL:String+"],"4obj":["sURL:String+","oOption:Hash+"]},"$Ajax");
if(oArgs+""=="for_string"){oArgs.oOption={}
}function _getXHR(){if(window.XMLHttpRequest){return new XMLHttpRequest()
}else{if(ActiveXObject){try{return new ActiveXObject("MSXML2.XMLHTTP")
}catch(e){return new ActiveXObject("Microsoft.XMLHTTP")
}return null
}}}var loc=location.toString();
var domain="";
try{domain=loc.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]
}catch(e){}this._status=0;
this._url=oArgs.sURL;
this._headers={};
this._options={type:"xhr",method:"post",proxy:"",timeout:0,onload:function(req){},onerror:null,ontimeout:function(req){},jsonp_charset:"utf-8",callbackid:"",callbackname:"",sendheader:true,async:true,decode:true,postBody:false};
this._options=___ajax._setProperties(oArgs.oOption,this);
___ajax._validationOption(this._options,"$Ajax");
if(___ajax.CONFIG){this.option(___ajax.CONFIG)
}var _opt=this._options;
_opt.type=_opt.type.toLowerCase();
_opt.method=_opt.method.toLowerCase();
if(window["__"+jindo._p_.jindoName+"_callback"]===undefined){window["__"+jindo._p_.jindoName+"_callback"]=[];
window["__"+jindo._p_.jindoName+"2_callback"]=[]
}var t=this;
switch(_opt.type){case"put":case"delete":case"get":case"post":_opt.method=_opt.type;
case"xhr":this._request=_getXHR();
break;
case"flash":if(!___ajax.SWFRequest){throw new ___error(jindo._p_.jindoName+".$Ajax.SWFRequest"+___except.REQUIRE_AJAX,"$Ajax")
}this._request=new ___ajax.SWFRequest(function(name,value){return t.option.apply(t,arguments)
});
break;
case"jsonp":if(!___ajax.JSONPRequest){throw new ___error(jindo._p_.jindoName+".$Ajax.JSONPRequest"+___except.REQUIRE_AJAX,"$Ajax")
}this._request=new ___ajax.JSONPRequest(function(name,value){return t.option.apply(t,arguments)
});
break;
case"iframe":if(!___ajax.FrameRequest){throw new ___error(jindo._p_.jindoName+".$Ajax.FrameRequest"+___except.REQUIRE_AJAX,"$Ajax")
}this._request=new ___ajax.FrameRequest(function(name,value){return t.option.apply(t,arguments)
})
}};
jindo.$Ajax._setProperties=function(option,context){option=option||{};
var type;
type=option.type=option.type||"xhr";
option.onload=jindo.$Fn(option.onload||function(){},context).bind();
option.method=option.method||"post";
if(type!="iframe"){option.timeout=option.timeout||0;
option.ontimeout=jindo.$Fn(option.ontimeout||function(){},context).bind();
option.onerror=jindo.$Fn(option.onerror||function(){},context).bind()
}if(type=="xhr"){option.async=option.async===undefined?true:option.async;
option.postBody=option.postBody===undefined?false:option.postBody
}else{if(type=="jsonp"){option.method="get";
option.jsonp_charset=option.jsonp_charset||"utf-8";
option.callbackid=option.callbackid||"";
option.callbackname=option.callbackname||""
}else{if(type=="flash"){option.sendheader=option.sendheader===undefined?true:option.sendheader;
option.decode=option.decode===undefined?true:option.decode
}else{if(type=="iframe"){option.proxy=option.proxy||""
}}}}return option
};
jindo.$Ajax._validationOption=function(oOption,sMethod){var ___except=jindo.$Except;
var sType=oOption.type;
if(sType==="jsonp"){if(oOption.method!=="get"){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+sMethod+"-method="+oOption.method)
}}else{if(sType==="flash"){if(!(oOption.method==="get"||oOption.method==="post")){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+sMethod+"-method="+oOption.method)
}}}if(oOption.postBody){if(!(sType==="xhr"&&(oOption.method!=="get"))){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+oOption.method+"-postBody="+oOption.postBody)
}}var oTypeProperty={xhr:"onload|timeout|ontimeout|onerror|async|method|postBody|type",jsonp:"onload|timeout|ontimeout|onerror|jsonp_charset|callbackid|callbackname|method|type",flash:"onload|timeout|ontimeout|onerror|sendheader|decode|method|type",iframe:"onload|proxy|method|type"};
var aName=[];
var i=0;
for(aName[i++] in oOption){}var sProperty=oTypeProperty[sType];
for(var i=0,l=aName.length;
i<l;
i++){if(sProperty.indexOf(aName[i])==-1){jindo.$Jindo._warn(___except.CANNOT_USE_OPTION+"\n\t"+sType+"-"+aName[i])
}}};
jindo.$Ajax.prototype._onload=(function(isIE){var ___ajax=jindo.$Ajax;
var cache=jindo.$Jindo;
if(isIE){return function(){var status=this._request.status;
var bSuccess=this._request.readyState==4&&(status==200||status==0);
var oResult;
if(this._request.readyState==4){try{if((!bSuccess)&&cache.isFunction(this._options.onerror)){this._options.onerror(new ___ajax.Response(this._request))
}else{if(!this._is_abort){oResult=this._options.onload(new ___ajax.Response(this._request))
}}}catch(e){throw e
}finally{if(cache.isFunction(this._oncompleted)){this._oncompleted(bSuccess,oResult)
}if(this._options.type=="xhr"){this.abort();
try{delete this._request.onload
}catch(e){this._request.onload=undefined
}}delete this._request.onreadystatechange
}}}
}else{return function(){var status=this._request.status;
var bSuccess=this._request.readyState==4&&(status==200||status==0);
var oResult;
if(this._request.readyState==4){try{if((!bSuccess)&&cache.isFunction(this._options.onerror)){this._options.onerror(new ___ajax.Response(this._request))
}else{oResult=this._options.onload(new ___ajax.Response(this._request))
}}catch(e){throw e
}finally{this._status--;
if(cache.isFunction(this._oncompleted)){this._oncompleted(bSuccess,oResult)
}}}}
}})(jindo._p_._JINDO_IS_IE);
jindo.$Ajax.prototype.request=function(oData){var cache=jindo.$Jindo;
var oArgs=cache.checkVarType(arguments,{"4voi":[],"4obj":[cache._F("oData:Hash+")],"4str":["sData:String+"]},"$Ajax#request");
this._status++;
var t=this;
var req=this._request;
var opt=this._options;
var data,v,a=[],data="";
var _timer=null;
var url=this._url;
this._is_abort=false;
var sUpType=opt.type.toUpperCase();
var sUpMethod=opt.method.toUpperCase();
if(opt.postBody&&sUpType=="XHR"&&sUpMethod!="GET"){if(oArgs+""=="4str"){data=oArgs.sData
}else{if(oArgs+""=="4obj"){data=jindo.$Json(oArgs.oData).toString()
}else{data=null
}}}else{switch(oArgs+""){case"4voi":data=null;
break;
case"4obj":var oData=oArgs.oData;
for(var k in oData){if(oData.hasOwnProperty(k)){v=oData[k];
if(cache.isFunction(v)){v=v()
}if(cache.isArray(v)||(jindo.$A&&v instanceof jindo.$A)){if(v instanceof jindo.$A){v=v._array
}for(var i=0;
i<v.length;
i++){a[a.length]=k+"="+encodeURIComponent(v[i])
}}else{a[a.length]=k+"="+encodeURIComponent(v)
}}}data=a.join("&")
}}if(data&&sUpType=="XHR"&&sUpMethod=="GET"){if(url.indexOf("?")==-1){url+="?"
}else{url+="&"
}url+=data;
data=null
}if(sUpType=="XHR"&&opt.async){req.open(sUpMethod,url,opt.async)
}else{if(sUpType=="XHR"){req.open(sUpMethod,url,false)
}else{req.open(sUpMethod,url)
}}if(sUpType=="XHR"&&sUpMethod=="POST"){req.setRequestHeader("If-Modified-Since","Thu, 1 Jan 1970 00:00:00 GMT")
}if(sUpType=="XHR"||sUpType=="IFRAME"||(sUpType=="FLASH"&&opt.sendheader)){if(!this._headers["Content-Type"]){req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8")
}req.setRequestHeader("charset","utf-8");
if(!this._headers["X-Requested-With"]){req.setRequestHeader("X-Requested-With","XMLHttpRequest")
}for(var x in this._headers){if(this._headers.hasOwnProperty(x)){if(typeof this._headers[x]=="function"){continue
}req.setRequestHeader(x,String(this._headers[x]))
}}}if(req.addEventListener&&!jindo._p_._JINDO_IS_OP&&!jindo._p_._JINDO_IS_IE){if(this._loadFunc){req.removeEventListener("load",this._loadFunc,false)
}this._loadFunc=function(rq){clearTimeout(_timer);
_timer=undefined;
t._onload(rq)
};
req.addEventListener("load",this._loadFunc,false)
}else{if(req.onload!==undefined){req.onload=function(rq){if(req.readyState==4&&!t._is_abort){clearTimeout(_timer);
_timer=undefined;
t._onload(rq)
}}
}else{var iePattern=jindo._p_._j_ag.match(/(?:MSIE) ([0-9.]+)/);
if(iePattern&&iePattern[1]==6&&opt.async){var onreadystatechange=function(rq){if(req.readyState==4&&!t._is_abort){if(_timer){clearTimeout(_timer);
_timer=undefined
}t._onload(rq);
clearInterval(t._interval);
t._interval=undefined
}};
this._interval=setInterval(onreadystatechange,300)
}else{req.onreadystatechange=function(rq){if(req.readyState==4){clearTimeout(_timer);
_timer=undefined;
t._onload(rq)
}}
}}}if(opt.timeout>0){if(this._timer){clearTimeout(this._timer)
}_timer=setTimeout(function(){t._is_abort=true;
if(t._interval){clearInterval(t._interval);
t._interval=undefined
}try{req.abort()
}catch(e){}opt.ontimeout(req);
if(cache.isFunction(t._oncompleted)){t._oncompleted(false)
}},opt.timeout*1000);
this._timer=_timer
}this._test_url=url;
req.send(data);
return this
};
jindo.$Ajax.prototype.isIdle=function(){return this._status==0
};
jindo.$Ajax.prototype.abort=function(){try{if(this._interval){clearInterval(this._interval)
}if(this._timer){clearTimeout(this._timer)
}this._interval=undefined;
this._timer=undefined;
this._is_abort=true;
this._request.abort()
}finally{this._status--
}return this
};
jindo.$Ajax.prototype.url=function(sURL){var oArgs=g_checkVarType(arguments,{g:[],s:["sURL:String+"]},"$Ajax#url");
switch(oArgs+""){case"g":return this._url;
case"s":this._url=oArgs.sURL;
return this
}};
jindo.$Ajax.prototype.option=function(name,value){var oArgs=g_checkVarType(arguments,{s4var:["sKey:String+","vValue:Variant"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax#option");
switch(oArgs+""){case"s4var":oArgs.oOption={};
oArgs.oOption[oArgs.sKey]=oArgs.vValue;
case"s4obj":var oOption=oArgs.oOption;
try{for(var x in oOption){if(oOption.hasOwnProperty(x)){if(x==="onload"||x==="ontimeout"||x==="onerror"){this._options[x]=jindo.$Fn(oOption[x],this).bind()
}else{this._options[x]=oOption[x]
}}}}catch(e){}break;
case"g":return this._options[oArgs.sKey]
}jindo.$Ajax._validationOption(this._options,"$Ajax#option");
return this
};
jindo.$Ajax.prototype.header=function(name,value){if(this._options.type==="jsonp"){jindo.$Jindo._warn("")
}var oArgs=g_checkVarType(arguments,{s4str:["sKey:String+","sValue:String+"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax#option");
switch(oArgs+""){case"s4str":this._headers[oArgs.sKey]=oArgs.sValue;
break;
case"s4obj":var oOption=oArgs.oOption;
try{for(var x in oOption){if(oOption.hasOwnProperty(x)){this._headers[x]=oOption[x]
}}}catch(e){}break;
case"g":return this._headers[oArgs.sKey]
}return this
};
jindo.$Ajax.Response=function(req){this._response=req;
this._regSheild=/^for\(;;\);/
};
jindo.$Ajax.Response.prototype.xml=function(){return this._response.responseXML
};
jindo.$Ajax.Response.prototype.text=function(){return this._response.responseText.replace(this._regSheild,"")
};
jindo.$Ajax.Response.prototype.status=function(){var status=this._response.status;
return status==0?200:status
};
jindo.$Ajax.Response.prototype.readyState=function(){return this._response.readyState
};
jindo.$Ajax.Response.prototype.json=function(){if(this._response.responseJSON){return this._response.responseJSON
}else{if(this._response.responseText){try{return eval("("+this.text()+")")
}catch(e){throw new jindo.$Error(jindo.$Except.PARSE_ERROR,"$Ajax#json")
}}}return{}
};
jindo.$Ajax.Response.prototype.header=function(name){var oArgs=g_checkVarType(arguments,{"4str":["name:String+"],"4voi":[]},"$Ajax.Response#header");
switch(oArgs+""){case"4str":return this._response.getResponseHeader(name);
case"4voi":return this._response.getAllResponseHeaders()
}};
var klass=jindo.$Class;
jindo.$Ajax.RequestBase=klass({_respHeaderString:"",callbackid:"",callbackname:"",responseXML:null,responseJSON:null,responseText:"",status:404,readyState:0,$init:function(fpOption){},onload:function(){},abort:function(){},open:function(){},send:function(){},setRequestHeader:function(sName,sValue){g_checkVarType(arguments,{"4str":["sName:String+","sValue:String+"]},"$Ajax.RequestBase#setRequestHeader");
this._headers[sName]=sValue
},getResponseHeader:function(sName){g_checkVarType(arguments,{"4str":["sName:String+"]},"$Ajax.RequestBase#getResponseHeader");
return this._respHeaders[sName]||""
},getAllResponseHeaders:function(){return this._respHeaderString
},_getCallbackInfo:function(){var id="";
if(this.option("callbackid")!=""){var idx=0;
do{id="_"+this.option("callbackid")+"_"+idx;
idx++
}while(window["__"+jindo._p_.jindoName+"_callback"][id])
}else{do{id="_"+Math.floor(Math.random()*10000)
}while(window["__"+jindo._p_.jindoName+"_callback"][id])
}if(this.option("callbackname")==""){this.option("callbackname","_callback")
}return{callbackname:this.option("callbackname"),id:id,name:"window.__"+jindo._p_.jindoName+"_callback."+id}
}});
jindo.$Ajax.JSONPRequest=klass({_headers:{},_respHeaders:{},_script:null,_onerror:null,$init:function(fpOption){this.option=fpOption
},_callback:function(data){if(this._onerror){clearTimeout(this._onerror);
this._onerror=null
}var self=this;
this.responseJSON=data;
this.onload(this);
setTimeout(function(){self.abort()
},10)
},abort:function(){if(this._script){try{this._script.parentNode.removeChild(this._script)
}catch(e){}}},open:function(method,url){g_checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.JSONPRequest#open");
this.responseJSON=null;
this._url=url
},send:function(data){var oArgs=g_checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.JSONPRequest#send");
var t=this;
var info=this._getCallbackInfo();
var head=document.getElementsByTagName("head")[0];
this._script=document.createElement("script");
this._script.type="text/javascript";
this._script.charset=this.option("jsonp_charset");
if(head){head.appendChild(this._script)
}else{if(document.body){document.body.appendChild(this._script)
}}window["__"+jindo._p_.jindoName+"_callback"][info.id]=function(data){try{t.readyState=4;
t.status=200;
t._callback(data)
}finally{delete window["__"+jindo._p_.jindoName+"_callback"][info.id];
delete window["__"+jindo._p_.jindoName+"2_callback"][info.id]
}};
window["__"+jindo._p_.jindoName+"2_callback"][info.id]=function(data){window["__"+jindo._p_.jindoName+"_callback"][info.id](data)
};
var agent=jindo.$Agent(navigator);
var _loadCallback=function(){if(!t.responseJSON){t.readyState=4;
t.status=500;
t._onerror=setTimeout(function(){t._callback(null)
},200)
}};
if(agent.navigator().ie){this._script.onreadystatechange=function(){if(this.readyState=="loaded"){_loadCallback();
this.onreadystatechange=null
}}
}else{this._script.onload=this._script.onerror=function(){_loadCallback();
this.onerror=null;
this.onload=null
}
}var delimiter="&";
if(this._url.indexOf("?")==-1){delimiter="?"
}switch(oArgs+""){case"4voi":case"4nul":data="";
break;
case"4str":data="&"+data
}this._test_url=this._script.src=this._url+delimiter+info.callbackname+"="+info.name+data
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest=klass({$init:function(fpOption){this.option=fpOption
},_headers:{},_respHeaders:{},_getFlashObj:function(){var _tmpId=jindo.$Ajax.SWFRequest._tmpId;
var navi=jindo.$Agent(window.navigator).navigator();
var obj;
if(navi.ie&&navi.version==9){obj=_getElementById(document,_tmpId)
}else{obj=window.document[_tmpId]
}return(this._getFlashObj=function(){return obj
})()
},_callback:function(status,data,headers){this.readyState=4;
if(jindo.$Jindo.isNumeric(status)){this.status=status
}else{if(status==true){this.status=200
}}if(this.status==200){if(jindo.$Jindo.isString(data)){try{this.responseText=this.option("decode")?decodeURIComponent(data):data;
if(!this.responseText||this.responseText==""){this.responseText=data
}}catch(e){if(e.name=="URIError"){this.responseText=data;
if(!this.responseText||this.responseText==""){this.responseText=data
}}}}if(jindo.$Jindo.isHash(headers)){this._respHeaders=headers
}}this.onload(this)
},open:function(method,url){g_checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.SWFRequest#open");
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
this._url=url;
this._method=method
},send:function(data){var cache=jindo.$Jindo;
var oArgs=cache.checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.SWFRequest#send");
this.responseXML=false;
this.responseText="";
var t=this;
var dat={};
var info=this._getCallbackInfo();
var swf=this._getFlashObj();
function f(arg){switch(typeof arg){case"string":return'"'+arg.replace(/\"/g,'\\"')+'"';
case"number":return arg;
case"object":var ret="",arr=[];
if(cache.isArray(arg)){for(var i=0;
i<arg.length;
i++){arr[i]=f(arg[i])
}ret="["+arr.join(",")+"]"
}else{for(var x in arg){if(arg.hasOwnProperty(x)){arr[arr.length]=f(x)+":"+f(arg[x])
}}ret="{"+arr.join(",")+"}"
}return ret;
default:return'""'
}}data=(data||"").split("&");
var oEach;
for(var i=0;
i<data.length;
i++){oEach=data[i];
pos=oEach.indexOf("=");
key=oEach.substring(0,pos);
val=oEach.substring(pos+1);
dat[key]=decodeURIComponent(val)
}this._current_callback_id=info.id;
window["__"+jindo._p_.jindoName+"_callback"][info.id]=function(success,data){try{t._callback(success,data)
}finally{delete window["__"+jindo._p_.jindoName+"_callback"][info.id]
}};
window["__"+jindo._p_.jindoName+"2_callback"][info.id]=function(data){window["__"+jindo._p_.jindoName+"_callback"][info.id](data)
};
var oData={url:this._url,type:this._method,data:dat,charset:"UTF-8",callback:info.name,header_json:this._headers};
swf.requestViaFlash(f(oData))
},abort:function(){if(this._current_callback_id){window["__"+jindo._p_.jindoName+"_callback"][this._current_callback_id]=function(){delete window["__"+jindo._p_.jindoName+"_callback"][info.id];
delete window["__"+jindo._p_.jindoName+"2_callback"][info.id]
};
window["__"+jindo._p_.jindoName+"2_callback"][this._current_callback_id]=function(data){window["__"+jindo._p_.jindoName+"_callback"][this._current_callback_id](data)
}
}}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest.write=function(swf_path){var oArgs=jindo.$Jindo.checkVarType(arguments,{"4voi":[],"4str":["data:String+"]},"<static> $Ajax.SWFRequest#write");
switch(oArgs+""){case"4voi":swf_path="./ajax.swf"
}var ajax=jindo.$Ajax;
ajax.SWFRequest._tmpId="tmpSwf"+(new Date()).getMilliseconds()+Math.floor(Math.random()*100000);
var activeCallback="jindo.$Ajax.SWFRequest.loaded";
var protocol=(location.protocol=="https:")?"https:":"http:";
var classid=(jindo._p_._JINDO_IS_IE?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':"");
ajax._checkFlashLoad();
var body=document.body;
var nodes=body.childNodes;
var swf=jindo.$("<div style='position:absolute;top:-1000px;left:-1000px' tabindex='-1'>/<div>");
swf.innerHTML='<object tabindex="-1" id="'+ajax.SWFRequest._tmpId+'" width="1" height="1" '+classid+' codebase="'+protocol+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="'+swf_path+'"><param name = "FlashVars" value = "activeCallback='+activeCallback+'" /><param name = "allowScriptAccess" value = "always" /><embed tabindex="-1" name="'+ajax.SWFRequest._tmpId+'" src="'+swf_path+'" type="application/x-shockwave-flash" pluginspage="'+protocol+'://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true" FlashVars="activeCallback='+activeCallback+'"></embed></object>';
if(nodes.length>0){body.insertBefore(swf,nodes[0])
}else{body.appendChild(swf)
}};
jindo.$Ajax._checkFlashLoad=function(){jindo.$Ajax._checkFlashKey=setTimeout(function(){jindo.$Ajax.SWFRequest.onerror()
},5000);
jindo.$Ajax._checkFlashLoad=function(){}
};
jindo.$Ajax.SWFRequest.activeFlash=false;
jindo.$Ajax.SWFRequest.onload=function(){};
jindo.$Ajax.SWFRequest.onerror=function(){};
jindo.$Ajax.SWFRequest.loaded=function(){clearTimeout(jindo.$Ajax._checkFlashKey);
jindo.$Ajax.SWFRequest.activeFlash=true;
jindo.$Ajax.SWFRequest.onload()
};
jindo.$Ajax.FrameRequest=klass({_headers:{},_respHeaders:{},_frame:null,_domain:"",$init:function(fpOption){this.option=fpOption
},_callback:function(id,data,header){var self=this;
this.readyState=4;
this.status=200;
this.responseText=data;
this._respHeaderString=header;
header.replace(/^([\w\-]+)\s*:\s*(.+)$/m,function($0,$1,$2){self._respHeaders[$1]=$2
});
this.onload(this);
setTimeout(function(){self.abort()
},10)
},abort:function(){if(this._frame){try{this._frame.parentNode.removeChild(this._frame)
}catch(e){}}},open:function(method,url){g_checkVarType(arguments,{"4str":["method:String+","url:String+"]},"$Ajax.FrameRequest#open");
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var dom=document.location.toString().match(re);
this._method=method;
this._url=url;
this._remote=String(url).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0];
this._frame=null;
this._domain=(dom!=null&&dom[1]!=document.domain)?document.domain:""
},send:function(data){var oArgs=g_checkVarType(arguments,{"4voi":[],"4nul":["data:Null"],"4str":["data:String+"]},"$Ajax.FrameRequest#send");
this.responseXML="";
this.responseText="";
var t=this;
var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var info=this._getCallbackInfo();
var url;
var _aStr=[];
_aStr.push(this._remote+"/ajax_remote_callback.html?method="+this._method);
var header=[];
window["__"+jindo._p_.jindoName+"_callback"][info.id]=function(id,data,header){try{t._callback(id,data,header)
}finally{delete window["__"+jindo._p_.jindoName+"_callback"][info.id];
delete window["__"+jindo._p_.jindoName+"2_callback"][info.id]
}};
window["__"+jindo._p_.jindoName+"2_callback"][info.id]=function(id,data,header){window["__"+jindo._p_.jindoName+"_callback"][info.id](id,data,header)
};
for(var x in this._headers){if(this._headers.hasOwnProperty(x)){header[header.length]="'"+x+"':'"+this._headers[x]+"'"
}}header="{"+header.join(",")+"}";
_aStr.push("&id="+info.id);
_aStr.push("&header="+encodeURIComponent(header));
_aStr.push("&proxy="+encodeURIComponent(this.option("proxy")));
_aStr.push("&domain="+this._domain);
_aStr.push("&url="+encodeURIComponent(this._url.replace(re,"")));
_aStr.push("#"+encodeURIComponent(data));
var fr=this._frame=document.createElement("iframe");
var style=fr.style;
style.position="absolute";
style.visibility="hidden";
style.width="1px";
style.height="1px";
var body=document.body||document.documentElement;
if(body.firstChild){body.insertBefore(fr,body.firstChild)
}else{body.appendChild(fr)
}if(typeof MSApp!="undefined"){MSApp.addPublicLocalApplicationUri(this.option("proxy"))
}fr.src=_aStr.join("")
}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.Queue=function(option){var cl=arguments.callee;
if(!(this instanceof cl)){return new cl(option||{})
}var oArgs=g_checkVarType(arguments,{"4voi":[],"4obj":["option:Hash+"]},"$Ajax.Queue");
option=oArgs.option;
this._options={async:false,useResultAsParam:false,stopOnFailure:false};
this.option(option);
this._queue=[]
};
jindo.$Ajax.Queue.prototype.option=function(name,value){var oArgs=g_checkVarType(arguments,{s4str:["sKey:String+","sValue:Variant"],s4obj:["oOption:Hash+"],g:["sKey:String+"]},"$Ajax.Queue#option");
switch(oArgs+""){case"s4str":this._options[oArgs.sKey]=oArgs.sValue;
break;
case"s4obj":var oOption=oArgs.oOption;
try{for(var x in oOption){if(oOption.hasOwnProperty(x)){this._options[x]=oOption[x]
}}}catch(e){}break;
case"g":return this._options[oArgs.sKey]
}return this
};
jindo.$Ajax.Queue.prototype.add=function(oAjax,oParam){var oArgs=g_checkVarType(arguments,{"4obj":["oAjax:Hash+"],"4obj2":["oAjax:Hash+","oPram:Hash+"]},"$Ajax.Queue");
switch(oArgs+""){case"4obj2":oParam=oArgs.oPram
}this._queue.push({obj:oAjax,param:oParam});
return this
};
jindo.$Ajax.Queue.prototype.request=function(){this._requestAsync.apply(this,this.option("async")?[]:[0]);
return this
};
jindo.$Ajax.Queue.prototype._requestSync=function(nIdx,oParam){var t=this;
var queue=this._queue;
if(queue.length>nIdx+1){queue[nIdx].obj._oncompleted=function(bSuccess,oResult){if(!t.option("stopOnFailure")||bSuccess){t._requestSync(nIdx+1,oResult)
}}
}var _oParam=queue[nIdx].param||{};
if(this.option("useResultAsParam")&&oParam){try{for(var x in oParam){if(_oParam[x]===undefined&&oParam.hasOwnProperty(x)){_oParam[x]=oParam[x]
}}}catch(e){}}queue[nIdx].obj.request(_oParam)
};
jindo.$Ajax.Queue.prototype._requestAsync=function(){for(var i=0;
i<this._queue.length;
i++){this._queue[i].obj.request(this._queue[i].param||{})
}};
jindo.$H=function(hashObject){var cl=arguments.callee;
if(hashObject instanceof cl){return hashObject
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$H");
return new cl(hashObject||{})
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4obj":["oObj:Hash+"],"4vod":[]},"$H");
this._table={};
for(var k in hashObject){if(hashObject.hasOwnProperty(k)){this._table[k]=hashObject[k]
}}};
jindo.$H.prototype.$value=function(){return this._table
};
jindo.$H.prototype.$=function(key,value){var oArgs=g_checkVarType(arguments,{s4var:[jindo.$Jindo._F("key:String+"),"value:Variant"],s4var2:["key:Numeric","value:Variant"],g4str:["key:String+"],s4obj:["oObj:Hash+"],g4num:["key:Numeric"]},"$H#$");
switch(oArgs+""){case"s4var":case"s4var2":this._table[key]=value;
return this;
case"s4obj":var obj=oArgs.oObj;
for(var i in obj){if(obj.hasOwnProperty(i)){this._table[i]=obj[i]
}}return this;
default:return this._table[key]
}};
jindo.$H.prototype.length=function(){var index=0;
var sortedIndex=this["__jindo_sorted_index"];
if(sortedIndex){return sortedIndex.length
}else{for(var k in this._table){if(this._table.hasOwnProperty(k)){if(Object.prototype[k]!==undefined&&Object.prototype[k]===this._table[k]){continue
}index++
}}}return index
};
jindo.$H.prototype.forEach=function(callback,scopeObject){var oArgs=g_checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#forEach");
var t=this._table;
var h=this.constructor;
var sortedIndex=this["__jindo_sorted_index"];
if(sortedIndex){for(var i=0,l=sortedIndex.length;
i<l;
i++){try{var k=sortedIndex[i];
callback.call(scopeObject||this,t[k],k,t)
}catch(e){if(e instanceof h.Break){break
}if(e instanceof h.Continue){continue
}throw e
}}}else{for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}try{callback.call(scopeObject||this,t[k],k,t)
}catch(e){if(e instanceof h.Break){break
}if(e instanceof h.Continue){continue
}throw e
}}}}return this
};
jindo.$H.prototype.filter=function(callback,thisObject){var oArgs=g_checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#filter");
var h=jindo.$H();
var t=this._table;
var hCon=this.constructor;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}try{if(callback.call(thisObject||this,t[k],k,t)){h.add(k,t[k])
}}catch(e){if(e instanceof hCon.Break){break
}if(e instanceof hCon.Continue){continue
}throw e
}}}return h
};
jindo.$H.prototype.map=function(callback,thisObject){var oArgs=g_checkVarType(arguments,{"4fun":["callback:Function+"],"4obj":["callback:Function+","thisObject:Variant"]},"$H#map");
var h=jindo.$H();
var t=this._table;
var hCon=this.constructor;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}try{h.add(k,callback.call(thisObject||this,t[k],k,t))
}catch(e){if(e instanceof hCon.Break){break
}if(e instanceof hCon.Continue){h.add(k,t[k])
}else{throw e
}}}}return h
};
jindo.$H.prototype.add=function(key,value){var oArgs=g_checkVarType(arguments,{"4str":["key:String+","value:Variant"],"4num":["key:Numeric","value:Variant"]},"$H#add");
var sortedIndex=this["__jindo_sorted_index"];
if(sortedIndex&&this._table[key]==undefined){this["__jindo_sorted_index"].push(key)
}this._table[key]=value;
return this
};
jindo.$H.prototype.remove=function(key){var oArgs=g_checkVarType(arguments,{"4str":["key:String+"],"4num":["key:Numeric"]},"$H#remove");
if(this._table[key]===undefined){return null
}var val=this._table[key];
delete this._table[key];
var sortedIndex=this["__jindo_sorted_index"];
if(sortedIndex){var newSortedIndex=[];
for(var i=0,l=sortedIndex.length;
i<l;
i++){if(sortedIndex[i]!=key){newSortedIndex.push(sortedIndex[i])
}}this["__jindo_sorted_index"]=newSortedIndex
}return val
};
jindo.$H.prototype.search=function(value){var oArgs=g_checkVarType(arguments,{"4str":["value:Variant"]},"$H#search");
var result=false;
var t=this._table;
for(var k in t){if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k)){continue
}var v=t[k];
if(v===value){result=k;
break
}}}return result
};
jindo.$H.prototype.hasKey=function(key){var oArgs=g_checkVarType(arguments,{"4str":["key:String+"],"4num":["key:Numeric"]},"$H#hasKey");
return this._table[key]!==undefined
};
jindo.$H.prototype.hasValue=function(value){var oArgs=g_checkVarType(arguments,{"4str":["value:Variant"]},"$H#hasValue");
return(this.search(value)!==false)
};
jindo._p_.defaultSort=function(oArgs,that,type){var aSorted=[];
var fpSort=oArgs.fpSort;
for(var k in that._table){if(that._table.hasOwnProperty(k)){(function(k,v){aSorted.push({key:k,val:v})
})(k,that._table[k])
}}if(oArgs+""==="vo"){fpSort=function(a,b){return a===b?0:a>b?1:-1
}
}aSorted.sort(function(beforeVal,afterVal){return fpSort.call(that,beforeVal[type],afterVal[type])
});
var sortedKey=[];
for(var i=0,l=aSorted.length;
i<l;
i++){sortedKey.push(aSorted[i].key)
}return sortedKey
};
jindo.$H.prototype.sort=function(fpSort){var oArgs=g_checkVarType(arguments,{vo:[],"4fp":["fpSort:Function+"]},"$H#sort");
this["__jindo_sorted_index"]=jindo._p_.defaultSort(oArgs,this,"val");
return this
};
jindo.$H.prototype.ksort=function(fpSort){var oArgs=g_checkVarType(arguments,{vo:[],"4fp":["fpSort:Function+"]},"$H#ksort");
this["__jindo_sorted_index"]=jindo._p_.defaultSort(oArgs,this,"key");
return this
};
jindo.$H.prototype.keys=function(){var keys=this["__jindo_sorted_index"];
if(!keys){keys=[];
for(var k in this._table){if(this._table.hasOwnProperty(k)){keys.push(k)
}}}return keys
};
jindo.$H.prototype.values=function(){var values=[];
for(var k in this._table){if(this._table.hasOwnProperty(k)){values[values.length]=this._table[k]
}}return values
};
jindo.$H.prototype.toQueryString=function(){var buf=[],val=null,idx=0;
for(var k in this._table){if(this._table.hasOwnProperty(k)){val=this._table[k];
if(jindo.$Jindo.isArray(val)){for(i=0;
i<val.length;
i++){buf[buf.length]=encodeURIComponent(k)+"[]="+encodeURIComponent(val[i]+"")
}}else{buf[buf.length]=encodeURIComponent(k)+"="+encodeURIComponent(this._table[k]+"")
}}}return buf.join("&")
};
jindo.$H.prototype.empty=function(){this._table={};
delete this["__jindo_sorted_index"];
return this
};
jindo.$H.Break=jindo.$Jindo.Break;
jindo.$H.Continue=jindo.$Jindo.Continue;
jindo.$Json=function(sObject){var cl=arguments.callee;
if(sObject instanceof cl){return sObject
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Json");
return new cl(arguments.length?sObject:{})
}catch(e){if(e instanceof TypeError){return null
}throw e
}}g_checkVarType(arguments,{"4var":["oObject:Variant"]},"$Json");
this._object=sObject
};
jindo.$Json._oldMakeJSON=function(sObject,sType){try{if(jindo.$Jindo.isString(sObject)&&/^(?:\s*)[\{\[]/.test(sObject)){sObject=eval("("+sObject+")")
}else{return sObject
}}catch(e){throw new jindo.$Error(jindo.$Except.PARSE_ERROR,sType)
}return sObject
};
jindo.$Json.fromXML=function(sXML){var cache=jindo.$Jindo;
var oArgs=cache.checkVarType(arguments,{"4str":["sXML:String+"]},"<static> $Json#fromXML");
var o={};
var re=/\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/ig;
var re2=/^[0-9]+(?:\.[0-9]+)?$/;
var ec={"&amp;":"&","&nbsp;":" ","&quot;":'"',"&lt;":"<","&gt;":">"};
var fg={tags:["/"],stack:[o]};
var es=function(s){if(cache.isUndefined(s)){return""
}return s.replace(/&[a-z]+;/g,function(m){return(cache.isString(ec[m]))?ec[m]:m
})
};
var at=function(s,c){s.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g,function($0,$1,$2,$3){c[$1]=es(($2?$2.replace(/\\"/g,'"'):undefined)||($3?$3.replace(/\\'/g,"'"):undefined))
})
};
var em=function(o){for(var x in o){if(o.hasOwnProperty(x)){if(Object.prototype[x]){continue
}return false
}}return true
};
var cb=function($0,$1,$2,$3,$4,$5){var cur,cdata="";
var idx=fg.stack.length-1;
if(cache.isString($1)&&$1){if($1.substr(0,1)!="/"){var has_attr=(typeof $2=="string"&&$2);
var closed=(typeof $3=="string"&&$3);
var newobj=(!has_attr&&closed)?"":{};
cur=fg.stack[idx];
if(cache.isUndefined(cur[$1])){cur[$1]=newobj;
cur=fg.stack[idx+1]=cur[$1]
}else{if(cur[$1] instanceof Array){var len=cur[$1].length;
cur[$1][len]=newobj;
cur=fg.stack[idx+1]=cur[$1][len]
}else{cur[$1]=[cur[$1],newobj];
cur=fg.stack[idx+1]=cur[$1][1]
}}if(has_attr){at($2,cur)
}fg.tags[idx+1]=$1;
if(closed){fg.tags.length--;
fg.stack.length--
}}else{fg.tags.length--;
fg.stack.length--
}}else{if(cache.isString($4)&&$4){cdata=$4
}else{if(cache.isString($5)&&$5){cdata=es($5)
}}}if(cdata.replace(/^\s+/g,"").length>0){var par=fg.stack[idx-1];
var tag=fg.tags[idx];
if(re2.test(cdata)){cdata=parseFloat(cdata)
}else{if(cdata=="true"){cdata=true
}else{if(cdata=="false"){cdata=false
}}}if(cache.isUndefined(par)){return
}if(par[tag] instanceof Array){var o=par[tag];
if(cache.isHash(o[o.length-1])&&!em(o[o.length-1])){o[o.length-1].$cdata=cdata;
o[o.length-1].toString=function(){return cdata
}
}else{o[o.length-1]=cdata
}}else{if(cache.isHash(par[tag])&&!em(par[tag])){par[tag].$cdata=cdata;
par[tag].toString=function(){return cdata
}
}else{par[tag]=cdata
}}}};
sXML=sXML.replace(/<(\?|\!-)[^>]*>/g,"");
sXML.replace(re,cb);
return jindo.$Json(o)
};
jindo.$Json.prototype.get=function(sPath){var cache=jindo.$Jindo;
var oArgs=cache.checkVarType(arguments,{"4str":["sPath:String+"]},"$Json#get");
var o=jindo.$Json._oldMakeJSON(this._object,"$Json#get");
if(!(cache.isHash(o)||cache.isArray(o))){throw new jindo.$Error(jindo.$Except.JSON_MUST_HAVE_ARRAY_HASH,"$Json#get")
}var p=sPath.split("/");
var re=/^([\w:\-]+)\[([0-9]+)\]$/;
var stack=[[o]],cur=stack[0];
var len=p.length,c_len,idx,buf,j,e;
for(var i=0;
i<len;
i++){if(p[i]=="."||p[i]==""){continue
}if(p[i]==".."){stack.length--
}else{buf=[];
idx=-1;
c_len=cur.length;
if(c_len==0){return[]
}if(re.test(p[i])){idx=+RegExp.$2
}for(j=0;
j<c_len;
j++){e=cur[j][p[i]];
if(cache.isUndefined(e)){continue
}if(cache.isArray(e)){if(idx>-1){if(idx<e.length){buf[buf.length]=e[idx]
}}else{buf=buf.concat(e)
}}else{if(idx==-1){buf[buf.length]=e
}}}stack[stack.length]=buf
}cur=stack[stack.length-1]
}return cur
};
jindo.$Json.prototype.toString=function(){return jindo.$Json._oldToString(this._object)
};
jindo.$Json._oldToString=function(oObj){var cache=jindo.$Jindo;
var func={$:function($){if(cache.isNull($)||!cache.isString($)&&$==Infinity){return"null"
}if(cache.isFunction($)){return undefined
}if(cache.isUndefined($)){return undefined
}if(cache.isBoolean($)){return $?"true":"false"
}if(cache.isString($)){return this.s($)
}if(cache.isNumeric($)){return $
}if(cache.isArray($)){return this.a($)
}if(cache.isHash($)){return this.o($)
}if(cache.isDate($)){return $+""
}if(typeof $=="object"||cache.isRegExp($)){return"{}"
}if(isNaN($)){return"null"
}},s:function(s){var e={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t"};
var c=function(m){return(e[m]!==undefined)?e[m]:m
};
return'"'+s.replace(/[\\"'\n\r\t]/g,c)+'"'
},a:function(a){var s="[",c="",n=a.length;
for(var i=0;
i<n;
i++){if(cache.isFunction(a[i])){continue
}s+=c+this.$(a[i]);
if(!c){c=","
}}return s+"]"
},o:function(o){o=jindo.$H(o).ksort().$value();
var s="{",c="";
for(var x in o){if(o.hasOwnProperty(x)){if(cache.isUndefined(o[x])||cache.isFunction(o[x])){continue
}s+=c+this.s(x)+":"+this.$(o[x]);
if(!c){c=","
}}}return s+"}"
}};
return func.$(oObj)
};
jindo.$Json.prototype.toXML=function(){var f=function($,tag){var t=function(s,at){return"<"+tag+(at||"")+">"+s+"</"+tag+">"
};
switch(typeof $){case"undefined":case"null":return t("");
case"number":return t($);
case"string":if($.indexOf("<")<0){return t($.replace(/&/g,"&amp;"))
}else{return t("<![CDATA["+$+"]]>")
}case"boolean":return t(String($));
case"object":var ret="";
if($ instanceof Array){var len=$.length;
for(var i=0;
i<len;
i++){ret+=f($[i],tag)
}}else{var at="";
for(var x in $){if($.hasOwnProperty(x)){if(x=="$cdata"||typeof $[x]=="function"){continue
}ret+=f($[x],x)
}}if(tag){ret=t(ret,at)
}}return ret
}};
return f(jindo.$Json._oldMakeJSON(this._object,"$Json#toXML"),"")
};
jindo.$Json.prototype.toObject=function(){return jindo.$Json._oldMakeJSON(this._object,"$Json#toObject")
};
jindo.$Json.prototype.compare=function(oObj){var cache=jindo.$Jindo;
var oArgs=cache.checkVarType(arguments,{"4obj":["oData:Hash+"],"4arr":["oData:Array+"]},"$Json#compare");
function compare(vSrc,vTar){if(cache.isArray(vSrc)){if(vSrc.length!==vTar.length){return false
}for(var i=0,nLen=vSrc.length;
i<nLen;
i++){if(!arguments.callee(vSrc[i],vTar[i])){return false
}}return true
}else{if(cache.isRegExp(vSrc)||cache.isFunction(vSrc)||cache.isDate(vSrc)){return String(vSrc)===String(vTar)
}else{if(typeof vSrc==="number"&&isNaN(vSrc)){return isNaN(vTar)
}else{if(cache.isHash(vSrc)){var nLen=0;
for(var k in vSrc){nLen++
}for(var k in vTar){nLen--
}if(nLen!==0){return false
}for(var k in vSrc){if(k in vTar===false||!arguments.callee(vSrc[k],vTar[k])){return false
}}return true
}}}}return vSrc===vTar
}try{return compare(jindo.$Json._oldMakeJSON(this._object,"$Json#compare"),oObj)
}catch(e){return false
}};
jindo.$Json.prototype.$value=jindo.$Json.prototype.toObject;
jindo.$Cookie=function(){var cl=arguments.callee;
var cached=cl._cached;
if(cl._cached){return cl._cached
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Cookie");
return(arguments.length>0)?new cl(arguments[0]):new cl
}catch(e){if(e instanceof TypeError){return null
}throw e
}}if(typeof jindo.$Jindo.isUndefined(cl._cached)){cl._cached=this
}var oArgs=g_checkVarType(arguments,{"4voi":[],"4bln":["bURIComponent:Boolean"]},"$Cookie");
switch(oArgs+""){case"4voi":this._bURIComponent=false;
break;
case"4bln":this._bURIComponent=oArgs.bURIComponent;
break
}};
jindo.$Cookie.prototype.keys=function(){var ca=document.cookie.split(";");
var re=/^\s+|\s+$/g;
var a=new Array;
for(var i=0;
i<ca.length;
i++){a[a.length]=ca[i].substr(0,ca[i].indexOf("=")).replace(re,"")
}return a
};
jindo.$Cookie.prototype.get=function(sName){var oArgs=g_checkVarType(arguments,{"4str":["sName:String+"]},"$Cookie#get");
var ca=document.cookie.split(/\s*;\s*/);
var re=new RegExp("^(\\s*"+sName+"\\s*=)");
var sEncoded;
var sDecoded;
for(var i=0;
i<ca.length;
i++){if(re.test(ca[i])){sEncoded=ca[i].substr(RegExp.$1.length);
if(this._bURIComponent&&jindo.$Jindo.isNull(sEncoded.match(/%u\w{4}/))){sDecoded=decodeURIComponent(sEncoded)
}else{sDecoded=unescape(sEncoded)
}return sDecoded
}}return null
};
jindo.$Cookie.prototype.set=function(sName,sValue,nDays,sDomain,sPath){var cache=jindo.$Jindo;
var oArgs=cache.checkVarType(arguments,{"4str":["sName:String+","sValue:String+"],day_for_string:["sName:String+","sValue:String+","nDays:Numeric"],domain_for_string:["sName:String+","sValue:String+","nDays:Numeric","sDomain:String+"],path_for_string:["sName:String+","sValue:String+","nDays:Numeric","sDomain:String+","sPath:String+"]},"$Cookie#set");
var sExpire="";
var sEncoded;
if(oArgs+""!=="4str"&&nDays!==0){sExpire=";expires="+(new Date((new Date()).getTime()+nDays*1000*60*60*24)).toGMTString()
}if(cache.isUndefined(sDomain)){sDomain=""
}if(cache.isUndefined(sPath)){sPath="/"
}if(this._bURIComponent){sEncoded=encodeURIComponent(sValue)
}else{sEncoded=escape(sValue)
}document.cookie=sName+"="+sEncoded+sExpire+"; path="+sPath+(sDomain?"; domain="+sDomain:"");
return this
};
jindo.$Cookie.prototype.remove=function(sName,sDomain,sPath){var cache=jindo.$Jindo;
var oArgs=cache.checkVarType(arguments,{"4str":["sName:String+"],domain_for_string:["sName:String+","sDomain:String+"],path_for_string:["sName:String+","sDomain:String+","sPath:String+"]},"$Cookie#remove");
var aArg=jindo._p_._toArray(arguments);
var aPram=[];
for(var i=0,l=aArg.length;
i<l;
i++){aPram.push(aArg[i]);
if(i==0){aPram.push("");
aPram.push(-1)
}}if(!cache.isNull(this.get(sName))){this.set.apply(this,aPram)
}return this
};
jindo.$Event=(function(isMobile){if(isMobile){return function(e){var cl=arguments.callee;
if(e instanceof cl){return e
}if(!(this instanceof cl)){return new cl(e)
}this._event=this._posEvent=e;
this._globalEvent=window.event;
this.type=e.type.toLowerCase();
if(this.type=="dommousescroll"){this.type="mousewheel"
}else{if(this.type=="domcontentloaded"){this.type="domready"
}}this.isTouch=false;
if(this.type.indexOf("touch")>-1){this._posEvent=e.changedTouches[0];
this.isTouch=true
}this.canceled=false;
this.element=e.target||e.srcElement;
this.currentElement=e.currentTarget;
this.relatedElement=null;
if(!jindo.$Jindo.isUndefined(e.relatedTarget)){this.relatedElement=e.relatedTarget
}else{if(e.fromElement&&e.toElement){this.relatedElement=e[(this.type=="mouseout")?"toElement":"fromElement"]
}}}
}else{return function(e){var cl=arguments.callee;
if(e instanceof cl){return e
}if(!(this instanceof cl)){return new cl(e)
}if(e===undefined){e=window.event
}if(e===window.event&&document.createEventObject){e=document.createEventObject(e)
}this.isTouch=false;
this._event=this._posEvent=e;
this._globalEvent=window.event;
this.type=e.type.toLowerCase();
if(this.type=="dommousescroll"){this.type="mousewheel"
}else{if(this.type=="domcontentloaded"){this.type="domready"
}}this.canceled=false;
this.element=e.target||e.srcElement;
this.currentElement=e.currentTarget;
this.relatedElement=null;
if(e.relatedTarget!==undefined){this.relatedElement=e.relatedTarget
}else{if(e.fromElement&&e.toElement){this.relatedElement=e[(this.type=="mouseout")?"toElement":"fromElement"]
}}}
}})(jindo._p_._JINDO_IS_MO);
jindo._p_.customEvent={};
jindo._p_.customEventStore={};
jindo._p_.normalCustomEvent={};
jindo._p_.hasCustomEvent=function(sName){return !!(jindo._p_.getCustomEvent(sName)||jindo._p_.normalCustomEvent[sName])
};
jindo._p_.getCustomEvent=function(sName){return jindo._p_.customEvent[sName]
};
jindo._p_.addCustomEventListener=function(eEle,sElementId,sEvent,vFilter,oCustomInstance){if(!jindo._p_.customEventStore[sElementId]){jindo._p_.customEventStore[sElementId]={};
jindo._p_.customEventStore[sElementId].ele=eEle
}if(!jindo._p_.customEventStore[sElementId][sEvent]){jindo._p_.customEventStore[sElementId][sEvent]={}
}if(!jindo._p_.customEventStore[sElementId][sEvent][vFilter]){jindo._p_.customEventStore[sElementId][sEvent][vFilter]={custom:oCustomInstance}
}};
jindo._p_.setCustomEventListener=function(sElementId,sEvent,vFilter,aNative,aWrap){jindo._p_.customEventStore[sElementId][sEvent][vFilter].real_listener=aNative;
jindo._p_.customEventStore[sElementId][sEvent][vFilter].wrap_listener=aWrap
};
jindo._p_.getCustomEventListener=function(sElementId,sEvent,vFilter){var store=jindo._p_.customEventStore[sElementId];
if(store&&store[sEvent]&&store[sEvent][vFilter]){return store[sEvent][vFilter]
}return{}
};
jindo._p_.getNormalEventListener=function(sElementId,sEvent,vFilter){var store=jindo._p_.normalCustomEvent[sEvent];
if(store&&store[sElementId]&&store[sElementId][vFilter]){return store[sElementId][vFilter]
}return{}
};
jindo._p_.hasCustomEventListener=function(sElementId,sEvent,vFilter){var store=jindo._p_.customEventStore[sElementId];
if(store&&store[sEvent]&&store[sEvent][vFilter]){return true
}return false
};
jindo.$Event.customEvent=function(sName,oEvent){var oArgs=g_checkVarType(arguments,{s4str:["sName:String+"],s4obj:["sName:String+","oEvent:Hash+"]},"$Event.customEvent");
switch(oArgs+""){case"s4str":if(jindo._p_.hasCustomEvent(sName)){throw new jindo.$Error("The Custom Event Name have to unique.")
}else{jindo._p_.normalCustomEvent[sName]={}
}return this;
case"s4obj":if(jindo._p_.hasCustomEvent(sName)){throw new jindo.$Error("The Custom Event Name have to unique.")
}else{jindo._p_.normalCustomEvent[sName]={};
jindo._p_.customEvent[sName]=function(){this.name=sName;
this.real_listener=[];
this.wrap_listener=[]
};
var _proto=jindo._p_.customEvent[sName].prototype;
_proto.events=[];
for(var i in oEvent){_proto[i]=oEvent[i];
_proto.events.push(i)
}jindo._p_.customEvent[sName].prototype.fireEvent=function(oCustomEvent){for(var i=0,l=this.wrap_listener.length;
i<l;
i++){this.wrap_listener[i](oCustomEvent)
}}
}return this
}};
jindo.$Event.prototype.mouse=function(bIsScrollbar){g_checkVarType(arguments,{voi:[],bol:["bIsScrollbar:Boolean"]});
var e=this._event;
var ele=this.element;
var delta=0;
var left=false,mid=false,right=false;
var left=e.which?e.button==0:!!(e.button&1);
var mid=e.which?e.button==1:!!(e.button&4);
var right=e.which?e.button==2:!!(e.button&2);
var ret={};
if(e.wheelDelta){delta=e.wheelDelta/120
}else{if(e.detail){delta=-e.detail/3
}}var scrollbar;
if(bIsScrollbar){scrollbar=_event_isScroll(ele,e)
}ret={delta:delta,left:left,middle:mid,right:right,scrollbar:scrollbar};
this.mouse=function(bIsScrollbar){if(bIsScrollbar){ret.scrollbar=_event_isScroll(this.element,this._event);
this.mouse=function(){return ret
}
}return ret
};
return ret
};
function _event_getScrollbarSize(){var oScrollbarSize={x:0,y:0};
var elDummy=jindo.$(['<div style="',["overflow:scroll","width:100px","height:100px","position:absolute","left:-1000px","border:0","margin:0","padding:0"].join(" !important;"),' !important;">'].join(""));
document.body.insertBefore(elDummy,document.body.firstChild);
oScrollbarSize={x:elDummy.offsetWidth-elDummy.scrollWidth,y:elDummy.offsetHeight-elDummy.scrollHeight};
document.body.removeChild(elDummy);
elDummy=null;
_event_getScrollbarSize=function(){return oScrollbarSize
};
return oScrollbarSize
}function _ie_check_scroll(ele,e){var iePattern=jindo._p_._j_ag.match(/(?:MSIE) ([0-9.]+)/);
if(document.body.componentFromPoint&&iePattern&&parseInt(iePattern[1],10)==8){_ie_check_scroll=function(ele,e){return !/HTMLGenericElement/.test(ele+"")&&/(scrollbar|outside)/.test(ele.componentFromPoint(e.clientX,e.clientY))
}
}else{_ie_check_scroll=function(ele,e){return/(scrollbar|outside)/.test(ele.componentFromPoint(e.clientX,e.clientY))
}
}return _ie_check_scroll(ele,e)
}function _event_isScroll(ele,e){if(ele.componentFromPoint){return _ie_check_scroll(ele,e)
}if(jindo._p_._JINDO_IS_FF){try{var name=e.originalTarget.localName;
return(name==="thumb"||name==="slider"||name==="scrollcorner"||name==="scrollbarbutton")
}catch(ex){return true
}}var sDisplay=jindo.$Element(ele).css("display");
if(sDisplay==="inline"){return false
}var oPos={x:e.offsetX||e.layerX||0,y:e.offsetY||e.layerY||0};
if(jindo._p_._JINDO_IS_WK){oPos.x-=ele.clientLeft;
oPos.y-=ele.clientTop
}var oScrollbarSize=_event_getScrollbarSize();
var oScrollPos={x:[ele.clientWidth,ele.clientWidth+oScrollbarSize.x],y:[ele.clientHeight,ele.clientHeight+oScrollbarSize.y]};
return((oScrollPos.x[0]<=oPos.x&&oPos.x<=oScrollPos.x[1])||(oScrollPos.y[0]<=oPos.y&&oPos.y<=oScrollPos.y[1]))
}jindo.$Event.prototype.key=function(){var e=this._event;
var k=e.keyCode||e.charCode;
var ret={keyCode:k,alt:e.altKey,ctrl:e.ctrlKey,meta:e.metaKey,shift:e.shiftKey,up:(k==38),down:(k==40),left:(k==37),right:(k==39),enter:(k==13),esc:(k==27)};
this.key=function(){return ret
};
return ret
};
jindo.$Event.prototype.pos=function(bGetOffset){g_checkVarType(arguments,{voi:[],bol:["bGetOffset:Boolean"]});
var e=this._posEvent;
var doc=(this.element.ownerDocument||document);
var b=doc.body;
var de=doc.documentElement;
var pos=[b.scrollLeft||de.scrollLeft,b.scrollTop||de.scrollTop];
var ret={clientX:e.clientX,clientY:e.clientY,pageX:"pageX" in e?e.pageX:e.clientX+pos[0]-b.clientLeft,pageY:"pageY" in e?e.pageY:e.clientY+pos[1]-b.clientTop,layerX:"offsetX" in e?e.offsetX:e.layerX-1,layerY:"offsetY" in e?e.offsetY:e.layerY-1};
if(bGetOffset&&jindo.$Element){var offset=jindo.$Element(this.element).offset();
ret.offsetX=ret.pageX-offset.left;
ret.offsetY=ret.pageY-offset.top
}return ret
};
jindo.$Event.prototype.stop=function(nCancel){g_checkVarType(arguments,{voi:[],num:["nCancel:Numeric"]});
nCancel=nCancel||jindo.$Event.CANCEL_ALL;
var e=(window.event&&window.event==this._globalEvent)?this._globalEvent:this._event;
var b=!!(nCancel&jindo.$Event.CANCEL_BUBBLE);
var d=!!(nCancel&jindo.$Event.CANCEL_DEFAULT);
var type=this.realType;
if(b&&(type==="focusin"||type==="focusout")){jindo.$Jindo._warn("The "+type+" event can't stop bubble.")
}this.canceled=true;
if(e.preventDefault!==undefined&&d){e.preventDefault()
}if(e.stopPropagation!==undefined&&b){e.stopPropagation()
}if(d){e.returnValue=false
}if(b){e.cancelBubble=true
}return this
};
jindo.$Event.prototype.stopDefault=function(){return this.stop(jindo.$Event.CANCEL_DEFAULT)
};
jindo.$Event.prototype.stopBubble=function(){return this.stop(jindo.$Event.CANCEL_BUBBLE)
};
jindo.$Event.CANCEL_BUBBLE=1;
jindo.$Event.CANCEL_DEFAULT=2;
jindo.$Event.CANCEL_ALL=3;
jindo.$Event.prototype.$value=function(){return this._event
};
(function(aType){var sTouches="Touch";
for(var i=0,l=aType.length;
i<l;
i++){jindo.$Event.prototype[aType[i]+sTouches]=(function(sType){return function(nIndex){if(this.isTouch){var oRet=[];
var ev=this._event[sType+"es"];
var l=ev.length;
var e;
for(var i=0;
i<l;
i++){e=ev[i];
oRet.push({id:e.identifier,event:this,element:e.target,_posEvent:e,pos:jindo.$Event.prototype.pos})
}this[sType]=function(nIndex){var oArgs=g_checkVarType(arguments,{"void":[],"4num":["nIndex:Numeric"]},"$Event#"+sType);
if(oArgs+""=="void"){return oRet
}return oRet[nIndex]
}
}else{this[sType]=function(nIndex){throw new jindo.$Error(jindo.$Except.NOT_SUPPORT_METHOD,"$Event#"+sType)
}
}return this[sType].apply(this,jindo._p_._toArray(arguments))
}
})(aType[0]+sTouches)
}})(["changed","target"]);
jindo.$Element=function(el){var cl=arguments.callee;
if(el&&el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Element");
return new cl(el)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var cache=jindo.$Jindo;
var oArgs=cache.checkVarType(arguments,{"4str":["sID:String+"],"4nod":["oEle:Node"],"4doc":["oEle:Document+"],"4win":["oEle:Window+"]},"$Element");
switch(oArgs+""){case"4str":el=jindo.$(el);
break;
default:el=oArgs.oEle
}this._element=el;
if(this._element!=null){if(this._element.__jindo__id){this._key=this._element.__jindo__id
}else{try{this._element.__jindo__id=this._key=jindo._p_._makeRandom()
}catch(e){}}this.tag=(this._element.tagName||"").toLowerCase()
}else{throw new TypeError("{not_found_element}")
}};
jindo._p_.NONE_GROUP="_jindo_event_none";
jindo._p_.splitEventSelector=function(sEvent){var matches=sEvent.match(/^([a-z_]*)(.*)/i);
var eventName=jindo._p_.trim(matches[1]);
var selector=jindo._p_.trim(matches[2].replace("@",""));
return{type:selector?"delegate":"normal",event:eventName,selector:selector}
};
jindo._p_._makeRandom=function(){return"e"+new Date().getTime()+parseInt(Math.random()*100000000,10)
};
jindo._p_.releaseEventHandlerForAllChildren=function(wel){var children=wel._element.all||wel._element.getElementsByTagName("*"),nChildLength=children.length,elChild=null,i;
for(i=0;
i<nChildLength;
i++){elChild=children[i];
if(elChild.nodeType==1&&elChild.__jindo__id){jindo.$Element.eventManager.cleanUpUsingKey(elChild.__jindo__id,true)
}}children=elChild=null
};
jindo._p_.canUseClassList=function(){var result="classList" in document.body&&"classList" in document.createElementNS("http://www.w3.org/2000/svg","g");
jindo._p_.canUseClassList=function(){return result
};
return jindo._p_.canUseClassList()
};
jindo._p_.vendorPrefixObj={"-moz":"Moz","-ms":"ms","-o":"O","-webkit":"webkit"};
jindo._p_.cssNameToJavaScriptName=function(sName){if(/^(\-(?:moz|ms|o|webkit))/.test(sName)){var vandorPerfix=RegExp.$1;
sName=sName.replace(vandorPerfix,jindo._p_.vendorPrefixObj[vandorPerfix])
}return sName.replace(/(:?-(\w))/g,function(_,_,m){return m.toUpperCase()
})
};
jindo._p_.getStyleIncludeVendorPrefix=function(_test){var styles=["Transition","Transform","Animation","Perspective"];
var vendors=["webkit","-","Moz","O","ms"];
var style="";
var vendor="";
var vendorStyle="";
var result={};
var styleObj=_test||document.body.style;
for(var i=0,l=styles.length;
i<l;
i++){style=styles[i];
for(var j=0,m=vendors.length;
j<m;
j++){vendor=vendors[j];
vendorStyle=vendor!="-"?(vendor+style):style.toLowerCase();
if(typeof styleObj[vendorStyle]!=="undefined"){result[style.toLowerCase()]=vendorStyle;
break
}result[style.toLowerCase()]=false
}}if(_test){return result
}jindo._p_.getStyleIncludeVendorPrefix=function(){return result
};
return jindo._p_.getStyleIncludeVendorPrefix()
};
jindo._p_.getTransformStringForValue=function(_test){var info=jindo._p_.getStyleIncludeVendorPrefix(_test);
var transform=info.transform;
if(info.transform==="MozTransform"){transform="-moz-transform"
}else{if(info.transform==="webkitTransform"){transform="-webkit-transform"
}else{if(info.transform==="OTransform"){transform="-o-transform"
}else{if(info.transform==="msTransform"){transform="-ms-transform"
}}}}if(_test){return transform
}jindo._p_.getTransformStringForValue=function(){return transform
};
return jindo._p_.getTransformStringForValue()
};
jindo._p_.setOpacity=function(ele,val){ele.offsetHeight;
ele.style.opacity=val
};
jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc,bUseCapture){if(oEle.addEventListener){if(document.documentMode==9){jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc,bUseCapture){if(/resize/.test(sEvent)){oEle.attachEvent("on"+sEvent,fAroundFunc)
}else{oEle.addEventListener(sEvent,fAroundFunc,!!bUseCapture)
}}
}else{jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc,bUseCapture){oEle.addEventListener(sEvent,fAroundFunc,!!bUseCapture)
}
}}else{jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc){oEle.attachEvent("on"+sEvent,fAroundFunc)
}
}jindo.$Element._eventBind(oEle,sEvent,fAroundFunc,bUseCapture)
};
jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){if(oEle.removeEventListener){if(document.documentMode==9){jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){if(/resize/.test(sEvent)){oEle.detachEvent("on"+sEvent,fAroundFunc)
}else{oEle.removeEventListener(sEvent,fAroundFunc,false)
}}
}else{jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){oEle.removeEventListener(sEvent,fAroundFunc,false)
}
}}else{jindo.$Element._unEventBind=function(oEle,sEvent,fAroundFunc){oEle.detachEvent("on"+sEvent,fAroundFunc)
}
}jindo.$Element._unEventBind(oEle,sEvent,fAroundFunc)
};
jindo.$Element.prototype.$value=function(){return this._element
};
jindo.$Element.prototype.visible=function(bVisible,sDisplay){var oArgs=g_checkVarType(arguments,{g:[],s4bln:[jindo.$Jindo._F("bVisible:Boolean")],s4str:["bVisible:Boolean","sDisplay:String+"]},"$Element#visible");
switch(oArgs+""){case"g":return(this._getCss(this._element,"display")!="none");
case"s4bln":this[bVisible?"show":"hide"]();
return this;
case"s4str":this[bVisible?"show":"hide"](sDisplay);
return this
}};
jindo.$Element.prototype.show=function(sDisplay){var oArgs=g_checkVarType(arguments,{"4voi":[],"4str":["sDisplay:String+"]},"$Element#show");
var s=this._element.style;
var b="block";
var c={p:b,div:b,form:b,h1:b,h2:b,h3:b,h4:b,ol:b,ul:b,fieldset:b,td:"table-cell",th:"table-cell",li:"list-item",table:"table",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",col:"table-column",colgroup:"table-column-group",caption:"table-caption",dl:b,dt:b,dd:b};
try{switch(oArgs+""){case"4voi":var type=c[this.tag];
s.display=type||"inline";
break;
case"4str":s.display=sDisplay
}}catch(e){s.display="block"
}return this
};
jindo.$Element.prototype.hide=function(){this._element.style.display="none";
return this
};
jindo.$Element.prototype.toggle=function(sDisplay){var oArgs=g_checkVarType(arguments,{"4voi":[],"4str":["sDisplay:String+"]},"$Element#toggle");
this[this._getCss(this._element,"display")=="none"?"show":"hide"].apply(this,arguments);
return this
};
jindo.$Element.prototype.opacity=function(value){var oArgs=g_checkVarType(arguments,{g:[],s:["nOpacity:Numeric"]},"$Element#opacity");
var v,e=this._element,b;
switch(oArgs+""){case"g":b=(this._getCss(e,"display")!="none");
if(typeof e.style.opacity!="undefined"){v=parseFloat(e.style.opacity);
if(isNaN(v)){v=b?1:0
}}else{v=typeof e.filters.alpha=="undefined"?(b?100:0):e.filters.alpha.opacity;
v=v/100
}return v;
case"s":b=(this._getCss(e,"display")!="none");
value=oArgs.nOpacity;
e.style.zoom=1;
value=Math.max(Math.min(value,1),0);
if(typeof e.style.opacity!="undefined"){e.style.opacity=value
}else{value=Math.ceil(value*100);
if(typeof e.filters!="unknown"&&typeof e.filters.alpha!="undefined"){e.filters.alpha.opacity=value
}else{e.style.filter=(e.style.filter+" alpha(opacity="+value+")")
}}return this
}};
jindo._p_._revisionCSSAttr=function(name,vendorPrefix){var custumName=jindo.$Element.hook(name);
if(custumName){name=custumName
}else{name=jindo._p_.cssNameToJavaScriptName(name).replace(/^(animation|perspective|transform|transition)/i,function(_1){return vendorPrefix[_1.toLowerCase()]
})
}return name
};
jindo._p_.changeTransformValue=function(name,_test){return(name+"").replace(/([\s|-]*)(?:transform)/,function(_,m1){return jindo._p_.trim(m1).length>0?_:m1+jindo._p_.getTransformStringForValue(_test)
})
};
jindo.$Element.prototype.css=function(sName,sValue){var oArgs=g_checkVarType(arguments,{g:["sName:String+"],s4str:[jindo.$Jindo._F("sName:String+"),jindo.$Jindo._F("vValue:String+")],s4num:["sName:String+","vValue:Numeric"],s4obj:["oObj:Hash+"]},"$Element#css");
var e=this._element;
switch(oArgs+""){case"s4str":case"s4num":var obj={};
sName=jindo._p_._revisionCSSAttr(sName,jindo._p_.getStyleIncludeVendorPrefix());
obj[sName]=sValue;
sName=obj;
break;
case"s4obj":sName=oArgs.oObj;
var obj={};
var vendorPrefix=jindo._p_.getStyleIncludeVendorPrefix();
for(i in sName){if(sName.hasOwnProperty(i)){obj[jindo._p_._revisionCSSAttr(i,vendorPrefix)]=sName[i]
}}sName=obj;
break;
case"g":var vendorPrefix=jindo._p_.getStyleIncludeVendorPrefix();
sName=jindo._p_._revisionCSSAttr(sName,vendorPrefix);
var _getCss=this._getCss;
if(sName=="opacity"){return this.opacity()
}if((jindo._p_._JINDO_IS_FF||jindo._p_._JINDO_IS_OP)&&(sName=="backgroundPositionX"||sName=="backgroundPositionY")){var bp=_getCss(e,"backgroundPosition").split(/\s+/);
return(sName=="backgroundPositionX")?bp[0]:bp[1]
}if((!window.getComputedStyle)&&sName=="backgroundPosition"){return _getCss(e,"backgroundPositionX")+" "+_getCss(e,"backgroundPositionY")
}if((!jindo._p_._JINDO_IS_OP&&window.getComputedStyle)&&(sName=="padding"||sName=="margin")){var top=_getCss(e,sName+"Top");
var right=_getCss(e,sName+"Right");
var bottom=_getCss(e,sName+"Bottom");
var left=_getCss(e,sName+"Left");
if((top==right)&&(bottom==left)){return top
}else{if(top==bottom){if(right==left){return top+" "+right
}else{return top+" "+right+" "+bottom+" "+left
}}else{return top+" "+right+" "+bottom+" "+left
}}}return _getCss(e,sName)
}var v,type;
for(var k in sName){if(sName.hasOwnProperty(k)){v=sName[k];
if(!(jindo.$Jindo.isString(v)||jindo.$Jindo.isNumeric(v))){continue
}if(k=="opacity"){this.opacity(v);
continue
}if(k=="cssFloat"&&jindo._p_._JINDO_IS_IE){k="styleFloat"
}if((jindo._p_._JINDO_IS_FF||jindo._p_._JINDO_IS_OP)&&(k=="backgroundPositionX"||k=="backgroundPositionY")){var bp=this.css("backgroundPosition").split(/\s+/);
v=k=="backgroundPositionX"?v+" "+bp[1]:bp[0]+" "+v;
this._setCss(e,"backgroundPosition",v)
}else{this._setCss(e,k,/transition/i.test(k)?jindo._p_.changeTransformValue(v):v)
}}}return this
};
jindo.$Element.prototype._getCss=function(e,sName){var fpGetCss;
if(window.getComputedStyle){fpGetCss=function(e,sName){try{if(sName=="cssFloat"){sName="float"
}var d=e.ownerDocument||e.document||document;
var sVal=e.style[sName];
if(!e.style[sName]){var computedStyle=d.defaultView.getComputedStyle(e,null);
sName=sName.replace(/([A-Z])/g,"-$1").replace(/^(webkit|ms)/g,"-$1").toLowerCase();
sVal=computedStyle.getPropertyValue(sName);
sVal=sVal===undefined?computedStyle[sName]:sVal
}if(sName=="textDecoration"){sVal=sVal.replace(",","")
}return sVal
}catch(ex){throw new jindo.$Error((e.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}
}else{if(e.currentStyle){fpGetCss=function(e,sName){try{if(sName=="cssFloat"){sName="styleFloat"
}var sStyle=e.style[sName];
if(sStyle){return sStyle
}else{var oCurrentStyle=e.currentStyle;
if(oCurrentStyle){return oCurrentStyle[sName]
}}return sStyle
}catch(ex){throw new jindo.$Error((e.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}
}else{fpGetCss=function(e,sName){try{if(sName=="cssFloat"&&jindo._p_._JINDO_IS_IE){sName="styleFloat"
}return e.style[sName]
}catch(ex){throw new jindo.$Error((e.tagName||"document")+jindo.$Except.NOT_USE_CSS,"$Element#css")
}}
}}jindo.$Element.prototype._getCss=fpGetCss;
return fpGetCss(e,sName)
};
jindo.$Element.prototype._setCss=function(e,k,v){if(("#top#left#right#bottom#").indexOf(k+"#")>0&&(typeof v=="number"||(/\d$/.test(v)))){e.style[k]=parseInt(v,10)+"px"
}else{e.style[k]=v
}};
jindo.$Element.prototype.attr=function(sName,sValue){var oArgs=g_checkVarType(arguments,{g:["sName:String+"],s4str:["sName:String+","vValue:String+"],s4num:["sName:String+","vValue:Numeric"],s4nul:["sName:String+","vValue:Null"],s4bln:["sName:String+","vValue:Boolean"],s4arr:["sName:String+","vValue:Array+"],s4obj:[jindo.$Jindo._F("oObj:Hash+")]},"$Element#attr");
var e=this._element,aValue=null,i,length,nIndex,fGetIndex,elOption,wa;
switch(oArgs+""){case"s4str":case"s4nul":case"s4num":case"s4bln":case"s4arr":var obj={};
obj[sName]=sValue;
sName=obj;
break;
case"s4obj":sName=oArgs.oObj;
break;
case"g":if(sName=="class"||sName=="className"){return e.className
}else{if(sName=="style"){return e.style.cssText
}else{if(sName=="checked"||sName=="disabled"){return !!e[sName]
}else{if(sName=="value"){if(this.tag=="button"){return e.getAttributeNode("value").value
}else{if(this.tag=="select"){if(e.multiple){for(i=0,length=e.options.length;
i<length;
i++){elOption=e.options[i];
if(elOption.selected){if(!aValue){aValue=[]
}sValue=elOption.value;
if(sValue==""){sValue=elOption.text
}aValue.push(sValue)
}}return aValue
}else{if(e.selectedIndex<0){return null
}sValue=e.options[e.selectedIndex].value;
return(sValue=="")?e.options[e.selectedIndex].text:sValue
}}else{return e.value
}}}else{if(sName=="href"){return e.getAttribute(sName,2)
}}}}}return e.getAttribute(sName)
}fGetIndex=function(oOPtions,vValue){var nIndex=-1,i,length,elOption;
for(i=0,length=oOPtions.length;
i<length;
i++){elOption=oOPtions[i];
if(elOption.value===vValue||elOption.text===vValue){nIndex=i;
break
}}return nIndex
};
for(var k in sName){if(sName.hasOwnProperty(k)){var v=sName[k];
if(jindo.$Jindo.isNull(v)){if(this.tag=="select"){if(e.multiple){for(i=0,length=e.options.length;
i<length;
i++){e.options[i].selected=false
}}else{e.selectedIndex=-1
}}else{e.removeAttribute(k)
}}else{if(k=="class"||k=="className"){e.className=v
}else{if(k=="style"){e.style.cssText=v
}else{if(k=="checked"||k=="disabled"){e[k]=v
}else{if(k=="value"){if(this.tag=="select"){if(e.multiple){if(jindo.$Jindo.isArray(v)){wa=jindo.$A(v);
for(i=0,length=e.options.length;
i<length;
i++){elOption=e.options[i];
elOption.selected=wa.has(elOption.value)||wa.has(elOption.text)
}}else{e.selectedIndex=fGetIndex(e.options,v)
}}else{e.selectedIndex=fGetIndex(e.options,v)
}}else{e.value=v
}}else{e.setAttribute(k,v)
}}}}}}}return this
};
jindo.$Element.prototype.width=function(width){var oArgs=g_checkVarType(arguments,{g:[],s:["nWidth:Numeric"]},"$Element#width");
switch(oArgs+""){case"g":return this._element.offsetWidth;
case"s":width=oArgs.nWidth;
var e=this._element;
e.style.width=width+"px";
var off=e.offsetWidth;
if(off!=width&&off!==0){var w=(width*2-off);
if(w>0){e.style.width=w+"px"
}}return this
}};
jindo.$Element.prototype.height=function(height){var oArgs=g_checkVarType(arguments,{g:[],s:["nHeight:Numeric"]},"$Element#height");
switch(oArgs+""){case"g":return this._element.offsetHeight;
case"s":height=oArgs.nHeight;
var e=this._element;
e.style.height=height+"px";
var off=e.offsetHeight;
if(off!=height&&off!==0){var height=(height*2-off);
if(height>0){e.style.height=height+"px"
}}return this
}};
jindo.$Element.prototype.className=function(sClass){var oArgs=g_checkVarType(arguments,{g:[],s:[jindo.$Jindo._F("sClass:String+")]},"$Element#className");
var e=this._element;
switch(oArgs+""){case"g":return e.className;
case"s":e.className=sClass;
return this
}};
jindo.$Element.prototype.hasClass=function(sClass){var ___checkVarType=g_checkVarType;
if(jindo._p_.canUseClassList()){jindo.$Element.prototype.hasClass=function(sClass){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#hasClass");
return this._element.classList.contains(sClass)
}
}else{jindo.$Element.prototype.hasClass=function(sClass){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#hasClass");
return(" "+this._element.className+" ").indexOf(" "+sClass+" ")>-1
}
}return this.hasClass.apply(this,arguments)
};
jindo.$Element.prototype.addClass=function(sClass){var oArgs=g_checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#addClass");
var e=this._element;
var sClassName=e.className;
var aClass=(sClass+"").split(" ");
var sEachClass;
for(var i=aClass.length-1;
i>=0;
i--){sEachClass=aClass[i];
if((" "+sClassName+" ").indexOf(" "+sEachClass+" ")==-1){sClassName=sClassName+" "+sEachClass
}}e.className=sClassName.replace(/\s+$/,"").replace(/^\s+/,"");
return this
};
jindo.$Element.prototype.removeClass=function(sClass){var oArgs=g_checkVarType(arguments,{"4str":["sClass:String+"]},"$Element#removeClass");
var e=this._element;
var sClassName=e.className;
var aClass=(sClass+"").split(" ");
var sEachClass;
for(var i=aClass.length-1;
i>=0;
i--){sClassName=(" "+sClassName+" ").replace(new RegExp("\\b"+aClass[i]+"\\s+","g")," ")
}e.className=sClassName.replace(/\s+$/,"").replace(/^\s+/,"");
return this
};
jindo.$Element.prototype.toggleClass=function(sClass,sClass2){var ___checkVarType=g_checkVarType;
if(jindo._p_.canUseClassList()){jindo.$Element.prototype.toggleClass=function(sClass,sClass2){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"],"4str2":["sClass:String+","sClass2:String+"]},"$Element#toggleClass");
switch(oArgs+""){case"4str":this._element.classList.toggle(sClass+"");
break;
case"4str2":sClass=sClass+"";
sClass2=sClass2+"";
if(this.hasClass(sClass)){this.removeClass(sClass);
this.addClass(sClass2)
}else{this.addClass(sClass);
this.removeClass(sClass2)
}}return this
}
}else{jindo.$Element.prototype.toggleClass=function(sClass,sClass2){var oArgs=___checkVarType(arguments,{"4str":["sClass:String+"],"4str2":["sClass:String+","sClass2:String+"]},"$Element#toggleClass");
sClass2=sClass2||"";
if(this.hasClass(sClass)){this.removeClass(sClass);
if(sClass2){this.addClass(sClass2)
}}else{this.addClass(sClass);
if(sClass2){this.removeClass(sClass2)
}}return this
}
}return this.toggleClass.apply(this,arguments)
};
jindo.$Element.prototype.cssClass=function(vClass,bCondition){var oArgs=g_checkVarType(arguments,{g:["sClass:String+"],s4bln:["sClass:String+","bCondition:Boolean"],s4obj:["oObj:Hash+"]},"$Element#cssClass");
switch(oArgs+""){case"g":return this.hasClass(oArgs.sClass);
case"s4bln":if(oArgs.bCondition){this.addClass(oArgs.sClass)
}else{this.removeClass(oArgs.sClass)
}return this;
case"s4obj":var e=this._element;
vClass=oArgs.oObj;
var sClassName=e.className;
for(var sEachClass in vClass){if(vClass.hasOwnProperty(sEachClass)){if(vClass[sEachClass]){if((" "+sClassName+" ").indexOf(" "+sEachClass+" ")==-1){sClassName=(sClassName+" "+sEachClass).replace(/^\s+/,"")
}}else{if((" "+sClassName+" ").indexOf(" "+sEachClass+" ")>-1){sClassName=(" "+sClassName+" ").replace(" "+sEachClass+" "," ").replace(/\s+$/,"").replace(/^\s+/,"")
}}}}e.className=sClassName;
return this
}};
jindo.$Element.prototype.text=function(sText){var oArgs=g_checkVarType(arguments,{g:[],s4str:["sText:String+"],s4num:[jindo.$Jindo._F("sText:Numeric")],s4bln:["sText:Boolean"]},"$Element#text"),ele=this._element,tag=this.tag,prop,oDoc;
switch(oArgs+""){case"g":prop=(ele.textContent!==undefined)?"textContent":"innerText";
if(tag=="textarea"||tag=="input"){prop="value"
}return ele[prop];
case"s4str":case"s4num":case"s4bln":try{if(tag=="textarea"||tag=="input"){ele.value=sText+""
}else{var oDoc=ele.ownerDocument||ele.document||document;
this.empty();
ele.appendChild(oDoc.createTextNode(sText))
}}catch(e){return ele.innerHTML=(sText+"").replace(/&/g,"&amp;").replace(/</g,"&lt;")
}return this
}};
jindo.$Element.prototype.html=function(sHTML){var isIe=jindo._p_._JINDO_IS_IE;
var isFF=jindo._p_._JINDO_IS_FF;
var _param={g:[],s4str:[jindo.$Jindo._F("sText:String+")],s4num:["sText:Numeric"],s4bln:["sText:Boolean"]};
var ___checkVarType=g_checkVarType;
if(isIe){jindo.$Element.prototype.html=function(sHTML){var oArgs=___checkVarType(arguments,_param,"$Element#html");
switch(oArgs+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":sHTML+="";
if(jindo.cssquery){jindo.cssquery.release()
}var oEl=this._element;
while(oEl.firstChild){oEl.removeChild(oEl.firstChild)
}var sId="R"+new Date().getTime()+parseInt(Math.random()*100000,10);
var oDoc=oEl.ownerDocument||oEl.document||document;
var oDummy;
var sTag=oEl.tagName.toLowerCase();
switch(sTag){case"select":case"table":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+">";
break;
case"tr":case"thead":case"tbody":case"colgroup":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<table><"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+"></table>";
break;
default:oEl.innerHTML=sHTML
}if(oDummy){var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}if(oFound){var notYetSelected=true;
for(var oChild;
oChild=oEl.firstChild;
){oChild.removeNode(true)
}for(var oChild=oFound.firstChild;
oChild;
oChild=oFound.firstChild){if(sTag=="select"){var cloneNode=oChild.cloneNode(true);
if(oChild.selected&&notYetSelected){notYetSelected=false;
cloneNode.selected=true
}oEl.appendChild(cloneNode);
oChild.removeNode(true)
}else{oEl.appendChild(oChild)
}}oDummy.removeNode&&oDummy.removeNode(true)
}oDummy=null
}return this
}}
}else{if(isFF){jindo.$Element.prototype.html=function(sHTML){var oArgs=___checkVarType(arguments,_param,"$Element#html");
switch(oArgs+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":sHTML+="";
var oEl=this._element;
if(!oEl.parentNode){var sId="R"+new Date().getTime()+parseInt(Math.random()*100000,10);
var oDoc=oEl.ownerDocument||oEl.document||document;
var oDummy;
var sTag=oEl.tagName.toLowerCase();
switch(sTag){case"select":case"table":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+">";
break;
case"tr":case"thead":case"tbody":case"colgroup":oDummy=oDoc.createElement("div");
oDummy.innerHTML="<table><"+sTag+' class="'+sId+'">'+sHTML+"</"+sTag+"></table>";
break;
default:oEl.innerHTML=sHTML
}if(oDummy){var oFound;
for(oFound=oDummy.firstChild;
oFound;
oFound=oFound.firstChild){if(oFound.className==sId){break
}}if(oFound){for(var oChild;
oChild=oEl.firstChild;
){oChild.removeNode(true)
}for(var oChild=oFound.firstChild;
oChild;
oChild=oFound.firstChild){oEl.appendChild(oChild)
}oDummy.removeNode&&oDummy.removeNode(true)
}oDummy=null
}}else{oEl.innerHTML=sHTML
}return this
}}
}else{jindo.$Element.prototype.html=function(sHTML){var oArgs=___checkVarType(arguments,_param,"$Element#html");
switch(oArgs+""){case"g":return this._element.innerHTML;
case"s4str":case"s4num":case"s4bln":sHTML+="";
var oEl=this._element;
oEl.innerHTML=sHTML;
return this
}}
}}return this.html.apply(this,arguments)
};
jindo.$Element.prototype.outerHTML=function(){var e=this._element;
e=jindo.$Jindo.isDocument(e)?e.documentElement:e;
if(e.outerHTML!==undefined){return e.outerHTML
}var oDoc=e.ownerDocument||e.document||document;
var div=oDoc.createElement("div");
var par=e.parentNode;
if(!par){return e.innerHTML
}par.insertBefore(div,e);
div.style.display="none";
div.appendChild(e);
var s=div.innerHTML;
par.insertBefore(e,div);
par.removeChild(div);
return s
};
jindo.$Element.prototype.toString=function(){return this.outerHTML()||"[object $Element]"
};
jindo.$Element.prototype.attach=function(sEvent,fpCallback){var oArgs=g_checkVarType(arguments,{"4str":["sEvent:String+","fpCallback:Function+"],"4obj":["hListener:Hash+"]},"$Element#attach");
var oSpilt,hListener;
switch(oArgs+""){case"4str":oSpilt=jindo._p_.splitEventSelector(oArgs.sEvent);
this._add(oSpilt.type,oSpilt.event,oSpilt.selector,fpCallback);
break;
case"4obj":hListener=oArgs.hListener;
for(var i in hListener){this.attach(i,hListener[i])
}break
}return this
};
jindo.$Element.prototype.detach=function(sEvent,fpCallback){var oArgs=g_checkVarType(arguments,{"4str":["sEvent:String+","fpCallback:Function+"],"4obj":["hListener:Hash+"]},"$Element#detach");
var oSpilt,hListener;
switch(oArgs+""){case"4str":oSpilt=jindo._p_.splitEventSelector(oArgs.sEvent);
this._del(oSpilt.type,oSpilt.event,oSpilt.selector,fpCallback);
break;
case"4obj":hListener=oArgs.hListener;
for(var i in hListener){this.detach(i,hListener[i])
}break
}return this
};
jindo.$Element.prototype.delegate=function(sEvent,vFilter,fpCallback){var oArgs=g_checkVarType(arguments,{"4str":["sEvent:String+","vFilter:String+","fpCallback:Function+"],"4fun":["sEvent:String+","vFilter:Function+","fpCallback:Function+"]},"$Element#delegate");
return this._add("delegate",sEvent,vFilter,fpCallback)
};
jindo.$Element.prototype.undelegate=function(sEvent,vFilter,fpCallback){var oArgs=g_checkVarType(arguments,{"4str":["sEvent:String+","vFilter:String+","fpCallback:Function+"],"4fun":["sEvent:String+","vFilter:Function+","fpCallback:Function+"],group_for_string:["sEvent:String+","vFilter:String+"],group_for_function:["sEvent:String+","vFilter:Function+"]},"$Element#undelegate");
return this._del("delegate",sEvent,vFilter,fpCallback)
};
jindo._p_.customEventAttach=function(sType,sEvent,vFilter,fpCallback,fpCallbackBind,eEle,fpAdd){if(!jindo._p_.hasCustomEventListener(eEle.__jindo__id,sEvent,vFilter)){var CustomEvent=jindo._p_.getCustomEvent(sEvent);
var customInstance=new CustomEvent();
var events=customInstance.events;
customInstance.real_listener.push(fpCallback);
customInstance.wrap_listener.push(fpCallbackBind);
for(var i=0,l=events.length;
i<l;
i++){customInstance["_fp"+events[i]]=jindo.$Fn(customInstance[events[i]],customInstance).bind();
fpAdd(sType,events[i],vFilter,customInstance["_fp"+events[i]])
}jindo._p_.addCustomEventListener(eEle,eEle.__jindo__id,sEvent,vFilter,customInstance)
}else{var customInstance=jindo._p_.getCustomEventListener(eEle.__jindo__id,sEvent,vFilter).custom;
if(customInstance.real_listener){customInstance.real_listener.push(fpCallback);
customInstance.wrap_listener.push(fpCallbackBind)
}}};
jindo._p_.normalCustomEventAttach=function(ele,sEvent,jindo_id,vFilter,fpCallback,fpCallbackBind){if(!jindo._p_.normalCustomEvent[sEvent][jindo_id]){jindo._p_.normalCustomEvent[sEvent][jindo_id]={};
jindo._p_.normalCustomEvent[sEvent][jindo_id].ele=ele;
jindo._p_.normalCustomEvent[sEvent][jindo_id][vFilter]={};
jindo._p_.normalCustomEvent[sEvent][jindo_id][vFilter].real_listener=[];
jindo._p_.normalCustomEvent[sEvent][jindo_id][vFilter].wrap_listener=[]
}jindo._p_.normalCustomEvent[sEvent][jindo_id][vFilter].real_listener.push(fpCallback);
jindo._p_.normalCustomEvent[sEvent][jindo_id][vFilter].wrap_listener.push(fpCallbackBind)
};
jindo.$Element.prototype._add=function(sType,sEvent,vFilter,fpCallback){var oManager=jindo.$Element.eventManager;
var realEvent=sEvent;
sEvent=sEvent.toLowerCase();
var oEvent=oManager.splitGroup(sEvent);
sEvent=oEvent.event;
var sGroup=oEvent.group;
var ele=this._element;
var jindo_id=ele.__jindo__id;
var oDoc=ele.ownerDocument||ele.document||document;
if(jindo._p_.hasCustomEvent(sEvent)){vFilter=vFilter||"_NONE_";
var fpCallbackBind=jindo.$Fn(fpCallback,this).bind();
jindo._p_.normalCustomEventAttach(ele,sEvent,jindo_id,vFilter,fpCallback,fpCallbackBind);
if(jindo._p_.getCustomEvent(sEvent)){jindo._p_.customEventAttach(sType,sEvent,vFilter,fpCallback,fpCallbackBind,ele,jindo.$Fn(this._add,this).bind())
}}else{if(sEvent=="domready"&&jindo.$Jindo.isWindow(ele)){jindo.$Element(oDoc).attach(sEvent,fpCallback);
return this
}if(sEvent=="load"&&ele===oDoc){jindo.$Element(window).attach(sEvent,fpCallback);
return this
}if((!document.addEventListener)&&("domready"==sEvent)){if(window.top!=window){throw jindo.$Error(jindo.$Except.NOT_WORK_DOMREADY,"$Element#attach")
}jindo.$Element._domready(ele,fpCallback);
return this
}sEvent=oManager.revisionEvent(sType,sEvent,realEvent);
fpCallback=oManager.revisionCallback(sType,sEvent,realEvent,fpCallback);
if(!oManager.isInit(this._key)){oManager.init(this._key,ele)
}if(!oManager.hasEvent(this._key,sEvent,realEvent)){oManager.initEvent(this,sEvent,realEvent,sGroup)
}if(!oManager.hasGroup(this._key,sEvent,sGroup)){oManager.initGroup(this._key,sEvent,sGroup)
}oManager.addEventListener(this._key,sEvent,sGroup,sType,vFilter,fpCallback)
}return this
};
jindo._p_.customEventDetach=function(sType,sEvent,vFilter,fpCallback,eEle,fpDel){var customObj=jindo._p_.getCustomEventListener(eEle.__jindo__id,sEvent,vFilter);
var customInstance=customObj.custom;
var events=customInstance.events;
for(var i=0,l=events.length;
i<l;
i++){fpDel(sType,events[i],vFilter,customInstance["_fp"+events[i]])
}};
jindo.$Element.prototype._del=function(sType,sEvent,vFilter,fpCallback){var oManager=jindo.$Element.eventManager;
var realEvent=sEvent;
sEvent=sEvent.toLowerCase();
var oEvent=oManager.splitGroup(sEvent);
sEvent=oEvent.event;
var sGroup=oEvent.group;
var oDoc=this._element.ownerDocument||this._element.document||document;
if(jindo._p_.hasCustomEvent(sEvent)){var jindo_id=this._element.__jindo__id;
vFilter=vFilter||"_NONE_";
var oNormal=jindo._p_.getNormalEventListener(jindo_id,sEvent,vFilter);
var aWrap=oNormal.wrap_listener;
var aReal=oNormal.real_listener;
var aNewWrap=[];
var aNewReal=[];
for(var i=0,l=aReal.length;
i<l;
i++){if(aReal[i]!=fpCallback){aNewWrap.push(aWrap[i]);
aNewReal.push(aReal[i])
}}if(aNewReal.length==0){var oNormalJindo=jindo._p_.normalCustomEvent[sEvent][jindo_id];
var count=0;
for(var i in oNormalJindo){if(i!=="ele"){count++;
break
}}if(count===0){delete jindo._p_.normalCustomEvent[sEvent][jindo_id]
}else{delete jindo._p_.normalCustomEvent[sEvent][jindo_id][vFilter]
}}if(jindo._p_.customEvent[sEvent]){jindo._p_.setCustomEventListener(jindo_id,sEvent,vFilter,aNewReal,aNewWrap);
if(aNewReal.length==0){jindo._p_.customEventDetach(sType,sEvent,vFilter,fpCallback,this._element,jindo.$Fn(this._del,this).bind());
delete jindo._p_.customEventStore[jindo_id][sEvent][vFilter]
}}}else{if(sEvent=="domready"&&jindo.$Jindo.isWindow(this._element)){jindo.$Element(oDoc).detach(sEvent,fpCallback);
return this
}if(sEvent=="load"&&this._element===oDoc){jindo.$Element(window).detach(sEvent,fpCallback);
return this
}sEvent=oManager.revisionEvent(sType,sEvent,realEvent);
if((!document.addEventListener)&&("domready"==sEvent)){var aNewDomReady=[];
var list=jindo.$Element._domready.list;
for(var i=0,l=list.length;
i<l;
i++){if(list[i]!=fpCallback){aNewDomReady.push(list[i])
}}jindo.$Element._domready.list=aNewDomReady;
return this
}if(sGroup===jindo._p_.NONE_GROUP&&!jindo.$Jindo.isFunction(fpCallback)&&!vFilter){throw new jindo.$Error(jindo.$Except.HAS_FUNCTION_FOR_GROUP,"$Element#"+(sType=="normal"?"detach":"delegate"))
}oManager.removeEventListener(this._key,sEvent,sGroup,sType,vFilter,fpCallback)
}return this
};
jindo._p_.mouseTouchPointerEvent=function(sEvent){var eventMap={};
if(window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0){eventMap={mousedown:"MSPointerDown",mouseup:"MSPointerUp",mousemove:"MSPointerMove",mouseover:"MSPointerOver",mouseout:"MSPointerOut",touchstart:"MSPointerDown",touchend:"MSPointerUp",touchmove:"MSPointerMove",pointerdown:"MSPointerDown",pointerup:"MSPointerUp",pointermove:"MSPointerMove",pointerover:"MSPointerOver",pointerout:"MSPointerOut",pointercancel:"MSPointerCancel"}
}else{if(jindo._p_._JINDO_IS_MO){eventMap={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove",pointerdown:"touchstart",pointerup:"touchend",pointermove:"touchmove"}
}}jindo._p_.mouseTouchPointerEvent=function(sEvent){return eventMap[sEvent]?eventMap[sEvent]:sEvent
};
return jindo._p_.mouseTouchPointerEvent(sEvent)
};
jindo.$Element.eventManager=(function(){var eventStore={};
function bind(fpFunc,oScope,aPram){return function(){var args=jindo._p_._toArray(arguments,0);
if(aPram.length){args=aPram.concat(args)
}return fpFunc.apply(oScope,args)
}
}return{revisionCallback:function(sType,sEvent,realEvent,fpCallback){if((document.addEventListener||jindo._p_._JINDO_IS_IE&&(sType=="delegate"))&&(realEvent=="mouseenter"||realEvent=="mouseleave")){var fpWrapCallback=jindo.$Element.eventManager._fireWhenElementBoundary(sType,fpCallback);
fpWrapCallback._origin_=fpCallback;
fpCallback=fpWrapCallback
}return fpCallback
},_fireWhenElementBoundary:function(sType,fpCallback){return function(oEvent){var woRelatedElement=oEvent.relatedElement?jindo.$Element(oEvent.relatedElement):null;
var eElement=oEvent.currentElement;
if(sType=="delegate"){eElement=oEvent.element
}if(woRelatedElement&&(woRelatedElement.isEqual(eElement)||woRelatedElement.isChildOf(eElement))){return
}fpCallback(oEvent)
}
},revisionEvent:function(sType,sEvent,realEvent){if(document.addEventListener!==undefined){this.revisionEvent=function(sType,sEvent,realEvent){if(/^ms/i.test(realEvent)){return realEvent
}var customEvent=jindo.$Event.hook(sEvent);
if(customEvent){if(jindo.$Jindo.isFunction(customEvent)){return customEvent()
}else{return customEvent
}}sEvent=sEvent.toLowerCase();
if(sEvent=="domready"||sEvent=="domcontentloaded"){sEvent="DOMContentLoaded"
}else{if(sEvent=="mousewheel"&&!jindo._p_._JINDO_IS_WK&&!jindo._p_._JINDO_IS_OP&&!jindo._p_._JINDO_IS_IE){sEvent="DOMMouseScroll"
}else{if(sEvent=="mouseenter"&&(!jindo._p_._JINDO_IS_IE||sType=="delegate")){sEvent="mouseover"
}else{if(sEvent=="mouseleave"&&(!jindo._p_._JINDO_IS_IE||sType=="delegate")){sEvent="mouseout"
}else{if(sEvent=="transitionend"||sEvent=="transitionstart"){var sPostfix=sEvent.replace("transition","");
var info=jindo._p_.getStyleIncludeVendorPrefix();
if(info.transition!="transition"){sPostfix=sPostfix.substr(0,1).toUpperCase()+sPostfix.substr(1)
}sEvent=info.transition+sPostfix
}else{if(sEvent=="animationstart"||sEvent=="animationend"||sEvent=="animationiteration"){var sPostfix=sEvent.replace("animation","");
var info=jindo._p_.getStyleIncludeVendorPrefix();
if(info.animation!="animation"){sPostfix=sPostfix.substr(0,1).toUpperCase()+sPostfix.substr(1)
}sEvent=info.animation+sPostfix
}else{if(sEvent==="focusin"||sEvent==="focusout"){sEvent=sEvent==="focusin"?"focus":"blur"
}}}}}}}return jindo._p_.mouseTouchPointerEvent(sEvent)
}
}else{this.revisionEvent=function(sType,sEvent,realEvent){if(/^ms/i.test(realEvent)){return realEvent
}var customEvent=jindo.$Event.hook(sEvent);
if(customEvent){if(jindo.$Jindo.isFunction(customEvent)){return customEvent()
}else{return customEvent
}}if(sType=="delegate"&&sEvent=="mouseenter"){sEvent="mouseover"
}else{if(sType=="delegate"&&sEvent=="mouseleave"){sEvent="mouseout"
}}return jindo._p_.mouseTouchPointerEvent(sEvent)
}
}return this.revisionEvent(sType,sEvent,realEvent)
},test:function(){return eventStore
},isInit:function(sKey){return !!eventStore[sKey]
},init:function(sKey,eEle){eventStore[sKey]={ele:eEle,event:{}}
},getEventConfig:function(sKey){return eventStore[sKey]
},hasEvent:function(sKey,sEvent,realEvent){if(!document.addEventListener&&sEvent.toLowerCase()=="domready"){if(jindo.$Element._domready.list){return jindo.$Element._domready.list.length>0?true:false
}else{return false
}}try{return !!eventStore[sKey]["event"][sEvent]
}catch(e){return false
}},hasGroup:function(sKey,sEvent,sGroup){return !!eventStore[sKey]["event"][sEvent]["type"][sGroup]
},initEvent:function(oThis,sEvent,realEvent,sGroup){var sKey=oThis._key;
var oEvent=eventStore[sKey]["event"];
var fAroundFunc=bind(function(sEvent,realEvent,wEvent){wEvent=wEvent||window.event;
if(wEvent.currentTarget===undefined){wEvent.currentTarget=this._element
}var weEvent=jindo.$Event(wEvent);
if(!weEvent.currentElement){weEvent.currentElement=this._element
}weEvent.realType=realEvent;
var oEle=weEvent.element;
var oManager=jindo.$Element.eventManager;
var oConfig=oManager.getEventConfig(weEvent.currentElement.__jindo__id);
var oType=oConfig.event[sEvent].type;
for(var i in oType){if(oType.hasOwnProperty(i)){var aNormal=oType[i].normal;
for(var j=0,l=aNormal.length;
j<l;
j++){aNormal[j].call(this,weEvent)
}var oDelegate=oType[i].delegate;
var aResultFilter;
var afpFilterCallback;
for(var k in oDelegate){if(oDelegate.hasOwnProperty(k)){aResultFilter=oDelegate[k].checker(oEle);
if(aResultFilter[0]){afpFilterCallback=oDelegate[k].callback;
weEvent.element=aResultFilter[1];
for(var m=0,leng=afpFilterCallback.length;
m<leng;
m++){afpFilterCallback[m].call(this,weEvent)
}}}}}}},oThis,[sEvent,realEvent]);
oEvent[sEvent]={listener:fAroundFunc,type:{}};
jindo.$Element._eventBind(oThis._element,sEvent,fAroundFunc,(realEvent==="focusin"||realEvent==="focusout"))
},initGroup:function(sKey,sEvent,sGroup){var oType=eventStore[sKey]["event"][sEvent]["type"];
oType[sGroup]={normal:[],delegate:{}}
},addEventListener:function(sKey,sEvent,sGroup,sType,vFilter,fpCallback){var oEventInfo=eventStore[sKey]["event"][sEvent]["type"][sGroup];
if(sType==="normal"){oEventInfo.normal.push(fpCallback)
}else{if(sType==="delegate"){if(!this.hasDelegate(oEventInfo,vFilter)){this.initDelegate(eventStore[sKey].ele,oEventInfo,vFilter)
}this.addDelegate(oEventInfo,vFilter,fpCallback)
}}},hasDelegate:function(oEventInfo,vFilter){return !!oEventInfo.delegate[vFilter]
},containsElement:function(eOwnEle,eTarget,sCssquery,bContainOwn){if(eOwnEle==eTarget&&bContainOwn){return jindo.$$.test(eTarget,sCssquery)
}var aSelectElement=jindo.$$(sCssquery,eOwnEle);
for(var i=0,l=aSelectElement.length;
i<l;
i++){if(aSelectElement[i]==eTarget){return true
}}return false
},initDelegate:function(eOwnEle,oEventInfo,vFilter){var fpCheck;
if(jindo.$Jindo.isString(vFilter)){fpCheck=bind(function(eOwnEle,sCssquery,oEle){var eIncludeEle=oEle;
var isIncludeEle=this.containsElement(eOwnEle,oEle,sCssquery,true);
if(!isIncludeEle){var aPropagationElements=this._getParent(eOwnEle,oEle);
for(var i=0,leng=aPropagationElements.length;
i<leng;
i++){eIncludeEle=aPropagationElements[i];
if(this.containsElement(eOwnEle,eIncludeEle,sCssquery)){isIncludeEle=true;
break
}}}return[isIncludeEle,eIncludeEle]
},this,[eOwnEle,vFilter])
}else{fpCheck=bind(function(eOwnEle,fpFilter,oEle){var eIncludeEle=oEle;
var isIncludeEle=fpFilter(eOwnEle,oEle);
if(!isIncludeEle){var aPropagationElements=this._getParent(eOwnEle,oEle);
for(var i=0,leng=aPropagationElements.length;
i<leng;
i++){eIncludeEle=aPropagationElements[i];
if(fpFilter(eOwnEle,eIncludeEle)){isIncludeEle=true;
break
}}}return[isIncludeEle,eIncludeEle]
},this,[eOwnEle,vFilter])
}oEventInfo.delegate[vFilter]={checker:fpCheck,callback:[]}
},addDelegate:function(oEventInfo,vFilter,fpCallback){oEventInfo.delegate[vFilter].callback.push(fpCallback)
},removeEventListener:function(sKey,sEvent,sGroup,sType,vFilter,fpCallback){var oEventInfo;
try{oEventInfo=eventStore[sKey]["event"][sEvent]["type"][sGroup]
}catch(e){return
}var aNewCallback=[];
var aOldCallback;
if(sType==="normal"){aOldCallback=oEventInfo.normal
}else{aOldCallback=oEventInfo.delegate[vFilter].callback
}if(sEvent==jindo._p_.NONE_GROUP||jindo.$Jindo.isFunction(fpCallback)){for(var i=0,l=aOldCallback.length;
i<l;
i++){if((aOldCallback[i]._origin_||aOldCallback[i])!=fpCallback){aNewCallback.push(aOldCallback[i])
}}}if(sType==="normal"){delete oEventInfo.normal;
oEventInfo.normal=aNewCallback
}else{if(sType==="delegate"){delete oEventInfo.delegate[vFilter].callback;
oEventInfo.delegate[vFilter].callback=aNewCallback
}}this.cleanUp(sKey,sEvent)
},cleanUpAll:function(){var oEvent;
for(var sKey in eventStore){if(eventStore.hasOwnProperty(sKey)){this.cleanUpUsingKey(sKey,true)
}}},cleanUpUsingKey:function(sKey,bForce){var oEvent;
if(!eventStore[sKey]||!eventStore[sKey].event){return
}oEvent=eventStore[sKey].event;
for(var sEvent in oEvent){if(oEvent.hasOwnProperty(sEvent)){this.cleanUp(sKey,sEvent,bForce)
}}},cleanUp:function(sKey,sEvent,bForce){var oTypeInfo;
try{oTypeInfo=eventStore[sKey]["event"][sEvent]["type"]
}catch(e){return
}var oEventInfo;
var bHasEvent=false;
if(!bForce){for(var i in oTypeInfo){if(oTypeInfo.hasOwnProperty(i)){oEventInfo=oTypeInfo[i];
if(oEventInfo.normal.length){bHasEvent=true;
break
}var oDele=oEventInfo.delegate;
for(var j in oDele){if(oDele.hasOwnProperty(j)){if(oDele[j].callback.length){bHasEvent=true;
break
}}}if(bHasEvent){break
}}}}if(!bHasEvent){jindo.$Element._unEventBind(eventStore[sKey].ele,sEvent,eventStore[sKey]["event"][sEvent]["listener"]);
delete eventStore[sKey]["event"][sEvent];
var bAllDetach=true;
var oEvent=eventStore[sKey]["event"];
for(var k in oEvent){if(oEvent.hasOwnProperty(k)){bAllDetach=false;
break
}}if(bAllDetach){delete eventStore[sKey]
}}},splitGroup:function(sEvent){var aMatch=/\s*(.+?)\s*\(\s*(.*?)\s*\)/.exec(sEvent);
if(aMatch){return{event:aMatch[1].toLowerCase(),group:aMatch[2].toLowerCase()}
}else{return{event:sEvent.toLowerCase(),group:jindo._p_.NONE_GROUP}
}},_getParent:function(oOwnEle,oEle){var e=oOwnEle;
var a=[],p=null;
var oDoc=oEle.ownerDocument||oEle.document||document;
while(oEle.parentNode&&p!=e){p=oEle.parentNode;
if(p==oDoc.documentElement){break
}a[a.length]=p;
oEle=p
}return a
}}
})();
jindo.$Element._domready=function(doc,func){if(jindo.$Element._domready.list===undefined){var f=null;
jindo.$Element._domready.list=[func];
var done=false,execFuncs=function(){if(!done){done=true;
var l=jindo.$Element._domready.list.concat();
var evt={type:"domready",target:doc,currentTarget:doc};
while(f=l.shift()){f(evt)
}}};
(function(){try{doc.documentElement.doScroll("left")
}catch(e){setTimeout(arguments.callee,50);
return
}execFuncs()
})();
doc.onreadystatechange=function(){if(doc.readyState=="complete"){doc.onreadystatechange=null;
execFuncs()
}}
}else{jindo.$Element._domready.list.push(func)
}};
jindo.$Element.prototype.appear=function(duration,callback){var oTransition=jindo._p_.getStyleIncludeVendorPrefix();
var name=oTransition.transition;
var endName;
if(name=="transition"){endName="end"
}else{endName="End"
}function appear(){var oArgs=g_checkVarType(arguments,{"4voi":[],"4num":["nDuration:Numeric"],"4fun":["nDuration:Numeric","fpCallback:Function+"]},"$Element#appear");
switch(oArgs+""){case"4voi":duration=0.3;
callback=function(){};
break;
case"4num":duration=oArgs.nDuration;
callback=function(){};
break;
case"4fun":duration=oArgs.nDuration;
callback=oArgs.fpCallback
}return[duration,callback]
}if(oTransition.transition){jindo.$Element.prototype.appear=function(duration,callback){var aOption=appear.apply(this,jindo._p_._toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var ele=this._element;
var name=oTransition.transition;
var bindFunc=function(){self.show();
ele.style[name+"Property"]="";
ele.style[name+"Duration"]="";
ele.style[name+"TimingFunction"]="";
ele.style.opacity="";
callback.call(self,self);
ele.removeEventListener(name+endName,arguments.callee,false)
};
if(!this.visible()){ele.style.opacity=ele.style.opacity||0;
self.show()
}ele.addEventListener(name+endName,bindFunc,false);
ele.style[name+"Property"]="opacity";
ele.style[name+"Duration"]=duration+"s";
ele.style[name+"TimingFunction"]="linear";
jindo._p_.setOpacity(ele,"1");
return this
}
}else{jindo.$Element.prototype.appear=function(duration,callback){var aOption=appear.apply(this,jindo._p_._toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var op=this.opacity();
if(this._getCss(this._element,"display")=="none"){op=0
}if(op==1){return this
}try{clearTimeout(this._fade_timer)
}catch(e){}var step=(1-op)/((duration||0.3)*100);
var func=function(){op+=step;
self.opacity(op);
if(op>=1){self._element.style.filter="";
callback.call(self,self)
}else{self._fade_timer=setTimeout(func,10)
}};
this.show();
func();
return this
}
}return this.appear.apply(this,arguments)
};
jindo.$Element.prototype.disappear=function(duration,callback){var oTransition=jindo._p_.getStyleIncludeVendorPrefix();
var name=oTransition.transition;
var endName;
if(name=="transition"){endName="end"
}else{endName="End"
}function disappear(){var oArgs=g_checkVarType(arguments,{"4voi":[],"4num":["nDuration:Numeric"],"4fun":["nDuration:Numeric","fpCallback:Function+"]},"$Element#disappear");
switch(oArgs+""){case"4voi":duration=0.3;
callback=function(){};
break;
case"4num":duration=oArgs.nDuration;
callback=function(){};
break;
case"4fun":duration=oArgs.nDuration;
callback=oArgs.fpCallback
}return[duration,callback]
}if(oTransition.transition){jindo.$Element.prototype.disappear=function(duration,callback){var aOption=disappear.apply(this,jindo._p_._toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var name=oTransition.transition;
var ele=this._element;
var bindFunc=function(){self.hide();
ele.style[name+"Property"]="";
ele.style[name+"Duration"]="";
ele.style[name+"TimingFunction"]="";
ele.style.opacity="";
callback.call(self,self);
ele.removeEventListener(name+endName,arguments.callee,false)
};
ele.addEventListener(name+endName,bindFunc,false);
ele.style[name+"Property"]="opacity";
ele.style[name+"Duration"]=duration+"s";
ele.style[name+"TimingFunction"]="linear";
jindo._p_.setOpacity(ele,"0");
return this
}
}else{jindo.$Element.prototype.disappear=function(duration,callback){var aOption=disappear.apply(this,jindo._p_._toArray(arguments));
duration=aOption[0];
callback=aOption[1];
var self=this;
var op=this.opacity();
if(op==0){return this
}try{clearTimeout(this._fade_timer)
}catch(e){}var step=op/((duration||0.3)*100);
var func=function(){op-=step;
self.opacity(op);
if(op<=0){self._element.style.display="none";
self.opacity(1);
callback.call(self,self)
}else{self._fade_timer=setTimeout(func,10)
}};
func();
return this
}
}return this.disappear.apply(this,arguments)
};
jindo.$Element.prototype.offset=function(nTop,nLeft){var oArgs=g_checkVarType(arguments,{g:[],s:["nTop:Numeric","nLeft:Numeric"]},"$Element#offset");
switch(oArgs+""){case"g":return this.offset_get();
case"s":return this.offset_set(oArgs.nTop,oArgs.nLeft)
}};
jindo.$Element.prototype.offset_set=function(nTop,nLeft){var oEl=this._element;
var oPhantom=null;
if(isNaN(parseFloat(this._getCss(oEl,"top")))){oEl.style.top="0px"
}if(isNaN(parseFloat(this._getCss(oEl,"left")))){oEl.style.left="0px"
}var oPos=this.offset_get();
var oGap={top:nTop-oPos.top,left:nLeft-oPos.left};
oEl.style.top=parseFloat(this._getCss(oEl,"top"))+oGap.top+"px";
oEl.style.left=parseFloat(this._getCss(oEl,"left"))+oGap.left+"px";
return this
};
jindo.$Element.prototype.offset_get=function(nTop,nLeft){var oEl=this._element;
var oPhantom=null;
var bOnlySafari=jindo._p_._JINDO_IS_SP&&!jindo._p_._JINDO_IS_CH;
var bIE=jindo._p_._JINDO_IS_IE;
var nVer=0;
if(bIE){if(document.documentMode){nVer=document.documentMode
}else{nVer=jindo.$Agent().navigator().verison
}}var fpSafari=function(oEl){var oPos={left:0,top:0};
for(var oParent=oEl,oOffsetParent=oParent.offsetParent;
oParent=oParent.parentNode;
){if(oParent.offsetParent){oPos.left-=oParent.scrollLeft;
oPos.top-=oParent.scrollTop
}if(oParent==oOffsetParent){oPos.left+=oEl.offsetLeft+oParent.clientLeft;
oPos.top+=oEl.offsetTop+oParent.clientTop;
if(!oParent.offsetParent){oPos.left+=oParent.offsetLeft;
oPos.top+=oParent.offsetTop
}oOffsetParent=oParent.offsetParent;
oEl=oParent
}}return oPos
};
var fpOthers=function(oEl){var oPos={left:0,top:0};
var oDoc=oEl.ownerDocument||oEl.document||document;
var oHtml=oDoc.documentElement;
var oBody=oDoc.body;
if(oEl.getBoundingClientRect){if(!oPhantom){var bHasFrameBorder=(window==top);
if(!bHasFrameBorder){try{bHasFrameBorder=(window.frameElement&&window.frameElement.frameBorder==1)
}catch(e){}}if((bIE&&nVer<8&&window.external)&&bHasFrameBorder&&document.body.contains(oEl)){oPhantom={left:2,top:2};
oBase=null
}else{oPhantom={left:0,top:0}
}}var box;
try{box=oEl.getBoundingClientRect()
}catch(e){box={left:0,top:0}
}if(oEl!==oHtml&&oEl!==oBody){oPos.left=box.left-oPhantom.left;
oPos.top=box.top-oPhantom.top;
oPos.left+=oHtml.scrollLeft||oBody.scrollLeft;
oPos.top+=oHtml.scrollTop||oBody.scrollTop
}}else{if(oDoc.getBoxObjectFor){var box=oDoc.getBoxObjectFor(oEl);
var vpBox=oDoc.getBoxObjectFor(oHtml||oBody);
oPos.left=box.screenX-vpBox.screenX;
oPos.top=box.screenY-vpBox.screenY
}else{for(var o=oEl;
o;
o=o.offsetParent){oPos.left+=o.offsetLeft;
oPos.top+=o.offsetTop
}for(var o=oEl.parentNode;
o;
o=o.parentNode){if(o.tagName=="BODY"){break
}if(o.tagName=="TR"){oPos.top+=2
}oPos.left-=o.scrollLeft;
oPos.top-=o.scrollTop
}}}return oPos
};
return(bOnlySafari?fpSafari:fpOthers)(oEl)
};
jindo.$Element.prototype.evalScripts=function(sHTML){var oArgs=g_checkVarType(arguments,{"4str":["sHTML:String+"]},"$Element#evalScripts");
var aJS=[];
var leftScript="<script(\\s[^>]+)*>(.*?)</";
var rightScript="script>";
sHTML=sHTML.replace(new RegExp(leftScript+rightScript,"gi"),function(_1,_2,sPart){aJS.push(sPart);
return""
});
eval(aJS.join("\n"));
return this
};
jindo.$Element.prototype.clone=function(bDeep){var oArgs=g_checkVarType(arguments,{"default":[],set:["bDeep:Boolean"]},"$Element#clone");
if(oArgs+""=="default"){bDeep=true
}return jindo.$Element(this._element.cloneNode(bDeep))
};
jindo.$Element._common=function(oElement,sMethod){try{return jindo.$Element(oElement)._element
}catch(e){throw TypeError(e.message.replace(/\$Element/g,"$Element#"+sMethod).replace(/Element\.html/g,"Element.html#"+sMethod))
}};
jindo.$Element._prepend=function(oParent,oChild){var nodes=oParent.childNodes;
if(nodes.length>0){oParent.insertBefore(oChild,nodes[0])
}else{oParent.appendChild(oChild)
}};
jindo.$Element.prototype.append=function(oElement){this._element.appendChild(jindo.$Element._common(oElement,"append"));
return this
};
jindo.$Element.prototype.prepend=function(oElement){jindo.$Element._prepend(this._element,jindo.$Element._common(oElement,"prepend"));
return this
};
jindo.$Element.prototype.replace=function(oElement){oElement=jindo.$Element._common(oElement,"replace");
if(jindo.cssquery){jindo.cssquery.release()
}var e=this._element;
var oParentNode=e.parentNode;
if(oParentNode&&oParentNode.replaceChild){oParentNode.replaceChild(oElement,e);
return this
}var _o=oElement;
oParentNode.insertBefore(_o,e);
oParentNode.removeChild(e);
return this
};
jindo.$Element.prototype.appendTo=function(oElement){jindo.$Element._common(oElement,"appendTo").appendChild(this._element);
return this
};
jindo.$Element.prototype.prependTo=function(oElement){jindo.$Element._prepend(jindo.$Element._common(oElement,"prependTo"),this._element);
return this
};
jindo.$Element.prototype.before=function(oElement){var o=jindo.$Element._common(oElement,"before");
this._element.parentNode.insertBefore(o,this._element);
return this
};
jindo.$Element.prototype.after=function(oElement){oElement=jindo.$Element._common(oElement,"after");
this.before(oElement);
jindo.$Element(oElement).before(this);
return this
};
jindo.$Element.prototype.parent=function(pFunc,limit){var oArgs=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"],for_function_number:["fpFunc:Function+","nLimit:Numeric"],for_null_number:["fpFunc:Null","nLimit:Numeric"]},"$Element#parent");
var e=this._element;
switch(oArgs+""){case"4voi":return e.parentNode?jindo.$Element(e.parentNode):null;
case"4fun":case"4nul":limit=-1;
break;
case"for_function_number":case"for_null_number":if(oArgs.nLimit==0){limit=-1
}}var a=[],p=null;
while(e.parentNode&&limit--!=0){try{p=jindo.$Element(e.parentNode)
}catch(e){p=null
}if(e.parentNode==document.documentElement){break
}if(!pFunc||(pFunc&&pFunc.call(this,p))){a[a.length]=p
}e=e.parentNode
}return a
};
jindo.$Element.prototype.child=function(pFunc,limit){var oArgs=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"],for_function_number:["fpFunc:Function+","nLimit:Numeric"],for_null_number:["fpFunc:Null","nLimit:Numeric"]},"$Element#child");
var e=this._element;
var a=[],c=null,f=null;
switch(oArgs+""){case"4voi":var child=e.childNodes;
var filtered=[];
for(var i=0,l=child.length;
i<l;
i++){if(child[i].nodeType==1){try{filtered.push(jindo.$Element(child[i]))
}catch(e){filtered.push(null)
}}}return filtered;
case"4fun":case"4nul":limit=-1;
break;
case"for_function_number":case"for_null_number":if(oArgs.nLimit==0){limit=-1
}}(f=function(el,lim,context){var ch=null,o=null;
for(var i=0;
i<el.childNodes.length;
i++){ch=el.childNodes[i];
if(ch.nodeType!=1){continue
}try{o=jindo.$Element(el.childNodes[i])
}catch(e){o=null
}if(!pFunc||(pFunc&&pFunc.call(context,o))){a[a.length]=o
}if(lim!=0){f(el.childNodes[i],lim-1)
}}})(e,limit-1,this);
return a
};
jindo.$Element.prototype.prev=function(pFunc){var oArgs=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"]},"$Element#prev");
var e=this._element;
var a=[];
switch(oArgs+""){case"4voi":if(!e){return null
}do{e=e.previousSibling;
if(!e||e.nodeType!=1){continue
}try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}}while(e);
try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}case"4fun":case"4nul":if(!e){return a
}do{e=e.previousSibling;
if(!e||e.nodeType!=1){continue
}if(!pFunc||pFunc.call(this,e)){try{if(e==null){a[a.length]=null
}else{a[a.length]=jindo.$Element(e)
}}catch(e){a[a.length]=null
}}}while(e);
try{return a
}catch(e){return null
}}};
jindo.$Element.prototype.next=function(pFunc){var oArgs=g_checkVarType(arguments,{"4voi":[],"4fun":["fpFunc:Function+"],"4nul":["fpFunc:Null"]},"$Element#next");
var e=this._element;
var a=[];
switch(oArgs+""){case"4voi":if(!e){return null
}do{e=e.nextSibling;
if(!e||e.nodeType!=1){continue
}try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}}while(e);
try{if(e==null){return null
}return jindo.$Element(e)
}catch(e){return null
}case"4fun":case"4nul":if(!e){return a
}do{e=e.nextSibling;
if(!e||e.nodeType!=1){continue
}if(!pFunc||pFunc.call(this,e)){try{if(e==null){a[a.length]=null
}else{a[a.length]=jindo.$Element(e)
}}catch(e){a[a.length]=null
}}}while(e);
try{return a
}catch(e){return null
}}};
jindo.$Element.prototype.first=function(){var el=this._element.firstElementChild||this._element.firstChild;
if(!el){return null
}while(el&&el.nodeType!=1){el=el.nextSibling
}try{return el?jindo.$Element(el):null
}catch(e){return null
}};
jindo.$Element.prototype.last=function(){var el=this._element.lastElementChild||this._element.lastChild;
if(!el){return null
}while(el&&el.nodeType!=1){el=el.previousSibling
}try{return el?jindo.$Element(el):null
}catch(e){return null
}};
jindo.$Element._contain=function(eParent,eChild){if(document.compareDocumentPosition){return !!(eParent.compareDocumentPosition(eChild)&16)
}else{if(eParent.contains){return(eParent!==eChild)&&(eParent.contains?eParent.contains(eChild):true)
}else{if(document.body.contains){if(eParent===(eChild.ownerDocument||eChild.document)&&eChild.tagName&&eChild.tagName.toUpperCase()==="BODY"){return true
}if(eParent.nodeType===9&&eParent!==eChild){eParent=eParent.body
}try{return(eParent!==eChild)&&(eParent.contains?eParent.contains(eChild):true)
}catch(e){return false
}}else{var e=eParent;
var el=eChild;
while(e&&e.parentNode){e=e.parentNode;
if(e==el){return true
}}return false
}}}};
jindo.$Element.prototype.isChildOf=function(element){try{return jindo.$Element._contain(jindo.$Element(element)._element,this._element)
}catch(e){return false
}};
jindo.$Element.prototype.isParentOf=function(element){try{return jindo.$Element._contain(this._element,jindo.$Element(element)._element)
}catch(e){return false
}};
jindo.$Element.prototype.isEqual=function(element){try{return(this._element===jindo.$Element(element)._element)
}catch(e){return false
}};
jindo.$Element.prototype.fireEvent=function(sEvent,oProps){var _oParam={"4str":[jindo.$Jindo._F("sEvent:String+")],"4obj":["sEvent:String+","oProps:Hash+"]};
jindo._p_.fireCustomEvent=function(ele,sEvent,self,bIsNormalType){var oInfo=jindo._p_.normalCustomEvent[sEvent];
var targetEle,oEvent;
for(var i in oInfo){oEvent=oInfo[i];
targetEle=oEvent.ele;
var wrap_listener;
for(var sCssquery in oEvent){if(sCssquery==="_NONE_"){if(targetEle==ele||self.isChildOf(targetEle)){wrap_listener=oEvent[sCssquery].wrap_listener;
for(var k=0,l=wrap_listener.length;
k<l;
k++){wrap_listener[k]()
}}}else{if(jindo.$Element.eventManager.containsElement(targetEle,ele,sCssquery,false)){wrap_listener=oEvent[sCssquery].wrap_listener;
for(var k=0,l=wrap_listener.length;
k<l;
k++){wrap_listener[k]()
}}}}}};
function IE(sEvent,oProps){var oArgs=g_checkVarType(arguments,_oParam,"$Element#fireEvent");
var ele=this._element;
if(jindo._p_.normalCustomEvent[sEvent]){jindo._p_.fireCustomEvent(ele,sEvent,this,!!jindo._p_.normalCustomEvent[sEvent]);
return this
}sEvent=(sEvent+"").toLowerCase();
var oEvent=document.createEventObject();
switch(oArgs+""){case"4obj":oProps=oArgs.oProps;
for(k in oProps){if(oProps.hasOwnProperty(k)){oEvent[k]=oProps[k]
}}oEvent.button=(oProps.left?1:0)+(oProps.middle?4:0)+(oProps.right?2:0);
oEvent.relatedTarget=oProps.relatedElement||null
}if(this.tag=="input"&&sEvent=="click"){if(ele.type=="checkbox"){ele.checked=(!ele.checked)
}else{if(ele.type=="radio"){ele.checked=true
}}}this._element.fireEvent("on"+sEvent,oEvent);
return this
}function DOM2(sEvent,oProps){var oArgs=g_checkVarType(arguments,_oParam,"$Element#fireEvent");
var ele=this._element;
var oldEvent=sEvent;
sEvent=jindo.$Element.eventManager.revisionEvent("",sEvent,sEvent);
if(jindo._p_.normalCustomEvent[sEvent]){jindo._p_.fireCustomEvent(ele,sEvent,this,!!jindo._p_.normalCustomEvent[sEvent]);
return this
}var sType="HTMLEvents";
sEvent=(sEvent+"").toLowerCase();
if(sEvent=="click"||sEvent.indexOf("mouse")==0){sType="MouseEvent"
}else{if(oldEvent.indexOf("wheel")>0){sEvent="DOMMouseScroll";
sType=jindo._p_._JINDO_IS_FF?"MouseEvent":"MouseWheelEvent"
}else{if(sEvent.indexOf("key")==0){sType="KeyboardEvent"
}else{if(sEvent.indexOf("pointer")>0){sType="MouseEvent";
sEvent=oldEvent
}}}}var evt;
switch(oArgs+""){case"4obj":oProps=oArgs.oProps;
oProps.button=0+(oProps.middle?1:0)+(oProps.right?2:0);
oProps.ctrl=oProps.ctrl||false;
oProps.alt=oProps.alt||false;
oProps.shift=oProps.shift||false;
oProps.meta=oProps.meta||false;
switch(sType){case"MouseEvent":evt=document.createEvent(sType);
evt.initMouseEvent(sEvent,true,true,null,oProps.detail||0,oProps.screenX||0,oProps.screenY||0,oProps.clientX||0,oProps.clientY||0,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta,oProps.button,oProps.relatedElement||null);
break;
case"KeyboardEvent":if(window.KeyEvent){evt=document.createEvent("KeyEvents");
evt.initKeyEvent(sEvent,true,true,window,oProps.ctrl,oProps.alt,oProps.shift,oProps.meta,oProps.keyCode,oProps.keyCode)
}else{try{evt=document.createEvent("Events")
}catch(e){evt=document.createEvent("UIEvents")
}finally{evt.initEvent(sEvent,true,true);
evt.ctrlKey=oProps.ctrl;
evt.altKey=oProps.alt;
evt.shiftKey=oProps.shift;
evt.metaKey=oProps.meta;
evt.keyCode=oProps.keyCode;
evt.which=oProps.keyCode
}}break;
default:evt=document.createEvent(sType);
evt.initEvent(sEvent,true,true)
}break;
case"4str":evt=document.createEvent(sType);
evt.initEvent(sEvent,true,true)
}ele.dispatchEvent(evt);
return this
}jindo.$Element.prototype.fireEvent=(document.dispatchEvent!==undefined)?DOM2:IE;
return this.fireEvent.apply(this,jindo._p_._toArray(arguments))
};
jindo.$Element.prototype.empty=function(){if(jindo.cssquery){jindo.cssquery.release()
}this.html("");
return this
};
jindo.$Element.prototype.remove=function(oChild){if(jindo.cssquery){jindo.cssquery.release()
}var ___element=jindo.$Element;
___element(___element._common(oChild,"remove")).leave();
return this
};
jindo.$Element.prototype.leave=function(){var e=this._element;
if(e.parentNode){if(jindo.cssquery){jindo.cssquery.release()
}e.parentNode.removeChild(e)
}return this
};
jindo.$Element.prototype.wrap=function(wrapper){var e=this._element;
wrapper=jindo.$Element._common(wrapper,"wrap");
if(e.parentNode){e.parentNode.insertBefore(wrapper,e)
}wrapper.appendChild(e);
return this
};
jindo.$Element.prototype.ellipsis=function(stringTail){var oArgs=g_checkVarType(arguments,{"4voi":[],"4str":["stringTail:String+"]},"$Element#ellipsis");
stringTail=stringTail||"...";
var txt=this.text();
var len=txt.length;
var padding=parseInt(this._getCss(this._element,"paddingTop"),10)+parseInt(this._getCss(this._element,"paddingBottom"),10);
var cur_h=this._element.offsetHeight-padding;
var i=0;
var h=this.text("A")._element.offsetHeight-padding;
if(cur_h<h*1.5){this.text(txt);
return this
}cur_h=h;
while(cur_h<h*1.5){i+=Math.max(Math.ceil((len-i)/2),1);
cur_h=this.text(txt.substring(0,i)+stringTail)._element.offsetHeight-padding
}while(cur_h>h*1.5){i--;
cur_h=this.text(txt.substring(0,i)+stringTail)._element.offsetHeight-padding
}return this
};
jindo.$Element.prototype.indexOf=function(element){try{var e=jindo.$Element(element)._element;
var n=this._element.childNodes;
var c=0;
var l=n.length;
for(var i=0;
i<l;
i++){if(n[i].nodeType!=1){continue
}if(n[i]===e){return c
}c++
}}catch(e){}return -1
};
jindo.$Element.prototype.queryAll=function(sSelector){var oArgs=g_checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#queryAll");
var arrEle=jindo.cssquery(sSelector,this._element);
var returnArr=[];
for(var i=0,l=arrEle.length;
i<l;
i++){returnArr.push(jindo.$Element(arrEle[i]))
}return returnArr
};
jindo.$Element.prototype.query=function(sSelector){var oArgs=g_checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#query");
var ele=jindo.cssquery.getSingle(sSelector,this._element);
return ele===null?ele:jindo.$Element(ele)
};
jindo.$Element.prototype.test=function(sSelector){var oArgs=g_checkVarType(arguments,{"4str":["sSelector:String+"]},"$Element#test");
return jindo.cssquery.test(this._element,sSelector)
};
jindo.$Element.prototype.xpathAll=function(sXPath){var oArgs=g_checkVarType(arguments,{"4str":["sXPath:String+"]},"$Element#xpathAll");
var arrEle=jindo.cssquery.xpath(sXPath,this._element);
var returnArr=[];
for(var i=0,l=arrEle.length;
i<l;
i++){returnArr.push(jindo.$Element(arrEle[i]))
}return returnArr
};
jindo.$Element.insertAdjacentHTML=function(ins,html,insertType,type,fn,sType){var aArg=[html];
aArg.callee=arguments.callee;
var oArgs=g_checkVarType(aArg,{"4str":["sHTML:String+"]},"$Element#"+sType);
var _ele=ins._element;
html=html+"";
if(_ele.insertAdjacentHTML&&!(/^<(option|tr|td|th|col)(?:.*?)>/.test(html.replace(/^(\s|　)+|(\s|　)+$/g,"").toLowerCase()))){_ele.insertAdjacentHTML(insertType,html)
}else{var oDoc=_ele.ownerDocument||_ele.document||document;
var fragment=oDoc.createDocumentFragment();
var defaultElement;
var sTag=html.replace(/^(\s|　)+|(\s|　)+$/g,"");
var oParentTag={option:"select",tr:"tbody",thead:"table",tbody:"table",col:"table",td:"tr",th:"tr",div:"div"};
var aMatch=/^\<(option|tr|thead|tbody|td|th|col)(?:.*?)\>/i.exec(sTag);
var sChild=aMatch===null?"div":aMatch[1].toLowerCase();
var sParent=oParentTag[sChild];
defaultElement=jindo._p_._createEle(sParent,sTag,oDoc,true);
var scripts=defaultElement.getElementsByTagName("script");
for(var i=0,l=scripts.length;
i<l;
i++){scripts[i].parentNode.removeChild(scripts[i])
}while(defaultElement[type]){fragment.appendChild(defaultElement[type])
}fn(fragment.cloneNode(true))
}return ins
};
jindo.$Element.prototype.appendHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,"beforeEnd","firstChild",jindo.$Fn(function(oEle){var ele=this._element;
if(ele.tagName.toLowerCase()==="table"){var nodes=ele.childNodes;
for(var i=0,l=nodes.length;
i<l;
i++){if(nodes[i].nodeType==1){ele=nodes[i];
break
}}}ele.appendChild(oEle)
},this).bind(),"appendHTML")
};
jindo.$Element.prototype.prependHTML=function(sHTML){var ___element=jindo.$Element;
return ___element.insertAdjacentHTML(this,sHTML,"afterBegin","firstChild",jindo.$Fn(function(oEle){var ele=this._element;
if(ele.tagName.toLowerCase()==="table"){var nodes=ele.childNodes;
for(var i=0,l=nodes.length;
i<l;
i++){if(nodes[i].nodeType==1){ele=nodes[i];
break
}}}___element._prepend(ele,oEle)
},this).bind(),"prependHTML")
};
jindo.$Element.prototype.beforeHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,"beforeBegin","firstChild",jindo.$Fn(function(oEle){this._element.parentNode.insertBefore(oEle,this._element)
},this).bind(),"beforeHTML")
};
jindo.$Element.prototype.afterHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,"afterEnd","firstChild",jindo.$Fn(function(oEle){this._element.parentNode.insertBefore(oEle,this._element.nextSibling)
},this).bind(),"afterHTML")
};
jindo.$Element.prototype.hasEventListener=function(sEvent){var oArgs=g_checkVarType(arguments,{"4str":["sEvent:String+"]},"$Element#hasEventListener"),oDoc,bHasEvent=false,sLowerCaseEvent=oArgs.sEvent.toLowerCase();
if(this._key){oDoc=this._element.ownerDocument||this._element.document||document;
if(sLowerCaseEvent=="load"&&this._element===oDoc){bHasEvent=jindo.$Element(window).hasEventListener(oArgs.sEvent)
}else{if(sLowerCaseEvent=="domready"&&jindo.$Jindo.isWindow(this._element)){bHasEvent=jindo.$Element(oDoc).hasEventListener(oArgs.sEvent)
}else{var realEvent=jindo.$Element.eventManager.revisionEvent("",sEvent);
bHasEvent=!!jindo.$Element.eventManager.hasEvent(this._key,realEvent,oArgs.sEvent)
}}return bHasEvent
}return false
};
jindo.$Element.prototype.preventTapHighlight=function(bFlag){if(jindo._p_._JINDO_IS_MO){var sClassName="no_tap_highlight"+new Date().getTime();
var elStyleTag=document.createElement("style");
var elHTML=document.getElementsByTagName("html")[0];
elStyleTag.type="text/css";
elHTML.insertBefore(elStyleTag,elHTML.firstChild);
var oSheet=elStyleTag.sheet||elStyleTag.styleSheet;
oSheet.insertRule("."+sClassName+" { -webkit-tap-highlight-color: rgba(0,0,0,0); }",0);
oSheet.insertRule("."+sClassName+" * { -webkit-tap-highlight-color: rgba(0,0,0,.25); }",0);
jindo.$Element.prototype.preventTapHighlight=function(bFlag){return this[bFlag?"addClass":"removeClass"](sClassName)
}
}else{jindo.$Element.prototype.preventTapHighlight=function(bFlag){return this
}
}return this.preventTapHighlight.apply(this,jindo._p_._toArray(arguments))
};
jindo.$Element.prototype.data=function(sKey,vValue){var oType={g:["sKey:String+"],s4var:["sKey:String+","vValue:Variant"],s4obj:["oObj:Hash+"]};
var jindoKey="_jindo";
function toCamelCase(name){return name.replace(/\-(.)/g,function(_,a){return a.toUpperCase()
})
}function toDash(name){return name.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()
})
}if(document.body.dataset){jindo.$Element.prototype.data=function(sKey,vValue){var sToStr,oArgs=g_checkVarType(arguments,oType,"$Element#data");
var isNull=jindo.$Jindo.isNull;
switch(oArgs+""){case"g":sKey=toCamelCase(sKey);
var isMakeFromJindo=this._element.dataset[sKey+jindoKey];
var sDateSet=this._element.dataset[sKey];
if(sDateSet){if(isMakeFromJindo){return window.JSON.parse(sDateSet)
}return sDateSet
}return null;
case"s4var":var oData;
if(isNull(vValue)){sKey=toCamelCase(sKey);
delete this._element.dataset[sKey];
delete this._element.dataset[sKey+jindoKey];
return this
}else{oData={};
oData[sKey]=vValue;
sKey=oData
}case"s4obj":var sChange;
for(var i in sKey){sChange=toCamelCase(i);
if(isNull(sKey[i])){delete this._element.dataset[sChange];
delete this._element.dataset[sChange+jindoKey]
}else{sToStr=jindo.$Json._oldToString(sKey[i]);
if(sToStr!=null){this._element.dataset[sChange]=sToStr;
this._element.dataset[sChange+jindoKey]="jindo"
}}}return this
}}
}else{jindo.$Element.prototype.data=function(sKey,vValue){var sToStr,oArgs=g_checkVarType(arguments,oType,"$Element#data");
var isNull=jindo.$Jindo.isNull;
switch(oArgs+""){case"g":sKey=toDash(sKey);
var isMakeFromJindo=this._element.getAttribute("data-"+sKey+jindoKey);
var sVal=this._element.getAttribute("data-"+sKey);
if(isMakeFromJindo){return(sVal!=null)?eval("("+sVal+")"):null
}else{return sVal
}case"s4var":var oData;
if(isNull(vValue)){sKey=toDash(sKey);
this._element.removeAttribute("data-"+sKey);
this._element.removeAttribute("data-"+sKey+jindoKey);
return this
}else{oData={};
oData[sKey]=vValue;
sKey=oData
}case"s4obj":var sChange;
for(var i in sKey){sChange=toDash(i);
if(isNull(sKey[i])){this._element.removeAttribute("data-"+sChange);
this._element.removeAttribute("data-"+sChange+jindoKey)
}else{sToStr=jindo.$Json._oldToString(sKey[i]);
if(sToStr!=null){this._element.setAttribute("data-"+sChange,sToStr);
this._element.setAttribute("data-"+sChange+jindoKey,"jindo")
}}}return this
}}
}return this.data.apply(this,jindo._p_._toArray(arguments))
};
jindo.$Fn=function(func,thisObject){var cl=arguments.callee;
if(func instanceof cl){return func
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,2,"$Fn");
return new cl(func,thisObject)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4fun":["func:Function+"],"4fun2":["func:Function+","thisObject:Variant"],"4str":["func:String+","thisObject:String+"]},"$Fn");
this._tmpElm=null;
this._key=null;
switch(oArgs+""){case"4str":this._func=eval("false||function("+func+"){"+thisObject+"}");
break;
case"4fun":case"4fun2":this._func=func;
this._this=thisObject
}};
jindo.$Fn._commonPram=function(oPram,sMethod){return g_checkVarType(oPram,{"4ele":["eElement:Element+","sEvent:String+"],"4ele2":["eElement:Element+","sEvent:String+","bUseCapture:Boolean"],"4str":["eElement:String+","sEvent:String+"],"4str2":["eElement:String+","sEvent:String+","bUseCapture:Boolean"],"4arr":["aElement:Array+","sEvent:String+"],"4arr2":["aElement:Array+","sEvent:String+","bUseCapture:Boolean"],"4doc":["eElement:Document+","sEvent:String+"],"4win":["eElement:Window+","sEvent:String+"],"4doc2":["eElement:Document+","sEvent:String+","bUseCapture:Boolean"],"4win2":["eElement:Window+","sEvent:String+","bUseCapture:Boolean"]},sMethod)
};
jindo.$Fn.prototype.$value=function(){return this._func
};
jindo.$Fn.prototype.bind=function(){var a=jindo._p_._toArray(arguments);
var f=this._func;
var t=this._this||this;
var b;
if(f.bind){a.unshift(t);
b=Function.prototype.bind.apply(f,a)
}else{b=function(){var args=jindo._p_._toArray(arguments);
if(a.length){args=a.concat(args)
}return f.apply(t,args)
}
}return b
};
jindo.$Fn.prototype.attach=function(oElement,sEvent,bUseCapture){var oArgs=jindo.$Fn._commonPram(arguments,"$Fn#attach");
var fn=null,l,ev=sEvent,el=oElement,ua=jindo._p_._j_ag;
if(bUseCapture!==true){bUseCapture=false
}this._bUseCapture=bUseCapture;
switch(oArgs+""){case"4arr":case"4arr2":var el=oArgs.aElement;
var ev=oArgs.sEvent;
for(var i=0,l=el.length;
i<l;
i++){this.attach(el[i],ev,!!bUseCapture)
}return this
}fn=this._bind=this._bind?this._bind:this.bind();
jindo.$Element(el).attach(ev,fn);
return this
};
jindo.$Fn.prototype.detach=function(oElement,sEvent,bUseCapture){var oArgs=jindo.$Fn._commonPram(arguments,"$Fn#detach");
var fn=null,l,el=oElement,ev=sEvent,ua=jindo._p_._j_ag;
switch(oArgs+""){case"4arr":case"4arr2":var el=oArgs.aElement;
var ev=oArgs.sEvent;
for(var i=0,l=el.length;
i<l;
i++){this.detach(el[i],ev,!!bUseCapture)
}return this
}fn=this._bind=this._bind?this._bind:this.bind();
jindo.$Element(oArgs.eElement).detach(oArgs.sEvent,fn);
return this
};
jindo.$Fn.prototype.delay=function(nSec,args){var oArgs=g_checkVarType(arguments,{"4num":["nSec:Numeric"],"4arr":["nSec:Numeric","args:Array+"]},"$Fn#delay");
switch(oArgs+""){case"4num":args=args||[];
break;
case"4arr":args=oArgs.args
}this._delayKey=setTimeout(this.bind.apply(this,args),nSec*1000);
return this
};
jindo.$Fn.prototype.setInterval=function(nSec,args){var oArgs=g_checkVarType(arguments,{"4num":["nSec:Numeric"],"4arr":["nSec:Numeric","args:Array+"]},"$Fn#setInterval");
switch(oArgs+""){case"4num":args=args||[];
break;
case"4arr":args=oArgs.args
}this._repeatKey=setInterval(this.bind.apply(this,args),nSec*1000);
return this
};
jindo.$Fn.prototype.repeat=jindo.$Fn.prototype.setInterval;
jindo.$Fn.prototype.stopDelay=function(){if(this._delayKey!==undefined){window.clearTimeout(this._delayKey);
delete this._delayKey
}return this
};
jindo.$Fn.prototype.stopRepeat=function(){if(this._repeatKey!==undefined){window.clearInterval(this._repeatKey);
delete this._repeatKey
}return this
};
jindo.$ElementList=function(els){var cl=arguments.callee;
if(els instanceof cl){return els
}if(!(this instanceof cl)){try{return new cl(els)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4arr":["aEle:Array+"],"4str":["sCssQuery:String+"],"4nul":["oEle:Null"],"4und":["oEle:Undefined"]},"$ElementList");
switch(oArgs+""){case"4arr":els=oArgs.aEle;
break;
case"4str":els=jindo.cssquery(oArgs.sCssQuery);
break;
case"4nul":case"4und":els=[]
}this._elements=[];
for(var i=0,l=els.length;
i<l;
i++){this._elements.push(jindo.$Element(els[i]))
}};
(function(proto){var setters=["show","hide","toggle","addClass","removeClass","toggleClass","fireEvent","leave","empty","className","width","height","text","html","css","attr"];
for(var i=0,l=setters.length;
i<l;
i++){var name=setters[i];
if(jindo.$Element.prototype[name]){proto[setters[i]]=(function(name){return function(){try{var args=[];
for(var j=0,m=arguments.length;
j<m;
j++){args.push(arguments[j])
}for(var k=0,n=this._elements.length;
k<n;
k++){this._elements[k][name].apply(this._elements[k],args)
}return this
}catch(e){throw TypeError(e.message.replace(/\$Element/g,"$Elementlist#"+name).replace(/Element\.html/g,"Elementlist.html#"+name))
}}
})(setters[i])
}}var setters2=["appear","disappear"];
for(var i=0,l=setters2.length;
i<l;
i++){if(jindo.$Element.prototype[name]){proto[setters2[i]]=(function(name){return function(duration,callback){try{var self=this;
for(var j=0,m=this._elements.length;
j<m;
j++){if(j==m-1){this._elements[j][name](duration,function(){callback&&callback(self)
})
}else{this._elements[j][name](duration)
}}return this
}catch(e){throw TypeError(e.message.replace(/\$Element/g,"$Elementlist#"+name).replace(/Element\.html/g,"Elementlist.html#"+name))
}}
})(setters2[i])
}}})(jindo.$ElementList.prototype);
jindo.$ElementList.prototype.get=function(idx){var oArgs=g_checkVarType(arguments,{"4num":["nIdx:Numeric"]},"$ElementList#get");
return this._elements[idx]
};
jindo.$ElementList.prototype.getFirst=function(){return this._elements[0]
};
jindo.$ElementList.prototype.getLast=function(){return this._elements[Math.max(this._elements.length-1,0)]
};
jindo.$ElementList.prototype.length=function(nLen,oValue){var oArgs=g_checkVarType(arguments,{"4voi":[],"4num":[jindo.$Jindo._F("nLen:Numeric")],"4var":["nLen:Numeric","oValue:Variant"]},"$ElementList#length");
var waEle=jindo.$A(this._elements);
try{return waEle.length.apply(waEle,jindo._p_._toArray(arguments))
}catch(e){throw TypeError(e.message.replace(/\$A/g,"$Elementlist#length").replace(/A\.html/g,"Elementlist.html#length"))
}};
jindo.$ElementList.prototype.$value=function(){return this._elements
};
jindo.$S=function(str){var cl=arguments.callee;
if(str instanceof cl){return str
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Json");
return new cl(str||"")
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4str":["str:String+"]},"$S");
this._str=str+""
};
jindo.$S.prototype.$value=function(){return this._str
};
jindo.$S.prototype.toString=jindo.$S.prototype.$value;
jindo.$S.prototype.trim=function(){if("a".trim){jindo.$S.prototype.trim=function(){return jindo.$S(this._str.trim())
}
}else{jindo.$S.prototype.trim=function(){return jindo.$S(jindo._p_.trim(this._str))
}
}return this.trim()
};
jindo.$S.prototype.escapeHTML=function(){var entities={'"':"quot","&":"amp","<":"lt",">":"gt","'":"#39"};
var s=this._str.replace(/[<>&"']/g,function(m0){return entities[m0]?"&"+entities[m0]+";":m0
});
return jindo.$S(s)
};
jindo.$S.prototype.stripTags=function(){return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig,""))
};
jindo.$S.prototype.times=function(nTimes){var oArgs=g_checkVarType(arguments,{"4str":["nTimes:Numeric"]},"$S#times");
if(!oArgs){return this
}return jindo.$S(Array(oArgs.nTimes+1).join(this._str))
};
jindo.$S.prototype.unescapeHTML=function(){var entities={quot:'"',amp:"&",lt:"<",gt:">","#39":"'"};
var s=this._str.replace(/&([a-z]+|#[0-9]+);/g,function(m0,m1){return entities[m1]?entities[m1]:m0
});
return jindo.$S(s)
};
jindo.$S.prototype.escape=function(){var s=this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g,function(m0,m1,_){if(m1){return escape(m1).replace(/%/g,"\\")
}return(_={"\n":"\\n","\r":"\\r","\t":"\\t"})[m0]?_[m0]:"\\"+m0
});
return jindo.$S(s)
};
jindo.$S.prototype.bytes=function(vConfig){var oArgs=g_checkVarType(arguments,{"4voi":[],"4num":["nConfig:Numeric"],"4obj":["nConfig:Hash+"]},"$S#bytes");
var code=0,bytes=0,i=0,len=this._str.length;
var charset=((document.charset||document.characterSet||document.defaultCharset)+"");
var cut,nBytes;
switch(oArgs+""){case"4voi":cut=false;
break;
case"4num":cut=true;
nBytes=vConfig;
break;
case"4obj":charset=vConfig.charset||charset;
nBytes=vConfig.size||false;
cut=!!nBytes;
break
}if(charset.toLowerCase()=="utf-8"){for(i=0;
i<len;
i++){code=this._str.charCodeAt(i);
if(code<128){bytes+=1
}else{if(code<2048){bytes+=2
}else{if(code<65536){bytes+=3
}else{bytes+=4
}}}if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);
break
}}}else{for(i=0;
i<len;
i++){bytes+=(this._str.charCodeAt(i)>128)?2:1;
if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);
break
}}}return cut?this:bytes
};
jindo.$S.prototype.parseString=function(){if(this._str==""){return{}
}var str=this._str.split(/&/g),pos,key,val,buf={},isescape=false;
for(var i=0;
i<str.length;
i++){key=str[i].substring(0,pos=str[i].indexOf("=")),isescape=false;
try{val=decodeURIComponent(str[i].substring(pos+1))
}catch(e){isescape=true;
val=decodeURIComponent(unescape(str[i].substring(pos+1)))
}if(key.substr(key.length-2,2)=="[]"){key=key.substring(0,key.length-2);
if(jindo.$Jindo.isUndefined(buf[key])){buf[key]=[]
}buf[key][buf[key].length]=isescape?escape(val):val
}else{buf[key]=isescape?escape(val):val
}}return buf
};
jindo.$S.prototype.escapeRegex=function(){var s=this._str;
var r=/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;
return jindo.$S(s.replace(r,"\\$1"))
};
jindo.$S.prototype.format=function(){var args=arguments;
var idx=0;
var s=this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g,function(m0,m1,m2,m3,m4){var a=args[idx++];
var ret="",pad="";
m3=m3?+m3:0;
if(m4=="s"){ret=a+""
}else{if(" bcdoxX".indexOf(m4)>0){if(!jindo.$Jindo.isNumeric(a)){return""
}ret=(m4=="c")?String.fromCharCode(a):a.toString(({b:2,d:10,o:8,x:16,X:16})[m4]);
if(" X".indexOf(m4)>0){ret=ret.toUpperCase()
}}}if(ret.length<m3){pad=jindo.$S(m1||" ").times(m3-ret.length)._str
}(m2=="-")?(ret+=pad):(ret=pad+ret);
return ret
});
return jindo.$S(s)
};
jindo.$Document=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Document");
return new cl(el||document)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4doc":["oDocument:Document+"]},"$Document");
if(oArgs==null){this._doc=document
}else{this._doc=el
}this._docKey=this.renderingMode()=="Standards"?"documentElement":"body"
};
(function(){var qu=jindo.cssquery;
var type={query:qu.getSingle,queryAll:qu,xpathAll:qu.xpath};
for(var i in type){jindo.$Document.prototype[i]=(function(sMethod,fp){return function(sQuery){var oArgs=g_checkVarType(arguments,{"4str":["sQuery:String+"]},"$Document#"+sMethod);
return fp(sQuery,this._doc)
}
})(i,type[i])
}})();
jindo.$Document.prototype.$value=function(){return this._doc
};
jindo.$Document.prototype.scrollSize=function(){var oDoc=this._doc[jindo._p_._JINDO_IS_WK?"body":this._docKey];
return{width:Math.max(oDoc.scrollWidth,oDoc.clientWidth),height:Math.max(oDoc.scrollHeight,oDoc.clientHeight)}
};
jindo.$Document.prototype.scrollPosition=function(){var oDoc=this._doc[jindo._p_._JINDO_IS_WK?"body":this._docKey];
return{left:oDoc.scrollLeft||window.pageXOffset||window.scrollX||0,top:oDoc.scrollTop||window.pageYOffset||window.scrollY||0}
};
jindo.$Document.prototype.clientSize=function(){var oDoc=this._doc[this._docKey];
var isSafari=jindo._p_._JINDO_IS_SP&&!jindo._p_._JINDO_IS_CH;
return(isSafari)?{width:window.innerWidth,height:window.innerHeight}:{width:oDoc.clientWidth,height:oDoc.clientHeight}
};
jindo.$Document.prototype.renderingMode=function(){var agent=jindo._p_._j_ag;
var isIe=jindo._p_._JINDO_IS_IE;
var isSafari=(jindo._p_._JINDO_IS_WK&&!jindo._p_._JINDO_IS_CH&&navigator.vendor.indexOf("Apple")>-1);
var sRet;
if("compatMode" in this._doc){sRet=this._doc.compatMode=="CSS1Compat"?"Standards":(isIe?"Quirks":"Almost")
}else{sRet=isSafari?"Standards":"Quirks"
}return sRet
};
jindo.$Form=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Form");
return new cl(el)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4str":["oForm:String+"],"4ele":["oForm:Element+"]},"$Form");
switch(oArgs+""){case"4str":el=jindo.$(el);
break
}if(!(el.tagName&&el.tagName.toUpperCase()=="FORM")){throw TypeError("only form")
}this._form=el
};
jindo.$Form.prototype.$value=function(){return this._form
};
jindo.$Form.prototype.serialize=function(){var self=this;
var oRet={};
var nLen=arguments.length;
var fpInsert=function(eEle,sKey){if(!eEle.disabled){var sVal=self.value(sKey);
if(sVal!==undefined){oRet[sKey]=sVal
}}};
if(nLen==0){var len=this._form.elements.length;
for(var i=0;
i<len;
i++){var o=this._form.elements[i];
if(o.name){fpInsert(o,o.name)
}}}else{for(var i=0;
i<nLen;
i++){fpInsert(this.element(arguments[i]),arguments[i])
}}return jindo.$H(oRet).toQueryString()
};
jindo.$Form.prototype.element=function(sKey){var oArgs=g_checkVarType(arguments,{"4voi":[],"4str":[jindo.$Jindo._F("sKey:String+")]},"$Form#element");
switch(oArgs+""){case"4voi":return jindo._p_._toArray(this._form.elements);
case"4str":return this._form.elements[sKey+""]
}};
jindo.$Form.prototype.enable=function(sKey){var oArgs=g_checkVarType(arguments,{s4bln:["sName:String+","bEnable:Boolean"],s4obj:["oObj:Hash+"],g:[jindo.$Jindo._F("sName:String+")]},"$Form#enable");
switch(oArgs+""){case"s4bln":var aEls=this._form[sKey];
if(!aEls){return this
}aEls=aEls.nodeType==1?[aEls]:aEls;
var sFlag=oArgs.bEnable;
for(var i=0;
i<aEls.length;
i++){aEls[i].disabled=!sFlag
}return this;
case"s4obj":sKey=oArgs.oObj;
var self=this;
for(var k in sKey){if(sKey.hasOwnProperty(k)){self.enable(k,sKey[k])
}}return this;
case"g":var aEls=this._form[sKey];
if(!aEls){return this
}aEls=aEls.nodeType==1?[aEls]:aEls;
var bEnabled=true;
for(var i=0;
i<aEls.length;
i++){if(aEls[i].disabled){bEnabled=false;
break
}}return bEnabled
}};
jindo.$Form.prototype.value=function(sKey){var oArgs=g_checkVarType(arguments,{s4str:["sKey:String+","vValue:Variant"],s4obj:[jindo.$Jindo._F("oObj:Hash+")],g:["sKey:String+"]},"$Form#value");
var elOption,sValue;
if(oArgs+""=="s4obj"){var self=this;
sKey=oArgs.oObj;
for(var k in sKey){if(sKey.hasOwnProperty(k)){self.value(k,sKey[k])
}}return this
}var aEls=this._form[sKey];
if(!aEls){throw new jindo.$Error(sKey+jindo.$Except.NONE_ELEMENT,"$Form#value")
}aEls=aEls.nodeType==1?[aEls]:aEls;
switch(oArgs+""){case"s4str":var sVal=oArgs.vValue;
var nLen=aEls.length;
for(var i=0;
i<nLen;
i++){var o=aEls[i];
switch(o.type){case"radio":o.checked=(o.value==sVal);
break;
case"checkbox":if(sVal.constructor==Array){o.checked=jindo.$A(sVal).has(o.value)
}else{o.checked=(o.value==sVal)
}break;
case"select-one":var nIndex=-1;
for(var i=0,len=o.options.length;
i<len;
i++){elOption=o.options[i];
if(elOption.value==sVal||elOption.text==sVal){nIndex=i;
continue
}}o.selectedIndex=nIndex;
break;
case"select-multiple":var nIndex=-1;
if(jindo.$Jindo.isArray(sVal)){var waVal=jindo.$A(sVal);
for(var i=0,len=o.options.length;
i<len;
i++){elOption=o.options[i];
o.options[i].selected=waVal.has(elOption.value)||waVal.has(elOption.text)
}}else{for(var i=0,len=o.options.length;
i<len;
i++){elOption=o.options[i];
if(elOption.value==sVal||elOption.text==sVal){nIndex=i;
continue
}}o.selectedIndex=nIndex
}break;
default:o.value=sVal
}}return this;
case"g":var aRet=[];
var nLen=aEls.length;
for(var i=0;
i<nLen;
i++){var o=aEls[i];
switch(o.type){case"radio":case"checkbox":if(o.checked){aRet.push(o.value)
}break;
case"select-one":if(o.selectedIndex!=-1){elOption=o.options[o.selectedIndex];
sValue=elOption.value==""?elOption.text:elOption.value;
aRet.push(sValue)
}break;
case"select-multiple":if(o.selectedIndex!=-1){for(var i=0,len=o.options.length;
i<len;
i++){elOption=o.options[i];
if(elOption.selected){sValue=elOption.value==""?elOption.text:elOption.value;
aRet.push(sValue)
}}}break;
default:aRet.push(o.value)
}}return aRet.length>1?aRet:aRet[0]
}};
jindo.$Form.prototype.submit=function(sTargetName,fValidation){var oArgs=g_checkVarType(arguments,{voi:[],"4str":["sTargetName:String+"],"4fun":["fValidation:Function+"],"4fun2":["sTargetName:String+","fValidation:Function+"]},"$Form#submit");
var sOrgTarget=null;
switch(oArgs+""){case"4str":sOrgTarget=this._form.target;
this._form.target=oArgs.sTargetName;
break;
case"4fun":case"4fun2":if(!oArgs.fValidation.call(this,this._form)){return this
}if(oArgs+""=="4fun2"){sOrgTarget=this._form.target;
this._form.target=oArgs.sTargetName
}}this._form.submit();
if(!jindo.$Jindo.isNull(sOrgTarget)){this._form.target=sOrgTarget
}return this
};
jindo.$Form.prototype.reset=function(fValidation){var oArgs=g_checkVarType(arguments,{"4voi":[],"4fun":["fValidation:Function+"]},"$Form#reset");
if(oArgs+""=="4fun"){if(!fValidation.call(this,this._form)){return this
}}this._form.reset();
return this
};
jindo.$Template=function(str,sEngineName){var obj=null,tag="",cl=arguments.callee,_sEngineName;
if(str instanceof cl){return str
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,2,"$Template");
return new cl(str||"",sEngineName||"default")
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4str":["str:String+"],"4ele":["ele:Element+"],"4str3":["str:String+","sEngineName:String+"],"4ele3":["ele:Element+","sEngineName:String+"]},"$Template");
if((obj=_getElementById(document,str)||str)&&obj.tagName&&(tag=obj.tagName.toUpperCase())&&(tag=="TEXTAREA"||(tag=="SCRIPT"&&obj.getAttribute("type")=="text/template"))){str=(obj.value||obj.innerHTML).replace(/^\s+|\s+$/g,"")
}this._str=str+"";
_sEngineName="default";
switch(oArgs+""){case"4str3":case"4ele3":_sEngineName=oArgs.sEngineName;
break
}this._compiler=jindo.$Template.getEngine(_sEngineName)
};
jindo.$Template._aEngines={};
jindo.$Template._cache={};
jindo.$Template.splitter=/(?!\\)[\{\}]/g;
jindo.$Template.pattern=/^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+)|gset (.+))$/;
jindo.$Template.addEngine=function(sEngineName,fEngine){var oArgs=g_checkVarType(arguments,{"4fun":["sEngineName:String+","fEngine:Function+"]},"$Template#addEngine");
jindo.$Template._aEngines[oArgs.sEngineName]=oArgs.fEngine
};
jindo.$Template.getEngine=function(sEngineName){var oArgs=g_checkVarType(arguments,{"4str":["sEngineName:String+"]},"$Template#getEngine");
return jindo.$Template._aEngines[oArgs.sEngineName]
};
jindo.$Template.prototype.process=function(data){var oArgs=g_checkVarType(arguments,{"4obj":["data:Hash+"],"4voi":[]},"$Template#process"),fProcess;
if(jindo.$Template._cache&&jindo.$Template._cache[this._str]){fProcess=jindo.$Template._cache[this._str];
return fProcess(oArgs+""=="for_void"?"":oArgs.data)
}jindo.$Template._cache[this._str]=fProcess=this._compiler(this._str);
return fProcess(oArgs+""=="for_void"?"":oArgs.data)
};
jindo.$Template.addEngine("default",function(sTemplate){var key="\x01",leftBrace="\x02",rightBrace="\x03",tpl=(" "+sTemplate+" ").replace(/\\{/g,leftBrace).replace(/\\}/g,rightBrace).replace(/(?!\\)\}\{/g,"}"+key+"{").split(jindo.$Template.splitter),i=tpl.length,map={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f"},reg=[/(["'](?:(?:\\.)+|[^\\["']+)*["']|[a-zA-Z_](?:[\w\.]|\[(?:.*?)\])*)/g,/[\n\r\t\f"\\]/g,/^\s+/,/\s+$/,/#/g],cb=[function(m){return(m.substring(0,1)=='"'||m.substring(0,1)=="'"||m=="null"||m=="false"||m=="true")?m:"d."+m
},function(m){return map[m]||m
},"",""],stm=[],lev=0,delete_info;
tpl[0]=tpl[0].substr(1);
tpl[i-1]=tpl[i-1].substr(0,tpl[i-1].length-1);
if(i<2){return(function(noPattern){return function(){return noPattern
}
})(tpl[0])
}tpl=tpl.reverse();
while(i--){if(i%2){tpl[i]=tpl[i].replace(jindo.$Template.pattern,function(){var m=arguments;
if(m[11]){return m[11].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,function(){var mm=arguments;
var str="var "+mm[1]+"=";
if(mm[2]){str+=mm[2]
}else{str+=mm[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})
}return str
})+";"
}if(m[10]){return m[10].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,function(){var mm=arguments;
var str="d."+mm[1]+"=";
if(mm[2]){str+="d."+mm[2]
}else{str+=mm[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})
}return str
})+";"
}if(m[9]){return"s[i++] = "+m[9].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return(m.substring(0,1)=="=")?"d."+m.replace("=",""):m
})+";"
}if(m[8]){return"s[i++] = d."+m[8]+";"
}if(m[1]){return"if("+m[1].replace(reg[0],cb[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(m[2]){return"}else if("+m[2].replace(reg[0],cb[0]).replace(/d\.(typeof) /,"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){"
}if(m[5]){delete_info=m[4];
var _aStr=[];
_aStr.push("var t# = d."+m[5]+" || {},");
_aStr.push("p# = "+jindo._p_.jindoName+".$Jindo.isArray(t#),");
_aStr.push("i# = 0,");
_aStr.push("j#,");
_aStr.push("leng#,");
_aStr.push("aProp# = [],");
_aStr.push("sProp#;");
_aStr.push("if(p#){");
_aStr.push("	leng# = t#.length;");
_aStr.push("	for(j# = 0; j# < leng#; j#++){aProp#.push(j#);}");
_aStr.push("}else{");
_aStr.push("	for(j# in t#){aProp#.push(j#);}");
_aStr.push("}");
_aStr.push("leng# = aProp#.length;");
_aStr.push("for(var x# = 0; x# < leng#; x#++){");
_aStr.push("	sProp# = aProp#[x#];");
_aStr.push("	if(!p# && !t#.hasOwnProperty(sProp#)){");
_aStr.push("		continue;");
_aStr.push("	}");
_aStr.push("	if((p# && isNaN(i# = parseInt(sProp#, 10))) || (!p# && !t#.propertyIsEnumerable(sProp#))){");
_aStr.push("		continue;");
_aStr.push("	}");
_aStr.push("	d."+m[4]+" = t#[sProp#];");
_aStr.push(m[3]?"d."+m[3]+" = sProp#;":"");
return _aStr.join("").replace(reg[4],lev++)
}if(m[6]){return"}else{"
}if(m[7]){if(m[7]=="for"){return"delete d."+delete_info+"; };"
}else{return"};"
}}return m[0]
})
}else{if(tpl[i]==key){tpl[i]=""
}else{if(tpl[i]){tpl[i]='s[i++] = "'+tpl[i].replace(reg[1],cb[1])+'";'
}}}}tpl=tpl.reverse().join("").replace(new RegExp(leftBrace,"g"),"{").replace(new RegExp(rightBrace,"g"),"}");
var _aStr=[];
_aStr.push("d = d || {};");
_aStr.push("var s = [], i = 0;");
_aStr.push(tpl);
_aStr.push('return s.join("");');
tpl=new Function("d",""+_aStr.join(""));
return tpl
});
jindo.$Template.addEngine("micro",function(sTemplate){return new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+sTemplate.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');")
});
jindo.$Template.addEngine("handlebars",function(sTemplate){if(typeof Handlebars=="undefined"){throw new jindo.$Error(jindo.$Except.NOT_FOUND_HANDLEBARS,"$Template#process")
}return Handlebars.compile(sTemplate)
});
jindo.$Template.addEngine("simple",function(sTemplate){return function(oData){return sTemplate.replace(/\{\{([^{}]*)\}\}/g,function(sMatchA,sMatchB){return(typeof oData[sMatchB]=="undefined")?"":oData[sMatchB]
})
}
});
jindo.$Date=function(src){var a=arguments,t="";
var cl=arguments.callee;
if(src&&src instanceof cl){return src
}if(!(this instanceof cl)){var str="";
for(var i=0,l=a.length;
i<l;
i++){str+="a["+i+"],"
}var init=new Function("cl","a","return new cl("+str.replace(/,$/,"")+");");
try{jindo.$Jindo._maxWarn(arguments.length,7,"$Date");
return init(cl,a)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4voi":[],"4str":["src:String+"],"4num":["src:Numeric"],"4dat":["src:Date+"],"4num2":["src:Numeric","src:Numeric"],"4num3":["src:Numeric","src:Numeric","src:Numeric"],"4num4":["src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num5":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num6":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"],"4num7":["src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric","src:Numeric"]},"$Date");
switch(oArgs+""){case"4voi":this._date=new Date;
break;
case"4num":this._date=new Date(src*1);
break;
case"4str":if(/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)))/.test(src)){this._date=jindo.$Date._makeISO(src)
}else{this._date=cl.parse(src)
}break;
case"4dat":(this._date=new Date).setTime(src.getTime());
this._date.setMilliseconds(src.getMilliseconds());
break;
case"4num2":case"4num3":case"4num4":case"4num5":case"4num6":case"4num7":for(var i=0;
i<7;
i++){if(!jindo.$Jindo.isNumeric(a[i])){a[i]=1
}}this._date=new Date(a[0],a[1],a[2],a[3],a[4],a[5],a[6])
}this._names={};
for(var i in jindo.$Date.names){if(jindo.$Date.names.hasOwnProperty(i)){this._names[i]=jindo.$Date.names[i]
}}};
jindo.$Date._makeISO=function(src){var match=src.match(/(\d{4})(?:-?(\d\d)(?:-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|(?:([-+])(\d\d)(?::?(\d\d))?)?)?)?)?)?/);
var hour=parseInt(match[4]||0,10);
var min=parseInt(match[5]||0,10);
if(match[8]=="Z"){hour+=jindo.$Date.utc
}else{if(match[9]=="+"||match[9]=="-"){hour+=(jindo.$Date.utc-parseInt(match[9]+match[10],10));
min+=parseInt(match[9]+match[11],10)
}}return new Date(match[1]||0,parseInt(match[2]||0,10)-1,match[3]||0,hour,min,match[6]||0,match[7]||0)
};
jindo.$Date._paramCheck=function(aPram,sType){return g_checkVarType(aPram,{s:["nParm:Numeric"],g:[]},"$Date#"+sType)
};
jindo.$Date.names={month:["January","Febrary","March","April","May","June","July","August","September","October","Novermber","December"],s_month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s_day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ampm:["AM","PM"]};
jindo.$Date.utc=9;
jindo.$Date.now=function(){if(Date.now){this.now=function(){return Date.now()
}
}else{this.now=function(){return +new Date()
}
}return this.now()
};
jindo.$Date.prototype.name=function(vName,aValue){var oArgs=g_checkVarType(arguments,{s4str:["sKey:String+","aValue:Array+"],s4obj:["oObject:Hash+"],g:["sKey:String+"]},"$Date#name");
switch(oArgs+""){case"s4str":this._names[vName]=aValue;
break;
case"s4obj":vName=oArgs.oObject;
for(var i in vName){if(vName.hasOwnProperty(i)){this._names[i]=vName[i]
}}break;
case"g":return this._names[vName]
}return this
};
jindo.$Date.parse=function(strDate){var oArgs=g_checkVarType(arguments,{"4str":["sKey:String+"]},"$Date#parse");
var date=new Date(Date.parse(strDate));
if(isNaN(date)||date=="Invalid Date"){throw new jindo.$Error(jindo.$Except.INVALID_DATE,"$Date#parse")
}return date
};
jindo.$Date.prototype.$value=function(){return this._date
};
jindo.$Date.prototype.format=function(strFormat){var oArgs=g_checkVarType(arguments,{"4str":["sFormat:String+"]},"$Date#format");
strFormat=oArgs.sFormat;
var o={};
var d=this._date;
var name=this._names;
var self=this;
return(strFormat||"").replace(/[a-z]/ig,function callback(m){if(o[m]!==undefined){return o[m]
}switch(m){case"d":case"j":o.j=d.getDate();
o.d=(o.j>9?"":"0")+o.j;
return o[m];
case"l":case"D":case"w":case"N":o.w=d.getDay();
o.N=o.w?o.w:7;
o.D=name.s_day[o.w];
o.l=name.day[o.w];
return o[m];
case"S":return(!!(o.S=["st","nd","rd"][d.getDate()]))?o.S:(o.S="th");
case"z":o.z=Math.floor((d.getTime()-(new Date(d.getFullYear(),0,1)).getTime())/(3600*24*1000));
return o.z;
case"m":case"n":o.n=d.getMonth()+1;
o.m=(o.n>9?"":"0")+o.n;
return o[m];
case"L":o.L=self.isLeapYear();
return o.L;
case"o":case"Y":case"y":o.o=o.Y=d.getFullYear();
o.y=(o.o+"").substr(2);
return o[m];
case"a":case"A":case"g":case"G":case"h":case"H":o.G=d.getHours();
o.g=(o.g=o.G%12)?o.g:12;
o.A=o.G<12?name.ampm[0]:name.ampm[1];
o.a=o.A.toLowerCase();
o.H=(o.G>9?"":"0")+o.G;
o.h=(o.g>9?"":"0")+o.g;
return o[m];
case"i":o.i=(((o.i=d.getMinutes())>9)?"":"0")+o.i;
return o.i;
case"s":o.s=(((o.s=d.getSeconds())>9)?"":"0")+o.s;
return o.s;
case"u":o.u=d.getMilliseconds();
return o.u;
case"U":o.U=self.time();
return o.U;
default:return m
}})
};
jindo.$Date.prototype.time=function(nTime){var oArgs=jindo.$Date._paramCheck(arguments,"time");
nTime=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setTime(nTime);
return this;
case"g":return this._date.getTime()
}};
jindo.$Date.prototype.year=function(nYear){var oArgs=jindo.$Date._paramCheck(arguments,"year");
nYear=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setFullYear(nYear);
return this;
case"g":return this._date.getFullYear()
}};
jindo.$Date.prototype.month=function(nMon){var oArgs=jindo.$Date._paramCheck(arguments,"month");
nMon=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setMonth(nMon);
return this;
case"g":return this._date.getMonth()
}};
jindo.$Date.prototype.date=function(nDate){var oArgs=jindo.$Date._paramCheck(arguments,"date");
nDate=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setDate(nDate);
return this;
case"g":return this._date.getDate()
}};
jindo.$Date.prototype.day=function(){return this._date.getDay()
};
jindo.$Date.prototype.hours=function(nHour){var oArgs=jindo.$Date._paramCheck(arguments,"hours");
nHour=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setHours(nHour);
return this;
case"g":return this._date.getHours()
}};
jindo.$Date.prototype.minutes=function(nMin){var oArgs=jindo.$Date._paramCheck(arguments,"minutes");
nMin=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setMinutes(nMin);
return this;
case"g":return this._date.getMinutes()
}};
jindo.$Date.prototype.seconds=function(nSec){var oArgs=jindo.$Date._paramCheck(arguments,"seconds");
nSec=oArgs.nParm;
switch(oArgs+""){case"s":this._date.setSeconds(nSec);
return this;
case"g":return this._date.getSeconds()
}};
jindo.$Date.prototype.isLeapYear=function(){var y=this._date.getFullYear();
return !(y%4)&&!!(y%100)||!(y%400)
};
jindo.$Date.prototype.compare=function(oDate,sType){var oArgs=g_checkVarType(arguments,{"4dat":["oDate:Date+"],"4str":["oDate:Date+","sType:String+"]},"$Date#compare");
oDate=oArgs.oDate;
sType=oArgs.sType;
if(!sType){return oDate-this._date
}else{if(sType==="s"){return Math.floor(oDate/1000)-Math.floor(this._date/1000)
}else{if(sType==="i"){return Math.floor(Math.floor(oDate/1000)/60)-Math.floor(Math.floor(this._date/1000)/60)
}else{if(sType==="h"){return Math.floor(Math.floor(Math.floor(oDate/1000)/60)/60)-Math.floor(Math.floor(Math.floor(this._date/1000)/60)/60)
}else{if(sType==="d"){return Math.floor(Math.floor(Math.floor(Math.floor(oDate/1000)/60)/60)/24)-Math.floor(Math.floor(Math.floor(Math.floor(this._date/1000)/60)/60)/24)
}else{if(sType==="m"){return oDate.getMonth()-this._date.getMonth()
}else{if(sType==="y"){return oDate.getFullYear()-this._date.getFullYear()
}}}}}}}};
jindo.$Window=function(el){var cl=arguments.callee;
if(el instanceof cl){return el
}if(!(this instanceof cl)){try{jindo.$Jindo._maxWarn(arguments.length,1,"$Window");
return new cl(el||window)
}catch(e){if(e instanceof TypeError){return null
}throw e
}}var oArgs=g_checkVarType(arguments,{"4win":["el:Window+"]},"$Window");
this._win=el
};
jindo.$Window.prototype.$value=function(){return this._win
};
jindo.$Window.prototype.resizeTo=function(nWidth,nHeight){var oArgs=g_checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#resizeTo");
this._win.resizeTo(nWidth,nHeight);
return this
};
jindo.$Window.prototype.resizeBy=function(nWidth,nHeight){var oArgs=g_checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"]},"$Window#resizeBy");
this._win.resizeBy(nWidth,nHeight);
return this
};
jindo.$Window.prototype.moveTo=function(nLeft,nTop){var oArgs=g_checkVarType(arguments,{"4num":["nLeft:Numeric","nTop:Numeric"]},"$Window#moveTo");
this._win.moveTo(nLeft,nTop);
return this
};
jindo.$Window.prototype.moveBy=function(nLeft,nTop){var oArgs=g_checkVarType(arguments,{"4num":["nLeft:Numeric","nTop:Numeric"]},"$Window#moveBy");
this._win.moveBy(nLeft,nTop);
return this
};
jindo.$Window.prototype.sizeToContent=function(nWidth,nHeight){var oArgs=g_checkVarType(arguments,{"4num":["nWidth:Numeric","nHeight:Numeric"],"4voi":[]},"$Window#sizeToContent");
if(this._win.sizeToContent){this._win.sizeToContent()
}else{if(arguments.length!=2){var innerX,innerY;
var self=this._win;
var doc=this._win.document;
if(self.innerHeight){innerX=self.innerWidth;
innerY=self.innerHeight
}else{if(doc.documentElement&&doc.documentElement.clientHeight){innerX=doc.documentElement.clientWidth;
innerY=doc.documentElement.clientHeight
}else{if(doc.body){innerX=doc.body.clientWidth;
innerY=doc.body.clientHeight
}}}var pageX,pageY;
var test1=doc.body.scrollHeight;
var test2=doc.body.offsetHeight;
if(test1>test2){pageX=doc.body.scrollWidth;
pageY=doc.body.scrollHeight
}else{pageX=doc.body.offsetWidth;
pageY=doc.body.offsetHeight
}nWidth=pageX-innerX;
nHeight=pageY-innerY
}this._win.resizeBy(nWidth,nHeight)
}return this
};
var aClass=["$Agent","$Ajax","$A","$Cookie","$Date","$Document","$Element","$ElementList","$Event","$Form","$Fn","$H","$Json","$S","$Template","$Window"];
var sClass,oClass;
for(var i=0,l=aClass.length;
i<l;
i++){sClass=aClass[i];
oClass=jindo[sClass];
if(oClass){oClass.addExtension=(function(sClass){return function(sMethod,fpFunc){jindo._p_.addExtension(sClass,sMethod,fpFunc);
return this
}
})(sClass)
}}var hooks=["$Element","$Event"];
for(var i=0,l=hooks.length;
i<l;
i++){var _className=hooks[i];
if(jindo[_className]){jindo[_className].hook=(function(className){var __hook={};
return function(sName,vRevisionKey){var oArgs=jindo.$Jindo.checkVarType(arguments,{g:["sName:String+"],s4var:["sName:String+","vRevisionKey:Variant"],s4obj:["oObj:Hash+"]},"jindo."+className+".hook");
switch(oArgs+""){case"g":return __hook[oArgs.sName.toLowerCase()];
case"s4var":if(vRevisionKey==null){delete __hook[oArgs.sName.toLowerCase()]
}else{__hook[oArgs.sName.toLowerCase()]=vRevisionKey
}return this;
case"s4obj":var oObj=oArgs.oObj;
for(var i in oObj){__hook[i.toLowerCase()]=oObj[i]
}return this
}}
})(_className)
}}if(!jindo.$Jindo.isUndefined(window)&&!(jindo._p_._j_ag.indexOf("IEMobile")==-1&&jindo._p_._j_ag.indexOf("Mobile")>-1&&jindo._p_._JINDO_IS_SP)){(new jindo.$Element(window)).attach("unload",function(e){jindo.$Element.eventManager.cleanUpAll()
})
}if(typeof define==="function"&&define.amd&&define.amd.jindo){define("jindo",[],function(){return jindo
})
}if(typeof window!="undefined"){for(prop in jindo){if(jindo.hasOwnProperty(prop)){window[prop]=jindo[prop]
}}};