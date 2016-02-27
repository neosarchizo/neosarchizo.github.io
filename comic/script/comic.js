var totalPage = location.href.substring((location.href.indexOf('totalPage=')+10), location.href.length);

var comicInfo;

$.getJSON( "json/comic.json", function( json ) {
	comicInfo = json;
});

totalPage *= 1;

function loadImages(){
	if(isNaN(totalPage) || totalPage < 1)
		return;

	for(var i=0;i<totalPage;i++){
		document.body.innerHTML += '<img src="ncomicpic://image?index=' + (i+1) + '" crossOrigin="anonymous">';
	}
	
	scrollToEnd();
}

function scrollToEnd(){
	var sHeight = 0;
	var intervalId = setInterval(function()
	{ 
		if(sHeight != document.body.scrollHeight){
			sHeight = document.body.scrollHeight;
			window.scrollTo(0, document.body.scrollHeight);
		}
		else{
			clearInterval(intervalId);
			console.log('"loadImages" complete!');
		}
	}, 1000);
}

function changeVolume(nContentsNo, nVolumeNo){
	if(typeof comicInfo.volumes[nContentsNo] == 'undefined' || typeof comicInfo.volumes[nContentsNo][nVolumeNo-1] == 'undefined'){
		console.log("changeVolume : It's not available!");
		return;
	}
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