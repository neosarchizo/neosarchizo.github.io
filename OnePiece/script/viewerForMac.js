var ComicViewer=$Class({$init:function(htOption){this._el=[];
this._wel=[];
this._fn=[];
this._wfn=[];
this._variable=[];
this._fnSliderTimer=null;
this._oSlider=null;
this._sliderLength=0;
this._oneStepLength=0;
this.option(htOption||{});
this._variable.bookmark=new Bookmark(this);
this._variable.purchase=new Purchase(this);
if($("preview").value=="false"){this._variable.recentPage=new RecentPage(this)
}var oOptions={aFlipSpeed:[3,5,10,15,20,25,30]};
this._variable.viewerSetting=new ViewerSetting(this,oOptions);
if($("comicMagazine").value=="true"){this._variable.chapter=new Chapter(this)
}this._variable.viewerLayer=new ViewerLayer(this);
this._assignHTMLElements();
this._initVariable();
this._attachEvents();
this._initScreenVariable();
this._viewerSetup();
this._setSlider();
this.moveSlider(this)
},_assignHTMLElements:function(){this._el.minButton=$("minButton");
this._el.maxButton=$("maxButton");
this._el.closeButton=$("closeButton");
this._el["100Button"]=$("100Button");
this._el.fullButton=$("fullButton");
this._el.singleViewButton=$("singleViewButton");
this._el.doubleViewButton=$("doubleViewButton");
this._el.prevSizeButton=$("prevSizeButton");
this._el.headerBar=$("headerBar");
this._el.bookmarkHeader=$("bookmarkHeader");
this._el.chapterHeader=$("chapterHeader");
this._el.autoFlipButton=$("autoFlipButton");
this._el.previousButton=$("previousButton");
this._el.nextButton=$("nextButton");
this._el.previousBigButton=$("previousBigButton");
this._el.nextBigButton=$("nextBigButton");
this._el.menubarButton=$("menubarButton");
this._el.header=$("header");
this._el.lnb=$$.getSingle(".lnb");
this._el.contentsDiv=$("contentsDiv");
this._el.navigatorLayer=$$.getSingle(".tool_bar_wrap");
this._el.navigator=$$.getSingle(".tool_bar");
this._el.toolBarCloseButton=$("toolBarCloseButton");
this._el.pageNoOfSlideBar=$("pageNoOfSlideBar");
this._el.navigatePoint=$("navigatePoint");
this._el.currentPageNo=$("currentPageNo");
this._el.selectBoxLayer=$("selectBoxLayer");
this._el.totalPageCount=$("totalPageCount");
this._el.container=$("container");
this._el.bookmarkDiv=$("bookmarkDiv");
this._el.chapterDiv=$("chapterDiv");
this._el.bookmarkLi=$("bookmarkLi");
this._el.chapterLi=$("chapterLi");
this._el.nextVolumePurchaseAndMoveButtonDiv=$("nextVolumePurchaseAndMoveButtonDiv");
this._el.volumePurchaseAndMoveButtonDiv=$("volumePurchaseAndMoveButtonDiv");
this._el.pageNoTooltip=$("pageNoTooltip");
this._el.wrap=$("wrap");
this._el.elDoc=document;
this._wel.minButton=$Element(this._el.minButton);
this._wel.maxButton=$Element(this._el.maxButton);
this._wel.closeButton=$Element(this._el.closeButton);
this._wel.singleViewButton=$Element(this._el.singleViewButton);
this._wel.doubleViewButton=$Element(this._el.doubleViewButton);
this._wel.fullButton=$Element(this._el.fullButton);
this._wel.headerBar=$Element(this._el.headerBar);
this._wel.autoFlipButton=$Element(this._el.autoFlipButton);
this._wel.previousButton=$Element(this._el.previousButton);
this._wel.nextButton=$Element(this._el.nextButton);
this._wel.contentsDiv=$Element(this._el.contentsDiv);
this._wel["100Button"]=$Element(this._el["100Button"]);
this._wel.welDoc=$Element(this._el.elDoc);
this._wel.pageNoOfSlideBar=$Element(this._el.pageNoOfSlideBar);
this._wel.navigatePoint=$Element(this._el.navigatePoint);
this._wel.totalPageCount=$Element(this._el.totalPageCount);
this._wel.wrap=$Element(this._el.wrap);
this._wel.bookmarkDiv=$Element(this._el.bookmarkDiv);
this._wel.chapterDiv=$Element(this._el.chapterDiv);
this._wel.bookmarkLi=$Element(this._el.bookmarkLi);
this._wel.chapterLi=$Element(this._el.chapterLi);
this._wel.nextVolumePurchaseAndMoveButtonDiv=$Element(this._el.nextVolumePurchaseAndMoveButtonDiv);
this._wel.volumePurchaseAndMoveButtonDiv=$Element(this._el.volumePurchaseAndMoveButtonDiv);
this._wel.pageNoTooltip=$Element(this._el.pageNoTooltip);
this._wel.navigatorLayer=$Element(this._el.navigatorLayer);
this._wel.firstPage=$Element("<div>");
this._wel.firstImage=$Element("<img>");
this._wel.firstPage.append(this._wel.firstImage);
this._wel.secondPage=$Element("<div>");
this._wel.secondImage=$Element("<img>");
this._wel.secondPage.append(this._wel.secondImage);
this._wel.lastPage=$Element("lastPage");
this._wel.volumeSelectBox=new jindo.SelectBox(this._el.selectBoxLayer,{nWidth:120,bUseLayerPosition:false})
},_attachEvents:function(){this._fn.windowMove=$Fn(this._moveEvent,this).bind();
this._fn.windowMoveStop=$Fn(this._stopMoveEvent,this).bind();
this._wfn.minButtonClick=$Fn(this._onClickMin,this);
this._wfn.maxButtonClick=$Fn(this._onClickMax,this);
this._wfn.closeButtonClick=$Fn(this._onClickClose,this);
this._wfn["100ButtonClick"]=$Fn(this._onClick100Button,this);
this._wfn.fullButtonClick=$Fn(this._onClickFullButton,this);
this._wfn.singleViewButtonClick=$Fn(this._onClickSingleViewButton,this);
this._wfn.doubleViewButtonClick=$Fn(this._onClickDoubleViewButton,this);
this._wfn.prevSizeButtonClick=$Fn(this._onClickPrevSizeButton,this);
this._wfn.headerBarMoveStart=$Fn(this._onMoveStartHeaderBar,this);
this._wfn.autoFlipButtonClick=$Fn(this._onClickAutoFlipButton,this);
this._wfn.previousButtonClick=$Fn(this._onClickPreviousButton,this);
this._wfn.nextButtonClick=$Fn(this._onClickNextButton,this);
this._wfn.menubarButtonClick=$Fn(this._onClickMenubarButton,this);
this._wfn.toolBarCloseButtonClick=$Fn(this._onClickMenubarButton,this);
this._wfn.headerBarMouseOver=$Fn(this._onMouseOverMenuBar,this);
this._wfn.navigatorMouseOver=$Fn(this._onMouseOverMenuBar,this);
this._wfn.volumeSelectBoxClick=$Fn(this._onClickVolumeSelectBox,this);
this._wfn.detachKeyBoardEvent=$Fn(this.detachKeyBoardEvent,this);
this._wfn.attachKeyBoardEvent=$Fn(this.attachKeyBoardEvent,this);
this._wfn.keyboardEventListener=$Fn(this._keyboardEventListener,this);
this._wfn.mouseEventListener=$Fn(this._mouseEventListener,this);
this._wfn.minButtonClick.attach(this._el.minButton,"click");
this._wfn.maxButtonClick.attach(this._el.maxButton,"click");
this._wfn.closeButtonClick.attach(this._el.closeButton,"click");
this._wfn["100ButtonClick"].attach(this._el["100Button"],"click");
this._wfn.fullButtonClick.attach(this._el.fullButton,"click");
this._wfn.singleViewButtonClick.attach(this._el.singleViewButton,"click");
this._wfn.doubleViewButtonClick.attach(this._el.doubleViewButton,"click");
this._wfn.prevSizeButtonClick.attach(this._el.prevSizeButton,"click");
this._wfn.headerBarMoveStart.attach(this._el.headerBar,"mousedown");
this._wfn.headerBarMoveStart.attach(this._el.bookmarkHeader,"mousedown");
this._wfn.headerBarMoveStart.attach(this._el.chapterHeader,"mousedown");
this._wfn.autoFlipButtonClick.attach(this._el.autoFlipButton,"click");
this._wfn.previousButtonClick.attach(this._el.previousButton,"click");
this._wfn.nextButtonClick.attach(this._el.nextButton,"click");
this._wfn.previousButtonClick.attach(this._el.previousBigButton,"click");
this._wfn.nextButtonClick.attach(this._el.nextBigButton,"click");
this._wfn.menubarButtonClick.attach(this._el.menubarButton,"click");
this._wfn.toolBarCloseButtonClick.attach(this._el.toolBarCloseButton,"click");
this._wfn.headerBarMouseOver.attach(this._el.header,"mouseover");
this._wfn.navigatorMouseOver.attach(this._el.navigatorLayer,"mouseover");
this._wfn.keyboardEventListener.attach(this._el.elDoc,"keydown");
this._wfn.mouseEventListener.attach(this._el.container,"mousewheel");
this._wel.volumeSelectBox.attach({blur:this._wfn.attachKeyBoardEvent.bind(),open:this._wfn.detachKeyBoardEvent.bind(),click:this._wfn.volumeSelectBoxClick.bind()})
},_initVariable:function(){this._variable.osInfo=jindo.$Agent().os();
this._variable.viewType=application.getViewType();
this._variable.contentsPath=$("contentsPath").value;
this._variable.contentsNo=$("contentsNo").value;
this._variable.volumeNo=$("volumeNo").value;
this._variable.viewerTypeCode=$("viewerTypeCode").value;
this._variable.nTotalPage=parseInt($("totalPage").value);
this._variable.nTotalPageCount=this._variable.nTotalPage;
this._variable.viewerDomainUrl=$("viewerDomainUrl").value;
this._variable.userId=$("userId").value;
this._variable.nAsideWidth=parseInt($Element("asideDiv").css("width").split("px")[0]);
this._variable.nMinimumWidth=400;
this._variable.nMinimumHeight=600;
if(application.getWindowSize()=="max"){this._variable.maximize=true
}else{this._variable.maximize=false
}},_viewerSetup:function(){application.setUserId(this._variable.userId);
application.changeVolume(this._variable.contentsNo,this._variable.volumeNo);
this._wel.firstPage.addClass("page");
this._wel.secondPage.addClass("page");
this._wel.firstImage.attr("width","100%");
this._wel.secondImage.attr("width","100%");
if(this._variable.viewType=="double"){this._onClickDoubleViewButton()
}else{this._onClickSingleViewButton()
}this._wel.pageNoOfSlideBar.text(this._el.currentPageNo.value);
this._wel.navigatorLayer.css("display","");
this._variable.bookmark.checkBookmarkPage();
if(application.getAutoFlip()=="on"){this._onClickAutoFlipButton()
}if(this._variable.viewerTypeCode!="NORMAL_ORDER"){this._wel.contentsDiv.addClass("reverse")
}this._oLayerManager=new jindo.LayerManager(this._el.lnb);
this._oLayerManager.attach({beforeHide:$Fn(function(oCustomEvent){oCustomEvent.stop();
this._onClickMenubarButton()
},this).bind()});
this._oLayerManager.link(this._el.header).link($$.getSingle(".tool_bar"));
this._variable.fHideMenubar=$Fn(this._onClickMenubarButton,this).delay(2);
this.checkViewerVersionForMac();
this.systemButtonHideForMac()
},_keyboardEventListener:function(e){var eKey=e.key();
if(this._variable.viewerTypeCode=="NORMAL_ORDER"){if(eKey.left||eKey.up){this._wel.previousButton.fireEvent("click");
this._onClickMenubarButton();
return false
}else{if(eKey.right||eKey.down||eKey.keyCode==32){this._wel.nextButton.fireEvent("click");
this._onClickMenubarButton();
return false
}}}else{if(eKey.left||eKey.down||eKey.keyCode==32){this._wel.nextButton.fireEvent("click");
this._onClickMenubarButton();
return false
}else{if(eKey.right||eKey.up){this._wel.previousButton.fireEvent("click");
this._onClickMenubarButton();
return false
}}}if(eKey.enter){this._onClickMax();
return false
}},detachKeyBoardEvent:function(){this._wfn.keyboardEventListener.detach(this._el.elDoc,"keydown")
},attachKeyBoardEvent:function(){this._wfn.keyboardEventListener.attach(this._el.elDoc,"keydown")
},_mouseEventListener:function(e){var eMouse=e.mouse();
if(eMouse.delta>0){this._wel.previousButton.fireEvent("click")
}else{if(eMouse.delta<0){this._wel.nextButton.fireEvent("click")
}}},_initScreenVariable:function(){var nViewerDefaultWidth=1024-6;
var nViewerDefaultHeight=768-6;
if(screen.availWidth<=nViewerDefaultWidth){this._variable.myDefaultWidth=screen.availWidth;
this._variable.myDefaultHeight=nViewerDefaultHeight
}else{if(screen.availHeight<=nViewerDefaultHeight){this._variable.myDefaultWidth=nViewerDefaultWidth;
this._variable.myDefaultHeight=screen.availHeight
}else{this._variable.myDefaultWidth=nViewerDefaultWidth;
this._variable.myDefaultHeight=nViewerDefaultHeight
}}$("currentWidth").value=this._variable.myDefaultWidth;
$("currentHeight").value=this._variable.myDefaultHeight;
application.registerNativeCallback("app_resize",this.changeWindowSize);
application.registerNativeCallback("app_full",this.setFullState);
application.registerNativeCallback("app_max",this.setMaxState)
},_onClickClose:function(){var currentPageNo=parseInt(this._el.currentPageNo.value);
var readPercent=parseInt(currentPageNo/this._variable.nTotalPage*100);
this.saveRecentInfo(currentPageNo,readPercent)
},saveRecentInfo:function(currentPageNo,readPercent){try{var oAjax=new $Ajax("/comicViewer/api/recentPageSave.nhn",{type:"xhr",method:"get",timeout:5,onload:function(res){var resultJson=res.json();
if(resultJson!=null&&resultJson.success){application.setRecentPage(parseInt($("contentsNo").value),parseInt($("volumeNo").value),currentPageNo-1)
}application.viewerClose()
}});
oAjax.request({contentsNo:parseInt($("contentsNo").value),volumeNo:parseInt($("volumeNo").value),currentPageNo:currentPageNo-1,deviceId:"PCVIEWER",serviceType:"COMIC",isLast:(readPercent>=100)?true:false,recentReadPercent:(readPercent>=100)?100:readPercent})
}catch(e){JEagleEyeClient.sendError("이어보기 정보 저장 오류 : "+e.message);
application.viewerClose()
}},_onClickMax:function(){if(this._variable.maximize==false){this._variable.maximize=true;
this._wel.maxButton.attr("title","이전크기로");
application.changeWindowSizeByType("max")
}else{this._variable.maximize=false;
this._wel.maxButton.attr("title","최대화");
application.changeWindowSizeByType("prevSize")
}},_onClickMin:function(){application.changeWindowSizeByType("min")
},_onClick100Button:function(){this._wel["100Button"].css("display","none");
this._wel.maxButton.attr("title","최대화");
this._variable.maximize=false;
if(this._variable.viewType=="double"){this._onClickDoubleViewButton()
}else{this._onClickSingleViewButton()
}},_onClickFullButton:function(){this._wel.fullButton.appendHTML('<span class="blind">선택됨</span>');
this._wel.wrap.addClass("full");
if(this._wel.bookmarkLi.hasClass("on")){this._wel.bookmarkDiv.hide();
this._wel.wrap.removeClass("aside_open")
}else{if(this._wel.chapterLi.hasClass("on")){this._wel.chapterDiv.hide();
this._wel.wrap.removeClass("aside_open")
}}application.changeWindowSizeByType("full")
},_onClickSingleViewButton:function(){this._variable.viewType="single";
this._wel.singleViewButton.addClass("on");
this._wel.doubleViewButton.removeClass("on");
this._variable.nTotalPageCount=this._variable.nTotalPage;
this._wel.totalPageCount.text(this._variable.nTotalPage);
this._wel.contentsDiv.empty();
this._wel.contentsDiv.append(this._wel.firstPage);
this._setContentsImage(this._el.currentPageNo.value,this._el.currentPageNo.value,false);
application.setViewType(this._variable.viewType);
var nAdditoryWidth=0;
if(this._wel.wrap.hasClass("aside_open")){nAdditoryWidth=this._variable.nAsideWidth
}this._variable.bookmark.checkBookmarkPage();
this._resizeContentsWidthForViewType(nAdditoryWidth)
},_resizeContentsWidthForViewType:function(nAdditoryWidth){if(this._variable.maximize==false){if(this._variable.viewType=="single"){application.changeWindowSize(this._variable.myDefaultWidth/2+nAdditoryWidth,this._variable.myDefaultHeight)
}else{application.changeWindowSize(this._variable.myDefaultWidth+nAdditoryWidth,this._variable.myDefaultHeight)
}}else{this.changeWindowSize(screen.availWidth,screen.availHeight,this)
}},resizeContentsWidth:function(nAdditoryWidth){if(comicViewer._variable.maximize==false){var nTargetWidth=parseInt($("currentWidth").value)+nAdditoryWidth;
var nTargetHeight=parseInt($("currentHeight").value);
var nMinimumWidth=comicViewer._variable.nMinimumWidth;
var nMinimumHeight=comicViewer._variable.nMinimumHeight;
if(nMinimumWidth>nTargetWidth){nTargetWidth=nMinimumWidth
}if(nMinimumHeight>nTargetHeight){nTargetHeight=nMinimumHeight
}application.changeWindowSize(nTargetWidth,nTargetHeight)
}},_onClickDoubleViewButton:function(){this._variable.viewType="double";
this._wel.doubleViewButton.addClass("on");
this._wel.singleViewButton.removeClass("on");
if(this._el.currentPageNo.value>0&&this._el.currentPageNo.value%2==0){this._el.currentPageNo.value=parseInt(this._el.currentPageNo.value)-1
}if(this._variable.nTotalPage%2!=0){this._variable.nTotalPageCount=parseInt(this._variable.nTotalPage+1)
}this._wel.totalPageCount.text(this._variable.nTotalPageCount);
this._wel.contentsDiv.empty();
if(this._variable.viewerTypeCode=="NORMAL_ORDER"){this._wel.contentsDiv.append(this._wel.firstPage);
this._wel.contentsDiv.append(this._wel.secondPage)
}else{this._wel.contentsDiv.append(this._wel.secondPage);
this._wel.contentsDiv.append(this._wel.firstPage)
}this._setContentsImage(this._el.currentPageNo.value,parseInt(this._el.currentPageNo.value)+1,false);
application.setViewType(this._variable.viewType);
var nAdditoryWidth=0;
if(this._wel.wrap.hasClass("aside_open")){nAdditoryWidth=this._variable.nAsideWidth
}this._variable.bookmark.checkBookmarkPage();
this._resizeContentsWidthForViewType(nAdditoryWidth)
},_onClickPrevSizeButton:function(){this._wel.fullButton.empty();
this._wel.wrap.removeClass("full");
if(this._wel.bookmarkLi.hasClass("on")){this._wel.bookmarkDiv.show();
this._wel.wrap.addClass("aside_open")
}else{if(this._wel.chapterLi.hasClass("on")){this._wel.chapterDiv.show();
this._wel.wrap.addClass("aside_open")
}}if(this._variable.maximize){application.changeWindowSizeByType("max")
}else{application.changeWindowSizeByType("prevSize")
}},_onClickAutoFlipButton:function(){if(this._wel.autoFlipButton.hasClass("on")){this._wel.autoFlipButton.removeClass("on");
clearInterval(this._variable.autoFlipInterval);
application.setAutoFlip("off")
}else{this._wel.autoFlipButton.addClass("on");
this._variable.autoFlipInterval=setInterval($Fn(this._onClickNextButton,this).bind(),parseInt(application.getAutoFlipSpeed())*1000);
application.setAutoFlip("on")
}},setAutoFlipSpeed:function(){if(application.getAutoFlip()=="on"){clearInterval(this._variable.autoFlipInterval);
this._variable.autoFlipInterval=setInterval($Fn(this._onClickNextButton,this).bind(),parseInt(application.getAutoFlipSpeed())*1000)
}},_onClickPreviousButton:function(e){if(e!=null){var eMouse=e.mouse();
if(eMouse.middle){e.stopDefault();
return false
}}if(application.getFlipSound()=="on"){application.playSound()
}var nFirstPageNoForSingle=parseInt(this._el.currentPageNo.value)-1;
var nFirstPageNo=parseInt(this._el.currentPageNo.value)-2;
var nSecondPageNo=parseInt(this._el.currentPageNo.value)-1;
if(this._variable.viewType=="double"&&nFirstPageNo<=0||this._variable.viewType=="single"&&nFirstPageNoForSingle<=0){this._variable.viewerLayer.showFirstPageLayer();
$Fn(this._variable.viewerLayer.hideFirstPageLayer,this._variable.viewerLayer).delay(2);
return
}if(this._variable.viewType=="double"){this._setContentsImage(nFirstPageNo,nSecondPageNo,true)
}else{this._setContentsImage(nFirstPageNoForSingle,0,true)
}this._variable.bookmark.checkBookmarkPage();
this._variable.bookmark.clearSelectBookmark();
if(this._variable.chapter!=null){this._variable.chapter.clearSelectChapter()
}e.currentElement.blur()
},_onClickNextButton:function(e){if(e!=null){var eMouse=e.mouse();
if(eMouse.middle){e.stopDefault();
return false
}}if(application.getFlipSound()=="on"){application.playSound()
}var nFirstPageNoForSingle=parseInt(this._el.currentPageNo.value)+1;
var nFirstPageNo=parseInt(this._el.currentPageNo.value)+2;
var nSecondPageNo=parseInt(this._el.currentPageNo.value)+3;
if(this._variable.viewType=="double"&&nFirstPageNo>this._variable.nTotalPage||this._variable.viewType=="single"&&nFirstPageNoForSingle>this._variable.nTotalPage){if(application.getAutoFlip()=="on"){clearInterval(this._variable.autoFlipInterval)
}this._variable.viewerLayer.showLastVolumeLayer();
this._exposeViewAuthButton();
return
}if(this._variable.viewType=="double"){this._setContentsImage(nFirstPageNo,nSecondPageNo,true)
}else{this._setContentsImage(nFirstPageNoForSingle,0,true)
}this._variable.bookmark.checkBookmarkPage();
this._variable.bookmark.clearSelectBookmark();
if(this._variable.chapter!=null){this._variable.chapter.clearSelectChapter()
}e.currentElement.blur()
},_onClickMenubarButton:function(){this._variable.viewerSetting.hide();
this._variable.oTransition=new jindo.Transition().attach({start:$Fn(function(){this._wfn.headerBarMouseOver.detach(this._el.headerBar,"mouseover");
this._wfn.navigatorMouseOver.detach(this._el.navigatorLayer,"mouseover")
},this).bind(),end:$Fn(function(){this._wfn.headerBarMouseOver.attach(this._el.headerBar,"mouseover");
this._wfn.navigatorMouseOver.attach(this._el.navigatorLayer,"mouseover")
},this).bind()});
this._variable.oTransition.queue(300,[[this._el.lnb,{"@top":jindo.Effect.linear("-45px")}],[this._el.navigator,{"@top":jindo.Effect.linear("49px")}]]);
this._variable.oTransition.start();
this._wel.pageNoTooltip.hide()
},_onMouseOverMenuBar:function(){this._variable.fHideMenubar.stopDelay();
if(this._variable.oTransition!=null&&this._variable.oTransition.isPlaying()==false){this._variable.oTransition=new jindo.Transition();
this._variable.oTransition.queue(300,[[this._el.lnb,{"@top":jindo.Effect.linear("0px")}],[this._el.navigator,{"@top":jindo.Effect.linear("0px")}]]);
this._variable.oTransition.start()
}},_onMoveStartHeaderBar:function(e){if(e.mouse().left){application.moveStartPoint(e.pos().clientX,e.pos().clientY);
this._wel.welDoc.attach("mousemove",this._fn.windowMove);
this._wel.welDoc.attach("mouseup",this._fn.windowMoveStop)
}},_moveEvent:function(e){if(e.mouse().left){application.movingPoint(e.pos().clientX,e.pos().clientY)
}},_stopMoveEvent:function(e){this._wel.welDoc.detach("mousemove",this._fn.windowMove);
this._wel.welDoc.detach("mouseup",this._fn.windowMoveStop)
},changeWindowSize:function(nWidth,nHeight,viewerObj){if(viewerObj==null){viewerObj=comicViewer
}var myWidth=viewerObj._variable.myDefaultWidth;
var myHeight=viewerObj._variable.myDefaultHeight;
var nViewerRateForViewType=2;
if(screen.availWidth<=1024||screen.availHeight<=768){if(application.getViewType()=="single"){myWidth=screen.availWidth/2;
nViewerRateForViewType=1
}else{myWidth=screen.availWidth
}myHeight=screen.availHeight
}else{if(application.getViewType()=="single"){myWidth=myWidth/2;
nViewerRateForViewType=1
}}if($Element("wrap").hasClass("aside_open")){var additoryWidth=parseInt(viewerObj._variable.bookmark._value.nLeftMenuWidth);
$Element("100Button").css("display","none")
}else{$Element("100Button").css("display","none")
}$("currentWidth").value=nWidth;
$("currentHeight").value=nHeight;
viewerObj.moveSlider(comicViewer);
viewerObj.calculateImageRate(nHeight,nWidth,nViewerRateForViewType,viewerObj)
},calculateImageRate:function(sHeight,sWidth,nViewerRateForViewType,viewerObj){var nHeight=parseInt(sHeight)-50;
var nWidth=parseInt(sWidth);
if(this._wel.wrap.hasClass("aside_open")){nWidth=nWidth-parseInt(viewerObj._variable.bookmark._value.nLeftMenuWidth)
}var standardImage=new Image();
standardImage.onload=function(){var nImageRate=viewerObj.round(standardImage.height/(standardImage.width*nViewerRateForViewType),2);
var currentRate=viewerObj.round(nHeight/nWidth,2);
var welWrap=$Element("wrap");
var welPageDiv=$Element("contentsDiv");
if(currentRate<=nImageRate){viewerObj.setContentsImageHeight(nHeight+"px");
welWrap.addClass("vertical_fix");
if(viewerObj.isLastPage()){welPageDiv.css("width",viewerObj.getFirstImageWidth()*2+"px")
}}else{viewerObj.setContentsImageHeight("");
welWrap.removeClass("vertical_fix");
welPageDiv.css("width","100%")
}};
standardImage.src=application.generateImageUrl(parseInt(viewerObj._el.currentPageNo.value))
},round:function(nNumber,pos){var digits=Math.pow(10,pos);
var num=Math.round(nNumber*digits)/digits;
return num.toFixed(pos)
},getFirstImageWidth:function(){return parseInt(this._wel.firstImage.css("width").split("px")[0])
},setContentsImageHeight:function(sHeightPx){this._wel.firstImage.css("height",sHeightPx);
this._wel.secondImage.css("height",sHeightPx)
},isLastPage:function(){return this._variable.isLastPage
},_setContentsImage:function(nFirstPageNo,nSecondPageNo,sliderMoveYn){var nCurrentPageNo=nFirstPageNo;
this._variable.isLastPage=false;
if(this._variable.viewType=="double"){this._wel.firstImage.attr("src",application.generateImageUrl(parseInt(nFirstPageNo)));
if(parseInt(nSecondPageNo)<=this._variable.nTotalPage){this._wel.secondPage.removeClass("last");
this._wel.lastPage.hide();
this._wel.secondImage.attr("src",application.generateImageUrl(parseInt(nSecondPageNo)))
}else{this._wel.secondPage.addClass("last");
this._wel.secondImage.attr("src","http://static.naver.net/book/comicviewer/blank.png");
this._wel.lastPage.appendTo(this._wel.secondPage);
this._wel.lastPage.show();
this._variable.isLastPage=true
}}else{if(this._variable.nTotalPage<parseInt(nFirstPageNo)){nFirstPageNo=this._variable.nTotalPage;
nCurrentPageNo=this._variable.nTotalPage
}this._wel.firstImage.attr("src",application.generateImageUrl(parseInt(nFirstPageNo)))
}this._wel.pageNoOfSlideBar.text(nCurrentPageNo);
this._el.currentPageNo.value=nCurrentPageNo;
if(sliderMoveYn){this.moveSlider(this)
}},_onClickVolumeSelectBox:function(e){this._wel.volumeSelectBox.close();
e.stop();
if(application.getAutoFlip()=="on"){clearInterval(this._variable.autoFlipInterval)
}var selectedVolumeNo=this._wel.volumeSelectBox.getOptions()[e.nIndex].value;
this._wel.volumePurchaseAndMoveButtonDiv.empty();
var oAjax=new $Ajax("/comicViewer/api/volumeAccessAuth.nhn",{type:"xhr",method:"get",onload:$Fn(function(res){var resultJson=res.json();
if(resultJson.success){if(resultJson.result.rightCheck){location.href=this._variable.viewerDomainUrl+"/comicViewer/macViewer.nhn?contentsNo="+this._variable.contentsNo+"&volumeNo="+selectedVolumeNo
}else{if(resultJson.result.lendFreeYn=="Y"||resultJson.result.buyFreeYn=="Y"){this._variable.purchase.purchaseFreeVolume(selectedVolumeNo)
}else{this._variable.purchase.openPurchaseLayerForSelectBox(selectedVolumeNo);
var tpl=$Template("tmpl_volumePurchaseAndMoveButtonDiv");
this._wel.volumePurchaseAndMoveButtonDiv.appendHTML(tpl.process(resultJson.result));
this._variable.purchase.bindLendButton();
this._variable.purchase.bindBuyButton()
}}}else{JEagleEyeClient.sendError("다음 이동할 볼륨 정보를 가져오기 오류");
alert("권한 정보를 가져오지 못했습니다. 뷰어 재 실행 후 다시 시도해주세요.")
}},this).bind(),timeout:2,ontimeout:$Fn(function(){JEagleEyeClient.sendError("다음 이동할 볼륨 정보 가져오기 실패. timeout!");
alert("권한 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.")
},this).bind(),onerror:$Fn(function(){JEagleEyeClient.sendError("다음 이동할 볼륨 정보를 가져오기 오류");
alert("권한 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.")
},this).bind(),async:false});
oAjax.request({contentsNo:parseInt(this._variable.contentsNo),volumeNo:parseInt(selectedVolumeNo),preview:$("preview").value})
},moveSlider:function(elViewr){var fnTimer=null;
fnTimer=setTimeout(function(){if(elViewr._oSlider==null){return
}elViewr._sliderLength=jindo.$Element($("slideBar")).width()-26;
elViewr._oneStepLength=0;
if(elViewr._variable.viewType=="single"){elViewr._oneStepLength=elViewr._sliderLength/(elViewr._variable.nTotalPageCount-1)
}else{elViewr._oneStepLength=elViewr._sliderLength/(elViewr._variable.nTotalPageCount/2-1)
}var progressedLength=0;
if(elViewr._variable.viewType=="single"){progressedLength=elViewr._oneStepLength*(elViewr._el.currentPageNo.value-1)
}else{progressedLength=elViewr._oneStepLength*(Math.round(elViewr._el.currentPageNo.value/2)-1)
}if(elViewr._oSlider!=null){elViewr._oSlider.positions(0,progressedLength,false)
}clearTimeout(fnTimer)
},100)
},_setSlider:function(){this._sliderLength=jindo.$Element($("slideBar")).width()-26;
this._oneStepLength=0;
if(this._variable.viewType=="single"){this._oneStepLength=this._sliderLength/(this._variable.nTotalPageCount-1)
}else{this._oneStepLength=this._sliderLength/(this._variable.nTotalPageCount/2-1)
}this._oSlider=new jindo.Slider(jindo.$("slideBar"),{nMinValue:100,nMaxValue:200,bDragOnTrack:false,bJump:true}).attach({beforeChange:function(oCustomEvent){var progressedLength=oCustomEvent.nPos;
if(progressedLength<0){progressedLength=0
}if(progressedLength>comicViewer._sliderLength){progressedLength=comicViewer._sliderLength
}if(comicViewer._variable.viewType=="single"){comicViewer._el.currentPageNo.value=(Math.round((progressedLength/comicViewer._oneStepLength))+1)
}else{comicViewer._el.currentPageNo.value=(Math.round((progressedLength/comicViewer._oneStepLength))+1)*2-1
}$Element($("pageNo")).text(comicViewer._el.currentPageNo.value);
$("pageNoTooltip").style.display="block";
comicViewer._variable.bookmark.checkBookmarkPage()
},change:function(oCustomEvent){if(comicViewer._fnSliderTimer!=null){clearTimeout(comicViewer._fnSliderTimer)
}comicViewer._fnSliderTimer=setTimeout(function(){if(comicViewer._variable.viewType=="single"){comicViewer._setContentsImage(comicViewer._el.currentPageNo.value,comicViewer._el.currentPageNo.value,false)
}else{comicViewer._setContentsImage(comicViewer._el.currentPageNo.value,parseInt(comicViewer._el.currentPageNo.value)+1,false)
}$("pageNoTooltip").style.display="none";
clearTimeout(comicViewer._fnSliderTimer)
},200)
}})
},goPage:function(targetPageNo){targetPageNo++;
if(this._variable.viewType=="double"){if(targetPageNo%2==0){this._el.currentPageNo.value=targetPageNo-3
}else{this._el.currentPageNo.value=targetPageNo-2
}}else{this._el.currentPageNo.value=targetPageNo-1
}this._onClickNextButton()
},getCurrentPageNo:function(){return this._el.currentPageNo.value
},_exposeViewAuthButton:function(){this._wel.nextVolumePurchaseAndMoveButtonDiv.empty();
var oAjax=new $Ajax("/comicViewer/api/nextVolumeAccessAuth.nhn",{type:"xhr",method:"get",onload:$Fn(function(res){var resultJson=res.json();
if(resultJson.success){var tpl=$Template("tmpl_nextVolumePurchaseAndMoveButtonDiv");
this._wel.nextVolumePurchaseAndMoveButtonDiv.appendHTML(tpl.process(resultJson.result));
this._variable.purchase.bindFreeView();
this._variable.purchase.bindNextView();
this._variable.purchase.bindLendButtonForNext();
this._variable.purchase.bindBuyButtonForNext()
}else{JEagleEyeClient.sendError("다음 이동할 볼륨 정보 가져오기 오류");
alert("다음권 권한 정보를 가져오는데 실패했습니다. 뷰어 재 실행 후 다시 시도해주세요.")
}},this).bind(),timeout:2,ontimeout:$Fn(function(){JEagleEyeClient.sendError("다음 이동할 볼륨 정보 가져오기 실패. timeout!");
alert("다음권 권한 정보를 가져오는데 실패했습니다. 잠시 후 다시 시도해주세요.")
},this).bind(),onerror:$Fn(function(){JEagleEyeClient.sendError("다음 이동할 볼륨 정보 가져오기 오류");
alert("다음권 권한 정보를 가져오는데 실패했습니다. 잠시 후 다시 시도해주세요.")
},this).bind(),async:false});
oAjax.request({contentsNo:parseInt(this._variable.contentsNo),volumeNo:parseInt(this._variable.volumeNo),preview:$("preview").value})
},systemButtonHideForMac:function(){this._wel.maxButton.hide();
this._wel.minButton.hide();
this._wel.closeButton.hide();
this._wel.fullButton.hide();
this._wel["100Button"].hide()
},checkViewerVersionForMac:function(){var appVersion=application.getVersion();
if(appVersion=="1.0.0"){alert("지금 사용하고 계신 뷰어 재설치가 필요합니다. 재설치 후 이용 부탁드립니다.");
application.viewerClose()
}},setFullState:function(isFull){if(isFull){comicViewer._wel.fullButton.appendHTML('<span class="blind">선택됨</span>');
comicViewer._wel.wrap.removeClass("aside_open");
comicViewer._wel.wrap.addClass("full")
}else{comicViewer._wel.fullButton.empty();
comicViewer._wel.wrap.removeClass("full")
}},setMaxState:function(isMax){comicViewer._variable.maximize=isMax;
if(!isMax){if(comicViewer._wel.bookmarkLi.hasClass("on")){application.changeWindowSizeByType("prevSize")
}}else{comicViewer.changeWindowSize(parseInt($("currentWidth").value),parseInt($("currentHeight").value),comicViewer)
}},viewerCloseForMac:function(){var currentPageNo=parseInt(comicViewer._el.currentPageNo.value);
var readPercent=parseInt(currentPageNo/comicViewer._variable.nTotalPage*100);
comicViewer.saveRecentInfo(currentPageNo,readPercent)
}}).extend(jindo.UIComponent);
var Bookmark=$Class({$init:function(oParent,htOption){this._el=[];
this._wel=[];
this._wfn=[];
this._o=[];
this._value=[];
this._oParent=oParent;
this.option(htOption||{});
this._assignHTMLElements();
this._attachEvents();
this._initValue();
this._initObject()
},_assignHTMLElements:function(){this._el.bookmarkListButton=$("bookmarkListButton");
this._el.bookmarkList=$("bookmarkList");
this._el.bookmarkCloseButton=$("bookmarkCloseButton");
this._el.allDeleteButton=$("allDeleteButton");
this._el.bookmarkButton=$("bookmarkButton");
this._el.addBookmarkForMaxButton=$("addBookmarkForMaxButton");
this._el.currentPageNo=$("currentPageNo");
this._el.emptyBookmarkList=$("emptyBookmarkList");
this._el.bookmarkIcon=$("bookmarkIcon");
this._el.bookmarkDiv=$("bookmarkDiv");
this._el.wrap=$("wrap");
this._el.chapterDiv=$("chapterDiv");
this._el.chapterButton=$("chapterButton");
this._el.deleteBookmarkLayer=$("deleteBookmarkLayer");
this._el.deleteOkButton=$("deleteOkButton");
this._el.deleteCancelButton=$("deleteCancelButton");
this._el.deleteXButton=$("deleteXButton");
this._el.layerGroup=$("layerGroup");
this._el.allDeleteBookmarkLayer=$("allDeleteBookmarkLayer");
this._el.allDeleteOkButton=$("allDeleteOkButton");
this._el.allDeleteCancelButton=$("allDeleteCancelButton");
this._el.allDeleteXButton=$("allDeleteXButton");
this._el.bookmarkLi=$("bookmarkLi");
this._wel.bookmarkListButton=$Element(this._el.bookmarkListButton);
this._wel.bookmarkList=$Element(this._el.bookmarkList);
this._wel.allDeleteButton=$Element(this._el.allDeleteButton);
this._wel.bookmarkButton=$Element(this._el.bookmarkButton);
this._wel.emptyBookmarkList=$Element(this._el.emptyBookmarkList);
this._wel.bookmarkIcon=$Element(this._el.bookmarkIcon);
this._wel.bookmarkDiv=$Element(this._el.bookmarkDiv);
this._wel.wrap=$Element(this._el.wrap);
this._wel.chapterDiv=$Element(this._el.chapterDiv);
this._wel.chapterButton=$Element("chapterButton");
this._wel.addBookmarkForMaxButton=$Element("addBookmarkForMaxButton");
this._wel.deleteBookmarkLayer=$Element("deleteBookmarkLayer");
this._wel.deleteOkButton=$Element("deleteOkButton");
this._wel.deleteCancelButton=$Element("deleteCancelButton");
this._wel.deleteXButton=$Element("deleteXButton");
this._wel.layerGroup=$Element(this._el.layerGroup);
this._wel.allDeleteBookmarkLayer=$Element(this._el.allDeleteBookmarkLayer);
this._wel.allDeleteOkButton=$Element(this._el.allDeleteOkButton);
this._wel.allDeleteCancelButton=$Element(this._el.allDeleteCancelButton);
this._wel.allDeleteXButton=$Element(this._el.allDeleteXButton);
this._wel.bookmarkLi=$Element(this._el.bookmarkLi)
},_attachEvents:function(){this._wfn.bookmarkListButtonClick=$Fn(this._onClickBookmarkListButton,this);
this._wfn.bookmarkCloseButtonClick=$Fn(this.onClickBookmarkClose,this);
this._wfn.allDeleteButtonClick=$Fn(this._onClickAllDeleteButton,this);
this._wfn.bookmarkButtonClick=$Fn(this._onClickBookmarkButton,this);
this._wfn.deleteButtonClick=$Fn(this._onClickRemoveBookmarkButton,this);
this._wfn.bookmarkListClick=$Fn(this._onClickBookmarkList,this);
this._wfn.deleteOkButtonClick=$Fn(this._onClickDeleteBookmarkOk,this);
this._wfn.deleteCancelButtonClick=$Fn(this._onClickDeleteBookmarkCancel,this);
this._wfn.allDeleteOkButtonClick=$Fn(this._onClickAllDeleteOkButton,this);
this._wfn.allDeleteCancelButtonClick=$Fn(this._onClickAllDeleteCancelButton,this);
this._wfn.bookmarkListButtonClick.attach(this._el.bookmarkListButton,"click");
this._wfn.bookmarkCloseButtonClick.attach(this._el.bookmarkCloseButton,"click");
this._wfn.allDeleteButtonClick.attach(this._el.allDeleteButton,"click");
this._wfn.bookmarkButtonClick.attach(this._el.bookmarkButton,"click");
this._wfn.bookmarkButtonClick.attach(this._el.addBookmarkForMaxButton,"click");
this._wfn.deleteOkButtonClick.attach(this._el.deleteOkButton,"click");
this._wfn.deleteCancelButtonClick.attach(this._el.deleteCancelButton,"click");
this._wfn.deleteCancelButtonClick.attach(this._el.deleteXButton,"click");
this._wfn.allDeleteOkButtonClick.attach(this._el.allDeleteOkButton,"click");
this._wfn.allDeleteCancelButtonClick.attach(this._el.allDeleteCancelButton,"click");
this._wfn.allDeleteCancelButtonClick.attach(this._el.allDeleteXButton,"click");
this._wel.bookmarkList.delegate("click","BUTTON",this._wfn.deleteButtonClick.bind());
this._wel.bookmarkList.delegate("click","A",this._wfn.bookmarkListClick.bind())
},_initValue:function(){this._value.nContentsNo=$("contentsNo").value;
this._value.nVolumeNo=$("volumeNo").value;
this._value.isStart=true;
this._value.nLeftMenuWidth=240;
this._value.nAppearLeftMenuWidth=0
},_initObject:function(){this._onClickBookmarkListButton();
if($("preview").value=="false"){this._wel.addBookmarkForMaxButton.show()
}},_isBookmarkedPage:function(pageNo){if(this._value.bookmarkList==null){return false
}var finded=false;
$A(this._value.bookmarkList).forEach(function(v,i,a){if(v.pageNo==pageNo){finded=true;
$A.Break()
}},this);
return finded
},checkBookmarkPage:function(){var currentPageNo=parseInt($("currentPageNo").value);
if(application.getViewType()=="single"||this._wel.wrap.hasClass("scroll")){if(this._isBookmarkedPage(currentPageNo-1)){this._showBookmarkIcon();
return
}}else{if(this._isBookmarkedPage(currentPageNo)||this._isBookmarkedPage(currentPageNo-1)){this._showBookmarkIcon();
return
}}this._hideBookmarkIcon()
},_setBookmarkTemplate:function(){this._wel.bookmarkList.empty();
var template=$Template("tmpl_bookmarkList");
$A(this._value.bookmarkList).forEach(function(v,i,a){this._wel.bookmarkList.appendHTML(template.process(v))
},this)
},_onClickBookmarkListButton:function(){if(this._wel.bookmarkLi.hasClass("on")==false){var oAjax=new $Ajax("/comicViewer/api/bookmarkList.nhn",{type:"xhr",method:"get",onload:$Fn(function(res){var resultJson=res.json();
if(resultJson.success){this._value.bookmarkList=resultJson.result;
if(this._value.isStart==false){this._setBookmarkListLayer();
this._wel.wrap.addClass("aside_open");
this._wel.bookmarkDiv.show();
this._wel.bookmarkLi.addClass("on");
this._value.nAppearLeftMenuWidth=this._value.nLeftMenuWidth;
this._oParent.resizeContentsWidth(this._value.nAppearLeftMenuWidth)
}this._value.isStart=false
}else{JEagleEyeClient.sendError(resultJson.message);
alert("책갈피 정보를 가져오지 못했습니다. 뷰어 재 실행 후 다시 시도해주세요.")
}},this).bind(),timeout:2,ontimeout:$Fn(function(){JEagleEyeClient.sendError("북마크 가져오기 실패. timeout!")
},this).bind(),onerror:$Fn(function(){alert("책갈피 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.");
JEagleEyeClient.sendError("북마크 가져오기 오류")
},this).bind(),async:false});
oAjax.request({contentsNo:parseInt(this._value.nContentsNo),volumeNo:parseInt(this._value.nVolumeNo)})
}else{this.onClickBookmarkClose()
}this._wel.bookmarkListButton.$value().blur()
},_setBookmarkListLayer:function(){if(this._value.bookmarkList.length>0){this._wel.emptyBookmarkList.css("display","none");
this._wel.allDeleteButton.css("display","")
}else{this._wel.emptyBookmarkList.css("display","");
this._wel.allDeleteButton.css("display","none")
}this._setBookmarkTemplate();
this._value.nChapterListWidth=0;
if(this._wel.chapterDiv.visible()){this._value.nChapterListWidth=this._value.nLeftMenuWidth;
this._wel.chapterDiv.hide();
this._wel.chapterButton.parent().removeClass("on")
}},onClickBookmarkClose:function(){if(this._wel.bookmarkDiv.visible()){this._wel.wrap.removeClass("aside_open");
this._wel.bookmarkDiv.hide();
this._wel.bookmarkLi.removeClass("on");
this._value.nAppearLeftMenuWidth=0;
this._oParent.resizeContentsWidth(-this._value.nLeftMenuWidth)
}},_onClickAllDeleteButton:function(){this._wel.layerGroup.css("display","");
this._wel.allDeleteBookmarkLayer.show()
},_onClickAllDeleteOkButton:function(){var aPageNos=new $A();
if(this._value.bookmarkList!=null){$A(this._value.bookmarkList).forEach(function(v,i,a){aPageNos.push(v.pageNo)
},this)
}this._removeBookmark(this._value.nContentsNo,this._value.nVolumeNo,aPageNos);
this._onClickAllDeleteCancelButton()
},_onClickAllDeleteCancelButton:function(){this._wel.layerGroup.hide();
this._wel.allDeleteBookmarkLayer.hide()
},_onClickBookmarkButton:function(){var nPageNo=parseInt($("currentPageNo").value);
if(application.getViewType()=="single"||this._wel.wrap.hasClass("scroll")){nPageNo=nPageNo-1
}if(this._wel.bookmarkButton.hasClass("on")==false&&this._wel.bookmarkButton.hasClass("_wait")==false){this._wel.bookmarkButton.addClass("_wait");
this._addBookmark(this._value.nContentsNo,this._value.nVolumeNo,nPageNo)
}else{if(this._wel.bookmarkButton.hasClass("on")&&this._wel.bookmarkButton.hasClass("_wait")==false){this._wel.bookmarkButton.addClass("_wait");
var aPageNos=new $A();
aPageNos.push(nPageNo);
if(application.getViewType()=="double"){aPageNos.push(nPageNo-1)
}this._removeBookmark(this._value.nContentsNo,this._value.nVolumeNo,aPageNos)
}else{alert("책갈피 추가/삭제 작업 진행 중입니다.")
}}},_onClickRemoveBookmarkButton:function(e){e.stopDefault();
var aPageNos=new $A();
aPageNos.push(this._getPageNoAtClassName($Element(e.element).parent()));
this._value.aDeleteBookmarkNo=aPageNos;
this._wel.layerGroup.css("display","");
this._wel.deleteBookmarkLayer.show()
},_onClickDeleteBookmarkOk:function(){this._wel.bookmarkButton.addClass("_wait");
this._removeBookmark(this._value.nContentsNo,this._value.nVolumeNo,this._value.aDeleteBookmarkNo);
this._onClickDeleteBookmarkCancel()
},_onClickDeleteBookmarkCancel:function(){this._wel.layerGroup.hide();
this._wel.deleteBookmarkLayer.hide()
},_getPageNoAtClassName:function(obj){var pageNoStr=obj.className().split("_");
return parseInt(pageNoStr[1])
},_addBookmark:function(nContentsNo,nVolumeNo,nPageNo){var oAjax=new $Ajax("/comicViewer/api/addBookmark.nhn",{type:"xhr",method:"get",onload:$Fn(function(res){var resultJson=res.json();
if(resultJson.success){var newBookmarkList=$A(this._value.bookmarkList);
newBookmarkList.push(resultJson.result);
newBookmarkList.sort(function(v,v1){return v.pageNo-v1.pageNo
});
this._value.bookmarkList=newBookmarkList.$value();
this._setBookmarkListLayer();
this._showBookmarkIcon()
}else{JEagleEyeClient.sendError(resultJson.message);
alert("책갈피 추가에 실패했습니다. 뷰어 재 실행 후 다시 시도해주세요.")
}this._wel.bookmarkButton.removeClass("_wait")
},this).bind(),timeout:3,onerror:$Fn(function(){this._wel.bookmarkButton.removeClass("_wait");
alert("책갈피 추가에 실패했습니다.");
JEagleEyeClient.sendError("북마크 추가 오류")
},this).bind(),async:false});
oAjax.request({contentsNo:parseInt(nContentsNo),volumeNo:parseInt(nVolumeNo),pageNo:parseInt(nPageNo)})
},_showBookmarkIcon:function(){this._wel.bookmarkButton.addClass("on");
this._wel.addBookmarkForMaxButton.addClass("on");
this._wel.bookmarkIcon.addClass("on");
this._wel.bookmarkIcon.show();
this._wel.bookmarkButton.$value().blur()
},_hideBookmarkIcon:function(){this._wel.bookmarkButton.removeClass("on");
this._wel.addBookmarkForMaxButton.removeClass("on");
this._wel.bookmarkIcon.removeClass("on");
this._wel.bookmarkIcon.hide();
this._wel.bookmarkButton.$value().blur()
},_removeBookmark:function(nContentsNo,nVolumeNo,aPageNos){var oAjax=new $Ajax("/comicViewer/api/removeBookmark.nhn",{type:"xhr",method:"get",onload:$Fn(function(res){var resultJson=res.json();
if(resultJson.success){try{aPageNos.forEach($Fn(function(v,i,a){if(application.getViewType()=="single"||this._wel.wrap.hasClass("scroll")){if(parseInt($("currentPageNo").value)-1==v){this._hideBookmarkIcon()
}}else{if($("currentPageNo").value==v||parseInt($("currentPageNo").value)-1==v){this._hideBookmarkIcon()
}}var newBookmarkList=new $A();
$A(this._value.bookmarkList).forEach(function(value,index,array){if(value.pageNo!=v){newBookmarkList.push(value)
}},this);
this._value.bookmarkList=newBookmarkList.$value();
this._setBookmarkListLayer()
},this).bind())
}catch(e){JEagleEyeClient.sendError(e.message);
alert("책갈피 삭제가 되지 않았습니다.")
}}else{JEagleEyeClient.sendError(resultJson.message);
alert("책갈피 삭제에 실패했습니다. 뷰어 재 실행 후 다시 시도해주세요.")
}this._wel.bookmarkButton.removeClass("_wait")
},this).bind(),timeout:3,ontimeout:$Fn(function(){this._wel.bookmarkButton.removeClass("_wait");
JEagleEyeClient.sendError("북마크 삭제 실패. timeout!")
},this).bind(),onerror:$Fn(function(){this._wel.bookmarkButton.removeClass("_wait");
JEagleEyeClient.sendError("북마크 삭제 오류");
alert("책갈피 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.")
},this).bind(),async:false});
oAjax.request({contentsNo:parseInt(nContentsNo),volumeNo:parseInt(nVolumeNo),pageNos:aPageNos.$value()})
},_onClickBookmarkList:function(e){e.stopDefault();
var welSelectedBookmark=$Element(e.element).parent();
var nTargetPageNo=this._getPageNoAtClassName(welSelectedBookmark);
this._oParent.goPage(nTargetPageNo);
welSelectedBookmark.addClass("selected")
},clearSelectBookmark:function(){$ElementList(this._wel.bookmarkList.queryAll("LI")).removeClass("selected")
}}).extend(jindo.UIComponent);
var Chapter=$Class({$init:function(oParent,htOption){this._el=[];
this._wel=[];
this._wfn=[];
this._value=[];
this._oParent=oParent;
this.option(htOption||{});
this._assignHTMLElements();
this._attachEvents()
},_assignHTMLElements:function(){this._el.chapterButton=$("chapterButton");
this._el.chapterCloseButton=$("chapterCloseButton");
this._el.chapterList=$("chapterList");
this._el.chapterDiv=$("chapterDiv");
this._el.bookmarkDiv=$("bookmarkDiv");
this._el.bookmarkListButton=$("bookmarkListButton");
this._el.chapterLi=$("chapterLi");
this._el.wrap=$("wrap");
this._wel.chapterButton=$Element(this._el.chapterButton);
this._wel.chapterList=$Element(this._el.chapterList);
this._wel.chapterDiv=$Element(this._el.chapterDiv);
this._wel.bookmarkDiv=$Element(this._el.bookmarkDiv);
this._wel.bookmarkListButton=$Element(this._el.bookmarkListButton);
this._wel.chapterLi=$Element(this._el.chapterLi);
this._wel.wrap=$Element("wrap")
},_attachEvents:function(){this._wfn.chapterButtonClick=$Fn(this._onClickChapter,this);
this._wfn.chapterCloseButtonClick=$Fn(this.onClickChapterClose,this);
this._wfn.chapterListClick=$Fn(this._onClickChapterList,this);
this._wfn.chapterButtonClick.attach(this._el.chapterButton,"click");
this._wfn.chapterCloseButtonClick.attach(this._el.chapterCloseButton,"click");
this._wel.chapterList.delegate("click","LI",this._wfn.chapterListClick.bind())
},_onClickChapter:function(){if(this._wel.chapterLi.hasClass("on")){this.onClickChapterClose()
}else{this._wel.wrap.addClass("aside_open");
this._wel.chapterDiv.show();
this._wel.chapterLi.addClass("on");
this._value.nBookmarkListWidth=0;
if(this._wel.bookmarkDiv.visible()){this._value.nBookmarkListWidth=parseInt(this._wel.bookmarkDiv.css("width").split("px")[0]);
this._wel.bookmarkDiv.hide();
this._wel.bookmarkListButton.parent().removeClass("on")
}this._value.nChapterListWidth=parseInt(this._wel.chapterDiv.css("width").split("px")[0]);
this._oParent.resizeContentsWidth(this._value.nChapterListWidth-this._value.nBookmarkListWidth)
}},onClickChapterClose:function(){if(this._wel.chapterDiv.visible()){this._wel.wrap.removeClass("aside_open");
this._wel.chapterDiv.hide();
this._wel.chapterLi.removeClass("on");
this._oParent.resizeContentsWidth(-this._value.nChapterListWidth)
}},_onClickChapterList:function(eEvent){eEvent.stopDefault();
var welLI=$Element(eEvent.element);
$ElementList(this._wel.chapterList.queryAll("LI")).removeClass("selected");
var aPageNos=welLI.className().split(/_page_/);
this._oParent.goPage(aPageNos[1]);
welLI.addClass("selected")
},clearSelectChapter:function(){$ElementList(this._wel.chapterList.queryAll("LI")).removeClass("selected")
}}).extend(jindo.UIComponent);
var RecentPage=$Class({$init:function(oParent,htOption){this._el=[];
this._wel=[];
this._wfn=[];
this._variable=[];
this._oParent=oParent;
this.option(htOption||{});
this._assignHTMLElements();
this._attachEvents();
this._initObject()
},_assignHTMLElements:function(){this._el.continueButton=$("continueButton");
this._el.goRecentPageDiv=$("goRecentPageDiv");
this._el.layerGroup=$("layerGroup");
this._el.deviceName=$("deviceName");
this._el.lastRecentPageDiv=$("lastRecentPageDiv");
this._el.pageMoveButoon=$("pageMoveButoon");
this._el.contentsDiv=$("contentsDiv");
this._el.continueClose=$("continueClose");
this._el.continueCancel=$("continueCancel");
this._el.lastContinueClose=$("lastContinueClose");
this._wel.continueButton=$Element(this._el.continueButton);
this._wel.layerGroup=$Element(this._el.layerGroup);
this._wel.deviceName=$Element(this._el.deviceName);
this._wel.lastRecentPageDate=$Element("lastRecentPageDate");
this._wel.goRecentPageDiv=$Element(this._el.goRecentPageDiv);
this._wel.lastRecentPageDiv=$Element(this._el.lastRecentPageDiv);
this._wel.contentsDiv=$Element(this._el.contentsDiv);
this._wel.continueClose=$Element(this._el.continueClose);
this._wel.continueCancel=$Element(this._el.continueCancel);
this._wel.lastContinueClose=$Element(this._el.lastContinueClose)
},_attachEvents:function(){this._wfn.continueButtonClick=$Fn(this._onClickContinue,this);
this._wfn.pageMoveButoonClick=$Fn(this._onClickPageMoveButoon,this);
this._wfn.continueCloseClick=$Fn(this._onCloseContinue,this);
this._wfn.continueButtonClick.attach(this._el.continueButton,"click");
this._wfn.pageMoveButoonClick.attach(this._el.pageMoveButoon,"click");
this._wfn.continueCloseClick.attach(this._el.continueClose,"click");
this._wfn.continueCloseClick.attach(this._el.continueCancel,"click");
this._wfn.continueCloseClick.attach(this._el.lastContinueClose,"click")
},_initObject:function(){this._variable.contentsNo=$("contentsNo").value;
this._variable.volumeNo=$("volumeNo").value;
this._variable.viewType=application.getViewType();
var viewerRecentPage=application.getRecentPage(this._variable.contentsNo,this._variable.volumeNo);
$("currentPageNo").value=viewerRecentPage+1;
if($("recentPage").value>=0&&viewerRecentPage!=$("recentPage").value){this._onClickContinue()
}},_onClickContinue:function(){this._wel.continueButton.parent().addClass("on");
var oAjax=new $Ajax("/comicViewer/api/recentPageInfo.nhn",{type:"xhr",method:"get",onload:$Fn(function(res){var resultJson=res.json();
if(resultJson!=null&&resultJson.success){this._wel.layerGroup.css("display","");
this._openRecentPageLayer(resultJson.result)
}else{this._wel.continueButton.parent().removeClass("on");
JEagleEyeClient.sendError("이어보기 정보 가져오지 못함. contentsNo = "+this._variable.contentsNo+", volumeNo = "+this._variable.volumeNo);
alert("이어보기 정보를 가져오지 못했습니다.")
}},this).bind(),timeout:2,onerror:function(){this._wel.continueButton.parent().removeClass("on");
JEagleEyeClient.sendError("이어보기 정보 가져오지 못함. contentsNo = "+this._variable.contentsNo+", volumeNo = "+this._variable.volumeNo);
alert("이어보기 정보를 가져오지 못했습니다.")
},async:false});
oAjax.request({contentsNo:parseInt(this._variable.contentsNo),volumeNo:parseInt(this._variable.volumeNo)})
},_openRecentPageLayer:function(recentPageInfo){if(recentPageInfo!=null&&application.getRecentPage(this._variable.contentsNo,this._variable.volumeNo)!=recentPageInfo.pageNo){this._wel.goRecentPageDiv.show();
this._wel.deviceName.empty();
this._wel.deviceName.appendHTML(recentPageInfo.deviceName);
this._wel.lastRecentPageDate.empty();
this._wel.lastRecentPageDate.appendHTML(recentPageInfo.recentPageDateToString+"전에 다른기기");
this._variable.recentPageNo=recentPageInfo.pageNo
}else{this._wel.layerGroup.css("display","");
this._wel.lastRecentPageDiv.show();
$Fn(this._onCloseContinue,this).delay(2)
}this._wel.continueButton.$value().blur()
},_onClickPageMoveButoon:function(){this._onCloseContinue();
application.setRecentPage(this._variable.contentsNo,this._variable.volumeNo,this._variable.recentPageNo);
this._oParent.goPage(this._variable.recentPageNo)
},_onCloseContinue:function(){this._wel.continueButton.parent().removeClass("on");
this._wel.layerGroup.css("display","none");
this._wel.continueButton.$value().blur();
this._wel.goRecentPageDiv.hide();
this._wel.lastRecentPageDiv.hide()
}}).extend(jindo.UIComponent);
var Purchase=$Class({$init:function(oParent,htOption){this._el=[];
this._wel=[];
this._wfn=[];
this._value=[];
this._oParent=oParent;
this.option(htOption||{});
this._assignHTMLElements();
this._attachEvents();
this._initValue()
},bindFreeView:function(){this._el.freeView=$("freeView");
if(this._el.freeView!=null){this._wel.freeView=$Element(this._el.freeView);
this._wfn.freeViewButtonClick=$Fn(this._onClickFreeViewButton,this);
this._wfn.freeViewButtonClick.attach(this._el.freeView,"click");
this._wel.freeView.$value().focus()
}},bindNextView:function(){this._el.nextView=$("nextView");
if(this._el.nextView!=null){this._wel.nextView=$Element(this._el.nextView);
this._wfn.nextViewButtonClick=$Fn(this._onClickNextViewButton,this);
this._wfn.nextViewButtonClick.attach(this._el.nextView,"click");
this._wel.nextView.$value().focus()
}},bindLendButtonForNext:function(){this._el.lendButtonForNext=$("lendButtonForNext");
if(this._el.lendButtonForNext!=null){this._wfn.lendButtonForNextClick=$Fn(this._onClickLendButtonForNext,this);
this._wfn.lendButtonForNextClick.attach(this._el.lendButtonForNext,"click")
}},bindBuyButtonForNext:function(){this._el.buyButtonForNext=$("buyButtonForNext");
if(this._el.buyButtonForNext!=null){this._wfn.buyButtonForNextClick=$Fn(this._onClickBuyButtonForNext,this);
this._wfn.buyButtonForNextClick.attach(this._el.buyButtonForNext,"click")
}},bindLendButton:function(){this._el.lendButton=$("lendButton");
if(this._el.lendButton!=null){this._wfn.lendButtonClick=$Fn(this._onClickLendButton,this);
this._wfn.lendButtonClick.attach(this._el.lendButton,"click")
}},bindBuyButton:function(){this._el.buyButton=$("buyButton");
if(this._el.buyButton!=null){this._wfn.buyButtonClick=$Fn(this._onClickBuyButton,this);
this._wfn.buyButtonClick.attach(this._el.buyButton,"click")
}},_assignHTMLElements:function(){this._el.layerGroup=$("layerGroup");
this._el.lendButton=$("lendButton");
this._el.buyButton=$("buyButton");
this._el.purchaseLayer=$("purchaseLayer");
this._el.freePurchaseCompleteLayer=$("freePurchaseCompleteLayer");
this._el.nextVolumeLayer=$("nextVolumeLayer");
this._el.volumeThumbnail=$("volumeThumbnail");
this._el.displayNameForPurchase=$("displayNameForPurchase");
this._el.previewButton1=$("previewButton1");
this._el.previewButton2=$("previewButton2");
this._wel.layerGroup=$Element(this._el.layerGroup);
this._wel.purchaseLayer=$Element(this._el.purchaseLayer);
this._wel.freePurchaseCompleteLayer=$Element(this._el.freePurchaseCompleteLayer);
this._wel.nextVolumeLayer=$Element(this._el.nextVolumeLayer);
this._wel.volumeThumbnail=$Element(this._el.volumeThumbnail);
this._wel.displayNameForPurchase=$Element(this._el.displayNameForPurchase);
this._wel.previewButton1=$Element(this._el.previewButton1);
this._wel.previewButton2=$Element(this._el.previewButton2)
},_attachEvents:function(){this._wfn.lendButtonClick=$Fn(this._onClickLendButton,this);
this._wfn.buyButtonClick=$Fn(this._onClickBuyButton,this);
this._wfn.closeButtonClick=$Fn(this._onClickCloseButton,this);
this._wfn.previewButtonClick=$Fn(this._onClickPreviewButton,this);
if(this._el.lendButton!=null){this._wfn.lendButtonClick.attach(this._el.lendButton,"click")
}if(this._el.buyButton!=null){this._wfn.buyButtonClick.attach(this._el.buyButton,"click")
}if(this._el.previewButton1!=null){this._wfn.previewButtonClick.attach(this._el.previewButton1,"click")
}if(this._el.previewButton2!=null){this._wfn.previewButtonClick.attach(this._el.previewButton2,"click")
}this._wel.layerGroup.delegate("click",".ly_info_buy .btn_clse",this._wfn.closeButtonClick.bind())
},_initValue:function(){this._value.nContentsNo=parseInt($("contentsNo").value);
this._value.nNextVolumeNo=parseInt($("nextVolumeNo").value);
this._value.nPurchaseVolumeNo=parseInt($("nextVolumeNo").value);
this._value.viewerDomainUrl=$("viewerDomainUrl").value
},openPurchaseLayerForSelectBox:function(nTargetVolumeNo){this._wel.layerGroup.css("display","");
this._wel.purchaseLayer.css("display","");
this._value.nPurchaseVolumeNo=parseInt(nTargetVolumeNo);
var oAjax=new $Ajax("/comicViewer/api/purchaseVolumeInfo.nhn",{type:"xhr",method:"get",onload:$Fn(function(res){var resultJson=res.json();
if(resultJson.success){var result=resultJson.result;
this._wel.volumeThumbnail.attr("src",result.thumbnailImageUrl);
if(result.volumeName!=null){this._wel.displayNameForPurchase.text(result.displayVolumeName)
}else{this._wel.displayNameForPurchase.text(result.volumeNo+$("postFix").value)
}this._value.nNextVolumeNo=this._value.nPurchaseVolumeNo;
if(result.previewPageCount>0){this._wel.previewButton1.show()
}else{this._wel.previewButton1.hide()
}this._oParent.detachKeyBoardEvent()
}else{JEagleEyeClient.sendError("결제 정보 가져오기 실패 - openPurchaseLayerForSelectBox");
alert("다음권 정보를 가져오지 못했습니다. 뷰어 재 실행 후 다시 시도해주세요.")
}},this).bind(),timeout:3,onerror:$Fn(function(){JEagleEyeClient.sendError("결제 정보 가져오기 실패 - openPurchaseLayerForSelectBox");
alert("다음권 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.")
},this).bind(),async:false});
oAjax.request({contentsNo:this._value.nContentsNo,volumeNo:this._value.nPurchaseVolumeNo})
},_onClickCloseButton:function(obj){this._value.nNextVolumeNo=parseInt($("nextVolumeNo").value);
this._wel.layerGroup.hide();
$Element(obj.element).parent().hide();
this._oParent.attachKeyBoardEvent();
this._oParent.setAutoFlipSpeed()
},_onClickLendButton:function(obj){this._purchase(false,obj)
},_onClickBuyButton:function(obj){this._purchase(true,obj)
},_onClickLendButtonForNext:function(obj){this._purchase(false,obj)
},_onClickBuyButtonForNext:function(obj){this._purchase(true,obj)
},_purchase:function(bBuyContents,obj){var sQueryString="contentsPaymentType="+(bBuyContents?"BUY":"LEND")+"&&contentsNo="+this._value.nContentsNo+"&&volumeNo="+this._value.nPurchaseVolumeNo;
var sPaymentUrl=this._value.viewerDomainUrl+"/payment/contentsPaymentForm.nhn";
application.openPurchasePopup(sPaymentUrl+"?"+sQueryString)
},_onClickFreeViewButton:function(){var oAjax=new $Ajax("/comicViewer/api/freePurchase.nhn",{type:"xhr",method:"post",onload:$Fn(function(res){var resultJson=res.json();
if(resultJson.success){this._wel.layerGroup.css("display","");
this._wel.nextVolumeLayer.hide();
this._wel.freePurchaseCompleteLayer.show();
$Fn(this._onClickNextViewButton,this).delay(3)
}else{JEagleEyeClient.sendError("무료 결제 오류");
alert(resultJson.message)
}},this).bind(),timeout:10,onerror:$Fn(function(){JEagleEyeClient.sendError("무료 결제 오류");
alert("결제 요청이 정상적으로 되지 않았습니다. 다시 시도해주세요.")
},this).bind(),async:false});
oAjax.request({contentsNo:this._value.nContentsNo,volumeNo:this._value.nNextVolumeNo})
},purchaseFreeVolume:function(nVolumeNo){this._value.nNextVolumeNo=nVolumeNo;
this._onClickFreeViewButton()
},_onClickNextViewButton:function(){this._wel.freePurchaseCompleteLayer.hide();
application.goNextContents(this._value.nContentsNo,this._value.nNextVolumeNo,false)
},_onClickPreviewButton:function(){application.goNextContents(this._value.nContentsNo,this._value.nNextVolumeNo,true)
}}).extend(jindo.UIComponent);
var ViewerSetting=$Class({$init:function(oParent,htOption){this._el=[];
this._wel=[];
this._wfn=[];
this._variable=[];
this._oParent=oParent;
this.option(htOption||{});
this._assignHTMLElements();
this._attachEvents();
this._initSetting();
this._initLayerManager()
},_assignHTMLElements:function(){this._el.settingButton=$("settingButton");
this._el.minusButton=$("minusButton");
this._el.plusButton=$("plusButton");
this._el.soundButton=$("soundButton");
this._el.settingCloseButton=$("settingCloseButton");
this._el.settingLayer=$("settingLayer");
this._wel.settingButton=$Element("settingButton");
this._wel.minusButton=$Element("minusButton");
this._wel.plusButton=$Element("plusButton");
this._wel.soundButton=$Element("soundButton");
this._wel.settingLayer=$Element("settingLayer");
this._wel.flipSpeed=$Element("flipSpeed")
},_attachEvents:function(){this._wfn.settingButtonClick=$Fn(this._onClickSettingButton,this);
this._wfn.minusButtonClick=$Fn(this._onClickSpeedMinusButton,this);
this._wfn.plusButtonClick=$Fn(this._onClickSpeedPlusButton,this);
this._wfn.soundButtonClick=$Fn(this._onClickSoundButton,this);
this._wfn.settingCloseButtonClick=$Fn(this._onClickSettingCloseButton,this);
this._wfn.settingButtonClick.attach(this._el.settingButton,"click");
this._wfn.minusButtonClick.attach(this._el.minusButton,"click");
this._wfn.plusButtonClick.attach(this._el.plusButton,"click");
this._wfn.soundButtonClick.attach(this._el.soundButton,"click");
this._wfn.settingCloseButtonClick.attach(this._el.settingCloseButton,"click")
},_initLayerManager:function(){this._oLayerManager=new jindo.LayerManager(this._el.settingLayer);
this._oLayerManager.attach({beforeHide:$Fn(function(oCustomEvent){oCustomEvent.stop();
this._wel.settingButton.removeClass("on")
},this).bind(),beforeShow:$Fn(function(oCustomEvent){oCustomEvent.stop();
this._wel.settingButton.addClass("on")
},this).bind()});
this._oLayerManager.link(this._el.settingLayer).link(this._el.settingButton)
},_initSetting:function(){this._variable.waFlipSpeed=$A(this.option("aFlipSpeed"));
this._variable.autoFlipSpeed=application.getAutoFlipSpeed();
this._variable.flipSound=application.getFlipSound();
this._variable.flipEffect=application.getFlipEffect();
this._wel.flipSpeed.text(this._variable.autoFlipSpeed);
if(this._variable.autoFlipSpeed==3){this._wel.minusButton.addClass("dim")
}else{if(this._variable.autoFlipSpeed==30){this._wel.plusButton.addClass("dim")
}}if(this._variable.flipSound=="off"){this._wel.soundButton.attr("checked","")
}},_onClickSettingButton:function(){this._wel.settingButton.toggleClass("on");
this._wel.settingButton.$value().blur()
},_onClickSpeedMinusButton:function(){this._wel.plusButton.removeClass("dim");
var nCurrentFlipSpeed=parseInt(application.getAutoFlipSpeed());
var waSmallerFlipSpeed=this._variable.waFlipSpeed.filter(function(v,i,a){return v<nCurrentFlipSpeed
}).sort(function(l,r){return l>r
});
var nFlipSpeed=waSmallerFlipSpeed.pop();
if(nFlipSpeed){application.setAutoFlipSpeed(nFlipSpeed);
this._wel.flipSpeed.text(nFlipSpeed)
}if(waSmallerFlipSpeed.length()==0){this._wel.minusButton.addClass("dim")
}this._oParent.setAutoFlipSpeed()
},_onClickSpeedPlusButton:function(){this._wel.minusButton.removeClass("dim");
var nCurrentFlipSpeed=parseInt(application.getAutoFlipSpeed());
var waLargerFlipSpeed=this._variable.waFlipSpeed.filter(function(v,i,a){return v>nCurrentFlipSpeed
}).sort(function(l,r){return l<r
});
var nFlipSpeed=waLargerFlipSpeed.pop();
if(nFlipSpeed){application.setAutoFlipSpeed(nFlipSpeed);
this._wel.flipSpeed.text(nFlipSpeed)
}if(waLargerFlipSpeed.length()==0){this._wel.plusButton.addClass("dim")
}this._oParent.setAutoFlipSpeed()
},_onClickSoundButton:function(){if(this._wel.soundButton.attr("checked")){this._wel.soundButton.cssClass("N=a:set.soundon",true);
this._wel.soundButton.cssClass("N=a:set.soundoff",false);
application.setFlipSound("on")
}else{this._wel.soundButton.cssClass("N=a:set.soundon",false);
this._wel.soundButton.cssClass("N=a:set.soundoff",true);
application.setFlipSound("off")
}},_onClickSettingCloseButton:function(){this._wel.settingButton.removeClass("on")
},_onClickFlipEffectNo:function(){application.setFlipEffect("off")
},_onClickFlipEffectSlide:function(){application.setFlipEffect("slide")
},hide:function(){this._wel.settingButton.removeClass("on")
}}).extend(jindo.UIComponent);
var ViewerLayer=$Class({$init:function(oParent,htOption){this._el=[];
this._wel=[];
this._wfn=[];
this._variable=[];
this._oParent=oParent;
this.option(htOption||{});
this._assignHTMLElements();
this._attachEvents();
this._initVariable();
this._initLayerObject()
},_assignHTMLElements:function(){this._el.layerGroup=$("layerGroup");
this._el.firstPageLayer=$("firstPageLayer");
this._el.reverseViewLayer=$("reverseViewLayer");
this._el.loadingLayer=$("loadingLayer");
this._el.joinPointButton1=$("joinPointButton1");
this._el.joinPointButton2=$("joinPointButton2");
this._el.lastVolumeLayer=$("lastVolumeLayer");
this._el.nextVolumeLayer=$("nextVolumeLayer");
this._el.starRatingLayer1=$("starRatingLayer1");
this._el.starRatingLayer2=$("starRatingLayer2");
this._el.starRatingLayer1CloseButton=$("starRatingLayer1CloseButton");
this._el.lastPageCloseButton1=$("lastPageCloseButton1");
this._el.lastPageCloseButton2=$("lastPageCloseButton2");
this._el.joinPointLayerCloseButton1=$("joinPointLayerCloseButton1");
this._el.joinPointLayerCloseButton2=$("joinPointLayerCloseButton2");
this._el.joinPointLayerXButton1=$("joinPointLayerXButton1");
this._el.joinPointLayerXButton2=$("joinPointLayerXButton2");
this._el.freePurchaseLayerClose=$("freePurchaseLayerClose");
this._el.freePurchaseCompleteLayer=$("freePurchaseCompleteLayer");
this._el.starScore1=$("starScore1");
this._el.starScore2=$("starScore2");
this._el.score1=$("score1");
this._el.score2=$("score2");
this._el.submitScore1=$("submitScore1");
this._el.submitScore2=$("submitScore2");
this._el.joinCompleteButton1=$("joinCompleteButton1");
this._el.joinCompleteButton2=$("joinCompleteButton2");
this._el.starScoreNum1=$("starScoreNum1");
this._el.starScoreNum2=$("starScoreNum2");
this._el.starIcon1=$("starIcon1");
this._el.starIcon2=$("starIcon2");
this._el.nextView=$("nextView");
this._el.freeView=$("freeView");
this._wel.layerGroup=$Element(this._el.layerGroup);
this._wel.firstPageLayer=$Element(this._el.firstPageLayer);
this._wel.reverseViewLayer=$Element(this._el.reverseViewLayer);
this._wel.loadingLayer=$Element(this._el.loadingLayer);
this._wel.joinPointButton1=$Element(this._el.joinPointButton1);
this._wel.joinPointButton2=$Element(this._el.joinPointButton2);
this._wel.lastVolumeLayer=$Element(this._el.lastVolumeLayer);
this._wel.nextVolumeLayer=$Element(this._el.nextVolumeLayer);
this._wel.joinPointLayer=$Element(this._el.joinPointLayer);
this._wel.joinPointLayerCloseButton1=$Element(this._el.joinPointLayerCloseButton1);
this._wel.joinPointLayerCloseButton2=$Element(this._el.joinPointLayerCloseButton2);
this._wel.joinPointLayerXButton1=$Element(this._el.joinPointLayerXButton1);
this._wel.joinPointLayerXButton2=$Element(this._el.joinPointLayerXButton2);
this._wel.lastPageCloseButton1=$Element(this._el.lastPageCloseButton1);
this._wel.lastPageCloseButton2=$Element(this._el.lastPageCloseButton2);
this._wel.freePurchaseLayerClose=$Element(this._el.freePurchaseLayerClose);
this._wel.freePurchaseCompleteLayer=$Element(this._el.freePurchaseCompleteLayer);
this._wel.score1=$Element(this._el.score1);
this._wel.score2=$Element(this._el.score2);
this._wel.starScore1=$Element(this._el.starScore1);
this._wel.starScore2=$Element(this._el.starScore2);
this._wel.starScoreList1=this._wel.starScore1.child();
this._wel.starScoreList2=this._wel.starScore2.child();
this._wel.submitScore1=$Element(this._el.submitScore1);
this._wel.submitScore2=$Element(this._el.submitScore2);
this._wel.joinCompleteButton1=$Element(this._el.joinCompleteButton1);
this._wel.joinCompleteButton2=$Element(this._el.joinCompleteButton2);
this._wel.starRatingLayer1=$Element(this._el.starRatingLayer1);
this._wel.starRatingLayer2=$Element(this._el.starRatingLayer2);
this._wel.starScoreNum1=$Element(this._el.starScoreNum1);
this._wel.starScoreNum2=$Element(this._el.starScoreNum2);
this._wel.starIcon1=$Element(this._el.starIcon1);
this._wel.starIcon2=$Element(this._el.starIcon2);
this._wel.nextView=$Element(this._el.nextView);
this._wel.freeView=$Element(this._el.freeView)
},_attachEvents:function(){this._wfn.joinPointButtonClick=$Fn(this._onClickJoinPointButton,this);
this._wfn.joinPointLayerCloseButtonClick=$Fn(this._onClickJoinPointLayerCloseButton,this);
this._wfn.closeButtonClick=$Fn(this._onClickCloseButton,this);
this._wfn.freePurchaseLayerCloseClick=$Fn(this._onClickFreePurchaseLayerClose,this);
this._wfn.starScore1Click=$Fn(this._onClickStarScore1,this);
this._wfn.starScore2Click=$Fn(this._onClickStarScore2,this);
this._wfn.submitScoreClick=$Fn(this._onClickSubmitScore,this);
this._wfn.joinPointButtonClick.attach(this._el.joinPointButton1,"click");
this._wfn.joinPointButtonClick.attach(this._el.joinPointButton2,"click");
this._wfn.joinPointLayerCloseButtonClick.attach(this._el.joinPointLayerCloseButton1,"click");
this._wfn.joinPointLayerCloseButtonClick.attach(this._el.joinPointLayerCloseButton2,"click");
this._wfn.joinPointLayerCloseButtonClick.attach(this._el.joinPointLayerXButton1,"click");
this._wfn.joinPointLayerCloseButtonClick.attach(this._el.joinPointLayerXButton2,"click");
this._wfn.closeButtonClick.attach(this._el.lastPageCloseButton1,"click");
this._wfn.closeButtonClick.attach(this._el.lastPageCloseButton2,"click");
this._wfn.freePurchaseLayerCloseClick.attach(this._el.freePurchaseLayerClose,"click");
this._wfn.starScore1Click.attach(this._el.starScore1,"click");
this._wfn.starScore2Click.attach(this._el.starScore2,"click");
this._wfn.submitScoreClick.attach(this._el.submitScore1,"click");
this._wfn.submitScoreClick.attach(this._el.submitScore2,"click")
},_initVariable:function(){this._variable.isLastVolume=$("isLastVolume").value;
this._variable.nstoreDomainUrl=$("nstoreDomainUrl").value;
this._variable.contentsNo=$("contentsNo").value;
this._variable.joinPoint=$("joinPoint").value;
this._variable.viewerTypeCode=$("viewerTypeCode").value;
this._variable.nStarScore=5
},_initLayerObject:function(){if(this._variable.joinPoint=="true"){this._wel.joinPointButton1.hide();
this._wel.joinPointButton2.hide();
this._wel.joinCompleteButton1.show();
this._wel.joinCompleteButton2.show()
}else{this._wel.joinPointButton1.show();
this._wel.joinPointButton2.show();
this._wel.joinCompleteButton1.hide();
this._wel.joinCompleteButton2.hide()
}},showFirstPageLayer:function(){this._wel.layerGroup.css("display","");
if(this._variable.viewerTypeCode=="NORMAL_ORDER"){this._wel.firstPageLayer.css("display","")
}else{this._wel.reverseViewLayer.css("display","")
}},hideFirstPageLayer:function(){this._wel.layerGroup.hide();
if(this._variable.viewerTypeCode=="NORMAL_ORDER"){this._wel.firstPageLayer.hide()
}else{this._wel.reverseViewLayer.hide()
}},showLoadingLyar:function(){this._wel.layerGroup.css("display","");
this._wel.loadingLayer.css("display","")
},hideLoadingLyar:function(){this._wel.layerGroup.hide();
this._wel.loadingLayer.hide()
},showLastVolumeLayer:function(){this._wel.layerGroup.css("display","");
if(this._variable.isLastVolume=="true"){this._wel.lastVolumeLayer.css("display","")
}else{this._wel.nextVolumeLayer.css("display","")
}this._oParent.detachKeyBoardEvent()
},_onClickJoinPointButton:function(e){var joinPointLayer=$Element(e.element.parentElement.parentElement.parentElement).child(function(v){return v.hasClass("ly_score")
});
this._wel.joinPointLayer=$Element(joinPointLayer[0]);
this._wel.joinPointLayer.show()
},_onClickJoinPointLayerCloseButton:function(){this._wel.starRatingLayer1.hide();
this._wel.starRatingLayer2.hide()
},_onClickFreePurchaseLayerClose:function(){this._wel.layerGroup.hide();
this._wel.freePurchaseCompleteLayer.hide()
},_onClickCloseButton:function(e){this._wel.layerGroup.hide();
$Element(e.element).parent().hide();
this._oParent.attachKeyBoardEvent();
if(this._oParent._wel.wrap.hasClass("scroll")){this._oParent.attachScrollBox()
}else{this._oParent.setAutoFlipSpeed()
}},_onClickStarScore1:function(e){this._variable.nStarScore=parseInt($Element(e.element).text());
this._wel.score1.text(this._variable.nStarScore);
this._fillStarButton(this._wel.starScoreList1,this._variable.nStarScore)
},_onClickStarScore2:function(e){this._variable.nStarScore=parseInt($Element(e.element).text());
this._wel.score2.text(this._variable.nStarScore);
this._fillStarButton(this._wel.starScoreList2,this._variable.nStarScore)
},_fillStarButton:function(aTargetList,nPoint){$ElementList(aTargetList).removeClass("on");
$A(aTargetList).forEach(function(v,i,a){if(i>=nPoint-1){v.addClass("on");
$A.Break()
}})
},_onClickSubmitScore:function(){var oAjax=new $Ajax("/comicViewer/api/starRating.nhn",{type:"xhr",method:"get",onload:$Fn(function(res){var resultJson=res.json();
if(resultJson.success){var nScore=resultJson.result.score;
this._wel.starScoreNum1.text(nScore);
this._wel.starScoreNum2.text(nScore);
this._wel.starIcon1.css("width",(nScore/10*100)+"%");
this._wel.starIcon2.css("width",(nScore/10*100)+"%");
this._variable.joinPoint="true"
}else{JEagleEyeClient.sendError("별점 주기 요청 실패.");
alert("별점 주기 요청이 실패하였습니다. 뷰어 재 실행 후 다시 시도해주세요.")
}this._initLayerObject();
this._onClickJoinPointLayerCloseButton()
},this).bind(),timeout:2,onerror:function(){JEagleEyeClient.sendError("별점 주기 요청 실패.");
alert("별점 주기 요청이 실패하였습니다. 잠시 후 다시 시도해주세요.")
},async:false});
oAjax.request({contentsNo:parseInt(this._variable.contentsNo),starScore:this._variable.nStarScore})
}}).extend(jindo.UIComponent);
var LocalApplication=$Class({$init:function(htOption){this._el=[];
this._value=[];
this._initValue()
},_initValue:function(){this._value.autoFlipSpeed=3;
this._value.flipSound="on";
this._value.flipEffect="slide";
this._value.viewType="double";
this._value.autoFlip="off";
this._value.recentPage=1;
if($("viewerDomainUrl")!=null){this._value.viewerDomainUrl=$("viewerDomainUrl").value
}if($("contentsNo")!=null){this._value.sContentsNo=$("contentsNo").value
}if($("volumeNo")!=null){this._value.sVolumeNo=$("volumeNo").value
}this._el.audio=new Audio("/sound/po_1.ogg")
},getAutoFlipSpeed:function(){return this._value.autoFlipSpeed
},getFlipSound:function(){return this._value.flipSound
},setAutoFlipSpeed:function(nSpeed){this._value.autoFlipSpeed=nSpeed
},setAutoFlip:function(sOption){this._value.autoFlip=sOption
},setFlipSound:function(sFlipSound){this._value.flipSound=sFlipSound
},getFlipEffect:function(){return this._value.flipEffect
},setFlipEffect:function(sFlipEffect){this._value.flipEffect=sFlipEffect
},openPurchasePopup:function(sPopupUrl){window.open(sPopupUrl);
window.focus()
},getViewType:function(){return this._value.viewType
},getAutoFlip:function(){return this._value.autoFlip
},viewerClose:function(){alert("뷰어 닫았음.");
return false
},getRecentPage:function(){return this._value.recentPage
},setViewType:function(viewType){this._value.viewType=viewType
},changeWindowSize:function(width,height){this._value.width=width;
this._value.height=height
},moveStartPoint:function(xPoint,yPoint){return
},movingPoint:function(xPoint,yPoint){return
},registerNativeCallback:function(type,funcObj){return
},changeWindowSizeByType:function(){this.changeWindowSize(this._value.width,this._value.height)
},setRecentPage:function(nContentsNo,nVolumeNo,nCurrentPageNo){return
},goNextContents:function(nContentsNo,nVolumeNo,preview){location.href=this._value.viewerDomainUrl+"/comicViewer/macViewer.nhn?contentsNo="+nContentsNo+"&volumeNo="+nVolumeNo+"&preview="+preview
},playSound:function(soundUrl){this._el.audio.play()
},setUserId:function(userId){return
},changeVolume:function(nContentsNo,nVolumeNo){return
},getWindowSize:function(){return"normal"
},getVersion:function(){return"1.0.2"
},generateImageUrl:function(nPageNo){var sImageUrl="";
if(nPageNo<10){sImageUrl="http://dev.nbooks.admin.nhncorp.com/contents/preview/comic/KOCN/"+this._value.sContentsNo+"/"+this._value.sVolumeNo+"/00"+nPageNo+".jpg"
}else{if(nPageNo<100){sImageUrl="http://dev.nbooks.admin.nhncorp.com/contents/preview/comic/KOCN/"+this._value.sContentsNo+"/"+this._value.sVolumeNo+"/0"+nPageNo+".jpg"
}else{sImageUrl="http://dev.nbooks.admin.nhncorp.com/contents/preview/comic/KOCN/"+this._value.sContentsNo+"/"+this._value.sVolumeNo+"/"+nPageNo+".jpg"
}}return sImageUrl
}});
var WinApplication=$Class({$init:function(){this._app=app
},getAutoFlipSpeed:function(){return app.getAutoFlipSpeed()
},getFlipSound:function(){return app.getFlipSound()
},setAutoFlipSpeed:function(nSpeed){app.setAutoFlipSpeed(nSpeed)
},setAutoFlip:function(sOption){app.setAutoFlip(sOption)
},setFlipSound:function(sFlipSound){app.setFlipSound(sFlipSound)
},getFlipEffect:function(){return app.getFlipEffect()
},setFlipEffect:function(sFlipEffect){app.setFlipEffect(sFlipEffect)
},openPurchasePopup:function(sPopupUrl){app.openPurchasePopup(sPopupUrl)
},getRecentPage:function(nContentsNo,nVolumeNo){var nRecentPageNo=app.getRecentPage(nContentsNo,nVolumeNo);
return nRecentPageNo<0?0:nRecentPageNo
},setViewType:function(sViewType){app.setViewType(sViewType)
},getViewType:function(){return app.getViewType()
},getAutoFlip:function(){return app.getAutoFlip()
},viewerClose:function(){app.viewerClose()
},changeWindowSizeByType:function(sChangeType){app.changeWindowSize(sChangeType)
},changeWindowSize:function(nWidth,nHeight){app.changeWindowSize(nWidth.toString(),nHeight.toString())
},moveStartPoint:function(xPoint,yPoint){app.moveStartPoint(xPoint,yPoint)
},movingPoint:function(xPoint,yPoint){app.movingPoint(xPoint,yPoint)
},registerNativeCallback:function(type,funcObj){app.registerNativeCallback(type,funcObj)
},setRecentPage:function(nContentsNo,nVolumeNo,nCurrentPageNo){app.setRecentPage(nContentsNo,nVolumeNo,nCurrentPageNo)
},goNextContents:function(nContentsNo,nVolumeNo,preview){location.href=this._value.viewerDomainUrl+"/comicViewer/macViewer.nhn?contentsNo="+nContentsNo+"&volumeNo="+nVolumeNo+"&preview="+preview
},playSound:function(soundUrl){app.playSound(soundUrl)
},setUserId:function(userId){app.setUserId(userId)
},changeVolume:function(nContentsNo,nVolumeNo){app.changeVolume(nContentsNo,nVolumeNo)
},getWindowSize:function(){var windowSizeString="normal";
try{windowSizeString=app.getWindowSize()
}catch(e){}return windowSizeString
},getVersion:function(){var appVersion="1.0.0";
try{appVersion=app.getVersion()
}catch(e){}return appVersion
},generateImageUrl:function(nPageNo){return $S("ncomicpic://image?index=%d").format(nPageNo)
}}).extend(LocalApplication);
var application=null;
try{application=new WinApplication()
}catch(e){JEagleEyeClient.sendError("app 생성 오류 : "+e.message);
application=new LocalApplication()
};