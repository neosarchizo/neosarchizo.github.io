var totalPage = location.href.substring((location.href.indexOf('totalPage=')+10), location.href.length);

totalPage *= 1;

function loadImages(){
	if(isNaN(totalPage) || totalPage < 1)
		return;

	for(var i=0;i<totalPage;i++){
		document.body.innerHTML += '<img src="ncomicpic://image?index=' + (i+1) + '">';
	}

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
	app.changeVolume(nContentsNo,nVolumeNo);
}