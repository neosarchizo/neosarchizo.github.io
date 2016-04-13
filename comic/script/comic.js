const LS_CONTENTS_NO = 'LS_CONTENTS_NO'; 
const LS_VOLUME_NO = 'LS_VOLUME_NO'; 

var totalPage = location.href.substring((location.href.indexOf('totalPage=')+10), location.href.length);

var comicInfo;

$.getJSON( "json/comic.json", function( json ) {
	comicInfo = json;
	availableList();
});

totalPage *= 1;

function loadImages(){
	if(isNaN(totalPage) || totalPage < 1)
		return;

	if (window.matchMedia) {
		var mediaQueryList = window.matchMedia('print');
		mediaQueryList.addListener(function(mql) {
			if (mql.matches) {
				console.log('"window.print()" start!');
			} else {
				console.log('"window.print()" complete!');
				var contentsNo = localStorage.getItem(LS_CONTENTS_NO);
				var volumeNo = localStorage.getItem(LS_VOLUME_NO);
				if(comicInfo.volumes[contentsNo].length > volumeNo){
					if (confirm("Move to next?")) 
						changeVolume(contentsNo,volumeNo + 1);
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
			if(print)
				window.print();
		}
	}, 1000);
}

function changeVolume(nContentsNo, nVolumeNo){
	if(typeof comicInfo.volumes[nContentsNo] == 'undefined' || typeof comicInfo.volumes[nContentsNo][nVolumeNo-1] == 'undefined'){
		console.log("changeVolume : It's not available!");
		return;
	}

	localStorage.setItem(LS_CONTENTS_NO,nContentsNo);
	localStorage.setItem(LS_VOLUME_NO,nVolumeNo);

	app.changeVolume(nContentsNo,nVolumeNo);
	go(comicInfo.volumes[nContentsNo][nVolumeNo-1]);
}

function go(totalPage){
	location = 'http://neosarchizo.github.io/comic?totalPage=' + totalPage;
}

function availableList(){
	$.each(comicInfo.contents, function( key, val ) {
		console.log(key + " : " + val);
	});
}