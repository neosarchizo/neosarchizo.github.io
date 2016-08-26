function Comic(title, productId, origianlProductId){
	this.title = title;
	this.productId = productId;
	this.origianlProductId = origianlProductId;
	this.volumes = [];
};

Comic.prototype.getTitle = function(){
	return this.title;
};

Comic.prototype.getProductId = function(){
	return this.productId;	
};

Comic.prototype.getOriginalProductId = function(){
	return this.origianlProductId;	
};

Comic.prototype.getVolumes = function(){
	return this.volumes;	
};

function Volume(no, pageCount){
	this.no = no;
	this.pageCount = pageCount;	
};

Volume.prototype.getNo = function(){
	return this.no;
};

Volume.prototype.getPageCount = function(){
	return this.pageCount;
};

var totalPage=0, opid=0, vno=0;

var query = location.href.split('?');
if(query.length > 1){
	query = query[1].split('&');
	for (var i = 0, len = query.length; i < len; i++) {
		var param = query[i].split('=');
		if(param[0] == 'totalPage'){
			totalPage = param[1] * 1;
		}else if(param[0] == 'opid'){
			opid = param[1] * 1;
		}else if(param[0] == 'vno'){
			vno = param[1] * 1;
		}
	}
}

var comics = [];

$.getJSON( "json/comic.json", function( json ) {
	var comics_ = json.comics;
	for (var i = 0, len = comics_.length; i < len; i++) {
		var comic = new Comic(comics_[i].title, comics_[i].pid, comics_[i].opid);
		loadVolumes(comic, 1);
		comics.push(comic);
	}
	availableList();
});

function downloadImage(url){
	window.URL = window.URL || window.webkitURL;

	var xhr = new XMLHttpRequest(),
	      a = document.createElement('a'), file;

	xhr.open('GET', url, true);
	xhr.responseType = 'blob';
	xhr.onload = function () {
	    file = new Blob([xhr.response], { type : 'application/octet-stream' });
	    a.href = window.URL.createObjectURL(file);
	    a.download = 'test.jpg';
	    a.click();
	};
	xhr.send();
}

function getComic(origianlProductId){
	for (var i = 0, len = comics.length; i < len; i++) {
		if(comics[i].getOriginalProductId() == origianlProductId)
			return comics[i];
	}

	return null;
}

function loadVolumes(comic, page){

	$.getJSON( "http://neosarchizo.cafe24.com/comic/json/", {"productNo": comic.getProductId(), "page" : page}, function( json ) {
		var resultData = json.resultData;
	    
	    if(resultData.length == 0)
	    	return;

	    for (var i = 0, len = resultData.length; i < len; i++) {
			comic.volumes.push(new Volume(resultData[i].volumeNo, resultData[i].pageCount));
		}

		loadVolumes(comic, ++page);
	});
}

function loadImages(){
	if(totalPage == 0)
		return;

	if (window.matchMedia) {
		var mediaQueryList = window.matchMedia('print');
		mediaQueryList.addListener(function(mql) {
			if (mql.matches) {
				console.log('"window.print()" start!');
			} else {
				console.log('"window.print()" complete!');

				var comic = getComic(opid);

				if(comic.volumes.length > vno){
					if (confirm("Move to next?")) 
						changeVolume(opid,vno);
				}
			}
		});
	}

	for(var i=0;i<totalPage;i++){
		document.body.innerHTML += '<img src="ncomicpic://image?index=' + (i+1) + '">';
	}
	
	scrollToEnd(true);
}

function scrollToEnd(print){
	print = typeof print !== 'undefined' ? print : false;

	console.log('"scrollToEnd" start!');

	var sHeight = 0;
	var intervalId = setInterval(function()
	{ 
		if(sHeight != document.body.scrollHeight){
			sHeight = document.body.scrollHeight;
			window.scrollTo(0, document.body.scrollHeight);
		}
		else{
			clearInterval(intervalId);
			console.log('"scrollToEnd" complete!');
			var img = document.querySelector('img');
			console.log("image size : " + img.clientWidth + " x " + img.clientHeight);
			if(print)
				window.print();
		}
	}, 1000);
}

function changeVolume(origianlProductId, volumeNo){

	var comic = getComic(origianlProductId);

	if(comic == null || volumeNo < 0 || comic.volumes.length < volumeNo){
		console.log("changeVolume : It's not available!");
		return;
	}

	var volume = comic.volumes[volumeNo-1];

	app.changeVolume(origianlProductId,volume.getNo());
	go(volume.getPageCount(), origianlProductId, volumeNo);
}

function go(totalPage, origianlProductId, volumeNo){
	location = 'http://neosarchizo.github.io/comic?totalPage=' + totalPage + '&opid=' + origianlProductId + '&vno=' + volumeNo;
}

function availableList(){
	for (var i = 0, len = comics.length; i < len; i++) {
		console.log(comics[i].getTitle() + " : " + comics[i].getOriginalProductId());
	}
}

function nPrint(){
	window.print();
}